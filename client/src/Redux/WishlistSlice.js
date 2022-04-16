import { createSlice } from "@reduxjs/toolkit";

const WishlistSlice = createSlice({
    name: 'Wishlist',
    initialState: {
        Wishlist: [],
        WishlistToggle: true,
    },
    reducers: {
        updateWishlist: (state, payload) => {
            state.Wishlist = payload.payload.newWishlist;
        },
        resetWishlist: (state) => {
            state.Wishlist = [];
            state.WishlistToggle = true;
        },
        toggle: (state) => {
            state.WishlistToggle = !state.WishlistToggle;
        }
    }
});

export const {updateWishlist, resetWishlist, toggle} = WishlistSlice.actions;
export default WishlistSlice.reducer;