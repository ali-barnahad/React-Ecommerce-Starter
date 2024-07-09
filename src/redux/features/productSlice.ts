import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../models/Product"; // Import Product model
import { Category, ProductSlice } from "../../models/ProductSlice"; // Import Category and ProductSlice models

// Initial state of the product slice
const initialState: ProductSlice = {
  allProducts: [], // All products in the shop (initially empty)
  categories: [], // All product categories (initially empty)
  newProducts: [], // List of new products (initially empty)
  featuredProducts: [], // List of featured products (initially empty)
  wishlist: [], // User wishlist (initially empty)
};

// Create the product slice with Redux Toolkit
export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    // Update the list of new products
    updateNewList: (state, action: PayloadAction<Product[]>) => {
      state.newProducts = action.payload;
    },
    // Update the list of featured products
    updateFeaturedList: (state, action: PayloadAction<Product[]>) => {
      state.featuredProducts = action.payload;
    },
    // Add a product to the wishlist
    addToWishlist: (state, action: PayloadAction<Product>) => {
      const { wishlist } = state;
      // Check if the product is already in the wishlist
      if (wishlist.findIndex((item) => item.id === action.payload.id) === -1) {
        // If not, add the product to the wishlist
        state.wishlist.push(action.payload);
      }
    },
    // Add categories to the state
    addCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },
    // Add products to the state
    addProducts: (state, action: PayloadAction<Product[]>) => {
      state.allProducts = action.payload;
    },
  },
});

// Export the actions and the reducer from the product slice
export const {
  updateNewList,
  updateFeaturedList,
  addToWishlist,
  addCategories,
  addProducts,
} = productSlice.actions;
export default productSlice.reducer;
