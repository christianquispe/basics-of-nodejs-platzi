# Herramientas para Node

## Nodemon

Para probar cada nueva funcionalidad agregada, debemos detener la aplicación con `ctrl + c` y luego reiniciarla. Como este proceso es manual y tedioso, se creó una herramienta llamada `nodemon`.

Nodemon es un escuchador de cambios, este paquete hace el trabajo de detener y reiniciar la applicación cada vez que nosotros agregamos cambios a la la aplicación.

**Normalmente se usa en desarrollo**

### Install

```bash
sudo npm install -g nodemon
```

### Usage

```bash
nodemon tools.js
```

## PM2

Es un demonio administrador de procesos que me puede ayudar a administrar y mantener mi aplicación 24/7.

- Voy a poner monitorizar el código para saber si algo se rompe.
- Me permite ver dashboards de mi código, puedo ver que está corriendo.
- Puedo ver el rendimiento de mi cpu
- Con: pm2 stop + id —> me detiene el proceso que está en ejecución con ese ID.

**Se recomienda su uso en producción**

### Install

```bash
sudo npm install -g pm2
```

### Usage

#### Levantar la app

```bash
pm2 start tools.js
```

#### Ver las apps levantadas

Este comando nos mostrará una especie de dashboard en la terminal mostrandonos información util. De aquí sacamos el id, o el nombre de la app, que luego nos servirá para cerrar la app, o reiniciarla.

```bash
pm2 status
```

#### Cerrar y reiniciar una app

##### Cerrar

```bash
pm2 stop [id, nombre o ruta de la app]
```

##### Reiniciar

```bash
pm2 start [id, nombre o ruta de la app]
```
