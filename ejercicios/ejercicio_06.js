function filtrarMayores(arr) {
  return arr.filter(num => num > 10);
}
console.log(filtrarMayores([5, 12, 8, 15, 20, 1])); // [12, 15]
