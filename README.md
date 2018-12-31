-   Crear un módulo de AppRouting en la carpeta/app que contiene la configuración de enrutamiento.

```sh
ng generate module app-routing --module app --flat
ng generate module heroes/heroes --module app --flat --routing
```
El proceso de paramMap es un poco complicado. Cuando el mapa cambia, get() el parámetro de identificación de los parámetros cambiados.

El operador switchMap cancela también peticiones anteriores durante el vuelo. Si el usuario se desplaza nuevamente a esta ruta con un nuevo id mientras que el HeroService todavía es recuperar el antiguo id, switchMap Descartes esa vieja petición y vuelve al héroe para el nuevo id.