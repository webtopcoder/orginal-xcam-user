module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/messages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/messages/index.tsx":
/*!**********************************!*\
  !*** ./pages/messages/index.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_messages_Messenger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/messages/Messenger */ "./src/components/messages/Messenger.tsx");
/* harmony import */ var _redux_message_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @redux/message/actions */ "./src/redux/message/actions.ts");
var _jsxFileName = "E:\\programData\\React\\user\\pages\\messages\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class Messages extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  static getInitialProps({
    ctx
  }) {
    return {
      query: ctx.query
    };
  }

  componentWillUnmount() {
    const {
      resetMessageState: resetStateHandler
    } = this.props;
    resetStateHandler();
  }

  render() {
    const {
      query = {}
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }
    }, "Messages")), __jsx(_components_messages_Messenger__WEBPACK_IMPORTED_MODULE_3__["default"], {
      toSource: query.toSource,
      toId: query.toId,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }
    }));
  }

}

_defineProperty(Messages, "authenticate", true);

_defineProperty(Messages, "layout", 'primary');

const mapStates = state => ({
  ui: _objectSpread({}, state.ui)
});

const mapDispatch = {
  resetMessageState: _redux_message_actions__WEBPACK_IMPORTED_MODULE_4__["resetMessageState"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStates, mapDispatch)(Messages));

/***/ }),

/***/ "./src/components/messages/Compose.tsx":
/*!*********************************************!*\
  !*** ./src/components/messages/Compose.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_message_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redux/message/actions */ "./src/redux/message/actions.ts");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _emotions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./emotions */ "./src/components/messages/emotions.tsx");
/* harmony import */ var _stream_chat_Compose_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../stream-chat/Compose.less */ "./src/components/stream-chat/Compose.less");
/* harmony import */ var _stream_chat_Compose_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_stream_chat_Compose_less__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "E:\\programData\\React\\user\\src\\components\\messages\\Compose.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-return-assign */




 // import { ImageMessageUpload } from '@components/messages/uploadPhoto';
// import { authService } from '@services/index';




class Compose extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "uploadRef", void 0);

    _defineProperty(this, "_input", void 0);

    _defineProperty(this, "state", {
      text: ''
    });

    _defineProperty(this, "onKeyDown", evt => {
      if (evt.keyCode === 13) {
        this.send();
      }
    });

    _defineProperty(this, "onChange", evt => {
      this.setState({
        text: evt.target.value
      });
    });

    _defineProperty(this, "onEmojiClick", emojiObject => {
      const {
        text
      } = this.state;
      this.setMessage(text + emojiObject.emoji);
    });

    _defineProperty(this, "onPhotoUploaded", data => {
      const {
        sentFileSuccess: handleSendFile
      } = this.props;

      if (!data || !data.response) {
        return;
      }

      const imageUrl = data.response.data && data.response.data.imageUrl || data.base64;
      handleSendFile(_objectSpread(_objectSpread({}, data.response.data), {
        imageUrl
      }));
    });

    this.uploadRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  }

  componentDidMount() {
    if (!this.uploadRef) this.uploadRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    if (!this._input) this._input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  }

  componentDidUpdate(previousProps) {
    const {
      sendMessageStatus
    } = this.props;

    if (sendMessageStatus.success !== previousProps.sendMessageStatus.success) {
      this.setMessage('');
      this._input && this._input.focus();
    }
  }

  setMessage(msg) {
    this.setState({
      text: msg
    });
  }

  send() {
    const {
      text
    } = this.state;
    if (!text) return;
    const {
      conversation,
      sendMessage: handleSend
    } = this.props;
    handleSend({
      conversationId: conversation._id,
      data: {
        text
      }
    });
  }

  render() {
    const {
      text
    } = this.state;
    const {
      sendMessageStatus: status,
      conversation
    } = this.props; // const uploadHeaders = {
    //   authorization: authService.getToken()
    // };

    if (!this.uploadRef) this.uploadRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    if (!this._input) this._input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    return __jsx("div", {
      className: "compose",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 7
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
      value: text,
      className: "compose-input",
      placeholder: "Type a message",
      onKeyDown: this.onKeyDown,
      onChange: this.onChange,
      disabled: status.sending || !conversation._id,
      ref: c => this._input = c,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }
    }), __jsx("div", {
      className: "grp-icons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["SendOutlined"], {
      onClick: this.send.bind(this),
      disabled: status.sending,
      style: {
        fontSize: '25px',
        marginRight: '10px',
        color: '#fe26b3'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 11
      }
    }), __jsx("div", {
      className: "grp-emotions",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 11
      }
    }, __jsx("img", {
      src: "/emotion-ico.png",
      width: "25px",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 13
      }
    }), __jsx(_emotions__WEBPACK_IMPORTED_MODULE_5__["default"], {
      onEmojiClick: this.onEmojiClick.bind(this),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 13
      }
    }))));
  }

}

const mapStates = state => ({
  sendMessageStatus: state.message.sendMessage,
  currentUser: state.user.current
});

const mapDispatch = {
  sendMessage: _redux_message_actions__WEBPACK_IMPORTED_MODULE_2__["sendMessage"],
  sentFileSuccess: _redux_message_actions__WEBPACK_IMPORTED_MODULE_2__["sentFileSuccess"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStates, mapDispatch)(Compose));

/***/ }),

/***/ "./src/components/messages/ConversationList.less":
/*!*******************************************************!*\
  !*** ./src/components/messages/ConversationList.less ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/messages/ConversationList.tsx":
/*!******************************************************!*\
  !*** ./src/components/messages/ConversationList.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ConversationList_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConversationList.less */ "./src/components/messages/ConversationList.less");
/* harmony import */ var _ConversationList_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ConversationList_less__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_message_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redux/message/actions */ "./src/redux/message/actions.ts");
/* harmony import */ var src_socket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/socket */ "./src/socket/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/message.service */ "./src/services/message.service.ts");
/* harmony import */ var _ConversationSearch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ConversationSearch */ "./src/components/messages/ConversationSearch.tsx");
/* harmony import */ var _ConversationListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ConversationListItem */ "./src/components/messages/ConversationListItem.tsx");
var _jsxFileName = "E:\\programData\\React\\user\\src\\components\\messages\\ConversationList.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











class ConversationList extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "conversationsRef", void 0);

    _defineProperty(this, "state", {
      conversationPage: 1,
      keyword: ''
    });

    _defineProperty(this, "onMessage", async message => {
      if (!message) {
        return;
      }

      const {
        conversation,
        currentPerformer,
        currentUser,
        getConversationDetail: getConversationDetailHandler,
        receiveMessageSuccess: receiveMessageSuccessHandler,
        updateLastMessage: handleUpdateLastMessage
      } = this.props;
      const {
        mapping
      } = conversation;
      const {
        conversationId,
        text
      } = message;

      if (!mapping[message.conversationId]) {
        getConversationDetailHandler({
          id: message.conversationId
        });
      }

      receiveMessageSuccessHandler(message);
      handleUpdateLastMessage({
        conversationId,
        lastMessage: text
      });
      await _services_message_service__WEBPACK_IMPORTED_MODULE_6__["messageService"].readAllInConversation(conversationId, currentUser._id ? currentUser._id : currentPerformer._id);
    });

    _defineProperty(this, "onSearchConversation", Object(lodash__WEBPACK_IMPORTED_MODULE_5__["debounce"])(async e => {
      const {
        value
      } = e.target;
      const {
        searchConversations: getConversationsHandler
      } = this.props;
      await this.setState({
        keyword: value,
        conversationPage: 0
      });

      if (value) {
        return getConversationsHandler({
          keyword: value,
          limit: 25,
          offset: 0,
          type: 'private'
        });
      }

      return getConversationsHandler({
        limit: 25,
        offset: 0,
        type: 'private'
      });
    }, 500));

    _defineProperty(this, "handleScroll", async event => {
      const {
        conversation,
        getConversations: getConversationsHandler
      } = this.props;
      const {
        requesting,
        data,
        total
      } = conversation.list;
      const {
        conversationPage,
        keyword
      } = this.state;
      const canloadmore = total > data.length;
      const ele = event.target;
      if (!canloadmore) return;

      if (ele.scrollHeight - ele.scrollTop === ele.clientHeight && !requesting && canloadmore) {
        this.setState({
          conversationPage: conversationPage + 1
        }, () => {
          getConversationsHandler({
            keyword,
            limit: 25,
            offset: conversationPage * 25,
            type: 'private'
          });
        });
      }
    });

    _defineProperty(this, "setActive", conversationId => {
      const {
        setActiveConversation: setActiveConversationHandler,
        currentPerformer,
        currentUser
      } = this.props;
      setActiveConversationHandler({
        conversationId,
        recipientId: currentUser._id ? currentUser._id : currentPerformer._id
      });
    });
  }

  async componentDidMount() {
    if (!this.conversationsRef) this.conversationsRef = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
    const {
      getConversations: getConversationsHandler,
      setActiveConversation: setActiveConversationHandler,
      toSource,
      toId,
      currentUser,
      currentPerformer
    } = this.props;
    const {
      conversationPage,
      keyword
    } = this.state;
    getConversationsHandler({
      limit: 25,
      offset: conversationPage * 25,
      type: 'private',
      keyword
    });

    if (toSource && toId) {
      setTimeout(() => {
        setActiveConversationHandler({
          source: toSource,
          sourceId: toId,
          recipientId: currentUser._id ? currentUser._id : currentPerformer._id
        });
      }, 1000);
    }
  }

  render() {
    const {
      conversation
    } = this.props;
    const {
      data: conversations,
      requesting
    } = conversation.list;
    const {
      mapping,
      activeConversation = {}
    } = conversation;
    if (!this.conversationsRef) this.conversationsRef = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
    return __jsx("div", {
      className: "conversation-list",
      ref: this.conversationsRef,
      onScroll: this.handleScroll.bind(this),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 7
      }
    }, __jsx(src_socket__WEBPACK_IMPORTED_MODULE_4__["Event"], {
      event: "message_created",
      handler: this.onMessage,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 9
      }
    }), __jsx("h4", {
      className: "text-center",
      style: {
        fontSize: '22px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 9
      }
    }, "Messenger"), __jsx(_ConversationSearch__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onSearch: e => {
        e.persist();
        this.onSearchConversation(e);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 9
      }
    }), conversations.length > 0 && conversations.map(conversationId => __jsx(_ConversationListItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: conversationId,
      data: mapping[conversationId],
      setActive: this.setActive.bind(this),
      selected: activeConversation._id === conversationId,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 13
      }
    })), requesting && __jsx("div", {
      className: "text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 9
      }
    }, __jsx("img", {
      alt: "loading",
      src: "/loading-ico.gif",
      width: "50px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 11
      }
    })), !requesting && !conversations.length && __jsx("p", {
      className: "text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 50
      }
    }, "No conversation found."));
  }

}

const mapStates = state => ({
  conversation: state.conversation,
  message: state.message,
  currentUser: state.user.current,
  currentPerformer: state.performer.current
});

const mapDispatch = {
  searchConversations: _redux_message_actions__WEBPACK_IMPORTED_MODULE_3__["searchConversations"],
  getConversations: _redux_message_actions__WEBPACK_IMPORTED_MODULE_3__["getConversations"],
  setActiveConversation: _redux_message_actions__WEBPACK_IMPORTED_MODULE_3__["setActiveConversation"],
  getConversationDetail: _redux_message_actions__WEBPACK_IMPORTED_MODULE_3__["getConversationDetail"],
  receiveMessageSuccess: _redux_message_actions__WEBPACK_IMPORTED_MODULE_3__["receiveMessageSuccess"],
  updateLastMessage: _redux_message_actions__WEBPACK_IMPORTED_MODULE_3__["updateLastMessage"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStates, mapDispatch)(ConversationList));

/***/ }),

/***/ "./src/components/messages/ConversationListItem.less":
/*!***********************************************************!*\
  !*** ./src/components/messages/ConversationListItem.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/messages/ConversationListItem.tsx":
/*!**********************************************************!*\
  !*** ./src/components/messages/ConversationListItem.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConversationListItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ConversationListItem_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ConversationListItem.less */ "./src/components/messages/ConversationListItem.less");
/* harmony import */ var _ConversationListItem_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ConversationListItem_less__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "E:\\programData\\React\\user\\src\\components\\messages\\ConversationListItem.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function ConversationListItem(props) {
  const {
    setActive,
    selected,
    data
  } = props;
  const {
    recipientInfo,
    lastMessage,
    _id,
    updatedAt,
    lastMessageCreatedAt,
    totalNotSeenMessages = 0
  } = data;
  const className = selected ? 'conversation-list-item active' : 'conversation-list-item';
  return __jsx("div", {
    "aria-hidden": "true",
    className: className,
    onClick: () => setActive(_id),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "conversation-left-corner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: "conversation-photo",
    src: (recipientInfo === null || recipientInfo === void 0 ? void 0 : recipientInfo.avatar) || '/default-user-icon.png',
    alt: "conversation",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "conversation-info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "conversation-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, (recipientInfo === null || recipientInfo === void 0 ? void 0 : recipientInfo.username) || 'N/A'), __jsx("p", {
    className: "conversation-snippet",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, lastMessage), __jsx("p", {
    className: "conversation-time",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, moment__WEBPACK_IMPORTED_MODULE_2___default()(lastMessageCreatedAt || updatedAt).fromNow())), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
    className: "notification-badge",
    count: totalNotSeenMessages,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/components/messages/ConversationSearch.less":
/*!*********************************************************!*\
  !*** ./src/components/messages/ConversationSearch.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/messages/ConversationSearch.tsx":
/*!********************************************************!*\
  !*** ./src/components/messages/ConversationSearch.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConversationSearch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ConversationSearch_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConversationSearch.less */ "./src/components/messages/ConversationSearch.less");
/* harmony import */ var _ConversationSearch_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ConversationSearch_less__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\programData\\React\\user\\src\\components\\messages\\ConversationSearch.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function ConversationSearch({
  onSearch
}) {
  return __jsx("div", {
    className: "conversation-search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("input", {
    onChange: onSearch,
    type: "search",
    className: "conversation-search-input",
    placeholder: "Search conversation...",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/components/messages/Message.tsx":
/*!*********************************************!*\
  !*** ./src/components/messages/Message.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Message; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stream_chat_Message_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stream-chat/Message.less */ "./src/components/stream-chat/Message.less");
/* harmony import */ var _stream_chat_Message_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stream_chat_Message_less__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\programData\\React\\user\\src\\components\\messages\\Message.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Message(props) {
  const {
    data,
    isMine,
    startsSequence,
    endsSequence,
    showTimestamp
  } = props;
  const friendlyTimestamp = moment__WEBPACK_IMPORTED_MODULE_1___default()(data.createdAt).format('LLLL');
  return __jsx("div", {
    className: ['message', `${isMine ? 'mine' : ''}`, `${startsSequence ? 'start' : ''}`, `${endsSequence ? 'end' : ''}`].join(' '),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, data.text && __jsx("div", {
    className: "bubble-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "bubble",
    title: friendlyTimestamp,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, !data.imageUrl && data.text, ' ', data.imageUrl && __jsx("a", {
    title: "Click to view full content",
    href: data.imageUrl,
    target: "_blank",
    rel: "noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: data.imageUrl,
    width: "180px",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  })))), showTimestamp && __jsx("div", {
    className: "timestamp",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 25
    }
  }, friendlyTimestamp));
}

/***/ }),

/***/ "./src/components/messages/MessageList.tsx":
/*!*************************************************!*\
  !*** ./src/components/messages/MessageList.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stream_chat_MessageList_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stream-chat/MessageList.less */ "./src/components/stream-chat/MessageList.less");
/* harmony import */ var _stream_chat_MessageList_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stream_chat_MessageList_less__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_message_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @redux/message/actions */ "./src/redux/message/actions.ts");
/* harmony import */ var _Compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Compose */ "./src/components/messages/Compose.tsx");
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Message */ "./src/components/messages/Message.tsx");
var _jsxFileName = "E:\\programData\\React\\user\\src\\components\\messages\\MessageList.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class MessageList extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "messagesRef", void 0);

    _defineProperty(this, "state", {
      offset: 1,
      onloadmore: false
    });

    _defineProperty(this, "renderMessages", () => {
      const {
        message,
        currentUser,
        currentPerformer
      } = this.props;
      const messages = message.items;
      let i = 0;
      const messageCount = messages.length;
      const tempMessages = [];

      while (i < messageCount) {
        const previous = messages[i - 1];
        const current = messages[i];
        const next = messages[i + 1];
        const isMine = current.senderId === (currentUser && currentUser._id || currentPerformer && currentPerformer._id);
        const currentMoment = moment__WEBPACK_IMPORTED_MODULE_2___default()(current.createdAt);
        let prevBySameAuthor = false;
        let nextBySameAuthor = false;
        let startsSequence = true;
        let endsSequence = true;
        let showTimestamp = true;

        if (previous) {
          const previousMoment = moment__WEBPACK_IMPORTED_MODULE_2___default()(previous.createdAt);
          const previousDuration = moment__WEBPACK_IMPORTED_MODULE_2___default.a.duration(currentMoment.diff(previousMoment));
          prevBySameAuthor = previous.senderId === current.senderId;

          if (prevBySameAuthor && previousDuration.as('hours') < 1) {
            startsSequence = false;
          }

          if (previousDuration.as('hours') < 1) {
            showTimestamp = false;
          }
        }

        if (next) {
          const nextMoment = moment__WEBPACK_IMPORTED_MODULE_2___default()(next.createdAt);
          const nextDuration = moment__WEBPACK_IMPORTED_MODULE_2___default.a.duration(nextMoment.diff(currentMoment));
          nextBySameAuthor = next.senderId === current.senderId;

          if (nextBySameAuthor && nextDuration.as('hours') < 1) {
            endsSequence = false;
          }
        }

        if (current._id) {
          tempMessages.push(__jsx(_Message__WEBPACK_IMPORTED_MODULE_6__["default"], {
            key: i,
            isMine: isMine,
            startsSequence: startsSequence,
            endsSequence: endsSequence,
            showTimestamp: showTimestamp,
            data: current,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 11
            }
          }));
        } // Proceed to the next message.


        i += 1;
      }

      this.scrollToBottom();
      return tempMessages;
    });
  }

  async componentDidMount() {
    if (!this.messagesRef) this.messagesRef = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
  }

  async componentDidUpdate(prevProps) {
    const {
      conversation,
      message
    } = this.props;
    const {
      onloadmore
    } = this.state;
    const messages = message.items;

    if (prevProps && prevProps.conversation && prevProps.conversation._id !== conversation._id) {
      this.setOffset();
    }

    if (messages !== prevProps.message.items) {
      if (onloadmore) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          onloadmore: false
        });
      } else {
        this.scrollToBottom();
      }
    }
  }

  async handleScroll(conversation, event) {
    const {
      message,
      loadMoreMessages: dispatchLoadMoreMessages
    } = this.props;
    const {
      fetching,
      items,
      total
    } = message;
    const {
      offset
    } = this.state;
    const canloadmore = total > items.length;
    const ele = event.target;
    if (!canloadmore) return;

    if (ele.scrollTop === 0 && conversation._id && !fetching && canloadmore) {
      await this.setState({
        offset: offset + 1,
        onloadmore: true
      });
      dispatchLoadMoreMessages({
        conversationId: conversation._id,
        limit: 20,
        offset: (offset - 1) * 20
      });
    }
  }

  async setOffset() {
    this.setState({
      offset: 1
    });
  }

  scrollToBottom() {
    const {
      onloadmore
    } = this.state;

    if (onloadmore) {
      return;
    }

    if (this.messagesRef && this.messagesRef.current) {
      const ele = this.messagesRef.current;
      window.setTimeout(() => {
        ele.scrollTop = ele.scrollHeight;
      }, 100);
    }
  }

  render() {
    const {
      conversation,
      message
    } = this.props;
    const {
      fetching
    } = message;
    if (!this.messagesRef) this.messagesRef = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
    return __jsx("div", {
      className: "message-list custom",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 7
      }
    }, conversation && conversation._id ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: "message-list-container",
      ref: this.messagesRef,
      onScroll: this.handleScroll.bind(this, conversation),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 13
      }
    }, fetching && __jsx("p", {
      className: "text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 28
      }
    }, "fetching..."), this.renderMessages()), __jsx(_Compose__WEBPACK_IMPORTED_MODULE_5__["default"], {
      conversation: conversation,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 13
      }
    })) : __jsx("div", {
      className: "start-conversation",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 11
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 13
      }
    }, "Click conversation to start")));
  }

}

