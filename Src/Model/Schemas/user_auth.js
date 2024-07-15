const mongoose = require('mongoose')

const { Schema } = mongoose;

const auth_schema = {
  email: String,
  password: String,
  name: String,
  user_id: String
}

const user_auth_schema = new Schema(auth_schema);

module.exports = user_auth_schema;