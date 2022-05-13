import { takeLatest } from "redux-saga/effects";
import { handleGetProjectsTitles, handleGetFullProjects } from "./handlers/projects";
import { getProjectsTitles, getFullProjects } from "../slices/projects";

export function* watcherSaga() {
  yield takeLatest(getProjectsTitles.type, handleGetProjectsTitles);
  yield takeLatest(getFullProjects.type, handleGetFullProjects);
}
