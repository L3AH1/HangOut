import React from "react";
import Itinerary from "../components/Itinerary";



/**
 * Page that show the itineraries details with a map
 */
export default class BilanVoiture extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <Itinerary/>
    );
  }
}
