import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { ProductAction } from '../../reducers/product/product.actions';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducer';
import ProductCard from '../../components/Product/ProductCard';
import { Button, Center, Col, Divider, Grid, Group, Input, Select, Text } from '@mantine/core';

const Category = () => {
  const categoryId = useParams().categoryId || '';

  const dispatch = useAppDispatch();

  const getAllProducts = (productName: string = '') => {
    dispatch(
      ProductAction.SearchProduct({
        productName: productName,
        categoryId: parseInt(categoryId),
      })
    );
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  const { products, isFetchhing } = useSelector((state: RootState) => state.products);

  return (
    <>
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

export default Category;
