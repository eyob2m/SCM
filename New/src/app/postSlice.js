import { createSlice } from "@reduxjs/toolkit";
let predef = [
    { id: 1, user: "ሰላማዊት", content: "ዛሬ በጣም ጥሩ ስሜት እየተሰማኝ ነው!" },
    {
      id: 2,
      user: "ኤአይ ረዳት",
      content: "እረፍት ለመውሰድ እና በጥልቀት ለመተንፈስ ያስታውሱ.",
    },
    {
      id: 3,
      user: "ብሩክ",
      content: "ጭንቀትን ለመቆጣጠር ሀሳብ ያለው አለ?",
    },
    {
      id: 4,
      user: "ኪሩቤል",
      content: "አዲስ የሜዲቴሽን መተግበሪያን በመሞከር ላይ - ዕድል እመኛለሁ!",
    },
    {
      id: 5,
      user: "ኤአይ ረዳት",
      content:
        "ኪሩቤል፣ በመስመር ላይ ለማሰላሰል ቴክኒኮች ብዙ ምርጥ ግብዓቶች አሉ። አንዳንድ ጥቆማዎችን ይፈልጋሉ?",
    },
    {
      id: 6,
      user: "አስቴር",
      content:
        "ብሩክ፣ የአካል ብቃት እንቅስቃሴ በጭንቀት መቆጣጠር በጣም የሚረዳኝ ሆኖ አግኝቸዋለሁ። ምናልባት ለእግር ጉዞ ወይም ዮጋ ለመስራት ይሞክሩ?",
    },]
let initialState = JSON.parse(localStorage.getItem("post")) || predef
const postSlice = createSlice({
    initialState,
    name: "post",
    reducers: {
        setpost(state,action){
            return action.payload
        }
    }
})

export default postSlice.reducer
export const {setpost} =  postSlice.actions