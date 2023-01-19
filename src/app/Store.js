import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice.js";
import WishlistSlice from "./WishlistSlice.js";

const Store = configureStore({
    reducer: {
        cart: CartSlice,
        wishlist: WishlistSlice,
    }
})

export default Store;