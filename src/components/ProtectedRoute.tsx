import { FC } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

// Definition der ProtectedRoute-Komponente
const ProtectedRoute: FC = () => {
  // Zustand abrufen, um zu überprüfen, ob der Benutzer eingeloggt ist
  const isLoggedin = useAppSelector((state) => state.authReducer.isLoggedIn);

  // Wenn der Benutzer eingeloggt ist, rendern Sie das Outlet (Unterkomponenten der geschützten Route),
  // sonst navigieren Sie zum Anmeldebildschirm
  return isLoggedin ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute; // ProtectedRoute-Komponente exportieren
