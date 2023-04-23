import { Center, Select, Stack, Text, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useDebouncedState } from '@mantine/hooks';
import { SearchPopup } from './SearchPopup';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { ProductAction } from '../../reducers/product/product.actions';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducer';
const Search = () => {
  const dispatch = useAppDispatch();

  const [value, setValue] = useDebouncedState('', 300);

  const SearchProduct = (value: string) => {
    dispatch(
      ProductAction.SearchProduct({
        productName: value,
        categoryId: 0,
      })
    );
  };
  useEffect(() => SearchProduct(value), [value]);

  const products = useSelector((state: RootState) => state.products.products);
  return (
    <Center my={50}>
      <Stack>
        <Text weight={'bolder'} size={32}>
          Bạn tìm gì hôm nay?
        </Text>
        <TextInput
          placeholder="Nhập từ khoá "
          radius="lg"
          size="lg"
          icon={<IconSearch />}
          defaultValue={value}
          onChange={(event) => setValue(event.currentTarget.value)}
        />
        {value !== '' ? <SearchPopup productList={products} searchValue={value}/> : null}
      </Stack>
    </Center>
  );
};

export default Search;
