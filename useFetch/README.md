# useFetch Hook.

```
    const url = 'https://el-endpoint-de-un-API';
    const { data: null, error: null, loading: true } = useFetch( url );
```

La cosa va así: 
    
    - Tú proporcionas la URL de la API de tu preferencia. 
    - Mientras se hace la petición a la API, el valor de 'loading' te permite saber si ya recibiste la data o no. 
    - O sea, utilizas el 'loading' para poner una barrita bien bonita que le indique al usuario que la infornmación ya viene. 
    - Obtienes la data de la API, desaparece la barra bonita por la condición del loading. 
    - Puedes pintar lo que recibiste y todos felices. 

Ah, se me olvidó: 

    - Usa 'data' para pintar los elementos.

Otra cosa se me olvidó: 

    - Si hay un error en la petición, lo lamento... es broma, ahí tienes el 'error' para decirle al usuario que a pesar del tiempo de espera que pudo usar para otra cosa, lo perdió. 
    - Cuídate. 
    - #QuédateEnCasa.