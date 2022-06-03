import { call, put } from "redux-saga/effects";
import { setProjectsTitles, setFullProjects, setUpdatedProject, getProjectsTitles, getFullProjects} from '../../slices/projects'
import { requestGetProjectsTitles,requestGetFullProjects, requestUpdateProject, requestAddProject, 
  requestAddMeeting } from "../requests/projects";

export function* handleAddMeeting(payload) {
  try {
    const meetingPayload =  payload.payload["addMeeting"]
    console.log(meetingPayload)
    const response = yield call(requestAddMeeting,meetingPayload);
    if (response.ok){
      const data  = yield response.json();
      console.log(data)
      const projectTitle = payload.payload['projectTitle'];
      yield put(getFullProjects(projectTitle));
    }
    else{
        console.log("failed") 
    }
  } catch (error) {
    console.log(error);
  }
}

export function* handleAddProject(payload) {
  try {
    const response = yield call(requestAddProject,payload);
    if (response.ok){
      const data  = yield response.json();
      const userID = payload.payload['userID'];
      yield put(getProjectsTitles(userID));
    }
    else{
        console.log("failed") 
    }
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetProjectsTitles(userID) {
  try {
    const response = yield call(requestGetProjectsTitles,userID.payload);
    if (response.ok){
      const data  = yield response.json();
      yield put(setProjectsTitles({ ...data }));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetFullProjects(projectTitle) {
    try {
      const response = yield call(requestGetFullProjects, projectTitle.payload);
      const  data  = yield response.json();
      yield put(setFullProjects({ ...data }));
    } catch (error) {
      console.log(error);
    }
  }

  export function* handleUpdateProject(payload) {
    try {
      const response = yield call(requestUpdateProject,payload);
      if (response.ok){
        const data  = yield response.json();
        yield put(setUpdatedProject({ ...data }));
      }
      else{
          console.log("failed") 
      }
      
    } catch (error) {
      console.log(error);
    }
  }
