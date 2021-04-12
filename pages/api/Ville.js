/*
base de donnée des destinations possibles avec les informations de chaque ville 
*/
export let VILLES = {
  "Paris": {
    name: "Paris",
    id: "admin:fr:75056",
    coords: {
      lat: 48.85682,
      lon: 2.35111,
    },
    environnement: ["Ville"],
    envie: ["Tourisme", "Art et culture", "Architecture"],
    img:"https://pixabay.com/fr/photos/tour-eiffel-paris-france-voyage-3349075/",
  },
  "Le Havre":  {
    name: "Le Havre",
    id: "admin:fr:76351",
    coords: {
      lat: 49.500000,
      lon: 0.133333,
    },
    environnement: ["Ville","Plage"],
    envie: ["Tourisme", "Sports nautiques"],
    img:"https://cdn.pixabay.com/photo/2019/10/02/11/23/beach-4520732_960_720.jpg",
  },
  "Lyon":{
    name: "Lyon",
    id: "admin:fr:69123",
    coords: {
      lat: 45.764043,
      lon: 4.835659,
    },
    environnement: ["Ville"],
    envie: ["Tourisme", "Architecture", "Art et culture"],
    img:"https://images.unsplash.com/photo-1597692289746-070a015e0714?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
  },
  "Marseille":{
    name: "Marseille",
    id: "admin:fr:13055",
    coords: {
      lat: 43.3,
      lon: 5.4,
    },
    environnement: ["Ville","Plage"],
    envie: ["Tourisme", "Beau temps", "Sports nautiques"],
    img:"https://images.unsplash.com/photo-1603919768728-e227b34e1845?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
  },
  "Dijon":{
    name: "Dijon",
    id: "admin:fr:21231",
    coords: {
      lat: 47.316667,
      lon: 5.016667,
    },
    environnement: ["Ville"],
    envie: ["Tourisme", "Art et culture"],
    img:"https://cdn.pixabay.com/photo/2015/06/07/21/58/dijon-800883_960_720.jpg",
  },
  "Strasbourg":{
    name: "Strasbourg",
    id: "admin:fr:67482",
    coords: {
      lat: 48.58309,
      lon: 7.74389,
    },
    environnement: ["Ville"],
    envie: ["Tourisme"],
    img:"https://cdn.pixabay.com/photo/2020/03/31/19/07/strasbourg-4988969_960_720.jpg",
  },
  "Nantes":{
    name: "Nantes",
    id: "admin:fr:44109",
    coords: {
      lat: 47.216667,
      lon: -1.55,
    },
    environnement: ["Ville"],
    envie: ["Tourisme"],
    img:"https://edito.seloger.com/sites/default/files/styles/manual_crop_735x412/public/article/image/fotolia_53706400_subscription_monthly_m.jpg?itok=UKGFWDye",
  },
  "Nice":{
    name: "Nice",
    id: "admin:fr:6088",
    coords: {
      lat: 43.7,
      lon: 7.25,
    },
    environnement: ["Ville","Plage"],
    envie: ["Tourisme","Sports nautiques", "Beau temps"],
    img:"https://cdn.pixabay.com/photo/2016/07/07/22/07/nice-1503257_960_720.jpg",
  },
  "Montpellier":{
    name: "Montpellier",
    id: "admin:fr:34172",
    coords: {
      lat: 43.6,
      lon: 3.883333,
    },
    environnement: ["Ville","Plage "],
    envie: ["Tourisme","Sport nautiques","Sport","Beau temps"],
    img:"https://cdn.pixabay.com/photo/2016/03/01/17/02/beach-1230727_960_720.jpg",
  },
  "Bordeaux":{
    name: "Bordeaux",
    id: "admin:fr:33063",
    coords: {
      lat: 44.833333,
      lon: -0.566667,
    },
    environnement: ["Ville"],
    envie: ["Tourisme", "Beau temps", "Sports nautiques"],
    img:"https://cdn.pixabay.com/photo/2017/09/09/16/36/bordeaux-2732583_960_720.jpg",
  },
  "Lille":{
    name: "Lille",
    id: "admin:fr:59350",
    coords: {
      lat: 50.633333,
      lon: 3.066667,
    },
    environnement: ["Ville"],
    envie: ["Tourisme", "Art et culture"],
    img:"https://cdn.pixabay.com/photo/2017/08/20/00/15/lille-2660307_960_720.jpg",
  },
  "Rennes":{
    name: "Rennes",
    id: "admin:fr:35238",
    coords: {
      lat: 48.083333,
      lon: -1.683333,
    },
    environnement: ["Ville"],
    envie: ["Tourisme", "Art et culture"],
    img:"https://images.unsplash.com/photo-1587225901715-5a44a3a46ffa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  "Reims":{
    name: "Reims",
    id: "admin:fr:51454",
    coords: {
      lat: 49.25,
      lon: 4.033333,
    },
    environnement: ["Ville"],
    envie: ["Tourisme"],
    img:"https://images.unsplash.com/photo-1607587677370-7cd697023bbd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1426&q=80",
  },
  "Grenoble":{
    name: "Grenoble",
    id: "admin:fr:38185",
    coords: {
      lat: 45.166667,
      lon: 5.716667,
    },
    environnement: ["Ville","Montagne"],
    envie: ["Tourisme", "Randonnée", "Beau temps"],
    img:"https://cdn.pixabay.com/photo/2018/01/29/16/28/grenoble-3116511_960_720.jpg",
  },
  "Toulon":{
    name: "Toulon",
    id: "admin:fr:83137",
    coords: {
      lat: 43.12519,
      lon: 5.93104,
    },
    environnement: ["Ville","Plage"],
    envie: ["Tourisme", "Sports nautiques", "Beau temps"],
    img:"https://cdn.pixabay.com/photo/2012/09/25/14/43/toulon-57914_960_720.jpg",
  },
  "Angers":{
    name: "Angers",
    id: "admin:fr:49007",
    coords: {
      lat: 47.46866,
      lon: -0.5587,
    },
    environnement: ["Ville"],
    envie: ["Tourisme", "Art et culture", "Architecture"],
    img:"https://cdn.pixabay.com/photo/2020/09/04/10/37/architecture-5543674_960_720.jpg",
  },
  "Nimes":{
    name: "Nimes",
    id: "admin:fr:30189",
    coords: {
      lat: 43.83459,
      lon: 4.36086,
    },
    environnement: ["Ville"],
    envie: ["Tourisme", "Art et culture", "Architecture"],
    img:"https://cdn.pixabay.com/photo/2020/01/08/09/00/france-4749627_960_720.jpg",
  },
  "Villeurbanne":{
    name: "Villeurbanne",
    id: "admin:fr:69266",
    coords: {
      lat: 45.76478,
      lon: 4.88039,
    },
    environnement: ["Ville"],
    envie: ["Tourisme", "Art et culture", "Architecture"],
    img:"https://i1.wp.com/www.lyondemain.fr/wp-content/uploads/2020/09/Villeurbanne-Gratte-Ciel.jpg?resize=678%2C381&ssl=1",
  },
  "Cannes":{
    name: "Cannes",
    id: "admin:fr:6029",
    coords: {
      lat: 43.5509,
      lon: 7.01054,
    },
    environnement: ["Ville","Plage"],
    envie: ["Tourisme", "Beau temps", "Sports nautiques"],
    img:"https://cdn.pixabay.com/photo/2016/05/29/17/51/boot-1423438_960_720.jpg",
  },

  "Le Mont Saint-Michel":{
    name: "Le Mont Saint-Michel",
    id: "admin:fr:5035",
    coords: {
      lat: 48.64584,
      lon: -1.52254,
    },
    environnement: ["Ville"],
    envie: ["Tourisme", "Randonnée", "Architecture", "Art et culture"],
    img:"https://cdn.pixabay.com/photo/2016/01/19/17/32/castle-1149756_960_720.jpg",
  },

  "Lourdes":{
    name: "Lourdes",
    id: "admin:fr:65286",
    coords: {
      lat: -19.92421,
      lon: -43.94444,
    },
    environnement: ["Ville"],
    envie: ["Tourisme", "Art et culture"],
    img:"https://cdn.pixabay.com/photo/2020/05/29/14/44/lourdes-5235392_960_720.jpg",
  },
  "Toulouse":{
    name: "Toulouse",
    id: "admin:fr:31555",
    coords: {
      lat: -43.60389,
      lon: 1.44446,
    },
    environnement: ["Ville"],
    envie: ["Tourisme", "Beau temps", "Sports nautiques", "Art et culture"],
    img:"https://cdn.pixabay.com/photo/2017/02/16/22/51/toulouse-2072839_960_720.jpg",
  },

  "Rocamadour":{
    name: "Rocamadour",
    id: "admin:fr:46240",
    coords: {
      lat: 44.79965,
      lon: 1.61819,
    },
    environnement: ["Montagne"],
    envie: ["Tourisme", "Nature"],
    img:"https://cdn.pixabay.com/photo/2013/08/20/15/55/castle-174288_960_720.jpg",
  },

  "Arcachon":{
    name: "Arcachon",
    id: "admin:fr:33009",
    coords: {
      lat: 44.6548,
      lon: -1.14996,
    },
    environnement: ["Ville","Plage"],
    envie: ["Tourisme", "Beau temps", "Sports nautiques"],
    img:"https://cdn.pixabay.com/photo/2019/07/07/17/30/cabin-4322929_960_720.jpg",
  },

  "Roubaix":{
    name: "Roubaix",
    id: "admin:fr:59512",
    coords: {
      lat:  50.69127,
      lon: 3.17323,
    },
    environnement: ["Ville"],
    envie: [ "Tourisme"],
    img:"https://cdn.pixabay.com/photo/2017/06/07/07/24/roubaix-2379576_960_720.jpg",
  },
  "Montgenevre":{
    name: "Montgenevre",
    id: "admin:fr:5085",
    coords: {
      lat:  44.931,
      lon: 6.72346,
    },
    environnement: ["Montagne"],
    envie: ["Tourisme", "Escapades", "Sports d'hiver", "Beau temps"],
    img:"https://cdn.pixabay.com/photo/2019/12/29/17/45/winter-4727668_960_720.jpg",
  },

  "Aigues-Mortes":{
    name: "Aigues-Mortes",
    id: "admin:fr:30003",
    coords: {
      lat:  43.56877,
      lon: 4.19013,
    },
    environnement: ["Ville", "Plage"],
    envie: ["Beau temps", "Sports nautiques"],
    img:"https://cdn.pixabay.com/photo/2021/03/13/14/46/city-walls-6091902_960_720.jpg",
  },
  "Chantilly":{
    name: "Chantilly",
    id: "admin:fr:60141",
    coords: {
      lat: 49.19432,
      lon: 2.47105,
    },
    environnement: ["Ville"],
    envie: ["Tourisme", "Architecture", "Art et culture"],
    img:"https://cdn.pixabay.com/photo/2018/01/26/07/20/chateau-3107961_960_720.jpg",
  },

  "Besancon":{
    name: "Besancon",
    id: "admin:fr:25056",
    coords: {
      lat: 47.24127,
      lon:  6.02553,
    },
    environnement: ["Ville"],
    envie: ["Tourisme"],
    img:"https://cdn.pixabay.com/photo/2020/05/22/17/25/besancon-5206261_960_720.jpg",
  },

  "Metz":{
    name: "Metz",
    id: "admin:fr:57463",
    coords: {
      lat:  49.11421,
      lon: 6.17269,
    },
    environnement: ["Ville"],
    envie: ["Tourisme", "Art et culture", "Architecture"],
    img:"https://cdn.pixabay.com/photo/2013/04/02/01/56/metz-99349_960_720.jpg",
  },
  "Annecy":{
    name: "Annecy",
    id: "admin:fr:74010",
    coords: {
      lat: 45.89979,
      lon: 6.12835,
    },
    environnement: ["Montagne"],
    envie: ["Tourisme", "Escapades", "Randonnée"],
    img:"https://cdn.pixabay.com/photo/2017/06/09/10/42/calm-2386477_960_720.jpg",
  },
  "Saint-Malo":{
    name: "Saint-Malo",
    id: "admin:fr:35288",
    coords: {
      lat:  48.6482,
      lon: -2.0263,
    },
    environnement: ["Ville", "Plage"],
    envie: ["Tourisme"],
    img:"https://cdn.pixabay.com/photo/2020/06/17/21/51/seascape-5311291_960_720.jpg",
  },
  "Vienne":{
    name: "Vienne",
    id: "admin:fr:38544",
    coords: {
      lat: 45.52391,
      lon: 4.87854,
    },
    environnement: ["Ville"],
    envie: ["Tourisme", "Architecture", "Art et culture"],
    img:"https://cdn.pixabay.com/photo/2020/06/15/17/39/vienne-5302718_960_720.jpg",
  },
  "Arles":{
    name: "Arles",
    id: "admin:fr:13004",
    coords: {
      lat: 43.67529,
      lon: 4.62791,
    },
    environnement: ["Ville"],
    envie: ["Tourisme", "Architecture", "Art et culture", "Beau temps"],
    img:"https://cdn.pixabay.com/photo/2019/11/09/20/52/colosseum-4614435_960_720.jpg",
  },
  "Avignon":{
    name: "Avignon",
    id: "admin:fr:84007",
    coords: {
      lat: 43.94871,
      lon: 4.80593,
    },
    environnement: ["Ville"],
    envie: ["Tourisme", "Art et culture"],
    img:"https://cdn.pixabay.com/photo/2015/07/27/18/12/bridge-of-avignon-862948_960_720.jpg",
  },
  "Perpignan":{
    name: "Perpignan",
    id: "admin:fr:66136",
    coords: {
      lat: 42.70151,
      lon: 2.89412,
    },
    environnement: ["Ville", "Plage"],
    envie: ["Tourisme", "Beau temps", "Sports nautiques"],
    img:"",
  },
  "Pau":{
    name: "Pau",
    id: "admin:fr:64445",
    coords: {
      lat: 43.29755,
      lon: -0.37462,
    },
    environnement: ["Campagne"],
    envie: ["Beau temps", "Nature"],
    img:"https://cdn.pixabay.com/photo/2017/03/13/13/40/france-2139848_960_720.jpg",
  },
  "Bayonne":{
    name: "Bayonne",
    id: "admin:fr:64102",
    coords: {
      lat:  43.49342,
      lon: -1.47457,
    },
    environnement: ["Ville", "Plage"],
    envie: ["Tourisme", "Sports nautiques"],
    img:"",
  },
  "Brest":{
    name: "Brest",
    id: "admin:fr:29019",
    coords: {
      lat: 52.09824,
      lon: 23.68426,
    },
    environnement: ["Ville"],
    envie: ["Tourisme", "Sports nautiques"],
    img:"https://cdn.pixabay.com/photo/2017/12/01/18/05/rade-2991444_960_720.jpg",
  },


};