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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/jerry/img/pages/users/userdetails.js?entry";


var UserDetails = function (_Component) {
  (0, _inherits3.default)(UserDetails, _Component);

  function UserDetails() {
    (0, _classCallCheck3.default)(this, UserDetails);

    return (0, _possibleConstructorReturn3.default)(this, (UserDetails.__proto__ || (0, _getPrototypeOf2.default)(UserDetails)).apply(this, arguments));
  }

  (0, _createClass3.default)(UserDetails, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          address = _props.address,
          name = _props.name,
          dob = _props.dob,
          email = _props.email,
          imageHash = _props.imageHash;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement("h1", {
        style: {
          textAlign: "center",
          marginTop: "34px",
          marginBottom: "50px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "user secret", __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }), "User Profile"), _react2.default.createElement(_semanticUiReact.Grid, { columns: 2, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement(_semanticUiReact.Card, { color: "teal", __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement(_semanticUiReact.Image, { src: "https://ipfs.io/ipfs/" + imageHash, alt: "no pic", __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, style: { marginTop: "20px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, { color: "black", __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, "Name: ", name), _react2.default.createElement(_semanticUiReact.Segment, { color: "black", __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, "Date of Birth: ", dob), _react2.default.createElement(_semanticUiReact.Segment, { color: "black", __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, "Email-ID: ", email), _react2.default.createElement(_semanticUiReact.Segment, { color: "black", __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, "ImageHash: ", imageHash)))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
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
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return UserDetails;
}(_react.Component);

exports.default = UserDetails;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3VzZXJzL3VzZXJkZXRhaWxzLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiSW1hZ2UiLCJCdXR0b24iLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiQ2hlY2tib3giLCJJY29uIiwiUHJvZ3Jlc3MiLCJDYXJkIiwiR3JpZCIsIlNlZ21lbnQiLCJpcGZzIiwiTGF5b3V0Iiwic2lnbnVwIiwiVXNlciIsIndlYjMiLCJVc2VyRGV0YWlscyIsInByb3BzIiwiYWRkcmVzcyIsIm5hbWUiLCJkb2IiLCJlbWFpbCIsImltYWdlSGFzaCIsInRleHRBbGlnbiIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsInVzZXIiLCJxdWVyeSIsIm1ldGhvZHMiLCJnZXREZXRhaWxzIiwiY2FsbCIsInN1bW1hcnkiLCJjb25zb2xlIiwibG9nIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUNFLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0E7O0FBRUYsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBVTs7Ozs7Ozs7O0lBRVgsQTs7Ozs7Ozs7Ozs7NkJBZUs7bUJBQzBDLEtBRDFDLEFBQytDO1VBRC9DLEFBQ0MsaUJBREQsQUFDQztVQURELEFBQ1UsY0FEVixBQUNVO1VBRFYsQUFDZ0IsYUFEaEIsQUFDZ0I7VUFEaEIsQUFDcUIsZUFEckIsQUFDcUI7VUFEckIsQUFDNEIsbUJBRDVCLEFBQzRCLEFBQ25DOzs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O3FCQUNTLEFBQ00sQUFDWDtxQkFGSyxBQUVNLEFBQ1g7d0JBSkosQUFDUyxBQUdTO0FBSFQsQUFDTDs7b0JBRko7c0JBQUEsQUFPRTtBQVBGO0FBQ0UseUJBTUEsQUFBQyx1Q0FBSyxNQUFOLEFBQVc7b0JBQVg7c0JBUEYsQUFPRTtBQUFBO1VBUkosQUFDRSxBQVVBLGlDQUFBLEFBQUMsdUNBQUssU0FBTixBQUFlO29CQUFmO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7b0JBQXBCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLHVDQUFLLE9BQU4sQUFBWTtvQkFBWjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyx3Q0FBTSwrQkFBUCxBQUFvQyxXQUFhLEtBQWpELEFBQXFEO29CQUFyRDtzQkFITixBQUNFLEFBQ0UsQUFDRSxBQUdKO0FBSEk7NEJBR0gsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQixJQUFJLE9BQU8sRUFBRSxXQUFqQyxBQUErQixBQUFhO29CQUE1QztzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQywwQ0FBUSxPQUFULEFBQWU7b0JBQWY7c0JBQUE7QUFBQTtTQUE4QixVQURoQyxBQUNFLEFBQ0EsdUJBQUEsQUFBQywwQ0FBUSxPQUFULEFBQWU7b0JBQWY7c0JBQUE7QUFBQTtTQUF1QyxtQkFGekMsQUFFRSxBQUNBLHNCQUFBLEFBQUMsMENBQVEsT0FBVCxBQUFlO29CQUFmO3NCQUFBO0FBQUE7U0FBa0MsY0FIcEMsQUFHRSxBQUNBLHdCQUFBLEFBQUMsMENBQVEsT0FBVCxBQUFlO29CQUFmO3NCQUFBO0FBQUE7U0FBbUMsZUF2QjdDLEFBQ0UsQUFXRSxBQUNFLEFBTUUsQUFJRSxBQU1YOzs7OzsyRyxBQTdDNEI7Ozs7O21CQUNyQjtBLHVCQUFPLG9CQUFLLE1BQUEsQUFBTSxNQUFYLEEsQUFBaUI7O3VCQUNSLEtBQUEsQUFBSyxRQUFMLEFBQWEsYUFBYixBQUEwQixBOzttQkFBMUM7QSxtQ0FDTjs7d0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDTjtBLHNCQUFNLFFBQUEsQUFBUSxHQUFSLEFBQVcsUUFBWCxBQUFtQixNQUFuQixBQUF5QixBOzsyQkFFMUIsTUFBQSxBQUFNLE1BRFYsQUFDZ0IsQUFDckI7d0JBQU0sUUFGRCxBQUVDLEFBQVEsQUFDZDt1QkFISyxBQUdBLEFBQ0w7eUJBQU8sUUFKRixBQUlFLEFBQVEsQUFDZjs2QkFBVyxRLEFBTE4sQUFLTSxBQUFRO0FBTGQsQUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVBvQixBLEFBaUQxQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJ1c2VyZGV0YWlscy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9qZXJyeS9pbWcifQ==