import express from "express";
const router = express.Router();

// importar modelos
import Area from "../models/area";

// Middlewares
const {verificarAuth, verificarAdministrador} = require('../middlewares/autenticacion');

// Agregar una nota
router.post("/nueva-area", [verificarAuth, verificarAdministrador], async (req, res) => {
  const body = req.body;

  body.usuarioId = req.usuario._id;

  try {
    const areaDB = await Area.create(body);
    res.status(200).json(areaDB);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Error al crear area",
      error,
    });
  }
});

// Get con parámetros
router.get("/area/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const areaDB = await Area.findOne({ _id });
    res.json(areaDB);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error
    });
  }
});

// Get con todos los documentos
router.get("/area", verificarAuth, async (req, res) => {

  const usuarioId = req.usuario._id

  try {
    const areaDb = await Area.find({usuarioId});
    res.json(areaDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error
    });
  }
});

// Delete eliminar una nota
router.delete("/area/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const areaDb = await Area.findByIdAndDelete({ _id });
    if (!areaDb) {
      return res.status(400).json({
        mensaje: "No se encontró el id indicado",
        error,
      });
    }
    res.json(areaDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// Put actualizar una nota
router.put("area/:id", async (req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    const areaDb = await Area.findByIdAndUpdate(_id, body, { new: true });
    res.json(areaDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// Exportamos la configuración de express app
module.exports = router;
