import React from "react";
import { findCityByCoords } from "../pages/api/requestNavitia";
import style from "../styles/Home.module.css";
import Cookies from "js-cookie";

const itit = {
  conseille: 0, // favorise la sécurité, la simplicité et minimise les risques d’erreur de parcours.
  plusRapide: 1, // prend le moins de temps pour se rendre à sa destination. Cet itinéraire favorise les grands axes, notamment les autoroutes.
  plusCourt: 2, // la distance pour se rendre à son point de destination est la plus courte, tout en restant sur des routes praticables. Cet itinéraire est souvent très long en terme de durée.
  decouverte: 3, // favorise les routes pittoresques présentant un intérêt touristique.
  economique: 4, // propose une route qui optimise la consommation en carburant et évite de passer par des routes à péages.
};

export default class Itinerary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      villeDepart: null,
      villeArrivee: null,
      typeItineraire: itit.conseille,
      eviterPeage: false,
      date: "",
      itinerary: {},
    };
    this.openRoadsheet = this.openRoadsheet.bind(this);
    this.saveData = this.saveData.bind(this);
  }

  openRoadsheet(index) {
    console.log(index);
    let roadsheet = document.getElementById("roadsheet" + index);
    roadsheet.classList.remove("hidden");
  }

  closeRoadsheet(index) {
    let roadsheet = document.getElementById("roadsheet");
    // roadsheet.classList.add("hidden");
  }

  saveData() {
    const lien = new URLSearchParams(window.location.search);
    const email = Cookies.get("email");
    const data = {
      depart: this.state.villeDepart,
      arrivee: this.state.villeArrivee,
      depart_link: lien.get("from"),
      arrivee_link: lien.get("to"),
      date: lien.get("datetime"),
      train: false,
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
      .then((res) => res.json());
  }

  componentDidMount() {
    const lien = new URLSearchParams(window.location.search);
    const data = {
      //Recupération des données dans l'url
      depart: lien.get("from"),
      arrivee: lien.get("to"),
    };
    this.getData(data);
  }
  getData = (data) => {
    let confMap = {
      container: document.getElementById("mapContainer"),
    };
    let callbacksMap = {
      onSuccess: () => {
        this.launchItinerary(data);
      },
    };
    VMLaunch("ViaMichelin.Api.Map", confMap, callbacksMap);
  };

  launchItinerary = (data) => {
    console.log(data);
    let villeDep = data.depart.split(":");
    let destination = data.arrivee.split(":");

    let villeDepart = {
        coords: { lat: parseFloat(villeDep[0]), lon: parseFloat(villeDep[1]) },
      },
      villeDArrivee = {
        coords: {
          lat: parseFloat(destination[0]),
          lon: parseFloat(destination[1]),
        },
      };

    this.setState({
      villeDepart: findCityByCoords(villeDepart.coords).name,
      villeArrivee: findCityByCoords(villeDArrivee.coords).name,
    });
    let confIti = {
      steps: [villeDepart, villeDArrivee],
      map: {
        container: document.getElementById("mapContainer"),
        focus: true,
      },
      //affiche la feuille de route dans un element ayant un id roadsheet (je l'afficherai plus tard)
      roadsheet: document.getElementById("roadsheet"),
      itit: this.state.typeItineraire,
      //eviter les peage
      avoidTolls: this.state.eviterPeage,
      //propose des itinéraires alternatifs s'ils existent
      multipleIti: true,
      //préciser la date de départ sinon il prend automatiquement la date du jour
      //date:this.state.date,
    };
    let callbacks = {
      onSuccess: (result) => {
        console.log(result);
        let output = document.getElementsByClassName("bilanItineraire");
        this.setState({
          itinerary: result.header.summaries,
        });
        for (
          let i = 0;
          i < output.length && result.header.summaries.length;
          i++
        ) {
          let iti = result.header.summaries[i];
          let t = iti.totalTime,
            h = Math.round(t / 3600),
            m = Math.round((t % 3600) / 60),
            name = " ",
            report = "";
          for (let j = 0; j < iti.names.length; j++) {
            name += iti.names[j] + " ";
          }
          report +=
            "<div class='text-center mb-3 font-bold relative flex items-center justify-center'><span class='rounded-full bg-yellow-400 inline-block w-7 h-7'>" +
            (i + 1) +
            "</span><p class='text-blue-700'>" +
            name +
            "</p></div>";
          report +=
            "<div class='relative flex items-center justify-between'><p class='font-bold'>Distance</p>" +
            "<span class='float-right'>" +
            iti.totalDist / 1000 +
            "km</span></div>";
          report +=
            "<div class='relative flex items-center justify-between'><p class='font-bold'>Durée</p>" +
            "<span class='float-right'>" +
            h +
            "h" +
            m +
            "min</span></div>";
          report +=
            "<div class='relative flex items-center justify-between'><p class='font-bold'>Cout total</p>" +
            "<span class='float-right'>" +
            (iti.consumption + iti.tollCost.car / 100).toFixed(2) +
            "€</span></div>";
          report +=
            "<div class='relative flex items-center justify-between'><p class='font-bold'>Cout Carburant</p>" +
            "<span class='float-right'>" +
            iti.consumption +
            "€</span></div>";
          report +=
            "<div class='relative flex items-center justify-between'><p class='font-bold'>Cout Peage</p>" +
            "<span class='float-right'>" +
            iti.tollCost.car / 100 +
            "€</span></div>";
          output[i].innerHTML = report;
        }
      },
    };
    VMLaunch("ViaMichelin.Api.Itinerary", confIti, callbacks);
  };
  render() {
    const { villeDepart, villeArrivee, itinerary } = { ...this.state };

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

    const date = today;

    console.log(date);

    let bilanItineraire;
    if (itinerary.length > 0)
      bilanItineraire = itinerary.map((iti, index) => (
        <div
          key={index}
          className="container max-w-4xl mx-auto px-4 h-full flex flex-col items-center cursor-default"
        >
          <div className="relative">
            <div className="rounded-2xl px-2 bg-white border border-solid shadow-md">
              <div className="px-4 pt-8  mb-4">
                <div className="flex gap-8 flex-row-reverse flex items-center pr-56" />
                <div>
                  <pre className="bilanItineraire" />
                </div>
                <button
                  className="group bg-green-200 my-3 rounded-xl hover:bg-green-500"
                  onClick={this.saveData}
                >
                  <p className="font-bold text-green-500 text-lg text-center py-2 px-16 group-hover:text-white">
                    Sauvegarder
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      ));

    return (
      <div id="itinerary">
        <div className="container mx-auto relative flex items-center justify-between shadow-lg p-3">
          <h1 className="text-3xl font-bold text-blue-500">
            Votre itinéraire : {villeDepart} &gt; {villeArrivee}
          </h1>
          <img
            className="h-20"
            src="http://www.jk-motorsport.com/wp-content/uploads/2020/10/JK-Motorsport.png"
            alt={"image voiture"}
          />
        </div>

        <div
          id="mapContainer"
          style={{
            width: "100%",
            height: "500px",
          }}
        />
        <section className={style.herocarbilan + " pb-36"}>
          <div className=" pt-7 pl-5">
            <p className="font-bold text-3xl text-blue-500">
              {itinerary.length &&
                (itinerary.length > 1
                  ? itinerary.length + " Itineraires possibles:"
                  : itinerary.length + " Itineraire possible:")}
            </p>
          </div>
          <div className="flex items-center justify-between py-9 flex-col md:flex-row gap-4">
            {bilanItineraire}
          </div>
          <div id="feuilleDeRoute" className="hidden">
            <div id="roadsheet" />
            {/* {itinerary.length &&
            itinerary.map((iti, index) => (
              <div>
                <div id={"roadsheet" + index} />
              </div>

            ))} */}
            <button
              className="justify-self-center focus:outline-none text-red-500 bg-red-200 rounded-xl font-bold cursor-pointer hover:bg-red-500 hover:text-white py-3 px-12 block mx-auto mb-5 mt-10"
              onClick={() => this.closeRoadsheet(index)}
            >
              Fermer
            </button>
          </div>
        </section>
      </div>
    );
  }
}
