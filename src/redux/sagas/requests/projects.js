export function requestAddMeeting(action){
    const response = fetch("https://localhost:44304/api/Meetings/PostMeeting", {
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

export function requestAddProject(action){
    const response = fetch("https://localhost:44304/api/Projects/PostProject", {
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

export function requestGetProjectsTitles(userID) {
    const response = fetch("https://localhost:44304/api/Users/GetProjectTitles/" + userID, {
        method: 'GET',
        mode: 'cors',
        headers:{
            'Accept': 'application/json',
            'Content-Type' : 'application/json; charset=UTF-8',
        },
    });
    return response
}

export function requestGetFullProjects(projectTitle){
    return fetch("https://localhost:44304/api/Projects/GetProjectByTitle/" + projectTitle, {
          method: 'GET',
          mode: 'cors',
          headers:{
              'Accept': 'application/json',
              'Content-Type' : 'application/json; charset=UTF-8',
            },
        })
}

export function requestUpdateProject(action){
    const id = action.payload.projectID
    console.log(id)

    const response = fetch("https://localhost:44304/api/Projects/UpdateProject/"+id, {
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

export function requestDeleteProject(id){

    const response = fetch("https://localhost:44304/api/Projects/DeleteProject/"+id, {
        method: 'DELETE',
        mode: 'cors',
        headers:{
            'Accept': 'application/json',
            'Content-Type' : 'application/json; charset=UTF-8',
        },
        
    });
    return response
}