(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/index.scss":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./src/index.scss ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif; }\n\n.menuBar {\n  background-color: #9b9999;\n  padding: 10px 10px 5px 10px;\n  color: white;\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  border: 1px solid none;\n  box-shadow: 15px 15px 15px;\n  margin-top: 0.2vh; }\n\n.Home img {\n  width: 500px;\n  height: 200px;\n  padding-top: 10px; }\n\n.headle {\n  background-color: #9b9999;\n  height: 3vh;\n  padding: 1vh;\n  box-shadow: 0 0 15px;\n  margin-top: 0.2vh; }\n\n.headle span {\n  float: right;\n  font-size: 12px;\n  padding: 5px; }\n\n.wornBackground {\n  background: url(\"/warn.jpg\") no-repeat center center fixed;\n  background-size: cover;\n  height: 600px; }\n\n.warnFirstBox {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: center;\n          justify-content: center; }\n\n.warnSecondbox {\n  border: 1px solid #0e0d0d;\n  width: 50vw;\n  padding: 1vh;\n  box-shadow: 0 0 30px #888787;\n  border-radius: 10px;\n  text-align: center;\n  margin-top: 15%;\n  font-size: 4vw;\n  color: white; }\n\na {\n  text-decoration: none;\n  color: black;\n  transition: background-color .5s; }\n\na:hover {\n  color: #0080ff;\n  border-bottom: 1px solid #0080ff; }\n\n.NewsBox {\n  margin: 0 5vw 0 5vw; }\n\n.NewsBox p {\n  border: 1px solid none;\n  font: 10px sans-serif;\n  height: 30vh;\n  overflow: scroll; }\n\n.eachNewsBox {\n  border: 1px solid gray;\n  box-shadow: 0 0 10px #888787;\n  padding: 0.5vw 1vw 0.5vw 1vw;\n  height: 2vh;\n  transition: all .3s;\n  overflow: hidden;\n  color: #8b8a8a; }\n\n.eachNewsBox:hover {\n  height: 15vh;\n  overflow: scroll;\n  color: black; }\n", ""]);

// exports


/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.withCredentials = true;
var service = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL:  false ? undefined : 'http://localhost:5000/api',
  withCredentials: true
});

var errHandler = function errHandler(err) {
  console.error(err);

  if (err.response && err.response.data) {
    console.error("API response", err.response.data);
    throw err.response.data.message;
  }

  throw err;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  service: service,
  // This method is synchronous and returns true or false
  // To know if the user is connected, we just check if we have a value for localStorage.getItem('user')
  isLoggedIn: function isLoggedIn() {
    return localStorage.getItem('user') != null;
  },
  // This method returns the user from the localStorage
  // Be careful, the value is the one when the user logged in for the last time
  getLocalStorageUser: function getLocalStorageUser() {
    return JSON.parse(localStorage.getItem('user'));
  },
  // This method signs up and logs in the user
  signup: function signup(userInfo) {
    return service.post('/signup', userInfo).then(function (res) {
      // If we have localStorage.getItem('user') saved, the application will consider we are loggedin
      localStorage.setItem('user', JSON.stringify(res.data));
      return res.data;
    }).catch(errHandler);
  },
  login: function login(username, password) {
    return service.post('/login', {
      username: username,
      password: password
    }).then(function (res) {
      // If we have localStorage.getItem('user') saved, the application will consider we are loggedin
      localStorage.setItem('user', JSON.stringify(res.data));
      return res.data;
    }).catch(errHandler);
  },
  logout: function logout() {
    localStorage.removeItem('user');
    return service.get('/logout');
  }
});

/***/ }),

/***/ "./src/components/App.jsx":
/*!********************************!*\
  !*** ./src/components/App.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/Home */ "./src/components/pages/Home.jsx");
