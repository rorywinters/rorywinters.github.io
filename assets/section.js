// Lists the lessons for one program (data-program on #lessons) from lessons.json, easiest first.
(function () {
  var box = document.getElementById('lessons');
  var prog = box.getAttribute('data-program');
  fetch('../lessons.json', { cache: 'no-cache' }).then(function (r) { return r.json(); }).then(function (all) {
    var list = all.filter(function (l) { return l.programs && l.programs[prog] !== undefined; })
      .sort(function (a, b) { return a.programs[prog] - b.programs[prog]; });
    if (!list.length) { box.innerHTML = '<p class="empty">No lessons here yet. New lessons will appear on this page.</p>'; return; }
    box.innerHTML = '<div class="cards">' + list.map(function (l) {
      var also = Object.keys(l.programs).filter(function (p) { return p !== prog; });
      return '<a class="card" style="--c:' + (box.getAttribute('data-colour') || '#2f6fdb') + '" href="../' + l.path + '">' +
        '<span class="num">Lesson ' + l.programs[prog] + '</span><b>' + l.title + '</b><span>' + (l.blurb || '') +
        (also.length ? ' <i>Also in ' + also.join(', ') + '.</i>' : '') + (l.video ? ' ▶ Video' : '') + '</span></a>';
    }).join('') + '</div>';
  }).catch(function () { box.innerHTML = '<p class="empty">Could not load the lesson list.</p>'; });
})();
