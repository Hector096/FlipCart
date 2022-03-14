import React, { useState } from 'react';
import {
    Form, Input, Button, Typography,
} from 'antd';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
export default function NewProduct() {
    const { Title } = Typography;
    const [loading, setLoading] = useState(false);
    const alert = useAlert();
    const dispatch = useDispatch();

    const onFinish = (values) => {
        setLoading(true);
        if (values) {
            console.log(values);
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
        <div className="container mt-5 pt-5">
            <Title className="text-center mb-5">New Category</Title>
            {/* eslint-disable-next-line */}
            <Form {...formItemLayout}
                name="newProduct"
                onFinish={onFinish}
                className="d-flex flex-column align-items-center"
            >
                <Form.Item
                    label="Name"
                    name="name"
                    style={{
                        width: '100%',
                    }}
                    rules={[
                        {
                            required: true,
                            message: 'Please input the category name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Description"
                    name="description"
                    style={{
                        width: '100%',
                    }}
                    rules={[
                        {
                            required: true,
                            message: 'Please input the category name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Image"
                    name="img"
                    style={{
                        width: '100%',
                    }}
                    rules={[
                        {
                            required: true,
                            message: 'Please input the category name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Price($)"
                    name="price"
                    style={{
                        width: '100%',
                    }}
                    rules={[
                        {
                            required: true,
                            message: 'Please input the category name!',
                        },
                    ]}
                >
                    <Input />
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
                            message: 'Please input the category name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Category"
                    name="category_id"
                    style={{
                        width: '100%',
                    }}
                    rules={[
                        {
                            required: true,
                            message: 'Please input the category name!',
                        },
                    ]}
                >
                    <Select>
                        <Option>Hello vishal</Option>
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" disabled={loading} type="primary">
                        {loading && (
                            <span className="spinner-border spinner-border-sm" />
                        )}
                        <span>Save</span>
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}