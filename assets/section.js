// Lists the lessons for one program (data-program on #lessons) from lessons.json, easiest first.
(function () {
  var box = document.getElementById('lessons');
  var prog = box.getAttribute('data-program');
  fetch('../lessons.json', { cache: 'no-cache' }).then(function (r) { return r.json(); }).then(function (all) {
    var list = all.filter(function (l) { return l.programs && l.programs[prog] !== undefined; })
      .sort(function (a, b) { return a.programs[prog] - b.programs[prog]; });
    if (!list.length) { box.innerHTML = '<p class="empty">No lessons here yet. New lessons will appear on this page.</p>'; return; }
    var colour = box.getAttribute('data-colour') || '#2f6fdb';
    function card(l) {
      var also = Object.keys(l.programs).filter(function (p) { return p !== prog; });
      return '<a class="card" style="--c:' + colour + '" href="../' + l.path + '">' +
        '<span class="num">Lesson ' + l.programs[prog] + (l.status === 'approved' ? ' <em class="status ok">✓ Approved</em>' : ' <em class="status wait">◷ Waiting for approval</em>') + '</span><b>' + l.title + '</b><span>' + (l.blurb || '') +
        (also.length ? ' <i>Also in ' + also.join(', ') + '.</i>' : '') + (l.video ? ' ▶ Video' : '') + '</span></a>';
    }
    var key = '<p class="statuskey"><em class="status ok">✓ Approved</em> tried in class, bugs worked through · <em class="status wait">◷ Waiting for approval</em> not tried in class yet</p>';
    // Grouped page: data-categories lists "Name::short description" entries in order, split by |.
    // The page shows one card per group (like the home page); clicking a card opens that group's lessons (#cat-...).
    var order = (box.getAttribute('data-categories') || '').split('|').filter(Boolean).map(function (c) { var x = c.split('::'); return { name: x[0], desc: x[1] || '' }; });
    if (order.length) {
      var groups = {};
      list.forEach(function (l) { var c = (l.categories && l.categories[prog]) || 'Other'; (groups[c] = groups[c] || []).push(l); });
      if (groups.Other && !order.some(function (o) { return o.name === 'Other'; })) order.push({ name: 'Other', desc: '' });
      order = order.filter(function (o) { return groups[o.name]; });
      var cols = ['var(--p1)', 'var(--p2)', 'var(--p3)', 'var(--p5)', 'var(--p7)', 'var(--p6)', 'var(--p4)', '#5b6475'];
      function slug(c) { return 'cat-' + c.toLowerCase().replace(/[^a-z0-9]+/g, '-'); }
      function range(g) { var a = g[0].programs[prog], z = g[g.length - 1].programs[prog]; return a === z ? 'Lesson ' + a : 'Lessons ' + a + '–' + z; }
      function show() {
        var h = location.hash.slice(1), hit = null;
        order.forEach(function (o, i) { if (slug(o.name) === h) hit = i; });
        if (hit === null) {
          box.innerHTML = '<div class="cards">' + order.map(function (o, i) {
            var g = groups[o.name];
            return '<a class="card" style="--c:' + cols[i % cols.length] + '" href="#' + slug(o.name) + '"><span class="num">' + g.length + (g.length === 1 ? ' lesson' : ' lessons') + ' · ' + range(g) + '</span><b>' + o.name + '</b><span>' + o.desc + '</span></a>';
          }).join('') + '</div>';
        } else {
          var o = order[hit];
          box.innerHTML = '<p class="back"><a href="#">← All ' + prog + ' groups</a></p><h2 class="cat" style="border-color:' + cols[hit % cols.length] + '">' + o.name + '</h2>' + (o.desc ? '<p class="sub">' + o.desc + '</p>' : '') + key + '<div class="cards">' + groups[o.name].map(card).join('') + '</div>';
          window.scrollTo(0, 0);
        }
      }
      window.addEventListener('hashchange', show);
      show();
      return;
    }
    box.innerHTML = key + '<div class="cards">' + list.map(function (l) {
      var also = Object.keys(l.programs).filter(function (p) { return p !== prog; });
      return '<a class="card" style="--c:' + (box.getAttribute('data-colour') || '#2f6fdb') + '" href="../' + l.path + '">' +
        '<span class="num">Lesson ' + l.programs[prog] + (l.status === 'approved' ? ' <em class="status ok">✓ Approved</em>' : ' <em class="status wait">◷ Waiting for approval</em>') + '</span><b>' + l.title + '</b><span>' + (l.blurb || '') +
        (also.length ? ' <i>Also in ' + also.join(', ') + '.</i>' : '') + (l.video ? ' ▶ Video' : '') + '</span></a>';
    }).join('') + '</div>';
  }).catch(function () { box.innerHTML = '<p class="empty">Could not load the lesson list.</p>'; });
})();
