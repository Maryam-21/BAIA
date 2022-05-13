export function requestGetProjectsTitles(){
    console.log('projects request')
    const response = fetch("https://localhost:44304/api/Users/GetProjectNames/1", {
        method: 'GET',
        mode: 'cors',
        headers:{
            'Accept': 'application/json',
            'Content-Type' : 'application/json; charset=UTF-8',
        },
    });
    return response
}

export function requestGetFullProjects(projectTitle = 'Conference Room Reservation System'){
    return fetch("https://localhost:44304/api/Projects/GetProject/" + projectTitle, {
          method: 'GET',
          mode: 'cors',
          headers:{
              'Accept': 'application/json',
              'Content-Type' : 'application/json; charset=UTF-8',
            },
        })
}
   