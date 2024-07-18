const mongoose = require('mongoose');
const User_Auth_Model = require('../Model/Schemas/user_auth');

async function ValidateEmail(email) {
  let user;
  try {
    user = await User_Auth_Model.find({ email });
  } catch (err) {
    console.log(err);
  } finally {
    if (user.length === 0)
      return false;
    else
      return true;
  }
}

module.exports = ValidateEmail;