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

var _ipfs = require("../../ipfs");

var _ipfs2 = _interopRequireDefault(_ipfs);

var _Layout = require("../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _Signup = require("../../ethereum/Signup");

var _Signup2 = _interopRequireDefault(_Signup);

var _user = require("../../ethereum/user");

var _user2 = _interopRequireDefault(_user);

var _web = require("../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _routes = require("../../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/jerry/img/pages/password/update.js?entry";


var UpdatePassword = function (_Component) {
  (0, _inherits3.default)(UpdatePassword, _Component);

  function UpdatePassword() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, UpdatePassword);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = UpdatePassword.__proto__ || (0, _getPrototypeOf2.default)(UpdatePassword)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      errorMessage: "",
      loading: false,
      email: "",
      address: ""
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var reg, address;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                _this.setState({ errorMessage: "", loading: false });

                reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

                if (!(_this.state.email !== "")) {
                  _context.next = 15;
                  break;
                }

                if (!(reg.test(_this.state.email) == true)) {
                  _context.next = 12;
                  break;
                }

                _this.setState({ loading: true });
                _context.next = 8;
                return _Signup2.default.methods.getUsers(_this.state.email).call();

              case 8:
                address = _context.sent;

                if (address !== "0x0000000000000000000000000000000000000000") {
                  _this.setState({ address: address });
                  _routes.Router.pushRoute("/password/" + _this.state.email + "/" + address);
                } else {
                  _this.setState({ errorMessage: "Email not found in our records !!" });
                  _this.setState({ loading: false });
                }
                _context.next = 13;
                break;

              case 12:
                _this.setState({ errorMessage: "Invalid email address !!" });

              case 13:
                _context.next = 16;
                break;

              case 15:
                _this.setState({ errorMessage: "Please enter the Email Address !!" });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(UpdatePassword, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement("h1", {
        style: {
          textAlign: "center",
          marginTop: "34px",
          marginBottom: "20px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "refresh", __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }), "Update Password"), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, "Email ID"), _react2.default.createElement(_semanticUiReact.Input, {
        onChange: function onChange(event) {
          return _this3.setState({ email: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      })), _react2.default.createElement(_semanticUiReact.Message, {
        floating: true,
        error: true,
        header: "Oops!",
        content: this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }), _react2.default.createElement(_semanticUiReact.Button.Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { type: "submit", negative: true, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, "Request Change Password"))));
    }
  }]);

  return UpdatePassword;
}(_react.Component);

exports.default = UpdatePassword;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Bhc3N3b3JkL3VwZGF0ZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkltYWdlIiwiQnV0dG9uIiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsIkNoZWNrYm94IiwiSWNvbiIsIlByb2dyZXNzIiwiaXBmcyIsIkxheW91dCIsInNpZ251cCIsIlVzZXIiLCJ3ZWIzIiwiUm91dGVyIiwiTGluayIsIlVwZGF0ZVBhc3N3b3JkIiwic3RhdGUiLCJlcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwiZW1haWwiLCJhZGRyZXNzIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJyZWciLCJ0ZXN0IiwibWV0aG9kcyIsImdldFVzZXJzIiwiY2FsbCIsInB1c2hSb3V0ZSIsInRleHRBbGlnbiIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQ0UsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQTs7QUFFRixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBUSxBQUFZOzs7Ozs7O0ksQUFFdkI7Ozs7Ozs7Ozs7Ozs7Ozs0TixBQUNKO29CQUFRLEFBQ1EsQUFDZDtlQUZNLEFBRUcsQUFDVDthQUhNLEFBR0MsQUFDUDtlQUFTLEEsQUFKSDtBQUFBLEFBQ04sYSxBQU1GOzJGQUFXLGlCQUFBLEFBQU0sT0FBTjtpQkFBQTtzRUFBQTtvQkFBQTs2Q0FBQTttQkFDVDtzQkFBQSxBQUFNLEFBRU47O3NCQUFBLEFBQUssU0FBUyxFQUFFLGNBQUYsQUFBZ0IsSUFBSSxTQUFsQyxBQUFjLEFBQTZCLEFBRXZDOztB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