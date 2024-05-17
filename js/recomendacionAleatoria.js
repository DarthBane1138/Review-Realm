window.onload = function() {
    // Cargar recomendaciones desde el archivo JSON
    $.getJSON('recomendaciones.json', function(data) {
        // Obtener un índice aleatorio dentro del rango de la longitud del array de recomendaciones
        var randomIndex = Math.floor(Math.random() * data.length);
        // Obtener la recomendación aleatoria
        var recomendacion = data[randomIndex];
  
        // Actualizar el título del juego
        $('#titulo_juego').text(recomendacion.titulo);
        // Actualizar la imagen del juego
        $('#imagen_juego').attr('src', recomendacion.imagen);
        
        // Vaciar la lista de detalles del juego
        $('#detalles-juego').empty();
        // Agregar cada detalle del juego a la lista
        $.each(recomendacion.detalles, function(_, detalle) {
            $('#detalles-juego').append('<li>' + detalle + '</li>');
        });
    });
  };