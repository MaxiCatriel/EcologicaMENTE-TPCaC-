
document.addEventListener('DOMContentLoaded', function () {
const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function (event) {
        event.preventDefault();

       
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        if (nombre === '' || email === '' || mensaje === '') {
            alert('Por favor, complete todos los campos.');
            return;
        }

       
        alert('Formulario enviado correctamente. El correo electrónico no se ha enviado (simulado).');

        // Limpieza del formulario
        form.reset();
    });
});
