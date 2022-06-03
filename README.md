# Evaluación Harry Potter

## Sobre la app

La app fue creada con webpack por decisión personal y para practicar con está herramienta, el servidor json-server solo está disponible en entorno local, la app en productivo no cuenta con el soporte a este servidor,
sin embargo podras visualizar los personajes añadidos al final del listado de los personajes

## Pasos para levantar el servidor

1. Descargar el repositorio
2. Posicionarse dentro de la carpeta descargada en la terminal
3. Ejecutar **npm install** para instalar todas las dependencias necesarias para ejecutar el entorno local
4. Para levantar la aplicación se necesita ejecutar el comando **npm run dev** ejecutara la app en el puerto 3005
5. Para levantar el servidor json-server se necesita ejecutar el comando **npm run dev:server** ejecutara el servidor en el puerto 3000
6. Para ejecutar pruebas unitarias se necesita ejecutar el comando **npm run test**

## ¿Qué es lo que más te gustó de tu desarrollo?

Disfrute cada parte del proyecto, desde estructurar la app, definir las dependencias que usaría, estilar todos los componentes, hasta la parte más divertida, agregar la lógica a cada componente y el soporte para las dependencias de redux y json-server

## Si hubieras tenido más tiempo ¿qué hubieras mejorado o qué más hubieras hecho?

1. Agregaría modales de alerta para los errores de la app
2. Agregaría una barra de búsqueda de personajes
3. Agregaría un modal disponible para cuando se diera clic a una tarjeta o favorito y contendría toda la información del personaje
4. Agregar useMemo para evitar renders innecesarios
5. Cambiar el modal de agregar personaje me falto mucho estilado y varios campos importantes por agregar, así como cambiar el input file
6. Haría mas pruebas unitarias

## Descríbenos un pain point o bug con el que te hayas encontrado y como lo solucionaste

Al momento de integrar json-server decidí hacer la petición desde mi reducer de characters para al mismo tiempo que se sube al server actualizar mi state con este elemento y poderlo visualizar, no tenía en cuenta que el agregar async/await la petición retornaba una promesa aunque está ya estuviera resuelta, y eso eliminaba todos mis personajes en el filtro actual, tuve que cambiar la forma de hacer la petición a json-server igual desde mi reducer pero creando una función externa con createAsyncThunk y agregar los estados de la app en extraReducers
