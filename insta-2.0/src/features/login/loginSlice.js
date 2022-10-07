import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id:"",
    name:""
  },
};


const loginSlice=createSlice({
    name:'login',
    initialState,
    reducers:{
        userLogin:(state)=>{
               
        }
    }
})