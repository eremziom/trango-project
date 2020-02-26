import Axios from 'axios';

/* selectors */
export const getAll = ({order}) => order.orderData.cart;

/* action name creator */
const reducerName = 'order';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const ADD_TO_CART = createActionName('ADD_TO_CART');
const GO_TO_ORDER = createActionName('GO_TO_ORDER');
const ADD_CUSTOMER_DATA = createActionName('ADD_CUSTOMER_DATA');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const addToCart = payload => ({ payload, type: ADD_TO_CART });
export const goToOrder = payload => ({payload, type: GO_TO_ORDER});
export const addCustomer = payload => ({payload, type: ADD_CUSTOMER_DATA});

/* THUNK */
// export const fetchAllPosts = () => {
//   return (dispatch, getState) => {
//     dispatch(fetchStarted());

//     Axios
//       .get('http://localhost:8000/api/posts')
//       .then(res => {
//         dispatch(fetchSuccess(res.data));
//       })
//       .catch(err => {
//         dispatch(fetchError(err.message || true));
//       });
//   };
// };

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...statePart,
        orderData: {
          cart: [
            ...statePart.orderData.cart, action.payload,
          ],
          customerData: statePart.orderData.customerData,
        },
      };
    }
    case GO_TO_ORDER: {
      return {
        ...statePart,
        orderData: {
          cart: action.payload,
          customerData: statePart.orderData.customerData,
        },
      };
    }
    case ADD_CUSTOMER_DATA: {
      return {
        ...statePart,
        orderData: {
          cart: statePart.orderData.cart,
          customerData: action.payload.customerData,
          details: action.payload.details,
        },
      };
    }
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    default:
      return statePart;
  }
}