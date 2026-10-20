(() => {
  const map = document.querySelector('.heritage-map');
  if (!map) return;
  const controls = map.querySelector('.heritage-map-controls');
  controls.hidden = false;
  controls.addEventListener('click', (event) => {
    const choice = event.target.closest('button[data-map-choice]');
    if (!choice) return;
    const view = choice.dataset.mapChoice;
    map.dataset.mapView = view;
    controls.querySelectorAll('button').forEach((button) => {
      button.setAttribute('aria-pressed', String(button === choice));
    });
    map.querySelectorAll('[data-map-caption]').forEach((caption) => {
      caption.hidden = caption.dataset.mapCaption !== view;
    });
  });
})();
