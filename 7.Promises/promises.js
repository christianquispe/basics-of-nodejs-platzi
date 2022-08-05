function hola(nombre) {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      console.log("Hola", nombre);
      resolve(nombre);
    }, 1000);
  });
}

function hablar(nombre) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("blablabla tu,", nombre);
      //   res(nombre);
      rej("Hubo un error");
    }, 1000);
  });
}

function adios(nombre) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Adiós", nombre);
      res(nombre);
    }, 1000);
  });
}

console.log("Iniciando proceso");

hola("Chris")
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then((nombre) => {
    console.log("Terminando proceso", nombre);
  })
  .catch((err) => {
    console.error(err);
    console.error("Econtramos un error");
  });

// Aquí debajo el codigo que usé para documentar acerca de las promesas

// const saludar = (nombre) => {
//   return new Promise((resolve, reject) => {
//     // Si el proceso funciona como lo esperabamos
//     if (nombre) {
//       console.log("Hola", nombre);
//       resolve(nombre);
//       return;
//     }
//     // Si el proceso sale mal
//     reject("No pudimos saludar porque no tenemos un nombre");
//   });
// };

// saludar("Chris")
//   .then((nombre) => {
//     console.log("¿Cómo estás", `${nombre}?`);
//   })
//   .catch((err) => console.log(err));
