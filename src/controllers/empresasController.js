const mongoose = require('mongoose');
const Empresa = mongoose.model('Empresa');

module.exports = {
    async insert ( req, res){
        const empresas = await Empresa.create(req.body);
        return res.json(empresas);
    }
}