import './App.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Layout } from 'antd';
import { clearMessage } from './redux/action/message';
import Sidebar from './component/Sidebar';

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
    <Layout hasSider>
      <Sidebar />
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>

            <br />
            content
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>FlipCart ©2022 Created by Hector, Leo and Kamwa</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
