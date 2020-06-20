const express = require('express');
const Empresa = require('../models/empresa');
const router = express.Router();

router.post('/create', async(req,res) => {
    const { cnpj } = req.body;

    try{
        if ( await Empresa.findOne( { cnpj } ))
            return res.status(400).send({error: 'Empresa já existe'});
        
        const empresa = await Empresa.create(req.body);
        return res.send({ empresa});
    } catch( err){
        return res.status(400).send({ error: 'Registration failed' });
    }
});

module.exports = app => app.use('/empresa', router);
