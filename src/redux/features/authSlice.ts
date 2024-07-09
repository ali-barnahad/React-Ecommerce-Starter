import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthSlice } from "../../models/AuthSlice";

// Definiere die Typen für die Anmeldeinformationen
interface LoginProps {
  username: string;
  password: string;
}

// Initialer Zustand des Authentifizierungs-Slices
const initialState: AuthSlice = {
  // Überprüfen, ob der Benutzer bereits angemeldet ist, basierend auf dem Wert im lokalen Speicher
  isLoggedIn:
    localStorage.getItem("username") !== null &&
    localStorage.getItem("username") !== undefined &&
    localStorage.getItem("username") !== "",
  // Modalfenster für die Authentifizierung ist standardmäßig geschlossen
  modalOpen: false,
  // Der Benutzername wird aus dem lokalen Speicher geladen, wenn verfügbar, sonst leer
  username: localStorage.getItem("username") ?? "",
};

// Erstellen des Authentifizierungs-Slices mit Redux Toolkit
export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    // Aktualisieren des Zustands für das Modalfenster
    updateModal: (state, action: PayloadAction<boolean>) => {
      return { ...state, modalOpen: action.payload };
    },
    // Anmeldeaktion
    doLogin: (state, action: PayloadAction<LoginProps>) => {
      // Überprüfen, ob die eingegebenen Anmeldeinformationen korrekt sind
      if (
        action.payload.username === "ali1999" &&
        action.payload.password === "Ali1999"
      ) {
        // Wenn die Anmeldeinformationen korrekt sind, den Benutzernamen im lokalen Speicher speichern und den Zustand aktualisieren
        localStorage.setItem("username", "ali1999");
        return {
          ...state,
          username: "ali1999",
          modalOpen: false,
          isLoggedIn: true,
        };
      } else {
        // Wenn die Anmeldeinformationen falsch sind, den aktuellen Zustand beibehalten
        return state;
      }
    },
    // Abmeldeaktion
    doLogout: (state) => {
      // Den Benutzernamen aus dem lokalen Speicher entfernen und den Zustand aktualisieren
      localStorage.removeItem("username");
      return { ...state, username: "", isLoggedIn: false };
    },
  },
});

// Exportieren der Aktionen und des Reduzierers aus dem Authentifizierungs-Slice
export const { updateModal, doLogin, doLogout } = authSlice.actions;
export default authSlice.reducer;
