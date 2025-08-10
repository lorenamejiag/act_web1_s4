const saludar = function(nombre = "Invitado") {
  return `¡Hola, ${nombre}!`;
};
console.log(saludar("Carla"));  // si ingresa sin nombre dirá ¡Hola, invitado!

