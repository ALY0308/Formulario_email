const form = document.getElementById('contactForm');
form.addEventListener('submit', sendEmail);

const serviceId = 'service_8qd16hl'
const templateId = 'template_0rrema2'
const apiKey = 'Ggx-94IP8mRiLEnfj'

function sendEmail(event) {
    event.preventDefault();
    
    emailjs.init(apiKey);
    
    emailjs.sendForm(serviceId, templateId, form)
        .then(result => {
            Swal.fire("Su mensaje se ha enviado con éxito");
        })
        .catch((error) => {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Hubo un error al enviar el mensaje, inténtelo más tarde"
            });
        });
}