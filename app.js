document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulación de envío de datos
    const success = Math.random() > 0.5; // Simulación de éxito o fracaso aleatorio

    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popupMessage');
    const closePopup = document.getElementById('closePopup');

    if (success) {
        popupMessage.textContent = 'Su mensaje ha sido enviado con éxito.';
    } else {
        popupMessage.textContent = 'Hubo un problema con el envío del mensaje.';
    }

    popup.style.display = 'block';

    closePopup.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    console.log('Nombre:', name);
    console.log('Correo Electrónico:', email);
    console.log('Mensaje:', message);

    // Aquí puedes añadir lógica para enviar estos datos a un servidor
});
