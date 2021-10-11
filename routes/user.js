var express = require('express');
var router = express.Router();

// Importamos modelo User
import User from '../models/user';

const {verificarAuth, verificarAdministrador} = require('../middlewares/autenticacion.js');

// Hash Contraseña
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Filtrar campos de PUT
const _ = require('underscore');

//POST
router.post('/nuevo-usuario', async (req, res) => {

  const body = {
    nombre: req.body.nombre,
    email: req.body.email,
    role: req.body.role
  }

  body.pass = bcrypt.hashSync(req.body.pass, saltRounds);

  try {

    const usuarioDB = await User.create(body);
    return res.json(usuarioDB);
    
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error
    });
  }

});

//PUT
router.put('/usuario/:id', [verificarAuth, verificarAdministrador], async(req, res) => {

  const _id = req.params.id;
  const body = _.pick(req.body, ['nombre', 'email', 'pass', 'activo']);

  if(body.pass){
    body.pass = bcrypt.hashSync(req.body.pass, saltRounds);
  }

  try {
    // {new:true} nos devuelve el usuario actualizado
    const usuarioDB = await User.findByIdAndUpdate(_id, body, {new: true, runValidators: true});

    return res.json(usuarioDB);

  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }

});

router.delete('/usuario/:id', async(req, res) => {

  const id = req.params.id;

  try {
    const usuarioDelete = await User.findByIdAndRemove(id);

    if(!usuarioDelete){
      return res.status(400).json({
        mensaje: 'Usuario no encontrado'
      })
    }

    return res.json(usuarioDelete);
    
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }

});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



module.exports = router;