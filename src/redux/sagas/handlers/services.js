import { call, put } from "redux-saga/effects";
import {  setServices, getServices, getValidatedServices, setValidatedServices,
          setConflictMeeting } from '../../slices/services'
import { requestGetServices, requestUpdateService, requestDeleteService, 
        requestAddService, requestUpdateServiceDetail, requestGetValidatedServices,
        requestDetectConflicts, requestAddServiceDetail, requestDeleteServiceDetail} from "../requests/services";

export function* handleGetServices(action) {
  try {
    const response = yield call(requestGetServices, action.payload);
    if (response.ok){
      const data  = yield response.json();
      console.log(data);
      yield put(setServices({ ...data }));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* handleUpdateService(payload) {
  try {
    const response = yield call(requestUpdateService,payload);
    if (response.ok){
      const data  = yield response.json();
      console.log(data);
    }
    else{
        console.log("failed") 
    }
    
  } catch (error) {
    console.log(error);
  }
}

export function* handleDeleteService(payload) {
  const serviceID = payload.payload.serviceID;
  const meetingID = payload.payload.meetingID;

  try {
    const response = yield call(requestDeleteService,serviceID);
    if (response.ok){
      yield put(getServices(meetingID));
    }
    else{
        console.log("failed") 
    }
    
  } catch (error) {
    console.log(error);
  }
}

export function* handleAddService(payload) {
  const meetingID = payload.payload.MeetingID
  try {
    const response = yield call(requestAddService,payload);
    if (response.ok){
      const data  = yield response.json();
      console.log(data);
      yield put(getServices(meetingID));
    }
    else{
        console.log("failed") 
    }
    
  } catch (error) {
    console.log(error);
  }
}

export function* handleAddServiceDetail(payload) {
  const meetingID = payload.payload.MeetingID
  try {
    const response = yield call(requestAddServiceDetail,payload.payload.body);
    if (response.ok){
      const data  = yield response.json();
      console.log(data);
      yield put(getServices(meetingID));
    }
    else{
        console.log("failed") 
    }
    
  } catch (error) {
    console.log(error);
  }
}

export function* handleUpdateServiceDetail(payload) {
  try {
    const response = yield call(requestUpdateServiceDetail,payload);
    if (response.ok){
      const data  = yield response.json();
    }
    else{
        console.log("failed") 
    }
    
  } catch (error) {
    console.log(error);
  }
}

export function* handleDeleteServiceDetail(payload) {
  const serviceDetailID = payload.payload.serviceDetailID;
  const meetingID = payload.payload.meetingID;

  try {
    const response = yield call(requestDeleteServiceDetail,serviceDetailID);
    if (response.ok){
      yield put(getServices(meetingID));
    }
    else{
        console.log("failed") 
    }
    
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetValidatedServices(action) {
  try {
    const response = yield call(requestGetValidatedServices, action.payload);
    if (response.ok){
      const data  = yield response.json();
      console.log(data);
      yield put(setValidatedServices({ ...data }));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* handleDetectConflicts(payload) {
  const meetingID = payload.payload["meetingID"]
  const reqBody = payload.payload["body"]
  console.log(reqBody)
  try {
    const response = yield call(requestDetectConflicts,reqBody);
    if (response.ok){
      console.log("ok");
      yield put(getServices(meetingID));
    }
    else{
        console.log("failed") 
    }
    
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetConflictMeeting(action) {
  try {
    const response = yield call(requestGetServices, action.payload);
    if (response.ok){
      const data  = yield response.json();
      const conMeetTitle = data["meetingTitle"];
      console.log(conMeetTitle);
      yield put(setConflictMeeting(conMeetTitle));
    }
  } catch (error) {
    console.log(error);
  }
}