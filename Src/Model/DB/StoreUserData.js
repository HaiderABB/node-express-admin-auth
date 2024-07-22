const mongoose = require('mongoose');
const User_Auth_Model = require('../Schemas/user_auth');

async function StoreUserData(data) {
  try {
    const user = new User_Auth_Model(data);
    // console.log(user);
    await user.save();
  } catch (err) {
    console.log(err);
  }

}


module.exports = StoreUserData;