/* harmony import */ var _pages_MailFrom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/MailFrom */ "./src/components/pages/MailFrom.jsx");
/* harmony import */ var _pages_Sent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/Sent */ "./src/components/pages/Sent.jsx");
/* harmony import */ var _pages_Inbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/Inbox */ "./src/components/pages/Inbox.jsx");
/* harmony import */ var _pages_Login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/Login */ "./src/components/pages/Login.jsx");
/* harmony import */ var _pages_Signup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/Signup */ "./src/components/pages/Signup.jsx");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../api */ "./src/api.js");
/* harmony import */ var _pages_NavBarProfile__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/NavBarProfile */ "./src/components/pages/NavBarProfile.jsx");
/* harmony import */ var _pages_NewsFrom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/NewsFrom */ "./src/components/pages/NewsFrom.jsx");
/* harmony import */ var _pages_WarnLogin__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/WarnLogin */ "./src/components/pages/WarnLogin.jsx");





var _jsxFileName = "/Users/Nunna/Desktop/FINALPROJECT/MERN/client/src/components/App.jsx";













var App =
/*#__PURE__*/
function (_Component) {
  Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      countries: [],
      user: {}
    };

    _this.setUser = function () {
      if (_api__WEBPACK_IMPORTED_MODULE_13__["default"].isLoggedIn()) {
        _this.setState({
          user: _api__WEBPACK_IMPORTED_MODULE_13__["default"].getLocalStorageUser()
        });
      } else {
        _this.setState({
          user: {}
        });
      }
    };

    return _this;
  }

  Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setUser();
    }
  }, {
    key: "handleLogoutClick",
    value: function handleLogoutClick(e) {
      _api__WEBPACK_IMPORTED_MODULE_13__["default"].logout(); //this.setState({user:null})

      this.setUser();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "headle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, _api__WEBPACK_IMPORTED_MODULE_13__["default"].isLoggedIn() && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "WELCOME :"), " ", this.state.user.username, !_api__WEBPACK_IMPORTED_MODULE_13__["default"].isLoggedIn() && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
        to: "/signup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "SIGN UP")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, !_api__WEBPACK_IMPORTED_MODULE_13__["default"].isLoggedIn() && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
        to: "/login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "LOG IN"), _api__WEBPACK_IMPORTED_MODULE_13__["default"].isLoggedIn() && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        to: "/",
        onClick: function onClick(e) {
          return _this2.handleLogoutClick(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "   Logout"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Switch"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        exact: true,
        path: "/",
        render: function render(props) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_pages_Home__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({}, props, {
            setUser: _this2.setUser,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 64
            },
            __self: this
          }));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/signup",
        render: function render(props) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_pages_Signup__WEBPACK_IMPORTED_MODULE_12__["default"], Object.assign({}, props, {
            setUser: _this2.setUser,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 68
            },
            __self: this
          }));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/login",
        render: function render(props) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_pages_Login__WEBPACK_IMPORTED_MODULE_11__["default"], Object.assign({}, props, {
            setUser: _this2.setUser,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 72
            },
            __self: this
          }));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), _api__WEBPACK_IMPORTED_MODULE_13__["default"].isLoggedIn() && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/NavBarProfile",
        render: function render(props) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_pages_NavBarProfile__WEBPACK_IMPORTED_MODULE_14__["default"], Object.assign({}, props, {
            setUser: _this2.setUser,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 77
            },
            __self: this
          }));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }), !_api__WEBPACK_IMPORTED_MODULE_13__["default"].isLoggedIn() && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/NavBarProfile",
        render: function render(props) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_pages_WarnLogin__WEBPACK_IMPORTED_MODULE_16__["default"], Object.assign({}, props, {
            setUser: _this2.setUser,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            },
            __self: this
          }));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/MailFrom",
        render: function render(props) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_pages_MailFrom__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({}, props, {
            setUser: _this2.setUser,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 87
            },
            __self: this
          }));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/Sent",
        render: function render(props) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_pages_Sent__WEBPACK_IMPORTED_MODULE_9__["default"], Object.assign({}, props, {
            setUser: _this2.setUser,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 92
            },
            __self: this
          }));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/Inbox",
        render: function render(props) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_pages_Inbox__WEBPACK_IMPORTED_MODULE_10__["default"], Object.assign({}, props, {
            setUser: _this2.setUser,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 97
            },
            __self: this
          }));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/NewsFrom",
        render: function render(props) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_pages_NewsFrom__WEBPACK_IMPORTED_MODULE_15__["default"], Object.assign({}, props, {
            setUser: _this2.setUser,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 102
            },
            __self: this
          }));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        render: function render() {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 105
            },
            __self: this
          }, "404");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("header", {
        className: "menuBar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
        to: "/",
        exact: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "../news.png",
        style: {
          width: "100px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
        to: "/NavBarProfile",
        exact: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "../upMail.png",
        style: {
          width: "60px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ }),

/***/ "./src/components/pages/Home.jsx":
/*!***************************************!*\
  !*** ./src/components/pages/Home.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_crossfade_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-crossfade-image */ "../node_modules/react-crossfade-image/index.es5.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../api */ "./src/api.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);






var _jsxFileName = "/Users/Nunna/Desktop/FINALPROJECT/MERN/client/src/components/pages/Home.jsx";






var images = ["../kitchens.jpg", "../condo.jpeg", "../living.jpg", "/bathroom.jpg", "/fit.jpg", "/pool.jpg", "/nice living.jpg", "/viewcondo.jpg"];

var Home =
/*#__PURE__*/
function (_Component) {
  Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Home, _Component);

  function Home() {
    var _this;

    Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    _this = Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Home).call(this));

    _this.componentDidMount = function () {
      axios__WEBPACK_IMPORTED_MODULE_7___default.a.get('http://localhost:5000/api/getNews').then(function (res) {
        _this.setState({
          NewsMessage: res.data
        });
      });
    };

    _this.showAllNews = function () {
      var listNews = _this.state.NewsMessage.messages.map(function (eachMessage, i) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          key: i,
          className: "eachNewsBox",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, moment__WEBPACK_IMPORTED_MODULE_11___default()(eachMessage.created_at).format('L'), "; "), ": Title : ", eachMessage.Title, " : ", eachMessage.Description);
      });

      return listNews;
    };

    _this.showLogin = function () {
      if (_api__WEBPACK_IMPORTED_MODULE_10__["default"].isLoggedIn()) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["NavLink"], {
          to: "/",
          onClick: function onClick(e) {
            return _this.handleLogoutClick(e);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }, "Logout"));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["NavLink"], {
          to: "/signup",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, "Signup"), "  /  ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["NavLink"], {
          to: "login",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, "Login")));
      }
    };

    _this.state = {
      NewsMessage: {
        messages: []
      },
      imageIndex: 0
    };
    _this.changeImage = _this.changeImage.bind(Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    return _this;
  }

  Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "changeImage",
    value: function changeImage() {
      if (this.state.imageIndex === images.length - 1) {
        this.setState({
          imageIndex: 0
        });
      } else {
        this.setState({
          imageIndex: this.state.imageIndex + 1
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      // console.log(eachMessage.Title)
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.changeImage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_crossfade_image__WEBPACK_IMPORTED_MODULE_8__["default"], {
        src: images[this.state.imageIndex],
        duration: 1000,
        timingFunction: "ease-out",
        style: {
          maxWidth: '100%',
          maxHeight: '100%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "NewsBox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, " ", this.showAllNews(), " ")));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/components/pages/Inbox.jsx":
/*!****************************************!*\
  !*** ./src/components/pages/Inbox.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/Nunna/Desktop/FINALPROJECT/MERN/client/src/components/pages/Inbox.jsx";



var Inbox =
/*#__PURE__*/
function (_Component) {
  Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Inbox, _Component);

  function Inbox() {
    Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Inbox);

    return Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Inbox).apply(this, arguments));
  }

  Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Inbox, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, "inbox"));
    }
  }]);

  return Inbox;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Inbox);

