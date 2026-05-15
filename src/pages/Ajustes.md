# ===============================================
# GUÍA DE COMANDOS PARA EL PROYECTO DEL DICCIONARIO
# ===============================================

Esta guía contiene todos los comandos necesarios para trabajar en el proyecto, desde el desarrollo local hasta la publicación de cambios en el sitio web.

## 1. Iniciar el entorno de desarrollo local
-----------------------------------------
Estos comandos te permiten ver y probar tus cambios en tu propia computadora (http://localhost:3000) antes de subirlos.

### Instalar dependencias (solo la primera vez o si se añaden nuevas librerías):
```bash
npm install
```

### Arrancar el servidor de desarrollo (para ver el proyecto en `localhost`):
```bash
npm start
```
> Este comando mantendrá el servidor activo y recargará la página automáticamente cada vez que guardes un cambio en el código.


## 2. Guardar y subir tus cambios al repositorio de GitHub
----------------------------------------------------------
Una vez que has terminado de hacer tus modificaciones y estás contento con el resultado en `localhost`, sigue estos pasos para guardar tu trabajo en el repositorio de código.

### Paso 2.1: Preparar los archivos modificados:
```bash
git add .
```
> El `.` significa "todos los archivos que han cambiado".

### Paso 2.2: Crear un "paquete" con tus cambios y un mensaje descriptivo:
```bash
git commit -m "Un mensaje que describa tus cambios"
```
> Ejemplo: `git commit -m "feat: Agrega sección de contacto"`

### Paso 2.3: Subir tus cambios al repositorio en GitHub:
```bash
git push
```

## 3. Actualizar el sitio web público (GitHub Pages)
---------------------------------------------------
Después de que tus cambios ya están en el repositorio de GitHub (Paso 2), este último comando actualiza la página web que todo el mundo puede ver.

### Desplegar la nueva versión en el sitio web en vivo:
```bash
npm run deploy
```
> Este comando primero construye la versión final del sitio y luego la publica en tu URL de GitHub Pages.


# ===============================================
# Resumen del Flujo Completo (después de la instalación inicial)
# ===============================================
#
# 1. `npm start` -> Trabajas en tus cambios.
# 2. `git add .`
# 3. `git commit -m "Describo lo que hice"`
# 4. `git push`
# 5. `npm run deploy` -> Para que el mundo vea tus cambios.
#
# ===============================================