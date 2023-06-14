const express = require("express");
const data = require("./data");
const res = require("express/lib/response");

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/products", (req, res) => {
  res.json({ data });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
