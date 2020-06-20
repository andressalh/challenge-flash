const mongoose = require('../database');

const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100,
        lowercase: true
    },
    nomeFantasia: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    },
    cnpj: {
        type: Number,
        required: true,
        unique:true,
        min: 1,
        maxlength: 14,

    },
    endereco: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    },
    cidade: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30
    },
    estado: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 2,
        uppercase: true
    },
    beneficiosEscolhidos: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    },
});

const Empresa = mongoose.model('Empresa', UserSchema);
module.exports = Empresa;