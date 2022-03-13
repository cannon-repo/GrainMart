import { createSlice } from "@reduxjs/toolkit";

const UserDataSlice = createSlice({
    name: 'UserData',
    initialState: {
        hasUser: false,
        userName: '',
        userId: '',
    },
    reducers: {
        setUser: (state,payload) => {
            state.hasUser = true;
            state.userName = payload.payload.name;
            state.userId = payload.payload.userId;
        },
        resetUser: (state) => {
            state.hasUser = false;
            state.userName = '';
            state.userId = '';
        }
    }
});

export const {setUser, resetUser} = UserDataSlice.actions;
export default UserDataSlice.reducer;