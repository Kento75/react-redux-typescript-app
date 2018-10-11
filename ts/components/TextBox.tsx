import React, { Component } from 'react';

// 型指定
interface IProps {
  // ラベル文字列
  label: string;
  // テキストボックスのタイプ
  type: 'text' | `password`;
  // テキストボックスに表示する値
  value: string;
  // 値の確定時にその値を親プロパティが取得するためにコールバック関数を提供。
  onChangeText: (value: string) => void;
}

/**
 * ラベル付きのテキストポックス
 */
export class TextBox extends Component<IProps, {}> {
  public render() {
    const label = (!!this.props.label)
      ? <label>{this.props.label}</label>
      : null;
    return (
      <span>
        {label}
        <input name="username"
          type={this.props.type}
          value={this.props.value}
          onChange={this.onChangeText}
        />
      </span>
    );
  }
  private onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChangeText(e.target.value);
  }
}
