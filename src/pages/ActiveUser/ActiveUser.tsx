import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import ROUTER from '../../config/router';
import { useEffect } from 'react';
import _ from 'lodash';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { UserAction } from '../../reducers/user/user.action';

const ActiveUser = () => {
  const location = useLocation().search;
  const email = _.chain(location).split('=').last().value();
  console.log(email);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(UserAction.ActiveUser({ email: email }, navigate));
  }, []);
  return <></>;
};

export default ActiveUser;
