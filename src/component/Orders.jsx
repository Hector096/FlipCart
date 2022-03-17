import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrders, deleteOrders } from '../redux/action/order';
import { Divider } from 'antd';
import { fetchProducts } from '../redux/action/product';
import { List, Steps, Button, Image } from 'antd';
import { useAlert } from 'react-alert';

export default function Orders() {
  const dispatch = useDispatch();
  const { Step } = Steps;
  const { user: currentUser } = useSelector(state => state.auth);
  const alert = useAlert();
  const ordersList = useSelector((state) => state.orders.orders);
  const productsList = useSelector((state) => state.products.products)

  const userOrders = ordersList.filter(order => {
    if(order){
      if (order.user_id === currentUser.id) {
        return order
      }
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
    if (ordersList.length === 0) {
      dispatch(fetchOrders());
    }
    if (productsList.length === 0) {
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
    <Divider orientation="left">Your Orders</Divider>
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
            <Button type='danger' onClick={() =>{onDelete(item.id)}}>Cancel Order</Button>
          ]}
          extra={
            <Image
            width={200}
            src={`${item.img}`}/>
          }
        >
          <List.Item.Meta
            title={item.title}
            description={`Your order id number is #${item.id}`}
          />
          <Steps direction="horizontal" current={1}>
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
