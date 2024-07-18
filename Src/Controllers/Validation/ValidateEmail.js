const mongoose = require('mongoose');
const User_Auth_Model = require('../../Model/Schemas/user_auth');

async function ValidateEmail(req, res) {
  let user;
  const payload = req.body;
  const email = payload.email;
  try {
    user = await User_Auth_Model.find({ email });
  } catch (err) {
    console.log(err);
  } finally {

    res.json({ value: !(user.length === 0) })
  }
}

module.exports = ValidateEmail;