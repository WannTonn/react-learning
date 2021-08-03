import React from 'react';
import './App.scss';
import { Tabs } from 'antd';
import TodoList from './views/ToDoList';
import Gallery from './views/Gallery';
const navs = [
  {
    key: 1,
    tab: 'TodoList',
    content: <TodoList />
  },
  {
    key: 2,
    tab: 'Gallery',
    content: <Gallery />
  }
]
const { TabPane } = Tabs;
const App = () => {
  return (
    <>
      <Tabs defaultActiveKey="1" centered>
        {
          navs.map(e => (
            <TabPane tab={e.tab} key={e.key}>
              {e.content}
            </TabPane>
          ))
        }
      </Tabs>
    </>
  )
}
export default App;