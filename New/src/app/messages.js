import { createSlice } from "@reduxjs/toolkit";
let predef = [
    { id: 1, user: true, content: "ዛሬ በጣም ጥሩ ስሜት እየተሰማኝ ነው!" },
    {
      id: 2,
      user: false,
      content: "እረፍት ለመውሰድ እና በጥልቀት ለመተንፈስ ያስታውሱ.",
    },
    {
      id: 3,
      user: true,
      content: "ጭንቀትን ለመቆጣጠር ሀሳብ ያለው አለ?",
    },
    {
      id: 4,
      user: true,
      content: "አዲስ የሜዲቴሽን መተግበሪያን በመሞከር ላይ - ዕድል እመኛለሁ!",
    },
    {
      id: 5,
      user: false,
      content:
        "ኪሩቤል፣ በመስመር ላይ ለማሰላሰል ቴክኒኮች ብዙ ምርጥ ግብዓቶች አሉ። አንዳንድ ጥቆማዎችን ይፈልጋሉ?",
    },
    ]
let initialState = JSON.parse(localStorage.getItem("message")) || predef
const messageSlice = createSlice({
    initialState,
    name: "message",
    reducers: {
        setmessage(state,action){
            return action.payload
        }
    }
})

export default messageSlice.reducer
export const {setmessage} =  messageSlice.actions