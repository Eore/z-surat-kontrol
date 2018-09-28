let con = require("../lib/database");
let model = require("../model/suratKontrol");
let cetakSurat = require("../lib/cetakSurat");

let bulan = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember"
];

module.exports = (req, res) => {
  model(con);

  con.query(
    "select * from suratKontrol order by nomorSurat desc limit 50",
    (err, val) => {
      res.json(val);
    }
  );
};
