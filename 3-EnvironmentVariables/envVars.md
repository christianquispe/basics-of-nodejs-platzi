# Variables de entorno

Las variables de entorno son aquellos valores que no queremos que estén en el código de la aplicación. Por ejemplo credenciales, url de un endpoint, claves, passwords, etc.

### Uso
-------------------

Para hacer uso de las variables de entorno, debemos llamarlo desde el objeto `process`, dentro de `env` y luego llamamos a su _key_ con el nombre de nuestra variable. `process.env.MY_ENV_VAR`

```js
let myName = process.env.NAME || "World";
// Usamos el operador OR para asignar el string "World" en el caso de que process.env.NAME es undefined
// Si quieres conocer más sobre el operador OR revisa su documentación https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment

console.log("Hello", myName);
```

### Asignar valores
-------------------

Para asignar valores a las varibles de entorno lo podemos hacer en el momento en que levantamos la aplicación.

```bash
NAME=Christian node envVars.js

Hello Christian
```

Si no se le asigna una valor a la variable de entorno tendríamos esto en la terminal con el codigo anterior

```bash
node envVars.js

Hello World
```
