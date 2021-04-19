/**
 * returns the cost of a train journey 
 * @param {Object} data object containing the data of a step 
 * @return {Array} an array that contains URLs to send to the API of the SNCF for train costs
 */

 function getcout(data){

    var url = new Array();

    for(var i=0;i<data.itinerary.length;i++) {
        if(data.itinerary[i].duree == "0h00") {
            const toPush = {
                id : 0,
            }
            url.push(toPush);
        } else if(data.itinerary[i].waiting) {
            const toPush = {
                id : 0,
            }
            url.push(toPush);
        }
        // if the name of the departure city and arrival city are not formatted (useful) for the API SNCF 
        else {
            const depart = formattingCity(data.itinerary[i].destinationDepart.split(' (')[0]);
            const arrivee = formattingCity(data.itinerary[i].destinationArrivee.split(' (')[0]);
            if(depart == arrivee) {
                const toPush = {
                    id : 0,
                }
                url.push(toPush);
            } 
            // if the name of the departure city and arrival city are formatted
            else {
                const URL = "https://ressources.data.sncf.com/api/records/1.0/search/?dataset=tarifs-tgv-par-od&facet=od&q=" + depart + "-+" + arrivee;
                const toPush = {
                    id : data.itinerary[i].destinationDepart,
                    url : URL,
                }
                url.push(toPush);
            }
        }
    }
    return url;
}

/**
 * formats the names of cities to make them useful for the API 
 * @param {String} name the name of the city 
 * @return {String} the name of the city formatted for the API SNCF 
 */
function formattingCity(name) {
    if(name == "Bordeaux Saint-Jean") return "Bordeaux";
    if(name == "Paris Montparnasse Hall 1 &2") return "Paris Montparnasse"
    if(name == "Paris Gare de Lyon Hall 1 &2") return "Paris Gare de Lyon"
    if(name == "Paris Saint-Lazare") return "Paris Saint Lazare"
    if(name == "Marseille Saint-Charles") return "Marseille"
    else return name;

}
export default getcout; 