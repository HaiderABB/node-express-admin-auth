const ValidateEmail = require('../../Middlewares/Validation/ValidateEmail')
const DecryptPassword = require('../../Middlewares/Encryption/DecryptPassword')

async function UserAuthentication(req, res) {

  const { email, password } = req.body;

  const emailValidation = await ValidateEmail(email);

  if (emailValidation.value) {

    const flag = await DecryptPassword(password, emailValidation.user[0].password);

    if (flag) {
      res.status(200).json({ message: 'Login Successful', Email: true, Password: true });
    }
    else {
      res.status(400).json({ message: "Password Invalid", Email: true, Password: false });
    }

  }
  else if (!emailValidation.value.length) {
    res.status(400).json({ message: "Email Invalid", Email: false, Password: false });
  }


}
module.exports = UserAuthentication;