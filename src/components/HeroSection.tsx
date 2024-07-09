// Importieren der benötigten Module und Komponenten aus React und React Router
import { FC } from "react";
import { Link } from "react-router-dom";

// Definieren der Funktionskomponente "HeroSection"
const HeroSection: FC = () => {
  return (
    // Darstellung der Helden-Sektion mit einem hellen Hintergrund und der Schriftart "Lora"
    <div className="bg-[#e3edf6] font-lora">
      {/* Container für die Helden-Sektion mit Rasteranordnung */}
      <div className="container px-4 grid md:grid-cols-2 py-8 mx-auto">
        {/* Bereich mit dem Textinhalt */}
        <div className="flex items-center">
          {/* Container für den Textinhalt */}
          <div className="max-w-[450px] space-y-4">
            {/* Preisangabe */}
            <p className="text-black">
              Starting At <span className="font-bold">$999</span>
            </p>
            {/* Überschrift */}
            <h2 className="text-black font-bold text-4xl md:text-5xl">
              The best notebook collection 2024
            </h2>
            {/* Unterüberschrift mit Rabattangabe */}
            <h3 className="text-2xl">
              Exclusive offer <span className="text-red-600">-10%</span> off
              this week
            </h3>
            {/* Link zum Shop */}
            <Link
              to="/product/6" // Ziel-URL des Links
              data-test="hero-btn" // Datenattribut für Tests
              className="inline-block bg-white rounded-md px-6 py-3 hover:bg-blue-500 hover:text-white text-xs" // Stil des Links
            >
              Shop Now {/* Text des Links */}
            </Link>
          </div>
        </div>
        {/* Bereich mit dem Bild */}
        <div>
          <img src="/hero.png" alt="hero" className="ml-auto" /> {/* Bild */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection; // Exportieren der HeroSection-Komponente
