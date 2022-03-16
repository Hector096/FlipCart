import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrders } from '../redux/action/order';
import { Table, Divider } from 'antd';
import { LeftSquareTwoTone } from '@ant-design/icons';

export default function Orders() {
  const dispatch = useDispatch();
  const { user: currentUser } = useSelector(state => state.auth);
  const ordersList = useSelector((state) => state.orders.orders);

  const userOrders = ordersList.filter(order => {
    order.user_id === currentUser.id
  })

  useEffect(() => {
    if (!ordersList.length) {
      dispatch(fetchOrders());
    }
  }, [])

  const columns = [
    { 
      title: 'Product ID',
      dataIndex: 'product_id',
      width: '20%',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      sorter: true,
      width: '20%',
      align: 'right',
    },
    {
      title: 'Shipped',
      dataIndex: 'status',
      width: '20%',
      align: 'right',
      render : (text) => String(text),
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      align: 'right',
      render: () => <a>Delete</a>,
    }
  ]

  return (
    <>
    <Divider orientation="right">Orders</Divider>
    <Table
      columns={columns}
      dataSource={userOrders}
      rowKey={record => record.id}
    />
    </>
  )
}
