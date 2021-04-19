import { VILLES } from "./Ville";

/**
 * Navitia : Creates a String Array with the city's ID filtered by the envie and the environnement chosen
 * @param {Object} data from the user's form
 * @returns {Array} String Array of city's ID
 */
function toCities(data) {
  let envie = data.envie;
  let environnement = data.environnement;
  var dest = new Array();

  if (envie == "" && environnement == "")
    for (var key in VILLES) dest.push(VILLES[key]);
  else if (envie != "" && environnement != "") 
    dest = filterTwoArrays(
      findCitybyEnvie(envie),
      findCitybyEnvironnement(environnement),
      findCitybyName(data.ville));
  else if (envie != "" && environnement == "") 
    dest = findCitybyEnvie(envie);
  else if (envie == "" && environnement != "") 
    dest = findCitybyEnvironnement(environnement);

  return dest;
}
/**
 * viaMichelin : Creates a String Array with the city's coordinates filtered by the envie and the environnement chosen
 * @param {Object} data from the user's form
 * @returns {Array} String Array of city's coordinates
 */
function citiesCoords(data) {
  let envie = data.envie;
  let environnement = data.environnement;
  var dest = [];

  if (envie === "" && environnement === "")
    for (var key in VILLES) dest.push(VILLES[key].coords);
  else if (envie !== "" && environnement !== "")
    dest = filterTwoArraysCoords(
      findCoordsbyEnvie(envie),
      findCoordsbyEnvironnement(environnement),
      findCityCoordsByName(data.ville)
    );
  else if (envie !== "" && environnement === "")
    dest = findCoordsbyEnvie(envie);
  else if (envie === "" && environnement !== "")
    dest = findCoordsbyEnvironnement(environnement);

  return dest;
}

/**
 * Navitia : Creates an Array with urls for the request
 * @param {Object} data from the user's form
 * @returns {Array} String Array with urls
 */
export default function requestNavitia(data) {
  if (data.ville == "" || data.ville == undefined) {
    return "";
  }

    const API_URL="https://api.sncf.com/v1/coverage/sncf/journeys?key=d7257033-908e-4678-9909-f9ac7fa6009a";
    var url = new Array();
    const departureCity = "&from=" + findCitybyName(data.ville);
    const arrivalCity = toCities(data);
    const duration = data.duree != "" ? "&max_duration=" + findDuration(data.duree) : "";
    const departureDate = "&datetime=" + data.date_depart.split('-')[0] + data.date_depart.split('-')[1] + data.date_depart.split('-')[2] + "T000000"

    for(var i=0;i<arrivalCity.length;i++) {
        url[i]=API_URL + departureCity + "&to=" + arrivalCity[i] + departureDate;
    }

    return url;

}
/**
 * viaMichelin : Creates an Array with urls for the request
 * @param {Object} data from the user's form
 * @returns {Array} String Array with urls
 */
export function requestViaMichelin (data) {
    let confs = [];
    if(data.ville) {
        const departureCity = findCityCoordsByName(data.ville);
        const arrivalCity = citiesCoords(data);

        for (let i = 0; i < arrivalCity.length; i++) {
            let conf = {
                steps: [
                    {coords: departureCity},
                    {coords: arrivalCity[i]}
                ]
            };
            confs.push(conf);
        }
    }
    return confs;
}

/**
 * viaMichelin : Finds the name of a city by its coordinates
 * @param {(int,int)} coords of the city sought
 * @returns {String} name of the city
 */
 export function findCityByCoords(coords){
    for(let key in VILLES){
        if(
          VILLES[key].coords.lat === coords.lat && 
          VILLES[key].coords.lon === coords.lon
        ) {
            return VILLES[key];
        }
    }
    return {};
}
/**
 * viaMichelin : Finds the coordinates of a city by its name
 * @param {String} name of the city sought
 * @returns {(int,int)} coordinates of the city 
 */
function findCityCoordsByName(name){
    for(let key in VILLES){
        if(VILLES[key].name === name)
            return VILLES[key].coords;
    }
}
/**
 * viaMichelin : Finds cities by their environnement
 * @param {Array} environnement of cities sought
 * @returns {Array} String array with cities coordinates
 */
function findCoordsbyEnvironnement(environnement) {
    var cityToReturn = [];
    for(var key in VILLES) {
        if(VILLES[key].environnement.includes(environnement)) 
          cityToReturn.push(VILLES[key].coords);
    }
    return cityToReturn;
}
/**
 * viaMichelin : Finds cities by their envie
 * @param {Array} envie of cities sought 
 * @returns {Array} String array with cities coordinates
 */
function findCoordsbyEnvie(envie) {
    var cityToReturn = new Array();
    for(var key in VILLES) {
        if(VILLES[key].envie.includes(envie)) 
          cityToReturn.push(VILLES[key].coords);
    }
    return cityToReturn;
}
/**
 * Navitia : Finds a city's id by its name
 * @param {String} name of the city sought
 * @returns {String} id the city
 */
function findCitybyName(name) {
  for (var key in VILLES) {
    if (VILLES[key].name == name) return VILLES[key].id;
  }
}
/**
 * Navitia : Finds cities by their environnement
 * @param {Array} environnement of cities sought
 * @returns {Array} String array with cities ID
 */
function findCitybyEnvironnement(environnement) {
    var cityToReturn = new Array();

    for(var key in VILLES) {
        if(VILLES[key].environnement.includes(environnement)) 
          cityToReturn.push(VILLES[key].id);
    }

    return cityToReturn;
}
/**
 * Navitia : Finds cities by their envie
 * @param {Array} envie of the city sought 
 * @returns {Array} String array with cities ID
 */
function findCitybyEnvie(envie) {
    var cityToReturn = new Array();

    for(var key in VILLES) {
        if(VILLES[key].envie.includes(envie)) 
          cityToReturn.push(VILLES[key].id);
    }

    return cityToReturn;
}

/**
 * viaMichelin : Filters two Arrays in one
 * @param {Array} array1 
 * @param {Array} array2 
 * @param {String} departureCity 
 * @returns {Array} with elements included in array1 and array2
 */
function filterTwoArraysCoords(array1, array2, departureCity) {
    var cityToReturn = [];
    for(var i=0;i<array1.length;i++) {
        if(array2.includes(array1[i]) && array1[i] != departureCity) cityToReturn.push(array1[i]);
    }
    return cityToReturn;
}
/**
 * Navitia : Filters two Arrays in one
 * @param {Array} array1 
 * @param {Array} array2 
 * @param {String} departureCity 
 * @returns with elements included in array1 and array2
 */
function filterTwoArrays(array1, array2, departureCity) {
    var cityToReturn = new Array();
    for(var i=0;i<array1.length;i++) {
        if(array2.includes(array1[i]) && array1[i] != departureCity) 
          cityToReturn.push(array1[i]);
    }
    return cityToReturn;
}

/**
 * Converts the duration in seconds
 * @param {String} duration from the user's form
 * @returns {int} duration in seconds
 */
function findDuration(duration) {
    if(duration == "toutes+durées") return 1000000;
    if(duration == "- de 2 heures") return 7200;
    if(duration == "entre 2 et 4 heures") return 14400;
    if(duration == "+ de 4 heures") return 1000000;
}
