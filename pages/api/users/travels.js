import React, { useState } from "React";
import { connectToDatabase } from "../../../util/mongodb";

export default async function travel(req, res) {
  //get = obtenir des infos
  // Recuperer de la BDD l'ensemble des voyages sauvegardés d'un utilisateur
  if (req.method === "GET") {
    const email = req.query.email;

    const response = await getTravels(email);

    res.json(response);
  }

  //post = envoyer des infos
  //Sauvegarder, pour un utilisateur, un voyage sur son compte
  if (req.method === "POST") {
    const body = JSON.parse(req.body);
    const data = body.data;
    const email = body.email;

    if (!email) {
      res.json({ error: "email non fourni" });
    } else if (!data) {
      res.json({ error: "informations non fournis" });
    } else {
      const response = await addTravels(email, data);
      console.log(data);

      res.json(response);
    }
  }
}

// Recupere l'ensemble des voyages d'un utilisteur inscrit
// Dans le cas ou celui-ci n'existe pas, la fonction renvoi une erreur
async function getTravels(email) {
  //Connexion a la base de données
  const { db } = await connectToDatabase();

  //On trouve un utilisateur sur la BDD grace a son email
  const users = await db.collection("users").find({ email }).toArray();

  if (users.length == 0) {
    return { error: "Utilisateur introuvable" };
  } else {
    return {
      success: "Voyages de l'utilisateur récupérés",
      data: users[0].travels,
    };
  }
}

async function addTravels(email, data) {
  //Connexion a la base de données
  const { db } = await connectToDatabase();

  //On trouve un utilisateur sur la BDD grace a son email
  const results = await db
    .collection("users")
    .updateOne({ email }, { $push: { travels: data } });

  return results;
}