/***/ }),

/***/ "./src/components/pages/Login.jsx":
/*!****************************************!*\
  !*** ./src/components/pages/Login.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../api */ "./src/api.js");







var _jsxFileName = "/Users/Nunna/Desktop/FINALPROJECT/MERN/client/src/components/pages/Login.jsx";



var Login =
/*#__PURE__*/
function (_Component) {
  Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Login, _Component);

  function Login(props) {
    var _this;

    Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Login);

    _this = Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Login).call(this, props));
    _this.state = {
      username: "",
      password: "",
      message: null
    };
    _this.handleInputChange = _this.handleInputChange.bind(Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this)));
    return _this;
  }

  Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Login, [{
    key: "handleInputChange",
    value: function handleInputChange(event) {
      this.setState(Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, event.target.name, event.target.value));
    }
  }, {
    key: "handleClick",
    value: function handleClick(e) {
      var _this2 = this;

      e.preventDefault();
      _api__WEBPACK_IMPORTED_MODULE_8__["default"].login(this.state.username, this.state.password).then(function (result) {
        // console.log(api.getLocalStorageUser())
        // this.setState({user:api.getLocalStorageUser()})
        _this2.props.setUser();

        _this2.props.history.push("/"); // Redirect to the home page

      }).catch(function (err) {
        return _this2.setState({
          message: err.toString()
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      console.log();
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "Login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "Login"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "Username: ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        value: this.state.username,
        name: "username",
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), "Password: ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "password",
        value: this.state.password,
        name: "password",
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: function onClick(e) {
          return _this3.handleClick(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Login")), this.state.message && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "info info-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, this.state.message));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ }),

/***/ "./src/components/pages/MailFrom.jsx":
/*!*******************************************!*\
  !*** ./src/components/pages/MailFrom.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/Nunna/Desktop/FINALPROJECT/MERN/client/src/components/pages/MailFrom.jsx";



var Mail =
/*#__PURE__*/
function (_Component) {
  Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Mail, _Component);

  function Mail() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Mail);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Mail)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.handleSubmit = function (event) {
      event.preventDefault();
      var _event$target = event.target,
          Title = _event$target.Title,
          Description = _event$target.Description;
      var postObj = {
        //We are sending this to our api -- this will be req.body on the server side
        Title: Title.value,
        Description: Description.value
      };
      console.log(postObj);
      axios__WEBPACK_IMPORTED_MODULE_6___default.a.post('http://localhost:5000/api/sendMessage', postObj).then(function (res) {
        console.log(res);
      });
    };

    return _this;
  }

  Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Mail, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      axios__WEBPACK_IMPORTED_MODULE_6___default.a.get('http://localhost:5000/api/getMessages').then(function (res) {
        console.log(res);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Report"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "text",
        name: "Title",
        placeholder: "Title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "text",
        name: "Description",
        placeholder: "Description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Sent")));
    }
  }]);

  return Mail;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Mail);

