// Lesson brief: click anywhere on a box (bubble) to jump to its section,
// or anywhere else on a coloured band to jump to that part. A floating
// "Back to the brief" button returns to the box you clicked.
(function () {
  var flow = document.querySelector('.flow');
  if (!flow || flow.dataset.clickable) return;
  flow.dataset.clickable = '1';
  var backBtn = document.createElement('button');
  backBtn.type = 'button';
  backBtn.className = 'backbrief';
  backBtn.textContent = '↑ Back to the brief';
  document.body.appendChild(backBtn);
  var cameFrom = null;
  // Codes look like 2B, 1.1, 2.1–2.2 (first number used), 10, or B (bonus).
  function codeOf(text) {
    var m = /^\s*(\d+(?:\.\d+)?[A-Z]?|[A-Z])(?=[\s·–-]|$)/.exec(text || '');
    return m ? m[1] : null;
  }
  function findSection(part, code) {
    if (!part || !code) return null;
    var hs = part.querySelectorAll('h3, h4');
    for (var i = 0; i < hs.length; i++) { if (codeOf(hs[i].textContent) === code) return hs[i]; }
    // Headings that cover a range, e.g. "2B to 2E" or "2B–2E", also match 2C and 2D.
    var m = /^(\d+)([A-Z])$/.exec(code);
    if (m) {
      for (var j = 0; j < hs.length; j++) {
        var r = /^\s*(\d+)([A-Z])\s*(?:to|–|-)\s*(\d+)([A-Z])\b/.exec(hs[j].textContent);
        if (r && r[1] === m[1] && r[3] === m[1] && m[2] >= r[2] && m[2] <= r[4]) return hs[j];
      }
    }
    return null;
  }
  function flash(el) { el.classList.remove('flash'); void el.offsetWidth; el.classList.add('flash'); }
  function goTo(part, target, from) {
    if (!part) return;
    document.body.classList.remove('all-open');
    part.open = true;
    cameFrom = from;
    (target || part).scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (target) flash(target);
    backBtn.classList.add('show');
  }
  flow.querySelectorAll('.band').forEach(function (band) {
    var link = band.querySelector('h4 a');
    var part = link && document.querySelector(link.getAttribute('href'));
    if (!part) return;
    band.classList.add('clickable');
    band.addEventListener('click', function (e) {
      if (e.target.closest('a') && !e.target.closest('h4')) return; // outside links (e.g. a website) still work
      e.preventDefault();
      var bubble = e.target.closest('.bubble');
      var code = bubble && codeOf((bubble.querySelector('b') || {}).textContent);
      goTo(part, findSection(part, code), bubble || band);
    });
  });
  backBtn.addEventListener('click', function () {
    var el = cameFrom || flow;
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    flash(el);
    backBtn.classList.remove('show');
  });
  // Hide the button once you have scrolled back up to the brief yourself.
  var head = document.querySelector('.brief h2') || flow;
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (ents) {
      ents.forEach(function (en) { if (en.isIntersecting) backBtn.classList.remove('show'); });
    }, { threshold: [1] }).observe(head);
  }
})();
