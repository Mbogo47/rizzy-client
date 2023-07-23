import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    status: null,
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct(state, action) {
            state.items.push(action.payload);
        },
        removeProduct(state, action) {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        updateProduct(state, action) {
            const index = state.items.findIndex((item) => item.id === action.payload.id);
            state.items[index] = action.payload;
        },
        fetchMenProducts(state, action) {
            state.items = action.payload;
        },
        fetchWomenProducts(state, action) {
            state.items = action.payload;
        },
        fetchChildrenProducts(state, action) {
            state.items = action.payload;
        }

    },
});

export const { addProduct, removeProduct, updateProduct, fetchMenProducts, fetchChildrenProducts, fetchWomenProducts } = productSlice.actions;

export default productSlice.reducer;