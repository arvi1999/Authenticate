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
                      _this.setState({ imageHash: result[0].hash });
                      console.log(result[0].hash);
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
        var value, key, pass, cpass, i, _this$state, name, day, month, year, email, imageHash, dob, reg, accounts, address;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();
                value = _this.state.password;
                key = [0, 7, 2, 8, 54, 5, 61, 47, 1, 9, 0, 112, 1762, 173, 14, 1455, 12786, 157, 18, 2, 20, 943021, 2432, 3223, 274, 2525, 2246, 23457, 2528, 2259, 3430, 3641];
                pass = "";
                cpass = "";

                for (i = 0; i < value.length; ++i) {
                  pass += String.fromCharCode(key[i % key.length] ^ value.charCodeAt(i));
                  cpass += String.fromCharCode(key[i % key.length] ^ value.charCodeAt(i));
                }

                _this.setState({ errorMessage: "" });
                _this$state = _this.state, name = _this$state.name, day = _this$state.day, month = _this$state.month, year = _this$state.year, email = _this$state.email, imageHash = _this$state.imageHash;
                dob = day + " " + month + " " + year;
                reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

                if (!(name !== "" && dob !== "" && email !== "" && pass !== "" && cpass !== "")) {
                  _context2.next = 46;
                  break;
                }

                if (!(reg.test(email) == true)) {
                  _context2.next = 43;
                  break;
                }

                if (!(pass == cpass)) {
                  _context2.next = 40;
                  break;
                }

                if (!(imageHash !== "")) {
                  _context2.next = 37;
                  break;
                }

                _this.setState({ formLoading: true });
                _context2.prev = 15;
                _context2.next = 18;
                return _web2.default.eth.getAccounts();

              case 18:
                accounts = _context2.sent;
                _context2.next = 21;
                return _Signup2.default.methods.getUsers(email).call();

              case 21:
                address = _context2.sent;

                if (!(address == "0x0000000000000000000000000000000000000000")) {
                  _context2.next = 29;
                  break;
                }

                _context2.next = 25;
                return _Signup2.default.methods.addUser(name, dob, imageHash, pass, email).send({
                  from: accounts[0]
                });

              case 25:
                _this.setState({ loading: true });
                _routes.Router.pushRoute("/login");
                _context2.next = 30;
                break;

              case 29:
                _this.setState({
                  errorMessage: "Email already exists !!",
                  loading: false,
                  formLoading: false
                });

              case 30:
                _context2.next = 35;
                break;

              case 32:
                _context2.prev = 32;
                _context2.t0 = _context2["catch"](15);

                _this.setState({ errorMessage: _context2.t0.message, formLoading: false });

              case 35:
                _context2.next = 38;
                break;

              case 37:
                _this.setState({ errorMessage: "Image is still Uploading...." });

              case 38:
                _context2.next = 41;
                break;

              case 40:
                _this.setState({ errorMessage: "Password mismatch...." });

              case 41:
                _context2.next = 44;
                break;

              case 43:
                _this.setState({ errorMessage: "Invalid Email address !!" });

              case 44:
                _context2.next = 47;
                break;

              case 46:
                _this.setState({ errorMessage: "Please fill all details...." });

              case 47:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[15, 32]]);
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
          lineNumber: 164
        }
      }, _react2.default.createElement("h1", {
        style: {
          textAlign: "center",
          marginTop: "34px",
          marginBottom: "20px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "signup", __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }), "Sign-Up"), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, { required: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        }
      }, "Name"), _react2.default.createElement("input", {
        placeholder: "Full Name",
        onChange: function onChange(event) {
          return _this3.setState({ name: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, { required: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }, "Date of Birth"), _react2.default.createElement(_semanticUiReact.Form.Group, { widths: "equal", __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, { required: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 186
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
          lineNumber: 187
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, { required: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 194
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
          lineNumber: 195
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, { required: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 204
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
          lineNumber: 205
        }
      })))), _react2.default.createElement(_semanticUiReact.Form.Field, { required: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        }
      }, "Email Id"), _react2.default.createElement("input", {
        type: "text",
        onChange: function onChange(event) {
          return _this3.setState({ email: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, { required: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        }
      }, "Image"), _react2.default.createElement(_semanticUiReact.Input, {
        type: "file",
        accept: ".jpg, .png, .jpeg",
        onChange: this.captureFile,
        loading: this.state.loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, { required: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        }
      }, "Password"), _react2.default.createElement("input", {
        type: "password",
        onChange: function onChange(event) {
          return _this3.setState({ password: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, { required: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        }
      }, "Confirm Password"), _react2.default.createElement("input", {
        type: "password",
        onChange: function onChange(event) {
          return _this3.setState({ confirmPassword: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, { required: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        }
      }, _react2.default.createElement(_semanticUiReact.Checkbox, { label: "I agree to the Terms and Conditions", __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        }
      })), _react2.default.createElement(_semanticUiReact.Message, {
        floating: true,
        error: true,
        header: "Oops!",
        content: this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        }
      }), _react2.default.createElement(_semanticUiReact.Button.Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { type: "submit", positive: true, loading: this.state.formLoading, __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        }
      }, "Sign-Up"), _react2.default.createElement(_semanticUiReact.Button.Or, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { type: "reset", negative: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        }
      }, "Reset"))));
    }
  }]);

  return Signup;
}(_react.Component);

