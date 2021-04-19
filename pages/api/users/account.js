import { connectToDatabase } from "../../../util/mongodb";

/**
 * Async function
 * @param {req} request the request.
 * @param {res} result the answer.
 * @returns {res.json} a answer formatted in json.
 */
export default async (req, res) => {
  if (req.method === "POST") {
    const { email } = JSON.parse(req.body);

    console.log(req.body);

    const { db } = await connectToDatabase();

    const user = await db
      .collection("users")
      .find({ email })
      .toArray((err, users) => {
        console.log(users);
        if (err || users.length > 1) {
          res.json({ error: "erreur interne" });
        } else {
        /**
         * If only one user is found
         */
          res.json({ user: users[0] });
        }
      });
  } else {
    res.json({ error: "Method not allowed" });
  }
};
