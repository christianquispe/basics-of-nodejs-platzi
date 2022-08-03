function hola(nombre, miCallback) {
  setTimeout(() => {
    console.log("Hola", nombre);
    miCallback(nombre);
  }, 1000);
}

function adios(nombre, miCallback) {
  setTimeout(() => {
    console.log("Adiós", nombre);
    miCallback();
  }, 1000);
}

console.log("Iniciando proceso");

hola("Johan", (nombre) => {
  adios(nombre, () => {
    console.log("Terminando proceso");
  });
});