const mapStates = state => {
  const {
    conversationMap
  } = state.message;
  const {
    activeConversation
  } = state.conversation;
  const messages = conversationMap[activeConversation._id] ? conversationMap[activeConversation._id].items || [] : [];
  const totalMessages = conversationMap[activeConversation._id] ? conversationMap[activeConversation._id].total || 0 : 0;
  const fetching = conversationMap[activeConversation._id] ? conversationMap[activeConversation._id].fetching || false : false;
  return {
    message: {
      items: messages,
      total: totalMessages,
      fetching
    },
    conversation: activeConversation,
    currentUser: state.user.current,
    currentPerformer: state.performer.current
  };
};

const mapDispatch = {
  loadMoreMessages: _redux_message_actions__WEBPACK_IMPORTED_MODULE_4__["loadMoreMessages"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStates, mapDispatch)(MessageList));

/***/ }),

/***/ "./src/components/messages/Messenger.tsx":
/*!***********************************************!*\
  !*** ./src/components/messages/Messenger.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stream_chat_Messenger_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stream-chat/Messenger.less */ "./src/components/stream-chat/Messenger.less");
/* harmony import */ var _stream_chat_Messenger_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stream_chat_Messenger_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_message_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redux/message/actions */ "./src/redux/message/actions.ts");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ConversationList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ConversationList */ "./src/components/messages/ConversationList.tsx");
/* harmony import */ var _MessageList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MessageList */ "./src/components/messages/MessageList.tsx");
var _jsxFileName = "E:\\programData\\React\\user\\src\\components\\messages\\Messenger.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








class Messenger extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  onClose() {
    const {
      deactiveConversation: dispatchDeactiveConversation
    } = this.props;
    dispatchDeactiveConversation();
  }

  render() {
    const {
      toSource,
      toId,
      activeConversation
    } = this.props;
    return __jsx("div", {
      className: "messenger",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: !activeConversation._id ? 'sidebar' : 'sidebar active',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }
    }, __jsx(_ConversationList__WEBPACK_IMPORTED_MODULE_5__["default"], {
      toSource: toSource,
      toId: toId,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }
    })), __jsx("div", {
      className: !activeConversation._id ? 'chat-content' : 'chat-content active',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      onClick: this.onClose.bind(this),
      className: "close-btn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }
    }, "close"), __jsx(_MessageList__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }
    })));
  }

}

const mapStates = state => {
  const {
    activeConversation
  } = state.conversation;
  return {
    activeConversation
  };
};

const mapDispatch = {
  deactiveConversation: _redux_message_actions__WEBPACK_IMPORTED_MODULE_3__["deactiveConversation"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStates, mapDispatch)(Messenger));

/***/ }),

/***/ "./src/components/messages/emotions.tsx":
/*!**********************************************!*\
  !*** ./src/components/messages/emotions.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Emotions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stream_chat_Compose_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stream-chat/Compose.less */ "./src/components/stream-chat/Compose.less");
/* harmony import */ var _stream_chat_Compose_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stream_chat_Compose_less__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\programData\\React\\user\\src\\components\\messages\\emotions.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




let Picker;

if (false) {}

class Emotions extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "uploadRef", void 0);

    this.uploadRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  }

  onEmojiClick(event, emoji) {
    const {
      onEmojiClick
    } = this.props;
    onEmojiClick(emoji);
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Picker, {
      onEmojiClick: this.onEmojiClick.bind(this),
      disableAutoFocus: true,
      disableSearchBar: true,
      disableSkinTonePicker: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }
    }));
  }

}

/***/ }),

/***/ "./src/components/stream-chat/Compose.less":
/*!*************************************************!*\
  !*** ./src/components/stream-chat/Compose.less ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/stream-chat/Message.less":
/*!*************************************************!*\
  !*** ./src/components/stream-chat/Message.less ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/stream-chat/MessageList.less":
/*!*****************************************************!*\
  !*** ./src/components/stream-chat/MessageList.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/stream-chat/Messenger.less":
/*!***************************************************!*\
  !*** ./src/components/stream-chat/Messenger.less ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



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

/***/ "./src/redux/message/actions.ts":
/*!**************************************!*\
  !*** ./src/redux/message/actions.ts ***!
  \**************************************/
/*! exports provided: getConversations, getConversationsSuccess, getConversationsFail, searchConversations, searchConversationsSuccess, searchConversationsFail, readMessages, sendMessage, sendMessageSuccess, sendMessageFail, receiveMessageSuccess, sentFileSuccess, deactiveConversation, updateLastMessage, setActiveConversation, setActiveConversationSuccess, setActiveConversationFail, loadMessages, loadMessagesSuccess, loadMessagesFail, loadMoreMessages, loadMoreMessagesSuccess, loadMoreMessagesFail, fetchingMessage, resetMessageState, getConversationDetail, getConversationDetailSuccess, getConversationDetailFail, countNotReadMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConversations", function() { return getConversations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConversationsSuccess", function() { return getConversationsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConversationsFail", function() { return getConversationsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchConversations", function() { return searchConversations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchConversationsSuccess", function() { return searchConversationsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchConversationsFail", function() { return searchConversationsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readMessages", function() { return readMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMessage", function() { return sendMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMessageSuccess", function() { return sendMessageSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMessageFail", function() { return sendMessageFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveMessageSuccess", function() { return receiveMessageSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sentFileSuccess", function() { return sentFileSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deactiveConversation", function() { return deactiveConversation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLastMessage", function() { return updateLastMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setActiveConversation", function() { return setActiveConversation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setActiveConversationSuccess", function() { return setActiveConversationSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setActiveConversationFail", function() { return setActiveConversationFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMessages", function() { return loadMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMessagesSuccess", function() { return loadMessagesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMessagesFail", function() { return loadMessagesFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMoreMessages", function() { return loadMoreMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMoreMessagesSuccess", function() { return loadMoreMessagesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMoreMessagesFail", function() { return loadMoreMessagesFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchingMessage", function() { return fetchingMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetMessageState", function() { return resetMessageState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConversationDetail", function() { return getConversationDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConversationDetailSuccess", function() { return getConversationDetailSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConversationDetailFail", function() { return getConversationDetailFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countNotReadMessage", function() { return countNotReadMessage; });
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");

const {
  getConversations,
  getConversationsSuccess,
  getConversationsFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getConversations', 'LOAD_CONVERSATIONS');
const {
  searchConversations,
  searchConversationsSuccess,
  searchConversationsFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('searchConversations', 'SEARCH_CONVERSATIONS');
const {
  readMessages
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('readMessages', 'READ_MESSAGES');
const {
  sendMessage,
  sendMessageSuccess,
  sendMessageFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('sendMessage', 'SEND_MESSAGE');
const {
  receiveMessageSuccess
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('receiveMessageSuccess', 'RECEIVE_MESSAGE_SUCCESS');
const {
  sentFileSuccess
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('sentFileSuccess', 'SENT_FILE_SUCCESS');
const {
  deactiveConversation
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('deactiveConversation', 'DEACTIVE_CONVERSATION');
const updateLastMessage = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('updateLastMessage');
const {
  setActiveConversation,
  setActiveConversationSuccess,
  setActiveConversationFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('setActiveConversation', 'SET_ACTIVE_CONVERSATION_RECEIVER');
const {
  loadMessages,
  loadMessagesSuccess,
  loadMessagesFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('loadMessages', 'LOAD_MESSAGES');
const {
  loadMoreMessages,
  loadMoreMessagesSuccess,
  loadMoreMessagesFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('loadMoreMessages', 'LOAD_MORE_MESSAGES');
const fetchingMessage = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('fetchingMessage');
const resetMessageState = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('resetMessageState');
const {
  getConversationDetail,
  getConversationDetailSuccess,
  getConversationDetailFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getConversationDetail', 'LOAD_CONVERSATION_ITEM');
const countNotReadMessage = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('COUNT_TOTAL_NOT_READ_MESSAGE');

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

/***/ "./src/services/auth.service.ts":
/*!**************************************!*\
  !*** ./src/services/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService, authService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authService", function() { return authService; });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");


class AuthService extends _api_request__WEBPACK_IMPORTED_MODULE_1__["APIRequest"] {
  login(data) {
    return this.post('/auth/users/login', data);
  }

  setAuthHeader(token, role) {
    // https://github.com/js-cookie/js-cookie
    // since Safari does not support, need a better solution
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set(_api_request__WEBPACK_IMPORTED_MODULE_1__["TOKEN"], token, {
      expires: 365
    });
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set(_api_request__WEBPACK_IMPORTED_MODULE_1__["ROLE"], role, {
      expires: 365
    });
    this.setAuthHeaderToken(token);
  }

  performerLogin(data) {
    return this.post('/auth/performers/login', data);
  }

  studioLogin(data) {
    return this.post('/auth/studio/login', data);
  }

  setToken(token) {
    // https://github.com/js-cookie/js-cookie
    // since Safari does not support, need a better solution
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set(_api_request__WEBPACK_IMPORTED_MODULE_1__["TOKEN"], token, {
      expires: 365
    });
    this.setAuthHeaderToken(token);
  }

  getToken() {
    const token = js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get(_api_request__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]);
    return token || null;
  }

  getRole() {
    const role = js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get(_api_request__WEBPACK_IMPORTED_MODULE_1__["ROLE"]);
    return role || null;
  }

  removeToken() {
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove(_api_request__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]);
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove(_api_request__WEBPACK_IMPORTED_MODULE_1__["ROLE"]);
  }

  removeRemember() {
     false && false;
  }

  updatePassword(body) {
    return this.put('/auth/users/me/password', body);
  }

  performersRegister(data) {
    return this.register('/auth/performers/register', data);
  }

  userRegister(data) {
    return this.post('/auth/users/register', data);
  }

  studioRegister(data) {
    return this.register('/auth/studio/register', data);
  }

  forgotPassword(email, type) {
    const data = {
      email,
      type
    };
    return this.post('/auth/users/forgot', data);
  }

  resendVerificationEmail(data) {
    return this.post('/verification/resend-verification-email', data);
  }

}
const authService = new AuthService();

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

/***/ "./src/services/message.service.ts":
/*!*****************************************!*\
  !*** ./src/services/message.service.ts ***!
  \*****************************************/
/*! exports provided: MessageService, messageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messageService", function() { return messageService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/services/config.ts");


class MessageService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  getConversations(query) {
    return this.get(this.buildUrl('/conversations', query));
  }

  searchConversations(query) {
    return this.get(this.buildUrl('/conversations/search', query));
  }

  createConversation(data) {
    return this.post('/conversations', data);
  }

  getConversationDetail(id) {
    return this.get(`/conversations/${id}`);
  }

  getConversationByStreamId(streamId) {
    return this.get(`/conversations/stream/${streamId}`);
  }

  getMessages(conversationId, query) {
    return this.get(this.buildUrl(`/messages/conversations/${conversationId}`, query));
  }

  getPublicMessages(conversationId, query) {
    return this.get(this.buildUrl(`/messages/conversations/public/${conversationId}`, query));
  }

  sendMessage(conversationId, data) {
    return this.post(`/messages/conversations/${conversationId}`, data);
  }

  sendStreamMessage(conversationId, data) {
    return this.post(`/messages/stream/conversations/${conversationId}`, data);
  }

  sendPublicStreamMessage(conversationId, data) {
    return this.post(`/messages/stream/public/conversations/${conversationId}`, data);
  }

  findPublicConversationPerformer(performerId) {
    return this.get(`/conversations/stream/public/${performerId}`);
  }

  countTotalNotRead() {
    return this.get('/messages/counting-not-read-messages');
  }

  readAllInConversation(conversationId, recipientId) {
    return this.post('/messages/read-all', {
      conversationId,
      recipientId
    });
  }

  getMessageUploadUrl() {
    const config = Object(_config__WEBPACK_IMPORTED_MODULE_1__["getGlobalConfig"])();
    return `${config.NEXT_PUBLIC_API_ENDPOINT}/messages/private/file`;
  }

  deleteMessage(id) {
    return this.del(`/messages/${id}`);
  }

  deleteAllMessageInConversation(conversationId) {
    return this.del(`/messages/${conversationId}/remove-all-message`);
  }

}
const messageService = new MessageService();

/***/ }),

/***/ "./src/socket/Event.tsx":
/*!******************************!*\
  !*** ./src/socket/Event.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SocketContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SocketContext */ "./src/socket/SocketContext.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/socket/utils.ts");




class Event extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {
      event,
      handler
    } = this.props;
    const socket = this.context;

    if (!socket) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["warning"])('Socket IO connection has not been established.');
      return;
    }

    socket.on(event, handler);
  }

  componentWillUnmount() {
    const {
      event
    } = this.props;
    const socket = this.context;

    if (!socket) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["warning"])('Socket IO connection has not been established.');
      return;
    }

    socket.off(event);
  }

  render() {
    return false;
  }

}

Event.contextType = _SocketContext__WEBPACK_IMPORTED_MODULE_1__["SocketContext"];
/* harmony default export */ __webpack_exports__["default"] = (Event);

/***/ }),

/***/ "./src/socket/Socket.tsx":
/*!*******************************!*\
  !*** ./src/socket/Socket.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/config */ "./src/services/config.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./src/socket/utils.ts");
/* harmony import */ var _SocketContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SocketContext */ "./src/socket/SocketContext.tsx");
var _jsxFileName = "E:\\programData\\React\\user\\src\\socket\\Socket.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class Socket extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "socket", void 0);

    this.connect();
  }

  componentDidUpdate(nextProps) {
    const {
      loggedIn
    } = this.props;

    if (nextProps.loggedIn !== loggedIn) {
      this.connect();
    }

    return true;
  }

  componentWillUnmount() {
    this.socket && this.socket.close();
  }

  connect() {
    const {
      loggedIn
    } = this.props;
    const token = loggedIn && _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["authService"].getToken();

    if (true) {
      return;
    }

    const config = Object(_services_config__WEBPACK_IMPORTED_MODULE_4__["getGlobalConfig"])();
    const {
      uri = config.NEXT_PUBLIC_SOCKET_ENDPOINT
    } = this.props;
    const options = {
      transports: ['websocket', 'polling', 'long-polling'],
      query: token ? `token=${token}` : ''
    };
    this.socket && this.socket.close();
    this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1___default()(uri, this.mergeOptions(options));
    this.socket.status = 'initialized';
    this.socket.on('connect', () => {
      this.socket.status = 'connected';
      Object(_utils__WEBPACK_IMPORTED_MODULE_5__["debug"])('connected');
    });
    this.socket.on('disconnect', () => {
      this.socket.status = 'disconnected';
      Object(_utils__WEBPACK_IMPORTED_MODULE_5__["debug"])('disconnect');
    });
    this.socket.on('error', err => {
      this.socket.status = 'failed';
      Object(_utils__WEBPACK_IMPORTED_MODULE_5__["warning"])('error', err);
    });
    this.socket.on('reconnect', data => {
      this.socket.status = 'connected';
      Object(_utils__WEBPACK_IMPORTED_MODULE_5__["debug"])('reconnect', data);
    });
    this.socket.on('reconnect_attempt', () => {
      Object(_utils__WEBPACK_IMPORTED_MODULE_5__["debug"])('reconnect_attempt');
    });
    this.socket.on('reconnecting', () => {
      this.socket.status = 'reconnecting';
      Object(_utils__WEBPACK_IMPORTED_MODULE_5__["debug"])('reconnecting');
    });
    this.socket.on('reconnect_failed', error => {
      this.socket.status = 'failed';
      Object(_utils__WEBPACK_IMPORTED_MODULE_5__["warning"])('reconnect_failed', error);
    });
  }

  mergeOptions(options = {}) {
    const defaultOptions = {
      reconnection: true,
      reconnectionAttempts: Infinity,
      reconnectionDelay: 1 * 1000,
      reconnectionDelayMax: 5 * 1000,
      autoConnect: true,
      transports: ['websocket', 'polling', 'long-polling'],
      rejectUnauthorized: true
    };
    return _objectSpread(_objectSpread({}, defaultOptions), options);
  }

  render() {
    const {
      children
    } = this.props;
    return __jsx(_SocketContext__WEBPACK_IMPORTED_MODULE_6__["SocketContext"].Provider, {
      value: this.socket,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 7
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.only(children));
  }

}

const mapStates = state => ({
  loggedIn: state.auth.loggedIn
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStates)(Socket));

/***/ }),

/***/ "./src/socket/SocketContext.tsx":
/*!**************************************!*\
  !*** ./src/socket/SocketContext.tsx ***!
  \**************************************/
/*! exports provided: SocketContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketContext", function() { return SocketContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const SocketContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext('socket');

/***/ }),

/***/ "./src/socket/index.ts":
/*!*****************************!*\
  !*** ./src/socket/index.ts ***!
  \*****************************/
/*! exports provided: Socket, Event, SocketContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Socket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Socket */ "./src/socket/Socket.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Socket", function() { return _Socket__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Event */ "./src/socket/Event.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return _Event__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _SocketContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SocketContext */ "./src/socket/SocketContext.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SocketContext", function() { return _SocketContext__WEBPACK_IMPORTED_MODULE_2__["SocketContext"]; });





if (false) {}



/***/ }),

/***/ "./src/socket/utils.ts":
/*!*****************************!*\
  !*** ./src/socket/utils.ts ***!
  \*****************************/
/*! exports provided: warning, debug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warning", function() { return warning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return debug; });
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/config */ "./src/services/config.ts");
/* eslint-disable prefer-spread */

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */

