import { API_URLS } from '../../config/constants/api';
import { AppDispatch } from '../../redux/store';
import { Callback } from '../../types/helpers/callback';
import { useCallApi } from '../../utils/api';
import { notiType, renderNotification } from '../../utils/helpers';
import { OrderActionType, OrderThunkAction } from './order.types';

const MakeOrder =
  (payload: any, cb?: Callback): OrderThunkAction =>
  async (dispatch: AppDispatch) => {
    dispatch({
      type: OrderActionType.ORDER_PENDING,
    });

    const api = API_URLS.ORDER.order();

    const { response, error } = await useCallApi({ ...api, payload });
    if (!error && response?.status === 200) {
      dispatch({
        type: OrderActionType.ORDER_SUCCESS,
      });
      cb?.onSuccess?.();
      renderNotification('Thông báo', 'Đặt hàng thành công', notiType.SUCCESS);
    } else {
      dispatch({
        type: OrderActionType.ORDER_FAIL,
      });
      renderNotification('Thông báo', error.response.data.devMsg, notiType.ERROR);
    }
  };

export const Order = { MakeOrder };
