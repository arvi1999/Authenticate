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

var _jsxFileName = "/home/jerry/img/pages/users/deleteaccount.js?entry";


var DeleteAccount = function (_Component) {
  (0, _inherits3.default)(DeleteAccount, _Component);

  function DeleteAccount() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DeleteAccount);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DeleteAccount.__proto__ || (0, _getPrototypeOf2.default)(DeleteAccount)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      password: '',
      confirmPassword: '',
      loading: false,
      errorMessage: ''
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var _this$props, email, password, pass, cpass, accounts;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this$props = _this.props, email = _this$props.email, password = _this$props.password;
                // const { pass, cpass } = this.state;

                pass = (0, _sha2.default)(_this.state.password);
                cpass = (0, _sha2.default)(_this.state.confirmPassword);

                _this.setState({ loading: true, errorMessage: '' });

                if (!(pass !== '' && cpass !== '')) {
                  _context.next = 23;
                  break;
                }

                if (!(pass == cpass)) {
                  _context.next = 20;
                  break;
                }

                if (!(pass == password)) {
                  _context.next = 17;
                  break;
                }

                _context.next = 10;
                return _web2.default.eth.getAccounts();

              case 10:
                accounts = _context.sent;
                _context.next = 13;
                return _Signup2.default.methods.deletePermanant(email).send({
                  from: accounts[0]
                });

              case 13:
                alert("Your account has been deleted successfully !!");
                _routes.Router.pushRoute("/");
                _context.next = 18;
                break;

              case 17:
                _this.setState({ errorMessage: "Wrong Password !!", loading: false });

              case 18:
                _context.next = 21;
                break;

              case 20:
                _this.setState({ errorMessage: "Password doesn't match !!", loading: false });

              case 21:
                _context.next = 24;
                break;

              case 23:
                _this.setState({ errorMessage: " Please enter all details !!", loading: false });

              case 24:
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

  (0, _createClass3.default)(DeleteAccount, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement("h1", {
        style: {
          textAlign: "center",
          marginTop: "34px",
          marginBottom: "20px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "user delete", __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }), "Delete Account"), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, "Email ID"), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.props.email, disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, "Enter Password"), _react2.default.createElement(_semanticUiReact.Input, {
        type: "password",
        onChange: function onChange(event) {
          return _this3.setState({ password: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, "Confirm Password"), _react2.default.createElement(_semanticUiReact.Input, {
        type: "password",
        onChange: function onChange(event) {
          return _this3.setState({ confirmPassword: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      })), _react2.default.createElement(_semanticUiReact.Message, {
        floating: true,
        error: true,
        header: "Oops!",
        content: this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }), _react2.default.createElement(_semanticUiReact.Button.Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { type: "submit", primary: true, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, "Delete My Account :/)"), _react2.default.createElement(_semanticUiReact.Button.Or, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { type: "reset", negative: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, "Reset"))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
        var address, user, email, password;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                address = props.query.address;
                user = (0, _user2.default)(address);
                email = (0, _decrypt2.default)(props.query.email);
                _context2.next = 5;
                return user.methods.getPassword().call();

              case 5:
                password = _context2.sent;
                return _context2.abrupt("return", {
                  email: email, password: password
                });

              case 7:
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

  return DeleteAccount;
}(_react.Component);

exports.default = DeleteAccount;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3VzZXJzL2RlbGV0ZWFjY291bnQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJJbWFnZSIsIkJ1dHRvbiIsIkZvcm0iLCJJbnB1dCIsIk1lc3NhZ2UiLCJDaGVja2JveCIsIkljb24iLCJQcm9ncmVzcyIsIkNhcmQiLCJHcmlkIiwiU2VnbWVudCIsImlwZnMiLCJMYXlvdXQiLCJzaWdudXAiLCJVc2VyIiwid2ViMyIsIlJvdXRlciIsIkxpbmtlciIsIlNoYSIsIkRlYyIsIkVuYyIsIkRlbGV0ZUFjY291bnQiLCJzdGF0ZSIsInBhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkIiwibG9hZGluZyIsImVycm9yTWVzc2FnZSIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwiZW1haWwiLCJwYXNzIiwiY3Bhc3MiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiZGVsZXRlUGVybWFuYW50Iiwic2VuZCIsImZyb20iLCJhbGVydCIsInB1c2hSb3V0ZSIsInRleHRBbGlnbiIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsInRhcmdldCIsInZhbHVlIiwiYWRkcmVzcyIsInF1ZXJ5IiwidXNlciIsImdldFBhc3N3b3JkIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUNFLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0E7O0FBRUYsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFRLEFBQVEsQUFBYTs7QUFDN0IsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVM7Ozs7Ozs7OztJQUdWLEE7Ozs7Ozs7Ozs7Ozs7OzswTkFDSixBO2dCQUFRLEFBQ0ksQUFDVjt1QkFGTSxBQUVXLEFBQ2pCO2VBSE0sQUFHRyxBQUNUO29CQUpNLEFBSVEsQTtBQUpSLEFBQ04sYSxBQWdCRjsyRkFBVyxpQkFBQSxBQUFNLE9BQU47dURBQUE7O3NFQUFBO29CQUFBOzZDQUFBO21CQUNUO3NCQURTLEFBQ1QsQUFBTTs4QkFDc0IsTUFGbkIsQUFFd0IsT0FGeEIsQUFFRCxvQkFGQyxBQUVELE9BRkMsQUFFTSx1QkFGTixBQUVNLEFBQ2Y7QUFFTTs7QUFMRyx1QkFLSSxtQkFBSSxNQUFBLEFBQUssTUFMYixBQUtJLEFBQWUsQUFDdEI7QUFORyx3QkFNSyxtQkFBSSxNQUFBLEFBQUssTUFOZCxBQU1LLEFBQWUsQUFFN0I7O3NCQUFBLEFBQUssU0FBUyxFQUFDLFNBQUQsQUFBVSxNQUFNLGNBUnJCLEFBUVQsQUFBYyxBQUE4Qjs7c0JBRXpDLFNBQUEsQUFBUyxNQUFRLFVBVlgsQUFVcUIsS0FWckI7a0NBQUE7QUFBQTtBQUFBOztzQkFXSixRQVhJLEFBV0ksUUFYSjtrQ0FBQTtBQUFBO0FBQUE7O3NCQVlGLFFBWkUsQUFZTSxXQVpOO2tDQUFBO0FBQUE7QUFBQTs7Z0NBQUE7dUJBYW9CLGNBQUEsQUFBSyxJQWJ6QixBQWFvQixBQUFTOzttQkFBMUI7QUFiSCxvQ0FBQTtnQ0FBQTt3Q0FlRyxBQUFPLFFBQVAsQUFBZSxnQkFBZixBQUErQixPQUEvQixBQUFzQzt3QkFFbEMsU0FqQlAsQUFlRyxBQUNKLEFBQ1EsQUFBUztBQURqQixBQUNFLGlCQUZFOzttQkFLTjtzQkFBQSxBQUFNLEFBQ047K0JBQUEsQUFBTyxVQXJCSjtnQ0FBQTtBQUFBOzttQkF1Qkg7c0JBQUEsQUFBSyxTQUFTLEVBQUMsY0FBRCxBQUFlLHFCQUFxQixTQXZCL0MsQUF1QkgsQUFBYyxBQUE2Qzs7bUJBdkJ4RDtnQ0FBQTtBQUFBOzttQkEwQkw7c0JBQUEsQUFBSyxTQUFTLEVBQUMsY0FBRCxBQUFlLDZCQUE2QixTQTFCckQsQUEwQkwsQUFBYyxBQUFxRDs7bUJBMUI5RDtnQ0FBQTtBQUFBOzttQkE2QlA7c0JBQUEsQUFBSyxTQUFTLEVBQUMsY0FBRCxBQUFlLGdDQUFnQyxTQTdCdEQsQUE2QlAsQUFBYyxBQUF3RDs7bUJBN0IvRDttQkFBQTtnQ0FBQTs7QUFBQTtvQkFBQTtBOzs7Ozs7Ozs7OzZCQWlDRjttQkFDUDs7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztxQkFDUyxBQUNNLEFBQ1g7cUJBRkssQUFFTSxBQUNYO3dCQUpKLEFBQ1MsQUFHUztBQUhULEFBQ0w7O29CQUZKO3NCQUFBLEFBT0U7QUFQRjtBQUNFLHlCQU1BLEFBQUMsdUNBQUssTUFBTixBQUFXO29CQUFYO3NCQVBGLEFBT0U7QUFBQTtVQVJKLEFBQ0UsQUFVQSxtQ0FBQSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUIsVUFBVSxPQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7b0JBQW5EO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSw2QkFBQSxBQUFDO2VBQ1EsS0FBQSxBQUFLLE1BRGQsQUFDb0IsT0FBTyxVQUQzQjs7b0JBQUE7c0JBSEosQUFDRSxBQUVFLEFBSUY7QUFKRTtBQUNFLDJCQUdILGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLG1DQUFBLEFBQUM7Y0FBRCxBQUNLLEFBQ0g7a0JBQVUseUJBQUE7aUJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBRSxVQUFVLE1BQUEsQUFBTSxPQUF6QyxBQUFTLEFBQWMsQUFBeUI7QUFGNUQ7O29CQUFBO3NCQVRKLEFBT0UsQUFFRSxBQUtGO0FBTEU7QUFDQSwyQkFJRCxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxxQ0FBQSxBQUFDO2NBQUQsQUFDSyxBQUNIO2tCQUFVLHlCQUFBO2lCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUUsaUJBQWlCLE1BQUEsQUFBTSxPQUFoRCxBQUFTLEFBQWMsQUFBZ0M7QUFGbkU7O29CQUFBO3NCQWhCSixBQWNFLEFBRUUsQUFLRjtBQUxFO0FBQ0EsMkJBSUYsQUFBQztrQkFBRCxBQUVFO2VBRkYsQUFHRTtnQkFIRixBQUdTLEFBQ1A7aUJBQVMsS0FBQSxBQUFLLE1BSmhCLEFBSXNCOztvQkFKdEI7c0JBckJGLEFBcUJFLEFBTUE7QUFOQTtBQUNFLDBCQUtELGNBQUQsd0JBQUEsQUFBUTs7b0JBQVI7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyx5Q0FBTyxNQUFSLEFBQWEsVUFBUyxTQUF0QixNQUE4QixTQUFTLEtBQUEsQUFBSyxNQUE1QyxBQUFrRDtvQkFBbEQ7c0JBQUE7QUFBQTtTQURGLEFBQ0UsQUFHQSx3REFBQSxBQUFDLHdCQUFELEFBQVE7O29CQUFSO3NCQUpGLEFBSUUsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQyx5Q0FBTyxNQUFSLEFBQWEsU0FBUSxVQUFyQjtvQkFBQTtzQkFBQTtBQUFBO1NBNUNSLEFBQ0UsQUFXRSxBQTJCRSxBQUtFLEFBT1Q7Ozs7OzZHQS9GNEIsQTs7Ozs7bUJBQ3JCO0EsMEJBQVcsTUFBQSxBQUFNLE1BQU0sQUFDdkIsQTtBLHVCQUFPLG9CQUFBLEEsQUFBSyxBQUNaO0Esd0JBQVEsdUJBQUksTUFBQSxBQUFNLE1BQVYsQUFBZ0IsQTs7dUJBQ1AsS0FBQSxBQUFLLFFBQUwsQUFBYSxjQUFjLEEsQUFBM0I7O21CQUFqQjtBOzt5QkFDQyxPQUNFLFVBREYsQTtBQUFBLEFBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFkc0IsQSxBQTBHNUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiZGVsZXRlYWNjb3VudC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9qZXJyeS9pbWcifQ==