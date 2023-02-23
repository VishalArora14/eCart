import { createReducer } from "@reduxjs/toolkit";

// *** old redux thunk code start

// import {
//   ADD_TO_CART,
//   REMOVE_CART_ITEM,
//   SAVE_SHIPPING_INFO,
// } from "../constants/cartConstants";

// export const cartReducer = (
//   state = { cartItems: [], shippingInfo: {} },
//   action
// ) => {
//   switch (action.type) {
//     case ADD_TO_CART:
//       const item = action.payload;

//       const isItemExist = state.cartItems.find(
//         (i) => i.product === item.product
//       );

//       if (isItemExist) {
//         return {
//           ...state,
//           cartItems: state.cartItems.map((i) =>
//             i.product === isItemExist.product ? item : i
//           ),
//         };
//       } else {
//         return {
//           ...state,
//           cartItems: [...state.cartItems, item],
//         };
//       }

//     case REMOVE_CART_ITEM:
//       return {
//         ...state,
//         cartItems: state.cartItems.filter((i) => i.product !== action.payload),
//       };

//     case SAVE_SHIPPING_INFO:
//       return {
//         ...state,
//         shippingInfo: action.payload,
//       };

//     default:
//       return state;
//   }
// };

//*** old redux thunk code end */

const initialState = {
  cartItems: [],
  shippingInfo: {},
};

export const cartReducer = createReducer(initialState, {
  ADD_TO_CART: (state, action) => {
    const item = action.payload;

    const isItemExist = state.cartItems.find((i) => i.product === item.product);

    if (isItemExist) {
      state.cartItems = state.cartItems.map((i) =>
        i.product === isItemExist.product ? item : i
      );
    } else {
      state.cartItems.push(item);
    }
  },

  REMOVE_CART_ITEM: (state, action) => {
    state.cartItems = state.cartItems.filter(
      (i) => i.product !== action.payload
    );
  },

  SAVE_SHIPPING_INFO: (state, action) => {
    state.shippingInfo = action.payload;
  },
});

// export const { addItemToCart, removeCartItem, saveShippingInfo } =
//   cartSlice.actions;
// export default cartSlice.reducer;
