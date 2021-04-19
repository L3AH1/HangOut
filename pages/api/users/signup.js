import { connectToDatabase } from "../../../util/mongodb";

export default async (req, res) => {
  if (req.method === "POST") {
    const { username, email, password } = JSON.parse(req.body);

    const { db } = await connectToDatabase();

    // Verifier que l'adresse email n'existe pas
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

  //   const { db } = await connectToDatabase();
  //   const users = await db
  //     .collection("users")
  //     .find({})
  //     .sort({ metacritic: -1 })
  //     .limit(20)
  //     .toArray();
  //   res.json(users);
};
