function enviarMensaje() {
  // Obtener los valores de los campos de entrada
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var email = document.getElementById("email").value;
  var asunto = document.getElementById("asunto").value;
  var mensaje = document.getElementById("mensaje").value;
  
  // Crear el contenido del mensaje
  var contenidoMensaje = "Nombre: " + nombre + "<br>";
  contenidoMensaje += "Apellido: " + apellido + "<br>";
  contenidoMensaje += "Email: " + email + "<br>";
  contenidoMensaje += "Asunto: " + asunto + "<br>";
  contenidoMensaje += "Mensaje: " + mensaje;
  
  // Mostrar el mensaje en el control de mensajes
  var controlMensajes = document.getElementById("controlMensajes");
  controlMensajes.innerHTML = contenidoMensaje;
  
  // Limpiar el formulario
  document.getElementById("formulario").reset();
}