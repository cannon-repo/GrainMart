import {configureStore} from "@reduxjs/toolkit";
import RegisterDataSlice from "./RegisterDataSlice";
import UserDataSlice from "./UserDataSlice";
import ProductsSlice from "./ProductsSlice";

const store = configureStore({
    reducer: {
        regData: RegisterDataSlice,
        userData: UserDataSlice,
        productData: ProductsSlice,
    }
});

export default store;