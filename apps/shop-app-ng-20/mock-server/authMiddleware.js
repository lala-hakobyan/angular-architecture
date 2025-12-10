// authMiddleware.js
const testAccessToken = 'f9a8d7c6b5e4f3a2d1c0b9e8f7a6d5c4e3f2a1b0';

function checkAccessToken(req, res, next) {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token missing or invalid' });
  }

  const token = authHeader.split(' ')[1];
  if (token !== testAccessToken) {
    return res.status(401).json({ error: 'Token invalid' });
  }

  // Token is valid, continue to next middleware / route handler
  next();
}

module.exports = checkAccessToken;
