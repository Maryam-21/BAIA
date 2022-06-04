import {
  configureStore,
  combineReducers,
  getDefaultMiddleware
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sagas/rootsaga";
import projectsReducer from "./slices/projects";
import servicesReducer from "./slices/services";
import userReducer from "./slices/user";
import userStoriesReducer from "./slices/userStories";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  projects: projectsReducer,
  services: servicesReducer,
  user: userReducer,
  userStories: userStoriesReducer,
});

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]
}); 
sagaMiddleware.run(watcherSaga);

export default store;
