function operacion(a, b, callback) {
  return callback(a, b);
}

console.log(operacion(6, 4, (x, y) => x * y)); // 24
