import React, { useState } from 'react';
import { observer } from 'mobx-react';
import './style.scss';
import { Button, Form, Input, Select } from 'antd';
/**
 * @desctiption 
 * 
*/

interface IProps {
  value: any[];
  onConfirm: Function;
}
export default observer((props: IProps) => {
  const { value, onConfirm } = props;
  const [form] = Form.useForm();
  const [arr, setArr] = useState([]);
  const handleDel = (idx) => {
    let newList = JSON.parse(JSON.stringify(value));
    newList.splice(idx, 1);
    onConfirm(newList);
  }

  const handleAdd = () => {
    let newList = JSON.parse(JSON.stringify(value));
    newList.push({
      valueA: Math.random().toString().substring(0, 3),
      valueB: Math.random().toString().substring(0, 3)
    });
    onConfirm(newList);
  }
  const handleChange = (val, type, idx) => {
    let newList = JSON.parse(JSON.stringify(value));
    let editOne = newList.filter((e, i) => i === idx)[0];
    console.log(editOne, 34);

    editOne[type] = val;
    newList[idx] = editOne;
    setArr(newList);
    onConfirm(newList);
  }
  const handleSubmit = async () => {
    const values = await form.validateFields();
    console.log(values);

  }
  return (
    <div className='children'>
      {/* <Button onClick={handleAdd}>add</Button> */}
      {/* {
        value.map((e, idx) => (
          <div className="item" key={Math.random()}>
            <Input placeholder='aaa' defaultValue={e.valueA} onChange={(e) => handleChange(e.target.value, 'valueA', idx)} />
            <Input placeholder='bbb' defaultValue={e.valueB} onChange={(e) => handleChange(e.target.value, 'valueB', idx)} />
            <Button onClick={() => handleDel(idx)}>x</Button>
          </div>
        ))

      } */}
      {/* <Form form={form}> */}
        <Form.List name="arr">

          {(fields, { add, remove }) => (
            <>
              {
                fields.map((e, idx) => (
                  <div className="item" key={Math.random()}>
                    <Form.Item noStyle shouldUpdate>
                      {
                        () => (
                          <Form.Item
                            {...e}
                            name={[e.name, 'valueA']}
                          >
                            <Input placeholder='aaa' addonAfter={(<Form.Item noStyle {...e} name={[e.name, 'valueC']}><Select options={[{label: '1', value: 'aaa'}, {label: '2', value: 'bbb'}]}/></Form.Item>  )} />
                          </Form.Item>
                        )
                      }
                    </Form.Item>

                    <Form.Item
                      {...e}
                      name={[e.name, 'valueB']}
                    >
                      <Input placeholder='bbb' />
                    </Form.Item>
                    <Button onClick={() => remove(e.name)}>x</Button>
                  </div>
                ))
              }
              <Form.Item>
                <Button onClick={() => add()}>addd</Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      {/* </Form> */}
      {/* <Button onClick={handleSubmit}>submit</Button> */}
    </div>
  )
})