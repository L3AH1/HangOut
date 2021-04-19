import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

/**
 * Account function
 * @param {open} request the request.
 * @param {email} result the answer.
 * @returns a answer formatted in json.
 */
export default function account() {
  // Constant who check if the value open is true or false
  const [open, setOpen] = useState(false);
  // Constant who get the email from the application's cookies
  const [email, setEmail] = useState(Cookies.get("email"));
  // Constant who get the email from the application's cookies
  const [username, setUsername] = useState(Cookies.get("username"));
  // Constant for save data
  const [data, setData] = useState([]);

  /**
 * Function useEffect
 * @returns the users username, email and data from the database
 */
  useEffect(() => {
    console.log({ email });
    console.log({ username });
    const body = JSON.stringify({
      email,
    });
    fetch("http://localhost:3000/api/users/account", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(body), // convert an object into a string
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.user) {
          setEmail(res.user.email);
          setUsername(res.user.username);
          setData(res.user.travels);
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

                  {open && (
                    <div className="p-2">
                      <div className="flex items-center"></div>
                      <p>
                        {/*Show all the save travels of a connected user*/}
                        {data &&
                          data.map((travels) => {
                            if (travels.train == true) {
                              return (
                                <div>
                                  <a
                                    href={
                                      "/JourneyTrain?from=" +
                                      travels.depart +
                                      "&to=" +
                                      travels.arrivee +
                                      "&datetime=" +
                                      travels.date
                                    }
                                  >
                                    <div className="flex justify-start">
                                      <svg
                                        className="text-blue-600 text-right -mt-2 mr-3"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        width="32"
                                        height="32"
                                        id="fi_3202922"
                                      >
                                        <g id="_12-T" data-name="12-T">
                                          <g id="glyph">
                                            <path d="M496,404H16a12,12,0,0,0,0,24H496a12,12,0,0,0,0-24Z" />
                                            <circle cx="209" cy="367" r="12" />
                                            <circle cx="319" cy="367" r="12" />
                                            <path d="M200,268H432.554A124.162,124.162,0,0,0,320,196H190.8a35.853,35.853,0,0,1,9.2,24Z" />
                                            <path d="M57,220a35.853,35.853,0,0,1,9.2-24H4v72H57Z" />
                                            <path d="M93,344h.931l25.584,32.485A12,12,0,0,0,128,380h47.439a36,36,0,1,1,67.122,0h42.878a36,36,0,1,1,67.122,0H408.5a35.729,35.729,0,0,0,25.719-10.81c6.828-6.972,10.476-28.184,10.273-37.94L444.253,320H188V220a24.028,24.028,0,0,0-24-24H93a24.028,24.028,0,0,0-24,24V320A24.028,24.028,0,0,0,93,344Zm48-124h23l.015,100H141Zm-48,0h24V320H93Z" />
                                            <path d="M200,308H443.418a123.062,123.062,0,0,0-6.393-29H200Z" />
                                            <rect
                                              x="4"
                                              y="279"
                                              width="53"
                                              height="29"
                                            />
                                            <path d="M16,364H94.407l-6.594-8.373A36.054,36.054,0,0,1,57,320H4v32A12,12,0,0,0,16,364Z" />
                                          </g>
                                        </g>
                                      </svg>
                                      <p className="text-blue-600 font-bold pb-3 text-left">
                                        • {travels.depart} - {travels.arrivee} |
                                        {travels.date}
                                      </p>
                                    </div>
                                  </a>
                                </div>
                              );
                            } else {
                              return (
                                <div>
                                  <a
                                    href={
                                      "/bilanVoiture?from=" +
                                      travels.depart_link +
                                      "&to=" +
                                      travels.arrivee_link
                                    }
                                  >
                                    <div className="flex justify-start">
                                      <svg
                                        className="text-blue-600 mr-3"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        width="32"
                                        height="32"
                                        id="fi_3202926"
                                      >
                                        <g id="_13-car" data-name="13-car">
                                          <g id="glyph">
                                            <path d="M120,236a52,52,0,1,0,52,52A52.059,52.059,0,0,0,120,236Zm0,76a24,24,0,1,1,24-24A24,24,0,0,1,120,312Z" />
                                            <path d="M408,236a52,52,0,1,0,52,52A52.059,52.059,0,0,0,408,236Zm0,76a24,24,0,1,1,24-24A24,24,0,0,1,408,312Z" />
                                            <path d="M477.4,193.04,384,176l-79.515-65.975A44.109,44.109,0,0,0,276.526,100H159.38a43.785,43.785,0,0,0-34.359,16.514L74.232,176H40A36.04,36.04,0,0,0,4,212v44a44.049,44.049,0,0,0,44,44h9.145a64,64,0,1,1,125.71,0h162.29a64,64,0,1,1,125.71,0H472a36.04,36.04,0,0,0,36-36V228.632A35.791,35.791,0,0,0,477.4,193.04ZM180,164a12,12,0,0,1-12,12H115.245a6,6,0,0,1-4.563-9.9l34.916-40.9A12,12,0,0,1,154.724,121H168a12,12,0,0,1,12,12Zm60,56H224a12,12,0,0,1,0-24h16a12,12,0,0,1,0,24Zm94.479-43.706-114.507-.266a12,12,0,0,1-11.972-12V133a12,12,0,0,1,12-12h57.548a12,12,0,0,1,7.433,2.58l53.228,42A6,6,0,0,1,334.479,176.294Z" />
                                          </g>
                                        </g>
                                      </svg>
                                      <p className="text-blue-600 font-bold pb-3">
                                        • {travels.depart} - {travels.arrivee}
                                      </p>
                                    </div>
                                  </a>
                                </div>
                              );
                            }
                          })}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
