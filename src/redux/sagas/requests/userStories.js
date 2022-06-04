export function requestGetUserStories(action){
    
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