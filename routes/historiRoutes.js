const express = require("express");
const router = express.Router();
const historiModel = require("../models/historiModel");

// Mendapatkan semua histori dengan dokumentasi
router.get("/", async (req, res) => {
  try {
    const results = await historiModel.getAllHistoriWithDokumentasi();
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Mendapatkan histori berdasarkan ID dengan dokumentasi
router.get("/:id", async (req, res) => {
  const historiId = req.params.id;
  try {
    const result = await historiModel.getHistoriByIdWithDokumentasi(historiId);
    if (!result) {
      return res.status(404).json({ error: "Histori not found" });
    }
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
