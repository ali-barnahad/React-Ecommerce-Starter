import { FC } from "react";
import { useAppSelector } from "../redux/hooks";
import ProductList from "../components/ProductList";

// Die Wishlist-Komponente rendert die Produkte auf der Wunschliste
const Wishlist: FC = () => {
  // Zustand aus dem Redux-Store abrufen, der die Produkte auf der Wunschliste enthält
  const wishlist = useAppSelector((state) => state.productReducer.wishlist);

  return (
      <div className="container mx-auto font-karla min-h-[83vh]">
        {/* Überprüfen, ob die Wunschliste nicht leer ist */}
        {wishlist.length > 0 ? (
            // Wenn die Wunschliste nicht leer ist, wird die ProductList-Komponente gerendert, um die Produkte anzuzeigen
            <ProductList title="Your Wishlist" products={wishlist} />
        ) : (
            // Wenn die Wunschliste leer ist, wird eine Meldung angezeigt
            <div className="flex flex-col justify-center items-center p-8">
              {/* Bild für leeren Warenkorb anzeigen */}
              <img src="/emptyCart.jpg" className="w-60" alt="empty" />
              {/* Meldung anzeigen, dass die Wunschliste leer ist */}
              <p className="text-center text-xl font-semibold my-2">
                Your wishlist is empty
              </p>
            </div>
        )}
      </div>
  );
};

export default Wishlist;
