import React, {useState} from 'react'
import {
    LoginOutlined,
    LogoutOutlined,
    HomeOutlined,
    AliwangwangOutlined,
    ShoppingCartOutlined,
    TagOutlined,
    PlusOutlined,
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
    <div className="logo pt-5 mt-5" />
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
      <Menu.Item className="fw-bold" key="1" icon={<HomeOutlined />}>
        HOME
      </Menu.Item>
      <Menu.Item className="fw-bold" key="2" icon={<TagOutlined />}>
        PRODUCTS
      </Menu.Item>
      <Menu.Item className="fw-bold" key="3" icon={<ShoppingCartOutlined />}>
       ORDERS
      </Menu.Item>.
      <Menu.Item className="fw-bold" key="4" icon={<AliwangwangOutlined />}>
       ADMIN
      </Menu.Item>
      <Menu.Item className="fw-bold" key="5" icon={<LoginOutlined />}>
        LOGIN
      </Menu.Item>
      <Menu.Item className="fw-bold" key="7" icon={<LogoutOutlined />}>
        LOGOUT
      </Menu.Item>
    </Menu>
  </Sider>
  )
}
