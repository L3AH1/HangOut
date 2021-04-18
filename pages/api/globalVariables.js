import {VILLES} from "./Ville";

export let variableFormulaire = {
  ville: "",
  dateDepart: "",
  dateRetour: "",
  envie: [],
  environnement: [],
  duree: "",
};

export let villes = [];
for(let key in VILLES){
  villes.push(VILLES[key].name);
}

villes = villes.sort();

export let envies = [
  "Tourisme",
  "Nature",
  "Météo avantageuse",
  "Sports d'hiver",
  "Sports nautiques",
];

envies = envies.sort();

export let environnements = [
  "Ville",
  "Plage",
  "Campagne",
  "Montagne",
]

environnements = environnements.sort();
