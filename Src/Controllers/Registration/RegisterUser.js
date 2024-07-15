
const EncryptPassword = require('../../Helper/EncryptPassword')

// Main Controller Function
const RegisterUser = async (req, res) => {

  console.log(req.body)

  const payload = req.body;

  const userRegistrationParams = {
    name: payload.Name,
    email: payload.Email,
    password: EncryptPassword(payload.Password),
  }


  res.json({ message: 'Achieved' })

}

module.exports = RegisterUser;