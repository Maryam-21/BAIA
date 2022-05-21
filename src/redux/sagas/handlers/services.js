import { call, put } from "redux-saga/effects";
import {  setServices } from '../../slices/services'
import { requestGetServices } from "../requests/services";

export function* handleGetServices(action) {
  try {
    const response = yield call(requestGetServices);
    if (response.ok){
      const data  = yield response.json();
      yield put(setServices({ ...data }));
    }
  } catch (error) {
    console.log(error);
  }
}

