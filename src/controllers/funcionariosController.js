const mongoose = require('mongoose');
const Funcionario = mongoose.model('Funcionario');

module.exports = {
    async insert ( req, res){
        const funcionario = await Funcionario.create(req.body);
        return res.json(funcionario);
    }
}