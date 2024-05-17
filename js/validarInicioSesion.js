var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9_\-]+\.[a-zA-Z0-9\-\.]+$/;
var exprpass = /^(?=.*[a-zA-Z])(?=.*\d{2,})(?=.*[!./¡¿?])[a-zA-Z\d!./¡¿?]{10,}$/;

$(document).ready(function(){
    $("#bEnviar").click(function(event){
      var correo = $("#itMail").val();
      var contrasena = $("#itContrasena").val();
  
      // Función para manejar la validación y la redirección
      function validarYRedireccionar() {
        if(correo === ""){
          $("#mensajeModalBody").text("El correo no puede estar vacío");
          $('#modalMensaje').modal('show');
        }else if (!expr.test(correo)){
          $("#mensajeModalBody").text("El correo no cumple con el formato requerido");
          $('#modalMensaje').modal('show');
        }else if(contrasena === ""){
          $("#mensajeModalBody").text("La contraseña no puede estar vacía");
          $('#modalMensaje').modal('show');
        }else if (!exprpass.test(contrasena)){
          $("#mensajeModalBody").text("El formato de la contraseña no es válido");
          $('#modalMensaje').modal('show');
        }else{
          $("#botonCerrar").fadeOut();
          $("#registrarse").fadeOut();
          $(".modal-content").css("background-image", "url('img/VaultBoy.jpg')")
          $("#exampleModalLabel").text("Iniciando Sesión");
          $("#mensajeModalBody").text("Todo está correcto. Enviando formulario...");
          $('#modalMensaje').modal('show');
  
          // Redirección con un retraso después de mostrar el mensaje modal
          setTimeout(function(){
            window.location.href = "07-Perfil.html";
          }, 5000); // 2000 milisegundos = 2 segundos
        }
      }
  
      // Prevenir la acción por defecto del botón de envío
      event.preventDefault();
  
      // Llamar a la función de validación y redirección
      validarYRedireccionar();
    });
  });