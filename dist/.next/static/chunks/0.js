(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[0],{

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/EllipsisOutlined.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ant-design/icons-svg/lib/asn/EllipsisOutlined.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This icon file is generated automatically.
Object.defineProperty(exports, "__esModule", { value: true });
var EllipsisOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, "name": "ellipsis", "theme": "outlined" };
exports.default = EllipsisOutlined;


/***/ }),

/***/ "./node_modules/@ant-design/icons/EllipsisOutlined.js":
/*!************************************************************!*\
  !*** ./node_modules/@ant-design/icons/EllipsisOutlined.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _EllipsisOutlined = _interopRequireDefault(__webpack_require__(/*! ./lib/icons/EllipsisOutlined */ "./node_modules/@ant-design/icons/lib/icons/EllipsisOutlined.js"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _default = _EllipsisOutlined;
  exports.default = _default;
  module.exports = _default;

/***/ }),

/***/ "./node_modules/@ant-design/icons/lib/icons/EllipsisOutlined.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@ant-design/icons/lib/icons/EllipsisOutlined.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ "./node_modules/@babel/runtime/helpers/objectSpread2.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _EllipsisOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons-svg/lib/asn/EllipsisOutlined */ "./node_modules/@ant-design/icons-svg/lib/asn/EllipsisOutlined.js"));

var _AntdIcon = _interopRequireDefault(__webpack_require__(/*! ../components/AntdIcon */ "./node_modules/@ant-design/icons/lib/components/AntdIcon.js"));

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var EllipsisOutlined = function EllipsisOutlined(props, ref) {
  return /*#__PURE__*/React.createElement(_AntdIcon.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
    ref: ref,
    icon: _EllipsisOutlined.default
  }));
};

EllipsisOutlined.displayName = 'EllipsisOutlined';

var _default = /*#__PURE__*/React.forwardRef(EllipsisOutlined);

exports.default = _default;

/***/ }),

/***/ "./node_modules/antd/lib/menu/SubMenu.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/menu/SubMenu.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _rcMenu = __webpack_require__(/*! rc-menu */ "./node_modules/rc-menu/es/index.js");

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _omit = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/omit */ "./node_modules/rc-util/lib/omit.js"));

var _MenuContext = _interopRequireDefault(__webpack_require__(/*! ./MenuContext */ "./node_modules/antd/lib/menu/MenuContext.js"));

var _reactNode = __webpack_require__(/*! ../_util/reactNode */ "./node_modules/antd/lib/_util/reactNode.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function SubMenu(props) {
  var _a;

  var popupClassName = props.popupClassName,
      icon = props.icon,
      title = props.title;
  var context = React.useContext(_MenuContext["default"]);
  var prefixCls = context.prefixCls,
      inlineCollapsed = context.inlineCollapsed,
      antdMenuTheme = context.antdMenuTheme;
  var parentPath = (0, _rcMenu.useFullPath)();
  var titleNode;

  if (!icon) {
    titleNode = inlineCollapsed && !parentPath.length && title && typeof title === 'string' ? /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-inline-collapsed-noicon")
    }, title.charAt(0)) : /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-title-content")
    }, title);
  } else {
    // inline-collapsed.md demo 依赖 span 来隐藏文字,有 icon 属性，则内部包裹一个 span
    // ref: https://github.com/ant-design/ant-design/pull/23456
    var titleIsSpan = (0, _reactNode.isValidElement)(title) && title.type === 'span';
    titleNode = /*#__PURE__*/React.createElement(React.Fragment, null, (0, _reactNode.cloneElement)(icon, {
      className: (0, _classnames["default"])((0, _reactNode.isValidElement)(icon) ? (_a = icon.props) === null || _a === void 0 ? void 0 : _a.className : '', "".concat(prefixCls, "-item-icon"))
    }), titleIsSpan ? title : /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-title-content")
    }, title));
  }

  return /*#__PURE__*/React.createElement(_MenuContext["default"].Provider, {
    value: (0, _extends2["default"])((0, _extends2["default"])({}, context), {
      firstLevel: false
    })
  }, /*#__PURE__*/React.createElement(_rcMenu.SubMenu, (0, _extends2["default"])({}, (0, _omit["default"])(props, ['icon']), {
    title: titleNode,
    popupClassName: (0, _classnames["default"])(prefixCls, "".concat(prefixCls, "-").concat(antdMenuTheme), popupClassName)
  })));
}

