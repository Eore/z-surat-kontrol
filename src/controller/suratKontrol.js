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
    "select * from suratKontrol where ?",
    {
      nomorSurat: req.params.nomor.replace(/\-/g, "/")
    },
    (err, val) => {
      let date = new Date();
      let tanggalKontrol = val[0].tanggalKontrol
        ? new Date(val[0].tanggalKontrol)
        : null;
      cetakSurat({
        nomorSurat: val[0].nomorSurat,
        nama: val[0].nama,
        alamat: val[0].alamat,
        diagnosis: val[0].diagnosis,
        terapi: val[0].terapi,
        dokter: val[0].dokter,
        jadwalKontrol: `${tanggalKontrol.getDate()} ${
          bulan[tanggalKontrol.getMonth()]
        } ${tanggalKontrol.getFullYear()}`,
        tanggal: `${date.getDate()} ${
          bulan[date.getMonth()]
        } ${date.getFullYear()}`,
        rujuk: val[0].rujuk
      }).then(stream => stream.pipe(res));
    }
  );
};
