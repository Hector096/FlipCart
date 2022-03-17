import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Carousel, Divider, Card, Row, Col } from 'antd';
import { fetchProducts } from '../redux/action/product';

export default function Home() {
  const dispatch = useDispatch();
  const { Meta } = Card;
  const productsList = useSelector((state) => state.products.products)

  useEffect(() => {
      dispatch(fetchProducts());
  }, [])

  const shuffledProducts = productsList.sort(function(){return .5 - Math.random()});
  const selectedProducts = shuffledProducts.slice(0,3)

  const priceStyle = {
    textAlign: 'right',
    marginTop: '20px',
    color: 'black',
    fontWeight: '600'
  };

  const displayCards = selectedProducts.map((product) => (
    <Col key={product.id}>
    <div>
    <Card
      hoverable
      style={{ width: 220 }}
      cover={<img alt="product image" className='p-2' src={`${product.img}`} />}
    >
      <Meta title={`${product.name}`} className="text-truncate" description={`${product.description}`} />
      <Meta style={priceStyle} description={'$' + `${product.price}`}/>
    </Card>
    </div>
    </Col>
  ));

  const contentStyle = {
    height: '60vh',
    textAlign: 'center',
    width: '100vw',
    fit: "contain"
  };
  return (
    <>
    <Divider orientation="right">Homepage</Divider>
    <Carousel autoplay>
      <div>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center">
          { displayCards }
        </Row>
      </div>
      <div>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center">
          { displayCards }
        </Row>
      </div>
      <div>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center">
          { displayCards }
        </Row>
      </div>
      <div>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center">
          { displayCards }
        </Row>
      </div>
  </Carousel>
  </>
  )
}
