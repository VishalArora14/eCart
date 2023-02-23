// import {
//   LOGIN_REQUEST,
//   LOGIN_FAIL,
//   LOGIN_SUCCESS,
//   REGISTER_USER_REQUEST,
//   REGISTER_USER_SUCCESS,
//   REGISTER_USER_FAIL,
//   LOAD_USER_REQUEST,
//   LOAD_USER_SUCCESS,
//   LOAD_USER_FAIL,
//   LOGOUT_SUCCESS,
//   LOGOUT_FAIL,
//   UPDATE_PROFILE_REQUEST,
//   UPDATE_PROFILE_SUCCESS,
//   UPDATE_PROFILE_FAIL,
//   UPDATE_PROFILE_RESET,
//   UPDATE_PASSWORD_REQUEST,
//   UPDATE_PASSWORD_SUCCESS,
//   UPDATE_PASSWORD_RESET,
//   UPDATE_PASSWORD_FAIL,
//   FORGOT_PASSWORD_REQUEST,
//   FORGOT_PASSWORD_SUCCESS,
//   FORGOT_PASSWORD_FAIL,
//   RESET_PASSWORD_REQUEST,
//   RESET_PASSWORD_SUCCESS,
//   RESET_PASSWORD_FAIL,
//   ALL_USERS_REQUEST,
//   ALL_USERS_SUCCESS,
//   ALL_USERS_FAIL,
//   DELETE_USER_REQUEST,
//   DELETE_USER_SUCCESS,
//   DELETE_USER_FAIL,
//   DELETE_USER_RESET,
//   UPDATE_USER_REQUEST,
//   UPDATE_USER_SUCCESS,
//   UPDATE_USER_FAIL,
//   UPDATE_USER_RESET,
//   USER_DETAILS_REQUEST,
//   USER_DETAILS_SUCCESS,
//   USER_DETAILS_FAIL,
//   CLEAR_ERRORS,
// } from "../constants/userConstants";

import { createReducer } from '@reduxjs/toolkit';

// export const userReducer = (state = { user: {} }, action) => {
//   switch (action.type) {
//     case LOGIN_REQUEST:
//     case REGISTER_USER_REQUEST:
//     case LOAD_USER_REQUEST:
//       return {
//         loading: true,
//         isAuthenticated: false,
//       };
//     case LOGIN_SUCCESS:
//     case REGISTER_USER_SUCCESS:
//     case LOAD_USER_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         isAuthenticated: true,
//         user: action.payload,
//       };

//     case LOGIN_FAIL:
//     case REGISTER_USER_FAIL:
//       return {
//         ...state,
//         loading: false,
//         isAuthenticated: false,
//         user: null,
//         error: action.payload,
//       };
//     case LOAD_USER_FAIL:
//       return {
//         loading: false,
//         isAuthenticated: false,
//         user: null,
//         error: action.payload,
//       };
//     case LOGOUT_SUCCESS:
//       return {
//         loading: false,
//         user: null,
//         isAuthenticated: false,
//       };
//     case LOGOUT_FAIL:
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

const userInitialState = { user: {} };

export const userReducer = createReducer(userInitialState, {
  LOGIN_REQUEST: (state, action) => {
    state.loading = true;
    state.isAuthenticated = false;
  },
  REGISTER_USER_REQUEST: (state, action) => {
    state.loading = true;
    state.isAuthenticated = false;
  },
  LOAD_USER_REQUEST: (state, action) => {
    state.loading = true;
    state.isAuthenticated = false;
  },
  LOGIN_SUCCESS: (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.user = action.payload;
  },
  REGISTER_USER_SUCCESS: (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.user = action.payload;
  },
  LOAD_USER_SUCCESS: (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.user = action.payload;
  },
  LOGIN_FAIL: (state, action) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.user = null;
    state.error = action.payload;
  },
  REGISTER_USER_FAIL: (state, action) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.user = null;
    state.error = action.payload;
  },
  LOAD_USER_FAIL: (state, action) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.user = null;
    state.error = action.payload;
  },
  LOGOUT_SUCCESS: (state, action) => {
    state.loading = false;
    state.user = null;
    state.isAuthenticated = false;
  },
  LOGOUT_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  CLEAR_ERRORS: (state, action) => {
    state.error = null;
  },
});

// export const profileReducer = (state = {}, action) => {
//   switch (action.type) {
//     case UPDATE_PROFILE_REQUEST:
//     case UPDATE_PASSWORD_REQUEST:
//     case UPDATE_USER_REQUEST:
//     case DELETE_USER_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case UPDATE_PROFILE_SUCCESS:
//     case UPDATE_PASSWORD_SUCCESS:
//     case UPDATE_USER_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         isUpdated: action.payload,
//       };

