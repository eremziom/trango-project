import db from '../db';

export const initialState = {
  order: {
    cart: '',
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
