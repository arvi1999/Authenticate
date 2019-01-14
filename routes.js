const routes = require('next-routes')();

routes
  .add('/users/:address','/users/userdetails')
  .add('/password/update','/password/update')
  .add('/password/:email/:address','/password/new');

module.exports = routes;
