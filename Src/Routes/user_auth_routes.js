const express = require('express');
const AuthRouter = express.Router();
const UserAuthentication = require('../Controllers/Auth/UserAuthentication')
const RegisterUser = require('../Controllers/Registration/RegisterUser')
const ForgotPassword = require('../Controllers/Update/ForgotUserPassword')
const UpdateUserPassword = require('../Controllers/Update/UpdateUserPassword')

// Validate/Authenticate User 
AuthRouter.get('/Authentication', UserAuthentication);

// SignUp/Register New User
AuthRouter.post('/Registration', RegisterUser);

// Apply for Update User Password 
AuthRouter.get('/Forgot', ForgotPassword);

// Update User Password
AuthRouter.post('/Update', UpdateUserPassword)



module.exports = AuthRouter;