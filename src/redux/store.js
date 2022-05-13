import {
  configureStore,
  combineReducers,
  getDefaultMiddleware
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sagas/rootsaga";
import projectsReducer from "./slices/projects";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  projects: projectsReducer
});

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]
}); 
sagaMiddleware.run(watcherSaga);

export default store;
