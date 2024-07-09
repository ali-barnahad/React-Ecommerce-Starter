// Importieren des benutzerdefinierten Hooks "useAppSelector" aus Redux und der "ProductList" Komponente
import { useAppSelector } from "../redux/hooks";
import ProductList from "./ProductList";

// Definieren der "LatestProducts" Komponente
const LatestProducts = () => {
  // Verwenden des "useAppSelector" Hooks, um die neuesten Produkte aus dem Redux-Store auszuwählen
  const newProducts = useAppSelector(
      (state) => state.productReducer.newProducts
  );

  // Rendern der "ProductList" Komponente mit dem Titel "New Arrivals" und den ausgewählten neuen Produkten
  return <ProductList title="New Arrivals" products={newProducts} />;
};

export default LatestProducts; // Exportieren der "LatestProducts" Komponente
