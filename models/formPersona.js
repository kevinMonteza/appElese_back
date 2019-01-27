const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let formSchema = new Schema({
    nombreApellidos:{
        type: String,
        required: [true,"Nombre completo es requerido"]
    },
    dni:{
        type: String,
        required:[true,"El dni es requerido"]
    },
    celular:{
        type:Number
    },
    email:{
        type: String,
        required: [true,'El correo es requerido']
    },
    direccion:{
        type: String
    },
    departamento:{
        type: String,
        required: [true,"Departamento requerido"]
    },
    provincia:{
        type: String,
        required: [true, "Provincia requerida"]
    },
    distrito:{
        type: String,
        required: [true, "Distrito requerido"]
    },
    comentario:{
        type: String
    },
    estado:{
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model("FormPersona",formSchema);
