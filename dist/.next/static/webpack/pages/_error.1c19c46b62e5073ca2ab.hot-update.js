webpackHotUpdate_N_E("pages/_error",{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=E%3A%5CprogramData%5CReact%5Cuser%5Cpages%5C_error.tsx!./":
false,

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!./":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_error",
      function () {
        return __webpack_require__(/*! next/dist/pages/_error */ "./node_modules/next/dist/pages/_error.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/pages/_error.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/pages/_error.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js"));

var statusCodes = {
  400: 'Bad Request',
  404: 'This page could not be found',
  405: 'Method Not Allowed',
  500: 'Internal Server Error'
};

function _getInitialProps(_ref) {
  var res = _ref.res,
      err = _ref.err;
  var statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode: statusCode
  };
}
/**
* `Error` component used for handling errors.
*/


var Error = /*#__PURE__*/function (_react$default$Compon) {
  _inherits(Error, _react$default$Compon);

  var _super = _createSuper(Error);

  function Error() {
    _classCallCheck(this, Error);

    return _super.apply(this, arguments);
  }

  _createClass(Error, [{
    key: "render",
    value: function render() {
      var statusCode = this.props.statusCode;
      var title = this.props.title || statusCodes[statusCode] || 'An unexpected error has occurred';
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: styles.error
      }, /*#__PURE__*/_react["default"].createElement(_head["default"], null, /*#__PURE__*/_react["default"].createElement("title", null, statusCode, ": ", title)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("style", {
        dangerouslySetInnerHTML: {
          __html: 'body { margin: 0 }'
        }
      }), statusCode ? /*#__PURE__*/_react["default"].createElement("h1", {
        style: styles.h1
      }, statusCode) : null, /*#__PURE__*/_react["default"].createElement("div", {
        style: styles.desc
      }, /*#__PURE__*/_react["default"].createElement("h2", {
        style: styles.h2
      }, title, "."))));
    }
  }]);

  return Error;
}(_react["default"].Component);

exports["default"] = Error;
Error.displayName = 'ErrorPage';
Error.getInitialProps = _getInitialProps;
Error.origGetInitialProps = _getInitialProps;
var styles = {
  error: {
    color: '#000',
    background: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    height: '100vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  desc: {
    display: 'inline-block',
    textAlign: 'left',
    lineHeight: '49px',
    height: '49px',
    verticalAlign: 'middle'
  },
  h1: {
    display: 'inline-block',
    borderRight: '1px solid rgba(0, 0, 0,.3)',
    margin: 0,
    marginRight: '20px',
    padding: '10px 23px 10px 0',
    fontSize: '24px',
    fontWeight: 500,
    verticalAlign: 'top'
  },
  h2: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: 'inherit',
    margin: 0,
    padding: 0
  }
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
false,

