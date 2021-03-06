import "react-datepicker/dist/react-datepicker.css";

import Moment from "moment";
import React, { Component } from "react";
import DatePicker from "react-datepicker";
import Styled from "styled-components";
import { v4 as UUID } from "uuid";

import { createAddTaskAction } from "../actions/TaskActionCreators";
import store from "../Store";
import { $COLOR_SECONDARY_1_3 } from "./FoundationStyles";

/**
 * コンポーネントプロパティ
 */
interface IProps {
  /** タスク名 */
  taskName: string;
  /** 期限 */
  deadline: Date;
}

//#region styled
const Container = Styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: 1em 0;
  width: 100%;
`;

const TextBox = Styled.input`
  box-sizing: border-box;
  width: 100%;
`;

const TaskNameBox = Styled.p`
  flex-grow: 1;
`;

const DeadlineBox = Styled.div`
`;

const AddButton = Styled.button`
  background-color: ${$COLOR_SECONDARY_1_3};
  border-radius: 50%;
  color: white;
  display: block;
  font-size: 150%;
  height: 40px;
  padding: 0;
  width: 40px;
`;

//#endregion

interface IProps {
  /** タスク名 */
  taskName: string;
  /** 期限 */
  deadline: Date;
}

interface ILocalState {
  /** タスク名 */
  taskName: string;
  /** 期限 */
  deadline: Date;
}

export class AddTask extends Component<IProps, ILocalState> {
  public constructor(props: IProps) {
    super(props);
    this.state = {
      deadline: props.deadline,
      taskName: props.taskName,
    };
  }

  public render() {
    const date = Moment(this.state.deadline);
    const taskNameId = UUID();
    const deadlineId = UUID();
    return (
      <Container>
        <TaskNameBox>
          <label htmlFor={taskNameId}>task name</label>
          <TextBox id={taskNameId} type="text" value={this.state.taskName}
            onChange={ this.onChangeTaskName }></TextBox>
        </TaskNameBox>
        <DeadlineBox>
          <label htmlFor={deadlineId}>dead line</label>
          <DatePicker selected={date} showTimeSelect={true}
            dateFormat="YYYY-MM-DD HH:mm" onChange={ this.onChangeDeadLine } />
        </DeadlineBox>
        <AddButton onClick={this.onClickAdd}>＋</AddButton>
      </Container>
    );
  }

  /**
   * 追加ボタンを押すと、タスク一覧にタスクを追加する。
   */
  private onClickAdd = (e: React.MouseEvent) => {
    store.dispatch(createAddTaskAction(this.state.taskName, this.state.deadline));
  }

  /**
   * タスク名変更イベントハンドラ
   * テキストボックスの内容をローカルステートに反映する。
   */
  private onChangeTaskName = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      taskName: e.target.value,
    });
  }

  /**
   * 期日を変更したときのイベントハンドラ
   * 変更した日付をローカルステートに反映する。
   * DatePickerの独自プロパティで、引数として日付が渡される。
   */
  private onChangeDeadLine = (date: Moment.Moment | null) => {
    this.setState({
      deadline: !!date ? date.toDate() : new Date(),
    });
  }
}
