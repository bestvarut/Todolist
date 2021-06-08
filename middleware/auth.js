const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcryptjs');

module.exports = function(req, res, next) {
  //Get token from header
  const token = req.header('x-auth-token');

  //Check is not token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    req.user = decoded.user;
    next();
  } catch (err) {
    return res.status(401).json({ msg: 'token is not valid' });
  }
};
