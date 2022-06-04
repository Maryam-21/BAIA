export function requestGetServices(meetingID){
    const response = fetch("https://localhost:44304/api/Meetings/GetMeeting/"+ meetingID, {
        method: 'Get',
        mode: 'cors',
        headers:{
            'Accept': 'application/json',
            'Content-Type' : 'application/json; charset=UTF-8',
        },
    })
    return response
}

export function requestUpdateService(action){
    const id = action.payload.serviceID
    const service = action.payload.service

    const response = fetch("https://localhost:44304/api/Services/UpdateService/"+id, {
        method: 'PUT',
        mode: 'cors',
        headers:{
            'Accept': 'application/json',
            'Content-Type' : 'application/json; charset=UTF-8',
        },
        body:JSON.stringify(service)
        
    });
    return response
}

export function requestDeleteService(id){

    const response = fetch("https://localhost:44304/api/Services/DeleteService/"+id, {
        method: 'DELETE',
        mode: 'cors',
        headers:{
            'Accept': 'application/json',
            'Content-Type' : 'application/json; charset=UTF-8',
        },
        
    });
    return response
}

export function requestAddService(payload){

    const response = fetch("https://localhost:44304/api/Services/PostService", {
        method: 'POST',
        mode: 'cors',
        headers:{
            'Accept': 'application/json',
            'Content-Type' : 'application/json; charset=UTF-8',
        },
        body:JSON.stringify(payload.payload)
        
    });
    return response
}

export function requestUpdateServiceDetail(action){
    const id = action.payload.ServiceDetailID
    const serviceDetail = action.payload

    const response = fetch("https://localhost:44304/api/ServiceDetails/UpdateServiceDetail/"+id, {
        method: 'PUT',
        mode: 'cors',
        headers:{
            'Accept': 'application/json',
            'Content-Type' : 'application/json; charset=UTF-8',
        },
        body:JSON.stringify(serviceDetail)
        
    });
    return response
}
