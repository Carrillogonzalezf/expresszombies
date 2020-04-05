var mongoose = require('mongoose');

var modelSchema = mongoose.Schema({
    flavor: {
        type: String,
        minlength: [3, "El nombre del ssabor es muy corte, debe de ser de almenos 3 caracteres."],
        maxlength: [20, "El nombre del sabor es muy largo."]
    },
    description: {
        type: String,
        minlength: [6, "La descripcion es muy corta, debe de ser de almenos 6 caracteres."],
    },
    iq: {
        type: Number,
        required: true,
        min: [20, "Nadie tiene tan poco IQ."],
        max:[200, "Nadie tiene tanto IQ."]
    },
    picture: {
        type: String,
        required: true
    }
})

var Cerebro = mongoose.model("Cerebro", modelSchema)
module.exports = Cerebro;