/***/ }),

/***/ "./src/components/pages/NavBarProfile.jsx":
/*!************************************************!*\
  !*** ./src/components/pages/NavBarProfile.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");





var _jsxFileName = "/Users/Nunna/Desktop/FINALPROJECT/MERN/client/src/components/pages/NavBarProfile.jsx";




var Home =
/*#__PURE__*/
function (_Component) {
  Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Home, _Component);

  function Home() {
    Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    return Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Home).apply(this, arguments));
  }

  Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
        to: "/Inbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, "Inbox"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
        to: "/Sent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "Sent"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
        to: "/MailFrom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, "Write\""), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
        to: "/NewsFrom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, "News"));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/components/pages/NewsFrom.jsx":
/*!*******************************************!*\
  !*** ./src/components/pages/NewsFrom.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/Nunna/Desktop/FINALPROJECT/MERN/client/src/components/pages/NewsFrom.jsx";



var News =
/*#__PURE__*/
function (_Component) {
  Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(News, _Component);

  function News() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, News);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(News)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.handleSubmit = function (event) {
      event.preventDefault();
      var _event$target = event.target,
          Title = _event$target.Title,
          Description = _event$target.Description;
      var postObj = {
        //We are sending this to our api -- this will be req.body on the server side
        Title: Title.value,
        Description: Description.value
      };
      console.log(postObj);
      axios__WEBPACK_IMPORTED_MODULE_6___default.a.post('http://localhost:5000/api/sendNews', postObj).then(function (res) {
        console.log(res);
      });
    };

    return _this;
  }

  Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(News, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      axios__WEBPACK_IMPORTED_MODULE_6___default.a.get('http://localhost:5000/api/getNews').then(function (res) {
        console.log(res);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Report"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "text",
        name: "Title",
        placeholder: "Title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "text",
        name: "Description",
        placeholder: "Description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Sent")));
    }
  }]);

  return News;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (News);

/***/ }),

