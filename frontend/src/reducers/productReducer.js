import { createReducer } from "@reduxjs/toolkit";

// export const productsReducer = (state = { products: [] }, action) => {
//   switch (action.type) {
//     case ALL_PRODUCT_REQUEST:
//     case ADMIN_PRODUCT_REQUEST:
//       return {
//         loading: true,
//         products: [],
//       };

//     case ALL_PRODUCT_SUCCESS:
//       return {
//         loading: false,
//         products: action.payload.products,
//         filteredProducts: action.payload.filteredProducts,
//         productsCount: action.payload.productsCount,
//         filteredProductsCount: action.payload.filteredProductsCount,
//         resultPerPage: action.payload.resultPerPage,
//       };

//     case ADMIN_PRODUCT_SUCCESS:
//       return {
//         loading: false,
//         products: action.payload,
//       };
//     case ALL_PRODUCT_FAIL:
//     case ADMIN_PRODUCT_FAIL:
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

const productsReducer_initialState = { products: [] };

export const productsReducer = createReducer(productsReducer_initialState, {
  ALL_PRODUCT_REQUEST: (state, action) => {
    state.loading = true;
    state.products = [];
  },
  ADMIN_PRODUCT_REQUEST: (state, action) => {
    state.loading = true;
    state.products = [];
  },
  ALL_PRODUCT_SUCCESS: (state, action) => {
    state.loading = false;
    state.products = action.payload.products;
    state.filteredProducts = action.payload.filteredProducts;
    state.productsCount = action.payload.productsCount;
    state.filteredProductsCount = action.payload.filteredProductsCount;
    state.resultPerPage = action.payload.resultPerPage;
  },
  ADMIN_PRODUCT_SUCCESS: (state, action) => {
    state.loading = false;
    state.products = action.payload;
  },
  ALL_PRODUCT_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  ADMIN_PRODUCT_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  CLEAR_ERRORS: (state, action) => {
    state.error = null;
  },
});


// export const productDetailsReducer = (state = { product: {} }, action) => {
//   switch (action.type) {
//     case PRODUCT_DETAILS_REQUEST:
//       return {
//         loading: true,
//         ...state,
//       };
//     case PRODUCT_DETAILS_SUCCESS:
//       return {
//         loading: false,
//         product: action.payload,
//       };
//     case PRODUCT_DETAILS_FAIL:
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

const productDetailsReducer_initialState = { product: {} };

export const productDetailsReducer = createReducer(
  productDetailsReducer_initialState,
  {
    PRODUCT_DETAILS_REQUEST: (state, action) => {
      state.loading = true;
    },
    PRODUCT_DETAILS_SUCCESS: (state, action) => {
      state.loading = false;
      state.product = action.payload;
    },
    PRODUCT_DETAILS_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    CLEAR_ERRORS: (state, action) => {
      state.error = null;
    },
  }
);

// export const newReviewReducer = (state = {}, action) => {
//   switch (action.type) {
//     case NEW_REVIEW_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case NEW_REVIEW_SUCCESS:
//       return {
//         loading: false,
//         success: action.payload,
//       };
//     case NEW_REVIEW_FAIL:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };
//     case NEW_REVIEW_RESET:
//       return {
//         ...state,
//         success: false,
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

const newReviewReducer_initialState = {};
export const newReviewReducer = createReducer(newReviewReducer_initialState, {
  NEW_REVIEW_REQUEST: (state, action) => {
    state.loading = true;
  },
  NEW_REVIEW_SUCCESS: (state, action) => {
    state.loading = false;
    state.success = action.payload;
  },
  NEW_REVIEW_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  NEW_REVIEW_RESET: (state, action) => {
    state.success = true;
  },
  CLEAR_ERRORS: (state, action) => {
    state.error = null;
  },
});

// export const newProductReducer = (state = { product: {} }, action) => {
//   switch (action.type) {
//     case NEW_PRODUCT_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case NEW_PRODUCT_SUCCESS:
//       return {
//         loading: false,
//         success: action.payload.success,
//         product: action.payload.product,
//       };
//     case NEW_PRODUCT_FAIL:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };
//     case NEW_PRODUCT_RESET:
//       return {
//         ...state,
//         success: false,
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

