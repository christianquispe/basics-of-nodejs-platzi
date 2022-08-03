# Todo se ejecuta en un único hilo: Monohilo

Node al ser monohilo, detiene el programa por completo al encontrar un error. En el tiempo de compilación no ocurirrá ningún error, pero en ejecución sí.

```js
console.log("Hola mundo");

// Definimos una variable y le asignamos un número
let i = 0;

// setInterval me permite ejecutar una función cada cierta cantidad de tiempo, recibe como argumentos: Función a ejecutarse, intervalo de tiempo en milisegundos.
setInterval(function () {
  // Imprimimos en la terminal la variable i
  console.log(i);
  // Modificamos la variable cada vez que se ejecuta la función
  i++;
  // Forzamos un error
  if (i === 5) {
    console.log("forzamos error");
    var a = 3 + z;
  }
}, 1000);

console.log("Segunda instrucción");
```

### Terminal

```bash
$ node monohilo.js

Hola mundo
Segunda instrucción
0
1
2
3
4
[...]/Monohilo/monohilo.js:15
    const a = 3 + z;
                  ^

ReferenceError: z is not defined
    at Timeout._onTimeout ([...]/Monohilo/monohilo.js:15:19)
    at listOnTimeout (node:internal/timers:559:17)

```

Como se aprecia en la terminal el error no se muestra hasta que la variable i sea 5, por eso es sumamente importante comprobar el código siempre que se agregue una nueva funcionalidad
