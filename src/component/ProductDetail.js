/* eslint-disable */
import React, { useState, useEffect } from 'react';
import {
  Card, Image, Button, Modal, Form, Input, InputNumber,
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { addOrder } from '../redux/action/order';

const { Meta } = Card;

export default function ProductDetail(props) {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { user: currentUser } = useSelector((state) => state.auth);
  const [form] = Form.useForm();
  const alert = useAlert();
  const { setFieldsValue } = form;
  const priceStyle = {
    textAlign: 'center',
    marginTop: '20px',
    color: 'black',
    fontWeight: '600',
  };

  useEffect(() => {
    setFieldsValue({
      address: currentUser.address,
    });
  }, []);

  const onFinish = (values) => {
    setLoading(true);
    delete values.address;
    Object.assign(values, { product_id: props.data.id });
    if (values) {
      dispatch(addOrder(values)).then(() => {
        setLoading(false);
        alert.show('Product Ordered sucessfully', {
          type: 'success',
          timeout: 5000,
        });
        form.resetFields();
        setVisible(false);
        props.close();
      })
        .catch(() => {
          setLoading(false);
        });
    }
  };

  return (
    <>
      <Modal
        title={`${props.data.name}`}
        centered
        onCancel={() => {
          setVisible(false);
        }}
        footer={false}
        visible={visible}
        width={1000}
      >
        <Form form={form} onFinish={onFinish}>

          <Form.Item
            label="Shipping Address"
            name="address"
            style={{
              width: '100%',
            }}
          >
            <Input disabled />
          </Form.Item>
          <Form.Item
            label="Quantity"
            name="quantity"
            style={{
              width: '100%',
            }}
            rules={[
              {
                required: true,
                message: 'Please input the Quantity!',
              },
            ]}
          >
            <InputNumber
              style={{
                width: '100%',
              }}
              min={0}
            />
          </Form.Item>

          <Form.Item>
            <Button htmlType="submit" block disabled={loading} type="primary">
              {loading && (
              <span className="spinner-border spinner-border-sm" />
              )}
              <span>Buy</span>
            </Button>
          </Form.Item>

        </Form>

      </Modal>

      <Card
        cover={(
          <div className="d-flex justify-content-center">
            <Image
              width={300}
              src={`${props.data.img}`}
            />
          </div>
    )}
        actions={[
          <div className="p-2">
            {' '}
            <Button type="primary" block size="large" onClick={() => { setVisible(true); }}>Buy</Button>
          </div>,
        ]}
      >
        <Meta
          title={props.data.name}
          description={props.data.description}
        />
        <Meta style={priceStyle} description={'$' + `${props.data.price}`} />
      </Card>
    </>
  );
}

/* eslint-enable */
