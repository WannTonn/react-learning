/*
 * @Author: WannTonn
 * @Date: 2021-07-03 22:39:21
 * @Description: 
 * @FilePath: /react-learning/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import List from './views/List';
import ToDoList from './views/ToDoList'
import reportWebVitals from './reportWebVitals'; // 前端性能检测工具
import {Router, Route, Link} from "react-router";
import {routes} from "@/router/index.js"
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <List></List> */}
    {/* <ToDoList></ToDoList> */}
    <Router
      routes={routes}
    >
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
