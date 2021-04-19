import React from "react";
import Itinerary from "../components/Itinerary";
import Head from "next/head";
import Footer from "../components/Footer";

export default class BilanVoiture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ville: null,
      dateDepart: null,
      dateRetour: null,
      duree: null,
      envie: null,
      environnement: null,
    };
  }
  render() {
    return (
      <div>
        <Head>
          <title>HangOut</title>
        </Head>
        <Itinerary
          //mettre les villes de depart et arrivee dans des props
          villeDepart=""
          villeRetour=""
        />
        <Footer />
      </div>
    );
  }
}
