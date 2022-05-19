export function requestGetProjectsTitles(userID) {
    const response = fetch("https://localhost:44304/api/Users/GetProjectNames/" + userID, {
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
    return fetch("https://localhost:44304/api/Projects/GetProject/" + projectTitle, {
          method: 'GET',
          mode: 'cors',
          headers:{
              'Accept': 'application/json',
              'Content-Type' : 'application/json; charset=UTF-8',
            },
        })
}
   