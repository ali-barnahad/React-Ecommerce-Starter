// Importieren der benötigten Module und Hooks aus React
import { FC } from "react";
import useDiscount from "../hooks/useDiscount"; // Importieren des benutzerdefinierten Hooks "useDiscount"

// Definieren der "PriceSection" Komponente mit Typdefinition für price und discountPercentage
const PriceSection: FC<{ price: number; discountPercentage: number }> = ({
                                                                             price,
                                                                             discountPercentage = 0, // Standardwert für discountPercentage ist 0, falls nicht angegeben
                                                                         }) => {
    // Verwendung des benutzerdefinierten Hooks "useDiscount" zur Berechnung des reduzierten Preises
    const result = useDiscount({ price, discount: discountPercentage });

    // Parsen des discountPercentage als Float
    const discount = parseFloat(discountPercentage.toString());

    // Überprüfung, ob der Rabatt größer als 0 ist
    if (Math.floor(discount) === 0) {
        // Falls kein Rabatt vorhanden ist, wird nur der ursprüngliche Preis angezeigt
        return <h2 className="font-medium text-blue-500 text-xl">${price}</h2>;
    }

    // Falls ein Rabatt vorhanden ist, wird der reduzierte Preis mit dem durchgestrichenen ursprünglichen Preis angezeigt
    return (
        <div className="leading-3">
            <h2 className="font-medium text-blue-500 text-xl">${result.toFixed(2)}</h2>
            <span className="mr-2 text-sm line-through opacity-70">${price}</span>
            <span className="text-sm font-semibold">-{discountPercentage}%</span>
        </div>
    );
};

export default PriceSection; // Exportieren der PriceSection-Komponente
