import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: JSON.parse(localStorage.getItem("products")) || [],
  isLoading: true,
  selectedProduct: null,
};

const saveProducts = (products) => {
  localStorage.setItem("products", JSON.stringify(products));
};

const productSlice = createSlice({
  name: "product",

  initialState,

  reducers: {
    setProducts: (state, action) => {
      if (state.products.length === 0) {
        state.products = action.payload;
        saveProducts(state.products);
      }
    },

    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
     addProduct: (state, action) => {
      state.products.unshift(action.payload);
      saveProducts(state.products);
    },

    updateProduct: (state, action) => {
      state.products = state.products.map((product) =>
        product.id === action.payload.id ? action.payload : product
      );

      saveProducts(state.products);
    },

    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );

      saveProducts(state.products);
    },

    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
});

export const {
  setProducts,
  setLoading,
  addProduct,
  updateProduct,
  deleteProduct,
  setSelectedProduct,
} = productSlice.actions;

export default productSlice.reducer;