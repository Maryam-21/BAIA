export function requestGenerateUserStories(action){
    
    const response = fetch("https://localhost:44304/api/UserStories/GenerateUS", {
        method: 'POST',
        mode: 'cors',
        headers:{
            'Accept': 'application/json',
            'Content-Type' : 'application/json; charset=UTF-8',
        },
        body:JSON.stringify(action)
        
    });
    return response
}

export function requestGetUserStories(id){
    
    const response = fetch("https://localhost:44304/api/UserStories/getProjectUserStories/"+id, {
        method: 'GET',
        mode: 'cors',
        headers:{
            'Accept': 'application/json',
            'Content-Type' : 'application/json; charset=UTF-8',
        },
    });
    return response
}

export function requestDeleteUserStory(id){

    const response = fetch("https://localhost:44304/api/UserStories/DeleteUserStory/"+id, {
        method: 'DELETE',
        mode: 'cors',
        headers:{
            'Accept': 'application/json',
            'Content-Type' : 'application/json; charset=UTF-8',
        },
        
    });
    return response
}

export function requestAddUserStory(payload){

    const response = fetch("https://localhost:44304/api/UserStories/PostUserStory", {
        method: 'POST',
        mode: 'cors',
        headers:{
            'Accept': 'application/json',
            'Content-Type' : 'application/json; charset=UTF-8',
        },
        body:JSON.stringify(payload)
        
    });
    return response
}

export function requestUpdateUserStory(action){
    const id = action.payload.body.UserStoryID
    const body = action.payload.body

    const response = fetch("https://localhost:44304/api/UserStories/UpdateUserStory/"+id, {
        method: 'PUT',
        mode: 'cors',
        headers:{
            'Accept': 'application/json',
            'Content-Type' : 'application/json; charset=UTF-8',
        },
        body:JSON.stringify(body)
        
    });
    return response
}