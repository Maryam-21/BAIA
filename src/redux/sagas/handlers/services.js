import { call, put } from "redux-saga/effects";
import {  setServices, getServices, getValidatedServices, setValidatedServices } from '../../slices/services'
import { requestGetServices, requestUpdateService, requestDeleteService, 
          requestAddService, requestUpdateServiceDetail, requestGetValidatedServices } from "../requests/services";

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