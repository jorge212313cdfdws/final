// animations.js

document.addEventListener('DOMContentLoaded', () => {
  const parallaxContent = document.getElementById('parallax-content');

  // Función para verificar la visibilidad de la sección parallax
  const checkParallaxVisibility = () => {
    const rect = parallaxContent.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Si la sección está fuera del viewport, ocultar el texto
    if (rect.top < 0 || rect.bottom < 0.5 * windowHeight) {
      parallaxContent.classList.add('hidden');
    } else {
      parallaxContent.classList.remove('hidden');
    }
  };

  // Escucha el evento de desplazamiento
  window.addEventListener('scroll', checkParallaxVisibility);

  // Llama a la función al cargar la página por si la sección ya está visible
  checkParallaxVisibility();
});