//     case DELETE_USER_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         isDeleted: action.payload.success,
//         message: action.payload.message,
//       };

//     case UPDATE_PROFILE_FAIL:
//     case UPDATE_PASSWORD_FAIL:
//     case UPDATE_USER_FAIL:
//     case DELETE_USER_FAIL:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };

//     case UPDATE_PROFILE_RESET:
//     case UPDATE_PASSWORD_RESET:
//     case UPDATE_USER_RESET:
//       return {
//         ...state,
//         isUpdated: false,
//       };

//     case DELETE_USER_RESET:
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

const profileReducer_InitialState = {};

export const profileReducer = createReducer(profileReducer_InitialState, {
  UPDATE_PROFILE_REQUEST: (state, action) => {
    state.loading = true;
  },
  UPDATE_PASSWORD_REQUEST: (state, action) => {
    state.loading = true;
  },
  UPDATE_USER_REQUEST: (state, action) => {
    state.loading = true;
  },
  DELETE_USER_REQUEST: (state, action) => {
    state.loading = true;
  },
  UPDATE_PROFILE_SUCCESS: (state, action) => {
    state.loading = false;
    state.isUpdated = true;
  },
  UPDATE_PASSWORD_SUCCESS: (state, action) => {
    state.loading = false;
    state.isUpdated = true;
  },
  UPDATE_USER_SUCCESS: (state, action) => {
    state.loading = false;
    state.isUpdated = true;
  },
  DELETE_USER_SUCCESS: (state, action) => {
    state.loading = false;
    state.isDeleted = action.payload.success
    state.message = action.payload.message
  },
  UPDATE_PROFILE_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  UPDATE_PASSWORD_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  UPDATE_USER_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  DELETE_USER_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  UPDATE_PROFILE_RESET: (state, action) => {
    state.isUpdated = false;
  },
  UPDATE_PASSWORD_RESET: (state, action) => {
    state.isUpdated = false;
  },
  UPDATE_USER_RESET: (state, action) => {
    state.isUpdated = false;
  },
  DELETE_USER_RESET: (state, action) => {
    state.isDeleted = false;
  },
  CLEAR_ERRORS: (state, action) => {
    state.error = null;
  },
});

// export const forgotPasswordReducer = (state = {}, action) => {
//   switch (action.type) {
//     case FORGOT_PASSWORD_REQUEST:
//     case RESET_PASSWORD_REQUEST:
//       return {
//         ...state,
//         loading: true,
//         error: null,
//       };
//     case FORGOT_PASSWORD_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         message: action.payload,
//       };
//     case RESET_PASSWORD_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         success: action.payload,
//       };
//     case FORGOT_PASSWORD_FAIL:
//     case RESET_PASSWORD_FAIL:
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

const forgotPasswordReducer_InitialState = {};

export const forgotPasswordReducer = createReducer(forgotPasswordReducer_InitialState, {
  
  FORGOT_PASSWORD_REQUEST: (state, action) => {
    state.loading = true;
    state.error = null;
  },
  RESET_PASSWORD_REQUEST: (state, action) => {
    state.loading = true;
    state.error = null;
  },
  FORGOT_PASSWORD_SUCCESS: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  RESET_PASSWORD_SUCCESS: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  FORGOT_PASSWORD_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  RESET_PASSWORD_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  CLEAR_ERRORS: (state, action) => {
    state.error = null;
  },
});

// export const allUsersReducer = (state = { users: [] }, action) => {
//   switch (action.type) {
//     case ALL_USERS_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case ALL_USERS_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         users: action.payload,
//       };

//     case ALL_USERS_FAIL:
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

const allUsersReducer_InitialState = { users: [] };

export const allUsersReducer = createReducer(allUsersReducer_InitialState, {
  
  ALL_USERS_REQUEST: (state, action) => {
    state.loading = true;
  },
  ALL_USERS_SUCCESS: (state, action) => {
    state.loading = false;
    state.users = action.payload;
  },
  ALL_USERS_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  CLEAR_ERRORS: (state, action) => {
    state.error = null;
  },
});

// export const userDetailsReducer = (state = { user: {} }, action) => {
//   switch (action.type) {
//     case USER_DETAILS_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case USER_DETAILS_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         user: action.payload,
//       };

//     case USER_DETAILS_FAIL:
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

const userDetailsReducer_InitialState = { user: {} };

export const userDetailsReducer = createReducer(userDetailsReducer_InitialState, {
  
  USER_DETAILS_REQUEST: (state, action) => {
    state.loading = true;
  },
  USER_DETAILS_SUCCESS: (state, action) => {
    state.loading = false;
    state.users = action.payload;
  },
  USER_DETAILS_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  CLEAR_ERRORS: (state, action) => {
    state.error = null;
  },
});
