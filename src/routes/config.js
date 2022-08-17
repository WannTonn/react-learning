import TodoList from "@/views/ToDoList";
import Animation from "@/views/Animation";
import CommonConfig from './config.common';
import Layout from "@/index";
export default [
  {
    path: '/',
    component: Layout,
    routes: [
      ...CommonConfig
    ]
  }
]