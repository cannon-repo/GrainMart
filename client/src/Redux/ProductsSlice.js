import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
    name: 'Products',
    initialState: {
        products: [],
        flag: true,
    },
    reducers: {
        setProducts: (state,payload) => {
            state.products = payload.payload.products;
        },
        resetProducts: (state) => {
            state.products = [];
        },
        toggle: (state) => {
            state.flag = !state.flag;
        }
    }
});


export const {setProducts, resetProducts, toggle} = ProductSlice.actions;
export default ProductSlice.reducer;