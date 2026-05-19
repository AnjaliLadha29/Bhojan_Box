import {createSlice} from "@reduxjs/toolkit";

let cartslice = createSlice(
    {
        name: "cart",
        initialState: 
        {
            items: [],
            restaurant_name: ""
        },
        reducers: 
        {
            addtocart: (state,action) => 
                {
                    state.items.push(action.payload.items);
                },
            deletefromcart: (state,action) =>
                {
                    let index = state.items.findIndex((item) => item===action.payload.items);
                    if(index>=0)
                        state.items.splice(index,1);
                },
            restaurant_name: (state,action) =>
                {
                    state.restaurant_name = action.payload.restaurant_name;
                }
        }
    }
);

let {addtocart,deletefromcart,restaurant_name} = cartslice.actions;

export {addtocart,deletefromcart,restaurant_name};

export default cartslice.reducer;