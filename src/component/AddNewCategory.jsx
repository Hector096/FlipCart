import React, { useState } from 'react';
import {
    Form, Input, Button,
} from 'antd';
import { useAlert } from 'react-alert';
import { useDispatch } from 'react-redux';
import { addCategory } from '../redux/action/category';


export default function NewCategory(props) {
    const [loading, setLoading] = useState(false);
    const alert = useAlert();
    const dispatch = useDispatch();
    const [form] = Form.useForm();


    const onFinish = (values) => {
        setLoading(true);
        if (values) {
            dispatch(addCategory(values))
                .then(() => {
                    setLoading(false);
                    alert.show('Category created sucessfully', {
                        type: 'success',
                        timeout: 5000,
                    });
                    form.resetFields()
                    props.close();
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
            <Form {...formItemLayout}
                form={form}
                name="newCategory"
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