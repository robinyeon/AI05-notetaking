const express = require("express");
require("dotenv").config();
const app = express();

app.get("", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}🫧`);
  console.log("dirname: ", __dirname);
  console.log("filename: ", __filename);
});
