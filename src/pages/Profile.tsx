import { FC, useEffect, useState } from "react";

// Definieren der Typen für die Adress- und Unternehmensinformationen
interface Address {
  address: string;
  city: string;
  postalCode: string;
  state: string;
}

interface Company {
  address: Address;
  department: string;
  name: string;
  title: string;
}

// Definieren der Benutzerinformationen
interface UserInfo {
  id: number;
  image: string;
  username: string;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  bloodGroup: string;
  address: Address;
  company: Company;
  university: string;
}

const Profile: FC = () => {
  // Zustand für die Benutzerinformationen
  const [info, setInfo] = useState<UserInfo>();

  // Effekt zum Abrufen der Benutzerinformationen von der API
  useEffect(() => {
    fetch("https://dummyjson.com/users/4")
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
      });
  }, []);

  // Rendern der Benutzerinformationen
  return (
    <div className="container mx-auto min-h-[83vh] w-full max-w-5xl">
      {/* Überschrift */}
      <h1 className="text-4xl p-4 font-bold font-lora">Your Account</h1>
      {/* Rendern der Benutzerinformationen in einer Grid-Struktur */}
      <div className="font-karla grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-1 p-4">
        {/* Benutzerbild */}
        <img src={info?.image} alt="pp" className="text-center" />
        {/* Tabelle für die Benutzerinformationen */}
        <table>
          <tbody>
            <tr>
              <td className="font-bold">Username</td>
              <td>{info?.username}</td>
            </tr>
            <tr>
              <td className="font-bold">First Name</td>
              <td>{info?.firstName}</td>
            </tr>
            {/* Weitere Benutzerinformationen */}
            {/* ... */}
          </tbody>
        </table>
        {/* Adress- und Unternehmensinformationen */}
        <div className="space-y-2">
          <div>
            <h1 className="font-bold">Address</h1>
            <p>{info?.address.address}</p>
            {/* Weitere Adressinformationen */}
            {/* ... */}
          </div>
          <div>
            <h1 className="font-bold">Company</h1>
            <p>{info?.company.name}</p>
            {/* Weitere Unternehmensinformationen */}
            {/* ... */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