/***/ "./pages/_error.tsx":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1jbGllbnQtcGFnZXMtbG9hZGVyLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vcGFnZXMvX2Vycm9yLnRzeCJdLCJuYW1lcyI6WyJzdGF0dXNDb2RlcyIsInN0YXR1c0NvZGUiLCJyZXMiLCJlcnIiLCJyZW5kZXIiLCJ0aXRsZSIsInN0eWxlcyIsIl9faHRtbCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiRXJyb3IiLCJkaXNwbGF5TmFtZSIsImdldEluaXRpYWxQcm9wcyIsIl9nZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiZXJyb3IiLCJjb2xvciIsImJhY2tncm91bmQiLCJmb250RmFtaWx5IiwiaGVpZ2h0IiwidGV4dEFsaWduIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJkZXNjIiwibGluZUhlaWdodCIsInZlcnRpY2FsQWxpZ24iLCJoMSIsImJvcmRlclJpZ2h0IiwibWFyZ2luIiwibWFyZ2luUmlnaHQiLCJwYWRkaW5nIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiaDIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsd0VBQXdCO0FBQy9DO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTs7QUFDQTs7QUFHQSxJQUFNQSxXQUF1QyxHQUFHO0FBQzlDLE9BRDhDO0FBRTlDLE9BRjhDO0FBRzlDLE9BSDhDO0FBSTlDLE9BSkY7QUFBZ0QsQ0FBaEQ7O0FBWUEsZ0NBR3NEO0FBQUEsTUFINUIsR0FHNEIsUUFINUIsR0FHNEI7QUFBQSxNQUh0RCxHQUdzRCxRQUh0RCxHQUdzRDtBQUNwRCxNQUFNQyxVQUFVLEdBQ2RDLEdBQUcsSUFBSUEsR0FBRyxDQUFWQSxhQUF3QkEsR0FBRyxDQUEzQkEsYUFBeUNDLEdBQUcsR0FBR0EsR0FBRyxDQUFOLGFBRDlDO0FBRUEsU0FBTztBQUFFRixjQUFULEVBQVNBO0FBQUYsR0FBUDtBQUdGO0FBQUE7O0FBR2U7OztJQUFBLEs7Ozs7Ozs7Ozs7Ozs7V0FNYkcsa0JBQVM7QUFDUCxVQUFNLFVBQU4sR0FBdUIsS0FBdkIsTUFBTSxVQUFOO0FBQ0EsVUFBTUMsS0FBSyxHQUNULG9CQUNBTCxXQUFXLENBRFgsVUFDVyxDQURYLElBREY7QUFLQSwwQkFDRTtBQUFLLGFBQUssRUFBRU0sTUFBTSxDQUFsQjtBQUFBLHNCQUNFLGdDQUFDLEtBQUQsZ0NBQ0UsaUVBRkosS0FFSSxDQURGLENBREYsZUFNRSwwREFDRTtBQUFPLCtCQUF1QixFQUFFO0FBQUVDLGdCQUFNLEVBRDFDO0FBQ2tDO0FBQWhDLFFBREYsRUFFR04sVUFBVSxnQkFBRztBQUFJLGFBQUssRUFBRUssTUFBTSxDQUFqQjtBQUFBLFNBQUgsVUFBRyxDQUFILEdBRmIsbUJBR0U7QUFBSyxhQUFLLEVBQUVBLE1BQU0sQ0FBbEI7QUFBQSxzQkFDRTtBQUFJLGFBQUssRUFBRUEsTUFBTSxDQUFqQjtBQUFBLGdCQVhSLEdBV1EsQ0FERixDQUhGLENBTkYsQ0FERjtBQWJ1RTs7OztFQUFoQ0Usa0JBQU1DLFM7OztBQUE1QkMsSyxDQUNaQyxXQURZRCxHQUNFLFdBREZBO0FBQUFBLEssQ0FHWkUsZUFIWUYsR0FHTUcsZ0JBSE5IO0FBQUFBLEssQ0FJWkksbUJBSllKLEdBSVVHLGdCQUpWSDtBQWdDckIsSUFBTUosTUFBNEMsR0FBRztBQUNuRFMsT0FBSyxFQUFFO0FBQ0xDLFNBQUssRUFEQTtBQUVMQyxjQUFVLEVBRkw7QUFHTEMsY0FBVSxFQUhMO0FBS0xDLFVBQU0sRUFMRDtBQU1MQyxhQUFTLEVBTko7QUFPTEMsV0FBTyxFQVBGO0FBUUxDLGlCQUFhLEVBUlI7QUFTTEMsY0FBVSxFQVRMO0FBVUxDLGtCQUFjLEVBWG1DO0FBQzVDLEdBRDRDO0FBY25EQyxNQUFJLEVBQUU7QUFDSkosV0FBTyxFQURIO0FBRUpELGFBQVMsRUFGTDtBQUdKTSxjQUFVLEVBSE47QUFJSlAsVUFBTSxFQUpGO0FBS0pRLGlCQUFhLEVBbkJvQztBQWM3QyxHQWQ2QztBQXNCbkRDLElBQUUsRUFBRTtBQUNGUCxXQUFPLEVBREw7QUFFRlEsZUFBVyxFQUZUO0FBR0ZDLFVBQU0sRUFISjtBQUlGQyxlQUFXLEVBSlQ7QUFLRkMsV0FBTyxFQUxMO0FBTUZDLFlBQVEsRUFOTjtBQU9GQyxjQUFVLEVBUFI7QUFRRlAsaUJBQWEsRUE5Qm9DO0FBc0IvQyxHQXRCK0M7QUFpQ25EUSxJQUFFLEVBQUU7QUFDRkYsWUFBUSxFQUROO0FBRUZDLGNBQVUsRUFGUjtBQUdGUixjQUFVLEVBSFI7QUFJRkksVUFBTSxFQUpKO0FBS0ZFLFdBQU8sRUF0Q1g7QUFpQ007QUFqQytDLENBQXJEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19lcnJvci4xYzE5YzQ2YjYyZTUwNzNjYTJhYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9fZXJyb3JcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCJuZXh0L2Rpc3QvcGFnZXMvX2Vycm9yXCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvaGVhZCdcbmltcG9ydCB7IE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcblxuY29uc3Qgc3RhdHVzQ29kZXM6IHsgW2NvZGU6IG51bWJlcl06IHN0cmluZyB9ID0ge1xuICA0MDA6ICdCYWQgUmVxdWVzdCcsXG4gIDQwNDogJ1RoaXMgcGFnZSBjb3VsZCBub3QgYmUgZm91bmQnLFxuICA0MDU6ICdNZXRob2QgTm90IEFsbG93ZWQnLFxuICA1MDA6ICdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InLFxufVxuXG5leHBvcnQgdHlwZSBFcnJvclByb3BzID0ge1xuICBzdGF0dXNDb2RlOiBudW1iZXJcbiAgdGl0bGU/OiBzdHJpbmdcbn1cblxuZnVuY3Rpb24gX2dldEluaXRpYWxQcm9wcyh7XG4gIHJlcyxcbiAgZXJyLFxufTogTmV4dFBhZ2VDb250ZXh0KTogUHJvbWlzZTxFcnJvclByb3BzPiB8IEVycm9yUHJvcHMge1xuICBjb25zdCBzdGF0dXNDb2RlID1cbiAgICByZXMgJiYgcmVzLnN0YXR1c0NvZGUgPyByZXMuc3RhdHVzQ29kZSA6IGVyciA/IGVyci5zdGF0dXNDb2RlISA6IDQwNFxuICByZXR1cm4geyBzdGF0dXNDb2RlIH1cbn1cblxuLyoqXG4gKiBgRXJyb3JgIGNvbXBvbmVudCB1c2VkIGZvciBoYW5kbGluZyBlcnJvcnMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yPFAgPSB7fT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UCAmIEVycm9yUHJvcHM+IHtcbiAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ0Vycm9yUGFnZSdcblxuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gX2dldEluaXRpYWxQcm9wc1xuICBzdGF0aWMgb3JpZ0dldEluaXRpYWxQcm9wcyA9IF9nZXRJbml0aWFsUHJvcHNcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzdGF0dXNDb2RlIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgdGl0bGUgPVxuICAgICAgdGhpcy5wcm9wcy50aXRsZSB8fFxuICAgICAgc3RhdHVzQ29kZXNbc3RhdHVzQ29kZV0gfHxcbiAgICAgICdBbiB1bmV4cGVjdGVkIGVycm9yIGhhcyBvY2N1cnJlZCdcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuZXJyb3J9PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+XG4gICAgICAgICAgICB7c3RhdHVzQ29kZX06IHt0aXRsZX1cbiAgICAgICAgICA8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHN0eWxlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogJ2JvZHkgeyBtYXJnaW46IDAgfScgfX0gLz5cbiAgICAgICAgICB7c3RhdHVzQ29kZSA/IDxoMSBzdHlsZT17c3R5bGVzLmgxfT57c3RhdHVzQ29kZX08L2gxPiA6IG51bGx9XG4gICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmRlc2N9PlxuICAgICAgICAgICAgPGgyIHN0eWxlPXtzdHlsZXMuaDJ9Pnt0aXRsZX0uPC9oMj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3Qgc3R5bGVzOiB7IFtrOiBzdHJpbmddOiBSZWFjdC5DU1NQcm9wZXJ0aWVzIH0gPSB7XG4gIGVycm9yOiB7XG4gICAgY29sb3I6ICcjMDAwJyxcbiAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gICAgZm9udEZhbWlseTpcbiAgICAgICctYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFJvYm90bywgXCJTZWdvZSBVSVwiLCBcIkZpcmEgU2Fuc1wiLCBBdmVuaXIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJMdWNpZGEgR3JhbmRlXCIsIHNhbnMtc2VyaWYnLFxuICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIH0sXG5cbiAgZGVzYzoge1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgIGxpbmVIZWlnaHQ6ICc0OXB4JyxcbiAgICBoZWlnaHQ6ICc0OXB4JyxcbiAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgfSxcblxuICBoMToge1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIGJvcmRlclJpZ2h0OiAnMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwuMyknLFxuICAgIG1hcmdpbjogMCxcbiAgICBtYXJnaW5SaWdodDogJzIwcHgnLFxuICAgIHBhZGRpbmc6ICcxMHB4IDIzcHggMTBweCAwJyxcbiAgICBmb250U2l6ZTogJzI0cHgnLFxuICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJyxcbiAgfSxcblxuICBoMjoge1xuICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgbGluZUhlaWdodDogJ2luaGVyaXQnLFxuICAgIG1hcmdpbjogMCxcbiAgICBwYWRkaW5nOiAwLFxuICB9LFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==