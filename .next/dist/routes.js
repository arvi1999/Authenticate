"use strict";

var routes = require("next-routes")();

routes.add("/users/:address", "/users/userdetails").add("/password/update", "/password/update").add("/users/:email/:address/deleteaccount", "/users/deleteaccount").add("/password/:email/:address", "/password/new");

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNHLEFBREgsSUFDTyxBQURQLG1CQUMwQixBQUQxQixzQkFFRyxBQUZILElBRU8sQUFGUCxvQkFFMkIsQUFGM0Isb0JBR0csQUFISCxJQUdPLEFBSFAsd0NBRytDLEFBSC9DLHdCQUlHLEFBSkgsSUFJTyxBQUpQLDZCQUlvQyxBQUpwQzs7QUFNQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2plcnJ5L2ltZyJ9