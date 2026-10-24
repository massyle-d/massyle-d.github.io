(() => {
  document.querySelectorAll('.heritage-gallery').forEach((gallery) => {
    const track = gallery.querySelector('.heritage-gallery-track');
    const slides = [...track.querySelectorAll('.heritage-gallery-slide')];
    const dots = [...gallery.querySelectorAll('[data-photo-index]')];
    const previous = gallery.querySelector('[data-photo-previous]');
    const next = gallery.querySelector('[data-photo-next]');
    const count = gallery.querySelector('.heritage-gallery-count');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let current = 0;
    let trackWidth = track.clientWidth;

    function update() {
      // A resize changes the slide width before the observer can realign it.
      if (!trackWidth || track.clientWidth !== trackWidth) return;
      const index = Math.max(0, Math.min(slides.length - 1, Math.round(track.scrollLeft / trackWidth)));
      if (index !== current) {
        current = index;
        count.textContent = `${current + 1} / ${slides.length}`;
      }
      previous.disabled = current === 0;
      next.disabled = current === slides.length - 1;
      dots.forEach((dot, position) => {
        if (position === current) dot.setAttribute('aria-current', 'true');
        else dot.removeAttribute('aria-current');
      });
    }

    function goTo(index) {
      const target = Math.max(0, Math.min(slides.length - 1, index));
      track.scrollTo({left: target * track.clientWidth, behavior: reducedMotion.matches ? 'instant' : 'smooth'});
    }

    previous.addEventListener('click', () => goTo(current - 1));
    next.addEventListener('click', () => goTo(current + 1));
    dots.forEach((dot, index) => dot.addEventListener('click', () => goTo(index)));
    track.addEventListener('scroll', update, {passive: true});
    track.addEventListener('keydown', (event) => {
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
      const targets = {ArrowLeft: current - 1, ArrowRight: current + 1, Home: 0, End: slides.length - 1};
      if (!(event.key in targets)) return;
      event.preventDefault();
      goTo(targets[event.key]);
    });
    const resize = new ResizeObserver(() => {
      trackWidth = track.clientWidth;
      track.scrollTo({left: current * trackWidth, behavior: 'instant'});
      update();
    });
    resize.observe(track);
    gallery.querySelector('.heritage-gallery-footer').hidden = false;
    update();
  });
})();
