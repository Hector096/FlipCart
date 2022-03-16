import React, { useEffect, useState } from 'react';
import {
    Form, Input, Button, Typography, Select, InputNumber
} from 'antd';
import { Redirect } from 'react-router-dom'
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../redux/action/product';
import { fetchCategory } from '../redux/action/category';

export default function NewProduct() {
    const { Title } = Typography;
    const { Option } = Select;
    const [loading, setLoading] = useState(false);
    const alert = useAlert();
    const dispatch = useDispatch();
    const categoriesList = useSelector((state) => state.categories.categories)
    console.log(categoriesList)

    useEffect(() => {
        if (!categoriesList.length) {
            dispatch(fetchCategory())
        }
    }, [])

    const categoryOptions = categoriesList.map(category => (
        <Option
            key={category.id}
            value={`${category.id}`}
        >
            {`${category.name}`}
        </Option>
    ))

    const onFinish = (values) => {
        setLoading(true);
        if (values) {
            console.log(values);
            dispatch(addProduct(values))
                .then(() => {
                    setLoading(false);
                    alert.show('Product created sucessfully', {
                        type: 'success',
                        timeout: 5000,
                    });
                    <Redirect to="/products" />;
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

    return (
        <div className="container mt-5 pt-5">
            <Title className="text-center mb-5">New Product</Title>
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
                            message: 'Please input the product name!',
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
                            message: 'Please input the product description!',
                        },
                    ]}
                >
                    <Input.TextArea />
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
                            message: 'Please input the image url!',
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
                            message: 'Please input the product price!',
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
                <Form.Item
                    label="Quantity"
                    name="quantity"
                    style={{
                        width: '100%',
                    }}
                    rules={[
                        {
                            required: true,
                            message: 'Please input the product quantity!',
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
                <Form.Item
                    label="Category"
                    name="category_id"
                    style={{
                        width: '100%',
                    }}
                    rules={[
                        {
                            required: true,
                            message: 'Please input the category!',
                        },
                    ]}
                >
                    <Select allowClear
                    >
                        {categoryOptions}
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