module.exports = connection => {
  connection.query(`
    create table if not exists suratKontrol (
      nomorSurat varchar(15) not null primary key,
      nomorRekamMedis varchar(10) not null,
      nama varchar(30) not null,
      alamat text,
      diagnosis text,
      terapi text,
      tanggalKontrol date,
      dokter varchar(30)
    )
  `);
};
