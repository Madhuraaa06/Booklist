const jwt = require('jsonwebtoken');
const jwt_secret = 'thisismyc0d#';

const fetchuser = (req, res, next) => {
  const token = req.header('auth-token');

  if (!token) {
    return res.status(401).json({ error: 'Please authenticate using a valid token' });
  }

  try {
    const data = jwt.verify(token, jwt_secret);
    req.user = data.user;
    next();
  } catch (error) {
    console.error('Error verifying token:', error.message);
    return res.status(401).json({ error: `Invalid token. ${error.message}` });
  }
};

module.exports = fetchuser;
