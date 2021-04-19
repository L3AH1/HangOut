/**---------------------------------------------------------------------------
 * 
 *  Class Suggestion,
 *  Display a proposition of journeys chosen by developers
 * 
 * ---------------------------------------------------------------------------
 */
import React, { useState } from "react";

 //Date of the day, for Navitia's request
 const date = new Date();
 const month = date.getMonth() + 1;
 const formatedDate =
   date.getDate().toString().padStart(2, "0") +
   "/" +
   month.toString().padStart(2, "0") +
   "/" +
   date.getFullYear() +
   "-" +
   date.getHours().toString().padStart(2, "0") +
   "h" +
   date.getMinutes().toString().padStart(2, "0");
 
 //Distribution of cities by Departure City and Arrival City
 var urlTrain = new Array();
 var urlCar = new Array();
 var cityDepartureTrain = [
   "Marseille",
   "Lyon",
   "Toulouse",
   "Avignon",
   "Nice",
   "Nantes",
   "Montpellier",
   "Strasbourg",
   "Lille",
 ];
 var cityDepartureCar = [
   "43.3:5.4", //Marseille
   "45.764043:4.835659", //Lyon
   "43.60389:1.44446", //Toulouse
   "43.94871:4.80593", //Avignon
   "43.7:7.25", //Nice
   "47.21667:-1.55", //Nantes
   "43.6:3.883333", //Montpellier
   "48.58309:7.74389", //Strasbourg
   "50.633333:3.066667", //Lille
 ];
 var cityDestinationCar = [
   "49.500000:0.133333", //Le Havre
   "44.833333:-0.566667", //Bordeaux
   "48.390394:-4.486076", //Brest
   "43.49342:-1.47457", //Bayonne
   "43.67529:4.62791", //Arles
   "45.89979:6.12835", //Annecy
   "44.931:6.72346", //Montgenevre
   "50.69127:3.17323", //Roubaix
   "43.1:-0.05", //Lourdes
 ];
 var cityDestinationTrain = [
   "Le Havre",
   "Bordeaux",
   "Brest",
   "Bayonne",
   "Arles",
   "Annecy",
   "Montgenèvre",
   "Roubaix",
   "Lourdes",
 ];
 var counter = 0;
 for (var j = 0; j < cityDestinationTrain.length; j++) {
   var cityArrival = cityDestinationTrain[j];
   for (var i = 0; i < cityDepartureTrain.length; i++) {
     var cityDeparture = cityDepartureTrain[i];
     urlTrain[counter] =
       "/JourneyTrain?from=" +
       cityDeparture +
       "&to=" +
       cityArrival +
       "&datetime=" +
       formatedDate;
     counter++;
   }
 }
 counter = 0;
 for (var j = 0; j < cityDestinationCar.length; j++) {
   var cityArrival = cityDestinationCar[j];
   for (var i = 0; i < cityDepartureCar.length; i++) {
     var cityDeparture = cityDepartureCar[i];
     urlCar[counter] = 
      "/bilanVoiture?from=" + cityDeparture + "&to=" + cityArrival;
     counter++;
   }
 }
 
 //Display of journeys by Arrival City
 const JOURNEYS = [
   {
     departure: "Le Havre",
     answer: (
       <DESTINATION id={0}/>
     ),
   },
   {
     departure: "Bordeaux",
     answer: (
       <DESTINATION id={9}/>
     ),
   },
   {
     departure: "Brest",
     answer: (
       <DESTINATION id={18}/>
     ),
   },
   {
     departure: "Bayonne",
     answer: (
       <DESTINATION id={27}/>
     ),
   },
   {
     departure: "Arles",
     answer: (
       <DESTINATION id={36}/>
     ),
   },
   {
     departure: "Annecy",
     answer: (
       <DESTINATION id={45}/>
     ),
   },
   {
     departure: "Montgenèvre",
     answer: (
       <DESTINATION id={54}/>
     ),
   },
   {
     departure: "Roubaix",
     answer: (
       <DESTINATION id={63}/>
     ),
   },
   {
     departure: "Lourdes",
     answer: (
       <DESTINATION id={72}/>
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
 
 function Expandable({ departure, answer }) {
   const [open, setOpen] = useState(false);
 
   return (
     <div>
       <div
         className="p-2 hover:bg-gray-200 flex items-center justify-between mb-2 border-b-2 border-blue-600"
         onClick={() => setOpen(!open)}
       >
         <h4>{departure}</h4>
 
         <div className={open ? "transform rotate-180" : "tranform rotate-0"}>
           <Arrow />
         </div>
       </div>
 
       {open && <div className="p-2">{answer}</div>}
     </div>
   );
 }
 
 function DESTINATION(props){
   return (
     <div>
         <div className="flex justify-between py-1 w-70">
           <p className="text-left px-5 font-bold text-blue-600 px-5">
             Départ - Arrivée
           </p>
           <div className="flex items-center">
             <svg
               className="text-blue-600 text-right -mt-2"
               fill="currentColor"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 512 512"
               width="32"
               height="32"
               id="fi_3202922"
             >
               <g id="_12-T" data-name="12-T">
                 <g id="glyph">
                   <path d="M496,404H16a12,12,0,0,0,0,24H496a12,12,0,0,0,0-24Z"/>
                   <circle cx="209" cy="367" r="12"/>
                   <circle cx="319" cy="367" r="12"/>
                   <path d="M200,268H432.554A124.162,124.162,0,0,0,320,196H190.8a35.853,35.853,0,0,1,9.2,24Z"/>
                   <path d="M57,220a35.853,35.853,0,0,1,9.2-24H4v72H57Z"/>
                   <path d="M93,344h.931l25.584,32.485A12,12,0,0,0,128,380h47.439a36,36,0,1,1,67.122,0h42.878a36,36,0,1,1,67.122,0H408.5a35.729,35.729,0,0,0,25.719-10.81c6.828-6.972,10.476-28.184,10.273-37.94L444.253,320H188V220a24.028,24.028,0,0,0-24-24H93a24.028,24.028,0,0,0-24,24V320A24.028,24.028,0,0,0,93,344Zm48-124h23l.015,100H141Zm-48,0h24V320H93Z"/>
                   <path d="M200,308H443.418a123.062,123.062,0,0,0-6.393-29H200Z"/>
                   <rect x="4" y="279" width="53" height="29"/>
                   <path d="M16,364H94.407l-6.594-8.373A36.054,36.054,0,0,1,57,320H4v32A12,12,0,0,0,16,364Z"/>
                 </g>
               </g>
             </svg>
             <p className="text-right px-2 -mt-2 mr-0.5">|</p>
             <svg
               className="text-blue-600 text-right"
               fill="currentColor"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 512 512"
               width="32"
               height="32"
               id="fi_3202926"
             >
               <g id="_13-car" data-name="13-car">
                 <g id="glyph">
                   <path d="M120,236a52,52,0,1,0,52,52A52.059,52.059,0,0,0,120,236Zm0,76a24,24,0,1,1,24-24A24,24,0,0,1,120,312Z"/>
                   <path d="M408,236a52,52,0,1,0,52,52A52.059,52.059,0,0,0,408,236Zm0,76a24,24,0,1,1,24-24A24,24,0,0,1,408,312Z"/>
                   <path d="M477.4,193.04,384,176l-79.515-65.975A44.109,44.109,0,0,0,276.526,100H159.38a43.785,43.785,0,0,0-34.359,16.514L74.232,176H40A36.04,36.04,0,0,0,4,212v44a44.049,44.049,0,0,0,44,44h9.145a64,64,0,1,1,125.71,0h162.29a64,64,0,1,1,125.71,0H472a36.04,36.04,0,0,0,36-36V228.632A35.791,35.791,0,0,0,477.4,193.04ZM180,164a12,12,0,0,1-12,12H115.245a6,6,0,0,1-4.563-9.9l34.916-40.9A12,12,0,0,1,154.724,121H168a12,12,0,0,1,12,12Zm60,56H224a12,12,0,0,1,0-24h16a12,12,0,0,1,0,24Zm94.479-43.706-114.507-.266a12,12,0,0,1-11.972-12V133a12,12,0,0,1,12-12h57.548a12,12,0,0,1,7.433,2.58l53.228,42A6,6,0,0,1,334.479,176.294Z"/>
                 </g>
               </g>
             </svg>
           </div>
         </div>
         <LINK id={props.id}/>
         <LINK id={props.id+1}/>
         <LINK id={props.id+2}/>
         <LINK id={props.id+3}/>
         <LINK id={props.id+4}/>
         <LINK id={props.id+5}/>
         <LINK id={props.id+6}/>
         <LINK id={props.id+7}/>
         <LINK id={props.id+8}/>
       </div>
   )
 }
 
 //Display with the link
 function LINK(props) {
   if(props.id%2 == 0) {
     return (
       <div className="flex justify-between bg-blue-100 rounded-md py-1 w-70">
         <p className="text-left px-5">{cityDepartureTrain[props.id%9]} - {cityDestinationTrain[Math.floor(props.id/9)]}</p>
         <div className="flex items-center">
           <a
             className="font-bold text-blue-600 mr-2 text-right"
             href={urlTrain[props.id]}
           >
             🔎
           </a>
           <p className="text-right px-2 -mt-2 mr-0.5">|</p>
           <a
             className="font-bold text-blue-600 mr-2 text-right"
             href={urlCar[props.id]}
           >
             🔎
           </a>
         </div>
       </div>
     );
   } else {
     return (
       <div className="flex justify-between py-1 w-70">
         <p className="text-left px-5">{cityDepartureTrain[props.id%9]} - {cityDestinationTrain[Math.floor(props.id/9)]}</p>
         <div className="flex items-center">
           <a
             className="font-bold text-blue-600 mr-2 text-right"
             href={urlTrain[props.id]}
           >
             🔎
           </a>
           <p className="text-right px-2 -mt-2 mr-0.5">|</p>
           <a
             className="font-bold text-blue-600 mr-2 text-right"
             href={urlCar[props.id]}
           >
             🔎
           </a>
         </div>
       </div>
     );
   }
   
 }
 
 function SUGGESTIONS() {
   return (
     <div className="container mx-auto max-w-4xl">
       <h2 className="text-2xl font-bold text-left px-5 pb-5 text-black">
         Quelques petites idées de voyages...
       </h2>
 
       <div className="grid lg:grid-cols-3 gap-4 hover:bg-gray-100 hover:bg-opacity-30">
         {JOURNEYS &&
           JOURNEYS.map(({ departure, answer },index) => (
             <Expandable key={index} departure={departure} answer={answer} />
           ))}
       </div>
     </div>
   );
 }
 
 export default function Suggestion() {
   return <SUGGESTIONS />;
 }