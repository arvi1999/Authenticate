const routes = require("next-routes")();

routes
  .add("/users/:address", "/users/userdetails")
  .add("/password/update", "/password/update")
  .add("/users/:email/:address/deleteaccount", "/users/deleteaccount")
  .add("/password/:email/:address", "/password/new");

module.exports = routes;
