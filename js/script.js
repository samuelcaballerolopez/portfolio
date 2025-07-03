// Este archivo está vacío por ahora, pero aquí es donde irá tu código JavaScript
// Por ejemplo, para hacer un menú responsive, animaciones, etc.

// Un ejemplo simple para el scroll suave en los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});