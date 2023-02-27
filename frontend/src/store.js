import { configureStore } from "@reduxjs/toolkit";
import {
  newProductReducer,
  newReviewReducer,
  productDetailsReducer,
  productReducer,
  productReviewsReducer,
  productsReducer,
  reviewReducer,
} from "./reducers/productReducer";
import {
  userReducer,
  profileReducer,
  forgotPasswordReducer,
  allUsersReducer,
  userDetailsReducer,
} from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";
import {
  allOrdersReducer,
  myOrdersReducer,
  newOrderReducer,
  orderDetailsReducer,
  orderReducer,
} from "./reducers/orderReducers";

// const reducer = combineReducers({
//   products: productsReducer,
//   productDetails: productDetailsReducer,
//   user: userReducer,
//   profile: profileReducer,
//   forgotPassword: forgotPasswordReducer,
//   cart: cartReducer,
//   newOrder: newOrderReducer,
//   myOrders: myOrdersReducer,
//   orderDetails: orderDetailsReducer,
//   newReview: newReviewReducer,
//   newProduct: newProductReducer,
//   product: productReducer,
//   allOrders: allOrdersReducer,
//   order: orderReducer,
//   allUsers: allUsersReducer,
//   userDetails: userDetailsReducer,
//   productReviews: productReviewsReducer,
//   review: reviewReducer,
// });

let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
};
// const middleware = [thunk];

// const store = createStore(
//   reducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

const store = configureStore({
  reducer: {
    products: productsReducer,
    productDetails: productDetailsReducer,
    user: userReducer,
    profile: profileReducer,
    forgotPassword: forgotPasswordReducer,
    cart: cartReducer,
    newOrder: newOrderReducer,
    myOrders: myOrdersReducer,
    orderDetails: orderDetailsReducer,
    newReview: newReviewReducer,
    newProduct: newProductReducer,
    product: productReducer,
    allOrders: allOrdersReducer,
    order: orderReducer,
    allUsers: allUsersReducer,
    userDetails: userDetailsReducer,
    productReviews: productReviewsReducer,
    review: reviewReducer,
  },
  preloadedState: initialState,
});

export default store;
