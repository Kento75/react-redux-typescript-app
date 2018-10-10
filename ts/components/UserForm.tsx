import React, { Component } from "react";
import IUser from "../states/IUser";
import { TextBox } from "./TextBox";

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
    )
  }
  private onChangeText = (value: string) => {
    // actionやstoreができたら書く
  }
}