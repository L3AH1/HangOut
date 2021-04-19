import { connectToDatabase } from "../../../util/mongodb";

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
        }
        // En cas d'un seul utilisateur trouvé
        else {
          res.json({ user: users[0] });
        }
      });
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
