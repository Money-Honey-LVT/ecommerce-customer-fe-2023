import { Badge, Card, CardSection, Flex, Group, Stack, Text } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { IconStarFilled } from '@tabler/icons-react';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ROUTER from '../../config/router';
import { Product } from '../../types/models/Product';
import { formatCurrency, getColorsOfProduct } from '../../utils/helpers';
import { ColorSelector } from './ColorSelector';
import { SideSelector } from './SizeSelector';

interface Props {
  product: Product | null;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const colors = getColorsOfProduct(product?.properties);
  const navigate = useNavigate();

  const { hovered, ref } = useHover();

  const [colorSelect, setColorSelect] = useState('');

  const handleClickProduct = () => {
    navigate(`${ROUTER.PRODUCT.INDEX}/${product?.id}`);
  };

  const isColorSelected = (color: string) => {
    if (!colors) return false;
    const bool = colorSelect === color ? true : false;
    return bool;
  };

  const renderOverallRating = (rating: number | undefined) => {
    if (!rating) return null;
    return (
      <Badge ml={5} mt={5} px={'xs'} color="blue" radius={'sm'}>
        <Flex gap={2} align={'center'}>
          <Text>{rating}</Text> <IconStarFilled size={14} /> <Text>(13)</Text>
        </Flex>
      </Badge>
    );
  };

  const handleSelectColor = (color: string) => {
    setColorSelect(color);
  };

  useEffect(() => {
    const selectedItems = _.filter(product?.properties, { color: colorSelect });
    const selectedSizes = _.map(selectedItems, (item) => ({ size: item.size, quantity: item.quantity }));

    console.log(selectedSizes);
  }, [colorSelect]);

  return (
    <Card padding="0" radius="lg">
      <CardSection sx={{ backgroundImage: `url(${product?.image})`, position: 'relative' }} h={420} ref={ref}>
        {hovered ? <SideSelector productId={product?.id} color={colorSelect} /> : null}
        {renderOverallRating(4)}
      </CardSection>

      <Group>
        {colors?.map((color, index) => (
          <ColorSelector
            key={index}
            color={color}
            isSelected={isColorSelected(color)}
            onClick={() => handleSelectColor(color)}
          />
        ))}
      </Group>

      <Stack mt={5} spacing={2} onClick={() => handleClickProduct()}>
        <Text>{product?.name}</Text>
        <Text weight={'bolder'}>{formatCurrency(product?.price)}</Text>
      </Stack>
    </Card>
  );
};

export default ProductCard;
