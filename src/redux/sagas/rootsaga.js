import { takeLatest } from "redux-saga/effects";
import { handleGetProjectsTitles, handleGetFullProjects } from "./handlers/projects";
import { handleGetServices } from "./handlers/services";
import { handleGetUser } from "./handlers/user";
import { getProjectsTitles, getFullProjects } from "../slices/projects";
import { getServices } from "../slices/services";
import { getUser } from "../slices/user";


export function* watcherSaga() {
  yield takeLatest(getProjectsTitles.type, handleGetProjectsTitles);
  yield takeLatest(getFullProjects.type, handleGetFullProjects);
  yield takeLatest(getServices.type, handleGetServices);
  yield takeLatest(getUser.type, handleGetUser);

}
