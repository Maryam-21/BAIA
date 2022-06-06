import { takeLatest } from "redux-saga/effects";
import { handleGetProjectsTitles, handleGetFullProjects, handleUpdateProject, handleAddProject,
         handleAddMeeting } from "./handlers/projects";
import { handleGetServices, handleUpdateService, handleDeleteService, 
        handleAddService, handleUpdateServiceDetail, handleGetValidatedServices,
        handleDetectConflicts, handleGetConflictMeeting } from "./handlers/services";
import { handleGetUser, handleUpdateUser } from "./handlers/user";
import { getProjectsTitles, getFullProjects, updateProject, addProject, addMeeting } from "../slices/projects";
import { getServices, updateService, deleteService, addService, updateServiceDetail,
        getValidatedServices, detectConflicts, getConflictMeeting } from "../slices/services";
import { getUser,updateUser } from "../slices/user";


export function* watcherSaga() {
  yield takeLatest(getProjectsTitles.type, handleGetProjectsTitles);
  yield takeLatest(getFullProjects.type, handleGetFullProjects);
  yield takeLatest(getServices.type, handleGetServices);
  yield takeLatest(updateService.type, handleUpdateService);
  yield takeLatest(getUser.type, handleGetUser);
  yield takeLatest(updateProject.type,handleUpdateProject);
  yield takeLatest(updateUser.type, handleUpdateUser);
  yield takeLatest(addProject.type, handleAddProject);
  yield takeLatest(addMeeting.type, handleAddMeeting);
  yield takeLatest(deleteService.type, handleDeleteService);
  yield takeLatest(addService.type, handleAddService);
  yield takeLatest(updateServiceDetail.type, handleUpdateServiceDetail);
  yield takeLatest(getValidatedServices.type, handleGetValidatedServices);
  yield takeLatest(detectConflicts.type, handleDetectConflicts);
  yield takeLatest(getConflictMeeting.type, handleGetConflictMeeting);
  

}
