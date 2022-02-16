
const target = document.getElementById('menu');

target.addEventListener('click', () => {
  target.classList.toggle('open')
  const nav = document.getElementById('menu-nav');
  nav.classList.toggle('in');
});