var mongoose = require('mongoose');

var modelSchema = mongoose.Schema({
    username: {
        type: String,
        minlength: [6, "El nombre es muy corto debe de ser de almenos 6 caracteres."],
        maxlength: [20, "El nombre es demasiado largo."]
    },
    password: {
        type: String
    },
    email: {
        type: String,
        required: [true, "Es necesario llenar el correo eletronico."]
    }
})

var Usuario = mongoose.model("Usuarios", modelSchema)
module.exports = Usuario;