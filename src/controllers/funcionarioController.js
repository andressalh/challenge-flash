const express = require('express');
const Funcionario = require('../models/funcionario');
const router = express.Router();

router.post('/create', async(req,res) => {
    const { cpf } = req.body;

    try{
        if ( await Funcionario.findOne( { cpf } ))
            return res.status(400).send({error: 'Funcionário já existe'});
        
        const funcionario = await Funcionario.create(req.body);
        return res.send({ funcionario});
    } catch( err){
        return res.status(400).send({ error: 'Registration failed' });
    }
});

module.exports = app => app.use('/funcionario', router);
