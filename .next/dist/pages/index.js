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

var _web = require("../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _routes = require("../routes");

var _sha = require("../sha256");

var _sha2 = _interopRequireDefault(_sha);

var _decrypt = require("../decrypt");

var _decrypt2 = _interopRequireDefault(_decrypt);

var _encrypt = require("../encrypt");

var _encrypt2 = _interopRequireDefault(_encrypt);

var _mail = require("../mail");

var _mail2 = _interopRequireDefault(_mail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/jerry/img/pages/index.js?entry";


var Signup = function (_Component) {
  (0, _inherits3.default)(Signup, _Component);

  function Signup(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, Signup);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Signup.__proto__ || (0, _getPrototypeOf2.default)(Signup)).call(this, props));

    _this.state = {
      name: "",
      day: "",
      month: "",
      year: "",
      email: "",
      imageHash: "",
      password: "",
      confirmPassword: "",
      formLoading: false,
      loading: false,
      errorMessage: ""
    };

    _this.captureFile = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var file, reader;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                if (_this.state.imageHash == "") {
                  _this.setState({ loading: true });
                }

                file = event.target.files[0];
                reader = new window.FileReader();

                reader.readAsArrayBuffer(file);
                reader.onloadend = function () {
                  _this.setState({ buffer: Buffer(reader.result) });
                  console.log("buffer", _this.state.buffer);
                  if (_this.state.buffer !== null) {
                    _ipfs2.default.files.add(_this.state.buffer, function (error, result) {
                      if (error) {
                        console.error(error);
                        return;
                      }
                      _this.setState({ imageHash: (0, _encrypt2.default)(result[0].hash) });
                    });
                  } else {
                    _this.setState({ errorMessage: "Image is not selected..." });
                  }
                };

              case 6:
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

    _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
        var pass, cpass, _this$state, name, day, month, year, email, imageHash, dob, reg, digits, OTP, i, accounts, address, otp;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();
                pass = (0, _sha2.default)(_this.state.password);
                cpass = (0, _sha2.default)(_this.state.confirmPassword);

                _this.setState({ errorMessage: "" });
                _this$state = _this.state, name = _this$state.name, day = _this$state.day, month = _this$state.month, year = _this$state.year, email = _this$state.email, imageHash = _this$state.imageHash;
                dob = day + " " + month + " " + year;
                reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

                if (!(name !== "" && dob !== "" && email !== "" && pass !== "" && cpass !== "")) {
                  _context2.next = 49;
                  break;
                }

                if (!(reg.test(email) == true)) {
                  _context2.next = 46;
                  break;
                }

                if (!(pass == cpass)) {
                  _context2.next = 43;
                  break;
                }

                if (!(imageHash !== "")) {
                  _context2.next = 40;
                  break;
                }

                _this.setState({ formLoading: true });
                digits = "0123456789";
                OTP = "";

                for (i = 0; i < 6; i++) {
                  OTP += digits[Math.floor(Math.random() * 10)];
                }
                console.log(OTP);
                _context2.prev = 16;
                _context2.next = 19;
                return _web2.default.eth.getAccounts();

              case 19:
                accounts = _context2.sent;
                _context2.next = 22;
                return _Signup2.default.methods.getUsers(email).call();

              case 22:
                address = _context2.sent;

                if (!(address == "0x0000000000000000000000000000000000000000")) {
                  _context2.next = 32;
                  break;
                }

                _context2.next = 26;
                return _Signup2.default.methods.addUser(name, dob, imageHash, pass, email).send({
                  from: accounts[0]
                });

              case 26:
                _this.setState({ loading: true });

                //For enabling the mail feature...just uncomment the below line...and setup the mail.js file with mail credentials....
                //Mail(name, email, OTP);

                otp = (0, _sha2.default)(OTP);

                alert("OTP has been sent to your email :>)");
                _routes.Router.pushRoute("/password/" + otp + "/verify");
                _context2.next = 33;
                break;

              case 32:
                _this.setState({
                  errorMessage: "Email already exists !!",
                  loading: false,
                  formLoading: false
                });

              case 33:
                _context2.next = 38;
                break;

              case 35:
                _context2.prev = 35;
                _context2.t0 = _context2["catch"](16);

                _this.setState({ errorMessage: _context2.t0.message, formLoading: false });

              case 38:
                _context2.next = 41;
                break;

              case 40:
                _this.setState({ errorMessage: "Image is still Uploading...." });

              case 41:
                _context2.next = 44;
                break;

              case 43:
                _this.setState({ errorMessage: "Password mismatch...." });

              case 44:
                _context2.next = 47;
                break;

              case 46:
                _this.setState({ errorMessage: "Invalid Email address !!" });

              case 47:
                _context2.next = 50;
                break;

              case 49:
                _this.setState({ errorMessage: "Please fill all details...." });

              case 50:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[16, 35]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.captureFile = _this.captureFile.bind(_this);
    _this.onSubmit = _this.onSubmit.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Signup, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, _react2.default.createElement("h1", {
        style: {
          textAlign: "center",
          marginTop: "34px",
          marginBottom: "20px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "signup", __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }), "Sign-Up"), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, { required: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, "Name"), _react2.default.createElement("input", {
        placeholder: "Full Name",
        onChange: function onChange(event) {
          return _this3.setState({ name: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, { required: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }, "Date of Birth"), _react2.default.createElement(_semanticUiReact.Form.Group, { widths: "equal", __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, { required: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, _react2.default.createElement(_semanticUiReact.Input, {
        label: "Day",
        placeholder: "DD",
        labelPosition: "right",
        onChange: function onChange(event) {
          return _this3.setState({ day: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, { required: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }, _react2.default.createElement(_semanticUiReact.Input, {
        label: "Month",
        placeholder: "MM",
        labelPosition: "right",
        onChange: function onChange(event) {
          return _this3.setState({ month: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, { required: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }, _react2.default.createElement(_semanticUiReact.Input, {
        label: "Year",
        placeholder: "YYYY",
        labelPosition: "right",
        onChange: function onChange(event) {
          return _this3.setState({ year: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      })))), _react2.default.createElement(_semanticUiReact.Form.Field, { required: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }, "Email Id"), _react2.default.createElement("input", {
        type: "text",
        onChange: function onChange(event) {
          return _this3.setState({ email: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, { required: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        }
      }, "Image"), _react2.default.createElement(_semanticUiReact.Input, {
        type: "file",
        accept: ".jpg, .png, .jpeg",
        onChange: this.captureFile,
        loading: this.state.loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, { required: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        }
      }, "Password"), _react2.default.createElement("input", {
        type: "password",
        onChange: function onChange(event) {
          return _this3.setState({ password: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, { required: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        }
      }, "Confirm Password"), _react2.default.createElement("input", {
        type: "password",
        onChange: function onChange(event) {
          return _this3.setState({ confirmPassword: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, { required: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        }
      }, _react2.default.createElement(_semanticUiReact.Checkbox, { label: "I agree to the Terms and Conditions", __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        }
      })), _react2.default.createElement(_semanticUiReact.Message, {
        floating: true,
        error: true,
        header: "Oops!",
        content: this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        }
      }), _react2.default.createElement(_semanticUiReact.Button.Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { type: "submit", positive: true, loading: this.state.formLoading, __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        }
      }, "Sign-Up"), _react2.default.createElement(_semanticUiReact.Button.Or, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { type: "reset", negative: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        }
      }, "Reset"))));
    }
  }]);

  return Signup;
}(_react.Component);

exports.default = Signup;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiSW1hZ2UiLCJCdXR0b24iLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiQ2hlY2tib3giLCJJY29uIiwiUHJvZ3Jlc3MiLCJpcGZzIiwiTGF5b3V0Iiwic2lnbnVwIiwid2ViMyIsIlJvdXRlciIsIkxpbmsiLCJTaGEiLCJEZWMiLCJFbmMiLCJNYWlsIiwiU2lnbnVwIiwicHJvcHMiLCJzdGF0ZSIsIm5hbWUiLCJkYXkiLCJtb250aCIsInllYXIiLCJlbWFpbCIsImltYWdlSGFzaCIsInBhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkIiwiZm9ybUxvYWRpbmciLCJsb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwiY2FwdHVyZUZpbGUiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJyZWFkZXIiLCJ3aW5kb3ciLCJGaWxlUmVhZGVyIiwicmVhZEFzQXJyYXlCdWZmZXIiLCJvbmxvYWRlbmQiLCJidWZmZXIiLCJCdWZmZXIiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiYWRkIiwiZXJyb3IiLCJoYXNoIiwib25TdWJtaXQiLCJwYXNzIiwiY3Bhc3MiLCJkb2IiLCJyZWciLCJ0ZXN0IiwiZGlnaXRzIiwiT1RQIiwiaSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiZ2V0VXNlcnMiLCJjYWxsIiwiYWRkcmVzcyIsImFkZFVzZXIiLCJzZW5kIiwiZnJvbSIsIm90cCIsImFsZXJ0IiwicHVzaFJvdXRlIiwibWVzc2FnZSIsImJpbmQiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUNFLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0E7O0FBRUYsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBUSxBQUFZOztBQUM3QixBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVU7Ozs7Ozs7OztJQUVYLEE7a0NBQ0o7O2tCQUFBLEFBQVksT0FBTztpQkFBQTs7d0NBQUE7O3NJQUFBLEFBQ1g7O1VBRFcsQUFNbkI7WUFBUSxBQUNBLEFBQ047V0FGTSxBQUVELEFBQ0w7YUFITSxBQUdDLEFBQ1A7WUFKTSxBQUlBLEFBQ047YUFMTSxBQUtDLEFBQ1A7aUJBTk0sQUFNSyxBQUNYO2dCQVBNLEFBT0ksQUFDVjt1QkFSTSxBQVFXLEFBQ2pCO21CQVRNLEFBU08sQUFDYjtlQVZNLEFBVUcsQUFDVDtvQkFqQmlCLEFBTVgsQUFXUTtBQVhSLEFBQ047O1VBUGlCLEFBb0JuQiwwQkFwQm1COzBGQW9CTCxpQkFBQSxBQUFNLE9BQU47a0JBQUE7c0VBQUE7b0JBQUE7NkNBQUE7bUJBQ1o7c0JBQUEsQUFBTSxBQUVOOztvQkFBSSxNQUFBLEFBQUssTUFBTCxBQUFXLGFBQWYsQUFBNEIsSUFBSSxBQUM5Qjt3QkFBQSxBQUFLLFNBQVMsRUFBRSxTQUFoQixBQUFjLEFBQVcsQUFDMUI7QUFFSzs7QUFQTSx1QkFPQyxNQUFBLEFBQU0sT0FBTixBQUFhLE1BUGQsQUFPQyxBQUFtQixBQUMxQjtBQVJNLHlCQVFHLElBQUksT0FSUCxBQVFHLEFBQVcsQUFDMUI7O3VCQUFBLEFBQU8sa0JBQVAsQUFBeUIsQUFDekI7dUJBQUEsQUFBTyxZQUFZLFlBQU0sQUFDdkI7d0JBQUEsQUFBSyxTQUFTLEVBQUUsUUFBUSxPQUFPLE9BQS9CLEFBQWMsQUFBVSxBQUFjLEFBQ3RDOzBCQUFBLEFBQVEsSUFBUixBQUFZLFVBQVUsTUFBQSxBQUFLLE1BQTNCLEFBQWlDLEFBQ2pDO3NCQUFJLE1BQUEsQUFBSyxNQUFMLEFBQVcsV0FBZixBQUEwQixNQUFNLEFBQzlCO21DQUFBLEFBQUssTUFBTCxBQUFXLElBQUksTUFBQSxBQUFLLE1BQXBCLEFBQTBCLFFBQVEsVUFBQSxBQUFDLE9BQUQsQUFBUSxRQUFXLEFBQ25EOzBCQUFBLEFBQUksT0FBTyxBQUNUO2dDQUFBLEFBQVEsTUFBUixBQUFjLEFBQ2Q7QUFDRDtBQUNEOzRCQUFBLEFBQUssU0FBUyxFQUFFLFdBQVcsdUJBQUksT0FBQSxBQUFPLEdBQXRDLEFBQWMsQUFBYSxBQUFjLEFBQzFDO0FBTkQsQUFPRDtBQVJELHlCQVFPLEFBQ0w7MEJBQUEsQUFBSyxTQUFTLEVBQUUsY0FBaEIsQUFBYyxBQUFnQixBQUMvQjtBQUNGO0FBeEJXLEFBVVo7O21CQVZZO21CQUFBO2dDQUFBOztBQUFBO29CQUFBO0FBcEJLOzsyQkFBQTtnQ0FBQTtBQUFBO0FBQUE7O1VBQUEsQUErQ25CLHVCQS9DbUI7MkZBK0NSLGtCQUFBLEFBQU0sT0FBTjs2SEFBQTs7d0VBQUE7b0JBQUE7K0NBQUE7bUJBQ1Q7c0JBQUEsQUFBTSxBQUNGO0FBRkssdUJBRUUsbUJBQUksTUFBQSxBQUFLLE1BRlgsQUFFRSxBQUFlLEFBQ3RCO0FBSEssd0JBR0csbUJBQUksTUFBQSxBQUFLLE1BSFosQUFHRyxBQUFlLEFBRTNCOztzQkFBQSxBQUFLLFNBQVMsRUFBRSxjQUxQLEFBS1QsQUFBYyxBQUFnQjs4QkFDdUIsTUFONUMsQUFNaUQsT0FOakQsQUFNRCxtQkFOQyxBQU1ELE1BTkMsQUFNSyxrQkFOTCxBQU1LLEtBTkwsQUFNVSxvQkFOVixBQU1VLE9BTlYsQUFNaUIsbUJBTmpCLEFBTWlCLE1BTmpCLEFBTXVCLG9CQU52QixBQU11QixPQU52QixBQU04Qix3QkFOOUIsQUFNOEIsQUFDakM7QUFQRyxzQkFPRyxNQUFBLEFBQU0sTUFBTixBQUFZLFFBQVosQUFBb0IsTUFQdkIsQUFPNkIsQUFDbEM7QUFSSyxzQkFBQSxBQVFDOztzQkFHUixTQUFBLEFBQVMsTUFDVCxRQURBLEFBQ1EsTUFDUixVQUZBLEFBRVUsTUFDVixTQUhBLEFBR1MsTUFDVCxVQWZPLEFBZUcsS0FmSDttQ0FBQTtBQUFBO0FBQUE7O3NCQWlCSCxJQUFBLEFBQUksS0FBSixBQUFTLFVBakJOLEFBaUJnQixPQWpCaEI7bUNBQUE7QUFBQTtBQUFBOztzQkFrQkQsUUFsQkMsQUFrQk8sUUFsQlA7bUNBQUE7QUFBQTtBQUFBOztzQkFtQkMsY0FuQkQsQUFtQmUsS0FuQmY7bUNBQUE7QUFBQTtBQW9CRDs7c0JBQUEsQUFBSyxTQUFTLEVBQUUsYUFBaEIsQUFBYyxBQUFlLEFBQ3pCO0FBckJILHlCQUFBLEFBcUJZLEFBQ1Q7QUF0Qkgsc0JBQUEsQUFzQlMsQUFDVjs7cUJBQUEsQUFBUyxJQUFULEFBQWEsR0FBRyxJQUFoQixBQUFvQixHQUFwQixBQUF1QixLQUFLLEFBQzFCO3lCQUFPLE9BQU8sS0FBQSxBQUFLLE1BQU0sS0FBQSxBQUFLLFdBQTlCLEFBQU8sQUFBTyxBQUEyQixBQUMxQztBQUNEO3dCQUFBLEFBQVEsSUExQlAsQUEwQkQsQUFBWTtpQ0ExQlg7aUNBQUE7dUJBNEJ3QixjQUFBLEFBQUssSUE1QjdCLEFBNEJ3QixBQUFTOzttQkFBMUI7QUE1QlAscUNBQUE7aUNBQUE7dUJBNkJ1QixpQkFBQSxBQUFPLFFBQVAsQUFBZSxTQUFmLEFBQXdCLE9BN0IvQyxBQTZCdUIsQUFBK0I7O21CQUEvQztBQTdCUCxvQ0FBQTs7c0JBOEJLLFdBOUJMLEFBOEJnQiwrQ0E5QmhCO21DQUFBO0FBQUE7QUFBQTs7aUNBQUE7d0NBK0JTLEFBQU8sUUFBUCxBQUNILFFBREcsQUFDSyxNQURMLEFBQ1csS0FEWCxBQUNnQixXQURoQixBQUMyQixNQUQzQixBQUNpQyxPQURqQyxBQUVIO3dCQUNPLFNBbENiLEFBK0JTLEFBRUUsQUFDRSxBQUFTO0FBRFgsQUFDSixpQkFIRTs7bUJBS047c0JBQUEsQUFBSyxTQUFTLEVBQUUsU0FBaEIsQUFBYyxBQUFXLEFBR3pDOztBQUNnQjtBQUVNOztBQTFDVCxzQkEwQ2UsbUJBMUNmLEFBMENlLEFBQUksQUFDaEI7O3NCQUFBLEFBQU0sQUFDTjsrQkFBQSxBQUFPLHlCQUFQLEFBQThCLE1BNUNqQztpQ0FBQTtBQUFBOzttQkE4Q0c7c0JBQUEsQUFBSztnQ0FBUyxBQUNFLEFBQ2Q7MkJBRlksQUFFSCxBQUNUOytCQWpETCxBQThDRyxBQUFjLEFBR0M7QUFIRCxBQUNaOzttQkEvQ0w7aUNBQUE7QUFBQTs7bUJBQUE7aUNBQUE7a0RBcURDOztzQkFBQSxBQUFLLFNBQVMsRUFBRSxjQUFjLGFBQWhCLEFBQW9CLFNBQVMsYUFyRDVDLEFBcURDLEFBQWMsQUFBMEM7O21CQXJEekQ7aUNBQUE7QUFBQTs7bUJBd0REO3NCQUFBLEFBQUssU0FBUyxFQUFFLGNBeERmLEFBd0RELEFBQWMsQUFBZ0I7O21CQXhEN0I7aUNBQUE7QUFBQTs7bUJBMkRIO3NCQUFBLEFBQUssU0FBUyxFQUFFLGNBM0RiLEFBMkRILEFBQWMsQUFBZ0I7O21CQTNEM0I7aUNBQUE7QUFBQTs7bUJBOERMO3NCQUFBLEFBQUssU0FBUyxFQUFFLGNBOURYLEFBOERMLEFBQWMsQUFBZ0I7O21CQTlEekI7aUNBQUE7QUFBQTs7bUJBaUVQO3NCQUFBLEFBQUssU0FBUyxFQUFFLGNBakVULEFBaUVQLEFBQWMsQUFBZ0I7O21CQWpFdkI7bUJBQUE7aUNBQUE7O0FBQUE7bUNBQUE7QUEvQ1E7OzRCQUFBO2lDQUFBO0FBQUE7QUFFakI7O1VBQUEsQUFBSyxjQUFjLE1BQUEsQUFBSyxZQUFMLEFBQWlCLEtBQXBDLEFBQ0E7VUFBQSxBQUFLLFdBQVcsTUFBQSxBQUFLLFNBQUwsQUFBYyxLQUhiLEFBR2pCO1dBQ0Q7Ozs7OzZCQWdIUTttQkFDUDs7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztxQkFDUyxBQUNNLEFBQ1g7cUJBRkssQUFFTSxBQUNYO3dCQUpKLEFBQ1MsQUFHUztBQUhULEFBQ0w7O29CQUZKO3NCQUFBLEFBT0U7QUFQRjtBQUNFLHlCQU1BLEFBQUMsdUNBQUssTUFBTixBQUFXO29CQUFYO3NCQVBGLEFBT0U7QUFBQTtVQVJKLEFBQ0UsQUFVQSw0QkFBQSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUIsVUFBVSxPQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7b0JBQW5EO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELHNCQUFBLEFBQU0sU0FBTSxVQUFaO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0E7cUJBQUEsQUFDYyxBQUNaO2tCQUFVLHlCQUFBO2lCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUUsTUFBTSxNQUFBLEFBQU0sT0FBckMsQUFBUyxBQUFjLEFBQXFCO0FBRnhEOztvQkFBQTtzQkFISixBQUNFLEFBRUUsQUFLRjtBQUxFO0FBQ0UsMkJBSUgsY0FBRCxzQkFBQSxBQUFNLFNBQU0sVUFBWjtvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLGtDQUFDLGNBQUQsc0JBQUEsQUFBTSxTQUFNLFFBQVosQUFBbUI7b0JBQW5CO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELHNCQUFBLEFBQU0sU0FBTSxVQUFaO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDO2VBQUQsQUFDUSxBQUNOO3FCQUZGLEFBRWMsQUFDWjt1QkFIRixBQUdnQixBQUNkO2tCQUFVLHlCQUFBO2lCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUUsS0FBSyxNQUFBLEFBQU0sT0FBcEMsQUFBUyxBQUFjLEFBQW9CO0FBSnZEOztvQkFBQTtzQkFGSixBQUNFLEFBQ0UsQUFPRjtBQVBFO0FBQ0UsMkJBTUgsY0FBRCxzQkFBQSxBQUFNLFNBQU0sVUFBWjtvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQztlQUFELEFBQ1EsQUFDTjtxQkFGRixBQUVjLEFBQ1o7dUJBSEYsQUFHZ0IsQUFDZDtrQkFBVSx5QkFBQTtpQkFDUixPQUFBLEFBQUssU0FBUyxFQUFFLE9BQU8sTUFBQSxBQUFNLE9BRHJCLEFBQ1IsQUFBYyxBQUFzQjtBQUx4Qzs7b0JBQUE7c0JBVkosQUFTRSxBQUNFLEFBU0Y7QUFURTtBQUNFLDJCQVFILGNBQUQsc0JBQUEsQUFBTSxTQUFNLFVBQVo7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUM7ZUFBRCxBQUNRLEFBQ047cUJBRkYsQUFFYyxBQUNaO3VCQUhGLEFBR2dCLEFBQ2Q7a0JBQVUseUJBQUE7aUJBQ1IsT0FBQSxBQUFLLFNBQVMsRUFBRSxNQUFNLE1BQUEsQUFBTSxPQURwQixBQUNSLEFBQWMsQUFBcUI7QUFMdkM7O29CQUFBO3NCQTlCUixBQVFFLEFBRUUsQUFtQkUsQUFDRSxBQVdOO0FBWE07QUFDRSw2QkFVUCxjQUFELHNCQUFBLEFBQU0sU0FBTSxVQUFaO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0E7Y0FBQSxBQUNPLEFBQ0w7a0JBQVUseUJBQUE7aUJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBRSxPQUFPLE1BQUEsQUFBTSxPQUF0QyxBQUFTLEFBQWMsQUFBc0I7QUFGekQ7O29CQUFBO3NCQTNDSixBQXlDRSxBQUVFLEFBS0Y7QUFMRTtBQUNFLDJCQUlILGNBQUQsc0JBQUEsQUFBTSxTQUFNLFVBQVo7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSwwQkFBQSxBQUFDO2NBQUQsQUFDTyxBQUNMO2dCQUZGLEFBRVMsQUFDUDtrQkFBVSxLQUhaLEFBR2lCLEFBQ2Y7aUJBQVMsS0FBQSxBQUFLLE1BSmhCLEFBSXNCOztvQkFKdEI7c0JBbERKLEFBZ0RFLEFBRUUsQUFPRjtBQVBFO0FBQ0UsMkJBTUgsY0FBRCxzQkFBQSxBQUFNLFNBQU0sVUFBWjtvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBO2NBQUEsQUFDTyxBQUNMO2tCQUFVLHlCQUFBO2lCQUNSLE9BQUEsQUFBSyxTQUFTLEVBQUUsVUFBVSxNQUFBLEFBQU0sT0FEeEIsQUFDUixBQUFjLEFBQXlCO0FBSDNDOztvQkFBQTtzQkEzREosQUF5REUsQUFFRSxBQU9GO0FBUEU7QUFDRSwyQkFNSCxjQUFELHNCQUFBLEFBQU0sU0FBTSxVQUFaO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0E7Y0FBQSxBQUNPLEFBQ0w7a0JBQVUseUJBQUE7aUJBQ1IsT0FBQSxBQUFLLFNBQVMsRUFBRSxpQkFBaUIsTUFBQSxBQUFNLE9BRC9CLEFBQ1IsQUFBYyxBQUFnQztBQUhsRDs7b0JBQUE7c0JBcEVKLEFBa0VFLEFBRUUsQUFPRjtBQVBFO0FBQ0UsMkJBTUgsY0FBRCxzQkFBQSxBQUFNLFNBQU0sVUFBWjtvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQywyQ0FBUyxPQUFWLEFBQWdCO29CQUFoQjtzQkE1RUosQUEyRUUsQUFDRSxBQUVGO0FBRkU7MkJBRUYsQUFBQztrQkFBRCxBQUVFO2VBRkYsQUFHRTtnQkFIRixBQUdTLEFBQ1A7aUJBQVMsS0FBQSxBQUFLLE1BSmhCLEFBSXNCOztvQkFKdEI7c0JBOUVGLEFBOEVFLEFBTUE7QUFOQTtBQUNFLDBCQUtELGNBQUQsd0JBQUEsQUFBUTs7b0JBQVI7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyx5Q0FBTyxNQUFSLEFBQWEsVUFBUyxVQUF0QixNQUErQixTQUFTLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDtvQkFBbkQ7c0JBQUE7QUFBQTtTQURGLEFBQ0UsQUFHQSwwQ0FBQSxBQUFDLHdCQUFELEFBQVE7O29CQUFSO3NCQUpGLEFBSUUsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQyx5Q0FBTyxNQUFSLEFBQWEsU0FBUSxVQUFyQjtvQkFBQTtzQkFBQTtBQUFBO1NBckdSLEFBQ0UsQUFXRSxBQW9GRSxBQUtFLEFBT1Q7Ozs7O0FBbE9rQixBLEFBcU9yQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9qZXJyeS9pbWcifQ==