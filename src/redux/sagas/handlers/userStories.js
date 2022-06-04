import { call, put } from "redux-saga/effects";
import { getUserStories , setUserStories  } from '../../slices/userStories'
import {  } from "../requests/userStories";

export function* handleGetUserStories(action) {
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

