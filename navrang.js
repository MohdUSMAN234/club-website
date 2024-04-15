document.addEventListener('DOMContentLoaded', function() {
  const cursor = document.querySelector('.neon-cursor');
  const trail = document.querySelector('.neon-trail');

  document.addEventListener('mousemove', function(e) {
      const {clientX: x, clientY: y} = e;
      cursor.style.left = x + 'px';
      cursor.style.top = y + 'px';
  });

  document.querySelectorAll('a, button, input, textarea').forEach(element => {
      element.addEventListener('mouseenter', () => {
          cursor.classList.add('is-active');
      });
      element.addEventListener('mouseleave', () => {
          cursor.classList.remove('is-active');
      });
  });
});
