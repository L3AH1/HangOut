import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import formatData from "./api/formatJsonNavitia";
import { VILLES } from "./api/Ville";
import coutAPISncf from "./api/coutAPISncf";
import formatJsonSncf from "./api/formatJsonSncf";
import Footer from "../components/Footer";
import style from "../styles/Home.module.css";
import Cookies from "js-cookie";
/**-------------------------------------------------------------------------------*
 *                                                                                *
 * Class HJourneyTrain                                                            *
 * Display result for the train journeys                                          *
 *                                                                                *
 * -------------------------------------------------------------------------------*
 */
export default class JourneyTrain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      journey: "",
      cost: [],
      totalCost: 0,
    };
  }
  /**
   * Get data from Navitia's request
   * @param {Object} data
   */
  getData(data) {
    const API_KEY = "d7257033-908e-4678-9909-f9ac7fa6009a";
    const API_URL = "https://api.sncf.com/v1/coverage/sncf/";
    const depart = data.depart.split(" (")[0];
    const arrivee = data.arrivee.split(" (")[0];
    //ID of the DepartureCity and ArrivalCity
    var departID = "";
    var arriveeID = "";

    for (var key in VILLES) {
      if (key == depart) departID = VILLES[key].id;
      if (key == arrivee) arriveeID = VILLES[key].id;
    }
    //Date formatting
    const datatime =
      data.date.substr(6, 4) +
      data.date.substr(3, 2) +
      data.date.substr(0, 2) +
      "T" +
      data.date.substr(11, 2) +
      data.date.substr(14, 2) +
      "00";

    //Navitia's request
    fetch(
      `${API_URL}journeys?from=${departID}&to=${arriveeID}&key=${API_KEY}&datetime=${datatime}&`,
      { method: "GET" }
    )
      .then((response) => response.json())
      .then((response) => {
        var responseFormatted = formatData(response);
        var costArray = coutAPISncf(responseFormatted);
        //Once we get the Navita's response, we try to get the cost of the journey with the Sncf's API
        for (var i = 0; i < costArray.length; i++) {
          if (costArray[i].id != 0) {
            const idDeparture = costArray[i].id;
            fetch(costArray[i].url, { method: "GET" })
              .then((response) => response.json())
              .then((response) => {
                if (response.records[0] != undefined) {
                  var formatedCost = formatJsonSncf(response);
                  var fullCost = formatedCost.costPlein + this.state.totalCost;
                  this.state.cost[idDeparture] = formatedCost;
                  this.setState({
                    totalCost: fullCost,
                  });
                } else {
                  this.state.cost[idDeparture] = { costPlein: "ND" };
                  this.setState({});
                }
              });
          } else {
          }
        }
        this.setState({
          journey: responseFormatted,
        });
      })
      .catch((err) => {
        console.log("Erreur" + err);
      });
  }
  componentDidMount() {
    const lien = new URLSearchParams(window.location.search);
    const data = {
      //Data's recovery from the url
      depart: lien.get("from"),
      arrivee: lien.get("to"),
      date: lien.get("datetime"),
    };
    this.getData(data);
  }
  saveData() {
    const lien = new URLSearchParams(window.location.search);
    const email = Cookies.get("email");
    const data = {
      depart: lien.get("from"),
      arrivee: lien.get("to"),
      date: lien.get("datetime"),
      train: true,
    };

    var body = {
      email: email,
      data: data,
    };

    fetch("http://localhost:3000/api/users/travels", {
      method: "POST",
      headers: new Headers({
        "Content-Typ": "application/json",
      }),
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          alert("Vous n'??tes pas connect?? ????");
        } else {
          alert("Votre voyage a bien ??t?? sauvegard?? ! ????");
        }
      });
  }

  /**
   * Displays step's itinerary
   * @param {Object} step
   * @returns
   */
  printStep(step) {
    if (step.waiting) {
      return (
        <div className="grid grid-flow-row grid-cols-1 grid-lines-1 md:gap-0 w-96 py-5">
          <div className="grid grid-flow-row md:gap-1 justify-center">
            <p className="flex italic font-serif font-bold text-red-400">
              Attente en gare : {step.duree}
            </p>
          </div>
        </div>
      );
    } else {
      if (
        step.duree != "0h00" &&
        step.destinationDepart != step.destinationArrivee
      ) {
        return (
          <div className="grid p-3">
            <div className="text-left">
              <p className="flex font-bold">{step.heureDepart.substr(11, 5)}</p>
            </div>
            <div className="flex justify-start pl-8">
              <p className="flex font-bold text-blue-500">
                {step.waiting ? "waiting" : step.destinationDepart}
              </p>
            </div>
            <img src="Line.svg" className="h-24 w-24 absolute ml-3" />
            <div className="flex justify-center col-span-2 pr-4">
              <p className="flex italic font-extralight text-black pl-20 my-3">
                Duree du trajet : {step.duree} (~{" "}
                {this.state.cost[step.destinationDepart] != undefined
                  ? this.state.cost[step.destinationDepart].costPlein
                  : " "}{" "}
                ???)
              </p>
            </div>
            <div className="text-left">
              <p className="flex font-bold">
                {step.heureArrivee.substr(11, 5)}
              </p>
            </div>
            <div className="flex justify-start pl-8">
              <p className="flex font-bold text-blue-500">
                {step.waiting ? "waiting" : step.destinationArrivee}
              </p>
            </div>
          </div>
        );
      }
    }
  }
  render() {
    return (
      <div>
        <div className={styles.container}>
          <Head>
            <title>Bilan Train</title>
          </Head>
        </div>

        <div>
          <div className="container mx-auto relative flex items-center justify-between shadow-lg p-3">
            <h1 className="text-3xl font-bold text-blue-500">
              Votre itin??raire :{" "}
              {this.state.journey.destinationDepart != undefined
                ? this.state.journey.destinationDepart.split(" (")[0]
                : this.state.journey.destinationDepart}{" "}
              {">"}{" "}
              {this.state.journey.destinationArrivee != undefined
                ? this.state.journey.destinationArrivee.split(" (")[0]
                : this.state.journey.destinationArrivee}
            </h1>
            <svg
              className="h-auto w-auto max-h-20 max-w-20"
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

          <section className={style.herotrain + " py-12 min-h-96"}>
            <div className="container max-w-4xl ml-auto pr-4 h-full flex flex-col gap-8">
              <div className="rounded-lg px-2 bg-gray-100 bg-opacity-90 border shadow-2xl self-end text-center flex">
                <img className="h-8 p-1" src="information.svg" />
                <p className="m-2 font-semibold text-gray-600">
                  Les prix de trains indiqu??s ne proviennent
                  <br /> que d'un aper??u du co??t et ne repr??sentent
                  <br /> qu'une estimation du prix de votre voyage
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between py-9 ">
              <div className="container mx-auto px-4 h-full flex flex-col items-center gap-8">
                <div className="relative">
                  <div className="rounded-lg px-2 bg-white border shadow-2xl">
                    <div className="px-4 py-8 mb-4 ">
                      {this.state.journey.itinerary != undefined
                        ? this.state.journey.itinerary[0] != undefined
                          ? this.printStep(this.state.journey.itinerary[0])
                          : ""
                        : ""}
                      {this.state.journey.itinerary != undefined
                        ? this.state.journey.itinerary[1] != undefined
                          ? this.printStep(this.state.journey.itinerary[1])
                          : ""
                        : ""}
                      {this.state.journey.itinerary != undefined
                        ? this.state.journey.itinerary[2] != undefined
                          ? this.printStep(this.state.journey.itinerary[2])
                          : ""
                        : ""}
                      {this.state.journey.itinerary != undefined
                        ? this.state.journey.itinerary[3] != undefined
                          ? this.printStep(this.state.journey.itinerary[3])
                          : ""
                        : ""}
                      {this.state.journey.itinerary != undefined
                        ? this.state.journey.itinerary[4] != undefined
                          ? this.printStep(this.state.journey.itinerary[4])
                          : ""
                        : ""}
                      {this.state.journey.itinerary != undefined
                        ? this.state.journey.itinerary[5] != undefined
                          ? this.printStep(this.state.journey.itinerary[5])
                          : ""
                        : ""}
                      {this.state.journey.itinerary != undefined
                        ? this.state.journey.itinerary[6] != undefined
                          ? this.printStep(this.state.journey.itinerary[6])
                          : ""
                        : ""}
                      {this.state.journey.itinerary != undefined
                        ? this.state.journey.itinerary[7] != undefined
                          ? this.printStep(this.state.journey.itinerary[7])
                          : ""
                        : ""}
                      {this.state.journey.itinerary != undefined
                        ? this.state.journey.itinerary[8] != undefined
                          ? this.printStep(this.state.journey.itinerary[8])
                          : ""
                        : ""}
                      {this.state.journey.itinerary != undefined
                        ? this.state.journey.itinerary[9] != undefined
                          ? this.printStep(this.state.journey.itinerary[9])
                          : ""
                        : ""}
                      {this.state.journey.itinerary != undefined
                        ? this.state.journey.itinerary[10] != undefined
                          ? this.printStep(this.state.journey.itinerary[10])
                          : ""
                        : ""}
                      {this.state.journey.itinerary != undefined
                        ? this.state.journey.itinerary[11] != undefined
                          ? this.printStep(this.state.journey.itinerary[11])
                          : ""
                        : ""}
                      {this.state.journey.itinerary != undefined
                        ? this.state.journey.itinerary[12] != undefined
                          ? this.printStep(this.state.journey.itinerary[12])
                          : ""
                        : ""}
                      {this.state.journey.itinerary != undefined
                        ? this.state.journey.itinerary[13] != undefined
                          ? this.printStep(this.state.journey.itinerary[13])
                          : ""
                        : ""}
                      {this.state.journey.itinerary != undefined
                        ? this.state.journey.itinerary[14] != undefined
                          ? this.printStep(this.state.journey.itinerary[14])
                          : ""
                        : ""}
                      {this.state.journey.itinerary != undefined
                        ? this.state.journey.itinerary[15] != undefined
                          ? this.printStep(this.state.journey.itinerary[15])
                          : ""
                        : ""}
                      {this.state.journey.itinerary != undefined
                        ? this.state.journey.itinerary[16] != undefined
                          ? this.printStep(this.state.journey.itinerary[16])
                          : ""
                        : ""}
                      {this.state.journey.itinerary != undefined
                        ? this.state.journey.itinerary[17] != undefined
                          ? this.printStep(this.state.journey.itinerary[17])
                          : ""
                        : ""}
                      {this.state.journey.itinerary != undefined
                        ? this.state.journey.itinerary[18] != undefined
                          ? this.printStep(this.state.journey.itinerary[18])
                          : ""
                        : ""}
                      {this.state.journey.itinerary != undefined
                        ? this.state.journey.itinerary[19] != undefined
                          ? this.printStep(this.state.journey.itinerary[19])
                          : ""
                        : ""}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={style.herotrainbilan + " pb-36"}>
            <div className=" pt-7 ml-5">
              <p className="font-bold text-3xl text-blue-500">
                Bilan de votre trajet :
              </p>
            </div>
            <div className="flex items-center justify-between py-9">
              <div className="container max-w-4xl mx-auto px-4 h-full flex flex-col items-center gap-8">
                <div className="relative">
                  <div className="rounded-lg px-2 bg-gray-100 border shadow-2xl">
                    <div className="px-4 py-4 mb-4">
                      <div className="flex flex-col pl-5 py-2">
                        <div className="flex">
                          <p className="font-bold text-yellow-400 pr-2">
                            Dur??e :
                          </p>
                          <p>{this.state.journey.duree}</p>
                        </div>
                        <div className="flex">
                          <p className="font-bold text-yellow-400 pr-2">
                            Cout :
                          </p>
                          <p> ~ {this.state.totalCost} ???</p>
                        </div>
                        <div className="flex">
                          <p className="font-bold text-yellow-400 pr-2">
                            Date et heure de d??part :
                          </p>
                          <p>{this.state.journey.heureDepart}</p>
                        </div>
                        <div className="flex">
                          <p className="font-bold text-yellow-400 pr-2">
                            Date et heure d'arriv??e :{" "}
                          </p>
                          <p>{this.state.journey.heureArrivee}</p>
                        </div>
                      </div>
                      <div classname="text-center">
                        <button
                          className="group bg-green-200 my-3 rounded-xl hover:bg-green-500 px-36"
                          onClick={this.saveData}
                        >
                          <p className="font-bold text-green-500 text-lg text-center py-2 group-hover:text-white">
                            Sauvegarder
                          </p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    );
  }
}
