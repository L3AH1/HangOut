import Navbar from "../components/Navbar";
import Head from "next/head";
import HInfoDestination from "../components/HInfoDestination";
import styles from "../styles/Home.module.css";
import React from "react";
import HFooter from "../components/HFooter";
import formatData from "../pages/api/formatJsonNavitia"
import requestNavitia, {findCityByCoords, requestViaMichelin} from './api/requestNavitia'
import {envies, environnements} from "./api/globalVariables";

/**
 *
 *
 *  Dans componentDidMount, au niveau de la ville le geocoding ne marche pas donc si tu veux essayer met le nom de ville entre guillemets.
 *  Les components pour lesquelles on a pas de valeurs (par exemple si on a que 2 resultats) ne s'affichent pas.
 *
 *
 *
 *
 *
 */

const Line = () => (
    <hr
        style={{
          color: "black",
          backgroundColor: "black",
          height: 2,
          margin: "10px",
          marginLeft: "100px",
          marginRight: "100px",
        }}
    />
);

export default class HSecondary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ville: null,
      dateDepart: null,
      dateRetour: null,
      duree: null,
      envie: null,
      environnement: null,
      train: [],
      urlTrain: [],
      car: [],
      urlCar: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getData(data) {

    var url = requestNavitia(data);

    var compteur = 0
    for(var i=0;i<url.length;i++) {
      fetch(url[i], {
        "method": "GET",
      }).then(
          response => response.json()
      ).then(
          response => {
            if(typeof(response.journeys) !== 'undefined') {
              var responseFormatted = formatData(response);
              this.state.train.push(responseFormatted)
              this.state.urlTrain.push("/HJourneyTrain?from=" + responseFormatted.destinationDepart + "&to=" + responseFormatted.destinationArrivee + "&datetime=" + responseFormatted.heureDepart)
              this.setState({ //NE PAS SUPPRIMER !!!! setState obligatoire pour actualiser les valeurs.
              })
            } else {
              console.log(`Erreur : Pas de voyage possible avec cette destination`)
            }
          }).catch(
          err => { console.log("Erreur" + err);
          });
    }
  }

  getDataViaMichelin(data){
    let confs = requestViaMichelin(data);
    for (let i = 0; i < confs.length; i++) {
      let callbacks = {
        onSuccess : (result) =>{
          let iti = result.header.summaries[0];
          let villeDepart = confs[i].steps[0].coords.lat + ":" + confs[i].steps[0].coords.lon;
          let villeDArrivee = confs[i].steps[1].coords.lat + ":" + confs[i].steps[1].coords.lon;
          let info = {
            destinationArrivee: findCityByCoords(confs[i].steps[1].coords),
            destinationDepart: findCityByCoords(confs[i].steps[0].coords),
            duree: iti.totalTime,
            distance: iti.totalDist,
            coutTotal: (iti.consumption + (iti.tollCost.car / 100)).toFixed(2),
            coutCarburant: iti.consumption,
            coutPeage: iti.tollCost.car / 100,
          }
          this.state.car.push(info);
          this.state.urlCar.push("/bilanVoiture?from="+villeDepart+"&to="+villeDArrivee);
          this.setState({ //NE PAS SUPPRIMER !!!! setState obligatoire pour actualiser les valeurs.
          })
        }
      };
      VMLaunch("ViaMichelin.Api.Itinerary", confs[i], callbacks);
    }
  }
  componentDidMount() {
    const lien = new URLSearchParams(window.location.search);
    const data = {
      ville: lien.get("ville"),
      envie: lien.get("envie"),
      environnement: lien.get("environnement"),
      date_retour: lien.get("date_retour"),
      date_depart: lien.get("date_depart"),
      duree: lien.get("duree"),
    };
    this.setState ({
      ville: lien.get("ville"),
      envie: lien.get("envie"),
      environnement: lien.get("environnement"),
      date_depart: lien.get("date_depart"),
    });

    this.getData(data);
    this.getDataViaMichelin(data);
  }
  handleSubmit(event) {}

  render() {
    const environnementOpt = environnements.map((env) =>
        <option key={env}
                value={env} >
          {env}
        </option>
    );
    const envieOpt = envies.map((env) =>
        <option key={env}
                value={env} >
          {env}
        </option>
    );
    return (
        <div className={styles.container}>
          <Head>
            <title>HangOut</title>
          </Head>

          <Navbar />
          <main className="flex flex-col bg-yellow-50">
            <section>
              <div className="container max-w-4xl mx-auto px-4 h-full flex flex-col items-center">
                <div className="rounded-lg py-5 px-2 bg-white border shadow-2xl m-5">
                  <form action="/HSecondary" onSubmit={this.handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
                      {/* VILLE */}
                      <div className="border border-gray-200 rounded-lg w-50 h-12 mb-3 mt-5 ml-3 p-5 flex items-center gap-2 ">
                        <div>
                          <svg className="w-8 text-blue-400" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M20.5,3L20.34,3.03L15,5.1L9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21L3.66,20.97L9,18.9L15,21L20.64,19.1C20.85,19.03 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3M10,5.47L14,6.87V18.53L10,17.13V5.47M5,6.46L8,5.45V17.15L5,18.31V6.46M19,17.54L16,18.55V6.86L19,5.7V17.54Z"
                            />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <label
                              className="block text-blue-400 font-bold text-xs uppercase tracking-wide"
                          >
                            Ville
                          </label>
                          <input
                              id="ville"
                              name="ville"
                              type="text"
                              placeholder="ex. Nice"
                              defaultValue={this.state.ville}
                              className="focus:outline-none"
                              required
                              autoComplete="off"
                          />
                        </div>
                      </div>
                      {/* ENVIRONNEMENT */}
                      <div className="border border-gray-200 rounded-lg w-50 h-12 mb-3 mt-5 ml-3 p-5 flex items-center gap-2">
                        <div>
                          <svg className="w-8 text-blue-400" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M15,18.54C17.13,18.21 19.5,18 22,18V22H5C5,21.35 8.2,19.86 13,18.9V12.4C12.16,12.65 11.45,13.21 11,13.95C10.39,12.93 9.27,12.25 8,12.25C6.73,12.25 5.61,12.93 5,13.95C5.03,10.37 8.5,7.43 13,7.04V7A1,1 0 0,1 14,6A1,1 0 0,1 15,7V7.04C19.5,7.43 22.96,10.37 23,13.95C22.39,12.93 21.27,12.25 20,12.25C18.73,12.25 17.61,12.93 17,13.95C16.55,13.21 15.84,12.65 15,12.39V18.54M7,2A5,5 0 0,1 2,7V2H7Z"
                            />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <label
                              className="block text-blue-400 font-bold text-xs uppercase tracking-wide"
                          >
                            Environnement
                          </label>
                          <select
                              name="environnement"
                              id="environnement"
                              className="focus:outline-none w-full"
                              required
                          >
                            {environnementOpt}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
                      {/* ENVIES */}
                      <div className="border border-gray-200 rounded-lg w-50 h-12 mt-3 mb-5 ml-3 p-5 flex items-center gap-2">
                        <div>
                          <svg className="w-8 text-blue-400" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M19,10C19,11.38 16.88,12.5 15.5,12.5C14.12,12.5 12.75,11.38 12.75,10H11.25C11.25,11.38 9.88,12.5 8.5,12.5C7.12,12.5 5,11.38 5,10H4.25C4.09,10.64 4,11.31 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,11.31 19.91,10.64 19.75,10H19M12,4C9.04,4 6.45,5.61 5.07,8H18.93C17.55,5.61 14.96,4 12,4M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"
                            />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <label
                              className="block text-blue-400 font-bold text-xs uppercase tracking-wide"
                          >
                            Envies
                          </label>
                          <select
                              name="envie"
                              id="envie"
                              className="focus:outline-none w-full"
                              required
                          >
                            {envieOpt}
                          </select>
                        </div>
                      </div>
                      {/* DEPART */}
                      <div className="border border-gray-200 rounded-lg w-50 h-12 mt-3 ml-3 mb-5 p-5 flex items-center gap-2">
                        <div>
                          <svg className="w-8 text-blue-400" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z"
                            />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <label
                              className="block text-blue-400 font-bold text-xs uppercase tracking-wide"
                          >
                            Départ
                          </label>
                          <input
                              id="date_depart"
                              name="date_depart"
                              type="date"
                              defaultValue="2021-03-15T23:44"
                              className="focus:outline-none appearance-none"
                              required
                          />
                        </div>
                      </div>
                    </div>
                    {/* <Link href="/HSecondary"> */}
                    {/* <a> */}
                    <button className="focus:outline-none bg-gradient-to-r from-blue-400 to-blue-800 rounded-xl absolute text-white font-bold px-7 py-4 left-1/2 transform -translate-x-1/2">
                      RECHERCHER
                    </button>
                    {/* </a> */}
                    {/* </Link> */}
                  </form>
                </div>
              </div>
            </section>


            <section className=" flex-3 flex flex-col py-10">
              <p className="text-4xl font-bold m-7">
                Au depart de : {this.state.ville}
              </p>
              <div className="grid grid-flow-row grid-cols-1 md:grid-cols-4 md:gap-8 justify-center">
                <div className="flex justify-center align-center">
                  <div className="absolute left-0 mb-10 ml-5">
                    <p className="text-yellow-700">
                      Selectionnez votre voyage en train :
                    </p>
                  </div>
                  <div className="m-auto h-1/2 w-1/2 flex justify-center">
                    <svg
                        className="h-auto w-auto max-h-64 max-w-64"
                        id="fi_2077150"
                        enableBackground="new 0 0 512 512"
                        height={512}
                        viewBox="0 0 512 512"
                        width={512}
                        xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                          d="m70 146h393.961c-40.302-80.065-123.21-135-218.961-135-77.747 0-147.027 36.222-191.909 92.703z"
                          fill="#67e5ee"
                      />
                      <path
                          d="m16.908 345.535c35.754 91.02 124.386 155.465 228.092 155.465s192.338-64.445 228.092-155.465z"
                          fill="#eeefeb"
                      />
                      <path
                          d="m206.789 345.535h-189.881c29.133 74.163 93.373 130.678 172.267 149.069-87.112-20.463-72.013-149.069 17.614-149.069z"
                          fill="#d6d6d0"
                      />
                      <path
                          d="m472.701 346.535c4.263-10.714 7.801-21.795 10.534-33.19h-476.469c2.733 11.395 6.271 22.477 10.534 33.19z"
                          fill="#ffc743"
                      />
                      <path
                          d="m17.299 346.535h185.473c-11.683-11.683-7.46-22.323-3.572-27.925 1.089-1.569 1.507-3.453 1.254-5.266h-193.688c2.733 11.396 6.27 22.478 10.533 33.191z"
                          fill="#fbb031"
                      />
                      <path
                          d="m7.039 314.464h488.394c7.568 0 14.691-5.201 16.29-13.858 1.87-10.121-5.938-19.452-16.229-19.452h-494.217c1.158 11.353 3.107 22.47 5.762 33.31z"
                          fill="#4b4a55"
                      />
                      <path
                          d="m7.039 314.464h193.485c.017-1.468-.397-2.941-1.247-4.219-8.999-13.529 3.496-25.319 3.496-25.319l-29.768-3.772h-171.728c1.158 11.353 3.107 22.47 5.762 33.31z"
                          fill="#363540"
                      />
                      <path
                          d="m74.353 282.273h43.345c-2.967-2.305-4.884-5.897-4.884-9.946v-156.026h-33.577v156.026c0 4.049-1.917 7.641-4.884 9.946z"
                          fill="#363540"
                      />
                      <path
                          d="m112.814 272.327v-81.237c.043 5.368-4.125 9.81-9.495 9.81h-14.587c-5.37 0-9.538-4.441-9.495-9.809v81.235c0 4.048-1.917 7.641-4.884 9.945h43.345c-2.967-2.303-4.884-5.896-4.884-9.944z"
                          fill="#21212b"
                      />
                      <path
                          d="m457.943 172.607c14.375 40.461 26.345 50.847 41.814 54.741 3.185.802 5.809 2.734 7.571 5.273l1.983-.348-16.239-49.079c-8.232-24.88-26.176-45.374-49.751-56.819l-18.41-8.938v2.023c13.981 12.939 25.091 30.795 33.032 53.147z"
                          fill="#363540"
                      />
                      <path
                          d="m443.321 126.375-18.41-8.938v2.023c13.571 12.559 24.426 29.764 32.315 51.202 1.826-1.117 3.278-2.809 4.08-4.902 4.218-11.02 18.87-7.888 19.048-7.85-9.383-13.36-22.071-24.271-37.033-31.535z"
                          fill="#21212b"
                      />
                      <path
                          d="m511.897 256.529c-38.963-4.805-59.16-22.966-77.556-74.741-8.071-22.717-18.643-35.632-26.091-42.467-2.224-2.041-4.3-3.662-6.148-4.956v-30.663c1.765.517 11.161 3.611 22.809 13.734 15.041 13.074 26.909 31.636 35.271 55.17 14.375 40.461 26.345 50.847 41.814 54.741 6.529 1.644 10.725 8.016 9.901 14.699z"
                          fill="#eeefeb"
                      />
                      <path
                          d="m438.758 193.448v-2.212c0-14.959 8.001-18.592 14.224-19.156 2.312-.209 4.399-1.21 5.985-2.762-8.282-21.975-19.724-39.425-34.056-51.882-11.648-10.123-21.044-13.216-22.809-13.734v30.663c1.848 1.294 3.924 2.915 6.148 4.956 7.448 6.835 18.02 19.75 26.091 42.467 1.457 4.102 2.928 7.97 4.417 11.66z"
                          fill="#d6d6d0"
                      />
                      <path
                          d="m434.341 179.55c-8.071-22.717-18.643-35.632-26.091-42.467-2.224-2.041-4.3-3.662-6.148-4.956v152.799h100.129c5.379 0 9.666-3.614 9.666-9.74v-20.896c-38.963-4.804-59.16-22.966-77.556-74.74z"
                          fill="#0c88ed"
                      />
                      <path
                          d="m438.758 191.236s0-.017 0-.026c-1.489-3.69-2.96-7.558-4.417-11.661-8.071-22.717-18.643-35.632-26.091-42.467-2.224-2.041-4.3-3.662-6.148-4.956v152.798h36.656z"
                          fill="#0f74d8"
                      />
                      <path
                          d="m110.575 129.889v142.439c0 6.958 5.64 12.598 12.598 12.598h278.928v-155.037z"
                          fill="#319df5"
                      />
                      <path
                          d="m190.174 272.328v-142.439h-79.599v142.439c0 6.958 5.64 12.598 12.598 12.598h79.599c-6.958 0-12.598-5.641-12.598-12.598z"
                          fill="#0c88ed"
                      />
                      <path
                          d="m123.174 103.703h278.928v28.424h-291.527v-15.826c0-6.958 5.641-12.598 12.599-12.598z"
                          fill="#eeefeb"
                      />
                      <path
                          d="m202.772 103.703h-79.599c-6.958 0-12.598 5.641-12.598 12.599v15.826h79.599v-15.826c0-6.959 5.64-12.599 12.598-12.599z"
                          fill="#d6d6d0"
                      />
                      <path
                          d="m324.352 223.651h54.828v61.274h-54.828z"
                          fill="#0c88ed"
                      />
                      <path
                          d="m351.766 262.729v-39.078h-27.414v61.274h43.864c-9.52-2.889-16.45-11.732-16.45-22.196z"
                          fill="#0f74d8"
                      />
                      <path
                          d="m192.206 154.394h-49.797c-4.262 0-7.717 3.455-7.717 7.718v55.822c0 4.262 3.455 7.717 7.717 7.717h49.797z"
                          fill="#21212b"
                      />
                      <path
                          d="m293.125 154.394h-49.501v71.257h49.501c4.262 0 7.717-3.455 7.717-7.717v-55.822c0-4.262-3.455-7.718-7.717-7.718z"
                          fill="#4b4a55"
                      />
                      <path
                          d="m402.102 132.127v93.524h55.346c-8.621-11.136-16.001-26.102-23.107-46.101-8.071-22.717-18.643-35.632-26.091-42.467-2.224-2.041-4.3-3.662-6.148-4.956z"
                          fill="#363540"
                      />
                      <path
                          d="m434.341 179.55c-8.071-22.717-18.643-35.632-26.091-42.467-2.224-2.041-4.3-3.662-6.148-4.956v93.524h36.656v-34.415-.015c-1.489-3.689-2.96-7.568-4.417-11.671z"
                          fill="#21212b"
                      />
                      <path
                          d="m371.463 154.395h-39.393c-4.262 0-7.717 3.455-7.717 7.717v63.539h54.828v-63.539c-.001-4.262-3.456-7.717-7.718-7.717z"
                          fill="#363540"
                      />
                      <path
                          d="m359.484 154.395h-27.414c-4.262 0-7.717 3.455-7.717 7.717v63.54h27.414v-63.54c-.001-4.262 3.455-7.717 7.717-7.717z"
                          fill="#21212b"
                      />
                      <path
                          d="m190.174 154.395h55.482v71.257h-55.482z"
                          fill="#363540"
                      />
                      <path
                          d="m34.92 129.889c-3.159 5.25-6.119 10.633-8.885 16.129l-25.045 88.028s-.012-.004-.014-.005c-.643 7.234-.976 14.557-.976 21.959 0 9.788.592 19.437 1.708 28.926h67.169c6.958 0 12.599-5.64 12.599-12.598v-142.439z"
                          fill="#0c88ed"
                      />
                      <path
                          d="m68.877 103.703h-15.786c-7.139 8.983-13.655 18.48-19.494 28.425h47.879v-15.826c0-6.959-5.641-12.599-12.599-12.599z"
                          fill="#eeefeb"
                      />
                      <path
                          d="m49.494 225.651c4.262 0 7.717-3.455 7.717-7.717v-55.822c0-4.262-3.455-7.717-7.717-7.717h-27.488c-10.121 22.178-17.031 46.127-20.136 71.257h47.624z"
                          fill="#21212b"
                      />
                      <path
                          d="m293.125 234.046h-150.716c-8.884 0-16.112-7.228-16.112-16.112v-55.822c0-8.884 7.228-16.112 16.112-16.112h150.716c8.884 0 16.112 7.228 16.112 16.112v55.822c-.001 8.884-7.229 16.112-16.112 16.112zm-150.039-16.789h149.362v-54.469h-149.362zm150.039-54.469h.011z"
                          fill="#56b1fc"
                      />
                      <path
                          d="m48.817 162.788v54.469h-45.757c-.88 5.536-1.568 11.135-2.07 16.788h48.504c8.884 0 16.111-7.228 16.111-16.112v-55.822c0-8.884-7.227-16.112-16.111-16.112h-23.455c-2.759 5.481-5.316 11.081-7.666 16.788h30.444z"
                          fill="#319df5"
                      />
                      <path
                          d="m410.496 284.926v-178.985c0-4.636-3.758-8.394-8.394-8.394s-8.394 3.758-8.394 8.394v178.985z"
                          fill="#56b1fc"
                      />
                      <path
                          d="m402.102 232.104c-4.636 0-8.394-3.758-8.394-8.394v61.216h16.788v-61.216c0 4.635-3.758 8.394-8.394 8.394z"
                          fill="#0c88ed"
                      />
                      <path
                          d="m190.174 146h-47.765c-8.884 0-16.112 7.228-16.112 16.112v55.822c0 8.884 7.228 16.112 16.112 16.112h47.758c-9.446-8.248-.749-16.176-.049-16.788h-47.032v-54.469h47c-10.131-10.234.086-16.787.088-16.789z"
                          fill="#319df5"
                      />
                    </svg>
                  </div>
                </div>
                <div className="overflow-x-auto flex col-span-3">
                  <div className="flex-none justify-center p-2">
                    <a href={this.state.urlTrain[0]}>
                      <button className="focus:outline-none">
                        <HInfoDestination
                            src="https://images.unsplash.com/photo-1575540121783-60f174302cc2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1410&q=80"
                            journey={this.state.train[0]}
                            name = "Monaco"
                        />
                      </button>
                    </a>
                  </div>
                  <div className="flex-none justify-center p-2">
                    <a href={this.state.urlTrain[1]}>
                      <button className="focus:outline-none">
                        <HInfoDestination
                            src="https://images.unsplash.com/photo-1575540121783-60f174302cc2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1410&q=80"
                            journey={this.state.train[1]}
                            name="Monaco"
                        />
                      </button>
                    </a>
                  </div>
                  <div className="flex-none justify-center p-2">
                    <a href={this.state.urlTrain[2]}>
                      <button className="focus:outline-none">
                        <HInfoDestination
                            src="https://images.unsplash.com/photo-1575540121783-60f174302cc2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1410&q=80"
                            journey={this.state.train[2]}
                            name="Monaco"
                        />
                      </button>
                    </a>
                  </div>
                  <div className="flex-none justify-center p-2">
                    <a href={this.state.urlTrain[3]}>
                      <button className="focus:outline-none">
                        <HInfoDestination
                            src="https://images.unsplash.com/photo-1575540121783-60f174302cc2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1410&q=80"
                            journey={this.state.train[3]}
                            name="Monaco"
                        />
                      </button>
                    </a>
                  </div>
                  <div className="flex-none justify-center p-2">
                    <a href={this.state.urlTrain[4]}>
                      <button className="focus:outline-none">
                        <HInfoDestination
                            src="https://images.unsplash.com/photo-1575540121783-60f174302cc2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1410&q=80"
                            journey={this.state.train[4]}
                            name="Monaco"
                        />
                      </button>
                    </a>
                  </div>
                  <div className="flex-none justify-center p-2">
                    <a href={this.state.urlTrain[5]}>
                      <button className="focus:outline-none">
                        <HInfoDestination
                            src="https://images.unsplash.com/photo-1575540121783-60f174302cc2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1410&q=80"
                            journey={this.state.train[5]}
                            name="Monaco"
                        />
                      </button>
                    </a>
                  </div>
                  <div className="flex-none justify-center p-2">
                    <a href={this.state.urlTrain[6]}>
                      <button className="focus:outline-none">
                        <HInfoDestination
                            src="https://images.unsplash.com/photo-1575540121783-60f174302cc2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1410&q=80"
                            journey={this.state.train[6]}
                            name="Monaco"
                        />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <Line className="flex-1" />
              <div className="grid grid-flow-row grid-cols-1 md:grid-cols-4 md:gap-8 justify-center">
                <div className="flex justify-center align-center">
                  <div className="absolute left-0 mb-10 ml-5">
                    <p className="text-yellow-700">
                      Selectionnez votre voyage en voiture :
                    </p>
                  </div>
                  <div className="m-auto h-1/2 w-1/2 flex justify-center">
                    <img
                        src="http://www.jk-motorsport.com/wp-content/uploads/2020/10/JK-Motorsport.png"
                        alt="Ici une Voiture"
                        className="h-auto w-auto max-h-64 max-w-64"
                    ></img>
                  </div>
                </div>
                <div className="overflow-x-auto flex col-span-3">
                  <div className="flex-none justify-center p-2">
                    <a href={this.state.urlCar[0]}>
                      <button className="focus:outline-none">
                        <HInfoDestination
                            infoCar={this.state.car[0]}
                            name="Monaco"
                        />
                      </button>
                    </a>
                  </div>
                  <div className="flex-none justify-center p-2">
                    <a href={this.state.urlCar[1]}>
                      <button className="focus:outline-none">
                        <HInfoDestination
                            infoCar={this.state.car[1]}
                            name="Monaco"
                        />
                      </button>
                    </a>
                  </div>
                  <div className="flex-none justify-center p-2">
                    <a href={this.state.urlCar[2]}>
                      <button className="focus:outline-none">
                        <HInfoDestination
                            infoCar={this.state.car[2]}
                            name="Monaco"
                        />
                      </button>
                    </a>
                  </div>
                  <div className="flex-none justify-center p-2">
                    <a href={this.state.urlCar[3]}>
                      <button className="focus:outline-none">
                        <HInfoDestination
                            infoCar={this.state.car[3]}
                            name="Monaco"
                        />
                      </button>
                    </a>
                  </div>
                  <div className="flex-none justify-center p-2">
                    <a href={this.state.urlCar[4]}>
                      <button className="focus:outline-none">
                        <HInfoDestination
                            infoCar={this.state.car[4]}
                            name="Monaco"
                        />
                      </button>
                    </a>
                  </div>
                  <div className="flex-none justify-center p-2">
                    <a href={this.state.urlCar[5]}>
                      <button className="focus:outline-none">
                        <HInfoDestination
                            infoCar={this.state.car[5]}
                            name="Monaco"
                        />
                      </button>
                    </a>
                  </div>
                  <div className="flex-none justify-center p-2">
                    <a href={this.state.urlCar[6]}>
                      <button className="focus:outline-none">
                        <HInfoDestination
                            infoCar={this.state.car[6]}
                            name="Monaco"
                        />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </section>
            <HFooter />
          </main>
        </div>
    );
  }
}
