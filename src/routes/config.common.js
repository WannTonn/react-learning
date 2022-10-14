import TodoList from '@/views/ToDoList';
import Animation from '@/views/Animation';
import DateTransfer from '@/views/DateTransfer';
import NotFoundDom from '@/views/NotFoundDom';
import ImageUploader from '@/views/ImageUploader';
import DataBoard from '@/views/DataBoard';
import Shitshit from '@/views/Shitshit';
export default [
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
  },
  {
    key: 'dataBoard',
    path: '/dataBoard',
    element: <DataBoard />
  },
  {
    key: 'shitshit',
    path: '/shitshit',
    element: <Shitshit />
  }
];

