let con = require("../lib/database");
let model = require("../model/suratKontrol");

module.exports = (req, res) => {
  model(con);
  let date = new Date().toLocaleDateString("id", {
    month: "2-digit",
    year: "2-digit"
  });
  let partial = "ZNB/" + date.split("-").join("") + "/";
  con.query(
    `
    select 
    right(coalesce(max(nomorSurat), 0), 5) + 1 as result 
    from suratKontrol 
    where nomorSurat like ?
    `,
    partial + "%",
    (err, val) => {
      let num = "00000" + val[0].result.toString();
      con.query("insert into suratKontrol set ?", {
        nomorSurat: partial + num.substr(num.length - 5),
        ...req.body
      });
    }
  );
};
