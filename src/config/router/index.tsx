const ROUTER = {
  HOME: {
    INDEX: '/',
  },
  AUTH: {
    LOGIN: '/login',
    SIGNUP: '/signup',
    FORGOTPASSWORD: '/forgot-password',
    RESETPASSWORD: '/reset-password',
    ACTIVE_USER: '/active-user',
  },
  PROFILE: {
    ORDER: '/order',
    INFO: '/profile/info',
    ORDERS: '/profile/orders',
    VOUCHER_WALLET: '/profile/voucher-wallet',
  },
  CART: {
    INDEX: '/cart',
  },
  PRODUCT: {
    ALL_PRODUCTS: '/all-products',
    PRODUCT_DETAILS: '/product/:id',
  },
  CATEGORY: {
    SHIRT: '/shirt',
    PANTS: '/pants',
    UNDERWEAR: '/underwear',
    ACCESSORIES: '/accessories',
  },
};

export default ROUTER;
