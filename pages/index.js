import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { envies, environnements, villes } from "./api/globalVariables";
import Suggestion from "../components/Suggestions";
import Footer from "../components/Footer";
import Autocomplete from "../components/Autocomplete";

/* 
  Home page display class
 */
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ville: "",
      dateDepart: new Date(),
      envie: [],
      environnement: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
  }

  render() {

    // Constant who save a balise option with all the environnement options
    const environnementOpt = environnements.map((env) => (
        <option key={env} value={env}>
          {env}
        </option>
    ));

    // Constant who save a balise option with all the desires options
    const envieOpt = envies.map((env) => (
        <option key={env} value={env}>
          {env}
        </option>
    ));

    // Get the current date and save it into the variable today
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    const yyyy = today.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    today = yyyy + "-" + mm + "-" + dd;

    return (
        <div className={styles.container}>
          <Head>
            <title>HangOut</title>
          </Head>
          <main>
            <section className={styles.hero + " py-12 min-h-96"}>
              <div className="container max-w-4xl mx-auto px-4 h-full flex flex-col items-center gap-8">
                <img src="Logo_seul.svg" className=" w-24 text-center"  alt="logo HangOut"/>
                <div className="hero__heading text-center">
                  <h2 className="text-5xl text-white font-extrabold max-w-prose mb-2">
                    Redécouvrez la France
                  </h2>
                  <p className="max-w-prose mx-auto text-white">
                    Saisissez vos envies et découvrez des idées de voyages faites
                    pour vous !
                  </p>
                </div>
                <div className="hero__form relative">
                  <form
                      action="/search"
                      autoComplete="off"
                      onSubmit={this.handleSubmit}
                  >
                    <div className="rounded-lg overflow-hidden pt-2 pb-8 px-2 bg-white border shadow-2xl">
                      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
                        {/* VILLE */}
                        <div className="border border-gray-200 rounded-lg w-50 h-12 m-3 p-5 flex items-center gap-2 ">
                          <div>
                            <svg
                                className="w-8 text-blue-400"
                                viewBox="0 0 24 24"
                            >
                              <path
                                  fill="currentColor"
                                  d="M20.5,3L20.34,3.03L15,5.1L9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21L3.66,20.97L9,18.9L15,21L20.64,19.1C20.85,19.03 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3M10,5.47L14,6.87V18.53L10,17.13V5.47M5,6.46L8,5.45V17.15L5,18.31V6.46M19,17.54L16,18.55V6.86L19,5.7V17.54Z"
                              />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <label className="block text-blue-400 font-bold text-xs uppercase tracking-wide">
                              Ville de départ
                            </label>
                            <Autocomplete suggestions={villes} />
                          </div>
                        </div>
                        {/* ENVIRONNEMENT */}
                        <div className="border border-gray-200 rounded-lg w-50 h-12 m-3 p-5 flex items-center gap-2">
                          <div>
                            <svg
                                className="w-8 text-blue-400"
                                viewBox="0 0 24 24"
                            >
                              <path
                                  fill="currentColor"
                                  d="M15,18.54C17.13,18.21 19.5,18 22,18V22H5C5,21.35 8.2,19.86 13,18.9V12.4C12.16,12.65 11.45,13.21 11,13.95C10.39,12.93 9.27,12.25 8,12.25C6.73,12.25 5.61,12.93 5,13.95C5.03,10.37 8.5,7.43 13,7.04V7A1,1 0 0,1 14,6A1,1 0 0,1 15,7V7.04C19.5,7.43 22.96,10.37 23,13.95C22.39,12.93 21.27,12.25 20,12.25C18.73,12.25 17.61,12.93 17,13.95C16.55,13.21 15.84,12.65 15,12.39V18.54M7,2A5,5 0 0,1 2,7V2H7Z"
                              />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <label className="block text-blue-400 font-bold text-xs uppercase tracking-wide">
                              Environnement
                            </label>
                            <select
                                name="environnement"
                                id="environnement"
                                className="focus:outline-none w-full bg-transparent"
                                required
                            >
                              {environnementOpt}
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
                        {/* ENVIES */}
                        <div className="border border-gray-200 rounded-lg w-50 h-12 m-3 p-5 flex items-center gap-2">
                          <div>
                            <svg
                                className="w-8 text-blue-400"
                                viewBox="0 0 24 24"
                            >
                              <path
                                  fill="currentColor"
                                  d="M19,10C19,11.38 16.88,12.5 15.5,12.5C14.12,12.5 12.75,11.38 12.75,10H11.25C11.25,11.38 9.88,12.5 8.5,12.5C7.12,12.5 5,11.38 5,10H4.25C4.09,10.64 4,11.31 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,11.31 19.91,10.64 19.75,10H19M12,4C9.04,4 6.45,5.61 5.07,8H18.93C17.55,5.61 14.96,4 12,4M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"
                              />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <label className="block text-blue-400 font-bold text-xs uppercase tracking-wide">
                              Envies
                            </label>
                            <select
                                name="envie"
                                id="envie"
                                className="focus:outline-none w-full bg-transparent"
                                required
                            >
                              {envieOpt}
                            </select>
                          </div>
                        </div>
                        {/* DEPART */}
                        <div className="border border-gray-200 rounded-lg w-50 h-12 m-3 mb-5 p-5 flex items-center gap-2">
                          <div>
                            <svg
                                className="w-8 text-blue-400"
                                viewBox="0 0 24 24"
                            >
                              <path
                                  fill="currentColor"
                                  d="M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z"
                              />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <label className="block text-blue-400 font-bold text-xs uppercase tracking-wide">
                              Date de départ
                            </label>
                            <input
                                id="date_depart"
                                name="date_depart"
                                type="date"
                                defaultValue={today}
                                className="focus:outline-none appearance-none"
                                required
                                min={today}
                            />
                          </div>
                        </div>
                      </div>
                      <button className="focus:outline-none bg-gradient-to-br from-green-200 via-blue-400 to-blue-600 rounded-xl absolute text-white font-bold px-7 py-4 left-1/2 transform -translate-x-1/2">
                        RECHERCHER
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </section>

            <section className=" bg-gray-100 py-6">
              <div className="container mx-auto max-w-4xl">
                <Suggestion />
              </div>
            </section>

            <Footer />
          </main>
        </div>
    );
  }
}
