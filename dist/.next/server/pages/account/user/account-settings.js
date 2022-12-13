module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/account/user/account-settings/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/account/user/account-settings/index.less":
/*!********************************************************!*\
  !*** ./pages/account/user/account-settings/index.less ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/account/user/account-settings/index.tsx":
/*!*******************************************************!*\
  !*** ./pages/account/user/account-settings/index.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_common_layout_page_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/common/layout/page-header */ "./src/components/common/layout/page-header.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_user_profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/user/profile */ "./src/components/user/profile.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_services_setting_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/setting.service */ "./src/services/setting.service.ts");
/* harmony import */ var src_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/user.service */ "./src/services/user.service.ts");
/* harmony import */ var src_redux_user_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/redux/user/actions */ "./src/redux/user/actions.ts");
/* harmony import */ var src_redux_auth_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/redux/auth/actions */ "./src/redux/auth/actions.ts");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @lib/utils */ "./src/lib/utils.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_auth_password_change__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @components/auth/password-change */ "./src/components/auth/password-change.tsx");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./index.less */ "./pages/account/user/account-settings/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "E:\\programData\\React\\user\\pages\\account\\user\\account-settings\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















class UserProfilePage extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  static getInitialProps({
    ctx
  }) {
    const {
      query
    } = ctx;
    return {
      action: query.action
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      uploadedAvatar: '',
      avatarUploading: false
    };
  }

  componentDidMount() {
    const {
      action
    } = this.props;
    if (!action || action === 'account-information') this.getCountries();
  }

  componentDidUpdate(prevProps) {
    const {
      success,
      updateUserError,
      auth,
      action
    } = this.props;
    const {
      countries
    } = this.state;

    if (prevProps.success !== success && success) {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].success('Update Profile Success.');
    }

    if (prevProps.updateUserError !== updateUserError && updateUserError) {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(Object(_lib_utils__WEBPACK_IMPORTED_MODULE_10__["getResponseError"])(updateUserError));
    }

    if (prevProps.auth.updatePassword.success !== auth.updatePassword.success && auth.updatePassword.success) {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].success('Update Password Success.');
    }

    if (prevProps.auth.updatePassword.error !== auth.updatePassword.error && auth.updatePassword.error) {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(Object(_lib_utils__WEBPACK_IMPORTED_MODULE_10__["getResponseError"])(auth.updatePassword.error));
    }

    if (!countries.length && action === 'account-information') {
      this.getCountries();
    }
  }

  onFinish(data) {
    const {
      user,
      updateUser: dispatchUpdateUser
    } = this.props;
    dispatchUpdateUser(_objectSpread(_objectSpread({}, user), data));
  }

  onChangeAvatar({
    file
  }) {
    if (file.status === 'uploading') {
      this.setState({
        avatarUploading: true
      });
      return;
    }

    if (file.status === 'done') {
      this.setState({
        avatarUploading: false
      });

      if (file.response) {
        this.setState({
          uploadedAvatar: file.response.data.url
        });
      }
    }
  }

  onTabsChange(key) {
    next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push({
      pathname: '/account/user/account-settings',
      query: {
        action: key
      }
    }, `/account/user/account-settings?action=${key}`, {
      shallow: false
    });
  }

  onPasswordChange(data) {
    const {
      updatePassword: dispatchUpdatePassword
    } = this.props;
    dispatchUpdatePassword(data);
  }

  async getCountries() {
    try {
      const countries = await src_services_setting_service__WEBPACK_IMPORTED_MODULE_6__["settingService"].getCountries();
      this.setState({
        countries: countries.data
      });
    } catch (error) {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(Object(_lib_utils__WEBPACK_IMPORTED_MODULE_10__["getResponseError"])(error));
    }
  }

  render() {
    const {
      user,
      action,
      auth,
      userUpdating
    } = this.props;
    const {
      countries,
      uploadedAvatar,
      avatarUploading
    } = this.state;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 9
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 11
      }
    }, `${user.username} Profile`)), __jsx("div", {
      className: "account-setting-page",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 9
      }
    }, __jsx(_components_common_layout_page_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "Account Settings",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 11
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
      activeKey: action || 'account-information',
      style: {
        padding: '0 24px'
      },
      size: "large",
      onChange: this.onTabsChange.bind(this),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 11
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"].TabPane, {
      tab: "Account Information",
      key: "account-information",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 13
      }
    }, __jsx(_components_user_profile__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, user, {
      onFinish: this.onFinish.bind(this),
      countries: countries,
      onChangeAvatar: this.onChangeAvatar.bind(this),
      uploadAvatarUrl: src_services_user_service__WEBPACK_IMPORTED_MODULE_7__["userService"].getAvatarUploadUrl(),
      uploadedAvatar: uploadedAvatar,
      avatarUploading: avatarUploading,
      loading: userUpdating,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 15
      }
    }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"].TabPane, {
      key: "change-password",
      tab: "Change Password",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 13
      }
    }, __jsx(_components_auth_password_change__WEBPACK_IMPORTED_MODULE_12__["default"], _extends({
      onFinish: this.onPasswordChange.bind(this)
    }, auth.updatePassword, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 15
      }
    }))))));
  }

}

_defineProperty(UserProfilePage, "authenticate", true);

_defineProperty(UserProfilePage, "layout", 'primary');

const mapStateToProps = state => ({
  user: state.user.current,
  userUpdating: state.user.userUpdating,
  success: state.user.updateUserSuccess,
  updateUserError: state.user.updateUserError,
  auth: state.auth
});

const mapDispatch = {
  updateUser: src_redux_user_actions__WEBPACK_IMPORTED_MODULE_8__["updateUser"],
  updatePassword: src_redux_auth_actions__WEBPACK_IMPORTED_MODULE_9__["updatePassword"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatch)(UserProfilePage));

/***/ }),

/***/ "./src/components/auth/password-change.tsx":
/*!*************************************************!*\
  !*** ./src/components/auth/password-change.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\programData\\React\\user\\src\\components\\auth\\password-change.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


const formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 12
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 12
    }
  }
};

const PasswordChange = ({
  onFinish,
  submiting
}) => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], _extends({
  layout: "vertical",
  onFinish: onFinish
}, formItemLayout, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 3
  }
}), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
  name: "prePassword",
  label: "Old Password",
  rules: [{
    required: true,
    message: 'Please input your old password!'
  }, {
    min: 6,
    max: 14,
    message: '6-14 characters'
  }],
  hasFeedback: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, {
  placeholder: "Old Password",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 7
  }
})), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
  name: "password",
  label: "New Password",
  rules: [{
    required: true,
    message: 'Please input your password!'
  }, {
    min: 6,
    max: 14,
    message: '6-14 characters'
  }],
  hasFeedback: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, {
  placeholder: "Password",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 7
  }
})), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
  name: "confirm",
  dependencies: ['password'],
  hasFeedback: true,
  label: "Retype password",
  rules: [{
    required: true,
    message: 'Please confirm your password!'
  }, ({
    getFieldValue
  }) => ({
    validator(rule, value) {
      if (!value || getFieldValue('password') === value) {
        return Promise.resolve();
      }

      return Promise.reject(new Error('The two passwords that you entered do not match!'));
    }

  })],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 5
  }
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, {
  placeholder: "Confirm Password",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 7
  }
})), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 90,
    columnNumber: 5
  }
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
  type: "primary",
  htmlType: "submit",
  loading: submiting,
  disabled: submiting,
  className: "btn-submit",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 91,
    columnNumber: 7
  }
}, "Save Changes")));

PasswordChange.defaultProps = {
  submiting: false
};
/* harmony default export */ __webpack_exports__["default"] = (PasswordChange);

/***/ }),

/***/ "./src/components/common/layout/page-header.tsx":
/*!******************************************************!*\
  !*** ./src/components/common/layout/page-header.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\programData\\React\\user\\src\\components\\common\\layout\\page-header.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (({
  title,
  extra
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["PageHeader"], {
  title: title,
  extra: extra,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }
}), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }
})));

/***/ }),

/***/ "./src/components/user/profile.less":
/*!******************************************!*\
  !*** ./src/components/user/profile.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/user/profile.tsx":
/*!*****************************************!*\
  !*** ./src/components/user/profile.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_services_api_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/api-request */ "./src/services/api-request.ts");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _profile_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.less */ "./src/components/user/profile.less");
/* harmony import */ var _profile_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_profile_less__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_file__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @lib/file */ "./src/lib/file.ts");
var _jsxFileName = "E:\\programData\\React\\user\\src\\components\\user\\profile.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









const formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 4
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 16
    }
  }
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 0
    }
  }
};

const UserProfile = ({
  username,
  firstName,
  lastName,
  gender,
  onFinish,
  countries,
  email,
  country,
  phone,
  city,
  state,
  dateOfBirth,
  onChangeAvatar,
  uploadAvatarUrl,
  uploadedAvatar,
  avatarUploading,
  avatar,
  loading
}) => {
  const [form] = antd__WEBPACK_IMPORTED_MODULE_1__["Form"].useForm();

  const uploadButton = __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "dashed",
    loading: avatarUploading,
    disabled: avatarUploading,
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["UploadOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 13
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 5
    }
  }, "Upload");

  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], _extends({}, formItemLayout, {
    form: form,
    onFinish: onFinish,
    name: "performerRegisterForm",
    className: "performerRegisterForm",
    initialValues: {
      dateOfBirth: moment__WEBPACK_IMPORTED_MODULE_2___default()(dateOfBirth),
      country,
      firstName,
      lastName,
      gender,
      email,
      avatar,
      username,
      phone,
      city,
      state
    },
    layout: "vertical",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 5
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: 25,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 12,
    xs: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "username",
    label: "Username",
    rules: [{
      required: true,
      message: 'Please input your username!'
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    disabled: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "gender",
    label: "Sex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option, {
    value: "male",
    key: "male",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 15
    }
  }, "Male"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option, {
    value: "female",
    key: "female",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 15
    }
  }, "Female"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option, {
    value: "transgender",
    key: "transgender",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 15
    }
  }, "Transgender"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "firstName",
    label: "First Name",
    rules: [{
      pattern: new RegExp('^[a-zA-Z0-9 ]*$'),
      message: 'Alphanumeric'
    }, {
      whitespace: true,
      message: 'Please input your first name!'
    }, {
      required: true,
      message: 'Please input your first name!'
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "First name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 13
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "lastName",
    label: "Last Name",
    rules: [{
      pattern: new RegExp('^[a-zA-Z0-9 ]*$'),
      message: 'Alphanumeric'
    }, {
      whitespace: true,
      message: 'Please input your last name!'
    }, {
      required: true,
      message: 'Please input your first name!'
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "Last name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 13
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "phone",
    label: "Phone Number",
    rules: [{
      min: 9
    }, {
      max: 14
    }, {
      pattern: new RegExp(/^[0-9\b\\+ ]+$/),
      message: 'The phone number is not in the correct format'
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "Phone Number",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 13
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 12,
    xs: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "email",
    label: "E-mail",
    rules: [{
      type: 'email',
      message: 'The input is not valid E-mail!'
    }, {
      required: true,
      message: 'Please input your E-mail!'
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    disabled: true,
    placeholder: "test@example.com",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 13
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "dateOfBirth",
    label: "Date of Birth",
    rules: [{
      required: true,
      message: 'Please input date of birth!'
    }, {
      validator: (rule, value) => {
        if (!value) return Promise.resolve();
        const years = moment__WEBPACK_IMPORTED_MODULE_2___default()().diff(value, 'years');

        if (years >= 18) {
          return Promise.resolve();
        }

        return Promise.reject(new Error('Minimum of 18 years'));
      }
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["DatePicker"], {
    style: {
      width: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 13
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "country",
    label: "Country",
    rules: [{
      required: true,
      message: 'Please input your country!'
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    showSearch: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 13
    }
  }, countries.length > 0 && countries.map(c => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option, {
    value: c.name,
    key: c.code,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 19
    }
  }, c.name)))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "state",
    label: "State",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "State Name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 13
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "city",
    label: "City",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "City Name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 13
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Profile Avatar" // valuePropName="fileList"
    ,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Upload"], {
    onChange: onChangeAvatar,
    accept: "image/*",
    action: uploadAvatarUrl,
    headers: {
      Authorization: false ? undefined : ''
    },
    name: "avatar",
    showUploadList: false,
    beforeUpload: _lib_file__WEBPACK_IMPORTED_MODULE_7__["beforeAvatarUpload"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 13
    }
  }, avatar || uploadedAvatar ? __jsx("div", {
    style: {
      height: 60,
      width: 60,
      position: 'relative'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: uploadedAvatar || avatar,
    style: {
      height: 60,
      width: 60,
      borderRadius: 30
    },
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 19
    }
  }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["EditOutlined"], {
    className: "edit-icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 19
    }
  })) : uploadButton), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 13
    }
  }, "Image size limit: 2MB. Accepted formats: JPEG, JPG and PNG")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _extends({}, tailFormItemLayout, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    htmlType: "submit",
    disabled: loading,
    loading: loading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 9
    }
  }, "Save Changes")));
};

/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

/***/ }),

/***/ "./src/lib/file.ts":
/*!*************************!*\
  !*** ./src/lib/file.ts ***!
  \*************************/
/*! exports provided: beforeAvatarUpload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeAvatarUpload", function() { return beforeAvatarUpload; });
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/config */ "./src/services/config.ts");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);


function beforeAvatarUpload(file) {
  const ext = file.name.split('.').pop().toLowerCase();
  const config = Object(_services_config__WEBPACK_IMPORTED_MODULE_0__["getGlobalConfig"])();
  const isImageAccept = config.NEXT_PUBLIC_IMAGE_ACCPET.split(',').map(item => item.trim()).indexOf(`.${ext}`);

  if (isImageAccept === -1) {
    antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(`You can only upload ${config.NEXT_PUBLIC_IMAGE_ACCPET} file!`);
    return false;
  }

  const isLt2M = file.size / 1024 / 1024 < (config.NEXT_PUBLIC_MAXIMUM_SIZE_UPLOAD_AVATAR || 2);

  if (!isLt2M) {
    antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(`Image must smaller than ${config.NEXT_PUBLIC_MAXIMUM_SIZE_UPLOAD_AVATAR || 2}MB!`);
    return false;
  }

  return true;
}

/***/ }),

/***/ "./src/lib/redux.ts":
/*!**************************!*\
  !*** ./src/lib/redux.ts ***!
  \**************************/
/*! exports provided: createSagas, createAction, createAsyncAction, createAsyncActions, createSelectorsA, handleActions, createReducers, createSelectors, createSelector, createJSSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSagas", function() { return createSagas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAction", function() { return createAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAsyncAction", function() { return createAsyncAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAsyncActions", function() { return createAsyncActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelectorsA", function() { return createSelectorsA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleActions", function() { return handleActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReducers", function() { return createReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelectors", function() { return createSelectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createJSSelectors", function() { return createJSSelectors; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reselect */ "reselect");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSelector", function() { return reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"]; });

/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);
/* eslint-disable func-names */

/* eslint-disable no-param-reassign */





function createAction(type) {
  const action = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["createAction"])(type);

  action.is = aType => action.toString() === aType;

  return action;
}
/* tslint:disable-next-line */


function createAsyncAction(action, type) {
  return {
    [action]: createAction(type),
    [`${action}Success`]: createAction(`${type}_SUCCESS`),
    [`${action}Fail`]: createAction(`${type}_FAIL`)
  };
}

function createAsyncActions(type) {
  return [createAction(type), createAction(`${type}_SUCCESS`), createAction(`${type}_FAIL`)];
}
/* tslint:disable */


function handleActions(actions, initialState) {
  return Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["reduce"])(actions, (reducer, handler, action) => {
    reducer[action] = (state, act) => handler(state.set('action', action), act);

    return reducer;
  }, {}), initialState);
}

function createReducers(stateContext, reducers, initialState, preventResetting = false) {
  return {
    [stateContext]: Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["reduce"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["flatten"])(reducers), (reducer, action) => {
      if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(action.on)) {
        action.on.forEach(act => {
          reducer[act] = action.reducer;
        });
      } else reducer[action.on] = action.reducer;

      return reducer;
    }, preventResetting ? {} : {
      APP_STATE_RESET: () => initialState
    }), initialState)
  };
}

function createSagas(sagas) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["flatten"])(sagas).map(saga => {
    const {
      on,
      effect = redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"],
      worker
    } = saga;
    return function* () {
      yield effect(on, function* (action) {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["delay"])(0);
        yield worker(action);
      });
    };
  });
}

function createSelectorsA(context, keys = []) {
  const stateSelector = state => state[context];

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(keys)) return stateSelector;
  return keys.map(key => state => Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(key) ? stateSelector(state).getIn(key) : stateSelector(state).get(key));
}

function createSelectors(context, keys) {
  const stateSelector = state => state[context];

  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["reduce"])(keys, (selectors, key) => {
    selectors[`${key}Selector`] = state => stateSelector(state).get(key);

    return selectors;
  }, {});
}

function createJSSelectors(context, keys) {
  const stateSelector = state => state[context];

  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["reduce"])(keys, (selectors, key) => {
    selectors[`${key}Selector`] = state => stateSelector(state)[key];

    return selectors;
  }, {});
}



/***/ }),

/***/ "./src/lib/string.ts":
/*!***************************!*\
  !*** ./src/lib/string.ts ***!
  \***************************/
/*! exports provided: isUrl, generateUuid, capitalizeFirstLetter, unitPrices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUrl", function() { return isUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateUuid", function() { return generateUuid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalizeFirstLetter", function() { return capitalizeFirstLetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unitPrices", function() { return unitPrices; });
function isUrl(url) {
  return url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g) !== null;
}
const generateUuid = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
  /* eslint-disable */
  const r = Math.random() * 16 | 0;
  const v = c === 'x' ? r : r & 0x3 | 0x8;
  return v.toString(16);
  /* eslint-enable */
});
function capitalizeFirstLetter(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}
const unitPrices = [{
  value: 15,
  text: '15 tokens'
}, {
  value: 20,
  text: '20 tokens'
}, {
  value: 25,
  text: '25 tokens'
}, {
  value: 30,
  text: '30 tokens'
}, {
  value: 35,
  text: '35 tokens'
}, {
  value: 40,
  text: '40 tokens'
}, {
  value: 45,
  text: '45 tokens'
}, {
  value: 50,
  text: '50 tokens'
} // {
//   value: 55,
//   text: '55 tokens'
// },
// {
//   value: 60,
//   text: '60 tokens'
// },
// {
//   value: 65,
//   text: '65 tokens'
// },
// {
//   value: 70,
//   text: '70 tokens'
// },
// {
//   value: 75,
//   text: '75 tokens'
// },
// {
//   value: 80,
//   text: '80 tokens'
// },
// {
//   value: 85,
//   text: '85 tokens'
// },
// {
//   value: 90,
//   text: '90 tokens'
// },
// {
//   value: 95,
//   text: '95 tokens'
// },
// {
//   value: 100,
//   text: '100 tokens'
// },
// {
//   value: 120,
//   text: '120 tokens'
// },
// {
//   value: 140,
//   text: '140 tokens'
// },
// {
//   value: 160,
//   text: '160 tokens'
// },
// {
//   value: 180,
//   text: '180 tokens'
// },
// {
//   value: 200,
//   text: '200 tokens'
// },
// {
//   value: 220,
//   text: '220 tokens'
// },
// {
//   value: 240,
//   text: '240 tokens'
// },
// {
//   value: 260,
//   text: '260 tokens'
// },
// {
//   value: 280,
//   text: '280 tokens'
// },
// {
//   value: 300,
//   text: '300 tokens'
// },
// {
//   value: 320,
//   text: '320 tokens'
// },
// {
//   value: 340,
//   text: '340 tokens'
// },
// {
//   value: 360,
//   text: '360 tokens'
// },
// {
//   value: 380,
//   text: '380 tokens'
// },
// {
//   value: 400,
//   text: '400 tokens'
// },
// {
//   value: 420,
//   text: '420 tokens'
// },
// {
//   value: 440,
//   text: '440 tokens'
// },
// {
//   value: 460,
//   text: '460 tokens'
// },
// {
//   value: 480,
//   text: '480 tokens'
// },
// {
//   value: 500,
//   text: '500 tokens'
// },
// {
//   value: 550,
//   text: '550 tokens'
// },
// {
//   value: 600,
//   text: '600 tokens'
// },
// {
//   value: 650,
//   text: '650 tokens'
// },
// {
//   value: 700,
//   text: '700 tokens'
// },
// {
//   value: 750,
//   text: '750 tokens'
// },
// {
//   value: 800,
//   text: '800 tokens'
// },
// {
//   value: 850,
//   text: '850 tokens'
// },
// {
//   value: 900,
//   text: '900 tokens'
// },
// {
//   value: 950,
//   text: '950 tokens'
// },
// {
//   value: 1000,
//   text: '1000 tokens'
// }
];

