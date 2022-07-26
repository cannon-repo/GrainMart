import { createSlice } from "@reduxjs/toolkit";

const WishlistSlice = createSlice({
    name: 'Wishlist',
    initialState: {
        Wishlist: [],
        ItemsCnt: 0,
        WishlistToggle: true,
    },
    reducers: {
        updateWishlist: (state, payload) => {
            state.Wishlist = payload.payload.newWishlist;
            state.ItemsCnt = payload.payload.newWishlist.length;
        },
        resetWishlist: (state) => {
            state.Wishlist = [];
            state.ItemsCnt = 0;
            state.WishlistToggle = true;
        },
        toggle: (state) => {
            state.WishlistToggle = !state.WishlistToggle;
        }
    }
});

export const {updateWishlist, resetWishlist, toggle} = WishlistSlice.actions;
export default WishlistSlice.reducer;