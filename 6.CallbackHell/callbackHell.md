# Callback Hell

Tomando como base el código de la sección anterior `callback.js` y añadiendo mas complejidad (Usando callbacks). Podemos encontrarnos con un código bastante feo.

```js
[...]

// Agregamos la funcion de hablar
function hablar(callbackHablar) {
  setTimeout(() => {
    console.log("blablabla");
    callbackHablar();
  }, 1000);
}

console.log("Iniciando proceso");
hola("Johan", (nombre) => {
  hablar(() => {
    hablar(() => {
      hablar(() => {
        hablar(() => {
          hablar(() => {
            adios(nombre, () => {
              console.log("Terminando proceso");
            });
          });
        });
      });
    });
  });
});

[...]
```

A pesar de que el código funciona, no es lo correcto tenerlo así. Para refactorizar esto podemos usar una función mucho mas compleja pero que es lo mejor en estos casos.

```js
// Agregamos la funcion de hablar
function hablar(callbackHablar) {
  setTimeout(() => {
    console.log("blablabla");
    callbackHablar();
  }, 1000);
}

function conversacion(nombre, nVeces, despuesDeHablar) {
  if (nVeces > 0) {
    hablar(() => conversacion(nombre, --nVeces, despuesDeHablar));
  } else {
    despuesDeHablar(nombre);
  }
}

console.log("Iniciando proceso");
hola("Chris", (nombre) => {
  conversacion(nombre, 3, (againName) => {
    adios(againName, () => {
      console.log("Terminando proceso");
    });
  });
});
```

La función **conversacion** es recursiva. Recibe tres parametros, el más importante es el _parametro_ `nVeces`, que se usa para validar cuántas veces se ejecutará `hablar()` y cuando será hora de ejecutar `despuesDeHablar()`.

Y listo, hemos refactorizado el código!
