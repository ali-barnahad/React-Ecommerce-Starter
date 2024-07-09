// Importieren der benötigten Module und Komponenten aus React und Redux
import { FC } from "react";
import { CartItem } from "../models/CartItem"; // Importieren des CartItem-Modells
import {
    IoIosAddCircleOutline,
    IoIosRemoveCircleOutline,
} from "react-icons/io"; // Importieren von React-Icons für Plus- und Minus-Symbole
import { useAppDispatch } from "../redux/hooks"; // Importieren des Dispatch-Hooks aus Redux
import {
    addToCart,
    reduceFromCart,
    removeFromCart,
} from "../redux/features/cartSlice"; // Importieren der Aktionen aus dem cartSlice
import { RiDeleteBin6Line } from "react-icons/ri"; // Importieren des Mülleimersymbols
import useDiscount from "../hooks/useDiscount"; // Importieren des benutzerdefinierten Hooks für Rabatte

// Definieren der Funktionskomponente "CartRow" mit den Props des CartItem-Modells
const CartRow: FC<CartItem> = ({
                                   id,
                                   thumbnail,
                                   title,
                                   price,
                                   quantity,
                                   rating,
                                   category,
                                   discountPercentage = 0,
                               }) => {
    const dispatch = useAppDispatch(); // Verwenden des Dispatch-Hooks, um Aktionen auszulösen
    const result = useDiscount({ price, discount: discountPercentage }); // Aufrufen des benutzerdefinierten Hooks für Rabatte

    return (
        <div className="grid grid-cols-7 gap-3 border items-center">
            {/* Darstellung des Produktbildes */}
            <img src={thumbnail} alt="thumbnail" className="h-20 col-span-2" />

            <div className="col-span-3">
                {/* Anzeige des Produkttitels */}
                <h3 className="font-bold leading-4">{title}</h3>
                {/* Anzeige des reduzierten Preises (falls ein Rabatt vorhanden ist) */}
                <div className="flex space-x-2 items-center">
                    <h3 className="font-semibold">${result.toFixed(2)}</h3>
                    {/* Anzeige des Rabatts */}
                    {discountPercentage !== 0 && (
                        <span className="text-xs">-{discountPercentage}%</span>
                    )}
                </div>

                {/* Steuerung der Produktmenge */}
                <div className="flex items-center space-x-1">
                    {/* Button zum Reduzieren der Produktmenge */}
                    <IoIosRemoveCircleOutline
                        className="cursor-pointer hover:opacity-80"
                        onClick={() => dispatch(reduceFromCart(id))}
                        data-test="cart-reduce-btn"
                    />
                    {/* Anzeige der Produktmenge */}
                    <span data-test="cart-item-quantity">{quantity}</span>
                    {/* Button zum Erhöhen der Produktmenge */}
                    <IoIosAddCircleOutline
                        className="cursor-pointer hover:opacity-80"
                        data-test="cart-increase-btn"
                        onClick={() =>
                            dispatch(
                                addToCart({
                                    id,
                                    title,
                                    price,
                                    quantity,
                                    thumbnail,
                                    rating,
                                    category,
                                })
                            )
                        }
                    />
                </div>
            </div>

            {/* Anzeige des Gesamtpreises */}
            <div className="font-bold col-span-2">
                {quantity && (
                    <span data-test="cart-item-price">
            ${(result * quantity).toFixed(2)}
          </span>
                )}
                {/* Button zum Entfernen des Produkts aus dem Warenkorb */}
                <RiDeleteBin6Line
                    className="text-red-500 cursor-pointer text-2xl hover:text-red-600"
                    onClick={() => dispatch(removeFromCart(id))}
                    data-test="cart-remove-btn"
                />
            </div>
        </div>
    );
};

export default CartRow; // Exportieren der CartRow-Komponente
