import React, { useState } from "react";
import Footer from "../components/Footer";
import style from "../styles/Home.module.css";

const QUESTIONS = [
  {
    question: "Comment sont calculés les itinéraires proposés ?",
    answer: (
      <div>
        <p className="text-justify">
          Les destinations sont choisies grâce à notre algorithme et à l'aide
          des informations que vous rentrez dans le formulaire de la page
          d'accueil. De là, HangOut recherche des itinéraires en train et en
          voiture et vous propose de les consulter à l'aide de, principalement,
          deux APIs : Navitia et ViaMichelin.
        </p>
      </div>
    ),
  },
  {
    question: "Quelles sont les villes proposées lors de la recherche ?",
    answer: (
      <div>
        <p className="text-justify">
          Les villes qui vont sont proposées font parties d'une sélection de
          villes francaises, jugées idéales pour partir en vacances selon les
          auteurs du site. Chacunes d'entre elles possèdent des avantages
          propres, vous pouvez les consulter à tout moment lors de votre
          recherche ou sur la page de propositions de destinations.
        </p>
      </div>
    ),
  },
  {
    question: "Pourquoi certains prix de train ne s'affichent pas ?",
    answer: (
      <div>
        <p className="text-justify">
          Les prix des trains dépendent de nombreux facteurs ( durée de trajet,
          siège de train, heure de départ , etc...). HangOut s'engage donc à
          vous fournir des prix de trajets estimés lorsque ceux-ci le
          permettent. Nous vous invitons donc, une fois votre trajet planifié,
          de visiter les sites de réservation de billets de trains pour partir
          en toute sérénité.
        </p>
      </div>
    ),
  },
  {
    question: "A quoi sert le compte utilisateur ?",
    answer: (
      <div>
        <p className="text-justify">
          HangOut met à votre disposition un compte utilisateur afin que vous
          puissiez sauvegarder vos voyage planifiés et les retrouver jusqu'au
          jour de votre départ. Nous nous engageons, également, à respecter
          votre vie privée ainsi que les normes de confidentialité.
        </p>
      </div>
    ),
  },
  {
    question: "Dans quel cadre a été réalisé ce site ?",
    answer: (
      <div>
        <p className="text-justify">
          Ce site a été réalisé dans le cadre d'un projet universitaire lors de
          notre 3e année de la Licence Informatique de l'Université de Paris.
          Les quatre auteurs du site sont tous étudiants de cette licence :
          HAMOUDI Amine, RANDRIAMANAMPISOA Wendy, DE OLIVEIRA-GILL Nilam et
          ABBASSI Sinda. Ce projet est encadré par M. LHOUMEAU Maxime.
        </p>
      </div>
    ),
  },
  {
    question: "Que faire en cas de problème ?",
    answer: (
      <div>
        <p className="text-justify">
          Si vous rencontrez un problème lors de l'utilisation de l'application
          ou si vous avez des questions concernant l'utilisation de celle-ci,
          n'hésitez pas à nous contacter à l'adresse e-mail ci-dessus. Nous
          tâcherons de vous répondre dans les plus brefs delais.
        </p>
      </div>
    ),
  },
];

const Arrow = () => {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24">
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
        <h4 className="h-10 font-bold">{question}</h4>

        <div className={open ? "transform rotate-180" : "tranform rotate-0"}>
          <Arrow />
        </div>
      </div>

      {open && <div className="p-1">{answer}</div>}
    </div>
  );
}

function FAQ() {
  return (
    <div className={style.herohelp + " pb-12"}>
      <h2 className="text-yellow-400 font-bold p-5 text-3xl ml-4">
        Foire aux Questions
      </h2>
      <div className="container mx-auto max-w-4xl">
        <div className="grid lg:grid-cols-3 gap-4 ">
          {QUESTIONS &&
            QUESTIONS.map(({ question, answer }, index) => (
              <Expandable key={index} question={question} answer={answer} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default class aide extends React.Component {
  render() {
    return (
      <div>
        <main>
          <section className={style.heroaide + " text-white"}>
            <div className="bg-black bg-opacity-50">
              <div className="container mx-auto max-w-4xl py-24 px-4">
                <h1 className="text-4xl font-bold mb-4 text-white">
                  Besoin d'aide ?
                </h1>

                <div>
                  <p className="text-lg max-w-prose">
                    N'hésitez pas à nous envoyer un message à l'adresse suivante
                    :<br />
                    <a
                      href="mailto:hangout.teamcontact@gmail.com"
                      className="font-bold text-blue-800"
                    >
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

        <Footer />
      </div>
    );
  }
}
