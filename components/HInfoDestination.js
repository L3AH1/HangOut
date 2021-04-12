import React from 'react';
import {VILLES} from "../pages/api/Ville"

/**
 * Classe d'affichage des résultats sur la deuxième interface.
 * Récupère un objet par ses props qui contient résultats d'une requête formatée.
 * Permet le lien vers la page des résultats
 */

class HDestination extends React.Component {

    findUrl (name) {
        for(var key in VILLES) {
            if(VILLES[key].name == name.split(' (')[0]) {
                return VILLES[key].img;
            }
        }
    }
    findAdvantage (name) {
        for(var key in VILLES) {
            if(VILLES[key].name == name.split(' (')[0]) {
                return VILLES[key].envie.join(', ');
            }
        }
    }

    render() {
        let name,duree,cost,src,avantage;
        //S'il faut afficher les informations en voiture
        if(this.props.infoCar){
            const info = this.props.infoCar;
            let t = info.duree,
                h = Math.round(t / 3600),
                m = Math.round(t % 3600 / 60);
            name = info.destinationArrivee.name;
            duree =  h + "h" + m + "min";
            cost = info.coutTotal + "€";
            avantage ="";
            src = info.destinationArrivee.img;
            console.log(info.destinationArrivee);
            for (let i = 0; i < info.destinationArrivee.environnement.length; i++) {
                avantage += info.destinationArrivee.environnement[i] + " ";
            }
            for (let i = 0; i < info.destinationArrivee.envie.length; i++) {
                avantage += info.destinationArrivee.envie[i] + " ";
            }

        }
        else {
            const propsJson = this.props.journey;
            name = propsJson !== undefined ? propsJson.destinationArrivee != undefined ? propsJson.destinationArrivee.split(' (')[0] : this.props.name : this.props.name;
            duree = propsJson !== undefined ? propsJson.duree : " ";
            cost = this.props.cost;
            src = propsJson !== undefined ? this.findUrl(name) : this.props.src;
            avantage = propsJson !== undefined ? this.findAdvantage(name) : " ";
        }
        //Url préparé pour passer les données
        //const url = "/HJourneyTrain?from=" + this.props.journey.destinationDepart + "&to=" + this.props.journey.destinationArrivee + "&datetime=" + this.props.journey.heureDepart;
        if(name != this.props.name) {
            return (
                <div className="bg-white flex flex-col justify-stretch border-solid border-2 border-black rounded-2xl max-w-xs w-40 max-h-xs">
                    <div className="rounded-t-2xl h-28 flex-7 flex justify-center">
                        <img src={src} alt="logo" className="rounded-t-2xl max-h-full max-w-full" />
                    </div>
                    <div className=" border-solid border-2 border-r-0 border-l-0 border-black flex-1 h-min">
                        <p className="text-center text-blue-600 font-bold mb-0">{name}</p>
                    </div>
                    <div className="text-black text-sm text-left ml-3 flex-3 flex flex-col">
                        <div className="flex flex-row">
                            <p className="font-bold">Duree    :</p><p className="italic ml-2">{duree}</p>
                        </div>
                        <div className="flex flex-row">
                            <p className="font-bold">Coût     : </p><p>{cost}</p>
                        </div>
                        <div className="text-black text-sm mr-2 mb-1 text-left h-10 overflow-y-scroll">
                            <p className="font-bold">Avantage :</p><p>{avantage}</p>
                        </div>
                    </div>

                </div>
            );
        }
        else {
            return(
                <div>

                </div>
            );
        }
    }
}

export default HDestination;


