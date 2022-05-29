import { takeLatest } from "redux-saga/effects";
import { handleGetProjectsTitles, handleGetFullProjects, handleUpdateProject, handleAddProject } from "./handlers/projects";
import { handleGetServices } from "./handlers/services";
import { handleGetUser, handleUpdateUser } from "./handlers/user";
import { getProjectsTitles, getFullProjects, updateProject, addProject } from "../slices/projects";
import { getServices } from "../slices/services";
import { getUser,updateUser } from "../slices/user";


export function* watcherSaga() {
  yield takeLatest(getProjectsTitles.type, handleGetProjectsTitles);
  yield takeLatest(getFullProjects.type, handleGetFullProjects);
  yield takeLatest(getServices.type, handleGetServices);
  yield takeLatest(getUser.type, handleGetUser);
  yield takeLatest(updateProject.type,handleUpdateProject);
  yield takeLatest(updateUser.type, handleUpdateUser);
  yield takeLatest(addProject.type, handleAddProject);

}
