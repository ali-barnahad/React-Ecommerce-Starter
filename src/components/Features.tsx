// Importieren der benötigten Module und Komponenten aus React und den Icons
import { TbTruckDelivery, TbDiscount2 } from "react-icons/tb";
import { RiRefund2Fill } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";
import { FC } from "react";
import FeatureCard from "./FeatureCard"; // Importieren der FeatureCard-Komponente

// Array von Features mit ihren Daten
const data = [
  {
    icon: <TbTruckDelivery className="text-4xl" />, // Symbol für kostenlose Lieferung
    title: "Free Delivery", // Titel des Features
    desc: "Orders from all items", // Beschreibung des Features
  },
  {
    icon: <RiRefund2Fill className="text-4xl" />, // Symbol für Rückgabe & Rückerstattung
    title: "Return & Refund", // Titel des Features
    desc: "Money back guarantee", // Beschreibung des Features
  },
  {
    icon: <TbDiscount2 className="text-4xl" />, // Symbol für Mitgliederrabatt
    title: "Member Discount", // Titel des Features
    desc: "On order over $99", // Beschreibung des Features
  },
  {
    icon: <MdSupportAgent className="text-4xl" />, // Symbol für 24/7 Support
    title: "Support 24/7", // Titel des Features
    desc: "Contact us 24 hours a day", // Beschreibung des Features
  },
];

// Definieren der Funktionskomponente "Features"
const Features: FC = () => (
    // Container für die Features mit einer Rasteranordnung, die sich je nach Bildschirmgröße anpasst
    <div className="px-4 container grid gap-2 sm:grid-cols-2 lg:grid-cols-4 mt-8 mx-auto">
      {/* Mapping über das Array von Features und Rendern von FeatureCard-Komponenten */}
      {data.map((item) => (
          <FeatureCard
              key={item.title} // Schlüssel für die Liste der Features
              icon={item.icon} // Symbol des Features
              title={item.title} // Titel des Features
              desc={item.desc} // Beschreibung des Features
          />
      ))}
    </div>
);

export default Features; // Exportieren der Features-Komponente
