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

var _jsxFileName = "/home/jerry/img/pages/users/userdetails.js?entry";


var UserDetails = function (_Component) {
  (0, _inherits3.default)(UserDetails, _Component);

  function UserDetails() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, UserDetails);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = UserDetails.__proto__ || (0, _getPrototypeOf2.default)(UserDetails)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (event) {
      event.preventDefault();
      var _this$props = _this.props,
          address = _this$props.address,
          email = _this$props.email;

      alert("once this process done, you can't go back !!");
      _routes.Router.pushRoute("/users/" + (0, _encrypt2.default)(email) + "/" + address + "/deleteaccount");
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(UserDetails, [{
    key: "render",
    value: function render() {
      var imageHash = (0, _decrypt2.default)(this.props.imageHash);
      var _props = this.props,
          address = _props.address,
          name = _props.name,
          dob = _props.dob,
          email = _props.email;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement("h1", {
        style: {
          textAlign: "center",
          marginTop: "34px",
          marginBottom: "50px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "user secret", __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }), "User Profile"), _react2.default.createElement(_semanticUiReact.Grid, { columns: 2, __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement(_semanticUiReact.Card, { color: "teal", __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement(_semanticUiReact.Image, { src: "https://ipfs.io/ipfs/" + imageHash, alt: "no pic", __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, style: { marginTop: "20px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, { color: "black", style: { overflowWrap: "break-word" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, "Name: ", name), _react2.default.createElement(_semanticUiReact.Segment, { color: "black", style: { overflowWrap: "break-word" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, "Date of Birth: ", dob), _react2.default.createElement(_semanticUiReact.Segment, { color: "black", style: { overflowWrap: "break-word" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, "Email-ID: ", email), _react2.default.createElement(_semanticUiReact.Segment, { color: "black", style: { overflowWrap: "break-word" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, "ImageHash: ", imageHash), _react2.default.createElement(_semanticUiReact.Button, { negative: true, style: { marginTop: "30px" }, floated: "right", onClick: this.onClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "user delete", __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }), "Permanent delete Account !!")))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var user, summary, dob;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                user = (0, _user2.default)(props.query.address);
                _context.next = 3;
                return user.methods.getDetails().call();

              case 3:
                summary = _context.sent;

                console.log(summary);
                dob = summary[1].replace(/ /g, "-");
                return _context.abrupt("return", {
                  address: props.query.address,
                  name: summary[0],
                  dob: dob,
                  email: summary[2],
                  imageHash: summary[3]
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return UserDetails;
}(_react.Component);

exports.default = UserDetails;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3VzZXJzL3VzZXJkZXRhaWxzLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiSW1hZ2UiLCJCdXR0b24iLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiQ2hlY2tib3giLCJJY29uIiwiUHJvZ3Jlc3MiLCJDYXJkIiwiR3JpZCIsIlNlZ21lbnQiLCJpcGZzIiwiTGF5b3V0Iiwic2lnbnVwIiwiVXNlciIsIndlYjMiLCJSb3V0ZXIiLCJMaW5rZXIiLCJTaGEiLCJEZWMiLCJFbmMiLCJVc2VyRGV0YWlscyIsIm9uQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicHJvcHMiLCJhZGRyZXNzIiwiZW1haWwiLCJhbGVydCIsInB1c2hSb3V0ZSIsImltYWdlSGFzaCIsIm5hbWUiLCJkb2IiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJvdmVyZmxvd1dyYXAiLCJ1c2VyIiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0RGV0YWlscyIsImNhbGwiLCJzdW1tYXJ5IiwiY29uc29sZSIsImxvZyIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFDRSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBOztBQUVGLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUSxBQUFRLEFBQWE7O0FBQzdCLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFTOzs7Ozs7Ozs7SUFFVixBOzs7Ozs7Ozs7Ozs7OztzTkFlSixBLFVBQVUsaUJBQVMsQUFDakI7WUFEaUIsQUFDakIsQUFBTTt3QkFDbUIsTUFGUixBQUVhO1VBRmIsQUFF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