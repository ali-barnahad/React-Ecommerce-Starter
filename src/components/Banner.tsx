// Importieren der benötigten Module und Komponenten aus React und React Router
import { FC } from "react";
import { Link } from "react-router-dom";

// Definieren der Funktionskomponente "Banner"
const Banner: FC = () => (
  // Container für den Banner mit flexibler Anordnung für verschiedene Bildschirmgrößen
  <div className="container mt-8 mx-auto px-4 md:flex font-lora">
    {/* Bild im Banner */}
    <img src="/banner.jpg" alt="banner" className="md:w-1/2" />

    {/* Container für den Textinhalt des Banners */}
    <div className="bg-[#e3edf6] md:w-1/2 flex flex-col items-center text-center justify-center p-4">
      {/* Überschrift des Banners */}
      <h1 className="text-4xl font-bold mb-1">Don't miss the offer</h1>
      {/* Unterüberschrift des Banners */}
      <h2 className="text-3xl font-semibold mb-4">Grab it now</h2>

      {/* Link zum Shop */}
      <Link
        to="/product/4" // Ziel-URL des Links
        className="inline-block text-xs  bg-white rounded-md px-6 py-3 hover:bg-blue-500 hover:text-white text-xs" // Stil des Links
        data-test="banner-btn" // Datenattribut für Tests
      >
        Shop Now {/* Text des Links */}
      </Link>
    </div>
  </div>
);

export default Banner; // Exportieren der Banner-Komponente
