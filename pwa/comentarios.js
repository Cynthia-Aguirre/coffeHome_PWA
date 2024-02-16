// async function cargarComentarios() {
//   try {
//     const response = await fetch('http://localhost/practica_pwa/');
//     const data = await response.json();
//     const comentarios = data.comentarios;
//     console.log(comentarios);
//   } catch (error) {
//     console.error(error);
//   }
// }



formularioLocalStorage = document.getElementById('commentForm');

formularioLocalStorage.addEventListener('submit', function(event) {
  event.preventDefault();

  var nombre = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var mensaje = document.getElementById('comment').value;

  var formulario = {
    nombre: nombre,
    email: email,
    mensaje: mensaje
  };

  localStorage.setItem('formulario', JSON.stringify(formulario));

  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('comment').value = '';
});