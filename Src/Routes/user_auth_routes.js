const express = require('express');
const { Router } = require('express')
const AuthRouter = new Router();
const UserAuthentication = require('../Controllers/Auth/UserAuthentication')
const RegisterUser = require('../Controllers/Registration/RegisterUser')
const ForgotPassword = require('../Controllers/Update/ForgotUserPassword')
const UpdateUserPassword = require('../Controllers/Update/UpdateUserPassword')

// Validate/Authenticate User 
AuthRouter.get('/Authentication', UserAuthentication);

// SignUp/Register New User
AuthRouter.post('/Registration', RegisterUser);

// Apply for Update User Password 
AuthRouter.post('/Forgot', ForgotPassword);

// Update User Password
AuthRouter.put('/Forgot/Update', UpdateUserPassword)



module.exports = AuthRouter;