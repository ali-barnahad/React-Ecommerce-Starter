import { useAppSelector } from "../redux/hooks";
import ProductList from "./ProductList";

// Die TrendingProducts-Komponente
const TrendingProducts = () => {
  // Verwendung des Redux-Selectors, um auf die im Store gespeicherten trending Produkte zuzugreifen
  const featuredProducts = useAppSelector(
      (state) => state.productReducer.featuredProducts
  );

  // Rendern der ProductList-Komponente mit dem Titel "Trending Products" und den trending Produkten
  return <ProductList title="Trending Products" products={featuredProducts} />;
};

export default TrendingProducts; // TrendingProducts-Komponente exportieren
