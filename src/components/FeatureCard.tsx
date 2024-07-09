// Importieren der benötigten Module und Komponenten aus React
import { FC } from "react";
import { FeatureItem } from "../models/FeatureItem"; // Importieren des FeatureItem-Modells

// Definieren der Funktionskomponente "FeatureCard" mit den Props des FeatureItem-Modells
const FeatureCard: FC<FeatureItem> = ({ icon, desc, title }) => (
    // Darstellung der Feature-Karte mit einem Flex-Layout und einem Hintergrund in Grau
    <div className="flex gap-2 bg-gray-100 px-4 py-6 font-karla">
        {/* Darstellung des Feature-Symbols */}
        {icon}

        {/* Container für den Textinhalt der Feature-Karte */}
        <div>
            {/* Überschrift des Features */}
            <h2 className="font-medium text-xl">{title}</h2>
            {/* Beschreibung des Features */}
            <p className="text-gray-600">{desc}</p>
        </div>
    </div>
);

export default FeatureCard; // Exportieren der FeatureCard-Komponente
