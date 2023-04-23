import { Card, Center, Col, Grid, Image, Stack, Text } from '@mantine/core';
import { Product } from '../../types/models/Product';
import { formatCurrency } from '../../utils/helpers';
import { useNavigate } from 'react-router-dom';
import ROUTER from '../../config/router';

interface Props {
  productList: Product[] | null;
}
export const SearchPopup = ({ productList }: Props) => {
  const navigate = useNavigate();
  if (productList) {
    return productList.length > 0 ? (
      <Card radius={'md'} shadow={'lg'} withBorder>
        {productList?.map((product, index) => (
          <Grid key={index} onClick={() => navigate(`${ROUTER.PRODUCT.INDEX}/${product.id}`)}>
            <Col span={3}>
              <Image width={50} height={50} withPlaceholder src={product.properties[0].imagePath} />
            </Col>
            <Col span={8}>
              <Text size={'xs'} weight={'bold'}>
                {product.name}
              </Text>
              <Text size={'xs'}>{formatCurrency(product.price)}</Text>
            </Col>
          </Grid>
        ))}
        {productList.length > 5 ? (
          <Center>
            <Text size={'sm'} underline>
              Xem tất cả kết quả
            </Text>
          </Center>
        ) : null}
      </Card>
    ) : (
      <Card radius={'md'} shadow={'lg'} withBorder>
        <Center>
          <Text>Không có sản phẩm nào phù hợp</Text>
        </Center>
      </Card>
    );
  } else return null;
};
