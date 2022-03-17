import React from 'react'
import { Tabs } from 'antd';
import AdminOrder from './AdminOrder';
import AdminProduct from './AdminProduct';

export default function Admin() {
    const { TabPane } = Tabs;

  return (
     <Tabs defaultActiveKey="1" centered>
    <TabPane tab="Orders" key="1">
      <AdminOrder/>
    </TabPane>
    <TabPane tab="Products" key="2">
      <AdminProduct/>
    </TabPane>
  </Tabs>
  )
}
