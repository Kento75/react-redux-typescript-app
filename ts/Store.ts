import { AnyAction, combineReducers, createStore } from "redux";

import { TaskReducer } from "./reducers/TaskReducer";
import { ITaskList } from "./states/ITask";

/**
 * ストア インタフェース
 */
export interface IState {
  taskList: ITaskList;
}

const combinedReducer = combineReducers<IState>({
  taskList: TaskReducer,
});

const store = createStore(combinedReducer);
export default store;
