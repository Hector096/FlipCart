import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteOutlined } from '@ant-design/icons';
import { fetchOrders, deleteOrders } from '../redux/action/order';
import { Divider } from 'antd';
import { fetchProducts } from '../redux/action/product';
import { List, Steps } from 'antd';
import { useAlert } from 'react-alert';

export default function Orders() {
  const dispatch = useDispatch();
  const { Step } = Steps;
  const { user: currentUser } = useSelector(state => state.auth);
  const alert = useAlert();
  const ordersList = useSelector((state) => state.orders.orders);
  const productsList = useSelector((state) => state.products.products)

  const userOrders = ordersList.filter(order => {
    if (order.user_id === currentUser.id) {
      return order
    }
  })

  const currentProduct = (id) => {
    const myProduct = productsList.filter(product => {
      if (product.id === id) {
        return product
      }
    })
    return myProduct
  }

  useEffect(() => {
    if (!ordersList.length) {
      dispatch(fetchOrders());
    }
    if (!productsList.length) {
      dispatch(fetchProducts());
    }
  }, [])

  const onDelete = (id)=>{
    dispatch(deleteOrders(id)).then( alert.show('Order Successfully Deleted!', {
     type: 'success',
     timeout: 5000,
   }))
   }

  const listData = [];

  if (ordersList.length > 0 && productsList.length > 0) {
    userOrders.forEach(function(order) {
      listData.push({
        id: order.id,
        title: currentProduct(order.product_id)[0].name,
        img: currentProduct(order.product_id)[0].img
      });
    });
  }

  return (
    <>
    <Divider orientation="left">Orders</Divider>
    <List
      itemLayout="vertical"
      size="small"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 5,
      }}
      dataSource={listData}
      renderItem={item => (
        <>
        <List.Item
          key={item.title}
          actions={[
            <DeleteOutlined className="text-danger" style={{fontSize: 20}} onClick={() =>{onDelete(item.id)}}/>
          ]}
          extra={
            <img
              width={200}
              height={200}
              alt="product image"
              src={item.img}
            />
          }
        >
          <List.Item.Meta
            title={item.title}
            description={`Your order id number is #${item.id}`}
          />
          <Steps direction="vertical" current={1}>
            <Step title="Ordered" description="The order has been placed"/>
            <Step title="In Progress" description="The order is being prepared"/>
            <Step title="Shipped" description="The order has been shipped"/>
          </Steps>
        </List.Item>
        <Divider></Divider>
        </>
      )}
    />
  </>
  )
}
