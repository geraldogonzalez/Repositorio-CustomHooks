import { useEffect, useRef, useState } from "react";


export const useFetch = (url) => {
    
    const isMountedRef = useRef(true);
    const [state, setState] = useState({data: null, error: null, loading: true});

    useEffect(() => {
        return () => {
            isMountedRef.current = false
        }
    }, [])

    useEffect(() => {

        setState({data: null, error: null, loading: true});

        fetch(url)
            .then( resp => resp.json() )
            .then( data => {

                if(isMountedRef.current) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    });
                }
            })
            .catch( () => {
                const newState = { ...state };
                setState({
                    data: null, 
                    error: 'No se pudo recibir la información', 
                    loading: false
                })
            });

    }, [url]);

    return state;

};
