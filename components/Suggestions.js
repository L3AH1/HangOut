import { getHours } from "date-fns";
import React, { useState } from "react";

const date = new Date();
const month = date.getMonth() + 1;
const dateFormate =
  date.getDate().toString().padStart(2, "0") +
  "/" +
  month.toString().padStart(2, "0") +
  "/" +
  date.getFullYear() +
  "-" +
  date.getHours().toString().padStart(2, "0") +
  "h" +
  date.getMinutes().toString().padStart(2, "0");
var url = new Array();
var ville1 = [
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
var ville2 = [
  "Le Havre",
  "Bordeaux",
  "Brest",
  "Bayonne",
  "Arles",
  "Annecy",
  "Montgenevre",
  "Roubaix",
  "Lourdes",
];
var compteur = 0;
for (var j = 0; j < ville2.length; j++) {
  var villeArr = ville2[j];
  for (var i = 0; i < ville1.length; i++) {
    var villeDep = ville1[i];
    url[compteur] =
      "/HJourneyTrain?from=" +
      villeDep +
      "&to=" +
      villeArr +
      "&datetime=" +
      dateFormate;
    compteur++;
  }
}

const VOYAGES = [
  {
    depart: "Le Havre",
    answer: (
      <div>
        <div className="flex justify-between py-1 px-5 w-70">
          <p className="text-left font-bold text-blue-600">Départ - Arrivée</p>
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
              <g id="_12-train" data-name="12-train">
                <g id="glyph">
                  <path d="M496,404H16a12,12,0,0,0,0,24H496a12,12,0,0,0,0-24Z"></path>
                  <circle cx="209" cy="367" r="12"></circle>
                  <circle cx="319" cy="367" r="12"></circle>
                  <path d="M200,268H432.554A124.162,124.162,0,0,0,320,196H190.8a35.853,35.853,0,0,1,9.2,24Z"></path>
                  <path d="M57,220a35.853,35.853,0,0,1,9.2-24H4v72H57Z"></path>
                  <path d="M93,344h.931l25.584,32.485A12,12,0,0,0,128,380h47.439a36,36,0,1,1,67.122,0h42.878a36,36,0,1,1,67.122,0H408.5a35.729,35.729,0,0,0,25.719-10.81c6.828-6.972,10.476-28.184,10.273-37.94L444.253,320H188V220a24.028,24.028,0,0,0-24-24H93a24.028,24.028,0,0,0-24,24V320A24.028,24.028,0,0,0,93,344Zm48-124h23l.015,100H141Zm-48,0h24V320H93Z"></path>
                  <path d="M200,308H443.418a123.062,123.062,0,0,0-6.393-29H200Z"></path>
                  <rect x="4" y="279" width="53" height="29"></rect>
                  <path d="M16,364H94.407l-6.594-8.373A36.054,36.054,0,0,1,57,320H4v32A12,12,0,0,0,16,364Z"></path>
                </g>
              </g>
            </svg>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
          <p className="text-left">Marseille - Le Havre</p>
          <div className="flex items-center">
            <a className="text-right" href={url[0]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 w-70">
          <p className="text-left">Lyon - Le Havre</p>
          <div className="flex items-center">
            <a className="text-right" href={url[1]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
          <p className="text-left">Toulouse - Le Havre</p>
          <div className="flex items-center">
            <a className="text-right" href={url[2]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5">
          <p className="text-left">Avignon - Le Havre</p>
          <div className="flex items-center">
            <a className="text-right" href={url[3]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
          <p className="text-left">Nice - Le Havre</p>
          <div className="flex items-center">
            <a className="text-right" href={url[4]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 w-70">
          <p className="text-left">Nantes - Le Havre</p>
          <div className="flex items-center">
            <a className="text-right" href={url[5]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
          <p className="text-left">Montpellier - Le Havre</p>
          <div className="flex items-center">
            <a className="text-right" href={url[6]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 w-70">
          <p className="text-left">Strasbourg - Le Havre</p>
          <div className="flex items-center">
            <a className="text-right" href={url[7]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
          <p className="text-left">Lille - Le Havre</p>
          <div className="flex items-center">
            <a className="text-right" href={url[8]}>
              X
            </a>
          </div>
        </div>
      </div>
    ),
  },
  {
    depart: "Bordeaux",
    answer: (
      <div>
        <div className="flex justify-between py-1 px-5 w-70">
          <p className="text-left font-bold text-blue-600">Départ - Arrivée</p>
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
              <g id="_12-train" data-name="12-train">
                <g id="glyph">
                  <path d="M496,404H16a12,12,0,0,0,0,24H496a12,12,0,0,0,0-24Z"></path>
                  <circle cx="209" cy="367" r="12"></circle>
                  <circle cx="319" cy="367" r="12"></circle>
                  <path d="M200,268H432.554A124.162,124.162,0,0,0,320,196H190.8a35.853,35.853,0,0,1,9.2,24Z"></path>
                  <path d="M57,220a35.853,35.853,0,0,1,9.2-24H4v72H57Z"></path>
                  <path d="M93,344h.931l25.584,32.485A12,12,0,0,0,128,380h47.439a36,36,0,1,1,67.122,0h42.878a36,36,0,1,1,67.122,0H408.5a35.729,35.729,0,0,0,25.719-10.81c6.828-6.972,10.476-28.184,10.273-37.94L444.253,320H188V220a24.028,24.028,0,0,0-24-24H93a24.028,24.028,0,0,0-24,24V320A24.028,24.028,0,0,0,93,344Zm48-124h23l.015,100H141Zm-48,0h24V320H93Z"></path>
                  <path d="M200,308H443.418a123.062,123.062,0,0,0-6.393-29H200Z"></path>
                  <rect x="4" y="279" width="53" height="29"></rect>
                  <path d="M16,364H94.407l-6.594-8.373A36.054,36.054,0,0,1,57,320H4v32A12,12,0,0,0,16,364Z"></path>
                </g>
              </g>
            </svg>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
          <p className="text-left">Marseille - Bordeaux</p>
          <div className="flex items-center">
            <a className="text-right" href={url[9]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 w-70">
          <p className="text-left">Lyon - Bordeaux</p>
          <div className="flex items-center">
            <a className="text-right" href={url[10]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
          <p className="text-left">Toulouse - Bordeaux</p>
          <div className="flex items-center">
            <a className="text-right" href={url[11]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5">
          <p className="text-left">Avignon - Bordeaux</p>
          <div className="flex items-center">
            <a className="text-right" href={url[12]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
          <p className="text-left">Nice - Bordeaux</p>
          <div className="flex items-center">
            <a className="text-right" href={url[13]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 w-70">
          <p className="text-left">Nantes - Bordeaux</p>
          <div className="flex items-center">
            <a className="text-right" href={url[14]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
          <p className="text-left">Montpellier - Bordeaux</p>
          <div className="flex items-center">
            <a className="text-right" href={url[15]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 w-70">
          <p className="text-left">Strasbourg - Bordeaux</p>
          <div className="flex items-center">
            <a className="text-right" href={url[16]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 w-70">
          <p className="text-left">Lille - Bordeaux</p>
          <div className="flex items-center">
            <a className="text-right" href={url[17]}>
              X
            </a>
          </div>
        </div>
      </div>
    ),
  },
  {
    depart: "Brest",
    answer: (
      <div>
        <div className="flex justify-between py-1 px-5 w-70">
          <p className="text-left font-bold text-blue-600">Départ - Arrivée</p>
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
              <g id="_12-train" data-name="12-train">
                <g id="glyph">
                  <path d="M496,404H16a12,12,0,0,0,0,24H496a12,12,0,0,0,0-24Z"></path>
                  <circle cx="209" cy="367" r="12"></circle>
                  <circle cx="319" cy="367" r="12"></circle>
                  <path d="M200,268H432.554A124.162,124.162,0,0,0,320,196H190.8a35.853,35.853,0,0,1,9.2,24Z"></path>
                  <path d="M57,220a35.853,35.853,0,0,1,9.2-24H4v72H57Z"></path>
                  <path d="M93,344h.931l25.584,32.485A12,12,0,0,0,128,380h47.439a36,36,0,1,1,67.122,0h42.878a36,36,0,1,1,67.122,0H408.5a35.729,35.729,0,0,0,25.719-10.81c6.828-6.972,10.476-28.184,10.273-37.94L444.253,320H188V220a24.028,24.028,0,0,0-24-24H93a24.028,24.028,0,0,0-24,24V320A24.028,24.028,0,0,0,93,344Zm48-124h23l.015,100H141Zm-48,0h24V320H93Z"></path>
                  <path d="M200,308H443.418a123.062,123.062,0,0,0-6.393-29H200Z"></path>
                  <rect x="4" y="279" width="53" height="29"></rect>
                  <path d="M16,364H94.407l-6.594-8.373A36.054,36.054,0,0,1,57,320H4v32A12,12,0,0,0,16,364Z"></path>
                </g>
              </g>
            </svg>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
          <p className="text-left">Marseille - Brest</p>
          <div className="flex items-center">
            <a className="text-right" href={url[18]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 w-70">
          <p className="text-left">Lyon - Brest</p>
          <div className="flex items-center">
            <a className="text-right" href={url[19]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
          <p className="text-left">Toulouse - Brest</p>
          <div className="flex items-center">
            <a className="text-right" href={url[20]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5">
          <p className="text-left">Avignon - Brest</p>
          <div className="flex items-center">
            <a className="text-right" href={url[21]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
          <p className="text-left">Nice - Brest</p>
          <div className="flex items-center">
            <a className="text-right" href={url[22]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 w-70">
          <p className="text-left">Nantes - Brest</p>
          <div className="flex items-center">
            <a className="text-right" href={url[23]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
          <p className="text-left">Montpellier - Brest</p>
          <div className="flex items-center">
            <a className="text-right" href={url[24]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 w-70">
          <p className="text-left">Strasbourg - Brest</p>
          <div className="flex items-center">
            <a className="text-right" href={url[25]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 w-70">
          <p className="text-left">Lille - Brest</p>
          <div className="flex items-center">
            <a className="text-right" href={url[26]}>
              X
            </a>
          </div>
        </div>
      </div>
    ),
  },
  {
    depart: "Bayonne",
    answer: (
      <div>
        <div className="flex justify-between py-1 px-5 w-70">
          <p className="text-left font-bold text-blue-600">Départ - Arrivée</p>
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
              <g id="_12-train" data-name="12-train">
                <g id="glyph">
                  <path d="M496,404H16a12,12,0,0,0,0,24H496a12,12,0,0,0,0-24Z"></path>
                  <circle cx="209" cy="367" r="12"></circle>
                  <circle cx="319" cy="367" r="12"></circle>
                  <path d="M200,268H432.554A124.162,124.162,0,0,0,320,196H190.8a35.853,35.853,0,0,1,9.2,24Z"></path>
                  <path d="M57,220a35.853,35.853,0,0,1,9.2-24H4v72H57Z"></path>
                  <path d="M93,344h.931l25.584,32.485A12,12,0,0,0,128,380h47.439a36,36,0,1,1,67.122,0h42.878a36,36,0,1,1,67.122,0H408.5a35.729,35.729,0,0,0,25.719-10.81c6.828-6.972,10.476-28.184,10.273-37.94L444.253,320H188V220a24.028,24.028,0,0,0-24-24H93a24.028,24.028,0,0,0-24,24V320A24.028,24.028,0,0,0,93,344Zm48-124h23l.015,100H141Zm-48,0h24V320H93Z"></path>
                  <path d="M200,308H443.418a123.062,123.062,0,0,0-6.393-29H200Z"></path>
                  <rect x="4" y="279" width="53" height="29"></rect>
                  <path d="M16,364H94.407l-6.594-8.373A36.054,36.054,0,0,1,57,320H4v32A12,12,0,0,0,16,364Z"></path>
                </g>
              </g>
            </svg>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
          <p className="text-left">Marseille - Bayonne</p>
          <div className="flex items-center">
            <a className="text-right" href={url[27]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 w-70">
          <p className="text-left">Lyon - Bayonne</p>
          <div className="flex items-center">
            <a className="text-right" href={url[28]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
          <p className="text-left">Toulouse - Bayonne</p>
          <div className="flex items-center">
            <a className="text-right" href={url[29]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5">
          <p className="text-left">Avignon - Bayonne</p>
          <div className="flex items-center">
            <a className="text-right" href={url[30]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
          <p className="text-left">Nice - Bayonne</p>
          <div className="flex items-center">
            <a className="text-right" href={url[31]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 w-70">
          <p className="text-left">Nantes - Bayonne</p>
          <div className="flex items-center">
            <a className="text-right" href={url[32]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
          <p className="text-left">Montpellier - Bayonne</p>
          <div className="flex items-center">
            <a className="text-right" href={url[33]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 w-70">
          <p className="text-left">Strasbourg - Bayonne</p>
          <div className="flex items-center">
            <a className="text-right" href={url[34]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 w-70">
          <p className="text-left">Lille - Bayonne</p>
          <div className="flex items-center">
            <a className="text-right" href={url[35]}>
              X
            </a>
          </div>
        </div>
      </div>
    ),
  },
  {
    depart: "Arles",
    answer: (
      <div>
        <div className="flex justify-between py-1 px-5 w-70">
          <p className="text-left font-bold text-blue-600">Départ - Arrivée</p>
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
              <g id="_12-train" data-name="12-train">
                <g id="glyph">
                  <path d="M496,404H16a12,12,0,0,0,0,24H496a12,12,0,0,0,0-24Z"></path>
                  <circle cx="209" cy="367" r="12"></circle>
                  <circle cx="319" cy="367" r="12"></circle>
                  <path d="M200,268H432.554A124.162,124.162,0,0,0,320,196H190.8a35.853,35.853,0,0,1,9.2,24Z"></path>
                  <path d="M57,220a35.853,35.853,0,0,1,9.2-24H4v72H57Z"></path>
                  <path d="M93,344h.931l25.584,32.485A12,12,0,0,0,128,380h47.439a36,36,0,1,1,67.122,0h42.878a36,36,0,1,1,67.122,0H408.5a35.729,35.729,0,0,0,25.719-10.81c6.828-6.972,10.476-28.184,10.273-37.94L444.253,320H188V220a24.028,24.028,0,0,0-24-24H93a24.028,24.028,0,0,0-24,24V320A24.028,24.028,0,0,0,93,344Zm48-124h23l.015,100H141Zm-48,0h24V320H93Z"></path>
                  <path d="M200,308H443.418a123.062,123.062,0,0,0-6.393-29H200Z"></path>
                  <rect x="4" y="279" width="53" height="29"></rect>
                  <path d="M16,364H94.407l-6.594-8.373A36.054,36.054,0,0,1,57,320H4v32A12,12,0,0,0,16,364Z"></path>
                </g>
              </g>
            </svg>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
          <p className="text-left">Marseille - Arles</p>
          <div className="flex items-center">
            <a className="text-right" href={url[36]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 w-70">
          <p className="text-left">Lyon - Arles</p>
          <div className="flex items-center">
            <a className="text-right" href={url[37]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
          <p className="text-left">Toulouse - Arles</p>
          <div className="flex items-center">
            <a className="text-right" href={url[38]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5">
          <p className="text-left">Avignon - Arles</p>
          <div className="flex items-center">
            <a className="text-right" href={url[39]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
          <p className="text-left">Nice - Arles</p>
          <div className="flex items-center">
            <a className="text-right" href={url[40]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 w-70">
          <p className="text-left">Nantes - Arles</p>
          <div className="flex items-center">
            <a className="text-right" href={url[41]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
          <p className="text-left">Montpellier - Arles</p>
          <div className="flex items-center">
            <a className="text-right" href={url[42]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 w-70">
          <p className="text-left">Strasbourg - Arles</p>
          <div className="flex items-center">
            <a className="text-right" href={url[43]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 w-70">
          <p className="text-left">Lille - Arles</p>
          <div className="flex items-center">
            <a className="text-right" href={url[44]}>
              X
            </a>
          </div>
        </div>
      </div>
    ),
  },
  {
    depart: "Annecy",
    answer: (
      <div>
        <div className="flex justify-between py-1 px-5 w-70">
          <p className="text-left font-bold text-blue-600">Départ - Arrivée</p>
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
              <g id="_12-train" data-name="12-train">
                <g id="glyph">
                  <path d="M496,404H16a12,12,0,0,0,0,24H496a12,12,0,0,0,0-24Z"></path>
                  <circle cx="209" cy="367" r="12"></circle>
                  <circle cx="319" cy="367" r="12"></circle>
                  <path d="M200,268H432.554A124.162,124.162,0,0,0,320,196H190.8a35.853,35.853,0,0,1,9.2,24Z"></path>
                  <path d="M57,220a35.853,35.853,0,0,1,9.2-24H4v72H57Z"></path>
                  <path d="M93,344h.931l25.584,32.485A12,12,0,0,0,128,380h47.439a36,36,0,1,1,67.122,0h42.878a36,36,0,1,1,67.122,0H408.5a35.729,35.729,0,0,0,25.719-10.81c6.828-6.972,10.476-28.184,10.273-37.94L444.253,320H188V220a24.028,24.028,0,0,0-24-24H93a24.028,24.028,0,0,0-24,24V320A24.028,24.028,0,0,0,93,344Zm48-124h23l.015,100H141Zm-48,0h24V320H93Z"></path>
                  <path d="M200,308H443.418a123.062,123.062,0,0,0-6.393-29H200Z"></path>
                  <rect x="4" y="279" width="53" height="29"></rect>
                  <path d="M16,364H94.407l-6.594-8.373A36.054,36.054,0,0,1,57,320H4v32A12,12,0,0,0,16,364Z"></path>
                </g>
              </g>
            </svg>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
          <p className="text-left">Marseille - Annecy</p>
          <div className="flex items-center">
            <a className="text-right" href={url[45]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 w-70">
          <p className="text-left">Lyon - Annecy</p>
          <div className="flex items-center">
            <a className="text-right" href={url[46]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
          <p className="text-left">Toulouse - Annecy</p>
          <div className="flex items-center">
            <a className="text-right" href={url[47]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5">
          <p className="text-left">Avignon - Annecy</p>
          <div className="flex items-center">
            <a className="text-right" href={url[48]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
          <p className="text-left">Nice - Annecy</p>
          <div className="flex items-center">
            <a className="text-right" href={url[49]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 w-70">
          <p className="text-left">Nantes - Annecy</p>
          <div className="flex items-center">
            <a className="text-right" href={url[50]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
          <p className="text-left">Montpellier - Annecy</p>
          <div className="flex items-center">
            <a className="text-right" href={url[51]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 w-70">
          <p className="text-left">Strasbourg - Annecy</p>
          <div className="flex items-center">
            <a className="text-right" href={url[52]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 w-70">
          <p className="text-left">Lille - Annecy</p>
          <div className="flex items-center">
            <a className="text-right" href={url[53]}>
              X
            </a>
          </div>
        </div>
      </div>
    ),
  },
  {
    depart: "Montgenevre",
    answer: (
      <div>
        <div className="flex justify-between py-1 px-5 w-70">
          <p className="text-left font-bold text-blue-600">Départ - Arrivée</p>
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
              <g id="_12-train" data-name="12-train">
                <g id="glyph">
                  <path d="M496,404H16a12,12,0,0,0,0,24H496a12,12,0,0,0,0-24Z"></path>
                  <circle cx="209" cy="367" r="12"></circle>
                  <circle cx="319" cy="367" r="12"></circle>
                  <path d="M200,268H432.554A124.162,124.162,0,0,0,320,196H190.8a35.853,35.853,0,0,1,9.2,24Z"></path>
                  <path d="M57,220a35.853,35.853,0,0,1,9.2-24H4v72H57Z"></path>
                  <path d="M93,344h.931l25.584,32.485A12,12,0,0,0,128,380h47.439a36,36,0,1,1,67.122,0h42.878a36,36,0,1,1,67.122,0H408.5a35.729,35.729,0,0,0,25.719-10.81c6.828-6.972,10.476-28.184,10.273-37.94L444.253,320H188V220a24.028,24.028,0,0,0-24-24H93a24.028,24.028,0,0,0-24,24V320A24.028,24.028,0,0,0,93,344Zm48-124h23l.015,100H141Zm-48,0h24V320H93Z"></path>
                  <path d="M200,308H443.418a123.062,123.062,0,0,0-6.393-29H200Z"></path>
                  <rect x="4" y="279" width="53" height="29"></rect>
                  <path d="M16,364H94.407l-6.594-8.373A36.054,36.054,0,0,1,57,320H4v32A12,12,0,0,0,16,364Z"></path>
                </g>
              </g>
            </svg>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
          <p className="text-left">Marseille - Montgenevre</p>
          <div className="flex items-center">
            <a className="text-right" href={url[54]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 w-70">
          <p className="text-left">Lyon - Montgenevre</p>
          <div className="flex items-center">
            <a className="text-right" href={url[55]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
          <p className="text-left">Toulouse - Montgenevre</p>
          <div className="flex items-center">
            <a className="text-right" href={url[56]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5">
          <p className="text-left">Avignon - Montgenevre</p>
          <div className="flex items-center">
            <a className="text-right" href={url[57]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
          <p className="text-left">Nice - Montgenevre</p>
          <div className="flex items-center">
            <a className="text-right" href={url[58]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 w-70">
          <p className="text-left">Nantes - Montgenevre</p>
          <div className="flex items-center">
            <a className="text-right" href={url[59]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
          <p className="text-left">Montpellier - Montgenevre</p>
          <div className="flex items-center">
            <a className="text-right" href={url[60]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 w-70">
          <p className="text-left">Strasbourg - Montgenevre</p>
          <div className="flex items-center">
            <a className="text-right" href={url[61]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 w-70">
          <p className="text-left">Lille - Montgenevre</p>
          <div className="flex items-center">
            <a className="text-right" href={url[62]}>
              X
            </a>
          </div>
        </div>
      </div>
    ),
  },
  {
    depart: "Roubaix",
    answer: (
      <div>
        <div className="flex justify-between py-1 px-5 w-70">
          <p className="text-left font-bold text-blue-600">Départ - Arrivée</p>
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
              <g id="_12-train" data-name="12-train">
                <g id="glyph">
                  <path d="M496,404H16a12,12,0,0,0,0,24H496a12,12,0,0,0,0-24Z"></path>
                  <circle cx="209" cy="367" r="12"></circle>
                  <circle cx="319" cy="367" r="12"></circle>
                  <path d="M200,268H432.554A124.162,124.162,0,0,0,320,196H190.8a35.853,35.853,0,0,1,9.2,24Z"></path>
                  <path d="M57,220a35.853,35.853,0,0,1,9.2-24H4v72H57Z"></path>
                  <path d="M93,344h.931l25.584,32.485A12,12,0,0,0,128,380h47.439a36,36,0,1,1,67.122,0h42.878a36,36,0,1,1,67.122,0H408.5a35.729,35.729,0,0,0,25.719-10.81c6.828-6.972,10.476-28.184,10.273-37.94L444.253,320H188V220a24.028,24.028,0,0,0-24-24H93a24.028,24.028,0,0,0-24,24V320A24.028,24.028,0,0,0,93,344Zm48-124h23l.015,100H141Zm-48,0h24V320H93Z"></path>
                  <path d="M200,308H443.418a123.062,123.062,0,0,0-6.393-29H200Z"></path>
                  <rect x="4" y="279" width="53" height="29"></rect>
                  <path d="M16,364H94.407l-6.594-8.373A36.054,36.054,0,0,1,57,320H4v32A12,12,0,0,0,16,364Z"></path>
                </g>
              </g>
            </svg>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
          <p className="text-left">Marseille - Roubaix</p>
          <div className="flex items-center">
            <a className="text-right" href={url[63]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 w-70">
          <p className="text-left">Lyon - Roubaix</p>
          <div className="flex items-center">
            <a className="text-right" href={url[64]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
          <p className="text-left">Toulouse - Roubaix</p>
          <div className="flex items-center">
            <a className="text-right" href={url[65]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5">
          <p className="text-left">Avignon - Roubaix</p>
          <div className="flex items-center">
            <a className="text-right" href={url[66]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
          <p className="text-left">Nice - Roubaix</p>
          <div className="flex items-center">
            <a className="text-right" href={url[67]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 w-70">
          <p className="text-left">Nantes - Roubaix</p>
          <div className="flex items-center">
            <a className="text-right" href={url[68]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
          <p className="text-left">Montpellier - Roubaix</p>
          <div className="flex items-center">
            <a className="text-right" href={url[69]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 w-70">
          <p className="text-left">Strasbourg - Roubaix</p>
          <div className="flex items-center">
            <a className="text-right" href={url[70]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 w-70">
          <p className="text-left">Lille - Roubaix</p>
          <div className="flex items-center">
            <a className="text-right" href={url[71]}>
              X
            </a>
          </div>
        </div>
      </div>
    ),
  },
  {
    depart: "Lourdes",
    answer: (
      <div>
        <div className="flex justify-between py-1 px-5 w-70">
          <p className="text-left font-bold text-blue-600">Départ - Arrivée</p>
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
              <g id="_12-train" data-name="12-train">
                <g id="glyph">
                  <path d="M496,404H16a12,12,0,0,0,0,24H496a12,12,0,0,0,0-24Z"></path>
                  <circle cx="209" cy="367" r="12"></circle>
                  <circle cx="319" cy="367" r="12"></circle>
                  <path d="M200,268H432.554A124.162,124.162,0,0,0,320,196H190.8a35.853,35.853,0,0,1,9.2,24Z"></path>
                  <path d="M57,220a35.853,35.853,0,0,1,9.2-24H4v72H57Z"></path>
                  <path d="M93,344h.931l25.584,32.485A12,12,0,0,0,128,380h47.439a36,36,0,1,1,67.122,0h42.878a36,36,0,1,1,67.122,0H408.5a35.729,35.729,0,0,0,25.719-10.81c6.828-6.972,10.476-28.184,10.273-37.94L444.253,320H188V220a24.028,24.028,0,0,0-24-24H93a24.028,24.028,0,0,0-24,24V320A24.028,24.028,0,0,0,93,344Zm48-124h23l.015,100H141Zm-48,0h24V320H93Z"></path>
                  <path d="M200,308H443.418a123.062,123.062,0,0,0-6.393-29H200Z"></path>
                  <rect x="4" y="279" width="53" height="29"></rect>
                  <path d="M16,364H94.407l-6.594-8.373A36.054,36.054,0,0,1,57,320H4v32A12,12,0,0,0,16,364Z"></path>
                </g>
              </g>
            </svg>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
          <p className="text-left">Marseille - Lourdes</p>
          <div className="flex items-center">
            <a className="text-right" href={url[72]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 w-70">
          <p className="text-left">Lyon - Lourdes</p>
          <div className="flex items-center">
            <a className="text-right" href={url[73]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
          <p className="text-left">Toulouse - Lourdes</p>
          <div className="flex items-center">
            <a className="text-right" href={url[74]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5">
          <p className="text-left">Avignon - Lourdes</p>
          <div className="flex items-center">
            <a className="text-right" href={url[75]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
          <p className="text-left">Nice - Lourdes</p>
          <div className="flex items-center">
            <a className="text-right" href={url[76]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 w-70">
          <p className="text-left">Nantes - Lourdes</p>
          <div className="flex items-center">
            <a className="text-right" href={url[77]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 bg-blue-100 w-70 rounded-md">
          <p className="text-left">Montpellier - Lourdes</p>
          <div className="flex items-center">
            <a className="text-right" href={url[78]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 w-70">
          <p className="text-left">Strasbourg - Lourdes</p>
          <div className="flex items-center">
            <a className="text-right" href={url[79]}>
              X
            </a>
          </div>
        </div>

        <div className="flex justify-between py-1 px-5 w-70">
          <p className="text-left">Lille - Lourdes</p>
          <div className="flex items-center">
            <a className="text-right" href={url[80]}>
              X
            </a>
          </div>
        </div>
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

function Expandable({ depart, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        className="p-2 hover:bg-gray-200 flex items-center justify-between mb-2 border-b-2 border-blue-600"
        onClick={() => setOpen(!open)}
      >
        <h4>{depart}</h4>

        <div className={open ? "transform rotate-180" : "tranform rotate-0"}>
          <Arrow />
        </div>
      </div>

      {open && <div className="p-2">{answer}</div>}
    </div>
  );
}

function SUGGESTIONS() {
  return (
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-2xl font-bold text-left pb-5 text-black">
        Quelques petites idées de voyages en train...
      </h2>

      <div className="grid lg:grid-cols-3 gap-4 ">
        {VOYAGES &&
          VOYAGES.map(({ depart, answer }) => (
            <Expandable depart={depart} answer={answer} />
          ))}
      </div>
    </div>
  );
}

export default function Suggestion() {
  return <SUGGESTIONS />;
}
