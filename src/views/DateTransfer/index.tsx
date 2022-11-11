import React, { useState } from 'react';
import dayjs from 'dayjs';
import { Button, Divider, Form, Input, List, notification, Select } from 'antd';
import './style.scss';
import { DeleteOutlined } from '@ant-design/icons';
import { downloadFile } from '@/utils/util';

const DateTransfer = () => {
  const { Item } = Form;
  const [form] = Form.useForm();
  const [result, setResult] = useState([]);
  const options = [
    { value: 'YYYY-MM-DD HH:mm:ss:mss' },
    { value: 'YYYY-MM-DD HH:mm:ss:ms' },
    { value: 'YYYY-MM-DD HH:mm:ss' },
    { value: 'YYYY-MM-DD HH:mm' },
    { value: 'YYYY-MM-DD HH' },
  ];
  const handleSubmit = async () => {
    const values = await form.validateFields();
    const { inputVal, type } = values;
    let valArr = inputVal.split(',');
    let hasIncorrectVal = valArr.filter((e) => isNaN(e));
    if (hasIncorrectVal?.length) {
      notification.error({ message: '输入的时间戳有误，请检查' });
      return;
    }
    let result = valArr.map((e) =>
      dayjs(isNaN(e) ? '' : e.length < 13 ? e * Math.pow(10, 13 - e.length) : e).format(type)
    );
    setResult(result);
  };

  const handleKeydown = (e) => {
    if ((e.metaKey || e.ctrlKey) && e.keyCode === 13) {
      handleSubmit();
    }
  };

  return (
    <div className="wrapper">
      <div className="title">Date Transfer</div>
      <Form form={form} onFinish={handleSubmit}>
        <Item
          name="inputVal"
          rules={[
            { required: true, message: '请输入时间戳哦, 靓仔' },
            {
              validateTrigger: 'onSubmit',
              validator: (_, names) => {
                console.log(_);
                return Promise.resolve();
              },
            },
          ]}
        >
          <Input.TextArea
            autoSize={{ minRows: 2, maxRows: 5 }}
            placeholder='靓仔，请输入要转换的时间戳，批量转换以","分隔, ctrl / ⌘ + enter提交'
            onKeyDown={handleKeydown}
            allowClear
          />
        </Item>
        <Item name="type" initialValue={'YYYY-MM-DD HH:mm:ss'}>
          <Select options={options} placeholder="选择要转换的格式" onChange={handleSubmit} />
        </Item>
        <Button block type="primary" htmlType="submit">
          冲
        </Button>
        <Button block htmlType="reset" style={{ marginTop: 20 }}>
          不冲了
        </Button>
        <Button
          block
          htmlType="reset"
          style={{ marginTop: 20 }}
          onClick={() =>
            downloadFile('http://g.download.genvoice.net/2022-11/zixun/c0dd4837-d05b-446b-be18-0587725ff6b9.mp3')
          }
        >
          测试下载aa
        </Button>
        Button
      </Form>
      {result?.length ? (
        <>
          <Divider orientation="left">
            啊哈哈哈，结果来咯 <DeleteOutlined onClick={() => setResult([])} />{' '}
          </Divider>
          <List size="small" bordered dataSource={result} renderItem={(item) => <List.Item>{item}</List.Item>} />
        </>
      ) : null}
    </div>
  );
};

export default DateTransfer;
