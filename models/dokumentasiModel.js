const db = require("./db");


// Mendapatkan semua histori dengan dokumentasi
const getAllHistoriWithDokumentasi = () => {
  return db.query(`
    SELECT h.*, d.path AS dokumentasi_path
    FROM histori h
    LEFT JOIN dokumentasi d ON h.id = d.histori_id
  `);
};

// Mendapatkan histori berdasarkan ID dengan dokumentasi
const getHistoriByIdWithDokumentasi = (id) => {
  return db.query(`
    SELECT h.*, d.path AS dokumentasi_path
    FROM histori h
    LEFT JOIN dokumentasi d ON h.id = d.histori_id
    WHERE h.id = ?
  `, [id]);
};


// Mendapatkan semua dokumentasi
const getAllDokumentasi = () => {
  return db.query("SELECT * FROM dokumentasi");
};

// Mendapatkan dokumentasi berdasarkan ID
const getDokumentasiById = (id) => {
  return db.query("SELECT * FROM dokumentasi WHERE id = ?", [id]);
};

// Menambahkan dokumentasi baru
const createDokumentasi = (histori_id, path) => {
  return db.query("INSERT INTO dokumentasi (histori_id, path) VALUES (?, ?)", [histori_id, path]);
};

// Memperbarui dokumentasi berdasarkan ID
const updateDokumentasiById = (id, histori_id, path) => {
  return db.query("UPDATE dokumentasi SET histori_id = ?, path = ? WHERE id = ?", [histori_id, path, id]);
};

// Menghapus dokumentasi berdasarkan ID
const deleteDokumentasiById = (id) => {
  return db.query("DELETE FROM dokumentasi WHERE id = ?", [id]);
};

module.exports = {
  getAllDokumentasi,
  getDokumentasiById,
  getAllHistoriWithDokumentasi,
  getHistoriByIdWithDokumentasi,
  createDokumentasi,
  updateDokumentasiById,
  deleteDokumentasiById,
};
