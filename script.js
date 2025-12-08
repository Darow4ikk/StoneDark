window.addEventListener('DOMContentLoaded', () => {
  // запускаем анимацию после загрузки
  const title = document.querySelector('.hero-title');
  const subtitle = document.querySelector('.hero-subtitle');
  const btn = document.querySelector('.hero-btn');

  // чуть задержки чтобы было эффектнее
  setTimeout(() => {
    title.style.opacity = '1';
    title.style.transform = 'scale(1)';
  }, 100);

  setTimeout(() => {
    subtitle.style.opacity = '1';
    subtitle.style.transform = 'scale(1)';
  }, 600);

  setTimeout(() => {
    btn.style.opacity = '1';
    btn.style.transform = 'scale(1)';
    btn.classList.add('glow');
  }, 1100);
});
