import { Schemas } from './schemas';

export const HEADERS = {
  header: () => ({
    accept: 'application/json',
    'Content-Type': 'application/json; charset=UTF-8',
  }),
  authHeader: () => ({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Authorization: `${localStorage.getItem('token')}`,
  }),
};

export const API_URLS = {
  USER: {
    signup: () => ({
      endPoint: `${Schemas.UserSchema}/Signup`,
      method: 'POST',
      headers: HEADERS.header(),
    }),

    login: () => ({
      endPoint: `${Schemas.UserSchema}/Login`,
      method: 'POST',
      headers: HEADERS.header(),
    }),

    activeUser: (email: string) => ({
      endPoint: `${Schemas.UserSchema}/Active/?email=${email}`,
      method: 'POST',
      headers: HEADERS.header(),
    }),

    forgotPassword: (email: string) => ({
      endPoint: `${Schemas.UserSchema}/ForgotPassword?email=${email}`,
      method: 'GET',
      headers: HEADERS.header(),
    }),

    resetPassword: (token: string, pass: string, confirmPass: string) => ({
      endPoint: `${Schemas.UserSchema}/ResetPassword?token=${token}&pass=${pass}&confirmPass=${confirmPass}`,
      method: 'GET',
      headers: HEADERS.header(),
    }),
  },
};
