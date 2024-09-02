import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:["PIZZA"],   
    },
    reducers: {
        addItems:(state,action)=>{   
            console.log(action);     
            cart.items.push(action.payload);  
        },
        removeItems:(state)=>{
            cart.items.pop();
        },
        clearCartItems:(state)=>{
            cart.items.length=0;
        }
    }
})

export const {addItems,removeItems,clearCartItems} = cartSlice.actions;
export default cartSlice.reducer;


//an object is being passed as an argument in action behind the scenes 
//what is happening is redux is creating an object with name payload 

// action={
//     payload:[]
// }  //like this and then is passed to the action in the reducer function