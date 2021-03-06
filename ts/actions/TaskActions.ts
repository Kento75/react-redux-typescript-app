import { Action } from "redux";
import { v4 as UUID } from "uuid";

import { ITask } from "../states/ITask";

/**
 * タスク一覧表示アクションタイプ
 */
export const SHOW_TASKS = UUID();

/**
 * タスク一覧を表示するアクション
 */
export interface IShowTaskAction extends Action {
  tasks: ITask[];
}

/**
 * タスクを追加するアクションタイプ
 */
export const ADD_TASK = UUID();

/**
 * タスクを追加するアクション
 */
export interface IAddTaskAction extends Action {
  deadline: Date;
  taskName: string;
}

/**
 * タスク完了のアクションタイプ
 */
export const TOGGLE_COMPLETE_TASK = UUID();

/**
 * タスク完了のアクション
 */
export interface IToggleCompleteAction extends Action {
  taskId: string;
}

/**
 * タスク削除のアクションタイプ
 */
export const DELETE_TASK = UUID();

/**
 * タスク削除のアクション
 */
export interface IDeleteAction extends Action {
  taskId: string;
}
