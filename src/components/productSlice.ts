import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../models/Product";
import { Category } from "../models/ProductSlice";

interface ProductState {
  allProducts: Product[];
  newProducts: Product[];
  featuredProducts: Product[];
  wishlist: Product[];
  categories: Category[];
}

const initialState: ProductState = {
  allProducts: [],
  newProducts: [],
  featuredProducts: [],
  wishlist: [],
  categories: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<Product[]>) => {
      state.allProducts = action.payload;
    },
    addCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },
  },
});

export const { addProducts, addCategories } = productSlice.actions;
export default productSlice.reducer;
