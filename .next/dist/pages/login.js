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

var _sha = require("../sha256");

var _sha2 = _interopRequireDefault(_sha);

var _decrypt = require("../decrypt");

var _decrypt2 = _interopRequireDefault(_decrypt);

var _encrypt = require("../encrypt");

var _encrypt2 = _interopRequireDefault(_encrypt);

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
        var pass, email, reg, accounts, address, user, dob, summary;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                _this.setState({ errorMessage: "" });

                pass = (0, _sha2.default)(_this.state.password);
                email = _this.state.email;
                reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

                if (!(email !== "" && pass !== "")) {
                  _context.next = 31;
                  break;
                }

                if (!(reg.test(_this.state.email) == true)) {
                  _context.next = 28;
                  break;
                }

                _this.setState({ loading: true });
                _context.next = 10;
                return new _web2.default.eth.getAccounts();

              case 10:
                accounts = _context.sent;
                _context.next = 13;
                return _Signup2.default.methods.getUsers(_this.state.email).call();

              case 13:
                address = _context.sent;

                if (!(address !== "0x0000000000000000000000000000000000000000")) {
                  _context.next = 25;
                  break;
                }

                user = (0, _user2.default)(address);
                _context.next = 18;
                return user.methods.getDetails().call();

              case 18:
                dob = _context.sent;
                _context.next = 21;
                return user.methods.getPassword().call();

              case 21:
                summary = _context.sent;

                if (summary == pass) {
                  alert("You logged in successfully");
                  _routes.Router.pushRoute("/users/" + address);
                } else {
                  _this.setState({ errorMessage: "Wrong Password", loading: false });
                }
                _context.next = 26;
                break;

              case 25:
                _this.setState({
                  errorMessage: "This Email is not registered !!",
                  loading: false
                });

              case 26:
                _context.next = 29;
                break;

              case 28:
                _this.setState({ errorMessage: "Invalid Email address !!" });

              case 29:
                _context.next = 32;
                break;

              case 31:
                _this.setState({ errorMessage: "Please fill all details :)" });

              case 32:
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
          lineNumber: 78
        }
      }, _react2.default.createElement("h1", {
        style: {
          textAlign: "center",
          marginTop: "34px",
          marginBottom: "20px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "sign-in", __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }), "Log-In"), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, "Email ID"), _react2.default.createElement("input", {
        onChange: function onChange(event) {
          return _this3.setState({ email: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, "Password"), _react2.default.createElement("input", {
        type: "password",
        onChange: function onChange(event) {
          return _this3.setState({ password: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      })), _react2.default.createElement(_semanticUiReact.Message, {
        floating: true,
        error: true,
        header: "Oops!",
        content: this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }), _react2.default.createElement(_semanticUiReact.Button.Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { type: "submit", positive: true, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, "Log-In"), _react2.default.createElement(_semanticUiReact.Button.Or, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { type: "reset", negative: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, "Reset"))), _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, _react2.default.createElement(_routes.Link, { route: "/password/update", __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, "Forget Password"))));
    }
  }]);

  return Login;
}(_react.Component);

exports.default = Login;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2xvZ2luLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiSW1hZ2UiLCJCdXR0b24iLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiQ2hlY2tib3giLCJJY29uIiwiUHJvZ3Jlc3MiLCJpcGZzIiwiTGF5b3V0Iiwic2lnbnVwIiwiVXNlciIsIndlYjMiLCJSb3V0ZXIiLCJMaW5rIiwiU2hhIiwiRGVjIiwiRW5jIiwiTG9naW4iLCJwcm9wcyIsInN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsInBhc3MiLCJyZWciLCJ0ZXN0IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJnZXRVc2VycyIsImNhbGwiLCJhZGRyZXNzIiwidXNlciIsImdldERldGFpbHMiLCJkb2IiLCJnZXRQYXNzd29yZCIsInN1bW1hcnkiLCJhbGVydCIsInB1c2hSb3V0ZSIsImJpbmQiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUNFLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0E7O0FBRUYsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQVEsQUFBWTs7QUFDN0IsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVM7Ozs7Ozs7OztJLEFBR1Y7aUNBQ0o7O2lCQUFBLEFBQVksT0FBTztpQkFBQTs7d0NBQUE7O29JQUFBLEFBQ1g7O1VB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