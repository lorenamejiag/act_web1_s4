function esCorreo(email) {
  return email.includes("@") && email.endsWith(".com");
}

console.log(esCorreo("juana@example.com")); // true

