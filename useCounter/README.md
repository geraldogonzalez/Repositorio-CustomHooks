# useCounter Hook

```
    const { counter, increment, decrement, reset } = useCounter( 10 );
```

``` 
    useCounter(); // Recibe un valor. De no ser pasado este valor, toma uno por defecto y lo almacena en el estado ( [ counter, setCounter ] ). 
``` 

* Retorna tres funciones:

    - increment: Para aumentar el valor del counter en 1 (o la cantidad especícada en la función).
    - decrement: Para disminuir el valor del counter 1 (o la cantidad especícada en la función x2).
    - reset: Para resetear el counter al valor enviado o el valor por defecto.

* También retorna el counter para que lo muestres en el DOM o hagas lo que quieras con él siempre que React te lo permita.♥