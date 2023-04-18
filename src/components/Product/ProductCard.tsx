import { Button, Card, CardSection, Col, Grid, Group, Image, Stack, Text } from '@mantine/core';
import React, { PropsWithChildren } from 'react';
import { Product } from '../../types/models/Product';
import { useNavigate } from 'react-router-dom';
import { formatCurrency } from '../../utils/helpers';
import { SideSelector } from './SizeSelector';
import { useHover } from '@mantine/hooks';
import { ColorSelector } from './ColorSelector';

interface Props {
  product: Product | null;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const navigate = useNavigate();
  const { hovered, ref } = useHover();

  return (
    <Card padding="0" radius="lg">
      <CardSection sx={{ backgroundImage: `url(${product?.image})`, position: 'relative' }} h={380} ref={ref}>
        {hovered ? <SideSelector /> : null}
      </CardSection>
      <Stack mt={5}>
        <Group>
          <ColorSelector color="cyan" />
          <ColorSelector color="dark" />
          <ColorSelector color="blue" />
        </Group>
        <Text>{product?.name}</Text>
        <Text weight={'bolder'}>{formatCurrency(product?.price)}</Text>
      </Stack>
    </Card>
  );
};

export default ProductCard;
