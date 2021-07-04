# Ejercicio Vue
Filtrado organización miembros Github
Mostrar una listado de miembros que pertenecen a una organizacíon en Github (Microsoft, Facebook, Lemoncode...), y permitir al usuario que pueda introducir el nombre de organización que quiera le de al botón de cargar y que se carguen los datos.

Enunciado
Añadir un listado de miembros que pertencen a Lemoncode:

Leer de la api de Github para obtener miembros de una organización.
Añadir un input y un botón para filtrar por organización, es decir:

Se muestra un input que por defecto tiene como valor: lemoncode.
Se muestra por defecto el listado de miembros de lemoncode (o tabla).
El usuario puede teclear otro nombre de organizacíon, por ejemplo: microsoft y al pulsar el botón de busqueda te muestra los miembros de dicha organizacíon.
Muestra el detalle de un miembro de esa organización en otra página.
Que al volver de la página de detalle se muestre la organización que se había tecleado en el filtro (por ejemplo si el usuario tecleó microsoft se debe de ver Microsoft).

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