exports.default = Signup;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiSW1hZ2UiLCJCdXR0b24iLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiQ2hlY2tib3giLCJJY29uIiwiUHJvZ3Jlc3MiLCJpcGZzIiwiTGF5b3V0Iiwic2lnbnVwIiwid2ViMyIsIlJvdXRlciIsIkxpbmsiLCJTaWdudXAiLCJwcm9wcyIsInN0YXRlIiwibmFtZSIsImRheSIsIm1vbnRoIiwieWVhciIsImVtYWlsIiwiaW1hZ2VIYXNoIiwicGFzc3dvcmQiLCJjb25maXJtUGFzc3dvcmQiLCJmb3JtTG9hZGluZyIsImxvYWRpbmciLCJlcnJvck1lc3NhZ2UiLCJjYXB0dXJlRmlsZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImZpbGUiLCJ0YXJnZXQiLCJmaWxlcyIsInJlYWRlciIsIndpbmRvdyIsIkZpbGVSZWFkZXIiLCJyZWFkQXNBcnJheUJ1ZmZlciIsIm9ubG9hZGVuZCIsImJ1ZmZlciIsIkJ1ZmZlciIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJhZGQiLCJlcnJvciIsImhhc2giLCJvblN1Ym1pdCIsInZhbHVlIiwia2V5IiwicGFzcyIsImNwYXNzIiwiaSIsImxlbmd0aCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImNoYXJDb2RlQXQiLCJkb2IiLCJyZWciLCJ0ZXN0IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJnZXRVc2VycyIsImNhbGwiLCJhZGRyZXNzIiwiYWRkVXNlciIsInNlbmQiLCJmcm9tIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsImJpbmQiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFDRSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFB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QUFMRTtBQUNFLDJCQUlILGNBQUQsc0JBQUEsQUFBTSxTQUFNLFVBQVo7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSwwQkFBQSxBQUFDO2NBQUQsQUFDTyxBQUNMO2dCQUZGLEFBRVMsQUFDUDtrQkFBVSxLQUhaLEFBR2lCLEFBQ2Y7aUJBQVMsS0FBQSxBQUFLLE1BSmhCLEFBSXNCOztvQkFKdEI7c0JBbERKLEFBZ0RFLEFBRUUsQUFPRjtBQVBFO0FBQ0UsMkJBTUgsY0FBRCxzQkFBQSxBQUFNLFNBQU0sVUFBWjtvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBO2NBQUEsQUFDTyxBQUNMO2tCQUFVLHlCQUFBO2lCQUNSLE9BQUEsQUFBSyxTQUFTLEVBQUUsVUFBVSxNQUFBLEFBQU0sT0FEeEIsQUFDUixBQUFjLEFBQXlCO0FBSDNDOztvQkFBQTtzQkEzREosQUF5REUsQUFFRSxBQU9GO0FBUEU7QUFDRSwyQkFNSCxjQUFELHNCQUFBLEFBQU0sU0FBTSxVQUFaO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0E7Y0FBQSxBQUNPLEFBQ0w7a0JBQVUseUJBQUE7aUJBQ1IsT0FBQSxBQUFLLFNBQVMsRUFBRSxpQkFBaUIsTUFBQSxBQUFNLE9BRC9CLEFBQ1IsQUFBYyxBQUFnQztBQUhsRDs7b0JBQUE7c0JBcEVKLEFBa0VFLEFBRUUsQUFPRjtBQVBFO0FBQ0UsMkJBTUgsY0FBRCxzQkFBQSxBQUFNLFNBQU0sVUFBWjtvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQywyQ0FBUyxPQUFWLEFBQWdCO29CQUFoQjtzQkE1RUosQUEyRUUsQUFDRSxBQUVGO0FBRkU7MkJBRUYsQUFBQztrQkFBRCxBQUVFO2VBRkYsQUFHRTtnQkFIRixBQUdTLEFBQ1A7aUJBQVMsS0FBQSxBQUFLLE1BSmhCLEFBSXNCOztvQkFKdEI7c0JBOUVGLEFBOEVFLEFBTUE7QUFOQTtBQUNFLDBCQUtELGNBQUQsd0JBQUEsQUFBUTs7b0JBQVI7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyx5Q0FBTyxNQUFSLEFBQWEsVUFBUyxVQUF0QixNQUErQixTQUFTLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDtvQkFBbkQ7c0JBQUE7QUFBQTtTQURGLEFBQ0UsQUFHQSwwQ0FBQSxBQUFDLHdCQUFELEFBQVE7O29CQUFSO3NCQUpGLEFBSUUsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQyx5Q0FBTyxNQUFSLEFBQWEsU0FBUSxVQUFyQjtvQkFBQTtzQkFBQTtBQUFBO1NBckdSLEFBQ0UsQUFXRSxBQW9GRSxBQUtFLEFBT1Q7Ozs7O0FBN1BrQixBLEFBZ1FyQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9qZXJyeS9pbWcifQ==