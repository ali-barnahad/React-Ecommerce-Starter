import { Product } from "./Product";

export interface CartItem extends Product {
  quantity?: number; // Die Anzahl der Produkte im Warenkorb (optional)
}
