function hola(nombre) {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      if (nombre) {
        console.log("Hola", nombre);
        resolve(nombre);
      } else {
        rejected("No tenemos nombre a quién saludar");
      }
    }, 1000);
  });
}

function hablar(nombre) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (nombre) {
        console.log("blablabla tu,", nombre);
        res(nombre);
      } else {
        rej("No tenemos nombre a quién hablar");
      }
    }, 1000);
  });
}

function adios(nombre) {
  return new Promise((respose, rejected) => {
    setTimeout(() => {
      if (nombre) {
        console.log("Adiós", nombre);
        respose(nombre);
      } else {
        rejected("No tenemos nombre a quién despedirnos");
      }
    }, 1000);
  });
}

// async function app() {
//   console.log("Iniciando proceso");
//   const name = await hola("Chris");
//   console.log("Ya estás saludado");
//   await hablar(name);
//   await adios(name);
// }

// app().then(() => {
//   console.log("Terminó todo el proceso");
// });

// ----------- Ejemplo usado en AsyncAwait.md ----------------

// No es necesario declarar hola() con async
// porque la función de por sí, ya devuelve una promesa
function hola(nombre) {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      if (nombre) {
        console.log("Hola", nombre);
        resolve(nombre);
      } else {
        rejected("No tenemos nombre a quién saludar");
      }
    }, 1000);
  });
}

// Declaramos app() como asíncrona
async function app() {
  // Consoleamos para poder validar el orden de ejecución
  console.log("Iniciando proceso");
  // Aquí le decimos a app() que espere a que se resuelva la promesa que retorna hola() para que continue su ejecución
  const name = await hola("Chris");
  // Consoleamos para poder validar el orden de ejecución
  console.log("Saludamos a", name);
}

app().then(() => {
  // Consoleamos para poder validar el orden de ejecución
  console.log("Terminó todo el proceso");
});
