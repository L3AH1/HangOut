import React from "react";
import Head from "next/head";
import Link from "next/link";
import HPopup from "./ConnectPopup";
import "react-responsive-modal/styles.css";

export default function Header() {
  return (
    <header className="px-4">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>
      <div className="flex items-center justify-between">
        <div id="logo">
          <a href="#" className="inline-block py-2 px-4 text-xl font-bold">
          <img className="logo h-10" src="Logo.svg"/>
          </a>
        </div>
        <div>
          <nav>
            <ul className="flex">
              <li className="py-2 px-4">
                <Link href="/">
                  <a>Accueil</a>
                </Link>
              </li>
              <li className="py-2 px-4">
                <Link href="/Presentation">
                  <a>Présentation</a>
                </Link>
              </li>
              <li className="py-2 px-4">
                <Link href="/aide">
                  <a>Aide</a>
                </Link>
              </li>
              <li className="py-2 px-4" style={{backgroundColor: "Orange", borderRadius: 10}}>
                  <HPopup>Connexion</HPopup>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
