import mongoose from "mongoose";
const Schema = mongoose.Schema;

const areaSchema = new Schema({

    nombre: { type: String, required: [true, "Nombre obligatorio"] },
    docente: { type: String },
    usuarioId: { type: String },
    date: { type: Date, default: Date.now },
    activo: { type: Boolean, default: true },

});

// Convertir a modelo
const Area = mongoose.model("Area", areaSchema);

export default Area;