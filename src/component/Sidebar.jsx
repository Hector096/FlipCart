import React, {useState} from 'react'
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
  const [collapsed,setCollaped] = useState(false)

    const { Sider } = Layout;

    const onCollapse = collapsed => {
      setCollaped(collapsed);
    };
  return (
    <Sider
    collapsible collapsed={collapsed} onCollapse={onCollapse}
    breakpoint="lg"
    onBreakpoint={() => {
      setCollaped(false);
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
      </Menu.Item>.
      <Menu.Item className="fw-bold" key="4" icon={<UploadOutlined />}>
       ADMIN
      </Menu.Item>
      <Menu.Item className="fw-bold" key="5" icon={<BarChartOutlined />}>
        LOGIN
      </Menu.Item>
      <Menu.Item className="fw-bold" key="6" icon={<CloudOutlined />}>
       SIGN UP
      </Menu.Item>
      <Menu.Item className="fw-bold" key="7" icon={<AppstoreOutlined />}>
        LOGOUT
      </Menu.Item>
    </Menu>
  </Sider>
  )
}
