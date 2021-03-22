import React from "react";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import '../styles/Home.module.css';
import Hfiltre from "../components/Hfiltre";

export default class Presentation extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <main>
          <section className={styles.large + " py-24 min-h-96"}>
    
          <div class="container max-w-4x1 mx-auto px-4 h-full flex flex-col items-center gap-8 ">
          <h1 className={styles.title} style={{textAlign:"center"}}>
            Les meilleures destinations
            <br/>
            avec HangOut ! </h1> 
          <p className= "max-w-prose mx-auto text-white italic font-bold"> Retrouvez des milliers de destinations de rêves selon vos envies </p>
          </div>
          </section>
          <Hfiltre/>
          <section class="p-4 block">
              <div class="container mx-auto m-0 relative">
                  <h2 class={styles.title_1}>Présentation </h2><br/>
                  <div class="grid gap-x-8 gap-y-4 grid-cols-3">
                      <div>
                          <strong class="italic text-yellow-500">Problème</strong>
                          <p>Le plus souvent les sites proposent des voyages standardisés et ceux-ci ne corrospondent pas forcément à toutes vos envies.</p>
                      </div> 
                      <div>
                          <strong class="italic text-green-500">Solution</strong>
                          <p>L'application HangOut a été développée pour aider les utilisateurs à planifier un voyage sur mesure selon leurs envies. </p>
                      </div>
                      <div>
                          <strong class="italic text-blue-500">Notre équipe</strong>
                          <p>HangOut est une application web développée dans le cadre d'un projet universitaire par: Amine HAMOUDI, Nilam , ... Wendy et Sinda ABBASSI. </p>
                      </div>
                  </div>
              </div>
          </section>
          <section class="p-4 block">
              <div class="container mx-auto m-0 relative">
                  <h2 class ={styles.title_1}>Fonctionnalités</h2><br/>
                  <div class="flex flex-wrap">
                  <div class= "flex">
                      <div class={styles.imgPresentation}>
                      <img src="valise.jpeg" alt ></img>
                  </div>
                      <div class={styles.columnPresentation}>
                      <div class="bg-gray-50 rounded-3xl shadow-xl block p-5 m-3">
                          <article class="text-left flex items-start" >

                              <div class={styles.media_content}>
                                <div >
                                  <h3 class={styles.title_2}>Recherche de destinations selon vos envies</h3>
                                  <p>Rentrez vos envies de voyage et retrouvez toutes les destinations relatives à vos attentes.</p>
                                  </div>  
                              </div>
                          </article>
                      </div>
                      <br/>
                      <div class="bg-gray-50 rounded-3xl shadow-xl block p-5 m-3">
                          <article class="text-left flex items-start" >

                              <div class={styles.media_content}>
                                <div >
                                  <h3 class={styles.title_2}>Choix d'un itinéraire</h3>
                                  <p>Choisissez un mode de transport et obtenez un bilan de votre voyage. </p>
                                  </div>  
                              </div>
                          </article>
                          </div>
                          <br/>
                          <div class="bg-gray-50 rounded-3xl shadow-xl block p-5 m-3">
                          <article class="text-left flex items-start" >

                              <div class={styles.media_content}>
                                <div >
                                  <h3 class={styles.title_2}>Partout avec vous</h3>
                                  <p>Profitez de toutes les fonctionnalités de HangOut à l'aide de votre compte et retrouvez vos données sur tous vos appareils. </p>
                                  </div>  
                              </div>
                          </article>
                          </div>
                          </div>
                  </div>
                  </div>
                  </div>
                  </section>
                  <section class="p-4 block">
              <div class="container mx-auto m-0 relative">
                <h2 class={styles.title_1}>Contactez nous</h2>
                <p>Pour toute autre question supplémentaire contactez nous à l'adresse suivante :</p>
                <a class="button" href="mailto:hangout.contact@gmail.com">
                 <span>hangout.contact@gmail.com</span>
                 </a>
              </div>
            </section>
         </main>
         <footer class="bg-gray-200 p-4 text-center">
            <div class="container mx-auto m-0 relative">
              <p>© Copyright 2021, HangOut</p>
              </div>
          </footer>
          </div>
     );
   }
}
    

