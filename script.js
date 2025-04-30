AOS.init({
    duration: 1000, // Duración de la animación en milisegundos
    once: true, // Ejecutar la animación solo una vez
  });

  // Menú hamburguesa
const menuToggle = document.getElementById('menuToggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
  navbar.style.display = navbar.style.display === 'flex' ? 'none' : 'flex';
});