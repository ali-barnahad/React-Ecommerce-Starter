import { FC, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import TrendingProducts from "../components/TrendingProducts";
import { useAppDispatch } from "../redux/hooks";
import {
  updateNewList,
  updateFeaturedList,
} from "../redux/features/productSlice";
import { Product } from "../models/Product";
import LatestProducts from "../components/LatestProducts";
import Banner from "../components/Banner";

const Home: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchProducts = () => {
      // Daten von externer API abrufen
      fetch("https://dummyjson.com/products?limit=24")
        .then((res) => res.json())
        .then(({ products }) => {
          // Daten in das erforderliche Format konvertieren und Listen aktualisieren
          const productList: Product[] = products.map((product: Product) => ({
            id: product.id,
            title: product.title,
            images: product.images,
            price: product.price,
            rating: product.rating,
            thumbnail: product.thumbnail,
            description: product.description,
            category: product.category,
            discountPercentage: product.discountPercentage,
          }));
          // Die ersten 8 Produkte als "Featured" und die nächsten 8 Produkte als "New" festlegen
          dispatch(updateFeaturedList(productList.slice(0, 20)));
          dispatch(updateNewList(productList.slice(16, 32)));
        });
    };
    fetchProducts(); // Funktion zum Abrufen von Produkten aufrufen
  }, [dispatch]); // 'dispatch' als Abhängigkeit angeben, um den Hook einmalig auszuführen

  return (
    <>
      {/* Rendern der verschiedenen Abschnitte der Startseite */}
      <HeroSection />
      <Features />
      <TrendingProducts />
      <Banner />
      <LatestProducts />
      <br /> {/* Leerer Abschnitt zur besseren visuellen Trennung */}
    </>
  );
};

export default Home;
