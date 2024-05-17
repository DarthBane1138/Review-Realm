// Validaciones para Registro
var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9_\-]+\.[a-zA-Z0-9\-\.]+$/;
var exprpass = /^(?=.*[a-zA-Z])(?=.*\d{2,})(?=.*[!./¡¿?])[a-zA-Z\d!./¡¿?]{10,}$/;

      // Para limitar los caracteres del nombre de usuario
      $(document).ready(function(){
        $("#itUserName").on("input", function(){
          var nombreUsuario = $(this).val();
          if (nombreUsuario.length > 20){
            $(this).val(nombreUsuario.substr(0,20));
          }
        });
      });

      // Verificador que no permite seleccionar más de 3 casillas de género
      $(document).ready(function(){
        $('input[name="genero"]').change(function(){ // Se seleccionan todos los elementos input con nombre name igual a a genero, adjunta controlador de eventos change para verificar cada vez que uno de estos cambie
          var maxAllowed = 3;
          var checkedCount = $('input[name="genero"]:checked').length;

          if(checkedCount > maxAllowed) {
            $(this).prop('checked', false);
            alert('Solo puedes seleccionar un máximo de 3 géneros');
          }
        });
      });

      // Validaciones de formulario
      $(document).ready(function(){
        $("#bEnviar").click(function(){
          event.preventDefault(); 
          // Validaciones de nombre de usuario
          var nombreUsuario = $("#itUserName").val();

          // Validación para nombre de usuario en caso de que esté vacío
          if (nombreUsuario == ""){
            $("#mensajeUserName").text("Ingrese un nombre de usuario válido").fadeIn();
            return false;
          // Validación para nombre de usuario en caso de contanga menos de 5 caracteres
          } else if (nombreUsuario.length < 5){
            $("#mensajeUserName").text("El nombre de usuario debe tener al menos 5 caracteres").fadeIn();
            return false;
          } else {
            $("#mensajeUserName").fadeOut();
            usuarioBool = true; // Se establece a true si la validación pasa
          }

          // Validaciones de contraseña
          var contrasena = $("#itContrasena").val();
          var confContrasena = $("#itConstrasenaConf").val();

          // Validación contraseña en caso de que esté vacía
          if(contrasena === ""){
            $("#mensajeContrasena").text("La contraseña no puede estar vacía").fadeIn();
            return false;
          // Validación contraseña en caso de sea menor a 10 caracteres
          } else if (contrasena.length < 10){
            $("#mensajeContrasena").text("La contraseña debe tener al menos 10 caracteres").fadeIn();
            return false;
          // Validación contraseña en caso de no cumpla con el formato
          } else if (!exprpass.test(contrasena)){
            $("#mensajeContrasena").text("La contraseña debe contener al menos una mayúscula, un número y un carácter especial").fadeIn();
            return false;
          } else {
            $("#mensajeContrasena").fadeOut();
            if (confContrasena !== contrasena){
              $("#mensajeContrasenaConf").text("La confirmación de la contraseña debe ser igual a la contraseña").fadeIn();
              return false;
            } else {
              $("#mensajeContrasenaConf").fadeOut();
              contrasenaBool = true; // Se establece a true si la validación pasa
            }
          }

          // Validaciones de correo electrónico
          var correo = $("#itEmail").val();
          var correoBool = false; // Booleano para validar el correo electrónico

          // Validación de correo en caso de que la casilla esté vacía
          if(correo === ""){
            $("#mensajeEmail").text("El correo electrónico no puede estar vacío").fadeIn();
            return false;
          // Validación de correo en caso de no se cumpla con el formato
          } else if (!expr.test(correo)){
            $("#mensajeEmail").text("El formato del correo electrónico es incorrecto").fadeIn();
            return false;
          } else {
            $("#mensajeEmail").fadeOut();
            correoBool = true; // Se establece a true si la validación pasa
          }

          // Validaciones de casillas marcadas
          var maxAllowed = 3;
          var minAllowed = 1;
          var checkBoxBool = false; // Booleano para validar las casillas marcadas

          // Validación de checkbox para que el usuario deba seleccionar a lo menos una casilla
          var checkedCount = $('input[name="genero"]:checked').length;
          if(checkedCount < minAllowed){
            $("#mensajeCheckBox").text("Debe seleccionar al menos una casilla").fadeIn();
            return false;
          } else {
            $("#mensajeCheckBox").fadeOut();
            checkBoxBool = true; // Se establece a true si la validación pasa
          }

          Swal.fire({
            position: "centered",
            icon: "success",
            title: "Felicidades, has sido registrado",
            showConfirmButton: false,
            timer: 3000
          });

        // Evitar que el formulario se envíe inmediatamente después de hacer clic en el botón
        setTimeout(function(){
        $("form").submit(); // Envía el formulario después de 3 segundos
        }, 3000);

          
        });
      });