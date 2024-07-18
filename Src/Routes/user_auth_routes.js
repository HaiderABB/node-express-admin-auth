const express = require('express');
const AuthRouter = express.Router();
const UserAuthentication = require('../Controllers/Auth/UserAuthentication')
const RegisterUser = require('../Controllers/Registration/RegisterUser')
const ValidateEmail = require('../Controllers/Validation/ValidateEmail');

// Validate/Authenticate User 
AuthRouter.get('/Authentication', UserAuthentication);

// SignUp/Register New User
AuthRouter.post('/Registration', RegisterUser);

// Reset User Password 
AuthRouter.put('/Forgot', ValidateEmail);

module.exports = AuthRouter;