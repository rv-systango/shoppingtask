import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  prodcuts: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    requestProducts() {
      console.log("requestProducts() called from client");
    },
    setProducts(state, action) {
      state.prodcuts = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { requestProducts, setProducts } =
  productSlice.actions;
export const { prodcuts } = productSlice.getInitialState();

export default productSlice.reducer;
