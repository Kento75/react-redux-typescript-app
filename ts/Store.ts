import {combineReducers, createStore} from 'redux';

import { UserReducer } from './reducers/UserReducer';
import IUser from './states/IUser';

/**
 * storeのデータ型を定義する。(親State)
 */
export interface IState {
  User: IUser;
}

// 複数の reducer を束ねる。
const combinedReducer = combineReducers<IState>({
  User: UserReducer,
});

// Store生成
export const store = createStore(combinedReducer);

export default store;
