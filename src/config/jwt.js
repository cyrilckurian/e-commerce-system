module.exports = {
	secret: process.env.JWT_SECRET || 'yourSecretKeyHere',
	expiresIn: '1d', // JWT expiration time
  };
  