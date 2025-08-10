const sumar = (...numeros) => numeros.reduce((total, num) => total + num, 0);

console.log(sumar(12, 22, 3, 6)); // 43
