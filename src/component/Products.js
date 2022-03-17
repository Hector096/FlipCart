/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Card, Row, Col, Divider, Space, Modal, Image,
} from 'antd';
import { fetchProducts } from '../redux/action/product';
import ProductDetail from './ProductDetail';

export default function Products() {
  const dispatch = useDispatch();
  const { Meta } = Card;
  const productsList = useSelector((state) => state.products.products);
  const [visible, setVisible] = useState(false);
  const [modalData, setModalData] = useState('');

  useEffect(() => {
    if (productsList.length === 0) {
      dispatch(fetchProducts());
    }
  }, []);

  const priceStyle = {
    textAlign: 'right',
    marginTop: '20px',
    color: 'black',
    fontWeight: '600',
  };

  const closeModal = () => {
    setVisible(false);
  };

  const displayProducts = productsList.map((product) => (
    <Col key={product.id} className="mb-4">
      <div>
        <Space direction="vertical">
          <Card
            hoverable
            style={{ width: 220 }}
            cover={(
              <div className="d-flex" style={{ overflow: 'hidden', height: '200px' }}>
                <Image
                  src={`${product.img}`}
                />
              </div>
          )}
          >
            <Meta
              onClick={() => {
                setModalData(product);
                setVisible(true);
              }}
              title={`${product.name}`}
              className="text-truncate"
              description={`${product.description}`}
            />
            <Meta style={priceStyle} description={'$' + `${product.price}`} />
          </Card>
        </Space>
      </div>
    </Col>
  ));

  return (
    <>
      <Modal
        title="Product Detail"
        centered
        onCancel={() => {
          setVisible(false);
        }}
        footer={false}
        visible={visible}
        width={1000}
      >
        <ProductDetail data={modalData} close={closeModal} />
      </Modal>
      <Divider orientation="left">Products</Divider>
      <Row
        gutter={{
          xs: 8, sm: 16, md: 24, lg: 32,
        }}
        wrap
        justify="center"
      >
        { displayProducts }
      </Row>
    </>
  );
}

/* eslint-enable */
