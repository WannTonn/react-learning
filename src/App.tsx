import React from 'react';

import TodoList from './views/ToDoList';
import Animation from './views/Animation';
import { Route, Routes } from 'react-router-dom';
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
]

const App = () => {
  return (
    <Routes>
      {
        routes.map((e) => (
          <Route path={e.path} element={e.element} />
        ))
      }
    </Routes>
  )
}
export default App;