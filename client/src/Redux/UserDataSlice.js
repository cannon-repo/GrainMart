import { createSlice } from "@reduxjs/toolkit";

const UserDataSlice = createSlice({
    name: 'UserData',
    initialState: {
        hasUser: false,
        userName: '',
        userId: '',
        isSeller: false,
        sellerName: '',
        sellerId: '',
    },
    reducers: {
        setUser: (state,payload) => {
            state.hasUser = true;
            state.userName = payload.payload.name;
            state.userId = payload.payload.userId;
            state.isSeller = payload.payload.isSeller;
        },
        setSellerInfo: (state,payload) => {
            state.isSeller = true;
            state.sellerId = payload.payload.sellerId;
            state.sellerName = payload.payload.sellerName;
        },
        resetUser: (state) => {
            state.hasUser = false;
            state.userName = false;
            state.userId = '';
            state.isSeller = '';
            state.sellerId = '';
            state.sellerName = '';
        },
    }
});

export const {setUser, resetUser, setSellerInfo} = UserDataSlice.actions;
export default UserDataSlice.reducer;