var _default = SubMenu;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/menu/index.js":
/*!*********************************************!*\
  !*** ./node_modules/antd/lib/menu/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/createSuper.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _rcMenu = _interopRequireWildcard(__webpack_require__(/*! rc-menu */ "./node_modules/rc-menu/es/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _omit = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/omit */ "./node_modules/rc-util/lib/omit.js"));

var _EllipsisOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/EllipsisOutlined */ "./node_modules/@ant-design/icons/EllipsisOutlined.js"));

var _SubMenu = _interopRequireDefault(__webpack_require__(/*! ./SubMenu */ "./node_modules/antd/lib/menu/SubMenu.js"));

var _MenuItem = _interopRequireDefault(__webpack_require__(/*! ./MenuItem */ "./node_modules/antd/lib/menu/MenuItem.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _devWarning = _interopRequireDefault(__webpack_require__(/*! ../_util/devWarning */ "./node_modules/antd/lib/_util/devWarning.js"));

var _Sider = __webpack_require__(/*! ../layout/Sider */ "./node_modules/antd/lib/layout/Sider.js");

var _motion = _interopRequireDefault(__webpack_require__(/*! ../_util/motion */ "./node_modules/antd/lib/_util/motion.js"));

var _reactNode = __webpack_require__(/*! ../_util/reactNode */ "./node_modules/antd/lib/_util/reactNode.js");

var _MenuContext = _interopRequireDefault(__webpack_require__(/*! ./MenuContext */ "./node_modules/antd/lib/menu/MenuContext.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var InternalMenu = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(InternalMenu, _React$Component);

  var _super = (0, _createSuper2["default"])(InternalMenu);

  function InternalMenu(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, InternalMenu);
    _this = _super.call(this, props);

    _this.renderMenu = function (_ref) {
      var getPopupContainer = _ref.getPopupContainer,
          getPrefixCls = _ref.getPrefixCls,
          direction = _ref.direction;
      var rootPrefixCls = getPrefixCls();

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          className = _a.className,
          theme = _a.theme,
          expandIcon = _a.expandIcon,
          restProps = __rest(_a, ["prefixCls", "className", "theme", "expandIcon"]);

      var passedProps = (0, _omit["default"])(restProps, ['siderCollapsed', 'collapsedWidth']);

      var inlineCollapsed = _this.getInlineCollapsed();

      var defaultMotions = {
        horizontal: {
          motionName: "".concat(rootPrefixCls, "-slide-up")
        },
        inline: _motion["default"],
        other: {
          motionName: "".concat(rootPrefixCls, "-zoom-big")
        }
      };
      var prefixCls = getPrefixCls('menu', customizePrefixCls);
      var menuClassName = (0, _classnames["default"])("".concat(prefixCls, "-").concat(theme), className);
      return /*#__PURE__*/React.createElement(_MenuContext["default"].Provider, {
        value: {
          prefixCls: prefixCls,
          inlineCollapsed: inlineCollapsed || false,
          antdMenuTheme: theme,
          direction: direction,
          firstLevel: true
        }
      }, /*#__PURE__*/React.createElement(_rcMenu["default"], (0, _extends2["default"])({
        getPopupContainer: getPopupContainer,
        overflowedIndicator: /*#__PURE__*/React.createElement(_EllipsisOutlined["default"], null),
        overflowedIndicatorPopupClassName: "".concat(prefixCls, "-").concat(theme)
      }, passedProps, {
        inlineCollapsed: inlineCollapsed,
        className: menuClassName,
        prefixCls: prefixCls,
        direction: direction,
        defaultMotions: defaultMotions,
        expandIcon: (0, _reactNode.cloneElement)(expandIcon, {
          className: "".concat(prefixCls, "-submenu-expand-icon")
        })
      })));
    };

    (0, _devWarning["default"])(!('inlineCollapsed' in props && props.mode !== 'inline'), 'Menu', '`inlineCollapsed` should only be used when `mode` is inline.');
    (0, _devWarning["default"])(!(props.siderCollapsed !== undefined && 'inlineCollapsed' in props), 'Menu', '`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.');
    return _this;
  }

  (0, _createClass2["default"])(InternalMenu, [{
    key: "getInlineCollapsed",
    value: function getInlineCollapsed() {
      var _this$props = this.props,
          inlineCollapsed = _this$props.inlineCollapsed,
          siderCollapsed = _this$props.siderCollapsed;

      if (siderCollapsed !== undefined) {
        return siderCollapsed;
      }

      return inlineCollapsed;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, this.renderMenu);
    }
  }]);
  return InternalMenu;
}(React.Component);

InternalMenu.defaultProps = {
  theme: 'light' // or dark

}; // We should keep this as ref-able

var Menu = /*#__PURE__*/function (_React$Component2) {
  (0, _inherits2["default"])(Menu, _React$Component2);

  var _super2 = (0, _createSuper2["default"])(Menu);

  function Menu() {
    (0, _classCallCheck2["default"])(this, Menu);
    return _super2.apply(this, arguments);
  }

  (0, _createClass2["default"])(Menu, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/React.createElement(_Sider.SiderContext.Consumer, null, function (context) {
        return /*#__PURE__*/React.createElement(InternalMenu, (0, _extends2["default"])({}, _this2.props, context));
      });
    }
  }]);
  return Menu;
}(React.Component);

