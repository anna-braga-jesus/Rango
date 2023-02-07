import express from "express";

const app = express();

app
  .use(express.json())
  .get("/health", (req, res) => {
    res.send("ok")
  });

const port = process.env.PORT || 4003;

app.listen(port, () => {
  console.log(`Magic happens on: ${port}`);
});
