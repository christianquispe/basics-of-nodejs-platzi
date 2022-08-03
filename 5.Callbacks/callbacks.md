# Funciones Callback

Una funcion callback es una funcion que es pasada como argumento a otra función, para ser llamada(called back) en otro momento.
La funcion que recibe como argumento a otras funciones es denominada función de orden superior (higher-order function), esta contiene la logica correspondiente para ejecutar adecuadamente la funcion callback.

En el siguiente codigo

```js
function decirHola = () => {
    console.log('Hello')
}

setTimeout(decirHola, 1000)
```

- `setTimeout()` es una higher-order function
- `decirHola()` es una callback function

## Ventajas

Tener control de cuando ejecutar la función callback, por eso es era muy útil en asíncronía. Ahora hay nuevas alternativas como `async, await` o `Promise`.

## Desventajas

Si se usa inadecuadamente puede enmarañar el código.
