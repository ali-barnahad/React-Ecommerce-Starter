export interface AuthSlice {
  isLoggedIn: boolean; // Gibt an, ob der Benutzer angemeldet ist oder nicht
  modalOpen: boolean; // Gibt an, ob das Modal für die Authentifizierung geöffnet ist oder nicht
  username: string; // Der Benutzername des angemeldeten Benutzers
}
