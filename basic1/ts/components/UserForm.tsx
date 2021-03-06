import React, { Component } from 'react';
import { connect, MapStateToPropsParam } from 'react-redux';

import IUser from '../states/IUser';
import store, { IState } from '../Store';
import { TextBox } from './TextBox';
import { createChangeUserNameAction } from '../actions/UserNameEvents';

/**
 * ユーザー名を入力して表示
 */
class UserForm extends Component<IUser, {}> {
  public render() {
    return (
      <div>
        <p>
          <TextBox
            label="ユーザ名"
            type="text"
            value={this.props.name}
            onChangeText={this.onChangeText}
          />
        </p>
        <p>名前：{this.props.name}</p>
      </div>
    );
  }
  private onChangeText = (value: string) => {
    store.dispatch(createChangeUserNameAction(value));
  }
}

const mapStateToProps = (state: IState) => {
  return state.User;
};

export default connect(mapStateToProps)(UserForm);
