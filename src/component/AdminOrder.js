/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Table, Button, Modal, Divider,
} from 'antd';
import {
  DeleteOutlined,
} from '@ant-design/icons';
import { useAlert } from 'react-alert';
import { fetchOrders, deleteOrders } from '../redux/action/order';
import { setMessage } from '../redux/action/message';

export default function AdminOrder() {
  const { message } = useSelector((state) => state.message);
  const { user: currentUser } = useSelector((state) => state.auth);
  const ordersList = useSelector((state) => state.orders.orders);
  const dispatch = useDispatch();
  const [successful, setSuccessful] = useState(false);
  const [loading, setLoading] = useState(false);
  const alert = useAlert();
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [confirm, setConfirm] = useState(false);

  useEffect(() => {
    if (currentUser.admin) {
      setLoading(true);
      dispatch(fetchOrders()).then(() => {
        setLoading(false);
      })
        .catch(() => {
          dispatch(setMessage('Unable to get order list'));
          setLoading(false);
        });
    }
  }, []);

  const onDelete = (id) => {
    dispatch(deleteOrders(id)).then(alert.show('Order Successfully Deleted!', {
      type: 'success',
      timeout: 5000,
    }));
  };

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
      render: (text) => (text === false ? 'Pending' : 'Shipped'),
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      align: 'right',
      render: (record) => <DeleteOutlined className="text-danger" style={{ fontSize: 20 }} onClick={() => { onDelete(record.id); }} />,
    },
  ];

  return (
    <>

      {message && (
      <div className="form-group">
        <div className={successful ? 'alert alert-success' : 'alert alert-danger'} role="alert">
          {message}
        </div>
      </div>
      )}
      <Modal
        title="Are you sure?"
        centered
        onCancel={() => setConfirm(false)}
        visible={confirm}
        footer={[
          <Button key="back1" type="danger" disabled={deleteLoading}>
            {deleteLoading && (
              <span className="spinner-border spinner-border-sm" />
            )}
            <span> Yes</span>
          </Button>,
          <Button key="back" onClick={() => setConfirm(false)}>
            No
          </Button>,
        ]}
      />
      <Divider orientation="center">All Orders</Divider>
      <Table
        columns={columns}
        dataSource={ordersList}
        rowKey={(record) => record.id}
      />
    </>
  );
}

/* eslint-enable */
