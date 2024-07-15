const express = require('express');
const MongoConnection = require('./Config/AuthDBConnection');
const AuthRouter = require('./Routes/user_auth_routes')

const connection = MongoConnection();

if (connection) {
  const user_auth = express();

  user_auth.use('/UserAuth', AuthRouter)

  user_auth.listen(3000, () => { console.log('The Server is listening to the PORT 5050') })

}