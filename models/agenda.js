import mongoose from "mongoose";
const Schema = mongoose.Schema;

const agendaSchema = new Schema({

    fundacion: { type: String, required: [true, "Nombre obligatorio"] },
    fecha: { type: String },
    hora: { type: String },
    usuarioId: { type: String },
    date: { type: Date, default: Date.now },
    activo: { type: Boolean, default: true },

});

// Convertir a modelo
const Agenda = mongoose.model("Agenda", agendaSchema);

export default Agenda;