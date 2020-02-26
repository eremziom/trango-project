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
    data: '',
    loading: {
      active: false,
      error: false,
    },
  },
};
