import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';

import postReducer from './postSlice';
import messageReducer from './messages';

export const store = configureStore({
       reducer: {
        user: userReducer,
       
        post: postReducer,
        message: messageReducer,

       }
})
