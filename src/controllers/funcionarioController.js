const express = require('express');
const Funcionario = require('../models/funcionario');
const router = express.Router();

router.post('/create', async(req,res) => {
    const { cpf } = req.body;

    try{
        if ( await Funcionario.findOne( { cpf } ))
            return res.status(400).send({error: 'Cpf do funcionário já cadastrado'});
        
        const id = '5eefd85b8a2bca227070f1a0';
        const funcionario = await Funcionario.create({ ...req.body, empresa: id } );
        return res.send({ funcionario});
    } catch( err){
        return res.status(400).send({ error: 'Registration failed' });
    }
});

router.get('/:empresaId', async(req,res) => {

    var query = { empresa: req.params.empresaId}
    try{
        const funcionario = await Funcionario.find(query).populate('empresa');
        return res.send({ funcionario});
    } catch( err){
        return res.status(400).send({ error: 'Funcionario não encontrada' });
    }
});



router.get('/', async(req,res) => {
    try{
        const funcionario = await Funcionario.find().populate('empresa');
        return res.send({ funcionario});
    } catch( err){
        return res.status(400).send({ error: 'Funcionario não encontrada' });
    }
});


module.exports = app => app.use('/funcionarios', router);
