export function requestGetUser(action){
    
    const response = fetch("https://localhost:44304/api/Users/Login", {
        method: 'POST',
        mode: 'cors',
        headers:{
            'Accept': 'application/json',
            'Content-Type' : 'application/json; charset=UTF-8',
        },
        body:JSON.stringify(action.payload)
        
    });
    return response
}

export function requestUpdateUser(action){
    const id = action.payload.userID
    const response = fetch("https://localhost:44304/api/Users/UpdateUser/"+id, {
        method: 'PUT',
        mode: 'cors',
        headers:{
            'Accept': 'application/json',
            'Content-Type' : 'application/json; charset=UTF-8',
        },
        body:JSON.stringify(action.payload)
        
    });
    return response
}