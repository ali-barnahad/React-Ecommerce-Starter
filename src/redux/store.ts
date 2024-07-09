import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice"; // Reducer für die Authentifizierung
import cartReducer from "./features/cartSlice"; // Reducer für den Warenkorb
import productReducer from "./features/productSlice"; // Reducer für die Produkte

// Konfiguration des Redux-Stores mit den Reducern
export const store = configureStore({
  reducer: {
    cartReducer, // Warenkorb-Reducer
    productReducer, // Produkt-Reducer
    authReducer, // Authentifizierungs-Reducer
  },
});

// Definierung des Typs RootState basierend auf dem Store-Zustand
export type RootState = ReturnType<typeof store.getState>;

// Definierung des Typs AppDispatch basierend auf dem Store-Dispatch
export type AppDispatch = typeof store.dispatch;
