import { call, put } from "redux-saga/effects";
import {  setUser, setSuccess, setLogin } from '../../slices/user'
import { requestGetUser, requestUpdateUser } from "../requests/user";


export function* handleGetUser(user) {
  try {
    const response = yield call(requestGetUser,user);
    if (response.status == 200){
      const data  = yield response.json();
      yield put(setUser({ ...data }));
      yield put(setSuccess(1));
      yield put(setLogin(0));
    }
    else{
        yield put(setSuccess(0)); 
    }
    
  } catch (error) {
    console.log(error);
  }
}

export function* handleUpdateUser(user) {
  try {
    const response = yield call(requestUpdateUser,user);
    if (response.ok){
      const data  = yield response.json();
      yield put(setUser({ ...data }));
    }
    else{
        console.log("failed") 
    }
    
  } catch (error) {
    console.log(error);
  }
}

