
const ValidateEmail = require('../../Helper/ValidateEmail');

async function UpdateUserPassword(req, res) {

  const payload = req.body;
  const email = payload.email;
  const flag = await ValidateEmail(email);
  res.json({ value: flag })

}

module.exports = UpdateUserPassword;