
// comprueba si la respuesta se ha ejecutado y qué 
function getSuspender(promise) {
    let status = "pending"
    let response

    const suspender = promise.then(
        (res) => {
            status = "success"
            response = res
        },
        (err) => {
            status = "error"
            response = err
        }

    )

    const read = () => {
        switch (status) {
            case "pending":
                throw suspender
            case "error":
                throw response
            default:
                return response
        }
    }

    return { read }
}

// hace la promesa del fetching y la guarda en promise
function fetchData(url) {
    const promise = fetch(url)
        .then((response) => response.json())
        .then((data) => data)

    return getSuspender(promise)


}

export default fetchData