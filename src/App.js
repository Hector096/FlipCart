import './App.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Layout } from 'antd';
import { clearMessage } from './redux/action/message';
import Sidebar from './component/Sidebar';
import Login from './component/Login';
import Signup from './component/Signup';

function App() {
  const dispatch = useDispatch();
  const {
    Content, Footer,
  } = Layout;
  const location = useLocation();

  useEffect(() => {
    dispatch(clearMessage()); // clear message when changing location
  }, [dispatch, location]);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <Signup />
        </Content>
        <Footer style={{ textAlign: 'center' }}>FlipCart ©2022 Created by Hector, Leo and Kamwa</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
