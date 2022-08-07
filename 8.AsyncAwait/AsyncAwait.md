# Async / Await

Las palabras resevadas `async` y `await` son mejoras en la sintáxis de JavasScript para leer código asíncrono de manera síncrona. Esta sintáxis se usa para trabajar con **promesas**, reemplazando a `then` y `catch`.

El código `async` es una palabra reservada que sirve para definir funciones asíncronas, por lo tanto, la función estará preparada para ejecutarse de manera asíncrona pero con un sintáxis síncrona. **async puede ser usado sin await**

Por otro lado, `await` también es una palabra reservada que se encarga de esperar hasta que una promesa sea resuelta. La función esperará hasta que que la promesa se resuelva para continuar con su ejecución. **await no puede ser usado sin async**

### Example

El código se encuentra comentado en `AsyncAwait.js`

```js
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

app()
  .then(() => {
    // Consoleamos para poder validar el orden de ejecución
    console.log("Terminó todo el proceso");
  })
  .catch((err) => {
    // Consoleamos para poder validar el orden de ejecución en caso de haber un error
    console.log("Hubo un error");
    console.log(err);
  });
```

Como se puede apreciar, podemos leer linea a linea la funcion `app()`, como si leyeramos código síncrono. También podemos ver que al momento de ejecutar `app()` podemos usar los metodos `then` y `catch` demostrando así que regresan promesas.

### Salida

```shell
$ nodemon example.js

Iniciando proceso
Hola Chris
Saludamos a Chris
Terminó todo el proceso
```
