import db from '../db';

export const initialState = {
  order: {
    orderData:{
      cart: '',
      customerData: '',
      details: '',
    },
    loading: {
      active: false,
      error: false,
    },
  },
  products: {
    data: db.products,
    loading: {
      active: false,
      error: false,
    },
  },
};
