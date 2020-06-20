const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
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
        maxlength: 14
    },
    endereco: {
        cidade: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 100
        },
        estado: {
            type: String,
            required: true,
            minlength: 2,
            maxlength: 2,
            uppercase: true
        },
    },
    beneficiosEscolhidos: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    },
});

mongoose.model('Empresa', UserSchema);