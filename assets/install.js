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
      showIOSSteps();
    } else {
      note.textContent = 'In Chrome: tap the ⋮ menu (top right), then "Add to Home screen".';
    }
  });

  // Apple doesn't let a web page add itself to the home screen, so iPhones and iPads get a clear 3-step guide instead.
  if (isIOS) {
    btn.textContent = /iPad/.test(ua) || !/iPhone|iPod/.test(ua) ? '📱 Add to your iPad' : '📱 Add to your iPhone';
    note.textContent = 'Tap for the 3 quick steps.';
  }
  function showIOSSteps() {
    if (document.getElementById('ios-steps')) { document.getElementById('ios-steps').style.display = 'flex'; return; }
    const share = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-5px"><path d="M12 3v12"/><path d="M8 7l4-4 4 4"/><path d="M5 11v9h14v-9"/></svg>';
    const plus = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="vertical-align:-5px"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M12 8v8M8 12h8"/></svg>';
    const d = document.createElement('div');
    d.id = 'ios-steps';
    d.setAttribute('role', 'dialog');
    d.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.55);display:flex;align-items:flex-end;justify-content:center;z-index:9999';
    d.innerHTML =
      '<div style="background:var(--card,#fff);color:inherit;max-width:480px;width:100%;border-radius:16px 16px 0 0;padding:20px 20px 28px;font-size:17px;line-height:1.5">' +
      '<b style="font-size:19px">Add WIS Lessons to your home screen</b>' +
      '<ol style="padding-left:22px;margin:12px 0">' +
      '<li style="margin-bottom:10px">Tap the <b>Share</b> button ' + share + ' in Safari. On newer iPhones it\'s inside the <b>⋯</b> button at the bottom right. In Chrome it\'s at the top, beside the address bar.</li>' +
      '<li style="margin-bottom:10px">Scroll down the list and tap <b>Add to Home Screen</b> ' + plus + '.</li>' +
      '<li>If you see <b>Open as Web App</b>, leave it on. Then tap <b>Add</b> at the top right.</li>' +
      '</ol>' +
      '<p style="margin:0 0 14px;color:var(--quiet,#666);font-size:15px">The WIS Lessons icon then shows up on your home screen like an app.</p>' +
      '<button type="button" style="font:inherit;font-weight:600;color:#fff;background:var(--p1,#2f6fdb);border:0;border-radius:8px;padding:10px 18px;cursor:pointer;width:100%">Got it</button>' +
      '</div>';
    d.addEventListener('click', e => { if (e.target === d || e.target.tagName === 'BUTTON') d.style.display = 'none'; });
    document.body.appendChild(d);
  }

  window.addEventListener('appinstalled', () => { box.hidden = true; });

  // Phones that never fire the install event (iPhone, other browsers) still get the button, with written steps.
  if (isIOS || isAndroid) setTimeout(() => { if (!promptEvent) box.hidden = false; }, 1500);
})();
