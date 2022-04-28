
const express = require("express");
const cors=require("cors");
const app = express();
const bfhl = require("./bfhl");


const PORT = 8080;


const bodyParser = require("body-parser");

app.use(cors());



app.use(bodyParser.json());



app.get("/", (req, res) => {
  res.send("Hello World");
});


app.use("/bfhl", bfhl);




app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});



module.exports = app;
