import {configureStore} from "@reduxjs/toolkit";
import RegisterDataSlice from "./RegisterDataSlice";
import UserDataSlice from "./UserDataSlice";

const store = configureStore({
    reducer: {
        regData: RegisterDataSlice,
        userData: UserDataSlice,
    }
});

export default store;