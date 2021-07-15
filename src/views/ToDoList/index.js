/*
 * @Author: WannTonn
 * @Date: 2021-07-11 20:56:39
 * @Description: 
 * @FilePath: /react-learning/src/views/ToDoList/index.js
 */
import React, { Component } from "react";
import 'antd/dist/antd.css';
import { Input, Button, Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;
class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <Layout>
          <Header>
          {/* <LaptopOutlined /> */}
            <Menu theme="dark" mode="horizontal">
              <Menu.Item key="1">nav1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Layout>
            <Sider width={200} style={{background: '#fff'}}>
              <Menu
               mode="inline"
               defaultSelectedKeys={['1']}
               difaultOpenKeys={['sub1']}
               >
                 <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                   <Menu.Item key="1">option1</Menu.Item>
                   <Menu.Item key="2">option2</Menu.Item>
                   <Menu.Item key="3">option3</Menu.Item>
                 </SubMenu>
               </Menu>
            </Sider>
            <Layout style={{padding: '0 24px 24px'}}>
              <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content style={{
                padding: 24,
                margin: 0,
                minHeight: '90vh'
              }}>
                Content
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    )
  }
}

export default ToDoList;