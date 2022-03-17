import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/action/product';
import { Card } from 'antd';
import { Row, Col, Divider, Space } from 'antd';

export default function Products() {
  const dispatch = useDispatch();
  const { Meta } = Card;
  const productsList = useSelector((state) => state.products.products)

  useEffect(() => {
      dispatch(fetchProducts());
  }, [])

  const priceStyle = {
    textAlign: 'right',
    marginTop: '20px',
    color: 'black',
    fontWeight: '600'
  };

  const displayProducts = productsList.map((product) => (
    <Col key={product.id}>
      <div>
        <Space direction="vertical">
        <Card
          hoverable
          style={{ width: 220 }}
          cover={<img alt="product image" className='p-2' src={`${product.img}`} />}
        >
          <Meta title={`${product.name}`} className="text-truncate" description={`${product.description}`} />
          <Meta style={priceStyle} description={'$' + `${product.price}`}/>
        </Card>
        </Space>
      </div>
    </Col>
  ));

  return (
    <>
      <Divider orientation="left">Products</Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="left">
      { displayProducts }
      </Row>
    </>
  )
}
