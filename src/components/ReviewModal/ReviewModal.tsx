import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { ProductInCart } from '../../types/models/Cart';
import { Rating, Grid, Col, Image, AspectRatio, Stack, Text } from '@mantine/core';
import { ReviewForm } from './ReviewForm';

interface Props {
  products: ProductInCart[] | undefined;
}

export const ReviewModal = ({ products }: Props) => {
  const dispatch = useAppDispatch();

  return products ? (
    <>
      {products.map((product, index) => (
        <ReviewForm key={index} product={product} />
      ))}
    </>
  ) : null;
};
