import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import HFooter from "../components/HFooter";
import { useState, useEffect } from "react";

export default function account({ loginEmail }) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState(loginEmail);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const body = JSON.stringify({
      email,
    });
    fetch("http://localhost:3000/api/users/account", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(body), // convertit un objet en string
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.user) {
          setEmail(res.user.email);
          setUsername(res.user.username);
        }
      });
  }, []);

  return (
    <div>
      <Head>
        <title>Compte</title>
      </Head>
      <main>
        <section className={styles.heroaccount + " py-12 min-h-96"}>
          <div className="container max-w-4xl mx-auto px-4 h-full flex flex-col items-center gap-8">
            <div className="relative">
              <div className="rounded-lg pb-8 px-2 bg-white border shadow-2xl">
                <div class="px-4 py-8 mb-4">
                  <div class="flex gap-8 flex-row-reverse flex items-center pr-56">
                    <div>
                      <h6 class="text-2xl font-bold">Bienvenue {username},</h6>
                    </div>
                    <div>
                      <img src="profil.svg" className="h-24 w-24" />
                    </div>
                  </div>
                </div>

                <div className="container mx-auto max-w-4xl">
                  <div className="p-2 flex items-center justify-between mb-2 border-b-2 border-blue-600">
                    <h2 className="text-xl font-bold">
                      Informations personnelles
                    </h2>
                  </div>

                  <div className="p-2">
                    Nom d'utilisateur : {username} <br />
                    Email : {email} <br />
                    <a href="/aide">
                      <p className="text-blue-600 underline">
                        Modifier mon mot de passe
                      </p>
                    </a>
                  </div>
                </div>

                <div className="container mx-auto max-w-4xl">
                  <div
                    className="p-2 hover:bg-gray-200 flex items-center justify-between mb-2 border-b-2 border-blue-600"
                    onClick={() => setOpen(!open)}
                  >
                    <h4 className="font-bold text-xl">Voyages sauvegardés</h4>

                    <div
                      className={
                        open ? "transform rotate-180" : "tranform rotate-0"
                      }
                    >
                      <svg class="w-6 h-6" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* {open && (
                    <div className="p-2">
                      <a href="#">
                        <p className="text-blue-600 font-bold pb-3">
                          • Paris - Marseille | 02/10/2021
                        </p>
                      </a>
                      <a href="#">
                        <p className="text-blue-600 font-bold pb-3">
                          • Paris - Brest | 05/10/2021
                        </p>
                      </a>
                      <a href="#">
                        <p className="text-blue-600 font-bold pb-3">
                          • Paris - Grenoble | 21/05/2020
                        </p>
                      </a>
                    </div>
                  )} */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <HFooter />
    </div>
  );
}
