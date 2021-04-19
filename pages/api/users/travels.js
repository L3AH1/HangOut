import React, { useState } from "react";
import { connectToDatabase } from "../../../util/mongodb";

/**
 * Async function
 * @param {req} request the request.
 * @param {res} result the answer.
 * @returns {res.json} a answer formatted in json.
 */
export default async function travel(req, res) {
  /**
   * Get all the save's travels from a user
   */
  if (req.method === "GET") {
    const email = req.query.email;

    const response = await getTravels(email);

    res.json(response);
  }

  /**
   * Save a travel into a user's account
   */
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

/**
 * Get all the save's travels from a user
 */
async function getTravels(email) {
  /**
   * Connection to the database
   */
  const { db } = await connectToDatabase();

  /**
   * Find a user with his email
   */
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
  /**
   * Connection to the database
   */
  const { db } = await connectToDatabase();

  /**
   * Find a user with his email
   */
  const results = await db
    .collection("users")
    .updateOne({ email }, { $push: { travels: data } });

  return results;
}
