import { useState, useEffect } from 'react'


//custom hook

function useFetch(url) {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [controller, setController] = useState(null)

    useEffect(() => {
        const abortController = new AbortController()
        setController(abortController)
        setLoading(true)
        fetch(url, { signal: abortController.signal })
            .then((response) => response.json()) // respuesta pasada a json
            .then((data) => setData(data)) // nos devuelve una data y la podemos setear e incluir en el estado
            .catch((error) => {
                if (error.name == "AbortError") {
                    console.log("Request calcelled")
                } else {
                    setError(error)
                }
            })

            .finally(() => setLoading(false))

        return () => abortController.abort() // se limpia cuando se desmonta un componente (se ha cambiado de ruta, se cierra pestaña, etc)

    }, [])

    const handleRequest = () => {
        if (controller)
            controller.abort()
        setError("Request cancelled")
    }

    return {
        data, loading, error, handleRequest
    }

}

export default useFetch