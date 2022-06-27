/*
 * @Author: WannTonn
 * @Date: 2021-07-03 22:39:21
 * @Description: 
 * @FilePath: /react-learning/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom'
import 'antd/dist/antd.min.css';
import './global.scss';
// import TodoList from './views/ToDoList'
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
