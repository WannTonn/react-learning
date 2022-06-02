import React, { useState, useRef, useEffect } from 'react';
import { CheckOutlined } from '@ant-design/icons';
import './style.scss';

const TodoList = () => {

  const [inputVal, setInputVal] = useState('');
  const [todoList, setTodoList] = useState([]);
  const firstRender = useRef(true);
  const handleSubmit = (e) => {
    e.preventDefault();
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
  const handleCheckThing = (id: number) => {
    let arr = todoList.map((e) => {
      return e.id === id ? { ...e, isChecked: true } : e
    })
    setTodoList(arr);
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
        <form onSubmit={handleSubmit}>
          <div className='inputWrapper'>
            <input className='todoInput' type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)} placeholder='今天要做什么呢？' />
            <button type='submit' style={{ display: 'none' }} />
            <button className='btn' onClick={() => {
              todoList.length && setTodoList([]);
            }}>Clear</button>
          </div>
        </form>
        <div className="todoLists">
          {
            todoList.map((e, index) => (
              <div className="item" key={e.id}>
                <div className={`thing ${e.isChecked ? 'isChecked' : ''}`}>
                  {e.name}
                </div>
                <div className="optBox">
                  {!e.isChecked ? <div className='checkBtn' onClick={() => handleCheckThing(e.id)}>
                    <CheckOutlined />
                  </div> : null}
                  <div className='delBtn' onClick={() => handleDelThing(e.id)}>×</div>
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