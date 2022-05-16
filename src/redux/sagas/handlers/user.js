import { call, put } from "redux-saga/effects";
import {  setUser, setSuccess } from '../../slices/user'
import { requestGetUser } from "../requests/user";

export function* handleGetUser(user) {
  try {
    const response = yield call(requestGetUser,user);
    if (response.status == 200){
      const data  = yield response.json();
      yield put(setUser({ ...data }));
      yield put(setSuccess(1));
      console.log(data)
    }
    else{
        yield put(setSuccess(0)); 
    }
    
  } catch (error) {
    console.log(error);
  }
}

