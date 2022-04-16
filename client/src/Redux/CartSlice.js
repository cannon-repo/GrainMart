import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'Cart',
    initialState: {
        Cart: [],
        CartToggle: true,
        CartSize: 0,
    },
    reducers: {
        updateCart: (state, payload) => {
            state.Cart = payload.payload.newCart;
        },
        resetCart: (state) => {
            state.Cart = [];
            state.CartToggle = true;
        },
        toggle: (state) => {
            state.CartToggle = !state.CartToggle;
        },
        setCartSize: (state, payload) => {
            state.CartSize = payload.payload.size;
        }
    }
});

export const {updateCart, resetCart, toggle, setCartSize} = CartSlice.actions;
export default CartSlice.reducer;