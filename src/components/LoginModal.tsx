// Importieren der benötigten Module und Komponenten aus React und Redux
import { FC, FormEvent, useState } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { doLogin, updateModal } from "../redux/features/authSlice";
import { FaUnlock } from "react-icons/fa";
import { RiLockPasswordFill, RiUser3Fill } from "react-icons/ri";
import { GiArchiveRegister } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

// Definieren der Funktionskomponente "LoginModal"
const LoginModal: FC = () => {
  // Zustandsvariablen für die Anzeige des Modals und die Benutzereingaben
  const [clicked, setClicked] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();

  // Zustandswert für die Anzeige des Modals aus dem Redux-Store abrufen
  const open = useAppSelector((state) => state.authReducer.modalOpen);

  // Funktion zum Absenden des Formulars
  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(doLogin({ username, password }));
  };

  // Rendern des Modals, wenn es geöffnet ist
  if (open) {
    return (
      <div className="bg-[#0000007d] w-full min-h-screen fixed inset-0 z-30 flex items-center justify-center font-karla">
        {/* Modaler Inhalt */}
        <div
          className="relative border shadow rounded p-8 bg-white max-w-md w-full z-40"
          data-test="login-container"
        >
          {/* Schließen-Symbol */}
          <RxCross1
            className="absolute cursor-pointer right-5 top-5 hover:opacity-85"
            onClick={() => dispatch(updateModal(false))}
          />
          {/* Anmelde- oder Registrierungsinhalt je nach Zustand */}
          {clicked ? (
            <>
              {/* Registrierungsabschnitt */}
              <div className="flex mb-2 space-x-2 justify-center items-center">
                <GiArchiveRegister />
                <h3 className="font-bold text-center text-xl">Register</h3>
                <GiArchiveRegister />
              </div>
              {/* Text für die Registrierung */}
              <p className="leading-4">
                This is a hobby project for development purpose only. No well
                suited backend has been used here. Please use <b>ali1999</b> as
                username & <b>Ali1999</b> as password. You can find these
                credentials in the placeholder also.{" "}
                <span
                  className="text-blue-500 cursor-pointer hover:underline"
                  onClick={() => setClicked(false)}
                >
                  Go to login
                </span>
              </p>
            </>
          ) : (
            <>
              {/* Anmeldeabschnitt */}
              <div className="flex mb-2 space-x-2 justify-center items-center">
                <FaUnlock />
                <h3 className="font-bold text-center text-2xl">Login</h3>
                <FaUnlock />
              </div>
              {/* Formular für die Anmeldung */}
              <form onSubmit={submitForm} className="flex flex-col space-y-3">
                {/* Benutzernameneingabefeld */}
                <div className="relative">
                  <input
                    data-test="input-username"
                    type="text"
                    placeholder="Your username here... (ali1999)"
                    className="border w-full border-black py-2 px-8 rounded"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <RiUser3Fill className="absolute top-3 left-2 text-lg" />
                </div>
                {/* Passworteingabefeld */}
                <div className="relative">
                  <input
                    data-test="input-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Your password here... (Ali1999)"
                    className="border w-full border-black py-2 px-8 rounded"
                  />
                  <RiLockPasswordFill className="absolute top-3 left-2 text-lg" />
                </div>
                {/* Submit-Taste */}
                <input
                  data-test="input-submit"
                  type="submit"
                  value="Submit"
                  className="bg-blue-500 text-white text-xs rounded p-2 hover:bg-blue-700 cursor-pointer"
                />
              </form>
              {/* Link zum Registrierungsabschnitt */}
              <p className="text-center mt-1">
                No Account?{" "}
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={() => setClicked(true)}
                >
                  Register
                </span>
              </p>
            </>
          )}
        </div>
      </div>
    );
  } else {
    return null; // Wenn das Modal nicht geöffnet ist, wird null zurückgegeben, um nichts zu rendern
  }
};

export default LoginModal; // Exportieren der LoginModal-Komponente
