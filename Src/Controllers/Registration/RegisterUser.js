
const EncryptPassword = require('../../Helper/EncryptPassword')
const StoreUserData = require('../../Model/DB/StoreUserData')
// Main Controller Function
const RegisterUser = async (req, res) => {


  const payload = req.body;

  const pass = await EncryptPassword(payload.password);

  const UserRegistrationParams = {
    name: payload.name,
    email: payload.email,
    password: pass,
  }

  try {
    await StoreUserData(UserRegistrationParams);
  } catch (err) {
    console.log(err);
  } finally {
    res.json({ message: 'User Stored in DB' })
  }

}

module.exports = RegisterUser;