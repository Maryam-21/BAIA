import { call, put } from "redux-saga/effects";
import { setProjectsTitles, setFullProjects } from '../../slices/projects'
import { requestGetProjectsTitles,requestGetFullProjects } from "../requests/projects";

export function* handleGetProjectsTitles(action) {
  try {
    const response = yield call(requestGetProjectsTitles);
    if (response.ok){
      const data  = yield response.json();
      //const data = ['instagram']
      yield put(setProjectsTitles({ ...data }));
      //console.log(data)
    }
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetFullProjects(action) {
    try {
      const response = yield call(requestGetFullProjects);
      const  data  = yield response.json();
      yield put(setFullProjects({ ...data }));
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  }
