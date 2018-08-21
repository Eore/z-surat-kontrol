let fs = require("fs");
let pdf = require("html-pdf");
let ejs = require("ejs");

let logo = fs.readFileSync(
  process.cwd() + "/src/template/logo-mini.png",
  "base64"
);

module.exports = (
  data = {
    nomorSurat,
    tanggalShort,
    tanggal,
    nama,
    diagnosis,
    terapi,
    alamat,
    jadwalKontrol,
    dokter
  }
) =>
  new Promise((resolve, reject) => {
    ejs.renderFile(
      process.cwd() + "/src/template/surat-kontrol.ejs",
      { logo: "data:image/png;base64," + logo, ...data },
      (err, template) => {
        pdf
          .create(template, { format: "A5" })
          .toStream((err, stream) => resolve(stream));
      }
    );
  });
