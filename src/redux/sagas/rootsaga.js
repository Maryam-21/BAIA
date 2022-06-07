import { takeLatest } from "redux-saga/effects";
import { handleGetProjectsTitles, handleGetFullProjects, handleUpdateProject, handleAddProject,
         handleAddMeeting, handleDeleteProject } from "./handlers/projects";
import { handleGetServices, handleUpdateService, handleDeleteService, 
        handleAddService, handleUpdateServiceDetail, handleGetValidatedServices,
        handleDetectConflicts, handleGetConflictMeeting, handleAddServiceDetail,
        handleDeleteServiceDetail } from "./handlers/services";
import { handleGetUser, handleUpdateUser } from "./handlers/user";
import { getProjectsTitles, getFullProjects, updateProject, addProject, addMeeting, 
        deleteProject} from "../slices/projects";
import { getServices, updateService, deleteService, addService, updateServiceDetail,
        getValidatedServices, detectConflicts, getConflictMeeting, addServiceDetail,
        deleteServiceDetail } from "../slices/services";
import { getUser,updateUser } from "../slices/user";
import { generateUserStories, getUserStories, deleteUserStory } from '../slices/userStories'
import { handleGenerateUserStories, handleGetUserStories, handleDeleteUserStory } from './handlers/userStories'


export function* watcherSaga() {
  //project end points
  yield takeLatest(getProjectsTitles.type, handleGetProjectsTitles);
  yield takeLatest(getFullProjects.type, handleGetFullProjects);
  yield takeLatest(updateProject.type,handleUpdateProject);
  yield takeLatest(deleteProject.type,handleDeleteProject);

  //new project and meeting end points
  yield takeLatest(addProject.type, handleAddProject);
  yield takeLatest(addMeeting.type, handleAddMeeting);

  //user end points
  yield takeLatest(getUser.type, handleGetUser);
  yield takeLatest(updateUser.type, handleUpdateUser);

  //services end points
  yield takeLatest(getServices.type, handleGetServices);
  yield takeLatest(updateService.type, handleUpdateService);
  yield takeLatest(deleteService.type, handleDeleteService);
  yield takeLatest(addService.type, handleAddService);
  
  //as is end point
  yield takeLatest(getValidatedServices.type, handleGetValidatedServices);

  //conflicts end points
  yield takeLatest(detectConflicts.type, handleDetectConflicts);
  yield takeLatest(getConflictMeeting.type, handleGetConflictMeeting);

  //service details end points
  yield takeLatest(updateServiceDetail.type, handleUpdateServiceDetail);
  yield takeLatest(addServiceDetail.type, handleAddServiceDetail);
  yield takeLatest(deleteServiceDetail.type, handleDeleteServiceDetail);

  //user stories end points
  yield takeLatest(generateUserStories.type, handleGenerateUserStories);
  yield takeLatest(getUserStories.type, handleGetUserStories);
  yield takeLatest(deleteUserStory.type, handleDeleteUserStory);

  

}