const warning = (...args) => {
  const config = Object(_services_config__WEBPACK_IMPORTED_MODULE_0__["getGlobalConfig"])(); // debug on development and staging.

  if (config.NODE_ENV === 'production') return;
  /* eslint-disable no-console */

  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error.apply(console, args);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(args.join(' '));
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */

};
const debug = (...args) => {
  const config = Object(_services_config__WEBPACK_IMPORTED_MODULE_0__["getGlobalConfig"])(); // debug on development and staging.

  if (config.NODE_ENV === 'production') return;
  /* eslint-disable no-console */

  if (typeof console !== 'undefined' && typeof console.debug === 'function') {
    console.debug.apply(console, args);
  }
};

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

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbWVzc2FnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21lc3NhZ2VzL0NvbXBvc2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21lc3NhZ2VzL0NvbnZlcnNhdGlvbkxpc3QudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21lc3NhZ2VzL0NvbnZlcnNhdGlvbkxpc3RJdGVtLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tZXNzYWdlcy9Db252ZXJzYXRpb25TZWFyY2gudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21lc3NhZ2VzL01lc3NhZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21lc3NhZ2VzL01lc3NhZ2VMaXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tZXNzYWdlcy9NZXNzZW5nZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21lc3NhZ2VzL2Vtb3Rpb25zLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3JlZHV4LnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvc3RyaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9tZXNzYWdlL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2FwaS1yZXF1ZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvbWVzc2FnZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zb2NrZXQvRXZlbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9zb2NrZXQvU29ja2V0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc29ja2V0L1NvY2tldENvbnRleHQudHN4Iiwid2VicGFjazovLy8uL3NyYy9zb2NrZXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvY2tldC91dGlscy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLXVuZmV0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtYWN0aW9uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlc2VsZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic29ja2V0LmlvLWNsaWVudFwiIl0sIm5hbWVzIjpbIk1lc3NhZ2VzIiwiUHVyZUNvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInF1ZXJ5IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZXNldE1lc3NhZ2VTdGF0ZSIsInJlc2V0U3RhdGVIYW5kbGVyIiwicHJvcHMiLCJyZW5kZXIiLCJ0b1NvdXJjZSIsInRvSWQiLCJtYXBTdGF0ZXMiLCJzdGF0ZSIsInVpIiwibWFwRGlzcGF0Y2giLCJjb25uZWN0IiwiQ29tcG9zZSIsImNvbnN0cnVjdG9yIiwidGV4dCIsImV2dCIsImtleUNvZGUiLCJzZW5kIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImVtb2ppT2JqZWN0Iiwic2V0TWVzc2FnZSIsImVtb2ppIiwiZGF0YSIsInNlbnRGaWxlU3VjY2VzcyIsImhhbmRsZVNlbmRGaWxlIiwicmVzcG9uc2UiLCJpbWFnZVVybCIsImJhc2U2NCIsInVwbG9hZFJlZiIsIlJlYWN0IiwiY3JlYXRlUmVmIiwiY29tcG9uZW50RGlkTW91bnQiLCJfaW5wdXQiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2aW91c1Byb3BzIiwic2VuZE1lc3NhZ2VTdGF0dXMiLCJzdWNjZXNzIiwiZm9jdXMiLCJtc2ciLCJjb252ZXJzYXRpb24iLCJzZW5kTWVzc2FnZSIsImhhbmRsZVNlbmQiLCJjb252ZXJzYXRpb25JZCIsIl9pZCIsInN0YXR1cyIsIm9uS2V5RG93biIsIm9uQ2hhbmdlIiwic2VuZGluZyIsImMiLCJiaW5kIiwiZm9udFNpemUiLCJtYXJnaW5SaWdodCIsImNvbG9yIiwib25FbW9qaUNsaWNrIiwibWVzc2FnZSIsImN1cnJlbnRVc2VyIiwidXNlciIsImN1cnJlbnQiLCJDb252ZXJzYXRpb25MaXN0IiwiY29udmVyc2F0aW9uUGFnZSIsImtleXdvcmQiLCJjdXJyZW50UGVyZm9ybWVyIiwiZ2V0Q29udmVyc2F0aW9uRGV0YWlsIiwiZ2V0Q29udmVyc2F0aW9uRGV0YWlsSGFuZGxlciIsInJlY2VpdmVNZXNzYWdlU3VjY2VzcyIsInJlY2VpdmVNZXNzYWdlU3VjY2Vzc0hhbmRsZXIiLCJ1cGRhdGVMYXN0TWVzc2FnZSIsImhhbmRsZVVwZGF0ZUxhc3RNZXNzYWdlIiwibWFwcGluZyIsImlkIiwibGFzdE1lc3NhZ2UiLCJtZXNzYWdlU2VydmljZSIsInJlYWRBbGxJbkNvbnZlcnNhdGlvbiIsImRlYm91bmNlIiwiZSIsInNlYXJjaENvbnZlcnNhdGlvbnMiLCJnZXRDb252ZXJzYXRpb25zSGFuZGxlciIsImxpbWl0Iiwib2Zmc2V0IiwidHlwZSIsImV2ZW50IiwiZ2V0Q29udmVyc2F0aW9ucyIsInJlcXVlc3RpbmciLCJ0b3RhbCIsImxpc3QiLCJjYW5sb2FkbW9yZSIsImxlbmd0aCIsImVsZSIsInNjcm9sbEhlaWdodCIsInNjcm9sbFRvcCIsImNsaWVudEhlaWdodCIsInNldEFjdGl2ZUNvbnZlcnNhdGlvbiIsInNldEFjdGl2ZUNvbnZlcnNhdGlvbkhhbmRsZXIiLCJyZWNpcGllbnRJZCIsImNvbnZlcnNhdGlvbnNSZWYiLCJzZXRUaW1lb3V0Iiwic291cmNlIiwic291cmNlSWQiLCJjb252ZXJzYXRpb25zIiwiYWN0aXZlQ29udmVyc2F0aW9uIiwiaGFuZGxlU2Nyb2xsIiwib25NZXNzYWdlIiwicGVyc2lzdCIsIm9uU2VhcmNoQ29udmVyc2F0aW9uIiwibWFwIiwic2V0QWN0aXZlIiwicGVyZm9ybWVyIiwiQ29udmVyc2F0aW9uTGlzdEl0ZW0iLCJzZWxlY3RlZCIsInJlY2lwaWVudEluZm8iLCJ1cGRhdGVkQXQiLCJsYXN0TWVzc2FnZUNyZWF0ZWRBdCIsInRvdGFsTm90U2Vlbk1lc3NhZ2VzIiwiY2xhc3NOYW1lIiwiYXZhdGFyIiwidXNlcm5hbWUiLCJtb21lbnQiLCJmcm9tTm93IiwiQ29udmVyc2F0aW9uU2VhcmNoIiwib25TZWFyY2giLCJNZXNzYWdlIiwiaXNNaW5lIiwic3RhcnRzU2VxdWVuY2UiLCJlbmRzU2VxdWVuY2UiLCJzaG93VGltZXN0YW1wIiwiZnJpZW5kbHlUaW1lc3RhbXAiLCJjcmVhdGVkQXQiLCJmb3JtYXQiLCJqb2luIiwiTWVzc2FnZUxpc3QiLCJvbmxvYWRtb3JlIiwibWVzc2FnZXMiLCJpdGVtcyIsImkiLCJtZXNzYWdlQ291bnQiLCJ0ZW1wTWVzc2FnZXMiLCJwcmV2aW91cyIsIm5leHQiLCJzZW5kZXJJZCIsImN1cnJlbnRNb21lbnQiLCJwcmV2QnlTYW1lQXV0aG9yIiwibmV4dEJ5U2FtZUF1dGhvciIsInByZXZpb3VzTW9tZW50IiwicHJldmlvdXNEdXJhdGlvbiIsImR1cmF0aW9uIiwiZGlmZiIsImFzIiwibmV4dE1vbWVudCIsIm5leHREdXJhdGlvbiIsInB1c2giLCJzY3JvbGxUb0JvdHRvbSIsIm1lc3NhZ2VzUmVmIiwicHJldlByb3BzIiwic2V0T2Zmc2V0IiwibG9hZE1vcmVNZXNzYWdlcyIsImRpc3BhdGNoTG9hZE1vcmVNZXNzYWdlcyIsImZldGNoaW5nIiwid2luZG93IiwicmVuZGVyTWVzc2FnZXMiLCJjb252ZXJzYXRpb25NYXAiLCJ0b3RhbE1lc3NhZ2VzIiwiTWVzc2VuZ2VyIiwib25DbG9zZSIsImRlYWN0aXZlQ29udmVyc2F0aW9uIiwiZGlzcGF0Y2hEZWFjdGl2ZUNvbnZlcnNhdGlvbiIsIlBpY2tlciIsIkVtb3Rpb25zIiwiY3JlYXRlQWN0aW9uIiwiYWN0aW9uIiwiUmVkdXhDcmVhdGVBY3Rpb24iLCJpcyIsImFUeXBlIiwidG9TdHJpbmciLCJjcmVhdGVBc3luY0FjdGlvbiIsImNyZWF0ZUFzeW5jQWN0aW9ucyIsImhhbmRsZUFjdGlvbnMiLCJhY3Rpb25zIiwiaW5pdGlhbFN0YXRlIiwiaGFuZGxlUmVkdXhBY3Rpb25zIiwicmVkdWNlIiwicmVkdWNlciIsImhhbmRsZXIiLCJhY3QiLCJzZXQiLCJjcmVhdGVSZWR1Y2VycyIsInN0YXRlQ29udGV4dCIsInJlZHVjZXJzIiwicHJldmVudFJlc2V0dGluZyIsImZsYXR0ZW4iLCJpc0FycmF5Iiwib24iLCJmb3JFYWNoIiwiQVBQX1NUQVRFX1JFU0VUIiwiY3JlYXRlU2FnYXMiLCJzYWdhcyIsInNhZ2EiLCJlZmZlY3QiLCJ0YWtlTGF0ZXN0Iiwid29ya2VyIiwiZGVsYXkiLCJjcmVhdGVTZWxlY3RvcnNBIiwiY29udGV4dCIsImtleXMiLCJzdGF0ZVNlbGVjdG9yIiwiaXNFbXB0eSIsImtleSIsImdldEluIiwiZ2V0IiwiY3JlYXRlU2VsZWN0b3JzIiwic2VsZWN0b3JzIiwiY3JlYXRlSlNTZWxlY3RvcnMiLCJpc1VybCIsInVybCIsIm1hdGNoIiwiZ2VuZXJhdGVVdWlkIiwicmVwbGFjZSIsInIiLCJNYXRoIiwicmFuZG9tIiwidiIsImNhcGl0YWxpemVGaXJzdExldHRlciIsInN0ciIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJ1bml0UHJpY2VzIiwiZ2V0Q29udmVyc2F0aW9uc1N1Y2Nlc3MiLCJnZXRDb252ZXJzYXRpb25zRmFpbCIsInNlYXJjaENvbnZlcnNhdGlvbnNTdWNjZXNzIiwic2VhcmNoQ29udmVyc2F0aW9uc0ZhaWwiLCJyZWFkTWVzc2FnZXMiLCJzZW5kTWVzc2FnZVN1Y2Nlc3MiLCJzZW5kTWVzc2FnZUZhaWwiLCJzZXRBY3RpdmVDb252ZXJzYXRpb25TdWNjZXNzIiwic2V0QWN0aXZlQ29udmVyc2F0aW9uRmFpbCIsImxvYWRNZXNzYWdlcyIsImxvYWRNZXNzYWdlc1N1Y2Nlc3MiLCJsb2FkTWVzc2FnZXNGYWlsIiwibG9hZE1vcmVNZXNzYWdlc1N1Y2Nlc3MiLCJsb2FkTW9yZU1lc3NhZ2VzRmFpbCIsImZldGNoaW5nTWVzc2FnZSIsImdldENvbnZlcnNhdGlvbkRldGFpbFN1Y2Nlc3MiLCJnZXRDb252ZXJzYXRpb25EZXRhaWxGYWlsIiwiY291bnROb3RSZWFkTWVzc2FnZSIsIlRPS0VOIiwiUk9MRSIsIlBFUkZPUk1FUl9ST0xFIiwiVVNFUl9ST0xFIiwiU1RVRElPX1JPTEUiLCJTT1JUIiwiZGVzY2VuZCIsImFzY2VuZCIsIkFQSVJlcXVlc3QiLCJzZXRBdXRoSGVhZGVyVG9rZW4iLCJ0b2tlbiIsInBhcnNlSlNPTiIsImpzb24iLCJjaGVja1N0YXR1cyIsIkVycm9yIiwiY2xvbmUiLCJyZXF1ZXN0IiwibWV0aG9kIiwiYm9keSIsImhlYWRlcnMiLCJ2ZXJiIiwidXBkYXRlZEhlYWRlciIsIkF1dGhvcml6YXRpb24iLCJjb29raWUiLCJjb25maWciLCJnZXRHbG9iYWxDb25maWciLCJmZXRjaCIsIkFQSV9FTkRQT0lOVCIsIk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwiYnVpbGRVcmwiLCJiYXNlVXJsIiwicGFyYW1zIiwicXVlcnlTdHJpbmciLCJPYmplY3QiLCJrIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicG9zdCIsInB1dCIsImRlbCIsInVwbG9hZCIsImZpbGVzIiwib3B0aW9ucyIsIm9uUHJvZ3Jlc3MiLCJ1cGxvYWRVcmwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcSIsIlhNTEh0dHBSZXF1ZXN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImxlbmd0aENvbXB1dGFibGUiLCJwZXJjZW50YWdlIiwibG9hZGVkIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImYiLCJhcHBlbmQiLCJmaWVsZG5hbWUiLCJmaWxlIiwibmFtZSIsImN1c3RvbURhdGEiLCJyZXNwb25zZVR5cGUiLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsInJlZ2lzdGVyIiwiZG9jdW1lbnRWZXJpZmljYXRpb24iLCJkb2N1bWVudFZlcmlmaWNhdGlvbkZpbGUiLCJvcmlnaW5GaWxlT2JqIiwiaWRWZXJpZmljYXRpb24iLCJpZFZlcmlmaWNhdGlvbkRpbGUiLCJvbWl0IiwiQXV0aFNlcnZpY2UiLCJsb2dpbiIsInNldEF1dGhIZWFkZXIiLCJyb2xlIiwiZXhwaXJlcyIsInBlcmZvcm1lckxvZ2luIiwic3R1ZGlvTG9naW4iLCJzZXRUb2tlbiIsImdldFRva2VuIiwiZ2V0Um9sZSIsInJlbW92ZVRva2VuIiwicmVtb3ZlIiwicmVtb3ZlUmVtZW1iZXIiLCJ1cGRhdGVQYXNzd29yZCIsInBlcmZvcm1lcnNSZWdpc3RlciIsInVzZXJSZWdpc3RlciIsInN0dWRpb1JlZ2lzdGVyIiwiZm9yZ290UGFzc3dvcmQiLCJlbWFpbCIsInJlc2VuZFZlcmlmaWNhdGlvbkVtYWlsIiwiYXV0aFNlcnZpY2UiLCJnbG9iYWxDb25maWciLCJzZXRHbG9iYWxDb25maWciLCJNZXNzYWdlU2VydmljZSIsImNyZWF0ZUNvbnZlcnNhdGlvbiIsImdldENvbnZlcnNhdGlvbkJ5U3RyZWFtSWQiLCJzdHJlYW1JZCIsImdldE1lc3NhZ2VzIiwiZ2V0UHVibGljTWVzc2FnZXMiLCJzZW5kU3RyZWFtTWVzc2FnZSIsInNlbmRQdWJsaWNTdHJlYW1NZXNzYWdlIiwiZmluZFB1YmxpY0NvbnZlcnNhdGlvblBlcmZvcm1lciIsInBlcmZvcm1lcklkIiwiY291bnRUb3RhbE5vdFJlYWQiLCJnZXRNZXNzYWdlVXBsb2FkVXJsIiwiZGVsZXRlTWVzc2FnZSIsImRlbGV0ZUFsbE1lc3NhZ2VJbkNvbnZlcnNhdGlvbiIsIkV2ZW50IiwiQ29tcG9uZW50Iiwic29ja2V0Iiwid2FybmluZyIsIm9mZiIsImNvbnRleHRUeXBlIiwiU29ja2V0Q29udGV4dCIsIlNvY2tldCIsIm5leHRQcm9wcyIsImxvZ2dlZEluIiwiY2xvc2UiLCJ1cmkiLCJORVhUX1BVQkxJQ19TT0NLRVRfRU5EUE9JTlQiLCJ0cmFuc3BvcnRzIiwiU29ja2V0SU8iLCJtZXJnZU9wdGlvbnMiLCJkZWJ1ZyIsImVyciIsImVycm9yIiwiZGVmYXVsdE9wdGlvbnMiLCJyZWNvbm5lY3Rpb24iLCJyZWNvbm5lY3Rpb25BdHRlbXB0cyIsIkluZmluaXR5IiwicmVjb25uZWN0aW9uRGVsYXkiLCJyZWNvbm5lY3Rpb25EZWxheU1heCIsImF1dG9Db25uZWN0IiwicmVqZWN0VW5hdXRob3JpemVkIiwiY2hpbGRyZW4iLCJDaGlsZHJlbiIsIm9ubHkiLCJhdXRoIiwiY3JlYXRlQ29udGV4dCIsImFyZ3MiLCJOT0RFX0VOViIsImNvbnNvbGUiLCJhcHBseSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtR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LENBQVVpSSxJQUFJLENBQUNuUSxJQUFMLENBQVUsR0FBVixDQUFWLENBQU47QUFDQTtBQUNELEdBUEQsQ0FPRSxPQUFPdEQsQ0FBUCxFQUFVLENBQUU7QUFDZDs7QUFDRCxDQW5CTTtBQXFCQSxNQUFNeVMsS0FBSyxHQUFHLENBQUMsR0FBR2dCLElBQUosS0FBYTtBQUNoQyxRQUFNdkgsTUFBTSxHQUFHQyx3RUFBZSxFQUE5QixDQURnQyxDQUVoQzs7QUFDQSxNQUFJRCxNQUFNLENBQUN3SCxRQUFQLEtBQW9CLFlBQXhCLEVBQXNDO0FBRXRDOztBQUNBLE1BQUksT0FBT0MsT0FBUCxLQUFtQixXQUFuQixJQUFrQyxPQUFPQSxPQUFPLENBQUNsQixLQUFmLEtBQXlCLFVBQS9ELEVBQTJFO0FBQ3pFa0IsV0FBTyxDQUFDbEIsS0FBUixDQUFjbUIsS0FBZCxDQUFvQkQsT0FBcEIsRUFBNkJGLElBQTdCO0FBQ0Q7QUFDRixDQVRNLEM7Ozs7Ozs7Ozs7O0FDL0JQLDhDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InBhZ2VzL21lc3NhZ2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9tZXNzYWdlcy9pbmRleC50c3hcIik7XG4iLCJpbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBJVUlDb25maWcgfSBmcm9tICdzcmMvaW50ZXJmYWNlcy8nO1xuaW1wb3J0IE1lc3NlbmdlciBmcm9tICdAY29tcG9uZW50cy9tZXNzYWdlcy9NZXNzZW5nZXInO1xuaW1wb3J0IHsgcmVzZXRNZXNzYWdlU3RhdGUgfSBmcm9tICdAcmVkdXgvbWVzc2FnZS9hY3Rpb25zJztcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHVpOiBJVUlDb25maWc7XG4gIGdldExpc3Q6IEZ1bmN0aW9uO1xuICBxdWVyeTogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbiAgcmVzZXRNZXNzYWdlU3RhdGU6IEZ1bmN0aW9uO1xufVxuXG5jbGFzcyBNZXNzYWdlcyBleHRlbmRzIFB1cmVDb21wb25lbnQ8SVByb3BzPiB7XG4gIHN0YXRpYyBhdXRoZW50aWNhdGUgPSB0cnVlO1xuXG4gIHN0YXRpYyBsYXlvdXQgPSAncHJpbWFyeSc7XG5cbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyh7IGN0eCB9KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHF1ZXJ5OiBjdHgucXVlcnlcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY29uc3QgeyByZXNldE1lc3NhZ2VTdGF0ZTogcmVzZXRTdGF0ZUhhbmRsZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgcmVzZXRTdGF0ZUhhbmRsZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHF1ZXJ5ID0ge30gfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5cbiAgICAgICAgICAgIE1lc3NhZ2VzXG4gICAgICAgICAgPC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8TWVzc2VuZ2VyIHRvU291cmNlPXtxdWVyeS50b1NvdXJjZX0gdG9JZD17cXVlcnkudG9JZH0gLz5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVzID0gKHN0YXRlOiBhbnkpID0+ICh7XG4gIHVpOiB7IC4uLnN0YXRlLnVpIH1cbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaCA9IHsgcmVzZXRNZXNzYWdlU3RhdGUgfTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVzLCBtYXBEaXNwYXRjaCkoTWVzc2FnZXMpO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcmV0dXJuLWFzc2lnbiAqL1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgc2VuZE1lc3NhZ2UsIHNlbnRGaWxlU3VjY2VzcyB9IGZyb20gJ0ByZWR1eC9tZXNzYWdlL2FjdGlvbnMnO1xuaW1wb3J0IHsgU2VuZE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdhbnRkJztcbi8vIGltcG9ydCB7IEltYWdlTWVzc2FnZVVwbG9hZCB9IGZyb20gJ0Bjb21wb25lbnRzL21lc3NhZ2VzL3VwbG9hZFBob3RvJztcbi8vIGltcG9ydCB7IGF1dGhTZXJ2aWNlIH0gZnJvbSAnQHNlcnZpY2VzL2luZGV4JztcbmltcG9ydCBFbW90aW9ucyBmcm9tICcuL2Vtb3Rpb25zJztcbmltcG9ydCAnLi4vc3RyZWFtLWNoYXQvQ29tcG9zZS5sZXNzJztcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHNlbmRNZXNzYWdlOiBGdW5jdGlvbjtcbiAgc2VudEZpbGVTdWNjZXNzOiBGdW5jdGlvbjtcbiAgc2VuZE1lc3NhZ2VTdGF0dXM6IGFueTtcbiAgY29udmVyc2F0aW9uOiBhbnk7XG4gIGN1cnJlbnRVc2VyOiBhbnlcbn1cblxuY2xhc3MgQ29tcG9zZSBleHRlbmRzIFB1cmVDb21wb25lbnQ8SVByb3BzPiB7XG4gIHVwbG9hZFJlZjogYW55O1xuXG4gIF9pbnB1dDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMudXBsb2FkUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gIH1cblxuICBzdGF0ZSA9IHsgdGV4dDogJycgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAoIXRoaXMudXBsb2FkUmVmKSB0aGlzLnVwbG9hZFJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgIGlmICghdGhpcy5faW5wdXQpIHRoaXMuX2lucHV0ID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldmlvdXNQcm9wczogSVByb3BzKSB7XG4gICAgY29uc3QgeyBzZW5kTWVzc2FnZVN0YXR1cyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoc2VuZE1lc3NhZ2VTdGF0dXMuc3VjY2VzcyAhPT0gcHJldmlvdXNQcm9wcy5zZW5kTWVzc2FnZVN0YXR1cy5zdWNjZXNzKSB7XG4gICAgICB0aGlzLnNldE1lc3NhZ2UoJycpO1xuICAgICAgdGhpcy5faW5wdXQgJiYgdGhpcy5faW5wdXQuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBzZXRNZXNzYWdlKG1zZzogc3RyaW5nKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRleHQ6IG1zZyB9KTtcbiAgfVxuXG4gIG9uS2V5RG93biA9IChldnQpID0+IHtcbiAgICBpZiAoZXZ0LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICB0aGlzLnNlbmQoKTtcbiAgICB9XG4gIH07XG5cbiAgb25DaGFuZ2UgPSAoZXZ0KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRleHQ6IGV2dC50YXJnZXQudmFsdWUgfSk7XG4gIH07XG5cbiAgb25FbW9qaUNsaWNrID0gKGVtb2ppT2JqZWN0KSA9PiB7XG4gICAgY29uc3QgeyB0ZXh0IH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0TWVzc2FnZSh0ZXh0ICsgZW1vamlPYmplY3QuZW1vamkpO1xuICB9XG5cbiAgb25QaG90b1VwbG9hZGVkID0gKGRhdGE6IGFueSkgPT4ge1xuICAgIGNvbnN0IHsgc2VudEZpbGVTdWNjZXNzOiBoYW5kbGVTZW5kRmlsZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIWRhdGEgfHwgIWRhdGEucmVzcG9uc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaW1hZ2VVcmwgPSAoZGF0YS5yZXNwb25zZS5kYXRhICYmIGRhdGEucmVzcG9uc2UuZGF0YS5pbWFnZVVybCkgfHwgZGF0YS5iYXNlNjQ7XG4gICAgaGFuZGxlU2VuZEZpbGUoeyAuLi5kYXRhLnJlc3BvbnNlLmRhdGEsIC4uLnsgaW1hZ2VVcmwgfSB9KTtcbiAgfVxuXG4gIHNlbmQoKSB7XG4gICAgY29uc3QgeyB0ZXh0IH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmICghdGV4dCkgcmV0dXJuO1xuICAgIGNvbnN0IHsgY29udmVyc2F0aW9uLCBzZW5kTWVzc2FnZTogaGFuZGxlU2VuZCB9ID0gdGhpcy5wcm9wcztcbiAgICBoYW5kbGVTZW5kKHtcbiAgICAgIGNvbnZlcnNhdGlvbklkOiBjb252ZXJzYXRpb24uX2lkLFxuICAgICAgZGF0YToge1xuICAgICAgICB0ZXh0XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0ZXh0IH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgc2VuZE1lc3NhZ2VTdGF0dXM6IHN0YXR1cywgY29udmVyc2F0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgIC8vIGNvbnN0IHVwbG9hZEhlYWRlcnMgPSB7XG4gICAgLy8gICBhdXRob3JpemF0aW9uOiBhdXRoU2VydmljZS5nZXRUb2tlbigpXG4gICAgLy8gfTtcbiAgICBpZiAoIXRoaXMudXBsb2FkUmVmKSB0aGlzLnVwbG9hZFJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgIGlmICghdGhpcy5faW5wdXQpIHRoaXMuX2lucHV0ID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9zZVwiPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICB2YWx1ZT17dGV4dH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJjb21wb3NlLWlucHV0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgYSBtZXNzYWdlXCJcbiAgICAgICAgICBvbktleURvd249e3RoaXMub25LZXlEb3dufVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgIGRpc2FibGVkPXtzdGF0dXMuc2VuZGluZyB8fCAhY29udmVyc2F0aW9uLl9pZH1cbiAgICAgICAgICByZWY9eyhjKSA9PiB0aGlzLl9pbnB1dCA9IGN9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JwLWljb25zXCI+XG4gICAgICAgICAgPFNlbmRPdXRsaW5lZCBvbkNsaWNrPXt0aGlzLnNlbmQuYmluZCh0aGlzKX0gZGlzYWJsZWQ9e3N0YXR1cy5zZW5kaW5nfSBzdHlsZT17eyBmb250U2l6ZTogJzI1cHgnLCBtYXJnaW5SaWdodDogJzEwcHgnLCBjb2xvcjogJyNmZTI2YjMnIH19IC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncnAtZW1vdGlvbnNcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Vtb3Rpb24taWNvLnBuZ1wiIHdpZHRoPVwiMjVweFwiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICA8RW1vdGlvbnMgb25FbW9qaUNsaWNrPXt0aGlzLm9uRW1vamlDbGljay5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJncnAtaWNvbnNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdycC1maWxlLWljb25cIj5cbiAgICAgICAgICAgIDxJbWFnZU1lc3NhZ2VVcGxvYWRcbiAgICAgICAgICAgICAgaGVhZGVycz17dXBsb2FkSGVhZGVyc31cbiAgICAgICAgICAgICAgdXBsb2FkVXJsPXttZXNzYWdlU2VydmljZS5nZXRNZXNzYWdlVXBsb2FkVXJsKCl9XG4gICAgICAgICAgICAgIG9uVXBsb2FkZWQ9e3RoaXMub25QaG90b1VwbG9hZGVkfVxuICAgICAgICAgICAgICBvcHRpb25zPXt7IGZpZWxkTmFtZTogJ21lc3NhZ2UtcGhvdG8nIH19XG4gICAgICAgICAgICAgIG1lc3NhZ2VEYXRhPXt7XG4gICAgICAgICAgICAgICAgdGV4dDogJ3NlbnQgYSBwaG90bycsXG4gICAgICAgICAgICAgICAgY29udmVyc2F0aW9uSWQ6IGNvbnZlcnNhdGlvbiAmJiBjb252ZXJzYXRpb24uX2lkLFxuICAgICAgICAgICAgICAgIHJlY2lwaWVudElkOiBjb252ZXJzYXRpb24gJiYgY29udmVyc2F0aW9uLnJlY2lwaWVudEluZm8gJiYgY29udmVyc2F0aW9uLnJlY2lwaWVudEluZm8uX2lkLFxuICAgICAgICAgICAgICAgIHJlY2lwaWVudFR5cGU6IGN1cnJlbnRVc2VyICYmIGN1cnJlbnRVc2VyLl9pZCA/ICdwZXJmb3JtZXInIDogJ3VzZXInXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4gKi99XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlcyA9IChzdGF0ZTogYW55KSA9PiAoe1xuICBzZW5kTWVzc2FnZVN0YXR1czogc3RhdGUubWVzc2FnZS5zZW5kTWVzc2FnZSxcbiAgY3VycmVudFVzZXI6IHN0YXRlLnVzZXIuY3VycmVudFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoID0geyBzZW5kTWVzc2FnZSwgc2VudEZpbGVTdWNjZXNzIH07XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlcywgbWFwRGlzcGF0Y2gpKENvbXBvc2UpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQsIGNyZWF0ZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgJy4vQ29udmVyc2F0aW9uTGlzdC5sZXNzJztcbmltcG9ydCB7XG4gIGdldENvbnZlcnNhdGlvbnMsXG4gIHNldEFjdGl2ZUNvbnZlcnNhdGlvbixcbiAgZ2V0Q29udmVyc2F0aW9uRGV0YWlsLFxuICByZWNlaXZlTWVzc2FnZVN1Y2Nlc3MsXG4gIHNlYXJjaENvbnZlcnNhdGlvbnMsXG4gIHVwZGF0ZUxhc3RNZXNzYWdlXG59IGZyb20gJ0ByZWR1eC9tZXNzYWdlL2FjdGlvbnMnO1xuaW1wb3J0IHsgRXZlbnQgfSBmcm9tICdzcmMvc29ja2V0JztcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IElVc2VyLCBJUGVyZm9ybWVyIH0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgbWVzc2FnZVNlcnZpY2UgfSBmcm9tICdAc2VydmljZXMvbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCBDb252ZXJzYXRpb25TZWFyY2ggZnJvbSAnLi9Db252ZXJzYXRpb25TZWFyY2gnO1xuaW1wb3J0IENvbnZlcnNhdGlvbkxpc3RJdGVtIGZyb20gJy4vQ29udmVyc2F0aW9uTGlzdEl0ZW0nO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgc2VhcmNoQ29udmVyc2F0aW9uczogRnVuY3Rpb247XG4gIGdldENvbnZlcnNhdGlvbnM6IEZ1bmN0aW9uO1xuICBzZXRBY3RpdmVDb252ZXJzYXRpb246IEZ1bmN0aW9uO1xuICBnZXRDb252ZXJzYXRpb25EZXRhaWw6IEZ1bmN0aW9uO1xuICByZWNlaXZlTWVzc2FnZVN1Y2Nlc3M6IEZ1bmN0aW9uO1xuICB1cGRhdGVMYXN0TWVzc2FnZTogRnVuY3Rpb247XG4gIGNvbnZlcnNhdGlvbjoge1xuICAgIGxpc3Q6IHtcbiAgICAgIHJlcXVlc3Rpbmc6IGJvb2xlYW47XG4gICAgICBlcnJvcjogYW55O1xuICAgICAgZGF0YTogYW55W107XG4gICAgICB0b3RhbDogbnVtYmVyO1xuICAgICAgc3VjY2VzczogYm9vbGVhbjtcbiAgICB9O1xuICAgIG1hcHBpbmc6IFJlY29yZDxzdHJpbmcsIGFueT47XG4gICAgYWN0aXZlQ29udmVyc2F0aW9uOiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xuICB9O1xuICB0b1NvdXJjZTogc3RyaW5nO1xuICB0b0lkOiBzdHJpbmc7XG4gIG1lc3NhZ2U6IHtcbiAgICBjb252ZXJzYXRpb25NYXA6IHtcblxuICAgIH0sXG4gICAgc2VuZE1lc3NhZ2U6IHtcblxuICAgIH1cbiAgfSxcbiAgY3VycmVudFVzZXI6IElVc2VyO1xuICBjdXJyZW50UGVyZm9ybWVyOiBJUGVyZm9ybWVyXG59XG5jbGFzcyBDb252ZXJzYXRpb25MaXN0IGV4dGVuZHMgUHVyZUNvbXBvbmVudDxJUHJvcHM+IHtcbiAgY29udmVyc2F0aW9uc1JlZjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgY29udmVyc2F0aW9uUGFnZTogMSxcbiAgICBrZXl3b3JkOiAnJ1xuICB9XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKCF0aGlzLmNvbnZlcnNhdGlvbnNSZWYpIHRoaXMuY29udmVyc2F0aW9uc1JlZiA9IGNyZWF0ZVJlZigpO1xuICAgIGNvbnN0IHtcbiAgICAgIGdldENvbnZlcnNhdGlvbnM6IGdldENvbnZlcnNhdGlvbnNIYW5kbGVyLFxuICAgICAgc2V0QWN0aXZlQ29udmVyc2F0aW9uOiBzZXRBY3RpdmVDb252ZXJzYXRpb25IYW5kbGVyLFxuICAgICAgdG9Tb3VyY2UsXG4gICAgICB0b0lkLFxuICAgICAgY3VycmVudFVzZXIsXG4gICAgICBjdXJyZW50UGVyZm9ybWVyXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBjb252ZXJzYXRpb25QYWdlLCBrZXl3b3JkIH0gPSB0aGlzLnN0YXRlO1xuICAgIGdldENvbnZlcnNhdGlvbnNIYW5kbGVyKHtcbiAgICAgIGxpbWl0OiAyNSwgb2Zmc2V0OiBjb252ZXJzYXRpb25QYWdlICogMjUsIHR5cGU6ICdwcml2YXRlJywga2V5d29yZFxuICAgIH0pO1xuICAgIGlmICh0b1NvdXJjZSAmJiB0b0lkKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0QWN0aXZlQ29udmVyc2F0aW9uSGFuZGxlcih7XG4gICAgICAgICAgc291cmNlOiB0b1NvdXJjZSxcbiAgICAgICAgICBzb3VyY2VJZDogdG9JZCxcbiAgICAgICAgICByZWNpcGllbnRJZDogY3VycmVudFVzZXIuX2lkID8gY3VycmVudFVzZXIuX2lkIDogY3VycmVudFBlcmZvcm1lci5faWRcbiAgICAgICAgfSk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9XG4gIH1cblxuICBvbk1lc3NhZ2UgPSBhc3luYyAobWVzc2FnZTogeyBjb252ZXJzYXRpb25JZDogc3RyaW5nIHwgbnVtYmVyOyB0ZXh0OiBhbnkgfSkgPT4ge1xuICAgIGlmICghbWVzc2FnZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7XG4gICAgICBjb252ZXJzYXRpb24sXG4gICAgICBjdXJyZW50UGVyZm9ybWVyLFxuICAgICAgY3VycmVudFVzZXIsXG4gICAgICBnZXRDb252ZXJzYXRpb25EZXRhaWw6IGdldENvbnZlcnNhdGlvbkRldGFpbEhhbmRsZXIsXG4gICAgICByZWNlaXZlTWVzc2FnZVN1Y2Nlc3M6IHJlY2VpdmVNZXNzYWdlU3VjY2Vzc0hhbmRsZXIsXG4gICAgICB1cGRhdGVMYXN0TWVzc2FnZTogaGFuZGxlVXBkYXRlTGFzdE1lc3NhZ2VcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IG1hcHBpbmcgfSA9IGNvbnZlcnNhdGlvbjtcbiAgICBjb25zdCB7IGNvbnZlcnNhdGlvbklkLCB0ZXh0IH0gPSBtZXNzYWdlO1xuICAgIGlmICghbWFwcGluZ1ttZXNzYWdlLmNvbnZlcnNhdGlvbklkXSkge1xuICAgICAgZ2V0Q29udmVyc2F0aW9uRGV0YWlsSGFuZGxlcih7XG4gICAgICAgIGlkOiBtZXNzYWdlLmNvbnZlcnNhdGlvbklkXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmVjZWl2ZU1lc3NhZ2VTdWNjZXNzSGFuZGxlcihtZXNzYWdlKTtcbiAgICBoYW5kbGVVcGRhdGVMYXN0TWVzc2FnZSh7IGNvbnZlcnNhdGlvbklkLCBsYXN0TWVzc2FnZTogdGV4dCB9KTtcbiAgICBhd2FpdCBtZXNzYWdlU2VydmljZS5yZWFkQWxsSW5Db252ZXJzYXRpb24oY29udmVyc2F0aW9uSWQsIGN1cnJlbnRVc2VyLl9pZCA/IGN1cnJlbnRVc2VyLl9pZCA6IGN1cnJlbnRQZXJmb3JtZXIuX2lkKTtcbiAgfTtcblxuICBvblNlYXJjaENvbnZlcnNhdGlvbiA9IGRlYm91bmNlKGFzeW5jIChlKSA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgY29uc3QgeyBzZWFyY2hDb252ZXJzYXRpb25zOiBnZXRDb252ZXJzYXRpb25zSGFuZGxlciB9ID0gdGhpcy5wcm9wcztcbiAgICBhd2FpdCB0aGlzLnNldFN0YXRlKHsga2V5d29yZDogdmFsdWUsIGNvbnZlcnNhdGlvblBhZ2U6IDAgfSk7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICByZXR1cm4gZ2V0Q29udmVyc2F0aW9uc0hhbmRsZXIoe1xuICAgICAgICBrZXl3b3JkOiB2YWx1ZSwgbGltaXQ6IDI1LCBvZmZzZXQ6IDAsIHR5cGU6ICdwcml2YXRlJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRDb252ZXJzYXRpb25zSGFuZGxlcih7IGxpbWl0OiAyNSwgb2Zmc2V0OiAwLCB0eXBlOiAncHJpdmF0ZScgfSk7XG4gIH0sIDUwMCk7XG5cbiAgaGFuZGxlU2Nyb2xsID0gYXN5bmMgKGV2ZW50OiB7IHRhcmdldDogYW55OyB9KSA9PiB7XG4gICAgY29uc3QgeyBjb252ZXJzYXRpb24sIGdldENvbnZlcnNhdGlvbnM6IGdldENvbnZlcnNhdGlvbnNIYW5kbGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgcmVxdWVzdGluZywgZGF0YSwgdG90YWwgfSA9IGNvbnZlcnNhdGlvbi5saXN0O1xuICAgIGNvbnN0IHsgY29udmVyc2F0aW9uUGFnZSwga2V5d29yZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBjYW5sb2FkbW9yZSA9IHRvdGFsID4gZGF0YS5sZW5ndGg7XG4gICAgY29uc3QgZWxlID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmICghY2FubG9hZG1vcmUpIHJldHVybjtcbiAgICBpZiAoZWxlLnNjcm9sbEhlaWdodCAtIGVsZS5zY3JvbGxUb3AgPT09IGVsZS5jbGllbnRIZWlnaHQgJiYgIXJlcXVlc3RpbmcgJiYgY2FubG9hZG1vcmUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb252ZXJzYXRpb25QYWdlOiBjb252ZXJzYXRpb25QYWdlICsgMSB9LCAoKSA9PiB7XG4gICAgICAgIGdldENvbnZlcnNhdGlvbnNIYW5kbGVyKHtcbiAgICAgICAgICBrZXl3b3JkLCBsaW1pdDogMjUsIG9mZnNldDogY29udmVyc2F0aW9uUGFnZSAqIDI1LCB0eXBlOiAncHJpdmF0ZSdcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzZXRBY3RpdmUgPSAoY29udmVyc2F0aW9uSWQ6IGFueSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHNldEFjdGl2ZUNvbnZlcnNhdGlvbjogc2V0QWN0aXZlQ29udmVyc2F0aW9uSGFuZGxlcixcbiAgICAgIGN1cnJlbnRQZXJmb3JtZXIsXG4gICAgICBjdXJyZW50VXNlclxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHNldEFjdGl2ZUNvbnZlcnNhdGlvbkhhbmRsZXIoeyBjb252ZXJzYXRpb25JZCwgcmVjaXBpZW50SWQ6IGN1cnJlbnRVc2VyLl9pZCA/IGN1cnJlbnRVc2VyLl9pZCA6IGN1cnJlbnRQZXJmb3JtZXIuX2lkIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvbnZlcnNhdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGRhdGE6IGNvbnZlcnNhdGlvbnMsIHJlcXVlc3RpbmcgfSA9IGNvbnZlcnNhdGlvbi5saXN0O1xuICAgIGNvbnN0IHsgbWFwcGluZywgYWN0aXZlQ29udmVyc2F0aW9uID0ge30gfSA9IGNvbnZlcnNhdGlvbjtcbiAgICBpZiAoIXRoaXMuY29udmVyc2F0aW9uc1JlZikgdGhpcy5jb252ZXJzYXRpb25zUmVmID0gY3JlYXRlUmVmKCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udmVyc2F0aW9uLWxpc3RcIiByZWY9e3RoaXMuY29udmVyc2F0aW9uc1JlZn0gb25TY3JvbGw9e3RoaXMuaGFuZGxlU2Nyb2xsLmJpbmQodGhpcyl9PlxuICAgICAgICA8RXZlbnQgZXZlbnQ9XCJtZXNzYWdlX2NyZWF0ZWRcIiBoYW5kbGVyPXt0aGlzLm9uTWVzc2FnZX0gLz5cbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgc3R5bGU9e3sgZm9udFNpemU6ICcyMnB4JyB9fT5NZXNzZW5nZXI8L2g0PlxuICAgICAgICA8Q29udmVyc2F0aW9uU2VhcmNoXG4gICAgICAgICAgb25TZWFyY2g9eyhlKSA9PiB7XG4gICAgICAgICAgICBlLnBlcnNpc3QoKTtcbiAgICAgICAgICAgIHRoaXMub25TZWFyY2hDb252ZXJzYXRpb24oZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAge2NvbnZlcnNhdGlvbnMubGVuZ3RoID4gMFxuICAgICAgICAgICYmIGNvbnZlcnNhdGlvbnMubWFwKChjb252ZXJzYXRpb25JZCkgPT4gKFxuICAgICAgICAgICAgPENvbnZlcnNhdGlvbkxpc3RJdGVtXG4gICAgICAgICAgICAgIGtleT17Y29udmVyc2F0aW9uSWR9XG4gICAgICAgICAgICAgIGRhdGE9e21hcHBpbmdbY29udmVyc2F0aW9uSWRdfVxuICAgICAgICAgICAgICBzZXRBY3RpdmU9e3RoaXMuc2V0QWN0aXZlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgIHNlbGVjdGVkPXthY3RpdmVDb252ZXJzYXRpb24uX2lkID09PSBjb252ZXJzYXRpb25JZH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIHtyZXF1ZXN0aW5nICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxpbWcgYWx0PVwibG9hZGluZ1wiIHNyYz1cIi9sb2FkaW5nLWljby5naWZcIiB3aWR0aD1cIjUwcHhcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgeyFyZXF1ZXN0aW5nICYmICFjb252ZXJzYXRpb25zLmxlbmd0aCAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPk5vIGNvbnZlcnNhdGlvbiBmb3VuZC48L3A+fVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZXMgPSAoc3RhdGU6IGFueSkgPT4gKHtcbiAgY29udmVyc2F0aW9uOiBzdGF0ZS5jb252ZXJzYXRpb24sXG4gIG1lc3NhZ2U6IHN0YXRlLm1lc3NhZ2UsXG4gIGN1cnJlbnRVc2VyOiBzdGF0ZS51c2VyLmN1cnJlbnQsXG4gIGN1cnJlbnRQZXJmb3JtZXI6IHN0YXRlLnBlcmZvcm1lci5jdXJyZW50XG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2ggPSB7XG4gIHNlYXJjaENvbnZlcnNhdGlvbnMsXG4gIGdldENvbnZlcnNhdGlvbnMsXG4gIHNldEFjdGl2ZUNvbnZlcnNhdGlvbixcbiAgZ2V0Q29udmVyc2F0aW9uRGV0YWlsLFxuICByZWNlaXZlTWVzc2FnZVN1Y2Nlc3MsXG4gIHVwZGF0ZUxhc3RNZXNzYWdlXG59O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZXMsIG1hcERpc3BhdGNoKShDb252ZXJzYXRpb25MaXN0KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCYWRnZSB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5pbXBvcnQgJy4vQ29udmVyc2F0aW9uTGlzdEl0ZW0ubGVzcyc7XG5cbmludGVyZmFjZSBJcHJvcHN7XG4gIGRhdGE6IGFueTtcbiAgc2VsZWN0ZWQ6IGJvb2xlYW47XG4gIHNldEFjdGl2ZTogRnVuY3Rpb247XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnZlcnNhdGlvbkxpc3RJdGVtKHByb3BzIDogSXByb3BzKSB7XG4gIGNvbnN0IHsgc2V0QWN0aXZlLCBzZWxlY3RlZCwgZGF0YSB9ID0gcHJvcHM7XG4gIGNvbnN0IHtcbiAgICByZWNpcGllbnRJbmZvLCBsYXN0TWVzc2FnZSwgX2lkLCB1cGRhdGVkQXQsIGxhc3RNZXNzYWdlQ3JlYXRlZEF0LCB0b3RhbE5vdFNlZW5NZXNzYWdlcyA9IDBcbiAgfSA9IGRhdGE7XG4gIGNvbnN0IGNsYXNzTmFtZSA9IHNlbGVjdGVkXG4gICAgPyAnY29udmVyc2F0aW9uLWxpc3QtaXRlbSBhY3RpdmUnXG4gICAgOiAnY29udmVyc2F0aW9uLWxpc3QtaXRlbSc7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmUoX2lkKX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnZlcnNhdGlvbi1sZWZ0LWNvcm5lclwiPlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNvbnZlcnNhdGlvbi1waG90b1wiIHNyYz17cmVjaXBpZW50SW5mbz8uYXZhdGFyIHx8ICcvZGVmYXVsdC11c2VyLWljb24ucG5nJ30gYWx0PVwiY29udmVyc2F0aW9uXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb252ZXJzYXRpb24taW5mb1wiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiY29udmVyc2F0aW9uLXRpdGxlXCI+e3JlY2lwaWVudEluZm8/LnVzZXJuYW1lIHx8ICdOL0EnfTwvaDE+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnZlcnNhdGlvbi1zbmlwcGV0XCI+e2xhc3RNZXNzYWdlfTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29udmVyc2F0aW9uLXRpbWVcIj57bW9tZW50KGxhc3RNZXNzYWdlQ3JlYXRlZEF0IHx8IHVwZGF0ZWRBdCkuZnJvbU5vdygpfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPEJhZGdlXG4gICAgICAgIGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvbi1iYWRnZVwiXG4gICAgICAgIGNvdW50PXt0b3RhbE5vdFNlZW5NZXNzYWdlc31cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL0NvbnZlcnNhdGlvblNlYXJjaC5sZXNzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udmVyc2F0aW9uU2VhcmNoKHsgb25TZWFyY2ggfSA6IGFueSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udmVyc2F0aW9uLXNlYXJjaFwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIG9uQ2hhbmdlPXtvblNlYXJjaH1cbiAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgIGNsYXNzTmFtZT1cImNvbnZlcnNhdGlvbi1zZWFyY2gtaW5wdXRcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBjb252ZXJzYXRpb24uLi5cIlxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgJy4uL3N0cmVhbS1jaGF0L01lc3NhZ2UubGVzcyc7XG5cbmludGVyZmFjZSBJcHJvcHMge1xuICBpc01pbmU6IGJvb2xlYW47XG4gIHN0YXJ0c1NlcXVlbmNlOiBib29sZWFuO1xuICBzaG93VGltZXN0YW1wOiBib29sZWFuO1xuICBlbmRzU2VxdWVuY2U6IGJvb2xlYW47XG4gIGRhdGE6IGFueTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVzc2FnZShwcm9wcyA6IElwcm9wcykge1xuICBjb25zdCB7XG4gICAgZGF0YSwgaXNNaW5lLCBzdGFydHNTZXF1ZW5jZSwgZW5kc1NlcXVlbmNlLCBzaG93VGltZXN0YW1wXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBmcmllbmRseVRpbWVzdGFtcCA9IG1vbWVudChkYXRhLmNyZWF0ZWRBdCkuZm9ybWF0KCdMTExMJyk7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtbXG4gICAgICAgICdtZXNzYWdlJyxcbiAgICAgICAgYCR7aXNNaW5lID8gJ21pbmUnIDogJyd9YCxcbiAgICAgICAgYCR7c3RhcnRzU2VxdWVuY2UgPyAnc3RhcnQnIDogJyd9YCxcbiAgICAgICAgYCR7ZW5kc1NlcXVlbmNlID8gJ2VuZCcgOiAnJ31gXG4gICAgICBdLmpvaW4oJyAnKX1cbiAgICA+XG4gICAgICB7ZGF0YS50ZXh0ICYmIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnViYmxlLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1YmJsZVwiIHRpdGxlPXtmcmllbmRseVRpbWVzdGFtcH0+XG4gICAgICAgICAgeyFkYXRhLmltYWdlVXJsICYmIGRhdGEudGV4dH1cbiAgICAgICAgICB7JyAnfVxuICAgICAgICAgIHtkYXRhLmltYWdlVXJsICYmIChcbiAgICAgICAgICA8YVxuICAgICAgICAgICAgdGl0bGU9XCJDbGljayB0byB2aWV3IGZ1bGwgY29udGVudFwiXG4gICAgICAgICAgICBocmVmPXtkYXRhLmltYWdlVXJsfVxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPXtkYXRhLmltYWdlVXJsfVxuICAgICAgICAgICAgICB3aWR0aD1cIjE4MHB4XCJcbiAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAge3Nob3dUaW1lc3RhbXAgJiYgPGRpdiBjbGFzc05hbWU9XCJ0aW1lc3RhbXBcIj57ZnJpZW5kbHlUaW1lc3RhbXB9PC9kaXY+fVxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQsIEZyYWdtZW50LCBjcmVhdGVSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0ICcuLi9zdHJlYW0tY2hhdC9NZXNzYWdlTGlzdC5sZXNzJztcbmltcG9ydCB7IGxvYWRNb3JlTWVzc2FnZXMgfSBmcm9tICdAcmVkdXgvbWVzc2FnZS9hY3Rpb25zJztcbmltcG9ydCB7IElQZXJmb3JtZXIgfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgQ29tcG9zZSBmcm9tICcuL0NvbXBvc2UnO1xuaW1wb3J0IE1lc3NhZ2UgZnJvbSAnLi9NZXNzYWdlJztcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGxvYWRNb3JlTWVzc2FnZXM6IEZ1bmN0aW9uO1xuICBtZXNzYWdlOiBhbnk7XG4gIGNvbnZlcnNhdGlvbjogYW55O1xuICBjdXJyZW50VXNlcjogYW55O1xuICBjdXJyZW50UGVyZm9ybWVyOiBJUGVyZm9ybWVyO1xufVxuXG5jbGFzcyBNZXNzYWdlTGlzdCBleHRlbmRzIFB1cmVDb21wb25lbnQ8SVByb3BzPiB7XG4gIG1lc3NhZ2VzUmVmOiBhbnk7XG5cbiAgc3RhdGUgPSB7XG4gICAgb2Zmc2V0OiAxLFxuICAgIG9ubG9hZG1vcmU6IGZhbHNlXG4gIH07XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKCF0aGlzLm1lc3NhZ2VzUmVmKSB0aGlzLm1lc3NhZ2VzUmVmID0gY3JlYXRlUmVmKCk7XG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzOiBJUHJvcHMpIHtcbiAgICBjb25zdCB7IGNvbnZlcnNhdGlvbiwgbWVzc2FnZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IG9ubG9hZG1vcmUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgbWVzc2FnZXMgPSBtZXNzYWdlLml0ZW1zO1xuICAgIGlmIChcbiAgICAgIHByZXZQcm9wc1xuICAgICAgJiYgcHJldlByb3BzLmNvbnZlcnNhdGlvblxuICAgICAgJiYgcHJldlByb3BzLmNvbnZlcnNhdGlvbi5faWQgIT09IGNvbnZlcnNhdGlvbi5faWRcbiAgICApIHtcbiAgICAgIHRoaXMuc2V0T2Zmc2V0KCk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2VzICE9PSBwcmV2UHJvcHMubWVzc2FnZS5pdGVtcykge1xuICAgICAgaWYgKG9ubG9hZG1vcmUpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWRpZC11cGRhdGUtc2V0LXN0YXRlXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvbmxvYWRtb3JlOiBmYWxzZSB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9Cb3R0b20oKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVTY3JvbGwoY29udmVyc2F0aW9uLCBldmVudCkge1xuICAgIGNvbnN0IHsgbWVzc2FnZSwgbG9hZE1vcmVNZXNzYWdlczogZGlzcGF0Y2hMb2FkTW9yZU1lc3NhZ2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgZmV0Y2hpbmcsIGl0ZW1zLCB0b3RhbCB9ID0gbWVzc2FnZTtcbiAgICBjb25zdCB7IG9mZnNldCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBjYW5sb2FkbW9yZSA9IHRvdGFsID4gaXRlbXMubGVuZ3RoO1xuICAgIGNvbnN0IGVsZSA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAoIWNhbmxvYWRtb3JlKSByZXR1cm47XG4gICAgaWYgKGVsZS5zY3JvbGxUb3AgPT09IDAgJiYgY29udmVyc2F0aW9uLl9pZCAmJiAhZmV0Y2hpbmcgJiYgY2FubG9hZG1vcmUpIHtcbiAgICAgIGF3YWl0IHRoaXMuc2V0U3RhdGUoeyBvZmZzZXQ6IG9mZnNldCArIDEsIG9ubG9hZG1vcmU6IHRydWUgfSk7XG4gICAgICBkaXNwYXRjaExvYWRNb3JlTWVzc2FnZXMoe1xuICAgICAgICBjb252ZXJzYXRpb25JZDogY29udmVyc2F0aW9uLl9pZCxcbiAgICAgICAgbGltaXQ6IDIwLFxuICAgICAgICBvZmZzZXQ6IChvZmZzZXQgLSAxKSAqIDIwXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBzZXRPZmZzZXQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9mZnNldDogMSB9KTtcbiAgfVxuXG4gIHJlbmRlck1lc3NhZ2VzID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgbWVzc2FnZSwgY3VycmVudFVzZXIsIGN1cnJlbnRQZXJmb3JtZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbWVzc2FnZXMgPSBtZXNzYWdlLml0ZW1zO1xuICAgIGxldCBpID0gMDtcbiAgICBjb25zdCBtZXNzYWdlQ291bnQgPSBtZXNzYWdlcy5sZW5ndGg7XG4gICAgY29uc3QgdGVtcE1lc3NhZ2VzID0gW107XG4gICAgd2hpbGUgKGkgPCBtZXNzYWdlQ291bnQpIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzID0gbWVzc2FnZXNbaSAtIDFdO1xuICAgICAgY29uc3QgY3VycmVudCA9IG1lc3NhZ2VzW2ldO1xuICAgICAgY29uc3QgbmV4dCA9IG1lc3NhZ2VzW2kgKyAxXTtcbiAgICAgIGNvbnN0IGlzTWluZSA9IGN1cnJlbnQuc2VuZGVySWRcbiAgICAgICAgPT09ICgoY3VycmVudFVzZXIgJiYgY3VycmVudFVzZXIuX2lkKVxuICAgICAgICAgIHx8IChjdXJyZW50UGVyZm9ybWVyICYmIGN1cnJlbnRQZXJmb3JtZXIuX2lkKSk7XG4gICAgICBjb25zdCBjdXJyZW50TW9tZW50ID0gbW9tZW50KGN1cnJlbnQuY3JlYXRlZEF0KTtcbiAgICAgIGxldCBwcmV2QnlTYW1lQXV0aG9yID0gZmFsc2U7XG4gICAgICBsZXQgbmV4dEJ5U2FtZUF1dGhvciA9IGZhbHNlO1xuICAgICAgbGV0IHN0YXJ0c1NlcXVlbmNlID0gdHJ1ZTtcbiAgICAgIGxldCBlbmRzU2VxdWVuY2UgPSB0cnVlO1xuICAgICAgbGV0IHNob3dUaW1lc3RhbXAgPSB0cnVlO1xuXG4gICAgICBpZiAocHJldmlvdXMpIHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNNb21lbnQgPSBtb21lbnQocHJldmlvdXMuY3JlYXRlZEF0KTtcbiAgICAgICAgY29uc3QgcHJldmlvdXNEdXJhdGlvbiA9IG1vbWVudC5kdXJhdGlvbihcbiAgICAgICAgICBjdXJyZW50TW9tZW50LmRpZmYocHJldmlvdXNNb21lbnQpXG4gICAgICAgICk7XG4gICAgICAgIHByZXZCeVNhbWVBdXRob3IgPSBwcmV2aW91cy5zZW5kZXJJZCA9PT0gY3VycmVudC5zZW5kZXJJZDtcblxuICAgICAgICBpZiAocHJldkJ5U2FtZUF1dGhvciAmJiBwcmV2aW91c0R1cmF0aW9uLmFzKCdob3VycycpIDwgMSkge1xuICAgICAgICAgIHN0YXJ0c1NlcXVlbmNlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJldmlvdXNEdXJhdGlvbi5hcygnaG91cnMnKSA8IDEpIHtcbiAgICAgICAgICBzaG93VGltZXN0YW1wID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG5leHQpIHtcbiAgICAgICAgY29uc3QgbmV4dE1vbWVudCA9IG1vbWVudChuZXh0LmNyZWF0ZWRBdCk7XG4gICAgICAgIGNvbnN0IG5leHREdXJhdGlvbiA9IG1vbWVudC5kdXJhdGlvbihuZXh0TW9tZW50LmRpZmYoY3VycmVudE1vbWVudCkpO1xuICAgICAgICBuZXh0QnlTYW1lQXV0aG9yID0gbmV4dC5zZW5kZXJJZCA9PT0gY3VycmVudC5zZW5kZXJJZDtcblxuICAgICAgICBpZiAobmV4dEJ5U2FtZUF1dGhvciAmJiBuZXh0RHVyYXRpb24uYXMoJ2hvdXJzJykgPCAxKSB7XG4gICAgICAgICAgZW5kc1NlcXVlbmNlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50Ll9pZCkge1xuICAgICAgICB0ZW1wTWVzc2FnZXMucHVzaChcbiAgICAgICAgICA8TWVzc2FnZVxuICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgaXNNaW5lPXtpc01pbmV9XG4gICAgICAgICAgICBzdGFydHNTZXF1ZW5jZT17c3RhcnRzU2VxdWVuY2V9XG4gICAgICAgICAgICBlbmRzU2VxdWVuY2U9e2VuZHNTZXF1ZW5jZX1cbiAgICAgICAgICAgIHNob3dUaW1lc3RhbXA9e3Nob3dUaW1lc3RhbXB9XG4gICAgICAgICAgICBkYXRhPXtjdXJyZW50fVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICAvLyBQcm9jZWVkIHRvIHRoZSBuZXh0IG1lc3NhZ2UuXG4gICAgICBpICs9IDE7XG4gICAgfVxuICAgIHRoaXMuc2Nyb2xsVG9Cb3R0b20oKTtcbiAgICByZXR1cm4gdGVtcE1lc3NhZ2VzO1xuICB9O1xuXG4gIHNjcm9sbFRvQm90dG9tKCkge1xuICAgIGNvbnN0IHsgb25sb2FkbW9yZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAob25sb2FkbW9yZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5tZXNzYWdlc1JlZiAmJiB0aGlzLm1lc3NhZ2VzUmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IGVsZSA9IHRoaXMubWVzc2FnZXNSZWYuY3VycmVudDtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZWxlLnNjcm9sbFRvcCA9IGVsZS5zY3JvbGxIZWlnaHQ7XG4gICAgICB9LCAxMDApO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvbnZlcnNhdGlvbiwgbWVzc2FnZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGZldGNoaW5nIH0gPSBtZXNzYWdlO1xuICAgIGlmICghdGhpcy5tZXNzYWdlc1JlZikgdGhpcy5tZXNzYWdlc1JlZiA9IGNyZWF0ZVJlZigpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtbGlzdCBjdXN0b21cIj5cbiAgICAgICAge2NvbnZlcnNhdGlvbiAmJiBjb252ZXJzYXRpb24uX2lkID8gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lc3NhZ2UtbGlzdC1jb250YWluZXJcIlxuICAgICAgICAgICAgICByZWY9e3RoaXMubWVzc2FnZXNSZWZ9XG4gICAgICAgICAgICAgIG9uU2Nyb2xsPXt0aGlzLmhhbmRsZVNjcm9sbC5iaW5kKHRoaXMsIGNvbnZlcnNhdGlvbil9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtmZXRjaGluZyAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPmZldGNoaW5nLi4uPC9wPn1cbiAgICAgICAgICAgICAge3RoaXMucmVuZGVyTWVzc2FnZXMoKX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8Q29tcG9zZSBjb252ZXJzYXRpb249e2NvbnZlcnNhdGlvbn0gLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXJ0LWNvbnZlcnNhdGlvblwiPlxuICAgICAgICAgICAgPHA+Q2xpY2sgY29udmVyc2F0aW9uIHRvIHN0YXJ0PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZXMgPSAoc3RhdGU6IGFueSkgPT4ge1xuICBjb25zdCB7IGNvbnZlcnNhdGlvbk1hcCB9ID0gc3RhdGUubWVzc2FnZTtcbiAgY29uc3QgeyBhY3RpdmVDb252ZXJzYXRpb24gfSA9IHN0YXRlLmNvbnZlcnNhdGlvbjtcbiAgY29uc3QgbWVzc2FnZXMgPSBjb252ZXJzYXRpb25NYXBbYWN0aXZlQ29udmVyc2F0aW9uLl9pZF1cbiAgICA/IGNvbnZlcnNhdGlvbk1hcFthY3RpdmVDb252ZXJzYXRpb24uX2lkXS5pdGVtcyB8fCBbXVxuICAgIDogW107XG4gIGNvbnN0IHRvdGFsTWVzc2FnZXMgPSBjb252ZXJzYXRpb25NYXBbYWN0aXZlQ29udmVyc2F0aW9uLl9pZF1cbiAgICA/IGNvbnZlcnNhdGlvbk1hcFthY3RpdmVDb252ZXJzYXRpb24uX2lkXS50b3RhbCB8fCAwXG4gICAgOiAwO1xuICBjb25zdCBmZXRjaGluZyA9IGNvbnZlcnNhdGlvbk1hcFthY3RpdmVDb252ZXJzYXRpb24uX2lkXVxuICAgID8gY29udmVyc2F0aW9uTWFwW2FjdGl2ZUNvbnZlcnNhdGlvbi5faWRdLmZldGNoaW5nIHx8IGZhbHNlXG4gICAgOiBmYWxzZTtcbiAgcmV0dXJuIHtcbiAgICBtZXNzYWdlOiB7XG4gICAgICBpdGVtczogbWVzc2FnZXMsXG4gICAgICB0b3RhbDogdG90YWxNZXNzYWdlcyxcbiAgICAgIGZldGNoaW5nXG4gICAgfSxcbiAgICBjb252ZXJzYXRpb246IGFjdGl2ZUNvbnZlcnNhdGlvbixcbiAgICBjdXJyZW50VXNlcjogc3RhdGUudXNlci5jdXJyZW50LFxuICAgIGN1cnJlbnRQZXJmb3JtZXI6IHN0YXRlLnBlcmZvcm1lci5jdXJyZW50XG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaCA9IHsgbG9hZE1vcmVNZXNzYWdlcyB9O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZXMsIG1hcERpc3BhdGNoKShNZXNzYWdlTGlzdCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi4vc3RyZWFtLWNoYXQvTWVzc2VuZ2VyLmxlc3MnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGRlYWN0aXZlQ29udmVyc2F0aW9uIH0gZnJvbSAnQHJlZHV4L21lc3NhZ2UvYWN0aW9ucyc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJztcbmltcG9ydCBDb252ZXJzYXRpb25MaXN0IGZyb20gJy4vQ29udmVyc2F0aW9uTGlzdCc7XG5pbXBvcnQgTWVzc2FnZUxpc3QgZnJvbSAnLi9NZXNzYWdlTGlzdCc7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICB0b1NvdXJjZT86IHN0cmluZztcbiAgdG9JZD86IHN0cmluZztcbiAgYWN0aXZlQ29udmVyc2F0aW9uPzogYW55O1xuICBkZWFjdGl2ZUNvbnZlcnNhdGlvbjogRnVuY3Rpb247XG59XG5jbGFzcyBNZXNzZW5nZXIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PElQcm9wcz4ge1xuICBvbkNsb3NlKCkge1xuICAgIGNvbnN0IHsgZGVhY3RpdmVDb252ZXJzYXRpb246IGRpc3BhdGNoRGVhY3RpdmVDb252ZXJzYXRpb24gfSA9IHRoaXMucHJvcHM7XG4gICAgZGlzcGF0Y2hEZWFjdGl2ZUNvbnZlcnNhdGlvbigpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdG9Tb3VyY2UsIHRvSWQsIGFjdGl2ZUNvbnZlcnNhdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzZW5nZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyFhY3RpdmVDb252ZXJzYXRpb24uX2lkID8gJ3NpZGViYXInIDogJ3NpZGViYXIgYWN0aXZlJ30+XG4gICAgICAgICAgPENvbnZlcnNhdGlvbkxpc3QgdG9Tb3VyY2U9e3RvU291cmNlfSB0b0lkPXt0b0lkfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyFhY3RpdmVDb252ZXJzYXRpb24uX2lkID8gJ2NoYXQtY29udGVudCcgOiAnY2hhdC1jb250ZW50IGFjdGl2ZSd9PlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5vbkNsb3NlLmJpbmQodGhpcyl9IGNsYXNzTmFtZT1cImNsb3NlLWJ0blwiPmNsb3NlPC9CdXR0b24+XG4gICAgICAgICAgPE1lc3NhZ2VMaXN0IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuY29uc3QgbWFwU3RhdGVzID0gKHN0YXRlOiBhbnkpID0+IHtcbiAgY29uc3QgeyBhY3RpdmVDb252ZXJzYXRpb24gfSA9IHN0YXRlLmNvbnZlcnNhdGlvbjtcbiAgcmV0dXJuIHtcbiAgICBhY3RpdmVDb252ZXJzYXRpb25cbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoID0geyBkZWFjdGl2ZUNvbnZlcnNhdGlvbiB9O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZXMsIG1hcERpc3BhdGNoKShNZXNzZW5nZXIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuaW1wb3J0ICcuLi9zdHJlYW0tY2hhdC9Db21wb3NlLmxlc3MnO1xuXG5sZXQgUGlja2VyO1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIFBpY2tlciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdlbW9qaS1waWNrZXItcmVhY3QnKSwgeyBzc3I6IGZhbHNlIH0pO1xufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgb25FbW9qaUNsaWNrOiBGdW5jdGlvbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1vdGlvbnMgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PElQcm9wcz4ge1xuICB1cGxvYWRSZWY6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnVwbG9hZFJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICB9XG5cbiAgb25FbW9qaUNsaWNrKGV2ZW50LCBlbW9qaSkge1xuICAgIGNvbnN0IHsgb25FbW9qaUNsaWNrIH0gPSB0aGlzLnByb3BzO1xuICAgIG9uRW1vamlDbGljayhlbW9qaSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxQaWNrZXJcbiAgICAgICAgICBvbkVtb2ppQ2xpY2s9e3RoaXMub25FbW9qaUNsaWNrLmJpbmQodGhpcyl9XG4gICAgICAgICAgZGlzYWJsZUF1dG9Gb2N1c1xuICAgICAgICAgIGRpc2FibGVTZWFyY2hCYXJcbiAgICAgICAgICBkaXNhYmxlU2tpblRvbmVQaWNrZXJcbiAgICAgICAgLz5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtbmFtZXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQge1xuICByZWR1Y2UsIGlzQXJyYXksIGlzRW1wdHksIGZsYXR0ZW5cbn0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAncmVzZWxlY3QnO1xuaW1wb3J0IHsgdGFrZUxhdGVzdCwgZGVsYXkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IHtcbiAgY3JlYXRlQWN0aW9uIGFzIFJlZHV4Q3JlYXRlQWN0aW9uLFxuICBoYW5kbGVBY3Rpb25zIGFzIGhhbmRsZVJlZHV4QWN0aW9ucyxcbiAgQWN0aW9uXG59IGZyb20gJ3JlZHV4LWFjdGlvbnMnO1xuXG5leHBvcnQgdHlwZSBBY3Rpb25GdW5jdGlvbjE8VDEsIFI+ID0gKHQxPzogVDEpID0+IFI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uRnVuY3Rpb248UGF5bG9hZD5cbiAgZXh0ZW5kcyBBY3Rpb25GdW5jdGlvbjE8UGF5bG9hZCwgQWN0aW9uPFBheWxvYWQ+PiB7XG4gIGlzOiAodHlwZTogc3RyaW5nKSA9PiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBY3Rpb248UGF5bG9hZCA9IGFueT4odHlwZTogc3RyaW5nKTogQWN0aW9uRnVuY3Rpb248UGF5bG9hZD4ge1xuICBjb25zdCBhY3Rpb24gPSBSZWR1eENyZWF0ZUFjdGlvbjxQYXlsb2FkPih0eXBlKSBhcyBBY3Rpb25GdW5jdGlvbjxQYXlsb2FkPjtcbiAgYWN0aW9uLmlzID0gKGFUeXBlOiBzdHJpbmcpID0+IGFjdGlvbi50b1N0cmluZygpID09PSBhVHlwZTtcbiAgcmV0dXJuIGFjdGlvbjtcbn1cblxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG5mdW5jdGlvbiBjcmVhdGVBc3luY0FjdGlvbihhY3Rpb246IHN0cmluZywgdHlwZTogc3RyaW5nKTogYW55IHtcbiAgcmV0dXJuIHtcbiAgICBbYWN0aW9uXTogY3JlYXRlQWN0aW9uKHR5cGUpLFxuICAgIFtgJHthY3Rpb259U3VjY2Vzc2BdOiBjcmVhdGVBY3Rpb24oYCR7dHlwZX1fU1VDQ0VTU2ApLFxuICAgIFtgJHthY3Rpb259RmFpbGBdOiBjcmVhdGVBY3Rpb24oYCR7dHlwZX1fRkFJTGApXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFzeW5jQWN0aW9uczxcbiAgQWN0aW9uRGF0YSA9IGFueSxcbiAgU3VjY2Vzc0RhdGEgPSBhbnksXG4gIEVycm9yRGF0YSA9IEVycm9yXG4+KFxuICB0eXBlOiBzdHJpbmdcbik6IFtcbiAgQWN0aW9uRnVuY3Rpb248QWN0aW9uRGF0YT4sXG4gIEFjdGlvbkZ1bmN0aW9uPFN1Y2Nlc3NEYXRhPixcbiAgQWN0aW9uRnVuY3Rpb248RXJyb3JEYXRhPlxuXSB7XG4gIHJldHVybiBbXG4gICAgY3JlYXRlQWN0aW9uPEFjdGlvbkRhdGE+KHR5cGUpLFxuICAgIGNyZWF0ZUFjdGlvbjxTdWNjZXNzRGF0YT4oYCR7dHlwZX1fU1VDQ0VTU2ApLFxuICAgIGNyZWF0ZUFjdGlvbjxFcnJvckRhdGE+KGAke3R5cGV9X0ZBSUxgKVxuICBdO1xufVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuZnVuY3Rpb24gaGFuZGxlQWN0aW9ucyhhY3Rpb25zOiBhbnksIGluaXRpYWxTdGF0ZTogYW55KSB7XG4gIHJldHVybiBoYW5kbGVSZWR1eEFjdGlvbnMoXG4gICAgcmVkdWNlKFxuICAgICAgYWN0aW9ucyxcbiAgICAgIChyZWR1Y2VyOiBhbnksIGhhbmRsZXIsIGFjdGlvbikgPT4ge1xuICAgICAgICByZWR1Y2VyW2FjdGlvbl0gPSAoc3RhdGU6IGFueSwgYWN0OiBhbnkpID0+IGhhbmRsZXIoc3RhdGUuc2V0KCdhY3Rpb24nLCBhY3Rpb24pLCBhY3QpO1xuICAgICAgICByZXR1cm4gcmVkdWNlcjtcbiAgICAgIH0sXG4gICAgICB7fVxuICAgICksXG4gICAgaW5pdGlhbFN0YXRlXG4gICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlZHVjZXJzKFxuICBzdGF0ZUNvbnRleHQ6IHN0cmluZyxcbiAgcmVkdWNlcnM6IGFueVtdLFxuICBpbml0aWFsU3RhdGU6IGFueSxcbiAgcHJldmVudFJlc2V0dGluZzogYm9vbGVhbiA9IGZhbHNlXG4pOiBhbnkge1xuICByZXR1cm4ge1xuICAgIFtzdGF0ZUNvbnRleHRdOiBoYW5kbGVSZWR1eEFjdGlvbnMoXG4gICAgICByZWR1Y2UoXG4gICAgICAgIGZsYXR0ZW4ocmVkdWNlcnMpLFxuICAgICAgICAocmVkdWNlcjogYW55LCBhY3Rpb246IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChpc0FycmF5KGFjdGlvbi5vbikpIHtcbiAgICAgICAgICAgIGFjdGlvbi5vbi5mb3JFYWNoKChhY3Q6IGFueSkgPT4ge1xuICAgICAgICAgICAgICByZWR1Y2VyW2FjdF0gPSBhY3Rpb24ucmVkdWNlcjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSByZWR1Y2VyW2FjdGlvbi5vbl0gPSBhY3Rpb24ucmVkdWNlcjtcbiAgICAgICAgICByZXR1cm4gcmVkdWNlcjtcbiAgICAgICAgfSxcbiAgICAgICAgcHJldmVudFJlc2V0dGluZ1xuICAgICAgICAgID8ge31cbiAgICAgICAgICA6IHtcbiAgICAgICAgICAgIEFQUF9TVEFURV9SRVNFVDogKCkgPT4gaW5pdGlhbFN0YXRlXG4gICAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIGluaXRpYWxTdGF0ZVxuICAgIClcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNhZ2FzKHNhZ2FzOiBhbnlbXSk6IGFueVtdIHtcbiAgcmV0dXJuIGZsYXR0ZW4oc2FnYXMpLm1hcCgoc2FnYTogYW55KSA9PiB7XG4gICAgY29uc3QgeyBvbiwgZWZmZWN0ID0gdGFrZUxhdGVzdCwgd29ya2VyIH0gPSBzYWdhO1xuICAgIHJldHVybiBmdW5jdGlvbiogKCkge1xuICAgICAgeWllbGQgZWZmZWN0KG9uLCBmdW5jdGlvbiogKGFjdGlvbjogYW55KSB7XG4gICAgICAgIHlpZWxkIGRlbGF5KDApO1xuICAgICAgICB5aWVsZCB3b3JrZXIoYWN0aW9uKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTZWxlY3RvcnNBKGNvbnRleHQ6IHN0cmluZywga2V5czogYW55W10gPSBbXSk6IGFueSB7XG4gIGNvbnN0IHN0YXRlU2VsZWN0b3IgPSAoc3RhdGU6IGFueSkgPT4gc3RhdGVbY29udGV4dF07XG5cbiAgaWYgKGlzRW1wdHkoa2V5cykpIHJldHVybiBzdGF0ZVNlbGVjdG9yO1xuXG4gIHJldHVybiBrZXlzLm1hcCgoa2V5OiBhbnkpID0+IChzdGF0ZTogYW55KSA9PiAoaXNBcnJheShrZXkpXG4gICAgPyBzdGF0ZVNlbGVjdG9yKHN0YXRlKS5nZXRJbihrZXkpXG4gICAgOiBzdGF0ZVNlbGVjdG9yKHN0YXRlKS5nZXQoa2V5KSkpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTZWxlY3RvcnMoY29udGV4dDogc3RyaW5nLCBrZXlzOiBzdHJpbmdbXSk6IGFueSB7XG4gIGNvbnN0IHN0YXRlU2VsZWN0b3IgPSAoc3RhdGU6IGFueSkgPT4gc3RhdGVbY29udGV4dF07XG5cbiAgcmV0dXJuIHJlZHVjZShcbiAgICBrZXlzLFxuICAgIChzZWxlY3RvcnM6IGFueSwga2V5KSA9PiB7XG4gICAgICBzZWxlY3RvcnNbYCR7a2V5fVNlbGVjdG9yYF0gPSAoc3RhdGU6IGFueSkgPT4gc3RhdGVTZWxlY3RvcihzdGF0ZSkuZ2V0KGtleSk7XG4gICAgICByZXR1cm4gc2VsZWN0b3JzO1xuICAgIH0sXG4gICAge31cbiAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSlNTZWxlY3RvcnMoY29udGV4dDogc3RyaW5nLCBrZXlzOiBzdHJpbmdbXSk6IGFueSB7XG4gIGNvbnN0IHN0YXRlU2VsZWN0b3IgPSAoc3RhdGU6IGFueSkgPT4gc3RhdGVbY29udGV4dF07XG5cbiAgcmV0dXJuIHJlZHVjZShcbiAgICBrZXlzLFxuICAgIChzZWxlY3RvcnM6IGFueSwga2V5KSA9PiB7XG4gICAgICBzZWxlY3RvcnNbYCR7a2V5fVNlbGVjdG9yYF0gPSAoc3RhdGU6IGFueSkgPT4gc3RhdGVTZWxlY3RvcihzdGF0ZSlba2V5XTtcbiAgICAgIHJldHVybiBzZWxlY3RvcnM7XG4gICAgfSxcbiAgICB7fVxuICApO1xufVxuXG5leHBvcnQge1xuICBjcmVhdGVBY3Rpb24sXG4gIGNyZWF0ZUFzeW5jQWN0aW9uLFxuICBjcmVhdGVBc3luY0FjdGlvbnMsXG4gIGNyZWF0ZVNlbGVjdG9yc0EsXG4gIGhhbmRsZUFjdGlvbnMsXG4gIGNyZWF0ZVJlZHVjZXJzLFxuICBjcmVhdGVTZWxlY3RvcnMsXG4gIGNyZWF0ZVNlbGVjdG9yLFxuICBjcmVhdGVKU1NlbGVjdG9yc1xufTtcbiIsImV4cG9ydCBmdW5jdGlvbiBpc1VybCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIHVybC5tYXRjaChcbiAgICAgIC8oaHR0cChzKT86XFwvXFwvLik/KHd3d1xcLik/Wy1hLXpBLVowLTlAOiUuXyt+Iz1dezIsMjU2fVxcLlthLXpdezIsNn1cXGIoWy1hLXpBLVowLTlAOiVfKy5+Iz8mLy89XSopL2dcbiAgICApICE9PSBudWxsXG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVV1aWQgPSAoKSA9PiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIChjKSA9PiB7XG4gIC8qIGVzbGludC1kaXNhYmxlICovXG4gICAgY29uc3QgciA9IChNYXRoLnJhbmRvbSgpICogMTYpIHwgMDtcbiAgICBjb25zdCB2ID0gYyA9PT0gJ3gnID8gciA6IChyICYgMHgzKSB8IDB4ODtcbiAgICByZXR1cm4gdi50b1N0cmluZygxNik7XG4gICAgLyogZXNsaW50LWVuYWJsZSAqL1xufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoIXN0cikgcmV0dXJuICcnO1xuICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufVxuXG5leHBvcnQgY29uc3QgdW5pdFByaWNlczogeyB2YWx1ZTogbnVtYmVyLCB0ZXh0OiBhbnkgfVtdID0gW1xuICB7XG4gICAgdmFsdWU6IDE1LFxuICAgIHRleHQ6ICcxNSB0b2tlbnMnXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogMjAsXG4gICAgdGV4dDogJzIwIHRva2VucydcbiAgfSxcbiAge1xuICAgIHZhbHVlOiAyNSxcbiAgICB0ZXh0OiAnMjUgdG9rZW5zJ1xuICB9LFxuICB7XG4gICAgdmFsdWU6IDMwLFxuICAgIHRleHQ6ICczMCB0b2tlbnMnXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogMzUsXG4gICAgdGV4dDogJzM1IHRva2VucydcbiAgfSxcbiAge1xuICAgIHZhbHVlOiA0MCxcbiAgICB0ZXh0OiAnNDAgdG9rZW5zJ1xuICB9LFxuICB7XG4gICAgdmFsdWU6IDQ1LFxuICAgIHRleHQ6ICc0NSB0b2tlbnMnXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogNTAsXG4gICAgdGV4dDogJzUwIHRva2VucydcbiAgfVxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDU1LFxuICAvLyAgIHRleHQ6ICc1NSB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNjAsXG4gIC8vICAgdGV4dDogJzYwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA2NSxcbiAgLy8gICB0ZXh0OiAnNjUgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDcwLFxuICAvLyAgIHRleHQ6ICc3MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNzUsXG4gIC8vICAgdGV4dDogJzc1IHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA4MCxcbiAgLy8gICB0ZXh0OiAnODAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDg1LFxuICAvLyAgIHRleHQ6ICc4NSB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogOTAsXG4gIC8vICAgdGV4dDogJzkwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA5NSxcbiAgLy8gICB0ZXh0OiAnOTUgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDEwMCxcbiAgLy8gICB0ZXh0OiAnMTAwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAxMjAsXG4gIC8vICAgdGV4dDogJzEyMCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMTQwLFxuICAvLyAgIHRleHQ6ICcxNDAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDE2MCxcbiAgLy8gICB0ZXh0OiAnMTYwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAxODAsXG4gIC8vICAgdGV4dDogJzE4MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMjAwLFxuICAvLyAgIHRleHQ6ICcyMDAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDIyMCxcbiAgLy8gICB0ZXh0OiAnMjIwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAyNDAsXG4gIC8vICAgdGV4dDogJzI0MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMjYwLFxuICAvLyAgIHRleHQ6ICcyNjAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDI4MCxcbiAgLy8gICB0ZXh0OiAnMjgwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAzMDAsXG4gIC8vICAgdGV4dDogJzMwMCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMzIwLFxuICAvLyAgIHRleHQ6ICczMjAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDM0MCxcbiAgLy8gICB0ZXh0OiAnMzQwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAzNjAsXG4gIC8vICAgdGV4dDogJzM2MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMzgwLFxuICAvLyAgIHRleHQ6ICczODAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDQwMCxcbiAgLy8gICB0ZXh0OiAnNDAwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA0MjAsXG4gIC8vICAgdGV4dDogJzQyMCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNDQwLFxuICAvLyAgIHRleHQ6ICc0NDAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDQ2MCxcbiAgLy8gICB0ZXh0OiAnNDYwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA0ODAsXG4gIC8vICAgdGV4dDogJzQ4MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNTAwLFxuICAvLyAgIHRleHQ6ICc1MDAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDU1MCxcbiAgLy8gICB0ZXh0OiAnNTUwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA2MDAsXG4gIC8vICAgdGV4dDogJzYwMCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNjUwLFxuICAvLyAgIHRleHQ6ICc2NTAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDcwMCxcbiAgLy8gICB0ZXh0OiAnNzAwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA3NTAsXG4gIC8vICAgdGV4dDogJzc1MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogODAwLFxuICAvLyAgIHRleHQ6ICc4MDAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDg1MCxcbiAgLy8gICB0ZXh0OiAnODUwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA5MDAsXG4gIC8vICAgdGV4dDogJzkwMCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogOTUwLFxuICAvLyAgIHRleHQ6ICc5NTAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDEwMDAsXG4gIC8vICAgdGV4dDogJzEwMDAgdG9rZW5zJ1xuICAvLyB9XG5dO1xuIiwiaW1wb3J0IHsgY3JlYXRlQWN0aW9uLCBjcmVhdGVBc3luY0FjdGlvbiB9IGZyb20gJ0BsaWIvcmVkdXgnO1xuXG5leHBvcnQgY29uc3Qge1xuICBnZXRDb252ZXJzYXRpb25zLFxuICBnZXRDb252ZXJzYXRpb25zU3VjY2VzcyxcbiAgZ2V0Q29udmVyc2F0aW9uc0ZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbignZ2V0Q29udmVyc2F0aW9ucycsICdMT0FEX0NPTlZFUlNBVElPTlMnKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgc2VhcmNoQ29udmVyc2F0aW9ucyxcbiAgc2VhcmNoQ29udmVyc2F0aW9uc1N1Y2Nlc3MsXG4gIHNlYXJjaENvbnZlcnNhdGlvbnNGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ3NlYXJjaENvbnZlcnNhdGlvbnMnLCAnU0VBUkNIX0NPTlZFUlNBVElPTlMnKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgcmVhZE1lc3NhZ2VzXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ3JlYWRNZXNzYWdlcycsICdSRUFEX01FU1NBR0VTJyk7XG5cbmV4cG9ydCBjb25zdCB7XG4gIHNlbmRNZXNzYWdlLFxuICBzZW5kTWVzc2FnZVN1Y2Nlc3MsXG4gIHNlbmRNZXNzYWdlRmFpbFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCdzZW5kTWVzc2FnZScsICdTRU5EX01FU1NBR0UnKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgcmVjZWl2ZU1lc3NhZ2VTdWNjZXNzXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ3JlY2VpdmVNZXNzYWdlU3VjY2VzcycsICdSRUNFSVZFX01FU1NBR0VfU1VDQ0VTUycpO1xuXG5leHBvcnQgY29uc3Qge1xuICBzZW50RmlsZVN1Y2Nlc3Ncbn0gPSBjcmVhdGVBc3luY0FjdGlvbignc2VudEZpbGVTdWNjZXNzJywgJ1NFTlRfRklMRV9TVUNDRVNTJyk7XG5cbmV4cG9ydCBjb25zdCB7XG4gIGRlYWN0aXZlQ29udmVyc2F0aW9uXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ2RlYWN0aXZlQ29udmVyc2F0aW9uJywgJ0RFQUNUSVZFX0NPTlZFUlNBVElPTicpO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlTGFzdE1lc3NhZ2UgPSBjcmVhdGVBY3Rpb24oJ3VwZGF0ZUxhc3RNZXNzYWdlJyk7XG5cbmV4cG9ydCBjb25zdCB7XG4gIHNldEFjdGl2ZUNvbnZlcnNhdGlvbixcbiAgc2V0QWN0aXZlQ29udmVyc2F0aW9uU3VjY2VzcyxcbiAgc2V0QWN0aXZlQ29udmVyc2F0aW9uRmFpbFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKFxuICAnc2V0QWN0aXZlQ29udmVyc2F0aW9uJyxcbiAgJ1NFVF9BQ1RJVkVfQ09OVkVSU0FUSU9OX1JFQ0VJVkVSJ1xuKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgbG9hZE1lc3NhZ2VzLFxuICBsb2FkTWVzc2FnZXNTdWNjZXNzLFxuICBsb2FkTWVzc2FnZXNGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ2xvYWRNZXNzYWdlcycsICdMT0FEX01FU1NBR0VTJyk7XG5cbmV4cG9ydCBjb25zdCB7XG4gIGxvYWRNb3JlTWVzc2FnZXMsXG4gIGxvYWRNb3JlTWVzc2FnZXNTdWNjZXNzLFxuICBsb2FkTW9yZU1lc3NhZ2VzRmFpbFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCdsb2FkTW9yZU1lc3NhZ2VzJywgJ0xPQURfTU9SRV9NRVNTQUdFUycpO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hpbmdNZXNzYWdlID0gY3JlYXRlQWN0aW9uKCdmZXRjaGluZ01lc3NhZ2UnKTtcblxuZXhwb3J0IGNvbnN0IHJlc2V0TWVzc2FnZVN0YXRlID0gY3JlYXRlQWN0aW9uKCdyZXNldE1lc3NhZ2VTdGF0ZScpO1xuXG5leHBvcnQgY29uc3Qge1xuICBnZXRDb252ZXJzYXRpb25EZXRhaWwsXG4gIGdldENvbnZlcnNhdGlvbkRldGFpbFN1Y2Nlc3MsXG4gIGdldENvbnZlcnNhdGlvbkRldGFpbEZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbignZ2V0Q29udmVyc2F0aW9uRGV0YWlsJywgJ0xPQURfQ09OVkVSU0FUSU9OX0lURU0nKTtcblxuZXhwb3J0IGNvbnN0IGNvdW50Tm90UmVhZE1lc3NhZ2UgPSBjcmVhdGVBY3Rpb24oJ0NPVU5UX1RPVEFMX05PVF9SRUFEX01FU1NBR0UnKTtcbiIsImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IHsgb21pdCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSc7XG5pbXBvcnQgeyBpc1VybCB9IGZyb20gJ0BsaWIvc3RyaW5nJztcbmltcG9ydCB7IElSZWdpc3RlckZvcm1EYXRhIH0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgZ2V0R2xvYmFsQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElSZXNwb25zZTxUPiB7XG4gIHN0YXR1czogbnVtYmVyO1xuICBkYXRhOiBUO1xufVxuXG5leHBvcnQgY29uc3QgVE9LRU4gPSAndG9rZW4nO1xuZXhwb3J0IGNvbnN0IFJPTEUgPSAncm9sZSc7XG5leHBvcnQgY29uc3QgUEVSRk9STUVSX1JPTEUgPSAncGVyZm9ybWVyJztcbmV4cG9ydCBjb25zdCBVU0VSX1JPTEUgPSAndXNlcic7XG5leHBvcnQgY29uc3QgU1RVRElPX1JPTEUgPSAnc3R1ZGlvJztcbmV4cG9ydCBjb25zdCBTT1JUID0geyBkZXNjZW5kOiAnZGVzYycsIGFzY2VuZDogJ2FzYycgfTtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFQSVJlcXVlc3Qge1xuICBzdGF0aWMgdG9rZW46IHN0cmluZyA9ICcnO1xuXG4gIHNldEF1dGhIZWFkZXJUb2tlbih0b2tlbjogc3RyaW5nKSB7XG4gICAgQVBJUmVxdWVzdC50b2tlbiA9IHRva2VuO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlcyB0aGUgSlNPTiByZXR1cm5lZCBieSBhIG5ldHdvcmsgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0gIHtvYmplY3R9IHJlc3BvbnNlIEEgcmVzcG9uc2UgZnJvbSBhIG5ldHdvcmsgcmVxdWVzdFxuICAgKlxuICAgKiBAcmV0dXJuIHtvYmplY3R9ICAgICAgICAgIFRoZSBwYXJzZWQgSlNPTiBmcm9tIHRoZSByZXF1ZXN0XG4gICAqL1xuICBwcml2YXRlIHBhcnNlSlNPTihyZXNwb25zZTogUmVzcG9uc2UpIHtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDQgfHwgcmVzcG9uc2Uuc3RhdHVzID09PSAyMDUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBhIG5ldHdvcmsgcmVxdWVzdCBjYW1lIGJhY2sgZmluZSwgYW5kIHRocm93cyBhbiBlcnJvciBpZiBub3RcbiAgICpcbiAgICogQHBhcmFtICB7b2JqZWN0fSByZXNwb25zZSAgIEEgcmVzcG9uc2UgZnJvbSBhIG5ldHdvcmsgcmVxdWVzdFxuICAgKlxuICAgKiBAcmV0dXJuIHtvYmplY3R8dW5kZWZpbmVkfSBSZXR1cm5zIGVpdGhlciB0aGUgcmVzcG9uc2UsIG9yIHRocm93cyBhbiBlcnJvclxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBjaGVja1N0YXR1cyhyZXNwb25zZTogUmVzcG9uc2UpIHtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID49IDIwMCAmJiByZXNwb25zZS5zdGF0dXMgPCAzMDApIHtcbiAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG5cbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MTMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWVzdCBFbnRpdHkgVG9vIExhcmdlJyk7XG4gICAgfVxuXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAzKSB7XG4gICAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZvcmJpZGRlbiBpbiB0aGUgYWN0aW9uIScpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KSBhcyBhbnk7XG4gICAgLy8gZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAvLyB0aHJvdyBlcnJvcjtcbiAgICB0aHJvdyByZXNwb25zZS5jbG9uZSgpLmpzb24oKTtcbiAgfVxuXG4gIHJlcXVlc3QoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgbWV0aG9kPzogc3RyaW5nLFxuICAgIGJvZHk/OiBhbnksXG4gICAgaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH1cbiAgKTogUHJvbWlzZTxJUmVzcG9uc2U8YW55Pj4ge1xuICAgIGNvbnN0IHZlcmIgPSAobWV0aG9kIHx8ICdnZXQnKS50b1VwcGVyQ2FzZSgpO1xuICAgIGNvbnN0IHVwZGF0ZWRIZWFkZXIgPSB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgLy8gVE9ETyAtIGNoZWNrIG1lXG4gICAgICBBdXRob3JpemF0aW9uOlxuICAgICAgICBBUElSZXF1ZXN0LnRva2VuIHx8IChwcm9jZXNzLmJyb3dzZXIgPyBjb29raWUuZ2V0KFRPS0VOKSA6ICcnKSxcbiAgICAgIC4uLihoZWFkZXJzIHx8IHt9KVxuICAgIH07XG4gICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG5cbiAgICByZXR1cm4gZmV0Y2goaXNVcmwodXJsKSA/IHVybCA6IGAke2NvbmZpZy5BUElfRU5EUE9JTlQgfHwgY29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0ke3VybH1gLCB7XG4gICAgICBtZXRob2Q6IHZlcmIsXG4gICAgICBoZWFkZXJzOiB1cGRhdGVkSGVhZGVyLFxuICAgICAgYm9keTogYm9keSA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogbnVsbFxuICAgIH0pXG4gICAgICAudGhlbih0aGlzLmNoZWNrU3RhdHVzKVxuICAgICAgLnRoZW4odGhpcy5wYXJzZUpTT04pO1xuICB9XG5cbiAgYnVpbGRVcmwoYmFzZVVybDogc3RyaW5nLCBwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4gfSkge1xuICAgIGlmICghcGFyYW1zKSB7XG4gICAgICByZXR1cm4gYmFzZVVybDtcbiAgICB9XG5cbiAgICBjb25zdCBxdWVyeVN0cmluZyA9IE9iamVjdC5rZXlzKHBhcmFtcylcbiAgICAgIC5tYXAoKGspID0+IGAke2VuY29kZVVSSUNvbXBvbmVudChrKX09JHtlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW2tdKX1gKVxuICAgICAgLmpvaW4oJyYnKTtcbiAgICByZXR1cm4gYCR7YmFzZVVybH0/JHtxdWVyeVN0cmluZ31gO1xuICB9XG5cbiAgZ2V0KHVybDogc3RyaW5nLCBoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXJsLCAnZ2V0JywgbnVsbCwgaGVhZGVycyk7XG4gIH1cblxuICBwb3N0KHVybDogc3RyaW5nLCBkYXRhPzogYW55LCBoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXJsLCAncG9zdCcsIGRhdGEsIGhlYWRlcnMpO1xuICB9XG5cbiAgcHV0KHVybDogc3RyaW5nLCBkYXRhPzogYW55LCBoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXJsLCAncHV0JywgZGF0YSwgaGVhZGVycyk7XG4gIH1cblxuICBkZWwodXJsOiBzdHJpbmcsIGRhdGE/OiBhbnksIGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1cmwsICdkZWxldGUnLCBkYXRhLCBoZWFkZXJzKTtcbiAgfVxuXG4gIHVwbG9hZChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBmaWxlczoge1xuICAgICAgZmlsZTogRmlsZTtcbiAgICAgIGZpZWxkbmFtZTogc3RyaW5nO1xuICAgIH1bXSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBvblByb2dyZXNzOiBGdW5jdGlvbjtcbiAgICAgIGN1c3RvbURhdGE/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xuICAgICAgbWV0aG9kPzogc3RyaW5nO1xuICAgIH0gPSB7XG4gICAgICBvblByb2dyZXNzKCkge30sXG4gICAgICBtZXRob2Q6ICdQT1NUJ1xuICAgIH1cbiAgKSB7XG4gICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG4gICAgY29uc3QgdXBsb2FkVXJsID0gaXNVcmwodXJsKSA/IHVybCA6IGAke2NvbmZpZy5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlR9JHt1cmx9YDtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50Lmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgICBvcHRpb25zLm9uUHJvZ3Jlc3Moe1xuICAgICAgICAgICAgcGVyY2VudGFnZTogKGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsKSAqIDEwMFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmVxLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSByZXEuc3RhdHVzID49IDIwMCAmJiByZXEuc3RhdHVzIDwgMzAwO1xuICAgICAgICBjb25zdCB7IHJlc3BvbnNlIH0gPSByZXE7XG4gICAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICAgIHJldHVybiByZWplY3QocmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgICByZWplY3QocmVxLnJlc3BvbnNlKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgZmlsZXMuZm9yRWFjaCgoZikgPT4gZm9ybURhdGEuYXBwZW5kKGYuZmllbGRuYW1lLCBmLmZpbGUsIGYuZmlsZS5uYW1lKSk7XG4gICAgICBvcHRpb25zLmN1c3RvbURhdGFcbiAgICAgICAgJiYgT2JqZWN0LmtleXMob3B0aW9ucy5jdXN0b21EYXRhKS5mb3JFYWNoKFxuICAgICAgICAgIChmaWVsZG5hbWUpID0+IHR5cGVvZiBvcHRpb25zLmN1c3RvbURhdGFbZmllbGRuYW1lXSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICYmIGZvcm1EYXRhLmFwcGVuZChmaWVsZG5hbWUsIG9wdGlvbnMuY3VzdG9tRGF0YVtmaWVsZG5hbWVdKVxuICAgICAgICApO1xuXG4gICAgICByZXEucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xuICAgICAgcmVxLm9wZW4ob3B0aW9ucy5tZXRob2QgfHwgJ1BPU1QnLCB1cGxvYWRVcmwpO1xuXG4gICAgICBjb25zdCB0b2tlbjogYW55ID0gY29va2llLmdldChUT0tFTik7XG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCB0b2tlbik7XG4gICAgICB9XG4gICAgICByZXEuc2VuZChmb3JtRGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICByZWdpc3RlcihcbiAgICB1cmw6IHN0cmluZyxcbiAgICBkYXRhOiBJUmVnaXN0ZXJGb3JtRGF0YSxcbiAgICBvcHRpb25zOiB7IG9uUHJvZ3Jlc3M6IEZ1bmN0aW9uIH0gPSB7XG4gICAgICBvblByb2dyZXNzKCkge31cbiAgICB9XG4gICkge1xuICAgIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgcmVxLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQubGVuZ3RoQ29tcHV0YWJsZSkge1xuICAgICAgICAgIG9wdGlvbnMub25Qcm9ncmVzcyh7XG4gICAgICAgICAgICBwZXJjZW50YWdlOiAoZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWwpICogMTAwXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXEuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IHJlcS5zdGF0dXMgPj0gMjAwICYmIHJlcS5zdGF0dXMgPCAzMDA7XG4gICAgICAgIGNvbnN0IHsgcmVzcG9uc2UgfSA9IHJlcTtcbiAgICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChyZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgfSk7XG5cbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG4gICAgICAgIHJlamVjdChyZXEucmVzcG9uc2UpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAvLyBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlLCBmaWxlLm5hbWUpO1xuICAgICAgaWYgKGRhdGEuZG9jdW1lbnRWZXJpZmljYXRpb24pIHtcbiAgICAgICAgY29uc3QgZG9jdW1lbnRWZXJpZmljYXRpb25GaWxlID0gZGF0YS5kb2N1bWVudFZlcmlmaWNhdGlvbi5maWxlLm9yaWdpbkZpbGVPYmo7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcbiAgICAgICAgICAnZG9jdW1lbnRWZXJpZmljYXRpb24nLFxuICAgICAgICAgIGRvY3VtZW50VmVyaWZpY2F0aW9uRmlsZSxcbiAgICAgICAgICBkb2N1bWVudFZlcmlmaWNhdGlvbkZpbGUubmFtZVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YS5pZFZlcmlmaWNhdGlvbikge1xuICAgICAgICBjb25zdCBpZFZlcmlmaWNhdGlvbkRpbGUgPSBkYXRhLmlkVmVyaWZpY2F0aW9uLmZpbGUub3JpZ2luRmlsZU9iajtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFxuICAgICAgICAgICdpZFZlcmlmaWNhdGlvbicsXG4gICAgICAgICAgaWRWZXJpZmljYXRpb25EaWxlLFxuICAgICAgICAgIGlkVmVyaWZpY2F0aW9uRGlsZS5uYW1lXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5rZXlzKFxuICAgICAgICBvbWl0KGRhdGEsIFsnZG9jdW1lbnRWZXJpZmljYXRpb24nLCAnaWRWZXJpZmljYXRpb24nXSlcbiAgICAgICkuZm9yRWFjaCgodikgPT4ge1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQodiwgZGF0YVt2XSk7XG4gICAgICB9KTtcblxuICAgICAgcmVxLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcbiAgICAgIHJlcS5vcGVuKCdQT1NUJywgaXNVcmwodXJsKSA/IHVybCA6IGAke2NvbmZpZy5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlR9JHt1cmx9YCk7XG5cbiAgICAgIGNvbnN0IHRva2VuOiBhbnkgPSBjb29raWUuZ2V0KFRPS0VOKTtcbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICByZXEuc2V0UmVxdWVzdEhlYWRlcignQXV0aG9yaXphdGlvbicsIHRva2VuKTtcbiAgICAgIH1cbiAgICAgIHJlcS5zZW5kKGZvcm1EYXRhKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnO1xuaW1wb3J0IHtcbiAgSUxvZ2luLFxuICBJcGVyZm9ybWVyTG9naW4sXG4gIElSZWdpc3RlckZvcm1EYXRhLFxuICBJVXNlclJlZ2lzdGVyRm9ybURhdGFcbn0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IHtcbiAgQVBJUmVxdWVzdCwgVE9LRU4sIElSZXNwb25zZSwgUk9MRVxufSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIGxvZ2luKGRhdGE6IElMb2dpbikge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9hdXRoL3VzZXJzL2xvZ2luJywgZGF0YSk7XG4gIH1cblxuICBzZXRBdXRoSGVhZGVyKHRva2VuOiBzdHJpbmcsIHJvbGU6IHN0cmluZykge1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qcy1jb29raWUvanMtY29va2llXG4gICAgLy8gc2luY2UgU2FmYXJpIGRvZXMgbm90IHN1cHBvcnQsIG5lZWQgYSBiZXR0ZXIgc29sdXRpb25cbiAgICBjb29raWUuc2V0KFRPS0VOLCB0b2tlbiwgeyBleHBpcmVzOiAzNjUgfSk7XG4gICAgY29va2llLnNldChST0xFLCByb2xlLCB7IGV4cGlyZXM6IDM2NSB9KTtcbiAgICB0aGlzLnNldEF1dGhIZWFkZXJUb2tlbih0b2tlbik7XG4gIH1cblxuICBwZXJmb3JtZXJMb2dpbihkYXRhOiBJcGVyZm9ybWVyTG9naW4pIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvYXV0aC9wZXJmb3JtZXJzL2xvZ2luJywgZGF0YSk7XG4gIH1cblxuICBzdHVkaW9Mb2dpbihkYXRhOiBJTG9naW4pIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvYXV0aC9zdHVkaW8vbG9naW4nLCBkYXRhKTtcbiAgfVxuXG4gIHNldFRva2VuKHRva2VuOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vanMtY29va2llL2pzLWNvb2tpZVxuICAgIC8vIHNpbmNlIFNhZmFyaSBkb2VzIG5vdCBzdXBwb3J0LCBuZWVkIGEgYmV0dGVyIHNvbHV0aW9uXG4gICAgY29va2llLnNldChUT0tFTiwgdG9rZW4sIHsgZXhwaXJlczogMzY1IH0pO1xuICAgIHRoaXMuc2V0QXV0aEhlYWRlclRva2VuKHRva2VuKTtcbiAgfVxuXG4gIGdldFRva2VuKCk6IHN0cmluZyB7XG4gICAgY29uc3QgdG9rZW4gPSBjb29raWUuZ2V0KFRPS0VOKTtcbiAgICByZXR1cm4gdG9rZW4gfHwgbnVsbDtcbiAgfVxuXG4gIGdldFJvbGUoKTogc3RyaW5nIHtcbiAgICBjb25zdCByb2xlID0gY29va2llLmdldChST0xFKTtcbiAgICByZXR1cm4gcm9sZSB8fCBudWxsO1xuICB9XG5cbiAgcmVtb3ZlVG9rZW4oKTogdm9pZCB7XG4gICAgY29va2llLnJlbW92ZShUT0tFTik7XG4gICAgY29va2llLnJlbW92ZShST0xFKTtcbiAgfVxuXG4gIHJlbW92ZVJlbWVtYmVyKCk6IHZvaWQge1xuICAgIHByb2Nlc3MuYnJvd3NlciAmJiBjb29raWUucmVtb3ZlKCdyZW1lbWJlck1lJyk7XG4gIH1cblxuICB1cGRhdGVQYXNzd29yZChib2R5OiB7IHBhc3N3b3JkOiBzdHJpbmc7IHNvdXJjZT86IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMucHV0KCcvYXV0aC91c2Vycy9tZS9wYXNzd29yZCcsIGJvZHkpO1xuICB9XG5cbiAgcGVyZm9ybWVyc1JlZ2lzdGVyKGRhdGE6IElSZWdpc3RlckZvcm1EYXRhKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5yZWdpc3RlcignL2F1dGgvcGVyZm9ybWVycy9yZWdpc3RlcicsIGRhdGEpO1xuICB9XG5cbiAgdXNlclJlZ2lzdGVyKGRhdGE6IElVc2VyUmVnaXN0ZXJGb3JtRGF0YSk6IFByb21pc2U8SVJlc3BvbnNlPGFueT4+IHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvYXV0aC91c2Vycy9yZWdpc3RlcicsIGRhdGEpO1xuICB9XG5cbiAgc3R1ZGlvUmVnaXN0ZXIoZGF0YTogSVJlZ2lzdGVyRm9ybURhdGEpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnJlZ2lzdGVyKCcvYXV0aC9zdHVkaW8vcmVnaXN0ZXInLCBkYXRhKTtcbiAgfVxuXG4gIGZvcmdvdFBhc3N3b3JkKGVtYWlsOiBzdHJpbmcsIHR5cGU6IHN0cmluZykge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBlbWFpbCxcbiAgICAgIHR5cGVcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9hdXRoL3VzZXJzL2ZvcmdvdCcsIGRhdGEpO1xuICB9XG5cbiAgcmVzZW5kVmVyaWZpY2F0aW9uRW1haWwoZGF0YTogeyBlbWFpbDogc3RyaW5nLCBzb3VyY2U6IHN0cmluZ30pIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvdmVyaWZpY2F0aW9uL3Jlc2VuZC12ZXJpZmljYXRpb24tZW1haWwnLCBkYXRhKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgYXV0aFNlcnZpY2UgPSBuZXcgQXV0aFNlcnZpY2UoKTtcbiIsImxldCBnbG9iYWxDb25maWcgPSB7fSBhcyBhbnk7XG5cbmV4cG9ydCBjb25zdCBzZXRHbG9iYWxDb25maWcgPSAoY29uZmlnOiBhbnkpID0+IHtcbiAgZ2xvYmFsQ29uZmlnID0gY29uZmlnO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEdsb2JhbENvbmZpZyA9ICgpID0+IGdsb2JhbENvbmZpZztcbiIsImltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcbmltcG9ydCB7IGdldEdsb2JhbENvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcblxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIGdldENvbnZlcnNhdGlvbnMocXVlcnk/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9jb252ZXJzYXRpb25zJywgcXVlcnkpKTtcbiAgfVxuXG4gIHNlYXJjaENvbnZlcnNhdGlvbnMocXVlcnk/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9jb252ZXJzYXRpb25zL3NlYXJjaCcsIHF1ZXJ5KSk7XG4gIH1cblxuICBjcmVhdGVDb252ZXJzYXRpb24oZGF0YTogUmVjb3JkPHN0cmluZywgc3RyaW5nPikge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9jb252ZXJzYXRpb25zJywgZGF0YSk7XG4gIH1cblxuICBnZXRDb252ZXJzYXRpb25EZXRhaWwoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmdldChgL2NvbnZlcnNhdGlvbnMvJHtpZH1gKTtcbiAgfVxuXG4gIGdldENvbnZlcnNhdGlvbkJ5U3RyZWFtSWQoc3RyZWFtSWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmdldChgL2NvbnZlcnNhdGlvbnMvc3RyZWFtLyR7c3RyZWFtSWR9YCk7XG4gIH1cblxuICBnZXRNZXNzYWdlcyhjb252ZXJzYXRpb25JZDogc3RyaW5nLCBxdWVyeT86IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybChgL21lc3NhZ2VzL2NvbnZlcnNhdGlvbnMvJHtjb252ZXJzYXRpb25JZH1gLCBxdWVyeSkpO1xuICB9XG5cbiAgZ2V0UHVibGljTWVzc2FnZXMoY29udmVyc2F0aW9uSWQ6IHN0cmluZywgcXVlcnk/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoYC9tZXNzYWdlcy9jb252ZXJzYXRpb25zL3B1YmxpYy8ke2NvbnZlcnNhdGlvbklkfWAsIHF1ZXJ5KSk7XG4gIH1cblxuICBzZW5kTWVzc2FnZShjb252ZXJzYXRpb25JZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL21lc3NhZ2VzL2NvbnZlcnNhdGlvbnMvJHtjb252ZXJzYXRpb25JZH1gLCBkYXRhKTtcbiAgfVxuXG4gIHNlbmRTdHJlYW1NZXNzYWdlKGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsIGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvbWVzc2FnZXMvc3RyZWFtL2NvbnZlcnNhdGlvbnMvJHtjb252ZXJzYXRpb25JZH1gLCBkYXRhKTtcbiAgfVxuXG4gIHNlbmRQdWJsaWNTdHJlYW1NZXNzYWdlKGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsIGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvbWVzc2FnZXMvc3RyZWFtL3B1YmxpYy9jb252ZXJzYXRpb25zLyR7Y29udmVyc2F0aW9uSWR9YCwgZGF0YSk7XG4gIH1cblxuICBmaW5kUHVibGljQ29udmVyc2F0aW9uUGVyZm9ybWVyKHBlcmZvcm1lcklkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9jb252ZXJzYXRpb25zL3N0cmVhbS9wdWJsaWMvJHtwZXJmb3JtZXJJZH1gKTtcbiAgfVxuXG4gIGNvdW50VG90YWxOb3RSZWFkKCkge1xuICAgIHJldHVybiB0aGlzLmdldCgnL21lc3NhZ2VzL2NvdW50aW5nLW5vdC1yZWFkLW1lc3NhZ2VzJyk7XG4gIH1cblxuICByZWFkQWxsSW5Db252ZXJzYXRpb24oY29udmVyc2F0aW9uSWQ6IHN0cmluZyB8IG51bWJlciwgcmVjaXBpZW50SWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9tZXNzYWdlcy9yZWFkLWFsbCcsIHsgY29udmVyc2F0aW9uSWQsIHJlY2lwaWVudElkIH0pO1xuICB9XG5cbiAgZ2V0TWVzc2FnZVVwbG9hZFVybCgpIHtcbiAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgICByZXR1cm4gYCR7Y29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0vbWVzc2FnZXMvcHJpdmF0ZS9maWxlYDtcbiAgfVxuXG4gIGRlbGV0ZU1lc3NhZ2UoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5kZWwoYC9tZXNzYWdlcy8ke2lkfWApO1xuICB9XG5cbiAgZGVsZXRlQWxsTWVzc2FnZUluQ29udmVyc2F0aW9uKGNvbnZlcnNhdGlvbklkKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVsKGAvbWVzc2FnZXMvJHtjb252ZXJzYXRpb25JZH0vcmVtb3ZlLWFsbC1tZXNzYWdlYCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG1lc3NhZ2VTZXJ2aWNlID0gbmV3IE1lc3NhZ2VTZXJ2aWNlKCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU29ja2V0Q29udGV4dCB9IGZyb20gJy4vU29ja2V0Q29udGV4dCc7XG5pbXBvcnQgeyB3YXJuaW5nIH0gZnJvbSAnLi91dGlscyc7XG5cbmludGVyZmFjZSBJRXZlbnRQcm9wcyB7XG4gIGV2ZW50OiBzdHJpbmc7XG4gIGhhbmRsZXI6IEZ1bmN0aW9uO1xufVxuXG5jbGFzcyBFdmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJRXZlbnRQcm9wcz4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZXZlbnQsIGhhbmRsZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc29ja2V0ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgaWYgKCFzb2NrZXQpIHtcbiAgICAgIHdhcm5pbmcoJ1NvY2tldCBJTyBjb25uZWN0aW9uIGhhcyBub3QgYmVlbiBlc3RhYmxpc2hlZC4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzb2NrZXQub24oZXZlbnQsIGhhbmRsZXIpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY29uc3QgeyBldmVudCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzb2NrZXQgPSB0aGlzLmNvbnRleHQ7XG5cbiAgICBpZiAoIXNvY2tldCkge1xuICAgICAgd2FybmluZygnU29ja2V0IElPIGNvbm5lY3Rpb24gaGFzIG5vdCBiZWVuIGVzdGFibGlzaGVkLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNvY2tldC5vZmYoZXZlbnQpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5FdmVudC5jb250ZXh0VHlwZSA9IFNvY2tldENvbnRleHQ7XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTb2NrZXRJTyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcbmltcG9ydCB7IGF1dGhTZXJ2aWNlIH0gZnJvbSAnQHNlcnZpY2VzL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgZ2V0R2xvYmFsQ29uZmlnIH0gZnJvbSAnQHNlcnZpY2VzL2NvbmZpZyc7XG5pbXBvcnQgeyB3YXJuaW5nLCBkZWJ1ZyB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgU29ja2V0Q29udGV4dCB9IGZyb20gJy4vU29ja2V0Q29udGV4dCc7XG5cbmludGVyZmFjZSBJU29ja2V0UHJvcHMge1xuICB1cmk/OiBzdHJpbmc7XG4gIGNoaWxkcmVuOiBhbnk7XG4gIGxvZ2dlZEluOiBib29sZWFuO1xufVxuXG5jbGFzcyBTb2NrZXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVNvY2tldFByb3BzPiB7XG4gIHNvY2tldDtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmNvbm5lY3QoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShuZXh0UHJvcHM6IGFueSkge1xuICAgIGNvbnN0IHsgbG9nZ2VkSW4gfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKG5leHRQcm9wcy5sb2dnZWRJbiAhPT0gbG9nZ2VkSW4pIHtcbiAgICAgIHRoaXMuY29ubmVjdCgpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuc29ja2V0ICYmIHRoaXMuc29ja2V0LmNsb3NlKCk7XG4gIH1cblxuICBjb25uZWN0KCkge1xuICAgIGNvbnN0IHsgbG9nZ2VkSW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdG9rZW4gPSBsb2dnZWRJbiAmJiBhdXRoU2VydmljZS5nZXRUb2tlbigpO1xuICAgIGlmICghcHJvY2Vzcy5icm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpO1xuICAgIGNvbnN0IHsgdXJpID0gY29uZmlnLk5FWFRfUFVCTElDX1NPQ0tFVF9FTkRQT0lOVCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgdHJhbnNwb3J0czogWyd3ZWJzb2NrZXQnLCAncG9sbGluZycsICdsb25nLXBvbGxpbmcnXSxcbiAgICAgIHF1ZXJ5OiB0b2tlbiA/IGB0b2tlbj0ke3Rva2VufWAgOiAnJ1xuICAgIH07XG5cbiAgICB0aGlzLnNvY2tldCAmJiB0aGlzLnNvY2tldC5jbG9zZSgpO1xuXG4gICAgdGhpcy5zb2NrZXQgPSBTb2NrZXRJTyh1cmksIHRoaXMubWVyZ2VPcHRpb25zKG9wdGlvbnMpKTtcblxuICAgIHRoaXMuc29ja2V0LnN0YXR1cyA9ICdpbml0aWFsaXplZCc7XG5cbiAgICB0aGlzLnNvY2tldC5vbignY29ubmVjdCcsICgpID0+IHtcbiAgICAgIHRoaXMuc29ja2V0LnN0YXR1cyA9ICdjb25uZWN0ZWQnO1xuICAgICAgZGVidWcoJ2Nvbm5lY3RlZCcpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zb2NrZXQub24oJ2Rpc2Nvbm5lY3QnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNvY2tldC5zdGF0dXMgPSAnZGlzY29ubmVjdGVkJztcbiAgICAgIGRlYnVnKCdkaXNjb25uZWN0Jyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNvY2tldC5vbignZXJyb3InLCAoZXJyKSA9PiB7XG4gICAgICB0aGlzLnNvY2tldC5zdGF0dXMgPSAnZmFpbGVkJztcbiAgICAgIHdhcm5pbmcoJ2Vycm9yJywgZXJyKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc29ja2V0Lm9uKCdyZWNvbm5lY3QnLCAoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zb2NrZXQuc3RhdHVzID0gJ2Nvbm5lY3RlZCc7XG4gICAgICBkZWJ1ZygncmVjb25uZWN0JywgZGF0YSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNvY2tldC5vbigncmVjb25uZWN0X2F0dGVtcHQnLCAoKSA9PiB7XG4gICAgICBkZWJ1ZygncmVjb25uZWN0X2F0dGVtcHQnKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc29ja2V0Lm9uKCdyZWNvbm5lY3RpbmcnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNvY2tldC5zdGF0dXMgPSAncmVjb25uZWN0aW5nJztcbiAgICAgIGRlYnVnKCdyZWNvbm5lY3RpbmcnKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc29ja2V0Lm9uKCdyZWNvbm5lY3RfZmFpbGVkJywgKGVycm9yKSA9PiB7XG4gICAgICB0aGlzLnNvY2tldC5zdGF0dXMgPSAnZmFpbGVkJztcbiAgICAgIHdhcm5pbmcoJ3JlY29ubmVjdF9mYWlsZWQnLCBlcnJvcik7XG4gICAgfSk7XG4gIH1cblxuICBtZXJnZU9wdGlvbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICByZWNvbm5lY3Rpb246IHRydWUsXG4gICAgICByZWNvbm5lY3Rpb25BdHRlbXB0czogSW5maW5pdHksXG4gICAgICByZWNvbm5lY3Rpb25EZWxheTogMSAqIDEwMDAsXG4gICAgICByZWNvbm5lY3Rpb25EZWxheU1heDogNSAqIDEwMDAsXG4gICAgICBhdXRvQ29ubmVjdDogdHJ1ZSxcbiAgICAgIHRyYW5zcG9ydHM6IFsnd2Vic29ja2V0JywgJ3BvbGxpbmcnLCAnbG9uZy1wb2xsaW5nJ10sXG4gICAgICByZWplY3RVbmF1dGhvcml6ZWQ6IHRydWVcbiAgICB9O1xuICAgIHJldHVybiB7IC4uLmRlZmF1bHRPcHRpb25zLCAuLi5vcHRpb25zIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFNvY2tldENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3RoaXMuc29ja2V0fT5cbiAgICAgICAge1JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pfVxuICAgICAgPC9Tb2NrZXRDb250ZXh0LlByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVzID0gKHN0YXRlOiBhbnkpID0+ICh7XG4gIGxvZ2dlZEluOiBzdGF0ZS5hdXRoLmxvZ2dlZEluXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZXMpKFNvY2tldCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgU29ja2V0Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8YW55Pignc29ja2V0Jyk7XG4iLCJpbXBvcnQgU29ja2V0IGZyb20gJy4vU29ja2V0JztcbmltcG9ydCBFdmVudCBmcm9tICcuL0V2ZW50JztcbmltcG9ydCB7IFNvY2tldENvbnRleHQgfSBmcm9tICcuL1NvY2tldENvbnRleHQnO1xuXG5pZiAocHJvY2Vzcy5icm93c2VyKSB7XG4gIGlmICh3aW5kb3cpIHdpbmRvdy5SZWFjdFNvY2tldElPID0geyBTb2NrZXQsIEV2ZW50LCBTb2NrZXRDb250ZXh0IH07XG59XG5cbmV4cG9ydCB7IFNvY2tldCwgRXZlbnQsIFNvY2tldENvbnRleHQgfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1zcHJlYWQgKi9cblxuaW1wb3J0IHsgZ2V0R2xvYmFsQ29uZmlnIH0gZnJvbSAnQHNlcnZpY2VzL2NvbmZpZyc7XG5cbi8qKlxuICogUHJpbnRzIGEgd2FybmluZyBpbiB0aGUgY29uc29sZSBpZiBpdCBleGlzdHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgVGhlIHdhcm5pbmcgbWVzc2FnZS5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgY29uc3Qgd2FybmluZyA9ICguLi5hcmdzKSA9PiB7XG4gIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpO1xuICAvLyBkZWJ1ZyBvbiBkZXZlbG9wbWVudCBhbmQgc3RhZ2luZy5cbiAgaWYgKGNvbmZpZy5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSByZXR1cm47XG5cbiAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb25zb2xlLmVycm9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc29sZS5lcnJvci5hcHBseShjb25zb2xlLCBhcmdzKTtcbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IGlmIHlvdSBlbmFibGVcbiAgICAvLyBcImJyZWFrIG9uIGFsbCBleGNlcHRpb25zXCIgaW4geW91ciBjb25zb2xlLFxuICAgIC8vIGl0IHdvdWxkIHBhdXNlIHRoZSBleGVjdXRpb24gYXQgdGhpcyBsaW5lLlxuXG4gICAgdGhyb3cgbmV3IEVycm9yKGFyZ3Muam9pbignICcpKTtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1lbXB0eSAqL1xuICB9IGNhdGNoIChlKSB7fVxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLWVtcHR5ICovXG59O1xuXG5leHBvcnQgY29uc3QgZGVidWcgPSAoLi4uYXJncykgPT4ge1xuICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgLy8gZGVidWcgb24gZGV2ZWxvcG1lbnQgYW5kIHN0YWdpbmcuXG4gIGlmIChjb25maWcuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykgcmV0dXJuO1xuXG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY29uc29sZS5kZWJ1ZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnNvbGUuZGVidWcuYXBwbHkoY29uc29sZSwgYXJncyk7XG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2R5bmFtaWNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWFjdGlvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlc2VsZWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNvY2tldC5pby1jbGllbnRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==