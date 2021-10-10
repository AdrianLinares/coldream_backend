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

let verificarAdministrador = (req, res, next) => {

  let role = req.usuario.role;

  console.log(role);
  
  if(role !== 'ADMIN'){
    return res.status(401).json({
      mensaje: 'Rol no autorizado!'
    })
  }
  
  next();

}

module.exports = {verificarAuth, verificarAdministrador};