import React from 'react';
import './App.scss';
import { Tabs } from 'antd';
import TodoList from './views/ToDoList';
import Clipboard from './views/Clipboard';
// import Animation from './views/Animation';
const navs = [
  {
    key: 1,
    tab: 'TodoList',
    content: <TodoList />
  },
  {
    key: 2,
    tab: 'Animation',
    content: <Animation />
  },

]
const { TabPane } = Tabs;
const App = () => {
  return (
    <>
      <Tabs defaultActiveKey="2" centered>
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