const mongoose = require('mongoose');
const User_Auth_Schema = require('../Schemas/user_auth');

async function StoreUserData(data) {


  try {
    const user = new User_Auth_Schema(data);
    await user.save();
  } catch (err) {
    console.log(err);
  }
  finally {
    console.log('User Stored in the database')
  }

}


module.exports = StoreUserData;