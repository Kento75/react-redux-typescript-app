import clone from "clone";
import { Action } from "redux";

type WorkOfAction<S, A extends Action = any> = (state: S, action: A) => void;

/**
 * action に対する reducer の処理を管理する
 */
class ActionToReducerMapper<S> {
  /** アクション・タイプと処理の定義を保持する。 */
  private works: {[actionKey: string]: WorkOfAction<S>} = {};

  /** アクション・タイプと処理の定義を追加する。 */
  public addWork = <A extends Action>(actionType: string, func: WorkOfAction<S, A>) => {
    this.works[actionType] = func;
  }

  /**
   * 該当アクション・タイプがある場合
   * ->stateをクローンして指定の処理を行い、返す。
   * 該当アクション・タイプがない場合
   * ->何も処理を行わず、stateもクローンせずにそのまま返す。
   */
  public execute = (state: S, action: Action) => {
    let newState = state;
    const process = this.works[action.type];
    if (!!process) {
      newState = clone(state);
      process(newState, action);
    }
    return newState;
  }
}

const createActionToReducerMapper = <S>() => {
  return new ActionToReducerMapper<S>();
};

export default createActionToReducerMapper;
