import mongoose from "mongoose";
const Schema = mongoose.Schema;

const registroSchema = new Schema({

    nombres: { type: String, required: [true, "Dato Obligatorio"] },
    apellidos: { type: String, required: [true, "Dato Obligatorio"] },
    telefono: { type: String, required: [true, "Dato Obligatorio"] },
    correo: { type: String, required: [true, "Dato Obligatorio"] },
    ciudad: { type: String },
    pais: { type: String },
    usuarioId: { type: String },
    date: { type: Date, default: Date.now },
    activo: { type: Boolean, default: true },

});

// Convertir a modelo
const Registro = mongoose.model("Registro", registroSchema);

export default Registro;