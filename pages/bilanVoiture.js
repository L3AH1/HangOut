import React from "react";
import Itinerary from "../components/Itinerary";
import Head from "next/head";
import Footer from "../components/Footer";

export default class BilanVoiture extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Head>
          <title>HangOut</title>
        </Head>
        <Itinerary />
        <Footer />
      </div>
    );
  }
}
