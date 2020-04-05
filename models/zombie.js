var mongoose = require('mongoose');

/*var modelSchema = mongoose.Schema({
    name: String,
    email: String,
    type: String
})*/

var modelSchema = mongoose.Schema({
    name: {
        type: String,
        minlength: [4, "El nombre es muy corto, debe de ser de almenos 4 caracteres."],
        maxlength: [25, "El nombre es muy largo."]
    },
    email: {
        type: String,
        required: [true, "Es necesario llenar el correo-"],
        unique: true
    },
    type: {
        type: String,
        enum: ["Alumno zombie", "Profesor zombie"]
    }
});

var Zombie = mongoose.model("Zombie", modelSchema)
module.exports = Zombie;