const newProductReducer_initialState = {};
export const newProductReducer = createReducer(newProductReducer_initialState, {
  NEW_PRODUCT_REQUEST: (state, action) => {
    state.loading = true;
  },
  NEW_PRODUCT_SUCCESS: (state, action) => {
    state.loading = false;
    state.success = action.payload.success;
    state.product = action.payload.product;
  },
  NEW_PRODUCT_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  NEW_PRODUCT_RESET: (state, action) => {
    state.success = true;
  },
  CLEAR_ERRORS: (state, action) => {
    state.error = null;
  },
});

// export const productReducer = (state = {}, action) => {
//   switch (action.type) {
//     case DELETE_PRODUCT_REQUEST:
//     case UPDATE_PRODUCT_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case DELETE_PRODUCT_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         isDeleted: action.payload,
//       };

//     case UPDATE_PRODUCT_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         isUpdated: action.payload,
//       };
//     case DELETE_PRODUCT_FAIL:
//     case UPDATE_PRODUCT_FAIL:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };
//     case DELETE_PRODUCT_RESET:
//       return {
//         ...state,
//         isDeleted: false,
//       };
//     case UPDATE_PRODUCT_RESET:
//       return {
//         ...state,
//         isUpdated: false,
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

const productReducer_initialState = {};
export const productReducer = createReducer(productReducer_initialState, {
  DELETE_PRODUCT_REQUEST: (state, action) => {
    state.loading = true;
  },
  UPDATE_PRODUCT_REQUEST: (state, action) => {
    state.loading = true;
  },
  DELETE_PRODUCT_SUCCESS: (state, action) => {
    state.loading = false;
    state.isDeleted = action.payload;
  },
  UPDATE_PRODUCT_SUCCESS: (state, action) => {
    state.loading = false;
    state.isUpdated = action.payload;
  },
  DELETE_PRODUCT_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  UPDATE_PRODUCT_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  DELETE_PRODUCT_RESET: (state, action) => {
    state.isDeleted = false;
  },
  UPDATE_PRODUCT_RESET: (state, action) => {
    state.isUpdated = false;
  },
  CLEAR_ERRORS: (state, action) => {
    state.error = null;
  },
});

// export const productReviewsReducer = (state = { reviews: [] }, action) => {
//   switch (action.type) {
//     case ALL_REVIEW_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case ALL_REVIEW_SUCCESS:
//       return {
//         loading: false,
//         reviews: action.payload,
//       };
//     case ALL_REVIEW_FAIL:
//       return {
//         ...state,
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

const productReviewsReducer_initialState = {};
export const productReviewsReducer = createReducer(
  productReviewsReducer_initialState,
  {
    ALL_REVIEW_REQUEST: (state, action) => {
      state.loading = true;
    },
    ALL_REVIEW_SUCCESS: (state, action) => {
      state.loading = false;
      state.reviews = action.payload;
    },
    ALL_REVIEW_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    CLEAR_ERRORS: (state, action) => {
      state.error = null;
    },
  }
);

// export const reviewReducer = (state = {}, action) => {
//   switch (action.type) {
//     case DELETE_REVIEW_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case DELETE_REVIEW_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         isDeleted: action.payload,
//       };
//     case DELETE_REVIEW_FAIL:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };
//     case DELETE_REVIEW_RESET:
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

const reviewReducer_initialState = {};
export const reviewReducer = createReducer(reviewReducer_initialState, {
  DELETE_REVIEW_REQUEST: (state, action) => {
    state.loading = true;
  },
  DELETE_REVIEW_SUCCESS: (state, action) => {
    state.loading = false;
    state.isDeleted = action.payload;
  },
  DELETE_REVIEW_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  DELETE_REVIEW_RESET: (state, action) => {
    state.isDeleted = false;
  },
  CLEAR_ERRORS: (state, action) => {
    state.error = null;
  },
});
