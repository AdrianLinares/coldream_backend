const jwt = require('jsonwebtoken');

const verificarAuth = (req, res, next) => {

  // Leer headers
  const token = req.get('token');

  jwt.verify(token, 'secret', (err, decoded) => {

    if(err) {
      return res.status(401).json({
        mensaje: 'Error de token',
        
      })
    }

    // Creamos una nueva propiedad con la info del usuario
    req.usuario = decoded.data; //data viene al generar el token en login.js
    next();

  });

}

const verificarAdministrador = (req, res, next) => {

  const rol = req.usuario.role

  if(rol === 'ADMIN'){
    next();
  }else{
    return res.status(401).json({
      mensaje: 'Usuario no válido'
    })
  }

}

module.exports = {verificarAuth, verificarAdministrador};