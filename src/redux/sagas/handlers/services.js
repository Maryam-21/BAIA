import { call, put } from "redux-saga/effects";
import {  setServices } from '../../slices/services'
import { requestGetServices } from "../requests/services";

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