/***/ "./src/components/pages/Sent.jsx":
/*!***************************************!*\
  !*** ./src/components/pages/Sent.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/Nunna/Desktop/FINALPROJECT/MERN/client/src/components/pages/Sent.jsx";



var Sent =
/*#__PURE__*/
function (_Component) {
  Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Sent, _Component);

  function Sent() {
    Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Sent);

    return Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Sent).apply(this, arguments));
  }

  Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Sent, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, "History Sent"));
    }
  }]);

  return Sent;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Sent);

/***/ }),

/***/ "./src/components/pages/Signup.jsx":
/*!*****************************************!*\
  !*** ./src/components/pages/Signup.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Signup; });
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../api */ "./src/api.js");







var _jsxFileName = "/Users/Nunna/Desktop/FINALPROJECT/MERN/client/src/components/pages/Signup.jsx";



var Signup =
/*#__PURE__*/
function (_Component) {
  Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Signup, _Component);

  function Signup(props) {
    var _this;

    Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Signup);

    _this = Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Signup).call(this, props));
    _this.state = {
      username: "",
      name: "",
      password: "",
      message: null
    };
    _this.handleInputChange = _this.handleInputChange.bind(Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this)));
    return _this;
  }

  Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Signup, [{
    key: "handleInputChange",
    value: function handleInputChange(event) {
      this.setState(Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, event.target.name, event.target.value));
    }
  }, {
    key: "handleClick",
    value: function handleClick(e) {
      var _this2 = this;

      e.preventDefault();
      var data = {
        username: this.state.username,
        name: this.state.name,
        password: this.state.password
      };
      _api__WEBPACK_IMPORTED_MODULE_8__["default"].signup(data).then(function (result) {
        console.log('SUCCESS!');

        _this2.props.setUser();

        _this2.props.history.push("/"); // Redirect to the home page

      }).catch(function (err) {
        return _this2.setState({
          message: err.toString()
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "Signup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Signup"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Username: ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        value: this.state.username,
        name: "username",
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), "Name: ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        value: this.state.name,
        name: "name",
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), "Password: ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "password",
        value: this.state.password,
        name: "password",
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: function onClick(e) {
          return _this3.handleClick(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Signup")), this.state.message && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "info info-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, this.state.message));
    }
  }]);

  return Signup;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ }),

/***/ "./src/components/pages/WarnLogin.jsx":
/*!********************************************!*\
  !*** ./src/components/pages/WarnLogin.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../api */ "./src/api.js");





var _jsxFileName = "/Users/Nunna/Desktop/FINALPROJECT/MERN/client/src/components/pages/WarnLogin.jsx";




var warn =
/*#__PURE__*/
function (_Component) {
  Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(warn, _Component);

  function warn() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, warn);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(warn)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.showLogin = function () {
      if (_api__WEBPACK_IMPORTED_MODULE_7__["default"].isLoggedIn()) {
        return;
      } else {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h5", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        }, " VISITED PAGE NEED ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
          to: "/signup",
          style: {
            color: 'rgb(0, 128, 255)'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        }, "SIGN UP"), " OR ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
          to: "/login",
          style: {
            color: 'rgb(0, 128, 255)'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        }, "LOG IN"), " PLEASR!"));
      }
    };

    return _this;
  }

  Object(_Users_Nunna_Desktop_FINALPROJECT_MERN_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(warn, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "wornBackground",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "warnFirstBox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "warnSecondbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, this.showLogin())));
    }
  }]);

  return warn;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (warn);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _components_App_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/App.jsx */ "./src/components/App.jsx");
var _jsxFileName = "/Users/Nunna/Desktop/FINALPROJECT/MERN/client/src/index.js";




 // import registerServiceWorker from './registerServiceWorker';

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
})), document.getElementById('root')); // registerServiceWorker();

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-5-1!../node_modules/postcss-loader/src??postcss!../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./index.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/index.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-5-1!../node_modules/postcss-loader/src??postcss!../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./index.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/index.scss", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-5-1!../node_modules/postcss-loader/src??postcss!../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./index.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/index.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/Nunna/Desktop/FINALPROJECT/MERN/client/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/Nunna/Desktop/FINALPROJECT/MERN/client/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map