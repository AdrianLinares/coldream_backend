import express from "express";
const router = express.Router();

// importar modelo
import Registro from "../models/registro";

// Middlewares
const {verificarAuth, verificarAdministrador} = require('../middlewares/autenticacion');

// Agregar un registro
router.post("/nuevo-registro", [verificarAuth, verificarAdministrador], async (req, res) => {
  const body = req.body;

  body.usuarioId = req.usuario._id;

  try {
    const registroDB = await Registro.create(body);
    res.status(200).json(registroDB);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Error al crear registro",
      error,
    });
  }
});

// Get con parámetros
router.get("/registro/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const registroDB = await Registro.findOne({ _id });
    res.json(registroDB);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error
    });
  }
});

// Get con todos los documentos
router.get("/registro", verificarAuth, async (req, res) => {

  try {
    const registroDb = await Registro.find({usuarioId});
    res.json(registroDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error
    });
  }
});

// Delete eliminar un registro
router.delete("/registro/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const registroDb = await Registro.findByIdAndDelete({ _id });
    if (!registroDb) {
      return res.status(400).json({
        mensaje: "No se encontró el id indicado",
        error,
      });
    }
    res.json(registroDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// Put actualizar un registro
router.put("/registro/:id", async (req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    const registroDb = await Registro.findByIdAndUpdate(_id, body, { new: true });
    res.json(registroDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// Exportamos la configuración de express app
module.exports = router;
