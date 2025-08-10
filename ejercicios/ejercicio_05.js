function contarVocales(str) {
  if (str.length === 0) return 0;
  const primera = str[0].toLowerCase();
  const esVocal = "aeiou".includes(primera) ? 1 : 0;
  return esVocal + contarVocales(str.slice(1));
}
console.log(contarVocales("Estupendamente")); // 6
