import { connectToDatabase } from "../../../util/mongodb";

/**
 * Async function
 * @param {req} request the request.
 * @param {res} result the answer.
 * @returns {res.json} a answer formatted in json.
 */
export default async (req, res) => {
  if (req.method === "POST") {
    const { username, email, password } = JSON.parse(req.body);

    const { db } = await connectToDatabase();

    /**
     * Check if the user's email didn't already exist
     */
    let error = false;
    let existingUsers = await db.collection("users").find({ email }).toArray();

    if (existingUsers.length === 0) {
      const newUser = await db.collection("users").insertMany([
        {
          username,
          email,
          password,
          travels: [],
        },
      ]);

      res.json({ user: newUser });
    } else {
      res.json({
        error: "Adresse email deja existante",
        errorName: "EMAIL_ALREADY_USED",
      });
    }
  } else {
    res.json({ error: "Method not allowed" });
  }
};
