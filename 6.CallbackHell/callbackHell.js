function hola(nombre, miCallback) {
  setTimeout(() => {
    console.log("Hola", nombre);
    miCallback(nombre);
  }, 1000);
}

function hablar(callbackHablar) {
  setTimeout(() => {
    console.log("blablabla");
    callbackHablar();
  }, 1000);
}

function adios(nombre, miCallback) {
  setTimeout(() => {
    console.log("Adiós", nombre);
    miCallback();
  }, 1000);
}

function conversacion(nombre, nVeces, despuesDeHablar) {
  if (nVeces > 0) {
    hablar(() => conversacion(nombre, --nVeces, despuesDeHablar));
  } else {
    despuesDeHablar(nombre);
  }
}

// ------

console.log("Iniciando proceso");

hola("Chris", (nombre) => {
  conversacion(nombre, 3, (againName) => {
    adios(againName, () => {
      console.log("Terminando proceso");
    });
  });
});

// ------

// console.log("Iniciando proceso");
// hola("Johan", (nombre) => {
//   hablar(() => {
//     hablar(() => {
//       hablar(() => {
//         hablar(() => {
//           hablar(() => {
//             adios(nombre, () => {
//               console.log("Terminando proceso");
//             });
//           });
//         });
//       });
//     });
//   });
// });
