import React, {useState} from 'react'
import {
    LoginOutlined,
    LogoutOutlined,
    HomeOutlined,
    AliwangwangOutlined,
    ShoppingCartOutlined,
    TagOutlined,
  } from '@ant-design/icons';
  import { useSelector, useDispatch } from 'react-redux';
  import { useAlert } from 'react-alert';
  import { useHistory, useLocation } from 'react-router-dom';
  import { Layout, Menu } from 'antd';
  import { logout } from '../redux/action/auth';


export default function Sidebar() {

  const location = useLocation()
  const alert = useAlert();
  const { user: currentUser } = useSelector(state => state.auth);
  const history = useHistory()
  const dispatch = useDispatch();
  const [collapsed,setCollaped] = useState(false)

    const { Sider } = Layout;

    const onCollapse = collapsed => {
      setCollaped(collapsed);
    };
    const onClickMenu = (item) => {
      console.log(item.key)
      if(item.key ==="/logout"){
        dispatch(logout()).then(() => {
          alert.show('You are logged out', {
            type: 'success',
            timeout: 5000,
          });
          history.push("/")
        })
      }else{
        history.push(item.key)
      }
    }
  return (
    <Sider
    collapsible collapsed={collapsed} onCollapse={onCollapse}
    breakpoint="lg"
    onBreakpoint={() => {
      setCollaped(false);
    }}

  >
    <div className="logo pt-5 mt-5" />
    <Menu theme="dark" mode="inline" defaultSelectedKeys={["/"]} selectedKeys={[location.pathname]} onClick={onClickMenu}>
      <Menu.Item className="fw-bold" key="/" icon={<HomeOutlined />}>
                HOME
      </Menu.Item>
      <Menu.Item className="fw-bold" key="/products" icon={<TagOutlined />}>
        PRODUCTS
      </Menu.Item>
      {currentUser ? (<Menu.Item className="fw-bold" key="/orders" icon={<ShoppingCartOutlined />}>
       ORDERS
      </Menu.Item>):(<></>)}
      {currentUser && currentUser.admin ? (<Menu.Item className="fw-bold" key="/admin" icon={<AliwangwangOutlined />}>
       ADMIN
      </Menu.Item>):(<></>)}
      {!currentUser ? (<Menu.Item className="fw-bold" key="/login" icon={<LoginOutlined />}>
        LOGIN
      </Menu.Item>):(<></>)}
      
      {currentUser ? (<Menu.Item className="fw-bold" key="/logout" icon={<LogoutOutlined />}>
        LOGOUT
      </Menu.Item>):(<></>)}
      
    </Menu>
  </Sider>
  )
}
