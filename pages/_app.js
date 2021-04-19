import { useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Navbar_connect from "../components/Navbar_connect";
import Cookies from "js-cookie";

function MyApp({ Component, pageProps }) {
  // Adresse email avec lequel l'utilisateur est connecté
  const [loginEmail, setLoginEmail] = useState(null);
  const router = useRouter();
  const connected = Cookies.get("connected");
  const email = Cookies.get("email");
  const username = Cookies.get("username");
  // Lorsque l'utilisateur souhaite se déconnecter
  const handleDeconnect = () => {
    // Effacer le cookie de connexion
    Cookies.remove("connected");
    setLoginEmail(null);
    router.replace("/");
  };

  //Lorsque l'utilisateur souhaite se connecter
  const handleConnect = () => {
    Cookies.set("connected", "true");
  };

  const onDeconnect = () => {
    setLoginEmail(null);
    router.replace("/");
  };

  return (
    <div>
      {connected ? (
        <Navbar_connect onDeconnect={handleDeconnect} />
      ) : (
        <Navbar />
      )}
      <Component
        loginEmail={loginEmail}
        setLoginEmail={setLoginEmail}
        {...pageProps}
      />
    </div>
  );
}

export default MyApp;
