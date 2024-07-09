import { Product } from "./Product";

export interface Category {
  slug: string;
  name: string;
  url: string;
}

export interface ProductSlice {
  allProducts: Product[]; // Alle verfügbaren Produkte
  newProducts: Product[]; // Neue Produkte
  featuredProducts: Product[]; // Hervorgehobene Produkte
  wishlist: Product[]; // Produkte, die auf der Wunschliste stehen
  categories: Category[]; // Eine Liste der verfügbaren Produktkategorien
}
