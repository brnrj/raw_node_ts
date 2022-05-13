import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post('/credit', (req, res) => {
  const { money } = req.body;
  return res.json({ money })
})

app.listen(3333, () => console.log("Server On!"));
