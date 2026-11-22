// Shared behaviour for lesson pages: one part open at a time, remembered checkpoint ticks, screenshots.
(function () {
  try { document.querySelectorAll('img[data-shot]').forEach(function (im) { var s = window.SHOTS && window.SHOTS[im.getAttribute('data-shot')]; if (s) im.src = s; }); } catch (e) {}
  var KEY = 'ticks-' + location.pathname;
  var parts = Array.prototype.slice.call(document.querySelectorAll('details.part'));
  var boxes = Array.prototype.slice.call(document.querySelectorAll('.check input'));
  var saved = {};
  try { saved = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (e) { saved = {}; }
  boxes.forEach(function (b, i) { b.checked = !!saved[i]; });
  function update() {
    parts.forEach(function (p) {
      var bx = p.querySelectorAll('.check input'), n = 0;
      for (var i = 0; i < bx.length; i++) { if (bx[i].checked) n++; }
      var tag = p.querySelector('summary .done');
      if (!tag || !bx.length) return;
      tag.textContent = n === bx.length ? 'Checkpoint done ✓' : n + ' of ' + bx.length + ' ticked';
      tag.className = 'done' + (n === bx.length ? ' all' : '');
    });
  }
  boxes.forEach(function (b, i) {
    b.addEventListener('change', function () {
      saved[i] = b.checked;
      try { localStorage.setItem(KEY, JSON.stringify(saved)); } catch (e) {}
      update();
    });
  });
  parts.forEach(function (p) {
    // Remember when a student clicks a part's heading, so only those opens scroll
    // (the brief and #links do their own scrolling).
    var sum = p.querySelector('summary');
    if (sum) sum.addEventListener('click', function () { p._userOpen = !p.open; });
    p.addEventListener('toggle', function () {
      if (p.open && !document.body.classList.contains('all-open')) {
        parts.forEach(function (o) { if (o !== p) o.open = false; });
      }
      // When a part above closes, the page shifts up and you land at the bottom of the
      // new part. Bring the new part's heading back to the top of the screen.
      if (p.open && p._userOpen) {
        p._userOpen = false;
        requestAnimationFrame(function () { requestAnimationFrame(function () {
          var top = p.getBoundingClientRect().top;
          if (top < 0 || top > window.innerHeight * 0.4) p.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }); });
      }
    });
  });
  function openFromHash() {
    var t = location.hash && document.querySelector(location.hash);
    if (t && t.classList.contains('part')) { document.body.classList.remove('all-open'); t.open = true; t.scrollIntoView(); }
  }
  window.addEventListener('hashchange', openFromHash);
  openFromHash();
  var oa = document.getElementById('openAll'), ca = document.getElementById('closeAll'), ct = document.getElementById('clearTicks');
  if (oa) oa.addEventListener('click', function () { document.body.classList.add('all-open'); parts.forEach(function (p) { p.removeAttribute('name'); p.open = true; }); });
  if (ca) ca.addEventListener('click', function () { document.body.classList.remove('all-open'); parts.forEach(function (p) { p.open = false; p.setAttribute('name', 'parts'); }); });
  if (ct) ct.addEventListener('click', function () { saved = {}; boxes.forEach(function (b) { b.checked = false; }); try { localStorage.removeItem(KEY); } catch (e) {} update(); });
  update();

  // Clickable lesson brief + Back to the brief button live in brief.js (shared with pages that don't use this file).
  var bs = document.createElement('script');
  bs.src = (document.currentScript && document.currentScript.src || '').replace(/lesson\.js(\?.*)?$/, 'brief.js$1');
  if (bs.src) document.body.appendChild(bs);
})();
