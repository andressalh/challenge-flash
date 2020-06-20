const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    },
    sobrenome: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    },
    cpf: {
        type: Number,
        required: true,
        unique:true,
        min: 11,
        maxlength: 11
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    empresa: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    },
});

const Funcionario = mongoose.model('Funcionario', UserSchema);
module.exports = Funcionario;