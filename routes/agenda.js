import express from "express";
const router = express.Router();

// importar modelos
import Agenda from "../models/agenda";

// Middlewares
const {verificarAuth, verificarAdministrador} = require('../middlewares/autenticacion');

// Agregar una agenda
router.post("/nueva-agenda", [verificarAuth, verificarAdministrador], async (req, res) => {
  const body = req.body;

  body.usuarioId = req.usuario._id;

  try {
    const agendaDB = await Agenda.create(body);
    res.status(200).json(agendaDB);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Error al crear area",
      error,
    });
  }
});

// Get con parámetros
router.get("/agenda/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const agendaDB = await Agenda.findOne({ _id });
    res.json(agendaDB);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error
    });
  }
});

// Get con todos los documentos
router.get("/agenda", verificarAuth, async (req, res) => {

  const usuarioId = req.usuario._id

  try {
    const agendaDb = await Agenda.find({usuarioId});
    res.json(agendaDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error
    });
  }
});

// Delete eliminar una agenda
router.delete("/agenda/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const agendaDb = await Agenda.findByIdAndDelete({ _id });
    if (!agendaDb) {
      return res.status(400).json({
        mensaje: "No se encontró el id indicado",
        error,
      });
    }
    res.json(agendaDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// Put actualizar una agenda
router.put("agenda/:id", async (req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    const agendaDb = await Agenda.findByIdAndUpdate(_id, body, { new: true });
    res.json(agendaDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// Exportamos la configuración de express app
module.exports = router;
