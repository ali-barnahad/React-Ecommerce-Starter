// Importieren der benötigten Module und Komponenten aus React und Redux
import { FC, useState } from "react";
import { RxCross1 } from "react-icons/rx"; // Importieren des Close-Icons
import { useAppDispatch, useAppSelector } from "../redux/hooks"; // Importieren von Redux-Hooks
import { emptyCart, setCartState } from "../redux/features/cartSlice"; // Importieren von Redux-Aktionen
import CartRow from "./CartRow"; // Importieren der Komponente "CartRow" für den Warenkorb
import toast from "react-hot-toast"; // Importieren der Toast-Benachrichtigungen

// Definieren der Funktionskomponente "Cart"
const Cart: FC = () => {
  const dispatch = useAppDispatch(); // Verwenden des Dispatch-Hooks, um Aktionen auszulösen
  const isOpen = useAppSelector((state) => state.cartReducer.cartOpen); // Prüfen, ob der Warenkorb geöffnet ist
  const items = useAppSelector((state) => state.cartReducer.cartItems); // Abrufen der Artikel im Warenkorb aus dem Redux-Store
  const [checkout, setCheckout] = useState(false); // Zustand für den Checkout-Vorgang

  // Funktion zur Berechnung des Gesamtpreises
  const calculateTotal = () => {
    let total = 0;
    items.forEach((item) => {
      if (item.quantity && item.discountPercentage)
        total +=
          (item.price - (item.price * item.discountPercentage) / 100) *
          item.quantity;
    });
    return total.toFixed(2); // Rundung auf zwei Dezimalstellen
  };

  // Funktion zum Bearbeiten der Bestellung
  const handleOrder = () => {
    dispatch(setCartState(false)); // Schließen des Warenkorbs
    dispatch(emptyCart()); // Leeren des Warenkorbs
    setCheckout(false); // Zurücksetzen des Checkout-Zustands
    // Anzeigen einer Erfolgsmeldung
    toast.success("your order has been confirmed", { duration: 3000 });
  };

  // Rendern des Warenkorbs, wenn geöffnet
  if (isOpen) {
    return (
      <div className="bg-[#0000007d] w-full min-h-screen fixed left-0 top-0 z-20 overflow-y-auto">
        {checkout ? ( // Darstellung des Checkout-Bereichs
          <div className="max-w-[400px] w-full min-h-full bg-white absolute right-0 top-0 p-6 font-karla">
            {/* Überschrift und Erklärung des Checkout-Bereichs */}
            <h1 className="font-bold text-xl mb-1">Checkout</h1>
            <p className="leading-4 mb-3">
              Welcome to the checkout section. This is being a development
              project, I haven't implemented any payment related task. If you
              click the cancel button you'll go back to the cart segment.
              Clicking confirm button will consider your order confirmed,
              payment done & also order delivered successfully. Another thing to
              mention, order history hasn't been developed due to not having a
              proper backend api.
            </p>
            {/* Buttons zum Abbrechen oder Bestätigen der Bestellung */}
            <div className="flex items-center space-x-2">
              <span
                className="w-1/2 border border-gray-500 rounded cursor-pointer text-center py-1"
                onClick={() => setCheckout(false)}
              >
                Cancel
              </span>
              <span
                className="w-1/2 border border-gray-500 rounded cursor-pointer text-center py-1"
                onClick={handleOrder}
                data-test="confirm-order-btn"
              >
                Confirm
              </span>
            </div>
          </div>
        ) : (
          // Darstellung des Warenkorb-Inhalts
          <div
            className="max-w-[400px] w-full min-h-full bg-white absolute right-0 top-0 p-6 font-karla"
            data-test="cart-container"
          >
            <div className="flex items-center justify-between">
              {/* Überschrift des Warenkorbs */}
              <h3 className="font-semibold text-2xl">Your Cart</h3>
              {/* Schließen-Icon des Warenkorbs */}
              <RxCross1
                className="text-[24px] cursor-pointer hover:opacity-70"
                onClick={() => dispatch(setCartState(false))}
                data-test="cart-close"
              />
            </div>
            {/* Anzeige der Warenkorb-Artikel */}
            <div className="mt-6 space-y-2">
              {items?.length > 0 ? (
                items.map((item) => <CartRow key={item.id} {...item} />)
              ) : (
                // Anzeige bei leerem Warenkorb
                <div className="flex flex-col justify-center items-center p-4">
                  <img src="/emptyCart.jpg" alt="empty" className="w-40" />
                  <p className="text-center text-xl my-2">Your cart is empty</p>
                </div>
              )}
            </div>
            {/* Anzeige des Gesamtpreises und Checkout-Button */}
            {items?.length > 0 && (
              <>
                <div className="flex items-center justify-between p-2">
                  <h2 className="font-bold text-2xl">Total</h2>
                  <h2 className="font-bold text-2xl">${calculateTotal()}</h2>
                </div>
                <button
                  type="button"
                  data-test="checkout-btn"
                  onClick={() => setCheckout(true)}
                  className="w-full text-center text-white text-xs bg-blue-500 py-2 my-4 rounded font-bold text-xl hover:bg-blue-700"
                >
                  CHECKOUT
                </button>
              </>
            )}
          </div>
        )}
      </div>
    );
  }
};

export default Cart; // Exportieren der Cart-Komponente
