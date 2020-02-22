import db from '../db';

export const initialState = {
  order: {
    data: '',
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
