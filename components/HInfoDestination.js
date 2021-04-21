import React from "react";
import { VILLES } from "../pages/api/Ville";


/**
 * Displays travel suggestions after the search
 * @return {JSX.Element} a card that displays global information of one travel suggestion
 */
 class HDestination extends React.Component {
  constructor(props) {
    super(props);
  }
  /**
   * Finds the city's image url by its name
   * @param name name of the city
   * @return {String} the image's url
   */
  findUrl(name) {
    for (var key in VILLES) {
      if (VILLES[key].name === name.split(" (")[0]) {
        return VILLES[key].img;
      }
    }
  }
  /**
   * Finds advantage of a city by its name
   * @param name name of the city
   * @return {String} the city's advantages
   */
  findAdvantage(name) {
    for (var key in VILLES) {
      if (VILLES[key].name === name.split(" (")[0]) {
        return VILLES[key].envie.join(", ");
      }
    }
  }

  render() {
    let name, duree, cost, src, avantage;
    //Get information by car
    if (this.props.infoCar) {
      const info = this.props.infoCar;
      let t = info.duree,
        h = Math.round(t / 3600),
        m = Math.round((t % 3600) / 60);
      name = info.destinationArrivee.name;
      duree = h + "h" + m.toString().padStart(2,"0");
      cost = info.coutTotal + "€";
      avantage = this.findAdvantage(name);
      src = info.destinationArrivee.img;
    }
    //Get information by train
    else {
      const propsJson = this.props.journey;
      name =
        propsJson !== undefined
          ? propsJson.destinationArrivee !== undefined
            ? propsJson.destinationArrivee.split(" (")[0]
            : this.props.name
          : this.props.name;
      duree = propsJson !== undefined ? propsJson.duree : " ";
      cost = this.props.cost;
      src = propsJson !== undefined ? this.findUrl(name) : this.props.src;
      avantage = propsJson !== undefined ? this.findAdvantage(name) : " ";
    }
    if (name !== this.props.name) {
      return (
        <div className="relative group bg-white flex flex-col justify-stretch shadow-lg rounded-2xl max-w-xs w-40 max-h-xs">
            <div className="group text-blue-700 text-opacity-0 group-hover:text-opacity-80 duration-300 absolute h-16 w-16 z-10 my-6 mx-12">
              <p className="bg-opacity-0 transition ease-in duration-200 text-xl font-bold ">
                Voir
                <br />
                détails
              </p>
          </div>
          <div className="rounded-t-2xl h-28 flex-7 flex justify-center group-hover:opacity-50 transition ease-in duration-300">
            <img
              src={src}
              alt="logo"
              className="rounded-t-2xl max-h-full max-w-full"
            />
          </div>
          <div className="flex-1 h-min">
            <p className="text-center text-yellow-500 font-bold mb-0 bg-yellow-100 group-hover:opacity-50 transition ease-in duration-300">
              {name}
            </p>
          </div>
          <div className="text-black text-sm text-left px-3 py-2 flex-3 flex flex-col">
            <div className="flex flex-row justify-between">
              <p className="font-bold">Durée</p>
              <p className="italic ml-2">{duree}</p>
            </div>
            <div className="flex flex-row justify-between">
              <p className="font-bold">{cost != undefined ? "Coût" : ""}</p>
              <p className="italic ml-2">{cost}</p>
            </div>
            <div className="text-black text-sm mr-2 mb-1 text-left h-10 overflow-y-scroll">
              <p className="font-bold">Avantage(s)</p>
              <p>{avantage}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return <div/>;
    }
  }
}

export default HDestination;
