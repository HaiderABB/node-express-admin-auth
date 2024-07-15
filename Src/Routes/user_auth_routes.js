const express = require('express');
const AuthRouter = express.Router();
const UserAuthentication = require('../Controllers/UserAuthentication')

// Validate/Authenticate User 
AuthRouter.get('/Authentication', UserAuthentication);

// SignUp/Register New User
AuthRouter.post('/Registration');

// Reset User Password 
AuthRouter.put('/Reset');

module.exports = AuthRouter;