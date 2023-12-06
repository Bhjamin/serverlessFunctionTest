const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors);

app.get("/", (req, res) => {
  let message = "Yay you got a response!";

  res.status(200).send(message);
});
