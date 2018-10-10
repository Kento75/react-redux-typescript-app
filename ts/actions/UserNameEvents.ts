import Redux from "redux";
import {v4 as UUID} from "uuid";

/**
 * ユーザー名を変更するアクションタイプ
 */
export const CHANGE_USER_NAME = UUID();

/**
 * ユーザー名を変更するアクション
 */
export interface IChangeUserNameAction extends Redux.Action {
  name: string;
}

/**
 * ユーザー名変更アクションクリエイター
 */
export const createChangeUserNameAction: Redux.ActionCreator<IChangeUserNameAction> = (name: string) => {
  return {
    name,
    type: CHANGE_USER_NAME
  }
}