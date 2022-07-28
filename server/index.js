const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");
var Ppt2pdf = require('./lib/Ppt2pdf');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    multipleStatements: true,
    user: "root",
    host: "localhost",
    password: "",
    database: "gohoardi_goh",
  });

  /********************************************************/

  app.get("/test001", (req, res) => {
    db.query("SELECT * FROM tbl_permissions", function (err, result) {
        if (err) throw err;
        return res.send(result)
    })
  })

  app.get("/test005", (req, res) => {
    db.query("SELECT * FROM tbl_empty_permissions", function (err, result) {
        if (err) throw err;
        return res.send(result)
    })
  })

  /********************************************************/

  app.get("/test002", (req, res) => {
    Ppt2pdf.convert('./assets/ppt.ppt',null,function(error, result) {
      if (error) console.log(error);
      else console.log(result);
    });
  })

  /********************************************************/

  app.get("/", (req, res) => {
    res.send("Hello")
});

app.listen(3001, () => {
    console.log("Yey, your server is running on port 3001");
  });