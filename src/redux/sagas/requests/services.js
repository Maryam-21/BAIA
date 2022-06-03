export function requestGetServices(id){
    const response = fetch("https://localhost:44304/api/Services/GetAllServices/"+ id, {
        method: 'Get',
        mode: 'cors',
        headers:{
            'Accept': 'application/json',
            'Content-Type' : 'application/json; charset=UTF-8',
        },
    })
    return response
}