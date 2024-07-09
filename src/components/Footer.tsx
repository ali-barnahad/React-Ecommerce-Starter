// Importieren der benötigten Module und Komponenten aus React
import { FC } from "react";

// Definieren der Funktionskomponente "Footer"
const Footer: FC = () => (
  // Darstellung des Footers mit blauem Hintergrund, weißem Text, zentrierter Ausrichtung und automatischem oberen Abstand
  <div className="bg-blue-500 text-white text-xs p-4 text-center mt-auto">
    {/* Copyright-Hinweis */}
    <div>&copy; Copyright | All Rights Reserved</div>
    {/* Name des Entwicklers */}
    <div>Ali Barnahad</div>
  </div>
);

export default Footer; // Exportieren der Footer-Komponente
