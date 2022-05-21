import { call, put } from "redux-saga/effects";
import { setProjectsTitles, setFullProjects } from '../../slices/projects'
import { requestGetProjectsTitles,requestGetFullProjects } from "../requests/projects";

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
