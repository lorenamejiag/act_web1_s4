function retrasarMensaje(mensaje, tiempo) {
  setTimeout(function() {
    console.log(mensaje);
  }, tiempo);
}

retrasarMensaje("Hola", 2000); // Hola (tras 2 segundos)
