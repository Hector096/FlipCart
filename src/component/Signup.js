import React, { useState } from 'react';
import {
  Form, Input, Button, Typography,
} from 'antd';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { register } from '../redux/action/auth';

export default function Signup() {
  const { Title } = Typography;
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);
  const alert = useAlert();
  const dispatch = useDispatch();
  const onFinish = (values) => {
    setLoading(true);
    if (values) {
      dispatch(register(values))
        .then(() => {
          setLoading(false);
          alert.show('You are Registered Sucessfully', {
            type: 'success',
            timeout: 5000,
          });
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 6,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 14,
      },
      lg: {
        offset: 0,
      },
    },
  };

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container mt-5 pt-5">
      <Title className="text-center mb-5">Sign up</Title>
      {/* eslint-disable-next-line */}
        <Form {...formItemLayout}
          form={form}
          name="signup"
          onFinish={onFinish}
          className="d-flex flex-column align-items-center"
        >
          {message && (
          <div className="form-group">
            <div className="alert alert-danger" role="alert">
              {message}
            </div>
          </div>
          )}
          <Form.Item
            label="Name"
            name="name"
            style={{
              width: '100%',
            }}
            rules={[
              {
                required: true,
                message: 'Please input your name!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            style={{
              width: '100%',
            }}
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Address"
            name="address"
            style={{
              width: '100%',
            }}
            rules={[
              {
                required: true,
                message: 'Please input your Shipping Address!',
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            label="Password"
            hasFeedback
            name="password"
            style={{
              width: '100%',
            }}
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                min: 6,
                message: 'Password must contain more then 6 alphanumeric character!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Confirm Password"
            hasFeedback
            name="password_confirmation"
            dependencies={['password']}
            style={{
              width: '100%',
            }}
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" disabled={loading} type="primary">
              {loading && (
              <span className="spinner-border spinner-border-sm" />
              )}
              <span>  Submit</span>
            </Button>
          </Form.Item>
        </Form>
    </div>
  );
}
