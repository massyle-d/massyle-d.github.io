(() => {
  const internalOrigins = new Set([
    window.location.origin,
    new URL(document.currentScript.dataset.siteUrl).origin,
  ]);

  function configureLink(link) {
    let destination;
    try {
      destination = new URL(link.getAttribute('href'), document.baseURI);
    } catch {
      return;
    }
    if (!['http:', 'https:'].includes(destination.protocol) || internalOrigins.has(destination.origin)) return;
    link.target = '_blank';
    link.relList.add('noopener', 'noreferrer');
  }

  document.querySelectorAll('a[href]').forEach(configureLink);
  // Also cover links inserted after the page has loaded, before navigation.
  document.addEventListener('click', (event) => {
    const link = event.composedPath().find((node) => node instanceof HTMLAnchorElement && node.hasAttribute('href'));
    if (link) configureLink(link);
  }, true);
})();
