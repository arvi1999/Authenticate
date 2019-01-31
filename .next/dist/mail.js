"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/jerry/img/mail.js";

var Email = {
  send: function send(a) {
    return new _promise2.default(function (n, e) {
      a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send";
      var t = (0, _stringify2.default)(a);
      Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) {
        n(e);
      });
    });
  },
  ajaxPost: function ajaxPost(e, n, t) {
    var a = Email.createCORSRequest("POST", e);
    a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () {
      var e = a.responseText;
      null != t && t(e);
    }, a.send(n);
  },
  ajax: function ajax(e, n) {
    var t = Email.createCORSRequest("GET", e);
    t.onload = function () {
      var e = t.responseText;
      null != n && n(e);
    }, t.send();
  },
  createCORSRequest: function createCORSRequest(e, n) {
    var t = new XMLHttpRequest();
    return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest()).open(e, n) : t = null, t;
  }
};

exports.default = function (name, email, OTP) {
  return Email.send({
    Host: "smtp.gmail.com",
    Username: "XXXXXXXXXXXx@gmail.com",
    Password: "XXXXXXXXXXX",
    To: email,
    From: "XXXXXXXXX@gmail.com",
    Subject: "Blockchain-SCM",
    Html: _react2.default.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      }
    }, "SCM"),
    Body: "Hii, " + name + " Welcome to Blockchain based SCM technology, your One Time Password is: " + OTP
  }).then(function (message) {
    return console.log(message);
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haWwuanMiXSwibmFtZXMiOlsiRW1haWwiLCJzZW5kIiwiYSIsIm4iLCJlIiwibm9jYWNoZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIkFjdGlvbiIsInQiLCJhamF4UG9zdCIsImNyZWF0ZUNPUlNSZXF1ZXN0Iiwic2V0UmVxdWVzdEhlYWRlciIsIm9ubG9hZCIsInJlc3BvbnNlVGV4dCIsImFqYXgiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJYRG9tYWluUmVxdWVzdCIsIm5hbWUiLCJlbWFpbCIsIk9UUCIsIkhvc3QiLCJVc2VybmFtZSIsIlBhc3N3b3JkIiwiVG8iLCJGcm9tIiwiU3ViamVjdCIsIkh0bWwiLCJCb2R5IiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSTtRQUNJLGNBQUEsQUFBUyxHQUFHLEFBQ2hCO2lDQUFtQixVQUFBLEFBQVMsR0FBVCxBQUFZLEdBQUcsQUFDL0I7UUFBQSxBQUFFLFVBQVUsS0FBQSxBQUFLLE1BQU0sTUFBTSxLQUFOLEFBQU0sQUFBSyxXQUFuQyxBQUFhLEFBQWlDLElBQzNDLEVBQUEsQUFBRSxTQURMLEFBQ2MsQUFDZDtVQUFJLElBQUkseUJBQVIsQUFBUSxBQUFlLEFBQ3ZCO1lBQUEsQUFBTSxTQUFOLEFBQ0Usc0NBREYsQUFFRSxHQUNBLFVBQUEsQUFBUyxHQUFHLEFBQ1Y7VUFBQSxBQUFFLEFBQ0g7QUFMSCxBQU9EO0FBWEQsQUFBTyxBQVlSLEtBWlE7QUFGQyxBQWVWO1lBQVUsa0JBQUEsQUFBUyxHQUFULEFBQVksR0FBWixBQUFlLEdBQUcsQUFDMUI7UUFBSSxJQUFJLE1BQUEsQUFBTSxrQkFBTixBQUF3QixRQUFoQyxBQUFRLEFBQWdDLEFBQ3hDO01BQUEsQUFBRSxpQkFBRixBQUNFLGdCQURGLEFBRUUsc0NBRUMsRUFBQSxBQUFFLFNBQVMsWUFBVyxBQUNyQjtVQUFJLElBQUksRUFBUixBQUFVLEFBQ1Y7Y0FBQSxBQUFRLEtBQUssRUFBYixBQUFhLEFBQUUsQUFDaEI7QUFQSCxPQVFFLEVBQUEsQUFBRSxLQVJKLEFBUUUsQUFBTyxBQUNWO0FBMUJTLEFBMkJWO1FBQU0sY0FBQSxBQUFTLEdBQVQsQUFBWSxHQUFHLEFBQ25CO1FBQUksSUFBSSxNQUFBLEFBQU0sa0JBQU4sQUFBd0IsT0FBaEMsQUFBUSxBQUErQixBQUN0QztNQUFBLEFBQUUsU0FBUyxZQUFXLEFBQ3JCO1VBQUksSUFBSSxFQUFSLEFBQVUsQUFDVjtjQUFBLEFBQVEsS0FBSyxFQUFiLEFBQWEsQUFBRSxBQUNoQjtBQUhELE9BSUUsRUFKRixBQUlFLEFBQUUsQUFDTDtBQWxDUyxBQW1DVjtxQkFBbUIsMkJBQUEsQUFBUyxHQUFULEFBQVksR0FBRyxBQUNoQztRQUFJLElBQUksSUFBUixBQUFRLEFBQUksQUFDWjtXQUNFLHFCQUFBLEFBQXFCLElBQ2pCLEVBQUEsQUFBRSxLQUFGLEFBQU8sR0FBUCxBQUFVLEdBQUcsQ0FEakIsQUFDSSxBQUFjLEtBQ2QsZUFBZSxPQUFmLEFBQXNCLGlCQUN0QixDQUFDLElBQUksSUFBTCxBQUFLLEFBQUksa0JBQVQsQUFBMkIsS0FBM0IsQUFBZ0MsR0FEaEMsQUFDQSxBQUFtQyxLQUNsQyxJQUpMLEFBSVMsTUFMWCxBQU1FLEFBRUg7QUE3Q0gsQUFBWSxBQWdEWjtBQWhEWSxBQUNWOztrQkErQ2EsVUFBQSxBQUFDLE1BQUQsQUFBTyxPQUFQLEFBQWMsS0FBUSxBQUNuQztlQUNFLEFBQU07VUFBSyxBQUNILEFBQ047Y0FGUyxBQUVDLEFBQ1Y7Y0FIUyxBQUdDLEFBQ1Y7UUFKUyxBQUlMLEFBQ0o7VUFMUyxBQUtILEFBQ047YUFOUyxBQU1BLEFBQ1Q7MEJBQUssY0FBQTs7a0JBQUE7b0JBQUE7QUFBQTtBQUFBLEtBQUEsRUFQSSxBQU9KLEFBQ0w7VUFDRSxVQUFBLEFBQ0EsT0FEQSxBQUVBLDZFQVhKLEFBQVcsQUFZUDtBQVpPLEFBQ1QsR0FERixFQUFBLEFBYUcsS0FBSyxtQkFBQTtXQUFXLFFBQUEsQUFBUSxJQUFuQixBQUFXLEFBQVk7QUFkakMsQUFDRSxBQWVIO0FBakJEIiwiZmlsZSI6Im1haWwuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvamVycnkvaW1nIn0=