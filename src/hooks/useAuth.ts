import { updateModal } from "../redux/features/authSlice";
import { useAppSelector, useAppDispatch } from "../redux/hooks";

// Die useAuth-Hook-Funktion
const useAuth = () => {
  // Verwendung des useDispatch-Hooks, um die Dispatch-Funktion abzurufen
  const dispatch = useAppDispatch();
  // Verwendung des useAppSelector-Hooks, um auf den isLoggedIn-Status im Redux-Store zuzugreifen
  const isLoggedIn = useAppSelector((state) => state.authReducer.isLoggedIn);

  // Definition der requireAuth-Funktion, die eine Aktion ausführt, wenn der Benutzer angemeldet ist, andernfalls das Modal aktualisiert
  const requireAuth = (action: () => void) => {
    if (!isLoggedIn) {
      dispatch(updateModal(true)); // Dispatchen der updateModal-Aktion, um das Modal zu aktualisieren
    } else {
      action(); // Ausführen der übergebenen Aktion, wenn der Benutzer angemeldet ist
    }
  };

  // Rückgabe eines Objekts mit der requireAuth-Funktion
  return { requireAuth };
};

export default useAuth; // Export der useAuth-Hook-Funktion
