export function requestGetServices(){
    console.log('svs request')
    const response = fetch("http://127.0.0.1:5000/services", {
        method: 'Get',
        mode: 'cors',
        headers:{
            'Accept': 'application/json',
            'Content-Type' : 'application/json; charset=UTF-8',
        },
    })
    return response
}