Menu.Divider = _rcMenu.Divider;
Menu.Item = _MenuItem["default"];
Menu.SubMenu = _SubMenu["default"];
Menu.ItemGroup = _rcMenu.ItemGroup;
var _default = Menu;
exports["default"] = _default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL2ljb25zLXN2Zy9saWIvYXNuL0VsbGlwc2lzT3V0bGluZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9pY29ucy9FbGxpcHNpc091dGxpbmVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vaWNvbnMvbGliL2ljb25zL0VsbGlwc2lzT3V0bGluZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9tZW51L1N1Yk1lbnUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9tZW51L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsd0JBQXdCLFVBQVUseUJBQXlCLG1EQUFtRCxnQkFBZ0IsMEJBQTBCLG9JQUFvSSxFQUFFLEdBQUc7QUFDalM7Ozs7Ozs7Ozs7Ozs7QUNKYTtBQUNiO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaURBQWlELG1CQUFPLENBQUMsb0dBQThCOztBQUV2Rix3Q0FBd0MsdUNBQXVDLGtCQUFrQjs7QUFFakc7QUFDQTtBQUNBLDRCOzs7Ozs7Ozs7Ozs7QUNaYTs7QUFFYiw4QkFBOEIsbUJBQU8sQ0FBQyxzSEFBK0M7O0FBRXJGLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4Qzs7QUFFbkY7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQSw0Q0FBNEMsbUJBQU8sQ0FBQyxvR0FBc0M7O0FBRTFGLG9DQUFvQyxtQkFBTyxDQUFDLDRDQUFPOztBQUVuRCwrQ0FBK0MsbUJBQU8sQ0FBQyx3SEFBZ0Q7O0FBRXZHLHVDQUF1QyxtQkFBTyxDQUFDLDJGQUF3Qjs7QUFFdkU7QUFDQTtBQUNBO0FBQ0EsdUhBQXVILFlBQVk7QUFDbkk7QUFDQTtBQUNB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O0FBQ0E7QUFDQTs7QUFFQSwySEFBMkgsY0FBYztBQUN6STtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBGQUEwRjtBQUMxRixPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QiIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbi8vIFRoaXMgaWNvbiBmaWxlIGlzIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEVsbGlwc2lzT3V0bGluZWQgPSB7IFwiaWNvblwiOiB7IFwidGFnXCI6IFwic3ZnXCIsIFwiYXR0cnNcIjogeyBcInZpZXdCb3hcIjogXCI2NCA2NCA4OTYgODk2XCIsIFwiZm9jdXNhYmxlXCI6IFwiZmFsc2VcIiB9LCBcImNoaWxkcmVuXCI6IFt7IFwidGFnXCI6IFwicGF0aFwiLCBcImF0dHJzXCI6IHsgXCJkXCI6IFwiTTE3NiA1MTFhNTYgNTYgMCAxMDExMiAwIDU2IDU2IDAgMTAtMTEyIDB6bTI4MCAwYTU2IDU2IDAgMTAxMTIgMCA1NiA1NiAwIDEwLTExMiAwem0yODAgMGE1NiA1NiAwIDEwMTEyIDAgNTYgNTYgMCAxMC0xMTIgMHpcIiB9IH1dIH0sIFwibmFtZVwiOiBcImVsbGlwc2lzXCIsIFwidGhlbWVcIjogXCJvdXRsaW5lZFwiIH07XG5leHBvcnRzLmRlZmF1bHQgPSBFbGxpcHNpc091dGxpbmVkO1xuIiwiJ3VzZSBzdHJpY3QnO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuICBcbiAgdmFyIF9FbGxpcHNpc091dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKCcuL2xpYi9pY29ucy9FbGxpcHNpc091dGxpbmVkJykpO1xuICBcbiAgZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuICBcbiAgdmFyIF9kZWZhdWx0ID0gX0VsbGlwc2lzT3V0bGluZWQ7XG4gIGV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuICBtb2R1bGUuZXhwb3J0cyA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9vYmplY3RTcHJlYWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RTcHJlYWQyXCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9FbGxpcHNpc091dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMtc3ZnL2xpYi9hc24vRWxsaXBzaXNPdXRsaW5lZFwiKSk7XG5cbnZhciBfQW50ZEljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9jb21wb25lbnRzL0FudGRJY29uXCIpKTtcblxuLy8gR0VORVJBVEUgQlkgLi9zY3JpcHRzL2dlbmVyYXRlLnRzXG4vLyBET04gTk9UIEVESVQgSVQgTUFOVUFMTFlcbnZhciBFbGxpcHNpc091dGxpbmVkID0gZnVuY3Rpb24gRWxsaXBzaXNPdXRsaW5lZChwcm9wcywgcmVmKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfQW50ZEljb24uZGVmYXVsdCwgKDAsIF9vYmplY3RTcHJlYWQyLmRlZmF1bHQpKCgwLCBfb2JqZWN0U3ByZWFkMi5kZWZhdWx0KSh7fSwgcHJvcHMpLCB7fSwge1xuICAgIHJlZjogcmVmLFxuICAgIGljb246IF9FbGxpcHNpc091dGxpbmVkLmRlZmF1bHRcbiAgfSkpO1xufTtcblxuRWxsaXBzaXNPdXRsaW5lZC5kaXNwbGF5TmFtZSA9ICdFbGxpcHNpc091dGxpbmVkJztcblxudmFyIF9kZWZhdWx0ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoRWxsaXBzaXNPdXRsaW5lZCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxudmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcmNNZW51ID0gcmVxdWlyZShcInJjLW1lbnVcIik7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX29taXQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyYy11dGlsL2xpYi9vbWl0XCIpKTtcblxudmFyIF9NZW51Q29udGV4dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vTWVudUNvbnRleHRcIikpO1xuXG52YXIgX3JlYWN0Tm9kZSA9IHJlcXVpcmUoXCIuLi9fdXRpbC9yZWFjdE5vZGVcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZUJhYmVsSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7IHZhciBjYWNoZU5vZGVJbnRlcm9wID0gbmV3IFdlYWtNYXAoKTsgcmV0dXJuIChfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApIHsgcmV0dXJuIG5vZGVJbnRlcm9wID8gY2FjaGVOb2RlSW50ZXJvcCA6IGNhY2hlQmFiZWxJbnRlcm9wOyB9KShub2RlSW50ZXJvcCk7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqLCBub2RlSW50ZXJvcCkgeyBpZiAoIW5vZGVJbnRlcm9wICYmIG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBcImRlZmF1bHRcIjogb2JqIH07IH0gdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoa2V5ICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IGlmIChjYWNoZSkgeyBjYWNoZS5zZXQob2JqLCBuZXdPYmopOyB9IHJldHVybiBuZXdPYmo7IH1cblxuZnVuY3Rpb24gU3ViTWVudShwcm9wcykge1xuICB2YXIgX2E7XG5cbiAgdmFyIHBvcHVwQ2xhc3NOYW1lID0gcHJvcHMucG9wdXBDbGFzc05hbWUsXG4gICAgICBpY29uID0gcHJvcHMuaWNvbixcbiAgICAgIHRpdGxlID0gcHJvcHMudGl0bGU7XG4gIHZhciBjb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChfTWVudUNvbnRleHRbXCJkZWZhdWx0XCJdKTtcbiAgdmFyIHByZWZpeENscyA9IGNvbnRleHQucHJlZml4Q2xzLFxuICAgICAgaW5saW5lQ29sbGFwc2VkID0gY29udGV4dC5pbmxpbmVDb2xsYXBzZWQsXG4gICAgICBhbnRkTWVudVRoZW1lID0gY29udGV4dC5hbnRkTWVudVRoZW1lO1xuICB2YXIgcGFyZW50UGF0aCA9ICgwLCBfcmNNZW51LnVzZUZ1bGxQYXRoKSgpO1xuICB2YXIgdGl0bGVOb2RlO1xuXG4gIGlmICghaWNvbikge1xuICAgIHRpdGxlTm9kZSA9IGlubGluZUNvbGxhcHNlZCAmJiAhcGFyZW50UGF0aC5sZW5ndGggJiYgdGl0bGUgJiYgdHlwZW9mIHRpdGxlID09PSAnc3RyaW5nJyA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pbmxpbmUtY29sbGFwc2VkLW5vaWNvblwiKVxuICAgIH0sIHRpdGxlLmNoYXJBdCgwKSkgOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXRpdGxlLWNvbnRlbnRcIilcbiAgICB9LCB0aXRsZSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gaW5saW5lLWNvbGxhcHNlZC5tZCBkZW1vIOS+nei1liBzcGFuIOadpemakOiXj+aWh+WtlyzmnIkgaWNvbiDlsZ7mgKfvvIzliJnlhoXpg6jljIXoo7nkuIDkuKogc3BhblxuICAgIC8vIHJlZjogaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9wdWxsLzIzNDU2XG4gICAgdmFyIHRpdGxlSXNTcGFuID0gKDAsIF9yZWFjdE5vZGUuaXNWYWxpZEVsZW1lbnQpKHRpdGxlKSAmJiB0aXRsZS50eXBlID09PSAnc3Bhbic7XG4gICAgdGl0bGVOb2RlID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsICgwLCBfcmVhY3ROb2RlLmNsb25lRWxlbWVudCkoaWNvbiwge1xuICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKSgoMCwgX3JlYWN0Tm9kZS5pc1ZhbGlkRWxlbWVudCkoaWNvbikgPyAoX2EgPSBpY29uLnByb3BzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2xhc3NOYW1lIDogJycsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaXRlbS1pY29uXCIpKVxuICAgIH0pLCB0aXRsZUlzU3BhbiA/IHRpdGxlIDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi10aXRsZS1jb250ZW50XCIpXG4gICAgfSwgdGl0bGUpKTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfTWVudUNvbnRleHRbXCJkZWZhdWx0XCJdLlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6ICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIGNvbnRleHQpLCB7XG4gICAgICBmaXJzdExldmVsOiBmYWxzZVxuICAgIH0pXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9yY01lbnUuU3ViTWVudSwgKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCAoMCwgX29taXRbXCJkZWZhdWx0XCJdKShwcm9wcywgWydpY29uJ10pLCB7XG4gICAgdGl0bGU6IHRpdGxlTm9kZSxcbiAgICBwb3B1cENsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkocHJlZml4Q2xzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQoYW50ZE1lbnVUaGVtZSksIHBvcHVwQ2xhc3NOYW1lKVxuICB9KSkpO1xufVxuXG52YXIgX2RlZmF1bHQgPSBTdWJNZW51O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbnZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIikpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIikpO1xuXG52YXIgX2luaGVyaXRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIikpO1xuXG52YXIgX2NyZWF0ZVN1cGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlU3VwZXJcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3JjTWVudSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyYy1tZW51XCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfb21pdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJjLXV0aWwvbGliL29taXRcIikpO1xuXG52YXIgX0VsbGlwc2lzT3V0bGluZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9FbGxpcHNpc091dGxpbmVkXCIpKTtcblxudmFyIF9TdWJNZW51ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9TdWJNZW51XCIpKTtcblxudmFyIF9NZW51SXRlbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vTWVudUl0ZW1cIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIF9kZXZXYXJuaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vX3V0aWwvZGV2V2FybmluZ1wiKSk7XG5cbnZhciBfU2lkZXIgPSByZXF1aXJlKFwiLi4vbGF5b3V0L1NpZGVyXCIpO1xuXG52YXIgX21vdGlvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL191dGlsL21vdGlvblwiKSk7XG5cbnZhciBfcmVhY3ROb2RlID0gcmVxdWlyZShcIi4uL191dGlsL3JlYWN0Tm9kZVwiKTtcblxudmFyIF9NZW51Q29udGV4dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vTWVudUNvbnRleHRcIikpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGVCYWJlbEludGVyb3AgPSBuZXcgV2Vha01hcCgpOyB2YXIgY2FjaGVOb2RlSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7IHJldHVybiAoX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKSB7IHJldHVybiBub2RlSW50ZXJvcCA/IGNhY2hlTm9kZUludGVyb3AgOiBjYWNoZUJhYmVsSW50ZXJvcDsgfSkobm9kZUludGVyb3ApOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaiwgbm9kZUludGVyb3ApIHsgaWYgKCFub2RlSW50ZXJvcCAmJiBvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKGtleSAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbnZhciBfX3Jlc3QgPSB2b2lkIDAgJiYgKHZvaWQgMCkuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgfVxuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG52YXIgSW50ZXJuYWxNZW51ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMyW1wiZGVmYXVsdFwiXSkoSW50ZXJuYWxNZW51LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gKDAsIF9jcmVhdGVTdXBlcjJbXCJkZWZhdWx0XCJdKShJbnRlcm5hbE1lbnUpO1xuXG4gIGZ1bmN0aW9uIEludGVybmFsTWVudShwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2syW1wiZGVmYXVsdFwiXSkodGhpcywgSW50ZXJuYWxNZW51KTtcbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKTtcblxuICAgIF90aGlzLnJlbmRlck1lbnUgPSBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIGdldFBvcHVwQ29udGFpbmVyID0gX3JlZi5nZXRQb3B1cENvbnRhaW5lcixcbiAgICAgICAgICBnZXRQcmVmaXhDbHMgPSBfcmVmLmdldFByZWZpeENscyxcbiAgICAgICAgICBkaXJlY3Rpb24gPSBfcmVmLmRpcmVjdGlvbjtcbiAgICAgIHZhciByb290UHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCk7XG5cbiAgICAgIHZhciBfYSA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGN1c3RvbWl6ZVByZWZpeENscyA9IF9hLnByZWZpeENscyxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWUsXG4gICAgICAgICAgdGhlbWUgPSBfYS50aGVtZSxcbiAgICAgICAgICBleHBhbmRJY29uID0gX2EuZXhwYW5kSWNvbixcbiAgICAgICAgICByZXN0UHJvcHMgPSBfX3Jlc3QoX2EsIFtcInByZWZpeENsc1wiLCBcImNsYXNzTmFtZVwiLCBcInRoZW1lXCIsIFwiZXhwYW5kSWNvblwiXSk7XG5cbiAgICAgIHZhciBwYXNzZWRQcm9wcyA9ICgwLCBfb21pdFtcImRlZmF1bHRcIl0pKHJlc3RQcm9wcywgWydzaWRlckNvbGxhcHNlZCcsICdjb2xsYXBzZWRXaWR0aCddKTtcblxuICAgICAgdmFyIGlubGluZUNvbGxhcHNlZCA9IF90aGlzLmdldElubGluZUNvbGxhcHNlZCgpO1xuXG4gICAgICB2YXIgZGVmYXVsdE1vdGlvbnMgPSB7XG4gICAgICAgIGhvcml6b250YWw6IHtcbiAgICAgICAgICBtb3Rpb25OYW1lOiBcIlwiLmNvbmNhdChyb290UHJlZml4Q2xzLCBcIi1zbGlkZS11cFwiKVxuICAgICAgICB9LFxuICAgICAgICBpbmxpbmU6IF9tb3Rpb25bXCJkZWZhdWx0XCJdLFxuICAgICAgICBvdGhlcjoge1xuICAgICAgICAgIG1vdGlvbk5hbWU6IFwiXCIuY29uY2F0KHJvb3RQcmVmaXhDbHMsIFwiLXpvb20tYmlnXCIpXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdtZW51JywgY3VzdG9taXplUHJlZml4Q2xzKTtcbiAgICAgIHZhciBtZW51Q2xhc3NOYW1lID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KHRoZW1lKSwgY2xhc3NOYW1lKTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfTWVudUNvbnRleHRbXCJkZWZhdWx0XCJdLlByb3ZpZGVyLCB7XG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICAgICAgaW5saW5lQ29sbGFwc2VkOiBpbmxpbmVDb2xsYXBzZWQgfHwgZmFsc2UsXG4gICAgICAgICAgYW50ZE1lbnVUaGVtZTogdGhlbWUsXG4gICAgICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb24sXG4gICAgICAgICAgZmlyc3RMZXZlbDogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfcmNNZW51W1wiZGVmYXVsdFwiXSwgKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHtcbiAgICAgICAgZ2V0UG9wdXBDb250YWluZXI6IGdldFBvcHVwQ29udGFpbmVyLFxuICAgICAgICBvdmVyZmxvd2VkSW5kaWNhdG9yOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfRWxsaXBzaXNPdXRsaW5lZFtcImRlZmF1bHRcIl0sIG51bGwpLFxuICAgICAgICBvdmVyZmxvd2VkSW5kaWNhdG9yUG9wdXBDbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItXCIpLmNvbmNhdCh0aGVtZSlcbiAgICAgIH0sIHBhc3NlZFByb3BzLCB7XG4gICAgICAgIGlubGluZUNvbGxhcHNlZDogaW5saW5lQ29sbGFwc2VkLFxuICAgICAgICBjbGFzc05hbWU6IG1lbnVDbGFzc05hbWUsXG4gICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgICBkaXJlY3Rpb246IGRpcmVjdGlvbixcbiAgICAgICAgZGVmYXVsdE1vdGlvbnM6IGRlZmF1bHRNb3Rpb25zLFxuICAgICAgICBleHBhbmRJY29uOiAoMCwgX3JlYWN0Tm9kZS5jbG9uZUVsZW1lbnQpKGV4cGFuZEljb24sIHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc3VibWVudS1leHBhbmQtaWNvblwiKVxuICAgICAgICB9KVxuICAgICAgfSkpKTtcbiAgICB9O1xuXG4gICAgKDAsIF9kZXZXYXJuaW5nW1wiZGVmYXVsdFwiXSkoISgnaW5saW5lQ29sbGFwc2VkJyBpbiBwcm9wcyAmJiBwcm9wcy5tb2RlICE9PSAnaW5saW5lJyksICdNZW51JywgJ2BpbmxpbmVDb2xsYXBzZWRgIHNob3VsZCBvbmx5IGJlIHVzZWQgd2hlbiBgbW9kZWAgaXMgaW5saW5lLicpO1xuICAgICgwLCBfZGV2V2FybmluZ1tcImRlZmF1bHRcIl0pKCEocHJvcHMuc2lkZXJDb2xsYXBzZWQgIT09IHVuZGVmaW5lZCAmJiAnaW5saW5lQ29sbGFwc2VkJyBpbiBwcm9wcyksICdNZW51JywgJ2BpbmxpbmVDb2xsYXBzZWRgIG5vdCBjb250cm9sIE1lbnUgdW5kZXIgU2lkZXIuIFNob3VsZCBzZXQgYGNvbGxhcHNlZGAgb24gU2lkZXIgaW5zdGVhZC4nKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMltcImRlZmF1bHRcIl0pKEludGVybmFsTWVudSwgW3tcbiAgICBrZXk6IFwiZ2V0SW5saW5lQ29sbGFwc2VkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldElubGluZUNvbGxhcHNlZCgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgaW5saW5lQ29sbGFwc2VkID0gX3RoaXMkcHJvcHMuaW5saW5lQ29sbGFwc2VkLFxuICAgICAgICAgIHNpZGVyQ29sbGFwc2VkID0gX3RoaXMkcHJvcHMuc2lkZXJDb2xsYXBzZWQ7XG5cbiAgICAgIGlmIChzaWRlckNvbGxhcHNlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBzaWRlckNvbGxhcHNlZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGlubGluZUNvbGxhcHNlZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29uc3VtZXIsIG51bGwsIHRoaXMucmVuZGVyTWVudSk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBJbnRlcm5hbE1lbnU7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbkludGVybmFsTWVudS5kZWZhdWx0UHJvcHMgPSB7XG4gIHRoZW1lOiAnbGlnaHQnIC8vIG9yIGRhcmtcblxufTsgLy8gV2Ugc2hvdWxkIGtlZXAgdGhpcyBhcyByZWYtYWJsZVxuXG52YXIgTWVudSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudDIpIHtcbiAgKDAsIF9pbmhlcml0czJbXCJkZWZhdWx0XCJdKShNZW51LCBfUmVhY3QkQ29tcG9uZW50Mik7XG5cbiAgdmFyIF9zdXBlcjIgPSAoMCwgX2NyZWF0ZVN1cGVyMltcImRlZmF1bHRcIl0pKE1lbnUpO1xuXG4gIGZ1bmN0aW9uIE1lbnUoKSB7XG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazJbXCJkZWZhdWx0XCJdKSh0aGlzLCBNZW51KTtcbiAgICByZXR1cm4gX3N1cGVyMi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczJbXCJkZWZhdWx0XCJdKShNZW51LCBbe1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfU2lkZXIuU2lkZXJDb250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSW50ZXJuYWxNZW51LCAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIF90aGlzMi5wcm9wcywgY29udGV4dCkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBNZW51O1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5NZW51LkRpdmlkZXIgPSBfcmNNZW51LkRpdmlkZXI7XG5NZW51Lkl0ZW0gPSBfTWVudUl0ZW1bXCJkZWZhdWx0XCJdO1xuTWVudS5TdWJNZW51ID0gX1N1Yk1lbnVbXCJkZWZhdWx0XCJdO1xuTWVudS5JdGVtR3JvdXAgPSBfcmNNZW51Lkl0ZW1Hcm91cDtcbnZhciBfZGVmYXVsdCA9IE1lbnU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=