/***/ }),

/***/ "./src/lib/utils.ts":
/*!**************************!*\
  !*** ./src/lib/utils.ts ***!
  \**************************/
/*! exports provided: arrayToTree, pathMatchRegexp, queryAncestors, getResponseError, isMobile, getUrlParameter, DAY_OF_WEEK, getDefaultSchedule, getNextShow, getSearchData, getBase64, convertConnectionData, checkUserLogin, getCurrentUser, isPhysicalProduct, chatBoxMessageClassName, formatDataWeight, formatDataHeight, formatPrice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayToTree", function() { return arrayToTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathMatchRegexp", function() { return pathMatchRegexp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryAncestors", function() { return queryAncestors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResponseError", function() { return getResponseError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUrlParameter", function() { return getUrlParameter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DAY_OF_WEEK", function() { return DAY_OF_WEEK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultSchedule", function() { return getDefaultSchedule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextShow", function() { return getNextShow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchData", function() { return getSearchData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBase64", function() { return getBase64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertConnectionData", function() { return convertConnectionData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkUserLogin", function() { return checkUserLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentUser", function() { return getCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPhysicalProduct", function() { return isPhysicalProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chatBoxMessageClassName", function() { return chatBoxMessageClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDataWeight", function() { return formatDataWeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDataHeight", function() { return formatDataHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatPrice", function() { return formatPrice; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path-to-regexp */ "path-to-regexp");
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path_to_regexp__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_api_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/api-request */ "./src/services/api-request.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/**
 * Convert an array to a tree-structured array.
 * @param   {array}     array     The Array need to Converted.
 * @param   {string}    id        The alias of the unique ID of the object in the array.
 * @param   {string}    parentId       The alias of the parent ID of the object in the array.
 * @param   {string}    children  The alias of children of the object in the array.
 * @return  {array}    Return a tree-structured array.
 */

function arrayToTree(array, id = 'id', parentId = 'pid', children = 'children') {
  const result = [];
  const hash = {};
  const data = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(array);
  data.forEach((item, index) => {
    hash[data[index][id]] = data[index];
  });
  data.forEach(item => {
    const hashParent = hash[item[parentId]];

    if (hashParent) {
      !hashParent[children] && (hashParent[children] = []);
      hashParent[children].push(item);
    } else {
      result.push(item);
    }
  });
  return result;
}
/**
 * Whether the path matches the regexp if the language prefix is ignored, https://github.com/pillarjs/path-to-regexp.
 * @param   {string|regexp|array}     regexp     Specify a string, array of strings, or a regular expression.
 * @param   {string}                  pathname   Specify the pathname to match.
 * @return  {array|null}              Return the result of the match or null.
 */

function pathMatchRegexp(regexp, pathname) {
  return path_to_regexp__WEBPACK_IMPORTED_MODULE_1__["pathToRegexp"](regexp).exec(pathname);
}
/**
 * In an array of objects, specify an object that traverses the objects whose parent ID matches.
 * @param   {array}     array     The Array need to Converted.
 * @param   {string}    current   Specify the object that needs to be queried.
 * @param   {string}    parentId  The alias of the parent ID of the object in the array.
 * @param   {string}    id        The alias of the unique ID of the object in the array.
 * @return  {array}    Return a key array.
 */

function queryAncestors(array, current, parentId, id = 'id') {
  const result = [current];
  const hashMap = new Map();
  array.forEach(item => hashMap.set(item[id], item)); // eslint-disable-next-line no-shadow

  const getPath = current => {
    const currentParentId = hashMap.get(current[id])[parentId];

    if (currentParentId) {
      result.push(hashMap.get(currentParentId));
      getPath(hashMap.get(currentParentId));
    }
  };

  getPath(current);
  return result;
}
function getResponseError(data) {
  if (!data) {
    return 'Bad request!';
  }

  if (typeof data === 'string') {
    return data;
  }

  if (Array.isArray(data.message)) {
    const item = data.message[0];

    if (!item.constraints) {
      return data.error || 'Bad request!';
    }

    return Object.values(item.constraints)[0];
  } // TODO - parse for langauge or others


  return typeof data.message === 'string' ? data.message : 'Bad request!';
}
function isMobile() {
  if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
    return true;
  }

  return false;
} // eslint-disable-next-line consistent-return

function getUrlParameter(sParam) {
  const sPageURL = decodeURIComponent(window.location.search.substring(1));
  const sURLVariables = sPageURL.split('&');
  let sParameterName;
  let i;

  for (i = 0; i < sURLVariables.length; i += 1) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
}
const DAY_OF_WEEK = {
  mon: 'Monday',
  tue: 'Tuesday',
  wed: 'Wednesday',
  thu: 'Thursday',
  fri: 'Friday',
  sat: 'Saturday',
  sun: 'Sunday'
};
function getDefaultSchedule() {
  const defaultVal = {
    start: null,
    end: null,
    closed: true
  };
  return {
    mon: _objectSpread({}, defaultVal),
    tue: _objectSpread({}, defaultVal),
    wed: _objectSpread({}, defaultVal),
    thu: _objectSpread({}, defaultVal),
    fri: _objectSpread({}, defaultVal),
    sat: _objectSpread({}, defaultVal),
    sun: _objectSpread({}, defaultVal)
  };
}
function getNextShow(schedule) {
  let weekDay = parseInt(moment__WEBPACK_IMPORTED_MODULE_2___default()().format('e'), 10);
  let i = 0;
  let nextShow;
  const performerShows = Object.keys(schedule).filter(key => !schedule[key].closed);

  do {
    const date = moment__WEBPACK_IMPORTED_MODULE_2___default()().day(weekDay).format('ddd').toLowerCase();

    if (performerShows.indexOf(date) > -1) {
      nextShow = date;
    }

    weekDay += 1;
    i += 1;
  } while (i < 7 && !nextShow);

  if (nextShow) {
    return `${schedule[nextShow].start} ${moment__WEBPACK_IMPORTED_MODULE_2___default()().day(weekDay - 1).format('DD/MM/YYYY')}`;
  }

  return '';
}
function getSearchData(pagination, filters, sorter, state) {
  let {
    sort,
    sortBy,
    filter
  } = state;
  const {
    limit
  } = state;

  if (filters) {
    Object.keys(filters).forEach(key => {
      if (filters[key] && filters[key].length) {
        // eslint-disable-next-line prefer-destructuring
        filter[key] = filters[key][0];
      }

      if (!filters[key]) {
        filter[key] = '';
      }
    });
  } else {
    filter = {};
  }

  if (sorter) {
    if (sorter.order) {
      const {
        field,
        order
      } = sorter;
      sort = _services_api_request__WEBPACK_IMPORTED_MODULE_3__["SORT"][order];
      sortBy = field;
    } else {
      sortBy = 'createdAt';
      sort = 'desc';
    }
  }

  return _objectSpread(_objectSpread(_objectSpread({}, state), filter), {}, {
    sort,
    sortBy,
    offset: (pagination.current - 1) * limit
  });
}
function getBase64(originFileObj, status = 'uploading', file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    if (originFileObj) {
      reader.readAsDataURL(originFileObj);

      reader.onload = () => resolve(_objectSpread(_objectSpread({}, originFileObj), {}, {
        status,
        name: originFileObj.name,
        url: reader.result,
        originFileObj
      }));

      reader.onerror = error => reject(error);
    } else {
      resolve(file);
    }
  });
}
function convertConnectionData(data) {
  const arr = data.split('%/%');
  const serverData = arr[1] && JSON.parse(arr[1]);
  const clientData = arr[0] && JSON.parse(arr[0]);
  return {
    serverData,
    clientData
  };
}
function checkUserLogin(isLoggedIn, user) {
  if (!isLoggedIn) return false;
  if (!user && !user._id) return false;
  return true;
}
function getCurrentUser(user, performer) {
  if (user && user._id) return user;
  if (performer && performer._id) return performer;
  return null;
}
function isPhysicalProduct(item) {
  if (item && item.type === 'physical') return true;
  return false;
}
function chatBoxMessageClassName(req) {
  const {
    isMine,
    startsSequence,
    endsSequence,
    data: {
      type
    }
  } = req;
  return classnames__WEBPACK_IMPORTED_MODULE_4___default()('message', {
    mine: isMine && type !== 'tip'
  }, {
    tip: type === 'tip'
  }, {
    start: !!startsSequence
  }, {
    end: !!endsSequence
  });
}

function convertFeetToCm(feet, inch) {
  const [f] = feet.split('.');
  const [i] = inch.split('.');
  return (parseInt(f, 10) * 12 + parseInt(i, 10)) * 2.54;
}

function formatDataWeight(min = 99, max = 319) {
  let i = min;
  const result = [];

  do {
    result[i] = (i * 0.45).toFixed(2);
    i += 1;
  } while (i < max);

  return result.map((v, index) => ({
    label: `${index}  lbs (${v}kg)`,
    value: `${index} lbs`
  }));
}
function formatDataHeight(min = 4, max = 7) {
  const result = [];

  for (let feet = min; feet < max; feet += 1) {
    for (let inch = 0; inch <= 11; inch += 1) {
      const a = convertFeetToCm(feet.toFixed(1).toString(), inch.toFixed(1).toString());
      result.push(`${feet}'${inch}" (${a.toFixed(2)} cm)`);
    }
  }

  return result.map(f => ({
    label: `${f}`,
    value: `${f}`
  }));
}
function formatPrice(price, fractionDigits = 2) {
  if (price) {
    return price.toFixed(fractionDigits);
  }

  return '';
}

/***/ }),

/***/ "./src/redux/auth/actions.ts":
/*!***********************************!*\
  !*** ./src/redux/auth/actions.ts ***!
  \***********************************/
/*! exports provided: login, loginSuccess, loginFail, loginRequesting, performerlogin, performerloginSuccess, performerloginFail, resetLoginData, studioLogin, studioLoginSuccess, studioLoginFail, performerRegister, performerRegisterSuccess, performerRegisterFail, setPerformerRegisterSubmitting, userRegister, userRegisterSuccess, userRegisterFail, setUserRegisterSubmitting, updatePassword, updatePasswordSuccess, updatePasswordFail, setUpdatePasswordSubmitting, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginSuccess", function() { return loginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginFail", function() { return loginFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequesting", function() { return loginRequesting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "performerlogin", function() { return performerlogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "performerloginSuccess", function() { return performerloginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "performerloginFail", function() { return performerloginFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetLoginData", function() { return resetLoginData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "studioLogin", function() { return studioLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "studioLoginSuccess", function() { return studioLoginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "studioLoginFail", function() { return studioLoginFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "performerRegister", function() { return performerRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "performerRegisterSuccess", function() { return performerRegisterSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "performerRegisterFail", function() { return performerRegisterFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPerformerRegisterSubmitting", function() { return setPerformerRegisterSubmitting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userRegister", function() { return userRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userRegisterSuccess", function() { return userRegisterSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userRegisterFail", function() { return userRegisterFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserRegisterSubmitting", function() { return setUserRegisterSubmitting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePassword", function() { return updatePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePasswordSuccess", function() { return updatePasswordSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePasswordFail", function() { return updatePasswordFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUpdatePasswordSubmitting", function() { return setUpdatePasswordSubmitting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");

const {
  login,
  loginSuccess,
  loginFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('login', 'LOGIN');
const loginRequesting = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('LOGIN_REQUESTING');
const {
  performerlogin,
  performerloginSuccess,
  performerloginFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('performerlogin', 'PERFORMER_LOGIN');
const resetLoginData = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('resetLoginData');
const {
  studioLogin,
  studioLoginSuccess,
  studioLoginFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('studioLogin', 'STUDIO_LOGIN');
const {
  performerRegister,
  performerRegisterSuccess,
  performerRegisterFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('performerRegister', 'PERFORMER_REGISTER');
const setPerformerRegisterSubmitting = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('SET_PERFORMER_REGISTER_SUBMITTING');
const {
  userRegister,
  userRegisterSuccess,
  userRegisterFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('userRegister', 'USER_REGISTER');
const setUserRegisterSubmitting = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('SET_USER_REGISTER_SUBMITTING');
const {
  updatePassword,
  updatePasswordSuccess,
  updatePasswordFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('updatePassword', 'UPDATE_PASSWORD');
const setUpdatePasswordSubmitting = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('SET_UPDATE_PASSWORD_SUBMITTING');
const logout = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('logout');

/***/ }),

/***/ "./src/redux/user/actions.ts":
/*!***********************************!*\
  !*** ./src/redux/user/actions.ts ***!
  \***********************************/
/*! exports provided: updateCurrentUser, updateCurrentUserAvatar, updateCurrentUserBalance, updateUser, updateUserSuccess, updateUserFail, setUpdating, setReducer, buyTokenSuccess, getFavoritePerformers, getFavoritePerformersSuccess, getFavoritePerformersFailed, gettingFavoritePerformers, removeFavorite, getPaymentTokenHistroy, getPaymentTokenHistroySuccess, getPaymentTokenHistroyFail, gettigPaymentTokenHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCurrentUser", function() { return updateCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCurrentUserAvatar", function() { return updateCurrentUserAvatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCurrentUserBalance", function() { return updateCurrentUserBalance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUserSuccess", function() { return updateUserSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUserFail", function() { return updateUserFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUpdating", function() { return setUpdating; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setReducer", function() { return setReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buyTokenSuccess", function() { return buyTokenSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFavoritePerformers", function() { return getFavoritePerformers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFavoritePerformersSuccess", function() { return getFavoritePerformersSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFavoritePerformersFailed", function() { return getFavoritePerformersFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gettingFavoritePerformers", function() { return gettingFavoritePerformers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFavorite", function() { return removeFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPaymentTokenHistroy", function() { return getPaymentTokenHistroy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPaymentTokenHistroySuccess", function() { return getPaymentTokenHistroySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPaymentTokenHistroyFail", function() { return getPaymentTokenHistroyFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gettigPaymentTokenHistory", function() { return gettigPaymentTokenHistory; });
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");

const updateCurrentUser = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('updateCurrentUser');
const updateCurrentUserAvatar = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('updateCurrentUserAvatar');
const updateCurrentUserBalance = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('updateCurrentUserBalance');
const {
  updateUser,
  updateUserSuccess,
  updateUserFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('updateUser', 'UPDATE_USER');
const setUpdating = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('updatingUser');
const setReducer = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('setUserReducer');
const buyTokenSuccess = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('buyTokenSuccess');
const {
  getFavoritePerformers,
  getFavoritePerformersSuccess,
  getFavoritePerformersFailed
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getFavoritePerformers', 'GET_FAVOURITE');
const gettingFavoritePerformers = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('GETTING_FAVORITE');
const removeFavorite = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('REMOVE_FAVORITE');
const {
  getPaymentTokenHistroy,
  getPaymentTokenHistroySuccess,
  getPaymentTokenHistroyFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getPaymentTokenHistroy', 'GET_PAYMET_TOKE_HISTORY');
const gettigPaymentTokenHistory = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('GETTING_PAYMET_TOKE_HISTORY');

/***/ }),

/***/ "./src/services/api-request.ts":
/*!*************************************!*\
  !*** ./src/services/api-request.ts ***!
  \*************************************/
/*! exports provided: TOKEN, ROLE, PERFORMER_ROLE, USER_ROLE, STUDIO_ROLE, SORT, APIRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN", function() { return TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROLE", function() { return ROLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PERFORMER_ROLE", function() { return PERFORMER_ROLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_ROLE", function() { return USER_ROLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STUDIO_ROLE", function() { return STUDIO_ROLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SORT", function() { return SORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIRequest", function() { return APIRequest; });
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lib/string */ "./src/lib/string.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./src/services/config.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const TOKEN = 'token';
const ROLE = 'role';
const PERFORMER_ROLE = 'performer';
const USER_ROLE = 'user';
const STUDIO_ROLE = 'studio';
const SORT = {
  descend: 'desc',
  ascend: 'asc'
};
class APIRequest {
  setAuthHeaderToken(token) {
    APIRequest.token = token;
  }
  /**
   * Parses the JSON returned by a network request
   *
   * @param  {object} response A response from a network request
   *
   * @return {object}          The parsed JSON from the request
   */


  parseJSON(response) {
    if (response.status === 204 || response.status === 205) {
      return null;
    }

    return response.json();
  }
  /**
   * Checks if a network request came back fine, and throws an error if not
   *
   * @param  {object} response   A response from a network request
   *
   * @return {object|undefined} Returns either the response, or throws an error
   */


