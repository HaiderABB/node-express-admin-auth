
const ValidateEmail = require('../Validation/ValidateEmail');

async function UpdateUserPassword(req, res) {


  const flag = await ValidateEmail(email);



}

module.exports = UpdateUserPassword;