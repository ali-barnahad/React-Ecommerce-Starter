import { CartItem } from "./CartItem";

export interface CartSlice {
  cartOpen: boolean;    // Gibt an, ob der Warenkorb geöffnet ist oder nicht
  cartItems: CartItem[]; // Eine Liste von Objekten, die die Produkte im Warenkorb repräsentieren
}
