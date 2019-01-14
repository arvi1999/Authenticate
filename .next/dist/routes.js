'use strict';

var routes = require('next-routes')();

routes.add('/users/:address', '/users/userdetails').add('/password/update', '/password/update').add('/password/:email/:address', '/password/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNHLEFBREgsSUFDTyxBQURQLG1CQUN5QixBQUR6QixzQkFFRyxBQUZILElBRU8sQUFGUCxvQkFFMEIsQUFGMUIsb0JBR0csQUFISCxJQUdPLEFBSFAsNkJBR21DLEFBSG5DOztBQUtBLE9BQU8sQUFBUCxVQUFpQixBQUFqQiIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvamVycnkvaW1nIn0=