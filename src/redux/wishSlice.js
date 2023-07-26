import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    wishItems: localStorage.getItem("wishItems")
        ? JSON.parse(localStorage.getItem("wishItems"))
        : [],
    wishTotalQuantity: 0,
    wishTotalAmount: 0,
};

const wishSlice = createSlice({
    name: "wish",
    initialState,
    reducers: {
        addToWish(state, action) {

            const existingItem = state.wishItems.find((item) => item.productId === action.payload.productId);

            if (existingItem) {
                toast.info(`${existingItem.productName} is already in your wishlist`, "quantity-toast");
            } else {
                const tempProduct = { ...action.payload, wishQuantity: 1 };
                state.wishItems.push(tempProduct);
                toast.success(`Added ${action.payload.productName} to your wishlist`, "add-toast");
                localStorage.setItem("wishItems", JSON.stringify(state.wishItems));
            }
        },
        removeFromWish(state, action) {
            state.wishItems = state.wishItems.filter(
                (item) => item.productId !== action.payload.productId
            );

            toast.error(`${action.payload.productName} removed from wishlist`, "remove-toast");

            localStorage.setItem("wishItems", JSON.stringify(state.wishItems));
        },
        clearWish(state, action) {
            state.wishItems = [];
            localStorage.setItem("wishItems", JSON.stringify(state.wishItems));
            toast.error("Wishlist cleared", "clear-toast");
        }

    },
});


export const { addToWish, removeFromWish, clearWish } = wishSlice.actions;
export default wishSlice.reducer;