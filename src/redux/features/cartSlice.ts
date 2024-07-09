import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../../models/CartItem";
import { CartSlice } from "../../models/CartSlice";

// Initialer Zustand des Warenkorbs
const initialState: CartSlice = {
  cartOpen: false, // Der Warenkorb ist standardmäßig geschlossen
  cartItems: [], // Anfangs enthält der Warenkorb keine Artikel
};

// Erstellen des Warenkorb-Slices mit Redux Toolkit
export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    // Artikel zum Warenkorb hinzufügen
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const { cartItems } = state;
      // Überprüfen, ob der Artikel bereits im Warenkorb vorhanden ist
      if (cartItems.findIndex((pro) => pro.id === action.payload.id) === -1) {
        // Wenn nicht, füge den Artikel mit einer Menge von 1 hinzu
        const item = { ...action.payload, quantity: 1 };
        return { ...state, cartItems: [...cartItems, item] };
      } else {
        // Wenn vorhanden, erhöhe die Menge des Artikels im Warenkorb um 1
        const updatedItems = cartItems.map((item) =>
            item.id === action.payload.id
                ? { ...item, quantity: item.quantity && item.quantity + 1 }
                : item
        );
        return { ...state, cartItems: updatedItems };
      }
    },
    // Artikel aus dem Warenkorb entfernen
    removeFromCart: (state, action: PayloadAction<number>) => {
      const { cartItems } = state;
      // Filtere den Artikel aus dem Warenkorb
      const updatedItems = cartItems.filter(
          (item) => item.id !== action.payload
      );
      return { ...state, cartItems: updatedItems };
    },
    // Menge eines Artikels im Warenkorb reduzieren
    reduceFromCart: (state, action: PayloadAction<number>) => {
      const { cartItems } = state;
      const _item = cartItems.find((item) => item.id === action.payload);
      if (_item?.quantity && _item?.quantity > 1) {
        // Reduziere die Menge des Artikels im Warenkorb um 1, wenn die Menge größer als 1 ist
        const updatedList = cartItems.map((item) =>
            item.id === action.payload
                ? { ...item, quantity: item.quantity && item.quantity - 1 }
                : item
        );
        return { ...state, cartItems: updatedList };
      } else {
        // Entferne den Artikel aus dem Warenkorb, wenn die Menge 1 ist
        const updatedItems = cartItems.filter(
            (item) => item.id !== action.payload
        );
        return { ...state, cartItems: updatedItems };
      }
    },
    // Setze den Zustand des Warenkorbs (offen oder geschlossen)
    setCartState: (state, action: PayloadAction<boolean>) => {
      return { ...state, cartOpen: action.payload };
    },
    // Warenkorb leeren
    emptyCart: (state) => {
      return { ...state, cartItems: [] };
    },
  },
});

// Exportieren der Aktionen und des Reduzierers aus dem Warenkorb-Slice
export const {
  addToCart,
  removeFromCart,
  setCartState,
  reduceFromCart,
  emptyCart,
} = cartSlice.actions;
export default cartSlice.reducer;
