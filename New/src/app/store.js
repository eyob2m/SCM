import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import anonyReducer from './anony';
import postReducer from './postSlice';
import messageReducer from './messages';

export const store = configureStore({
       reducer: {
        user: userReducer,
        anony: anonyReducer,
        post: postReducer,
        message: messageReducer,

       }
})
