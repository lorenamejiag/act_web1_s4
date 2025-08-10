const generarId = (function() {
  let id = 0;
  return function() {
    return ++id;
  };
})();

console.log(generarId()); // 1
console.log(generarId()); // 2
console.log(generarId()); // 3
