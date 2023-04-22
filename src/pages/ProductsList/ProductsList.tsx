import React, { useEffect, useState } from 'react';
import { Product } from '../../types/models/Product';
import { faker } from '@faker-js/faker';
import { formatCurrency, randomArray } from '../../utils/helpers';
import ProductCard from '../../components/Product/ProductCard';
import { Button, Center, Col, Divider, Grid, Group, Input, Select, Text } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { CategoryAction } from '../../reducers/category/category.action';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducer';
import { ProductAction } from '../../reducers/product/product.actions';

const ProductsList = () => {
  const fakeData = {
    id: 123,
    name: faker.commerce.productName(),
    price: 100000,
    image: faker.image.fashion(),
    description: faker.commerce.productDescription(),
    rating: 4.5,
    quantity: 120,
  };

  const dispatch = useAppDispatch();
  const getAllProducts = () => {
    dispatch(
      ProductAction.SearchProduct({
        productName: '',
        categoryId: 0,
      })
    );
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  const { categories, isFetching } = useSelector((state: RootState) => state.categories);
  const { products } = useSelector((state: RootState) => state.products);
  const parentsCategories = categories?.filter((category) => category.categoryParentID === 0);

  const handleSelectCategory = (categoryId: number) => {
    dispatch(
      ProductAction.SearchProduct({
        productName: '',
        categoryId: categoryId,
      })
    );
  };
  return (
    <>
      <Text size={28} weight={'bolder'} my={20}>
        Danh mục sản phẩm
      </Text>
      <Group mb={15} align="center">
        <Button radius={'lg'} variant={'light'} miw={100} onClick={() => getAllProducts()}>
          Tất cả
        </Button>
        {parentsCategories?.map((category, index) => (
          <Button
            key={index}
            radius={'lg'}
            variant={'light'}
            miw={100}
            onClick={() => handleSelectCategory(category.id)}
          >
            {category.name}
          </Button>
        ))}
      </Group>

      {products ? (
        products?.length > 0 ? (
          <Grid mt={20}>
            {products.map((product, index) => (
              <Col key={index} xs={6} md={3} lg={2.4} mb={20}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Grid>
        ) : (
          <Center mt={50}>
            <Text weight={'bold'} size={'lg'}>
              Không có sản phẩm nào
            </Text>
          </Center>
        )
      ) : null}
    </>
  );
};

export default ProductsList;
