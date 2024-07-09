/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

// Definition der RatingStar-Komponente
const RatingStar: FC<{ rating: number }> = ({ rating }) => {
    // Die Bewertung in eine Dezimalzahl konvertieren
    const ratingNum = parseFloat(rating.toString());
    // Ganzzahlanteil der Bewertung erhalten
    const main = Math.floor(ratingNum);
    // Anzahl der nicht angezeigten Sterne berechnen
    const other = 5 - main;

    let showing: any;
    // Abhängig von der Ganzzahlbewertung die entsprechenden gefüllten Sterne anzeigen
    if (main === 1) {
        showing = <AiFillStar />;
    } else if (main === 2) {
        showing = (
            <>
                <AiFillStar />
                <AiFillStar />
            </>
        );
    } else if (main === 3) {
        showing = (
            <>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
            </>
        );
    } else if (main === 4) {
        showing = (
            <>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
            </>
        );
    } else if (main === 5) {
        showing = (
            <>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
            </>
        );
    } else {
        showing = <></>; // Wenn die Bewertung keine Ganzzahl zwischen 1 und 5 ist, werden keine Sterne angezeigt
    }

    let notShowing: any;
    // Abhängig von der Anzahl der nicht angezeigten Sterne die entsprechenden leeren Sterne anzeigen
    if (other === 1) {
        notShowing = <AiOutlineStar />;
    } else if (other === 2) {
        notShowing = (
            <>
                <AiOutlineStar />
                <AiOutlineStar />
            </>
        );
    } else if (other === 3) {
        notShowing = (
            <>
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
            </>
        );
    } else if (other === 4) {
        notShowing = (
            <>
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
            </>
        );
    } else if (other === 5) {
        notShowing = (
            <>
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
            </>
        );
    } else {
        notShowing = <></>; // Wenn die Anzahl der nicht angezeigten Sterne nicht zwischen 1 und 5 liegt, werden keine leeren Sterne angezeigt
    }

    // Die Sterne und die Bewertung anzeigen
    return (
        <div className="flex items-center text-[#ffb21d]">
            {showing}
            {notShowing}
            <span className="ml-2 text-gray-600 font-semibold">{rating}</span>
        </div>
    );
};

export default RatingStar; // RatingStar-Komponente exportieren
