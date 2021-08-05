import React, { useState, useRef, useEffect } from 'react';

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
  const handleDelThing = (e) => {
    setTodoList(todoList.filter((todo) => todo.id !== e));
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
      <div className="todoListWrapper">
        <form onSubmit={handleSubmit}>
          <div className='inputWrapper'>

            <input className='todoInput' type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)} placeholder='请输入今天要做的事情' />
            <button className='addBtn' type='submit'>Add</button>
          </div>
        </form>
        <div className="todoLists">
          {
            todoList.map((e, index) => (
              <div className='item' key={e.id}>
                <div className='thing'>
                  {e.name}
                </div>
                <div className='delBtn' onClick={() => handleDelThing(e.id)}>x</div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default TodoList;