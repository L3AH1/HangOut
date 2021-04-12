import { useState } from "react"

function MyApp({ Component, pageProps }) {
  // Adresse email avec lequel l'utilisateur est connecté
  const [loginEmail, setLoginEmail] = useState(null);

  return <Component  loginEmail={loginEmail} setLoginEmail={setLoginEmail} {...pageProps} />
}


export default MyApp