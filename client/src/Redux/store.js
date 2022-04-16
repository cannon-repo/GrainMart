import {configureStore} from "@reduxjs/toolkit";
import RegisterDataSlice from "./RegisterDataSlice";
import UserDataSlice from "./UserDataSlice";
import ProductsSlice from "./ProductsSlice";
import WishlistSlice from "./WishlistSlice";
import CartSlice from "./CartSlice";

const store = configureStore({
    reducer: {
        regData: RegisterDataSlice,
        userData: UserDataSlice,
        productData: ProductsSlice,
        cartData: CartSlice,
        wishlistData: WishlistSlice,
    }
});

export default store;