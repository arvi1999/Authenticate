'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var crypto = require('crypto');

exports.default = function (hash) {
  return crypto.createHash('sha256').update(hash).digest('base64');
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYTI1Ni5qcyJdLCJuYW1lcyI6WyJjcnlwdG8iLCJyZXF1aXJlIiwiY3JlYXRlSGFzaCIsInVwZGF0ZSIsImhhc2giLCJkaWdlc3QiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBSSxTQUFTLEFBQVQsQUFBSixBQUVBOztrQkFBZSxnQkFBUSxBQUNyQjtTQUFPLE9BQU8sQUFBUCxXQUFrQixBQUFsQixVQUE0QixBQUE1QixPQUFtQyxBQUFuQyxNQUF5QyxBQUF6QyxPQUFnRCxBQUFoRCxBQUFQLEFBQ0Q7QUFGRCIsImZpbGUiOiJzaGEyNTYuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvamVycnkvaW1nIn0=