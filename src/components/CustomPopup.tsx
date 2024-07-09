// Importieren der benötigten Module und Komponenten aus React und Redux
import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  MdFavoriteBorder,
  MdOutlineAccountCircle,
  MdOutlineLogout,
} from "react-icons/md"; // Importieren von React-Icons für verschiedene Symbole
import { doLogout } from "../redux/features/authSlice"; // Importieren der Aktion zum Ausloggen
import { Link } from "react-router-dom"; // Importieren der Link-Komponente aus React Router

// Definieren der Funktionskomponente "CustomPopup"
const CustomPopup: FC = () => {
  const dispatch = useAppDispatch(); // Verwenden des Dispatch-Hooks aus Redux
  const [isVisible, setVisible] = useState(false); // Zustand für die Sichtbarkeit des Popups
  const username = useAppSelector((state) => state.authReducer.username); // Auswahl des Benutzernamens aus dem Redux-Store

  // Funktion zum Umschalten der Sichtbarkeit des Popups
  const handlePopup = () => {
    setVisible((v) => !v);
  };

  // Funktion zum Ausloggen des Benutzers
  const handleLogout = () => {
    dispatch(doLogout()); // Auslösen der Ausloggen-Aktion
    hidePopup(); // Verstecken des Popups nach dem Ausloggen
  };

  // Funktion zum Verstecken des Popups
  const hidePopup = () => {
    setVisible(false);
  };

  return (
      <div className="relative font-karla">
        {/* Benutzername, der den Popup auslöst */}
        <div
            className="inline-block cursor-pointer hover:opacity-85"
            onClick={handlePopup}
            data-test="username-popup"
        >
          {username} {/* Anzeige des Benutzernamens */}
        </div>
        {/* Popup-Inhalt, der angezeigt wird, wenn das Popup sichtbar ist */}
        {isVisible && (
            <div
                className="absolute p-4 left-[-50px] w-40 z-50 mt-2 rounded-md shadow-2xl bg-white ring-1 transition-all ring-black ring-opacity-5 focus:outline-none"
                data-test="popup-content-list"
            >
              <table>
                <tbody>
                {/* Liste der Popup-Optionen */}
                <tr>
                  <td className="text-center">
                    <MdOutlineAccountCircle /> {/* Symbol für den Account */}
                  </td>
                  <td className="hover:underline cursor-pointer text-lg pl-2">
                    {/* Link zum Account */}
                    <Link to="/account" onClick={hidePopup}>
                      Account
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <MdFavoriteBorder /> {/* Symbol für die Wunschliste */}
                  </td>
                  <td
                      className="hover:underline cursor-pointer text-lg pl-2"
                      data-test="wishlist-container"
                  >
                    {/* Link zur Wunschliste */}
                    <Link to="/wishlist" onClick={hidePopup}>
                      Wishlist
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <MdOutlineLogout /> {/* Symbol für das Ausloggen */}
                  </td>
                  <td
                      className="hover:underline cursor-pointer text-lg pl-2"
                      onClick={handleLogout} // Auslösen der Ausloggen-Funktion beim Klicken auf die Logout-Option
                      data-test="logout-btn"
                  >
                    Logout {/* Option zum Ausloggen */}
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
        )}
      </div>
  );
};

export default CustomPopup; // Exportieren der CustomPopup-Komponente
