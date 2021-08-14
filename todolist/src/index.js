import React from 'react';
import ReactDOM from 'react-dom';
// import TodoList from './TodoList';
import TodoList from './antd/TodoList';
import reportWebVitals from './reportWebVitals';

import { Provider } from "react-redux";
import store from './store'

const App = (
  <Provider store={store}>
    <TodoList />
  </Provider>
)
ReactDOM.render(
  App,
document.getElementById('root')
);

// ReactDOM.render(
//     <TodoList />,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
