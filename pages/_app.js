import { useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Navbar_connect from "../components/Navbar_connect";
import Cookies from "js-cookie";

/**
 * Function Myapp
 */
function MyApp({ Component, pageProps }) {
  // Connected user's email
  const [loginEmail, setLoginEmail] = useState(null);
  const router = useRouter();
  // Find if a user is connected
  const connected = Cookies.get("connected");
  // Get the email of a connected user
  const email = Cookies.get("email");
  // Get the username of a connected user
  const username = Cookies.get("username");
  // When the user want to be disconnected
  const handleDeconnect = () => {
    // Delete the cookie when the user is disconnected
    Cookies.remove("connected");
    setLoginEmail(null);
    Cookies.remove("email");
    Cookies.remove("username");
    router.replace("/");
  };

  // When the user want to be connected
  const handleConnect = () => {
    Cookies.set("connected", "true");
  };

  return (
    <div>
      {/* Check if a user is connected */}
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
