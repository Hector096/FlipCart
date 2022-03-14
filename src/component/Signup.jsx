import React, { useState } from 'react';
import {
  Form, Input, Button, Typography,
} from 'antd';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';

export default function Signup() {
    const { Title } = Typography;
    const [loading, setLoading] = useState(false);
    // const { message } = useSelector(state => state.message);
    const alert = useAlert();
    const dispatch = useDispatch();
    const onFinish = (values) => {
      setLoading(true);
      if (values) {
        console.log(values);
        // dispatch(login(values.username, values.password))
        //   .then(() => {
        //     setLoading(false);
        //     alert.show('You are logged in', {
        //       type: 'success',
        //       timeout: 5000,
        //     });
        //   })
        //   .catch(() => {
        //     setLoading(false);
        //   });
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
  
    return (
      <div className="container mt-5 pt-5 pe-5">
        <Title className="text-center mb-5">Login</Title>
        {/* eslint-disable-next-line */}
        <Form {...formItemLayout}
          name="login"
          onFinish={onFinish}
          autoComplete="off"
          className="d-flex flex-column align-items-center"
        >
          {/* {message && (
          <div className="form-group">
            <div className="alert alert-danger" role="alert">
              {message}
            </div>
          </div>
          )} */}
          <Form.Item
            label="Username"
            name="email"
            style={{
              width: '100%',
            }}
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>
  
          <Form.Item
            label="Password"
            name="password"
            style={{
              width: '100%',
            }}
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
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
    )
}
