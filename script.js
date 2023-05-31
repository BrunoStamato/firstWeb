//agregamos una alerta al clickear el botón
const miBoton = document.getElementById('miBoton');
miBoton.addEventListener("click", function() {
    alert('Hola, esta es una alerta desde JavaScript!');
});
const form = document.getElementById('myForm');
//este evento evita que se envíe con el campo vacío
form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});
//este evento valida que lo ingresado sea un mail
function validateEmail(email) {
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
  }
  //este evento controla que el correo ingresado sea válido
  function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
  //si el mail ingresado no es válido, se muestra la primera alerta. Si es válido, se muestra la segunda.
    if (!validateEmail(email)) {
      alert('Por favor ingrese un correo electrónico válido.');
    } else {
      alert('Correo electrónico enviado correctamente.');
    }
  }
  //toggle botón Menú
  document.querySelector("button.button-menu-toggle").addEventListener("click", function() {
  document.querySelector(".nav-links").classList.toggle("nav-links-responsive")});