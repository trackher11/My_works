const express = require("express");
const path = require("path");
// const fs = require("fs");
const app = express();
const port = 3000;

// const ashMiddleware = (req, res, next) => {
//   console.log("req: ", req);
//   next();
// };

app.use(express.static(path.join(__dirname, "public")));
// app.use(ashMiddleware);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/hello/:name", (req, res) => {
  res.send("Hello World! " + req.params.name);
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
