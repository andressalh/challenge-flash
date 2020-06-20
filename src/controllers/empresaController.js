const express = require('express');
const Empresa = require('../models/empresa');
const Funcionario = require('../models/funcionario');
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


router.get('/', async(req,res) => {
    try{
        const empresa = await Empresa.find();
        return res.send({ empresa});
    } catch( err){
        return res.status(400).send({ error: 'Empresa não encontrada' });
    }
});

router.get('/:empresaId', async(req,res) => {

    try{
        const empresa = await Empresa.findById(req.params.empresaId);
        return res.send({ empresa});
    } catch( err){
        return res.status(400).send({ error: 'Empresa não encontrada' });
    }
});
module.exports = app => app.use('/empresa', router);
