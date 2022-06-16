import React from 'react';
import { Tabs } from 'antd';
import TodoList from './views/ToDoList';
import Animation from './views/Animation';
const navs = [
  {
    key: 1,
    tab: 'TodoList',
    content: <TodoList />
  },
  /* {
    key: 2,
    tab: 'Animation',
    content: <Animation />
  }, */

]
const { TabPane } = Tabs;
const App = () => {
  return (
    <>
      {/* <Tabs defaultActiveKey="1" centered >
      {
        navs.map(e => (
          <TabPane tab={e.tab} key={e.key} >
          {e.content}
          </TabPane>
          ))
        }
      </Tabs> */}
      < TodoList />
    </>
  )
}
export default App;