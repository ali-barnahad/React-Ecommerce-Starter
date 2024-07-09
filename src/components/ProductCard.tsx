// Importieren der benötigten Module und Hooks aus React
import { FC } from "react";
import { Product } from "../models/Product"; // Importieren des Product-Modells
import RatingStar from "./RatingStar"; // Importieren der RatingStar-Komponente
import { addToCart } from "../redux/features/cartSlice"; // Importieren der addToCart-Aktion aus dem Redux-Slice
import { useAppDispatch } from "../redux/hooks"; // Importieren des useAppDispatch-Hooks aus Redux
import toast from "react-hot-toast"; // Importieren des toast-Moduls
import { AiOutlineShoppingCart } from "react-icons/ai"; // Importieren des AiOutlineShoppingCart-Icons aus React Icons
import { Link } from "react-router-dom"; // Importieren des Link-Komponenten aus react-router-dom
import PriceSection from "./PriceSection"; // Importieren der PriceSection-Komponente
import useAuth from "../hooks/useAuth"; // Importieren des useAuth-Hooks

// Definition der ProductCard-Komponente mit Typdefinition für das Product-Objekt
const ProductCard: FC<Product> = ({
  id,
  price,
  thumbnail,
  title,
  category,
  rating,
  discountPercentage,
}) => {
  // Verwendung des useAppDispatch-Hooks, um die Dispatch-Funktion zu erhalten
  const dispatch = useAppDispatch();
  // Verwendung des useAuth-Hooks, um die requireAuth-Funktion zu erhalten
  const { requireAuth } = useAuth();

  // Funktion zum Hinzufügen des Produkts zum Warenkorb
  const addCart = () => {
    // Überprüfen der Authentifizierung, bevor das Produkt zum Warenkorb hinzugefügt wird
    requireAuth(() => {
      // Dispatchen der addToCart-Aktion mit den Produktdetails
      dispatch(
        addToCart({
          id,
          price,
          title,
          category,
          rating,
          thumbnail,
          discountPercentage,
        })
      );
      // Anzeigen einer Erfolgsmeldung mit Toast
      toast.success("item added to cart successfully", {
        duration: 3000, // Dauer der Toast-Nachricht (3 Sekunden)
      });
    });
  };

  return (
    <div
      className="border border-gray-200 font-lato p-4"
      data-test="product-card"
    >
      <div className="text-center border-b border-gray-200">
        {/* Link zum Produkt mit Bild */}
        <Link to={{ pathname: `/product/${id}` }}>
          <img
            src={String(thumbnail)}
            alt={String(title)}
            className="inline-block h-60"
          />
        </Link>
      </div>
      <div className=" pt-4">
        {/* Kategorie des Produkts */}
        <p className="text-gray-500 text-[14px] font-medium">
          {String(category)}
        </p>
        {/* Titel des Produkts mit Link */}
        <Link
          className="font-semibold hover:underline"
          to={{ pathname: `/product/${id}` }}
        >
          {String(title)}
        </Link>
      </div>
      <div className="py-4">
        {/* Bewertung des Produkts */}
        <RatingStar rating={rating} />
      </div>
      <div className="flex items-center justify-between px-1 pb-4">
        {/* Preisabschnitt mit Rabattinformationen */}
        {discountPercentage && (
          <PriceSection discountPercentage={discountPercentage} price={price} />
        )}
        {/* Button zum Hinzufügen zum Warenkorb */}
        <button
          type="button"
          className="flex items-center space-x-2 hover:bg-blue-500 text-white text-xs py-2 px-4 rounded bg-pink-500"
          onClick={addCart}
          data-test="add-cart-btn"
        >
          <AiOutlineShoppingCart />
          <span>ADD TO CART</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard; // Exportieren der ProductCard-Komponente
