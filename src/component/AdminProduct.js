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
import { fetchProducts, deleteProduct } from '../redux/action/product';
import { setMessage } from '../redux/action/message';
import AddNewProduct from './AddNewProduct';

export default function AdminProduct() {
  const { message } = useSelector((state) => state.message);
  const { user: currentUser } = useSelector((state) => state.auth);
  const productsList = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const alert = useAlert();
  const [successful, setSuccessful] = useState(false);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (currentUser.admin) {
      setLoading(true);
      dispatch(fetchProducts()).then(() => {
        setLoading(false);
      })
        .catch(() => {
          dispatch(setMessage('Unable to get product list'));
          setLoading(false);
        });
    }
  }, []);

  const onDelete = (id) => {
    dispatch(deleteProduct(id)).then(
      alert.show('Product Successfully Deleted!', {
        type: 'success',
        timeout: 5000,
      }),
    );
  };

  const columns = [
    {
      title: 'Product Name',
      dataIndex: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      align: 'right',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      sorter: true,
      align: 'right',
    },
    {
      title: 'Available Quantity',
      dataIndex: 'quantity',
      align: 'right',
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      align: 'right',
      render: (record) => <DeleteOutlined className="text-danger" style={{ fontSize: 20 }} onClick={() => { onDelete(record.id); }} />,
    },
  ];

  const closeProduct = () => setVisible(false);

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
        title="Add New Product"
        centered
        onCancel={() => {
          setVisible(false);
        }}
        footer={false}
        visible={visible}
        width={1000}
      >
        <AddNewProduct closeProduct={closeProduct} />
      </Modal>
      <Divider orientation="canter">All Products</Divider>
      <Button type="primary" className="mt-2 mb-3" onClick={() => setVisible(true)}>Create New Product</Button>
      <Table
        columns={columns}
        dataSource={productsList}
        rowKey={(record) => record.id}
        pagination={{ defaultPageSize: 6 }}
      />
    </>
  );
}

/* eslint-enable */
