import React, { useEffect, useState } from 'react';
import { Product } from '../../types/models/Product';
import { faker } from '@faker-js/faker';
import { formatCurrency, randomArray } from '../../utils/helpers';
import ProductCard from '../../components/Product/ProductCard';
import { Col, Grid } from '@mantine/core';

const ProductsList = () => {
  const fakeData = {
    id: '123',
    name: faker.commerce.productName(),
    price: 100000,
    image: faker.image.fashion(),
    description: faker.commerce.productDescription(),
    rating: 4.5,
    quantity: 120,
  };
  return (
    <>
      <Grid>
        {randomArray(5).map((_, index) => (
          <Col xs={6} md={3} lg={2.5}>
            <ProductCard product={fakeData} />
          </Col>
        ))}
      </Grid>
    </>
  );
};

export default ProductsList;
