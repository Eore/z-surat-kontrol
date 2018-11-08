let con = require("../lib/database");
let model = require("../model/suratKontrol");

module.exports = (req, res) => {
  model(con);

  let { search } = req.query;

  con.query(
    `select * from suratKontrol ${
      search ? "where nomorRekamMedis like ?" : ""
    } order by nomorSurat desc limit 50`,
    search ? [`%${search}%`] : null,
    (err, val) => {
      res.json(val);
    }
  );
};
