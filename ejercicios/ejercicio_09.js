const contador = (function() {
  let count = 0;
  return function() {
    return count++;
  };
})();
console.log(contador()); // 0
console.log(contador()); // 1
