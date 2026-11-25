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
    // Grouped page: data-categories lists the group names in order; each lesson's categories[prog] picks its group.
    var order = (box.getAttribute('data-categories') || '').split('|').filter(Boolean);
    if (order.length) {
      var groups = {};
      list.forEach(function (l) { var c = (l.categories && l.categories[prog]) || 'Other'; (groups[c] = groups[c] || []).push(l); });
      if (groups.Other && order.indexOf('Other') < 0) order.push('Other');
      order = order.filter(function (c) { return groups[c]; });
      function slug(c) { return 'cat-' + c.toLowerCase().replace(/[^a-z0-9]+/g, '-'); }
      box.innerHTML = key + '<nav class="catnav">' + order.map(function (c) { return '<a href="#' + slug(c) + '">' + c + ' <span>' + groups[c].length + '</span></a>'; }).join('') + '</nav>' +
        order.map(function (c) { return '<h2 class="cat" id="' + slug(c) + '">' + c + '</h2><div class="cards">' + groups[c].map(card).join('') + '</div>'; }).join('');
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
