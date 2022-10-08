const express = require("express");
const path = require("path");
// const fs = require("fs");
const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  //   res.send("This is about page.");
  res.sendFile(path.join(__dirname, "index.html"));
  res.json({ name: "ash" });
});

// app.get("/html", (req, res) => {
//   const data = fs.readFileSync("index.html");
//   res.send(data.toString());
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
