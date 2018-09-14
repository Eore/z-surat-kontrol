let express = require("express");
let bodyParser = require("body-parser");
let app = express();

let port = process.env.PORT || 3000;

module.exports = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.get("/", (req, res) =>
    res.sendFile(process.cwd() + "/src/template/home.html")
  );
  app.get("/getdata", require("../controller/getData"));
  app.post("/input", require("../controller/input"));
  app.get("/suratkontrol/:nomor", require("../controller/suratKontrol"));
  app.listen(port, () => console.log(`HTTP server berjalan di port ${port}`));
};
