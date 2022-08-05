# Promesas

Las Promesas son una alternativa para trabajar asincronía con una sintaxis mas elegante y legible.

## Sintaxis

Las Promesas con clases, por lo tanto para usarlas primeros debemos instanciarlas. `Promise` es una función que recibe dos argumentos: **resolve** y **reject**. Utilizamos resolve para retornar el valor deseado cuando una función se ejecute y utilizamos reject para cuando una función retorna un valor no deseado.

### Ejemplo

```js
const saludar = (nombre) => {
  return new Promise((resolve, reject) => {
    // Si el proceso funciona como lo esperabamos
    if (nombre) {
      console.log("Hola", nombre);
      resolve(nombre);
      return;
    }
    // Si el proceso sale mal
    reject("No pudimos saludar porque no tenemos un nombre");
  });
};
```

El ejemplo mostrado consiste en una función que saluda. Esta funcion regresa una promesa, y la promesa valida si tenemos un nombre, en caso de tenerlo se consolea "Hola [ _nombre_ ]" luego se ejecuta el callback `resolve`; de no tener un nombre, se ejecutar el callback `reject`.

```js
saludar("Chris") // Eliminar el argumento y probar
  .then((nombre) => {
    console.log("¿Cómo estás", `${nombre}?`);
  })
  .catch((err) => console.log(err));
```

En el código vemos como se usaría una función asíncrona. Esta es mas legible.

- Primero llamamos a la función y le pasamos sus argumentos (¿O no?).
- Luego podemos acceder a un metodo de la función asíncrono que `then` y `catch`. Estos metodos reciben como argumento un `callback`.
- `then()`se ejecutará si la función asíncrona se resuelve.
- `catch()` se ejecutará si la función falla.
