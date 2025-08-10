const promedio = arr => arr.reduce((total, num) => total + num, 0) / arr.length;

console.log(promedio([40, 20, 30])); // 30
