function multiplicarArreglo(arr) {
  return arr.reduce((total, num) => total * num, 1);
}

console.log(multiplicarArreglo([2, 5, 4])); 
