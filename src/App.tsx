import React from 'react';

import TodoList from './views/ToDoList';
import Animation from './views/Animation';
import DateTransfer from './views/DateTransfer';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NotFoundDom from './views/NotFoundDom';
import ImageUploader from './views/ImageUploader';
const routes = [
  {
    key: 'todolist',
    path: '/',
    element: <TodoList />
  },
  {
    key: 'animation',
    path: '/animation',
    element: <Animation />
  },
  {
    key: 'any',
    path: '*',
    element: <NotFoundDom />
  },
  {
    key: 'dateTransfer',
    path: '/dateTransfer',
    element: <DateTransfer />
  },
  {
    key: 'imageUploader',
    path: '/imageUploader',
    element: <ImageUploader />
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