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

var _sha = require("../../sha256");

var _sha2 = _interopRequireDefault(_sha);

var _decrypt = require("../../decrypt");

var _decrypt2 = _interopRequireDefault(_decrypt);

var _encrypt = require("../../encrypt");

var _encrypt2 = _interopRequireDefault(_encrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/jerry/img/pages/password/new.js?entry";


var UpdatedPassword = function (_Component) {
  (0, _inherits3.default)(UpdatedPassword, _Component);

  function UpdatedPassword() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, UpdatedPassword);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = UpdatedPassword.__proto__ || (0, _getPrototypeOf2.default)(UpdatedPassword)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      password: '',
      confirmPassword: '',
      loading: false,
      email: '',
      errorMessage: ''
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var _this$props, email, name, dob, imageHash, pass, cpass, accounts;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this$props = _this.props, email = _this$props.email, name = _this$props.name, dob = _this$props.dob, imageHash = _this$props.imageHash;
                pass = (0, _sha2.default)(_this.state.password);
                cpass = (0, _sha2.default)(_this.state.confirmPassword);

                _this.setState({ errorMessage: "" });

                if (!(pass !== '' && cpass !== '')) {
                  _context.next = 21;
                  break;
                }

                if (!(cpass == pass)) {
                  _context.next = 18;
                  break;
                }

                _this.setState({ loading: true, errorMessage: "" });

                _context.next = 10;
                return new _web2.default.eth.getAccounts();

              case 10:
                accounts = _context.sent;
                _context.next = 13;
                return _Signup2.default.methods.deleteUser(name, dob, imageHash, pass, email).send({ from: accounts[0] });

              case 13:

                // const new_user = await signup.methods
                // .addUser(name, dob, imageHash, pass, email)
                // .send({from: accounts[0]});

                _this.setState({ loading: false, errorMessage: "" });

                alert("Password changed successfully !!");

                _routes.Router.pushRoute('/login');
                _context.next = 19;
                break;

              case 18:
                _this.setState({ errorMessage: "Password doesn't match !!" });

              case 19:
                _context.next = 22;
                break;

              case 21:
                _this.setState({ errorMessage: "Please enter the New Password & confirm it !!" });

              case 22:
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

  (0, _createClass3.default)(UpdatedPassword, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      var email = this.props.email;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement("h1", {
        style: {
          textAlign: "center",
          marginTop: "34px",
          marginBottom: "20px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "refresh", __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }), "Update Password"), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, "Email ID"), _react2.default.createElement(_semanticUiReact.Input, {
        value: email, disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, "New Password"), _react2.default.createElement(_semanticUiReact.Input, {
        type: "password",
        onChange: function onChange(event) {
          return _this3.setState({ password: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, "Confirm Password"), _react2.default.createElement(_semanticUiReact.Input, {
        type: "password",
        onChange: function onChange(event) {
          return _this3.setState({ confirmPassword: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      })), _react2.default.createElement(_semanticUiReact.Message, {
        floating: true,
        error: true,
        header: "Oops!",
        content: this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }), _react2.default.createElement(_semanticUiReact.Button.Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { type: "submit", primary: true, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, "Change Password"), _react2.default.createElement(_semanticUiReact.Button.Or, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { type: "reset", negative: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, "Reset"))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
        var user, summary;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                user = (0, _user2.default)(props.query.address);
                _context2.next = 3;
                return user.methods.getDetails().call();

              case 3:
                summary = _context2.sent;
                return _context2.abrupt("return", {
                  name: summary[0],
                  dob: summary[1],
                  email: (0, _decrypt2.default)(props.query.email),
                  imageHash: summary[3]
                });

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x2) {
        return _ref3.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return UpdatedPassword;
}(_react.Component);

exports.default = UpdatedPassword;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Bhc3N3b3JkL25ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkltYWdlIiwiQnV0dG9uIiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsIkNoZWNrYm94IiwiSWNvbiIsIlByb2dyZXNzIiwiaXBmcyIsIkxheW91dCIsInNpZ251cCIsIlVzZXIiLCJ3ZWIzIiwiUm91dGVyIiwiTGluayIsIlNoYSIsIkRlYyIsIkVuYyIsIlVwZGF0ZWRQYXNzd29yZCIsInN0YXRlIiwicGFzc3dvcmQiLCJjb25maXJtUGFzc3dvcmQiLCJsb2FkaW5nIiwiZW1haWwiLCJlcnJvck1lc3NhZ2UiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwcm9wcyIsIm5hbWUiLCJkb2IiLCJpbWFnZUhhc2giLCJwYXNzIiwiY3Bhc3MiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiZGVsZXRlVXNlciIsInNlbmQiLCJmcm9tIiwiYWxlcnQiLCJwdXNoUm91dGUiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJ0YXJnZXQiLCJ2YWx1ZSIsInVzZXIiLCJxdWVyeSIsImFkZHJlc3MiLCJnZXREZXRhaWxzIiwiY2FsbCIsInN1bW1hcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFDRSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBOztBQUVGLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFRLEFBQVk7O0FBQzdCLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFTOzs7Ozs7Ozs7SSxBQUVWOzs7Ozs7Ozs7Ozs7Ozs7OE4sQUFDSjtnQkFBUSxBQUNJLEFBQ1Y7dUJBRk0sQUFFVyxBQUNqQjtlQUhNLEFBR0csQUFDVDthQUpNLEFBSUMsQUFDUDtvQkFMTSxBLEFBS1E7QUFMUixBQUNOLGEsQUFrQkY7MkZBQVcsaUJBQUEsQUFBTSxPQUFOO21FQUFBOztzRUFBQTtvQkFBQTs2Q0FBQTttQkFDVDtzQkFEUyxBQUNULEFBQU07OEJBQ2dDLE1BRjdCLEFBRWtDLE9BRmxDLEFBRUYsb0JBRkUsQUFFRixPQUZFLEFBRUssbUJBRkwsQUFFSyxNQUZMLEFBRVcsa0JBRlgsQUFFVyxLQUZYLEFBRWdCLHdCQUZoQixBQUVnQixBQUVuQjtBQUpHLHVCQUlJLG1CQUFJLE1BQUEsQUFBSyxNQUpiLEFBSUksQUFBZSxBQUN0QjtBQUxHLHdCQUtLLG1CQUFJLE1BQUEsQUFBSyxNQUxkLEFBS0ssQUFBZSxBQUU3Qjs7c0JBQUEsQUFBSyxTQUFTLEVBQUUsY0FQUCxBQU9ULEFBQWMsQUFBZ0I7O3NCQUUzQixTQUFBLEFBQVMsTUFBTSxVQVRULEFBU21CLEtBVG5CO2tDQUFBO0FBQUE7QUFBQTs7c0JBVUosU0FWSSxBQVVLLE9BVkw7a0NBQUE7QUFBQTtBQVlMOztzQkFBQSxBQUFLLFNBQVMsRUFBQyxTQUFELEFBQVUsTUFBTSxjQVp6QixBQVlMLEFBQWMsQUFBOEI7O2dDQVp2Qzt1QkFja0IsSUFBSSxjQUFBLEFBQUssSUFkM0IsQUFja0IsQUFBYTs7bUJBQTlCO0FBZEQsb0NBQUE7Z0NBQUE7dUJBZ0JDLGlCQUFBLEFBQU8sUUFBUCxBQUFlLFdBQWYsQUFBMEIsTUFBMUIsQUFBZ0MsS0FBaEMsQUFBcUMsV0FBckMsQUFBZ0QsTUFBaEQsQUFBc0QsT0FBdEQsQUFBNkQsS0FDakUsRUFBQyxNQUFNLFNBakJKLEFBZ0JDLEFBQ0osQUFBTyxBQUFTOzttQkFHbEI7O0FBQ0E7QUFDQTtBQUVBOztzQkFBQSxBQUFLLFNBQVMsRUFBQyxTQUFELEFBQVUsT0FBTyxjQUEvQixBQUFjLEFBQStCLEFBRTdDOztzQkFBQSxBQUFNLEFBRU47OytCQUFBLEFBQU8sVUE1QkYsQUE0QkwsQUFBaUI7Z0NBNUJaO0FBQUE7O21CQThCTDtzQkFBQSxBQUFLLFNBQVMsRUFBQyxjQTlCVixBQThCTCxBQUFjLEFBQWU7O21CQTlCeEI7Z0NBQUE7QUFBQTs7bUJBaUNQO3NCQUFBLEFBQUssU0FBUyxFQUFDLGNBakNSLEFBaUNQLEFBQWMsQUFBZTs7bUJBakN0QjttQkFBQTtnQ0FBQTs7QUFBQTtvQkFBQTtBOzs7Ozs7Ozs7OzZCQXNDRjttQkFBQTs7VUFBQSxBQUNBLFFBQVMsS0FEVCxBQUNjLE1BRGQsQUFDQSxBQUNQOzs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O3FCQUNTLEFBQ00sQUFDWDtxQkFGSyxBQUVNLEFBQ1g7d0JBSkosQUFDUyxBQUdTO0FBSFQsQUFDTDs7b0JBRko7c0JBQUEsQUFPRTtBQVBGO0FBQ0UseUJBTUEsQUFBQyx1Q0FBSyxNQUFOLEFBQVc7b0JBQVg7c0JBUEYsQUFPRTtBQUFBO1VBUkosQUFDRSxBQVVBLG9DQUFBLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDtvQkFBbkQ7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLDZCQUFBLEFBQUM7ZUFBRCxBQUNTLE9BQU8sVUFEaEI7O29CQUFBO3NCQUhKLEFBQ0UsQUFFRSxBQUlGO0FBSkU7QUFDRSwyQkFHSCxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxpQ0FBQSxBQUFDO2NBQUQsQUFDSyxBQUNIO2tCQUFVLHlCQUFBO2lCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUUsVUFBVSxNQUFBLEFBQU0sT0FBekMsQUFBUyxBQUFjLEFBQXlCO0FBRjVEOztvQkFBQTtzQkFUSixBQU9FLEFBRUUsQUFLRjtBQUxFO0FBQ0EsMkJBSUQsY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EscUNBQUEsQUFBQztjQUFELEFBQ0ssQUFDSDtrQkFBVSx5QkFBQTtpQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFFLGlCQUFpQixNQUFBLEFBQU0sT0FBaEQsQUFBUyxBQUFjLEFBQWdDO0FBRm5FOztvQkFBQTtzQkFoQkosQUFjRSxBQUVFLEFBS0Y7QUFMRTtBQUNBLDJCQUlGLEFBQUM7a0JBQUQsQUFFRTtlQUZGLEFBR0U7Z0JBSEYsQUFHUyxBQUNQO2lCQUFTLEtBQUEsQUFBSyxNQUpoQixBQUlzQjs7b0JBSnRCO3NCQXJCRixBQXFCRSxBQU1BO0FBTkE7QUFDRSwwQkFLRCxjQUFELHdCQUFBLEFBQVE7O29CQUFSO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMseUNBQU8sTUFBUixBQUFhLFVBQVMsU0FBdEIsTUFBOEIsU0FBUyxLQUFBLEFBQUssTUFBNUMsQUFBa0Q7b0JBQWxEO3NCQUFBO0FBQUE7U0FERixBQUNFLEFBR0Esa0RBQUEsQUFBQyx3QkFBRCxBQUFROztvQkFBUjtzQkFKRixBQUlFLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLEFBQUMseUNBQU8sTUFBUixBQUFhLFNBQVEsVUFBckI7b0JBQUE7c0JBQUE7QUFBQTtTQTVDUixBQUNFLEFBV0UsQUEyQkUsQUFLRSxBQU9UOzs7Ozs2R0F0RzRCLEE7Ozs7O21CQUNyQjtBLHVCQUFPLG9CQUFLLE1BQUEsQUFBTSxNQUFYLEFBQWlCLEE7O3VCQUNSLEtBQUEsQUFBSyxRQUFMLEFBQWEsYUFBYixBLEFBQTBCOzttQkFBMUM7QTs7d0JBRUUsUUFERCxBQUNDLEFBQVEsQUFDZDt1QkFBSyxRQUZBLEFBRUEsQUFBUSxBQUNiO3lCQUFPLHVCQUFJLE1BQUEsQUFBTSxNQUhaLEFBR0UsQUFBZ0IsQUFDdkI7NkJBQVcsUUFKTixBQUlNLEFBQVEsQTtBQUpkLEFBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFid0IsQSxBQWtIOUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoibmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2plcnJ5L2ltZyJ9