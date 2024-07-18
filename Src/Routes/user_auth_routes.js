const express = require('express');
const AuthRouter = express.Router();
const UserAuthentication = require('../Controllers/Auth/UserAuthentication')
const RegisterUser = require('../Controllers/Registration/RegisterUser')
const UpdateUserPassword = require('../Controllers/Update/UpdateUserPassword');

// Validate/Authenticate User 
AuthRouter.get('/Authentication', UserAuthentication);

// SignUp/Register New User
AuthRouter.post('/Registration', RegisterUser);

// Reset User Password 
AuthRouter.put('/Reset', UpdateUserPassword);

module.exports = AuthRouter;