import Moment from "moment";
import React, { Component } from "react";
import Styled from "styled-components";

import { createDeleteTaskAction, createToggleCompleteAction } from "../actions/TaskActionCreators";
import { ITask } from "../states/ITask";
import store from "../Store";
import { $COLOR_SECONDARY_1_3, $COLOR_SECONDARY_2_0 } from "./FoundationStyles";

//#region styled
/**
 * 行の大外枠
 */
const Task = Styled.div<{ expiration: boolean; }>`
  align-items: center;
  background-color: ${ (p) => p.expiration ? "inherit" : $COLOR_SECONDARY_2_0 };
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid rgb(200, 200, 200);
  display: flex;
  flex-direction: row;
  margin-bottom; 1em;
  padding: 10px;
  transition-duration: 0.2s;
  transition-property: all;
  &:hover {
    transform: translate(-5px, -5px);
    box-shadow: 5px 5px 5px rgba(200, 200, 200, 4);
  }
`;

/**
 * タスク完了のチェックアイコン表示枠
 */
const TaskCheckBox = Styled.div`
  align-items: center;
  background-color: #fff;
  border: 2px solid #ccc;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  flex-grow: 0;
  flex-shrink: 0;
  height: 2em;
  width: 2em;
`;

/**
 * タスク完了チェックアイコン
 */
const TaskCheck = Styled.p`
  color: ${$COLOR_SECONDARY_1_3};
  font-size: 150%;
`;

/**
 * タスク名と期日の表示枠
 */
const TaskBody = Styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
  height: 3em;
  justify-content: space-around;
`;

/**
 * タスク削除アイコン
 */
const TaskRemove = Styled.div`
  flex-grow: 0;
  flex-shrink: 0;
`;

/**
 * タスク名
 */
const TaskName = Styled.div`
  font-size: 120%;
`;

/**
 * 期日
 */
const Deadline = Styled.div`
`;

//#endregion

class TaskRow extends Component<ITask, {}> {
  public render() {
    const it = this.props;
    const deadlineString = Moment(it.deadline).format("YYYY-MM-DD hh:mm");
    return (
      <Task expiration={new Date() < it.deadline || it.complete }
        onClick={this.onClickBox.bind(this, it.id)}>
        <TaskCheckBox>
          <TaskCheck>
            {it.complete ? "✔" : null}
          </TaskCheck>
        </TaskCheckBox>
        <TaskBody>
          <TaskName>{it.taskName}</TaskName>
          <Deadline>⏰{deadlineString}</Deadline>
        </TaskBody>
        <TaskRemove onClick={this.onClickDelete.bind(this, it.id)}>❌</TaskRemove>
      </Task>
    );
  }

  /**
   * ボックスクリック時、タスク完了、未完了のトグル
   */
  private onClickBox = (id: string, e: React.MouseEvent<HTMLElement>) => {
    store.dispatch(createToggleCompleteAction(id));
  }

  /**
   * 削除ボタンクリック時、タスクを削除
   */
  private onClickDelete = (id: string, e: React.MouseEvent) => {
    store.dispatch(createDeleteTaskAction(id));
    // クリックイベントを親要素には伝播させない。
    e.stopPropagation();
  }
}

export default TaskRow;
