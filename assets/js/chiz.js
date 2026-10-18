(() => {
  const cheese = document.getElementById('chiz-surprise');
  if (!cheese) return;

  const secret = 'CHIZ';
  let progress = 0;
  let lastKey = 0;
  let hideTimer;

  function hide() {
    clearTimeout(hideTimer);
    cheese.hidden = true;
    cheese.textContent = '';
  }

  function reveal() {
    clearTimeout(hideTimer);
    cheese.hidden = false;
    cheese.textContent = '🧀 CHIZ !';
    hideTimer = setTimeout(hide, 4500);
  }

  document.addEventListener('keydown', (event) => {
    if (event.defaultPrevented || event.isComposing || event.repeat) return;
    if (event.composedPath().some((node) => node instanceof HTMLElement &&
      (node.isContentEditable || node.matches('input, textarea, select')))) return;

    if (event.key === 'Escape') {
      progress = 0;
      hide();
      return;
    }
    if (event.ctrlKey || event.altKey || event.metaKey || event.key.length !== 1) return;

    const key = event.key.toUpperCase();
    const now = performance.now();
    if (now - lastKey > 2500) progress = 0;
    lastKey = now;
    progress = key === secret[progress] ? progress + 1 : key === secret[0] ? 1 : 0;
    if (progress === secret.length) {
      progress = 0;
      reveal();
    }
  });

  // A quiet second entrance for visitors using a phone.
  function checkHash() {
    if (window.location.hash.toLowerCase() === '#chiz') reveal();
  }
  window.addEventListener('hashchange', checkHash);
  checkHash();
})();
