import React, { useState, useRef, useEffect } from 'react';
import { CheckOutlined, CloseOutlined, RestFilled } from '@ant-design/icons';
import { Switch, Input } from 'antd';
import dayjs from 'dayjs';
import './style.scss';

const TodoList = () => {

  const [inputVal, setInputVal] = useState('');
  const [todoList, setTodoList] = useState([]);
  const firstRender = useRef(true);
  const handleSubmit = () => {
    if (!inputVal) { return false };
    setTodoList([...todoList, {
      id: new Date().getTime(),
      name: inputVal
    }])
    setInputVal('');
  }

  /**
   * @description 删除某个项目
   * @param
   */
  const handleDelThing = (id: number) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }
  /**
   * @description 完成行项目
   * @param
   */
  const handleCheckThing = (isChecked, id: number) => {
    let arr = todoList.map((e) => {
      return e.id === id ? { ...e, isChecked } : e
    })
    setTodoList(arr);
  }
  const handleKeydown = (e) => {
    if ((e.metaKey || e.ctrlKey) && e.keyCode === 13) {
      handleSubmit();
    }
  }
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      localStorage.setItem('TodoItem', JSON.stringify([...todoList]))
    }
  }, [todoList])
  useEffect(() => {
    let localTodoItem = localStorage.getItem('TodoItem');
    if (localTodoItem) {
      setTodoList(localTodoItem ? JSON.parse(localTodoItem) : []);
    }
  }, [])
  return (
    <div className='App'>
      <div className="title">Todo List</div>
      <div className="todoListWrapper">
        <div className='inputWrapper'>
          <Input.TextArea autoSize={{ minRows: 1, maxRows: 3 }} value={inputVal} className='todoInput' onChange={(e) => setInputVal(e.target.value)} placeholder='输入今天要做的事情，按下ctrl 或 ⌘ + enter 组合键即可' onKeyDown={handleKeydown} />
          <div className='btn' onClick={() => {
            todoList.length && setTodoList([]);
          }}><RestFilled />
          </div>
        </div>
        <div className="todoLists">
          {
            todoList.map((e, index) => (
              <div className="item" key={e.id}>
                <p className='date'>
                  {dayjs(e.id).format('YYYY-MM-DD HH:mm')}
                </p>
                <div className="itemBox">
                  <Switch onChange={(d) => handleCheckThing(d, e.id)} className="switchItem" checked={e.isChecked} checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} size="small" />
                  <div className={`thing ${e.isChecked ? 'isChecked' : ''}`}>
                    {e.name}
                  </div>
                  <div className="optBox">
                    <div className='delBtn' onClick={() => handleDelThing(e.id)}>×</div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default TodoList;