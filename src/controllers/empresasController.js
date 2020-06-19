const mongoose = require('mongoose');
const Empresa = mongoose.model('Empresas');

module.exports = {
    async insert ( req, res){
        const empresas = await Empresa.create(req.body);
        return res.json(empresas);
    }
}