import React from "react";
import { findCityByCoords } from "../pages/api/requestNavitia";
import style from "../styles/Home.module.css";
import Footer from "./HFooter";

/**
 * Type of itinerary to be calculated
 * @type {{decouverte: number, conseille: number, economique: number, plusCourt: number, plusRapide: number}}
 */
const itit = {
  conseille: 0, // focuses on road safety and comfort while offering a good compromise between time and distance.
  plusRapide: 1, // provides the fastest route by emphasising motorways and major roads.
  plusCourt: 2, // optimises distance.
  decouverte: 3, // focuses on scenic road that may have a touristic interest.
  economique: 4, // takes into consideration fuel consumption costs and tolls as well as the route distance.
}

const classNameRoadsheet = ["mt-2","h-0"];

/**
 * Component that displays map and the itinerary
 */
class Itinerary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      depart:"",
      arrivee:"",
      villeArrivee: null,
      typeItineraire: itit.conseille,
      eviterPeage: false,
      date: "2021-04-05",
      itinerary: {},
      isRoadsheetOpen:-1,
    }
    this.saveData = this.saveData.bind(this);
  }


  /**
   * Displays the road sheet where there are all the details of the itineraries
   * @function
   * @param index index of road sheet to open
   */
  openRoadsheet = (index) =>{
    if(this.state.isRoadsheetOpen !== -1){
      this.closeRoadsheet(this.state.isRoadsheetOpen);
    }
    if (this.state.isRoadsheetOpen !== index) {
      let button = document.getElementsByClassName("closeRoadsheet")[index];
      let roadsheet = document.getElementsByClassName("roadsheet")[index];
      button.classList.remove("hidden");
      roadsheet.classList.remove(...classNameRoadsheet);
      window.scroll (0,roadsheet.offsetTop - 30);
      this.setState({
        isRoadsheetOpen: index,
      })
    }
  }

  /**
   * Hides the road sheet where there are all the details of the itinerary
   */
  closeRoadsheet(index){
    let button = document.getElementsByClassName("closeRoadsheet")[index];
    let roadsheet = document.getElementsByClassName("roadsheet")[index];
    button.classList.add("hidden");
    roadsheet.classList.add(...classNameRoadsheet);

    this.setState({
      isRoadsheetOpen : -1,
    })
  }

  /**
   * Saves the data to database
   */
  saveData() {
    console.log(this.state.itinerary);
  }
  /**
   * Gets the map and the itineraries after the render has been mounted
   */
  componentDidMount() {
    /**
     *
     * @type {URLSearchParams}
     */
    const lien = new URLSearchParams(window.location.search);
    /**
     * Retrieves the data in the url
     * @type {{arrivee: string, depart: string}}
     */
    const data = {
      depart: lien.get("from"),
      arrivee: lien.get("to"),
    }

    this.getData(data,0);
  }

  /**
   * Display the map
   * @param {number} indexItinerary index of itinerary to be calculated
   * @param {Object} data parameters to the configuration of the itineraries
   */
  getData = (data,indexItinerary= 0) => {
    let confMap = {
      container: document.getElementsByClassName("mapContainer")[indexItinerary],
    };
    let callbacksMap = {
      onSuccess: () => {
        this.launchItinerary(data,0);
        this.launchItinerary(data,1);
        this.launchItinerary(data,2);
      },
    };
    VMLaunch("ViaMichelin.Api.Map", confMap, callbacksMap);
  };

  /**
   * Get the itineraries
   * @param {number} indexItinerary index of itinerary to be calculated
   * @param {Object} data parameters to the configuration of the itineraries
   */
  launchItinerary = (data,indexItinerary = 0) => {
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
      roadsheet: document.getElementsByClassName("roadsheet")[indexItinerary],
      itit: this.state.typeItineraire,
      //eviter les peage
      avoidTolls: this.state.eviterPeage,
      //propose alternative routes if it exist
      multipleIti: true,
      itiIdx: indexItinerary,
      //préciser la date de départ sinon il prend automatiquement la date du jour
      //date:this.state.date,
    };
    let callbacks = {
      onSuccess: (result) => {
        let output = document.getElementsByClassName("bilanItineraire");
        this.setState({
          itinerary: result.header.summaries,
        });
        for (let i = 0; i < result.header.summaries.length; i++) {
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
              "<div class='text-center mb-3 font-bold relative flex items-center justify-center'><span class='rounded-full bg-yellow-200 text-yellow-500 text-lg w-8 h-8'>" +
              (i + 1) +
              "</span><p class='text-blue-500 text-bold text-lg'>" +
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

          //Customizes styles of roadsheet content
          let roadsheets = document.getElementsByClassName("roadsheet");
          for (let j = 0; j < roadsheets.length; j++) {
            let roadsheetContent = roadsheets[j].getElementsByClassName("roadsheetContent")[0];
            let classNames = ["p-5","shadow-lg","rounded-2xl","border-solid"];
            roadsheetContent.classList.add(...classNames);
          }
        }
      },
    };
    VMLaunch("ViaMichelin.Api.Itinerary", confIti, callbacks);
  };
  render() {
    const { villeDepart, villeArrivee, itinerary } = { ...this.state };
    const classNameDivDetails = " group bg-blue-200  hover:bg-blue-500 ";
    const classNameTextDetails = " text-blue-500 group-hover:text-white ";
    const classNameClose = " bg-red-200 hover:bg-red-500 ";
    const classNameTextClose = " text-red-500 hover:text-white ";

    let bilanItineraire;
    if (itinerary.length > 0)
      bilanItineraire = itinerary.map((iti, index) => (
          <div key={index} className="container max-w-4xl mx-auto px-4 h-full flex flex-col items-center cursor-default">
            <div className="relative">
              <div className="rounded-2xl px-2 bg-white border border-solid shadow-md">
                <div className="px-4 pt-8  mb-4">
                  <div className="flex gap-8 flex-row-reverse flex items-center pr-56"/>
                  <div>
                    <pre className="bilanItineraire"/>
                  </div>
                  <div className={(this.state.isRoadsheetOpen === index ? classNameClose : classNameDivDetails) + " mt-6 rounded-xl cursor-pointer transition"} onClick={()=>this.openRoadsheet(index)}>
                    <p className={(this.state.isRoadsheetOpen  === index ? classNameTextClose : classNameTextDetails) + " font-bold text-lg text-center py-2"}>
                      {this.state.isRoadsheetOpen  === index ? "Fermer" : "Voir les détails"}
                    </p>
                  </div>
                  <div className="group bg-green-200 my-3 rounded-xl hover:bg-green-500" onClick={this.saveData}>
                    <a>
                      <p className="font-bold text-green-500 text-lg text-center py-2 group-hover:text-white">
                        Sauvegarder
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
      ));

    return (
        <div id="itinerary">
          <div className="container mx-auto relative flex items-center justify-between shadow-lg p-3">
            <h1 className="text-2xl font-bold font-serif text-blue-700">
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
              className="mapContainer"
              style={{
                width: "100%",
                height: "500px",
              }}
          />

          <section className={style.herotrainbilan + " pb-36"}>
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
            <div id="feuilleDeRoute" >
              <div className="roadsheet overflow-auto px-5 h-0">
                <p className="pt-7 pb-5 font-bold text-3xl text-blue-500">Voici les détails de votre itineraire via
                  <i className="text-yellow-500 text-bold">
                    {this.state.itinerary.length > 0 && " " + this.state.itinerary[0].names.join(" ")}
                  </i> :
                </p>
              </div>
              <button className={classNameClose + classNameTextClose + "closeRoadsheet  hidden justify-self-center focus:outline-none rounded-xl font-bold cursor-pointer py-3 px-12 block mx-auto mb-5"}
                      onClick={() => this.closeRoadsheet(0)}
              >
                Fermer
              </button>
            </div>
            <div id="feuilleDeRoute" >
              <div className="roadsheet overflow-auto px-5 h-0">
                <p className="pt-7 pb-5 font-bold text-3xl text-blue-500">Voici les détails de votre itineraire via
                  <i className="text-yellow-500 text-bold">
                    {this.state.itinerary.length > 1 && " " +  this.state.itinerary[1].names.join(" ")}
                  </i> :
                </p>
              </div>
              <button className={classNameClose + classNameTextClose + "closeRoadsheet  hidden justify-self-center focus:outline-none rounded-xl font-bold cursor-pointer py-3 px-12 block mx-auto mb-5"}
                      onClick={() => this.closeRoadsheet(1)}
              >
                Fermer
              </button>
            </div>
            <div id="feuilleDeRoute" >
              <div className="roadsheet overflow-auto px-5 h-0">
                <p className="pt-7 pb-5 font-bold text-3xl text-blue-500">Voici les détails de votre itineraire via
                  <i className="text-yellow-500 text-bold">
                    {this.state.itinerary.length > 2 && " " +  this.state.itinerary[2].names.join(" ")}
                  </i> :
                </p>
              </div>
              <button className={classNameClose + classNameTextClose + "closeRoadsheet  hidden justify-self-center focus:outline-none rounded-xl font-bold cursor-pointer py-3 px-12 block mx-auto mb-5"}
                      onClick={() => this.closeRoadsheet(2)}
              >
                Fermer
              </button>
            </div>
          </section>
          <Footer/>
        </div>
    );
  }
}

export default Itinerary;
