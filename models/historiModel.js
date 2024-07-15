const db = require("./db");

// Mendapatkan semua histori dengan dokumentasi
const getAllHistoriWithDokumentasi = async () => {
  const query = `
    SELECT
      h.id AS histori_id,
      h.waktu_kejadian,
      h.waktu_asesmen,
      h.waktu_laporan,
      h.waktu_tiba,
      h.jenis_kejadian,
      h.lokasi,
      h.koordinat,
      h.meninggal,
      h.luka_berat,
      h.luka_ringan,
      h.korban,
      h.perkiraan_kerugian,
      h.keterangan,
      h.level,
      d.path AS dokumentasi_path
    FROM
      histori h
    LEFT JOIN
      dokumentasi d
    ON
      h.id = d.histori_id;
  `;

  const [rows] = await db.query(query);
  return rows;
};

// Mendapatkan histori berdasarkan ID dengan dokumentasi
const getHistoriByIdWithDokumentasi = async (id) => {
  const query = `
    SELECT
      h.id AS histori_id,
      h.waktu_kejadian,
      h.waktu_asesmen,
      h.waktu_laporan,
      h.waktu_tiba,
      h.jenis_kejadian,
      h.lokasi,
      h.koordinat,
      h.meninggal,
      h.luka_berat,
      h.luka_ringan,
      h.korban,
      h.perkiraan_kerugian,
      h.keterangan,
      h.level,
      d.path AS dokumentasi_path
    FROM
      histori h
    LEFT JOIN
      dokumentasi d
    ON
      h.id = d.histori_id
    WHERE
      h.id = ?;
  `;

  const [rows] = await db.query(query, [id]);
  return rows[0]; // Mengembalikan satu objek
};

module.exports = {
  getAllHistoriWithDokumentasi,
  getHistoriByIdWithDokumentasi,
};
