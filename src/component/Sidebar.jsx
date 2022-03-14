import React from 'react'
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    UserOutlined,
    UploadOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
  import { Layout, Menu } from 'antd';


export default function Sidebar() {

    const { Sider } = Layout;
  return (
    <Sider
    style={{
      overflow: 'auto',
      height: '100vh',
      position: 'fixed',
      left: 0,
      top: 0,
      bottom: 0,
    }}
  >
    <div className="logo" />
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
      <Menu.Item className="fw-bold" key="1" icon={<UserOutlined />}>
        HOME
      </Menu.Item>
      <Menu.Item className="fw-bold" key="2" icon={<VideoCameraOutlined />}>
        PRODUCTS
      </Menu.Item>
      <Menu.Item className="fw-bold" key="3" icon={<UploadOutlined />}>
       ORDERS
      </Menu.Item>
      <Menu.Item className="fw-bold" key="4" icon={<BarChartOutlined />}>
        LOGIN
      </Menu.Item>
      <Menu.Item className="fw-bold" key="5" icon={<CloudOutlined />}>
       SIGN UP
      </Menu.Item>
      <Menu.Item className="fw-bold" key="6" icon={<AppstoreOutlined />}>
        LOGOUT
      </Menu.Item>
    </Menu>
  </Sider>
  )
}
