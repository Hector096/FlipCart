import React, { useEffect, useState } from 'react';
import {
    Form, Input, Button, Select, InputNumber, Modal
} from 'antd';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../redux/action/product';
import { fetchCategory } from '../redux/action/category';
import AddNewCategory from './AddNewCategory'

export default function NewProduct(props) {
    const { Option } = Select;
    const [loading, setLoading] = useState(false);
    const alert = useAlert();
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const [categoryVisible, setCategoryVisible] = useState(false);
    const categoriesList = useSelector((state) => state.categories.categories)

    useEffect(() => {
            dispatch(fetchCategory())
    }, [])

    const categoryOptions = categoriesList.map(category => (
        <Option
            key={category.id}
            value={`${category.id}`}
        >
            {`${category.name}`}
        </Option>
    ))

    const closeCategory =()=>setCategoryVisible(false)

    const onFinish = (values) => {
        setLoading(true);
        if (values) {
            dispatch(addProduct(values))
                .then(() => {
                    setLoading(false);
                    alert.show('Product created sucessfully', {
                        type: 'success',
                        timeout: 5000,
                    });
                    form.resetFields();
                    props.closeProduct()
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
        <div className="container mt-2">
            {/* eslint-disable-next-line */}
            <Modal
        title="Add New Category"
        centered
        onCancel={() => {
          setCategoryVisible(false)
        }}
        footer={false}
        visible={categoryVisible}
        width={1000}
      ><AddNewCategory close={closeCategory}/></Modal>
            <Form {...formItemLayout}
                name="newProduct"
                form={form}
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
                    label="Image Url"
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
                    <Select allowClear showSearch
                    filterOption={(input, option) =>  
                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                      }
                    >
                        {categoryOptions}
                    </Select>
                </Form.Item>
               <Form.Item style={{width: "100%",paddingLeft: "20%"}} >
               <Button type='dashed' className='mt-2' style={{width: "100%"}} onClick={()=>{setCategoryVisible(true)}}> Create New Category</Button>
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