const routes = require('next-routes')();

routes
  .add('/users/:address','/users/userdetails')
  .add('/password/:address','/password/new');

module.exports = routes;
