/*
 * @Author: WannTonn
 * @Date: 2021-07-03 22:39:21
 * @Description: 
 * @FilePath: /net-music/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import List from './views/List';
import reportWebVitals from './reportWebVitals'; // 前端性能检测工具

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <List></List>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
