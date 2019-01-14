"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _ipfs = require("../ipfs");

var _ipfs2 = _interopRequireDefault(_ipfs);

var _Layout = require("../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _Signup = require("../ethereum/Signup");

var _Signup2 = _interopRequireDefault(_Signup);

var _user = require("../ethereum/user");

var _user2 = _interopRequireDefault(_user);

var _web = require("../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _routes = require("../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/jerry/img/pages/login.js?entry";


var Login = function (_Component) {
  (0, _inherits3.default)(Login, _Component);

  function Login(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, Login);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Login.__proto__ || (0, _getPrototypeOf2.default)(Login)).call(this, props));

    _this.state = {
      email: "",
      password: "",
      errorMessage: "",
      loading: false
    };

    _this.onSubmit = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var value, key, pass, i, _this$state, email, password, reg, accounts, address, user, dob, summary;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                _this.setState({ errorMessage: "" });

                value = _this.state.password;
                key = [0, 7, 2, 8, 54, 5, 61, 47, 1, 9, 0, 112, 1762, 173, 14, 1455, 12786, 157, 18, 2, 20, 943021, 2432, 3223, 274, 2525, 2246, 23457, 2528, 2259, 3430, 3641];
                pass = "";

                for (i = 0; i < value.length; ++i) {
                  pass += String.fromCharCode(key[i % key.length] ^ value.charCodeAt(i));
                }

                _this$state = _this.state, email = _this$state.email, password = _this$state.password;
                reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

                if (!(email !== "" && pass !== "")) {
                  _context.next = 34;
                  break;
                }

                if (!(reg.test(_this.state.email) == true)) {
                  _context.next = 31;
                  break;
                }

                _this.setState({ loading: true });
                _context.next = 13;
                return new _web2.default.eth.getAccounts();

              case 13:
                accounts = _context.sent;
                _context.next = 16;
                return _Signup2.default.methods.getUsers(_this.state.email).call();

              case 16:
                address = _context.sent;

                if (!(address !== "0x0000000000000000000000000000000000000000")) {
                  _context.next = 28;
                  break;
                }

                user = (0, _user2.default)(address);
                _context.next = 21;
                return user.methods.getDetails().call();

              case 21:
                dob = _context.sent;
                _context.next = 24;
                return user.methods.getPassword().call();

              case 24:
                summary = _context.sent;

                if (summary == pass) {
                  alert("You logged in successfully");
                  _routes.Router.pushRoute("/users/" + address);
                } else {
                  _this.setState({ errorMessage: "Wrong Password", loading: false });
                }
                _context.next = 29;
                break;

              case 28:
                _this.setState({
                  errorMessage: "This Email is not registered !!",
                  loading: false
                });

              case 29:
                _context.next = 32;
                break;

              case 31:
                _this.setState({ errorMessage: "Invalid Email address !!" });

              case 32:
                _context.next = 35;
                break;

              case 34:
                _this.setState({ errorMessage: "Please fill all details :)" });

              case 35:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.onSubmit = _this.onSubmit.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Login, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, _react2.default.createElement("h1", {
        style: {
          textAlign: "center",
          marginTop: "34px",
          marginBottom: "20px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "sign-in", __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }), "Log-In"), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, "Email ID"), _react2.default.createElement("input", {
        onChange: function onChange(event) {
          return _this3.setState({ email: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, "Password"), _react2.default.createElement("input", {
        type: "password",
        onChange: function onChange(event) {
          return _this3.setState({ password: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      })), _react2.default.createElement(_semanticUiReact.Message, {
        floating: true,
        error: true,
        header: "Oops!",
        content: this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }), _react2.default.createElement(_semanticUiReact.Button.Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { type: "submit", positive: true, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, "Log-In"), _react2.default.createElement(_semanticUiReact.Button.Or, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { type: "reset", negative: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, "Reset"))), _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }, _react2.default.createElement(_routes.Link, { route: '/password/update', __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }, "Forget Password"))));
    }
  }]);

  return Login;
}(_react.Component);

exports.default = Login;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2xvZ2luLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiSW1hZ2UiLCJCdXR0b24iLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiQ2hlY2tib3giLCJJY29uIiwiUHJvZ3Jlc3MiLCJpcGZzIiwiTGF5b3V0Iiwic2lnbnVwIiwiVXNlciIsIndlYjMiLCJSb3V0ZXIiLCJMaW5rIiwiTG9naW4iLCJwcm9wcyIsInN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsInZhbHVlIiwia2V5IiwicGFzcyIsImkiLCJsZW5ndGgiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJjaGFyQ29kZUF0IiwicmVnIiwidGVzdCIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiZ2V0VXNlcnMiLCJjYWxsIiwiYWRkcmVzcyIsInVzZXIiLCJnZXREZXRhaWxzIiwiZG9iIiwiZ2V0UGFzc3dvcmQiLCJzdW1tYXJ5IiwiYWxlcnQiLCJwdXNoUm91dGUiLCJiaW5kIiwidGV4dEFsaWduIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQ0UsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQTs7QUFFRixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBUSxBQUFZOzs7Ozs7O0ksQUFFdkI7aUNBQ0o7O2lCQUFBLEFBQVksT0FBTztpQkFBQTs7d0NBQUE7O29JQUFBLEFBQ1g7O1VBRFcsQUFLbkI7YUFBUSxBQUND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M0M7O29CQUFBO3NCQVRKLEFBT0UsQUFFRSxBQU9GO0FBUEU7QUFDRSwyQkFNSixBQUFDO2tCQUFELEFBRUU7ZUFGRixBQUdFO2dCQUhGLEFBR1MsQUFDUDtpQkFBUyxLQUFBLEFBQUssTUFKaEIsQUFJc0I7O29CQUp0QjtzQkFoQkYsQUFnQkUsQUFNQTtBQU5BO0FBQ0UsMEJBS0QsY0FBRCx3QkFBQSxBQUFROztvQkFBUjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLHlDQUFPLE1BQVIsQUFBYSxVQUFTLFVBQXRCLE1BQStCLFNBQVMsS0FBQSxBQUFLLE1BQTdDLEFBQW1EO29CQUFuRDtzQkFBQTtBQUFBO1NBREYsQUFDRSxBQUdBLHlDQUFBLEFBQUMsd0JBQUQsQUFBUTs7b0JBQVI7c0JBSkYsQUFJRSxBQUNBO0FBREE7QUFBQSwwQkFDQSxBQUFDLHlDQUFPLE1BQVIsQUFBYSxTQUFRLFVBQXJCO29CQUFBO3NCQUFBO0FBQUE7U0F0Q04sQUFXRSxBQXNCRSxBQUtFLEFBS0osNEJBQUEsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyw4QkFBSyxPQUFOLEFBQWE7b0JBQWI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQTlDUixBQUNFLEFBMkNFLEFBQ0UsQUFDRSxBQUtUOzs7OztBQS9JaUIsQSxBQWtKcEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoibG9naW4uanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvamVycnkvaW1nIn0=