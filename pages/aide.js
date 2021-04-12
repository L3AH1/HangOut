import React, { useState } from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/Aide.module.css";
import HFooter from "../components/HFooter";

const QUESTIONS = [
  {
    question: "Comment sont calculés les itinéraires proposés ?",
    answer: (
      <div>
        <p className="text-justify">
        Les destinations sont tout d'abord choisies par des algorithmes à l'aide des informations
          que vous rentrez dans le formulaire de la page d'accueil. De là, HangOut recherche des itinéraires
          en train et en voiture à l'aide de deux APIs : Navitia et ViaMichelin.
        </p>
      </div>
    ),
  },
  {
    question: "Quelles sont les villes proposées lors de la recherche ?",
    answer: (
      <div>
        <p className="text-justify">
          Les villes dans lesquelles la recherche est possible sont toutes des villes
          françaises choisies par les auteurs du site. Les auteurs ont cherché les 
          grandes villes françaises ainsi que d'autres villes moins conséquentes mais
          touristiques. Pour tout ajout de villes n'hésitez pas à nous envoyer un mail.
        </p>
      </div>
    ),
  },
  {
    question: "Pourquoi certains prix de train ne s'affichent pas ?",
    answer: (
      <div>
        <p className="text-justify">
          Malheureusement l'API qui nous fournit les voyages en train, ne nous fournit pas
          les prix des trajets. Le prix est donc calculé à l'aide d'une autre API qui parfois
          ne coincide pas avec le trajet. Ce qui explique que le prix manque parfois.
          Par ailleurs les prix sont indiqués à titre indicatif d'après les données de la SNCF.
        </p>
      </div>
    ),
  },
  {
    question: "A quoi sert le compte utilisateur ?",
    answer: (
      <div>
        <p className="text-justify">
          Le compte utilisateur vous permet de sauvegarder vos voyages pour les revoir plus tard.
          HangOut s'engage à respecter les normes de confidentialité, ne vous demande quasiment
          aucune donnée personnelle et ne les conserve pas.
        </p>
      </div>
    ),
  },
  {
    question: "Dans quel cadre a été réalisé ce site ?",
    answer: (
      <div>
        <p className="text-justify">
        Ce site a été réalisé dans le cadre d'un projet de programmation lors de
          la 3e année de la Licence Informatique de l'Université de Paris. Les quatre auteurs
          du site sont tous des étudiants de cette licence : Amine Hamoudi, Wendy Randriamanampisoa, 
          Nilam De Oliveira-Gill, Sinda Abbassi.
          Ce projet est encadré par Maxime Lhoumeau.
        </p>
      </div>
    ),
  },
  {
    question: "Que faire en cas de problème ?",
    answer: (
      <div>
        <p className="text-justify">
          En cas de souci d'affichage, de souci au niveau des requêtes ou bien si une erreur persiste,
          n'hésitez pas à nous contacter à l'adresse e-mail ci-dessus.
        </p>
      </div>
    ),
  },
];

const Arrow = () => {
  return (
    <svg class="w-6 h-6" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
      />
    </svg>
  );
};

function Expandable({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        className="p-2 hover:bg-gray-200 flex items-center justify-between mb-2 border-b-2 border-blue-600"
        onClick={() => setOpen(!open)}
      >
        <h4 className="h-10">{question}</h4>

        <div className={open ? "transform rotate-180" : "tranform rotate-0"}>
          <Arrow />
        </div>
      </div>

      {open && <div className="p-2">{answer}</div>}
    </div>
  );
}

function FAQ() {
  return (
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-black font-bold p-5 text-xl">Foire aux Questions</h2>

      <div className="grid lg:grid-cols-3 gap-4">
        {QUESTIONS &&
          QUESTIONS.map(({ question, answer }) => (
            <Expandable question={question} answer={answer} />
          ))}
      </div>
    </div>
  );
}

export default class aide extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <main>
          <section className={styles.Hero + " text-white"}>
            <div className="bg-black bg-opacity-50">
              <div className="container mx-auto max-w-4xl py-24 px-4">
                <h1 class="text-4xl font-bold mb-4 text-white">
                  Besoin d'aide ?
                </h1>

                <div>
                  <p className="text-lg max-w-prose">
                    N'hésitez pas à nous envoyer un message à l'adresse suivante
                    :<br />
                    <a href="mailto:hangout.teamcontact@gmail.com" className="font-bold text-blue-800">
                      hangout.teamcontact@gmail.com
                    </a>
                    <br />
                    et nous serons ravis de vous répondre dans les plus brefs
                    délais 😊
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <FAQ />
        </main>

        <HFooter/>
      </div>
    );
  }
}
