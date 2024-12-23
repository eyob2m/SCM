import { createSlice } from "@reduxjs/toolkit";
let initialState = false
const anonySlice = createSlice({
    initialState,
    name: "anony",
    reducers: {
        setanony(state,action){
            return action.payload
        }
    }
})

export default anonySlice.reducer
export const {setanony} =  anonySlice.actions