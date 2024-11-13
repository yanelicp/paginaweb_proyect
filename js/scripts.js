//Cargar el footer
fetch('../partials/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer-placeholder").innerHTML = data;
    })
    .catch(error => console.error('Error al cargar el footer:', error));

// Función para cargar un componente en un elemento específico
function loadComponent(url, elementId) {

    fetch(url)
      .then(response => response.text())
      .then(data => {
        document.getElementById(elementId).innerHTML = data;
      })
      .catch(error => console.error('Error al cargar el componente:', error));
  }
  
  // Llamadas a la función para cargar el navbar y footer
  document.addEventListener("DOMContentLoaded", () => {
    loadComponent('../components/navbar.html', 'navbar-component' , () => {
      // Evento para alternar el menú de hamburguesa después de cargar el navbar
      const hamburgerIcon = document.querySelector(".hamburger");
      if (hamburgerIcon) {
        hamburgerIcon.addEventListener("click", toggleMenu);
      }});
    loadComponent('../components/footer.html', 'footer-component');
  });

  // Función para alternar el menú de hamburguesa en dispositivos móviles
function toggleMenu() {
  const navMenu = document.getElementById('nav-menu');
  if (navMenu) { // Asegura que el elemento exista antes de manipularlo
    navMenu.classList.toggle('open');
  }
}

// Evento para delegar el click en el ícono de hamburguesa, después de cargar el componente del navbar
/*document.addEventListener("click", (event) => {
  if (event.target.classList.contains("hamburger")) {
    toggleMenu();
  }
});*/