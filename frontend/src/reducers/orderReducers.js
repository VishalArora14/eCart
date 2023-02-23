// import {
//   CREATE_ORDER_REQUEST,
//   CREATE_ORDER_SUCCESS,
//   CREATE_ORDER_FAIL,
//   MY_ORDERS_REQUEST,
//   MY_ORDERS_SUCCESS,
//   MY_ORDERS_FAIL,
//   ALL_ORDERS_REQUEST,
//   ALL_ORDERS_SUCCESS,
//   ALL_ORDERS_FAIL,
//   UPDATE_ORDER_REQUEST,
//   UPDATE_ORDER_SUCCESS,
//   UPDATE_ORDER_FAIL,
//   UPDATE_ORDER_RESET,
//   DELETE_ORDER_REQUEST,
//   DELETE_ORDER_SUCCESS,
//   DELETE_ORDER_FAIL,
//   DELETE_ORDER_RESET,
//   ORDER_DETAILS_REQUEST,
//   ORDER_DETAILS_SUCCESS,
//   ORDER_DETAILS_FAIL,
//   CLEAR_ERRORS,
// } from "../constants/orderConstants";

import { createReducer } from '@reduxjs/toolkit';

// export const newOrderReducer = (state = {}, action) => {
//   switch (action.type) {
//     case CREATE_ORDER_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };

//     case CREATE_ORDER_SUCCESS:
//       return {
//         loading: false,
//         order: action.payload,
//       };

//     case CREATE_ORDER_FAIL:
//       return {
//         loading: false,
//         error: action.payload,
//       };
//     case CLEAR_ERRORS:
//       return {
//         ...state,
//         error: null,
//       };

//     default:
//       return state;
//   }
// };

const newOrderInitialState = {
  loading: false,
  order: null,
  error: null
};

export const newOrderReducer = createReducer(newOrderInitialState, {
  CREATE_ORDER_REQUEST: (state, action) => {
    state.loading = true;
  },
  CREATE_ORDER_SUCCESS: (state, action) => {
    state.loading = false;
    state.order = action.payload;
  },
  CREATE_ORDER_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  CLEAR_ERRORS: (state, action) => {
    state.error = null;
  }
});

// export const myOrdersReducer = (state = { orders: [] }, action) => {
//   switch (action.type) {
//     case MY_ORDERS_REQUEST:
//       return {
//         loading: true,
//       };

//     case MY_ORDERS_SUCCESS:
//       return {
//         loading: false,
//         orders: action.payload,
//       };

//     case MY_ORDERS_FAIL:
//       return {
//         loading: false,
//         error: action.payload,
//       };
//     case CLEAR_ERRORS:
//       return {
//         ...state,
//         error: null,
//       };

//     default:
//       return state;
//   }
// };

const myOrdersInitialState = { loading: false, orders: [], error: null };

export const myOrdersReducer = createReducer(myOrdersInitialState, {
  MY_ORDERS_REQUEST: (state) => {
    state.loading = true;
  },

  MY_ORDERS_SUCCESS: (state, action) => {
    state.loading = false;
    state.orders = action.payload;
  },

  MY_ORDERS_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  CLEAR_ERRORS: (state) => {
    state.error = null;
  },
});

// export const orderDetailsReducer = (state = { order: {} }, action) => {
//   switch (action.type) {
//     case ORDER_DETAILS_REQUEST:
//       return {
//         loading: true,
//       };

//     case ORDER_DETAILS_SUCCESS:
//       return {
//         loading: false,
//         order: action.payload,
//       };

//     case ORDER_DETAILS_FAIL:
//       return {
//         loading: false,
//         error: action.payload,
//       };
//     case CLEAR_ERRORS:
//       return {
//         ...state,
//         error: null,
//       };

//     default:
//       return state;
//   }
// };

const orderDetailsInitialState = { order: {}, loading: false, error: null };

export const orderDetailsReducer = createReducer(orderDetailsInitialState, {
  ORDER_DETAILS_REQUEST: (state, action) => {
    state.loading = true;
  },
  ORDER_DETAILS_SUCCESS: (state, action) => {
    state.loading = false;
    state.order = action.payload;
  },
  ORDER_DETAILS_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  CLEAR_ERRORS: (state, action) => {
    state.error = null;
  },
});

// export const allOrdersReducer = (state = { orders: [] }, action) => {
//   switch (action.type) {
//     case ALL_ORDERS_REQUEST:
//       return {
//         loading: true,
//       };

//     case ALL_ORDERS_SUCCESS:
//       return {
//         loading: false,
//         orders: action.payload,
//       };

//     case ALL_ORDERS_FAIL:
//       return {
//         loading: false,
//         error: action.payload,
//       };
//     case CLEAR_ERRORS:
//       return {
//         ...state,
//         error: null,
//       };

//     default:
//       return state;
//   }
// };

const allOrdersInitialState = {
  orders: [],
  loading: false,
  error: null
};

export const allOrdersReducer = createReducer(allOrdersInitialState, {
  ALL_ORDERS_REQUEST: (state) => {
    state.loading = true;
  },
  ALL_ORDERS_SUCCESS: (state, action) => {
    state.loading = false;
    state.orders = action.payload;
  },
  ALL_ORDERS_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  CLEAR_ERRORS: (state) => {
    state.error = null;
  }
});

// export const orderReducer = (state = {}, action) => {
//   switch (action.type) {
//     case UPDATE_ORDER_REQUEST:
//     case DELETE_ORDER_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };

//     case UPDATE_ORDER_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         isUpdated: action.payload,
//       };

//     case DELETE_ORDER_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         isDeleted: action.payload,
//       };

//     case UPDATE_ORDER_FAIL:
//     case DELETE_ORDER_FAIL:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };
//     case UPDATE_ORDER_RESET:
//       return {
//         ...state,
//         isUpdated: false,
//       };

//     case DELETE_ORDER_RESET:
//       return {
//         ...state,
//         isDeleted: false,
//       };
//     case CLEAR_ERRORS:
//       return {
//         ...state,
//         error: null,
//       };

//     default:
//       return state;
//   }
// };


const orderInitialState = {
  loading: false,
  isUpdated: false,
  isDeleted: false,
  error: null,
};

export const orderReducer = createReducer(orderInitialState, {
  UPDATE_ORDER_REQUEST: (state) => {
    state.loading = true;
  },
  UPDATE_ORDER_SUCCESS: (state, action) => {
    state.loading = false;
    state.isUpdated = action.payload;
  },
  UPDATE_ORDER_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  UPDATE_ORDER_RESET: (state) => {
    state.isUpdated = false;
  },
  DELETE_ORDER_REQUEST: (state) => {
    state.loading = true;
  },
  DELETE_ORDER_SUCCESS: (state, action) => {
    state.loading = false;
    state.isDeleted = action.payload;
  },
  DELETE_ORDER_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  DELETE_ORDER_RESET: (state) => {
    state.isDeleted = false;
  },
  CLEAR_ERRORS: (state) => {
    state.error = null;
  },
});