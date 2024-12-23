import { createSlice } from "@reduxjs/toolkit";
let initialState = JSON.parse(localStorage.getItem("user"))
const userSlice = createSlice({
    initialState,
    name: "user",
    reducers: {
        setUser(state,action){
            return action.payload
        }
    }
})

export default userSlice.reducer
export const {setUser} =  userSlice.actions