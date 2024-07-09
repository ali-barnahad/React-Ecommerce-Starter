import { useEffect, useState } from "react";

// Definition des Props-Interfaces für die Verwendung in der useDiscount-Funktion
interface Props {
  price: number; // Preis des Produkts
  discount?: number; // Rabatt auf das Produkt (optional)
}

// Die useDiscount-Hook-Funktion berechnet den reduzierten Preis basierend auf dem angegebenen Preis und Rabatt
const useDiscount = ({ price, discount = 0 }: Props) => {
  // Verwendung des useState-Hooks, um den reduzierten Preis zu verfolgen
  const [result, setResult] = useState(0);

  // Verwendung des useEffect-Hooks, um den reduzierten Preis zu aktualisieren, wenn sich der Preis oder Rabatt ändert
  useEffect(() => {
    if (discount === 0) {
      setResult(price); // Wenn kein Rabatt vorhanden ist, ist der reduzierte Preis gleich dem ursprünglichen Preis
    } else {
      // Berechnung des reduzierten Preises basierend auf dem Rabatt
      setResult(price - (price * discount) / 100); // Der reduzierte Preis wird um den prozentualen Rabatt reduziert
    }
  }, [price, discount]); // Die Abhängigkeiten sind der Preis und der Rabatt, da sich der reduzierte Preis ändern kann, wenn sich diese Werte ändern

  return result; // Rückgabe des berechneten reduzierten Preises
};

export default useDiscount; // Export der useDiscount-Hook-Funktion
