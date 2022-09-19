import React, { useState } from 'react';
import { observer } from 'mobx-react';
import Children from './children';
import './style.scss';
import { Button, Form } from 'antd';
/**
 * @desctiption 
*/

export default observer(() => {
  const [list, setList] = useState([]);
  const [form] = Form.useForm();
  const handleConfirm = (newList) => {
    console.log(newList, 12);
    
    setList(newList);
  }

  const handleSubmit = async () => {
    let values = await form.validateFields();
    console.log(values);
    
  }
  return (
    <div className='container'>
      <Form form={form}>
        
      <Children value={list} onConfirm={handleConfirm} />
      </Form>

      <Button onClick={handleSubmit}>submitttt</Button>
    </div>
  )
})
