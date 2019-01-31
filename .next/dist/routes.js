"use strict";

var routes = require("next-routes")();

routes.add("/password/:otp/verify", "/password/verify").add("/users/:address", "/users/userdetails").add("/password/update", "/password/update").add("/users/:email/:address/deleteaccount", "/users/deleteaccount").add("/password/:email/:address", "/password/new");

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUVHLEFBRkgsSUFFTyxBQUZQLHlCQUVnQyxBQUZoQyxvQkFHRyxBQUhILElBR08sQUFIUCxtQkFHMEIsQUFIMUIsc0JBSUcsQUFKSCxJQUlPLEFBSlAsb0JBSTJCLEFBSjNCLG9CQUtHLEFBTEgsSUFLTyxBQUxQLHdDQUsrQyxBQUwvQyx3QkFNRyxBQU5ILElBTU8sQUFOUCw2QkFNb0MsQUFOcEM7O0FBUUEsT0FBTyxBQUFQLFVBQWlCLEFBQWpCIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9qZXJyeS9pbWcifQ==