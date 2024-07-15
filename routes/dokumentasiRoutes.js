const express = require("express");
const router = express.Router();
const dokumentasiModel = require("../models/dokumentasiModel");

// Get all dokumentasi
router.get("/", async (req, res) => {
  try {
    const [results] = await dokumentasiModel.getAllDokumentasi();
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get dokumentasi by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [results] = await dokumentasiModel.getDokumentasiById(id);
    if (results.length === 0) return res.status(404).json({ error: "Dokumentasi not found" });
    res.json(results[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create new dokumentasi
router.post("/", async (req, res) => {
  const { histori_id, path } = req.body;
  try {
    const [result] = await dokumentasiModel.createDokumentasi(histori_id, path);
    res.status(201).json({ id: result.insertId, histori_id, path });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update dokumentasi by ID
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { histori_id, path } = req.body;
  try {
    await dokumentasiModel.updateDokumentasiById(id, histori_id, path);
    res.json({ id, histori_id, path });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete dokumentasi by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await dokumentasiModel.deleteDokumentasiById(id);
    res.json({ message: "Dokumentasi deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
