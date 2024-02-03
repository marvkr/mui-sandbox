import express from "express";
import cors from "cors";

const app = express();

// "cross origin ressource sharing" for frontend app to make request to the server from a ≠ url
app.use(cors());

// middleware that automatically parse json sent to the server
app.use(express.json());

// Make some animals
import Chance from "chance";
const chance = new Chance();

const animals = [...Array(250).keys()].map((id) => {
  return {
    id,
    type: chance.animal(),
    age: chance.age(),
    name: chance.name(),
  };
});

// Endpoint to search for animals
app.get("", (req, res) => {
  // Filter results by query
  const q = req.query.q?.toLowerCase() || "";
  const results = animals.filter((animal) =>
    animal.type.toLowerCase().includes(q)
  );

  res.send(results);
});

app.listen(8080, () => console.log("listening on port http://localhost:8080"));
