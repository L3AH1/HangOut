/**
 * returns the useful data of Navitia request
 * @param {Object }data request results 
 * 
 * @return {Object} formatted data that can be useful 
 */

 function formatData (data) {

	const countJourneys = data.journeys[0].sections.length;

	const itinerary = new Array();
	for(var i=0;i<countJourneys;i++) {

		if(!(data.journeys[0].sections[i].type == "waiting")) {

			// array of Navitia request results summurize al informations of the journey 
			itinerary[i] = {
				destinationDepart   : data.journeys[0].sections[i].from.name,
				destinationArrivee  : data.journeys[0].sections[i].to.name,
				heureDepart         : formattingDate(data.journeys[0].sections[i].departure_date_time),
				heureArrivee        : formattingDate(data.journeys[0].sections[i].arrival_date_time),
				duree               : formattingDuration(data.journeys[0].sections[i].duration),
				waiting             : false,
			}
		} else {
			itinerary[i] = {
				destinationDepart   : "",
				destinationArrivee  : "",
				heureDepart         : formattingDate(data.journeys[0].sections[i].departure_date_time),
				heureArrivee        : formattingDate(data.journeys[0].sections[i].arrival_date_time),
				duree               : formattingDuration(data.journeys[0].sections[i].duration),
				waiting             : true,
			}
		}
	};

	// complete data of Navitia request which will be returned as JSON  
	const usefulData = {
		destinationDepart   : data.journeys[0].sections[0].from.name,
		destinationArrivee  : data.journeys[0].sections[countJourneys-1].to.name,
		heureDepart         : formattingDate(data.journeys[0].sections[0].departure_date_time),
		heureArrivee        : formattingDate(data.journeys[0].sections[countJourneys-1].arrival_date_time),
		duree               : formattingDuration(data.journeys[0].duration),
		itinerary           : itinerary,
	};
	return (JSON.parse(JSON.stringify(usefulData)));
}

/**
 * returns the formatted date  
 * @param {String}date date not formatted 
 * 
 * @return {String} formatted date ("JJ/MM/AAAA-HHhMM")
 */
function formattingDate(date) {
	return date.substr(6,2) + "/" + date.substr(4,2) + "/" +  date.substr(0,4) + "-" + date.substr(9,2) + "h" + date.substr(11,2);
}

/**
 * returns the formatted duration of Navitia request 
 * @param {String}duree  duration not formatted 
 * 
 * @returns {String} formatted duration ("HhMM")
 */

function formattingDuration(duree) {
	return Math.trunc(duree/3600) + "h" + Math.trunc(duree%3600/60).toString().padStart(2,"0")
}
export default formatData; 