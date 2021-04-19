import { connectToDatabase } from "../../../util/mongodb";

/**
 * Async function
 * @param {req} request the request.
 * @param {res} result the answer.
 * @returns {res.json} a answer formatted in json.
 */
export default async (req, res) => {
  if (req.method === "POST") {
    const { email, password } = JSON.parse(req.body);

    const { db } = await connectToDatabase();

    const user = await db
      .collection("users")
      .find({ email, password })
      .toArray((err, users) => {
        if (err || users.length > 1) {
          res.json({ error: "erreur interne" });
        } else if (users.length == 0) {
          res.json({ error: "e-mail ou mot de passe incorrect" });
        }
        /**
         * If the user's email is found
         */
        else {
          res.json({ success: "connexion effectuée" });
        }
      });
  } else {
    res.json({ error: "Method not allowed" });
  }
};
