const routes = require("next-routes")();

routes

  .add("/password/:otp/verify", "/password/verify")
  .add("/users/:address", "/users/userdetails")
  .add("/password/update", "/password/update")
  .add("/users/:email/:address/deleteaccount", "/users/deleteaccount")
  .add("/password/:email/:address", "/password/new");

module.exports = routes;
