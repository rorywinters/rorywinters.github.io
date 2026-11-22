// "Add to your phone" button for the lesson site home page.
(function () {
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js').catch(() => {});

  const box = document.getElementById('install-box');
  if (!box) return;
  const btn = box.querySelector('button');
  const note = box.querySelector('.install-note');

  const installed = window.matchMedia('(display-mode: standalone)').matches || navigator.standalone;
  if (installed) return;                       // already opened from the home-screen icon

  const ua = navigator.userAgent;
  const isIOS = /iPhone|iPad|iPod/.test(ua) || (ua.includes('Mac') && 'ontouchend' in document);
  const isAndroid = /Android/.test(ua);
  let promptEvent = null;

  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    promptEvent = e;
    note.textContent = 'Tap the button, then tap Install.';
    box.hidden = false;
  });

  btn.addEventListener('click', async () => {
    if (promptEvent) {
      promptEvent.prompt();
      const { outcome } = await promptEvent.userChoice;
      promptEvent = null;
      if (outcome === 'accepted') { btn.hidden = true; note.textContent = 'Done! Look for the WIS Lessons icon on your home screen.'; }
    } else if (isIOS) {
      note.textContent = 'On iPhone: tap the Share button (square with an arrow), then "Add to Home Screen".';
    } else {
      note.textContent = 'In Chrome: tap the ⋮ menu (top right), then "Add to Home screen".';
    }
  });

  window.addEventListener('appinstalled', () => { box.hidden = true; });

  // Phones that never fire the install event (iPhone, other browsers) still get the button, with written steps.
  if (isIOS || isAndroid) setTimeout(() => { if (!promptEvent) box.hidden = false; }, 1500);
})();
