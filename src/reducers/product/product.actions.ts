import { NavigateFunction } from 'react-router-dom';
import { API_URLS } from '../../config/constants/api';
import { AppDispatch } from '../../redux/store';
import { useCallApi } from '../../utils/api';
import { notiType, renderNotification } from '../../utils/helpers';
import { ProductActionType, ProductThunkAction } from './product.types';

export interface SearchProductPayload {
  productName: string;
  categoryId: number;
}

const SearchProduct =
  (payload: SearchProductPayload, navigate?: NavigateFunction): ProductThunkAction =>
  async (dispatch: AppDispatch) => {
    dispatch({
      type: ProductActionType.SEARCH_PRODUCT_PENDING,
    });

    const api = API_URLS.PRODUCT.searchProduct();

    const { response, error } = await useCallApi({ ...api, payload });

    if (!error && response?.status === 200) {
      const { data } = response;
      dispatch({
        type: ProductActionType.SEARCH_PRODUCT_SUCCESS,
        payload: data,
      });
    } else {
      dispatch({
        type: ProductActionType.SEARCH_PRODUCT_FAIL,
      });
      renderNotification('Thông báo', error.response.data.devMsg, notiType.ERROR);
    }
  };

// const GetProductById = (payload: any)

export const ProductAction = {
  SearchProduct,
};