  async checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }

    if (response.status === 413) {
      throw new Error('Request Entity Too Large');
    }

    if (response.status === 403) {
      if (false) {}
    } // const error = new Error(response.statusText) as any;
    // error.response = response;
    // throw error;


    throw response.clone().json();
  }

  request(url, method, body, headers) {
    const verb = (method || 'get').toUpperCase();

    const updatedHeader = _objectSpread({
      'Content-Type': 'application/json',
      // TODO - check me
      Authorization: APIRequest.token || (false ? undefined : '')
    }, headers || {});

    const config = Object(_config__WEBPACK_IMPORTED_MODULE_4__["getGlobalConfig"])();
    return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(Object(_lib_string__WEBPACK_IMPORTED_MODULE_3__["isUrl"])(url) ? url : `${config.API_ENDPOINT || config.NEXT_PUBLIC_API_ENDPOINT}${url}`, {
      method: verb,
      headers: updatedHeader,
      body: body ? JSON.stringify(body) : null
    }).then(this.checkStatus).then(this.parseJSON);
  }

  buildUrl(baseUrl, params) {
    if (!params) {
      return baseUrl;
    }

    const queryString = Object.keys(params).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`).join('&');
    return `${baseUrl}?${queryString}`;
  }

  get(url, headers) {
    return this.request(url, 'get', null, headers);
  }

  post(url, data, headers) {
    return this.request(url, 'post', data, headers);
  }

  put(url, data, headers) {
    return this.request(url, 'put', data, headers);
  }

  del(url, data, headers) {
    return this.request(url, 'delete', data, headers);
  }

  upload(url, files, options = {
    onProgress() {},

    method: 'POST'
  }) {
    const config = Object(_config__WEBPACK_IMPORTED_MODULE_4__["getGlobalConfig"])();
    const uploadUrl = Object(_lib_string__WEBPACK_IMPORTED_MODULE_3__["isUrl"])(url) ? url : `${config.NEXT_PUBLIC_API_ENDPOINT}${url}`;
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.upload.addEventListener('progress', event => {
        if (event.lengthComputable) {
          options.onProgress({
            percentage: event.loaded / event.total * 100
          });
        }
      });
      req.addEventListener('load', () => {
        const success = req.status >= 200 && req.status < 300;
        const {
          response
        } = req;

        if (!success) {
          return reject(response);
        }

        return resolve(response);
      });
      req.upload.addEventListener('error', () => {
        reject(req.response);
      });
      const formData = new FormData();
      files.forEach(f => formData.append(f.fieldname, f.file, f.file.name));
      options.customData && Object.keys(options.customData).forEach(fieldname => typeof options.customData[fieldname] !== 'undefined' && formData.append(fieldname, options.customData[fieldname]));
      req.responseType = 'json';
      req.open(options.method || 'POST', uploadUrl);
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(TOKEN);

      if (token) {
        req.setRequestHeader('Authorization', token);
      }

      req.send(formData);
    });
  }

  register(url, data, options = {
    onProgress() {}

  }) {
    const config = Object(_config__WEBPACK_IMPORTED_MODULE_4__["getGlobalConfig"])();
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.upload.addEventListener('progress', event => {
        if (event.lengthComputable) {
          options.onProgress({
            percentage: event.loaded / event.total * 100
          });
        }
      });
      req.addEventListener('load', () => {
        const success = req.status >= 200 && req.status < 300;
        const {
          response
        } = req;

        if (!success) {
          return reject(response);
        }

        return resolve(response);
      });
      req.upload.addEventListener('error', () => {
        reject(req.response);
      });
      const formData = new FormData(); // formData.append('file', file, file.name);

      if (data.documentVerification) {
        const documentVerificationFile = data.documentVerification.file.originFileObj;
        formData.append('documentVerification', documentVerificationFile, documentVerificationFile.name);
      }

      if (data.idVerification) {
        const idVerificationDile = data.idVerification.file.originFileObj;
        formData.append('idVerification', idVerificationDile, idVerificationDile.name);
      }

      Object.keys(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["omit"])(data, ['documentVerification', 'idVerification'])).forEach(v => {
        formData.append(v, data[v]);
      });
      req.responseType = 'json';
      req.open('POST', Object(_lib_string__WEBPACK_IMPORTED_MODULE_3__["isUrl"])(url) ? url : `${config.NEXT_PUBLIC_API_ENDPOINT}${url}`);
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(TOKEN);

      if (token) {
        req.setRequestHeader('Authorization', token);
      }

      req.send(formData);
    });
  }

}

_defineProperty(APIRequest, "token", '');

/***/ }),

/***/ "./src/services/config.ts":
/*!********************************!*\
  !*** ./src/services/config.ts ***!
  \********************************/
/*! exports provided: setGlobalConfig, getGlobalConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGlobalConfig", function() { return setGlobalConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGlobalConfig", function() { return getGlobalConfig; });
let globalConfig = {};
const setGlobalConfig = config => {
  globalConfig = config;
};
const getGlobalConfig = () => globalConfig;

/***/ }),

/***/ "./src/services/setting.service.ts":
/*!*****************************************!*\
  !*** ./src/services/setting.service.ts ***!
  \*****************************************/
/*! exports provided: SettingService, settingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingService", function() { return SettingService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingService", function() { return settingService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");

class SettingService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  all(group = '') {
    return this.get(this.buildUrl('/settings/public', {
      group
    }));
  }

  getCountries() {
    return this.get('/countries/list');
  }

  getTimezones() {
    return this.get('/timezones/list');
  }

}
const settingService = new SettingService();

/***/ }),

/***/ "./src/services/user.service.ts":
/*!**************************************!*\
  !*** ./src/services/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService, userService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userService", function() { return userService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/services/config.ts");


class UserService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  me(headers) {
    return this.get('/users/me', headers);
  }

  updateMe(payload) {
    return this.put('/users', payload);
  }

  getAvatarUploadUrl(userId) {
    const config = Object(_config__WEBPACK_IMPORTED_MODULE_1__["getGlobalConfig"])();

    if (userId) {
      return `${config.NEXT_PUBLIC_API_ENDPOINT}/users/${userId}/avatar/upload`;
    }

    return `${config.NEXT_PUBLIC_API_ENDPOINT}/users/avatar/upload`;
  }

  search(query) {
    return this.get(this.buildUrl('/users/search', query));
  }

  findById(id) {
    return this.get(`/users/view/${id}`);
  }

}
const userService = new UserService();

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "path-to-regexp":
/*!*********************************!*\
  !*** external "path-to-regexp" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path-to-regexp");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux-actions":
/*!********************************!*\
  !*** external "redux-actions" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-actions");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "reselect":
/*!***************************!*\
  !*** external "reselect" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWNjb3VudC91c2VyL2FjY291bnQtc2V0dGluZ3MvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2F1dGgvcGFzc3dvcmQtY2hhbmdlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vbGF5b3V0L3BhZ2UtaGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91c2VyL3Byb2ZpbGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9saWIvZmlsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3JlZHV4LnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvc3RyaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2F1dGgvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvdXNlci9hY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9hcGktcmVxdWVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9zZXR0aW5nLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3VzZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNvbW9ycGhpYy11bmZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoLXRvLXJlZ2V4cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1hY3Rpb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVzZWxlY3RcIiJdLCJuYW1lcyI6WyJVc2VyUHJvZmlsZVBhZ2UiLCJQdXJlQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicXVlcnkiLCJhY3Rpb24iLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJjb3VudHJpZXMiLCJ1cGxvYWRlZEF2YXRhciIsImF2YXRhclVwbG9hZGluZyIsImNvbXBvbmVudERpZE1vdW50IiwiZ2V0Q291bnRyaWVzIiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwic3VjY2VzcyIsInVwZGF0ZVVzZXJFcnJvciIsImF1dGgiLCJtZXNzYWdlIiwiZXJyb3IiLCJnZXRSZXNwb25zZUVycm9yIiwidXBkYXRlUGFzc3dvcmQiLCJsZW5ndGgiLCJvbkZpbmlzaCIsImRhdGEiLCJ1c2VyIiwidXBkYXRlVXNlciIsImRpc3BhdGNoVXBkYXRlVXNlciIsIm9uQ2hhbmdlQXZhdGFyIiwiZmlsZSIsInN0YXR1cyIsInNldFN0YXRlIiwicmVzcG9uc2UiLCJ1cmwiLCJvblRhYnNDaGFuZ2UiLCJrZXkiLCJSb3V0ZXIiLCJwdXNoIiwicGF0aG5hbWUiLCJzaGFsbG93Iiwib25QYXNzd29yZENoYW5nZSIsImRpc3BhdGNoVXBkYXRlUGFzc3dvcmQiLCJzZXR0aW5nU2VydmljZSIsInJlbmRlciIsInVzZXJVcGRhdGluZyIsInVzZXJuYW1lIiwicGFkZGluZyIsImJpbmQiLCJ1c2VyU2VydmljZSIsImdldEF2YXRhclVwbG9hZFVybCIsIm1hcFN0YXRlVG9Qcm9wcyIsImN1cnJlbnQiLCJ1cGRhdGVVc2VyU3VjY2VzcyIsIm1hcERpc3BhdGNoIiwiY29ubmVjdCIsImZvcm1JdGVtTGF5b3V0IiwibGFiZWxDb2wiLCJ4cyIsInNwYW4iLCJzbSIsIndyYXBwZXJDb2wiLCJQYXNzd29yZENoYW5nZSIsInN1Ym1pdGluZyIsInJlcXVpcmVkIiwibWluIiwibWF4IiwiZ2V0RmllbGRWYWx1ZSIsInZhbGlkYXRvciIsInJ1bGUiLCJ2YWx1ZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiRXJyb3IiLCJkZWZhdWx0UHJvcHMiLCJ0aXRsZSIsImV4dHJhIiwidGFpbEZvcm1JdGVtTGF5b3V0Iiwib2Zmc2V0IiwiVXNlclByb2ZpbGUiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImdlbmRlciIsImVtYWlsIiwiY291bnRyeSIsInBob25lIiwiY2l0eSIsImRhdGVPZkJpcnRoIiwidXBsb2FkQXZhdGFyVXJsIiwiYXZhdGFyIiwibG9hZGluZyIsImZvcm0iLCJGb3JtIiwidXNlRm9ybSIsInVwbG9hZEJ1dHRvbiIsIm1vbWVudCIsInBhdHRlcm4iLCJSZWdFeHAiLCJ3aGl0ZXNwYWNlIiwidHlwZSIsInllYXJzIiwiZGlmZiIsIndpZHRoIiwibWFwIiwiYyIsIm5hbWUiLCJjb2RlIiwiQXV0aG9yaXphdGlvbiIsImNvb2tpZSIsImJlZm9yZUF2YXRhclVwbG9hZCIsImhlaWdodCIsInBvc2l0aW9uIiwiYm9yZGVyUmFkaXVzIiwiZXh0Iiwic3BsaXQiLCJwb3AiLCJ0b0xvd2VyQ2FzZSIsImNvbmZpZyIsImdldEdsb2JhbENvbmZpZyIsImlzSW1hZ2VBY2NlcHQiLCJORVhUX1BVQkxJQ19JTUFHRV9BQ0NQRVQiLCJpdGVtIiwidHJpbSIsImluZGV4T2YiLCJpc0x0Mk0iLCJzaXplIiwiTkVYVF9QVUJMSUNfTUFYSU1VTV9TSVpFX1VQTE9BRF9BVkFUQVIiLCJjcmVhdGVBY3Rpb24iLCJSZWR1eENyZWF0ZUFjdGlvbiIsImlzIiwiYVR5cGUiLCJ0b1N0cmluZyIsImNyZWF0ZUFzeW5jQWN0aW9uIiwiY3JlYXRlQXN5bmNBY3Rpb25zIiwiaGFuZGxlQWN0aW9ucyIsImFjdGlvbnMiLCJpbml0aWFsU3RhdGUiLCJoYW5kbGVSZWR1eEFjdGlvbnMiLCJyZWR1Y2UiLCJyZWR1Y2VyIiwiaGFuZGxlciIsImFjdCIsInNldCIsImNyZWF0ZVJlZHVjZXJzIiwic3RhdGVDb250ZXh0IiwicmVkdWNlcnMiLCJwcmV2ZW50UmVzZXR0aW5nIiwiZmxhdHRlbiIsImlzQXJyYXkiLCJvbiIsImZvckVhY2giLCJBUFBfU1RBVEVfUkVTRVQiLCJjcmVhdGVTYWdhcyIsInNhZ2FzIiwic2FnYSIsImVmZmVjdCIsInRha2VMYXRlc3QiLCJ3b3JrZXIiLCJkZWxheSIsImNyZWF0ZVNlbGVjdG9yc0EiLCJjb250ZXh0Iiwia2V5cyIsInN0YXRlU2VsZWN0b3IiLCJpc0VtcHR5IiwiZ2V0SW4iLCJnZXQiLCJjcmVhdGVTZWxlY3RvcnMiLCJzZWxlY3RvcnMiLCJjcmVhdGVKU1NlbGVjdG9ycyIsImlzVXJsIiwibWF0Y2giLCJnZW5lcmF0ZVV1aWQiLCJyZXBsYWNlIiwiciIsIk1hdGgiLCJyYW5kb20iLCJ2IiwiY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIiwic3RyIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsInVuaXRQcmljZXMiLCJ0ZXh0IiwiYXJyYXlUb1RyZWUiLCJhcnJheSIsImlkIiwicGFyZW50SWQiLCJjaGlsZHJlbiIsInJlc3VsdCIsImhhc2giLCJjbG9uZURlZXAiLCJpbmRleCIsImhhc2hQYXJlbnQiLCJwYXRoTWF0Y2hSZWdleHAiLCJyZWdleHAiLCJwYXRoVG9SZWdleHAiLCJleGVjIiwicXVlcnlBbmNlc3RvcnMiLCJoYXNoTWFwIiwiTWFwIiwiZ2V0UGF0aCIsImN1cnJlbnRQYXJlbnRJZCIsIkFycmF5IiwiY29uc3RyYWludHMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJpc01vYmlsZSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImdldFVybFBhcmFtZXRlciIsInNQYXJhbSIsInNQYWdlVVJMIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJzdWJzdHJpbmciLCJzVVJMVmFyaWFibGVzIiwic1BhcmFtZXRlck5hbWUiLCJpIiwidW5kZWZpbmVkIiwiREFZX09GX1dFRUsiLCJtb24iLCJ0dWUiLCJ3ZWQiLCJ0aHUiLCJmcmkiLCJzYXQiLCJzdW4iLCJnZXREZWZhdWx0U2NoZWR1bGUiLCJkZWZhdWx0VmFsIiwic3RhcnQiLCJlbmQiLCJjbG9zZWQiLCJnZXROZXh0U2hvdyIsInNjaGVkdWxlIiwid2Vla0RheSIsInBhcnNlSW50IiwiZm9ybWF0IiwibmV4dFNob3ciLCJwZXJmb3JtZXJTaG93cyIsImZpbHRlciIsImRhdGUiLCJkYXkiLCJnZXRTZWFyY2hEYXRhIiwicGFnaW5hdGlvbiIsImZpbHRlcnMiLCJzb3J0ZXIiLCJzb3J0Iiwic29ydEJ5IiwibGltaXQiLCJvcmRlciIsImZpZWxkIiwiU09SVCIsImdldEJhc2U2NCIsIm9yaWdpbkZpbGVPYmoiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZCIsIm9uZXJyb3IiLCJjb252ZXJ0Q29ubmVjdGlvbkRhdGEiLCJhcnIiLCJzZXJ2ZXJEYXRhIiwiSlNPTiIsInBhcnNlIiwiY2xpZW50RGF0YSIsImNoZWNrVXNlckxvZ2luIiwiaXNMb2dnZWRJbiIsIl9pZCIsImdldEN1cnJlbnRVc2VyIiwicGVyZm9ybWVyIiwiaXNQaHlzaWNhbFByb2R1Y3QiLCJjaGF0Qm94TWVzc2FnZUNsYXNzTmFtZSIsInJlcSIsImlzTWluZSIsInN0YXJ0c1NlcXVlbmNlIiwiZW5kc1NlcXVlbmNlIiwiY2xhc3NuYW1lcyIsIm1pbmUiLCJ0aXAiLCJjb252ZXJ0RmVldFRvQ20iLCJmZWV0IiwiaW5jaCIsImYiLCJmb3JtYXREYXRhV2VpZ2h0IiwidG9GaXhlZCIsImxhYmVsIiwiZm9ybWF0RGF0YUhlaWdodCIsImEiLCJmb3JtYXRQcmljZSIsInByaWNlIiwiZnJhY3Rpb25EaWdpdHMiLCJsb2dpbiIsImxvZ2luU3VjY2VzcyIsImxvZ2luRmFpbCIsImxvZ2luUmVxdWVzdGluZyIsInBlcmZvcm1lcmxvZ2luIiwicGVyZm9ybWVybG9naW5TdWNjZXNzIiwicGVyZm9ybWVybG9naW5GYWlsIiwicmVzZXRMb2dpbkRhdGEiLCJzdHVkaW9Mb2dpbiIsInN0dWRpb0xvZ2luU3VjY2VzcyIsInN0dWRpb0xvZ2luRmFpbCIsInBlcmZvcm1lclJlZ2lzdGVyIiwicGVyZm9ybWVyUmVnaXN0ZXJTdWNjZXNzIiwicGVyZm9ybWVyUmVnaXN0ZXJGYWlsIiwic2V0UGVyZm9ybWVyUmVnaXN0ZXJTdWJtaXR0aW5nIiwidXNlclJlZ2lzdGVyIiwidXNlclJlZ2lzdGVyU3VjY2VzcyIsInVzZXJSZWdpc3RlckZhaWwiLCJzZXRVc2VyUmVnaXN0ZXJTdWJtaXR0aW5nIiwidXBkYXRlUGFzc3dvcmRTdWNjZXNzIiwidXBkYXRlUGFzc3dvcmRGYWlsIiwic2V0VXBkYXRlUGFzc3dvcmRTdWJtaXR0aW5nIiwibG9nb3V0IiwidXBkYXRlQ3VycmVudFVzZXIiLCJ1cGRhdGVDdXJyZW50VXNlckF2YXRhciIsInVwZGF0ZUN1cnJlbnRVc2VyQmFsYW5jZSIsInVwZGF0ZVVzZXJGYWlsIiwic2V0VXBkYXRpbmciLCJzZXRSZWR1Y2VyIiwiYnV5VG9rZW5TdWNjZXNzIiwiZ2V0RmF2b3JpdGVQZXJmb3JtZXJzIiwiZ2V0RmF2b3JpdGVQZXJmb3JtZXJzU3VjY2VzcyIsImdldEZhdm9yaXRlUGVyZm9ybWVyc0ZhaWxlZCIsImdldHRpbmdGYXZvcml0ZVBlcmZvcm1lcnMiLCJyZW1vdmVGYXZvcml0ZSIsImdldFBheW1lbnRUb2tlbkhpc3Ryb3kiLCJnZXRQYXltZW50VG9rZW5IaXN0cm95U3VjY2VzcyIsImdldFBheW1lbnRUb2tlbkhpc3Ryb3lGYWlsIiwiZ2V0dGlnUGF5bWVudFRva2VuSGlzdG9yeSIsIlRPS0VOIiwiUk9MRSIsIlBFUkZPUk1FUl9ST0xFIiwiVVNFUl9ST0xFIiwiU1RVRElPX1JPTEUiLCJkZXNjZW5kIiwiYXNjZW5kIiwiQVBJUmVxdWVzdCIsInNldEF1dGhIZWFkZXJUb2tlbiIsInRva2VuIiwicGFyc2VKU09OIiwianNvbiIsImNoZWNrU3RhdHVzIiwiY2xvbmUiLCJyZXF1ZXN0IiwibWV0aG9kIiwiYm9keSIsImhlYWRlcnMiLCJ2ZXJiIiwidXBkYXRlZEhlYWRlciIsImZldGNoIiwiQVBJX0VORFBPSU5UIiwiTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UIiwic3RyaW5naWZ5IiwidGhlbiIsImJ1aWxkVXJsIiwiYmFzZVVybCIsInBhcmFtcyIsInF1ZXJ5U3RyaW5nIiwiayIsImVuY29kZVVSSUNvbXBvbmVudCIsImpvaW4iLCJwb3N0IiwicHV0IiwiZGVsIiwidXBsb2FkIiwiZmlsZXMiLCJvcHRpb25zIiwib25Qcm9ncmVzcyIsInVwbG9hZFVybCIsIlhNTEh0dHBSZXF1ZXN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwibGVuZ3RoQ29tcHV0YWJsZSIsInBlcmNlbnRhZ2UiLCJsb2FkZWQiLCJ0b3RhbCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmaWVsZG5hbWUiLCJjdXN0b21EYXRhIiwicmVzcG9uc2VUeXBlIiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJzZW5kIiwicmVnaXN0ZXIiLCJkb2N1bWVudFZlcmlmaWNhdGlvbiIsImRvY3VtZW50VmVyaWZpY2F0aW9uRmlsZSIsImlkVmVyaWZpY2F0aW9uIiwiaWRWZXJpZmljYXRpb25EaWxlIiwib21pdCIsImdsb2JhbENvbmZpZyIsInNldEdsb2JhbENvbmZpZyIsIlNldHRpbmdTZXJ2aWNlIiwiYWxsIiwiZ3JvdXAiLCJnZXRUaW1lem9uZXMiLCJVc2VyU2VydmljZSIsIm1lIiwidXBkYXRlTWUiLCJwYXlsb2Fk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SUFBSWlXLFdBQUosRUFBcEIsQzs7Ozs7Ozs7Ozs7QUM5QlAsOEM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEscUMiLCJmaWxlIjoicGFnZXMvYWNjb3VudC91c2VyL2FjY291bnQtc2V0dGluZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FjY291bnQvdXNlci9hY2NvdW50LXNldHRpbmdzL2luZGV4LnRzeFwiKTtcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgbWVzc2FnZSwgVGFic1xufSBmcm9tICdhbnRkJztcbmltcG9ydCBQYWdlSGVhZGVyIGZyb20gJ0Bjb21wb25lbnRzL2NvbW1vbi9sYXlvdXQvcGFnZS1oZWFkZXInO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7XG4gIElVc2VyLFxuICBJQ291bnRyaWVzLFxuICBJVXNlclVwZGF0ZUZvcm1EYXRhLFxuICBJVXBkYXRlUGFzc3dvcmRGb3JtRGF0YVxufSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgVXNlclByb2ZpbGUgZnJvbSAnQGNvbXBvbmVudHMvdXNlci9wcm9maWxlJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBzZXR0aW5nU2VydmljZSB9IGZyb20gJ3NyYy9zZXJ2aWNlcy9zZXR0aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgdXNlclNlcnZpY2UgfSBmcm9tICdzcmMvc2VydmljZXMvdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7IHVwZGF0ZVVzZXIgfSBmcm9tICdzcmMvcmVkdXgvdXNlci9hY3Rpb25zJztcbmltcG9ydCB7IHVwZGF0ZVBhc3N3b3JkIH0gZnJvbSAnc3JjL3JlZHV4L2F1dGgvYWN0aW9ucyc7XG5pbXBvcnQgeyBnZXRSZXNwb25zZUVycm9yIH0gZnJvbSAnQGxpYi91dGlscyc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBQYXNzd29yZENoYW5nZSBmcm9tICdAY29tcG9uZW50cy9hdXRoL3Bhc3N3b3JkLWNoYW5nZSc7XG5cbmltcG9ydCAnLi9pbmRleC5sZXNzJztcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHVzZXI6IElVc2VyO1xuICBhY3Rpb246IHN0cmluZztcbiAgYXV0aDogYW55O1xuICB1cGRhdGVVc2VyKGRhdGE6IElVc2VyVXBkYXRlRm9ybURhdGEpOiBGdW5jdGlvbjtcbiAgdXBkYXRlUGFzc3dvcmQoZGF0YTogSVVwZGF0ZVBhc3N3b3JkRm9ybURhdGEpOiBGdW5jdGlvbjtcbiAgdXNlclVwZGF0aW5nOiBib29sZWFuO1xuICBzdWNjZXNzOiBib29sZWFuO1xuICB1cGRhdGVVc2VyRXJyb3I6IGFueTtcbn1cblxuaW50ZXJmYWNlIElTdGF0ZXMge1xuICBjb3VudHJpZXM6IElDb3VudHJpZXNbXTtcbiAgYXZhdGFyVXBsb2FkaW5nOiBib29sZWFuO1xuICB1cGxvYWRlZEF2YXRhcjogc3RyaW5nO1xufVxuXG5jbGFzcyBVc2VyUHJvZmlsZVBhZ2UgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PElQcm9wcywgSVN0YXRlcz4ge1xuICBzdGF0aWMgYXV0aGVudGljYXRlID0gdHJ1ZTtcblxuICBzdGF0aWMgbGF5b3V0ID0gJ3ByaW1hcnknO1xuXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMoeyBjdHggfSkge1xuICAgIGNvbnN0IHsgcXVlcnkgfSA9IGN0eDtcbiAgICByZXR1cm4ge1xuICAgICAgYWN0aW9uOiBxdWVyeS5hY3Rpb25cbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY291bnRyaWVzOiBbXSxcbiAgICAgIHVwbG9hZGVkQXZhdGFyOiAnJyxcbiAgICAgIGF2YXRhclVwbG9hZGluZzogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBhY3Rpb24gfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFhY3Rpb24gfHwgYWN0aW9uID09PSAnYWNjb3VudC1pbmZvcm1hdGlvbicpIHRoaXMuZ2V0Q291bnRyaWVzKCk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzOiBJUHJvcHMpIHtcbiAgICBjb25zdCB7XG4gICAgICBzdWNjZXNzLCB1cGRhdGVVc2VyRXJyb3IsIGF1dGgsIGFjdGlvblxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgY291bnRyaWVzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmIChwcmV2UHJvcHMuc3VjY2VzcyAhPT0gc3VjY2VzcyAmJiBzdWNjZXNzKSB7XG4gICAgICBtZXNzYWdlLnN1Y2Nlc3MoJ1VwZGF0ZSBQcm9maWxlIFN1Y2Nlc3MuJyk7XG4gICAgfVxuXG4gICAgaWYgKHByZXZQcm9wcy51cGRhdGVVc2VyRXJyb3IgIT09IHVwZGF0ZVVzZXJFcnJvciAmJiB1cGRhdGVVc2VyRXJyb3IpIHtcbiAgICAgIG1lc3NhZ2UuZXJyb3IoZ2V0UmVzcG9uc2VFcnJvcih1cGRhdGVVc2VyRXJyb3IpKTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBwcmV2UHJvcHMuYXV0aC51cGRhdGVQYXNzd29yZC5zdWNjZXNzICE9PSBhdXRoLnVwZGF0ZVBhc3N3b3JkLnN1Y2Nlc3NcbiAgICAgICYmIGF1dGgudXBkYXRlUGFzc3dvcmQuc3VjY2Vzc1xuICAgICkge1xuICAgICAgbWVzc2FnZS5zdWNjZXNzKCdVcGRhdGUgUGFzc3dvcmQgU3VjY2Vzcy4nKTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBwcmV2UHJvcHMuYXV0aC51cGRhdGVQYXNzd29yZC5lcnJvciAhPT0gYXV0aC51cGRhdGVQYXNzd29yZC5lcnJvclxuICAgICAgJiYgYXV0aC51cGRhdGVQYXNzd29yZC5lcnJvclxuICAgICkge1xuICAgICAgbWVzc2FnZS5lcnJvcihnZXRSZXNwb25zZUVycm9yKGF1dGgudXBkYXRlUGFzc3dvcmQuZXJyb3IpKTtcbiAgICB9XG5cbiAgICBpZiAoIWNvdW50cmllcy5sZW5ndGggJiYgYWN0aW9uID09PSAnYWNjb3VudC1pbmZvcm1hdGlvbicpIHtcbiAgICAgIHRoaXMuZ2V0Q291bnRyaWVzKCk7XG4gICAgfVxuICB9XG5cbiAgb25GaW5pc2goZGF0YTogYW55KSB7XG4gICAgY29uc3QgeyB1c2VyLCB1cGRhdGVVc2VyOiBkaXNwYXRjaFVwZGF0ZVVzZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgZGlzcGF0Y2hVcGRhdGVVc2VyKHsgLi4udXNlciwgLi4uZGF0YSB9KTtcbiAgfVxuXG4gIG9uQ2hhbmdlQXZhdGFyKHsgZmlsZSB9KSB7XG4gICAgaWYgKGZpbGUuc3RhdHVzID09PSAndXBsb2FkaW5nJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGF2YXRhclVwbG9hZGluZzogdHJ1ZSB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZmlsZS5zdGF0dXMgPT09ICdkb25lJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGF2YXRhclVwbG9hZGluZzogZmFsc2UgfSk7XG4gICAgICBpZiAoZmlsZS5yZXNwb25zZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB1cGxvYWRlZEF2YXRhcjogZmlsZS5yZXNwb25zZS5kYXRhLnVybFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblRhYnNDaGFuZ2Uoa2V5OiBzdHJpbmcpIHtcbiAgICBSb3V0ZXIucHVzaChcbiAgICAgIHsgcGF0aG5hbWU6ICcvYWNjb3VudC91c2VyL2FjY291bnQtc2V0dGluZ3MnLCBxdWVyeTogeyBhY3Rpb246IGtleSB9IH0sXG4gICAgICBgL2FjY291bnQvdXNlci9hY2NvdW50LXNldHRpbmdzP2FjdGlvbj0ke2tleX1gLFxuICAgICAgeyBzaGFsbG93OiBmYWxzZSB9XG4gICAgKTtcbiAgfVxuXG4gIG9uUGFzc3dvcmRDaGFuZ2UoZGF0YTogSVVwZGF0ZVBhc3N3b3JkRm9ybURhdGEpIHtcbiAgICBjb25zdCB7IHVwZGF0ZVBhc3N3b3JkOiBkaXNwYXRjaFVwZGF0ZVBhc3N3b3JkIH0gPSB0aGlzLnByb3BzO1xuICAgIGRpc3BhdGNoVXBkYXRlUGFzc3dvcmQoZGF0YSk7XG4gIH1cblxuICBhc3luYyBnZXRDb3VudHJpZXMoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvdW50cmllcyA9IGF3YWl0IHNldHRpbmdTZXJ2aWNlLmdldENvdW50cmllcygpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvdW50cmllczogY291bnRyaWVzLmRhdGEgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIG1lc3NhZ2UuZXJyb3IoZ2V0UmVzcG9uc2VFcnJvcihlcnJvcikpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB1c2VyLCBhY3Rpb24sIGF1dGgsIHVzZXJVcGRhdGluZ1xuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgY291bnRyaWVzLCB1cGxvYWRlZEF2YXRhciwgYXZhdGFyVXBsb2FkaW5nIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT57YCR7dXNlci51c2VybmFtZX0gUHJvZmlsZWB9PC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY291bnQtc2V0dGluZy1wYWdlXCI+XG4gICAgICAgICAgPFBhZ2VIZWFkZXIgdGl0bGU9XCJBY2NvdW50IFNldHRpbmdzXCIgLz5cbiAgICAgICAgICA8VGFic1xuICAgICAgICAgICAgYWN0aXZlS2V5PXthY3Rpb24gfHwgJ2FjY291bnQtaW5mb3JtYXRpb24nfVxuICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogJzAgMjRweCcgfX1cbiAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblRhYnNDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VGFicy5UYWJQYW5lIHRhYj1cIkFjY291bnQgSW5mb3JtYXRpb25cIiBrZXk9XCJhY2NvdW50LWluZm9ybWF0aW9uXCI+XG4gICAgICAgICAgICAgIDxVc2VyUHJvZmlsZVxuICAgICAgICAgICAgICAgIHsuLi51c2VyfVxuICAgICAgICAgICAgICAgIG9uRmluaXNoPXt0aGlzLm9uRmluaXNoLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgY291bnRyaWVzPXtjb3VudHJpZXN9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2VBdmF0YXI9e3RoaXMub25DaGFuZ2VBdmF0YXIuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICB1cGxvYWRBdmF0YXJVcmw9e3VzZXJTZXJ2aWNlLmdldEF2YXRhclVwbG9hZFVybCgpfVxuICAgICAgICAgICAgICAgIHVwbG9hZGVkQXZhdGFyPXt1cGxvYWRlZEF2YXRhcn1cbiAgICAgICAgICAgICAgICBhdmF0YXJVcGxvYWRpbmc9e2F2YXRhclVwbG9hZGluZ31cbiAgICAgICAgICAgICAgICBsb2FkaW5nPXt1c2VyVXBkYXRpbmd9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1RhYnMuVGFiUGFuZT5cbiAgICAgICAgICAgIHsvKiA8VGFicy5UYWJQYW5lIGtleT1cInRpbWV6b25lXCIgdGFiPVwiVGltZXpvbmVcIj5cbiAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgIFNvbWV0aW1lcyB0aGUgdGltZXpvbmUgaXMgdmVyeSBpbXBvcnRhbnQgc28gbWFrZSBzdXJlIHlvdSBhbHdheVxuICAgICAgICAgICAgICAgIHNldCB1cCBpdCBjb3JyZWN0bHkuIFdlIHdpbGwgY29udGFjdCB5b3UgdGFraW5nIGludG9cbiAgICAgICAgICAgICAgICBjb25zaWRlcmF0aW9uIHRoZSB0aW1lIHpvbmUgYW5kIHNvIG1heSB0aGUgcGVyZm9ybWVyIGRvIVxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8Rm9ybVxuICAgICAgICAgICAgICAgIG9uRmluaXNoPXt0aGlzLm9uRmluaXNoLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgbGF5b3V0PVwidmVydGljYWxcIlxuICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgdGltZXpvbmU6IHVzZXIudGltZXpvbmUgfX1cbiAgICAgICAgICAgICAgICB7Li4uZm9ybUl0ZW1MYXlvdXR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgICAgICBuYW1lPVwidGltZXpvbmVcIlxuICAgICAgICAgICAgICAgICAga2V5PVwidGltZXpvbmVcIlxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUaW1lem9uZVwiXG4gICAgICAgICAgICAgICAgICBydWxlcz17W1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSBpbnB1dCB5b3VyIHRpbWV6b25lISdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8VGltZXpvbmVzIGF1dG9Gb2N1cyAvPlxuICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgU2F2ZSBDaGFuZ2VzXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgPC9UYWJzLlRhYlBhbmU+ICovfVxuICAgICAgICAgICAgPFRhYnMuVGFiUGFuZSBrZXk9XCJjaGFuZ2UtcGFzc3dvcmRcIiB0YWI9XCJDaGFuZ2UgUGFzc3dvcmRcIj5cbiAgICAgICAgICAgICAgPFBhc3N3b3JkQ2hhbmdlXG4gICAgICAgICAgICAgICAgb25GaW5pc2g9e3RoaXMub25QYXNzd29yZENoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgIHsuLi5hdXRoLnVwZGF0ZVBhc3N3b3JkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9UYWJzLlRhYlBhbmU+XG4gICAgICAgICAgPC9UYWJzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICB1c2VyOiBzdGF0ZS51c2VyLmN1cnJlbnQsXG4gIHVzZXJVcGRhdGluZzogc3RhdGUudXNlci51c2VyVXBkYXRpbmcsXG4gIHN1Y2Nlc3M6IHN0YXRlLnVzZXIudXBkYXRlVXNlclN1Y2Nlc3MsXG4gIHVwZGF0ZVVzZXJFcnJvcjogc3RhdGUudXNlci51cGRhdGVVc2VyRXJyb3IsXG4gIGF1dGg6IHN0YXRlLmF1dGhcbn0pO1xuY29uc3QgbWFwRGlzcGF0Y2ggPSB7IHVwZGF0ZVVzZXIsIHVwZGF0ZVBhc3N3b3JkIH07XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2gpKFVzZXJQcm9maWxlUGFnZSk7XG4iLCJpbXBvcnQgeyBGb3JtLCBCdXR0b24sIElucHV0IH0gZnJvbSAnYW50ZCc7XG5cbmludGVyZmFjZSBQIHtcbiAgb25GaW5pc2g6ICh2KSA9PiB2b2lkO1xuICBzdWJtaXRpbmc/OiBib29sZWFuO1xufVxuXG5jb25zdCBmb3JtSXRlbUxheW91dCA9IHtcbiAgbGFiZWxDb2w6IHtcbiAgICB4czoge1xuICAgICAgc3BhbjogMjRcbiAgICB9LFxuICAgIHNtOiB7XG4gICAgICBzcGFuOiAxMlxuICAgIH1cbiAgfSxcbiAgd3JhcHBlckNvbDoge1xuICAgIHhzOiB7XG4gICAgICBzcGFuOiAyNFxuICAgIH0sXG4gICAgc206IHtcbiAgICAgIHNwYW46IDEyXG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBQYXNzd29yZENoYW5nZSA9ICh7IG9uRmluaXNoLCBzdWJtaXRpbmcgfTogUCkgPT4gKFxuICA8Rm9ybSBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiIG9uRmluaXNoPXtvbkZpbmlzaH0gey4uLmZvcm1JdGVtTGF5b3V0fT5cbiAgICA8Rm9ybS5JdGVtXG4gICAgICBuYW1lPVwicHJlUGFzc3dvcmRcIlxuICAgICAgbGFiZWw9XCJPbGQgUGFzc3dvcmRcIlxuICAgICAgcnVsZXM9e1tcbiAgICAgICAge1xuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciBvbGQgcGFzc3dvcmQhJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbWluOiA2LFxuICAgICAgICAgIG1heDogMTQsXG4gICAgICAgICAgbWVzc2FnZTogJzYtMTQgY2hhcmFjdGVycydcbiAgICAgICAgfVxuICAgICAgXX1cbiAgICAgIGhhc0ZlZWRiYWNrXG4gICAgPlxuICAgICAgPElucHV0LlBhc3N3b3JkIHBsYWNlaG9sZGVyPVwiT2xkIFBhc3N3b3JkXCIgLz5cbiAgICA8L0Zvcm0uSXRlbT5cbiAgICA8Rm9ybS5JdGVtXG4gICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgbGFiZWw9XCJOZXcgUGFzc3dvcmRcIlxuICAgICAgcnVsZXM9e1tcbiAgICAgICAge1xuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciBwYXNzd29yZCEnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBtaW46IDYsXG4gICAgICAgICAgbWF4OiAxNCxcbiAgICAgICAgICBtZXNzYWdlOiAnNi0xNCBjaGFyYWN0ZXJzJ1xuICAgICAgICB9XG4gICAgICBdfVxuICAgICAgaGFzRmVlZGJhY2tcbiAgICA+XG4gICAgICA8SW5wdXQuUGFzc3dvcmQgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIC8+XG4gICAgPC9Gb3JtLkl0ZW0+XG4gICAgPEZvcm0uSXRlbVxuICAgICAgbmFtZT1cImNvbmZpcm1cIlxuICAgICAgZGVwZW5kZW5jaWVzPXtbJ3Bhc3N3b3JkJ119XG4gICAgICBoYXNGZWVkYmFja1xuICAgICAgbGFiZWw9XCJSZXR5cGUgcGFzc3dvcmRcIlxuICAgICAgcnVsZXM9e1tcbiAgICAgICAge1xuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgY29uZmlybSB5b3VyIHBhc3N3b3JkISdcbiAgICAgICAgfSxcbiAgICAgICAgKHsgZ2V0RmllbGRWYWx1ZSB9KSA9PiAoe1xuICAgICAgICAgIHZhbGlkYXRvcihydWxlLCB2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKCF2YWx1ZSB8fCBnZXRGaWVsZFZhbHVlKCdwYXNzd29yZCcpID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcbiAgICAgICAgICAgICAgbmV3IEVycm9yKCdUaGUgdHdvIHBhc3N3b3JkcyB0aGF0IHlvdSBlbnRlcmVkIGRvIG5vdCBtYXRjaCEnKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICBdfVxuICAgID5cbiAgICAgIDxJbnB1dC5QYXNzd29yZCBwbGFjZWhvbGRlcj1cIkNvbmZpcm0gUGFzc3dvcmRcIiAvPlxuICAgIDwvRm9ybS5JdGVtPlxuICAgIDxGb3JtLkl0ZW0+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgaHRtbFR5cGU9XCJzdWJtaXRcIlxuICAgICAgICBsb2FkaW5nPXtzdWJtaXRpbmd9XG4gICAgICAgIGRpc2FibGVkPXtzdWJtaXRpbmd9XG4gICAgICAgIGNsYXNzTmFtZT1cImJ0bi1zdWJtaXRcIlxuICAgICAgPlxuICAgICAgICBTYXZlIENoYW5nZXNcbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvRm9ybS5JdGVtPlxuICA8L0Zvcm0+XG4pO1xuXG5QYXNzd29yZENoYW5nZS5kZWZhdWx0UHJvcHMgPSB7XG4gIHN1Ym1pdGluZzogZmFsc2Vcbn07XG5leHBvcnQgZGVmYXVsdCBQYXNzd29yZENoYW5nZTtcbiIsImltcG9ydCB7IFBhZ2VIZWFkZXIsIERpdmlkZXIgfSBmcm9tICdhbnRkJztcblxuaW50ZXJmYWNlIFAge1xuICB0aXRsZTogYW55O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzXG4gIGV4dHJhPzogYW55O1xufVxuXG5leHBvcnQgZGVmYXVsdCAoeyB0aXRsZSwgZXh0cmEgfSA6IFApID0+IChcbiAgPD5cbiAgICA8UGFnZUhlYWRlciB0aXRsZT17dGl0bGV9IGV4dHJhPXtleHRyYX0gLz5cbiAgICA8RGl2aWRlciAvPlxuICA8Lz5cbik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSVVzZXIsIElDb3VudHJpZXMgfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQge1xuICBGb3JtLFxuICBJbnB1dCxcbiAgQnV0dG9uLFxuICBEYXRlUGlja2VyLFxuICBTZWxlY3QsXG4gIFVwbG9hZCxcbiAgUm93LFxuICBDb2xcbn0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBUT0tFTiB9IGZyb20gJ3NyYy9zZXJ2aWNlcy9hcGktcmVxdWVzdCc7XG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSc7XG5pbXBvcnQgeyBVcGxvYWRPdXRsaW5lZCwgRWRpdE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xuXG5pbXBvcnQgJy4vcHJvZmlsZS5sZXNzJztcbmltcG9ydCB7IGJlZm9yZUF2YXRhclVwbG9hZCB9IGZyb20gJ0BsaWIvZmlsZSc7XG5cbmludGVyZmFjZSBJUHJvcHMgZXh0ZW5kcyBJVXNlciB7XG4gIGNvdW50cmllczogSUNvdW50cmllc1tdO1xuICBvbkZpbmlzaChkYXRhOiBhbnkpOiBGdW5jdGlvbjtcbiAgb25DaGFuZ2VBdmF0YXIoZGF0YTogYW55KTogRnVuY3Rpb247XG4gIGF2YXRhclVwbG9hZGluZzogYm9vbGVhbjtcbiAgdXBsb2FkQXZhdGFyVXJsOiBzdHJpbmc7XG4gIHVwbG9hZGVkQXZhdGFyOiBzdHJpbmc7XG4gIGxvYWRpbmc6IGJvb2xlYW47XG59XG5cbmNvbnN0IGZvcm1JdGVtTGF5b3V0ID0ge1xuICBsYWJlbENvbDoge1xuICAgIHhzOiB7XG4gICAgICBzcGFuOiAyNFxuICAgIH0sXG4gICAgc206IHtcbiAgICAgIHNwYW46IDRcbiAgICB9XG4gIH0sXG4gIHdyYXBwZXJDb2w6IHtcbiAgICB4czoge1xuICAgICAgc3BhbjogMjRcbiAgICB9LFxuICAgIHNtOiB7XG4gICAgICBzcGFuOiAxNlxuICAgIH1cbiAgfVxufTtcblxuY29uc3QgdGFpbEZvcm1JdGVtTGF5b3V0ID0ge1xuICB3cmFwcGVyQ29sOiB7XG4gICAgeHM6IHtcbiAgICAgIHNwYW46IDI0LFxuICAgICAgb2Zmc2V0OiAwXG4gICAgfSxcbiAgICBzbToge1xuICAgICAgc3BhbjogMTYsXG4gICAgICBvZmZzZXQ6IDBcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IFVzZXJQcm9maWxlID0gKHtcbiAgdXNlcm5hbWUsXG4gIGZpcnN0TmFtZSxcbiAgbGFzdE5hbWUsXG4gIGdlbmRlcixcbiAgb25GaW5pc2gsXG4gIGNvdW50cmllcyxcbiAgZW1haWwsXG4gIGNvdW50cnksXG4gIHBob25lLFxuICBjaXR5LFxuICBzdGF0ZSxcbiAgZGF0ZU9mQmlydGgsXG4gIG9uQ2hhbmdlQXZhdGFyLFxuICB1cGxvYWRBdmF0YXJVcmwsXG4gIHVwbG9hZGVkQXZhdGFyLFxuICBhdmF0YXJVcGxvYWRpbmcsXG4gIGF2YXRhcixcbiAgbG9hZGluZ1xufTogSVByb3BzKSA9PiB7XG4gIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybSgpO1xuICBjb25zdCB1cGxvYWRCdXR0b24gPSAoXG4gICAgPEJ1dHRvblxuICAgICAgdHlwZT1cImRhc2hlZFwiXG4gICAgICBsb2FkaW5nPXthdmF0YXJVcGxvYWRpbmd9XG4gICAgICBkaXNhYmxlZD17YXZhdGFyVXBsb2FkaW5nfVxuICAgICAgaWNvbj17PFVwbG9hZE91dGxpbmVkIC8+fVxuICAgID5cbiAgICAgIFVwbG9hZFxuICAgIDwvQnV0dG9uPlxuICApO1xuICByZXR1cm4gKFxuICAgIDxGb3JtXG4gICAgICB7Li4uZm9ybUl0ZW1MYXlvdXR9XG4gICAgICBmb3JtPXtmb3JtfVxuICAgICAgb25GaW5pc2g9e29uRmluaXNofVxuICAgICAgbmFtZT1cInBlcmZvcm1lclJlZ2lzdGVyRm9ybVwiXG4gICAgICBjbGFzc05hbWU9XCJwZXJmb3JtZXJSZWdpc3RlckZvcm1cIlxuICAgICAgaW5pdGlhbFZhbHVlcz17e1xuICAgICAgICBkYXRlT2ZCaXJ0aDogbW9tZW50KGRhdGVPZkJpcnRoKSxcbiAgICAgICAgY291bnRyeSxcbiAgICAgICAgZmlyc3ROYW1lLFxuICAgICAgICBsYXN0TmFtZSxcbiAgICAgICAgZ2VuZGVyLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgYXZhdGFyLFxuICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgcGhvbmUsXG4gICAgICAgIGNpdHksXG4gICAgICAgIHN0YXRlXG4gICAgICB9fVxuICAgICAgbGF5b3V0PVwidmVydGljYWxcIlxuICAgID5cbiAgICAgIDxSb3cgZ3V0dGVyPXsyNX0+XG4gICAgICAgIDxDb2wgc209ezEyfSB4cz17MjR9PlxuICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICBsYWJlbD1cIlVzZXJuYW1lXCJcbiAgICAgICAgICAgIHJ1bGVzPXtbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIGlucHV0IHlvdXIgdXNlcm5hbWUhJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbnB1dCBkaXNhYmxlZCAvPlxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cImdlbmRlclwiIGxhYmVsPVwiU2V4XCI+XG4gICAgICAgICAgICA8U2VsZWN0PlxuICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cIm1hbGVcIiBrZXk9XCJtYWxlXCI+XG4gICAgICAgICAgICAgICAgTWFsZVxuICAgICAgICAgICAgICA8L1NlbGVjdC5PcHRpb24+XG4gICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwiZmVtYWxlXCIga2V5PVwiZmVtYWxlXCI+XG4gICAgICAgICAgICAgICAgRmVtYWxlXG4gICAgICAgICAgICAgIDwvU2VsZWN0Lk9wdGlvbj5cbiAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJ0cmFuc2dlbmRlclwiIGtleT1cInRyYW5zZ2VuZGVyXCI+XG4gICAgICAgICAgICAgICAgVHJhbnNnZW5kZXJcbiAgICAgICAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxuICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgbmFtZT1cImZpcnN0TmFtZVwiXG4gICAgICAgICAgICBsYWJlbD1cIkZpcnN0IE5hbWVcIlxuICAgICAgICAgICAgcnVsZXM9e1tcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5ldyBSZWdFeHAoJ15bYS16QS1aMC05IF0qJCcpLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdBbHBoYW51bWVyaWMnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB3aGl0ZXNwYWNlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciBmaXJzdCBuYW1lISdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciBmaXJzdCBuYW1lISdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJGaXJzdCBuYW1lXCIgLz5cbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgbGFiZWw9XCJMYXN0IE5hbWVcIlxuICAgICAgICAgICAgcnVsZXM9e1tcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5ldyBSZWdFeHAoJ15bYS16QS1aMC05IF0qJCcpLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdBbHBoYW51bWVyaWMnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB3aGl0ZXNwYWNlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciBsYXN0IG5hbWUhJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSBpbnB1dCB5b3VyIGZpcnN0IG5hbWUhJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIkxhc3QgbmFtZVwiIC8+XG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgbmFtZT1cInBob25lXCJcbiAgICAgICAgICAgIGxhYmVsPVwiUGhvbmUgTnVtYmVyXCJcbiAgICAgICAgICAgIHJ1bGVzPXtbXG4gICAgICAgICAgICAgIHsgbWluOiA5IH0sXG4gICAgICAgICAgICAgIHsgbWF4OiAxNCB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmV3IFJlZ0V4cCgvXlswLTlcXGJcXFxcKyBdKyQvKSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVGhlIHBob25lIG51bWJlciBpcyBub3QgaW4gdGhlIGNvcnJlY3QgZm9ybWF0J1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIlBob25lIE51bWJlclwiIC8+XG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIHNtPXsxMn0geHM9ezI0fT5cbiAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgbGFiZWw9XCJFLW1haWxcIlxuICAgICAgICAgICAgcnVsZXM9e1tcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdlbWFpbCcsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1RoZSBpbnB1dCBpcyBub3QgdmFsaWQgRS1tYWlsISdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciBFLW1haWwhJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbnB1dCBkaXNhYmxlZCBwbGFjZWhvbGRlcj1cInRlc3RAZXhhbXBsZS5jb21cIiAvPlxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgIG5hbWU9XCJkYXRlT2ZCaXJ0aFwiXG4gICAgICAgICAgICBsYWJlbD1cIkRhdGUgb2YgQmlydGhcIlxuICAgICAgICAgICAgcnVsZXM9e1tcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgZGF0ZSBvZiBiaXJ0aCEnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IChydWxlLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgY29uc3QgeWVhcnMgPSBtb21lbnQoKS5kaWZmKHZhbHVlLCAneWVhcnMnKTtcbiAgICAgICAgICAgICAgICAgIGlmICh5ZWFycyA+PSAxOCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdNaW5pbXVtIG9mIDE4IHllYXJzJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RGF0ZVBpY2tlciBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19IC8+XG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgbmFtZT1cImNvdW50cnlcIlxuICAgICAgICAgICAgbGFiZWw9XCJDb3VudHJ5XCJcbiAgICAgICAgICAgIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ1BsZWFzZSBpbnB1dCB5b3VyIGNvdW50cnkhJyB9XX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8U2VsZWN0IHNob3dTZWFyY2g+XG4gICAgICAgICAgICAgIHtjb3VudHJpZXMubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICYmIGNvdW50cmllcy5tYXAoKGMpID0+IChcbiAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPXtjLm5hbWV9IGtleT17Yy5jb2RlfT5cbiAgICAgICAgICAgICAgICAgICAge2MubmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvU2VsZWN0Lk9wdGlvbj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cInN0YXRlXCIgbGFiZWw9XCJTdGF0ZVwiPlxuICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiU3RhdGUgTmFtZVwiIC8+XG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwiY2l0eVwiIGxhYmVsPVwiQ2l0eVwiPlxuICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiQ2l0eSBOYW1lXCIgLz5cbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICBsYWJlbD1cIlByb2ZpbGUgQXZhdGFyXCJcbiAgICAgICAgICAgIC8vIHZhbHVlUHJvcE5hbWU9XCJmaWxlTGlzdFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFVwbG9hZFxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VBdmF0YXJ9XG4gICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxuICAgICAgICAgICAgICBhY3Rpb249e3VwbG9hZEF2YXRhclVybH1cbiAgICAgICAgICAgICAgaGVhZGVycz17e1xuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IHByb2Nlc3MuYnJvd3NlciA/IGNvb2tpZS5nZXQoVE9LRU4pIDogJydcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgbmFtZT1cImF2YXRhclwiXG4gICAgICAgICAgICAgIHNob3dVcGxvYWRMaXN0PXtmYWxzZX1cbiAgICAgICAgICAgICAgYmVmb3JlVXBsb2FkPXtiZWZvcmVBdmF0YXJVcGxvYWR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHthdmF0YXIgfHwgdXBsb2FkZWRBdmF0YXIgPyAoXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IDYwLCB3aWR0aDogNjAsIHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9e3VwbG9hZGVkQXZhdGFyIHx8IGF2YXRhcn1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiA2MCwgd2lkdGg6IDYwLCBib3JkZXJSYWRpdXM6IDMwIH19XG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPEVkaXRPdXRsaW5lZCBjbGFzc05hbWU9XCJlZGl0LWljb25cIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIHVwbG9hZEJ1dHRvblxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9VcGxvYWQ+XG4gICAgICAgICAgICA8ZGl2PkltYWdlIHNpemUgbGltaXQ6IDJNQi4gQWNjZXB0ZWQgZm9ybWF0czogSlBFRywgSlBHIGFuZCBQTkc8L2Rpdj5cbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICAgIDxGb3JtLkl0ZW0gey4uLnRhaWxGb3JtSXRlbUxheW91dH0+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgaHRtbFR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxuICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAgID5cbiAgICAgICAgICBTYXZlIENoYW5nZXNcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0Zvcm0uSXRlbT5cbiAgICA8L0Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyUHJvZmlsZTtcbiIsImltcG9ydCB7IGdldEdsb2JhbENvbmZpZyB9IGZyb20gJ0BzZXJ2aWNlcy9jb25maWcnO1xuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgUmNGaWxlIH0gZnJvbSAnYW50ZC9saWIvdXBsb2FkJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJlZm9yZUF2YXRhclVwbG9hZChmaWxlOiBSY0ZpbGUpOiBib29sZWFuIHtcbiAgY29uc3QgZXh0ID0gZmlsZS5uYW1lLnNwbGl0KCcuJykucG9wKCkudG9Mb3dlckNhc2UoKTtcbiAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG4gIGNvbnN0IGlzSW1hZ2VBY2NlcHQgPSBjb25maWcuTkVYVF9QVUJMSUNfSU1BR0VfQUNDUEVUXG4gICAgLnNwbGl0KCcsJylcbiAgICAubWFwKChpdGVtOiBzdHJpbmcpID0+IGl0ZW0udHJpbSgpKVxuICAgIC5pbmRleE9mKGAuJHtleHR9YCk7XG4gIGlmIChpc0ltYWdlQWNjZXB0ID09PSAtMSkge1xuICAgIG1lc3NhZ2UuZXJyb3IoYFlvdSBjYW4gb25seSB1cGxvYWQgJHtjb25maWcuTkVYVF9QVUJMSUNfSU1BR0VfQUNDUEVUfSBmaWxlIWApO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGlzTHQyTSA9IGZpbGUuc2l6ZSAvIDEwMjQgLyAxMDI0IDwgKGNvbmZpZy5ORVhUX1BVQkxJQ19NQVhJTVVNX1NJWkVfVVBMT0FEX0FWQVRBUiB8fCAyKTtcbiAgaWYgKCFpc0x0Mk0pIHtcbiAgICBtZXNzYWdlLmVycm9yKFxuICAgICAgYEltYWdlIG11c3Qgc21hbGxlciB0aGFuICR7Y29uZmlnLk5FWFRfUFVCTElDX01BWElNVU1fU0laRV9VUExPQURfQVZBVEFSIHx8IDJ9TUIhYFxuICAgICk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBmdW5jLW5hbWVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuaW1wb3J0IHtcbiAgcmVkdWNlLCBpc0FycmF5LCBpc0VtcHR5LCBmbGF0dGVuXG59IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ3Jlc2VsZWN0JztcbmltcG9ydCB7IHRha2VMYXRlc3QsIGRlbGF5IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCB7XG4gIGNyZWF0ZUFjdGlvbiBhcyBSZWR1eENyZWF0ZUFjdGlvbixcbiAgaGFuZGxlQWN0aW9ucyBhcyBoYW5kbGVSZWR1eEFjdGlvbnMsXG4gIEFjdGlvblxufSBmcm9tICdyZWR1eC1hY3Rpb25zJztcblxuZXhwb3J0IHR5cGUgQWN0aW9uRnVuY3Rpb24xPFQxLCBSPiA9ICh0MT86IFQxKSA9PiBSO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGlvbkZ1bmN0aW9uPFBheWxvYWQ+XG4gIGV4dGVuZHMgQWN0aW9uRnVuY3Rpb24xPFBheWxvYWQsIEFjdGlvbjxQYXlsb2FkPj4ge1xuICBpczogKHR5cGU6IHN0cmluZykgPT4gYm9vbGVhbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQWN0aW9uPFBheWxvYWQgPSBhbnk+KHR5cGU6IHN0cmluZyk6IEFjdGlvbkZ1bmN0aW9uPFBheWxvYWQ+IHtcbiAgY29uc3QgYWN0aW9uID0gUmVkdXhDcmVhdGVBY3Rpb248UGF5bG9hZD4odHlwZSkgYXMgQWN0aW9uRnVuY3Rpb248UGF5bG9hZD47XG4gIGFjdGlvbi5pcyA9IChhVHlwZTogc3RyaW5nKSA9PiBhY3Rpb24udG9TdHJpbmcoKSA9PT0gYVR5cGU7XG4gIHJldHVybiBhY3Rpb247XG59XG5cbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuZnVuY3Rpb24gY3JlYXRlQXN5bmNBY3Rpb24oYWN0aW9uOiBzdHJpbmcsIHR5cGU6IHN0cmluZyk6IGFueSB7XG4gIHJldHVybiB7XG4gICAgW2FjdGlvbl06IGNyZWF0ZUFjdGlvbih0eXBlKSxcbiAgICBbYCR7YWN0aW9ufVN1Y2Nlc3NgXTogY3JlYXRlQWN0aW9uKGAke3R5cGV9X1NVQ0NFU1NgKSxcbiAgICBbYCR7YWN0aW9ufUZhaWxgXTogY3JlYXRlQWN0aW9uKGAke3R5cGV9X0ZBSUxgKVxuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBc3luY0FjdGlvbnM8XG4gIEFjdGlvbkRhdGEgPSBhbnksXG4gIFN1Y2Nlc3NEYXRhID0gYW55LFxuICBFcnJvckRhdGEgPSBFcnJvclxuPihcbiAgdHlwZTogc3RyaW5nXG4pOiBbXG4gIEFjdGlvbkZ1bmN0aW9uPEFjdGlvbkRhdGE+LFxuICBBY3Rpb25GdW5jdGlvbjxTdWNjZXNzRGF0YT4sXG4gIEFjdGlvbkZ1bmN0aW9uPEVycm9yRGF0YT5cbl0ge1xuICByZXR1cm4gW1xuICAgIGNyZWF0ZUFjdGlvbjxBY3Rpb25EYXRhPih0eXBlKSxcbiAgICBjcmVhdGVBY3Rpb248U3VjY2Vzc0RhdGE+KGAke3R5cGV9X1NVQ0NFU1NgKSxcbiAgICBjcmVhdGVBY3Rpb248RXJyb3JEYXRhPihgJHt0eXBlfV9GQUlMYClcbiAgXTtcbn1cblxuLyogdHNsaW50OmRpc2FibGUgKi9cbmZ1bmN0aW9uIGhhbmRsZUFjdGlvbnMoYWN0aW9uczogYW55LCBpbml0aWFsU3RhdGU6IGFueSkge1xuICByZXR1cm4gaGFuZGxlUmVkdXhBY3Rpb25zKFxuICAgIHJlZHVjZShcbiAgICAgIGFjdGlvbnMsXG4gICAgICAocmVkdWNlcjogYW55LCBoYW5kbGVyLCBhY3Rpb24pID0+IHtcbiAgICAgICAgcmVkdWNlclthY3Rpb25dID0gKHN0YXRlOiBhbnksIGFjdDogYW55KSA9PiBoYW5kbGVyKHN0YXRlLnNldCgnYWN0aW9uJywgYWN0aW9uKSwgYWN0KTtcbiAgICAgICAgcmV0dXJuIHJlZHVjZXI7XG4gICAgICB9LFxuICAgICAge31cbiAgICApLFxuICAgIGluaXRpYWxTdGF0ZVxuICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSZWR1Y2VycyhcbiAgc3RhdGVDb250ZXh0OiBzdHJpbmcsXG4gIHJlZHVjZXJzOiBhbnlbXSxcbiAgaW5pdGlhbFN0YXRlOiBhbnksXG4gIHByZXZlbnRSZXNldHRpbmc6IGJvb2xlYW4gPSBmYWxzZVxuKTogYW55IHtcbiAgcmV0dXJuIHtcbiAgICBbc3RhdGVDb250ZXh0XTogaGFuZGxlUmVkdXhBY3Rpb25zKFxuICAgICAgcmVkdWNlKFxuICAgICAgICBmbGF0dGVuKHJlZHVjZXJzKSxcbiAgICAgICAgKHJlZHVjZXI6IGFueSwgYWN0aW9uOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoaXNBcnJheShhY3Rpb24ub24pKSB7XG4gICAgICAgICAgICBhY3Rpb24ub24uZm9yRWFjaCgoYWN0OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgcmVkdWNlclthY3RdID0gYWN0aW9uLnJlZHVjZXI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2UgcmVkdWNlclthY3Rpb24ub25dID0gYWN0aW9uLnJlZHVjZXI7XG4gICAgICAgICAgcmV0dXJuIHJlZHVjZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHByZXZlbnRSZXNldHRpbmdcbiAgICAgICAgICA/IHt9XG4gICAgICAgICAgOiB7XG4gICAgICAgICAgICBBUFBfU1RBVEVfUkVTRVQ6ICgpID0+IGluaXRpYWxTdGF0ZVxuICAgICAgICAgIH1cbiAgICAgICksXG4gICAgICBpbml0aWFsU3RhdGVcbiAgICApXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTYWdhcyhzYWdhczogYW55W10pOiBhbnlbXSB7XG4gIHJldHVybiBmbGF0dGVuKHNhZ2FzKS5tYXAoKHNhZ2E6IGFueSkgPT4ge1xuICAgIGNvbnN0IHsgb24sIGVmZmVjdCA9IHRha2VMYXRlc3QsIHdvcmtlciB9ID0gc2FnYTtcbiAgICByZXR1cm4gZnVuY3Rpb24qICgpIHtcbiAgICAgIHlpZWxkIGVmZmVjdChvbiwgZnVuY3Rpb24qIChhY3Rpb246IGFueSkge1xuICAgICAgICB5aWVsZCBkZWxheSgwKTtcbiAgICAgICAgeWllbGQgd29ya2VyKGFjdGlvbik7XG4gICAgICB9KTtcbiAgICB9O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2VsZWN0b3JzQShjb250ZXh0OiBzdHJpbmcsIGtleXM6IGFueVtdID0gW10pOiBhbnkge1xuICBjb25zdCBzdGF0ZVNlbGVjdG9yID0gKHN0YXRlOiBhbnkpID0+IHN0YXRlW2NvbnRleHRdO1xuXG4gIGlmIChpc0VtcHR5KGtleXMpKSByZXR1cm4gc3RhdGVTZWxlY3RvcjtcblxuICByZXR1cm4ga2V5cy5tYXAoKGtleTogYW55KSA9PiAoc3RhdGU6IGFueSkgPT4gKGlzQXJyYXkoa2V5KVxuICAgID8gc3RhdGVTZWxlY3RvcihzdGF0ZSkuZ2V0SW4oa2V5KVxuICAgIDogc3RhdGVTZWxlY3RvcihzdGF0ZSkuZ2V0KGtleSkpKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2VsZWN0b3JzKGNvbnRleHQ6IHN0cmluZywga2V5czogc3RyaW5nW10pOiBhbnkge1xuICBjb25zdCBzdGF0ZVNlbGVjdG9yID0gKHN0YXRlOiBhbnkpID0+IHN0YXRlW2NvbnRleHRdO1xuXG4gIHJldHVybiByZWR1Y2UoXG4gICAga2V5cyxcbiAgICAoc2VsZWN0b3JzOiBhbnksIGtleSkgPT4ge1xuICAgICAgc2VsZWN0b3JzW2Ake2tleX1TZWxlY3RvcmBdID0gKHN0YXRlOiBhbnkpID0+IHN0YXRlU2VsZWN0b3Ioc3RhdGUpLmdldChrZXkpO1xuICAgICAgcmV0dXJuIHNlbGVjdG9ycztcbiAgICB9LFxuICAgIHt9XG4gICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUpTU2VsZWN0b3JzKGNvbnRleHQ6IHN0cmluZywga2V5czogc3RyaW5nW10pOiBhbnkge1xuICBjb25zdCBzdGF0ZVNlbGVjdG9yID0gKHN0YXRlOiBhbnkpID0+IHN0YXRlW2NvbnRleHRdO1xuXG4gIHJldHVybiByZWR1Y2UoXG4gICAga2V5cyxcbiAgICAoc2VsZWN0b3JzOiBhbnksIGtleSkgPT4ge1xuICAgICAgc2VsZWN0b3JzW2Ake2tleX1TZWxlY3RvcmBdID0gKHN0YXRlOiBhbnkpID0+IHN0YXRlU2VsZWN0b3Ioc3RhdGUpW2tleV07XG4gICAgICByZXR1cm4gc2VsZWN0b3JzO1xuICAgIH0sXG4gICAge31cbiAgKTtcbn1cblxuZXhwb3J0IHtcbiAgY3JlYXRlQWN0aW9uLFxuICBjcmVhdGVBc3luY0FjdGlvbixcbiAgY3JlYXRlQXN5bmNBY3Rpb25zLFxuICBjcmVhdGVTZWxlY3RvcnNBLFxuICBoYW5kbGVBY3Rpb25zLFxuICBjcmVhdGVSZWR1Y2VycyxcbiAgY3JlYXRlU2VsZWN0b3JzLFxuICBjcmVhdGVTZWxlY3RvcixcbiAgY3JlYXRlSlNTZWxlY3RvcnNcbn07XG4iLCJleHBvcnQgZnVuY3Rpb24gaXNVcmwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICB1cmwubWF0Y2goXG4gICAgICAvKGh0dHAocyk/OlxcL1xcLy4pPyh3d3dcXC4pP1stYS16QS1aMC05QDolLl8rfiM9XXsyLDI1Nn1cXC5bYS16XXsyLDZ9XFxiKFstYS16QS1aMC05QDolXysufiM/Ji8vPV0qKS9nXG4gICAgKSAhPT0gbnVsbFxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVVdWlkID0gKCkgPT4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCAoYykgPT4ge1xuICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICAgIGNvbnN0IHIgPSAoTWF0aC5yYW5kb20oKSAqIDE2KSB8IDA7XG4gICAgY29uc3QgdiA9IGMgPT09ICd4JyA/IHIgOiAociAmIDB4MykgfCAweDg7XG4gICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xuICAgIC8qIGVzbGludC1lbmFibGUgKi9cbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKCFzdHIpIHJldHVybiAnJztcbiAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn1cblxuZXhwb3J0IGNvbnN0IHVuaXRQcmljZXM6IHsgdmFsdWU6IG51bWJlciwgdGV4dDogYW55IH1bXSA9IFtcbiAge1xuICAgIHZhbHVlOiAxNSxcbiAgICB0ZXh0OiAnMTUgdG9rZW5zJ1xuICB9LFxuICB7XG4gICAgdmFsdWU6IDIwLFxuICAgIHRleHQ6ICcyMCB0b2tlbnMnXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogMjUsXG4gICAgdGV4dDogJzI1IHRva2VucydcbiAgfSxcbiAge1xuICAgIHZhbHVlOiAzMCxcbiAgICB0ZXh0OiAnMzAgdG9rZW5zJ1xuICB9LFxuICB7XG4gICAgdmFsdWU6IDM1LFxuICAgIHRleHQ6ICczNSB0b2tlbnMnXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogNDAsXG4gICAgdGV4dDogJzQwIHRva2VucydcbiAgfSxcbiAge1xuICAgIHZhbHVlOiA0NSxcbiAgICB0ZXh0OiAnNDUgdG9rZW5zJ1xuICB9LFxuICB7XG4gICAgdmFsdWU6IDUwLFxuICAgIHRleHQ6ICc1MCB0b2tlbnMnXG4gIH1cbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA1NSxcbiAgLy8gICB0ZXh0OiAnNTUgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDYwLFxuICAvLyAgIHRleHQ6ICc2MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNjUsXG4gIC8vICAgdGV4dDogJzY1IHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA3MCxcbiAgLy8gICB0ZXh0OiAnNzAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDc1LFxuICAvLyAgIHRleHQ6ICc3NSB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogODAsXG4gIC8vICAgdGV4dDogJzgwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA4NSxcbiAgLy8gICB0ZXh0OiAnODUgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDkwLFxuICAvLyAgIHRleHQ6ICc5MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogOTUsXG4gIC8vICAgdGV4dDogJzk1IHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAxMDAsXG4gIC8vICAgdGV4dDogJzEwMCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMTIwLFxuICAvLyAgIHRleHQ6ICcxMjAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDE0MCxcbiAgLy8gICB0ZXh0OiAnMTQwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAxNjAsXG4gIC8vICAgdGV4dDogJzE2MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMTgwLFxuICAvLyAgIHRleHQ6ICcxODAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDIwMCxcbiAgLy8gICB0ZXh0OiAnMjAwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAyMjAsXG4gIC8vICAgdGV4dDogJzIyMCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMjQwLFxuICAvLyAgIHRleHQ6ICcyNDAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDI2MCxcbiAgLy8gICB0ZXh0OiAnMjYwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAyODAsXG4gIC8vICAgdGV4dDogJzI4MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMzAwLFxuICAvLyAgIHRleHQ6ICczMDAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDMyMCxcbiAgLy8gICB0ZXh0OiAnMzIwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAzNDAsXG4gIC8vICAgdGV4dDogJzM0MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMzYwLFxuICAvLyAgIHRleHQ6ICczNjAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDM4MCxcbiAgLy8gICB0ZXh0OiAnMzgwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA0MDAsXG4gIC8vICAgdGV4dDogJzQwMCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNDIwLFxuICAvLyAgIHRleHQ6ICc0MjAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDQ0MCxcbiAgLy8gICB0ZXh0OiAnNDQwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA0NjAsXG4gIC8vICAgdGV4dDogJzQ2MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNDgwLFxuICAvLyAgIHRleHQ6ICc0ODAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDUwMCxcbiAgLy8gICB0ZXh0OiAnNTAwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA1NTAsXG4gIC8vICAgdGV4dDogJzU1MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNjAwLFxuICAvLyAgIHRleHQ6ICc2MDAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDY1MCxcbiAgLy8gICB0ZXh0OiAnNjUwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA3MDAsXG4gIC8vICAgdGV4dDogJzcwMCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNzUwLFxuICAvLyAgIHRleHQ6ICc3NTAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDgwMCxcbiAgLy8gICB0ZXh0OiAnODAwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA4NTAsXG4gIC8vICAgdGV4dDogJzg1MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogOTAwLFxuICAvLyAgIHRleHQ6ICc5MDAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDk1MCxcbiAgLy8gICB0ZXh0OiAnOTUwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAxMDAwLFxuICAvLyAgIHRleHQ6ICcxMDAwIHRva2VucydcbiAgLy8gfVxuXTtcbiIsImltcG9ydCB7IGNsb25lRGVlcCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAncGF0aC10by1yZWdleHAnO1xuaW1wb3J0IHtcbiAgSVNjaGVkdWxlLCBJVXNlciwgSVBlcmZvcm1lciwgSVN0dWRpb1xufSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBTT1JUIH0gZnJvbSAnQHNlcnZpY2VzL2FwaS1yZXF1ZXN0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG4vKipcbiAqIENvbnZlcnQgYW4gYXJyYXkgdG8gYSB0cmVlLXN0cnVjdHVyZWQgYXJyYXkuXG4gKiBAcGFyYW0gICB7YXJyYXl9ICAgICBhcnJheSAgICAgVGhlIEFycmF5IG5lZWQgdG8gQ29udmVydGVkLlxuICogQHBhcmFtICAge3N0cmluZ30gICAgaWQgICAgICAgIFRoZSBhbGlhcyBvZiB0aGUgdW5pcXVlIElEIG9mIHRoZSBvYmplY3QgaW4gdGhlIGFycmF5LlxuICogQHBhcmFtICAge3N0cmluZ30gICAgcGFyZW50SWQgICAgICAgVGhlIGFsaWFzIG9mIHRoZSBwYXJlbnQgSUQgb2YgdGhlIG9iamVjdCBpbiB0aGUgYXJyYXkuXG4gKiBAcGFyYW0gICB7c3RyaW5nfSAgICBjaGlsZHJlbiAgVGhlIGFsaWFzIG9mIGNoaWxkcmVuIG9mIHRoZSBvYmplY3QgaW4gdGhlIGFycmF5LlxuICogQHJldHVybiAge2FycmF5fSAgICBSZXR1cm4gYSB0cmVlLXN0cnVjdHVyZWQgYXJyYXkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcnJheVRvVHJlZShcbiAgYXJyYXksXG4gIGlkID0gJ2lkJyxcbiAgcGFyZW50SWQgPSAncGlkJyxcbiAgY2hpbGRyZW4gPSAnY2hpbGRyZW4nXG4pIHtcbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIGNvbnN0IGhhc2ggPSB7fTtcbiAgY29uc3QgZGF0YSA9IGNsb25lRGVlcChhcnJheSk7XG5cbiAgZGF0YS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIGhhc2hbZGF0YVtpbmRleF1baWRdXSA9IGRhdGFbaW5kZXhdO1xuICB9KTtcblxuICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBoYXNoUGFyZW50ID0gaGFzaFtpdGVtW3BhcmVudElkXV07XG4gICAgaWYgKGhhc2hQYXJlbnQpIHtcbiAgICAgICFoYXNoUGFyZW50W2NoaWxkcmVuXSAmJiAoaGFzaFBhcmVudFtjaGlsZHJlbl0gPSBbXSk7XG4gICAgICBoYXNoUGFyZW50W2NoaWxkcmVuXS5wdXNoKGl0ZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQucHVzaChpdGVtKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFdoZXRoZXIgdGhlIHBhdGggbWF0Y2hlcyB0aGUgcmVnZXhwIGlmIHRoZSBsYW5ndWFnZSBwcmVmaXggaXMgaWdub3JlZCwgaHR0cHM6Ly9naXRodWIuY29tL3BpbGxhcmpzL3BhdGgtdG8tcmVnZXhwLlxuICogQHBhcmFtICAge3N0cmluZ3xyZWdleHB8YXJyYXl9ICAgICByZWdleHAgICAgIFNwZWNpZnkgYSBzdHJpbmcsIGFycmF5IG9mIHN0cmluZ3MsIG9yIGEgcmVndWxhciBleHByZXNzaW9uLlxuICogQHBhcmFtICAge3N0cmluZ30gICAgICAgICAgICAgICAgICBwYXRobmFtZSAgIFNwZWNpZnkgdGhlIHBhdGhuYW1lIHRvIG1hdGNoLlxuICogQHJldHVybiAge2FycmF5fG51bGx9ICAgICAgICAgICAgICBSZXR1cm4gdGhlIHJlc3VsdCBvZiB0aGUgbWF0Y2ggb3IgbnVsbC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhdGhNYXRjaFJlZ2V4cChyZWdleHAsIHBhdGhuYW1lKSB7XG4gIHJldHVybiBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKHJlZ2V4cCkuZXhlYyhwYXRobmFtZSk7XG59XG5cbi8qKlxuICogSW4gYW4gYXJyYXkgb2Ygb2JqZWN0cywgc3BlY2lmeSBhbiBvYmplY3QgdGhhdCB0cmF2ZXJzZXMgdGhlIG9iamVjdHMgd2hvc2UgcGFyZW50IElEIG1hdGNoZXMuXG4gKiBAcGFyYW0gICB7YXJyYXl9ICAgICBhcnJheSAgICAgVGhlIEFycmF5IG5lZWQgdG8gQ29udmVydGVkLlxuICogQHBhcmFtICAge3N0cmluZ30gICAgY3VycmVudCAgIFNwZWNpZnkgdGhlIG9iamVjdCB0aGF0IG5lZWRzIHRvIGJlIHF1ZXJpZWQuXG4gKiBAcGFyYW0gICB7c3RyaW5nfSAgICBwYXJlbnRJZCAgVGhlIGFsaWFzIG9mIHRoZSBwYXJlbnQgSUQgb2YgdGhlIG9iamVjdCBpbiB0aGUgYXJyYXkuXG4gKiBAcGFyYW0gICB7c3RyaW5nfSAgICBpZCAgICAgICAgVGhlIGFsaWFzIG9mIHRoZSB1bmlxdWUgSUQgb2YgdGhlIG9iamVjdCBpbiB0aGUgYXJyYXkuXG4gKiBAcmV0dXJuICB7YXJyYXl9ICAgIFJldHVybiBhIGtleSBhcnJheS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5QW5jZXN0b3JzKGFycmF5LCBjdXJyZW50LCBwYXJlbnRJZCwgaWQgPSAnaWQnKSB7XG4gIGNvbnN0IHJlc3VsdCA9IFtjdXJyZW50XTtcbiAgY29uc3QgaGFzaE1hcCA9IG5ldyBNYXAoKTtcbiAgYXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4gaGFzaE1hcC5zZXQoaXRlbVtpZF0sIGl0ZW0pKTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2hhZG93XG4gIGNvbnN0IGdldFBhdGggPSAoY3VycmVudCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRQYXJlbnRJZCA9IGhhc2hNYXAuZ2V0KGN1cnJlbnRbaWRdKVtwYXJlbnRJZF07XG4gICAgaWYgKGN1cnJlbnRQYXJlbnRJZCkge1xuICAgICAgcmVzdWx0LnB1c2goaGFzaE1hcC5nZXQoY3VycmVudFBhcmVudElkKSk7XG4gICAgICBnZXRQYXRoKGhhc2hNYXAuZ2V0KGN1cnJlbnRQYXJlbnRJZCkpO1xuICAgIH1cbiAgfTtcblxuICBnZXRQYXRoKGN1cnJlbnQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVzcG9uc2VFcnJvcihkYXRhOiBhbnkpIHtcbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuICdCYWQgcmVxdWVzdCEnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YS5tZXNzYWdlKSkge1xuICAgIGNvbnN0IGl0ZW0gPSBkYXRhLm1lc3NhZ2VbMF07XG4gICAgaWYgKCFpdGVtLmNvbnN0cmFpbnRzKSB7XG4gICAgICByZXR1cm4gZGF0YS5lcnJvciB8fCAnQmFkIHJlcXVlc3QhJztcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoaXRlbS5jb25zdHJhaW50cylbMF07XG4gIH1cblxuICAvLyBUT0RPIC0gcGFyc2UgZm9yIGxhbmdhdWdlIG9yIG90aGVyc1xuICByZXR1cm4gdHlwZW9mIGRhdGEubWVzc2FnZSA9PT0gJ3N0cmluZycgPyBkYXRhLm1lc3NhZ2UgOiAnQmFkIHJlcXVlc3QhJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTW9iaWxlKCk6IGJvb2xlYW4ge1xuICBpZiAoXG4gICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQW5kcm9pZC9pKVxuICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL3dlYk9TL2kpXG4gICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBob25lL2kpXG4gICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBhZC9pKVxuICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQb2QvaSlcbiAgICB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9CbGFja0JlcnJ5L2kpXG4gICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvV2luZG93cyBQaG9uZS9pKVxuICApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXJsUGFyYW1ldGVyKHNQYXJhbSkge1xuICBjb25zdCBzUGFnZVVSTCA9IGRlY29kZVVSSUNvbXBvbmVudCh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSk7XG4gIGNvbnN0IHNVUkxWYXJpYWJsZXMgPSBzUGFnZVVSTC5zcGxpdCgnJicpO1xuICBsZXQgc1BhcmFtZXRlck5hbWU7XG4gIGxldCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzVVJMVmFyaWFibGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgc1BhcmFtZXRlck5hbWUgPSBzVVJMVmFyaWFibGVzW2ldLnNwbGl0KCc9Jyk7XG5cbiAgICBpZiAoc1BhcmFtZXRlck5hbWVbMF0gPT09IHNQYXJhbSkge1xuICAgICAgcmV0dXJuIHNQYXJhbWV0ZXJOYW1lWzFdID09PSB1bmRlZmluZWQgPyB0cnVlIDogc1BhcmFtZXRlck5hbWVbMV07XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBEQVlfT0ZfV0VFSyA9IHtcbiAgbW9uOiAnTW9uZGF5JyxcbiAgdHVlOiAnVHVlc2RheScsXG4gIHdlZDogJ1dlZG5lc2RheScsXG4gIHRodTogJ1RodXJzZGF5JyxcbiAgZnJpOiAnRnJpZGF5JyxcbiAgc2F0OiAnU2F0dXJkYXknLFxuICBzdW46ICdTdW5kYXknXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdFNjaGVkdWxlKCkge1xuICBjb25zdCBkZWZhdWx0VmFsID0geyBzdGFydDogbnVsbCwgZW5kOiBudWxsLCBjbG9zZWQ6IHRydWUgfTtcbiAgcmV0dXJuIHtcbiAgICBtb246IHsgLi4uZGVmYXVsdFZhbCB9LFxuICAgIHR1ZTogeyAuLi5kZWZhdWx0VmFsIH0sXG4gICAgd2VkOiB7IC4uLmRlZmF1bHRWYWwgfSxcbiAgICB0aHU6IHsgLi4uZGVmYXVsdFZhbCB9LFxuICAgIGZyaTogeyAuLi5kZWZhdWx0VmFsIH0sXG4gICAgc2F0OiB7IC4uLmRlZmF1bHRWYWwgfSxcbiAgICBzdW46IHsgLi4uZGVmYXVsdFZhbCB9XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZXh0U2hvdyhzY2hlZHVsZTogSVNjaGVkdWxlKTogc3RyaW5nIHtcbiAgbGV0IHdlZWtEYXkgPSBwYXJzZUludChtb21lbnQoKS5mb3JtYXQoJ2UnKSwgMTApO1xuICBsZXQgaSA9IDA7XG4gIGxldCBuZXh0U2hvdzogc3RyaW5nO1xuICBjb25zdCBwZXJmb3JtZXJTaG93cyA9IE9iamVjdC5rZXlzKHNjaGVkdWxlKS5maWx0ZXIoXG4gICAgKGtleSkgPT4gIXNjaGVkdWxlW2tleV0uY2xvc2VkXG4gICk7XG4gIGRvIHtcbiAgICBjb25zdCBkYXRlID0gbW9tZW50KCkuZGF5KHdlZWtEYXkpLmZvcm1hdCgnZGRkJykudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAocGVyZm9ybWVyU2hvd3MuaW5kZXhPZihkYXRlKSA+IC0xKSB7XG4gICAgICBuZXh0U2hvdyA9IGRhdGU7XG4gICAgfVxuICAgIHdlZWtEYXkgKz0gMTtcbiAgICBpICs9IDE7XG4gIH0gd2hpbGUgKGkgPCA3ICYmICFuZXh0U2hvdyk7XG5cbiAgaWYgKG5leHRTaG93KSB7XG4gICAgcmV0dXJuIGAke3NjaGVkdWxlW25leHRTaG93XS5zdGFydH0gJHttb21lbnQoKVxuICAgICAgLmRheSh3ZWVrRGF5IC0gMSlcbiAgICAgIC5mb3JtYXQoJ0REL01NL1lZWVknKX1gO1xuICB9XG4gIHJldHVybiAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlYXJjaERhdGEocGFnaW5hdGlvbiwgZmlsdGVycywgc29ydGVyLCBzdGF0ZSkge1xuICBsZXQgeyBzb3J0LCBzb3J0QnksIGZpbHRlciB9ID0gc3RhdGU7XG4gIGNvbnN0IHsgbGltaXQgfSA9IHN0YXRlO1xuICBpZiAoZmlsdGVycykge1xuICAgIE9iamVjdC5rZXlzKGZpbHRlcnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGZpbHRlcnNba2V5XSAmJiBmaWx0ZXJzW2tleV0ubGVuZ3RoKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICBmaWx0ZXJba2V5XSA9IGZpbHRlcnNba2V5XVswXTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFmaWx0ZXJzW2tleV0pIHtcbiAgICAgICAgZmlsdGVyW2tleV0gPSAnJztcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBmaWx0ZXIgPSB7fTtcbiAgfVxuXG4gIGlmIChzb3J0ZXIpIHtcbiAgICBpZiAoc29ydGVyLm9yZGVyKSB7XG4gICAgICBjb25zdCB7IGZpZWxkLCBvcmRlciB9ID0gc29ydGVyO1xuICAgICAgc29ydCA9IFNPUlRbb3JkZXJdO1xuICAgICAgc29ydEJ5ID0gZmllbGQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNvcnRCeSA9ICdjcmVhdGVkQXQnO1xuICAgICAgc29ydCA9ICdkZXNjJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIC4uLmZpbHRlcixcbiAgICBzb3J0LFxuICAgIHNvcnRCeSxcbiAgICBvZmZzZXQ6IChwYWdpbmF0aW9uLmN1cnJlbnQgLSAxKSAqIGxpbWl0XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCYXNlNjQob3JpZ2luRmlsZU9iaiwgc3RhdHVzID0gJ3VwbG9hZGluZycsIGZpbGUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIGlmIChvcmlnaW5GaWxlT2JqKSB7XG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChvcmlnaW5GaWxlT2JqKTtcbiAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKHtcbiAgICAgICAgLi4ub3JpZ2luRmlsZU9iaixcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBuYW1lOiBvcmlnaW5GaWxlT2JqLm5hbWUsXG4gICAgICAgIHVybDogcmVhZGVyLnJlc3VsdCxcbiAgICAgICAgb3JpZ2luRmlsZU9ialxuICAgICAgfSk7XG4gICAgICByZWFkZXIub25lcnJvciA9IChlcnJvcikgPT4gcmVqZWN0KGVycm9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzb2x2ZShmaWxlKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydENvbm5lY3Rpb25EYXRhKGRhdGEpIHtcbiAgY29uc3QgYXJyID0gZGF0YS5zcGxpdCgnJS8lJyk7XG4gIGNvbnN0IHNlcnZlckRhdGEgPSBhcnJbMV0gJiYgSlNPTi5wYXJzZShhcnJbMV0pO1xuICBjb25zdCBjbGllbnREYXRhID0gYXJyWzBdICYmIEpTT04ucGFyc2UoYXJyWzBdKTtcbiAgcmV0dXJuIHtcbiAgICBzZXJ2ZXJEYXRhLFxuICAgIGNsaWVudERhdGFcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrVXNlckxvZ2luKGlzTG9nZ2VkSW46IGJvb2xlYW4sIHVzZXI6IElVc2VyIHwgSVBlcmZvcm1lciB8IElTdHVkaW8pIHtcbiAgaWYgKCFpc0xvZ2dlZEluKSByZXR1cm4gZmFsc2U7XG4gIGlmICghdXNlciAmJiAhdXNlci5faWQpIHJldHVybiBmYWxzZTtcblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRVc2VyKHVzZXI6IElVc2VyLCBwZXJmb3JtZXI6IElQZXJmb3JtZXIpIHtcbiAgaWYgKHVzZXIgJiYgdXNlci5faWQpIHJldHVybiB1c2VyO1xuICBpZiAocGVyZm9ybWVyICYmIHBlcmZvcm1lci5faWQpIHJldHVybiBwZXJmb3JtZXI7XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BoeXNpY2FsUHJvZHVjdChpdGVtKSB7XG4gIGlmIChpdGVtICYmIGl0ZW0udHlwZSA9PT0gJ3BoeXNpY2FsJykgcmV0dXJuIHRydWU7XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYXRCb3hNZXNzYWdlQ2xhc3NOYW1lKHJlcSkge1xuICBjb25zdCB7XG4gICAgaXNNaW5lLFxuICAgIHN0YXJ0c1NlcXVlbmNlLFxuICAgIGVuZHNTZXF1ZW5jZSxcbiAgICBkYXRhOiB7IHR5cGUgfVxuICB9ID0gcmVxO1xuICByZXR1cm4gY2xhc3NuYW1lcyhcbiAgICAnbWVzc2FnZScsXG4gICAgeyBtaW5lOiBpc01pbmUgJiYgdHlwZSAhPT0gJ3RpcCcgfSxcbiAgICB7IHRpcDogdHlwZSA9PT0gJ3RpcCcgfSxcbiAgICB7IHN0YXJ0OiAhIXN0YXJ0c1NlcXVlbmNlIH0sXG4gICAgeyBlbmQ6ICEhZW5kc1NlcXVlbmNlIH1cbiAgKTtcbn1cblxuZnVuY3Rpb24gY29udmVydEZlZXRUb0NtKGZlZXQsIGluY2gpIHtcbiAgY29uc3QgW2ZdID0gZmVldC5zcGxpdCgnLicpO1xuICBjb25zdCBbaV0gPSBpbmNoLnNwbGl0KCcuJyk7XG4gIHJldHVybiAocGFyc2VJbnQoZiwgMTApICogMTIgKyBwYXJzZUludChpLCAxMCkpICogMi41NDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGFXZWlnaHQobWluID0gOTksIG1heCA9IDMxOSkge1xuICBsZXQgaSA9IG1pbjtcbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIGRvIHtcbiAgICByZXN1bHRbaV0gPSAoaSAqIDAuNDUpLnRvRml4ZWQoMik7XG4gICAgaSArPSAxO1xuICB9IHdoaWxlIChpIDwgbWF4KTtcbiAgcmV0dXJuIHJlc3VsdC5tYXAoKHYsIGluZGV4KSA9PiAoe1xuICAgIGxhYmVsOiBgJHtpbmRleH0gIGxicyAoJHt2fWtnKWAsXG4gICAgdmFsdWU6IGAke2luZGV4fSBsYnNgXG4gIH0pKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRhSGVpZ2h0KG1pbiA9IDQsIG1heCA9IDcpIHtcbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIGZvciAobGV0IGZlZXQgPSBtaW47IGZlZXQgPCBtYXg7IGZlZXQgKz0gMSkge1xuICAgIGZvciAobGV0IGluY2ggPSAwOyBpbmNoIDw9IDExOyBpbmNoICs9IDEpIHtcbiAgICAgIGNvbnN0IGEgPSBjb252ZXJ0RmVldFRvQ20oXG4gICAgICAgIGZlZXQudG9GaXhlZCgxKS50b1N0cmluZygpLFxuICAgICAgICBpbmNoLnRvRml4ZWQoMSkudG9TdHJpbmcoKVxuICAgICAgKTtcbiAgICAgIHJlc3VsdC5wdXNoKGAke2ZlZXR9JyR7aW5jaH1cIiAoJHthLnRvRml4ZWQoMil9IGNtKWApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0Lm1hcCgoZikgPT4gKHsgbGFiZWw6IGAke2Z9YCwgdmFsdWU6IGAke2Z9YCB9KSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRQcmljZShwcmljZTogbnVtYmVyLCBmcmFjdGlvbkRpZ2l0cyA9IDIpIHtcbiAgaWYgKHByaWNlKSB7XG4gICAgcmV0dXJuIHByaWNlLnRvRml4ZWQoZnJhY3Rpb25EaWdpdHMpO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlQXN5bmNBY3Rpb24sIGNyZWF0ZUFjdGlvbiB9IGZyb20gJ0BsaWIvcmVkdXgnO1xuXG5leHBvcnQgY29uc3QgeyBsb2dpbiwgbG9naW5TdWNjZXNzLCBsb2dpbkZhaWwgfSA9IGNyZWF0ZUFzeW5jQWN0aW9uKFxuICAnbG9naW4nLFxuICAnTE9HSU4nXG4pO1xuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdGluZyA9IGNyZWF0ZUFjdGlvbignTE9HSU5fUkVRVUVTVElORycpO1xuXG5leHBvcnQgY29uc3Qge1xuICBwZXJmb3JtZXJsb2dpbixcbiAgcGVyZm9ybWVybG9naW5TdWNjZXNzLFxuICBwZXJmb3JtZXJsb2dpbkZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbigncGVyZm9ybWVybG9naW4nLCAnUEVSRk9STUVSX0xPR0lOJyk7XG5cbmV4cG9ydCBjb25zdFxuICByZXNldExvZ2luRGF0YSA9IGNyZWF0ZUFjdGlvbigncmVzZXRMb2dpbkRhdGEnKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgc3R1ZGlvTG9naW4sXG4gIHN0dWRpb0xvZ2luU3VjY2VzcyxcbiAgc3R1ZGlvTG9naW5GYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ3N0dWRpb0xvZ2luJywgJ1NUVURJT19MT0dJTicpO1xuXG5leHBvcnQgY29uc3Qge1xuICBwZXJmb3JtZXJSZWdpc3RlcixcbiAgcGVyZm9ybWVyUmVnaXN0ZXJTdWNjZXNzLFxuICBwZXJmb3JtZXJSZWdpc3RlckZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbigncGVyZm9ybWVyUmVnaXN0ZXInLCAnUEVSRk9STUVSX1JFR0lTVEVSJyk7XG5leHBvcnQgY29uc3Qgc2V0UGVyZm9ybWVyUmVnaXN0ZXJTdWJtaXR0aW5nID0gY3JlYXRlQWN0aW9uKFxuICAnU0VUX1BFUkZPUk1FUl9SRUdJU1RFUl9TVUJNSVRUSU5HJ1xuKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgdXNlclJlZ2lzdGVyLFxuICB1c2VyUmVnaXN0ZXJTdWNjZXNzLFxuICB1c2VyUmVnaXN0ZXJGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ3VzZXJSZWdpc3RlcicsICdVU0VSX1JFR0lTVEVSJyk7XG5leHBvcnQgY29uc3Qgc2V0VXNlclJlZ2lzdGVyU3VibWl0dGluZyA9IGNyZWF0ZUFjdGlvbihcbiAgJ1NFVF9VU0VSX1JFR0lTVEVSX1NVQk1JVFRJTkcnXG4pO1xuXG5leHBvcnQgY29uc3Qge1xuICB1cGRhdGVQYXNzd29yZCxcbiAgdXBkYXRlUGFzc3dvcmRTdWNjZXNzLFxuICB1cGRhdGVQYXNzd29yZEZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbigndXBkYXRlUGFzc3dvcmQnLCAnVVBEQVRFX1BBU1NXT1JEJyk7XG5leHBvcnQgY29uc3Qgc2V0VXBkYXRlUGFzc3dvcmRTdWJtaXR0aW5nID0gY3JlYXRlQWN0aW9uKFxuICAnU0VUX1VQREFURV9QQVNTV09SRF9TVUJNSVRUSU5HJ1xuKTtcblxuZXhwb3J0IGNvbnN0IGxvZ291dCA9IGNyZWF0ZUFjdGlvbignbG9nb3V0Jyk7XG4iLCJpbXBvcnQge1xuICBjcmVhdGVBY3Rpb24sXG4gIGNyZWF0ZUFzeW5jQWN0aW9uXG59IGZyb20gJ0BsaWIvcmVkdXgnO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQ3VycmVudFVzZXIgPSBjcmVhdGVBY3Rpb24oJ3VwZGF0ZUN1cnJlbnRVc2VyJyk7XG5leHBvcnQgY29uc3QgdXBkYXRlQ3VycmVudFVzZXJBdmF0YXIgPSBjcmVhdGVBY3Rpb24oJ3VwZGF0ZUN1cnJlbnRVc2VyQXZhdGFyJyk7XG5leHBvcnQgY29uc3QgdXBkYXRlQ3VycmVudFVzZXJCYWxhbmNlID0gY3JlYXRlQWN0aW9uKFxuICAndXBkYXRlQ3VycmVudFVzZXJCYWxhbmNlJ1xuKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgdXBkYXRlVXNlcixcbiAgdXBkYXRlVXNlclN1Y2Nlc3MsXG4gIHVwZGF0ZVVzZXJGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ3VwZGF0ZVVzZXInLCAnVVBEQVRFX1VTRVInKTtcblxuZXhwb3J0IGNvbnN0IHNldFVwZGF0aW5nID0gY3JlYXRlQWN0aW9uKCd1cGRhdGluZ1VzZXInKTtcblxuZXhwb3J0IGNvbnN0IHNldFJlZHVjZXIgPSBjcmVhdGVBY3Rpb24oJ3NldFVzZXJSZWR1Y2VyJyk7XG5cbmV4cG9ydCBjb25zdCBidXlUb2tlblN1Y2Nlc3MgPSBjcmVhdGVBY3Rpb24oJ2J1eVRva2VuU3VjY2VzcycpO1xuXG5leHBvcnQgY29uc3Qge1xuICBnZXRGYXZvcml0ZVBlcmZvcm1lcnMsXG4gIGdldEZhdm9yaXRlUGVyZm9ybWVyc1N1Y2Nlc3MsXG4gIGdldEZhdm9yaXRlUGVyZm9ybWVyc0ZhaWxlZFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCdnZXRGYXZvcml0ZVBlcmZvcm1lcnMnLCAnR0VUX0ZBVk9VUklURScpO1xuZXhwb3J0IGNvbnN0IGdldHRpbmdGYXZvcml0ZVBlcmZvcm1lcnMgPSBjcmVhdGVBY3Rpb24oJ0dFVFRJTkdfRkFWT1JJVEUnKTtcbmV4cG9ydCBjb25zdCByZW1vdmVGYXZvcml0ZSA9IGNyZWF0ZUFjdGlvbignUkVNT1ZFX0ZBVk9SSVRFJyk7XG5cbmV4cG9ydCBjb25zdCB7XG4gIGdldFBheW1lbnRUb2tlbkhpc3Ryb3ksXG4gIGdldFBheW1lbnRUb2tlbkhpc3Ryb3lTdWNjZXNzLFxuICBnZXRQYXltZW50VG9rZW5IaXN0cm95RmFpbFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCdnZXRQYXltZW50VG9rZW5IaXN0cm95JywgJ0dFVF9QQVlNRVRfVE9LRV9ISVNUT1JZJyk7XG5leHBvcnQgY29uc3QgZ2V0dGlnUGF5bWVudFRva2VuSGlzdG9yeSA9IGNyZWF0ZUFjdGlvbignR0VUVElOR19QQVlNRVRfVE9LRV9ISVNUT1JZJyk7XG4iLCJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCB7IG9taXQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnO1xuaW1wb3J0IHsgaXNVcmwgfSBmcm9tICdAbGliL3N0cmluZyc7XG5pbXBvcnQgeyBJUmVnaXN0ZXJGb3JtRGF0YSB9IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IGdldEdsb2JhbENvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcblxuZXhwb3J0IGludGVyZmFjZSBJUmVzcG9uc2U8VD4ge1xuICBzdGF0dXM6IG51bWJlcjtcbiAgZGF0YTogVDtcbn1cblxuZXhwb3J0IGNvbnN0IFRPS0VOID0gJ3Rva2VuJztcbmV4cG9ydCBjb25zdCBST0xFID0gJ3JvbGUnO1xuZXhwb3J0IGNvbnN0IFBFUkZPUk1FUl9ST0xFID0gJ3BlcmZvcm1lcic7XG5leHBvcnQgY29uc3QgVVNFUl9ST0xFID0gJ3VzZXInO1xuZXhwb3J0IGNvbnN0IFNUVURJT19ST0xFID0gJ3N0dWRpbyc7XG5leHBvcnQgY29uc3QgU09SVCA9IHsgZGVzY2VuZDogJ2Rlc2MnLCBhc2NlbmQ6ICdhc2MnIH07XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBUElSZXF1ZXN0IHtcbiAgc3RhdGljIHRva2VuOiBzdHJpbmcgPSAnJztcblxuICBzZXRBdXRoSGVhZGVyVG9rZW4odG9rZW46IHN0cmluZykge1xuICAgIEFQSVJlcXVlc3QudG9rZW4gPSB0b2tlbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZXMgdGhlIEpTT04gcmV0dXJuZWQgYnkgYSBuZXR3b3JrIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtICB7b2JqZWN0fSByZXNwb25zZSBBIHJlc3BvbnNlIGZyb20gYSBuZXR3b3JrIHJlcXVlc3RcbiAgICpcbiAgICogQHJldHVybiB7b2JqZWN0fSAgICAgICAgICBUaGUgcGFyc2VkIEpTT04gZnJvbSB0aGUgcmVxdWVzdFxuICAgKi9cbiAgcHJpdmF0ZSBwYXJzZUpTT04ocmVzcG9uc2U6IFJlc3BvbnNlKSB7XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjA0IHx8IHJlc3BvbnNlLnN0YXR1cyA9PT0gMjA1KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYSBuZXR3b3JrIHJlcXVlc3QgY2FtZSBiYWNrIGZpbmUsIGFuZCB0aHJvd3MgYW4gZXJyb3IgaWYgbm90XG4gICAqXG4gICAqIEBwYXJhbSAge29iamVjdH0gcmVzcG9uc2UgICBBIHJlc3BvbnNlIGZyb20gYSBuZXR3b3JrIHJlcXVlc3RcbiAgICpcbiAgICogQHJldHVybiB7b2JqZWN0fHVuZGVmaW5lZH0gUmV0dXJucyBlaXRoZXIgdGhlIHJlc3BvbnNlLCBvciB0aHJvd3MgYW4gZXJyb3JcbiAgICovXG4gIHByaXZhdGUgYXN5bmMgY2hlY2tTdGF0dXMocmVzcG9uc2U6IFJlc3BvbnNlKSB7XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSAyMDAgJiYgcmVzcG9uc2Uuc3RhdHVzIDwgMzAwKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxuXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDEzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVlc3QgRW50aXR5IFRvbyBMYXJnZScpO1xuICAgIH1cblxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMykge1xuICAgICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJztcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3JiaWRkZW4gaW4gdGhlIGFjdGlvbiEnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCkgYXMgYW55O1xuICAgIC8vIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgLy8gdGhyb3cgZXJyb3I7XG4gICAgdGhyb3cgcmVzcG9uc2UuY2xvbmUoKS5qc29uKCk7XG4gIH1cblxuICByZXF1ZXN0KFxuICAgIHVybDogc3RyaW5nLFxuICAgIG1ldGhvZD86IHN0cmluZyxcbiAgICBib2R5PzogYW55LFxuICAgIGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9XG4gICk6IFByb21pc2U8SVJlc3BvbnNlPGFueT4+IHtcbiAgICBjb25zdCB2ZXJiID0gKG1ldGhvZCB8fCAnZ2V0JykudG9VcHBlckNhc2UoKTtcbiAgICBjb25zdCB1cGRhdGVkSGVhZGVyID0ge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIC8vIFRPRE8gLSBjaGVjayBtZVxuICAgICAgQXV0aG9yaXphdGlvbjpcbiAgICAgICAgQVBJUmVxdWVzdC50b2tlbiB8fCAocHJvY2Vzcy5icm93c2VyID8gY29va2llLmdldChUT0tFTikgOiAnJyksXG4gICAgICAuLi4oaGVhZGVycyB8fCB7fSlcbiAgICB9O1xuICAgIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpO1xuXG4gICAgcmV0dXJuIGZldGNoKGlzVXJsKHVybCkgPyB1cmwgOiBgJHtjb25maWcuQVBJX0VORFBPSU5UIHx8IGNvbmZpZy5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlR9JHt1cmx9YCwge1xuICAgICAgbWV0aG9kOiB2ZXJiLFxuICAgICAgaGVhZGVyczogdXBkYXRlZEhlYWRlcixcbiAgICAgIGJvZHk6IGJvZHkgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IG51bGxcbiAgICB9KVxuICAgICAgLnRoZW4odGhpcy5jaGVja1N0YXR1cylcbiAgICAgIC50aGVuKHRoaXMucGFyc2VKU09OKTtcbiAgfVxuXG4gIGJ1aWxkVXJsKGJhc2VVcmw6IHN0cmluZywgcGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuIH0pIHtcbiAgICBpZiAoIXBhcmFtcykge1xuICAgICAgcmV0dXJuIGJhc2VVcmw7XG4gICAgfVxuXG4gICAgY29uc3QgcXVlcnlTdHJpbmcgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG4gICAgICAubWFwKChrKSA9PiBgJHtlbmNvZGVVUklDb21wb25lbnQoayl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1trXSl9YClcbiAgICAgIC5qb2luKCcmJyk7XG4gICAgcmV0dXJuIGAke2Jhc2VVcmx9PyR7cXVlcnlTdHJpbmd9YDtcbiAgfVxuXG4gIGdldCh1cmw6IHN0cmluZywgaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHVybCwgJ2dldCcsIG51bGwsIGhlYWRlcnMpO1xuICB9XG5cbiAgcG9zdCh1cmw6IHN0cmluZywgZGF0YT86IGFueSwgaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHVybCwgJ3Bvc3QnLCBkYXRhLCBoZWFkZXJzKTtcbiAgfVxuXG4gIHB1dCh1cmw6IHN0cmluZywgZGF0YT86IGFueSwgaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHVybCwgJ3B1dCcsIGRhdGEsIGhlYWRlcnMpO1xuICB9XG5cbiAgZGVsKHVybDogc3RyaW5nLCBkYXRhPzogYW55LCBoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXJsLCAnZGVsZXRlJywgZGF0YSwgaGVhZGVycyk7XG4gIH1cblxuICB1cGxvYWQoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgZmlsZXM6IHtcbiAgICAgIGZpbGU6IEZpbGU7XG4gICAgICBmaWVsZG5hbWU6IHN0cmluZztcbiAgICB9W10sXG4gICAgb3B0aW9uczoge1xuICAgICAgb25Qcm9ncmVzczogRnVuY3Rpb247XG4gICAgICBjdXN0b21EYXRhPzogUmVjb3JkPHN0cmluZywgYW55PjtcbiAgICAgIG1ldGhvZD86IHN0cmluZztcbiAgICB9ID0ge1xuICAgICAgb25Qcm9ncmVzcygpIHt9LFxuICAgICAgbWV0aG9kOiAnUE9TVCdcbiAgICB9XG4gICkge1xuICAgIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpO1xuICAgIGNvbnN0IHVwbG9hZFVybCA9IGlzVXJsKHVybCkgPyB1cmwgOiBgJHtjb25maWcuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UfSR7dXJsfWA7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5sZW5ndGhDb21wdXRhYmxlKSB7XG4gICAgICAgICAgb3B0aW9ucy5vblByb2dyZXNzKHtcbiAgICAgICAgICAgIHBlcmNlbnRhZ2U6IChldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCkgKiAxMDBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJlcS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBzdWNjZXNzID0gcmVxLnN0YXR1cyA+PSAyMDAgJiYgcmVxLnN0YXR1cyA8IDMwMDtcbiAgICAgICAgY29uc3QgeyByZXNwb25zZSB9ID0gcmVxO1xuICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgcmVxLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICAgICAgcmVqZWN0KHJlcS5yZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIGZpbGVzLmZvckVhY2goKGYpID0+IGZvcm1EYXRhLmFwcGVuZChmLmZpZWxkbmFtZSwgZi5maWxlLCBmLmZpbGUubmFtZSkpO1xuICAgICAgb3B0aW9ucy5jdXN0b21EYXRhXG4gICAgICAgICYmIE9iamVjdC5rZXlzKG9wdGlvbnMuY3VzdG9tRGF0YSkuZm9yRWFjaChcbiAgICAgICAgICAoZmllbGRuYW1lKSA9PiB0eXBlb2Ygb3B0aW9ucy5jdXN0b21EYXRhW2ZpZWxkbmFtZV0gIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAmJiBmb3JtRGF0YS5hcHBlbmQoZmllbGRuYW1lLCBvcHRpb25zLmN1c3RvbURhdGFbZmllbGRuYW1lXSlcbiAgICAgICAgKTtcblxuICAgICAgcmVxLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcbiAgICAgIHJlcS5vcGVuKG9wdGlvbnMubWV0aG9kIHx8ICdQT1NUJywgdXBsb2FkVXJsKTtcblxuICAgICAgY29uc3QgdG9rZW46IGFueSA9IGNvb2tpZS5nZXQoVE9LRU4pO1xuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKCdBdXRob3JpemF0aW9uJywgdG9rZW4pO1xuICAgICAgfVxuICAgICAgcmVxLnNlbmQoZm9ybURhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVnaXN0ZXIoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgZGF0YTogSVJlZ2lzdGVyRm9ybURhdGEsXG4gICAgb3B0aW9uczogeyBvblByb2dyZXNzOiBGdW5jdGlvbiB9ID0ge1xuICAgICAgb25Qcm9ncmVzcygpIHt9XG4gICAgfVxuICApIHtcbiAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50Lmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgICBvcHRpb25zLm9uUHJvZ3Jlc3Moe1xuICAgICAgICAgICAgcGVyY2VudGFnZTogKGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsKSAqIDEwMFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmVxLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSByZXEuc3RhdHVzID49IDIwMCAmJiByZXEuc3RhdHVzIDwgMzAwO1xuICAgICAgICBjb25zdCB7IHJlc3BvbnNlIH0gPSByZXE7XG4gICAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICAgIHJldHVybiByZWplY3QocmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgICByZWplY3QocmVxLnJlc3BvbnNlKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgLy8gZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSwgZmlsZS5uYW1lKTtcbiAgICAgIGlmIChkYXRhLmRvY3VtZW50VmVyaWZpY2F0aW9uKSB7XG4gICAgICAgIGNvbnN0IGRvY3VtZW50VmVyaWZpY2F0aW9uRmlsZSA9IGRhdGEuZG9jdW1lbnRWZXJpZmljYXRpb24uZmlsZS5vcmlnaW5GaWxlT2JqO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXG4gICAgICAgICAgJ2RvY3VtZW50VmVyaWZpY2F0aW9uJyxcbiAgICAgICAgICBkb2N1bWVudFZlcmlmaWNhdGlvbkZpbGUsXG4gICAgICAgICAgZG9jdW1lbnRWZXJpZmljYXRpb25GaWxlLm5hbWVcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGEuaWRWZXJpZmljYXRpb24pIHtcbiAgICAgICAgY29uc3QgaWRWZXJpZmljYXRpb25EaWxlID0gZGF0YS5pZFZlcmlmaWNhdGlvbi5maWxlLm9yaWdpbkZpbGVPYmo7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcbiAgICAgICAgICAnaWRWZXJpZmljYXRpb24nLFxuICAgICAgICAgIGlkVmVyaWZpY2F0aW9uRGlsZSxcbiAgICAgICAgICBpZFZlcmlmaWNhdGlvbkRpbGUubmFtZVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBPYmplY3Qua2V5cyhcbiAgICAgICAgb21pdChkYXRhLCBbJ2RvY3VtZW50VmVyaWZpY2F0aW9uJywgJ2lkVmVyaWZpY2F0aW9uJ10pXG4gICAgICApLmZvckVhY2goKHYpID0+IHtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKHYsIGRhdGFbdl0pO1xuICAgICAgfSk7XG5cbiAgICAgIHJlcS5yZXNwb25zZVR5cGUgPSAnanNvbic7XG4gICAgICByZXEub3BlbignUE9TVCcsIGlzVXJsKHVybCkgPyB1cmwgOiBgJHtjb25maWcuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UfSR7dXJsfWApO1xuXG4gICAgICBjb25zdCB0b2tlbjogYW55ID0gY29va2llLmdldChUT0tFTik7XG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCB0b2tlbik7XG4gICAgICB9XG4gICAgICByZXEuc2VuZChmb3JtRGF0YSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImxldCBnbG9iYWxDb25maWcgPSB7fSBhcyBhbnk7XG5cbmV4cG9ydCBjb25zdCBzZXRHbG9iYWxDb25maWcgPSAoY29uZmlnOiBhbnkpID0+IHtcbiAgZ2xvYmFsQ29uZmlnID0gY29uZmlnO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEdsb2JhbENvbmZpZyA9ICgpID0+IGdsb2JhbENvbmZpZztcbiIsImltcG9ydCB7IElTZXR0aW5nLCBJQ291bnRyaWVzIH0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgQVBJUmVxdWVzdCwgSVJlc3BvbnNlIH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBTZXR0aW5nU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBhbGwoZ3JvdXAgPSAnJyk6IFByb21pc2U8SVJlc3BvbnNlPElTZXR0aW5nPj4ge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvc2V0dGluZ3MvcHVibGljJywgeyBncm91cCB9KSk7XG4gIH1cblxuICBnZXRDb3VudHJpZXMoKTogUHJvbWlzZTxJUmVzcG9uc2U8SUNvdW50cmllc1tdPj4ge1xuICAgIHJldHVybiB0aGlzLmdldCgnL2NvdW50cmllcy9saXN0Jyk7XG4gIH1cblxuICBnZXRUaW1lem9uZXMoKTogUHJvbWlzZTxJUmVzcG9uc2U8c3RyaW5nW10+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KCcvdGltZXpvbmVzL2xpc3QnKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2V0dGluZ1NlcnZpY2UgPSBuZXcgU2V0dGluZ1NlcnZpY2UoKTtcbiIsImltcG9ydCB7IElVc2VyIH0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgQVBJUmVxdWVzdCwgSVJlc3BvbnNlIH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5pbXBvcnQgeyBnZXRHbG9iYWxDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5cbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBtZShoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSk6IFByb21pc2U8SVJlc3BvbnNlPElVc2VyPj4ge1xuICAgIHJldHVybiB0aGlzLmdldCgnL3VzZXJzL21lJywgaGVhZGVycyk7XG4gIH1cblxuICB1cGRhdGVNZShwYXlsb2FkOiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5wdXQoJy91c2VycycsIHBheWxvYWQpO1xuICB9XG5cbiAgZ2V0QXZhdGFyVXBsb2FkVXJsKHVzZXJJZD86IHN0cmluZykge1xuICAgIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpO1xuICAgIGlmICh1c2VySWQpIHtcbiAgICAgIHJldHVybiBgJHtjb25maWcuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UfS91c2Vycy8ke3VzZXJJZH0vYXZhdGFyL3VwbG9hZGA7XG4gICAgfVxuICAgIHJldHVybiBgJHtjb25maWcuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UfS91c2Vycy9hdmF0YXIvdXBsb2FkYDtcbiAgfVxuXG4gIHNlYXJjaChxdWVyeT86IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3VzZXJzL3NlYXJjaCcsIHF1ZXJ5KSk7XG4gIH1cblxuICBmaW5kQnlJZChpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvdXNlcnMvdmlldy8ke2lkfWApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCB1c2VyU2VydmljZSA9IG5ldyBVc2VyU2VydmljZSgpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aC10by1yZWdleHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtYWN0aW9uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVzZWxlY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==