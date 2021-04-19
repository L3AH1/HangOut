/**
 *
 * City Database
 * Navitia's id of the city
 * longitude and latitude of the city for viaMichelin
 *
 */
export let VILLES = {
  Paris: {
    name: "Paris",
    id: "admin:fr:75056",
    coords: {
      lat: 48.85682,
      lon: 2.35111,
    },
    environnement: ["Ville"],
    envie: ["Tourisme", "Art et culture", "Architecture"],
    img:
      "https://cdn.pixabay.com/photo/2018/04/25/09/26/eiffel-tower-3349075_1280.jpg",
  },
  "Le Havre": {
    name: "Le Havre",
    id: "admin:fr:76351",
    coords: {
      lat: 49.5,
      lon: 0.133333,
    },
    environnement: ["Ville", "Plage"],
    envie: ["Tourisme", "Sports nautiques"],
    img:
      "https://cdn.pixabay.com/photo/2018/05/14/11/23/le-havre-3399560_1280.jpg",
  },
  Lyon: {
    name: "Lyon",
    id: "admin:fr:69123",
    coords: {
      lat: 45.764043,
      lon: 4.835659,
    },
    environnement: ["Ville", "Montagne"],
    envie: ["Tourisme", "Architecture", "Art et culture", "Sports d'hiver"],
    img: "https://cdn.pixabay.com/photo/2016/09/22/16/56/lyon-1687777_1280.jpg",
  },
  Marseille: {
    name: "Marseille",
    id: "admin:fr:13055",
    coords: {
      lat: 43.3,
      lon: 5.4,
    },
    environnement: ["Ville", "Plage"],
    envie: [
      "Tourisme",
      "Météo avantageuse",
      "Sports nautiques",
      "Architecture",
      "Art et culture",
    ],
    img:
      "https://cdn.pixabay.com/photo/2020/06/07/20/11/marseille-5271931_1280.jpg",
  },
  Dijon: {
    name: "Dijon",
    id: "admin:fr:21231",
    coords: {
      lat: 47.316667,
      lon: 5.016667,
    },
    environnement: ["Ville"],
    envie: ["Tourisme", "Art et culture", "Architecture"],
    img:
      "https://cdn.pixabay.com/photo/2017/12/23/19/54/dijon-3035882_1280.jpg",
  },
  Strasbourg: {
    name: "Strasbourg",
    id: "admin:fr:67482",
    coords: {
      lat: 48.58309,
      lon: 7.74389,
    },
    environnement: ["Ville", "Campagne"],
    envie: ["Tourisme", "Architecture", "Art et culture"],
    img:
      "https://cdn.pixabay.com/photo/2016/04/26/13/27/strasbourg-1354438_1280.jpg",
  },
  Nantes: {
    name: "Nantes",
    id: "admin:fr:44109",
    coords: {
      lat: 47.216667,
      lon: -1.55,
    },
    environnement: ["Ville", "Plage", "Campagne"],
    envie: ["Tourisme", "Architecture", "Art et culture", "Sports nautiques"],
    img:
      "https://cdn.pixabay.com/photo/2018/04/08/16/10/nantes-3301607_1280.jpg",
  },
  Nice: {
    name: "Nice",
    id: "admin:fr:6088",
    coords: {
      lat: 43.7,
      lon: 7.25,
    },
    environnement: ["Ville", "Plage", "Montagne"],
    envie: [
      "Tourisme",
      "Sports nautiques",
      "Météo avantageuse",
      "Architecture",
      "Art et culture",
    ],
    img: "https://cdn.pixabay.com/photo/2016/07/07/22/07/nice-1503257_1280.jpg",
  },
  Montpellier: {
    name: "Montpellier",
    id: "admin:fr:34172",
    coords: {
      lat: 43.6,
      lon: 3.883333,
    },
    environnement: ["Ville", "Plage", "Montagne"],
    envie: ["Tourisme", "Sport nautiques", "Sport", "Météo avantageuse"],
    img:
      "https://cdn.pixabay.com/photo/2019/05/18/21/24/montpellier-4212610_1280.jpg",
  },
  Bordeaux: {
    name: "Bordeaux",
    id: "admin:fr:33063",
    coords: {
      lat: 44.833333,
      lon: -0.566667,
    },
    environnement: ["Ville", "Plage"],
    envie: ["Tourisme", "Météo avantageuse", "Sports nautiques"],
    img: "https://www.novo-monde.com/app/uploads/2018/05/DSC07100.jpg",
  },
  Lille: {
    name: "Lille",
    id: "admin:fr:59350",
    coords: {
      lat: 50.633333,
      lon: 3.066667,
    },
    environnement: ["Ville"],
    envie: ["Tourisme", "Art et culture"],
    img:
      "https://cdn.pixabay.com/photo/2018/07/25/18/10/lille-3561976_1280.jpg",
  },
  Rennes: {
    name: "Rennes",
    id: "admin:fr:35238",
    coords: {
      lat: 48.083333,
      lon: -1.683333,
    },
    environnement: ["Ville", "Campagne"],
    envie: ["Tourisme", "Art et culture"],
    img:
      "https://images.unsplash.com/photo-1587225901715-5a44a3a46ffa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  Reims: {
    name: "Reims",
    id: "admin:fr:51454",
    coords: {
      lat: 49.25,
      lon: 4.033333,
    },
    environnement: ["Ville", "Campagne"],
    envie: ["Tourisme", "Architecture", "Art et culture"],
    img:
      "https://cdn.pixabay.com/photo/2019/03/10/18/01/reims-4046840_1280.jpg",
  },
  Grenoble: {
    name: "Grenoble",
    id: "admin:fr:38185",
    coords: {
      lat: 45.166667,
      lon: 5.716667,
    },
    environnement: ["Ville", "Montagne", "Campagne"],
    envie: ["Tourisme", "Sports d'hiver", "Météo avantageuse"],
    img:
      "https://cdn.pixabay.com/photo/2018/01/29/16/28/grenoble-3116511_1280.jpg",
  },
  Toulon: {
    name: "Toulon",
    id: "admin:fr:83137",
    coords: {
      lat: 43.12519,
      lon: 5.93104,
    },
    environnement: ["Ville", "Plage", "Montagne", "Campagne"],
    envie: [
      "Tourisme",
      "Sports nautiques",
      "Météo avantageuse",
      "Architecture",
      "Art et culture",
      "Nature",
    ],
    img:
      "https://media.istockphoto.com/photos/view-of-the-port-of-toulon-seynesurmer-and-seaside-of-rade-de-picture-id1054934462?k=6&m=1054934462&s=170667a&w=0&h=L2trV-E-dEJSoygnyTK6QWV9Hcl6bAI4ud7LhpqXGkw=",
  },
  Angers: {
    name: "Angers",
    id: "admin:fr:49007",
    coords: {
      lat: 47.46866,
      lon: -0.5587,
    },
    environnement: ["Ville", "Campagne"],
    envie: ["Tourisme", "Art et culture", "Architecture"],
    img:
      "https://cdn.pixabay.com/photo/2020/09/04/10/37/architecture-5543674_960_720.jpg",
  },
  Nîmes: {
    name: "Nîmes",
    id: "admin:fr:30189",
    coords: {
      lat: 43.83459,
      lon: 4.36086,
    },
    environnement: ["Ville", "Campagne", "Montagne"],
    envie: ["Tourisme", "Art et culture", "Architecture", "Météo avantageuse"],
    img:
      "https://thumbs.dreamstime.com/b/statue-du-nimeno-chr%C3%A9tien-ii-de-montcouquiol-torero-devant-l-ar%C3%A8ne-n%C3%AEmes-206099516.jpg",
  },
  Cannes: {
    name: "Cannes",
    id: "admin:fr:6029",
    coords: {
      lat: 43.5509,
      lon: 7.01054,
    },
    environnement: ["Ville", "Plage"],
    envie: [
      "Tourisme",
      "Météo avantageuse",
      "Sports nautiques",
      "Art et culture",
    ],
    img:
      "https://cdn.pixabay.com/photo/2016/05/29/17/51/boot-1423438_960_720.jpg",
  },
  "Mont Saint-Michel": {
    name: "Mont Saint-Michel",
    id: "admin:fr:5035",
    coords: {
      lat: 48.64584,
      lon: -1.52254,
    },
    environnement: ["Ville", "Plage"],
    envie: ["Tourisme", "Architecture", "Art et culture"],
    img:
      "https://cdn.pixabay.com/photo/2016/01/19/17/32/castle-1149756_960_720.jpg",
  },
  Lourdes: {
    name: "Lourdes",
    id: "admin:fr:65286",
    coords: {
      lat: 43.1,
      lon: -0.05,
    },
    environnement: ["Ville", "Montagne", "Campagne"],
    envie: ["Tourisme", "Art et culture", "Architecture"],
    img:
      "https://cdn.pixabay.com/photo/2020/05/29/14/44/lourdes-5235392_960_720.jpg",
  },
  Toulouse: {
    name: "Toulouse",
    id: "admin:fr:31555",
    coords: {
      lat: 43.60389,
      lon: 1.44446,
    },
    environnement: ["Ville", "Montagne"],
    envie: [
      "Tourisme",
      "Météo avantageuse",
      "Sports nautiques",
      "Art et culture",
      "Sports d'hiver",
    ],
    img:
      "https://cdn.pixabay.com/photo/2020/05/12/09/23/toulouse-5162034_1280.jpg",
  },
  Rocamadour: {
    name: "Rocamadour",
    id: "admin:fr:46240",
    coords: {
      lat: 44.79965,
      lon: 1.61819,
    },
    environnement: ["Montagne", "Campagne"],
    envie: ["Tourisme", "Nature"],
    img:
      "https://cdn.pixabay.com/photo/2015/08/26/10/22/summer-908321_1280.jpg",
  },
  Arcachon: {
    name: "Arcachon",
    id: "admin:fr:33009",
    coords: {
      lat: 44.6548,
      lon: -1.14996,
    },
    environnement: ["Ville", "Plage", "Campagne"],
    envie: ["Tourisme", "Météo avantageuse", "Sports nautiques"],
    img:
      "https://cdn.pixabay.com/photo/2015/04/20/18/08/arcachon-731934_1280.jpg",
  },
  Roubaix: {
    name: "Roubaix",
    id: "admin:fr:59512",
    coords: {
      lat: 50.69127,
      lon: 3.17323,
    },
    environnement: ["Ville"],
    envie: ["Tourisme", "Architecture", "Art et culture"],
    img:
      "https://cdn.pixabay.com/photo/2019/09/30/15/07/lille-4515990_1280.jpg",
  },
  Montgenèvre: {
    name: "Montgenèvre",
    id: "admin:fr:5085",
    coords: {
      lat: 44.931,
      lon: 6.72346,
    },
    environnement: ["Montagne"],
    envie: ["Tourisme", "Sports d'hiver", "Météo avantageuse"],
    img:
      "https://cdn.pixabay.com/photo/2019/12/29/17/45/winter-4727668_960_720.jpg",
  },
  "Aigues-Mortes": {
    name: "Aigues-Mortes",
    id: "admin:fr:30003",
    coords: {
      lat: 43.56877,
      lon: 4.19013,
    },
    environnement: ["Ville", "Plage"],
    envie: [
      "Tourisme",
      "Météo avantageuse",
      "Sports nautiques",
      "Architecture",
      "Art et culture",
    ],
    img:
      "https://cdn.pixabay.com/photo/2016/05/20/19/19/france-1405777_1280.jpg",
  },
  Besançon: {
    name: "Besançon",
    id: "admin:fr:25056",
    coords: {
      lat: 47.24127,
      lon: 6.02553,
    },
    environnement: ["Ville", "Campagne"],
    envie: ["Tourisme"],
    img:
      "https://thumbs.dreamstime.com/b/citadelle-de-besan%C3%A7on-et-doubs-bourgogne-en-franche-comte-ch%C3%A2teau-fran%C3%A7ais-forteresse-m%C3%A9di%C3%A9vale-pierre-architecture-paysage-160669816.jpg",
  },
  Metz: {
    name: "Metz",
    id: "admin:fr:57463",
    coords: {
      lat: 49.11421,
      lon: 6.17269,
    },
    environnement: ["Ville", "Campagne"],
    envie: ["Tourisme", "Art et culture", "Architecture"],
    img:
      "https://cdn.pixabay.com/photo/2015/01/06/11/38/hot-air-balloon-590127_1280.jpg",
  },
  Annecy: {
    name: "Annecy",
    id: "admin:fr:74010",
    coords: {
      lat: 45.89979,
      lon: 6.12835,
    },
    environnement: ["Montagne"],
    envie: ["Tourisme", "Nature", "Sports d'hiver"],
    img:
      "https://cdn.pixabay.com/photo/2015/04/17/05/47/annecy-726765_1280.jpg",
  },
  "Saint-Malo": {
    name: "Saint-Malo",
    id: "admin:fr:35288",
    coords: {
      lat: 48.6482,
      lon: -2.0263,
    },
    environnement: ["Ville", "Plage"],
    envie: ["Tourisme", "Architecture", "Art et culture"],
    img:
      "https://cdn.pixabay.com/photo/2020/01/22/19/38/saint-malo-4786116_1280.jpg",
  },
  Vienne: {
    name: "Vienne",
    id: "admin:fr:38544",
    coords: {
      lat: 45.52391,
      lon: 4.87854,
    },
    environnement: ["Ville", "Campagne"],
    envie: ["Tourisme", "Architecture", "Art et culture", "Nature"],
    img:
      "https://cdn.pixabay.com/photo/2020/06/15/17/39/vienne-5302718_960_720.jpg",
  },
  Arles: {
    name: "Arles",
    id: "admin:fr:13004",
    coords: {
      lat: 43.67529,
      lon: 4.62791,
    },
    environnement: ["Ville", "Plage"],
    envie: ["Tourisme", "Architecture", "Art et culture", "Météo avantageuse"],
    img:
      "https://cdn.pixabay.com/photo/2017/08/06/11/24/the-amphitheatre-of-arles-2591508_1280.jpg",
  },
  Avignon: {
    name: "Avignon",
    id: "admin:fr:84007",
    coords: {
      lat: 43.94871,
      lon: 4.80593,
    },
    environnement: ["Ville", "Plage"],
    envie: ["Tourisme", "Art et culture", "Architecture"],
    img:
      "https://thumbs.dreamstime.com/b/le-saint-benezet-et-le-des-de-palais-papes-de-pont-%C3%A0-avignon-france-70622615.jpg",
  },
  Perpignan: {
    name: "Perpignan",
    id: "admin:fr:66136",
    coords: {
      lat: 42.70151,
      lon: 2.89412,
    },
    environnement: ["Ville", "Plage", "Montagne"],
    envie: ["Tourisme", "Météo avantageuse", "Sports nautiques"],
    img:
      "https://cdn.pixabay.com/photo/2017/06/10/11/00/perpignan-2389638_1280.jpg",
  },
  Pau: {
    name: "Pau",
    id: "admin:fr:64445",
    coords: {
      lat: 43.29755,
      lon: -0.37462,
    },
    environnement: ["Campagne", "Ville"],
    envie: [
      "Tourisme",
      "Météo avantageuse",
      "Nature",
      "Architecture",
      "Art et culture",
    ],
    img:
      "https://cdn.pixabay.com/photo/2017/03/13/13/40/france-2139848_960_720.jpg",
  },
  Bayonne: {
    name: "Bayonne",
    id: "admin:fr:64102",
    coords: {
      lat: 43.49342,
      lon: -1.47457,
    },
    environnement: ["Ville", "Plage", "Montagne", "Campagne"],
    envie: [
      "Tourisme",
      "Sports nautiques",
      "Architecture",
      "Art et culture",
      "Nature",
      "Météo avantageuse",
    ],
    img:
      "https://cdn.pixabay.com/photo/2016/10/22/18/34/arches-1761376_1280.jpg",
  },
  Brest: {
    name: "Brest",
    id: "admin:fr:29019",
    coords: {
      lat: 48.390394,
      lon: -4.486076,
    },
    environnement: ["Ville", "Plage"],
    envie: ["Tourisme", "Sports nautiques", "Architecture", "Art et culture"],
    img: "https://cdn.pixabay.com/photo/2016/04/19/15/12/port-1338851_1280.jpg",
  },
  Foix: {
    name: "Foix",
    id: "admin:fr:9122",
    coords: {
      lat: 42.5075,
      lon: 1.5218,
    },
    environnement: ["Ville", "Montagne", "Campagne"],
    envie: ["Tourisme", "Sports d'hiver", "Nature", "Art et culture", "Nature"],
    img:
      "https://cdn.pixabay.com/photo/2019/06/24/11/34/mountain-4295799_1280.jpg",
  },
};
