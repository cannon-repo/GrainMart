import {configureStore} from "@reduxjs/toolkit";
import RegisterDataSlice from "./RegisterDataSlice";

const store = configureStore({
    reducer: {
        regData: RegisterDataSlice,
    }
});

export default store;