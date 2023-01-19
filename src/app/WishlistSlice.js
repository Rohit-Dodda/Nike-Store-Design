import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  wishlistState: false,
  wishlistItems: [],
  wishListTotalQuantity: 0,
  wishlistTotalAmount: 0,
};

const WishListSlice = createSlice({
  initialState,
  name: "wishlist",
  reducers: {
    setOpenWishlist: (state, action) => {
      state.wishlistState = action.payload.wishlistState;
    },
    setCloseWishlist: (state, action) => {
      state.wishlistState = action.payload.wishlistState;
    },
    setAddItemToWishlist: (state, action) => {
      const itemIndex = state.wishlistItems.indexOf(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.wishlistItems[itemIndex].wishlistQuantity += 1;

        toast.success(`${action.payload.title} quantity increased!`);
      } else {
        const temp = { ...action.payload, wishlistQuantity: 1 };
        state.wishlistItems.push(temp);

        toast.success(`${action.payload.title} added to wishlist!`);
      }
    },
    setRemoveItemFromWishlist: (state, action) => {
      const removeItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );

      state.wishlistItems = removeItem;

      toast.success(`${action.payload.title} removed from wishlist!`);
    },
    setIncreaseItemQTY: (state, action) => {
      const itemIndex = state.wishlistItems.indexOf(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.wishlistItems[itemIndex].wishlistQuantity += 1;

        toast.success(`${action.payload.title} quantity increased`);
      }
    },
    setDecreaseItemQTY: (state, action) => {
      const itemIndex = state.wishlistItems.indexOf(
        (item) => item.id === action.payload.id
      );

      if (state.wishlistItems[itemIndex].wishlistQuantity > 1) {
        state.wishlistItems[itemIndex].wishlistQuantity -= 1;

        toast.success(`${action.payload.title} quantity decreased`);
      }
    },
    setClearWishlistItems: (state, action) => {
      state.wishlistItems = [];
      toast.success(`Wishlist Cleared!`);
    },
  },
});

export const {
  setOpenWishlist,
  setCloseWishlist,
  setAddItemToWishlist,
  setRemoveItemFromWishlist,
  setIncreaseItemQTY,
  setDecreaseItemQTY,
  setClearWishlistItems,
} = WishListSlice.actions;

export const selectWishlistState = (state) => state.wishlist.wishlistState;
export const selectWishlistItems = (state) => state.wishlist.wishlistItems;

export const selectWishListTotalQuantity = (state) => state.wishlist.wishListTotalQuantity;
export const selectWishlistTotalAmount = (state) => state.wishlist.wishlistTotalAmount;

export default WishListSlice.reducer;
