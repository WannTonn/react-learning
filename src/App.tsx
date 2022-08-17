import React from 'react';

import TodoList from './views/ToDoList';
import Animation from './views/Animation';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NotFoundDom from './views/NotFoundDom';
const routes = [
  {
    key: 1,
    path: '/',
    element: <TodoList />
  },
  {
    key: 2,
    path: '/animation',
    element: <Animation />
  },
  {
    key: 3,
    path: '*',
    element: <NotFoundDom />
  }
]

const App = () => {
  return (
    <Routes>
      {
        routes.map((e) => (
          <Route path={e.path} element={e.element} key={e.key} />
        ))
      }
    </Routes>
  )
}
export default App;