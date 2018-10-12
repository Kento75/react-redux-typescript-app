import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import TaskList from "./components/TaskList";
import Store from "./Store";

const container = document.getElementById("contents");

ReactDOM.render(
  <Provider store={Store}>
    <TaskList />
  </Provider>,
  container,
);
