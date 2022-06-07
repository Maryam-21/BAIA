import { call, put } from "redux-saga/effects";
import { setLoading, setUserStories, getUserStories } from "../../slices/userStories"
import { requestGenerateUserStories, requestGetUserStories, requestDeleteUserStory } from "../requests/userStories";

export function* handleGenerateUserStories(action) {
  yield put(setLoading(1))
  try {
    const response = yield call(requestGenerateUserStories, action.payload);
    if (response.ok){
      console.log("ok")
      yield put(setLoading(0))
    }
    else{
      yield put(setLoading(-1))
    }
  } catch (error) {
    yield put(setLoading(-1))
    console.log(error);
  }
}

export function* handleGetUserStories(action) {
  yield put(setLoading(1))
  try {
    const response = yield call(requestGetUserStories, action.payload);
    if (response.ok){
      console.log("ok")
      const data = yield response.json();
      console.log(data)
      yield put(setUserStories({...data}))
      yield put(setLoading(0))
    }
    else{
      yield put(setLoading(-1))
    }
  } catch (error) {
    yield put(setLoading(-1))
    console.log(error);
  }
}

export function* handleDeleteUserStory(payload) {
  const projID = payload.payload["projectID"]
  const userSID = payload.payload["userStoryID"]
  try {
    const response = yield call(requestDeleteUserStory, userSID);
    if (response.ok) {
      yield put(getUserStories(projID));
    }
    else {
      console.log("failed")
    }

  } catch (error) {
    console.log(error);
  }
}