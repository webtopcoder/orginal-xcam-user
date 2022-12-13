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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/auth/login/user.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./pages/auth/index.less":
/*!*******************************!*\
  !*** ./pages/auth/index.less ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/auth/login/user.tsx":
/*!***********************************!*\
  !*** ./pages/auth/login/user.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_auth_login_user_login_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/auth/login/user-login-form */ "./src/components/auth/login/user-login-form.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_auth_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @redux/auth/actions */ "./src/redux/auth/actions.ts");
/* harmony import */ var _components_common_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/common/layout */ "./src/components/common/layout/index.ts");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../index.less */ "./pages/auth/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "E:\\programData\\React\\user\\pages\\auth\\login\\user.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class Login extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "rememberMe", false);

    _defineProperty(this, "submit", data => {
      const {
        login: dispatchLogin
      } = this.props;
      dispatchLogin(_objectSpread(_objectSpread({}, data), {}, {
        remember: this.rememberMe
      }));
    });
  }

  componentWillUnmount() {
    const {
      resetLoginData: dispatchReset
    } = this.props;
    dispatchReset();
  }

  render() {
    const {
      requesting,
      error,
      success,
      ui
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 11
      }
    }, "User sign-in")), __jsx("div", {
      className: "register-page",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "form-register-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }
    }, __jsx(_components_auth_login_user_login_form__WEBPACK_IMPORTED_MODULE_2__["default"], {
      singularTextModel: (ui === null || ui === void 0 ? void 0 : ui.singularTextModel) || 'Performer',
      requesting: requesting,
      submit: this.submit.bind(this),
      onRemember: value => {
        this.rememberMe = value;
      },
      error: error,
      success: success,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }
    })), __jsx(_components_common_layout__WEBPACK_IMPORTED_MODULE_5__["FormRegisterPlaceHolder"], {
      ui: ui,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 11
      }
    })));
  }

}

_defineProperty(Login, "layout", 'auth');

_defineProperty(Login, "authenticate", false);

const mapStates = state => _objectSpread(_objectSpread({}, state.auth.userLogin), {}, {
  ui: state.ui
});

const mapDispatch = {
  login: _redux_auth_actions__WEBPACK_IMPORTED_MODULE_4__["login"],
  resetLoginData: _redux_auth_actions__WEBPACK_IMPORTED_MODULE_4__["resetLoginData"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStates, mapDispatch)(Login));

/***/ }),

/***/ "./src/components/auth/login/footer-login-form.tsx":
/*!*********************************************************!*\
  !*** ./src/components/auth/login/footer-login-form.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\programData\\React\\user\\src\\components\\auth\\login\\footer-login-form.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const {
  Item: FormItem
} = antd__WEBPACK_IMPORTED_MODULE_2__["Form"];

const FormFooterLogin = ({
  account,
  singularTextModel
}) => __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 3
  }
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  span: 24,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }
}, account !== 'studio' && account === 'user' ? __jsx(FormItem, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }
}, "Want to be a Member?", ' ', __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/auth/register/user",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 11
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 13
  }
}, "Signup here"))) : account === 'performer' && __jsx(FormItem, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }
}, "Want to be a", ' ', singularTextModel || 'Performer', "?", ' ', __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/auth/register/model",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 11
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 13
  }
}, "Signup here"))), account === 'studio' && __jsx(FormItem, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 7
  }
}, 'Don\'t have account yet? ', __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/studio/register",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 9
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 11
  }
}, "Signup now")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  span: 24,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 5
  }
}, account === 'user' && __jsx(FormItem, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 7
  }
}, "Are you a", ' ', singularTextModel || 'Performer', "?", ' ', __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/auth/login/performer",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 9
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 11
  }
}, "Login here"))), account === 'performer' && __jsx(FormItem, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 7
  }
}, "Are you a Member?", ' ', __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/auth/login/user",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 9
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 11
  }
}, "Login here")))));

FormFooterLogin.defaultProps = {
  singularTextModel: 'Performer'
};
/* harmony default export */ __webpack_exports__["default"] = (FormFooterLogin);

/***/ }),

/***/ "./src/components/auth/login/user-login-form.tsx":
/*!*******************************************************!*\
  !*** ./src/components/auth/login/user-login-form.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lib/utils */ "./src/lib/utils.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_redux_ui_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/redux/ui/actions */ "./src/redux/ui/actions.ts");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/index */ "./src/services/index.ts");
/* harmony import */ var src_components_common_recaptcha__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/common/recaptcha */ "./src/components/common/recaptcha.tsx");
/* harmony import */ var _footer_login_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer-login-form */ "./src/components/auth/login/footer-login-form.tsx");
var _jsxFileName = "E:\\programData\\React\\user\\src\\components\\auth\\login\\user-login-form.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const FormItem = antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item;

const LoginForm = ({
  requesting,
  submit,
  error,
  success,
  onRemember,
  singularTextModel,
  googleReCaptchaEnabled,
  googleReCaptchaSiteKey
}) => {
  const reCAPTCHARef = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
  const {
    0: reCAPTCHAError,
    1: setreCAPTCHAError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [form] = antd__WEBPACK_IMPORTED_MODULE_2__["Form"].useForm();

  const onPressEnter = () => {
    form.submit();
  };

  const onFinish = async data => {
    try {
      if (googleReCaptchaEnabled) {
        const token = reCAPTCHARef.current.getValue(); // const token = await reCAPTCHARef.current.executeAsync();

        if (!token) {
          setreCAPTCHAError('Please verify that you are not a robot.');
          return;
        }

        reCAPTCHARef.current.reset();
        setreCAPTCHAError('');
        await _services_index__WEBPACK_IMPORTED_MODULE_6__["utilsService"].verifyRecaptcha(token);
      }

      submit(data);
    } catch (e) {
      if (googleReCaptchaEnabled && reCAPTCHARef.current.getValue()) {
        reCAPTCHARef.current.reset();
      }

      const err = await Promise.resolve(e);
      antd__WEBPACK_IMPORTED_MODULE_2__["message"].error(Object(_lib_utils__WEBPACK_IMPORTED_MODULE_3__["getResponseError"])(err));
    }
  };

  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    layout: "vertical",
    onFinish: onFinish,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, "User Sign-in"), __jsx(FormItem, {
    hasFeedback: true,
    label: "Email",
    name: "email",
    rules: [{
      type: 'email',
      message: 'The input is not valid E-mail!'
    }, {
      required: true,
      message: 'Please input your email!'
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    onPressEnter: onPressEnter,
    placeholder: "youremail@example.com",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  })), __jsx(FormItem, {
    hasFeedback: true,
    label: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Space"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 11
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 13
      }
    }, "Password")),
    className: "input-password",
    name: "password",
    rules: [{
      required: true,
      message: 'Please input your password!'
    }, {
      min: 6,
      max: 14,
      message: '6-14 characters'
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].Password, {
    onPressEnter: onPressEnter,
    placeholder: "Password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  })), __jsx(FormItem, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }, __jsx(src_components_common_recaptcha__WEBPACK_IMPORTED_MODULE_7__["default"], {
    ref: reCAPTCHARef,
    googleReCaptchaEnabled: googleReCaptchaEnabled,
    googleReCaptchaSiteKey: googleReCaptchaSiteKey,
    error: reCAPTCHAError,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  })), __jsx("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      margin: '15px 0'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
    onChange: e => onRemember(e.target.checked),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 9
    }
  }, "Remember me"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/auth/forgot-password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 11
    }
  }, "Forgot password?"))), (error || success) && __jsx(FormItem, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }
  }, error && __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Alert"], {
    message: "Error",
    description: error.message && error.message === 'ACCOUNT_INACTIVE' ? 'You do not have permission' : Object(_lib_utils__WEBPACK_IMPORTED_MODULE_3__["getResponseError"])(error),
    type: "error",
    showIcon: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }
  }), success && __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Alert"], {
    message: "Login success",
    type: "success",
    description: "Redirecting...",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 13
    }
  })), __jsx(FormItem, {
    className: "row-button-auth",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "primary",
    htmlType: "submit",
    disabled: requesting,
    loading: requesting,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 9
    }
  }, "Sign-in")), __jsx(_footer_login_form__WEBPACK_IMPORTED_MODULE_8__["default"], {
    account: "user",
    singularTextModel: singularTextModel,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 7
    }
  }));
};

const mapStates = state => _objectSpread({}, state.ui);

const mapDispatch = {
  updateUIValue: src_redux_ui_actions__WEBPACK_IMPORTED_MODULE_5__["updateUIValue"]
};
LoginForm.defaultProps = {
  googleReCaptchaEnabled: false,
  googleReCaptchaSiteKey: ''
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStates, mapDispatch)(LoginForm));

/***/ }),

/***/ "./src/components/common/layout/form-register-placeholder.tsx":
/*!********************************************************************!*\
  !*** ./src/components/common/layout/form-register-placeholder.tsx ***!
  \********************************************************************/
/*! exports provided: FormRegisterPlaceHolder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRegisterPlaceHolder", function() { return FormRegisterPlaceHolder; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\programData\\React\\user\\src\\components\\common\\layout\\form-register-placeholder.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const FormRegisterPlaceHolder = ({
  ui
}) => __jsx("div", {
  className: "form-register-placeholder",
  style: ui !== null && ui !== void 0 && ui.placeholderLoginUrl ? {
    backgroundImage: `url(${ui.placeholderLoginUrl})`
  } : {},
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 3
  }
});

/***/ }),

/***/ "./src/components/common/layout/index.ts":
/*!***********************************************!*\
  !*** ./src/components/common/layout/index.ts ***!
  \***********************************************/
/*! exports provided: FormRegisterPlaceHolder, Popup18PlusContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_register_placeholder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-register-placeholder */ "./src/components/common/layout/form-register-placeholder.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormRegisterPlaceHolder", function() { return _form_register_placeholder__WEBPACK_IMPORTED_MODULE_0__["FormRegisterPlaceHolder"]; });

/* harmony import */ var _popup_18plus_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup-18plus-content */ "./src/components/common/layout/popup-18plus-content.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Popup18PlusContent", function() { return _popup_18plus_content__WEBPACK_IMPORTED_MODULE_1__["Popup18PlusContent"]; });




/***/ }),

/***/ "./src/components/common/layout/popup-18plus-content.less":
/*!****************************************************************!*\
  !*** ./src/components/common/layout/popup-18plus-content.less ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/common/layout/popup-18plus-content.tsx":
/*!***************************************************************!*\
  !*** ./src/components/common/layout/popup-18plus-content.tsx ***!
  \***************************************************************/
/*! exports provided: Popup18PlusContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Popup18PlusContent", function() { return Popup18PlusContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _popup_18plus_content_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup-18plus-content.less */ "./src/components/common/layout/popup-18plus-content.less");
/* harmony import */ var _popup_18plus_content_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_popup_18plus_content_less__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\programData\\React\\user\\src\\components\\common\\layout\\popup-18plus-content.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Popup18PlusContent() {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "confirmage__header text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, "YOU MUST BE OVER 18 AND AGREE TO THE TERMS BELOW BEFORE CONTINUING:"), __jsx("div", {
    className: "confirmage__description text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "scroll",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, "You also agree to share your information with Duodecad ITS Learn More", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }), "You also agree to share information with Duodecad ITS because the website will not work properly without this agreement.", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }), "An important part of the cam material is provided by Duodecad ITS:", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }), "The profiles content and photographs", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }), "The player and his functionalities", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }), "The payment processor", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }), "...", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }), "Therefore, every page is depending on Duodecad ITS and can\u2019t be dissociated with (users URL) service."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, "This website contains information, links, images and videos of sexually explicit material (collectively, the \"Sexually Explicit Material\"). Do NOT continue if: (i) you are not at least 18 years of age or the age of majority in each and every jurisdiction in which you will or may view the Sexually Explicit Material, whichever is higher (the \"Age of Majority\"), (ii) such material offends you, or (iii) viewing the Sexually Explicit Material is not legal in each and every community where you choose to view it."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, "By choosing to enter this website you are affirming under oath and penalties of perjury pursuant to Title 28 U.S.C. \xA7 1746 and other applicable statutes and laws that all of the following statements are true and correct:"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "I have attained the Age of Majority in my jurisdiction;"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, "The sexually explicit material I am viewing is for my own personal use and I will not expose any minors to the material;"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, "I desire to receive/view sexually explicit material;"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, "I believe that as an adult it is my inalienable constitutional right to receive/view sexually explicit material;"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, "I believe that sexual acts between consenting adults are neither offensive nor obscene;"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, "The viewing, reading and downloading of sexually explicit materials does not violate the standards of any community, town, city, state or country where I will be viewing, reading and/or downloading the Sexually Explicit Materials;"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, "I am solely responsible for any false disclosures or legal ramifications of viewing, reading or downloading any material appearing on this site. I further agree that neither this website nor its affiliates will be held responsible for any legal ramifications arising from any fraudulent entry into or use of this website;"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, "I understand that my use of this website is governed by the website's", __jsx("a", {
    href: "/page/terms-and-conditions",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  }, "Terms"), ' ', "which I have reviewed and accepted, and I agree to be bound by such Terms."), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, "I agree that by entering this website, I am subjecting myself, and any business entity in which I have any legal or equitable interest, to the personal jurisdiction of the State of Florida, Miami-Dade County, should any dispute arise at any time between this website, myself and/or such business entity;"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, "This warning page constitutes a legally binding agreement between me, this website and/or any business in which I have any legal or equitable interest. If any provision of this Agreement is found to be unenforceable, the remainder shall be enforced as fully as possible and the unenforceable provision shall be deemed modified to the limited extent required to permit its enforcement in a manner most closely representing the intentions as expressed herein;"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, "All performers on this site are over the age of 18, have consented being photographed and/or filmed, believe it is their right to engage in consensual sexual acts for the entertainment and education of other adults and I believe it is my right as an adult to watch them doing what adults do;"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, "The videos and images in this site are intended to be used by responsible adults as sexual aids, to provide sexual education and to provide sexual entertainment;"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, "I understand that providing a false declaration under the penalties of perjury is a criminal offense; and"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, "I agree that this agreement is governed by the Electronic Signatures in Global and National Commerce Act (commonly known as the \"E-Sign Act\"), 15 U.S.C. \xA7 7000, et seq., and by choosing to click on \"I Agree. Enter Here\" and indicating my agreement to be bound by the terms of this agreement, I affirmatively adopt the signature line below as my signature and the manifestation of my consent to be bound by the terms of this agreement."))), __jsx("p", {
    className: "notice-txt",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, "THIS SITE ACTIVELY COOPERATES WITH LAW ENFORCEMENT IN ALL INSTANCES OF SUSPECTED ILLEGAL USE OF THE SERVICE, ESPECIALLY IN THE CASE OF UNDERAGE USAGE OF THE SERVICE.")));
}

/***/ }),

/***/ "./src/components/common/recaptcha.less":
/*!**********************************************!*\
  !*** ./src/components/common/recaptcha.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/common/recaptcha.tsx":
/*!*********************************************!*\
  !*** ./src/components/common/recaptcha.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _recaptcha_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recaptcha.less */ "./src/components/common/recaptcha.less");
/* harmony import */ var _recaptcha_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_recaptcha_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-google-recaptcha */ "react-google-recaptcha");
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "E:\\programData\\React\\user\\src\\components\\common\\recaptcha.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const GoogleReCaptcha = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((props, ref) => {
  const {
    googleReCaptchaEnabled,
    googleReCaptchaSiteKey,
    error
  } = props;

  const onRouteChangeStart = () => {
    if (window.grecaptcha) {
      window.grecaptcha.reset();
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.events.on('routeChangeStart', onRouteChangeStart);
    return () => {
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.events.off('routeChangeStart', onRouteChangeStart);
    };
  }, []);
  return __jsx("div", {
    className: "recaptcha-box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, googleReCaptchaEnabled && __jsx(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_2___default.a, {
    ref: ref // size={size}
    // badge="inline"
    ,
    sitekey: googleReCaptchaSiteKey,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }), error && __jsx("p", {
    className: "recaptcha-error-message",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, error || 'Please verify that you are not a robot.'));
});
/* harmony default export */ __webpack_exports__["default"] = (GoogleReCaptcha);

/***/ }),

/***/ "./src/lib/date.ts":
/*!*************************!*\
  !*** ./src/lib/date.ts ***!
  \*************************/
/*! exports provided: formatDate, converDuration, parseAge, getAge, formatDuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "converDuration", function() { return converDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseAge", function() { return parseAge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAge", function() { return getAge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDuration", function() { return formatDuration; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

function formatDate(date, format = 'DD/MM/YYYY HH:mm:ss') {
  return moment__WEBPACK_IMPORTED_MODULE_0___default()(date).format(format);
}
function converDuration(duration, format = 'HH:mm') {
  return moment__WEBPACK_IMPORTED_MODULE_0___default.a.utc(moment__WEBPACK_IMPORTED_MODULE_0___default.a.duration(duration, 'milliseconds').asMilliseconds()).format(format);
}
function parseAge(date, format = 'MMMM DD, YYYY') {
  return moment__WEBPACK_IMPORTED_MODULE_0___default()(date).format(format);
}
function getAge(date) {
  return moment__WEBPACK_IMPORTED_MODULE_0___default()().diff(moment__WEBPACK_IMPORTED_MODULE_0___default()(date).format('YYYY-MM-DD'), 'years').toString();
}
function formatDuration(s) {
  const hours = Math.floor(s / 3600);
  const minutes = Math.floor((s - hours * 3600) / 60);
  const seconds = s - hours * 3600 - minutes * 60;
  return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

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

/***/ "./src/lib/index.ts":
/*!**************************!*\
  !*** ./src/lib/index.ts ***!
  \**************************/
/*! exports provided: isHasInternetConnection, createSagas, createAction, createAsyncAction, createAsyncActions, createSelectorsA, handleActions, createReducers, createSelectors, createSelector, createJSSelectors, isUrl, generateUuid, capitalizeFirstLetter, unitPrices, formatDate, converDuration, parseAge, getAge, formatDuration, validateMessages, formItemLayout, tailFormItemLayout, defaultColor, arrayToTree, pathMatchRegexp, queryAncestors, getResponseError, isMobile, getUrlParameter, DAY_OF_WEEK, getDefaultSchedule, getNextShow, getSearchData, getBase64, convertConnectionData, checkUserLogin, getCurrentUser, isPhysicalProduct, chatBoxMessageClassName, formatDataWeight, formatDataHeight, formatPrice, usernamePatternRule, beforeAvatarUpload, DEFAULT_OFFLINE_IMAGE_URL, DEFAULT_PRIVATE_IMAGE_URL, DEFAULT_GROUP_IMAGE_URL, DEFAULT_ONLINE_IMAGE_URL, getPoster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internet */ "./src/lib/internet.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isHasInternetConnection", function() { return _internet__WEBPACK_IMPORTED_MODULE_0__["isHasInternetConnection"]; });

/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redux */ "./src/lib/redux.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSagas", function() { return _redux__WEBPACK_IMPORTED_MODULE_1__["createSagas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAction", function() { return _redux__WEBPACK_IMPORTED_MODULE_1__["createAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAsyncAction", function() { return _redux__WEBPACK_IMPORTED_MODULE_1__["createAsyncAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAsyncActions", function() { return _redux__WEBPACK_IMPORTED_MODULE_1__["createAsyncActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSelectorsA", function() { return _redux__WEBPACK_IMPORTED_MODULE_1__["createSelectorsA"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleActions", function() { return _redux__WEBPACK_IMPORTED_MODULE_1__["handleActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createReducers", function() { return _redux__WEBPACK_IMPORTED_MODULE_1__["createReducers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSelectors", function() { return _redux__WEBPACK_IMPORTED_MODULE_1__["createSelectors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSelector", function() { return _redux__WEBPACK_IMPORTED_MODULE_1__["createSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createJSSelectors", function() { return _redux__WEBPACK_IMPORTED_MODULE_1__["createJSSelectors"]; });

/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./string */ "./src/lib/string.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUrl", function() { return _string__WEBPACK_IMPORTED_MODULE_2__["isUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateUuid", function() { return _string__WEBPACK_IMPORTED_MODULE_2__["generateUuid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "capitalizeFirstLetter", function() { return _string__WEBPACK_IMPORTED_MODULE_2__["capitalizeFirstLetter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unitPrices", function() { return _string__WEBPACK_IMPORTED_MODULE_2__["unitPrices"]; });

/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date */ "./src/lib/date.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return _date__WEBPACK_IMPORTED_MODULE_3__["formatDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "converDuration", function() { return _date__WEBPACK_IMPORTED_MODULE_3__["converDuration"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseAge", function() { return _date__WEBPACK_IMPORTED_MODULE_3__["parseAge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAge", function() { return _date__WEBPACK_IMPORTED_MODULE_3__["getAge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDuration", function() { return _date__WEBPACK_IMPORTED_MODULE_3__["formatDuration"]; });

/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message */ "./src/lib/message.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateMessages", function() { return _message__WEBPACK_IMPORTED_MODULE_4__["validateMessages"]; });

/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout */ "./src/lib/layout.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formItemLayout", function() { return _layout__WEBPACK_IMPORTED_MODULE_5__["formItemLayout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tailFormItemLayout", function() { return _layout__WEBPACK_IMPORTED_MODULE_5__["tailFormItemLayout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultColor", function() { return _layout__WEBPACK_IMPORTED_MODULE_5__["defaultColor"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./src/lib/utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayToTree", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["arrayToTree"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pathMatchRegexp", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["pathMatchRegexp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryAncestors", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["queryAncestors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getResponseError", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["getResponseError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["isMobile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUrlParameter", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["getUrlParameter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DAY_OF_WEEK", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["DAY_OF_WEEK"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDefaultSchedule", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["getDefaultSchedule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNextShow", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["getNextShow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSearchData", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["getSearchData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBase64", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["getBase64"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertConnectionData", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["convertConnectionData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkUserLogin", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["checkUserLogin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentUser", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["getCurrentUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPhysicalProduct", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["isPhysicalProduct"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chatBoxMessageClassName", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["chatBoxMessageClassName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDataWeight", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["formatDataWeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDataHeight", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["formatDataHeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatPrice", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["formatPrice"]; });

/* harmony import */ var _rules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rules */ "./src/lib/rules.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usernamePatternRule", function() { return _rules__WEBPACK_IMPORTED_MODULE_7__["usernamePatternRule"]; });

/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./file */ "./src/lib/file.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "beforeAvatarUpload", function() { return _file__WEBPACK_IMPORTED_MODULE_8__["beforeAvatarUpload"]; });

/* harmony import */ var _stream__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./stream */ "./src/lib/stream.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_OFFLINE_IMAGE_URL", function() { return _stream__WEBPACK_IMPORTED_MODULE_9__["DEFAULT_OFFLINE_IMAGE_URL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PRIVATE_IMAGE_URL", function() { return _stream__WEBPACK_IMPORTED_MODULE_9__["DEFAULT_PRIVATE_IMAGE_URL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_GROUP_IMAGE_URL", function() { return _stream__WEBPACK_IMPORTED_MODULE_9__["DEFAULT_GROUP_IMAGE_URL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_ONLINE_IMAGE_URL", function() { return _stream__WEBPACK_IMPORTED_MODULE_9__["DEFAULT_ONLINE_IMAGE_URL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPoster", function() { return _stream__WEBPACK_IMPORTED_MODULE_9__["getPoster"]; });












/***/ }),

/***/ "./src/lib/internet.ts":
/*!*****************************!*\
  !*** ./src/lib/internet.ts ***!
  \*****************************/
/*! exports provided: isHasInternetConnection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHasInternetConnection", function() { return isHasInternetConnection; });
const INTERNET_CHECK_URL = 'https://google.com';
const isHasInternetConnection = async () => {
  try {
    const res = await fetch(INTERNET_CHECK_URL, {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        Pragma: 'no-cache',
        Expires: 0
      }
    });

    if (res.status === 404 || res.status === 401 || res.status === 403 || res.status === 500 || res.status >= 200 && res.status <= 300) {
      return true;
    }
  } catch (exception) {
    // eslint-disable-next-line no-console
    console.log(exception);
  }

  return false;
};

/***/ }),

/***/ "./src/lib/layout.ts":
/*!***************************!*\
  !*** ./src/lib/layout.ts ***!
  \***************************/
/*! exports provided: formItemLayout, tailFormItemLayout, defaultColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formItemLayout", function() { return formItemLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tailFormItemLayout", function() { return tailFormItemLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultColor", function() { return defaultColor; });
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
const defaultColor = {
  primaryColor: '#ff0066',
  successColor: '#2fb52d',
  whiteColor: '#ffffff'
};

/***/ }),

/***/ "./src/lib/message.ts":
/*!****************************!*\
  !*** ./src/lib/message.ts ***!
  \****************************/
/*! exports provided: validateMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateMessages", function() { return validateMessages; });
const validateMessages = {
  required: 'This field is required!',
  types: {
    email: 'Not a validate email!',
    number: 'Not a validate number!'
  },
  number: {
    range: 'Must be between min and max'
  }
};

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

/***/ "./src/lib/rules.ts":
/*!**************************!*\
  !*** ./src/lib/rules.ts ***!
  \**************************/
/*! exports provided: usernamePatternRule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usernamePatternRule", function() { return usernamePatternRule; });
const usernamePatternRule = {
  pattern: new RegExp('^[a-zA-Z0-9]*$'),
  message: 'Dont allow special chars or space'
};

/***/ }),

/***/ "./src/lib/storeHolder.ts":
/*!********************************!*\
  !*** ./src/lib/storeHolder.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let store = null;
/* harmony default export */ __webpack_exports__["default"] = ({
  getStore: () => store,
  setStore: s => {
    store = s;
  }
});

/***/ }),

/***/ "./src/lib/stream.ts":
/*!***************************!*\
  !*** ./src/lib/stream.ts ***!
  \***************************/
/*! exports provided: DEFAULT_OFFLINE_IMAGE_URL, DEFAULT_PRIVATE_IMAGE_URL, DEFAULT_GROUP_IMAGE_URL, DEFAULT_ONLINE_IMAGE_URL, getPoster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_OFFLINE_IMAGE_URL", function() { return DEFAULT_OFFLINE_IMAGE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PRIVATE_IMAGE_URL", function() { return DEFAULT_PRIVATE_IMAGE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_GROUP_IMAGE_URL", function() { return DEFAULT_GROUP_IMAGE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_ONLINE_IMAGE_URL", function() { return DEFAULT_ONLINE_IMAGE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPoster", function() { return getPoster; });
/* harmony import */ var _storeHolder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storeHolder */ "./src/lib/storeHolder.ts");

const DEFAULT_OFFLINE_IMAGE_URL = '/offline.png';
const DEFAULT_PRIVATE_IMAGE_URL = '/private.png';
const DEFAULT_GROUP_IMAGE_URL = '/group.png';
const DEFAULT_ONLINE_IMAGE_URL = '';
function getPoster(status) {
  let poster = '';
  const store = _storeHolder__WEBPACK_IMPORTED_MODULE_0__["default"].getStore();
  const {
    settings = {}
  } = store.getState();

  switch (status) {
    case 'private':
      poster = settings.defaultPrivateCallImage || DEFAULT_PRIVATE_IMAGE_URL;
      break;

    case 'offline':
      poster = settings.defaultOfflineModelImage || DEFAULT_OFFLINE_IMAGE_URL;
      break;

    case 'public':
      poster = DEFAULT_ONLINE_IMAGE_URL;
      break;

    case 'group':
      poster = settings.defaultGroupChatImage || DEFAULT_GROUP_IMAGE_URL;
      break;

    default:
      poster = DEFAULT_OFFLINE_IMAGE_URL;
      break;
  }

  return poster;
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

/***/ "./src/redux/ui/actions.ts":
/*!*********************************!*\
  !*** ./src/redux/ui/actions.ts ***!
  \*********************************/
/*! exports provided: updateUIValue, loadUIValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUIValue", function() { return updateUIValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadUIValue", function() { return loadUIValue; });
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");

const updateUIValue = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('updateUIValue');
const loadUIValue = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('loadUIValue');

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

/***/ "./src/services/banner.service.ts":
/*!****************************************!*\
  !*** ./src/services/banner.service.ts ***!
  \****************************************/
/*! exports provided: BannerService, bannerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerService", function() { return BannerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bannerService", function() { return bannerService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");

class BannerService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  search(query) {
    return this.get(this.buildUrl('/banners/search', query));
  }

}
const bannerService = new BannerService();

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

/***/ "./src/services/earning.service.ts":
/*!*****************************************!*\
  !*** ./src/services/earning.service.ts ***!
  \*****************************************/
/*! exports provided: earningService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "earningService", function() { return earningService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");


class EarningService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  search(params, role = 'performer') {
    return this.get(this.buildUrl(`/earning/${role}/search`, params));
  }

  stats(params, role = 'performer') {
    return this.get(this.buildUrl(`/earning/${role}/stats`, params));
  }

}

const earningService = new EarningService();

/***/ }),

/***/ "./src/services/favourite.service.ts":
/*!*******************************************!*\
  !*** ./src/services/favourite.service.ts ***!
  \*******************************************/
/*! exports provided: favouriteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "favouriteService", function() { return favouriteService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");


class FavouriteService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  like(id) {
    return this.post(`/favourite/${id}/like`);
  }

  unlike(id) {
    return this.post(`/favourite/${id}/unlike`);
  }

  favorite(id, isFavorited) {
    return this.post(`/favourite/${id}/${isFavorited ? 'unlike' : 'like'}`);
  }

  search(query) {
    return this.get(this.buildUrl('/favourite', query));
  }

}

const favouriteService = new FavouriteService();

/***/ }),

/***/ "./src/services/gallery.service.ts":
/*!*****************************************!*\
  !*** ./src/services/gallery.service.ts ***!
  \*****************************************/
/*! exports provided: GalleryService, galleryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryService", function() { return GalleryService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "galleryService", function() { return galleryService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");

class GalleryService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  search(params, isPerformer = true) {
    return this.get(this.buildUrl(isPerformer ? '/performer/performer-assets/galleries/search' : '/user/performer-assets/galleries/search', params));
  }

  purchased(params) {
    return this.get(this.buildUrl('/purchased-items/user/galleries', params));
  }

  create(data) {
    return this.post('/performer/performer-assets/galleries', data);
  }

  update(id, data) {
    return this.put(`/performer/performer-assets/galleries/${id}`, data);
  }

  details(id, headers) {
    return this.get(`/performer/performer-assets/galleries/${id}/view`, headers);
  }

  publicdetails(id, headers) {
    return this.get(`/user/performer-assets/galleries/${id}/view`, headers);
  }

  remove(id) {
    return this.del(`/performer/performer-assets/galleries/${id}`);
  }

}
const galleryService = new GalleryService();

/***/ }),

/***/ "./src/services/index.ts":
/*!*******************************!*\
  !*** ./src/services/index.ts ***!
  \*******************************/
/*! exports provided: AuthService, authService, UserService, userService, PostService, postService, PerformerCategoriesService, performerCategories, PerformerService, GENNDER_PERFORMER, performerService, VideoService, videoService, ProductService, productService, SettingService, settingService, PhotoService, photoService, GalleryService, galleryService, favouriteService, TokenPackageService, tokenPackageService, TransactionService, transactionService, streamService, MessageService, messageService, PurchaseItemService, purchaseItemService, OrderService, orderService, earningService, payoutRequestService, RefundRequestService, refundRequestService, UtilsService, utilsService, StudioService, studioService, BannerService, bannerService, paymentInformationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ "./src/services/auth.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_0__["authService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "./src/services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_1__["userService"]; });

/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post.service */ "./src/services/post.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return _post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "postService", function() { return _post_service__WEBPACK_IMPORTED_MODULE_2__["postService"]; });

/* harmony import */ var _perfomer_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perfomer-categories.service */ "./src/services/perfomer-categories.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PerformerCategoriesService", function() { return _perfomer_categories_service__WEBPACK_IMPORTED_MODULE_3__["PerformerCategoriesService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "performerCategories", function() { return _perfomer_categories_service__WEBPACK_IMPORTED_MODULE_3__["performerCategories"]; });

/* harmony import */ var _perfomer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./perfomer.service */ "./src/services/perfomer.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PerformerService", function() { return _perfomer_service__WEBPACK_IMPORTED_MODULE_4__["PerformerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GENNDER_PERFORMER", function() { return _perfomer_service__WEBPACK_IMPORTED_MODULE_4__["GENNDER_PERFORMER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "performerService", function() { return _perfomer_service__WEBPACK_IMPORTED_MODULE_4__["performerService"]; });

/* harmony import */ var _video_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./video.service */ "./src/services/video.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VideoService", function() { return _video_service__WEBPACK_IMPORTED_MODULE_5__["VideoService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "videoService", function() { return _video_service__WEBPACK_IMPORTED_MODULE_5__["videoService"]; });

/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product.service */ "./src/services/product.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return _product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "productService", function() { return _product_service__WEBPACK_IMPORTED_MODULE_6__["productService"]; });

/* harmony import */ var _setting_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./setting.service */ "./src/services/setting.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingService", function() { return _setting_service__WEBPACK_IMPORTED_MODULE_7__["SettingService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "settingService", function() { return _setting_service__WEBPACK_IMPORTED_MODULE_7__["settingService"]; });

/* harmony import */ var _photo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./photo.service */ "./src/services/photo.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhotoService", function() { return _photo_service__WEBPACK_IMPORTED_MODULE_8__["PhotoService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "photoService", function() { return _photo_service__WEBPACK_IMPORTED_MODULE_8__["photoService"]; });

/* harmony import */ var _gallery_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gallery.service */ "./src/services/gallery.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GalleryService", function() { return _gallery_service__WEBPACK_IMPORTED_MODULE_9__["GalleryService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "galleryService", function() { return _gallery_service__WEBPACK_IMPORTED_MODULE_9__["galleryService"]; });

/* harmony import */ var _favourite_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./favourite.service */ "./src/services/favourite.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "favouriteService", function() { return _favourite_service__WEBPACK_IMPORTED_MODULE_10__["favouriteService"]; });

/* harmony import */ var _token_package_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./token-package.service */ "./src/services/token-package.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenPackageService", function() { return _token_package_service__WEBPACK_IMPORTED_MODULE_11__["TokenPackageService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tokenPackageService", function() { return _token_package_service__WEBPACK_IMPORTED_MODULE_11__["tokenPackageService"]; });

/* harmony import */ var _transaction_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./transaction.service */ "./src/services/transaction.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionService", function() { return _transaction_service__WEBPACK_IMPORTED_MODULE_12__["TransactionService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transactionService", function() { return _transaction_service__WEBPACK_IMPORTED_MODULE_12__["transactionService"]; });

/* harmony import */ var _stream_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./stream.service */ "./src/services/stream.service.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "streamService", function() { return _stream_service__WEBPACK_IMPORTED_MODULE_13__["streamService"]; });

/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./message.service */ "./src/services/message.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return _message_service__WEBPACK_IMPORTED_MODULE_14__["MessageService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "messageService", function() { return _message_service__WEBPACK_IMPORTED_MODULE_14__["messageService"]; });

/* harmony import */ var _purchase_item_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./purchase-item.service */ "./src/services/purchase-item.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PurchaseItemService", function() { return _purchase_item_service__WEBPACK_IMPORTED_MODULE_15__["PurchaseItemService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "purchaseItemService", function() { return _purchase_item_service__WEBPACK_IMPORTED_MODULE_15__["purchaseItemService"]; });

/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./order.service */ "./src/services/order.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return _order_service__WEBPACK_IMPORTED_MODULE_16__["OrderService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "orderService", function() { return _order_service__WEBPACK_IMPORTED_MODULE_16__["orderService"]; });

/* harmony import */ var _earning_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./earning.service */ "./src/services/earning.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "earningService", function() { return _earning_service__WEBPACK_IMPORTED_MODULE_17__["earningService"]; });

/* harmony import */ var _payout_request__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./payout-request */ "./src/services/payout-request.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "payoutRequestService", function() { return _payout_request__WEBPACK_IMPORTED_MODULE_18__["payoutRequestService"]; });

/* harmony import */ var _refund_request_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./refund-request.service */ "./src/services/refund-request.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RefundRequestService", function() { return _refund_request_service__WEBPACK_IMPORTED_MODULE_19__["RefundRequestService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "refundRequestService", function() { return _refund_request_service__WEBPACK_IMPORTED_MODULE_19__["refundRequestService"]; });

/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./utils.service */ "./src/services/utils.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return _utils_service__WEBPACK_IMPORTED_MODULE_20__["UtilsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utilsService", function() { return _utils_service__WEBPACK_IMPORTED_MODULE_20__["utilsService"]; });

/* harmony import */ var _studio_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./studio.service */ "./src/services/studio.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StudioService", function() { return _studio_service__WEBPACK_IMPORTED_MODULE_21__["StudioService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "studioService", function() { return _studio_service__WEBPACK_IMPORTED_MODULE_21__["studioService"]; });

/* harmony import */ var _banner_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./banner.service */ "./src/services/banner.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BannerService", function() { return _banner_service__WEBPACK_IMPORTED_MODULE_22__["BannerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bannerService", function() { return _banner_service__WEBPACK_IMPORTED_MODULE_22__["bannerService"]; });

/* harmony import */ var _payment_information_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./payment-information.service */ "./src/services/payment-information.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "paymentInformationService", function() { return _payment_information_service__WEBPACK_IMPORTED_MODULE_23__["paymentInformationService"]; });

/* empty/unused harmony star reexport */

























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

/***/ "./src/services/order.service.ts":
/*!***************************************!*\
  !*** ./src/services/order.service.ts ***!
  \***************************************/
/*! exports provided: OrderService, orderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderService", function() { return orderService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");
// import { IGalleryCreate } from 'src/interfaces';

class OrderService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  search(payload) {
    return this.get(this.buildUrl('/orders/search', payload));
  }

  details(id) {
    return this.get(`/orders/details/${id}`);
  }

  update(id, data) {
    return this.put(`/orders/${id}/update`, data);
  }

  userSearch(query) {
    return this.get(this.buildUrl('/orders/user/search', query));
  }

  userFindDetails(id) {
    return this.get(`/orders/user/details/${id}`);
  }

}
const orderService = new OrderService();

/***/ }),

/***/ "./src/services/payment-information.service.ts":
/*!*****************************************************!*\
  !*** ./src/services/payment-information.service.ts ***!
  \*****************************************************/
/*! exports provided: paymentInformationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paymentInformationService", function() { return paymentInformationService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");


class PaymentInformationService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  create(data) {
    return this.post('/payment-information', data);
  }

  findOne(data) {
    return this.get(this.buildUrl('/payment-information', data));
  }

}

const paymentInformationService = new PaymentInformationService();

/***/ }),

/***/ "./src/services/payout-request.ts":
/*!****************************************!*\
  !*** ./src/services/payout-request.ts ***!
  \****************************************/
/*! exports provided: payoutRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "payoutRequestService", function() { return payoutRequestService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");


class PayoutRequestService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  calculate(params, role) {
    return this.get(this.buildUrl(`/earning/${role || 'performer'}/payout`, params));
  }

  search(query) {
    return this.get(this.buildUrl('/payout-requests/performer/search', query));
  }

  studioSearch(query) {
    return this.get(this.buildUrl('/payout-requests/studio/search', query));
  }

  create(body, role = 'performer') {
    return this.post(`/payout-requests/${role}`, body);
  }

  update(id, body, role = 'performer') {
    return this.put(`/payout-requests/${role}/${id}`, body);
  }

  detail(id, headers, role = 'performer') {
    return this.get(`/payout-requests/${role}/${id}/view`, headers);
  }

}

const payoutRequestService = new PayoutRequestService();

/***/ }),

/***/ "./src/services/perfomer-categories.service.ts":
/*!*****************************************************!*\
  !*** ./src/services/perfomer-categories.service.ts ***!
  \*****************************************************/
/*! exports provided: PerformerCategoriesService, performerCategories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformerCategoriesService", function() { return PerformerCategoriesService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "performerCategories", function() { return performerCategories; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");

class PerformerCategoriesService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  getList(query) {
    return this.get(this.buildUrl('/performer-categories', query));
  }

  details(id) {
    return this.get(`/performer-categories/${id}/view`);
  }

}
const performerCategories = new PerformerCategoriesService();

/***/ }),

/***/ "./src/services/perfomer.service.ts":
/*!******************************************!*\
  !*** ./src/services/perfomer.service.ts ***!
  \******************************************/
/*! exports provided: PerformerService, GENNDER_PERFORMER, performerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformerService", function() { return PerformerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENNDER_PERFORMER", function() { return GENNDER_PERFORMER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "performerService", function() { return performerService; });
/* harmony import */ var _lib_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/string */ "./src/lib/string.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./src/services/config.ts");





class PerformerService extends _api_request__WEBPACK_IMPORTED_MODULE_3__["APIRequest"] {
  me(headers) {
    return this.get('/performers/me', headers);
  }

  updateMe(payload) {
    return this.put('/performers', payload);
  }

  search(query) {
    return this.get(this.buildUrl('/performers/search', query));
  }

  details(username, headers = {}) {
    return this.get(`/performers/${username}/view`, headers);
  }

  getAvatarUploadUrl() {
    const config = Object(_config__WEBPACK_IMPORTED_MODULE_4__["getGlobalConfig"])();
    return `${config.NEXT_PUBLIC_API_ENDPOINT}/performers/avatar/upload`;
  }

  getDocumentsUploadUrl() {
    const config = Object(_config__WEBPACK_IMPORTED_MODULE_4__["getGlobalConfig"])();
    return `${config.NEXT_PUBLIC_API_ENDPOINT}/performers/documents/upload`;
  }

  getReleaseFormUrl() {
    const config = Object(_config__WEBPACK_IMPORTED_MODULE_4__["getGlobalConfig"])();
    return `${config.NEXT_PUBLIC_API_ENDPOINT}/performers/release-form/upload`;
  }

  myProduct(query) {
    return this.get(this.buildUrl('/performer/performer-assets/products/search', query));
  }

  createProduct(url, data, options = {
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

      if (data.image) {
        const image = data.image.file.originFileObj;
        formData.append('image', image, image.name);
      }

      if (data.digitalFile) {
        const digitalFile = data.digitalFile.file.originFileObj;
        formData.append('digitalFile', digitalFile, digitalFile.name);
      }

      Object.keys(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["omit"])(data, ['image', 'digitalFile'])).forEach(v => {
        formData.append(v, data[v]);
      });
      req.responseType = 'json';
      req.open('POST', Object(_lib_string__WEBPACK_IMPORTED_MODULE_0__["isUrl"])(url) ? url : `${config.NEXT_PUBLIC_API_ENDPOINT}${url}`);
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(_api_request__WEBPACK_IMPORTED_MODULE_3__["TOKEN"]);

      if (token) {
        req.setRequestHeader('Authorization', token);
      }

      req.send(formData);
    });
  }

  updateProduct(url, data, options = {
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

      if (data.image && data.image.file) {
        const image = data.image.file.originFileObj;
        formData.append('image', image, image.name);
      }

      if (data.digitalFile && data.digitalFile.file) {
        const digitalFile = data.digitalFile.file.originFileObj;
        formData.append('digitalFile', digitalFile, digitalFile.name);
      }

      Object.keys(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["omit"])(data, ['image', 'digitalFile'])).forEach(v => {
        formData.append(v, data[v]);
      });
      req.responseType = 'json';
      req.open('PUT', Object(_lib_string__WEBPACK_IMPORTED_MODULE_0__["isUrl"])(url) ? url : `${config.NEXT_PUBLIC_API_ENDPOINT}${url}`);
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(_api_request__WEBPACK_IMPORTED_MODULE_3__["TOKEN"]);

      if (token) {
        req.setRequestHeader('Authorization', token);
      }

      req.send(formData);
    });
  }

  removeProduct(id) {
    return this.del(`/performer/performer-assets/products/${id}`);
  }

  getCommission() {
    return this.get('/settings/performer/commission');
  }

  updatePaymentInfo(payload) {
    return this.post('/performers/bank-transfer/update', payload);
  }

  updateDirectDepost(payload) {
    return this.post('/performers/direct-deposit/update', payload);
  }

  updatePaxum(payload) {
    return this.post('/performers/paxum/update', payload);
  }

  updateBitpay(payload) {
    return this.post('/performers/bitpay/update', payload);
  }

  updateStreamingStatus(payload) {
    return this.post('/performers/streaming-status/update', payload);
  }

  geoBlock(payload) {
    return this.post('/performers/blocking/update', payload);
  }

  getBlockedList() {
    return this.get(this.buildUrl('/performers/blocking'));
  }

  increaseView(performerId) {
    return this.post(`/performers/${performerId}/inc-view`);
  }

  updateDefaultPrice(payload) {
    return this.post('/performers/default-price/update', payload);
  }

  updateBroadcastSetting(payload) {
    return this.post('/performers/broadcast-setting/update', payload);
  }

  suspendAccount(password) {
    return this.post('/performers/suspend-account', {
      password
    });
  }

  checkBlock(performerId) {
    return this.get(`/performers/${performerId}/check-blocking`);
  }

}
const GENNDER_PERFORMER = ['female', 'transgender', 'male'];
const performerService = new PerformerService();

/***/ }),

/***/ "./src/services/photo.service.ts":
/*!***************************************!*\
  !*** ./src/services/photo.service.ts ***!
  \***************************************/
/*! exports provided: PhotoService, photoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoService", function() { return PhotoService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "photoService", function() { return photoService; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/string */ "./src/lib/string.ts");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_services_api_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/api-request */ "./src/services/api-request.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./src/services/config.ts");






class PhotoService extends src_services_api_request__WEBPACK_IMPORTED_MODULE_3__["APIRequest"] {
  search(params) {
    return this.get(this.buildUrl('/performer/performer-assets/photos/search', params));
  }

  searchByGallery(galleryId, params, headers) {
    return this.get(this.buildUrl(`/user/performer-assets/photos/${galleryId}/search`, params), headers);
  }

  details(id, headers) {
    return this.get(`/performer/performer-assets/photos/${id}/view`, headers);
  }

  myPhotos(query) {
    return this.get(this.buildUrl('/performer/performer-assets/photos/search', query));
  }

  remove(id) {
    return this.del(`/performer/performer-assets/photos/${id}`);
  }

  create(url, data, options = {
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

      if (data.photo) {
        const photo = data.photo.file.originFileObj;
        formData.append('photo', photo, photo.name);
      }

      Object.keys(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["omit"])(data, ['photo'])).forEach(v => {
        formData.append(v, data[v]);
      });
      req.responseType = 'json';
      req.open('POST', Object(_lib_string__WEBPACK_IMPORTED_MODULE_1__["isUrl"])(url) ? url : `${config.NEXT_PUBLIC_API_ENDPOINT}${url}`);
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(src_services_api_request__WEBPACK_IMPORTED_MODULE_3__["TOKEN"]);

      if (token) {
        req.setRequestHeader('Authorization', token);
      }

      req.send(formData);
    });
  }

  update(url, data, options = {
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

      if (data.photo && data.photo.file) {
        const photo = data.photo.file.originFileObj;
        formData.append('photo', photo, photo.name);
      }

      Object.keys(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["omit"])(data, ['photo'])).forEach(v => {
        formData.append(v, data[v]);
      });
      req.responseType = 'json';
      req.open('PUT', Object(_lib_string__WEBPACK_IMPORTED_MODULE_1__["isUrl"])(url) ? url : `${config.NEXT_PUBLIC_API_ENDPOINT}${url}`);
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(src_services_api_request__WEBPACK_IMPORTED_MODULE_3__["TOKEN"]);

      if (token) {
        req.setRequestHeader('Authorization', token);
      }

      req.send(formData);
    });
  }

  uploadImages(file, payload, onProgress) {
    return this.upload('/performer/performer-assets/photos/upload', [{
      fieldname: 'photo',
      file
    }], {
      onProgress,
      customData: payload
    });
  }

}
const photoService = new PhotoService();

/***/ }),

/***/ "./src/services/post.service.ts":
/*!**************************************!*\
  !*** ./src/services/post.service.ts ***!
  \**************************************/
/*! exports provided: PostService, postService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postService", function() { return postService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class PostService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  search(query) {
    return this.get(this.buildUrl('/posts/search', query));
  }

  findById(id) {
    return this.get(`/posts/${id}`);
  }

  createContactCotent(data) {
    return this.post('/contact', _objectSpread({}, data));
  }

}
const postService = new PostService();

/***/ }),

/***/ "./src/services/product.service.ts":
/*!*****************************************!*\
  !*** ./src/services/product.service.ts ***!
  \*****************************************/
/*! exports provided: ProductService, productService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productService", function() { return productService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");

class ProductService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  details(id, headers) {
    return this.get(`/performer/performer-assets/products/${id}/view`, headers);
  }

  search(params) {
    return this.get(this.buildUrl('/user/performer-assets/products/search', params));
  }

  purchased(params) {
    return this.get(this.buildUrl('/purchased-items/user/products', params));
  }

  getDownloadLink(id) {
    return this.get(`/user/performer-assets/products/${id}/download-link`);
  }

}
const productService = new ProductService();

/***/ }),

/***/ "./src/services/purchase-item.service.ts":
/*!***********************************************!*\
  !*** ./src/services/purchase-item.service.ts ***!
  \***********************************************/
/*! exports provided: PurchaseItemService, purchaseItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseItemService", function() { return PurchaseItemService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purchaseItemService", function() { return purchaseItemService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");

class PurchaseItemService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  search(query) {
    return this.get(this.buildUrl('/purchased-items/user/search', query));
  }

  purchaseItem(id, type, data) {
    return this.post(`/purchase-items/${type}/${id}`, data);
  }

  purchaseProduct(id) {
    return this.post(`/purchase-items/product/${id}`);
  }

  purchaseVideo(id) {
    return this.post(`/purchase-items/video/${id}`);
  }

}
const purchaseItemService = new PurchaseItemService();

/***/ }),

/***/ "./src/services/refund-request.service.ts":
/*!************************************************!*\
  !*** ./src/services/refund-request.service.ts ***!
  \************************************************/
/*! exports provided: RefundRequestService, refundRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefundRequestService", function() { return RefundRequestService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refundRequestService", function() { return refundRequestService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");

class RefundRequestService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  create(data) {
    return this.post('/refund-requests', data);
  }

  search(params) {
    return this.get(this.buildUrl('/refund-requests/search', params));
  }

}
const refundRequestService = new RefundRequestService();

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

/***/ "./src/services/stream.service.tsx":
/*!*****************************************!*\
  !*** ./src/services/stream.service.tsx ***!
  \*****************************************/
/*! exports provided: streamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "streamService", function() { return streamService; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/lib */ "./src/lib/index.ts");
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");





class StreamService extends _api_request__WEBPACK_IMPORTED_MODULE_3__["APIRequest"] {
  getSessionId(id, type) {
    return this.get(`/streaming/session/${id}/${type}`);
  }

  goLive() {
    return this.post('/streaming/live');
  }

  joinPublicChat(performerId) {
    return this.post(`/streaming/join/${performerId}`);
  }

  requestPrivateChat(performerId) {
    return this.post(`/streaming/private-chat/${performerId}`);
  }

  acceptPrivateChat(id) {
    return this.get(`/streaming/private-chat/${id}`);
  }

  startGroupChat() {
    return this.post('/streaming/group-chat');
  }

  joinGroupChat(id) {
    return this.get(`/streaming/group-chat/${id}`);
  }

  generateOneTimeToken(data) {
    return this.post('/streaming/token', data);
  }

  async getPublishToken(options, expireDate = moment__WEBPACK_IMPORTED_MODULE_0___default()().add(1, 'd').toDate().getTime()) {
    try {
      const {
        settings,
        streamId
      } = options;
      const {
        secureOption
      } = settings;

      if (secureOption) {
        const resp = await this.generateOneTimeToken({
          id: streamId,
          type: 'publish',
          expireDate
        });
        return resp.data.tokenId;
      }

      return null;
    } catch (err) {
      const error = await Promise.resolve(err);
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(Object(src_lib__WEBPACK_IMPORTED_MODULE_2__["getResponseError"])(error));
      return null;
    }
  }

  async getSubscriberToken(options, expireDate = moment__WEBPACK_IMPORTED_MODULE_0___default()().add(1, 'd').toDate().getTime()) {
    try {
      const {
        settings,
        streamId
      } = options;
      const {
        secureOption
      } = settings;

      if (secureOption) {
        const resp = await this.generateOneTimeToken({
          id: streamId,
          type: 'play',
          expireDate
        });
        return resp.data.tokenId;
      }

      return null;
    } catch (err) {
      const error = await Promise.resolve(err);
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(Object(src_lib__WEBPACK_IMPORTED_MODULE_2__["getResponseError"])(error));
      return null;
    }
  }

  async getLiveStreamOrVodURL(options, expireDate = moment__WEBPACK_IMPORTED_MODULE_0___default()().add(1, 'd').toDate().getTime(), _player = 'hls') {
    // http://[IP_Address]/<Application_Name>/streams/streamID.mp4?token=tokenId
    // http://[IP_Address]/<Application_Name>/streams/streamID.m3u8?token=tokenId
    // http://[IP_Address]/<Application_Name>/play.html?name=streamID&playOrder=hls&token=tokenId
    try {
      // const src = `https://${viewerURL}:5443/${appName}/streams/${streamId}.m3u8${oneTimeToken ? `?token=${oneTimeToken}` : ''}`;
      // eslint-disable-next-line no-shadow
      const {
        appName,
        settings,
        streamId
      } = options;
      const {
        secureOption,
        viewerURL
      } = settings;
      const extension = _player === 'hls' ? 'm3u8' : 'mp4';

      if (!viewerURL || !appName) {
        return '';
      }

      let oneTimeToken = '';

      if (secureOption) {
        const resp = await this.generateOneTimeToken({
          id: streamId,
          type: 'play',
          expireDate
        });
        oneTimeToken = resp.data.tokenId;
      }

      const {
        protocol
      } = window.location;
      return `${protocol}//${viewerURL}/${appName}/streams/${streamId}.${extension}${oneTimeToken ? `?token=${oneTimeToken}` : ''}`;
    } catch (err) {
      const error = await Promise.resolve(err);
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(Object(src_lib__WEBPACK_IMPORTED_MODULE_2__["getResponseError"])(error));
      return '';
    }
  }

}

const streamService = new StreamService();

/***/ }),

/***/ "./src/services/studio.service.ts":
/*!****************************************!*\
  !*** ./src/services/studio.service.ts ***!
  \****************************************/
/*! exports provided: StudioService, studioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudioService", function() { return StudioService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "studioService", function() { return studioService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/services/config.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class StudioService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  me(headers) {
    return this.get('/studio/me', headers);
  }

  update(payload) {
    return this.put('/studio/update', payload);
  }

  updatePaymentInfo(payload) {
    return this.post('/studio/bank-transfer/update', payload);
  }

  updateDirectDepost(payload) {
    return this.post('/studio/direct-deposit/update', payload);
  }

  updatePaxum(payload) {
    return this.post('/studio/paxum/update', payload);
  }

  updateBitpay(payload) {
    return this.post('/studio/bitpay/update', payload);
  }

  getCommission() {
    return this.get('/settings/studio/commission');
  }

  addModel(payload) {
    return this.post('/studio/members', payload);
  }

  getMembers(params) {
    return this.get(this.buildUrl('/studio/members', params));
  }

  getMemberCommissions(params) {
    return this.get(this.buildUrl('/studio/commission', params));
  }

  updateMemberCommission(id, payload) {
    return this.put(`/studio/commission/member/${id}`, payload);
  }

  getPerformerRequest(params) {
    return this.get(this.buildUrl('/payout-requests/studio/performer-request', params));
  }

  updateStatusPerformerRequest(id, payload) {
    return this.put(`/payout-requests/studio/update/${id}`, _objectSpread({}, payload));
  }

  updateMemberStatus(id, status) {
    return this.post(`/studio/members/${id}/${status}`);
  }

  stats() {
    return this.get('/studio/stats');
  }

  getDocumentsUploadUrl() {
    const config = Object(_config__WEBPACK_IMPORTED_MODULE_1__["getGlobalConfig"])();
    return `${config.NEXT_PUBLIC_API_ENDPOINT}/studio/documents/upload`;
  }

}
const studioService = new StudioService();

/***/ }),

/***/ "./src/services/token-package.service.ts":
/*!***********************************************!*\
  !*** ./src/services/token-package.service.ts ***!
  \***********************************************/
/*! exports provided: TokenPackageService, tokenPackageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenPackageService", function() { return TokenPackageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenPackageService", function() { return tokenPackageService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");

class TokenPackageService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  search(params) {
    return this.get(this.buildUrl('/package/token/search', params));
  }

  buyTokens(id) {
    return this.post(`/payment/purchase-tokens/${id}`);
  }

}
const tokenPackageService = new TokenPackageService();

/***/ }),

/***/ "./src/services/transaction.service.ts":
/*!*********************************************!*\
  !*** ./src/services/transaction.service.ts ***!
  \*********************************************/
/*! exports provided: TransactionService, transactionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionService", function() { return TransactionService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transactionService", function() { return transactionService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");

class TransactionService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  search(params) {
    return this.get(this.buildUrl('/transactions/user/search', params));
  }

  sendTipToken(performerId, token, conversationId) {
    return this.post(`/member/send-tip-token/${performerId}`, {
      token,
      conversationId
    });
  }

  sendPaidToken(conversationId) {
    return this.post(`/member/send-pay-token/${conversationId}`);
  }

}
const transactionService = new TransactionService();

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

/***/ "./src/services/utils.service.ts":
/*!***************************************!*\
  !*** ./src/services/utils.service.ts ***!
  \***************************************/
/*! exports provided: UtilsService, utilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return UtilsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utilsService", function() { return utilsService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");

class UtilsService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  countriesList() {
    return this.get('/countries/list');
  }

  languagesList() {
    return this.get('/languages/list');
  }

  phoneCodesList() {
    return this.get('/phone-codes/list');
  }

  statistics() {
    return this.get('/statistics/admin');
  }

  verifyRecaptcha(token) {
    return this.post('/re-captcha/verify', {
      token
    });
  }

}
const utilsService = new UtilsService();

/***/ }),

/***/ "./src/services/video.service.ts":
/*!***************************************!*\
  !*** ./src/services/video.service.ts ***!
  \***************************************/
/*! exports provided: VideoService, videoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoService", function() { return VideoService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "videoService", function() { return videoService; });
/* harmony import */ var src_services_api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/services/api-request */ "./src/services/api-request.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/string */ "./src/lib/string.ts");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./src/services/config.ts");






class VideoService extends src_services_api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  search(params) {
    return this.get(this.buildUrl('/user/performer-assets/videos/search', params));
  }

  purchased(params) {
    return this.get(this.buildUrl('/purchased-items/user/videos', params));
  }

  details(id, headers) {
    return this.get(`/performer/performer-assets/videos/${id}/view`, headers);
  }

  myVideos(query) {
    return this.get(this.buildUrl('/performer/performer-assets/videos/search', query));
  }

  removeMyVideo(id) {
    return this.del(`/performer/performer-assets/videos/${id}`);
  }

  create(url, data, options = {
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

      if (data.video) {
        const video = data.video.file.originFileObj;
        formData.append('video', video, video.name);
      }

      if (data.trailer) {
        const trailer = data.trailer.file.originFileObj;
        formData.append('trailer', trailer, trailer.name);
      }

      if (data.thumbnail) {
        const thumbnail = data.thumbnail.file.originFileObj;
        formData.append('thumbnail', thumbnail, thumbnail.name);
      }

      Object.keys(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["omit"])(data, ['video', 'thumbnail', 'trailer'])).forEach(v => {
        formData.append(v, data[v]);
      });
      req.responseType = 'json';
      req.open('POST', Object(_lib_string__WEBPACK_IMPORTED_MODULE_2__["isUrl"])(url) ? url : `${config.NEXT_PUBLIC_API_ENDPOINT}${url}`);
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get(src_services_api_request__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]);

      if (token) {
        req.setRequestHeader('Authorization', token);
      }

      req.send(formData);
    });
  }

  update(url, data, options = {
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

      if (data.video && data.video.file) {
        const video = data.video.file.originFileObj;
        formData.append('video', video, video.name);
      }

      if (data.trailer && data.trailer.file) {
        const trailer = data.trailer.file.originFileObj;
        formData.append('trailer', trailer, trailer.name);
      }

      if (data.thumbnail && data.thumbnail.file) {
        const thumbnail = data.thumbnail.file.originFileObj;
        formData.append('thumbnail', thumbnail, thumbnail.name);
      }

      Object.keys(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["omit"])(data, ['video', 'thumbnail', 'trailer'])).forEach(v => {
        formData.append(v, data[v]);
      });
      req.responseType = 'json';
      req.open('PUT', Object(_lib_string__WEBPACK_IMPORTED_MODULE_2__["isUrl"])(url) ? url : `${config.NEXT_PUBLIC_API_ENDPOINT}${url}`);
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get(src_services_api_request__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]);

      if (token) {
        req.setRequestHeader('Authorization', token);
      }

      req.send(formData);
    });
  }

  increaseView(id) {
    return this.post(`/user/performer-assets/videos/${id}/inc-view`);
  } // update(videoId, performerId, data) {
  //   return this.put(`/performer/performer-assets/videos/${videoId}`, {
  //     ...data,
  //     performerId
  //   });
  // }


  userFindVideoById(id, headers = {}) {
    return this.get(`/user/performer-assets/videos/${id}`, headers);
  }

}
const videoService = new VideoService();

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

/***/ "react-google-recaptcha":
/*!*****************************************!*\
  !*** external "react-google-recaptcha" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-google-recaptcha");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2F1dGgvbG9naW4vdXNlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXV0aC9sb2dpbi9mb290ZXItbG9naW4tZm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXV0aC9sb2dpbi91c2VyLWxvZ2luLWZvcm0udHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9sYXlvdXQvZm9ybS1yZWdpc3Rlci1wbGFjZWhvbGRlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2xheW91dC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vbGF5b3V0L3BvcHVwLTE4cGx1cy1jb250ZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vcmVjYXB0Y2hhLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9maWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9pbnRlcm5ldC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2xheW91dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL21lc3NhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9yZWR1eC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3J1bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvc3RvcmVIb2xkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9zdHJlYW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9zdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYXV0aC9hY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC91aS9hY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9hcGktcmVxdWVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvYXV0aC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9iYW5uZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9lYXJuaW5nLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2Zhdm91cml0ZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9nYWxsZXJ5LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9tZXNzYWdlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL29yZGVyLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3BheW1lbnQtaW5mb3JtYXRpb24uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcGF5b3V0LXJlcXVlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3BlcmZvbWVyLWNhdGVnb3JpZXMuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcGVyZm9tZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcGhvdG8uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcG9zdC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9wcm9kdWN0LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3B1cmNoYXNlLWl0ZW0uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcmVmdW5kLXJlcXVlc3Quc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvc2V0dGluZy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9zdHJlYW0uc2VydmljZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3N0dWRpby5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy90b2tlbi1wYWNrYWdlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3RyYW5zYWN0aW9uLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3VzZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvdXRpbHMuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvdmlkZW8uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzb21vcnBoaWMtdW5mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aC10by1yZWdleHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWdvb2dsZS1yZWNhcHRjaGFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtYWN0aW9uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlc2VsZWN0XCIiXSwibmFtZXMiOlsibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwiY2FjaGVkT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJvYnNlcnZlciIsImdldE9ic2VydmVyIiwiY29uc29sZSIsInJvdXRlciIsImVyciIsImhyZWYiLCJldmVudCIsInRhcmdldCIsImUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsIm9wdGlvbmFsUHJvcHMiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkQXMiLCJjaGlsZEVsbSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkcmVuIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUHJvcHMiLCJyZWYiLCJlbCIsInNldENoaWxkRWxtIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJMaW5rIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJwcmVmaXgiLCJhZGRQYXRoUHJlZml4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW1zIiwicGFyYW0iLCJ2YWx1ZSIsInJlcGxhY2VkIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJlc2NhcGVQYXRoRGVsaW1pdGVycyIsInJlc3VsdCIsImZpbHRlcmVkUXVlcnkiLCJxdWVyeSIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsInJlc29sdmVBcyIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFkZEJhc2VQYXRoIiwicmVzb2x2ZUhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsImNyZWRlbnRpYWxzIiwicmVzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJtYXJrTG9hZGluZ0Vycm9yIiwiY29uc3RydWN0b3IiLCJyb3V0ZSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImxvY2FsZSIsImxvY2FsZXMiLCJkZWZhdWx0TG9jYWxlIiwic3RhdGUiLCJvcHRpb25zIiwic3R5bGVTaGVldHMiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsIl9fTkVYVF9EQVRBX18iLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsInByZXBhcmVVcmxBcyIsImNoYW5nZSIsImlzTG9jYWxVUkwiLCJTVCIsInBlcmZvcm1hbmNlIiwiYWRkTG9jYWxlIiwiY2xlYW5lZEFzIiwiZGVsTG9jYWxlIiwiZGVsQmFzZVBhdGgiLCJwYWdlcyIsIl9fcmV3cml0ZXMiLCJwYXJzZWQiLCJtZXRob2QiLCJwb3RlbnRpYWxIcmVmIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsImFwcENvbXAiLCJlcnJvciIsImNoYW5nZVN0YXRlIiwiX19OIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwicGFnZSIsImdldFJvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJfcmVzb2x2ZUhyZWYiLCJhcHBseUJhc2VQYXRoIiwiY2xlYW5QYXRobmFtZSIsIlByb21pc2UiLCJmZXRjaENvbXBvbmVudCIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJkYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2VnbWVudCIsImNoYXIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiRFVNTVlfQkFTRSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsIm1hdGNoZXJPcHRpb25zIiwic2Vuc2l0aXZlIiwiZGVsaW1pdGVyIiwiY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyIsInN0cmljdCIsImN1c3RvbVJvdXRlIiwia2V5cyIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJwYXJzZWREZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJ2YWxpZGF0ZSIsInN0ck9yQXJyYXkiLCJxdWVyeUNvbXBpbGVyIiwicGFyYW1LZXlzIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInNob3VsZEFkZEJhc2VQYXRoIiwibmV3VXJsIiwic2VhcmNoUGFyYW1zIiwiaXNOYU4iLCJpdGVtIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJjdXN0b21Sb3V0ZU1hdGNoZXIiLCJyZXdyaXRlIiwiZGVzdFJlcyIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJMb2dpbiIsIlB1cmVDb21wb25lbnQiLCJsb2dpbiIsImRpc3BhdGNoTG9naW4iLCJyZW1lbWJlciIsInJlbWVtYmVyTWUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlc2V0TG9naW5EYXRhIiwiZGlzcGF0Y2hSZXNldCIsInJlbmRlciIsInJlcXVlc3RpbmciLCJ1aSIsInNpbmd1bGFyVGV4dE1vZGVsIiwic3VibWl0IiwiYmluZCIsIm1hcFN0YXRlcyIsInVzZXJMb2dpbiIsIm1hcERpc3BhdGNoIiwiY29ubmVjdCIsIkl0ZW0iLCJGb3JtSXRlbSIsIkZvcm0iLCJGb3JtRm9vdGVyTG9naW4iLCJhY2NvdW50IiwiZGVmYXVsdFByb3BzIiwiTG9naW5Gb3JtIiwib25SZW1lbWJlciIsImdvb2dsZVJlQ2FwdGNoYUVuYWJsZWQiLCJnb29nbGVSZUNhcHRjaGFTaXRlS2V5IiwicmVDQVBUQ0hBUmVmIiwiY3JlYXRlUmVmIiwicmVDQVBUQ0hBRXJyb3IiLCJzZXRyZUNBUFRDSEFFcnJvciIsInVzZVN0YXRlIiwiZm9ybSIsInVzZUZvcm0iLCJvblByZXNzRW50ZXIiLCJvbkZpbmlzaCIsInRva2VuIiwiY3VycmVudCIsImdldFZhbHVlIiwicmVzZXQiLCJ1dGlsc1NlcnZpY2UiLCJ2ZXJpZnlSZWNhcHRjaGEiLCJyZXNvbHZlIiwiZ2V0UmVzcG9uc2VFcnJvciIsInR5cGUiLCJyZXF1aXJlZCIsIm1pbiIsIm1heCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIndpZHRoIiwibWFyZ2luIiwiY2hlY2tlZCIsInVwZGF0ZVVJVmFsdWUiLCJGb3JtUmVnaXN0ZXJQbGFjZUhvbGRlciIsInBsYWNlaG9sZGVyTG9naW5VcmwiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJQb3B1cDE4UGx1c0NvbnRlbnQiLCJHb29nbGVSZUNhcHRjaGEiLCJmb3J3YXJkUmVmIiwib25Sb3V0ZUNoYW5nZVN0YXJ0IiwiZ3JlY2FwdGNoYSIsInVzZUVmZmVjdCIsImZvcm1hdERhdGUiLCJkYXRlIiwiZm9ybWF0IiwibW9tZW50IiwiY29udmVyRHVyYXRpb24iLCJkdXJhdGlvbiIsInV0YyIsImFzTWlsbGlzZWNvbmRzIiwicGFyc2VBZ2UiLCJnZXRBZ2UiLCJkaWZmIiwidG9TdHJpbmciLCJmb3JtYXREdXJhdGlvbiIsInMiLCJob3VycyIsIk1hdGgiLCJmbG9vciIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwiYmVmb3JlQXZhdGFyVXBsb2FkIiwiZmlsZSIsImV4dCIsInNwbGl0IiwicG9wIiwidG9Mb3dlckNhc2UiLCJjb25maWciLCJnZXRHbG9iYWxDb25maWciLCJpc0ltYWdlQWNjZXB0IiwiTkVYVF9QVUJMSUNfSU1BR0VfQUNDUEVUIiwibWFwIiwidHJpbSIsImluZGV4T2YiLCJpc0x0Mk0iLCJzaXplIiwiTkVYVF9QVUJMSUNfTUFYSU1VTV9TSVpFX1VQTE9BRF9BVkFUQVIiLCJJTlRFUk5FVF9DSEVDS19VUkwiLCJpc0hhc0ludGVybmV0Q29ubmVjdGlvbiIsImZldGNoIiwiaGVhZGVycyIsIlByYWdtYSIsIkV4cGlyZXMiLCJzdGF0dXMiLCJleGNlcHRpb24iLCJsb2ciLCJmb3JtSXRlbUxheW91dCIsImxhYmVsQ29sIiwieHMiLCJzcGFuIiwic20iLCJ3cmFwcGVyQ29sIiwidGFpbEZvcm1JdGVtTGF5b3V0Iiwib2Zmc2V0IiwiZGVmYXVsdENvbG9yIiwicHJpbWFyeUNvbG9yIiwic3VjY2Vzc0NvbG9yIiwid2hpdGVDb2xvciIsInZhbGlkYXRlTWVzc2FnZXMiLCJ0eXBlcyIsImVtYWlsIiwibnVtYmVyIiwicmFuZ2UiLCJjcmVhdGVBY3Rpb24iLCJhY3Rpb24iLCJSZWR1eENyZWF0ZUFjdGlvbiIsImlzIiwiYVR5cGUiLCJjcmVhdGVBc3luY0FjdGlvbiIsImNyZWF0ZUFzeW5jQWN0aW9ucyIsImhhbmRsZUFjdGlvbnMiLCJhY3Rpb25zIiwiaW5pdGlhbFN0YXRlIiwiaGFuZGxlUmVkdXhBY3Rpb25zIiwicmVkdWNlIiwicmVkdWNlciIsImFjdCIsImNyZWF0ZVJlZHVjZXJzIiwic3RhdGVDb250ZXh0IiwicmVkdWNlcnMiLCJwcmV2ZW50UmVzZXR0aW5nIiwiZmxhdHRlbiIsImlzQXJyYXkiLCJmb3JFYWNoIiwiQVBQX1NUQVRFX1JFU0VUIiwiY3JlYXRlU2FnYXMiLCJzYWdhcyIsInNhZ2EiLCJlZmZlY3QiLCJ0YWtlTGF0ZXN0Iiwid29ya2VyIiwiZGVsYXkiLCJjcmVhdGVTZWxlY3RvcnNBIiwiY29udGV4dCIsInN0YXRlU2VsZWN0b3IiLCJpc0VtcHR5IiwiZ2V0SW4iLCJjcmVhdGVTZWxlY3RvcnMiLCJzZWxlY3RvcnMiLCJjcmVhdGVKU1NlbGVjdG9ycyIsInVzZXJuYW1lUGF0dGVyblJ1bGUiLCJwYXR0ZXJuIiwiUmVnRXhwIiwic3RvcmUiLCJnZXRTdG9yZSIsInNldFN0b3JlIiwiREVGQVVMVF9PRkZMSU5FX0lNQUdFX1VSTCIsIkRFRkFVTFRfUFJJVkFURV9JTUFHRV9VUkwiLCJERUZBVUxUX0dST1VQX0lNQUdFX1VSTCIsIkRFRkFVTFRfT05MSU5FX0lNQUdFX1VSTCIsImdldFBvc3RlciIsInBvc3RlciIsInN0b3JlSG9sZGVyIiwic2V0dGluZ3MiLCJnZXRTdGF0ZSIsImRlZmF1bHRQcml2YXRlQ2FsbEltYWdlIiwiZGVmYXVsdE9mZmxpbmVNb2RlbEltYWdlIiwiZGVmYXVsdEdyb3VwQ2hhdEltYWdlIiwiaXNVcmwiLCJtYXRjaCIsImdlbmVyYXRlVXVpZCIsImMiLCJyIiwicmFuZG9tIiwidiIsImNhcGl0YWxpemVGaXJzdExldHRlciIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJ1bml0UHJpY2VzIiwidGV4dCIsImFycmF5VG9UcmVlIiwiYXJyYXkiLCJpZCIsInBhcmVudElkIiwiY2xvbmVEZWVwIiwiaW5kZXgiLCJoYXNoUGFyZW50IiwicGF0aE1hdGNoUmVnZXhwIiwicmVnZXhwIiwiZXhlYyIsInF1ZXJ5QW5jZXN0b3JzIiwiaGFzaE1hcCIsIk1hcCIsImdldFBhdGgiLCJjdXJyZW50UGFyZW50SWQiLCJjb25zdHJhaW50cyIsInZhbHVlcyIsImlzTW9iaWxlIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiZ2V0VXJsUGFyYW1ldGVyIiwic1BhcmFtIiwic1BhZ2VVUkwiLCJsb2NhdGlvbiIsInN1YnN0cmluZyIsInNVUkxWYXJpYWJsZXMiLCJzUGFyYW1ldGVyTmFtZSIsImxlbmd0aCIsInVuZGVmaW5lZCIsIkRBWV9PRl9XRUVLIiwibW9uIiwidHVlIiwid2VkIiwidGh1IiwiZnJpIiwic2F0Iiwic3VuIiwiZ2V0RGVmYXVsdFNjaGVkdWxlIiwiZGVmYXVsdFZhbCIsInN0YXJ0IiwiZW5kIiwiY2xvc2VkIiwiZ2V0TmV4dFNob3ciLCJzY2hlZHVsZSIsIndlZWtEYXkiLCJuZXh0U2hvdyIsInBlcmZvcm1lclNob3dzIiwiZmlsdGVyIiwiZGF5IiwiZ2V0U2VhcmNoRGF0YSIsInBhZ2luYXRpb24iLCJmaWx0ZXJzIiwic29ydGVyIiwic29ydCIsInNvcnRCeSIsImxpbWl0Iiwib3JkZXIiLCJTT1JUIiwiZ2V0QmFzZTY0Iiwib3JpZ2luRmlsZU9iaiIsInJlamVjdCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNEYXRhVVJMIiwib25sb2FkIiwib25lcnJvciIsImNvbnZlcnRDb25uZWN0aW9uRGF0YSIsImFyciIsInNlcnZlckRhdGEiLCJKU09OIiwicGFyc2UiLCJjbGllbnREYXRhIiwiY2hlY2tVc2VyTG9naW4iLCJpc0xvZ2dlZEluIiwidXNlciIsIl9pZCIsImdldEN1cnJlbnRVc2VyIiwicGVyZm9ybWVyIiwiaXNQaHlzaWNhbFByb2R1Y3QiLCJjaGF0Qm94TWVzc2FnZUNsYXNzTmFtZSIsInJlcSIsImlzTWluZSIsInN0YXJ0c1NlcXVlbmNlIiwiZW5kc1NlcXVlbmNlIiwiY2xhc3NuYW1lcyIsIm1pbmUiLCJ0aXAiLCJjb252ZXJ0RmVldFRvQ20iLCJmZWV0IiwiaW5jaCIsImYiLCJmb3JtYXREYXRhV2VpZ2h0IiwidG9GaXhlZCIsImxhYmVsIiwiZm9ybWF0RGF0YUhlaWdodCIsImEiLCJmb3JtYXRQcmljZSIsInByaWNlIiwiZnJhY3Rpb25EaWdpdHMiLCJsb2dpblN1Y2Nlc3MiLCJsb2dpbkZhaWwiLCJsb2dpblJlcXVlc3RpbmciLCJwZXJmb3JtZXJsb2dpbiIsInBlcmZvcm1lcmxvZ2luU3VjY2VzcyIsInBlcmZvcm1lcmxvZ2luRmFpbCIsInN0dWRpb0xvZ2luIiwic3R1ZGlvTG9naW5TdWNjZXNzIiwic3R1ZGlvTG9naW5GYWlsIiwicGVyZm9ybWVyUmVnaXN0ZXIiLCJwZXJmb3JtZXJSZWdpc3RlclN1Y2Nlc3MiLCJwZXJmb3JtZXJSZWdpc3RlckZhaWwiLCJzZXRQZXJmb3JtZXJSZWdpc3RlclN1Ym1pdHRpbmciLCJ1c2VyUmVnaXN0ZXIiLCJ1c2VyUmVnaXN0ZXJTdWNjZXNzIiwidXNlclJlZ2lzdGVyRmFpbCIsInNldFVzZXJSZWdpc3RlclN1Ym1pdHRpbmciLCJ1cGRhdGVQYXNzd29yZCIsInVwZGF0ZVBhc3N3b3JkU3VjY2VzcyIsInVwZGF0ZVBhc3N3b3JkRmFpbCIsInNldFVwZGF0ZVBhc3N3b3JkU3VibWl0dGluZyIsImxvZ291dCIsImxvYWRVSVZhbHVlIiwiVE9LRU4iLCJST0xFIiwiUEVSRk9STUVSX1JPTEUiLCJVU0VSX1JPTEUiLCJTVFVESU9fUk9MRSIsImRlc2NlbmQiLCJhc2NlbmQiLCJBUElSZXF1ZXN0Iiwic2V0QXV0aEhlYWRlclRva2VuIiwicGFyc2VKU09OIiwicmVzcG9uc2UiLCJqc29uIiwiY2hlY2tTdGF0dXMiLCJFcnJvciIsImNsb25lIiwicmVxdWVzdCIsImJvZHkiLCJ2ZXJiIiwidXBkYXRlZEhlYWRlciIsIkF1dGhvcml6YXRpb24iLCJjb29raWUiLCJBUElfRU5EUE9JTlQiLCJORVhUX1BVQkxJQ19BUElfRU5EUE9JTlQiLCJzdHJpbmdpZnkiLCJ0aGVuIiwiYnVpbGRVcmwiLCJiYXNlVXJsIiwicXVlcnlTdHJpbmciLCJrIiwiam9pbiIsInBvc3QiLCJwdXQiLCJkZWwiLCJ1cGxvYWQiLCJmaWxlcyIsIm9uUHJvZ3Jlc3MiLCJ1cGxvYWRVcmwiLCJYTUxIdHRwUmVxdWVzdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJsZW5ndGhDb21wdXRhYmxlIiwicGVyY2VudGFnZSIsImxvYWRlZCIsInRvdGFsIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImZpZWxkbmFtZSIsImN1c3RvbURhdGEiLCJyZXNwb25zZVR5cGUiLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsInNlbmQiLCJyZWdpc3RlciIsImRvY3VtZW50VmVyaWZpY2F0aW9uIiwiZG9jdW1lbnRWZXJpZmljYXRpb25GaWxlIiwiaWRWZXJpZmljYXRpb24iLCJpZFZlcmlmaWNhdGlvbkRpbGUiLCJvbWl0IiwiQXV0aFNlcnZpY2UiLCJzZXRBdXRoSGVhZGVyIiwicm9sZSIsImV4cGlyZXMiLCJwZXJmb3JtZXJMb2dpbiIsInNldFRva2VuIiwiZ2V0VG9rZW4iLCJnZXRSb2xlIiwicmVtb3ZlVG9rZW4iLCJyZW1vdmUiLCJyZW1vdmVSZW1lbWJlciIsInBlcmZvcm1lcnNSZWdpc3RlciIsInN0dWRpb1JlZ2lzdGVyIiwiZm9yZ290UGFzc3dvcmQiLCJyZXNlbmRWZXJpZmljYXRpb25FbWFpbCIsImF1dGhTZXJ2aWNlIiwiQmFubmVyU2VydmljZSIsImJhbm5lclNlcnZpY2UiLCJnbG9iYWxDb25maWciLCJzZXRHbG9iYWxDb25maWciLCJFYXJuaW5nU2VydmljZSIsInN0YXRzIiwiZWFybmluZ1NlcnZpY2UiLCJGYXZvdXJpdGVTZXJ2aWNlIiwibGlrZSIsInVubGlrZSIsImZhdm9yaXRlIiwiaXNGYXZvcml0ZWQiLCJmYXZvdXJpdGVTZXJ2aWNlIiwiR2FsbGVyeVNlcnZpY2UiLCJpc1BlcmZvcm1lciIsInB1cmNoYXNlZCIsImNyZWF0ZSIsInVwZGF0ZSIsImRldGFpbHMiLCJwdWJsaWNkZXRhaWxzIiwiZ2FsbGVyeVNlcnZpY2UiLCJNZXNzYWdlU2VydmljZSIsImdldENvbnZlcnNhdGlvbnMiLCJzZWFyY2hDb252ZXJzYXRpb25zIiwiY3JlYXRlQ29udmVyc2F0aW9uIiwiZ2V0Q29udmVyc2F0aW9uRGV0YWlsIiwiZ2V0Q29udmVyc2F0aW9uQnlTdHJlYW1JZCIsInN0cmVhbUlkIiwiZ2V0TWVzc2FnZXMiLCJjb252ZXJzYXRpb25JZCIsImdldFB1YmxpY01lc3NhZ2VzIiwic2VuZE1lc3NhZ2UiLCJzZW5kU3RyZWFtTWVzc2FnZSIsInNlbmRQdWJsaWNTdHJlYW1NZXNzYWdlIiwiZmluZFB1YmxpY0NvbnZlcnNhdGlvblBlcmZvcm1lciIsInBlcmZvcm1lcklkIiwiY291bnRUb3RhbE5vdFJlYWQiLCJyZWFkQWxsSW5Db252ZXJzYXRpb24iLCJyZWNpcGllbnRJZCIsImdldE1lc3NhZ2VVcGxvYWRVcmwiLCJkZWxldGVNZXNzYWdlIiwiZGVsZXRlQWxsTWVzc2FnZUluQ29udmVyc2F0aW9uIiwibWVzc2FnZVNlcnZpY2UiLCJPcmRlclNlcnZpY2UiLCJwYXlsb2FkIiwidXNlclNlYXJjaCIsInVzZXJGaW5kRGV0YWlscyIsIm9yZGVyU2VydmljZSIsIlBheW1lbnRJbmZvcm1hdGlvblNlcnZpY2UiLCJmaW5kT25lIiwicGF5bWVudEluZm9ybWF0aW9uU2VydmljZSIsIlBheW91dFJlcXVlc3RTZXJ2aWNlIiwiY2FsY3VsYXRlIiwic3R1ZGlvU2VhcmNoIiwiZGV0YWlsIiwicGF5b3V0UmVxdWVzdFNlcnZpY2UiLCJQZXJmb3JtZXJDYXRlZ29yaWVzU2VydmljZSIsImdldExpc3QiLCJwZXJmb3JtZXJDYXRlZ29yaWVzIiwiUGVyZm9ybWVyU2VydmljZSIsIm1lIiwidXBkYXRlTWUiLCJ1c2VybmFtZSIsImdldEF2YXRhclVwbG9hZFVybCIsImdldERvY3VtZW50c1VwbG9hZFVybCIsImdldFJlbGVhc2VGb3JtVXJsIiwibXlQcm9kdWN0IiwiY3JlYXRlUHJvZHVjdCIsImltYWdlIiwiZGlnaXRhbEZpbGUiLCJ1cGRhdGVQcm9kdWN0IiwicmVtb3ZlUHJvZHVjdCIsImdldENvbW1pc3Npb24iLCJ1cGRhdGVQYXltZW50SW5mbyIsInVwZGF0ZURpcmVjdERlcG9zdCIsInVwZGF0ZVBheHVtIiwidXBkYXRlQml0cGF5IiwidXBkYXRlU3RyZWFtaW5nU3RhdHVzIiwiZ2VvQmxvY2siLCJnZXRCbG9ja2VkTGlzdCIsImluY3JlYXNlVmlldyIsInVwZGF0ZURlZmF1bHRQcmljZSIsInVwZGF0ZUJyb2FkY2FzdFNldHRpbmciLCJzdXNwZW5kQWNjb3VudCIsInBhc3N3b3JkIiwiY2hlY2tCbG9jayIsIkdFTk5ERVJfUEVSRk9STUVSIiwicGVyZm9ybWVyU2VydmljZSIsIlBob3RvU2VydmljZSIsInNlYXJjaEJ5R2FsbGVyeSIsImdhbGxlcnlJZCIsIm15UGhvdG9zIiwicGhvdG8iLCJ1cGxvYWRJbWFnZXMiLCJwaG90b1NlcnZpY2UiLCJQb3N0U2VydmljZSIsImZpbmRCeUlkIiwiY3JlYXRlQ29udGFjdENvdGVudCIsInBvc3RTZXJ2aWNlIiwiUHJvZHVjdFNlcnZpY2UiLCJnZXREb3dubG9hZExpbmsiLCJwcm9kdWN0U2VydmljZSIsIlB1cmNoYXNlSXRlbVNlcnZpY2UiLCJwdXJjaGFzZUl0ZW0iLCJwdXJjaGFzZVByb2R1Y3QiLCJwdXJjaGFzZVZpZGVvIiwicHVyY2hhc2VJdGVtU2VydmljZSIsIlJlZnVuZFJlcXVlc3RTZXJ2aWNlIiwicmVmdW5kUmVxdWVzdFNlcnZpY2UiLCJTZXR0aW5nU2VydmljZSIsImdyb3VwIiwiZ2V0Q291bnRyaWVzIiwiZ2V0VGltZXpvbmVzIiwic2V0dGluZ1NlcnZpY2UiLCJTdHJlYW1TZXJ2aWNlIiwiZ2V0U2Vzc2lvbklkIiwiZ29MaXZlIiwiam9pblB1YmxpY0NoYXQiLCJyZXF1ZXN0UHJpdmF0ZUNoYXQiLCJhY2NlcHRQcml2YXRlQ2hhdCIsInN0YXJ0R3JvdXBDaGF0Iiwiam9pbkdyb3VwQ2hhdCIsImdlbmVyYXRlT25lVGltZVRva2VuIiwiZ2V0UHVibGlzaFRva2VuIiwiZXhwaXJlRGF0ZSIsImFkZCIsInRvRGF0ZSIsImdldFRpbWUiLCJzZWN1cmVPcHRpb24iLCJyZXNwIiwidG9rZW5JZCIsImdldFN1YnNjcmliZXJUb2tlbiIsImdldExpdmVTdHJlYW1PclZvZFVSTCIsIl9wbGF5ZXIiLCJhcHBOYW1lIiwidmlld2VyVVJMIiwiZXh0ZW5zaW9uIiwib25lVGltZVRva2VuIiwic3RyZWFtU2VydmljZSIsIlN0dWRpb1NlcnZpY2UiLCJhZGRNb2RlbCIsImdldE1lbWJlcnMiLCJnZXRNZW1iZXJDb21taXNzaW9ucyIsInVwZGF0ZU1lbWJlckNvbW1pc3Npb24iLCJnZXRQZXJmb3JtZXJSZXF1ZXN0IiwidXBkYXRlU3RhdHVzUGVyZm9ybWVyUmVxdWVzdCIsInVwZGF0ZU1lbWJlclN0YXR1cyIsInN0dWRpb1NlcnZpY2UiLCJUb2tlblBhY2thZ2VTZXJ2aWNlIiwiYnV5VG9rZW5zIiwidG9rZW5QYWNrYWdlU2VydmljZSIsIlRyYW5zYWN0aW9uU2VydmljZSIsInNlbmRUaXBUb2tlbiIsInNlbmRQYWlkVG9rZW4iLCJ0cmFuc2FjdGlvblNlcnZpY2UiLCJVc2VyU2VydmljZSIsInVzZXJJZCIsInVzZXJTZXJ2aWNlIiwiVXRpbHNTZXJ2aWNlIiwiY291bnRyaWVzTGlzdCIsImxhbmd1YWdlc0xpc3QiLCJwaG9uZUNvZGVzTGlzdCIsInN0YXRpc3RpY3MiLCJWaWRlb1NlcnZpY2UiLCJteVZpZGVvcyIsInJlbW92ZU15VmlkZW8iLCJ2aWRlbyIsInRyYWlsZXIiLCJ0aHVtYm5haWwiLCJ1c2VyRmluZFZpZGVvQnlJZCIsInZpZGVvU2VydmljZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7O0FBRUE7O0FBUUE7O0FBc0JBO0FBQ0EsTUFBTUEsU0FBUyxHQUFHLElBQWxCLEdBQWtCLEVBQWxCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQ3hCLFFBQWdDQyxTQUFoQyxHQURGO0FBRUEsTUFBTUMsVUFBMkMsR0FBakQ7O0FBRUEsdUJBQXlEO0FBQ3ZEO0FBQ0Esc0JBQW9CO0FBQ2xCO0FBR0YsR0FOdUQsQ0FNdkQ7OztBQUNBLE1BQUksQ0FBSixzQkFBMkI7QUFDekI7QUFHRjs7QUFBQSxTQUFRQyxjQUFjLEdBQUcseUJBQ3RCQyxPQUFELElBQWE7QUFDWEEsV0FBTyxDQUFQQSxRQUFpQkMsS0FBRCxJQUFXO0FBQ3pCLFVBQUksQ0FBQ04sU0FBUyxDQUFUQSxJQUFjTSxLQUFLLENBQXhCLE1BQUtOLENBQUwsRUFBa0M7QUFDaEM7QUFHRjs7QUFBQSxZQUFNTyxFQUFFLEdBQUdQLFNBQVMsQ0FBVEEsSUFBY00sS0FBSyxDQUE5QixNQUFXTixDQUFYOztBQUNBLFVBQUlNLEtBQUssQ0FBTEEsa0JBQXdCQSxLQUFLLENBQUxBLG9CQUE1QixHQUF5RDtBQUN2REYsc0JBQWMsQ0FBZEEsVUFBeUJFLEtBQUssQ0FBOUJGO0FBQ0FKLGlCQUFTLENBQVRBLE9BQWlCTSxLQUFLLENBQXRCTjtBQUNBTyxVQUFFO0FBRUw7QUFYREY7QUFGcUIsS0FldkI7QUFBRUcsY0FBVSxFQWZkO0FBZUUsR0FmdUIsQ0FBekI7QUFtQkY7O0FBQUEsTUFBTUMscUJBQXFCLEdBQUcsWUFBaUM7QUFDN0QsUUFBTUMsUUFBUSxHQUFHQyxXQUFqQjs7QUFDQSxNQUFJLENBQUosVUFBZTtBQUNiLFdBQU8sTUFBTSxDQUFiO0FBR0ZEOztBQUFBQSxVQUFRLENBQVJBO0FBQ0FWLFdBQVMsQ0FBVEE7QUFDQSxTQUFPLE1BQU07QUFDWCxRQUFJO0FBQ0ZVLGNBQVEsQ0FBUkE7QUFDQSxLQUZGLENBRUUsWUFBWTtBQUNaRSxhQUFPLENBQVBBO0FBRUZaOztBQUFBQSxhQUFTLENBQVRBO0FBTkY7QUFSRjs7QUFrQkEsNkNBS1E7QUFDTixZQUFtQztBQUNuQyxNQUFJLENBQUMsd0JBQUwsSUFBSyxDQUFMLEVBQXVCLE9BRmpCLENBR047QUFDQTtBQUNBO0FBQ0E7O0FBQ0FhLFFBQU0sQ0FBTkEsa0NBQTBDQyxHQUFELElBQVM7QUFDaEQsY0FBMkM7QUFDekM7QUFDQTtBQUVIO0FBTERELEtBUE0sQ0FhTjs7QUFDQVYsWUFBVSxDQUFDWSxJQUFJLEdBQUpBLE1BQVhaLEVBQVUsQ0FBVkE7QUFHRjs7QUFBQSxnQ0FBa0Q7QUFDaEQsUUFBTTtBQUFBO0FBQUEsTUFBYWEsS0FBSyxDQUF4QjtBQUNBLFNBQ0dDLE1BQU0sSUFBSUEsTUFBTSxLQUFqQixPQUFDQSxJQUNERCxLQUFLLENBREwsT0FBQ0MsSUFFREQsS0FBSyxDQUZMLE9BQUNDLElBR0RELEtBQUssQ0FITCxRQUFDQyxJQUlERCxLQUFLLENBSkwsTUFBQ0MsSUFJZTtBQUNmRCxPQUFLLENBQUxBLGVBQXFCQSxLQUFLLENBQUxBLHNCQU54QjtBQVVGOztBQUFBLG9FQVFRO0FBQ04sUUFBTTtBQUFBO0FBQUEsTUFBZUUsQ0FBQyxDQUF0Qjs7QUFFQSxNQUFJQyxRQUFRLEtBQVJBLFFBQXFCQyxlQUFlLENBQWZBLENBQWUsQ0FBZkEsSUFBc0IsQ0FBQyx3QkFBaEQsSUFBZ0QsQ0FBNUNELENBQUosRUFBbUU7QUFDakU7QUFDQTtBQUdGRDs7QUFBQUEsR0FBQyxDQUFEQSxpQkFSTSxDQVVOOztBQUNBLE1BQUlHLE1BQU0sSUFBVixNQUFvQjtBQUNsQkEsVUFBTSxHQUFHQyxFQUFFLENBQUZBLGVBQVREO0FBR0YsR0FmTSxDQWVOOzs7QUFDQVIsUUFBTSxDQUFDVSxPQUFPLGVBQWRWLE1BQU0sQ0FBTkEsV0FBK0M7QUFBL0NBO0FBQStDLEdBQS9DQSxPQUNHVyxPQUFELElBQXNCO0FBQ3BCLFFBQUksQ0FBSixTQUFjOztBQUNkLGdCQUFZO0FBQ1Z0QixZQUFNLENBQU5BO0FBQ0F1QixjQUFRLENBQVJBO0FBRUg7QUFQSFo7QUFXRjs7QUFBQSxxQkFBeUQ7QUFDdkQsWUFBMkM7QUFDekMsbUNBSUc7QUFDRCxhQUFPLFVBQ0osZ0NBQStCYSxJQUFJLENBQUNDLEdBQUksZ0JBQWVELElBQUksQ0FBQ0UsUUFBUyw2QkFBNEJGLElBQUksQ0FBQ0csTUFBdkcsYUFBQyxJQUNFLG9CQUZMLEVBQ0csQ0FESSxDQUFQO0FBUUYsS0FkeUMsQ0FjekM7OztBQUNBLFVBQU1DLGtCQUFtRCxHQUFHO0FBQzFEZixVQUFJLEVBRE47QUFBNEQsS0FBNUQ7QUFHQSxVQUFNZ0IsYUFBa0MsR0FBR0MsTUFBTSxDQUFOQSxLQUEzQyxrQkFBMkNBLENBQTNDO0FBR0EsaUJBQWEsQ0FBYixRQUF1QkwsR0FBRCxJQUE0QjtBQUNoRCxVQUFJQSxHQUFHLEtBQVAsUUFBb0I7QUFDbEIsWUFDRU0sS0FBSyxDQUFMQSxHQUFLLENBQUxBLFlBQ0MsT0FBT0EsS0FBSyxDQUFaLEdBQVksQ0FBWixpQkFBa0MsT0FBT0EsS0FBSyxDQUFaLEdBQVksQ0FBWixLQUZyQyxVQUdFO0FBQ0EsZ0JBQU1DLGVBQWUsQ0FBQztBQUFBO0FBRXBCTixvQkFBUSxFQUZZO0FBR3BCQyxrQkFBTSxFQUFFSSxLQUFLLENBQUxBLEdBQUssQ0FBTEEscUJBQStCLE9BQU9BLEtBQUssQ0FIckQsR0FHcUQ7QUFIL0IsV0FBRCxDQUFyQjtBQU1IO0FBWEQsYUFXTztBQUNMO0FBQ0E7QUFDQSxjQUFNRSxDQUFRLEdBQWQ7QUFFSDtBQWpCRCxPQXJCeUMsQ0F3Q3pDOztBQUNBLFVBQU1DLGtCQUFtRCxHQUFHO0FBQzFEZCxRQUFFLEVBRHdEO0FBRTFEQyxhQUFPLEVBRm1EO0FBRzFERixZQUFNLEVBSG9EO0FBSTFEZ0IsYUFBTyxFQUptRDtBQUsxREMsY0FBUSxFQUxrRDtBQU0xREMsY0FBUSxFQU5WO0FBQTRELEtBQTVEO0FBUUEsVUFBTUMsYUFBa0MsR0FBR1IsTUFBTSxDQUFOQSxLQUEzQyxrQkFBMkNBLENBQTNDO0FBR0EsaUJBQWEsQ0FBYixRQUF1QkwsR0FBRCxJQUE0QjtBQUNoRCxVQUFJQSxHQUFHLEtBQVAsTUFBa0I7QUFDaEIsWUFDRU0sS0FBSyxDQUFMQSxHQUFLLENBQUxBLElBQ0EsT0FBT0EsS0FBSyxDQUFaLEdBQVksQ0FBWixLQURBQSxZQUVBLE9BQU9BLEtBQUssQ0FBWixHQUFZLENBQVosS0FIRixVQUlFO0FBQ0EsZ0JBQU1DLGVBQWUsQ0FBQztBQUFBO0FBRXBCTixvQkFBUSxFQUZZO0FBR3BCQyxrQkFBTSxFQUFFLE9BQU9JLEtBQUssQ0FIdEIsR0FHc0I7QUFIQSxXQUFELENBQXJCO0FBTUg7QUFaRCxhQVlPLElBQ0xOLEdBQUcsS0FBSEEsYUFDQUEsR0FBRyxLQURIQSxZQUVBQSxHQUFHLEtBRkhBLGFBR0FBLEdBQUcsS0FISEEsY0FJQUEsR0FBRyxLQUxFLFlBTUw7QUFDQSxZQUFJTSxLQUFLLENBQUxBLEdBQUssQ0FBTEEsWUFBc0IsT0FBT0EsS0FBSyxDQUFaLEdBQVksQ0FBWixLQUExQixXQUEyRDtBQUN6RCxnQkFBTUMsZUFBZSxDQUFDO0FBQUE7QUFFcEJOLG9CQUFRLEVBRlk7QUFHcEJDLGtCQUFNLEVBQUUsT0FBT0ksS0FBSyxDQUh0QixHQUdzQjtBQUhBLFdBQUQsQ0FBckI7QUFNSDtBQWRNLGFBY0E7QUFDTDtBQUNBO0FBQ0EsY0FBTUUsQ0FBUSxHQUFkO0FBRUg7QUFoQ0QsT0FwRHlDLENBc0Z6QztBQUNBOztBQUNBLFVBQU1NLFNBQVMsR0FBR0Msc0JBQWxCLEtBQWtCQSxDQUFsQjs7QUFDQSxRQUFJVCxLQUFLLENBQUxBLFlBQWtCLENBQUNRLFNBQVMsQ0FBaEMsU0FBMEM7QUFDeENBLGVBQVMsQ0FBVEE7QUFDQTdCLGFBQU8sQ0FBUEE7QUFJSDtBQUNEOztBQUFBLFFBQU0rQixDQUFDLEdBQUdWLEtBQUssQ0FBTEEsYUFBVjs7QUFFQSxRQUFNLDBCQUEwQlMsZUFBaEMsUUFBZ0NBLEVBQWhDOztBQUVBLFFBQU03QixNQUFNLEdBQUcsYUFBZixTQUFlLEdBQWY7QUFDQSxRQUFNK0IsUUFBUSxHQUFJL0IsTUFBTSxJQUFJQSxNQUFNLENBQWpCLFFBQUNBLElBQWxCOztBQUVBLFFBQU07QUFBQTtBQUFBO0FBQUEsTUFBZTZCLHVCQUFjLE1BQU07QUFDdkMsVUFBTSw2QkFBNkIsbUNBQXNCVCxLQUFLLENBQTNCLE1BQW5DLElBQW1DLENBQW5DO0FBQ0EsV0FBTztBQUNMbEIsVUFBSSxFQURDO0FBRUxPLFFBQUUsRUFBRVcsS0FBSyxDQUFMQSxLQUNBLG1DQUFzQkEsS0FBSyxDQUQzQkEsRUFDQSxDQURBQSxHQUVBWSxVQUFVLElBSmhCO0FBQU8sS0FBUDtBQUZtQkgsS0FRbEIsV0FBV1QsS0FBSyxDQUFoQixNQUF1QkEsS0FBSyxDQVIvQixFQVFHLENBUmtCUyxDQUFyQjs7QUFVQSwyQkFBZ0IsTUFBTTtBQUNwQixRQUNFQyxDQUFDLElBQURBLG9DQUdBRyxRQUFRLENBSFJILFdBSUEsd0JBTEYsSUFLRSxDQUxGLEVBTUU7QUFDQTtBQUNBLFlBQU1JLFlBQVksR0FBRzVDLFVBQVUsQ0FBQ1ksSUFBSSxHQUFKQSxNQUFoQyxFQUErQixDQUEvQjs7QUFDQSxVQUFJLENBQUosY0FBbUI7QUFDakIsZUFBT04scUJBQXFCLFdBQVcsTUFBTTtBQUMzQzhCLGtCQUFRLGVBQVJBLEVBQVEsQ0FBUkE7QUFERixTQUE0QixDQUE1QjtBQUlIO0FBQ0Y7QUFoQkQsS0FnQkcsd0JBaEJILE1BZ0JHLENBaEJIOztBQWtCQSxNQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFKLE1BcEl1RCxDQXFJdkQ7O0FBQ0EsTUFBSSxvQkFBSixVQUFrQztBQUNoQ1MsWUFBUSxnQkFBRyx3Q0FBWEEsUUFBVyxDQUFYQTtBQUdGLEdBMUl1RCxDQTBJdkQ7OztBQUNBLFFBQU1DLEtBQVUsR0FBR0MscUJBQW5CLFFBQW1CQSxDQUFuQjs7QUFDQSxRQUFNQyxVQUtMLEdBQUc7QUFDRkMsT0FBRyxFQUFHQyxFQUFELElBQWE7QUFDaEIsY0FBUUMsV0FBVyxDQUFYQSxFQUFXLENBQVhBOztBQUVSLFVBQUlMLEtBQUssSUFBSSxpQkFBVEEsWUFBc0NBLEtBQUssQ0FBL0MsS0FBcUQ7QUFDbkQsWUFBSSxPQUFPQSxLQUFLLENBQVosUUFBSixZQUFxQ0EsS0FBSyxDQUFMQSxJQUFyQyxFQUFxQ0EsRUFBckMsS0FDSyxJQUFJLE9BQU9BLEtBQUssQ0FBWixRQUFKLFVBQW1DO0FBQ3RDQSxlQUFLLENBQUxBO0FBRUg7QUFDRjtBQVZDO0FBV0ZNLFdBQU8sRUFBR3JDLENBQUQsSUFBeUI7QUFDaEMsVUFBSStCLEtBQUssQ0FBTEEsU0FBZSxPQUFPQSxLQUFLLENBQUxBLE1BQVAsWUFBbkIsWUFBOEQ7QUFDNURBLGFBQUssQ0FBTEE7QUFFRjs7QUFBQSxVQUFJLENBQUMvQixDQUFDLENBQU4sa0JBQXlCO0FBQ3ZCc0MsbUJBQVcsd0NBQVhBLE1BQVcsQ0FBWEE7QUFFSDtBQXZCSDtBQUtJLEdBTEo7O0FBMEJBLFNBQU87QUFDTEwsY0FBVSxDQUFWQSxlQUEyQmpDLENBQUQsSUFBeUI7QUFDakQsVUFBSSxDQUFDLHdCQUFMLElBQUssQ0FBTCxFQUF1Qjs7QUFDdkIsVUFBSStCLEtBQUssQ0FBTEEsU0FBZSxPQUFPQSxLQUFLLENBQUxBLE1BQVAsaUJBQW5CLFlBQW1FO0FBQ2pFQSxhQUFLLENBQUxBO0FBRUZWOztBQUFBQSxjQUFRLG1CQUFtQjtBQUFFa0IsZ0JBQVEsRUFBckNsQjtBQUEyQixPQUFuQixDQUFSQTtBQUxGWTtBQVNGLEdBaEx1RCxDQWdMdkQ7QUFDQTs7O0FBQ0EsTUFBSWxCLEtBQUssQ0FBTEEsWUFBbUJnQixLQUFLLENBQUxBLGdCQUFzQixFQUFFLFVBQVVBLEtBQUssQ0FBOUQsS0FBNkMsQ0FBN0MsRUFBd0U7QUFDdEVFLGNBQVUsQ0FBVkEsT0FBa0IseUJBQ2hCLDJCQUFjdEMsTUFBTSxJQUFJQSxNQUFNLENBQTlCLFFBQXVDQSxNQUFNLElBQUlBLE1BQU0sQ0FEekRzQyxhQUNFLENBRGdCLENBQWxCQTtBQUtGOztBQUFBLHNCQUFPVCxtQ0FBUCxVQUFPQSxDQUFQOzs7ZUFHYWdCLEk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RWZjs7OztBQUdPLHVDQUF1RDtBQUM1RCxTQUFPQyxJQUFJLENBQUpBLGlCQUFzQkEsSUFBSSxLQUExQkEsTUFBcUNBLElBQUksQ0FBSkEsU0FBYyxDQUFuREEsQ0FBcUNBLENBQXJDQSxHQUFQO0FBR0Y7QUFBQTs7Ozs7O0FBSU8sTUFBTUMsMEJBQTBCLEdBQUdDLFNBQ3JDRixTQURxQ0UsR0FBbkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZQOztBQUNBOzs7OztBQUNBOztBQXNIQTs7O0FBekhBOztBQW1CQSxNQUFNQyxlQUFvQyxHQUFHO0FBQzNDakQsUUFBTSxFQURxQztBQUM3QjtBQUNka0QsZ0JBQWMsRUFGNkI7O0FBRzNDQyxPQUFLLEtBQWlCO0FBQ3BCLFFBQUksS0FBSixRQUFpQixPQUFPekQsRUFBUDs7QUFDakIsZUFBbUMsRUFHcEM7QUFSSDs7QUFBNkMsQ0FBN0MsQyxDQVdBOztBQUNBLE1BQU0wRCxpQkFBaUIsR0FBRyxzR0FBMUIsZUFBMEIsQ0FBMUI7QUFZQSxNQUFNQyxZQUFZLEdBQUcsMEdBQXJCLG9CQUFxQixDQUFyQjtBQVFBLE1BQU1DLGdCQUFnQixHQUFHLGtEQUF6QixnQkFBeUIsQ0FBekIsQyxDQVNBOztBQUNBbkMsTUFBTSxDQUFOQSwwQ0FBaUQ7QUFDL0NvQyxLQUFHLEdBQUc7QUFDSixXQUFPQyxpQkFBUDtBQUZKckM7O0FBQWlELENBQWpEQTtBQU1BaUMsaUJBQWlCLENBQWpCQSxRQUEyQkssS0FBRCxJQUFXO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0F0QyxRQUFNLENBQU5BLHVDQUE4QztBQUM1Q29DLE9BQUcsR0FBRztBQUNKLFlBQU12RCxNQUFNLEdBQUcwRCxTQUFmO0FBQ0EsYUFBTzFELE1BQU0sQ0FBYixLQUFhLENBQWI7QUFISm1COztBQUE4QyxHQUE5Q0E7QUFMRmlDO0FBYUEsZ0JBQWdCLENBQWhCLFFBQTBCSyxLQUFELElBQVc7QUFDbEM7QUFDQTs7QUFBRVIsaUJBQUQsT0FBQ0EsR0FBaUMsQ0FBQyxHQUFELFNBQW9CO0FBQ3JELFVBQU1qRCxNQUFNLEdBQUcwRCxTQUFmO0FBQ0EsV0FBTzFELE1BQU0sQ0FBTkEsS0FBTSxDQUFOQSxDQUFjLEdBQXJCLElBQU9BLENBQVA7QUFGRCxHQUFDaUQ7QUFGSjtBQVFBSSxZQUFZLENBQVpBLFFBQXNCbEQsS0FBRCxJQUFXO0FBQzlCOEMsaUJBQWUsQ0FBZkEsTUFBc0IsTUFBTTtBQUMxQk8sc0NBQXdCLENBQUMsR0FBRCxTQUFhO0FBQ25DLFlBQU1HLFVBQVUsR0FBSSxLQUFJeEQsS0FBSyxDQUFMQSx1QkFBOEIsR0FBRUEsS0FBSyxDQUFMQSxZQUF4RDtBQUdBLFlBQU15RCxnQkFBZ0IsR0FBdEI7O0FBQ0EsVUFBSUEsZ0JBQWdCLENBQXBCLFVBQW9CLENBQXBCLEVBQWtDO0FBQ2hDLFlBQUk7QUFDRkEsMEJBQWdCLENBQWhCQSxVQUFnQixDQUFoQkEsQ0FBNkIsR0FBN0JBO0FBQ0EsU0FGRixDQUVFLFlBQVk7QUFDWjdELGlCQUFPLENBQVBBLE1BQWUsd0NBQXVDNEQsVUFBdEQ1RDtBQUNBQSxpQkFBTyxDQUFQQSxNQUFlLEdBQUVFLEdBQUcsQ0FBQzRELE9BQVEsS0FBSTVELEdBQUcsQ0FBQzZELEtBQXJDL0Q7QUFFSDtBQUNGO0FBYkR5RDtBQURGUDtBQURGSTs7QUFtQkEscUJBQTZCO0FBQzNCLE1BQUksQ0FBQ0osZUFBZSxDQUFwQixRQUE2QjtBQUMzQixVQUFNWSxPQUFPLEdBQ1gsZ0NBREY7QUFHQSxVQUFNLFVBQU4sT0FBTSxDQUFOO0FBRUY7O0FBQUEsU0FBT1osZUFBZSxDQUF0QjtBQUdGLEMsQ0FBQTs7O2VBQ2VBLGUsRUFFZjs7OztBQUdPLHFCQUFpQztBQUN0QyxTQUFPcEIsMEJBQWlCa0MsZUFBeEIsYUFBT2xDLENBQVA7QUFHRixDLENBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFDTyxNQUFNbUMsWUFBWSxHQUFHLENBQUMsR0FBRCxTQUFpQztBQUMzRGYsaUJBQWUsQ0FBZkEsU0FBeUIsSUFBSU8sU0FBSixRQUFXLEdBQXBDUCxJQUF5QixDQUF6QkE7QUFDQUEsaUJBQWUsQ0FBZkEsdUJBQXdDdkQsRUFBRCxJQUFRQSxFQUEvQ3VEO0FBQ0FBLGlCQUFlLENBQWZBO0FBRUEsU0FBT0EsZUFBZSxDQUF0QjtBQUxLLEUsQ0FRUDs7Ozs7QUFDTywwQ0FBOEQ7QUFDbkUsUUFBTWdCLE9BQU8sR0FBYjtBQUNBLFFBQU1DLFFBQVEsR0FBZDs7QUFFQSxPQUFLLE1BQUwsK0JBQTBDO0FBQ3hDLFFBQUksT0FBT0QsT0FBTyxDQUFkLFFBQWMsQ0FBZCxLQUFKLFVBQTJDO0FBQ3pDQyxjQUFRLENBQVJBLFFBQVEsQ0FBUkEsR0FBcUIvQyxNQUFNLENBQU5BLE9BQ25CZ0QsS0FBSyxDQUFMQSxRQUFjRixPQUFPLENBQXJCRSxRQUFxQixDQUFyQkEsU0FEbUJoRCxJQUVuQjhDLE9BQU8sQ0FGVEMsUUFFUyxDQUZZL0MsQ0FBckIrQyxDQUR5QyxDQUl2Qzs7QUFDRjtBQUdGQTs7QUFBQUEsWUFBUSxDQUFSQSxRQUFRLENBQVJBLEdBQXFCRCxPQUFPLENBQTVCQyxRQUE0QixDQUE1QkE7QUFHRixHQWhCbUUsQ0FnQm5FOzs7QUFDQUEsVUFBUSxDQUFSQSxTQUFrQlYsaUJBQWxCVTtBQUVBWixrQkFBZ0IsQ0FBaEJBLFFBQTBCRyxLQUFELElBQVc7QUFDbENTLFlBQVEsQ0FBUkEsS0FBUSxDQUFSQSxHQUFrQixDQUFDLEdBQUQsU0FBb0I7QUFDcEMsYUFBT0QsT0FBTyxDQUFQQSxLQUFPLENBQVBBLENBQWUsR0FBdEIsSUFBT0EsQ0FBUDtBQURGQztBQURGWjtBQU1BO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pLRDs7QUFFQTs7QUFXZSx1Q0FLK0I7QUFDNUMsb0NBQXVDO0FBQ3JDLHdCQUFPO0FBQW1CLFlBQU0sRUFBRSxZQUEzQixTQUEyQjtBQUEzQixPQUFQLEtBQU8sRUFBUDtBQUdGOztBQUFBLG1CQUFpQixDQUFqQixrQkFBb0NjLGlCQUFpQixDQUFDQyxlQUF0RCxDQUNBO0FBREE7QUFFRUMsbUJBQUQsb0JBQUNBLEdBQWlERixpQkFBRCxDQUFqRCxtQkFBQ0U7O0FBQ0YsWUFBMkM7QUFDekMsVUFBTUMsSUFBSSxHQUNSSCxpQkFBaUIsQ0FBakJBLGVBQWlDQSxpQkFBaUIsQ0FBbERBLFFBREY7QUFFQUUscUJBQWlCLENBQWpCQSxjQUFpQyxjQUFhQyxJQUE5Q0Q7QUFHRjs7QUFBQTtBQUNELEM7Ozs7Ozs7Ozs7OztBQ2pDWTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw4Q0FBOEM7QUFDdkU7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG9EQUFvRDtBQUM3RTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLHlCQUF5QiwwQ0FBMEM7QUFDbkU7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qix5QkFBeUIsMkNBQTJDO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsc0NBQXNDO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDRDQUE0QztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQTBDO0FBQy9EO0FBQ0EsaUJBQWlCLG1DQUFtQztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsY0FBYztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsY0FBYztBQUMzQztBQUNBLG9FQUFvRSxVQUFVLEVBQUU7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsdUJBQXVCLG1CQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGtCQUFrQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGNBQWM7QUFDM0Msb0VBQW9FLFVBQVUsRUFBRTtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsY0FBYztBQUNyQztBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG1CQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxpREFBaUQsRUFBRTtBQUM5RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsY0FBYztBQUMzQyx3T0FBd08sVUFBVSxFQUFFO0FBQ3BQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHNCQUFzQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDZEQUE2RDtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JaQTs7Ozs7OztBQVlBO0FBQ0E7QUFDQTs7QUFVZSxnQkFBNkI7QUFDMUMsUUFBTUUsR0FBK0IsR0FBR3JELE1BQU0sQ0FBTkEsT0FBeEMsSUFBd0NBLENBQXhDO0FBRUEsU0FBTztBQUNMc0QsTUFBRSxnQkFBaUM7QUFDakM7QUFBQyxPQUFDRCxHQUFHLENBQUhBLElBQUcsQ0FBSEEsS0FBY0EsR0FBRyxDQUFIQSxJQUFHLENBQUhBLEdBQWYsRUFBQ0EsQ0FBRDtBQUZFOztBQUtMRSxPQUFHLGdCQUFpQztBQUNsQyxVQUFJRixHQUFHLENBQVAsSUFBTyxDQUFQLEVBQWU7QUFDYkEsV0FBRyxDQUFIQSxJQUFHLENBQUhBLFFBQWlCQSxHQUFHLENBQUhBLElBQUcsQ0FBSEEsc0JBQWpCQTtBQUVIO0FBVEk7O0FBV0xHLFFBQUksT0FBZSxHQUFmLE1BQStCO0FBQ2pDO0FBQ0E7QUFBQyxPQUFDSCxHQUFHLENBQUhBLElBQUcsQ0FBSEEsSUFBRCxnQkFBK0JJLE9BQUQsSUFBc0I7QUFDbkRBLGVBQU8sQ0FBQyxHQUFSQSxJQUFPLENBQVBBO0FBREQ7QUFiTDs7QUFBTyxHQUFQO0FBa0JELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENEOztBQUtBOztBQUNBOztBQUNBOztBQVNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUEzQkE7QUFBQTtBQUNBOzs7QUF3Q0EsTUFBTUMsUUFBUSxHQUFJN0IsVUFBbEI7O0FBRUEsa0NBQWtDO0FBQ2hDLFNBQU83QixNQUFNLENBQU5BLE9BQWMsVUFBZEEsaUJBQWMsQ0FBZEEsRUFBNEM7QUFDakQyRCxhQUFTLEVBRFg7QUFBbUQsR0FBNUMzRCxDQUFQO0FBS0Y7O0FBQUEscUNBQXNEO0FBQ3BELFNBQU80RCxNQUFNLElBQUlqQyxJQUFJLENBQUpBLFdBQVZpQyxHQUFVakMsQ0FBVmlDLEdBQ0hqQyxJQUFJLEtBQUpBLE1BQ0Usd0RBREZBLE1BQ0UsQ0FERkEsR0FFRyxHQUFFaUMsTUFBTyxHQUFFakMsSUFIWGlDLEtBQVA7QUFPSzs7QUFBQSxnREFJTDtBQUNBLE1BQUkvQixLQUFKLEVBQXFDLEVBS3JDOztBQUFBO0FBR0s7O0FBQUEsaUNBQWtEO0FBQ3ZELE1BQUlBLEtBQUosRUFBcUMsRUFLckM7O0FBQUE7QUFHSzs7QUFBQSwyQkFBNEM7QUFDakQsU0FBT0YsSUFBSSxLQUFKQSxZQUFxQkEsSUFBSSxDQUFKQSxXQUFnQitCLFFBQVEsR0FBcEQsR0FBNEIvQixDQUE1QjtBQUdLOztBQUFBLDJCQUEyQztBQUNoRDtBQUNBLFNBQU9rQyxhQUFhLE9BQXBCLFFBQW9CLENBQXBCO0FBR0s7O0FBQUEsMkJBQTJDO0FBQ2hELFNBQU9sQyxJQUFJLENBQUpBLE1BQVcrQixRQUFRLENBQW5CL0IsV0FBUDtBQUdGO0FBQUE7Ozs7O0FBR08seUJBQTBDO0FBQy9DLE1BQUltQyxHQUFHLENBQUhBLFdBQUosR0FBSUEsQ0FBSixFQUF5Qjs7QUFDekIsTUFBSTtBQUNGO0FBQ0EsVUFBTUMsY0FBYyxHQUFHLFdBQXZCLGlCQUF1QixHQUF2QjtBQUNBLFVBQU1DLFFBQVEsR0FBRyxhQUFqQixjQUFpQixDQUFqQjtBQUNBLFdBQU9BLFFBQVEsQ0FBUkEsNkJBQXNDQyxXQUFXLENBQUNELFFBQVEsQ0FBakUsUUFBd0QsQ0FBeEQ7QUFDQSxHQUxGLENBS0UsVUFBVTtBQUNWO0FBRUg7QUFJTTs7QUFBQSxpREFJTDtBQUNBLE1BQUlFLGlCQUFpQixHQUFyQjtBQUVBLFFBQU1DLFlBQVksR0FBRywrQkFBckIsS0FBcUIsQ0FBckI7QUFDQSxRQUFNQyxhQUFhLEdBQUdELFlBQVksQ0FBbEM7QUFDQSxRQUFNRSxjQUFjLEdBQ2xCO0FBQ0EsR0FBQ0MsVUFBVSxLQUFWQSxRQUF1QixpREFBdkJBLFVBQXVCLENBQXZCQSxHQUFELE9BQ0E7QUFDQTtBQUpGO0FBT0FKLG1CQUFpQixHQUFqQkE7QUFDQSxRQUFNSyxNQUFNLEdBQUd2RSxNQUFNLENBQU5BLEtBQWYsYUFBZUEsQ0FBZjs7QUFFQSxNQUNFLENBQUN1RSxNQUFNLENBQU5BLE1BQWNDLEtBQUQsSUFBVztBQUN2QixRQUFJQyxLQUFLLEdBQUdKLGNBQWMsQ0FBZEEsS0FBYyxDQUFkQSxJQUFaO0FBQ0EsVUFBTTtBQUFBO0FBQUE7QUFBQSxRQUF1QkQsYUFBYSxDQUExQyxLQUEwQyxDQUExQyxDQUZ1QixDQUl2QjtBQUNBOztBQUNBLFFBQUlNLFFBQVEsR0FBSSxJQUFHQyxNQUFNLFdBQVcsRUFBRyxHQUFFSCxLQUF6Qzs7QUFDQSxrQkFBYztBQUNaRSxjQUFRLEdBQUksR0FBRSxlQUFlLEVBQUcsSUFBR0EsUUFBbkNBO0FBRUY7O0FBQUEsUUFBSUMsTUFBTSxJQUFJLENBQUMzQixLQUFLLENBQUxBLFFBQWYsS0FBZUEsQ0FBZixFQUFxQ3lCLEtBQUssR0FBRyxDQUFSQSxLQUFRLENBQVJBO0FBRXJDLFdBQ0UsQ0FBQ0csUUFBUSxJQUFJSixLQUFLLElBQWxCLHFCQUNBO0FBQ0NOLHFCQUFpQixHQUNoQkEsaUJBQWlCLENBQWpCQSxrQkFFRVMsTUFBTSxHQUNERixLQUFELElBQUNBLENBQXVCSSxzQkFBeEIsT0FBQ0osRUFBRCxJQUFDQSxDQURDLEdBQ0RBLENBREMsR0FFRixtQ0FKTlAsS0FJTSxDQUpOQSxLQUpKLEdBQ0UsQ0FERjtBQWJKLEdBQ0dLLENBREgsRUF5QkU7QUFDQUwscUJBQWlCLEdBQWpCQSxHQURBLENBQ3VCO0FBRXZCO0FBQ0E7QUFFRjs7QUFBQSxTQUFPO0FBQUE7QUFFTFksVUFBTSxFQUZSO0FBQU8sR0FBUDtBQU1GOztBQUFBLDJDQUFxRTtBQUNuRSxRQUFNQyxhQUE2QixHQUFuQztBQUVBL0UsUUFBTSxDQUFOQSxvQkFBNEJMLEdBQUQsSUFBUztBQUNsQyxRQUFJLENBQUM0RSxNQUFNLENBQU5BLFNBQUwsR0FBS0EsQ0FBTCxFQUEyQjtBQUN6QlEsbUJBQWEsQ0FBYkEsR0FBYSxDQUFiQSxHQUFxQkMsS0FBSyxDQUExQkQsR0FBMEIsQ0FBMUJBO0FBRUg7QUFKRC9FO0FBS0E7QUFHRjtBQUFBOzs7Ozs7QUFJTyxtREFJRztBQUNSO0FBQ0EsUUFBTWlGLElBQUksR0FBRyxxQkFBYixVQUFhLENBQWI7QUFDQSxRQUFNQyxXQUFXLEdBQ2Ysa0NBQWtDLGlDQURwQyxJQUNvQyxDQURwQzs7QUFFQSxNQUFJO0FBQ0YsVUFBTUMsUUFBUSxHQUFHLHFCQUFqQixJQUFpQixDQUFqQjtBQUNBQSxZQUFRLENBQVJBLFdBQW9CLHdEQUEyQkEsUUFBUSxDQUF2REEsUUFBb0IsQ0FBcEJBO0FBQ0EsUUFBSUMsY0FBYyxHQUFsQjs7QUFFQSxRQUNFLCtCQUFlRCxRQUFRLENBQXZCLGFBQ0FBLFFBQVEsQ0FEUixnQkFERixXQUlFO0FBQ0EsWUFBTUgsS0FBSyxHQUFHLHlDQUF1QkcsUUFBUSxDQUE3QyxZQUFjLENBQWQ7QUFFQSxZQUFNO0FBQUE7QUFBQTtBQUFBLFVBQXFCRSxhQUFhLENBQ3RDRixRQUFRLENBRDhCLFVBRXRDQSxRQUFRLENBRjhCLFVBQXhDLEtBQXdDLENBQXhDOztBQU1BLGtCQUFZO0FBQ1ZDLHNCQUFjLEdBQUcsaUNBQXFCO0FBQ3BDeEUsa0JBQVEsRUFENEI7QUFFcEMwRSxjQUFJLEVBQUVILFFBQVEsQ0FGc0I7QUFHcENILGVBQUssRUFBRU8sa0JBQWtCLFFBSDNCSCxNQUcyQjtBQUhXLFNBQXJCLENBQWpCQTtBQU1IO0FBRUQsS0EzQkUsQ0EyQkY7OztBQUNBLFVBQU1JLFlBQVksR0FDaEJMLFFBQVEsQ0FBUkEsV0FBb0JGLElBQUksQ0FBeEJFLFNBQ0lBLFFBQVEsQ0FBUkEsV0FBb0JBLFFBQVEsQ0FBUkEsT0FEeEJBLE1BQ0lBLENBREpBLEdBRUlBLFFBQVEsQ0FIZDtBQUtBLFdBQVFNLFNBQVMsR0FDYixlQUFlTCxjQUFjLElBRGhCLFlBQ2IsQ0FEYSxHQUFqQjtBQUdBLEdBcENGLENBb0NFLFVBQVU7QUFDVixXQUFRSyxTQUFTLEdBQUcsQ0FBSCxXQUFHLENBQUgsR0FBakI7QUFFSDtBQUVEOztBQUFBLE1BQU1DLGVBQWUsR0FBR0MsTUFBTSxDQUE5QixpQkFBOEIsQ0FBOUI7O0FBQ08sK0JBQTZDO0FBQ2xELFNBQU8zRixNQUFNLENBQU5BLHFDQUFQLEVBQU9BLENBQVA7QUFHRjs7QUFBQSx1Q0FBNkQ7QUFDM0Q7QUFDQTtBQUNBLFNBQU87QUFDTDhELE9BQUcsRUFBRThCLFdBQVcsQ0FBQ0MsV0FBVyxDQUFDaEgsTUFBTSxDQUFQLFVBRHZCLEdBQ3VCLENBQVosQ0FEWDtBQUVMUyxNQUFFLEVBQUVBLEVBQUUsR0FBR3NHLFdBQVcsQ0FBQ0MsV0FBVyxDQUFDaEgsTUFBTSxDQUFQLFVBQTFCLEVBQTBCLENBQVosQ0FBZCxHQUZSO0FBQU8sR0FBUDtBQXlERjs7QUFBQSxNQUFNaUgsdUJBQXVCLEdBQzNCakUsVUFFQSxLQUhGOztBQUtBLG1DQUFpRTtBQUMvRCxTQUFPLEtBQUssTUFBTTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FrRSxlQUFXLEVBWk47QUFBVyxHQUFOLENBQUwsTUFhRUMsR0FBRCxJQUFTO0FBQ2YsUUFBSSxDQUFDQSxHQUFHLENBQVIsSUFBYTtBQUNYLFVBQUlDLFFBQVEsR0FBUkEsS0FBZ0JELEdBQUcsQ0FBSEEsVUFBcEIsS0FBdUM7QUFDckMsZUFBT0UsVUFBVSxNQUFNRCxRQUFRLEdBQS9CLENBQWlCLENBQWpCO0FBRUY7O0FBQUEsWUFBTSxVQUFOLDZCQUFNLENBQU47QUFHRjs7QUFBQSxXQUFPRCxHQUFHLENBQVYsSUFBT0EsRUFBUDtBQXJCRixHQUFPLENBQVA7QUF5QkY7O0FBQUEsaURBQWtFO0FBQ2hFLFNBQU8sVUFBVSxXQUFXRyxjQUFjLE9BQW5DLENBQVUsQ0FBVixPQUFvRHJILEdBQUQsSUFBZ0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsUUFBSSxDQUFKLGdCQUFxQjtBQUNuQnNILHNCQUFnQixDQUFoQkEsR0FBZ0IsQ0FBaEJBO0FBRUY7O0FBQUE7QUFQRixHQUFPLENBQVA7QUFXYTs7QUFBQSxNQUFNL0QsTUFBTixDQUFtQztBQU9oRDs7QUFQZ0Q7QUFXaEQ7QUFrQkFnRSxhQUFXLHlCQUlUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpTO0FBSVQsR0FKUyxFQStCVDtBQUFBLFNBM0RGQyxLQTJERTtBQUFBLFNBMURGMUYsUUEwREU7QUFBQSxTQXpERm9FLEtBeURFO0FBQUEsU0F4REZ1QixNQXdERTtBQUFBLFNBdkRGN0MsUUF1REU7QUFBQSxTQWxERjhDLFVBa0RFO0FBQUEsU0FoREZDLEdBZ0RFLEdBaERrQyxFQWdEbEM7QUFBQSxTQS9DRkMsR0ErQ0U7QUFBQSxTQTlDRkMsR0E4Q0U7QUFBQSxTQTdDRkMsVUE2Q0U7QUFBQSxTQTVDRkMsSUE0Q0U7QUFBQSxTQTNDRkMsTUEyQ0U7QUFBQSxTQTFDRkMsUUEwQ0U7QUFBQSxTQXpDRkMsS0F5Q0U7QUFBQSxTQXhDRkMsVUF3Q0U7QUFBQSxTQXZDRkMsY0F1Q0U7QUFBQSxTQXRDRkMsUUFzQ0U7QUFBQSxTQXJDRkMsTUFxQ0U7QUFBQSxTQXBDRkMsT0FvQ0U7QUFBQSxTQW5DRkMsYUFtQ0U7O0FBQUEsc0JBcUdZcEksQ0FBRCxJQUE0QjtBQUN2QyxZQUFNcUksS0FBSyxHQUFHckksQ0FBQyxDQUFmOztBQUVBLFVBQUksQ0FBSixPQUFZO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUFBO0FBQUE7QUFBQSxZQUFOO0FBQ0EseUNBRUUsaUNBQXFCO0FBQUUwQixrQkFBUSxFQUFFZ0YsV0FBVyxDQUF2QixRQUF1QixDQUF2QjtBQUZ2QjtBQUV1QixTQUFyQixDQUZGLEVBR0UsV0FIRixNQUdFLEdBSEY7QUFLQTtBQUdGOztBQUFBLFVBQUksQ0FBQzJCLEtBQUssQ0FBVixLQUFnQjtBQUNkO0FBR0Y7O0FBQUEsWUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQU47QUFFQSxZQUFNO0FBQUE7QUFBQSxVQUFlLHdDQUFyQixHQUFxQixDQUFyQixDQTVCdUMsQ0E4QnZDO0FBQ0E7O0FBQ0EsVUFBSSxjQUFjakksRUFBRSxLQUFLLEtBQXJCLFVBQW9Dc0IsUUFBUSxLQUFLLEtBQXJELFVBQW9FO0FBQ2xFO0FBR0YsT0FwQ3VDLENBb0N2QztBQUNBOzs7QUFDQSxVQUFJLGFBQWEsQ0FBQyxVQUFsQixLQUFrQixDQUFsQixFQUFvQztBQUNsQztBQUdGOztBQUFBLDJDQUlFWixNQUFNLENBQU5BLG9CQUEyQjtBQUN6QkssZUFBTyxFQUFFbUgsT0FBTyxDQUFQQSxXQUFtQixLQUxoQztBQUk2QixPQUEzQnhILENBSkY7QUEvSUEsT0FDQTs7O0FBQ0EsaUJBQWEscURBQWIsU0FBYSxDQUFiLENBRkEsQ0FJQTs7QUFDQSx5QkFMQSxDQU1BO0FBQ0E7QUFDQTs7QUFDQSxRQUFJWSxTQUFRLEtBQVosV0FBNEI7QUFDMUIsc0JBQWdCLEtBQWhCLFNBQThCO0FBQUE7QUFFNUI2RyxtQkFBVyxFQUZpQjtBQUc1QnhILGFBQUssRUFIdUI7QUFBQTtBQUs1QnlILGVBQU8sRUFBRUMsWUFBWSxJQUFJQSxZQUFZLENBTFQ7QUFNNUJDLGVBQU8sRUFBRUQsWUFBWSxJQUFJQSxZQUFZLENBTnZDO0FBQThCLE9BQTlCO0FBVUY7O0FBQUEsK0JBQTJCO0FBQ3pCRSxlQUFTLEVBRGdCO0FBRXpCSixpQkFBVyxFQUFFO0FBRmY7QUFFZTtBQUZZLEtBQTNCLENBcEJBLENBMkJBO0FBQ0E7O0FBQ0Esa0JBQWNwRixNQUFNLENBQXBCO0FBRUE7QUFDQTtBQUNBLHdCQWpDQSxDQWtDQTtBQUNBOztBQUNBLGtCQUNFO0FBQ0EsaURBQTRCeUYsYUFBYSxDQUF6Qyx5QkFGRjtBQUdBO0FBQ0E7QUFDQTtBQUNBLDRCQTFDQSxDQTJDQTtBQUNBOztBQUNBO0FBRUE7O0FBRUEsUUFBSWpHLEtBQUosRUFBcUMsRUFNckM7O0FBQUEsZUFBbUMsRUE0Q3BDO0FBc0REa0c7O0FBQUFBLFFBQU0sR0FBUztBQUNiN0osVUFBTSxDQUFOQTtBQUdGO0FBQUE7Ozs7O0FBR0E4SixNQUFJLEdBQUc7QUFDTDlKLFVBQU0sQ0FBTkE7QUFHRjtBQUFBOzs7Ozs7OztBQU1BK0osTUFBSSxNQUFXM0ksRUFBTyxHQUFsQixLQUEwQmtJLE9BQTBCLEdBQXBELElBQTJEO0FBQzdEO0FBQUMsS0FBQztBQUFBO0FBQUE7QUFBQSxRQUFjVSxZQUFZLFlBQTNCLEVBQTJCLENBQTNCO0FBQ0QsV0FBTyxrQ0FBUCxPQUFPLENBQVA7QUFHRjtBQUFBOzs7Ozs7OztBQU1BM0ksU0FBTyxNQUFXRCxFQUFPLEdBQWxCLEtBQTBCa0ksT0FBMEIsR0FBcEQsSUFBMkQ7QUFDaEU7QUFBQyxLQUFDO0FBQUE7QUFBQTtBQUFBLFFBQWNVLFlBQVksWUFBM0IsRUFBMkIsQ0FBM0I7QUFDRCxXQUFPLHFDQUFQLE9BQU8sQ0FBUDtBQUdGOztBQUFBLFFBQU1DLE1BQU4sMkJBS29CO0FBQ2xCLFFBQUksQ0FBQ0MsVUFBVSxDQUFmLEdBQWUsQ0FBZixFQUFzQjtBQUNwQmxLLFlBQU0sQ0FBTkE7QUFDQTtBQUdGOztBQUFBLFFBQUksQ0FBRXNKLE9BQUQsQ0FBTCxJQUEwQjtBQUN4QjtBQUVGLEtBVGtCLENBU2xCOzs7QUFDQSxRQUFJYSxPQUFKLElBQVE7QUFDTkMsaUJBQVcsQ0FBWEE7QUFHRjs7QUFBQSxRQUFJLEtBQUosZ0JBQXlCO0FBQ3ZCLDhCQUF3QixLQUF4QjtBQUdGaEo7O0FBQUFBLE1BQUUsR0FBR2lKLFNBQVMsS0FBSyxLQUFMLFFBQWtCLEtBQWhDakosYUFBYyxDQUFkQTtBQUNBLFVBQU1rSixTQUFTLEdBQUdDLFNBQVMsQ0FDekJ4RSxXQUFXLENBQVhBLEVBQVcsQ0FBWEEsR0FBa0J5RSxXQUFXLENBQTdCekUsRUFBNkIsQ0FBN0JBLEdBRHlCLElBRXpCLEtBRkYsTUFBMkIsQ0FBM0I7QUFJQSw2QkF2QmtCLENBeUJsQjtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNBLFFBQUksQ0FBRXVELE9BQUQsQ0FBRCxNQUF3QixxQkFBNUIsU0FBNEIsQ0FBNUIsRUFBNkQ7QUFDM0Q7QUFDQW5GLFlBQU0sQ0FBTkEsbUNBRjJELENBRzNEOztBQUNBO0FBQ0E7QUFDQSxrQkFBWSxnQkFBZ0IsS0FBNUIsS0FBWSxDQUFaO0FBQ0FBLFlBQU0sQ0FBTkE7QUFDQTtBQUdGLEtBMUNrQixDQTBDbEI7QUFDQTtBQUNBOzs7QUFDQSxVQUFNc0csS0FBSyxHQUFHLE1BQU0sZ0JBQXBCLFdBQW9CLEVBQXBCO0FBQ0EsVUFBTTtBQUFFQyxnQkFBVSxFQUFaO0FBQUEsUUFBMkIsTUFBTSxnQkFBdkM7QUFFQSxRQUFJQyxNQUFNLEdBQUcsd0NBQWIsR0FBYSxDQUFiO0FBRUEsUUFBSTtBQUFBO0FBQUE7QUFBQSxRQUFKO0FBRUFBLFVBQU0sR0FBRywwQkFBVEEsS0FBUyxDQUFUQTs7QUFFQSxRQUFJQSxNQUFNLENBQU5BLGFBQUosVUFBa0M7QUFDaENqSSxjQUFRLEdBQUdpSSxNQUFNLENBQWpCakk7QUFDQWtELFNBQUcsR0FBRyxpQ0FBTkEsTUFBTSxDQUFOQTtBQUdGLEtBM0RrQixDQTJEbEI7QUFDQTtBQUNBOzs7QUFDQWxELFlBQVEsR0FBR0EsUUFBUSxHQUNmLHFEQUF3QjhILFdBQVcsQ0FEcEIsUUFDb0IsQ0FBbkMsQ0FEZSxHQUFuQjlILFNBOURrQixDQWtFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxRQUFJLENBQUMsY0FBTCxTQUFLLENBQUwsRUFBK0I7QUFDN0JrSSxZQUFNLEdBQU5BO0FBR0Y7O0FBQUEsUUFBSXhDLEtBQUssR0FBRyxxREFBWixRQUFZLENBQVo7QUFDQSxVQUFNO0FBQUVqRyxhQUFPLEdBQVQ7QUFBQSxRQUFOLFFBNUVrQixDQThFbEI7QUFDQTs7QUFDQSxRQUFJUSxVQUFVLEdBQWQ7O0FBRUEsUUFBSWdCLElBQUosRUFBcUM7QUFDbkNoQixnQkFBVSxHQUFHLDhCQUNYLDRDQURXLDRDQU1WRixDQUFELElBQWUsa0JBQWtCO0FBQUVDLGdCQUFRLEVBQTVCO0FBQWtCLE9BQWxCLFNBTmpCQyxRQUFhLENBQWJBOztBQVNBLFVBQUlBLFVBQVUsS0FBZCxJQUF1QjtBQUNyQixjQUFNa0ksYUFBYSxHQUFHLHFEQUNwQixrQkFDRS9JLE1BQU0sQ0FBTkEsbUJBQTBCO0FBQUVZLGtCQUFRLEVBRHRDO0FBQzRCLFNBQTFCWixDQURGLGdCQURGLFFBQXNCLENBQXRCLENBRHFCLENBU3JCO0FBQ0E7O0FBQ0EsWUFBSTJJLEtBQUssQ0FBTEEsU0FBSixhQUFJQSxDQUFKLEVBQW1DO0FBQ2pDckMsZUFBSyxHQUFMQTtBQUNBMUYsa0JBQVEsR0FBUkE7QUFDQWlJLGdCQUFNLENBQU5BO0FBQ0EvRSxhQUFHLEdBQUcsaUNBQU5BLE1BQU0sQ0FBTkE7QUFFSDtBQUNGO0FBQ0RqRDs7QUFBQUEsY0FBVSxHQUFHNEgsU0FBUyxDQUFDQyxXQUFXLENBQVosVUFBWSxDQUFaLEVBQTBCLEtBQWhEN0gsTUFBc0IsQ0FBdEJBOztBQUVBLFFBQUksK0JBQUosS0FBSSxDQUFKLEVBQTJCO0FBQ3pCLFlBQU1tSSxRQUFRLEdBQUcsd0NBQWpCLFVBQWlCLENBQWpCO0FBQ0EsWUFBTTFFLFVBQVUsR0FBRzBFLFFBQVEsQ0FBM0I7QUFFQSxZQUFNQyxVQUFVLEdBQUcsK0JBQW5CLEtBQW1CLENBQW5CO0FBQ0EsWUFBTUMsVUFBVSxHQUFHLCtDQUFuQixVQUFtQixDQUFuQjtBQUNBLFlBQU1DLGlCQUFpQixHQUFHN0MsS0FBSyxLQUEvQjtBQUNBLFlBQU1sQixjQUFjLEdBQUcrRCxpQkFBaUIsR0FDcEM5RCxhQUFhLG9CQUR1QixLQUN2QixDQUR1QixHQUF4Qzs7QUFJQSxVQUFJLGVBQWdCOEQsaUJBQWlCLElBQUksQ0FBQy9ELGNBQWMsQ0FBeEQsUUFBa0U7QUFDaEUsY0FBTWdFLGFBQWEsR0FBR3BKLE1BQU0sQ0FBTkEsS0FBWWlKLFVBQVUsQ0FBdEJqSixlQUNuQndFLEtBQUQsSUFBVyxDQUFDUSxLQUFLLENBRG5CLEtBQ21CLENBREdoRixDQUF0Qjs7QUFJQSxZQUFJb0osYUFBYSxDQUFiQSxTQUFKLEdBQThCO0FBQzVCLG9CQUEyQztBQUN6Q3hLLG1CQUFPLENBQVBBLEtBQ0csR0FDQ3VLLGlCQUFpQiwwQkFFWixpQ0FIUCw4QkFBQyxHQUtFLGVBQWNDLGFBQWEsQ0FBYkEsVUFObkJ4SztBQVlGOztBQUFBLGdCQUFNLFVBQ0osQ0FBQ3VLLGlCQUFpQixHQUNiLDBCQUF5QnJGLEdBQUksb0NBQW1Dc0YsYUFBYSxDQUFiQSxVQURuRCxvQ0FJYiw4QkFBNkI5RSxVQUFXLDhDQUE2Q2dDLEtBSjFGLFNBS0csNENBQ0M2QyxpQkFBaUIsaUNBRWIsc0JBVFYsRUFBTSxDQUFOO0FBYUg7QUFoQ0QsYUFnQ08sdUJBQXVCO0FBQzVCN0osVUFBRSxHQUFHLGlDQUNIVSxNQUFNLENBQU5BLHFCQUE0QjtBQUMxQlksa0JBQVEsRUFBRXdFLGNBQWMsQ0FERTtBQUUxQkosZUFBSyxFQUFFTyxrQkFBa0IsUUFBUUgsY0FBYyxDQUhuRDlGLE1BRzZCO0FBRkMsU0FBNUJVLENBREcsQ0FBTFY7QUFESyxhQU9BO0FBQ0w7QUFDQVUsY0FBTSxDQUFOQTtBQUVIO0FBRURxQzs7QUFBQUEsVUFBTSxDQUFOQTs7QUFFQSxRQUFJO0FBQ0YsWUFBTWdILFNBQVMsR0FBRyxNQUFNLDhDQUF4QixPQUF3QixDQUF4QjtBQU9BLFVBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQUosVUFSRSxDQVVGOztBQUNBLFVBQ0UsQ0FBQzNCLE9BQU8sSUFBUixxQkFFQ3pILEtBQUQsQ0FGQSxhQUdDQSxLQUFELFVBQUNBLENBSkgsY0FLRTtBQUNBLGNBQU1xSixXQUFXLEdBQUlySixLQUFELFVBQUNBLENBQXJCLGFBREEsQ0FHQTtBQUNBO0FBQ0E7O0FBQ0EsWUFBSXFKLFdBQVcsQ0FBWEEsV0FBSixHQUFJQSxDQUFKLEVBQWlDO0FBQy9CLGdCQUFNQyxVQUFVLEdBQUcsd0NBQW5CLFdBQW1CLENBQW5COztBQUNBOztBQUVBLGNBQUlaLEtBQUssQ0FBTEEsU0FBZVksVUFBVSxDQUE3QixRQUFJWixDQUFKLEVBQXlDO0FBQ3ZDLG1CQUFPLHNEQUFQLE9BQU8sQ0FBUDtBQU9IO0FBRUR6Szs7QUFBQUEsY0FBTSxDQUFOQTtBQUNBLGVBQU8sWUFBWSxNQUFNLENBQXpCLENBQU8sQ0FBUDtBQUdGbUU7O0FBQUFBLFlBQU0sQ0FBTkE7QUFDQSxvQ0FHRWtHLFNBQVMsS0FBSyxLQUFMLFFBQWtCLEtBSDdCLGFBR1csQ0FIWDs7QUFPQSxnQkFBMkM7QUFDekMsY0FBTWlCLE9BQVksR0FBRyx5QkFBckI7QUFDRXRMLGNBQUQsS0FBQ0EsQ0FBRCxhQUFDQSxHQUNBc0wsT0FBTyxDQUFQQSxvQkFBNEJBLE9BQU8sQ0FBbkNBLHVCQUNBLENBQUVILFNBQVMsQ0FBVixTQUFDQSxDQUZILGVBQUNuTDtBQUtKOztBQUFBLFlBQU0sNkRBQ0hnQixDQUFELElBQU87QUFDTCxZQUFJQSxDQUFDLENBQUwsV0FBaUJ1SyxLQUFLLEdBQUdBLEtBQUssSUFBOUIsQ0FBaUJBLENBQWpCLEtBQ0s7QUFIVCxPQUFNLENBQU47O0FBT0EsaUJBQVc7QUFDVHBILGNBQU0sQ0FBTkE7QUFDQTtBQUdGOztBQUFBLFVBQUlSLEtBQUosRUFBMkMsRUFLM0NROztBQUFBQSxZQUFNLENBQU5BO0FBRUE7QUFDQSxLQTNFRixDQTJFRSxZQUFZO0FBQ1osVUFBSXZELEdBQUcsQ0FBUCxXQUFtQjtBQUNqQjtBQUVGOztBQUFBO0FBRUg7QUFFRDRLOztBQUFBQSxhQUFXLGtCQUlUbEMsT0FBMEIsR0FKakIsSUFLSDtBQUNOLGNBQTJDO0FBQ3pDLFVBQUksT0FBT3RKLE1BQU0sQ0FBYixZQUFKLGFBQTJDO0FBQ3pDVSxlQUFPLENBQVBBO0FBQ0E7QUFHRjs7QUFBQSxVQUFJLE9BQU9WLE1BQU0sQ0FBTkEsUUFBUCxNQUFPQSxDQUFQLEtBQUosYUFBbUQ7QUFDakRVLGVBQU8sQ0FBUEEsTUFBZSwyQkFBMEJrSyxNQUF6Q2xLO0FBQ0E7QUFFSDtBQUVEOztBQUFBLFFBQUlrSyxNQUFNLEtBQU5BLGVBQTBCLHlCQUE5QixJQUErQztBQUM3QyxzQkFBZ0J0QixPQUFPLENBQXZCO0FBQ0EsWUFBTSxDQUFOLGdCQUNFO0FBQUE7QUFBQTtBQUFBO0FBSUVtQyxXQUFHLEVBTFA7QUFDRSxPQURGLEVBT0U7QUFDQTtBQUNBO0FBVEY7QUFjSDtBQUVEOztBQUFBLFFBQU1DLG9CQUFOLDBDQU02QjtBQUMzQixRQUFJOUssR0FBRyxDQUFQLFdBQW1CO0FBQ2pCO0FBQ0E7QUFHRjs7QUFBQSxRQUFJNEcsZUFBZSxJQUFmQSxPQUFKLGVBQTZDO0FBQzNDckQsWUFBTSxDQUFOQSx5Q0FEMkMsQ0FHM0M7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQW5FLFlBQU0sQ0FBTkEsbUJBVDJDLENBVzNDO0FBQ0E7O0FBQ0EsWUFBTTJMLHNCQUFOO0FBR0Y7O0FBQUEsUUFBSTtBQUNGLFlBQU07QUFBRUMsWUFBSSxFQUFOO0FBQUE7QUFBQSxVQUFtQyxNQUFNLG9CQUEvQyxTQUErQyxDQUEvQztBQUdBLFlBQU1ULFNBQTJCLEdBQUc7QUFBQTtBQUFBO0FBQUE7QUFJbENJLGFBQUssRUFKUDtBQUFvQyxPQUFwQzs7QUFPQSxVQUFJO0FBQ0ZKLGlCQUFTLENBQVRBLFFBQWtCLE1BQU0sZ0NBQWdDO0FBQUE7QUFBQTtBQUF4REE7QUFBd0QsU0FBaEMsQ0FBeEJBO0FBS0EsT0FORixDQU1FLGVBQWU7QUFDZnpLLGVBQU8sQ0FBUEE7QUFDQXlLLGlCQUFTLENBQVRBO0FBR0Y7O0FBQUE7QUFDQSxLQXZCRixDQXVCRSxxQkFBcUI7QUFDckIsYUFBTyw2REFBUCxJQUFPLENBQVA7QUFFSDtBQUVEOztBQUFBLFFBQU1VLFlBQU4sNkJBS0UxSixPQUFnQixHQUxsQixPQU02QjtBQUMzQixRQUFJO0FBQ0YsWUFBTTJKLGVBQWUsR0FBRyxnQkFBeEIsS0FBd0IsQ0FBeEI7O0FBRUEsVUFBSTNKLE9BQU8sSUFBUEEsbUJBQThCLGVBQWxDLE9BQXdEO0FBQ3REO0FBR0Y7O0FBQUEsWUFBTWdKLFNBQTJCLEdBQUdXLGVBQWUscUJBRS9DLE1BQU0sZ0NBQWlDaEUsR0FBRCxLQUFVO0FBQzlDNkIsaUJBQVMsRUFBRTdCLEdBQUcsQ0FEZ0M7QUFFOUN5QixtQkFBVyxFQUFFekIsR0FBRyxDQUY4QjtBQUc5QzBCLGVBQU8sRUFBRTFCLEdBQUcsQ0FBSEEsSUFIcUM7QUFJOUM0QixlQUFPLEVBQUU1QixHQUFHLENBQUhBLElBTmY7QUFFb0QsT0FBVixDQUFoQyxDQUZWO0FBU0EsWUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQU47O0FBRUEsZ0JBQTJDO0FBQ3pDLGNBQU07QUFBQTtBQUFBLFlBQXlCaUUsbUJBQU8sQ0FBdEMsMEJBQXNDLENBQXRDOztBQUNBLFlBQUksQ0FBQ0Msa0JBQWtCLENBQXZCLFNBQXVCLENBQXZCLEVBQW9DO0FBQ2xDLGdCQUFNLFVBQ0gseURBQXdEdEosUUFEM0QsR0FBTSxDQUFOO0FBSUg7QUFFRDs7QUFBQTs7QUFFQSxVQUFJOEcsT0FBTyxJQUFYLFNBQXdCO0FBQ3RCeUMsZ0JBQVEsR0FBRyw0QkFDVCxpQ0FBcUI7QUFBQTtBQURaO0FBQ1ksU0FBckIsQ0FEUyxFQUVUekIsV0FBVyxDQUZGLEVBRUUsQ0FGRixXQUlULEtBSlMsUUFLVCxLQUxGeUIsYUFBVyxDQUFYQTtBQVNGOztBQUFBLFlBQU1sSyxLQUFLLEdBQUcsTUFBTSxjQUFnQyxNQUNsRHlILE9BQU8sR0FDSCxvQkFERyxRQUNILENBREcsR0FFSEUsT0FBTyxHQUNQLG9CQURPLFFBQ1AsQ0FETyxHQUVQLGdDQUVFO0FBQ0E7QUFBQTtBQUFBO0FBR0VyQixjQUFNLEVBWGhCO0FBUVEsT0FIRixDQUxjLENBQXBCO0FBZ0JBOEMsZUFBUyxDQUFUQTtBQUNBO0FBQ0E7QUFDQSxLQTFERixDQTBERSxZQUFZO0FBQ1osYUFBTyxnREFBUCxFQUFPLENBQVA7QUFFSDtBQUVEZTs7QUFBQUEsS0FBRyxtQ0FNYztBQUNmO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFPLFlBQVAsSUFBTyxDQUFQO0FBR0Y7QUFBQTs7Ozs7O0FBSUFDLGdCQUFjLEtBQTZCO0FBQ3pDO0FBR0ZDOztBQUFBQSxpQkFBZSxLQUFzQjtBQUNuQyxRQUFJLENBQUMsS0FBTCxRQUFrQjtBQUNsQixVQUFNLDBCQUEwQixrQkFBaEMsR0FBZ0MsQ0FBaEM7QUFDQSxVQUFNLDBCQUEwQmhMLEVBQUUsQ0FBRkEsTUFBaEMsR0FBZ0NBLENBQWhDLENBSG1DLENBS25DOztBQUNBLFFBQUlpTCxPQUFPLElBQUlDLFlBQVksS0FBdkJELGdCQUE0Q0UsT0FBTyxLQUF2RCxTQUFxRTtBQUNuRTtBQUdGLEtBVm1DLENBVW5DOzs7QUFDQSxRQUFJRCxZQUFZLEtBQWhCLGNBQW1DO0FBQ2pDO0FBR0YsS0FmbUMsQ0FlbkM7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFdBQU9DLE9BQU8sS0FBZDtBQUdGQzs7QUFBQUEsY0FBWSxLQUFtQjtBQUM3QixVQUFNLFdBQVdwTCxFQUFFLENBQUZBLE1BQWpCLEdBQWlCQSxDQUFqQixDQUQ2QixDQUU3Qjs7QUFDQSxRQUFJZ0csSUFBSSxLQUFSLElBQWlCO0FBQ2ZwSCxZQUFNLENBQU5BO0FBQ0E7QUFHRixLQVI2QixDQVE3Qjs7O0FBQ0EsVUFBTXlNLElBQUksR0FBR2xMLFFBQVEsQ0FBUkEsZUFBYixJQUFhQSxDQUFiOztBQUNBLGNBQVU7QUFDUmtMLFVBQUksQ0FBSkE7QUFDQTtBQUVGLEtBZDZCLENBYzdCO0FBQ0E7OztBQUNBLFVBQU1DLE1BQU0sR0FBR25MLFFBQVEsQ0FBUkEsd0JBQWYsQ0FBZUEsQ0FBZjs7QUFDQSxnQkFBWTtBQUNWbUwsWUFBTSxDQUFOQTtBQUVIO0FBRURDOztBQUFBQSxVQUFRLFNBQTBCO0FBQ2hDLFdBQU8sZ0JBQVA7QUFHRkM7O0FBQUFBLGNBQVksb0JBQXlDQyxhQUFhLEdBQXRELE1BQStEO0FBQ3pFLFVBQU07QUFBQTtBQUFBLFFBQU47QUFDQSxVQUFNQyxhQUFhLEdBQUcscURBQ3BCLDhDQUFvQkQsYUFBYSxHQUFHckMsV0FBVyxDQUFkLFFBQWMsQ0FBZCxHQURuQyxRQUNFLENBRG9CLENBQXRCOztBQUlBLFFBQUlzQyxhQUFhLEtBQWJBLFVBQTRCQSxhQUFhLEtBQTdDLFdBQTZEO0FBQzNEO0FBR0YsS0FWeUUsQ0FVekU7OztBQUNBLFFBQUksQ0FBQ3JDLEtBQUssQ0FBTEEsU0FBTCxhQUFLQSxDQUFMLEVBQXFDO0FBQ25DO0FBQ0FBLFdBQUssQ0FBTEEsS0FBWW1CLElBQUQsSUFBVTtBQUNuQixZQUNFLHdDQUNBLDZDQUZGLGFBRUUsQ0FGRixFQUdFO0FBQ0FQLG9CQUFVLENBQVZBLFdBQXNCd0IsYUFBYSxHQUFHbkYsV0FBVyxDQUFkLElBQWMsQ0FBZCxHQUFuQzJEO0FBQ0E7QUFFSDtBQVJEWjtBQVVGOztBQUFBO0FBR0Y7QUFBQTs7Ozs7QUFNQTs7O0FBQUEsUUFBTXBJLFFBQU4sTUFFRWdHLE1BQWMsR0FGaEIsS0FHRWlCLE9BQXdCLEdBSDFCLElBSWlCO0FBQ2YsUUFBSXFCLE1BQU0sR0FBRyx3Q0FBYixHQUFhLENBQWI7QUFFQSxRQUFJO0FBQUE7QUFBQSxRQUFKO0FBRUEsVUFBTUYsS0FBSyxHQUFHLE1BQU0sZ0JBQXBCLFdBQW9CLEVBQXBCO0FBRUFFLFVBQU0sR0FBRywwQkFBVEEsS0FBUyxDQUFUQTs7QUFFQSxRQUFJQSxNQUFNLENBQU5BLGFBQUosVUFBa0M7QUFDaENqSSxjQUFRLEdBQUdpSSxNQUFNLENBQWpCakk7QUFDQWtELFNBQUcsR0FBRyxpQ0FBTkEsTUFBTSxDQUFOQTtBQUdGLEtBZGUsQ0FjZjs7O0FBQ0EsY0FBMkM7QUFDekM7QUFHRjs7QUFBQSxVQUFNd0MsS0FBSyxHQUFHLHFEQUFkLFFBQWMsQ0FBZDtBQUNBLFVBQU0yRSxPQUFPLENBQVBBLElBQVksQ0FDaEIsMENBR0UsS0FIRixRQUlFLEtBTGMsYUFDaEIsQ0FEZ0IsRUFPaEIsZ0JBQWdCekQsT0FBTyxDQUFQQSx3QkFBaEIsWUFQRixLQU9FLENBUGdCLENBQVp5RCxDQUFOO0FBV0Y7O0FBQUEsUUFBTUMsY0FBTixRQUE0RDtBQUMxRCxRQUFJdkgsU0FBUyxHQUFiOztBQUNBLFVBQU13SCxNQUFNLEdBQUksV0FBVyxNQUFNO0FBQy9CeEgsZUFBUyxHQUFUQTtBQURGOztBQUlBLFVBQU15SCxlQUFlLEdBQUcsTUFBTSx5QkFBOUIsS0FBOEIsQ0FBOUI7O0FBRUEsbUJBQWU7QUFDYixZQUFNM0IsS0FBVSxHQUFHLFVBQ2hCLHdDQUF1Q25ELEtBRDFDLEdBQW1CLENBQW5CO0FBR0FtRCxXQUFLLENBQUxBO0FBQ0E7QUFHRjs7QUFBQSxRQUFJMEIsTUFBTSxLQUFLLEtBQWYsS0FBeUI7QUFDdkI7QUFHRjs7QUFBQTtBQUdGRTs7QUFBQUEsVUFBUSxLQUFzQztBQUM1QyxRQUFJMUgsU0FBUyxHQUFiOztBQUNBLFVBQU13SCxNQUFNLEdBQUcsTUFBTTtBQUNuQnhILGVBQVMsR0FBVEE7QUFERjs7QUFHQTtBQUNBLFdBQU8ySCxFQUFFLEdBQUZBLEtBQVdDLElBQUQsSUFBVTtBQUN6QixVQUFJSixNQUFNLEtBQUssS0FBZixLQUF5QjtBQUN2QjtBQUdGOztBQUFBLHFCQUFlO0FBQ2IsY0FBTXJNLEdBQVEsR0FBRyxVQUFqQixpQ0FBaUIsQ0FBakI7QUFDQUEsV0FBRyxDQUFIQTtBQUNBO0FBR0Y7O0FBQUE7QUFYRixLQUFPd00sQ0FBUDtBQWVGRTs7QUFBQUEsZ0JBQWMsV0FBb0M7QUFDaEQsVUFBTTtBQUFFek0sVUFBSSxFQUFOO0FBQUEsUUFBcUIsa0JBQWtCYixNQUFNLENBQU5BLFNBQTdDLElBQTJCLENBQTNCOztBQUNBLFFBQUkyRCxLQUFKLEVBQWlFLEVBR2pFOztBQUFBLFdBQU80SixhQUFhLFdBQVcsS0FBeEJBLEtBQWEsQ0FBYkEsTUFBMENGLElBQUQsSUFBVTtBQUN4RDtBQUNBO0FBRkYsS0FBT0UsQ0FBUDtBQU1GQzs7QUFBQUEsZ0JBQWMsV0FBb0M7QUFDaEQsV0FBT0QsYUFBYSxXQUFXLEtBQS9CLEtBQW9CLENBQXBCO0FBR0Z2STs7QUFBQUEsaUJBQWUsaUJBR0M7QUFDZCxVQUFNO0FBQUUyRSxlQUFTLEVBQVg7QUFBQSxRQUFxQixnQkFBM0IsT0FBMkIsQ0FBM0I7O0FBQ0EsVUFBTThELE9BQU8sR0FBRyxjQUFoQixHQUFnQixDQUFoQjs7QUFDQUMsT0FBRyxDQUFIQTtBQUNBLFdBQU8scUNBQWlEO0FBQUE7QUFBQTtBQUd0RC9NLFlBQU0sRUFIZ0Q7QUFBeEQ7QUFBd0QsS0FBakQsQ0FBUDtBQVFGZ047O0FBQUFBLG9CQUFrQixLQUFtQjtBQUNuQyxRQUFJLEtBQUosS0FBYztBQUNaeEosWUFBTSxDQUFOQSxnQ0FBdUN3SCxzQkFBdkN4SDtBQUNBO0FBQ0E7QUFFSDtBQUVEeUo7O0FBQUFBLFFBQU0sT0FBd0M7QUFDNUMsV0FBTyxlQUFlLHlCQUF0QixTQUFPLENBQVA7QUF6M0I4Qzs7QUFBQTs7O0FBQTdCekosTSxDQTJCWnlFLE1BM0JZekUsR0EyQlUsb0JBM0JWQSxDOzs7Ozs7Ozs7Ozs7Ozs7d0NDbFZyQjs7QUFDZSx1Q0FBdUQ7QUFDcEUsU0FBTzBKLE9BQU8sQ0FBUEEsa0JBQTJCQyxJQUFELElBQWtCQyxrQkFBa0IsQ0FBckUsSUFBcUUsQ0FBOURGLENBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3FCRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXhCQSxDLENBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFNQSxNQUFNRyxnQkFBZ0IsR0FBdEI7O0FBRU8sMkJBQXNDO0FBQzNDLE1BQUk7QUFBQTtBQUFBO0FBQUEsTUFBSjtBQUNBLE1BQUlDLFFBQVEsR0FBR0MsTUFBTSxDQUFOQSxZQUFmO0FBQ0EsTUFBSXhMLFFBQVEsR0FBR3dMLE1BQU0sQ0FBTkEsWUFBZjtBQUNBLE1BQUk5RyxJQUFJLEdBQUc4RyxNQUFNLENBQU5BLFFBQVg7QUFDQSxNQUFJcEgsS0FBSyxHQUFHb0gsTUFBTSxDQUFOQSxTQUFaO0FBQ0EsTUFBSUMsSUFBb0IsR0FBeEI7QUFFQUMsTUFBSSxHQUFHQSxJQUFJLEdBQUdMLGtCQUFrQixDQUFsQkEsSUFBa0IsQ0FBbEJBLHdCQUFILE1BQVhLOztBQUVBLE1BQUlGLE1BQU0sQ0FBVixNQUFpQjtBQUNmQyxRQUFJLEdBQUdDLElBQUksR0FBR0YsTUFBTSxDQUFwQkM7QUFERixTQUVPLGNBQWM7QUFDbkJBLFFBQUksR0FBR0MsSUFBSSxJQUFJLENBQUNDLFFBQVEsQ0FBUkEsUUFBRCxHQUFDQSxDQUFELEdBQTBCLElBQUdBLFFBQTdCLE1BQWZGLFFBQVcsQ0FBWEE7O0FBQ0EsUUFBSUQsTUFBTSxDQUFWLE1BQWlCO0FBQ2ZDLFVBQUksSUFBSSxNQUFNRCxNQUFNLENBQXBCQztBQUVIO0FBRUQ7O0FBQUEsTUFBSXJILEtBQUssSUFBSSxpQkFBYixVQUF3QztBQUN0Q0EsU0FBSyxHQUFHd0gsTUFBTSxDQUFDQyxXQUFXLENBQVhBLHVCQUFmekgsS0FBZXlILENBQUQsQ0FBZHpIO0FBR0Y7O0FBQUEsTUFBSTBILE1BQU0sR0FBR04sTUFBTSxDQUFOQSxVQUFrQnBILEtBQUssSUFBSyxJQUFHQSxLQUEvQm9ILE1BQWI7QUFFQSxNQUFJRCxRQUFRLElBQUlBLFFBQVEsQ0FBUkEsT0FBZ0IsQ0FBaEJBLE9BQWhCLEtBQTZDQSxRQUFRLElBQVJBOztBQUU3QyxNQUNFQyxNQUFNLENBQU5BLFdBQ0MsQ0FBQyxhQUFhRixnQkFBZ0IsQ0FBaEJBLEtBQWQsUUFBY0EsQ0FBZCxLQUFrREcsSUFBSSxLQUZ6RCxPQUdFO0FBQ0FBLFFBQUksR0FBRyxRQUFRQSxJQUFJLElBQW5CQSxFQUFPLENBQVBBO0FBQ0EsUUFBSXpMLFFBQVEsSUFBSUEsUUFBUSxDQUFSQSxDQUFRLENBQVJBLEtBQWhCLEtBQXFDQSxRQUFRLEdBQUcsTUFBWEE7QUFMdkMsU0FNTyxJQUFJLENBQUosTUFBVztBQUNoQnlMLFFBQUksR0FBSkE7QUFHRjs7QUFBQSxNQUFJL0csSUFBSSxJQUFJQSxJQUFJLENBQUpBLENBQUksQ0FBSkEsS0FBWixLQUE2QkEsSUFBSSxHQUFHLE1BQVBBO0FBQzdCLE1BQUlvSCxNQUFNLElBQUlBLE1BQU0sQ0FBTkEsQ0FBTSxDQUFOQSxLQUFkLEtBQWlDQSxNQUFNLEdBQUcsTUFBVEE7QUFFakM5TCxVQUFRLEdBQUdBLFFBQVEsQ0FBUkEsaUJBQVhBLGtCQUFXQSxDQUFYQTtBQUNBOEwsUUFBTSxHQUFHQSxNQUFNLENBQU5BLGFBQVRBLEtBQVNBLENBQVRBO0FBRUEsU0FBUSxHQUFFUCxRQUFTLEdBQUVFLElBQUssR0FBRXpMLFFBQVMsR0FBRThMLE1BQU8sR0FBRXBILElBQWhEO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7O3lDQ3hFRDs7QUFDQSxNQUFNcUgsVUFBVSxHQUFoQjs7QUFFTywrQkFBZ0Q7QUFDckQsU0FBT0EsVUFBVSxDQUFWQSxLQUFQLEtBQU9BLENBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0xEOztBQUNBOztBQUVBLE1BQU1DLFVBQVUsR0FBRyxRQUNqQixvQkFBNkMsU0FENUIsQ0FBbkI7QUFJQTs7Ozs7OztBQU1PLHFDQUFzRDtBQUMzRCxRQUFNQyxZQUFZLEdBQUc1SCxJQUFJLEdBQUcsY0FBSCxVQUFHLENBQUgsR0FBekI7QUFDQSxRQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVFGLGFBUkosWUFRSSxDQVJKOztBQVNBLE1BQ0U2SCxNQUFNLEtBQUtGLFVBQVUsQ0FBckJFLFVBQ0NYLFFBQVEsS0FBUkEsV0FBd0JBLFFBQVEsS0FGbkMsVUFHRTtBQUNBLFVBQU0sVUFBTixpQ0FBTSxDQUFOO0FBRUY7O0FBQUEsU0FBTztBQUFBO0FBRUxuSCxTQUFLLEVBQUUseUNBRkYsWUFFRSxDQUZGO0FBQUE7QUFBQTtBQUtMakcsUUFBSSxFQUFFQSxJQUFJLENBQUpBLE1BQVc2TixVQUFVLENBQVZBLE9BTG5CLE1BS1E3TjtBQUxELEdBQVA7QUFPRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSU87O0FBQUEsTUFBTWdPLGNBQ2MsR0FBRztBQUM1QkMsV0FBUyxFQURtQjtBQUU1QkMsV0FBUyxFQUhKO0FBQ3VCLENBRHZCOzs7QUFNQSxNQUFNQyx5QkFDYyxtQ0FBRyxjQUFIO0FBRXpCQyxRQUFNLEVBSEQ7QUFDb0IsRUFEcEI7Ozs7ZUFNUSxDQUFDQyxXQUFXLEdBQVosVUFBeUI7QUFDdEMsU0FBUXpMLElBQUQsSUFBa0I7QUFDdkIsVUFBTTBMLElBQXdCLEdBQTlCO0FBQ0EsVUFBTUMsWUFBWSxHQUFHQyxZQUFZLENBQVpBLHlCQUduQkgsV0FBVywrQkFIYixjQUFxQkcsQ0FBckI7QUFLQSxVQUFNQyxPQUFPLEdBQUdELFlBQVksQ0FBWkEsK0JBQWhCLElBQWdCQSxDQUFoQjtBQUVBLFdBQU8sc0JBQXVEO0FBQzVELFlBQU12SCxHQUFHLEdBQUdwRixRQUFRLElBQVJBLGVBQTJCNE0sT0FBTyxDQUE5QyxRQUE4QyxDQUE5Qzs7QUFDQSxVQUFJLENBQUosS0FBVTtBQUNSO0FBR0Y7O0FBQUEsdUJBQWlCO0FBQ2YsYUFBSyxNQUFMLGFBQXdCO0FBQ3RCO0FBQ0E7QUFDQSxjQUFJLE9BQU83TixHQUFHLENBQVYsU0FBSixVQUFrQztBQUNoQyxtQkFBUXFHLEdBQUcsQ0FBSixNQUFDQSxDQUFtQnJHLEdBQUcsQ0FBOUIsSUFBUXFHLENBQVI7QUFFSDtBQUNGO0FBRUQ7O0FBQUEsNkNBQU8sTUFBUCxHQUF1QkEsR0FBRyxDQUExQjtBQWhCRjtBQVRGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCRjs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUllOztBQUFBLHVGQU1iO0FBQ0EsTUFBSXlILGlCQUttQyxHQUx2Qzs7QUFPQSxNQUFJbkUsV0FBVyxDQUFYQSxXQUFKLEdBQUlBLENBQUosRUFBaUM7QUFDL0JtRSxxQkFBaUIsR0FBRyx3Q0FBcEJBLFdBQW9CLENBQXBCQTtBQURGLFNBRU87QUFDTCxVQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBU0YsUUFUSixXQVNJLENBVEo7QUFXQUEscUJBQWlCLEdBQUc7QUFBQTtBQUVsQnpJLFdBQUssRUFBRSx5Q0FGVyxZQUVYLENBRlc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXBCeUk7QUFBb0IsS0FBcEJBO0FBWUY7O0FBQUEsUUFBTUMsU0FBUyxHQUFHRCxpQkFBaUIsQ0FBbkM7QUFDQSxRQUFNRSxRQUFRLEdBQUksR0FBRUYsaUJBQWlCLENBQUM3TSxRQUFVLEdBQzlDNk0saUJBQWlCLENBQWpCQSxRQUEwQixFQUQ1QjtBQUdBLFFBQU1HLGlCQUFxQyxHQUEzQztBQUNBTCxjQUFZLENBQVpBO0FBRUEsUUFBTU0sY0FBYyxHQUFHRCxpQkFBaUIsQ0FBakJBLElBQXVCak8sR0FBRCxJQUFTQSxHQUFHLENBQXpELElBQXVCaU8sQ0FBdkI7QUFFQSxNQUFJRSxtQkFBbUIsR0FBRyxZQUFZLENBQVosa0JBRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUVDLFlBQVEsRUFSWjtBQVFFLEdBUndCLENBQTFCO0FBVUEsYUFyREEsQ0F1REE7O0FBQ0EsT0FBSyxNQUFNLE1BQVgsVUFBVyxDQUFYLElBQWdDL04sTUFBTSxDQUFOQSxRQUFoQyxTQUFnQ0EsQ0FBaEMsRUFBMkQ7QUFDekQsUUFBSXlFLEtBQUssR0FBR3pCLEtBQUssQ0FBTEEsc0JBQTRCZ0wsVUFBVSxDQUF0Q2hMLENBQXNDLENBQXRDQSxHQUFaOztBQUNBLGVBQVc7QUFDVDtBQUNBO0FBQ0F5QixXQUFLLEdBQUksSUFBR0EsS0FBWkE7QUFDQSxZQUFNd0osYUFBYSxHQUFHVixZQUFZLENBQVpBLGVBQTRCO0FBQUVRLGdCQUFRLEVBQTVEO0FBQWtELE9BQTVCUixDQUF0QjtBQUNBOUksV0FBSyxHQUFHd0osYUFBYSxDQUFiQSxNQUFhLENBQWJBLFFBQVJ4SixDQUFRd0osQ0FBUnhKO0FBRUZpSjs7QUFBQUEsYUFBUyxDQUFUQSxHQUFTLENBQVRBO0FBR0YsR0FwRUEsQ0FvRUE7QUFDQTs7O0FBQ0EsUUFBTVEsU0FBUyxHQUFHbE8sTUFBTSxDQUFOQSxLQUFsQixNQUFrQkEsQ0FBbEI7O0FBRUEsTUFDRW1PLG1CQUFtQixJQUNuQixDQUFDRCxTQUFTLENBQVRBLEtBQWdCdk8sR0FBRCxJQUFTa08sY0FBYyxDQUFkQSxTQUYzQixHQUUyQkEsQ0FBeEJLLENBRkgsRUFHRTtBQUNBLFNBQUssTUFBTCxrQkFBNkI7QUFDM0IsVUFBSSxFQUFFdk8sR0FBRyxJQUFULFNBQUksQ0FBSixFQUF5QjtBQUN2QitOLGlCQUFTLENBQVRBLEdBQVMsQ0FBVEEsR0FBaUJuSixNQUFNLENBQXZCbUosR0FBdUIsQ0FBdkJBO0FBRUg7QUFDRjtBQUVEOztBQUFBLFFBQU1VLGlCQUFpQixHQUFHOUUsV0FBVyxDQUFYQSxtQkFBMUI7O0FBRUEsTUFBSTtBQUNGK0UsVUFBTSxHQUFJLEdBQUVELGlCQUFpQixjQUFjLEVBQUcsR0FBRU4sbUJBQW1CLFFBQW5FTztBQUlBLFVBQU0sbUJBQW1CQSxNQUFNLENBQU5BLE1BQXpCLEdBQXlCQSxDQUF6QjtBQUNBWixxQkFBaUIsQ0FBakJBO0FBQ0FBLHFCQUFpQixDQUFqQkEsT0FBMEIsR0FBRW5JLElBQUksU0FBUyxFQUFHLEdBQUVBLElBQUksSUFBSSxFQUF0RG1JO0FBQ0EsV0FBT0EsaUJBQWlCLENBQXhCO0FBQ0EsR0FURixDQVNFLFlBQVk7QUFDWixRQUFJM08sR0FBRyxDQUFIQSxjQUFKLDhDQUFJQSxDQUFKLEVBQXVFO0FBQ3JFLFlBQU0sVUFBTix3S0FBTSxDQUFOO0FBSUY7O0FBQUE7QUFHRixHQXZHQSxDQXVHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EyTyxtQkFBaUIsQ0FBakJBLHdDQUEwQixLQUExQkEsR0FFS0EsaUJBQWlCLENBRnRCQTtBQUtBLFNBQU87QUFBQTtBQUFQO0FBQU8sR0FBUDtBQUlELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvSE0sOENBRVc7QUFDaEIsUUFBTXpJLEtBQXFCLEdBQTNCO0FBQ0FzSixjQUFZLENBQVpBLFFBQXFCLGdCQUFnQjtBQUNuQyxRQUFJLE9BQU90SixLQUFLLENBQVosR0FBWSxDQUFaLEtBQUosYUFBdUM7QUFDckNBLFdBQUssQ0FBTEEsR0FBSyxDQUFMQTtBQURGLFdBRU8sSUFBSWhDLEtBQUssQ0FBTEEsUUFBY2dDLEtBQUssQ0FBdkIsR0FBdUIsQ0FBbkJoQyxDQUFKLEVBQStCO0FBQ3BDO0FBQUVnQyxXQUFLLENBQU4sR0FBTSxDQUFMQSxDQUFELElBQUNBLENBQUQsS0FBQ0E7QUFERyxXQUVBO0FBQ0xBLFdBQUssQ0FBTEEsR0FBSyxDQUFMQSxHQUFhLENBQUNBLEtBQUssQ0FBTixHQUFNLENBQU4sRUFBYkEsS0FBYSxDQUFiQTtBQUVIO0FBUkRzSjtBQVNBO0FBR0Y7O0FBQUEsdUNBQXVEO0FBQ3JELE1BQ0UsNkJBQ0MsNkJBQTZCLENBQUNDLEtBQUssQ0FEcEMsS0FDb0MsQ0FEcEMsSUFFQSxpQkFIRixXQUlFO0FBQ0EsV0FBTy9CLE1BQU0sQ0FBYixLQUFhLENBQWI7QUFMRixTQU1PO0FBQ0w7QUFFSDtBQUVNOztBQUFBLDBDQUVZO0FBQ2pCLFFBQU0xSCxNQUFNLEdBQUcsSUFBZixlQUFlLEVBQWY7QUFDQTlFLFFBQU0sQ0FBTkEsMEJBQWlDLENBQUMsTUFBRCxLQUFDLENBQUQsS0FBa0I7QUFDakQsUUFBSWdELEtBQUssQ0FBTEEsUUFBSixLQUFJQSxDQUFKLEVBQTBCO0FBQ3hCeUIsV0FBSyxDQUFMQSxRQUFlK0osSUFBRCxJQUFVMUosTUFBTSxDQUFOQSxZQUFtQjJKLHNCQUFzQixDQUFqRWhLLElBQWlFLENBQXpDSyxDQUF4Qkw7QUFERixXQUVPO0FBQ0xLLFlBQU0sQ0FBTkEsU0FBZ0IySixzQkFBc0IsQ0FBdEMzSixLQUFzQyxDQUF0Q0E7QUFFSDtBQU5EOUU7QUFPQTtBQUdLOztBQUFBLHdCQUVMLEdBRkssa0JBR1k7QUFDakIwTyxrQkFBZ0IsQ0FBaEJBLFFBQTBCSixZQUFELElBQWtCO0FBQ3pDdEwsU0FBSyxDQUFMQSxLQUFXc0wsWUFBWSxDQUF2QnRMLElBQVdzTCxFQUFYdEwsVUFBeUNyRCxHQUFELElBQVNWLE1BQU0sQ0FBTkEsT0FBakQrRCxHQUFpRC9ELENBQWpEK0Q7QUFDQXNMLGdCQUFZLENBQVpBLFFBQXFCLGdCQUFnQnJQLE1BQU0sQ0FBTkEsWUFBckNxUCxLQUFxQ3JQLENBQXJDcVA7QUFGRkk7QUFJQTtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEREOztBQUNBOztBQUVBOzs7Ozs7QUFFQTs7QUFBQSxNQUFNQyxrQkFBa0IsR0FBRyx3QkFBM0IsSUFBMkIsQ0FBM0I7O0FBRWUsZ0ZBT2I7QUFDQSxNQUFJLENBQUNoRyxLQUFLLENBQUxBLFNBQUwsTUFBS0EsQ0FBTCxFQUE2QjtBQUMzQixTQUFLLE1BQUwscUJBQWdDO0FBQzlCLFlBQU02RSxPQUFPLEdBQUdtQixrQkFBa0IsQ0FBQ0MsT0FBTyxDQUExQyxNQUFrQyxDQUFsQztBQUNBLFlBQU1ySyxNQUFNLEdBQUdpSixPQUFPLENBQXRCLE1BQXNCLENBQXRCOztBQUVBLGtCQUFZO0FBQ1YsWUFBSSxDQUFDb0IsT0FBTyxDQUFaLGFBQTBCO0FBQ3hCO0FBQ0E7QUFFRjs7QUFBQSxjQUFNQyxPQUFPLEdBQUcsaUNBQ2RELE9BQU8sQ0FETyxrQ0FLZEEsT0FBTyxDQUFQQSwwQkFMRixRQUFnQixDQUFoQjtBQU9BckksY0FBTSxHQUFHc0ksT0FBTyxDQUFQQSxrQkFBVHRJO0FBQ0F2RyxjQUFNLENBQU5BLGNBQXFCNk8sT0FBTyxDQUFQQSxrQkFBckI3Tzs7QUFFQSxZQUFJMkksS0FBSyxDQUFMQSxTQUFlLHFEQUFuQixNQUFtQixDQUFmQSxDQUFKLEVBQXFEO0FBQ25EO0FBQ0E7QUFDQTtBQUdGLFNBckJVLENBcUJWOzs7QUFDQSxjQUFNbkQsWUFBWSxHQUFHSyxXQUFXLENBQWhDLE1BQWdDLENBQWhDOztBQUVBLFlBQUlMLFlBQVksS0FBWkEsVUFBMkJtRCxLQUFLLENBQUxBLFNBQS9CLFlBQStCQSxDQUEvQixFQUE2RDtBQUMzRDtBQUVIO0FBQ0Y7QUFDRjtBQUNEOztBQUFBO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRE0scUNBQXVFO0FBQzVFLFFBQU07QUFBQTtBQUFBO0FBQUEsTUFBTjtBQUNBLFNBQVEvSCxRQUFELElBQXlDO0FBQzlDLFVBQU1zSSxVQUFVLEdBQUc0RixFQUFFLENBQUZBLEtBQW5CLFFBQW1CQSxDQUFuQjs7QUFDQSxRQUFJLENBQUosWUFBaUI7QUFDZjtBQUdGOztBQUFBLFVBQU1DLE1BQU0sR0FBSXZLLEtBQUQsSUFBbUI7QUFDaEMsVUFBSTtBQUNGLGVBQU93SyxrQkFBa0IsQ0FBekIsS0FBeUIsQ0FBekI7QUFDQSxPQUZGLENBRUUsVUFBVTtBQUNWLGNBQU1sUSxHQUE4QixHQUFHLFVBQXZDLHdCQUF1QyxDQUF2QztBQUdBQSxXQUFHLENBQUhBO0FBQ0E7QUFFSDtBQVZEOztBQVdBLFVBQU15RixNQUFrRCxHQUF4RDtBQUVBdkUsVUFBTSxDQUFOQSxxQkFBNkJpUCxRQUFELElBQXNCO0FBQ2hELFlBQU1DLENBQUMsR0FBR0MsTUFBTSxDQUFoQixRQUFnQixDQUFoQjtBQUNBLFlBQU1DLENBQUMsR0FBR2xHLFVBQVUsQ0FBQ2dHLENBQUMsQ0FBdEIsR0FBb0IsQ0FBcEI7O0FBQ0EsVUFBSUUsQ0FBQyxLQUFMLFdBQXFCO0FBQ25CN0ssY0FBTSxDQUFOQSxRQUFNLENBQU5BLEdBQW1CLENBQUM2SyxDQUFDLENBQURBLFFBQUQsR0FBQ0EsQ0FBRCxHQUNmQSxDQUFDLENBQURBLGVBQWtCOVEsS0FBRCxJQUFXeVEsTUFBTSxDQURuQixLQUNtQixDQUFsQ0ssQ0FEZSxHQUVmRixDQUFDLENBQURBLFNBQ0EsQ0FBQ0gsTUFBTSxDQURQRyxDQUNPLENBQVAsQ0FEQUEsR0FFQUgsTUFBTSxDQUpWeEssQ0FJVSxDQUpWQTtBQU1IO0FBVkR2RTtBQVdBO0FBOUJGO0FBZ0NELEM7Ozs7Ozs7Ozs7Ozs7Ozt1Q0M5QkQ7QUFDQTs7QUFDQSwwQkFBa0M7QUFDaEMsU0FBT3FQLEdBQUcsQ0FBSEEsZ0NBQVAsTUFBT0EsQ0FBUDtBQUdGOztBQUFBLCtCQUF1QztBQUNyQyxRQUFNekssUUFBUSxHQUFHSixLQUFLLENBQUxBLG1CQUF5QkEsS0FBSyxDQUFMQSxTQUExQyxHQUEwQ0EsQ0FBMUM7O0FBQ0EsZ0JBQWM7QUFDWkEsU0FBSyxHQUFHQSxLQUFLLENBQUxBLFNBQWUsQ0FBdkJBLENBQVFBLENBQVJBO0FBRUY7O0FBQUEsUUFBTUcsTUFBTSxHQUFHSCxLQUFLLENBQUxBLFdBQWYsS0FBZUEsQ0FBZjs7QUFDQSxjQUFZO0FBQ1ZBLFNBQUssR0FBR0EsS0FBSyxDQUFMQSxNQUFSQSxDQUFRQSxDQUFSQTtBQUVGOztBQUFBLFNBQU87QUFBRTdFLE9BQUcsRUFBTDtBQUFBO0FBQVA7QUFBTyxHQUFQO0FBR0s7O0FBQUEsd0NBT0w7QUFDQSxRQUFNMlAsUUFBUSxHQUFHLENBQUNDLGVBQWUsQ0FBZkEsc0JBQUQsb0JBQWpCLEdBQWlCLENBQWpCO0FBSUEsUUFBTUosTUFBc0MsR0FBNUM7QUFDQSxNQUFJSyxVQUFVLEdBQWQ7QUFDQSxRQUFNQyxrQkFBa0IsR0FBR0gsUUFBUSxDQUFSQSxJQUNuQnZELE9BQUQsSUFBYTtBQUNoQixRQUFJQSxPQUFPLENBQVBBLG1CQUEyQkEsT0FBTyxDQUFQQSxTQUEvQixHQUErQkEsQ0FBL0IsRUFBc0Q7QUFDcEQsWUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQTRCMkQsY0FBYyxDQUFDM0QsT0FBTyxDQUFQQSxTQUFpQixDQUFsRSxDQUFpREEsQ0FBRCxDQUFoRDtBQUNBb0QsWUFBTSxDQUFOQSxHQUFNLENBQU5BLEdBQWM7QUFBRVEsV0FBRyxFQUFFSCxVQUFQO0FBQUE7QUFBZEw7QUFBYyxPQUFkQTtBQUNBLGFBQU94SyxNQUFNLEdBQUlDLFFBQVEsbUJBQVosV0FBYjtBQUhGLFdBSU87QUFDTCxhQUFRLElBQUdnTCxXQUFXLFNBQXRCO0FBRUg7QUFUd0JOLFVBQTNCLEVBQTJCQSxDQUEzQixDQVBBLENBbUJBO0FBQ0E7O0FBQ0EsWUFBbUM7QUFDakMsUUFBSU8sZ0JBQWdCLEdBQXBCO0FBQ0EsUUFBSUMsa0JBQWtCLEdBQXRCLEVBRmlDLENBSWpDOztBQUNBLFVBQU1DLGVBQWUsR0FBRyxNQUFNO0FBQzVCLFVBQUlDLFFBQVEsR0FBWjs7QUFFQSxXQUFLLElBQUlDLENBQUMsR0FBVixHQUFnQkEsQ0FBQyxHQUFqQixvQkFBd0NBLENBQXhDLElBQTZDO0FBQzNDRCxnQkFBUSxJQUFJeEQsTUFBTSxDQUFOQSxhQUFad0QsZ0JBQVl4RCxDQUFad0Q7QUFDQUgsd0JBQWdCOztBQUVoQixZQUFJQSxnQkFBZ0IsR0FBcEIsS0FBNEI7QUFDMUJDLDRCQUFrQjtBQUNsQkQsMEJBQWdCLEdBQWhCQTtBQUVIO0FBQ0Q7O0FBQUE7QUFaRjs7QUFlQSxVQUFNSyxTQUFzQyxHQUE1QztBQUVBLFFBQUlDLHVCQUF1QixHQUFHYixRQUFRLENBQVJBLElBQ3RCdkQsT0FBRCxJQUFhO0FBQ2hCLFVBQUlBLE9BQU8sQ0FBUEEsbUJBQTJCQSxPQUFPLENBQVBBLFNBQS9CLEdBQStCQSxDQUEvQixFQUFzRDtBQUNwRCxjQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBNEIyRCxjQUFjLENBQUMzRCxPQUFPLENBQVBBLFNBQWlCLENBQWxFLENBQWlEQSxDQUFELENBQWhELENBRG9ELENBRXBEO0FBQ0E7O0FBQ0EsWUFBSXFFLFVBQVUsR0FBR3pRLEdBQUcsQ0FBSEEsZUFBakIsRUFBaUJBLENBQWpCO0FBQ0EsWUFBSTBRLFVBQVUsR0FBZCxNQUxvRCxDQU9wRDtBQUNBOztBQUNBLFlBQUlELFVBQVUsQ0FBVkEsZ0JBQTJCQSxVQUFVLENBQVZBLFNBQS9CLElBQXVEO0FBQ3JEQyxvQkFBVSxHQUFWQTtBQUVGOztBQUFBLFlBQUksQ0FBQzlCLEtBQUssQ0FBQytCLFFBQVEsQ0FBQ0YsVUFBVSxDQUFWQSxVQUFwQixDQUFvQkEsQ0FBRCxDQUFULENBQVYsRUFBK0M7QUFDN0NDLG9CQUFVLEdBQVZBO0FBR0Y7O0FBQUEsd0JBQWdCO0FBQ2RELG9CQUFVLEdBQUdMLGVBQWJLO0FBR0ZGOztBQUFBQSxpQkFBUyxDQUFUQSxVQUFTLENBQVRBO0FBQ0EsZUFBT3ZMLE1BQU0sR0FDVEMsUUFBUSxHQUNMLFVBQVN3TCxVQURKLFlBRUwsT0FBTUEsVUFIQSxVQUlSLE9BQU1BLFVBSlg7QUFyQkYsYUEwQk87QUFDTCxlQUFRLElBQUdSLFdBQVcsU0FBdEI7QUFFSDtBQS9CMkJOLFlBQTlCLEVBQThCQSxDQUE5QjtBQWtDQSxXQUFPO0FBQ0xSLFFBQUUsRUFBRSxXQUFZLElBQUdXLGtCQURkLFNBQ0QsQ0FEQztBQUFBO0FBQUE7QUFJTGMsZ0JBQVUsRUFBRyxJQUFHSix1QkFKbEI7QUFBTyxLQUFQO0FBUUY7O0FBQUEsU0FBTztBQUNMckIsTUFBRSxFQUFFLFdBQVksSUFBR1csa0JBRGQsU0FDRCxDQURDO0FBQVA7QUFBTyxHQUFQO0FBSUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEhEO0FBeVFBOzs7OztBQUdPLHNCQUVGO0FBQ0gsTUFBSWUsSUFBSSxHQUFSO0FBQ0E7QUFFQSxTQUFRLENBQUMsR0FBRCxTQUFvQjtBQUMxQixRQUFJLENBQUosTUFBVztBQUNUQSxVQUFJLEdBQUpBO0FBQ0ExTCxZQUFNLEdBQUd3RyxFQUFFLENBQUMsR0FBWnhHLElBQVcsQ0FBWEE7QUFFRjs7QUFBQTtBQUxGO0FBU0s7O0FBQUEsNkJBQTZCO0FBQ2xDLFFBQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUErQjVHLE1BQU0sQ0FBM0M7QUFDQSxTQUFRLEdBQUVpTyxRQUFTLEtBQUlJLFFBQVMsR0FBRWtFLElBQUksR0FBRyxNQUFILE9BQWdCLEVBQXREO0FBR0s7O0FBQUEsa0JBQWtCO0FBQ3ZCLFFBQU07QUFBQTtBQUFBLE1BQVd2UyxNQUFNLENBQXZCO0FBQ0EsUUFBTTRPLE1BQU0sR0FBRzRELGlCQUFmO0FBQ0EsU0FBTzNSLElBQUksQ0FBSkEsVUFBZStOLE1BQU0sQ0FBNUIsTUFBTy9OLENBQVA7QUFHSzs7QUFBQSxtQ0FBd0Q7QUFDN0QsU0FBTyw0Q0FFSDhJLFNBQVMsQ0FBVEEsZUFBeUJBLFNBQVMsQ0FBbENBLFFBRko7QUFLSzs7QUFBQSx3QkFBd0M7QUFDN0MsU0FBTzdCLEdBQUcsQ0FBSEEsWUFBZ0JBLEdBQUcsQ0FBMUI7QUFHSzs7QUFBQSw2Q0FJa0Q7QUFDdkQsWUFBMkM7QUFBQTs7QUFDekMsMEJBQUkySyxHQUFHLENBQVAsOEJBQUlBLGVBQUosaUJBQW9DO0FBQ2xDLFlBQU1qTyxPQUFPLEdBQUksSUFBR2tPLGNBQWMsS0FBbEM7QUFHQSxZQUFNLFVBQU4sT0FBTSxDQUFOO0FBRUg7QUFDRCxHQVR1RCxDQVN2RDs7O0FBQ0EsUUFBTTVLLEdBQUcsR0FBRzRGLEdBQUcsQ0FBSEEsT0FBWUEsR0FBRyxDQUFIQSxPQUFXQSxHQUFHLENBQUhBLElBQW5DOztBQUVBLE1BQUksQ0FBQytFLEdBQUcsQ0FBUixpQkFBMEI7QUFDeEIsUUFBSS9FLEdBQUcsQ0FBSEEsT0FBV0EsR0FBRyxDQUFsQixXQUE4QjtBQUM1QjtBQUNBLGFBQU87QUFDTGlGLGlCQUFTLEVBQUUsTUFBTUMsbUJBQW1CLENBQUNsRixHQUFHLENBQUosV0FBZ0JBLEdBQUcsQ0FEekQsR0FDc0M7QUFEL0IsT0FBUDtBQUlGOztBQUFBO0FBR0Y7O0FBQUEsUUFBTTNMLEtBQUssR0FBRyxNQUFNMFEsR0FBRyxDQUFIQSxnQkFBcEIsR0FBb0JBLENBQXBCOztBQUVBLE1BQUkzSyxHQUFHLElBQUkrSyxTQUFTLENBQXBCLEdBQW9CLENBQXBCLEVBQTJCO0FBQ3pCO0FBR0Y7O0FBQUEsTUFBSSxDQUFKLE9BQVk7QUFDVixVQUFNck8sT0FBTyxHQUFJLElBQUdrTyxjQUFjLEtBRWhDLCtEQUE4RDNRLEtBRmhFO0FBR0EsVUFBTSxVQUFOLE9BQU0sQ0FBTjtBQUdGOztBQUFBLFlBQTJDO0FBQ3pDLFFBQUlELE1BQU0sQ0FBTkEsNEJBQW1DLENBQUM0TCxHQUFHLENBQTNDLEtBQWlEO0FBQy9DaE4sYUFBTyxDQUFQQSxLQUNHLEdBQUVnUyxjQUFjLEtBRG5CaFM7QUFNSDtBQUVEOztBQUFBO0FBR0s7O0FBQUEsTUFBTW9TLGFBQWEsR0FBRyx3R0FBdEIsU0FBc0IsQ0FBdEI7OztBQWVBLG1DQUFzRDtBQUMzRCxZQUE0QztBQUMxQyxRQUFJbE4sR0FBRyxLQUFIQSxRQUFnQixlQUFwQixVQUE2QztBQUMzQzlELFlBQU0sQ0FBTkEsa0JBQTBCTCxHQUFELElBQVM7QUFDaEMsWUFBSXFSLGFBQWEsQ0FBYkEsaUJBQStCLENBQW5DLEdBQXVDO0FBQ3JDcFMsaUJBQU8sQ0FBUEEsS0FDRyxxREFBb0RlLEdBRHZEZjtBQUlIO0FBTkRvQjtBQVFIO0FBRUQ7O0FBQUEsU0FBTywwQkFBUCxHQUFPLENBQVA7QUFHSzs7QUFBQSxNQUFNaVIsRUFBRSxHQUFHLHVCQUFYOztBQUNBLE1BQU01SSxFQUFFLEdBQ2I0SSxFQUFFLElBQ0YsT0FBTzNJLFdBQVcsQ0FBbEIsU0FEQTJJLGNBRUEsT0FBTzNJLFdBQVcsQ0FBbEIsWUFISzs7Ozs7Ozs7Ozs7OztBQ3hZTSx3QkFBd0IsMENBQTBDLGdEQUFnRCxnQ0FBZ0MsZ0NBQWdDLG1DQUFtQyw0QkFBNEIsK0JBQStCLG9CQUFvQix5QkFBeUIsVUFBVTtBQUNwVixpRDs7Ozs7Ozs7Ozs7QUNEQSxpQkFBaUIsbUJBQU8sQ0FBQyxtRUFBb0I7Ozs7Ozs7Ozs7OztBQ0E3QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7OztBQ05BLGNBQWMsbUJBQU8sQ0FBQyw0RkFBbUI7O0FBRXpDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlDOzs7Ozs7Ozs7OztBQ3REQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFZQSxNQUFNNEksS0FBTixTQUFvQkMsbURBQXBCLENBQTBDO0FBQUE7QUFBQTs7QUFBQSx3Q0FLM0IsS0FMMkI7O0FBQUEsb0NBWTlCNUYsSUFBRCxJQUFrQjtBQUN6QixZQUFNO0FBQUU2RixhQUFLLEVBQUVDO0FBQVQsVUFBMkIsS0FBS3BSLEtBQXRDO0FBQ0FvUixtQkFBYSxpQ0FDUjlGLElBRFE7QUFFWCtGLGdCQUFRLEVBQUUsS0FBS0M7QUFGSixTQUFiO0FBSUQsS0FsQnVDO0FBQUE7O0FBT3hDQyxzQkFBb0IsR0FBRztBQUNyQixVQUFNO0FBQUVDLG9CQUFjLEVBQUVDO0FBQWxCLFFBQW9DLEtBQUt6UixLQUEvQztBQUNBeVIsaUJBQWE7QUFDZDs7QUFVREMsUUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUNKQyxnQkFESTtBQUNRbkksV0FEUjtBQUNlakssYUFEZjtBQUN3QnFTO0FBRHhCLFFBRUYsS0FBSzVSLEtBRlQ7QUFHQSxXQUNFLG1FQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsQ0FERixFQUlFO0FBQUssZUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFDLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDhFQUFEO0FBQ0UsdUJBQWlCLEVBQUUsQ0FBQTRSLEVBQUUsU0FBRixJQUFBQSxFQUFFLFdBQUYsWUFBQUEsRUFBRSxDQUFFQyxpQkFBSixLQUF5QixXQUQ5QztBQUVFLGdCQUFVLEVBQUVGLFVBRmQ7QUFHRSxZQUFNLEVBQUUsS0FBS0csTUFBTCxDQUFZQyxJQUFaLENBQWlCLElBQWpCLENBSFY7QUFJRSxnQkFBVSxFQUFHdk4sS0FBRCxJQUFXO0FBQUUsYUFBSzhNLFVBQUwsR0FBa0I5TSxLQUFsQjtBQUEwQixPQUpyRDtBQUtFLFdBQUssRUFBRWdGLEtBTFQ7QUFNRSxhQUFPLEVBQUVqSyxPQU5YO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURGLEVBV0UsTUFBQyxpRkFBRDtBQUF5QixRQUFFLEVBQUVxUyxFQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BWEYsQ0FKRixDQURGO0FBb0JEOztBQTVDdUM7O2dCQUFwQ1gsSyxZQUNvQixNOztnQkFEcEJBLEssa0JBRzJCLEs7O0FBNENqQyxNQUFNZSxTQUFTLEdBQUkxSyxLQUFELG9DQUNiQSxLQUFLLENBQUMrRSxJQUFOLENBQVc0RixTQURFO0FBRWhCTCxJQUFFLEVBQUV0SyxLQUFLLENBQUNzSztBQUZNLEVBQWxCOztBQUlBLE1BQU1NLFdBQVcsR0FBRztBQUFFZixrRUFBRjtBQUFTSyxvRkFBY0E7QUFBdkIsQ0FBcEI7QUFDZVcsMEhBQU8sQ0FBQ0gsU0FBRCxFQUFZRSxXQUFaLENBQVAsQ0FBZ0NqQixLQUFoQyxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZFQTtBQUNBO0FBQ0E7QUFFQSxNQUFNO0FBQUVtQixNQUFJLEVBQUVDO0FBQVIsSUFBcUJDLHlDQUEzQjs7QUFPQSxNQUFNQyxlQUFlLEdBQUcsQ0FBQztBQUFFQyxTQUFGO0FBQVdYO0FBQVgsQ0FBRCxLQUN0QixNQUFDLHdDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRSxNQUFDLHdDQUFEO0FBQUssTUFBSSxFQUFFLEVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNHVyxPQUFPLEtBQUssUUFBWixJQUF3QkEsT0FBTyxLQUFLLE1BQXBDLEdBQ0MsTUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRUcsR0FGSCxFQUdFLE1BQUMsZ0RBQUQ7QUFBTSxNQUFJLEVBQUMscUJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsQ0FIRixDQURELEdBU0dBLE9BQU8sS0FBSyxXQUFaLElBQ0YsTUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRUcsR0FGSCxFQUdHWCxpQkFBaUIsSUFBSSxXQUh4QixPQUtHLEdBTEgsRUFNRSxNQUFDLGdEQUFEO0FBQU0sTUFBSSxFQUFDLHNCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLENBTkYsQ0FYSixFQXNCR1csT0FBTyxLQUFLLFFBQVosSUFDRCxNQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNHLDJCQURILEVBRUUsTUFBQyxnREFBRDtBQUFNLE1BQUksRUFBQyxrQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixDQUZGLENBdkJGLENBREYsRUFnQ0UsTUFBQyx3Q0FBRDtBQUFLLE1BQUksRUFBRSxFQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDR0EsT0FBTyxLQUFLLE1BQVosSUFDRCxNQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFFRyxHQUZILEVBR0dYLGlCQUFpQixJQUFJLFdBSHhCLE9BS0csR0FMSCxFQU1FLE1BQUMsZ0RBQUQ7QUFBTSxNQUFJLEVBQUMsdUJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsQ0FORixDQUZGLEVBYUdXLE9BQU8sS0FBSyxXQUFaLElBQ0QsTUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRUcsR0FGSCxFQUdFLE1BQUMsZ0RBQUQ7QUFBTSxNQUFJLEVBQUMsa0JBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsQ0FIRixDQWRGLENBaENGLENBREY7O0FBMERBRCxlQUFlLENBQUNFLFlBQWhCLEdBQStCO0FBQzdCWixtQkFBaUIsRUFBRTtBQURVLENBQS9CO0FBR2VVLDhFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFhQSxNQUFNRixRQUFRLEdBQUdDLHlDQUFJLENBQUNGLElBQXRCOztBQUVBLE1BQU1NLFNBQVMsR0FBRyxDQUFDO0FBQ2pCZixZQURpQjtBQUVqQkcsUUFGaUI7QUFHakJ0SSxPQUhpQjtBQUlqQmpLLFNBSmlCO0FBS2pCb1QsWUFMaUI7QUFNakJkLG1CQU5pQjtBQU9qQmUsd0JBUGlCO0FBUWpCQztBQVJpQixDQUFELEtBU0o7QUFDWixRQUFNQyxZQUFZLGdCQUFHQyx1REFBUyxFQUE5QjtBQUNBLFFBQU07QUFBQSxPQUFDQyxjQUFEO0FBQUEsT0FBaUJDO0FBQWpCLE1BQXNDQyxzREFBUSxDQUFDLEVBQUQsQ0FBcEQ7QUFDQSxRQUFNLENBQUNDLElBQUQsSUFBU2IseUNBQUksQ0FBQ2MsT0FBTCxFQUFmOztBQUNBLFFBQU1DLFlBQVksR0FBRyxNQUFNO0FBQ3pCRixRQUFJLENBQUNyQixNQUFMO0FBQ0QsR0FGRDs7QUFJQSxRQUFNd0IsUUFBUSxHQUFHLE1BQU9oSSxJQUFQLElBQXdCO0FBQ3ZDLFFBQUk7QUFDRixVQUFJc0gsc0JBQUosRUFBNEI7QUFDMUIsY0FBTVcsS0FBSyxHQUFHVCxZQUFZLENBQUNVLE9BQWIsQ0FBcUJDLFFBQXJCLEVBQWQsQ0FEMEIsQ0FFMUI7O0FBQ0EsWUFBSSxDQUFDRixLQUFMLEVBQVk7QUFDVk4sMkJBQWlCLENBQUMseUNBQUQsQ0FBakI7QUFDQTtBQUNEOztBQUVESCxvQkFBWSxDQUFDVSxPQUFiLENBQXFCRSxLQUFyQjtBQUNBVCx5QkFBaUIsQ0FBQyxFQUFELENBQWpCO0FBQ0EsY0FBTVUsNERBQVksQ0FBQ0MsZUFBYixDQUE2QkwsS0FBN0IsQ0FBTjtBQUNEOztBQUVEekIsWUFBTSxDQUFDeEcsSUFBRCxDQUFOO0FBQ0QsS0FmRCxDQWVFLE9BQU9yTSxDQUFQLEVBQVU7QUFDVixVQUFJMlQsc0JBQXNCLElBQUlFLFlBQVksQ0FBQ1UsT0FBYixDQUFxQkMsUUFBckIsRUFBOUIsRUFBK0Q7QUFDN0RYLG9CQUFZLENBQUNVLE9BQWIsQ0FBcUJFLEtBQXJCO0FBQ0Q7O0FBRUQsWUFBTTdVLEdBQUcsR0FBRyxNQUFNbU0sT0FBTyxDQUFDNkksT0FBUixDQUFnQjVVLENBQWhCLENBQWxCO0FBQ0F3RCxrREFBTyxDQUFDK0csS0FBUixDQUFjc0ssbUVBQWdCLENBQUNqVixHQUFELENBQTlCO0FBQ0Q7QUFDRixHQXhCRDs7QUEwQkEsU0FDRSxNQUFDLHlDQUFEO0FBQU0sVUFBTSxFQUFDLFVBQWI7QUFBd0IsWUFBUSxFQUFFeVUsUUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsRUFFRSxNQUFDLFFBQUQ7QUFDRSxlQUFXLE1BRGI7QUFFRSxTQUFLLEVBQUMsT0FGUjtBQUdFLFFBQUksRUFBQyxPQUhQO0FBSUUsU0FBSyxFQUFFLENBQ0w7QUFBRVMsVUFBSSxFQUFFLE9BQVI7QUFBaUJ0UixhQUFPLEVBQUU7QUFBMUIsS0FESyxFQUVMO0FBQUV1UixjQUFRLEVBQUUsSUFBWjtBQUFrQnZSLGFBQU8sRUFBRTtBQUEzQixLQUZLLENBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVNFLE1BQUMsMENBQUQ7QUFDRSxnQkFBWSxFQUFFNFEsWUFEaEI7QUFFRSxlQUFXLEVBQUMsdUJBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLENBRkYsRUFnQkUsTUFBQyxRQUFEO0FBQ0UsZUFBVyxNQURiO0FBRUUsU0FBSyxFQUNILE1BQUMsMENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsQ0FISjtBQU9FLGFBQVMsRUFBQyxnQkFQWjtBQVFFLFFBQUksRUFBQyxVQVJQO0FBU0UsU0FBSyxFQUFFLENBQ0w7QUFBRVcsY0FBUSxFQUFFLElBQVo7QUFBa0J2UixhQUFPLEVBQUU7QUFBM0IsS0FESyxFQUVMO0FBQ0V3UixTQUFHLEVBQUUsQ0FEUDtBQUVFQyxTQUFHLEVBQUUsRUFGUDtBQUdFelIsYUFBTyxFQUFFO0FBSFgsS0FGSyxDQVRUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FrQkUsTUFBQywwQ0FBRCxDQUFPLFFBQVA7QUFDRSxnQkFBWSxFQUFFNFEsWUFEaEI7QUFFRSxlQUFXLEVBQUMsVUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbEJGLENBaEJGLEVBdUNFLE1BQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx1RUFBRDtBQUNFLE9BQUcsRUFBRVAsWUFEUDtBQUVFLDBCQUFzQixFQUFFRixzQkFGMUI7QUFHRSwwQkFBc0IsRUFBRUMsc0JBSDFCO0FBSUUsU0FBSyxFQUFFRyxjQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQXZDRixFQStDRTtBQUNFLFNBQUssRUFBRTtBQUNMbUIsYUFBTyxFQUFFLE1BREo7QUFFTEMsb0JBQWMsRUFBRSxlQUZYO0FBR0xDLFdBQUssRUFBRSxNQUhGO0FBSUxDLFlBQU0sRUFBRTtBQUpILEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFFLE1BQUMsNkNBQUQ7QUFBVSxZQUFRLEVBQUdyVixDQUFELElBQU8wVCxVQUFVLENBQUMxVCxDQUFDLENBQUNELE1BQUYsQ0FBU3VWLE9BQVYsQ0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSRixFQVdFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsdUJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsQ0FYRixDQS9DRixFQThERyxDQUFDL0ssS0FBSyxJQUFJakssT0FBVixLQUNDLE1BQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dpSyxLQUFLLElBQ0osTUFBQywwQ0FBRDtBQUNFLFdBQU8sRUFBQyxPQURWO0FBRUUsZUFBVyxFQUNUQSxLQUFLLENBQUMvRyxPQUFOLElBQWlCK0csS0FBSyxDQUFDL0csT0FBTixLQUFrQixrQkFBbkMsR0FDSSw0QkFESixHQUVJcVIsbUVBQWdCLENBQUN0SyxLQUFELENBTHhCO0FBT0UsUUFBSSxFQUFDLE9BUFA7QUFRRSxZQUFRLE1BUlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBYUdqSyxPQUFPLElBQ04sTUFBQywwQ0FBRDtBQUNFLFdBQU8sRUFBQyxlQURWO0FBRUUsUUFBSSxFQUFDLFNBRlA7QUFHRSxlQUFXLEVBQUMsZ0JBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWRKLENBL0RKLEVBcUZFLE1BQUMsUUFBRDtBQUFVLGFBQVMsRUFBQyxpQkFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkNBQUQ7QUFDRSxRQUFJLEVBQUMsU0FEUDtBQUVFLFlBQVEsRUFBQyxRQUZYO0FBR0UsWUFBUSxFQUFFb1MsVUFIWjtBQUlFLFdBQU8sRUFBRUEsVUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsQ0FyRkYsRUErRkUsTUFBQywwREFBRDtBQUFpQixXQUFPLEVBQUMsTUFBekI7QUFBZ0MscUJBQWlCLEVBQUVFLGlCQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBL0ZGLENBREY7QUFtR0QsQ0E5SUQ7O0FBK0lBLE1BQU1HLFNBQVMsR0FBSTFLLEtBQUQsc0JBQ2JBLEtBQUssQ0FBQ3NLLEVBRE8sQ0FBbEI7O0FBR0EsTUFBTU0sV0FBVyxHQUFHO0FBQUVzQyxtRkFBYUE7QUFBZixDQUFwQjtBQUNBOUIsU0FBUyxDQUFDRCxZQUFWLEdBQXlCO0FBQ3ZCRyx3QkFBc0IsRUFBRSxLQUREO0FBRXZCQyx3QkFBc0IsRUFBRTtBQUZELENBQXpCO0FBSWVWLDBIQUFPLENBQUNILFNBQUQsRUFBWUUsV0FBWixDQUFQLENBQWdDUSxTQUFoQyxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xMQTtBQU9PLE1BQU0rQix1QkFBdUIsR0FBRyxDQUFDO0FBQUU3QztBQUFGLENBQUQsS0FDckM7QUFDRSxXQUFTLEVBQUMsMkJBRFo7QUFFRSxPQUFLLEVBQ0hBLEVBQUUsU0FBRixJQUFBQSxFQUFFLFdBQUYsSUFBQUEsRUFBRSxDQUFFOEMsbUJBQUosR0FDSTtBQUFFQyxtQkFBZSxFQUFHLE9BQU0vQyxFQUFFLENBQUM4QyxtQkFBb0I7QUFBakQsR0FESixHQUVJLEVBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURLLEM7Ozs7Ozs7Ozs7OztBQ1BQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBRU8sU0FBU0Usa0JBQVQsR0FBOEI7QUFDbkMsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsZ0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyRUFERixFQUVFO0FBQUssYUFBUyxFQUFDLHFDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRiw4SEFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsd0VBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLDBDQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRix3Q0FVRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkYsMkJBWUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpGLFNBY0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWRGLCtHQURGLEVBa0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMmdCQWxCRixFQXFCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVPQXJCRixFQXdCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrREFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0lBRkYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDREQUxGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3SEFORixFQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0ZBVEYsRUFZRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhPQVpGLEVBZUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5VUFmRixFQWtCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhFQUVFO0FBQUcsUUFBSSxFQUFDLDRCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixFQUdHLEdBSEgsK0VBbEJGLEVBd0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdVRBeEJGLEVBMkJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaWRBM0JGLEVBOEJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMlNBOUJGLEVBaUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUtBakNGLEVBb0NFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUhBcENGLEVBdUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaWNBdkNGLENBeEJGLENBREYsRUFxRUU7QUFBRyxhQUFTLEVBQUMsWUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZLQXJFRixDQUZGLENBREY7QUE0RUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRUQ7QUFDQTtBQUNBO0FBQ0E7QUFRQSxNQUFNQyxlQUFlLGdCQUFHQyx3REFBVSxDQUFjLENBQUM5VSxLQUFELEVBQWdCbUIsR0FBaEIsS0FBd0I7QUFDdEUsUUFBTTtBQUNKeVIsMEJBREk7QUFDb0JDLDBCQURwQjtBQUM0Q3JKO0FBRDVDLE1BRUZ4SixLQUZKOztBQUlBLFFBQU0rVSxrQkFBa0IsR0FBRyxNQUFNO0FBQy9CLFFBQUk5VyxNQUFNLENBQUMrVyxVQUFYLEVBQXVCO0FBQ3JCL1csWUFBTSxDQUFDK1csVUFBUCxDQUFrQnRCLEtBQWxCO0FBQ0Q7QUFDRixHQUpEOztBQU1BdUIseURBQVMsQ0FBQyxNQUFNO0FBQ2Q3UyxzREFBTSxDQUFDeUUsTUFBUCxDQUFjeEQsRUFBZCxDQUFpQixrQkFBakIsRUFBcUMwUixrQkFBckM7QUFFQSxXQUFPLE1BQU07QUFDWDNTLHdEQUFNLENBQUN5RSxNQUFQLENBQWN2RCxHQUFkLENBQWtCLGtCQUFsQixFQUFzQ3lSLGtCQUF0QztBQUNELEtBRkQ7QUFHRCxHQU5RLEVBTU4sRUFOTSxDQUFUO0FBUUEsU0FDRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR25DLHNCQUFzQixJQUNyQixNQUFDLDZEQUFEO0FBQ0UsT0FBRyxFQUFFelIsR0FEUCxDQUVFO0FBQ0E7QUFIRjtBQUlFLFdBQU8sRUFBRTBSLHNCQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQVNHckosS0FBSyxJQUNKO0FBQUcsYUFBUyxFQUFDLHlCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsS0FBSyxJQUFJLHlDQURaLENBVkosQ0FERjtBQWlCRCxDQXBDaUMsQ0FBbEM7QUFxQ2VxTCw4RUFBZixFOzs7Ozs7Ozs7Ozs7QUNoREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sU0FBU0ssVUFBVCxDQUFvQkMsSUFBcEIsRUFBZ0NDLE1BQU0sR0FBRyxxQkFBekMsRUFBZ0U7QUFDckUsU0FBT0MsNkNBQU0sQ0FBQ0YsSUFBRCxDQUFOLENBQWFDLE1BQWIsQ0FBb0JBLE1BQXBCLENBQVA7QUFDRDtBQUVNLFNBQVNFLGNBQVQsQ0FBd0JDLFFBQXhCLEVBQTBDSCxNQUFNLEdBQUcsT0FBbkQsRUFBNEQ7QUFDakUsU0FBT0MsNkNBQU0sQ0FDVkcsR0FESSxDQUNBSCw2Q0FBTSxDQUFDRSxRQUFQLENBQWdCQSxRQUFoQixFQUEwQixjQUExQixFQUEwQ0UsY0FBMUMsRUFEQSxFQUVKTCxNQUZJLENBRUdBLE1BRkgsQ0FBUDtBQUdEO0FBRU0sU0FBU00sUUFBVCxDQUFrQlAsSUFBbEIsRUFBZ0NDLE1BQU0sR0FBRyxlQUF6QyxFQUEwRDtBQUMvRCxTQUFPQyw2Q0FBTSxDQUFDRixJQUFELENBQU4sQ0FBYUMsTUFBYixDQUFvQkEsTUFBcEIsQ0FBUDtBQUNEO0FBRU0sU0FBU08sTUFBVCxDQUFnQlIsSUFBaEIsRUFBb0M7QUFDekMsU0FBT0UsNkNBQU0sR0FBR08sSUFBVCxDQUFjUCw2Q0FBTSxDQUFDRixJQUFELENBQU4sQ0FBYUMsTUFBYixDQUFvQixZQUFwQixDQUFkLEVBQWlELE9BQWpELEVBQTBEUyxRQUExRCxFQUFQO0FBQ0Q7QUFFTSxTQUFTQyxjQUFULENBQXdCQyxDQUF4QixFQUFtQztBQUN4QyxRQUFNQyxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxDQUFDLEdBQUcsSUFBZixDQUFkO0FBQ0EsUUFBTUksT0FBTyxHQUFHRixJQUFJLENBQUNDLEtBQUwsQ0FBVyxDQUFDSCxDQUFDLEdBQUdDLEtBQUssR0FBRyxJQUFiLElBQXFCLEVBQWhDLENBQWhCO0FBQ0EsUUFBTUksT0FBTyxHQUFHTCxDQUFDLEdBQUdDLEtBQUssR0FBRyxJQUFaLEdBQW1CRyxPQUFPLEdBQUcsRUFBN0M7QUFDQSxTQUFRLEdBQUVILEtBQUssR0FBRyxFQUFSLEdBQWEsR0FBYixHQUFtQixFQUFHLEdBQUVBLEtBQU0sSUFDdENHLE9BQU8sR0FBRyxFQUFWLEdBQWUsR0FBZixHQUFxQixFQUN0QixHQUFFQSxPQUFRLElBQUdDLE9BQU8sR0FBRyxFQUFWLEdBQWUsR0FBZixHQUFxQixFQUFHLEdBQUVBLE9BQVEsRUFGaEQ7QUFHRCxDOzs7Ozs7Ozs7Ozs7QUMzQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHTyxTQUFTQyxrQkFBVCxDQUE0QkMsSUFBNUIsRUFBbUQ7QUFDeEQsUUFBTUMsR0FBRyxHQUFHRCxJQUFJLENBQUNuVCxJQUFMLENBQVVxVCxLQUFWLENBQWdCLEdBQWhCLEVBQXFCQyxHQUFyQixHQUEyQkMsV0FBM0IsRUFBWjtBQUNBLFFBQU1DLE1BQU0sR0FBR0Msd0VBQWUsRUFBOUI7QUFDQSxRQUFNQyxhQUFhLEdBQUdGLE1BQU0sQ0FBQ0csd0JBQVAsQ0FDbkJOLEtBRG1CLENBQ2IsR0FEYSxFQUVuQk8sR0FGbUIsQ0FFZHhJLElBQUQsSUFBa0JBLElBQUksQ0FBQ3lJLElBQUwsRUFGSCxFQUduQkMsT0FIbUIsQ0FHVixJQUFHVixHQUFJLEVBSEcsQ0FBdEI7O0FBSUEsTUFBSU0sYUFBYSxLQUFLLENBQUMsQ0FBdkIsRUFBMEI7QUFDeEJwVSxnREFBTyxDQUFDK0csS0FBUixDQUFlLHVCQUFzQm1OLE1BQU0sQ0FBQ0csd0JBQXlCLFFBQXJFO0FBQ0EsV0FBTyxLQUFQO0FBQ0Q7O0FBRUQsUUFBTUksTUFBTSxHQUFHWixJQUFJLENBQUNhLElBQUwsR0FBWSxJQUFaLEdBQW1CLElBQW5CLElBQTJCUixNQUFNLENBQUNTLHNDQUFQLElBQWlELENBQTVFLENBQWY7O0FBQ0EsTUFBSSxDQUFDRixNQUFMLEVBQWE7QUFDWHpVLGdEQUFPLENBQUMrRyxLQUFSLENBQ0csMkJBQTBCbU4sTUFBTSxDQUFDUyxzQ0FBUCxJQUFpRCxDQUFFLEtBRGhGO0FBR0EsV0FBTyxLQUFQO0FBQ0Q7O0FBRUQsU0FBTyxJQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7O0FDekJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQSxNQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0I7QUFFTyxNQUFNQyx1QkFBdUIsR0FBRyxZQUE4QjtBQUNuRSxNQUFJO0FBQ0YsVUFBTXZSLEdBQUcsR0FBRyxNQUFNd1IsS0FBSyxDQUFDRixrQkFBRCxFQUFxQjtBQUMxQ0csYUFBTyxFQUFFO0FBQ1AseUJBQWlCLHFDQURWO0FBRVBDLGNBQU0sRUFBRSxVQUZEO0FBR1BDLGVBQU8sRUFBRTtBQUhGO0FBRGlDLEtBQXJCLENBQXZCOztBQU9BLFFBQ0UzUixHQUFHLENBQUM0UixNQUFKLEtBQWUsR0FBZixJQUNHNVIsR0FBRyxDQUFDNFIsTUFBSixLQUFlLEdBRGxCLElBRUc1UixHQUFHLENBQUM0UixNQUFKLEtBQWUsR0FGbEIsSUFHRzVSLEdBQUcsQ0FBQzRSLE1BQUosS0FBZSxHQUhsQixJQUlJNVIsR0FBRyxDQUFDNFIsTUFBSixJQUFjLEdBQWQsSUFBcUI1UixHQUFHLENBQUM0UixNQUFKLElBQWMsR0FMekMsRUFNRTtBQUNBLGFBQU8sSUFBUDtBQUNEO0FBQ0YsR0FqQkQsQ0FpQkUsT0FBT0MsU0FBUCxFQUFrQjtBQUNsQjtBQUNBalosV0FBTyxDQUFDa1osR0FBUixDQUFZRCxTQUFaO0FBQ0Q7O0FBQ0QsU0FBTyxLQUFQO0FBQ0QsQ0F2Qk0sQzs7Ozs7Ozs7Ozs7O0FDRlA7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNRSxjQUFjLEdBQUc7QUFDNUJDLFVBQVEsRUFBRTtBQUNSQyxNQUFFLEVBQUU7QUFDRkMsVUFBSSxFQUFFO0FBREosS0FESTtBQUlSQyxNQUFFLEVBQUU7QUFDRkQsVUFBSSxFQUFFO0FBREo7QUFKSSxHQURrQjtBQVM1QkUsWUFBVSxFQUFFO0FBQ1ZILE1BQUUsRUFBRTtBQUNGQyxVQUFJLEVBQUU7QUFESixLQURNO0FBSVZDLE1BQUUsRUFBRTtBQUNGRCxVQUFJLEVBQUU7QUFESjtBQUpNO0FBVGdCLENBQXZCO0FBbUJBLE1BQU1HLGtCQUFrQixHQUFHO0FBQ2hDRCxZQUFVLEVBQUU7QUFDVkgsTUFBRSxFQUFFO0FBQ0ZDLFVBQUksRUFBRSxFQURKO0FBRUZJLFlBQU0sRUFBRTtBQUZOLEtBRE07QUFLVkgsTUFBRSxFQUFFO0FBQ0ZELFVBQUksRUFBRSxFQURKO0FBRUZJLFlBQU0sRUFBRTtBQUZOO0FBTE07QUFEb0IsQ0FBM0I7QUFhQSxNQUFNQyxZQUFZLEdBQUc7QUFDMUJDLGNBQVksRUFBRSxTQURZO0FBRTFCQyxjQUFZLEVBQUUsU0FGWTtBQUcxQkMsWUFBVSxFQUFFO0FBSGMsQ0FBckIsQzs7Ozs7Ozs7Ozs7O0FDaENQO0FBQUE7QUFBTyxNQUFNQyxnQkFBZ0IsR0FBRztBQUM5QjFFLFVBQVEsRUFBRSx5QkFEb0I7QUFFOUIyRSxPQUFLLEVBQUU7QUFDTEMsU0FBSyxFQUFFLHVCQURGO0FBRUxDLFVBQU0sRUFBRTtBQUZILEdBRnVCO0FBTTlCQSxRQUFNLEVBQUU7QUFDTkMsU0FBSyxFQUFFO0FBREQ7QUFOc0IsQ0FBekIsQzs7Ozs7Ozs7Ozs7O0FDQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7O0FBYUEsU0FBU0MsWUFBVCxDQUFxQ2hGLElBQXJDLEVBQTRFO0FBQzFFLFFBQU1pRixNQUFNLEdBQUdDLGtFQUFpQixDQUFVbEYsSUFBVixDQUFoQzs7QUFDQWlGLFFBQU0sQ0FBQ0UsRUFBUCxHQUFhQyxLQUFELElBQW1CSCxNQUFNLENBQUNuRCxRQUFQLE9BQXNCc0QsS0FBckQ7O0FBQ0EsU0FBT0gsTUFBUDtBQUNEO0FBRUQ7OztBQUNBLFNBQVNJLGlCQUFULENBQTJCSixNQUEzQixFQUEyQ2pGLElBQTNDLEVBQThEO0FBQzVELFNBQU87QUFDTCxLQUFDaUYsTUFBRCxHQUFVRCxZQUFZLENBQUNoRixJQUFELENBRGpCO0FBRUwsS0FBRSxHQUFFaUYsTUFBTyxTQUFYLEdBQXNCRCxZQUFZLENBQUUsR0FBRWhGLElBQUssVUFBVCxDQUY3QjtBQUdMLEtBQUUsR0FBRWlGLE1BQU8sTUFBWCxHQUFtQkQsWUFBWSxDQUFFLEdBQUVoRixJQUFLLE9BQVQ7QUFIMUIsR0FBUDtBQUtEOztBQUVELFNBQVNzRixrQkFBVCxDQUtFdEYsSUFMRixFQVVFO0FBQ0EsU0FBTyxDQUNMZ0YsWUFBWSxDQUFhaEYsSUFBYixDQURQLEVBRUxnRixZQUFZLENBQWUsR0FBRWhGLElBQUssVUFBdEIsQ0FGUCxFQUdMZ0YsWUFBWSxDQUFhLEdBQUVoRixJQUFLLE9BQXBCLENBSFAsQ0FBUDtBQUtEO0FBRUQ7OztBQUNBLFNBQVN1RixhQUFULENBQXVCQyxPQUF2QixFQUFxQ0MsWUFBckMsRUFBd0Q7QUFDdEQsU0FBT0MsbUVBQWtCLENBQ3ZCQyxxREFBTSxDQUNKSCxPQURJLEVBRUosQ0FBQ0ksT0FBRCxFQUFlblcsT0FBZixFQUF3QndWLE1BQXhCLEtBQW1DO0FBQ2pDVyxXQUFPLENBQUNYLE1BQUQsQ0FBUCxHQUFrQixDQUFDMVIsS0FBRCxFQUFhc1MsR0FBYixLQUEwQnBXLE9BQU8sQ0FBQzhELEtBQUssQ0FBQzZDLEdBQU4sQ0FBVSxRQUFWLEVBQW9CNk8sTUFBcEIsQ0FBRCxFQUE4QlksR0FBOUIsQ0FBbkQ7O0FBQ0EsV0FBT0QsT0FBUDtBQUNELEdBTEcsRUFNSixFQU5JLENBRGlCLEVBU3ZCSCxZQVR1QixDQUF6QjtBQVdEOztBQUVELFNBQVNLLGNBQVQsQ0FDRUMsWUFERixFQUVFQyxRQUZGLEVBR0VQLFlBSEYsRUFJRVEsZ0JBQXlCLEdBQUcsS0FKOUIsRUFLTztBQUNMLFNBQU87QUFDTCxLQUFDRixZQUFELEdBQWdCTCxtRUFBa0IsQ0FDaENDLHFEQUFNLENBQ0pPLHNEQUFPLENBQUNGLFFBQUQsQ0FESCxFQUVKLENBQUNKLE9BQUQsRUFBZVgsTUFBZixLQUErQjtBQUM3QixVQUFJa0Isc0RBQU8sQ0FBQ2xCLE1BQU0sQ0FBQzNWLEVBQVIsQ0FBWCxFQUF3QjtBQUN0QjJWLGNBQU0sQ0FBQzNWLEVBQVAsQ0FBVThXLE9BQVYsQ0FBbUJQLEdBQUQsSUFBYztBQUM5QkQsaUJBQU8sQ0FBQ0MsR0FBRCxDQUFQLEdBQWVaLE1BQU0sQ0FBQ1csT0FBdEI7QUFDRCxTQUZEO0FBR0QsT0FKRCxNQUlPQSxPQUFPLENBQUNYLE1BQU0sQ0FBQzNWLEVBQVIsQ0FBUCxHQUFxQjJWLE1BQU0sQ0FBQ1csT0FBNUI7O0FBQ1AsYUFBT0EsT0FBUDtBQUNELEtBVEcsRUFVSkssZ0JBQWdCLEdBQ1osRUFEWSxHQUVaO0FBQ0FJLHFCQUFlLEVBQUUsTUFBTVo7QUFEdkIsS0FaQSxDQUQwQixFQWlCaENBLFlBakJnQztBQUQ3QixHQUFQO0FBcUJEOztBQUVNLFNBQVNhLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTBDO0FBQy9DLFNBQU9MLHNEQUFPLENBQUNLLEtBQUQsQ0FBUCxDQUFldkQsR0FBZixDQUFvQndELElBQUQsSUFBZTtBQUN2QyxVQUFNO0FBQUVsWCxRQUFGO0FBQU1tWCxZQUFNLEdBQUdDLDZEQUFmO0FBQTJCQztBQUEzQixRQUFzQ0gsSUFBNUM7QUFDQSxXQUFPLGFBQWE7QUFDbEIsWUFBTUMsTUFBTSxDQUFDblgsRUFBRCxFQUFLLFdBQVcyVixNQUFYLEVBQXdCO0FBQ3ZDLGNBQU0yQixnRUFBSyxDQUFDLENBQUQsQ0FBWDtBQUNBLGNBQU1ELE1BQU0sQ0FBQzFCLE1BQUQsQ0FBWjtBQUNELE9BSFcsQ0FBWjtBQUlELEtBTEQ7QUFNRCxHQVJNLENBQVA7QUFTRDs7QUFFRCxTQUFTNEIsZ0JBQVQsQ0FBMEJDLE9BQTFCLEVBQTJDek4sSUFBVyxHQUFHLEVBQXpELEVBQWtFO0FBQ2hFLFFBQU0wTixhQUFhLEdBQUl4VCxLQUFELElBQWdCQSxLQUFLLENBQUN1VCxPQUFELENBQTNDOztBQUVBLE1BQUlFLHNEQUFPLENBQUMzTixJQUFELENBQVgsRUFBbUIsT0FBTzBOLGFBQVA7QUFFbkIsU0FBTzFOLElBQUksQ0FBQzJKLEdBQUwsQ0FBVXJYLEdBQUQsSUFBZTRILEtBQUQsSUFBaUI0UyxzREFBTyxDQUFDeGEsR0FBRCxDQUFQLEdBQzNDb2IsYUFBYSxDQUFDeFQsS0FBRCxDQUFiLENBQXFCMFQsS0FBckIsQ0FBMkJ0YixHQUEzQixDQUQyQyxHQUUzQ29iLGFBQWEsQ0FBQ3hULEtBQUQsQ0FBYixDQUFxQm5GLEdBQXJCLENBQXlCekMsR0FBekIsQ0FGRyxDQUFQO0FBR0Q7O0FBRUQsU0FBU3ViLGVBQVQsQ0FBeUJKLE9BQXpCLEVBQTBDek4sSUFBMUMsRUFBK0Q7QUFDN0QsUUFBTTBOLGFBQWEsR0FBSXhULEtBQUQsSUFBZ0JBLEtBQUssQ0FBQ3VULE9BQUQsQ0FBM0M7O0FBRUEsU0FBT25CLHFEQUFNLENBQ1h0TSxJQURXLEVBRVgsQ0FBQzhOLFNBQUQsRUFBaUJ4YixHQUFqQixLQUF5QjtBQUN2QndiLGFBQVMsQ0FBRSxHQUFFeGIsR0FBSSxVQUFSLENBQVQsR0FBK0I0SCxLQUFELElBQWdCd1QsYUFBYSxDQUFDeFQsS0FBRCxDQUFiLENBQXFCbkYsR0FBckIsQ0FBeUJ6QyxHQUF6QixDQUE5Qzs7QUFDQSxXQUFPd2IsU0FBUDtBQUNELEdBTFUsRUFNWCxFQU5XLENBQWI7QUFRRDs7QUFFRCxTQUFTQyxpQkFBVCxDQUEyQk4sT0FBM0IsRUFBNEN6TixJQUE1QyxFQUFpRTtBQUMvRCxRQUFNME4sYUFBYSxHQUFJeFQsS0FBRCxJQUFnQkEsS0FBSyxDQUFDdVQsT0FBRCxDQUEzQzs7QUFFQSxTQUFPbkIscURBQU0sQ0FDWHRNLElBRFcsRUFFWCxDQUFDOE4sU0FBRCxFQUFpQnhiLEdBQWpCLEtBQXlCO0FBQ3ZCd2IsYUFBUyxDQUFFLEdBQUV4YixHQUFJLFVBQVIsQ0FBVCxHQUErQjRILEtBQUQsSUFBZ0J3VCxhQUFhLENBQUN4VCxLQUFELENBQWIsQ0FBcUI1SCxHQUFyQixDQUE5Qzs7QUFDQSxXQUFPd2IsU0FBUDtBQUNELEdBTFUsRUFNWCxFQU5XLENBQWI7QUFRRDs7Ozs7Ozs7Ozs7Ozs7QUMvSUQ7QUFBQTtBQUFPLE1BQU1FLG1CQUFtQixHQUFHO0FBQ2pDQyxTQUFPLEVBQUUsSUFBSUMsTUFBSixDQUFXLGdCQUFYLENBRHdCO0FBRWpDN1ksU0FBTyxFQUFFO0FBRndCLENBQTVCLEM7Ozs7Ozs7Ozs7OztBQ0lQO0FBQUEsSUFBSThZLEtBQW1CLEdBQUcsSUFBMUI7QUFFZTtBQUNiQyxVQUFRLEVBQUUsTUFBTUQsS0FESDtBQUViRSxVQUFRLEVBQUcxRixDQUFELElBQWM7QUFDdEJ3RixTQUFLLEdBQUd4RixDQUFSO0FBQ0Q7QUFKWSxDQUFmLEU7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNMkYseUJBQXlCLEdBQUcsY0FBbEM7QUFDQSxNQUFNQyx5QkFBeUIsR0FBRyxjQUFsQztBQUNBLE1BQU1DLHVCQUF1QixHQUFHLFlBQWhDO0FBQ0EsTUFBTUMsd0JBQXdCLEdBQUcsRUFBakM7QUFFQSxTQUFTQyxTQUFULENBQW1CbkUsTUFBbkIsRUFBMkM7QUFDaEQsTUFBSW9FLE1BQU0sR0FBRyxFQUFiO0FBQ0EsUUFBTVIsS0FBSyxHQUFHUyxvREFBVyxDQUFDUixRQUFaLEVBQWQ7QUFDQSxRQUFNO0FBQUVTLFlBQVEsR0FBRztBQUFiLE1BQW9CVixLQUFLLENBQUNXLFFBQU4sRUFBMUI7O0FBQ0EsVUFBUXZFLE1BQVI7QUFDRSxTQUFLLFNBQUw7QUFDRW9FLFlBQU0sR0FBR0UsUUFBUSxDQUFDRSx1QkFBVCxJQUFvQ1IseUJBQTdDO0FBQ0E7O0FBQ0YsU0FBSyxTQUFMO0FBQ0VJLFlBQU0sR0FBR0UsUUFBUSxDQUFDRyx3QkFBVCxJQUFxQ1YseUJBQTlDO0FBQ0E7O0FBQ0YsU0FBSyxRQUFMO0FBQ0VLLFlBQU0sR0FBR0Ysd0JBQVQ7QUFDQTs7QUFDRixTQUFLLE9BQUw7QUFDRUUsWUFBTSxHQUFHRSxRQUFRLENBQUNJLHFCQUFULElBQWtDVCx1QkFBM0M7QUFDQTs7QUFDRjtBQUNFRyxZQUFNLEdBQUdMLHlCQUFUO0FBQ0E7QUFmSjs7QUFpQkEsU0FBT0ssTUFBUDtBQUNELEM7Ozs7Ozs7Ozs7OztBQzdCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sU0FBU08sS0FBVCxDQUFlelksR0FBZixFQUFxQztBQUMxQyxTQUNFQSxHQUFHLENBQUMwWSxLQUFKLENBQ0Usa0dBREYsTUFFTSxJQUhSO0FBS0Q7QUFFTSxNQUFNQyxZQUFZLEdBQUcsTUFBTSx1Q0FBdUNsZCxPQUF2QyxDQUErQyxPQUEvQyxFQUF5RG1kLENBQUQsSUFBTztBQUMvRjtBQUNFLFFBQU1DLENBQUMsR0FBSXpHLElBQUksQ0FBQzBHLE1BQUwsS0FBZ0IsRUFBakIsR0FBdUIsQ0FBakM7QUFDQSxRQUFNQyxDQUFDLEdBQUdILENBQUMsS0FBSyxHQUFOLEdBQVlDLENBQVosR0FBaUJBLENBQUMsR0FBRyxHQUFMLEdBQVksR0FBdEM7QUFDQSxTQUFPRSxDQUFDLENBQUMvRyxRQUFGLENBQVcsRUFBWCxDQUFQO0FBQ0E7QUFDSCxDQU5pQyxDQUEzQjtBQVFBLFNBQVNnSCxxQkFBVCxDQUErQnpOLEdBQS9CLEVBQW9EO0FBQ3pELE1BQUksQ0FBQ0EsR0FBTCxFQUFVLE9BQU8sRUFBUDtBQUNWLFNBQU9BLEdBQUcsQ0FBQzBOLE1BQUosQ0FBVyxDQUFYLEVBQWNDLFdBQWQsS0FBOEIzTixHQUFHLENBQUM0TixLQUFKLENBQVUsQ0FBVixDQUFyQztBQUNEO0FBRU0sTUFBTUMsVUFBMEMsR0FBRyxDQUN4RDtBQUNFelksT0FBSyxFQUFFLEVBRFQ7QUFFRTBZLE1BQUksRUFBRTtBQUZSLENBRHdELEVBS3hEO0FBQ0UxWSxPQUFLLEVBQUUsRUFEVDtBQUVFMFksTUFBSSxFQUFFO0FBRlIsQ0FMd0QsRUFTeEQ7QUFDRTFZLE9BQUssRUFBRSxFQURUO0FBRUUwWSxNQUFJLEVBQUU7QUFGUixDQVR3RCxFQWF4RDtBQUNFMVksT0FBSyxFQUFFLEVBRFQ7QUFFRTBZLE1BQUksRUFBRTtBQUZSLENBYndELEVBaUJ4RDtBQUNFMVksT0FBSyxFQUFFLEVBRFQ7QUFFRTBZLE1BQUksRUFBRTtBQUZSLENBakJ3RCxFQXFCeEQ7QUFDRTFZLE9BQUssRUFBRSxFQURUO0FBRUUwWSxNQUFJLEVBQUU7QUFGUixDQXJCd0QsRUF5QnhEO0FBQ0UxWSxPQUFLLEVBQUUsRUFEVDtBQUVFMFksTUFBSSxFQUFFO0FBRlIsQ0F6QndELEVBNkJ4RDtBQUNFMVksT0FBSyxFQUFFLEVBRFQ7QUFFRTBZLE1BQUksRUFBRTtBQUZSLENBN0J3RCxDQWlDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoTXdELENBQW5ELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJQO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVNDLFdBQVQsQ0FDTEMsS0FESyxFQUVMQyxFQUFFLEdBQUcsSUFGQSxFQUdMQyxRQUFRLEdBQUcsS0FITixFQUlMdmMsUUFBUSxHQUFHLFVBSk4sRUFLTDtBQUNBLFFBQU04RCxNQUFNLEdBQUcsRUFBZjtBQUNBLFFBQU1RLElBQUksR0FBRyxFQUFiO0FBQ0EsUUFBTWlHLElBQUksR0FBR2lTLHdEQUFTLENBQUNILEtBQUQsQ0FBdEI7QUFFQTlSLE1BQUksQ0FBQzZPLE9BQUwsQ0FBYSxDQUFDNUwsSUFBRCxFQUFPaVAsS0FBUCxLQUFpQjtBQUM1Qm5ZLFFBQUksQ0FBQ2lHLElBQUksQ0FBQ2tTLEtBQUQsQ0FBSixDQUFZSCxFQUFaLENBQUQsQ0FBSixHQUF3Qi9SLElBQUksQ0FBQ2tTLEtBQUQsQ0FBNUI7QUFDRCxHQUZEO0FBSUFsUyxNQUFJLENBQUM2TyxPQUFMLENBQWM1TCxJQUFELElBQVU7QUFDckIsVUFBTWtQLFVBQVUsR0FBR3BZLElBQUksQ0FBQ2tKLElBQUksQ0FBQytPLFFBQUQsQ0FBTCxDQUF2Qjs7QUFDQSxRQUFJRyxVQUFKLEVBQWdCO0FBQ2QsT0FBQ0EsVUFBVSxDQUFDMWMsUUFBRCxDQUFYLEtBQTBCMGMsVUFBVSxDQUFDMWMsUUFBRCxDQUFWLEdBQXVCLEVBQWpEO0FBQ0EwYyxnQkFBVSxDQUFDMWMsUUFBRCxDQUFWLENBQXFCaUgsSUFBckIsQ0FBMEJ1RyxJQUExQjtBQUNELEtBSEQsTUFHTztBQUNMMUosWUFBTSxDQUFDbUQsSUFBUCxDQUFZdUcsSUFBWjtBQUNEO0FBQ0YsR0FSRDtBQVNBLFNBQU8xSixNQUFQO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBUzZZLGVBQVQsQ0FBeUJDLE1BQXpCLEVBQWlDaGQsUUFBakMsRUFBMkM7QUFDaEQsU0FBTzJNLDJEQUFBLENBQTBCcVEsTUFBMUIsRUFBa0NDLElBQWxDLENBQXVDamQsUUFBdkMsQ0FBUDtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTa2QsY0FBVCxDQUF3QlQsS0FBeEIsRUFBK0I1SixPQUEvQixFQUF3QzhKLFFBQXhDLEVBQWtERCxFQUFFLEdBQUcsSUFBdkQsRUFBNkQ7QUFDbEUsUUFBTXhZLE1BQU0sR0FBRyxDQUFDMk8sT0FBRCxDQUFmO0FBQ0EsUUFBTXNLLE9BQU8sR0FBRyxJQUFJQyxHQUFKLEVBQWhCO0FBQ0FYLE9BQUssQ0FBQ2pELE9BQU4sQ0FBZTVMLElBQUQsSUFBVXVQLE9BQU8sQ0FBQzNULEdBQVIsQ0FBWW9FLElBQUksQ0FBQzhPLEVBQUQsQ0FBaEIsRUFBc0I5TyxJQUF0QixDQUF4QixFQUhrRSxDQUtsRTs7QUFDQSxRQUFNeVAsT0FBTyxHQUFJeEssT0FBRCxJQUFhO0FBQzNCLFVBQU15SyxlQUFlLEdBQUdILE9BQU8sQ0FBQzNiLEdBQVIsQ0FBWXFSLE9BQU8sQ0FBQzZKLEVBQUQsQ0FBbkIsRUFBeUJDLFFBQXpCLENBQXhCOztBQUNBLFFBQUlXLGVBQUosRUFBcUI7QUFDbkJwWixZQUFNLENBQUNtRCxJQUFQLENBQVk4VixPQUFPLENBQUMzYixHQUFSLENBQVk4YixlQUFaLENBQVo7QUFDQUQsYUFBTyxDQUFDRixPQUFPLENBQUMzYixHQUFSLENBQVk4YixlQUFaLENBQUQsQ0FBUDtBQUNEO0FBQ0YsR0FORDs7QUFRQUQsU0FBTyxDQUFDeEssT0FBRCxDQUFQO0FBQ0EsU0FBTzNPLE1BQVA7QUFDRDtBQUVNLFNBQVNpUCxnQkFBVCxDQUEwQnhJLElBQTFCLEVBQXFDO0FBQzFDLE1BQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1QsV0FBTyxjQUFQO0FBQ0Q7O0FBRUQsTUFBSSxPQUFPQSxJQUFQLEtBQWdCLFFBQXBCLEVBQThCO0FBQzVCLFdBQU9BLElBQVA7QUFDRDs7QUFFRCxNQUFJdkksS0FBSyxDQUFDbVgsT0FBTixDQUFjNU8sSUFBSSxDQUFDN0ksT0FBbkIsQ0FBSixFQUFpQztBQUMvQixVQUFNOEwsSUFBSSxHQUFHakQsSUFBSSxDQUFDN0ksT0FBTCxDQUFhLENBQWIsQ0FBYjs7QUFDQSxRQUFJLENBQUM4TCxJQUFJLENBQUMyUCxXQUFWLEVBQXVCO0FBQ3JCLGFBQU81UyxJQUFJLENBQUM5QixLQUFMLElBQWMsY0FBckI7QUFDRDs7QUFDRCxXQUFPekosTUFBTSxDQUFDb2UsTUFBUCxDQUFjNVAsSUFBSSxDQUFDMlAsV0FBbkIsRUFBZ0MsQ0FBaEMsQ0FBUDtBQUNELEdBZnlDLENBaUIxQzs7O0FBQ0EsU0FBTyxPQUFPNVMsSUFBSSxDQUFDN0ksT0FBWixLQUF3QixRQUF4QixHQUFtQzZJLElBQUksQ0FBQzdJLE9BQXhDLEdBQWtELGNBQXpEO0FBQ0Q7QUFFTSxTQUFTMmIsUUFBVCxHQUE2QjtBQUNsQyxNQUNFQyxTQUFTLENBQUNDLFNBQVYsQ0FBb0IvQixLQUFwQixDQUEwQixVQUExQixLQUNHOEIsU0FBUyxDQUFDQyxTQUFWLENBQW9CL0IsS0FBcEIsQ0FBMEIsUUFBMUIsQ0FESCxJQUVHOEIsU0FBUyxDQUFDQyxTQUFWLENBQW9CL0IsS0FBcEIsQ0FBMEIsU0FBMUIsQ0FGSCxJQUdHOEIsU0FBUyxDQUFDQyxTQUFWLENBQW9CL0IsS0FBcEIsQ0FBMEIsT0FBMUIsQ0FISCxJQUlHOEIsU0FBUyxDQUFDQyxTQUFWLENBQW9CL0IsS0FBcEIsQ0FBMEIsT0FBMUIsQ0FKSCxJQUtHOEIsU0FBUyxDQUFDQyxTQUFWLENBQW9CL0IsS0FBcEIsQ0FBMEIsYUFBMUIsQ0FMSCxJQU1HOEIsU0FBUyxDQUFDQyxTQUFWLENBQW9CL0IsS0FBcEIsQ0FBMEIsZ0JBQTFCLENBUEwsRUFRRTtBQUNBLFdBQU8sSUFBUDtBQUNEOztBQUVELFNBQU8sS0FBUDtBQUNELEMsQ0FFRDs7QUFDTyxTQUFTZ0MsZUFBVCxDQUF5QkMsTUFBekIsRUFBaUM7QUFDdEMsUUFBTUMsUUFBUSxHQUFHMVAsa0JBQWtCLENBQUM5USxNQUFNLENBQUN5Z0IsUUFBUCxDQUFnQmpTLE1BQWhCLENBQXVCa1MsU0FBdkIsQ0FBaUMsQ0FBakMsQ0FBRCxDQUFuQztBQUNBLFFBQU1DLGFBQWEsR0FBR0gsUUFBUSxDQUFDakksS0FBVCxDQUFlLEdBQWYsQ0FBdEI7QUFDQSxNQUFJcUksY0FBSjtBQUNBLE1BQUk3TyxDQUFKOztBQUVBLE9BQUtBLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBRzRPLGFBQWEsQ0FBQ0UsTUFBOUIsRUFBc0M5TyxDQUFDLElBQUksQ0FBM0MsRUFBOEM7QUFDNUM2TyxrQkFBYyxHQUFHRCxhQUFhLENBQUM1TyxDQUFELENBQWIsQ0FBaUJ3RyxLQUFqQixDQUF1QixHQUF2QixDQUFqQjs7QUFFQSxRQUFJcUksY0FBYyxDQUFDLENBQUQsQ0FBZCxLQUFzQkwsTUFBMUIsRUFBa0M7QUFDaEMsYUFBT0ssY0FBYyxDQUFDLENBQUQsQ0FBZCxLQUFzQkUsU0FBdEIsR0FBa0MsSUFBbEMsR0FBeUNGLGNBQWMsQ0FBQyxDQUFELENBQTlEO0FBQ0Q7QUFDRjtBQUNGO0FBRU0sTUFBTUcsV0FBVyxHQUFHO0FBQ3pCQyxLQUFHLEVBQUUsUUFEb0I7QUFFekJDLEtBQUcsRUFBRSxTQUZvQjtBQUd6QkMsS0FBRyxFQUFFLFdBSG9CO0FBSXpCQyxLQUFHLEVBQUUsVUFKb0I7QUFLekJDLEtBQUcsRUFBRSxRQUxvQjtBQU16QkMsS0FBRyxFQUFFLFVBTm9CO0FBT3pCQyxLQUFHLEVBQUU7QUFQb0IsQ0FBcEI7QUFVQSxTQUFTQyxrQkFBVCxHQUE4QjtBQUNuQyxRQUFNQyxVQUFVLEdBQUc7QUFBRUMsU0FBSyxFQUFFLElBQVQ7QUFBZUMsT0FBRyxFQUFFLElBQXBCO0FBQTBCQyxVQUFNLEVBQUU7QUFBbEMsR0FBbkI7QUFDQSxTQUFPO0FBQ0xYLE9BQUcsb0JBQU9RLFVBQVAsQ0FERTtBQUVMUCxPQUFHLG9CQUFPTyxVQUFQLENBRkU7QUFHTE4sT0FBRyxvQkFBT00sVUFBUCxDQUhFO0FBSUxMLE9BQUcsb0JBQU9LLFVBQVAsQ0FKRTtBQUtMSixPQUFHLG9CQUFPSSxVQUFQLENBTEU7QUFNTEgsT0FBRyxvQkFBT0csVUFBUCxDQU5FO0FBT0xGLE9BQUcsb0JBQU9FLFVBQVA7QUFQRSxHQUFQO0FBU0Q7QUFFTSxTQUFTSSxXQUFULENBQXFCQyxRQUFyQixFQUFrRDtBQUN2RCxNQUFJQyxPQUFPLEdBQUcxUCxRQUFRLENBQUNnRiw2Q0FBTSxHQUFHRCxNQUFULENBQWdCLEdBQWhCLENBQUQsRUFBdUIsRUFBdkIsQ0FBdEI7QUFDQSxNQUFJcEYsQ0FBQyxHQUFHLENBQVI7QUFDQSxNQUFJZ1EsUUFBSjtBQUNBLFFBQU1DLGNBQWMsR0FBR2xnQixNQUFNLENBQUNxTixJQUFQLENBQVkwUyxRQUFaLEVBQXNCSSxNQUF0QixDQUNwQnhnQixHQUFELElBQVMsQ0FBQ29nQixRQUFRLENBQUNwZ0IsR0FBRCxDQUFSLENBQWNrZ0IsTUFESCxDQUF2Qjs7QUFHQSxLQUFHO0FBQ0QsVUFBTXpLLElBQUksR0FBR0UsNkNBQU0sR0FBRzhLLEdBQVQsQ0FBYUosT0FBYixFQUFzQjNLLE1BQXRCLENBQTZCLEtBQTdCLEVBQW9Dc0IsV0FBcEMsRUFBYjs7QUFDQSxRQUFJdUosY0FBYyxDQUFDaEosT0FBZixDQUF1QjlCLElBQXZCLElBQStCLENBQUMsQ0FBcEMsRUFBdUM7QUFDckM2SyxjQUFRLEdBQUc3SyxJQUFYO0FBQ0Q7O0FBQ0Q0SyxXQUFPLElBQUksQ0FBWDtBQUNBL1AsS0FBQyxJQUFJLENBQUw7QUFDRCxHQVBELFFBT1NBLENBQUMsR0FBRyxDQUFKLElBQVMsQ0FBQ2dRLFFBUG5COztBQVNBLE1BQUlBLFFBQUosRUFBYztBQUNaLFdBQVEsR0FBRUYsUUFBUSxDQUFDRSxRQUFELENBQVIsQ0FBbUJOLEtBQU0sSUFBR3JLLDZDQUFNLEdBQ3pDOEssR0FEbUMsQ0FDL0JKLE9BQU8sR0FBRyxDQURxQixFQUVuQzNLLE1BRm1DLENBRTVCLFlBRjRCLENBRWQsRUFGeEI7QUFHRDs7QUFDRCxTQUFPLEVBQVA7QUFDRDtBQUVNLFNBQVNnTCxhQUFULENBQXVCQyxVQUF2QixFQUFtQ0MsT0FBbkMsRUFBNENDLE1BQTVDLEVBQW9EalosS0FBcEQsRUFBMkQ7QUFDaEUsTUFBSTtBQUFFa1osUUFBRjtBQUFRQyxVQUFSO0FBQWdCUDtBQUFoQixNQUEyQjVZLEtBQS9CO0FBQ0EsUUFBTTtBQUFFb1o7QUFBRixNQUFZcFosS0FBbEI7O0FBQ0EsTUFBSWdaLE9BQUosRUFBYTtBQUNYdmdCLFVBQU0sQ0FBQ3FOLElBQVAsQ0FBWWtULE9BQVosRUFBcUJuRyxPQUFyQixDQUE4QnphLEdBQUQsSUFBUztBQUNwQyxVQUFJNGdCLE9BQU8sQ0FBQzVnQixHQUFELENBQVAsSUFBZ0I0Z0IsT0FBTyxDQUFDNWdCLEdBQUQsQ0FBUCxDQUFhb2YsTUFBakMsRUFBeUM7QUFDdkM7QUFDQW9CLGNBQU0sQ0FBQ3hnQixHQUFELENBQU4sR0FBYzRnQixPQUFPLENBQUM1Z0IsR0FBRCxDQUFQLENBQWEsQ0FBYixDQUFkO0FBQ0Q7O0FBRUQsVUFBSSxDQUFDNGdCLE9BQU8sQ0FBQzVnQixHQUFELENBQVosRUFBbUI7QUFDakJ3Z0IsY0FBTSxDQUFDeGdCLEdBQUQsQ0FBTixHQUFjLEVBQWQ7QUFDRDtBQUNGLEtBVEQ7QUFVRCxHQVhELE1BV087QUFDTHdnQixVQUFNLEdBQUcsRUFBVDtBQUNEOztBQUVELE1BQUlLLE1BQUosRUFBWTtBQUNWLFFBQUlBLE1BQU0sQ0FBQ0ksS0FBWCxFQUFrQjtBQUNoQixZQUFNO0FBQUV0ZSxhQUFGO0FBQVNzZTtBQUFULFVBQW1CSixNQUF6QjtBQUNBQyxVQUFJLEdBQUdJLDBEQUFJLENBQUNELEtBQUQsQ0FBWDtBQUNBRixZQUFNLEdBQUdwZSxLQUFUO0FBQ0QsS0FKRCxNQUlPO0FBQ0xvZSxZQUFNLEdBQUcsV0FBVDtBQUNBRCxVQUFJLEdBQUcsTUFBUDtBQUNEO0FBQ0Y7O0FBRUQsdURBQ0tsWixLQURMLEdBRUs0WSxNQUZMO0FBR0VNLFFBSEY7QUFJRUMsVUFKRjtBQUtFcEksVUFBTSxFQUFFLENBQUNnSSxVQUFVLENBQUM3TSxPQUFYLEdBQXFCLENBQXRCLElBQTJCa047QUFMckM7QUFPRDtBQUVNLFNBQVNHLFNBQVQsQ0FBbUJDLGFBQW5CLEVBQWtDbkosTUFBTSxHQUFHLFdBQTNDLEVBQXdEckIsSUFBeEQsRUFBOEQ7QUFDbkUsU0FBTyxJQUFJdEwsT0FBSixDQUFZLENBQUM2SSxPQUFELEVBQVVrTixNQUFWLEtBQXFCO0FBQ3RDLFVBQU1DLE1BQU0sR0FBRyxJQUFJQyxVQUFKLEVBQWY7O0FBQ0EsUUFBSUgsYUFBSixFQUFtQjtBQUNqQkUsWUFBTSxDQUFDRSxhQUFQLENBQXFCSixhQUFyQjs7QUFDQUUsWUFBTSxDQUFDRyxNQUFQLEdBQWdCLE1BQU10TixPQUFPLGlDQUN4QmlOLGFBRHdCO0FBRTNCbkosY0FGMkI7QUFHM0J4VSxZQUFJLEVBQUUyZCxhQUFhLENBQUMzZCxJQUhPO0FBSTNCVSxXQUFHLEVBQUVtZCxNQUFNLENBQUNuYyxNQUplO0FBSzNCaWM7QUFMMkIsU0FBN0I7O0FBT0FFLFlBQU0sQ0FBQ0ksT0FBUCxHQUFrQjVYLEtBQUQsSUFBV3VYLE1BQU0sQ0FBQ3ZYLEtBQUQsQ0FBbEM7QUFDRCxLQVZELE1BVU87QUFDTHFLLGFBQU8sQ0FBQ3lDLElBQUQsQ0FBUDtBQUNEO0FBQ0YsR0FmTSxDQUFQO0FBZ0JEO0FBRU0sU0FBUytLLHFCQUFULENBQStCL1YsSUFBL0IsRUFBcUM7QUFDMUMsUUFBTWdXLEdBQUcsR0FBR2hXLElBQUksQ0FBQ2tMLEtBQUwsQ0FBVyxLQUFYLENBQVo7QUFDQSxRQUFNK0ssVUFBVSxHQUFHRCxHQUFHLENBQUMsQ0FBRCxDQUFILElBQVVFLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxHQUFHLENBQUMsQ0FBRCxDQUFkLENBQTdCO0FBQ0EsUUFBTUksVUFBVSxHQUFHSixHQUFHLENBQUMsQ0FBRCxDQUFILElBQVVFLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxHQUFHLENBQUMsQ0FBRCxDQUFkLENBQTdCO0FBQ0EsU0FBTztBQUNMQyxjQURLO0FBRUxHO0FBRkssR0FBUDtBQUlEO0FBRU0sU0FBU0MsY0FBVCxDQUF3QkMsVUFBeEIsRUFBNkNDLElBQTdDLEVBQWlGO0FBQ3RGLE1BQUksQ0FBQ0QsVUFBTCxFQUFpQixPQUFPLEtBQVA7QUFDakIsTUFBSSxDQUFDQyxJQUFELElBQVMsQ0FBQ0EsSUFBSSxDQUFDQyxHQUFuQixFQUF3QixPQUFPLEtBQVA7QUFFeEIsU0FBTyxJQUFQO0FBQ0Q7QUFFTSxTQUFTQyxjQUFULENBQXdCRixJQUF4QixFQUFxQ0csU0FBckMsRUFBNEQ7QUFDakUsTUFBSUgsSUFBSSxJQUFJQSxJQUFJLENBQUNDLEdBQWpCLEVBQXNCLE9BQU9ELElBQVA7QUFDdEIsTUFBSUcsU0FBUyxJQUFJQSxTQUFTLENBQUNGLEdBQTNCLEVBQWdDLE9BQU9FLFNBQVA7QUFFaEMsU0FBTyxJQUFQO0FBQ0Q7QUFFTSxTQUFTQyxpQkFBVCxDQUEyQjFULElBQTNCLEVBQWlDO0FBQ3RDLE1BQUlBLElBQUksSUFBSUEsSUFBSSxDQUFDd0YsSUFBTCxLQUFjLFVBQTFCLEVBQXNDLE9BQU8sSUFBUDtBQUN0QyxTQUFPLEtBQVA7QUFDRDtBQUVNLFNBQVNtTyx1QkFBVCxDQUFpQ0MsR0FBakMsRUFBc0M7QUFDM0MsUUFBTTtBQUNKQyxVQURJO0FBRUpDLGtCQUZJO0FBR0pDLGdCQUhJO0FBSUpoWCxRQUFJLEVBQUU7QUFBRXlJO0FBQUY7QUFKRixNQUtGb08sR0FMSjtBQU1BLFNBQU9JLGlEQUFVLENBQ2YsU0FEZSxFQUVmO0FBQUVDLFFBQUksRUFBRUosTUFBTSxJQUFJck8sSUFBSSxLQUFLO0FBQTNCLEdBRmUsRUFHZjtBQUFFME8sT0FBRyxFQUFFMU8sSUFBSSxLQUFLO0FBQWhCLEdBSGUsRUFJZjtBQUFFMkwsU0FBSyxFQUFFLENBQUMsQ0FBQzJDO0FBQVgsR0FKZSxFQUtmO0FBQUUxQyxPQUFHLEVBQUUsQ0FBQyxDQUFDMkM7QUFBVCxHQUxlLENBQWpCO0FBT0Q7O0FBRUQsU0FBU0ksZUFBVCxDQUF5QkMsSUFBekIsRUFBK0JDLElBQS9CLEVBQXFDO0FBQ25DLFFBQU0sQ0FBQ0MsQ0FBRCxJQUFNRixJQUFJLENBQUNuTSxLQUFMLENBQVcsR0FBWCxDQUFaO0FBQ0EsUUFBTSxDQUFDeEcsQ0FBRCxJQUFNNFMsSUFBSSxDQUFDcE0sS0FBTCxDQUFXLEdBQVgsQ0FBWjtBQUNBLFNBQU8sQ0FBQ25HLFFBQVEsQ0FBQ3dTLENBQUQsRUFBSSxFQUFKLENBQVIsR0FBa0IsRUFBbEIsR0FBdUJ4UyxRQUFRLENBQUNMLENBQUQsRUFBSSxFQUFKLENBQWhDLElBQTJDLElBQWxEO0FBQ0Q7O0FBRU0sU0FBUzhTLGdCQUFULENBQTBCN08sR0FBRyxHQUFHLEVBQWhDLEVBQW9DQyxHQUFHLEdBQUcsR0FBMUMsRUFBK0M7QUFDcEQsTUFBSWxFLENBQUMsR0FBR2lFLEdBQVI7QUFDQSxRQUFNcFAsTUFBTSxHQUFHLEVBQWY7O0FBQ0EsS0FBRztBQUNEQSxVQUFNLENBQUNtTCxDQUFELENBQU4sR0FBWSxDQUFDQSxDQUFDLEdBQUcsSUFBTCxFQUFXK1MsT0FBWCxDQUFtQixDQUFuQixDQUFaO0FBQ0EvUyxLQUFDLElBQUksQ0FBTDtBQUNELEdBSEQsUUFHU0EsQ0FBQyxHQUFHa0UsR0FIYjs7QUFJQSxTQUFPclAsTUFBTSxDQUFDa1MsR0FBUCxDQUFXLENBQUM2RixDQUFELEVBQUlZLEtBQUosTUFBZTtBQUMvQndGLFNBQUssRUFBRyxHQUFFeEYsS0FBTSxVQUFTWixDQUFFLEtBREk7QUFFL0JwWSxTQUFLLEVBQUcsR0FBRWdaLEtBQU07QUFGZSxHQUFmLENBQVgsQ0FBUDtBQUlEO0FBQ00sU0FBU3lGLGdCQUFULENBQTBCaFAsR0FBRyxHQUFHLENBQWhDLEVBQW1DQyxHQUFHLEdBQUcsQ0FBekMsRUFBNEM7QUFDakQsUUFBTXJQLE1BQU0sR0FBRyxFQUFmOztBQUNBLE9BQUssSUFBSThkLElBQUksR0FBRzFPLEdBQWhCLEVBQXFCME8sSUFBSSxHQUFHek8sR0FBNUIsRUFBaUN5TyxJQUFJLElBQUksQ0FBekMsRUFBNEM7QUFDMUMsU0FBSyxJQUFJQyxJQUFJLEdBQUcsQ0FBaEIsRUFBbUJBLElBQUksSUFBSSxFQUEzQixFQUErQkEsSUFBSSxJQUFJLENBQXZDLEVBQTBDO0FBQ3hDLFlBQU1NLENBQUMsR0FBR1IsZUFBZSxDQUN2QkMsSUFBSSxDQUFDSSxPQUFMLENBQWEsQ0FBYixFQUFnQmxOLFFBQWhCLEVBRHVCLEVBRXZCK00sSUFBSSxDQUFDRyxPQUFMLENBQWEsQ0FBYixFQUFnQmxOLFFBQWhCLEVBRnVCLENBQXpCO0FBSUFoUixZQUFNLENBQUNtRCxJQUFQLENBQWEsR0FBRTJhLElBQUssSUFBR0MsSUFBSyxNQUFLTSxDQUFDLENBQUNILE9BQUYsQ0FBVSxDQUFWLENBQWEsTUFBOUM7QUFDRDtBQUNGOztBQUNELFNBQU9sZSxNQUFNLENBQUNrUyxHQUFQLENBQVk4TCxDQUFELEtBQVE7QUFBRUcsU0FBSyxFQUFHLEdBQUVILENBQUUsRUFBZDtBQUFpQnJlLFNBQUssRUFBRyxHQUFFcWUsQ0FBRTtBQUE3QixHQUFSLENBQVgsQ0FBUDtBQUNEO0FBRU0sU0FBU00sV0FBVCxDQUFxQkMsS0FBckIsRUFBb0NDLGNBQWMsR0FBRyxDQUFyRCxFQUF3RDtBQUM3RCxNQUFJRCxLQUFKLEVBQVc7QUFDVCxXQUFPQSxLQUFLLENBQUNMLE9BQU4sQ0FBY00sY0FBZCxDQUFQO0FBQ0Q7O0FBRUQsU0FBTyxFQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7O0FDL1REO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU07QUFBRWxTLE9BQUY7QUFBU21TLGNBQVQ7QUFBdUJDO0FBQXZCLElBQXFDbkssb0VBQWlCLENBQ2pFLE9BRGlFLEVBRWpFLE9BRmlFLENBQTVEO0FBSUEsTUFBTW9LLGVBQWUsR0FBR3pLLCtEQUFZLENBQUMsa0JBQUQsQ0FBcEM7QUFFQSxNQUFNO0FBQ1gwSyxnQkFEVztBQUVYQyx1QkFGVztBQUdYQztBQUhXLElBSVR2SyxvRUFBaUIsQ0FBQyxnQkFBRCxFQUFtQixpQkFBbkIsQ0FKZDtBQU1BLE1BQ0w1SCxjQUFjLEdBQUd1SCwrREFBWSxDQUFDLGdCQUFELENBRHhCO0FBR0EsTUFBTTtBQUNYNkssYUFEVztBQUVYQyxvQkFGVztBQUdYQztBQUhXLElBSVQxSyxvRUFBaUIsQ0FBQyxhQUFELEVBQWdCLGNBQWhCLENBSmQ7QUFNQSxNQUFNO0FBQ1gySyxtQkFEVztBQUVYQywwQkFGVztBQUdYQztBQUhXLElBSVQ3SyxvRUFBaUIsQ0FBQyxtQkFBRCxFQUFzQixvQkFBdEIsQ0FKZDtBQUtBLE1BQU04Syw4QkFBOEIsR0FBR25MLCtEQUFZLENBQ3hELG1DQUR3RCxDQUFuRDtBQUlBLE1BQU07QUFDWG9MLGNBRFc7QUFFWEMscUJBRlc7QUFHWEM7QUFIVyxJQUlUakwsb0VBQWlCLENBQUMsY0FBRCxFQUFpQixlQUFqQixDQUpkO0FBS0EsTUFBTWtMLHlCQUF5QixHQUFHdkwsK0RBQVksQ0FDbkQsOEJBRG1ELENBQTlDO0FBSUEsTUFBTTtBQUNYd0wsZ0JBRFc7QUFFWEMsdUJBRlc7QUFHWEM7QUFIVyxJQUlUckwsb0VBQWlCLENBQUMsZ0JBQUQsRUFBbUIsaUJBQW5CLENBSmQ7QUFLQSxNQUFNc0wsMkJBQTJCLEdBQUczTCwrREFBWSxDQUNyRCxnQ0FEcUQsQ0FBaEQ7QUFJQSxNQUFNNEwsTUFBTSxHQUFHNUwsK0RBQVksQ0FBQyxRQUFELENBQTNCLEM7Ozs7Ozs7Ozs7OztBQ2xEUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTXZFLGFBQWEsR0FBR3VFLCtEQUFZLENBQUMsZUFBRCxDQUFsQztBQUNBLE1BQU02TCxXQUFXLEdBQUc3TCwrREFBWSxDQUFDLGFBQUQsQ0FBaEMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hQO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFPTyxNQUFNOEwsS0FBSyxHQUFHLE9BQWQ7QUFDQSxNQUFNQyxJQUFJLEdBQUcsTUFBYjtBQUNBLE1BQU1DLGNBQWMsR0FBRyxXQUF2QjtBQUNBLE1BQU1DLFNBQVMsR0FBRyxNQUFsQjtBQUNBLE1BQU1DLFdBQVcsR0FBRyxRQUFwQjtBQUNBLE1BQU1yRSxJQUFJLEdBQUc7QUFBRXNFLFNBQU8sRUFBRSxNQUFYO0FBQW1CQyxRQUFNLEVBQUU7QUFBM0IsQ0FBYjtBQUVBLE1BQWVDLFVBQWYsQ0FBMEI7QUFHL0JDLG9CQUFrQixDQUFDOVIsS0FBRCxFQUFnQjtBQUNoQzZSLGNBQVUsQ0FBQzdSLEtBQVgsR0FBbUJBLEtBQW5CO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ1UrUixXQUFTLENBQUNDLFFBQUQsRUFBcUI7QUFDcEMsUUFBSUEsUUFBUSxDQUFDNU4sTUFBVCxLQUFvQixHQUFwQixJQUEyQjROLFFBQVEsQ0FBQzVOLE1BQVQsS0FBb0IsR0FBbkQsRUFBd0Q7QUFDdEQsYUFBTyxJQUFQO0FBQ0Q7O0FBQ0QsV0FBTzROLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQzJCLFFBQVhDLFdBQVcsQ0FBQ0YsUUFBRCxFQUFxQjtBQUM1QyxRQUFJQSxRQUFRLENBQUM1TixNQUFULElBQW1CLEdBQW5CLElBQTBCNE4sUUFBUSxDQUFDNU4sTUFBVCxHQUFrQixHQUFoRCxFQUFxRDtBQUNuRCxhQUFPNE4sUUFBUDtBQUNEOztBQUVELFFBQUlBLFFBQVEsQ0FBQzVOLE1BQVQsS0FBb0IsR0FBeEIsRUFBNkI7QUFDM0IsWUFBTSxJQUFJK04sS0FBSixDQUFVLDBCQUFWLENBQU47QUFDRDs7QUFFRCxRQUFJSCxRQUFRLENBQUM1TixNQUFULEtBQW9CLEdBQXhCLEVBQTZCO0FBQzNCLGlCQUFxQixFQUdwQjtBQUNGLEtBZDJDLENBZTVDO0FBQ0E7QUFDQTs7O0FBQ0EsVUFBTTROLFFBQVEsQ0FBQ0ksS0FBVCxHQUFpQkgsSUFBakIsRUFBTjtBQUNEOztBQUVESSxTQUFPLENBQ0wvaEIsR0FESyxFQUVMZ0YsTUFGSyxFQUdMZ2QsSUFISyxFQUlMck8sT0FKSyxFQUtvQjtBQUN6QixVQUFNc08sSUFBSSxHQUFHLENBQUNqZCxNQUFNLElBQUksS0FBWCxFQUFrQmtVLFdBQWxCLEVBQWI7O0FBQ0EsVUFBTWdKLGFBQWE7QUFDakIsc0JBQWdCLGtCQURDO0FBRWpCO0FBQ0FDLG1CQUFhLEVBQ1haLFVBQVUsQ0FBQzdSLEtBQVgsS0FBcUIsUUFBa0IwUyxTQUFsQixHQUFzQyxFQUEzRDtBQUplLE9BS2J6TyxPQUFPLElBQUksRUFMRSxDQUFuQjs7QUFPQSxVQUFNYixNQUFNLEdBQUdDLCtEQUFlLEVBQTlCO0FBRUEsV0FBT1cseURBQUssQ0FBQytFLHlEQUFLLENBQUN6WSxHQUFELENBQUwsR0FBYUEsR0FBYixHQUFvQixHQUFFOFMsTUFBTSxDQUFDdVAsWUFBUCxJQUF1QnZQLE1BQU0sQ0FBQ3dQLHdCQUF5QixHQUFFdGlCLEdBQUksRUFBcEYsRUFBdUY7QUFDakdnRixZQUFNLEVBQUVpZCxJQUR5RjtBQUVqR3RPLGFBQU8sRUFBRXVPLGFBRndGO0FBR2pHRixVQUFJLEVBQUVBLElBQUksR0FBR3JFLElBQUksQ0FBQzRFLFNBQUwsQ0FBZVAsSUFBZixDQUFILEdBQTBCO0FBSDZELEtBQXZGLENBQUwsQ0FLSlEsSUFMSSxDQUtDLEtBQUtaLFdBTE4sRUFNSlksSUFOSSxDQU1DLEtBQUtmLFNBTk4sQ0FBUDtBQU9EOztBQUVEZ0IsVUFBUSxDQUFDQyxPQUFELEVBQWtCamlCLE1BQWxCLEVBQXlFO0FBQy9FLFFBQUksQ0FBQ0EsTUFBTCxFQUFhO0FBQ1gsYUFBT2lpQixPQUFQO0FBQ0Q7O0FBRUQsVUFBTUMsV0FBVyxHQUFHem1CLE1BQU0sQ0FBQ3FOLElBQVAsQ0FBWTlJLE1BQVosRUFDakJ5UyxHQURpQixDQUNaMFAsQ0FBRCxJQUFRLEdBQUV6YSxrQkFBa0IsQ0FBQ3lhLENBQUQsQ0FBSSxJQUFHemEsa0JBQWtCLENBQUMxSCxNQUFNLENBQUNtaUIsQ0FBRCxDQUFQLENBQVksRUFEcEQsRUFFakJDLElBRmlCLENBRVosR0FGWSxDQUFwQjtBQUdBLFdBQVEsR0FBRUgsT0FBUSxJQUFHQyxXQUFZLEVBQWpDO0FBQ0Q7O0FBRURya0IsS0FBRyxDQUFDMEIsR0FBRCxFQUFjMlQsT0FBZCxFQUFtRDtBQUNwRCxXQUFPLEtBQUtvTyxPQUFMLENBQWEvaEIsR0FBYixFQUFrQixLQUFsQixFQUF5QixJQUF6QixFQUErQjJULE9BQS9CLENBQVA7QUFDRDs7QUFFRG1QLE1BQUksQ0FBQzlpQixHQUFELEVBQWN5SCxJQUFkLEVBQTBCa00sT0FBMUIsRUFBK0Q7QUFDakUsV0FBTyxLQUFLb08sT0FBTCxDQUFhL2hCLEdBQWIsRUFBa0IsTUFBbEIsRUFBMEJ5SCxJQUExQixFQUFnQ2tNLE9BQWhDLENBQVA7QUFDRDs7QUFFRG9QLEtBQUcsQ0FBQy9pQixHQUFELEVBQWN5SCxJQUFkLEVBQTBCa00sT0FBMUIsRUFBK0Q7QUFDaEUsV0FBTyxLQUFLb08sT0FBTCxDQUFhL2hCLEdBQWIsRUFBa0IsS0FBbEIsRUFBeUJ5SCxJQUF6QixFQUErQmtNLE9BQS9CLENBQVA7QUFDRDs7QUFFRHFQLEtBQUcsQ0FBQ2hqQixHQUFELEVBQWN5SCxJQUFkLEVBQTBCa00sT0FBMUIsRUFBK0Q7QUFDaEUsV0FBTyxLQUFLb08sT0FBTCxDQUFhL2hCLEdBQWIsRUFBa0IsUUFBbEIsRUFBNEJ5SCxJQUE1QixFQUFrQ2tNLE9BQWxDLENBQVA7QUFDRDs7QUFFRHNQLFFBQU0sQ0FDSmpqQixHQURJLEVBRUprakIsS0FGSSxFQU1KeGYsT0FJQyxHQUFHO0FBQ0Z5ZixjQUFVLEdBQUcsQ0FBRSxDQURiOztBQUVGbmUsVUFBTSxFQUFFO0FBRk4sR0FWQSxFQWNKO0FBQ0EsVUFBTThOLE1BQU0sR0FBR0MsK0RBQWUsRUFBOUI7QUFDQSxVQUFNcVEsU0FBUyxHQUFHM0sseURBQUssQ0FBQ3pZLEdBQUQsQ0FBTCxHQUFhQSxHQUFiLEdBQW9CLEdBQUU4UyxNQUFNLENBQUN3UCx3QkFBeUIsR0FBRXRpQixHQUFJLEVBQTlFO0FBQ0EsV0FBTyxJQUFJbUgsT0FBSixDQUFZLENBQUM2SSxPQUFELEVBQVVrTixNQUFWLEtBQXFCO0FBQ3RDLFlBQU1vQixHQUFHLEdBQUcsSUFBSStFLGNBQUosRUFBWjtBQUVBL0UsU0FBRyxDQUFDMkUsTUFBSixDQUFXSyxnQkFBWCxDQUE0QixVQUE1QixFQUF5Q3BvQixLQUFELElBQVc7QUFDakQsWUFBSUEsS0FBSyxDQUFDcW9CLGdCQUFWLEVBQTRCO0FBQzFCN2YsaUJBQU8sQ0FBQ3lmLFVBQVIsQ0FBbUI7QUFDakJLLHNCQUFVLEVBQUd0b0IsS0FBSyxDQUFDdW9CLE1BQU4sR0FBZXZvQixLQUFLLENBQUN3b0IsS0FBdEIsR0FBK0I7QUFEMUIsV0FBbkI7QUFHRDtBQUNGLE9BTkQ7QUFRQXBGLFNBQUcsQ0FBQ2dGLGdCQUFKLENBQXFCLE1BQXJCLEVBQTZCLE1BQU07QUFDakMsY0FBTTVuQixPQUFPLEdBQUc0aUIsR0FBRyxDQUFDeEssTUFBSixJQUFjLEdBQWQsSUFBcUJ3SyxHQUFHLENBQUN4SyxNQUFKLEdBQWEsR0FBbEQ7QUFDQSxjQUFNO0FBQUU0TjtBQUFGLFlBQWVwRCxHQUFyQjs7QUFDQSxZQUFJLENBQUM1aUIsT0FBTCxFQUFjO0FBQ1osaUJBQU93aEIsTUFBTSxDQUFDd0UsUUFBRCxDQUFiO0FBQ0Q7O0FBQ0QsZUFBTzFSLE9BQU8sQ0FBQzBSLFFBQUQsQ0FBZDtBQUNELE9BUEQ7QUFTQXBELFNBQUcsQ0FBQzJFLE1BQUosQ0FBV0ssZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsTUFBTTtBQUN6Q3BHLGNBQU0sQ0FBQ29CLEdBQUcsQ0FBQ29ELFFBQUwsQ0FBTjtBQUNELE9BRkQ7QUFJQSxZQUFNaUMsUUFBUSxHQUFHLElBQUlDLFFBQUosRUFBakI7QUFDQVYsV0FBSyxDQUFDNU0sT0FBTixDQUFlMEksQ0FBRCxJQUFPMkUsUUFBUSxDQUFDRSxNQUFULENBQWdCN0UsQ0FBQyxDQUFDOEUsU0FBbEIsRUFBNkI5RSxDQUFDLENBQUN2TSxJQUEvQixFQUFxQ3VNLENBQUMsQ0FBQ3ZNLElBQUYsQ0FBT25ULElBQTVDLENBQXJCO0FBQ0FvRSxhQUFPLENBQUNxZ0IsVUFBUixJQUNLN25CLE1BQU0sQ0FBQ3FOLElBQVAsQ0FBWTdGLE9BQU8sQ0FBQ3FnQixVQUFwQixFQUFnQ3pOLE9BQWhDLENBQ0F3TixTQUFELElBQWUsT0FBT3BnQixPQUFPLENBQUNxZ0IsVUFBUixDQUFtQkQsU0FBbkIsQ0FBUCxLQUF5QyxXQUF6QyxJQUNWSCxRQUFRLENBQUNFLE1BQVQsQ0FBZ0JDLFNBQWhCLEVBQTJCcGdCLE9BQU8sQ0FBQ3FnQixVQUFSLENBQW1CRCxTQUFuQixDQUEzQixDQUZKLENBREw7QUFNQXhGLFNBQUcsQ0FBQzBGLFlBQUosR0FBbUIsTUFBbkI7QUFDQTFGLFNBQUcsQ0FBQzJGLElBQUosQ0FBU3ZnQixPQUFPLENBQUNzQixNQUFSLElBQWtCLE1BQTNCLEVBQW1Db2UsU0FBbkM7QUFFQSxZQUFNMVQsS0FBVSxHQUFHMFMsZ0RBQU0sQ0FBQzlqQixHQUFQLENBQVcwaUIsS0FBWCxDQUFuQjs7QUFDQSxVQUFJdFIsS0FBSixFQUFXO0FBQ1Q0TyxXQUFHLENBQUM0RixnQkFBSixDQUFxQixlQUFyQixFQUFzQ3hVLEtBQXRDO0FBQ0Q7O0FBQ0Q0TyxTQUFHLENBQUM2RixJQUFKLENBQVNSLFFBQVQ7QUFDRCxLQXhDTSxDQUFQO0FBeUNEOztBQUVEUyxVQUFRLENBQ05wa0IsR0FETSxFQUVOeUgsSUFGTSxFQUdOL0QsT0FBaUMsR0FBRztBQUNsQ3lmLGNBQVUsR0FBRyxDQUFFOztBQURtQixHQUg5QixFQU1OO0FBQ0EsVUFBTXJRLE1BQU0sR0FBR0MsK0RBQWUsRUFBOUI7QUFDQSxXQUFPLElBQUk1TCxPQUFKLENBQVksQ0FBQzZJLE9BQUQsRUFBVWtOLE1BQVYsS0FBcUI7QUFDdEMsWUFBTW9CLEdBQUcsR0FBRyxJQUFJK0UsY0FBSixFQUFaO0FBRUEvRSxTQUFHLENBQUMyRSxNQUFKLENBQVdLLGdCQUFYLENBQTRCLFVBQTVCLEVBQXlDcG9CLEtBQUQsSUFBVztBQUNqRCxZQUFJQSxLQUFLLENBQUNxb0IsZ0JBQVYsRUFBNEI7QUFDMUI3ZixpQkFBTyxDQUFDeWYsVUFBUixDQUFtQjtBQUNqQkssc0JBQVUsRUFBR3RvQixLQUFLLENBQUN1b0IsTUFBTixHQUFldm9CLEtBQUssQ0FBQ3dvQixLQUF0QixHQUErQjtBQUQxQixXQUFuQjtBQUdEO0FBQ0YsT0FORDtBQVFBcEYsU0FBRyxDQUFDZ0YsZ0JBQUosQ0FBcUIsTUFBckIsRUFBNkIsTUFBTTtBQUNqQyxjQUFNNW5CLE9BQU8sR0FBRzRpQixHQUFHLENBQUN4SyxNQUFKLElBQWMsR0FBZCxJQUFxQndLLEdBQUcsQ0FBQ3hLLE1BQUosR0FBYSxHQUFsRDtBQUNBLGNBQU07QUFBRTROO0FBQUYsWUFBZXBELEdBQXJCOztBQUNBLFlBQUksQ0FBQzVpQixPQUFMLEVBQWM7QUFDWixpQkFBT3doQixNQUFNLENBQUN3RSxRQUFELENBQWI7QUFDRDs7QUFDRCxlQUFPMVIsT0FBTyxDQUFDMFIsUUFBRCxDQUFkO0FBQ0QsT0FQRDtBQVNBcEQsU0FBRyxDQUFDMkUsTUFBSixDQUFXSyxnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxNQUFNO0FBQ3pDcEcsY0FBTSxDQUFDb0IsR0FBRyxDQUFDb0QsUUFBTCxDQUFOO0FBQ0QsT0FGRDtBQUlBLFlBQU1pQyxRQUFRLEdBQUcsSUFBSUMsUUFBSixFQUFqQixDQXhCc0MsQ0F5QnRDOztBQUNBLFVBQUluYyxJQUFJLENBQUM0YyxvQkFBVCxFQUErQjtBQUM3QixjQUFNQyx3QkFBd0IsR0FBRzdjLElBQUksQ0FBQzRjLG9CQUFMLENBQTBCNVIsSUFBMUIsQ0FBK0J3SyxhQUFoRTtBQUNBMEcsZ0JBQVEsQ0FBQ0UsTUFBVCxDQUNFLHNCQURGLEVBRUVTLHdCQUZGLEVBR0VBLHdCQUF3QixDQUFDaGxCLElBSDNCO0FBS0Q7O0FBRUQsVUFBSW1JLElBQUksQ0FBQzhjLGNBQVQsRUFBeUI7QUFDdkIsY0FBTUMsa0JBQWtCLEdBQUcvYyxJQUFJLENBQUM4YyxjQUFMLENBQW9COVIsSUFBcEIsQ0FBeUJ3SyxhQUFwRDtBQUNBMEcsZ0JBQVEsQ0FBQ0UsTUFBVCxDQUNFLGdCQURGLEVBRUVXLGtCQUZGLEVBR0VBLGtCQUFrQixDQUFDbGxCLElBSHJCO0FBS0Q7O0FBRURwRCxZQUFNLENBQUNxTixJQUFQLENBQ0VrYixtREFBSSxDQUFDaGQsSUFBRCxFQUFPLENBQUMsc0JBQUQsRUFBeUIsZ0JBQXpCLENBQVAsQ0FETixFQUVFNk8sT0FGRixDQUVXeUMsQ0FBRCxJQUFPO0FBQ2Y0SyxnQkFBUSxDQUFDRSxNQUFULENBQWdCOUssQ0FBaEIsRUFBbUJ0UixJQUFJLENBQUNzUixDQUFELENBQXZCO0FBQ0QsT0FKRDtBQU1BdUYsU0FBRyxDQUFDMEYsWUFBSixHQUFtQixNQUFuQjtBQUNBMUYsU0FBRyxDQUFDMkYsSUFBSixDQUFTLE1BQVQsRUFBaUJ4TCx5REFBSyxDQUFDelksR0FBRCxDQUFMLEdBQWFBLEdBQWIsR0FBb0IsR0FBRThTLE1BQU0sQ0FBQ3dQLHdCQUF5QixHQUFFdGlCLEdBQUksRUFBN0U7QUFFQSxZQUFNMFAsS0FBVSxHQUFHMFMsZ0RBQU0sQ0FBQzlqQixHQUFQLENBQVcwaUIsS0FBWCxDQUFuQjs7QUFDQSxVQUFJdFIsS0FBSixFQUFXO0FBQ1Q0TyxXQUFHLENBQUM0RixnQkFBSixDQUFxQixlQUFyQixFQUFzQ3hVLEtBQXRDO0FBQ0Q7O0FBQ0Q0TyxTQUFHLENBQUM2RixJQUFKLENBQVNSLFFBQVQ7QUFDRCxLQTFETSxDQUFQO0FBMkREOztBQXBPOEI7O2dCQUFYcEMsVSxXQUNHLEU7Ozs7Ozs7Ozs7OztBQ3BCekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUlPLE1BQU1tRCxXQUFOLFNBQTBCbkQsdURBQTFCLENBQXFDO0FBQzFDalUsT0FBSyxDQUFDN0YsSUFBRCxFQUFlO0FBQ2xCLFdBQU8sS0FBS3FiLElBQUwsQ0FBVSxtQkFBVixFQUErQnJiLElBQS9CLENBQVA7QUFDRDs7QUFFRGtkLGVBQWEsQ0FBQ2pWLEtBQUQsRUFBZ0JrVixJQUFoQixFQUE4QjtBQUN6QztBQUNBO0FBQ0F4QyxvREFBTSxDQUFDOWIsR0FBUCxDQUFXMGEsa0RBQVgsRUFBa0J0UixLQUFsQixFQUF5QjtBQUFFbVYsYUFBTyxFQUFFO0FBQVgsS0FBekI7QUFDQXpDLG9EQUFNLENBQUM5YixHQUFQLENBQVcyYSxpREFBWCxFQUFpQjJELElBQWpCLEVBQXVCO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBQXZCO0FBQ0EsU0FBS3JELGtCQUFMLENBQXdCOVIsS0FBeEI7QUFDRDs7QUFFRG9WLGdCQUFjLENBQUNyZCxJQUFELEVBQXdCO0FBQ3BDLFdBQU8sS0FBS3FiLElBQUwsQ0FBVSx3QkFBVixFQUFvQ3JiLElBQXBDLENBQVA7QUFDRDs7QUFFRHNZLGFBQVcsQ0FBQ3RZLElBQUQsRUFBZTtBQUN4QixXQUFPLEtBQUtxYixJQUFMLENBQVUsb0JBQVYsRUFBZ0NyYixJQUFoQyxDQUFQO0FBQ0Q7O0FBRURzZCxVQUFRLENBQUNyVixLQUFELEVBQXNCO0FBQzVCO0FBQ0E7QUFDQTBTLG9EQUFNLENBQUM5YixHQUFQLENBQVcwYSxrREFBWCxFQUFrQnRSLEtBQWxCLEVBQXlCO0FBQUVtVixhQUFPLEVBQUU7QUFBWCxLQUF6QjtBQUNBLFNBQUtyRCxrQkFBTCxDQUF3QjlSLEtBQXhCO0FBQ0Q7O0FBRURzVixVQUFRLEdBQVc7QUFDakIsVUFBTXRWLEtBQUssR0FBRzBTLGdEQUFNLENBQUM5akIsR0FBUCxDQUFXMGlCLGtEQUFYLENBQWQ7QUFDQSxXQUFPdFIsS0FBSyxJQUFJLElBQWhCO0FBQ0Q7O0FBRUR1VixTQUFPLEdBQVc7QUFDaEIsVUFBTUwsSUFBSSxHQUFHeEMsZ0RBQU0sQ0FBQzlqQixHQUFQLENBQVcyaUIsaURBQVgsQ0FBYjtBQUNBLFdBQU8yRCxJQUFJLElBQUksSUFBZjtBQUNEOztBQUVETSxhQUFXLEdBQVM7QUFDbEI5QyxvREFBTSxDQUFDK0MsTUFBUCxDQUFjbkUsa0RBQWQ7QUFDQW9CLG9EQUFNLENBQUMrQyxNQUFQLENBQWNsRSxpREFBZDtBQUNEOztBQUVEbUUsZ0JBQWMsR0FBUztBQUNyQixjQUFtQmhELEtBQW5CO0FBQ0Q7O0FBRUQxQixnQkFBYyxDQUFDc0IsSUFBRCxFQUE4QztBQUMxRCxXQUFPLEtBQUtlLEdBQUwsQ0FBUyx5QkFBVCxFQUFvQ2YsSUFBcEMsQ0FBUDtBQUNEOztBQUVEcUQsb0JBQWtCLENBQUM1ZCxJQUFELEVBQXdDO0FBQ3hELFdBQU8sS0FBSzJjLFFBQUwsQ0FBYywyQkFBZCxFQUEyQzNjLElBQTNDLENBQVA7QUFDRDs7QUFFRDZZLGNBQVksQ0FBQzdZLElBQUQsRUFBdUQ7QUFDakUsV0FBTyxLQUFLcWIsSUFBTCxDQUFVLHNCQUFWLEVBQWtDcmIsSUFBbEMsQ0FBUDtBQUNEOztBQUVENmQsZ0JBQWMsQ0FBQzdkLElBQUQsRUFBd0M7QUFDcEQsV0FBTyxLQUFLMmMsUUFBTCxDQUFjLHVCQUFkLEVBQXVDM2MsSUFBdkMsQ0FBUDtBQUNEOztBQUVEOGQsZ0JBQWMsQ0FBQ3hRLEtBQUQsRUFBZ0I3RSxJQUFoQixFQUE4QjtBQUMxQyxVQUFNekksSUFBSSxHQUFHO0FBQ1hzTixXQURXO0FBRVg3RTtBQUZXLEtBQWI7QUFJQSxXQUFPLEtBQUs0UyxJQUFMLENBQVUsb0JBQVYsRUFBZ0NyYixJQUFoQyxDQUFQO0FBQ0Q7O0FBRUQrZCx5QkFBdUIsQ0FBQy9kLElBQUQsRUFBeUM7QUFDOUQsV0FBTyxLQUFLcWIsSUFBTCxDQUFVLHlDQUFWLEVBQXFEcmIsSUFBckQsQ0FBUDtBQUNEOztBQXpFeUM7QUE0RXJDLE1BQU1nZSxXQUFXLEdBQUcsSUFBSWYsV0FBSixFQUFwQixDOzs7Ozs7Ozs7Ozs7QUN0RlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1nQixhQUFOLFNBQTRCbkUsdURBQTVCLENBQXVDO0FBQzVDM1ksUUFBTSxDQUFDMUgsS0FBRCxFQUF1QjtBQUMzQixXQUFPLEtBQUs1QyxHQUFMLENBQVMsS0FBS21rQixRQUFMLENBQWMsaUJBQWQsRUFBaUN2aEIsS0FBakMsQ0FBVCxDQUFQO0FBQ0Q7O0FBSDJDO0FBTXZDLE1BQU15a0IsYUFBYSxHQUFHLElBQUlELGFBQUosRUFBdEIsQzs7Ozs7Ozs7Ozs7O0FDVFA7QUFBQTtBQUFBO0FBQUEsSUFBSUUsWUFBWSxHQUFHLEVBQW5CO0FBRU8sTUFBTUMsZUFBZSxHQUFJL1MsTUFBRCxJQUFpQjtBQUM5QzhTLGNBQVksR0FBRzlTLE1BQWY7QUFDRCxDQUZNO0FBSUEsTUFBTUMsZUFBZSxHQUFHLE1BQU02UyxZQUE5QixDOzs7Ozs7Ozs7Ozs7QUNOUDtBQUFBO0FBQUE7QUFBQTs7QUFFQSxNQUFNRSxjQUFOLFNBQTZCdkUsdURBQTdCLENBQXdDO0FBQ3RDM1ksUUFBTSxDQUFDbkksTUFBRCxFQUFxQ21rQixJQUFJLEdBQUcsV0FBNUMsRUFBeUQ7QUFDN0QsV0FBTyxLQUFLdG1CLEdBQUwsQ0FBUyxLQUFLbWtCLFFBQUwsQ0FBZSxZQUFXbUMsSUFBSyxTQUEvQixFQUF5Q25rQixNQUF6QyxDQUFULENBQVA7QUFDRDs7QUFFRHNsQixPQUFLLENBQUN0bEIsTUFBRCxFQUFxQ21rQixJQUFJLEdBQUcsV0FBNUMsRUFBeUQ7QUFDNUQsV0FBTyxLQUFLdG1CLEdBQUwsQ0FBUyxLQUFLbWtCLFFBQUwsQ0FBZSxZQUFXbUMsSUFBSyxRQUEvQixFQUF3Q25rQixNQUF4QyxDQUFULENBQVA7QUFDRDs7QUFQcUM7O0FBVWpDLE1BQU11bEIsY0FBYyxHQUFHLElBQUlGLGNBQUosRUFBdkIsQzs7Ozs7Ozs7Ozs7O0FDWlA7QUFBQTtBQUFBO0FBQUE7O0FBRUEsTUFBTUcsZ0JBQU4sU0FBK0IxRSx1REFBL0IsQ0FBMEM7QUFDeEMyRSxNQUFJLENBQUMxTSxFQUFELEVBQWE7QUFDZixXQUFPLEtBQUtzSixJQUFMLENBQVcsY0FBYXRKLEVBQUcsT0FBM0IsQ0FBUDtBQUNEOztBQUVEMk0sUUFBTSxDQUFDM00sRUFBRCxFQUFhO0FBQ2pCLFdBQU8sS0FBS3NKLElBQUwsQ0FBVyxjQUFhdEosRUFBRyxTQUEzQixDQUFQO0FBQ0Q7O0FBRUQ0TSxVQUFRLENBQUM1TSxFQUFELEVBQWE2TSxXQUFiLEVBQW1DO0FBQ3pDLFdBQU8sS0FBS3ZELElBQUwsQ0FBVyxjQUFhdEosRUFBRyxJQUFHNk0sV0FBVyxHQUFHLFFBQUgsR0FBYyxNQUFPLEVBQTlELENBQVA7QUFDRDs7QUFFRHpkLFFBQU0sQ0FBQzFILEtBQUQsRUFBbUM7QUFDdkMsV0FBTyxLQUFLNUMsR0FBTCxDQUFTLEtBQUtta0IsUUFBTCxDQUFjLFlBQWQsRUFBNEJ2aEIsS0FBNUIsQ0FBVCxDQUFQO0FBQ0Q7O0FBZnVDOztBQWtCbkMsTUFBTW9sQixnQkFBZ0IsR0FBRyxJQUFJTCxnQkFBSixFQUF6QixDOzs7Ozs7Ozs7Ozs7QUNuQlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1NLGNBQU4sU0FBNkJoRix1REFBN0IsQ0FBd0M7QUFDN0MzWSxRQUFNLENBQ0puSSxNQURJLEVBRUorbEIsV0FBVyxHQUFHLElBRlYsRUFHa0Q7QUFDdEQsV0FBTyxLQUFLbG9CLEdBQUwsQ0FDTCxLQUFLbWtCLFFBQUwsQ0FDRStELFdBQVcsR0FDUCw4Q0FETyxHQUVQLHlDQUhOLEVBSUUvbEIsTUFKRixDQURLLENBQVA7QUFRRDs7QUFFRGdtQixXQUFTLENBQUNobUIsTUFBRCxFQUVnRDtBQUN2RCxXQUFPLEtBQUtuQyxHQUFMLENBQVMsS0FBS21rQixRQUFMLENBQWMsaUNBQWQsRUFBaURoaUIsTUFBakQsQ0FBVCxDQUFQO0FBQ0Q7O0FBRURpbUIsUUFBTSxDQUFDamYsSUFBRCxFQUFPO0FBQ1gsV0FBTyxLQUFLcWIsSUFBTCxDQUFVLHVDQUFWLEVBQW1EcmIsSUFBbkQsQ0FBUDtBQUNEOztBQUVEa2YsUUFBTSxDQUFDbk4sRUFBRCxFQUFLL1IsSUFBTCxFQUFXO0FBQ2YsV0FBTyxLQUFLc2IsR0FBTCxDQUFVLHlDQUF3Q3ZKLEVBQUcsRUFBckQsRUFBd0QvUixJQUF4RCxDQUFQO0FBQ0Q7O0FBRURtZixTQUFPLENBQUNwTixFQUFELEVBQWE3RixPQUFiLEVBQWtEO0FBQ3ZELFdBQU8sS0FBS3JWLEdBQUwsQ0FDSix5Q0FBd0NrYixFQUFHLE9BRHZDLEVBRUw3RixPQUZLLENBQVA7QUFJRDs7QUFFRGtULGVBQWEsQ0FBQ3JOLEVBQUQsRUFBYTdGLE9BQWIsRUFBa0Q7QUFDN0QsV0FBTyxLQUFLclYsR0FBTCxDQUFVLG9DQUFtQ2tiLEVBQUcsT0FBaEQsRUFBd0Q3RixPQUF4RCxDQUFQO0FBQ0Q7O0FBRUR3UixRQUFNLENBQUMzTCxFQUFELEVBQWE7QUFDakIsV0FBTyxLQUFLd0osR0FBTCxDQUFVLHlDQUF3Q3hKLEVBQUcsRUFBckQsQ0FBUDtBQUNEOztBQTFDNEM7QUE2Q3hDLE1BQU1zTixjQUFjLEdBQUcsSUFBSVAsY0FBSixFQUF2QixDOzs7Ozs7Ozs7Ozs7QUNoRFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLE1BQU1RLGNBQU4sU0FBNkJ4Rix1REFBN0IsQ0FBd0M7QUFDN0N5RixrQkFBZ0IsQ0FBQzlsQixLQUFELEVBQThCO0FBQzVDLFdBQU8sS0FBSzVDLEdBQUwsQ0FBUyxLQUFLbWtCLFFBQUwsQ0FBYyxnQkFBZCxFQUFnQ3ZoQixLQUFoQyxDQUFULENBQVA7QUFDRDs7QUFFRCtsQixxQkFBbUIsQ0FBQy9sQixLQUFELEVBQThCO0FBQy9DLFdBQU8sS0FBSzVDLEdBQUwsQ0FBUyxLQUFLbWtCLFFBQUwsQ0FBYyx1QkFBZCxFQUF1Q3ZoQixLQUF2QyxDQUFULENBQVA7QUFDRDs7QUFFRGdtQixvQkFBa0IsQ0FBQ3pmLElBQUQsRUFBK0I7QUFDL0MsV0FBTyxLQUFLcWIsSUFBTCxDQUFVLGdCQUFWLEVBQTRCcmIsSUFBNUIsQ0FBUDtBQUNEOztBQUVEMGYsdUJBQXFCLENBQUMzTixFQUFELEVBQWE7QUFDaEMsV0FBTyxLQUFLbGIsR0FBTCxDQUFVLGtCQUFpQmtiLEVBQUcsRUFBOUIsQ0FBUDtBQUNEOztBQUVENE4sMkJBQXlCLENBQUNDLFFBQUQsRUFBbUI7QUFDMUMsV0FBTyxLQUFLL29CLEdBQUwsQ0FBVSx5QkFBd0Irb0IsUUFBUyxFQUEzQyxDQUFQO0FBQ0Q7O0FBRURDLGFBQVcsQ0FBQ0MsY0FBRCxFQUF5QnJtQixLQUF6QixFQUFzRDtBQUMvRCxXQUFPLEtBQUs1QyxHQUFMLENBQVMsS0FBS21rQixRQUFMLENBQWUsMkJBQTBCOEUsY0FBZSxFQUF4RCxFQUEyRHJtQixLQUEzRCxDQUFULENBQVA7QUFDRDs7QUFFRHNtQixtQkFBaUIsQ0FBQ0QsY0FBRCxFQUF5QnJtQixLQUF6QixFQUFzRDtBQUNyRSxXQUFPLEtBQUs1QyxHQUFMLENBQVMsS0FBS21rQixRQUFMLENBQWUsa0NBQWlDOEUsY0FBZSxFQUEvRCxFQUFrRXJtQixLQUFsRSxDQUFULENBQVA7QUFDRDs7QUFFRHVtQixhQUFXLENBQUNGLGNBQUQsRUFBeUI5ZixJQUF6QixFQUFvRDtBQUM3RCxXQUFPLEtBQUtxYixJQUFMLENBQVcsMkJBQTBCeUUsY0FBZSxFQUFwRCxFQUF1RDlmLElBQXZELENBQVA7QUFDRDs7QUFFRGlnQixtQkFBaUIsQ0FBQ0gsY0FBRCxFQUF5QjlmLElBQXpCLEVBQW9EO0FBQ25FLFdBQU8sS0FBS3FiLElBQUwsQ0FBVyxrQ0FBaUN5RSxjQUFlLEVBQTNELEVBQThEOWYsSUFBOUQsQ0FBUDtBQUNEOztBQUVEa2dCLHlCQUF1QixDQUFDSixjQUFELEVBQXlCOWYsSUFBekIsRUFBb0Q7QUFDekUsV0FBTyxLQUFLcWIsSUFBTCxDQUFXLHlDQUF3Q3lFLGNBQWUsRUFBbEUsRUFBcUU5ZixJQUFyRSxDQUFQO0FBQ0Q7O0FBRURtZ0IsaUNBQStCLENBQUNDLFdBQUQsRUFBc0I7QUFDbkQsV0FBTyxLQUFLdnBCLEdBQUwsQ0FBVSxnQ0FBK0J1cEIsV0FBWSxFQUFyRCxDQUFQO0FBQ0Q7O0FBRURDLG1CQUFpQixHQUFHO0FBQ2xCLFdBQU8sS0FBS3hwQixHQUFMLENBQVMsc0NBQVQsQ0FBUDtBQUNEOztBQUVEeXBCLHVCQUFxQixDQUFDUixjQUFELEVBQWtDUyxXQUFsQyxFQUF1RDtBQUMxRSxXQUFPLEtBQUtsRixJQUFMLENBQVUsb0JBQVYsRUFBZ0M7QUFBRXlFLG9CQUFGO0FBQWtCUztBQUFsQixLQUFoQyxDQUFQO0FBQ0Q7O0FBRURDLHFCQUFtQixHQUFHO0FBQ3BCLFVBQU1uVixNQUFNLEdBQUdDLCtEQUFlLEVBQTlCO0FBQ0EsV0FBUSxHQUFFRCxNQUFNLENBQUN3UCx3QkFBeUIsd0JBQTFDO0FBQ0Q7O0FBRUQ0RixlQUFhLENBQUMxTyxFQUFELEVBQUs7QUFDaEIsV0FBTyxLQUFLd0osR0FBTCxDQUFVLGFBQVl4SixFQUFHLEVBQXpCLENBQVA7QUFDRDs7QUFFRDJPLGdDQUE4QixDQUFDWixjQUFELEVBQWlCO0FBQzdDLFdBQU8sS0FBS3ZFLEdBQUwsQ0FBVSxhQUFZdUUsY0FBZSxxQkFBckMsQ0FBUDtBQUNEOztBQWhFNEM7QUFtRXhDLE1BQU1hLGNBQWMsR0FBRyxJQUFJckIsY0FBSixFQUF2QixDOzs7Ozs7Ozs7Ozs7QUN0RVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRU8sTUFBTXNCLFlBQU4sU0FBMkI5Ryx1REFBM0IsQ0FBc0M7QUFDM0MzWSxRQUFNLENBQUMwZixPQUFELEVBQVU7QUFDZCxXQUFPLEtBQUtocUIsR0FBTCxDQUFTLEtBQUtta0IsUUFBTCxDQUFjLGdCQUFkLEVBQWdDNkYsT0FBaEMsQ0FBVCxDQUFQO0FBQ0Q7O0FBRUQxQixTQUFPLENBQUNwTixFQUFELEVBQUs7QUFDVixXQUFPLEtBQUtsYixHQUFMLENBQVUsbUJBQWtCa2IsRUFBRyxFQUEvQixDQUFQO0FBQ0Q7O0FBRURtTixRQUFNLENBQUNuTixFQUFELEVBQUsvUixJQUFMLEVBQVc7QUFDZixXQUFPLEtBQUtzYixHQUFMLENBQVUsV0FBVXZKLEVBQUcsU0FBdkIsRUFBaUMvUixJQUFqQyxDQUFQO0FBQ0Q7O0FBRUQ4Z0IsWUFBVSxDQUFDcm5CLEtBQUQsRUFBUTtBQUNoQixXQUFPLEtBQUs1QyxHQUFMLENBQVMsS0FBS21rQixRQUFMLENBQWMscUJBQWQsRUFBcUN2aEIsS0FBckMsQ0FBVCxDQUFQO0FBQ0Q7O0FBRURzbkIsaUJBQWUsQ0FBQ2hQLEVBQUQsRUFBSztBQUNsQixXQUFPLEtBQUtsYixHQUFMLENBQVUsd0JBQXVCa2IsRUFBRyxFQUFwQyxDQUFQO0FBQ0Q7O0FBbkIwQztBQXNCdEMsTUFBTWlQLFlBQVksR0FBRyxJQUFJSixZQUFKLEVBQXJCLEM7Ozs7Ozs7Ozs7OztBQ3pCUDtBQUFBO0FBQUE7QUFBQTs7QUFFQSxNQUFNSyx5QkFBTixTQUF3Q25ILHVEQUF4QyxDQUFtRDtBQUNqRG1GLFFBQU0sQ0FBQ2pmLElBQUQsRUFBTztBQUNYLFdBQU8sS0FBS3FiLElBQUwsQ0FBVSxzQkFBVixFQUFrQ3JiLElBQWxDLENBQVA7QUFDRDs7QUFFRGtoQixTQUFPLENBQUNsaEIsSUFBRCxFQUFPO0FBQ1osV0FBTyxLQUFLbkosR0FBTCxDQUFTLEtBQUtta0IsUUFBTCxDQUFjLHNCQUFkLEVBQXNDaGIsSUFBdEMsQ0FBVCxDQUFQO0FBQ0Q7O0FBUGdEOztBQVU1QyxNQUFNbWhCLHlCQUF5QixHQUFHLElBQUlGLHlCQUFKLEVBQWxDLEM7Ozs7Ozs7Ozs7OztBQ1hQO0FBQUE7QUFBQTtBQUFBOztBQUVBLE1BQU1HLG9CQUFOLFNBQW1DdEgsdURBQW5DLENBQThDO0FBQzVDdUgsV0FBUyxDQUFDcm9CLE1BQUQsRUFBb0Nta0IsSUFBcEMsRUFBa0Q7QUFDekQsV0FBTyxLQUFLdG1CLEdBQUwsQ0FDTCxLQUFLbWtCLFFBQUwsQ0FBZSxZQUFXbUMsSUFBSSxJQUFJLFdBQVksU0FBOUMsRUFBd0Rua0IsTUFBeEQsQ0FESyxDQUFQO0FBR0Q7O0FBRURtSSxRQUFNLENBQUMxSCxLQUFELEVBQW1DO0FBQ3ZDLFdBQU8sS0FBSzVDLEdBQUwsQ0FBUyxLQUFLbWtCLFFBQUwsQ0FBYyxtQ0FBZCxFQUFtRHZoQixLQUFuRCxDQUFULENBQVA7QUFDRDs7QUFFRDZuQixjQUFZLENBQUM3bkIsS0FBRCxFQUFtQztBQUM3QyxXQUFPLEtBQUs1QyxHQUFMLENBQVMsS0FBS21rQixRQUFMLENBQWMsZ0NBQWQsRUFBZ0R2aEIsS0FBaEQsQ0FBVCxDQUFQO0FBQ0Q7O0FBRUR3bEIsUUFBTSxDQUFDMUUsSUFBRCxFQUFZNEMsSUFBSSxHQUFHLFdBQW5CLEVBQWdDO0FBQ3BDLFdBQU8sS0FBSzlCLElBQUwsQ0FBVyxvQkFBbUI4QixJQUFLLEVBQW5DLEVBQXNDNUMsSUFBdEMsQ0FBUDtBQUNEOztBQUVEMkUsUUFBTSxDQUFDbk4sRUFBRCxFQUFhd0ksSUFBYixFQUF3QjRDLElBQUksR0FBRyxXQUEvQixFQUE0QztBQUNoRCxXQUFPLEtBQUs3QixHQUFMLENBQVUsb0JBQW1CNkIsSUFBSyxJQUFHcEwsRUFBRyxFQUF4QyxFQUEyQ3dJLElBQTNDLENBQVA7QUFDRDs7QUFFRGdILFFBQU0sQ0FDSnhQLEVBREksRUFFSjdGLE9BRkksRUFLSmlSLElBQUksR0FBRyxXQUxILEVBTXNDO0FBQzFDLFdBQU8sS0FBS3RtQixHQUFMLENBQVUsb0JBQW1Cc21CLElBQUssSUFBR3BMLEVBQUcsT0FBeEMsRUFBZ0Q3RixPQUFoRCxDQUFQO0FBQ0Q7O0FBL0IyQzs7QUFrQ3ZDLE1BQU1zVixvQkFBb0IsR0FBRyxJQUFJSixvQkFBSixFQUE3QixDOzs7Ozs7Ozs7Ozs7QUNyQ1A7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1LLDBCQUFOLFNBQXlDM0gsdURBQXpDLENBQW9EO0FBQ3pENEgsU0FBTyxDQUFDam9CLEtBQUQsRUFBaUM7QUFDdEMsV0FBTyxLQUFLNUMsR0FBTCxDQUFTLEtBQUtta0IsUUFBTCxDQUFjLHVCQUFkLEVBQXVDdmhCLEtBQXZDLENBQVQsQ0FBUDtBQUNEOztBQUVEMGxCLFNBQU8sQ0FBQ3BOLEVBQUQsRUFBYTtBQUNsQixXQUFPLEtBQUtsYixHQUFMLENBQVUseUJBQXdCa2IsRUFBRyxPQUFyQyxDQUFQO0FBQ0Q7O0FBUHdEO0FBVXBELE1BQU00UCxtQkFBbUIsR0FBRyxJQUFJRiwwQkFBSixFQUE1QixDOzs7Ozs7Ozs7Ozs7QUNQUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVPLE1BQU1HLGdCQUFOLFNBQStCOUgsdURBQS9CLENBQTBDO0FBQy9DK0gsSUFBRSxDQUFDM1YsT0FBRCxFQUFzRTtBQUN0RSxXQUFPLEtBQUtyVixHQUFMLENBQVMsZ0JBQVQsRUFBMkJxVixPQUEzQixDQUFQO0FBQ0Q7O0FBRUQ0VixVQUFRLENBQUNqQixPQUFELEVBQWU7QUFDckIsV0FBTyxLQUFLdkYsR0FBTCxDQUFTLGFBQVQsRUFBd0J1RixPQUF4QixDQUFQO0FBQ0Q7O0FBRUQxZixRQUFNLENBQUMxSCxLQUFELEVBQWlDO0FBQ3JDLFdBQU8sS0FBSzVDLEdBQUwsQ0FBUyxLQUFLbWtCLFFBQUwsQ0FBYyxvQkFBZCxFQUFvQ3ZoQixLQUFwQyxDQUFULENBQVA7QUFDRDs7QUFFRDBsQixTQUFPLENBQUM0QyxRQUFELEVBQW1CN1YsT0FBTyxHQUFHLEVBQTdCLEVBQWlFO0FBQ3RFLFdBQU8sS0FBS3JWLEdBQUwsQ0FBVSxlQUFja3JCLFFBQVMsT0FBakMsRUFBeUM3VixPQUF6QyxDQUFQO0FBQ0Q7O0FBRUQ4VixvQkFBa0IsR0FBRztBQUNuQixVQUFNM1csTUFBTSxHQUFHQywrREFBZSxFQUE5QjtBQUNBLFdBQVEsR0FBRUQsTUFBTSxDQUFDd1Asd0JBQXlCLDJCQUExQztBQUNEOztBQUVEb0gsdUJBQXFCLEdBQUc7QUFDdEIsVUFBTTVXLE1BQU0sR0FBR0MsK0RBQWUsRUFBOUI7QUFDQSxXQUFRLEdBQUVELE1BQU0sQ0FBQ3dQLHdCQUF5Qiw4QkFBMUM7QUFDRDs7QUFFRHFILG1CQUFpQixHQUFHO0FBQ2xCLFVBQU03VyxNQUFNLEdBQUdDLCtEQUFlLEVBQTlCO0FBQ0EsV0FBUSxHQUFFRCxNQUFNLENBQUN3UCx3QkFBeUIsaUNBQTFDO0FBQ0Q7O0FBRURzSCxXQUFTLENBQUMxb0IsS0FBRCxFQUFpQztBQUN4QyxXQUFPLEtBQUs1QyxHQUFMLENBQ0wsS0FBS21rQixRQUFMLENBQWMsNkNBQWQsRUFBNkR2aEIsS0FBN0QsQ0FESyxDQUFQO0FBR0Q7O0FBRUQyb0IsZUFBYSxDQUNYN3BCLEdBRFcsRUFFWHlILElBRlcsRUFHWC9ELE9BQWlDLEdBQUc7QUFDbEN5ZixjQUFVLEdBQUcsQ0FBRTs7QUFEbUIsR0FIekIsRUFNYztBQUN6QixVQUFNclEsTUFBTSxHQUFHQywrREFBZSxFQUE5QjtBQUNBLFdBQU8sSUFBSTVMLE9BQUosQ0FBWSxDQUFDNkksT0FBRCxFQUFVa04sTUFBVixLQUFxQjtBQUN0QyxZQUFNb0IsR0FBRyxHQUFHLElBQUkrRSxjQUFKLEVBQVo7QUFFQS9FLFNBQUcsQ0FBQzJFLE1BQUosQ0FBV0ssZ0JBQVgsQ0FBNEIsVUFBNUIsRUFBeUNwb0IsS0FBRCxJQUFXO0FBQ2pELFlBQUlBLEtBQUssQ0FBQ3FvQixnQkFBVixFQUE0QjtBQUMxQjdmLGlCQUFPLENBQUN5ZixVQUFSLENBQW1CO0FBQ2pCSyxzQkFBVSxFQUFHdG9CLEtBQUssQ0FBQ3VvQixNQUFOLEdBQWV2b0IsS0FBSyxDQUFDd29CLEtBQXRCLEdBQStCO0FBRDFCLFdBQW5CO0FBR0Q7QUFDRixPQU5EO0FBUUFwRixTQUFHLENBQUNnRixnQkFBSixDQUFxQixNQUFyQixFQUE2QixNQUFNO0FBQ2pDLGNBQU01bkIsT0FBTyxHQUFHNGlCLEdBQUcsQ0FBQ3hLLE1BQUosSUFBYyxHQUFkLElBQXFCd0ssR0FBRyxDQUFDeEssTUFBSixHQUFhLEdBQWxEO0FBQ0EsY0FBTTtBQUFFNE47QUFBRixZQUFlcEQsR0FBckI7O0FBQ0EsWUFBSSxDQUFDNWlCLE9BQUwsRUFBYztBQUNaLGlCQUFPd2hCLE1BQU0sQ0FBQ3dFLFFBQUQsQ0FBYjtBQUNEOztBQUNELGVBQU8xUixPQUFPLENBQUMwUixRQUFELENBQWQ7QUFDRCxPQVBEO0FBU0FwRCxTQUFHLENBQUMyRSxNQUFKLENBQVdLLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDLE1BQU07QUFDekNwRyxjQUFNLENBQUNvQixHQUFHLENBQUNvRCxRQUFMLENBQU47QUFDRCxPQUZEO0FBSUEsWUFBTWlDLFFBQVEsR0FBRyxJQUFJQyxRQUFKLEVBQWpCLENBeEJzQyxDQXlCdEM7O0FBQ0EsVUFBSW5jLElBQUksQ0FBQ3FpQixLQUFULEVBQWdCO0FBQ2QsY0FBTUEsS0FBSyxHQUFHcmlCLElBQUksQ0FBQ3FpQixLQUFMLENBQVdyWCxJQUFYLENBQWdCd0ssYUFBOUI7QUFDQTBHLGdCQUFRLENBQUNFLE1BQVQsQ0FBZ0IsT0FBaEIsRUFBeUJpRyxLQUF6QixFQUFnQ0EsS0FBSyxDQUFDeHFCLElBQXRDO0FBQ0Q7O0FBRUQsVUFBSW1JLElBQUksQ0FBQ3NpQixXQUFULEVBQXNCO0FBQ3BCLGNBQU1BLFdBQVcsR0FBR3RpQixJQUFJLENBQUNzaUIsV0FBTCxDQUFpQnRYLElBQWpCLENBQXNCd0ssYUFBMUM7QUFDQTBHLGdCQUFRLENBQUNFLE1BQVQsQ0FBZ0IsYUFBaEIsRUFBK0JrRyxXQUEvQixFQUE0Q0EsV0FBVyxDQUFDenFCLElBQXhEO0FBQ0Q7O0FBRURwRCxZQUFNLENBQUNxTixJQUFQLENBQVlrYixtREFBSSxDQUFDaGQsSUFBRCxFQUFPLENBQUMsT0FBRCxFQUFVLGFBQVYsQ0FBUCxDQUFoQixFQUFrRDZPLE9BQWxELENBQTJEeUMsQ0FBRCxJQUFPO0FBQy9ENEssZ0JBQVEsQ0FBQ0UsTUFBVCxDQUFnQjlLLENBQWhCLEVBQW1CdFIsSUFBSSxDQUFDc1IsQ0FBRCxDQUF2QjtBQUNELE9BRkQ7QUFJQXVGLFNBQUcsQ0FBQzBGLFlBQUosR0FBbUIsTUFBbkI7QUFDQTFGLFNBQUcsQ0FBQzJGLElBQUosQ0FBUyxNQUFULEVBQWlCeEwseURBQUssQ0FBQ3pZLEdBQUQsQ0FBTCxHQUFhQSxHQUFiLEdBQW9CLEdBQUU4UyxNQUFNLENBQUN3UCx3QkFBeUIsR0FBRXRpQixHQUFJLEVBQTdFO0FBRUEsWUFBTTBQLEtBQVUsR0FBRzBTLGdEQUFNLENBQUM5akIsR0FBUCxDQUFXMGlCLGtEQUFYLENBQW5COztBQUNBLFVBQUl0UixLQUFKLEVBQVc7QUFDVDRPLFdBQUcsQ0FBQzRGLGdCQUFKLENBQXFCLGVBQXJCLEVBQXNDeFUsS0FBdEM7QUFDRDs7QUFDRDRPLFNBQUcsQ0FBQzZGLElBQUosQ0FBU1IsUUFBVDtBQUNELEtBaERNLENBQVA7QUFpREQ7O0FBRURxRyxlQUFhLENBQ1hocUIsR0FEVyxFQUVYeUgsSUFGVyxFQUdYL0QsT0FBaUMsR0FBRztBQUNsQ3lmLGNBQVUsR0FBRyxDQUFFOztBQURtQixHQUh6QixFQU1jO0FBQ3pCLFVBQU1yUSxNQUFNLEdBQUdDLCtEQUFlLEVBQTlCO0FBQ0EsV0FBTyxJQUFJNUwsT0FBSixDQUFZLENBQUM2SSxPQUFELEVBQVVrTixNQUFWLEtBQXFCO0FBQ3RDLFlBQU1vQixHQUFHLEdBQUcsSUFBSStFLGNBQUosRUFBWjtBQUVBL0UsU0FBRyxDQUFDMkUsTUFBSixDQUFXSyxnQkFBWCxDQUE0QixVQUE1QixFQUF5Q3BvQixLQUFELElBQVc7QUFDakQsWUFBSUEsS0FBSyxDQUFDcW9CLGdCQUFWLEVBQTRCO0FBQzFCN2YsaUJBQU8sQ0FBQ3lmLFVBQVIsQ0FBbUI7QUFDakJLLHNCQUFVLEVBQUd0b0IsS0FBSyxDQUFDdW9CLE1BQU4sR0FBZXZvQixLQUFLLENBQUN3b0IsS0FBdEIsR0FBK0I7QUFEMUIsV0FBbkI7QUFHRDtBQUNGLE9BTkQ7QUFRQXBGLFNBQUcsQ0FBQ2dGLGdCQUFKLENBQXFCLE1BQXJCLEVBQTZCLE1BQU07QUFDakMsY0FBTTVuQixPQUFPLEdBQUc0aUIsR0FBRyxDQUFDeEssTUFBSixJQUFjLEdBQWQsSUFBcUJ3SyxHQUFHLENBQUN4SyxNQUFKLEdBQWEsR0FBbEQ7QUFDQSxjQUFNO0FBQUU0TjtBQUFGLFlBQWVwRCxHQUFyQjs7QUFDQSxZQUFJLENBQUM1aUIsT0FBTCxFQUFjO0FBQ1osaUJBQU93aEIsTUFBTSxDQUFDd0UsUUFBRCxDQUFiO0FBQ0Q7O0FBQ0QsZUFBTzFSLE9BQU8sQ0FBQzBSLFFBQUQsQ0FBZDtBQUNELE9BUEQ7QUFTQXBELFNBQUcsQ0FBQzJFLE1BQUosQ0FBV0ssZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsTUFBTTtBQUN6Q3BHLGNBQU0sQ0FBQ29CLEdBQUcsQ0FBQ29ELFFBQUwsQ0FBTjtBQUNELE9BRkQ7QUFJQSxZQUFNaUMsUUFBUSxHQUFHLElBQUlDLFFBQUosRUFBakIsQ0F4QnNDLENBeUJ0Qzs7QUFDQSxVQUFJbmMsSUFBSSxDQUFDcWlCLEtBQUwsSUFBY3JpQixJQUFJLENBQUNxaUIsS0FBTCxDQUFXclgsSUFBN0IsRUFBbUM7QUFDakMsY0FBTXFYLEtBQUssR0FBR3JpQixJQUFJLENBQUNxaUIsS0FBTCxDQUFXclgsSUFBWCxDQUFnQndLLGFBQTlCO0FBQ0EwRyxnQkFBUSxDQUFDRSxNQUFULENBQWdCLE9BQWhCLEVBQXlCaUcsS0FBekIsRUFBZ0NBLEtBQUssQ0FBQ3hxQixJQUF0QztBQUNEOztBQUVELFVBQUltSSxJQUFJLENBQUNzaUIsV0FBTCxJQUFvQnRpQixJQUFJLENBQUNzaUIsV0FBTCxDQUFpQnRYLElBQXpDLEVBQStDO0FBQzdDLGNBQU1zWCxXQUFXLEdBQUd0aUIsSUFBSSxDQUFDc2lCLFdBQUwsQ0FBaUJ0WCxJQUFqQixDQUFzQndLLGFBQTFDO0FBQ0EwRyxnQkFBUSxDQUFDRSxNQUFULENBQWdCLGFBQWhCLEVBQStCa0csV0FBL0IsRUFBNENBLFdBQVcsQ0FBQ3pxQixJQUF4RDtBQUNEOztBQUVEcEQsWUFBTSxDQUFDcU4sSUFBUCxDQUFZa2IsbURBQUksQ0FBQ2hkLElBQUQsRUFBTyxDQUFDLE9BQUQsRUFBVSxhQUFWLENBQVAsQ0FBaEIsRUFBa0Q2TyxPQUFsRCxDQUEyRHlDLENBQUQsSUFBTztBQUMvRDRLLGdCQUFRLENBQUNFLE1BQVQsQ0FBZ0I5SyxDQUFoQixFQUFtQnRSLElBQUksQ0FBQ3NSLENBQUQsQ0FBdkI7QUFDRCxPQUZEO0FBSUF1RixTQUFHLENBQUMwRixZQUFKLEdBQW1CLE1BQW5CO0FBQ0ExRixTQUFHLENBQUMyRixJQUFKLENBQVMsS0FBVCxFQUFnQnhMLHlEQUFLLENBQUN6WSxHQUFELENBQUwsR0FBYUEsR0FBYixHQUFvQixHQUFFOFMsTUFBTSxDQUFDd1Asd0JBQXlCLEdBQUV0aUIsR0FBSSxFQUE1RTtBQUVBLFlBQU0wUCxLQUFVLEdBQUcwUyxnREFBTSxDQUFDOWpCLEdBQVAsQ0FBVzBpQixrREFBWCxDQUFuQjs7QUFDQSxVQUFJdFIsS0FBSixFQUFXO0FBQ1Q0TyxXQUFHLENBQUM0RixnQkFBSixDQUFxQixlQUFyQixFQUFzQ3hVLEtBQXRDO0FBQ0Q7O0FBQ0Q0TyxTQUFHLENBQUM2RixJQUFKLENBQVNSLFFBQVQ7QUFDRCxLQWhETSxDQUFQO0FBaUREOztBQUVEc0csZUFBYSxDQUFDelEsRUFBRCxFQUFhO0FBQ3hCLFdBQU8sS0FBS3dKLEdBQUwsQ0FBVSx3Q0FBdUN4SixFQUFHLEVBQXBELENBQVA7QUFDRDs7QUFFRDBRLGVBQWEsR0FBRztBQUNkLFdBQU8sS0FBSzVyQixHQUFMLENBQVMsZ0NBQVQsQ0FBUDtBQUNEOztBQUVENnJCLG1CQUFpQixDQUFDN0IsT0FBRCxFQUEwQztBQUN6RCxXQUFPLEtBQUt4RixJQUFMLENBQVUsa0NBQVYsRUFBOEN3RixPQUE5QyxDQUFQO0FBQ0Q7O0FBRUQ4QixvQkFBa0IsQ0FBQzlCLE9BQUQsRUFBMEM7QUFDMUQsV0FBTyxLQUFLeEYsSUFBTCxDQUFVLG1DQUFWLEVBQStDd0YsT0FBL0MsQ0FBUDtBQUNEOztBQUVEK0IsYUFBVyxDQUFDL0IsT0FBRCxFQUEwQztBQUNuRCxXQUFPLEtBQUt4RixJQUFMLENBQVUsMEJBQVYsRUFBc0N3RixPQUF0QyxDQUFQO0FBQ0Q7O0FBRURnQyxjQUFZLENBQUNoQyxPQUFELEVBQTBDO0FBQ3BELFdBQU8sS0FBS3hGLElBQUwsQ0FBVSwyQkFBVixFQUF1Q3dGLE9BQXZDLENBQVA7QUFDRDs7QUFFRGlDLHVCQUFxQixDQUFDakMsT0FBRCxFQUVjO0FBQ2pDLFdBQU8sS0FBS3hGLElBQUwsQ0FBVSxxQ0FBVixFQUFpRHdGLE9BQWpELENBQVA7QUFDRDs7QUFFRGtDLFVBQVEsQ0FBQ2xDLE9BQUQsRUFBK0U7QUFDckYsV0FBTyxLQUFLeEYsSUFBTCxDQUFVLDZCQUFWLEVBQXlDd0YsT0FBekMsQ0FBUDtBQUNEOztBQUVEbUMsZ0JBQWMsR0FBNEI7QUFDeEMsV0FBTyxLQUFLbnNCLEdBQUwsQ0FBUyxLQUFLbWtCLFFBQUwsQ0FBYyxzQkFBZCxDQUFULENBQVA7QUFDRDs7QUFFRGlJLGNBQVksQ0FBQzdDLFdBQUQsRUFBYztBQUN4QixXQUFPLEtBQUsvRSxJQUFMLENBQVcsZUFBYytFLFdBQVksV0FBckMsQ0FBUDtBQUNEOztBQUVEOEMsb0JBQWtCLENBQUNyQyxPQUFELEVBQTBDO0FBQzFELFdBQU8sS0FBS3hGLElBQUwsQ0FBVSxrQ0FBVixFQUE4Q3dGLE9BQTlDLENBQVA7QUFDRDs7QUFFRHNDLHdCQUFzQixDQUFDdEMsT0FBRCxFQUFtQztBQUN2RCxXQUFPLEtBQUt4RixJQUFMLENBQVUsc0NBQVYsRUFBa0R3RixPQUFsRCxDQUFQO0FBQ0Q7O0FBRUR1QyxnQkFBYyxDQUFDQyxRQUFELEVBQW1CO0FBQy9CLFdBQU8sS0FBS2hJLElBQUwsQ0FBVSw2QkFBVixFQUF5QztBQUFFZ0k7QUFBRixLQUF6QyxDQUFQO0FBQ0Q7O0FBRURDLFlBQVUsQ0FBQ2xELFdBQUQsRUFBc0I7QUFDOUIsV0FBTyxLQUFLdnBCLEdBQUwsQ0FBVSxlQUFjdXBCLFdBQVksaUJBQXBDLENBQVA7QUFDRDs7QUFwTjhDO0FBdU4xQyxNQUFNbUQsaUJBQWlCLEdBQUcsQ0FBQyxRQUFELEVBQVcsYUFBWCxFQUEwQixNQUExQixDQUExQjtBQUVBLE1BQU1DLGdCQUFnQixHQUFHLElBQUk1QixnQkFBSixFQUF6QixDOzs7Ozs7Ozs7Ozs7QUNyT1A7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFFTyxNQUFNNkIsWUFBTixTQUEyQjNKLG1FQUEzQixDQUFzQztBQUMzQzNZLFFBQU0sQ0FBQ25JLE1BQUQsRUFFd0M7QUFDNUMsV0FBTyxLQUFLbkMsR0FBTCxDQUNMLEtBQUtta0IsUUFBTCxDQUFjLDJDQUFkLEVBQTJEaGlCLE1BQTNELENBREssQ0FBUDtBQUdEOztBQUVEMHFCLGlCQUFlLENBQ2JDLFNBRGEsRUFFYjNxQixNQUZhLEVBS2JrVCxPQUxhLEVBTWI7QUFDQSxXQUFPLEtBQUtyVixHQUFMLENBQ0wsS0FBS21rQixRQUFMLENBQ0csaUNBQWdDMkksU0FBVSxTQUQ3QyxFQUVFM3FCLE1BRkYsQ0FESyxFQUtMa1QsT0FMSyxDQUFQO0FBT0Q7O0FBRURpVCxTQUFPLENBQUNwTixFQUFELEVBQWE3RixPQUFiLEVBQWtEO0FBQ3ZELFdBQU8sS0FBS3JWLEdBQUwsQ0FBVSxzQ0FBcUNrYixFQUFHLE9BQWxELEVBQTBEN0YsT0FBMUQsQ0FBUDtBQUNEOztBQUVEMFgsVUFBUSxDQUFDbnFCLEtBQUQsRUFBaUM7QUFDdkMsV0FBTyxLQUFLNUMsR0FBTCxDQUNMLEtBQUtta0IsUUFBTCxDQUFjLDJDQUFkLEVBQTJEdmhCLEtBQTNELENBREssQ0FBUDtBQUdEOztBQUVEaWtCLFFBQU0sQ0FBQzNMLEVBQUQsRUFBYTtBQUNqQixXQUFPLEtBQUt3SixHQUFMLENBQVUsc0NBQXFDeEosRUFBRyxFQUFsRCxDQUFQO0FBQ0Q7O0FBRURrTixRQUFNLENBQ0oxbUIsR0FESSxFQUVKeUgsSUFGSSxFQUdKL0QsT0FBaUMsR0FBRztBQUNsQ3lmLGNBQVUsR0FBRyxDQUFFOztBQURtQixHQUhoQyxFQU1xQjtBQUN6QixVQUFNclEsTUFBTSxHQUFHQywrREFBZSxFQUE5QjtBQUNBLFdBQU8sSUFBSTVMLE9BQUosQ0FBWSxDQUFDNkksT0FBRCxFQUFVa04sTUFBVixLQUFxQjtBQUN0QyxZQUFNb0IsR0FBRyxHQUFHLElBQUkrRSxjQUFKLEVBQVo7QUFFQS9FLFNBQUcsQ0FBQzJFLE1BQUosQ0FBV0ssZ0JBQVgsQ0FBNEIsVUFBNUIsRUFBeUNwb0IsS0FBRCxJQUFXO0FBQ2pELFlBQUlBLEtBQUssQ0FBQ3FvQixnQkFBVixFQUE0QjtBQUMxQjdmLGlCQUFPLENBQUN5ZixVQUFSLENBQW1CO0FBQ2pCSyxzQkFBVSxFQUFHdG9CLEtBQUssQ0FBQ3VvQixNQUFOLEdBQWV2b0IsS0FBSyxDQUFDd29CLEtBQXRCLEdBQStCO0FBRDFCLFdBQW5CO0FBR0Q7QUFDRixPQU5EO0FBUUFwRixTQUFHLENBQUNnRixnQkFBSixDQUFxQixNQUFyQixFQUE2QixNQUFNO0FBQ2pDLGNBQU01bkIsT0FBTyxHQUFHNGlCLEdBQUcsQ0FBQ3hLLE1BQUosSUFBYyxHQUFkLElBQXFCd0ssR0FBRyxDQUFDeEssTUFBSixHQUFhLEdBQWxEO0FBQ0EsY0FBTTtBQUFFNE47QUFBRixZQUFlcEQsR0FBckI7O0FBQ0EsWUFBSSxDQUFDNWlCLE9BQUwsRUFBYztBQUNaLGlCQUFPd2hCLE1BQU0sQ0FBQ3dFLFFBQUQsQ0FBYjtBQUNEOztBQUNELGVBQU8xUixPQUFPLENBQUMwUixRQUFELENBQWQ7QUFDRCxPQVBEO0FBU0FwRCxTQUFHLENBQUMyRSxNQUFKLENBQVdLLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDLE1BQU07QUFDekNwRyxjQUFNLENBQUNvQixHQUFHLENBQUNvRCxRQUFMLENBQU47QUFDRCxPQUZEO0FBSUEsWUFBTWlDLFFBQVEsR0FBRyxJQUFJQyxRQUFKLEVBQWpCLENBeEJzQyxDQXlCdEM7O0FBQ0EsVUFBSW5jLElBQUksQ0FBQzZqQixLQUFULEVBQWdCO0FBQ2QsY0FBTUEsS0FBSyxHQUFHN2pCLElBQUksQ0FBQzZqQixLQUFMLENBQVc3WSxJQUFYLENBQWdCd0ssYUFBOUI7QUFDQTBHLGdCQUFRLENBQUNFLE1BQVQsQ0FBZ0IsT0FBaEIsRUFBeUJ5SCxLQUF6QixFQUFnQ0EsS0FBSyxDQUFDaHNCLElBQXRDO0FBQ0Q7O0FBRURwRCxZQUFNLENBQUNxTixJQUFQLENBQVlrYixtREFBSSxDQUFDaGQsSUFBRCxFQUFPLENBQUMsT0FBRCxDQUFQLENBQWhCLEVBQW1DNk8sT0FBbkMsQ0FBNEN5QyxDQUFELElBQU87QUFDaEQ0SyxnQkFBUSxDQUFDRSxNQUFULENBQWdCOUssQ0FBaEIsRUFBbUJ0UixJQUFJLENBQUNzUixDQUFELENBQXZCO0FBQ0QsT0FGRDtBQUlBdUYsU0FBRyxDQUFDMEYsWUFBSixHQUFtQixNQUFuQjtBQUNBMUYsU0FBRyxDQUFDMkYsSUFBSixDQUFTLE1BQVQsRUFBaUJ4TCx5REFBSyxDQUFDelksR0FBRCxDQUFMLEdBQWFBLEdBQWIsR0FBb0IsR0FBRThTLE1BQU0sQ0FBQ3dQLHdCQUF5QixHQUFFdGlCLEdBQUksRUFBN0U7QUFFQSxZQUFNMFAsS0FBVSxHQUFHMFMsZ0RBQU0sQ0FBQzlqQixHQUFQLENBQVcwaUIsOERBQVgsQ0FBbkI7O0FBQ0EsVUFBSXRSLEtBQUosRUFBVztBQUNUNE8sV0FBRyxDQUFDNEYsZ0JBQUosQ0FBcUIsZUFBckIsRUFBc0N4VSxLQUF0QztBQUNEOztBQUNENE8sU0FBRyxDQUFDNkYsSUFBSixDQUFTUixRQUFUO0FBQ0QsS0EzQ00sQ0FBUDtBQTRDRDs7QUFFRGdELFFBQU0sQ0FDSjNtQixHQURJLEVBRUp5SCxJQUZJLEVBR0ovRCxPQUFpQyxHQUFHO0FBQ2xDeWYsY0FBVSxHQUFHLENBQUU7O0FBRG1CLEdBSGhDLEVBTXFCO0FBQ3pCLFVBQU1yUSxNQUFNLEdBQUdDLCtEQUFlLEVBQTlCO0FBQ0EsV0FBTyxJQUFJNUwsT0FBSixDQUFZLENBQUM2SSxPQUFELEVBQVVrTixNQUFWLEtBQXFCO0FBQ3RDLFlBQU1vQixHQUFHLEdBQUcsSUFBSStFLGNBQUosRUFBWjtBQUVBL0UsU0FBRyxDQUFDMkUsTUFBSixDQUFXSyxnQkFBWCxDQUE0QixVQUE1QixFQUF5Q3BvQixLQUFELElBQVc7QUFDakQsWUFBSUEsS0FBSyxDQUFDcW9CLGdCQUFWLEVBQTRCO0FBQzFCN2YsaUJBQU8sQ0FBQ3lmLFVBQVIsQ0FBbUI7QUFDakJLLHNCQUFVLEVBQUd0b0IsS0FBSyxDQUFDdW9CLE1BQU4sR0FBZXZvQixLQUFLLENBQUN3b0IsS0FBdEIsR0FBK0I7QUFEMUIsV0FBbkI7QUFHRDtBQUNGLE9BTkQ7QUFRQXBGLFNBQUcsQ0FBQ2dGLGdCQUFKLENBQXFCLE1BQXJCLEVBQTZCLE1BQU07QUFDakMsY0FBTTVuQixPQUFPLEdBQUc0aUIsR0FBRyxDQUFDeEssTUFBSixJQUFjLEdBQWQsSUFBcUJ3SyxHQUFHLENBQUN4SyxNQUFKLEdBQWEsR0FBbEQ7QUFDQSxjQUFNO0FBQUU0TjtBQUFGLFlBQWVwRCxHQUFyQjs7QUFDQSxZQUFJLENBQUM1aUIsT0FBTCxFQUFjO0FBQ1osaUJBQU93aEIsTUFBTSxDQUFDd0UsUUFBRCxDQUFiO0FBQ0Q7O0FBQ0QsZUFBTzFSLE9BQU8sQ0FBQzBSLFFBQUQsQ0FBZDtBQUNELE9BUEQ7QUFTQXBELFNBQUcsQ0FBQzJFLE1BQUosQ0FBV0ssZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsTUFBTTtBQUN6Q3BHLGNBQU0sQ0FBQ29CLEdBQUcsQ0FBQ29ELFFBQUwsQ0FBTjtBQUNELE9BRkQ7QUFJQSxZQUFNaUMsUUFBUSxHQUFHLElBQUlDLFFBQUosRUFBakIsQ0F4QnNDLENBeUJ0Qzs7QUFDQSxVQUFJbmMsSUFBSSxDQUFDNmpCLEtBQUwsSUFBYzdqQixJQUFJLENBQUM2akIsS0FBTCxDQUFXN1ksSUFBN0IsRUFBbUM7QUFDakMsY0FBTTZZLEtBQUssR0FBRzdqQixJQUFJLENBQUM2akIsS0FBTCxDQUFXN1ksSUFBWCxDQUFnQndLLGFBQTlCO0FBQ0EwRyxnQkFBUSxDQUFDRSxNQUFULENBQWdCLE9BQWhCLEVBQXlCeUgsS0FBekIsRUFBZ0NBLEtBQUssQ0FBQ2hzQixJQUF0QztBQUNEOztBQUVEcEQsWUFBTSxDQUFDcU4sSUFBUCxDQUFZa2IsbURBQUksQ0FBQ2hkLElBQUQsRUFBTyxDQUFDLE9BQUQsQ0FBUCxDQUFoQixFQUFtQzZPLE9BQW5DLENBQTRDeUMsQ0FBRCxJQUFPO0FBQ2hENEssZ0JBQVEsQ0FBQ0UsTUFBVCxDQUFnQjlLLENBQWhCLEVBQW1CdFIsSUFBSSxDQUFDc1IsQ0FBRCxDQUF2QjtBQUNELE9BRkQ7QUFJQXVGLFNBQUcsQ0FBQzBGLFlBQUosR0FBbUIsTUFBbkI7QUFDQTFGLFNBQUcsQ0FBQzJGLElBQUosQ0FBUyxLQUFULEVBQWdCeEwseURBQUssQ0FBQ3pZLEdBQUQsQ0FBTCxHQUFhQSxHQUFiLEdBQW9CLEdBQUU4UyxNQUFNLENBQUN3UCx3QkFBeUIsR0FBRXRpQixHQUFJLEVBQTVFO0FBRUEsWUFBTTBQLEtBQVUsR0FBRzBTLGdEQUFNLENBQUM5akIsR0FBUCxDQUFXMGlCLDhEQUFYLENBQW5COztBQUNBLFVBQUl0UixLQUFKLEVBQVc7QUFDVDRPLFdBQUcsQ0FBQzRGLGdCQUFKLENBQXFCLGVBQXJCLEVBQXNDeFUsS0FBdEM7QUFDRDs7QUFDRDRPLFNBQUcsQ0FBQzZGLElBQUosQ0FBU1IsUUFBVDtBQUNELEtBM0NNLENBQVA7QUE0Q0Q7O0FBRUQ0SCxjQUFZLENBQUM5WSxJQUFELEVBQWE2VixPQUFiLEVBQTJCbkYsVUFBM0IsRUFBa0Q7QUFDNUQsV0FBTyxLQUFLRixNQUFMLENBQ0wsMkNBREssRUFFTCxDQUNFO0FBQ0VhLGVBQVMsRUFBRSxPQURiO0FBRUVyUjtBQUZGLEtBREYsQ0FGSyxFQVFMO0FBQ0UwUSxnQkFERjtBQUVFWSxnQkFBVSxFQUFFdUU7QUFGZCxLQVJLLENBQVA7QUFhRDs7QUFqSzBDO0FBb0t0QyxNQUFNa0QsWUFBWSxHQUFHLElBQUlOLFlBQUosRUFBckIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hMUDtBQUVPLE1BQU1PLFdBQU4sU0FBMEJsSyx1REFBMUIsQ0FBcUM7QUFDMUMzWSxRQUFNLENBQUMxSCxLQUFELEVBQXFCO0FBQ3pCLFdBQU8sS0FBSzVDLEdBQUwsQ0FBUyxLQUFLbWtCLFFBQUwsQ0FBYyxlQUFkLEVBQStCdmhCLEtBQS9CLENBQVQsQ0FBUDtBQUNEOztBQUVEd3FCLFVBQVEsQ0FBQ2xTLEVBQUQsRUFBYTtBQUNuQixXQUFPLEtBQUtsYixHQUFMLENBQVUsVUFBU2tiLEVBQUcsRUFBdEIsQ0FBUDtBQUNEOztBQUVEbVMscUJBQW1CLENBQUNsa0IsSUFBRCxFQUE0QjtBQUM3QyxXQUFPLEtBQUtxYixJQUFMLENBQVUsVUFBVixvQkFBMkJyYixJQUEzQixFQUFQO0FBQ0Q7O0FBWHlDO0FBY3JDLE1BQU1ta0IsV0FBVyxHQUFHLElBQUlILFdBQUosRUFBcEIsQzs7Ozs7Ozs7Ozs7O0FDakJQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNSSxjQUFOLFNBQTZCdEssdURBQTdCLENBQXdDO0FBQzdDcUYsU0FBTyxDQUFDcE4sRUFBRCxFQUFhN0YsT0FBYixFQUFtRDtBQUN4RCxXQUFPLEtBQUtyVixHQUFMLENBQVUsd0NBQXVDa2IsRUFBRyxPQUFwRCxFQUE0RDdGLE9BQTVELENBQVA7QUFDRDs7QUFFRC9LLFFBQU0sQ0FBQ25JLE1BQUQsRUFBa0M7QUFDdEMsV0FBTyxLQUFLbkMsR0FBTCxDQUFTLEtBQUtta0IsUUFBTCxDQUFjLHdDQUFkLEVBQXdEaGlCLE1BQXhELENBQVQsQ0FBUDtBQUNEOztBQUVEZ21CLFdBQVMsQ0FBQ2htQixNQUFELEVBQWtDO0FBQ3pDLFdBQU8sS0FBS25DLEdBQUwsQ0FBUyxLQUFLbWtCLFFBQUwsQ0FBYyxnQ0FBZCxFQUFnRGhpQixNQUFoRCxDQUFULENBQVA7QUFDRDs7QUFFRHFyQixpQkFBZSxDQUFDdFMsRUFBRCxFQUFhO0FBQzFCLFdBQU8sS0FBS2xiLEdBQUwsQ0FBVSxtQ0FBa0NrYixFQUFHLGdCQUEvQyxDQUFQO0FBQ0Q7O0FBZjRDO0FBa0J4QyxNQUFNdVMsY0FBYyxHQUFHLElBQUlGLGNBQUosRUFBdkIsQzs7Ozs7Ozs7Ozs7O0FDcEJQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNRyxtQkFBTixTQUFrQ3pLLHVEQUFsQyxDQUE2QztBQUNsRDNZLFFBQU0sQ0FBQzFILEtBQUQsRUFBUTtBQUNaLFdBQU8sS0FBSzVDLEdBQUwsQ0FBUyxLQUFLbWtCLFFBQUwsQ0FBYyw4QkFBZCxFQUE4Q3ZoQixLQUE5QyxDQUFULENBQVA7QUFDRDs7QUFFRCtxQixjQUFZLENBQUN6UyxFQUFELEVBQWF0SixJQUFiLEVBQTJCekksSUFBM0IsRUFBdUM7QUFDakQsV0FBTyxLQUFLcWIsSUFBTCxDQUFXLG1CQUFrQjVTLElBQUssSUFBR3NKLEVBQUcsRUFBeEMsRUFBMkMvUixJQUEzQyxDQUFQO0FBQ0Q7O0FBRUR5a0IsaUJBQWUsQ0FBQzFTLEVBQUQsRUFBYTtBQUMxQixXQUFPLEtBQUtzSixJQUFMLENBQVcsMkJBQTBCdEosRUFBRyxFQUF4QyxDQUFQO0FBQ0Q7O0FBRUQyUyxlQUFhLENBQUMzUyxFQUFELEVBQWE7QUFDeEIsV0FBTyxLQUFLc0osSUFBTCxDQUFXLHlCQUF3QnRKLEVBQUcsRUFBdEMsQ0FBUDtBQUNEOztBQWZpRDtBQWtCN0MsTUFBTTRTLG1CQUFtQixHQUFHLElBQUlKLG1CQUFKLEVBQTVCLEM7Ozs7Ozs7Ozs7OztBQ3BCUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUssb0JBQU4sU0FBbUM5Syx1REFBbkMsQ0FBOEM7QUFDbkRtRixRQUFNLENBQUNqZixJQUFELEVBQU87QUFDWCxXQUFPLEtBQUtxYixJQUFMLENBQVUsa0JBQVYsRUFBOEJyYixJQUE5QixDQUFQO0FBQ0Q7O0FBRURtQixRQUFNLENBQUNuSSxNQUFELEVBQWtDO0FBQ3RDLFdBQU8sS0FBS25DLEdBQUwsQ0FBUyxLQUFLbWtCLFFBQUwsQ0FBYyx5QkFBZCxFQUF5Q2hpQixNQUF6QyxDQUFULENBQVA7QUFDRDs7QUFQa0Q7QUFVOUMsTUFBTTZyQixvQkFBb0IsR0FBRyxJQUFJRCxvQkFBSixFQUE3QixDOzs7Ozs7Ozs7Ozs7QUNYUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUUsY0FBTixTQUE2QmhMLHVEQUE3QixDQUF3QztBQUM3Q2hpQixLQUFHLENBQUNpdEIsS0FBSyxHQUFHLEVBQVQsRUFBMkM7QUFDNUMsV0FBTyxLQUFLbHVCLEdBQUwsQ0FBUyxLQUFLbWtCLFFBQUwsQ0FBYyxrQkFBZCxFQUFrQztBQUFFK0o7QUFBRixLQUFsQyxDQUFULENBQVA7QUFDRDs7QUFFREMsY0FBWSxHQUFxQztBQUMvQyxXQUFPLEtBQUtudUIsR0FBTCxDQUFTLGlCQUFULENBQVA7QUFDRDs7QUFFRG91QixjQUFZLEdBQWlDO0FBQzNDLFdBQU8sS0FBS3B1QixHQUFMLENBQVMsaUJBQVQsQ0FBUDtBQUNEOztBQVg0QztBQWN4QyxNQUFNcXVCLGNBQWMsR0FBRyxJQUFJSixjQUFKLEVBQXZCLEM7Ozs7Ozs7Ozs7OztBQ2hCUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUssYUFBTixTQUE0QnJMLHVEQUE1QixDQUF1QztBQUNyQ3NMLGNBQVksQ0FBQ3JULEVBQUQsRUFBYXRKLElBQWIsRUFBMkI7QUFDckMsV0FBTyxLQUFLNVIsR0FBTCxDQUFVLHNCQUFxQmtiLEVBQUcsSUFBR3RKLElBQUssRUFBMUMsQ0FBUDtBQUNEOztBQUVENGMsUUFBTSxHQUFHO0FBQ1AsV0FBTyxLQUFLaEssSUFBTCxDQUFVLGlCQUFWLENBQVA7QUFDRDs7QUFFRGlLLGdCQUFjLENBQUNsRixXQUFELEVBQXNCO0FBQ2xDLFdBQU8sS0FBSy9FLElBQUwsQ0FBVyxtQkFBa0IrRSxXQUFZLEVBQXpDLENBQVA7QUFDRDs7QUFFRG1GLG9CQUFrQixDQUFDbkYsV0FBRCxFQUFzQjtBQUN0QyxXQUFPLEtBQUsvRSxJQUFMLENBQVcsMkJBQTBCK0UsV0FBWSxFQUFqRCxDQUFQO0FBQ0Q7O0FBRURvRixtQkFBaUIsQ0FBQ3pULEVBQUQsRUFBYTtBQUM1QixXQUFPLEtBQUtsYixHQUFMLENBQVUsMkJBQTBCa2IsRUFBRyxFQUF2QyxDQUFQO0FBQ0Q7O0FBRUQwVCxnQkFBYyxHQUFHO0FBQ2YsV0FBTyxLQUFLcEssSUFBTCxDQUFVLHVCQUFWLENBQVA7QUFDRDs7QUFFRHFLLGVBQWEsQ0FBQzNULEVBQUQsRUFBYTtBQUN4QixXQUFPLEtBQUtsYixHQUFMLENBQVUseUJBQXdCa2IsRUFBRyxFQUFyQyxDQUFQO0FBQ0Q7O0FBRUQ0VCxzQkFBb0IsQ0FBQzNsQixJQUFELEVBQXNCO0FBQ3hDLFdBQU8sS0FBS3FiLElBQUwsQ0FBVSxrQkFBVixFQUE4QnJiLElBQTlCLENBQVA7QUFDRDs7QUFFb0IsUUFBZjRsQixlQUFlLENBQUMzcEIsT0FBRCxFQUdoQjRwQixVQUFVLEdBQUc5Yiw2Q0FBTSxHQUFHK2IsR0FBVCxDQUFhLENBQWIsRUFBZ0IsR0FBaEIsRUFBcUJDLE1BQXJCLEdBQThCQyxPQUE5QixFQUhHLEVBR3VEO0FBQzFFLFFBQUk7QUFDRixZQUFNO0FBQUVyVixnQkFBRjtBQUFZaVA7QUFBWixVQUF5QjNqQixPQUEvQjtBQUNBLFlBQU07QUFBRWdxQjtBQUFGLFVBQW1CdFYsUUFBekI7O0FBQ0EsVUFBSXNWLFlBQUosRUFBa0I7QUFDaEIsY0FBTUMsSUFBSSxHQUFHLE1BQU0sS0FBS1Asb0JBQUwsQ0FBMEI7QUFDM0M1VCxZQUFFLEVBQUU2TixRQUR1QztBQUUzQ25YLGNBQUksRUFBRSxTQUZxQztBQUczQ29kO0FBSDJDLFNBQTFCLENBQW5CO0FBS0EsZUFBT0ssSUFBSSxDQUFDbG1CLElBQUwsQ0FBVW1tQixPQUFqQjtBQUNEOztBQUVELGFBQU8sSUFBUDtBQUNELEtBYkQsQ0FhRSxPQUFPNXlCLEdBQVAsRUFBWTtBQUNaLFlBQU0ySyxLQUFLLEdBQUcsTUFBTXdCLE9BQU8sQ0FBQzZJLE9BQVIsQ0FBZ0JoVixHQUFoQixDQUFwQjtBQUNBNEQsa0RBQU8sQ0FBQytHLEtBQVIsQ0FBY3NLLGdFQUFnQixDQUFDdEssS0FBRCxDQUE5QjtBQUNBLGFBQU8sSUFBUDtBQUNEO0FBQ0Y7O0FBRXVCLFFBQWxCa29CLGtCQUFrQixDQUFDbnFCLE9BQUQsRUFHbkI0cEIsVUFBVSxHQUFHOWIsNkNBQU0sR0FBRytiLEdBQVQsQ0FBYSxDQUFiLEVBQWdCLEdBQWhCLEVBQXFCQyxNQUFyQixHQUE4QkMsT0FBOUIsRUFITSxFQUdvRDtBQUMxRSxRQUFJO0FBQ0YsWUFBTTtBQUFFclYsZ0JBQUY7QUFBWWlQO0FBQVosVUFBeUIzakIsT0FBL0I7QUFDQSxZQUFNO0FBQUVncUI7QUFBRixVQUFtQnRWLFFBQXpCOztBQUNBLFVBQUlzVixZQUFKLEVBQWtCO0FBQ2hCLGNBQU1DLElBQUksR0FBRyxNQUFNLEtBQUtQLG9CQUFMLENBQTBCO0FBQzNDNVQsWUFBRSxFQUFFNk4sUUFEdUM7QUFFM0NuWCxjQUFJLEVBQUUsTUFGcUM7QUFHM0NvZDtBQUgyQyxTQUExQixDQUFuQjtBQUtBLGVBQU9LLElBQUksQ0FBQ2xtQixJQUFMLENBQVVtbUIsT0FBakI7QUFDRDs7QUFFRCxhQUFPLElBQVA7QUFDRCxLQWJELENBYUUsT0FBTzV5QixHQUFQLEVBQVk7QUFDWixZQUFNMkssS0FBSyxHQUFHLE1BQU13QixPQUFPLENBQUM2SSxPQUFSLENBQWdCaFYsR0FBaEIsQ0FBcEI7QUFDQTRELGtEQUFPLENBQUMrRyxLQUFSLENBQWNzSyxnRUFBZ0IsQ0FBQ3RLLEtBQUQsQ0FBOUI7QUFDQSxhQUFPLElBQVA7QUFDRDtBQUNGOztBQUUwQixRQUFyQm1vQixxQkFBcUIsQ0FBQ3BxQixPQUFELEVBSXRCNHBCLFVBQVUsR0FBRzliLDZDQUFNLEdBQUcrYixHQUFULENBQWEsQ0FBYixFQUFnQixHQUFoQixFQUFxQkMsTUFBckIsR0FBOEJDLE9BQTlCLEVBSlMsRUFJZ0NNLE9BQU8sR0FBRyxLQUoxQyxFQUlpRDtBQUMxRTtBQUNBO0FBQ0E7QUFDQSxRQUFJO0FBQ0Y7QUFDQTtBQUNBLFlBQU07QUFBRUMsZUFBRjtBQUFXNVYsZ0JBQVg7QUFBcUJpUDtBQUFyQixVQUFrQzNqQixPQUF4QztBQUNBLFlBQU07QUFBRWdxQixvQkFBRjtBQUFnQk87QUFBaEIsVUFBOEI3VixRQUFwQztBQUNBLFlBQU04VixTQUFTLEdBQUdILE9BQU8sS0FBSyxLQUFaLEdBQW9CLE1BQXBCLEdBQTZCLEtBQS9DOztBQUNBLFVBQUksQ0FBQ0UsU0FBRCxJQUFjLENBQUNELE9BQW5CLEVBQTRCO0FBQzFCLGVBQU8sRUFBUDtBQUNEOztBQUVELFVBQUlHLFlBQVksR0FBRyxFQUFuQjs7QUFDQSxVQUFJVCxZQUFKLEVBQWtCO0FBQ2hCLGNBQU1DLElBQUksR0FBRyxNQUFNLEtBQUtQLG9CQUFMLENBQTBCO0FBQzNDNVQsWUFBRSxFQUFFNk4sUUFEdUM7QUFFM0NuWCxjQUFJLEVBQUUsTUFGcUM7QUFHM0NvZDtBQUgyQyxTQUExQixDQUFuQjtBQUtBYSxvQkFBWSxHQUFHUixJQUFJLENBQUNsbUIsSUFBTCxDQUFVbW1CLE9BQXpCO0FBQ0Q7O0FBRUQsWUFBTTtBQUFFdmxCO0FBQUYsVUFBZWpPLE1BQU0sQ0FBQ3lnQixRQUE1QjtBQUNBLGFBQVEsR0FBRXhTLFFBQVMsS0FBSTRsQixTQUFVLElBQUdELE9BQVEsWUFBVzNHLFFBQVMsSUFBRzZHLFNBQVUsR0FBRUMsWUFBWSxHQUFJLFVBQVNBLFlBQWEsRUFBMUIsR0FBOEIsRUFBRyxFQUE1SDtBQUNELEtBdEJELENBc0JFLE9BQU9uekIsR0FBUCxFQUFZO0FBQ1osWUFBTTJLLEtBQUssR0FBRyxNQUFNd0IsT0FBTyxDQUFDNkksT0FBUixDQUFnQmhWLEdBQWhCLENBQXBCO0FBQ0E0RCxrREFBTyxDQUFDK0csS0FBUixDQUFjc0ssZ0VBQWdCLENBQUN0SyxLQUFELENBQTlCO0FBQ0EsYUFBTyxFQUFQO0FBQ0Q7QUFDRjs7QUFwSG9DOztBQXVIaEMsTUFBTXlvQixhQUFhLEdBQUcsSUFBSXhCLGFBQUosRUFBdEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1SFA7QUFDQTtBQUVPLE1BQU15QixhQUFOLFNBQTRCOU0sdURBQTVCLENBQXVDO0FBQzVDK0gsSUFBRSxDQUFDM1YsT0FBRCxFQUFtRTtBQUNuRSxXQUFPLEtBQUtyVixHQUFMLENBQVMsWUFBVCxFQUF1QnFWLE9BQXZCLENBQVA7QUFDRDs7QUFFRGdULFFBQU0sQ0FBQzJCLE9BQUQsRUFBZTtBQUNuQixXQUFPLEtBQUt2RixHQUFMLENBQVMsZ0JBQVQsRUFBMkJ1RixPQUEzQixDQUFQO0FBQ0Q7O0FBRUQ2QixtQkFBaUIsQ0FBQzdCLE9BQUQsRUFBdUM7QUFDdEQsV0FBTyxLQUFLeEYsSUFBTCxDQUFVLDhCQUFWLEVBQTBDd0YsT0FBMUMsQ0FBUDtBQUNEOztBQUVEOEIsb0JBQWtCLENBQUM5QixPQUFELEVBQXVDO0FBQ3ZELFdBQU8sS0FBS3hGLElBQUwsQ0FBVSwrQkFBVixFQUEyQ3dGLE9BQTNDLENBQVA7QUFDRDs7QUFFRCtCLGFBQVcsQ0FBQy9CLE9BQUQsRUFBdUM7QUFDaEQsV0FBTyxLQUFLeEYsSUFBTCxDQUFVLHNCQUFWLEVBQWtDd0YsT0FBbEMsQ0FBUDtBQUNEOztBQUVEZ0MsY0FBWSxDQUFDaEMsT0FBRCxFQUF1QztBQUNqRCxXQUFPLEtBQUt4RixJQUFMLENBQVUsdUJBQVYsRUFBbUN3RixPQUFuQyxDQUFQO0FBQ0Q7O0FBRUQ0QixlQUFhLEdBQUc7QUFDZCxXQUFPLEtBQUs1ckIsR0FBTCxDQUFTLDZCQUFULENBQVA7QUFDRDs7QUFFRGd3QixVQUFRLENBQUNoRyxPQUFELEVBQVU7QUFDaEIsV0FBTyxLQUFLeEYsSUFBTCxDQUFVLGlCQUFWLEVBQTZCd0YsT0FBN0IsQ0FBUDtBQUNEOztBQUVEaUcsWUFBVSxDQUFDOXRCLE1BQUQsRUFBcUM7QUFDN0MsV0FBTyxLQUFLbkMsR0FBTCxDQUFTLEtBQUtta0IsUUFBTCxDQUFjLGlCQUFkLEVBQWlDaGlCLE1BQWpDLENBQVQsQ0FBUDtBQUNEOztBQUVEK3RCLHNCQUFvQixDQUFDL3RCLE1BQUQsRUFBcUM7QUFDdkQsV0FBTyxLQUFLbkMsR0FBTCxDQUFTLEtBQUtta0IsUUFBTCxDQUFjLG9CQUFkLEVBQW9DaGlCLE1BQXBDLENBQVQsQ0FBUDtBQUNEOztBQUVEZ3VCLHdCQUFzQixDQUFDalYsRUFBRCxFQUFhOE8sT0FBYixFQUEyQjtBQUMvQyxXQUFPLEtBQUt2RixHQUFMLENBQVUsNkJBQTRCdkosRUFBRyxFQUF6QyxFQUE0QzhPLE9BQTVDLENBQVA7QUFDRDs7QUFFRG9HLHFCQUFtQixDQUFDanVCLE1BQUQsRUFBcUM7QUFDdEQsV0FBTyxLQUFLbkMsR0FBTCxDQUNMLEtBQUtta0IsUUFBTCxDQUFjLDJDQUFkLEVBQTJEaGlCLE1BQTNELENBREssQ0FBUDtBQUdEOztBQUVEa3VCLDhCQUE0QixDQUFDblYsRUFBRCxFQUFhOE8sT0FBYixFQUFzQjtBQUNoRCxXQUFPLEtBQUt2RixHQUFMLENBQVUsa0NBQWlDdkosRUFBRyxFQUE5QyxvQkFBc0Q4TyxPQUF0RCxFQUFQO0FBQ0Q7O0FBRURzRyxvQkFBa0IsQ0FBQ3BWLEVBQUQsRUFBYTFGLE1BQWIsRUFBNkI7QUFDN0MsV0FBTyxLQUFLZ1AsSUFBTCxDQUFXLG1CQUFrQnRKLEVBQUcsSUFBRzFGLE1BQU8sRUFBMUMsQ0FBUDtBQUNEOztBQUVEaVMsT0FBSyxHQUFHO0FBQ04sV0FBTyxLQUFLem5CLEdBQUwsQ0FBUyxlQUFULENBQVA7QUFDRDs7QUFFRG9yQix1QkFBcUIsR0FBRztBQUN0QixVQUFNNVcsTUFBTSxHQUFHQywrREFBZSxFQUE5QjtBQUNBLFdBQVEsR0FBRUQsTUFBTSxDQUFDd1Asd0JBQXlCLDBCQUExQztBQUNEOztBQWxFMkM7QUFxRXZDLE1BQU11TSxhQUFhLEdBQUcsSUFBSVIsYUFBSixFQUF0QixDOzs7Ozs7Ozs7Ozs7QUN6RVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1TLG1CQUFOLFNBQWtDdk4sdURBQWxDLENBQTZDO0FBQ2xEM1ksUUFBTSxDQUFDbkksTUFBRCxFQUFxQztBQUN6QyxXQUFPLEtBQUtuQyxHQUFMLENBQVMsS0FBS21rQixRQUFMLENBQWMsdUJBQWQsRUFBdUNoaUIsTUFBdkMsQ0FBVCxDQUFQO0FBQ0Q7O0FBRURzdUIsV0FBUyxDQUFDdlYsRUFBRCxFQUFhO0FBQ3BCLFdBQU8sS0FBS3NKLElBQUwsQ0FBVyw0QkFBMkJ0SixFQUFHLEVBQXpDLENBQVA7QUFDRDs7QUFQaUQ7QUFVN0MsTUFBTXdWLG1CQUFtQixHQUFHLElBQUlGLG1CQUFKLEVBQTVCLEM7Ozs7Ozs7Ozs7OztBQ1pQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNRyxrQkFBTixTQUFpQzFOLHVEQUFqQyxDQUE0QztBQUNqRDNZLFFBQU0sQ0FBQ25JLE1BQUQsRUFBa0M7QUFDdEMsV0FBTyxLQUFLbkMsR0FBTCxDQUFTLEtBQUtta0IsUUFBTCxDQUFjLDJCQUFkLEVBQTJDaGlCLE1BQTNDLENBQVQsQ0FBUDtBQUNEOztBQUVEeXVCLGNBQVksQ0FBQ3JILFdBQUQsRUFBc0JuWSxLQUF0QixFQUFxQzZYLGNBQXJDLEVBQThEO0FBQ3hFLFdBQU8sS0FBS3pFLElBQUwsQ0FBVywwQkFBeUIrRSxXQUFZLEVBQWhELEVBQW1EO0FBQUVuWSxXQUFGO0FBQVM2WDtBQUFULEtBQW5ELENBQVA7QUFDRDs7QUFFTTRILGVBQWEsQ0FBQzVILGNBQUQsRUFBeUI7QUFDM0MsV0FBTyxLQUFLekUsSUFBTCxDQUFXLDBCQUF5QnlFLGNBQWUsRUFBbkQsQ0FBUDtBQUNEOztBQVhnRDtBQWM1QyxNQUFNNkgsa0JBQWtCLEdBQUcsSUFBSUgsa0JBQUosRUFBM0IsQzs7Ozs7Ozs7Ozs7O0FDZlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxNQUFNSSxXQUFOLFNBQTBCOU4sdURBQTFCLENBQXFDO0FBQzFDK0gsSUFBRSxDQUFDM1YsT0FBRCxFQUFpRTtBQUNqRSxXQUFPLEtBQUtyVixHQUFMLENBQVMsV0FBVCxFQUFzQnFWLE9BQXRCLENBQVA7QUFDRDs7QUFFRDRWLFVBQVEsQ0FBQ2pCLE9BQUQsRUFBZTtBQUNyQixXQUFPLEtBQUt2RixHQUFMLENBQVMsUUFBVCxFQUFtQnVGLE9BQW5CLENBQVA7QUFDRDs7QUFFRG1CLG9CQUFrQixDQUFDNkYsTUFBRCxFQUFrQjtBQUNsQyxVQUFNeGMsTUFBTSxHQUFHQywrREFBZSxFQUE5Qjs7QUFDQSxRQUFJdWMsTUFBSixFQUFZO0FBQ1YsYUFBUSxHQUFFeGMsTUFBTSxDQUFDd1Asd0JBQXlCLFVBQVNnTixNQUFPLGdCQUExRDtBQUNEOztBQUNELFdBQVEsR0FBRXhjLE1BQU0sQ0FBQ3dQLHdCQUF5QixzQkFBMUM7QUFDRDs7QUFFRDFaLFFBQU0sQ0FBQzFILEtBQUQsRUFBaUM7QUFDckMsV0FBTyxLQUFLNUMsR0FBTCxDQUFTLEtBQUtta0IsUUFBTCxDQUFjLGVBQWQsRUFBK0J2aEIsS0FBL0IsQ0FBVCxDQUFQO0FBQ0Q7O0FBRUR3cUIsVUFBUSxDQUFDbFMsRUFBRCxFQUFhO0FBQ25CLFdBQU8sS0FBS2xiLEdBQUwsQ0FBVSxlQUFja2IsRUFBRyxFQUEzQixDQUFQO0FBQ0Q7O0FBdkJ5QztBQTBCckMsTUFBTStWLFdBQVcsR0FBRyxJQUFJRixXQUFKLEVBQXBCLEM7Ozs7Ozs7Ozs7OztBQzdCUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUcsWUFBTixTQUEyQmpPLHVEQUEzQixDQUFzQztBQUMzQ2tPLGVBQWEsR0FBaUM7QUFDNUMsV0FBTyxLQUFLbnhCLEdBQUwsQ0FBUyxpQkFBVCxDQUFQO0FBQ0Q7O0FBRURveEIsZUFBYSxHQUFtQztBQUM5QyxXQUFPLEtBQUtweEIsR0FBTCxDQUFTLGlCQUFULENBQVA7QUFDRDs7QUFFRHF4QixnQkFBYyxHQUFvQztBQUNoRCxXQUFPLEtBQUtyeEIsR0FBTCxDQUFTLG1CQUFULENBQVA7QUFDRDs7QUFFRHN4QixZQUFVLEdBQTRCO0FBQ3BDLFdBQU8sS0FBS3R4QixHQUFMLENBQVMsbUJBQVQsQ0FBUDtBQUNEOztBQUVEeVIsaUJBQWUsQ0FBQ0wsS0FBRCxFQUFnQjtBQUM3QixXQUFPLEtBQUtvVCxJQUFMLENBQVUsb0JBQVYsRUFBZ0M7QUFBRXBUO0FBQUYsS0FBaEMsQ0FBUDtBQUNEOztBQW5CMEM7QUFzQnRDLE1BQU1JLFlBQVksR0FBRyxJQUFJMGYsWUFBSixFQUFyQixDOzs7Ozs7Ozs7Ozs7QUN4QlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxNQUFNSyxZQUFOLFNBQTJCdE8sbUVBQTNCLENBQXNDO0FBQzNDM1ksUUFBTSxDQUFDbkksTUFBRCxFQUFrQztBQUN0QyxXQUFPLEtBQUtuQyxHQUFMLENBQ0wsS0FBS21rQixRQUFMLENBQWMsc0NBQWQsRUFBc0RoaUIsTUFBdEQsQ0FESyxDQUFQO0FBR0Q7O0FBRURnbUIsV0FBUyxDQUFDaG1CLE1BQUQsRUFBa0M7QUFDekMsV0FBTyxLQUFLbkMsR0FBTCxDQUNMLEtBQUtta0IsUUFBTCxDQUFjLDhCQUFkLEVBQThDaGlCLE1BQTlDLENBREssQ0FBUDtBQUdEOztBQUVEbW1CLFNBQU8sQ0FBQ3BOLEVBQUQsRUFBYTdGLE9BQWIsRUFBa0Q7QUFDdkQsV0FBTyxLQUFLclYsR0FBTCxDQUFVLHNDQUFxQ2tiLEVBQUcsT0FBbEQsRUFBMEQ3RixPQUExRCxDQUFQO0FBQ0Q7O0FBRURtYyxVQUFRLENBQUM1dUIsS0FBRCxFQUFpQztBQUN2QyxXQUFPLEtBQUs1QyxHQUFMLENBQ0wsS0FBS21rQixRQUFMLENBQWMsMkNBQWQsRUFBMkR2aEIsS0FBM0QsQ0FESyxDQUFQO0FBR0Q7O0FBRUQ2dUIsZUFBYSxDQUFDdlcsRUFBRCxFQUFhO0FBQ3hCLFdBQU8sS0FBS3dKLEdBQUwsQ0FBVSxzQ0FBcUN4SixFQUFHLEVBQWxELENBQVA7QUFDRDs7QUFFRGtOLFFBQU0sQ0FDSjFtQixHQURJLEVBRUp5SCxJQUZJLEVBR0ovRCxPQUFpQyxHQUFHO0FBQ2xDeWYsY0FBVSxHQUFHLENBQUU7O0FBRG1CLEdBSGhDLEVBTXFCO0FBQ3pCLFVBQU1yUSxNQUFNLEdBQUdDLCtEQUFlLEVBQTlCO0FBQ0EsV0FBTyxJQUFJNUwsT0FBSixDQUFZLENBQUM2SSxPQUFELEVBQVVrTixNQUFWLEtBQXFCO0FBQ3RDLFlBQU1vQixHQUFHLEdBQUcsSUFBSStFLGNBQUosRUFBWjtBQUVBL0UsU0FBRyxDQUFDMkUsTUFBSixDQUFXSyxnQkFBWCxDQUE0QixVQUE1QixFQUF5Q3BvQixLQUFELElBQVc7QUFDakQsWUFBSUEsS0FBSyxDQUFDcW9CLGdCQUFWLEVBQTRCO0FBQzFCN2YsaUJBQU8sQ0FBQ3lmLFVBQVIsQ0FBbUI7QUFDakJLLHNCQUFVLEVBQUd0b0IsS0FBSyxDQUFDdW9CLE1BQU4sR0FBZXZvQixLQUFLLENBQUN3b0IsS0FBdEIsR0FBK0I7QUFEMUIsV0FBbkI7QUFHRDtBQUNGLE9BTkQ7QUFRQXBGLFNBQUcsQ0FBQ2dGLGdCQUFKLENBQXFCLE1BQXJCLEVBQTZCLE1BQU07QUFDakMsY0FBTTVuQixPQUFPLEdBQUc0aUIsR0FBRyxDQUFDeEssTUFBSixJQUFjLEdBQWQsSUFBcUJ3SyxHQUFHLENBQUN4SyxNQUFKLEdBQWEsR0FBbEQ7QUFDQSxjQUFNO0FBQUU0TjtBQUFGLFlBQWVwRCxHQUFyQjs7QUFDQSxZQUFJLENBQUM1aUIsT0FBTCxFQUFjO0FBQ1osaUJBQU93aEIsTUFBTSxDQUFDd0UsUUFBRCxDQUFiO0FBQ0Q7O0FBQ0QsZUFBTzFSLE9BQU8sQ0FBQzBSLFFBQUQsQ0FBZDtBQUNELE9BUEQ7QUFTQXBELFNBQUcsQ0FBQzJFLE1BQUosQ0FBV0ssZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsTUFBTTtBQUN6Q3BHLGNBQU0sQ0FBQ29CLEdBQUcsQ0FBQ29ELFFBQUwsQ0FBTjtBQUNELE9BRkQ7QUFJQSxZQUFNaUMsUUFBUSxHQUFHLElBQUlDLFFBQUosRUFBakIsQ0F4QnNDLENBeUJ0Qzs7QUFDQSxVQUFJbmMsSUFBSSxDQUFDdW9CLEtBQVQsRUFBZ0I7QUFDZCxjQUFNQSxLQUFLLEdBQUd2b0IsSUFBSSxDQUFDdW9CLEtBQUwsQ0FBV3ZkLElBQVgsQ0FBZ0J3SyxhQUE5QjtBQUNBMEcsZ0JBQVEsQ0FBQ0UsTUFBVCxDQUFnQixPQUFoQixFQUF5Qm1NLEtBQXpCLEVBQWdDQSxLQUFLLENBQUMxd0IsSUFBdEM7QUFDRDs7QUFFRCxVQUFJbUksSUFBSSxDQUFDd29CLE9BQVQsRUFBa0I7QUFDaEIsY0FBTUEsT0FBTyxHQUFHeG9CLElBQUksQ0FBQ3dvQixPQUFMLENBQWF4ZCxJQUFiLENBQWtCd0ssYUFBbEM7QUFDQTBHLGdCQUFRLENBQUNFLE1BQVQsQ0FBZ0IsU0FBaEIsRUFBMkJvTSxPQUEzQixFQUFvQ0EsT0FBTyxDQUFDM3dCLElBQTVDO0FBQ0Q7O0FBRUQsVUFBSW1JLElBQUksQ0FBQ3lvQixTQUFULEVBQW9CO0FBQ2xCLGNBQU1BLFNBQVMsR0FBR3pvQixJQUFJLENBQUN5b0IsU0FBTCxDQUFlemQsSUFBZixDQUFvQndLLGFBQXRDO0FBQ0EwRyxnQkFBUSxDQUFDRSxNQUFULENBQWdCLFdBQWhCLEVBQTZCcU0sU0FBN0IsRUFBd0NBLFNBQVMsQ0FBQzV3QixJQUFsRDtBQUNEOztBQUVEcEQsWUFBTSxDQUFDcU4sSUFBUCxDQUFZa2IsbURBQUksQ0FBQ2hkLElBQUQsRUFBTyxDQUFDLE9BQUQsRUFBVSxXQUFWLEVBQXVCLFNBQXZCLENBQVAsQ0FBaEIsRUFBMkQ2TyxPQUEzRCxDQUNHeUMsQ0FBRCxJQUFPO0FBQ0w0SyxnQkFBUSxDQUFDRSxNQUFULENBQWdCOUssQ0FBaEIsRUFBbUJ0UixJQUFJLENBQUNzUixDQUFELENBQXZCO0FBQ0QsT0FISDtBQU1BdUYsU0FBRyxDQUFDMEYsWUFBSixHQUFtQixNQUFuQjtBQUNBMUYsU0FBRyxDQUFDMkYsSUFBSixDQUFTLE1BQVQsRUFBaUJ4TCx5REFBSyxDQUFDelksR0FBRCxDQUFMLEdBQWFBLEdBQWIsR0FBb0IsR0FBRThTLE1BQU0sQ0FBQ3dQLHdCQUF5QixHQUFFdGlCLEdBQUksRUFBN0U7QUFFQSxZQUFNMFAsS0FBVSxHQUFHMFMsZ0RBQU0sQ0FBQzlqQixHQUFQLENBQVcwaUIsOERBQVgsQ0FBbkI7O0FBQ0EsVUFBSXRSLEtBQUosRUFBVztBQUNUNE8sV0FBRyxDQUFDNEYsZ0JBQUosQ0FBcUIsZUFBckIsRUFBc0N4VSxLQUF0QztBQUNEOztBQUNENE8sU0FBRyxDQUFDNkYsSUFBSixDQUFTUixRQUFUO0FBQ0QsS0F2RE0sQ0FBUDtBQXdERDs7QUFFRGdELFFBQU0sQ0FDSjNtQixHQURJLEVBRUp5SCxJQUZJLEVBR0ovRCxPQUFpQyxHQUFHO0FBQ2xDeWYsY0FBVSxHQUFHLENBQUU7O0FBRG1CLEdBSGhDLEVBTXFCO0FBQ3pCLFVBQU1yUSxNQUFNLEdBQUdDLCtEQUFlLEVBQTlCO0FBQ0EsV0FBTyxJQUFJNUwsT0FBSixDQUFZLENBQUM2SSxPQUFELEVBQVVrTixNQUFWLEtBQXFCO0FBQ3RDLFlBQU1vQixHQUFHLEdBQUcsSUFBSStFLGNBQUosRUFBWjtBQUVBL0UsU0FBRyxDQUFDMkUsTUFBSixDQUFXSyxnQkFBWCxDQUE0QixVQUE1QixFQUF5Q3BvQixLQUFELElBQVc7QUFDakQsWUFBSUEsS0FBSyxDQUFDcW9CLGdCQUFWLEVBQTRCO0FBQzFCN2YsaUJBQU8sQ0FBQ3lmLFVBQVIsQ0FBbUI7QUFDakJLLHNCQUFVLEVBQUd0b0IsS0FBSyxDQUFDdW9CLE1BQU4sR0FBZXZvQixLQUFLLENBQUN3b0IsS0FBdEIsR0FBK0I7QUFEMUIsV0FBbkI7QUFHRDtBQUNGLE9BTkQ7QUFRQXBGLFNBQUcsQ0FBQ2dGLGdCQUFKLENBQXFCLE1BQXJCLEVBQTZCLE1BQU07QUFDakMsY0FBTTVuQixPQUFPLEdBQUc0aUIsR0FBRyxDQUFDeEssTUFBSixJQUFjLEdBQWQsSUFBcUJ3SyxHQUFHLENBQUN4SyxNQUFKLEdBQWEsR0FBbEQ7QUFDQSxjQUFNO0FBQUU0TjtBQUFGLFlBQWVwRCxHQUFyQjs7QUFDQSxZQUFJLENBQUM1aUIsT0FBTCxFQUFjO0FBQ1osaUJBQU93aEIsTUFBTSxDQUFDd0UsUUFBRCxDQUFiO0FBQ0Q7O0FBQ0QsZUFBTzFSLE9BQU8sQ0FBQzBSLFFBQUQsQ0FBZDtBQUNELE9BUEQ7QUFTQXBELFNBQUcsQ0FBQzJFLE1BQUosQ0FBV0ssZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsTUFBTTtBQUN6Q3BHLGNBQU0sQ0FBQ29CLEdBQUcsQ0FBQ29ELFFBQUwsQ0FBTjtBQUNELE9BRkQ7QUFJQSxZQUFNaUMsUUFBUSxHQUFHLElBQUlDLFFBQUosRUFBakIsQ0F4QnNDLENBeUJ0Qzs7QUFDQSxVQUFJbmMsSUFBSSxDQUFDdW9CLEtBQUwsSUFBY3ZvQixJQUFJLENBQUN1b0IsS0FBTCxDQUFXdmQsSUFBN0IsRUFBbUM7QUFDakMsY0FBTXVkLEtBQUssR0FBR3ZvQixJQUFJLENBQUN1b0IsS0FBTCxDQUFXdmQsSUFBWCxDQUFnQndLLGFBQTlCO0FBQ0EwRyxnQkFBUSxDQUFDRSxNQUFULENBQWdCLE9BQWhCLEVBQXlCbU0sS0FBekIsRUFBZ0NBLEtBQUssQ0FBQzF3QixJQUF0QztBQUNEOztBQUVELFVBQUltSSxJQUFJLENBQUN3b0IsT0FBTCxJQUFnQnhvQixJQUFJLENBQUN3b0IsT0FBTCxDQUFheGQsSUFBakMsRUFBdUM7QUFDckMsY0FBTXdkLE9BQU8sR0FBR3hvQixJQUFJLENBQUN3b0IsT0FBTCxDQUFheGQsSUFBYixDQUFrQndLLGFBQWxDO0FBQ0EwRyxnQkFBUSxDQUFDRSxNQUFULENBQWdCLFNBQWhCLEVBQTJCb00sT0FBM0IsRUFBb0NBLE9BQU8sQ0FBQzN3QixJQUE1QztBQUNEOztBQUVELFVBQUltSSxJQUFJLENBQUN5b0IsU0FBTCxJQUFrQnpvQixJQUFJLENBQUN5b0IsU0FBTCxDQUFlemQsSUFBckMsRUFBMkM7QUFDekMsY0FBTXlkLFNBQVMsR0FBR3pvQixJQUFJLENBQUN5b0IsU0FBTCxDQUFlemQsSUFBZixDQUFvQndLLGFBQXRDO0FBQ0EwRyxnQkFBUSxDQUFDRSxNQUFULENBQWdCLFdBQWhCLEVBQTZCcU0sU0FBN0IsRUFBd0NBLFNBQVMsQ0FBQzV3QixJQUFsRDtBQUNEOztBQUVEcEQsWUFBTSxDQUFDcU4sSUFBUCxDQUFZa2IsbURBQUksQ0FBQ2hkLElBQUQsRUFBTyxDQUFDLE9BQUQsRUFBVSxXQUFWLEVBQXVCLFNBQXZCLENBQVAsQ0FBaEIsRUFBMkQ2TyxPQUEzRCxDQUFvRXlDLENBQUQsSUFBTztBQUN4RTRLLGdCQUFRLENBQUNFLE1BQVQsQ0FBZ0I5SyxDQUFoQixFQUFtQnRSLElBQUksQ0FBQ3NSLENBQUQsQ0FBdkI7QUFDRCxPQUZEO0FBSUF1RixTQUFHLENBQUMwRixZQUFKLEdBQW1CLE1BQW5CO0FBQ0ExRixTQUFHLENBQUMyRixJQUFKLENBQVMsS0FBVCxFQUFnQnhMLHlEQUFLLENBQUN6WSxHQUFELENBQUwsR0FBYUEsR0FBYixHQUFvQixHQUFFOFMsTUFBTSxDQUFDd1Asd0JBQXlCLEdBQUV0aUIsR0FBSSxFQUE1RTtBQUVBLFlBQU0wUCxLQUFVLEdBQUcwUyxnREFBTSxDQUFDOWpCLEdBQVAsQ0FBVzBpQiw4REFBWCxDQUFuQjs7QUFDQSxVQUFJdFIsS0FBSixFQUFXO0FBQ1Q0TyxXQUFHLENBQUM0RixnQkFBSixDQUFxQixlQUFyQixFQUFzQ3hVLEtBQXRDO0FBQ0Q7O0FBQ0Q0TyxTQUFHLENBQUM2RixJQUFKLENBQVNSLFFBQVQ7QUFDRCxLQXJETSxDQUFQO0FBc0REOztBQUVEK0csY0FBWSxDQUFDbFIsRUFBRCxFQUFhO0FBQ3ZCLFdBQU8sS0FBS3NKLElBQUwsQ0FBVyxpQ0FBZ0N0SixFQUFHLFdBQTlDLENBQVA7QUFDRCxHQS9KMEMsQ0FpSzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EyVyxtQkFBaUIsQ0FBQzNXLEVBQUQsRUFBYTdGLE9BQU8sR0FBRyxFQUF2QixFQUEyQjtBQUMxQyxXQUFPLEtBQUtyVixHQUFMLENBQVUsaUNBQWdDa2IsRUFBRyxFQUE3QyxFQUFnRDdGLE9BQWhELENBQVA7QUFDRDs7QUF6SzBDO0FBNEt0QyxNQUFNeWMsWUFBWSxHQUFHLElBQUlQLFlBQUosRUFBckIsQzs7Ozs7Ozs7Ozs7QUNwTFAsaUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEscUMiLCJmaWxlIjoicGFnZXMvYXV0aC9sb2dpbi91c2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hdXRoL2xvZ2luL3VzZXIudHN4XCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3cgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0J1xuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgcCAmJlxuICAgICAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiZcbiAgICAgIGNoaWxkRWxtICYmXG4gICAgICBjaGlsZEVsbS50YWdOYW1lICYmXG4gICAgICBpc0xvY2FsVVJMKGhyZWYpXG4gICAgKSB7XG4gICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICByZXR1cm4gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGNoaWxkRWxtLCAoKSA9PiB7XG4gICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwLCBjaGlsZEVsbSwgaHJlZiwgYXMsIHJvdXRlcl0pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShhcywgcm91dGVyICYmIHJvdXRlci5sb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSlcbiAgICApXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIiArIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICovXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSRcIiwgcmVGbGFncyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25hbCA9IHRva2VuLm1vZGlmaWVyID09PSBcIj9cIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIitcIjtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIGJlIFwiICsgdHlwZU9mTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbn1cbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaChzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWF0Y2ggPSBtYXRjaDtcbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIW0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgICAgICAgICBpZiAoa2V5Lm1vZGlmaWVyID09PSBcIipcIiB8fCBrZXkubW9kaWZpZXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LnByZWZpeCArIGtleS5zdWZmaXgpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvbjtcbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xuICAgIGlmICgha2V5cylcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG4gICAgaWYgKGdyb3Vwcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpLFxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnRzID0gcGF0aHMubWFwKGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlOyB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlwiICsgcGFydHMuam9pbihcInxcIikgKyBcIilcIiwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IHRva2Vuc1RvUmVnZXhwO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpXG4gICAgICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gcGF0aFRvUmVnZXhwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuaW1wb3J0IGVzY2FwZVBhdGhEZWxpbWl0ZXJzIGZyb20gJy4vdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycydcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSB8fCAnLydcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSkubWFwKGVzY2FwZVBhdGhEZWxpbWl0ZXJzKS5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlc2NhcGVQYXRoRGVsaW1pdGVycyh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrTG9hZGluZ0Vycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzOiBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgY29uc3QgeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLnByb21pc2VkQnVpbGRNYW5pZmVzdFxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGxldCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUykge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgcGFyc2VSZWxhdGl2ZVVybChhcykucGF0aG5hbWUsXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSFcbiAgICAgIClcblxuICAgICAgaWYgKHJlc29sdmVkQXMgIT09IGFzKSB7XG4gICAgICAgIGNvbnN0IHBvdGVudGlhbEhyZWYgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZCwgeyBwYXRobmFtZTogcmVzb2x2ZWRBcyB9KSxcbiAgICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICApLnBhdGhuYW1lIVxuICAgICAgICApXG5cbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocG90ZW50aWFsSHJlZikpIHtcbiAgICAgICAgICByb3V0ZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXRobmFtZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmIChcbiAgICAgICAgKF9fTl9TU0cgfHwgX19OX1NTUCkgJiZcbiAgICAgICAgcHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcbiAgICAgICkge1xuICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWRIcmVmLCBwYWdlcylcblxuICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKFxuICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICB1cmwsXG4gICAgICAgIGFkZExvY2FsZShhcywgdGhpcy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSksXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAnL19lcnJvcidcbiAgICAgIClcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgIH0gYXMgYW55KVxuICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdLCBhcHBseUJhc2VQYXRoID0gdHJ1ZSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGFwcGx5QmFzZVBhdGggPyBkZWxCYXNlUGF0aChwYXRobmFtZSEpIDogcGF0aG5hbWUhKVxuICAgIClcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhcHBseUJhc2VQYXRoID8gYWRkQmFzZVBhdGgocGFnZSkgOiBwYWdlXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKFxuICAgICAgICB1cmwsXG4gICAgICAgIGFzUGF0aCxcbiAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gZXNjYXBlIGRlbGltaXRlcnMgdXNlZCBieSBwYXRoLXRvLXJlZ2V4cFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXNjYXBlUGF0aERlbGltaXRlcnMoc2VnbWVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNlZ21lbnQucmVwbGFjZSgvWy8jP10vZywgKGNoYXI6IHN0cmluZykgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGNoYXIpKVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihtYXRjaGVyUmVnZXgsIGtleXMpXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWBcbiAgICAgIGNvbnN0IHF1ZXJ5Q29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZSh2YWx1ZSwgeyB2YWxpZGF0ZTogZmFsc2UgfSlcbiAgICAgIHZhbHVlID0gcXVlcnlDb21waWxlcihwYXJhbXMpLnN1YnN0cigxKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZGVzdGluYXRpb25Db21waWxlcihcbiAgICAgIHBhcmFtc1xuICAgICl9YFxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5pbXBvcnQgeyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4uLy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goYXNQYXRoKSkpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGFzUGF0aClcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIEhlYWRFbnRyeSA9IFtzdHJpbmcsIHsgW2tleTogc3RyaW5nXTogYW55IH1dXG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBoZWFkOiBIZWFkRW50cnlbXVxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgRm9ybUxvZ2luIGZyb20gJ0Bjb21wb25lbnRzL2F1dGgvbG9naW4vdXNlci1sb2dpbi1mb3JtJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBsb2dpbiwgcmVzZXRMb2dpbkRhdGEgfSBmcm9tICdAcmVkdXgvYXV0aC9hY3Rpb25zJztcbmltcG9ydCB7IElMb2dpbiwgSVVJQ29uZmlnIH0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgRm9ybVJlZ2lzdGVyUGxhY2VIb2xkZXIgfSBmcm9tICdAY29tcG9uZW50cy9jb21tb24vbGF5b3V0JztcbmltcG9ydCAnLi4vaW5kZXgubGVzcyc7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICByZXF1ZXN0aW5nOiBib29sZWFuO1xuICBzdWNjZXNzOiBib29sZWFuO1xuICBlcnJvcjogYW55O1xuICB1aTogSVVJQ29uZmlnO1xuICBkYXRhOiBhbnk7XG4gIGxvZ2luOiBGdW5jdGlvbjtcbiAgcmVzZXRMb2dpbkRhdGE6IEZ1bmN0aW9uO1xufVxuXG5jbGFzcyBMb2dpbiBleHRlbmRzIFB1cmVDb21wb25lbnQ8SVByb3BzPiB7XG4gIHN0YXRpYyBsYXlvdXQ6IHN0cmluZyA9ICdhdXRoJztcblxuICBzdGF0aWMgYXV0aGVudGljYXRlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcmVtZW1iZXJNZSA9IGZhbHNlO1xuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IHsgcmVzZXRMb2dpbkRhdGE6IGRpc3BhdGNoUmVzZXQgfSA9IHRoaXMucHJvcHM7XG4gICAgZGlzcGF0Y2hSZXNldCgpO1xuICB9XG5cbiAgc3VibWl0ID0gKGRhdGE6IElMb2dpbikgPT4ge1xuICAgIGNvbnN0IHsgbG9naW46IGRpc3BhdGNoTG9naW4gfSA9IHRoaXMucHJvcHM7XG4gICAgZGlzcGF0Y2hMb2dpbih7XG4gICAgICAuLi5kYXRhLFxuICAgICAgcmVtZW1iZXI6IHRoaXMucmVtZW1iZXJNZVxuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICByZXF1ZXN0aW5nLCBlcnJvciwgc3VjY2VzcywgdWlcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPlVzZXIgc2lnbi1pbjwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci1wYWdlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXJlZ2lzdGVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPEZvcm1Mb2dpblxuICAgICAgICAgICAgICBzaW5ndWxhclRleHRNb2RlbD17dWk/LnNpbmd1bGFyVGV4dE1vZGVsIHx8ICdQZXJmb3JtZXInfVxuICAgICAgICAgICAgICByZXF1ZXN0aW5nPXtyZXF1ZXN0aW5nfVxuICAgICAgICAgICAgICBzdWJtaXQ9e3RoaXMuc3VibWl0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgIG9uUmVtZW1iZXI9eyh2YWx1ZSkgPT4geyB0aGlzLnJlbWVtYmVyTWUgPSB2YWx1ZTsgfX1cbiAgICAgICAgICAgICAgZXJyb3I9e2Vycm9yfVxuICAgICAgICAgICAgICBzdWNjZXNzPXtzdWNjZXNzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Rm9ybVJlZ2lzdGVyUGxhY2VIb2xkZXIgdWk9e3VpfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVzID0gKHN0YXRlOiBhbnkpID0+ICh7XG4gIC4uLnN0YXRlLmF1dGgudXNlckxvZ2luLFxuICB1aTogc3RhdGUudWlcbn0pO1xuY29uc3QgbWFwRGlzcGF0Y2ggPSB7IGxvZ2luLCByZXNldExvZ2luRGF0YSB9O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZXMsIG1hcERpc3BhdGNoKShMb2dpbik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IEZvcm0sIFJvdywgQ29sIH0gZnJvbSAnYW50ZCc7XG5cbmNvbnN0IHsgSXRlbTogRm9ybUl0ZW0gfSA9IEZvcm07XG5cbmludGVyZmFjZSBQIHtcbiAgYWNjb3VudDogJ3VzZXInIHwgJ3BlcmZvcm1lcicgfCAnc3R1ZGlvJyxcbiAgc2luZ3VsYXJUZXh0TW9kZWw/OiBzdHJpbmc7XG59XG5cbmNvbnN0IEZvcm1Gb290ZXJMb2dpbiA9ICh7IGFjY291bnQsIHNpbmd1bGFyVGV4dE1vZGVsIH06IFApID0+IChcbiAgPFJvdz5cbiAgICA8Q29sIHNwYW49ezI0fT5cbiAgICAgIHthY2NvdW50ICE9PSAnc3R1ZGlvJyAmJiBhY2NvdW50ID09PSAndXNlcicgPyAoXG4gICAgICAgIDxGb3JtSXRlbT5cbiAgICAgICAgICBXYW50IHRvIGJlIGEgTWVtYmVyP1xuICAgICAgICAgIHsnICd9XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9hdXRoL3JlZ2lzdGVyL3VzZXJcIj5cbiAgICAgICAgICAgIDxhPlNpZ251cCBoZXJlPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgIClcbiAgICAgICAgOiBhY2NvdW50ID09PSAncGVyZm9ybWVyJyAmJiAoXG4gICAgICAgIDxGb3JtSXRlbT5cbiAgICAgICAgICBXYW50IHRvIGJlIGFcbiAgICAgICAgICB7JyAnfVxuICAgICAgICAgIHtzaW5ndWxhclRleHRNb2RlbCB8fCAnUGVyZm9ybWVyJ31cbiAgICAgICAgICA/XG4gICAgICAgICAgeycgJ31cbiAgICAgICAgICA8TGluayBocmVmPVwiL2F1dGgvcmVnaXN0ZXIvbW9kZWxcIj5cbiAgICAgICAgICAgIDxhPlNpZ251cCBoZXJlPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgICAgKX1cbiAgICAgIHthY2NvdW50ID09PSAnc3R1ZGlvJyAmJiAoXG4gICAgICA8Rm9ybUl0ZW0+XG4gICAgICAgIHsnRG9uXFwndCBoYXZlIGFjY291bnQgeWV0PyAnfVxuICAgICAgICA8TGluayBocmVmPVwiL3N0dWRpby9yZWdpc3RlclwiPlxuICAgICAgICAgIDxhPlNpZ251cCBub3c8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICApfVxuICAgIDwvQ29sPlxuICAgIDxDb2wgc3Bhbj17MjR9PlxuICAgICAge2FjY291bnQgPT09ICd1c2VyJyAmJiAoXG4gICAgICA8Rm9ybUl0ZW0+XG4gICAgICAgIEFyZSB5b3UgYVxuICAgICAgICB7JyAnfVxuICAgICAgICB7c2luZ3VsYXJUZXh0TW9kZWwgfHwgJ1BlcmZvcm1lcid9XG4gICAgICAgID9cbiAgICAgICAgeycgJ31cbiAgICAgICAgPExpbmsgaHJlZj1cIi9hdXRoL2xvZ2luL3BlcmZvcm1lclwiPlxuICAgICAgICAgIDxhPkxvZ2luIGhlcmU8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICApfVxuICAgICAge2FjY291bnQgPT09ICdwZXJmb3JtZXInICYmIChcbiAgICAgIDxGb3JtSXRlbT5cbiAgICAgICAgQXJlIHlvdSBhIE1lbWJlcj9cbiAgICAgICAgeycgJ31cbiAgICAgICAgPExpbmsgaHJlZj1cIi9hdXRoL2xvZ2luL3VzZXJcIj5cbiAgICAgICAgICA8YT5Mb2dpbiBoZXJlPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L0Zvcm1JdGVtPlxuICAgICAgKX1cbiAgICA8L0NvbD5cbiAgPC9Sb3c+XG4pO1xuRm9ybUZvb3RlckxvZ2luLmRlZmF1bHRQcm9wcyA9IHtcbiAgc2luZ3VsYXJUZXh0TW9kZWw6ICdQZXJmb3JtZXInXG59O1xuZXhwb3J0IGRlZmF1bHQgRm9ybUZvb3RlckxvZ2luO1xuIiwiaW1wb3J0IHsgY3JlYXRlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBJTG9naW4gfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQge1xuICBGb3JtLCBJbnB1dCwgQnV0dG9uLCBTcGFjZSwgQ2hlY2tib3gsIEFsZXJ0LCBtZXNzYWdlXG59IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgZ2V0UmVzcG9uc2VFcnJvciB9IGZyb20gJ0BsaWIvdXRpbHMnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVwZGF0ZVVJVmFsdWUgfSBmcm9tICdzcmMvcmVkdXgvdWkvYWN0aW9ucyc7XG5pbXBvcnQgeyB1dGlsc1NlcnZpY2UgfSBmcm9tICdAc2VydmljZXMvaW5kZXgnO1xuaW1wb3J0IHsgUmVDQVBUQ0hBIH0gZnJvbSAncmVhY3QtZ29vZ2xlLXJlY2FwdGNoYSc7XG5pbXBvcnQgUmVjYXB0Y2hhIGZyb20gJ3NyYy9jb21wb25lbnRzL2NvbW1vbi9yZWNhcHRjaGEnO1xuaW1wb3J0IEZvcm1Gb290ZXJMb2dpbiBmcm9tICcuL2Zvb3Rlci1sb2dpbi1mb3JtJztcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHJlcXVlc3Rpbmc6IGJvb2xlYW47XG4gIHN1Ym1pdChkYXRhOiBJTG9naW4pOiBGdW5jdGlvbjtcbiAgZXJyb3I6IGFueTtcbiAgc3VjY2VzczogYm9vbGVhbjtcbiAgb25SZW1lbWJlcjogRnVuY3Rpb247XG4gIHNpbmd1bGFyVGV4dE1vZGVsOiBzdHJpbmc7XG4gIGdvb2dsZVJlQ2FwdGNoYUVuYWJsZWQ/OiBib29sZWFuO1xuICBnb29nbGVSZUNhcHRjaGFTaXRlS2V5Pzogc3RyaW5nO1xufVxuXG5jb25zdCBGb3JtSXRlbSA9IEZvcm0uSXRlbTtcblxuY29uc3QgTG9naW5Gb3JtID0gKHtcbiAgcmVxdWVzdGluZyxcbiAgc3VibWl0LFxuICBlcnJvcixcbiAgc3VjY2VzcyxcbiAgb25SZW1lbWJlcixcbiAgc2luZ3VsYXJUZXh0TW9kZWwsXG4gIGdvb2dsZVJlQ2FwdGNoYUVuYWJsZWQsXG4gIGdvb2dsZVJlQ2FwdGNoYVNpdGVLZXlcbn06IElQcm9wcykgPT4ge1xuICBjb25zdCByZUNBUFRDSEFSZWYgPSBjcmVhdGVSZWY8UmVDQVBUQ0hBPigpO1xuICBjb25zdCBbcmVDQVBUQ0hBRXJyb3IsIHNldHJlQ0FQVENIQUVycm9yXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2Zvcm1dID0gRm9ybS51c2VGb3JtKCk7XG4gIGNvbnN0IG9uUHJlc3NFbnRlciA9ICgpID0+IHtcbiAgICBmb3JtLnN1Ym1pdCgpO1xuICB9O1xuXG4gIGNvbnN0IG9uRmluaXNoID0gYXN5bmMgKGRhdGE6IElMb2dpbikgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAoZ29vZ2xlUmVDYXB0Y2hhRW5hYmxlZCkge1xuICAgICAgICBjb25zdCB0b2tlbiA9IHJlQ0FQVENIQVJlZi5jdXJyZW50LmdldFZhbHVlKCk7XG4gICAgICAgIC8vIGNvbnN0IHRva2VuID0gYXdhaXQgcmVDQVBUQ0hBUmVmLmN1cnJlbnQuZXhlY3V0ZUFzeW5jKCk7XG4gICAgICAgIGlmICghdG9rZW4pIHtcbiAgICAgICAgICBzZXRyZUNBUFRDSEFFcnJvcignUGxlYXNlIHZlcmlmeSB0aGF0IHlvdSBhcmUgbm90IGEgcm9ib3QuJyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVDQVBUQ0hBUmVmLmN1cnJlbnQucmVzZXQoKTtcbiAgICAgICAgc2V0cmVDQVBUQ0hBRXJyb3IoJycpO1xuICAgICAgICBhd2FpdCB1dGlsc1NlcnZpY2UudmVyaWZ5UmVjYXB0Y2hhKHRva2VuKTtcbiAgICAgIH1cblxuICAgICAgc3VibWl0KGRhdGEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChnb29nbGVSZUNhcHRjaGFFbmFibGVkICYmIHJlQ0FQVENIQVJlZi5jdXJyZW50LmdldFZhbHVlKCkpIHtcbiAgICAgICAgcmVDQVBUQ0hBUmVmLmN1cnJlbnQucmVzZXQoKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZXJyID0gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGUpO1xuICAgICAgbWVzc2FnZS5lcnJvcihnZXRSZXNwb25zZUVycm9yKGVycikpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtIGxheW91dD1cInZlcnRpY2FsXCIgb25GaW5pc2g9e29uRmluaXNofT5cbiAgICAgIDxoMT5Vc2VyIFNpZ24taW48L2gxPlxuICAgICAgPEZvcm1JdGVtXG4gICAgICAgIGhhc0ZlZWRiYWNrXG4gICAgICAgIGxhYmVsPVwiRW1haWxcIlxuICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICBydWxlcz17W1xuICAgICAgICAgIHsgdHlwZTogJ2VtYWlsJywgbWVzc2FnZTogJ1RoZSBpbnB1dCBpcyBub3QgdmFsaWQgRS1tYWlsIScgfSxcbiAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnUGxlYXNlIGlucHV0IHlvdXIgZW1haWwhJyB9XG4gICAgICAgIF19XG4gICAgICA+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIG9uUHJlc3NFbnRlcj17b25QcmVzc0VudGVyfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwieW91cmVtYWlsQGV4YW1wbGUuY29tXCJcbiAgICAgICAgLz5cbiAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICA8Rm9ybUl0ZW1cbiAgICAgICAgaGFzRmVlZGJhY2tcbiAgICAgICAgbGFiZWw9eyhcbiAgICAgICAgICA8U3BhY2U+XG4gICAgICAgICAgICA8c3Bhbj5QYXNzd29yZDwvc3Bhbj5cbiAgICAgICAgICA8L1NwYWNlPlxuICAgICAgICApfVxuICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC1wYXNzd29yZFwiXG4gICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgIHJ1bGVzPXtbXG4gICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ1BsZWFzZSBpbnB1dCB5b3VyIHBhc3N3b3JkIScgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBtaW46IDYsXG4gICAgICAgICAgICBtYXg6IDE0LFxuICAgICAgICAgICAgbWVzc2FnZTogJzYtMTQgY2hhcmFjdGVycydcbiAgICAgICAgICB9XG4gICAgICAgIF19XG4gICAgICA+XG4gICAgICAgIDxJbnB1dC5QYXNzd29yZFxuICAgICAgICAgIG9uUHJlc3NFbnRlcj17b25QcmVzc0VudGVyfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAvPlxuICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgIDxGb3JtSXRlbT5cbiAgICAgICAgPFJlY2FwdGNoYVxuICAgICAgICAgIHJlZj17cmVDQVBUQ0hBUmVmfVxuICAgICAgICAgIGdvb2dsZVJlQ2FwdGNoYUVuYWJsZWQ9e2dvb2dsZVJlQ2FwdGNoYUVuYWJsZWR9XG4gICAgICAgICAgZ29vZ2xlUmVDYXB0Y2hhU2l0ZUtleT17Z29vZ2xlUmVDYXB0Y2hhU2l0ZUtleX1cbiAgICAgICAgICBlcnJvcj17cmVDQVBUQ0hBRXJyb3J9XG4gICAgICAgIC8+XG4gICAgICA8L0Zvcm1JdGVtPlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgbWFyZ2luOiAnMTVweCAwJ1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8Q2hlY2tib3ggb25DaGFuZ2U9eyhlKSA9PiBvblJlbWVtYmVyKGUudGFyZ2V0LmNoZWNrZWQpfT5cbiAgICAgICAgICBSZW1lbWJlciBtZVxuICAgICAgICA8L0NoZWNrYm94PlxuICAgICAgICA8TGluayBocmVmPVwiL2F1dGgvZm9yZ290LXBhc3N3b3JkXCI+XG4gICAgICAgICAgPGE+Rm9yZ290IHBhc3N3b3JkPzwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICB7KGVycm9yIHx8IHN1Y2Nlc3MpICYmIChcbiAgICAgICAgPEZvcm1JdGVtPlxuICAgICAgICAgIHtlcnJvciAmJiAoXG4gICAgICAgICAgICA8QWxlcnRcbiAgICAgICAgICAgICAgbWVzc2FnZT1cIkVycm9yXCJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1xuICAgICAgICAgICAgICAgIGVycm9yLm1lc3NhZ2UgJiYgZXJyb3IubWVzc2FnZSA9PT0gJ0FDQ09VTlRfSU5BQ1RJVkUnXG4gICAgICAgICAgICAgICAgICA/ICdZb3UgZG8gbm90IGhhdmUgcGVybWlzc2lvbidcbiAgICAgICAgICAgICAgICAgIDogZ2V0UmVzcG9uc2VFcnJvcihlcnJvcilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0eXBlPVwiZXJyb3JcIlxuICAgICAgICAgICAgICBzaG93SWNvblxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtzdWNjZXNzICYmIChcbiAgICAgICAgICAgIDxBbGVydFxuICAgICAgICAgICAgICBtZXNzYWdlPVwiTG9naW4gc3VjY2Vzc1wiXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWNjZXNzXCJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJSZWRpcmVjdGluZy4uLlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICApfVxuICAgICAgPEZvcm1JdGVtIGNsYXNzTmFtZT1cInJvdy1idXR0b24tYXV0aFwiPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgIGh0bWxUeXBlPVwic3VibWl0XCJcbiAgICAgICAgICBkaXNhYmxlZD17cmVxdWVzdGluZ31cbiAgICAgICAgICBsb2FkaW5nPXtyZXF1ZXN0aW5nfVxuICAgICAgICA+XG4gICAgICAgICAgU2lnbi1pblxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICA8Rm9ybUZvb3RlckxvZ2luIGFjY291bnQ9XCJ1c2VyXCIgc2luZ3VsYXJUZXh0TW9kZWw9e3Npbmd1bGFyVGV4dE1vZGVsfSAvPlxuICAgIDwvRm9ybT5cbiAgKTtcbn07XG5jb25zdCBtYXBTdGF0ZXMgPSAoc3RhdGU6IGFueSkgPT4gKHtcbiAgLi4uc3RhdGUudWlcbn0pO1xuY29uc3QgbWFwRGlzcGF0Y2ggPSB7IHVwZGF0ZVVJVmFsdWUgfTtcbkxvZ2luRm9ybS5kZWZhdWx0UHJvcHMgPSB7XG4gIGdvb2dsZVJlQ2FwdGNoYUVuYWJsZWQ6IGZhbHNlLFxuICBnb29nbGVSZUNhcHRjaGFTaXRlS2V5OiAnJ1xufTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVzLCBtYXBEaXNwYXRjaCkoTG9naW5Gb3JtKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJVUlDb25maWcgfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5cbmludGVyZmFjZSBQIHtcbiAgdWk6IElVSUNvbmZpZztcbn1cblxuZXhwb3J0IGNvbnN0IEZvcm1SZWdpc3RlclBsYWNlSG9sZGVyID0gKHsgdWkgfTogUCkgPT4gKFxuICA8ZGl2XG4gICAgY2xhc3NOYW1lPVwiZm9ybS1yZWdpc3Rlci1wbGFjZWhvbGRlclwiXG4gICAgc3R5bGU9e1xuICAgICAgdWk/LnBsYWNlaG9sZGVyTG9naW5VcmxcbiAgICAgICAgPyB7IGJhY2tncm91bmRJbWFnZTogYHVybCgke3VpLnBsYWNlaG9sZGVyTG9naW5Vcmx9KWAgfVxuICAgICAgICA6IHt9XG4gICAgfVxuICAvPlxuKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vZm9ybS1yZWdpc3Rlci1wbGFjZWhvbGRlcic7XG5leHBvcnQgKiBmcm9tICcuL3BvcHVwLTE4cGx1cy1jb250ZW50JztcbiIsImltcG9ydCAnLi9wb3B1cC0xOHBsdXMtY29udGVudC5sZXNzJztcblxuZXhwb3J0IGZ1bmN0aW9uIFBvcHVwMThQbHVzQ29udGVudCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb25maXJtYWdlX19oZWFkZXIgdGV4dC1jZW50ZXJcIj5ZT1UgTVVTVCBCRSBPVkVSIDE4IEFORCBBR1JFRSBUTyBUSEUgVEVSTVMgQkVMT1cgQkVGT1JFIENPTlRJTlVJTkc6PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbmZpcm1hZ2VfX2Rlc2NyaXB0aW9uIHRleHQtY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Nyb2xsXCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBZb3UgYWxzbyBhZ3JlZSB0byBzaGFyZSB5b3VyIGluZm9ybWF0aW9uIHdpdGggRHVvZGVjYWQgSVRTIExlYXJuIE1vcmVcbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgWW91IGFsc28gYWdyZWUgdG8gc2hhcmUgaW5mb3JtYXRpb24gd2l0aCBEdW9kZWNhZCBJVFMgYmVjYXVzZSB0aGUgd2Vic2l0ZSB3aWxsIG5vdCB3b3JrIHByb3Blcmx5IHdpdGhvdXQgdGhpcyBhZ3JlZW1lbnQuXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIEFuIGltcG9ydGFudCBwYXJ0IG9mIHRoZSBjYW0gbWF0ZXJpYWwgaXMgcHJvdmlkZWQgYnkgRHVvZGVjYWQgSVRTOlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBUaGUgcHJvZmlsZXMgY29udGVudCBhbmQgcGhvdG9ncmFwaHNcbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgVGhlIHBsYXllciBhbmQgaGlzIGZ1bmN0aW9uYWxpdGllc1xuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBUaGUgcGF5bWVudCBwcm9jZXNzb3JcbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgLi4uXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIFRoZXJlZm9yZSwgZXZlcnkgcGFnZSBpcyBkZXBlbmRpbmcgb24gRHVvZGVjYWQgSVRTIGFuZCBjYW7igJl0IGJlIGRpc3NvY2lhdGVkIHdpdGggKHVzZXJzIFVSTCkgc2VydmljZS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBUaGlzIHdlYnNpdGUgY29udGFpbnMgaW5mb3JtYXRpb24sIGxpbmtzLCBpbWFnZXMgYW5kIHZpZGVvcyBvZiBzZXh1YWxseSBleHBsaWNpdCBtYXRlcmlhbCAoY29sbGVjdGl2ZWx5LCB0aGUgJnF1b3Q7U2V4dWFsbHkgRXhwbGljaXQgTWF0ZXJpYWwmcXVvdDspLiBEbyBOT1QgY29udGludWUgaWY6IChpKSB5b3UgYXJlIG5vdCBhdCBsZWFzdCAxOCB5ZWFycyBvZiBhZ2Ugb3IgdGhlIGFnZSBvZiBtYWpvcml0eSBpbiBlYWNoIGFuZCBldmVyeSBqdXJpc2RpY3Rpb24gaW4gd2hpY2ggeW91IHdpbGwgb3IgbWF5IHZpZXcgdGhlIFNleHVhbGx5IEV4cGxpY2l0IE1hdGVyaWFsLCB3aGljaGV2ZXIgaXMgaGlnaGVyICh0aGUgJnF1b3Q7QWdlIG9mIE1ham9yaXR5JnF1b3Q7KSwgKGlpKSBzdWNoIG1hdGVyaWFsIG9mZmVuZHMgeW91LCBvciAoaWlpKSB2aWV3aW5nIHRoZSBTZXh1YWxseSBFeHBsaWNpdCBNYXRlcmlhbCBpcyBub3QgbGVnYWwgaW4gZWFjaCBhbmQgZXZlcnkgY29tbXVuaXR5IHdoZXJlIHlvdSBjaG9vc2UgdG8gdmlldyBpdC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBCeSBjaG9vc2luZyB0byBlbnRlciB0aGlzIHdlYnNpdGUgeW91IGFyZSBhZmZpcm1pbmcgdW5kZXIgb2F0aCBhbmQgcGVuYWx0aWVzIG9mIHBlcmp1cnkgcHVyc3VhbnQgdG8gVGl0bGUgMjggVS5TLkMuIMKnIDE3NDYgYW5kIG90aGVyIGFwcGxpY2FibGUgc3RhdHV0ZXMgYW5kIGxhd3MgdGhhdCBhbGwgb2YgdGhlIGZvbGxvd2luZyBzdGF0ZW1lbnRzIGFyZSB0cnVlIGFuZCBjb3JyZWN0OlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+SSBoYXZlIGF0dGFpbmVkIHRoZSBBZ2Ugb2YgTWFqb3JpdHkgaW4gbXkganVyaXNkaWN0aW9uOzwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIFRoZSBzZXh1YWxseSBleHBsaWNpdCBtYXRlcmlhbCBJIGFtIHZpZXdpbmcgaXMgZm9yIG15IG93biBwZXJzb25hbCB1c2UgYW5kIEkgd2lsbCBub3QgZXhwb3NlIGFueSBtaW5vcnMgdG8gdGhlIG1hdGVyaWFsO1xuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5JIGRlc2lyZSB0byByZWNlaXZlL3ZpZXcgc2V4dWFsbHkgZXhwbGljaXQgbWF0ZXJpYWw7PC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgSSBiZWxpZXZlIHRoYXQgYXMgYW4gYWR1bHQgaXQgaXMgbXkgaW5hbGllbmFibGUgY29uc3RpdHV0aW9uYWwgcmlnaHQgdG8gcmVjZWl2ZS92aWV3IHNleHVhbGx5IGV4cGxpY2l0IG1hdGVyaWFsO1xuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgSSBiZWxpZXZlIHRoYXQgc2V4dWFsIGFjdHMgYmV0d2VlbiBjb25zZW50aW5nIGFkdWx0cyBhcmUgbmVpdGhlciBvZmZlbnNpdmUgbm9yIG9ic2NlbmU7XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICBUaGUgdmlld2luZywgcmVhZGluZyBhbmQgZG93bmxvYWRpbmcgb2Ygc2V4dWFsbHkgZXhwbGljaXQgbWF0ZXJpYWxzIGRvZXMgbm90IHZpb2xhdGUgdGhlIHN0YW5kYXJkcyBvZiBhbnkgY29tbXVuaXR5LCB0b3duLCBjaXR5LCBzdGF0ZSBvciBjb3VudHJ5IHdoZXJlIEkgd2lsbCBiZSB2aWV3aW5nLCByZWFkaW5nIGFuZC9vciBkb3dubG9hZGluZyB0aGUgU2V4dWFsbHkgRXhwbGljaXQgTWF0ZXJpYWxzO1xuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgSSBhbSBzb2xlbHkgcmVzcG9uc2libGUgZm9yIGFueSBmYWxzZSBkaXNjbG9zdXJlcyBvciBsZWdhbCByYW1pZmljYXRpb25zIG9mIHZpZXdpbmcsIHJlYWRpbmcgb3IgZG93bmxvYWRpbmcgYW55IG1hdGVyaWFsIGFwcGVhcmluZyBvbiB0aGlzIHNpdGUuIEkgZnVydGhlciBhZ3JlZSB0aGF0IG5laXRoZXIgdGhpcyB3ZWJzaXRlIG5vciBpdHMgYWZmaWxpYXRlcyB3aWxsIGJlIGhlbGQgcmVzcG9uc2libGUgZm9yIGFueSBsZWdhbCByYW1pZmljYXRpb25zIGFyaXNpbmcgZnJvbSBhbnkgZnJhdWR1bGVudCBlbnRyeSBpbnRvIG9yIHVzZSBvZiB0aGlzIHdlYnNpdGU7XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICBJIHVuZGVyc3RhbmQgdGhhdCBteSB1c2Ugb2YgdGhpcyB3ZWJzaXRlIGlzIGdvdmVybmVkIGJ5IHRoZSB3ZWJzaXRlJmFwb3M7c1xuICAgICAgICAgICAgICA8YSBocmVmPVwiL3BhZ2UvdGVybXMtYW5kLWNvbmRpdGlvbnNcIj5UZXJtczwvYT5cbiAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgd2hpY2ggSSBoYXZlIHJldmlld2VkIGFuZCBhY2NlcHRlZCwgYW5kIEkgYWdyZWUgdG8gYmUgYm91bmQgYnkgc3VjaCBUZXJtcy5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIEkgYWdyZWUgdGhhdCBieSBlbnRlcmluZyB0aGlzIHdlYnNpdGUsIEkgYW0gc3ViamVjdGluZyBteXNlbGYsIGFuZCBhbnkgYnVzaW5lc3MgZW50aXR5IGluIHdoaWNoIEkgaGF2ZSBhbnkgbGVnYWwgb3IgZXF1aXRhYmxlIGludGVyZXN0LCB0byB0aGUgcGVyc29uYWwganVyaXNkaWN0aW9uIG9mIHRoZSBTdGF0ZSBvZiBGbG9yaWRhLCBNaWFtaS1EYWRlIENvdW50eSwgc2hvdWxkIGFueSBkaXNwdXRlIGFyaXNlIGF0IGFueSB0aW1lIGJldHdlZW4gdGhpcyB3ZWJzaXRlLCBteXNlbGYgYW5kL29yIHN1Y2ggYnVzaW5lc3MgZW50aXR5O1xuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgVGhpcyB3YXJuaW5nIHBhZ2UgY29uc3RpdHV0ZXMgYSBsZWdhbGx5IGJpbmRpbmcgYWdyZWVtZW50IGJldHdlZW4gbWUsIHRoaXMgd2Vic2l0ZSBhbmQvb3IgYW55IGJ1c2luZXNzIGluIHdoaWNoIEkgaGF2ZSBhbnkgbGVnYWwgb3IgZXF1aXRhYmxlIGludGVyZXN0LiBJZiBhbnkgcHJvdmlzaW9uIG9mIHRoaXMgQWdyZWVtZW50IGlzIGZvdW5kIHRvIGJlIHVuZW5mb3JjZWFibGUsIHRoZSByZW1haW5kZXIgc2hhbGwgYmUgZW5mb3JjZWQgYXMgZnVsbHkgYXMgcG9zc2libGUgYW5kIHRoZSB1bmVuZm9yY2VhYmxlIHByb3Zpc2lvbiBzaGFsbCBiZSBkZWVtZWQgbW9kaWZpZWQgdG8gdGhlIGxpbWl0ZWQgZXh0ZW50IHJlcXVpcmVkIHRvIHBlcm1pdCBpdHMgZW5mb3JjZW1lbnQgaW4gYSBtYW5uZXIgbW9zdCBjbG9zZWx5IHJlcHJlc2VudGluZyB0aGUgaW50ZW50aW9ucyBhcyBleHByZXNzZWQgaGVyZWluO1xuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgQWxsIHBlcmZvcm1lcnMgb24gdGhpcyBzaXRlIGFyZSBvdmVyIHRoZSBhZ2Ugb2YgMTgsIGhhdmUgY29uc2VudGVkIGJlaW5nIHBob3RvZ3JhcGhlZCBhbmQvb3IgZmlsbWVkLCBiZWxpZXZlIGl0IGlzIHRoZWlyIHJpZ2h0IHRvIGVuZ2FnZSBpbiBjb25zZW5zdWFsIHNleHVhbCBhY3RzIGZvciB0aGUgZW50ZXJ0YWlubWVudCBhbmQgZWR1Y2F0aW9uIG9mIG90aGVyIGFkdWx0cyBhbmQgSSBiZWxpZXZlIGl0IGlzIG15IHJpZ2h0IGFzIGFuIGFkdWx0IHRvIHdhdGNoIHRoZW0gZG9pbmcgd2hhdCBhZHVsdHMgZG87XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICBUaGUgdmlkZW9zIGFuZCBpbWFnZXMgaW4gdGhpcyBzaXRlIGFyZSBpbnRlbmRlZCB0byBiZSB1c2VkIGJ5IHJlc3BvbnNpYmxlIGFkdWx0cyBhcyBzZXh1YWwgYWlkcywgdG8gcHJvdmlkZSBzZXh1YWwgZWR1Y2F0aW9uIGFuZCB0byBwcm92aWRlIHNleHVhbCBlbnRlcnRhaW5tZW50O1xuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgSSB1bmRlcnN0YW5kIHRoYXQgcHJvdmlkaW5nIGEgZmFsc2UgZGVjbGFyYXRpb24gdW5kZXIgdGhlIHBlbmFsdGllcyBvZiBwZXJqdXJ5IGlzIGEgY3JpbWluYWwgb2ZmZW5zZTsgYW5kXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICBJIGFncmVlIHRoYXQgdGhpcyBhZ3JlZW1lbnQgaXMgZ292ZXJuZWQgYnkgdGhlIEVsZWN0cm9uaWMgU2lnbmF0dXJlcyBpbiBHbG9iYWwgYW5kIE5hdGlvbmFsIENvbW1lcmNlIEFjdCAoY29tbW9ubHkga25vd24gYXMgdGhlICZxdW90O0UtU2lnbiBBY3QmcXVvdDspLCAxNSBVLlMuQy4gwqcgNzAwMCwgZXQgc2VxLiwgYW5kIGJ5IGNob29zaW5nIHRvIGNsaWNrIG9uICZxdW90O0kgQWdyZWUuIEVudGVyIEhlcmUmcXVvdDsgYW5kIGluZGljYXRpbmcgbXkgYWdyZWVtZW50IHRvIGJlIGJvdW5kIGJ5IHRoZSB0ZXJtcyBvZiB0aGlzIGFncmVlbWVudCwgSSBhZmZpcm1hdGl2ZWx5IGFkb3B0IHRoZSBzaWduYXR1cmUgbGluZSBiZWxvdyBhcyBteSBzaWduYXR1cmUgYW5kIHRoZSBtYW5pZmVzdGF0aW9uIG9mIG15IGNvbnNlbnQgdG8gYmUgYm91bmQgYnkgdGhlIHRlcm1zIG9mIHRoaXMgYWdyZWVtZW50LlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibm90aWNlLXR4dFwiPlRISVMgU0lURSBBQ1RJVkVMWSBDT09QRVJBVEVTIFdJVEggTEFXIEVORk9SQ0VNRU5UIElOIEFMTCBJTlNUQU5DRVMgT0YgU1VTUEVDVEVEIElMTEVHQUwgVVNFIE9GIFRIRSBTRVJWSUNFLCBFU1BFQ0lBTExZIElOIFRIRSBDQVNFIE9GIFVOREVSQUdFIFVTQUdFIE9GIFRIRSBTRVJWSUNFLjwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IHsgZm9yd2FyZFJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL3JlY2FwdGNoYS5sZXNzJztcbmltcG9ydCBSZUNBUFRDSEEgZnJvbSAncmVhY3QtZ29vZ2xlLXJlY2FwdGNoYSc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGdvb2dsZVJlQ2FwdGNoYUVuYWJsZWQ6IGJvb2xlYW47XG4gIGdvb2dsZVJlQ2FwdGNoYVNpdGVLZXk6IHN0cmluZztcbiAgZXJyb3I6IHN0cmluZztcbn1cblxuY29uc3QgR29vZ2xlUmVDYXB0Y2hhID0gZm9yd2FyZFJlZjxhbnksIElQcm9wcz4oKHByb3BzOiBJUHJvcHMsIHJlZikgPT4ge1xuICBjb25zdCB7XG4gICAgZ29vZ2xlUmVDYXB0Y2hhRW5hYmxlZCwgZ29vZ2xlUmVDYXB0Y2hhU2l0ZUtleSwgZXJyb3JcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IG9uUm91dGVDaGFuZ2VTdGFydCA9ICgpID0+IHtcbiAgICBpZiAod2luZG93LmdyZWNhcHRjaGEpIHtcbiAgICAgIHdpbmRvdy5ncmVjYXB0Y2hhLnJlc2V0KCk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsIG9uUm91dGVDaGFuZ2VTdGFydCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgUm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBvblJvdXRlQ2hhbmdlU3RhcnQpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjYXB0Y2hhLWJveFwiPlxuICAgICAge2dvb2dsZVJlQ2FwdGNoYUVuYWJsZWQgJiYgKFxuICAgICAgICA8UmVDQVBUQ0hBXG4gICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgLy8gc2l6ZT17c2l6ZX1cbiAgICAgICAgICAvLyBiYWRnZT1cImlubGluZVwiXG4gICAgICAgICAgc2l0ZWtleT17Z29vZ2xlUmVDYXB0Y2hhU2l0ZUtleX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICB7ZXJyb3IgJiYgKFxuICAgICAgICA8cCBjbGFzc05hbWU9XCJyZWNhcHRjaGEtZXJyb3ItbWVzc2FnZVwiPlxuICAgICAgICAgIHtlcnJvciB8fCAnUGxlYXNlIHZlcmlmeSB0aGF0IHlvdSBhcmUgbm90IGEgcm9ib3QuJ31cbiAgICAgICAgPC9wPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn0pO1xuZXhwb3J0IGRlZmF1bHQgR29vZ2xlUmVDYXB0Y2hhO1xuIiwiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlOiBEYXRlLCBmb3JtYXQgPSAnREQvTU0vWVlZWSBISDptbTpzcycpIHtcbiAgcmV0dXJuIG1vbWVudChkYXRlKS5mb3JtYXQoZm9ybWF0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlckR1cmF0aW9uKGR1cmF0aW9uOiBudW1iZXIsIGZvcm1hdCA9ICdISDptbScpIHtcbiAgcmV0dXJuIG1vbWVudFxuICAgIC51dGMobW9tZW50LmR1cmF0aW9uKGR1cmF0aW9uLCAnbWlsbGlzZWNvbmRzJykuYXNNaWxsaXNlY29uZHMoKSlcbiAgICAuZm9ybWF0KGZvcm1hdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUFnZShkYXRlOiBzdHJpbmcsIGZvcm1hdCA9ICdNTU1NIERELCBZWVlZJykge1xuICByZXR1cm4gbW9tZW50KGRhdGUpLmZvcm1hdChmb3JtYXQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWdlKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICByZXR1cm4gbW9tZW50KCkuZGlmZihtb21lbnQoZGF0ZSkuZm9ybWF0KCdZWVlZLU1NLUREJyksICd5ZWFycycpLnRvU3RyaW5nKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREdXJhdGlvbihzOiBudW1iZXIpIHtcbiAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKHMgLyAzNjAwKTtcbiAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKHMgLSBob3VycyAqIDM2MDApIC8gNjApO1xuICBjb25zdCBzZWNvbmRzID0gcyAtIGhvdXJzICogMzYwMCAtIG1pbnV0ZXMgKiA2MDtcbiAgcmV0dXJuIGAke2hvdXJzIDwgMTAgPyAnMCcgOiAnJ30ke2hvdXJzfToke1xuICAgIG1pbnV0ZXMgPCAxMCA/ICcwJyA6ICcnXG4gIH0ke21pbnV0ZXN9OiR7c2Vjb25kcyA8IDEwID8gJzAnIDogJyd9JHtzZWNvbmRzfWA7XG59XG4iLCJpbXBvcnQgeyBnZXRHbG9iYWxDb25maWcgfSBmcm9tICdAc2VydmljZXMvY29uZmlnJztcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IFJjRmlsZSB9IGZyb20gJ2FudGQvbGliL3VwbG9hZCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBiZWZvcmVBdmF0YXJVcGxvYWQoZmlsZTogUmNGaWxlKTogYm9vbGVhbiB7XG4gIGNvbnN0IGV4dCA9IGZpbGUubmFtZS5zcGxpdCgnLicpLnBvcCgpLnRvTG93ZXJDYXNlKCk7XG4gIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpO1xuICBjb25zdCBpc0ltYWdlQWNjZXB0ID0gY29uZmlnLk5FWFRfUFVCTElDX0lNQUdFX0FDQ1BFVFxuICAgIC5zcGxpdCgnLCcpXG4gICAgLm1hcCgoaXRlbTogc3RyaW5nKSA9PiBpdGVtLnRyaW0oKSlcbiAgICAuaW5kZXhPZihgLiR7ZXh0fWApO1xuICBpZiAoaXNJbWFnZUFjY2VwdCA9PT0gLTEpIHtcbiAgICBtZXNzYWdlLmVycm9yKGBZb3UgY2FuIG9ubHkgdXBsb2FkICR7Y29uZmlnLk5FWFRfUFVCTElDX0lNQUdFX0FDQ1BFVH0gZmlsZSFgKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBpc0x0Mk0gPSBmaWxlLnNpemUgLyAxMDI0IC8gMTAyNCA8IChjb25maWcuTkVYVF9QVUJMSUNfTUFYSU1VTV9TSVpFX1VQTE9BRF9BVkFUQVIgfHwgMik7XG4gIGlmICghaXNMdDJNKSB7XG4gICAgbWVzc2FnZS5lcnJvcihcbiAgICAgIGBJbWFnZSBtdXN0IHNtYWxsZXIgdGhhbiAke2NvbmZpZy5ORVhUX1BVQkxJQ19NQVhJTVVNX1NJWkVfVVBMT0FEX0FWQVRBUiB8fCAyfU1CIWBcbiAgICApO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9pbnRlcm5ldCc7XG5leHBvcnQgKiBmcm9tICcuL3JlZHV4JztcbmV4cG9ydCAqIGZyb20gJy4vc3RyaW5nJztcbmV4cG9ydCAqIGZyb20gJy4vZGF0ZSc7XG5leHBvcnQgKiBmcm9tICcuL21lc3NhZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9sYXlvdXQnO1xuZXhwb3J0ICogZnJvbSAnLi91dGlscyc7XG5leHBvcnQgKiBmcm9tICcuL3J1bGVzJztcbmV4cG9ydCAqIGZyb20gJy4vZmlsZSc7XG5leHBvcnQgKiBmcm9tICcuL3N0cmVhbSc7XG4iLCJjb25zdCBJTlRFUk5FVF9DSEVDS19VUkwgPSAnaHR0cHM6Ly9nb29nbGUuY29tJztcblxuZXhwb3J0IGNvbnN0IGlzSGFzSW50ZXJuZXRDb25uZWN0aW9uID0gYXN5bmMgKCk6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKElOVEVSTkVUX0NIRUNLX1VSTCwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ2FjaGUtQ29udHJvbCc6ICduby1jYWNoZSwgbm8tc3RvcmUsIG11c3QtcmV2YWxpZGF0ZScsXG4gICAgICAgIFByYWdtYTogJ25vLWNhY2hlJyxcbiAgICAgICAgRXhwaXJlczogMFxuICAgICAgfSBhcyBhbnlcbiAgICB9KTtcbiAgICBpZiAoXG4gICAgICByZXMuc3RhdHVzID09PSA0MDRcbiAgICAgIHx8IHJlcy5zdGF0dXMgPT09IDQwMVxuICAgICAgfHwgcmVzLnN0YXR1cyA9PT0gNDAzXG4gICAgICB8fCByZXMuc3RhdHVzID09PSA1MDBcbiAgICAgIHx8IChyZXMuc3RhdHVzID49IDIwMCAmJiByZXMuc3RhdHVzIDw9IDMwMClcbiAgICApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmxvZyhleGNlcHRpb24pO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG4iLCJleHBvcnQgY29uc3QgZm9ybUl0ZW1MYXlvdXQgPSB7XG4gIGxhYmVsQ29sOiB7XG4gICAgeHM6IHtcbiAgICAgIHNwYW46IDI0XG4gICAgfSxcbiAgICBzbToge1xuICAgICAgc3BhbjogMTJcbiAgICB9XG4gIH0sXG4gIHdyYXBwZXJDb2w6IHtcbiAgICB4czoge1xuICAgICAgc3BhbjogMjRcbiAgICB9LFxuICAgIHNtOiB7XG4gICAgICBzcGFuOiAxMlxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHRhaWxGb3JtSXRlbUxheW91dCA9IHtcbiAgd3JhcHBlckNvbDoge1xuICAgIHhzOiB7XG4gICAgICBzcGFuOiAyNCxcbiAgICAgIG9mZnNldDogMFxuICAgIH0sXG4gICAgc206IHtcbiAgICAgIHNwYW46IDE2LFxuICAgICAgb2Zmc2V0OiAwXG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdENvbG9yID0ge1xuICBwcmltYXJ5Q29sb3I6ICcjZmYwMDY2JyxcbiAgc3VjY2Vzc0NvbG9yOiAnIzJmYjUyZCcsXG4gIHdoaXRlQ29sb3I6ICcjZmZmZmZmJ1xufTtcblxuZXhwb3J0IHR5cGUgQnJlYWtwb2ludCA9ICd4eGwnIHwgJ3hsJyB8ICdsZycgfCAnbWQnIHwgJ3NtJyB8ICd4cyc7XG5leHBvcnQgdHlwZSBCcmVha3BvaW50TWFwID0gUGFydGlhbDxSZWNvcmQ8QnJlYWtwb2ludCwgc3RyaW5nPj47XG4iLCJleHBvcnQgY29uc3QgdmFsaWRhdGVNZXNzYWdlcyA9IHtcbiAgcmVxdWlyZWQ6ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkIScsXG4gIHR5cGVzOiB7XG4gICAgZW1haWw6ICdOb3QgYSB2YWxpZGF0ZSBlbWFpbCEnLFxuICAgIG51bWJlcjogJ05vdCBhIHZhbGlkYXRlIG51bWJlciEnXG4gIH0sXG4gIG51bWJlcjoge1xuICAgIHJhbmdlOiAnTXVzdCBiZSBiZXR3ZWVuIG1pbiBhbmQgbWF4J1xuICB9XG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgZnVuYy1uYW1lcyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCB7XG4gIHJlZHVjZSwgaXNBcnJheSwgaXNFbXB0eSwgZmxhdHRlblxufSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdyZXNlbGVjdCc7XG5pbXBvcnQgeyB0YWtlTGF0ZXN0LCBkZWxheSB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQge1xuICBjcmVhdGVBY3Rpb24gYXMgUmVkdXhDcmVhdGVBY3Rpb24sXG4gIGhhbmRsZUFjdGlvbnMgYXMgaGFuZGxlUmVkdXhBY3Rpb25zLFxuICBBY3Rpb25cbn0gZnJvbSAncmVkdXgtYWN0aW9ucyc7XG5cbmV4cG9ydCB0eXBlIEFjdGlvbkZ1bmN0aW9uMTxUMSwgUj4gPSAodDE/OiBUMSkgPT4gUjtcblxuZXhwb3J0IGludGVyZmFjZSBBY3Rpb25GdW5jdGlvbjxQYXlsb2FkPlxuICBleHRlbmRzIEFjdGlvbkZ1bmN0aW9uMTxQYXlsb2FkLCBBY3Rpb248UGF5bG9hZD4+IHtcbiAgaXM6ICh0eXBlOiBzdHJpbmcpID0+IGJvb2xlYW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFjdGlvbjxQYXlsb2FkID0gYW55Pih0eXBlOiBzdHJpbmcpOiBBY3Rpb25GdW5jdGlvbjxQYXlsb2FkPiB7XG4gIGNvbnN0IGFjdGlvbiA9IFJlZHV4Q3JlYXRlQWN0aW9uPFBheWxvYWQ+KHR5cGUpIGFzIEFjdGlvbkZ1bmN0aW9uPFBheWxvYWQ+O1xuICBhY3Rpb24uaXMgPSAoYVR5cGU6IHN0cmluZykgPT4gYWN0aW9uLnRvU3RyaW5nKCkgPT09IGFUeXBlO1xuICByZXR1cm4gYWN0aW9uO1xufVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmZ1bmN0aW9uIGNyZWF0ZUFzeW5jQWN0aW9uKGFjdGlvbjogc3RyaW5nLCB0eXBlOiBzdHJpbmcpOiBhbnkge1xuICByZXR1cm4ge1xuICAgIFthY3Rpb25dOiBjcmVhdGVBY3Rpb24odHlwZSksXG4gICAgW2Ake2FjdGlvbn1TdWNjZXNzYF06IGNyZWF0ZUFjdGlvbihgJHt0eXBlfV9TVUNDRVNTYCksXG4gICAgW2Ake2FjdGlvbn1GYWlsYF06IGNyZWF0ZUFjdGlvbihgJHt0eXBlfV9GQUlMYClcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQXN5bmNBY3Rpb25zPFxuICBBY3Rpb25EYXRhID0gYW55LFxuICBTdWNjZXNzRGF0YSA9IGFueSxcbiAgRXJyb3JEYXRhID0gRXJyb3Jcbj4oXG4gIHR5cGU6IHN0cmluZ1xuKTogW1xuICBBY3Rpb25GdW5jdGlvbjxBY3Rpb25EYXRhPixcbiAgQWN0aW9uRnVuY3Rpb248U3VjY2Vzc0RhdGE+LFxuICBBY3Rpb25GdW5jdGlvbjxFcnJvckRhdGE+XG5dIHtcbiAgcmV0dXJuIFtcbiAgICBjcmVhdGVBY3Rpb248QWN0aW9uRGF0YT4odHlwZSksXG4gICAgY3JlYXRlQWN0aW9uPFN1Y2Nlc3NEYXRhPihgJHt0eXBlfV9TVUNDRVNTYCksXG4gICAgY3JlYXRlQWN0aW9uPEVycm9yRGF0YT4oYCR7dHlwZX1fRkFJTGApXG4gIF07XG59XG5cbi8qIHRzbGludDpkaXNhYmxlICovXG5mdW5jdGlvbiBoYW5kbGVBY3Rpb25zKGFjdGlvbnM6IGFueSwgaW5pdGlhbFN0YXRlOiBhbnkpIHtcbiAgcmV0dXJuIGhhbmRsZVJlZHV4QWN0aW9ucyhcbiAgICByZWR1Y2UoXG4gICAgICBhY3Rpb25zLFxuICAgICAgKHJlZHVjZXI6IGFueSwgaGFuZGxlciwgYWN0aW9uKSA9PiB7XG4gICAgICAgIHJlZHVjZXJbYWN0aW9uXSA9IChzdGF0ZTogYW55LCBhY3Q6IGFueSkgPT4gaGFuZGxlcihzdGF0ZS5zZXQoJ2FjdGlvbicsIGFjdGlvbiksIGFjdCk7XG4gICAgICAgIHJldHVybiByZWR1Y2VyO1xuICAgICAgfSxcbiAgICAgIHt9XG4gICAgKSxcbiAgICBpbml0aWFsU3RhdGVcbiAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUmVkdWNlcnMoXG4gIHN0YXRlQ29udGV4dDogc3RyaW5nLFxuICByZWR1Y2VyczogYW55W10sXG4gIGluaXRpYWxTdGF0ZTogYW55LFxuICBwcmV2ZW50UmVzZXR0aW5nOiBib29sZWFuID0gZmFsc2Vcbik6IGFueSB7XG4gIHJldHVybiB7XG4gICAgW3N0YXRlQ29udGV4dF06IGhhbmRsZVJlZHV4QWN0aW9ucyhcbiAgICAgIHJlZHVjZShcbiAgICAgICAgZmxhdHRlbihyZWR1Y2VycyksXG4gICAgICAgIChyZWR1Y2VyOiBhbnksIGFjdGlvbjogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKGlzQXJyYXkoYWN0aW9uLm9uKSkge1xuICAgICAgICAgICAgYWN0aW9uLm9uLmZvckVhY2goKGFjdDogYW55KSA9PiB7XG4gICAgICAgICAgICAgIHJlZHVjZXJbYWN0XSA9IGFjdGlvbi5yZWR1Y2VyO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHJlZHVjZXJbYWN0aW9uLm9uXSA9IGFjdGlvbi5yZWR1Y2VyO1xuICAgICAgICAgIHJldHVybiByZWR1Y2VyO1xuICAgICAgICB9LFxuICAgICAgICBwcmV2ZW50UmVzZXR0aW5nXG4gICAgICAgICAgPyB7fVxuICAgICAgICAgIDoge1xuICAgICAgICAgICAgQVBQX1NUQVRFX1JFU0VUOiAoKSA9PiBpbml0aWFsU3RhdGVcbiAgICAgICAgICB9XG4gICAgICApLFxuICAgICAgaW5pdGlhbFN0YXRlXG4gICAgKVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2FnYXMoc2FnYXM6IGFueVtdKTogYW55W10ge1xuICByZXR1cm4gZmxhdHRlbihzYWdhcykubWFwKChzYWdhOiBhbnkpID0+IHtcbiAgICBjb25zdCB7IG9uLCBlZmZlY3QgPSB0YWtlTGF0ZXN0LCB3b3JrZXIgfSA9IHNhZ2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKiAoKSB7XG4gICAgICB5aWVsZCBlZmZlY3Qob24sIGZ1bmN0aW9uKiAoYWN0aW9uOiBhbnkpIHtcbiAgICAgICAgeWllbGQgZGVsYXkoMCk7XG4gICAgICAgIHlpZWxkIHdvcmtlcihhY3Rpb24pO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNlbGVjdG9yc0EoY29udGV4dDogc3RyaW5nLCBrZXlzOiBhbnlbXSA9IFtdKTogYW55IHtcbiAgY29uc3Qgc3RhdGVTZWxlY3RvciA9IChzdGF0ZTogYW55KSA9PiBzdGF0ZVtjb250ZXh0XTtcblxuICBpZiAoaXNFbXB0eShrZXlzKSkgcmV0dXJuIHN0YXRlU2VsZWN0b3I7XG5cbiAgcmV0dXJuIGtleXMubWFwKChrZXk6IGFueSkgPT4gKHN0YXRlOiBhbnkpID0+IChpc0FycmF5KGtleSlcbiAgICA/IHN0YXRlU2VsZWN0b3Ioc3RhdGUpLmdldEluKGtleSlcbiAgICA6IHN0YXRlU2VsZWN0b3Ioc3RhdGUpLmdldChrZXkpKSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNlbGVjdG9ycyhjb250ZXh0OiBzdHJpbmcsIGtleXM6IHN0cmluZ1tdKTogYW55IHtcbiAgY29uc3Qgc3RhdGVTZWxlY3RvciA9IChzdGF0ZTogYW55KSA9PiBzdGF0ZVtjb250ZXh0XTtcblxuICByZXR1cm4gcmVkdWNlKFxuICAgIGtleXMsXG4gICAgKHNlbGVjdG9yczogYW55LCBrZXkpID0+IHtcbiAgICAgIHNlbGVjdG9yc1tgJHtrZXl9U2VsZWN0b3JgXSA9IChzdGF0ZTogYW55KSA9PiBzdGF0ZVNlbGVjdG9yKHN0YXRlKS5nZXQoa2V5KTtcbiAgICAgIHJldHVybiBzZWxlY3RvcnM7XG4gICAgfSxcbiAgICB7fVxuICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVKU1NlbGVjdG9ycyhjb250ZXh0OiBzdHJpbmcsIGtleXM6IHN0cmluZ1tdKTogYW55IHtcbiAgY29uc3Qgc3RhdGVTZWxlY3RvciA9IChzdGF0ZTogYW55KSA9PiBzdGF0ZVtjb250ZXh0XTtcblxuICByZXR1cm4gcmVkdWNlKFxuICAgIGtleXMsXG4gICAgKHNlbGVjdG9yczogYW55LCBrZXkpID0+IHtcbiAgICAgIHNlbGVjdG9yc1tgJHtrZXl9U2VsZWN0b3JgXSA9IChzdGF0ZTogYW55KSA9PiBzdGF0ZVNlbGVjdG9yKHN0YXRlKVtrZXldO1xuICAgICAgcmV0dXJuIHNlbGVjdG9ycztcbiAgICB9LFxuICAgIHt9XG4gICk7XG59XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZUFjdGlvbixcbiAgY3JlYXRlQXN5bmNBY3Rpb24sXG4gIGNyZWF0ZUFzeW5jQWN0aW9ucyxcbiAgY3JlYXRlU2VsZWN0b3JzQSxcbiAgaGFuZGxlQWN0aW9ucyxcbiAgY3JlYXRlUmVkdWNlcnMsXG4gIGNyZWF0ZVNlbGVjdG9ycyxcbiAgY3JlYXRlU2VsZWN0b3IsXG4gIGNyZWF0ZUpTU2VsZWN0b3JzXG59O1xuIiwiZXhwb3J0IGNvbnN0IHVzZXJuYW1lUGF0dGVyblJ1bGUgPSB7XG4gIHBhdHRlcm46IG5ldyBSZWdFeHAoJ15bYS16QS1aMC05XSokJyksXG4gIG1lc3NhZ2U6ICdEb250IGFsbG93IHNwZWNpYWwgY2hhcnMgb3Igc3BhY2UnXG59O1xuIiwiaW1wb3J0IHsgU3RvcmUgYXMgUkRTdG9yZSB9IGZyb20gJ3JlZHV4JztcblxuZXhwb3J0IHR5cGUgU3RvcmUgPSBSRFN0b3JlPHt9PjtcblxubGV0IHN0b3JlOiBTdG9yZSB8IG51bGwgPSBudWxsO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldFN0b3JlOiAoKSA9PiBzdG9yZSxcbiAgc2V0U3RvcmU6IChzOiBTdG9yZSkgPT4ge1xuICAgIHN0b3JlID0gcztcbiAgfVxufTtcbiIsImltcG9ydCBzdG9yZUhvbGRlciBmcm9tICcuL3N0b3JlSG9sZGVyJztcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfT0ZGTElORV9JTUFHRV9VUkwgPSAnL29mZmxpbmUucG5nJztcbmV4cG9ydCBjb25zdCBERUZBVUxUX1BSSVZBVEVfSU1BR0VfVVJMID0gJy9wcml2YXRlLnBuZyc7XG5leHBvcnQgY29uc3QgREVGQVVMVF9HUk9VUF9JTUFHRV9VUkwgPSAnL2dyb3VwLnBuZyc7XG5leHBvcnQgY29uc3QgREVGQVVMVF9PTkxJTkVfSU1BR0VfVVJMID0gJyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb3N0ZXIoc3RhdHVzOiBzdHJpbmcpOiBzdHJpbmcge1xuICBsZXQgcG9zdGVyID0gJyc7XG4gIGNvbnN0IHN0b3JlID0gc3RvcmVIb2xkZXIuZ2V0U3RvcmUoKTtcbiAgY29uc3QgeyBzZXR0aW5ncyA9IHt9IH0gPSBzdG9yZS5nZXRTdGF0ZSgpIGFzIGFueTtcbiAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICBjYXNlICdwcml2YXRlJzpcbiAgICAgIHBvc3RlciA9IHNldHRpbmdzLmRlZmF1bHRQcml2YXRlQ2FsbEltYWdlIHx8IERFRkFVTFRfUFJJVkFURV9JTUFHRV9VUkw7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdvZmZsaW5lJzpcbiAgICAgIHBvc3RlciA9IHNldHRpbmdzLmRlZmF1bHRPZmZsaW5lTW9kZWxJbWFnZSB8fCBERUZBVUxUX09GRkxJTkVfSU1BR0VfVVJMO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncHVibGljJzpcbiAgICAgIHBvc3RlciA9IERFRkFVTFRfT05MSU5FX0lNQUdFX1VSTDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2dyb3VwJzpcbiAgICAgIHBvc3RlciA9IHNldHRpbmdzLmRlZmF1bHRHcm91cENoYXRJbWFnZSB8fCBERUZBVUxUX0dST1VQX0lNQUdFX1VSTDtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBwb3N0ZXIgPSBERUZBVUxUX09GRkxJTkVfSU1BR0VfVVJMO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIHBvc3Rlcjtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBpc1VybCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIHVybC5tYXRjaChcbiAgICAgIC8oaHR0cChzKT86XFwvXFwvLik/KHd3d1xcLik/Wy1hLXpBLVowLTlAOiUuXyt+Iz1dezIsMjU2fVxcLlthLXpdezIsNn1cXGIoWy1hLXpBLVowLTlAOiVfKy5+Iz8mLy89XSopL2dcbiAgICApICE9PSBudWxsXG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVV1aWQgPSAoKSA9PiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIChjKSA9PiB7XG4gIC8qIGVzbGludC1kaXNhYmxlICovXG4gICAgY29uc3QgciA9IChNYXRoLnJhbmRvbSgpICogMTYpIHwgMDtcbiAgICBjb25zdCB2ID0gYyA9PT0gJ3gnID8gciA6IChyICYgMHgzKSB8IDB4ODtcbiAgICByZXR1cm4gdi50b1N0cmluZygxNik7XG4gICAgLyogZXNsaW50LWVuYWJsZSAqL1xufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoIXN0cikgcmV0dXJuICcnO1xuICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufVxuXG5leHBvcnQgY29uc3QgdW5pdFByaWNlczogeyB2YWx1ZTogbnVtYmVyLCB0ZXh0OiBhbnkgfVtdID0gW1xuICB7XG4gICAgdmFsdWU6IDE1LFxuICAgIHRleHQ6ICcxNSB0b2tlbnMnXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogMjAsXG4gICAgdGV4dDogJzIwIHRva2VucydcbiAgfSxcbiAge1xuICAgIHZhbHVlOiAyNSxcbiAgICB0ZXh0OiAnMjUgdG9rZW5zJ1xuICB9LFxuICB7XG4gICAgdmFsdWU6IDMwLFxuICAgIHRleHQ6ICczMCB0b2tlbnMnXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogMzUsXG4gICAgdGV4dDogJzM1IHRva2VucydcbiAgfSxcbiAge1xuICAgIHZhbHVlOiA0MCxcbiAgICB0ZXh0OiAnNDAgdG9rZW5zJ1xuICB9LFxuICB7XG4gICAgdmFsdWU6IDQ1LFxuICAgIHRleHQ6ICc0NSB0b2tlbnMnXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogNTAsXG4gICAgdGV4dDogJzUwIHRva2VucydcbiAgfVxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDU1LFxuICAvLyAgIHRleHQ6ICc1NSB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNjAsXG4gIC8vICAgdGV4dDogJzYwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA2NSxcbiAgLy8gICB0ZXh0OiAnNjUgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDcwLFxuICAvLyAgIHRleHQ6ICc3MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNzUsXG4gIC8vICAgdGV4dDogJzc1IHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA4MCxcbiAgLy8gICB0ZXh0OiAnODAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDg1LFxuICAvLyAgIHRleHQ6ICc4NSB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogOTAsXG4gIC8vICAgdGV4dDogJzkwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA5NSxcbiAgLy8gICB0ZXh0OiAnOTUgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDEwMCxcbiAgLy8gICB0ZXh0OiAnMTAwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAxMjAsXG4gIC8vICAgdGV4dDogJzEyMCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMTQwLFxuICAvLyAgIHRleHQ6ICcxNDAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDE2MCxcbiAgLy8gICB0ZXh0OiAnMTYwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAxODAsXG4gIC8vICAgdGV4dDogJzE4MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMjAwLFxuICAvLyAgIHRleHQ6ICcyMDAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDIyMCxcbiAgLy8gICB0ZXh0OiAnMjIwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAyNDAsXG4gIC8vICAgdGV4dDogJzI0MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMjYwLFxuICAvLyAgIHRleHQ6ICcyNjAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDI4MCxcbiAgLy8gICB0ZXh0OiAnMjgwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAzMDAsXG4gIC8vICAgdGV4dDogJzMwMCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMzIwLFxuICAvLyAgIHRleHQ6ICczMjAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDM0MCxcbiAgLy8gICB0ZXh0OiAnMzQwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAzNjAsXG4gIC8vICAgdGV4dDogJzM2MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMzgwLFxuICAvLyAgIHRleHQ6ICczODAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDQwMCxcbiAgLy8gICB0ZXh0OiAnNDAwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA0MjAsXG4gIC8vICAgdGV4dDogJzQyMCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNDQwLFxuICAvLyAgIHRleHQ6ICc0NDAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDQ2MCxcbiAgLy8gICB0ZXh0OiAnNDYwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA0ODAsXG4gIC8vICAgdGV4dDogJzQ4MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNTAwLFxuICAvLyAgIHRleHQ6ICc1MDAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDU1MCxcbiAgLy8gICB0ZXh0OiAnNTUwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA2MDAsXG4gIC8vICAgdGV4dDogJzYwMCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNjUwLFxuICAvLyAgIHRleHQ6ICc2NTAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDcwMCxcbiAgLy8gICB0ZXh0OiAnNzAwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA3NTAsXG4gIC8vICAgdGV4dDogJzc1MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogODAwLFxuICAvLyAgIHRleHQ6ICc4MDAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDg1MCxcbiAgLy8gICB0ZXh0OiAnODUwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA5MDAsXG4gIC8vICAgdGV4dDogJzkwMCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogOTUwLFxuICAvLyAgIHRleHQ6ICc5NTAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDEwMDAsXG4gIC8vICAgdGV4dDogJzEwMDAgdG9rZW5zJ1xuICAvLyB9XG5dO1xuIiwiaW1wb3J0IHsgY2xvbmVEZWVwIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICdwYXRoLXRvLXJlZ2V4cCc7XG5pbXBvcnQge1xuICBJU2NoZWR1bGUsIElVc2VyLCBJUGVyZm9ybWVyLCBJU3R1ZGlvXG59IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IFNPUlQgfSBmcm9tICdAc2VydmljZXMvYXBpLXJlcXVlc3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbi8qKlxuICogQ29udmVydCBhbiBhcnJheSB0byBhIHRyZWUtc3RydWN0dXJlZCBhcnJheS5cbiAqIEBwYXJhbSAgIHthcnJheX0gICAgIGFycmF5ICAgICBUaGUgQXJyYXkgbmVlZCB0byBDb252ZXJ0ZWQuXG4gKiBAcGFyYW0gICB7c3RyaW5nfSAgICBpZCAgICAgICAgVGhlIGFsaWFzIG9mIHRoZSB1bmlxdWUgSUQgb2YgdGhlIG9iamVjdCBpbiB0aGUgYXJyYXkuXG4gKiBAcGFyYW0gICB7c3RyaW5nfSAgICBwYXJlbnRJZCAgICAgICBUaGUgYWxpYXMgb2YgdGhlIHBhcmVudCBJRCBvZiB0aGUgb2JqZWN0IGluIHRoZSBhcnJheS5cbiAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgIGNoaWxkcmVuICBUaGUgYWxpYXMgb2YgY2hpbGRyZW4gb2YgdGhlIG9iamVjdCBpbiB0aGUgYXJyYXkuXG4gKiBAcmV0dXJuICB7YXJyYXl9ICAgIFJldHVybiBhIHRyZWUtc3RydWN0dXJlZCBhcnJheS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFycmF5VG9UcmVlKFxuICBhcnJheSxcbiAgaWQgPSAnaWQnLFxuICBwYXJlbnRJZCA9ICdwaWQnLFxuICBjaGlsZHJlbiA9ICdjaGlsZHJlbidcbikge1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgY29uc3QgaGFzaCA9IHt9O1xuICBjb25zdCBkYXRhID0gY2xvbmVEZWVwKGFycmF5KTtcblxuICBkYXRhLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgaGFzaFtkYXRhW2luZGV4XVtpZF1dID0gZGF0YVtpbmRleF07XG4gIH0pO1xuXG4gIGRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGhhc2hQYXJlbnQgPSBoYXNoW2l0ZW1bcGFyZW50SWRdXTtcbiAgICBpZiAoaGFzaFBhcmVudCkge1xuICAgICAgIWhhc2hQYXJlbnRbY2hpbGRyZW5dICYmIChoYXNoUGFyZW50W2NoaWxkcmVuXSA9IFtdKTtcbiAgICAgIGhhc2hQYXJlbnRbY2hpbGRyZW5dLnB1c2goaXRlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogV2hldGhlciB0aGUgcGF0aCBtYXRjaGVzIHRoZSByZWdleHAgaWYgdGhlIGxhbmd1YWdlIHByZWZpeCBpcyBpZ25vcmVkLCBodHRwczovL2dpdGh1Yi5jb20vcGlsbGFyanMvcGF0aC10by1yZWdleHAuXG4gKiBAcGFyYW0gICB7c3RyaW5nfHJlZ2V4cHxhcnJheX0gICAgIHJlZ2V4cCAgICAgU3BlY2lmeSBhIHN0cmluZywgYXJyYXkgb2Ygc3RyaW5ncywgb3IgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKiBAcGFyYW0gICB7c3RyaW5nfSAgICAgICAgICAgICAgICAgIHBhdGhuYW1lICAgU3BlY2lmeSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2guXG4gKiBAcmV0dXJuICB7YXJyYXl8bnVsbH0gICAgICAgICAgICAgIFJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBtYXRjaCBvciBudWxsLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGF0aE1hdGNoUmVnZXhwKHJlZ2V4cCwgcGF0aG5hbWUpIHtcbiAgcmV0dXJuIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAocmVnZXhwKS5leGVjKHBhdGhuYW1lKTtcbn1cblxuLyoqXG4gKiBJbiBhbiBhcnJheSBvZiBvYmplY3RzLCBzcGVjaWZ5IGFuIG9iamVjdCB0aGF0IHRyYXZlcnNlcyB0aGUgb2JqZWN0cyB3aG9zZSBwYXJlbnQgSUQgbWF0Y2hlcy5cbiAqIEBwYXJhbSAgIHthcnJheX0gICAgIGFycmF5ICAgICBUaGUgQXJyYXkgbmVlZCB0byBDb252ZXJ0ZWQuXG4gKiBAcGFyYW0gICB7c3RyaW5nfSAgICBjdXJyZW50ICAgU3BlY2lmeSB0aGUgb2JqZWN0IHRoYXQgbmVlZHMgdG8gYmUgcXVlcmllZC5cbiAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgIHBhcmVudElkICBUaGUgYWxpYXMgb2YgdGhlIHBhcmVudCBJRCBvZiB0aGUgb2JqZWN0IGluIHRoZSBhcnJheS5cbiAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgIGlkICAgICAgICBUaGUgYWxpYXMgb2YgdGhlIHVuaXF1ZSBJRCBvZiB0aGUgb2JqZWN0IGluIHRoZSBhcnJheS5cbiAqIEByZXR1cm4gIHthcnJheX0gICAgUmV0dXJuIGEga2V5IGFycmF5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlBbmNlc3RvcnMoYXJyYXksIGN1cnJlbnQsIHBhcmVudElkLCBpZCA9ICdpZCcpIHtcbiAgY29uc3QgcmVzdWx0ID0gW2N1cnJlbnRdO1xuICBjb25zdCBoYXNoTWFwID0gbmV3IE1hcCgpO1xuICBhcnJheS5mb3JFYWNoKChpdGVtKSA9PiBoYXNoTWFwLnNldChpdGVtW2lkXSwgaXRlbSkpO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zaGFkb3dcbiAgY29uc3QgZ2V0UGF0aCA9IChjdXJyZW50KSA9PiB7XG4gICAgY29uc3QgY3VycmVudFBhcmVudElkID0gaGFzaE1hcC5nZXQoY3VycmVudFtpZF0pW3BhcmVudElkXTtcbiAgICBpZiAoY3VycmVudFBhcmVudElkKSB7XG4gICAgICByZXN1bHQucHVzaChoYXNoTWFwLmdldChjdXJyZW50UGFyZW50SWQpKTtcbiAgICAgIGdldFBhdGgoaGFzaE1hcC5nZXQoY3VycmVudFBhcmVudElkKSk7XG4gICAgfVxuICB9O1xuXG4gIGdldFBhdGgoY3VycmVudCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZXNwb25zZUVycm9yKGRhdGE6IGFueSkge1xuICBpZiAoIWRhdGEpIHtcbiAgICByZXR1cm4gJ0JhZCByZXF1ZXN0ISc7XG4gIH1cblxuICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShkYXRhLm1lc3NhZ2UpKSB7XG4gICAgY29uc3QgaXRlbSA9IGRhdGEubWVzc2FnZVswXTtcbiAgICBpZiAoIWl0ZW0uY29uc3RyYWludHMpIHtcbiAgICAgIHJldHVybiBkYXRhLmVycm9yIHx8ICdCYWQgcmVxdWVzdCEnO1xuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhpdGVtLmNvbnN0cmFpbnRzKVswXTtcbiAgfVxuXG4gIC8vIFRPRE8gLSBwYXJzZSBmb3IgbGFuZ2F1Z2Ugb3Igb3RoZXJzXG4gIHJldHVybiB0eXBlb2YgZGF0YS5tZXNzYWdlID09PSAnc3RyaW5nJyA/IGRhdGEubWVzc2FnZSA6ICdCYWQgcmVxdWVzdCEnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNNb2JpbGUoKTogYm9vbGVhbiB7XG4gIGlmIChcbiAgICBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9BbmRyb2lkL2kpXG4gICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvd2ViT1MvaSlcbiAgICB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGhvbmUvaSlcbiAgICB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGFkL2kpXG4gICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBvZC9pKVxuICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0JsYWNrQmVycnkvaSlcbiAgICB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9XaW5kb3dzIFBob25lL2kpXG4gICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVcmxQYXJhbWV0ZXIoc1BhcmFtKSB7XG4gIGNvbnN0IHNQYWdlVVJMID0gZGVjb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcbiAgY29uc3Qgc1VSTFZhcmlhYmxlcyA9IHNQYWdlVVJMLnNwbGl0KCcmJyk7XG4gIGxldCBzUGFyYW1ldGVyTmFtZTtcbiAgbGV0IGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNVUkxWYXJpYWJsZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBzUGFyYW1ldGVyTmFtZSA9IHNVUkxWYXJpYWJsZXNbaV0uc3BsaXQoJz0nKTtcblxuICAgIGlmIChzUGFyYW1ldGVyTmFtZVswXSA9PT0gc1BhcmFtKSB7XG4gICAgICByZXR1cm4gc1BhcmFtZXRlck5hbWVbMV0gPT09IHVuZGVmaW5lZCA/IHRydWUgOiBzUGFyYW1ldGVyTmFtZVsxXTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IERBWV9PRl9XRUVLID0ge1xuICBtb246ICdNb25kYXknLFxuICB0dWU6ICdUdWVzZGF5JyxcbiAgd2VkOiAnV2VkbmVzZGF5JyxcbiAgdGh1OiAnVGh1cnNkYXknLFxuICBmcmk6ICdGcmlkYXknLFxuICBzYXQ6ICdTYXR1cmRheScsXG4gIHN1bjogJ1N1bmRheSdcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0U2NoZWR1bGUoKSB7XG4gIGNvbnN0IGRlZmF1bHRWYWwgPSB7IHN0YXJ0OiBudWxsLCBlbmQ6IG51bGwsIGNsb3NlZDogdHJ1ZSB9O1xuICByZXR1cm4ge1xuICAgIG1vbjogeyAuLi5kZWZhdWx0VmFsIH0sXG4gICAgdHVlOiB7IC4uLmRlZmF1bHRWYWwgfSxcbiAgICB3ZWQ6IHsgLi4uZGVmYXVsdFZhbCB9LFxuICAgIHRodTogeyAuLi5kZWZhdWx0VmFsIH0sXG4gICAgZnJpOiB7IC4uLmRlZmF1bHRWYWwgfSxcbiAgICBzYXQ6IHsgLi4uZGVmYXVsdFZhbCB9LFxuICAgIHN1bjogeyAuLi5kZWZhdWx0VmFsIH1cbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5leHRTaG93KHNjaGVkdWxlOiBJU2NoZWR1bGUpOiBzdHJpbmcge1xuICBsZXQgd2Vla0RheSA9IHBhcnNlSW50KG1vbWVudCgpLmZvcm1hdCgnZScpLCAxMCk7XG4gIGxldCBpID0gMDtcbiAgbGV0IG5leHRTaG93OiBzdHJpbmc7XG4gIGNvbnN0IHBlcmZvcm1lclNob3dzID0gT2JqZWN0LmtleXMoc2NoZWR1bGUpLmZpbHRlcihcbiAgICAoa2V5KSA9PiAhc2NoZWR1bGVba2V5XS5jbG9zZWRcbiAgKTtcbiAgZG8ge1xuICAgIGNvbnN0IGRhdGUgPSBtb21lbnQoKS5kYXkod2Vla0RheSkuZm9ybWF0KCdkZGQnKS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChwZXJmb3JtZXJTaG93cy5pbmRleE9mKGRhdGUpID4gLTEpIHtcbiAgICAgIG5leHRTaG93ID0gZGF0ZTtcbiAgICB9XG4gICAgd2Vla0RheSArPSAxO1xuICAgIGkgKz0gMTtcbiAgfSB3aGlsZSAoaSA8IDcgJiYgIW5leHRTaG93KTtcblxuICBpZiAobmV4dFNob3cpIHtcbiAgICByZXR1cm4gYCR7c2NoZWR1bGVbbmV4dFNob3ddLnN0YXJ0fSAke21vbWVudCgpXG4gICAgICAuZGF5KHdlZWtEYXkgLSAxKVxuICAgICAgLmZvcm1hdCgnREQvTU0vWVlZWScpfWA7XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VhcmNoRGF0YShwYWdpbmF0aW9uLCBmaWx0ZXJzLCBzb3J0ZXIsIHN0YXRlKSB7XG4gIGxldCB7IHNvcnQsIHNvcnRCeSwgZmlsdGVyIH0gPSBzdGF0ZTtcbiAgY29uc3QgeyBsaW1pdCB9ID0gc3RhdGU7XG4gIGlmIChmaWx0ZXJzKSB7XG4gICAgT2JqZWN0LmtleXMoZmlsdGVycykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoZmlsdGVyc1trZXldICYmIGZpbHRlcnNba2V5XS5sZW5ndGgpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIGZpbHRlcltrZXldID0gZmlsdGVyc1trZXldWzBdO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWZpbHRlcnNba2V5XSkge1xuICAgICAgICBmaWx0ZXJba2V5XSA9ICcnO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGZpbHRlciA9IHt9O1xuICB9XG5cbiAgaWYgKHNvcnRlcikge1xuICAgIGlmIChzb3J0ZXIub3JkZXIpIHtcbiAgICAgIGNvbnN0IHsgZmllbGQsIG9yZGVyIH0gPSBzb3J0ZXI7XG4gICAgICBzb3J0ID0gU09SVFtvcmRlcl07XG4gICAgICBzb3J0QnkgPSBmaWVsZDtcbiAgICB9IGVsc2Uge1xuICAgICAgc29ydEJ5ID0gJ2NyZWF0ZWRBdCc7XG4gICAgICBzb3J0ID0gJ2Rlc2MnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgLi4uZmlsdGVyLFxuICAgIHNvcnQsXG4gICAgc29ydEJ5LFxuICAgIG9mZnNldDogKHBhZ2luYXRpb24uY3VycmVudCAtIDEpICogbGltaXRcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJhc2U2NChvcmlnaW5GaWxlT2JqLCBzdGF0dXMgPSAndXBsb2FkaW5nJywgZmlsZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgaWYgKG9yaWdpbkZpbGVPYmopIHtcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKG9yaWdpbkZpbGVPYmopO1xuICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoe1xuICAgICAgICAuLi5vcmlnaW5GaWxlT2JqLFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIG5hbWU6IG9yaWdpbkZpbGVPYmoubmFtZSxcbiAgICAgICAgdXJsOiByZWFkZXIucmVzdWx0LFxuICAgICAgICBvcmlnaW5GaWxlT2JqXG4gICAgICB9KTtcbiAgICAgIHJlYWRlci5vbmVycm9yID0gKGVycm9yKSA9PiByZWplY3QoZXJyb3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNvbHZlKGZpbGUpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0Q29ubmVjdGlvbkRhdGEoZGF0YSkge1xuICBjb25zdCBhcnIgPSBkYXRhLnNwbGl0KCclLyUnKTtcbiAgY29uc3Qgc2VydmVyRGF0YSA9IGFyclsxXSAmJiBKU09OLnBhcnNlKGFyclsxXSk7XG4gIGNvbnN0IGNsaWVudERhdGEgPSBhcnJbMF0gJiYgSlNPTi5wYXJzZShhcnJbMF0pO1xuICByZXR1cm4ge1xuICAgIHNlcnZlckRhdGEsXG4gICAgY2xpZW50RGF0YVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tVc2VyTG9naW4oaXNMb2dnZWRJbjogYm9vbGVhbiwgdXNlcjogSVVzZXIgfCBJUGVyZm9ybWVyIHwgSVN0dWRpbykge1xuICBpZiAoIWlzTG9nZ2VkSW4pIHJldHVybiBmYWxzZTtcbiAgaWYgKCF1c2VyICYmICF1c2VyLl9pZCkgcmV0dXJuIGZhbHNlO1xuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFVzZXIodXNlcjogSVVzZXIsIHBlcmZvcm1lcjogSVBlcmZvcm1lcikge1xuICBpZiAodXNlciAmJiB1c2VyLl9pZCkgcmV0dXJuIHVzZXI7XG4gIGlmIChwZXJmb3JtZXIgJiYgcGVyZm9ybWVyLl9pZCkgcmV0dXJuIHBlcmZvcm1lcjtcblxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGh5c2ljYWxQcm9kdWN0KGl0ZW0pIHtcbiAgaWYgKGl0ZW0gJiYgaXRlbS50eXBlID09PSAncGh5c2ljYWwnKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhdEJveE1lc3NhZ2VDbGFzc05hbWUocmVxKSB7XG4gIGNvbnN0IHtcbiAgICBpc01pbmUsXG4gICAgc3RhcnRzU2VxdWVuY2UsXG4gICAgZW5kc1NlcXVlbmNlLFxuICAgIGRhdGE6IHsgdHlwZSB9XG4gIH0gPSByZXE7XG4gIHJldHVybiBjbGFzc25hbWVzKFxuICAgICdtZXNzYWdlJyxcbiAgICB7IG1pbmU6IGlzTWluZSAmJiB0eXBlICE9PSAndGlwJyB9LFxuICAgIHsgdGlwOiB0eXBlID09PSAndGlwJyB9LFxuICAgIHsgc3RhcnQ6ICEhc3RhcnRzU2VxdWVuY2UgfSxcbiAgICB7IGVuZDogISFlbmRzU2VxdWVuY2UgfVxuICApO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0RmVldFRvQ20oZmVldCwgaW5jaCkge1xuICBjb25zdCBbZl0gPSBmZWV0LnNwbGl0KCcuJyk7XG4gIGNvbnN0IFtpXSA9IGluY2guc3BsaXQoJy4nKTtcbiAgcmV0dXJuIChwYXJzZUludChmLCAxMCkgKiAxMiArIHBhcnNlSW50KGksIDEwKSkgKiAyLjU0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0YVdlaWdodChtaW4gPSA5OSwgbWF4ID0gMzE5KSB7XG4gIGxldCBpID0gbWluO1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgZG8ge1xuICAgIHJlc3VsdFtpXSA9IChpICogMC40NSkudG9GaXhlZCgyKTtcbiAgICBpICs9IDE7XG4gIH0gd2hpbGUgKGkgPCBtYXgpO1xuICByZXR1cm4gcmVzdWx0Lm1hcCgodiwgaW5kZXgpID0+ICh7XG4gICAgbGFiZWw6IGAke2luZGV4fSAgbGJzICgke3Z9a2cpYCxcbiAgICB2YWx1ZTogYCR7aW5kZXh9IGxic2BcbiAgfSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGFIZWlnaHQobWluID0gNCwgbWF4ID0gNykge1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgZm9yIChsZXQgZmVldCA9IG1pbjsgZmVldCA8IG1heDsgZmVldCArPSAxKSB7XG4gICAgZm9yIChsZXQgaW5jaCA9IDA7IGluY2ggPD0gMTE7IGluY2ggKz0gMSkge1xuICAgICAgY29uc3QgYSA9IGNvbnZlcnRGZWV0VG9DbShcbiAgICAgICAgZmVldC50b0ZpeGVkKDEpLnRvU3RyaW5nKCksXG4gICAgICAgIGluY2gudG9GaXhlZCgxKS50b1N0cmluZygpXG4gICAgICApO1xuICAgICAgcmVzdWx0LnB1c2goYCR7ZmVldH0nJHtpbmNofVwiICgke2EudG9GaXhlZCgyKX0gY20pYCk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQubWFwKChmKSA9PiAoeyBsYWJlbDogYCR7Zn1gLCB2YWx1ZTogYCR7Zn1gIH0pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFByaWNlKHByaWNlOiBudW1iZXIsIGZyYWN0aW9uRGlnaXRzID0gMikge1xuICBpZiAocHJpY2UpIHtcbiAgICByZXR1cm4gcHJpY2UudG9GaXhlZChmcmFjdGlvbkRpZ2l0cyk7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVBc3luY0FjdGlvbiwgY3JlYXRlQWN0aW9uIH0gZnJvbSAnQGxpYi9yZWR1eCc7XG5cbmV4cG9ydCBjb25zdCB7IGxvZ2luLCBsb2dpblN1Y2Nlc3MsIGxvZ2luRmFpbCB9ID0gY3JlYXRlQXN5bmNBY3Rpb24oXG4gICdsb2dpbicsXG4gICdMT0dJTidcbik7XG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0aW5nID0gY3JlYXRlQWN0aW9uKCdMT0dJTl9SRVFVRVNUSU5HJyk7XG5cbmV4cG9ydCBjb25zdCB7XG4gIHBlcmZvcm1lcmxvZ2luLFxuICBwZXJmb3JtZXJsb2dpblN1Y2Nlc3MsXG4gIHBlcmZvcm1lcmxvZ2luRmFpbFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCdwZXJmb3JtZXJsb2dpbicsICdQRVJGT1JNRVJfTE9HSU4nKTtcblxuZXhwb3J0IGNvbnN0XG4gIHJlc2V0TG9naW5EYXRhID0gY3JlYXRlQWN0aW9uKCdyZXNldExvZ2luRGF0YScpO1xuXG5leHBvcnQgY29uc3Qge1xuICBzdHVkaW9Mb2dpbixcbiAgc3R1ZGlvTG9naW5TdWNjZXNzLFxuICBzdHVkaW9Mb2dpbkZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbignc3R1ZGlvTG9naW4nLCAnU1RVRElPX0xPR0lOJyk7XG5cbmV4cG9ydCBjb25zdCB7XG4gIHBlcmZvcm1lclJlZ2lzdGVyLFxuICBwZXJmb3JtZXJSZWdpc3RlclN1Y2Nlc3MsXG4gIHBlcmZvcm1lclJlZ2lzdGVyRmFpbFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCdwZXJmb3JtZXJSZWdpc3RlcicsICdQRVJGT1JNRVJfUkVHSVNURVInKTtcbmV4cG9ydCBjb25zdCBzZXRQZXJmb3JtZXJSZWdpc3RlclN1Ym1pdHRpbmcgPSBjcmVhdGVBY3Rpb24oXG4gICdTRVRfUEVSRk9STUVSX1JFR0lTVEVSX1NVQk1JVFRJTkcnXG4pO1xuXG5leHBvcnQgY29uc3Qge1xuICB1c2VyUmVnaXN0ZXIsXG4gIHVzZXJSZWdpc3RlclN1Y2Nlc3MsXG4gIHVzZXJSZWdpc3RlckZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbigndXNlclJlZ2lzdGVyJywgJ1VTRVJfUkVHSVNURVInKTtcbmV4cG9ydCBjb25zdCBzZXRVc2VyUmVnaXN0ZXJTdWJtaXR0aW5nID0gY3JlYXRlQWN0aW9uKFxuICAnU0VUX1VTRVJfUkVHSVNURVJfU1VCTUlUVElORydcbik7XG5cbmV4cG9ydCBjb25zdCB7XG4gIHVwZGF0ZVBhc3N3b3JkLFxuICB1cGRhdGVQYXNzd29yZFN1Y2Nlc3MsXG4gIHVwZGF0ZVBhc3N3b3JkRmFpbFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCd1cGRhdGVQYXNzd29yZCcsICdVUERBVEVfUEFTU1dPUkQnKTtcbmV4cG9ydCBjb25zdCBzZXRVcGRhdGVQYXNzd29yZFN1Ym1pdHRpbmcgPSBjcmVhdGVBY3Rpb24oXG4gICdTRVRfVVBEQVRFX1BBU1NXT1JEX1NVQk1JVFRJTkcnXG4pO1xuXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gY3JlYXRlQWN0aW9uKCdsb2dvdXQnKTtcbiIsImltcG9ydCB7IGNyZWF0ZUFjdGlvbiB9IGZyb20gJ0BsaWIvcmVkdXgnO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlVUlWYWx1ZSA9IGNyZWF0ZUFjdGlvbigndXBkYXRlVUlWYWx1ZScpO1xuZXhwb3J0IGNvbnN0IGxvYWRVSVZhbHVlID0gY3JlYXRlQWN0aW9uKCdsb2FkVUlWYWx1ZScpO1xuIiwiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgeyBvbWl0IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcbmltcG9ydCB7IGlzVXJsIH0gZnJvbSAnQGxpYi9zdHJpbmcnO1xuaW1wb3J0IHsgSVJlZ2lzdGVyRm9ybURhdGEgfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBnZXRHbG9iYWxDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJlc3BvbnNlPFQ+IHtcbiAgc3RhdHVzOiBudW1iZXI7XG4gIGRhdGE6IFQ7XG59XG5cbmV4cG9ydCBjb25zdCBUT0tFTiA9ICd0b2tlbic7XG5leHBvcnQgY29uc3QgUk9MRSA9ICdyb2xlJztcbmV4cG9ydCBjb25zdCBQRVJGT1JNRVJfUk9MRSA9ICdwZXJmb3JtZXInO1xuZXhwb3J0IGNvbnN0IFVTRVJfUk9MRSA9ICd1c2VyJztcbmV4cG9ydCBjb25zdCBTVFVESU9fUk9MRSA9ICdzdHVkaW8nO1xuZXhwb3J0IGNvbnN0IFNPUlQgPSB7IGRlc2NlbmQ6ICdkZXNjJywgYXNjZW5kOiAnYXNjJyB9O1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQVBJUmVxdWVzdCB7XG4gIHN0YXRpYyB0b2tlbjogc3RyaW5nID0gJyc7XG5cbiAgc2V0QXV0aEhlYWRlclRva2VuKHRva2VuOiBzdHJpbmcpIHtcbiAgICBBUElSZXF1ZXN0LnRva2VuID0gdG9rZW47XG4gIH1cblxuICAvKipcbiAgICogUGFyc2VzIHRoZSBKU09OIHJldHVybmVkIGJ5IGEgbmV0d29yayByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSAge29iamVjdH0gcmVzcG9uc2UgQSByZXNwb25zZSBmcm9tIGEgbmV0d29yayByZXF1ZXN0XG4gICAqXG4gICAqIEByZXR1cm4ge29iamVjdH0gICAgICAgICAgVGhlIHBhcnNlZCBKU09OIGZyb20gdGhlIHJlcXVlc3RcbiAgICovXG4gIHByaXZhdGUgcGFyc2VKU09OKHJlc3BvbnNlOiBSZXNwb25zZSkge1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwNCB8fCByZXNwb25zZS5zdGF0dXMgPT09IDIwNSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGEgbmV0d29yayByZXF1ZXN0IGNhbWUgYmFjayBmaW5lLCBhbmQgdGhyb3dzIGFuIGVycm9yIGlmIG5vdFxuICAgKlxuICAgKiBAcGFyYW0gIHtvYmplY3R9IHJlc3BvbnNlICAgQSByZXNwb25zZSBmcm9tIGEgbmV0d29yayByZXF1ZXN0XG4gICAqXG4gICAqIEByZXR1cm4ge29iamVjdHx1bmRlZmluZWR9IFJldHVybnMgZWl0aGVyIHRoZSByZXNwb25zZSwgb3IgdGhyb3dzIGFuIGVycm9yXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIGNoZWNrU3RhdHVzKHJlc3BvbnNlOiBSZXNwb25zZSkge1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gMjAwICYmIHJlc3BvbnNlLnN0YXR1cyA8IDMwMCkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cblxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQxMykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXF1ZXN0IEVudGl0eSBUb28gTGFyZ2UnKTtcbiAgICB9XG5cbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDMpIHtcbiAgICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLyc7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRm9yYmlkZGVuIGluIHRoZSBhY3Rpb24hJyk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpIGFzIGFueTtcbiAgICAvLyBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgIC8vIHRocm93IGVycm9yO1xuICAgIHRocm93IHJlc3BvbnNlLmNsb25lKCkuanNvbigpO1xuICB9XG5cbiAgcmVxdWVzdChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBtZXRob2Q/OiBzdHJpbmcsXG4gICAgYm9keT86IGFueSxcbiAgICBoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfVxuICApOiBQcm9taXNlPElSZXNwb25zZTxhbnk+PiB7XG4gICAgY29uc3QgdmVyYiA9IChtZXRob2QgfHwgJ2dldCcpLnRvVXBwZXJDYXNlKCk7XG4gICAgY29uc3QgdXBkYXRlZEhlYWRlciA9IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAvLyBUT0RPIC0gY2hlY2sgbWVcbiAgICAgIEF1dGhvcml6YXRpb246XG4gICAgICAgIEFQSVJlcXVlc3QudG9rZW4gfHwgKHByb2Nlc3MuYnJvd3NlciA/IGNvb2tpZS5nZXQoVE9LRU4pIDogJycpLFxuICAgICAgLi4uKGhlYWRlcnMgfHwge30pXG4gICAgfTtcbiAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcblxuICAgIHJldHVybiBmZXRjaChpc1VybCh1cmwpID8gdXJsIDogYCR7Y29uZmlnLkFQSV9FTkRQT0lOVCB8fCBjb25maWcuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UfSR7dXJsfWAsIHtcbiAgICAgIG1ldGhvZDogdmVyYixcbiAgICAgIGhlYWRlcnM6IHVwZGF0ZWRIZWFkZXIsXG4gICAgICBib2R5OiBib2R5ID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBudWxsXG4gICAgfSlcbiAgICAgIC50aGVuKHRoaXMuY2hlY2tTdGF0dXMpXG4gICAgICAudGhlbih0aGlzLnBhcnNlSlNPTik7XG4gIH1cblxuICBidWlsZFVybChiYXNlVXJsOiBzdHJpbmcsIHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbiB9KSB7XG4gICAgaWYgKCFwYXJhbXMpIHtcbiAgICAgIHJldHVybiBiYXNlVXJsO1xuICAgIH1cblxuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gT2JqZWN0LmtleXMocGFyYW1zKVxuICAgICAgLm1hcCgoaykgPT4gYCR7ZW5jb2RlVVJJQ29tcG9uZW50KGspfT0ke2VuY29kZVVSSUNvbXBvbmVudChwYXJhbXNba10pfWApXG4gICAgICAuam9pbignJicpO1xuICAgIHJldHVybiBgJHtiYXNlVXJsfT8ke3F1ZXJ5U3RyaW5nfWA7XG4gIH1cblxuICBnZXQodXJsOiBzdHJpbmcsIGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1cmwsICdnZXQnLCBudWxsLCBoZWFkZXJzKTtcbiAgfVxuXG4gIHBvc3QodXJsOiBzdHJpbmcsIGRhdGE/OiBhbnksIGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1cmwsICdwb3N0JywgZGF0YSwgaGVhZGVycyk7XG4gIH1cblxuICBwdXQodXJsOiBzdHJpbmcsIGRhdGE/OiBhbnksIGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1cmwsICdwdXQnLCBkYXRhLCBoZWFkZXJzKTtcbiAgfVxuXG4gIGRlbCh1cmw6IHN0cmluZywgZGF0YT86IGFueSwgaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHVybCwgJ2RlbGV0ZScsIGRhdGEsIGhlYWRlcnMpO1xuICB9XG5cbiAgdXBsb2FkKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGZpbGVzOiB7XG4gICAgICBmaWxlOiBGaWxlO1xuICAgICAgZmllbGRuYW1lOiBzdHJpbmc7XG4gICAgfVtdLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG9uUHJvZ3Jlc3M6IEZ1bmN0aW9uO1xuICAgICAgY3VzdG9tRGF0YT86IFJlY29yZDxzdHJpbmcsIGFueT47XG4gICAgICBtZXRob2Q/OiBzdHJpbmc7XG4gICAgfSA9IHtcbiAgICAgIG9uUHJvZ3Jlc3MoKSB7fSxcbiAgICAgIG1ldGhvZDogJ1BPU1QnXG4gICAgfVxuICApIHtcbiAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgICBjb25zdCB1cGxvYWRVcmwgPSBpc1VybCh1cmwpID8gdXJsIDogYCR7Y29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0ke3VybH1gO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgcmVxLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQubGVuZ3RoQ29tcHV0YWJsZSkge1xuICAgICAgICAgIG9wdGlvbnMub25Qcm9ncmVzcyh7XG4gICAgICAgICAgICBwZXJjZW50YWdlOiAoZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWwpICogMTAwXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXEuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IHJlcS5zdGF0dXMgPj0gMjAwICYmIHJlcS5zdGF0dXMgPCAzMDA7XG4gICAgICAgIGNvbnN0IHsgcmVzcG9uc2UgfSA9IHJlcTtcbiAgICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChyZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgfSk7XG5cbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG4gICAgICAgIHJlamVjdChyZXEucmVzcG9uc2UpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICBmaWxlcy5mb3JFYWNoKChmKSA9PiBmb3JtRGF0YS5hcHBlbmQoZi5maWVsZG5hbWUsIGYuZmlsZSwgZi5maWxlLm5hbWUpKTtcbiAgICAgIG9wdGlvbnMuY3VzdG9tRGF0YVxuICAgICAgICAmJiBPYmplY3Qua2V5cyhvcHRpb25zLmN1c3RvbURhdGEpLmZvckVhY2goXG4gICAgICAgICAgKGZpZWxkbmFtZSkgPT4gdHlwZW9mIG9wdGlvbnMuY3VzdG9tRGF0YVtmaWVsZG5hbWVdICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgJiYgZm9ybURhdGEuYXBwZW5kKGZpZWxkbmFtZSwgb3B0aW9ucy5jdXN0b21EYXRhW2ZpZWxkbmFtZV0pXG4gICAgICAgICk7XG5cbiAgICAgIHJlcS5yZXNwb25zZVR5cGUgPSAnanNvbic7XG4gICAgICByZXEub3BlbihvcHRpb25zLm1ldGhvZCB8fCAnUE9TVCcsIHVwbG9hZFVybCk7XG5cbiAgICAgIGNvbnN0IHRva2VuOiBhbnkgPSBjb29raWUuZ2V0KFRPS0VOKTtcbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICByZXEuc2V0UmVxdWVzdEhlYWRlcignQXV0aG9yaXphdGlvbicsIHRva2VuKTtcbiAgICAgIH1cbiAgICAgIHJlcS5zZW5kKGZvcm1EYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlZ2lzdGVyKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGRhdGE6IElSZWdpc3RlckZvcm1EYXRhLFxuICAgIG9wdGlvbnM6IHsgb25Qcm9ncmVzczogRnVuY3Rpb24gfSA9IHtcbiAgICAgIG9uUHJvZ3Jlc3MoKSB7fVxuICAgIH1cbiAgKSB7XG4gICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5sZW5ndGhDb21wdXRhYmxlKSB7XG4gICAgICAgICAgb3B0aW9ucy5vblByb2dyZXNzKHtcbiAgICAgICAgICAgIHBlcmNlbnRhZ2U6IChldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCkgKiAxMDBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJlcS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBzdWNjZXNzID0gcmVxLnN0YXR1cyA+PSAyMDAgJiYgcmVxLnN0YXR1cyA8IDMwMDtcbiAgICAgICAgY29uc3QgeyByZXNwb25zZSB9ID0gcmVxO1xuICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgcmVxLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICAgICAgcmVqZWN0KHJlcS5yZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIC8vIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUsIGZpbGUubmFtZSk7XG4gICAgICBpZiAoZGF0YS5kb2N1bWVudFZlcmlmaWNhdGlvbikge1xuICAgICAgICBjb25zdCBkb2N1bWVudFZlcmlmaWNhdGlvbkZpbGUgPSBkYXRhLmRvY3VtZW50VmVyaWZpY2F0aW9uLmZpbGUub3JpZ2luRmlsZU9iajtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFxuICAgICAgICAgICdkb2N1bWVudFZlcmlmaWNhdGlvbicsXG4gICAgICAgICAgZG9jdW1lbnRWZXJpZmljYXRpb25GaWxlLFxuICAgICAgICAgIGRvY3VtZW50VmVyaWZpY2F0aW9uRmlsZS5uYW1lXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhLmlkVmVyaWZpY2F0aW9uKSB7XG4gICAgICAgIGNvbnN0IGlkVmVyaWZpY2F0aW9uRGlsZSA9IGRhdGEuaWRWZXJpZmljYXRpb24uZmlsZS5vcmlnaW5GaWxlT2JqO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXG4gICAgICAgICAgJ2lkVmVyaWZpY2F0aW9uJyxcbiAgICAgICAgICBpZFZlcmlmaWNhdGlvbkRpbGUsXG4gICAgICAgICAgaWRWZXJpZmljYXRpb25EaWxlLm5hbWVcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmtleXMoXG4gICAgICAgIG9taXQoZGF0YSwgWydkb2N1bWVudFZlcmlmaWNhdGlvbicsICdpZFZlcmlmaWNhdGlvbiddKVxuICAgICAgKS5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCh2LCBkYXRhW3ZdKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXEucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xuICAgICAgcmVxLm9wZW4oJ1BPU1QnLCBpc1VybCh1cmwpID8gdXJsIDogYCR7Y29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0ke3VybH1gKTtcblxuICAgICAgY29uc3QgdG9rZW46IGFueSA9IGNvb2tpZS5nZXQoVE9LRU4pO1xuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKCdBdXRob3JpemF0aW9uJywgdG9rZW4pO1xuICAgICAgfVxuICAgICAgcmVxLnNlbmQoZm9ybURhdGEpO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSc7XG5pbXBvcnQge1xuICBJTG9naW4sXG4gIElwZXJmb3JtZXJMb2dpbixcbiAgSVJlZ2lzdGVyRm9ybURhdGEsXG4gIElVc2VyUmVnaXN0ZXJGb3JtRGF0YVxufSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQge1xuICBBUElSZXF1ZXN0LCBUT0tFTiwgSVJlc3BvbnNlLCBST0xFXG59IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgbG9naW4oZGF0YTogSUxvZ2luKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL2F1dGgvdXNlcnMvbG9naW4nLCBkYXRhKTtcbiAgfVxuXG4gIHNldEF1dGhIZWFkZXIodG9rZW46IHN0cmluZywgcm9sZTogc3RyaW5nKSB7XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2pzLWNvb2tpZS9qcy1jb29raWVcbiAgICAvLyBzaW5jZSBTYWZhcmkgZG9lcyBub3Qgc3VwcG9ydCwgbmVlZCBhIGJldHRlciBzb2x1dGlvblxuICAgIGNvb2tpZS5zZXQoVE9LRU4sIHRva2VuLCB7IGV4cGlyZXM6IDM2NSB9KTtcbiAgICBjb29raWUuc2V0KFJPTEUsIHJvbGUsIHsgZXhwaXJlczogMzY1IH0pO1xuICAgIHRoaXMuc2V0QXV0aEhlYWRlclRva2VuKHRva2VuKTtcbiAgfVxuXG4gIHBlcmZvcm1lckxvZ2luKGRhdGE6IElwZXJmb3JtZXJMb2dpbikge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9hdXRoL3BlcmZvcm1lcnMvbG9naW4nLCBkYXRhKTtcbiAgfVxuXG4gIHN0dWRpb0xvZ2luKGRhdGE6IElMb2dpbikge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9hdXRoL3N0dWRpby9sb2dpbicsIGRhdGEpO1xuICB9XG5cbiAgc2V0VG9rZW4odG9rZW46IHN0cmluZyk6IHZvaWQge1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qcy1jb29raWUvanMtY29va2llXG4gICAgLy8gc2luY2UgU2FmYXJpIGRvZXMgbm90IHN1cHBvcnQsIG5lZWQgYSBiZXR0ZXIgc29sdXRpb25cbiAgICBjb29raWUuc2V0KFRPS0VOLCB0b2tlbiwgeyBleHBpcmVzOiAzNjUgfSk7XG4gICAgdGhpcy5zZXRBdXRoSGVhZGVyVG9rZW4odG9rZW4pO1xuICB9XG5cbiAgZ2V0VG9rZW4oKTogc3RyaW5nIHtcbiAgICBjb25zdCB0b2tlbiA9IGNvb2tpZS5nZXQoVE9LRU4pO1xuICAgIHJldHVybiB0b2tlbiB8fCBudWxsO1xuICB9XG5cbiAgZ2V0Um9sZSgpOiBzdHJpbmcge1xuICAgIGNvbnN0IHJvbGUgPSBjb29raWUuZ2V0KFJPTEUpO1xuICAgIHJldHVybiByb2xlIHx8IG51bGw7XG4gIH1cblxuICByZW1vdmVUb2tlbigpOiB2b2lkIHtcbiAgICBjb29raWUucmVtb3ZlKFRPS0VOKTtcbiAgICBjb29raWUucmVtb3ZlKFJPTEUpO1xuICB9XG5cbiAgcmVtb3ZlUmVtZW1iZXIoKTogdm9pZCB7XG4gICAgcHJvY2Vzcy5icm93c2VyICYmIGNvb2tpZS5yZW1vdmUoJ3JlbWVtYmVyTWUnKTtcbiAgfVxuXG4gIHVwZGF0ZVBhc3N3b3JkKGJvZHk6IHsgcGFzc3dvcmQ6IHN0cmluZzsgc291cmNlPzogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5wdXQoJy9hdXRoL3VzZXJzL21lL3Bhc3N3b3JkJywgYm9keSk7XG4gIH1cblxuICBwZXJmb3JtZXJzUmVnaXN0ZXIoZGF0YTogSVJlZ2lzdGVyRm9ybURhdGEpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnJlZ2lzdGVyKCcvYXV0aC9wZXJmb3JtZXJzL3JlZ2lzdGVyJywgZGF0YSk7XG4gIH1cblxuICB1c2VyUmVnaXN0ZXIoZGF0YTogSVVzZXJSZWdpc3RlckZvcm1EYXRhKTogUHJvbWlzZTxJUmVzcG9uc2U8YW55Pj4ge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9hdXRoL3VzZXJzL3JlZ2lzdGVyJywgZGF0YSk7XG4gIH1cblxuICBzdHVkaW9SZWdpc3RlcihkYXRhOiBJUmVnaXN0ZXJGb3JtRGF0YSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMucmVnaXN0ZXIoJy9hdXRoL3N0dWRpby9yZWdpc3RlcicsIGRhdGEpO1xuICB9XG5cbiAgZm9yZ290UGFzc3dvcmQoZW1haWw6IHN0cmluZywgdHlwZTogc3RyaW5nKSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGVtYWlsLFxuICAgICAgdHlwZVxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL2F1dGgvdXNlcnMvZm9yZ290JywgZGF0YSk7XG4gIH1cblxuICByZXNlbmRWZXJpZmljYXRpb25FbWFpbChkYXRhOiB7IGVtYWlsOiBzdHJpbmcsIHNvdXJjZTogc3RyaW5nfSkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy92ZXJpZmljYXRpb24vcmVzZW5kLXZlcmlmaWNhdGlvbi1lbWFpbCcsIGRhdGEpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBhdXRoU2VydmljZSA9IG5ldyBBdXRoU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgSUJhbm5lclNlYXJjaCB9IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIEJhbm5lclNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgc2VhcmNoKHF1ZXJ5OiBJQmFubmVyU2VhcmNoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9iYW5uZXJzL3NlYXJjaCcsIHF1ZXJ5IGFzIGFueSkpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBiYW5uZXJTZXJ2aWNlID0gbmV3IEJhbm5lclNlcnZpY2UoKTtcbiIsImxldCBnbG9iYWxDb25maWcgPSB7fSBhcyBhbnk7XG5cbmV4cG9ydCBjb25zdCBzZXRHbG9iYWxDb25maWcgPSAoY29uZmlnOiBhbnkpID0+IHtcbiAgZ2xvYmFsQ29uZmlnID0gY29uZmlnO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEdsb2JhbENvbmZpZyA9ICgpID0+IGdsb2JhbENvbmZpZztcbiIsImltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuY2xhc3MgRWFybmluZ1NlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgc2VhcmNoKHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0sIHJvbGUgPSAncGVyZm9ybWVyJykge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKGAvZWFybmluZy8ke3JvbGV9L3NlYXJjaGAsIHBhcmFtcykpO1xuICB9XG5cbiAgc3RhdHMocGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSwgcm9sZSA9ICdwZXJmb3JtZXInKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoYC9lYXJuaW5nLyR7cm9sZX0vc3RhdHNgLCBwYXJhbXMpKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZWFybmluZ1NlcnZpY2UgPSBuZXcgRWFybmluZ1NlcnZpY2UoKTtcbiIsImltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuY2xhc3MgRmF2b3VyaXRlU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBsaWtlKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvZmF2b3VyaXRlLyR7aWR9L2xpa2VgKTtcbiAgfVxuXG4gIHVubGlrZShpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL2Zhdm91cml0ZS8ke2lkfS91bmxpa2VgKTtcbiAgfVxuXG4gIGZhdm9yaXRlKGlkOiBzdHJpbmcsIGlzRmF2b3JpdGVkOiBib29sZWFuKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL2Zhdm91cml0ZS8ke2lkfS8ke2lzRmF2b3JpdGVkID8gJ3VubGlrZScgOiAnbGlrZSd9YCk7XG4gIH1cblxuICBzZWFyY2gocXVlcnk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL2Zhdm91cml0ZScsIHF1ZXJ5KSk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGZhdm91cml0ZVNlcnZpY2UgPSBuZXcgRmF2b3VyaXRlU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgSVJlc3BvbnNlLCBJRGF0YVJlc3BvbnNlLCBJUGVyZm9ybWVyR2FsbGVyeSB9IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIEdhbGxlcnlTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIHNlYXJjaChcbiAgICBwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9LFxuICAgIGlzUGVyZm9ybWVyID0gdHJ1ZVxuICApOiBQcm9taXNlPElSZXNwb25zZTxJRGF0YVJlc3BvbnNlPElQZXJmb3JtZXJHYWxsZXJ5Pj4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXQoXG4gICAgICB0aGlzLmJ1aWxkVXJsKFxuICAgICAgICBpc1BlcmZvcm1lclxuICAgICAgICAgID8gJy9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9nYWxsZXJpZXMvc2VhcmNoJ1xuICAgICAgICAgIDogJy91c2VyL3BlcmZvcm1lci1hc3NldHMvZ2FsbGVyaWVzL3NlYXJjaCcsXG4gICAgICAgIHBhcmFtc1xuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwdXJjaGFzZWQocGFyYW1zPzoge1xuICAgIFtrZXk6IHN0cmluZ106IGFueTtcbiAgfSk6IFByb21pc2U8SVJlc3BvbnNlPElEYXRhUmVzcG9uc2U8SVBlcmZvcm1lckdhbGxlcnk+Pj4ge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvcHVyY2hhc2VkLWl0ZW1zL3VzZXIvZ2FsbGVyaWVzJywgcGFyYW1zKSk7XG4gIH1cblxuICBjcmVhdGUoZGF0YSkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9nYWxsZXJpZXMnLCBkYXRhKTtcbiAgfVxuXG4gIHVwZGF0ZShpZCwgZGF0YSkge1xuICAgIHJldHVybiB0aGlzLnB1dChgL3BlcmZvcm1lci9wZXJmb3JtZXItYXNzZXRzL2dhbGxlcmllcy8ke2lkfWAsIGRhdGEpO1xuICB9XG5cbiAgZGV0YWlscyhpZDogc3RyaW5nLCBoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiB0aGlzLmdldChcbiAgICAgIGAvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvZ2FsbGVyaWVzLyR7aWR9L3ZpZXdgLFxuICAgICAgaGVhZGVyc1xuICAgICk7XG4gIH1cblxuICBwdWJsaWNkZXRhaWxzKGlkOiBzdHJpbmcsIGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvdXNlci9wZXJmb3JtZXItYXNzZXRzL2dhbGxlcmllcy8ke2lkfS92aWV3YCwgaGVhZGVycyk7XG4gIH1cblxuICByZW1vdmUoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmRlbChgL3BlcmZvcm1lci9wZXJmb3JtZXItYXNzZXRzL2dhbGxlcmllcy8ke2lkfWApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBnYWxsZXJ5U2VydmljZSA9IG5ldyBHYWxsZXJ5U2VydmljZSgpO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi91c2VyLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9wb3N0LnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9wZXJmb21lci1jYXRlZ29yaWVzLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9wZXJmb21lci5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vdmlkZW8uc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3Byb2R1Y3Quc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3NldHRpbmcuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3Bob3RvLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9nYWxsZXJ5LnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9mYXZvdXJpdGUuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3Rva2VuLXBhY2thZ2Uuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3RyYW5zYWN0aW9uLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zdHJlYW0uc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL21lc3NhZ2Uuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3B1cmNoYXNlLWl0ZW0uc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL29yZGVyLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9lYXJuaW5nLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9wYXlvdXQtcmVxdWVzdCc7XG5leHBvcnQgKiBmcm9tICcuL3JlZnVuZC1yZXF1ZXN0LnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi91dGlscy5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vc3R1ZGlvLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9iYW5uZXIuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3BheW1lbnQtaW5mb3JtYXRpb24uc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3N0cmVhbS5zZXJ2aWNlJztcbiIsImltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcbmltcG9ydCB7IGdldEdsb2JhbENvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcblxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIGdldENvbnZlcnNhdGlvbnMocXVlcnk/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9jb252ZXJzYXRpb25zJywgcXVlcnkpKTtcbiAgfVxuXG4gIHNlYXJjaENvbnZlcnNhdGlvbnMocXVlcnk/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9jb252ZXJzYXRpb25zL3NlYXJjaCcsIHF1ZXJ5KSk7XG4gIH1cblxuICBjcmVhdGVDb252ZXJzYXRpb24oZGF0YTogUmVjb3JkPHN0cmluZywgc3RyaW5nPikge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9jb252ZXJzYXRpb25zJywgZGF0YSk7XG4gIH1cblxuICBnZXRDb252ZXJzYXRpb25EZXRhaWwoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmdldChgL2NvbnZlcnNhdGlvbnMvJHtpZH1gKTtcbiAgfVxuXG4gIGdldENvbnZlcnNhdGlvbkJ5U3RyZWFtSWQoc3RyZWFtSWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmdldChgL2NvbnZlcnNhdGlvbnMvc3RyZWFtLyR7c3RyZWFtSWR9YCk7XG4gIH1cblxuICBnZXRNZXNzYWdlcyhjb252ZXJzYXRpb25JZDogc3RyaW5nLCBxdWVyeT86IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybChgL21lc3NhZ2VzL2NvbnZlcnNhdGlvbnMvJHtjb252ZXJzYXRpb25JZH1gLCBxdWVyeSkpO1xuICB9XG5cbiAgZ2V0UHVibGljTWVzc2FnZXMoY29udmVyc2F0aW9uSWQ6IHN0cmluZywgcXVlcnk/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoYC9tZXNzYWdlcy9jb252ZXJzYXRpb25zL3B1YmxpYy8ke2NvbnZlcnNhdGlvbklkfWAsIHF1ZXJ5KSk7XG4gIH1cblxuICBzZW5kTWVzc2FnZShjb252ZXJzYXRpb25JZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL21lc3NhZ2VzL2NvbnZlcnNhdGlvbnMvJHtjb252ZXJzYXRpb25JZH1gLCBkYXRhKTtcbiAgfVxuXG4gIHNlbmRTdHJlYW1NZXNzYWdlKGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsIGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvbWVzc2FnZXMvc3RyZWFtL2NvbnZlcnNhdGlvbnMvJHtjb252ZXJzYXRpb25JZH1gLCBkYXRhKTtcbiAgfVxuXG4gIHNlbmRQdWJsaWNTdHJlYW1NZXNzYWdlKGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsIGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvbWVzc2FnZXMvc3RyZWFtL3B1YmxpYy9jb252ZXJzYXRpb25zLyR7Y29udmVyc2F0aW9uSWR9YCwgZGF0YSk7XG4gIH1cblxuICBmaW5kUHVibGljQ29udmVyc2F0aW9uUGVyZm9ybWVyKHBlcmZvcm1lcklkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9jb252ZXJzYXRpb25zL3N0cmVhbS9wdWJsaWMvJHtwZXJmb3JtZXJJZH1gKTtcbiAgfVxuXG4gIGNvdW50VG90YWxOb3RSZWFkKCkge1xuICAgIHJldHVybiB0aGlzLmdldCgnL21lc3NhZ2VzL2NvdW50aW5nLW5vdC1yZWFkLW1lc3NhZ2VzJyk7XG4gIH1cblxuICByZWFkQWxsSW5Db252ZXJzYXRpb24oY29udmVyc2F0aW9uSWQ6IHN0cmluZyB8IG51bWJlciwgcmVjaXBpZW50SWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9tZXNzYWdlcy9yZWFkLWFsbCcsIHsgY29udmVyc2F0aW9uSWQsIHJlY2lwaWVudElkIH0pO1xuICB9XG5cbiAgZ2V0TWVzc2FnZVVwbG9hZFVybCgpIHtcbiAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgICByZXR1cm4gYCR7Y29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0vbWVzc2FnZXMvcHJpdmF0ZS9maWxlYDtcbiAgfVxuXG4gIGRlbGV0ZU1lc3NhZ2UoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5kZWwoYC9tZXNzYWdlcy8ke2lkfWApO1xuICB9XG5cbiAgZGVsZXRlQWxsTWVzc2FnZUluQ29udmVyc2F0aW9uKGNvbnZlcnNhdGlvbklkKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVsKGAvbWVzc2FnZXMvJHtjb252ZXJzYXRpb25JZH0vcmVtb3ZlLWFsbC1tZXNzYWdlYCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG1lc3NhZ2VTZXJ2aWNlID0gbmV3IE1lc3NhZ2VTZXJ2aWNlKCk7XG4iLCIvLyBpbXBvcnQgeyBJR2FsbGVyeUNyZWF0ZSB9IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIE9yZGVyU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBzZWFyY2gocGF5bG9hZCkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvb3JkZXJzL3NlYXJjaCcsIHBheWxvYWQpKTtcbiAgfVxuXG4gIGRldGFpbHMoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9vcmRlcnMvZGV0YWlscy8ke2lkfWApO1xuICB9XG5cbiAgdXBkYXRlKGlkLCBkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMucHV0KGAvb3JkZXJzLyR7aWR9L3VwZGF0ZWAsIGRhdGEpO1xuICB9XG5cbiAgdXNlclNlYXJjaChxdWVyeSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvb3JkZXJzL3VzZXIvc2VhcmNoJywgcXVlcnkpKTtcbiAgfVxuXG4gIHVzZXJGaW5kRGV0YWlscyhpZCkge1xuICAgIHJldHVybiB0aGlzLmdldChgL29yZGVycy91c2VyL2RldGFpbHMvJHtpZH1gKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgb3JkZXJTZXJ2aWNlID0gbmV3IE9yZGVyU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5jbGFzcyBQYXltZW50SW5mb3JtYXRpb25TZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIGNyZWF0ZShkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3BheW1lbnQtaW5mb3JtYXRpb24nLCBkYXRhKTtcbiAgfVxuXG4gIGZpbmRPbmUoZGF0YSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvcGF5bWVudC1pbmZvcm1hdGlvbicsIGRhdGEpKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcGF5bWVudEluZm9ybWF0aW9uU2VydmljZSA9IG5ldyBQYXltZW50SW5mb3JtYXRpb25TZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBJUmVzcG9uc2UgfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmNsYXNzIFBheW91dFJlcXVlc3RTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIGNhbGN1bGF0ZShwYXJhbXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0sIHJvbGU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmdldChcbiAgICAgIHRoaXMuYnVpbGRVcmwoYC9lYXJuaW5nLyR7cm9sZSB8fCAncGVyZm9ybWVyJ30vcGF5b3V0YCwgcGFyYW1zKVxuICAgICk7XG4gIH1cblxuICBzZWFyY2gocXVlcnk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3BheW91dC1yZXF1ZXN0cy9wZXJmb3JtZXIvc2VhcmNoJywgcXVlcnkpKTtcbiAgfVxuXG4gIHN0dWRpb1NlYXJjaChxdWVyeTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvcGF5b3V0LXJlcXVlc3RzL3N0dWRpby9zZWFyY2gnLCBxdWVyeSkpO1xuICB9XG5cbiAgY3JlYXRlKGJvZHk6IGFueSwgcm9sZSA9ICdwZXJmb3JtZXInKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL3BheW91dC1yZXF1ZXN0cy8ke3JvbGV9YCwgYm9keSk7XG4gIH1cblxuICB1cGRhdGUoaWQ6IHN0cmluZywgYm9keTogYW55LCByb2xlID0gJ3BlcmZvcm1lcicpIHtcbiAgICByZXR1cm4gdGhpcy5wdXQoYC9wYXlvdXQtcmVxdWVzdHMvJHtyb2xlfS8ke2lkfWAsIGJvZHkpO1xuICB9XG5cbiAgZGV0YWlsKFxuICAgIGlkOiBzdHJpbmcsXG4gICAgaGVhZGVyczoge1xuICAgICAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xuICAgIH0sXG4gICAgcm9sZSA9ICdwZXJmb3JtZXInXG4gICk6IFByb21pc2U8SVJlc3BvbnNlPFBheW91dFJlcXVlc3RTZXJ2aWNlPj4ge1xuICAgIHJldHVybiB0aGlzLmdldChgL3BheW91dC1yZXF1ZXN0cy8ke3JvbGV9LyR7aWR9L3ZpZXdgLCBoZWFkZXJzKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcGF5b3V0UmVxdWVzdFNlcnZpY2UgPSBuZXcgUGF5b3V0UmVxdWVzdFNlcnZpY2UoKTtcbiIsImltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIFBlcmZvcm1lckNhdGVnb3JpZXNTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIGdldExpc3QocXVlcnk/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9wZXJmb3JtZXItY2F0ZWdvcmllcycsIHF1ZXJ5KSk7XG4gIH1cblxuICBkZXRhaWxzKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9wZXJmb3JtZXItY2F0ZWdvcmllcy8ke2lkfS92aWV3YCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHBlcmZvcm1lckNhdGVnb3JpZXMgPSBuZXcgUGVyZm9ybWVyQ2F0ZWdvcmllc1NlcnZpY2UoKTtcbiIsImltcG9ydCB7XG4gIElQZXJmb3JtZXIsXG4gIElDcmVhdGVQZXJmb3JtZXJQcm9kdWN0UGF5bG9hZCxcbiAgSVVwZGF0ZVBlcmZvcm1lclByb2R1Y3RQYXlsb2FkXG59IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IGlzVXJsIH0gZnJvbSAnQGxpYi9zdHJpbmcnO1xuaW1wb3J0IHsgb21pdCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSc7XG5cbmltcG9ydCB7IEFQSVJlcXVlc3QsIElSZXNwb25zZSwgVE9LRU4gfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcbmltcG9ydCB7IGdldEdsb2JhbENvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcblxuZXhwb3J0IGNsYXNzIFBlcmZvcm1lclNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgbWUoaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pOiBQcm9taXNlPElSZXNwb25zZTxJUGVyZm9ybWVyPj4ge1xuICAgIHJldHVybiB0aGlzLmdldCgnL3BlcmZvcm1lcnMvbWUnLCBoZWFkZXJzKTtcbiAgfVxuXG4gIHVwZGF0ZU1lKHBheWxvYWQ6IGFueSkge1xuICAgIHJldHVybiB0aGlzLnB1dCgnL3BlcmZvcm1lcnMnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHNlYXJjaChxdWVyeT86IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3BlcmZvcm1lcnMvc2VhcmNoJywgcXVlcnkpKTtcbiAgfVxuXG4gIGRldGFpbHModXNlcm5hbWU6IHN0cmluZywgaGVhZGVycyA9IHt9KTogUHJvbWlzZTxJUmVzcG9uc2U8SVBlcmZvcm1lcj4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9wZXJmb3JtZXJzLyR7dXNlcm5hbWV9L3ZpZXdgLCBoZWFkZXJzKTtcbiAgfVxuXG4gIGdldEF2YXRhclVwbG9hZFVybCgpIHtcbiAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgICByZXR1cm4gYCR7Y29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0vcGVyZm9ybWVycy9hdmF0YXIvdXBsb2FkYDtcbiAgfVxuXG4gIGdldERvY3VtZW50c1VwbG9hZFVybCgpIHtcbiAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgICByZXR1cm4gYCR7Y29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0vcGVyZm9ybWVycy9kb2N1bWVudHMvdXBsb2FkYDtcbiAgfVxuXG4gIGdldFJlbGVhc2VGb3JtVXJsKCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpO1xuICAgIHJldHVybiBgJHtjb25maWcuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UfS9wZXJmb3JtZXJzL3JlbGVhc2UtZm9ybS91cGxvYWRgO1xuICB9XG5cbiAgbXlQcm9kdWN0KHF1ZXJ5PzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldChcbiAgICAgIHRoaXMuYnVpbGRVcmwoJy9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9wcm9kdWN0cy9zZWFyY2gnLCBxdWVyeSlcbiAgICApO1xuICB9XG5cbiAgY3JlYXRlUHJvZHVjdChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBkYXRhOiBJQ3JlYXRlUGVyZm9ybWVyUHJvZHVjdFBheWxvYWQsXG4gICAgb3B0aW9uczogeyBvblByb2dyZXNzOiBGdW5jdGlvbiB9ID0ge1xuICAgICAgb25Qcm9ncmVzcygpIHt9XG4gICAgfVxuICApOiBQcm9taXNlPElSZXNwb25zZTxhbnk+PiB7XG4gICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5sZW5ndGhDb21wdXRhYmxlKSB7XG4gICAgICAgICAgb3B0aW9ucy5vblByb2dyZXNzKHtcbiAgICAgICAgICAgIHBlcmNlbnRhZ2U6IChldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCkgKiAxMDBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJlcS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBzdWNjZXNzID0gcmVxLnN0YXR1cyA+PSAyMDAgJiYgcmVxLnN0YXR1cyA8IDMwMDtcbiAgICAgICAgY29uc3QgeyByZXNwb25zZSB9ID0gcmVxO1xuICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgcmVxLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICAgICAgcmVqZWN0KHJlcS5yZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIC8vIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUsIGZpbGUubmFtZSk7XG4gICAgICBpZiAoZGF0YS5pbWFnZSkge1xuICAgICAgICBjb25zdCBpbWFnZSA9IGRhdGEuaW1hZ2UuZmlsZS5vcmlnaW5GaWxlT2JqO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgaW1hZ2UsIGltYWdlLm5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YS5kaWdpdGFsRmlsZSkge1xuICAgICAgICBjb25zdCBkaWdpdGFsRmlsZSA9IGRhdGEuZGlnaXRhbEZpbGUuZmlsZS5vcmlnaW5GaWxlT2JqO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2RpZ2l0YWxGaWxlJywgZGlnaXRhbEZpbGUsIGRpZ2l0YWxGaWxlLm5hbWUpO1xuICAgICAgfVxuXG4gICAgICBPYmplY3Qua2V5cyhvbWl0KGRhdGEsIFsnaW1hZ2UnLCAnZGlnaXRhbEZpbGUnXSkpLmZvckVhY2goKHYpID0+IHtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKHYsIGRhdGFbdl0pO1xuICAgICAgfSk7XG5cbiAgICAgIHJlcS5yZXNwb25zZVR5cGUgPSAnanNvbic7XG4gICAgICByZXEub3BlbignUE9TVCcsIGlzVXJsKHVybCkgPyB1cmwgOiBgJHtjb25maWcuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UfSR7dXJsfWApO1xuXG4gICAgICBjb25zdCB0b2tlbjogYW55ID0gY29va2llLmdldChUT0tFTik7XG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCB0b2tlbik7XG4gICAgICB9XG4gICAgICByZXEuc2VuZChmb3JtRGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVQcm9kdWN0KFxuICAgIHVybDogc3RyaW5nLFxuICAgIGRhdGE6IElVcGRhdGVQZXJmb3JtZXJQcm9kdWN0UGF5bG9hZCxcbiAgICBvcHRpb25zOiB7IG9uUHJvZ3Jlc3M6IEZ1bmN0aW9uIH0gPSB7XG4gICAgICBvblByb2dyZXNzKCkge31cbiAgICB9XG4gICk6IFByb21pc2U8SVJlc3BvbnNlPGFueT4+IHtcbiAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50Lmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgICBvcHRpb25zLm9uUHJvZ3Jlc3Moe1xuICAgICAgICAgICAgcGVyY2VudGFnZTogKGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsKSAqIDEwMFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmVxLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSByZXEuc3RhdHVzID49IDIwMCAmJiByZXEuc3RhdHVzIDwgMzAwO1xuICAgICAgICBjb25zdCB7IHJlc3BvbnNlIH0gPSByZXE7XG4gICAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICAgIHJldHVybiByZWplY3QocmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgICByZWplY3QocmVxLnJlc3BvbnNlKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgLy8gZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSwgZmlsZS5uYW1lKTtcbiAgICAgIGlmIChkYXRhLmltYWdlICYmIGRhdGEuaW1hZ2UuZmlsZSkge1xuICAgICAgICBjb25zdCBpbWFnZSA9IGRhdGEuaW1hZ2UuZmlsZS5vcmlnaW5GaWxlT2JqO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgaW1hZ2UsIGltYWdlLm5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YS5kaWdpdGFsRmlsZSAmJiBkYXRhLmRpZ2l0YWxGaWxlLmZpbGUpIHtcbiAgICAgICAgY29uc3QgZGlnaXRhbEZpbGUgPSBkYXRhLmRpZ2l0YWxGaWxlLmZpbGUub3JpZ2luRmlsZU9iajtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdkaWdpdGFsRmlsZScsIGRpZ2l0YWxGaWxlLCBkaWdpdGFsRmlsZS5uYW1lKTtcbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmtleXMob21pdChkYXRhLCBbJ2ltYWdlJywgJ2RpZ2l0YWxGaWxlJ10pKS5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCh2LCBkYXRhW3ZdKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXEucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xuICAgICAgcmVxLm9wZW4oJ1BVVCcsIGlzVXJsKHVybCkgPyB1cmwgOiBgJHtjb25maWcuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UfSR7dXJsfWApO1xuXG4gICAgICBjb25zdCB0b2tlbjogYW55ID0gY29va2llLmdldChUT0tFTik7XG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCB0b2tlbik7XG4gICAgICB9XG4gICAgICByZXEuc2VuZChmb3JtRGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVQcm9kdWN0KGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5kZWwoYC9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9wcm9kdWN0cy8ke2lkfWApO1xuICB9XG5cbiAgZ2V0Q29tbWlzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoJy9zZXR0aW5ncy9wZXJmb3JtZXIvY29tbWlzc2lvbicpO1xuICB9XG5cbiAgdXBkYXRlUGF5bWVudEluZm8ocGF5bG9hZCk6IFByb21pc2U8SVJlc3BvbnNlPElQZXJmb3JtZXI+PiB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3BlcmZvcm1lcnMvYmFuay10cmFuc2Zlci91cGRhdGUnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHVwZGF0ZURpcmVjdERlcG9zdChwYXlsb2FkKTogUHJvbWlzZTxJUmVzcG9uc2U8SVBlcmZvcm1lcj4+IHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvcGVyZm9ybWVycy9kaXJlY3QtZGVwb3NpdC91cGRhdGUnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHVwZGF0ZVBheHVtKHBheWxvYWQpOiBQcm9taXNlPElSZXNwb25zZTxJUGVyZm9ybWVyPj4ge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9wZXJmb3JtZXJzL3BheHVtL3VwZGF0ZScsIHBheWxvYWQpO1xuICB9XG5cbiAgdXBkYXRlQml0cGF5KHBheWxvYWQpOiBQcm9taXNlPElSZXNwb25zZTxJUGVyZm9ybWVyPj4ge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9wZXJmb3JtZXJzL2JpdHBheS91cGRhdGUnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHVwZGF0ZVN0cmVhbWluZ1N0YXR1cyhwYXlsb2FkOiB7XG4gICAgc3RhdHVzOiBzdHJpbmc7XG4gIH0pOiBQcm9taXNlPElSZXNwb25zZTxJUGVyZm9ybWVyPj4ge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9wZXJmb3JtZXJzL3N0cmVhbWluZy1zdGF0dXMvdXBkYXRlJywgcGF5bG9hZCk7XG4gIH1cblxuICBnZW9CbG9jayhwYXlsb2FkOiB7dXNlcklkcz86IHN0cmluZ1tdLCBjb3VudHJpZXM/OiBzdHJpbmdbXX0pOiBQcm9taXNlPElSZXNwb25zZTxhbnk+PiB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3BlcmZvcm1lcnMvYmxvY2tpbmcvdXBkYXRlJywgcGF5bG9hZCk7XG4gIH1cblxuICBnZXRCbG9ja2VkTGlzdCgpOiBQcm9taXNlPElSZXNwb25zZTxhbnk+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9wZXJmb3JtZXJzL2Jsb2NraW5nJykpO1xuICB9XG5cbiAgaW5jcmVhc2VWaWV3KHBlcmZvcm1lcklkKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL3BlcmZvcm1lcnMvJHtwZXJmb3JtZXJJZH0vaW5jLXZpZXdgKTtcbiAgfVxuXG4gIHVwZGF0ZURlZmF1bHRQcmljZShwYXlsb2FkKTogUHJvbWlzZTxJUmVzcG9uc2U8SVBlcmZvcm1lcj4+IHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvcGVyZm9ybWVycy9kZWZhdWx0LXByaWNlL3VwZGF0ZScsIHBheWxvYWQpO1xuICB9XG5cbiAgdXBkYXRlQnJvYWRjYXN0U2V0dGluZyhwYXlsb2FkKTogUHJvbWlzZTxJUmVzcG9uc2U8YW55Pj4ge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9wZXJmb3JtZXJzL2Jyb2FkY2FzdC1zZXR0aW5nL3VwZGF0ZScsIHBheWxvYWQpO1xuICB9XG5cbiAgc3VzcGVuZEFjY291bnQocGFzc3dvcmQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9wZXJmb3JtZXJzL3N1c3BlbmQtYWNjb3VudCcsIHsgcGFzc3dvcmQgfSk7XG4gIH1cblxuICBjaGVja0Jsb2NrKHBlcmZvcm1lcklkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9wZXJmb3JtZXJzLyR7cGVyZm9ybWVySWR9L2NoZWNrLWJsb2NraW5nYCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IEdFTk5ERVJfUEVSRk9STUVSID0gWydmZW1hbGUnLCAndHJhbnNnZW5kZXInLCAnbWFsZSddO1xuXG5leHBvcnQgY29uc3QgcGVyZm9ybWVyU2VydmljZSA9IG5ldyBQZXJmb3JtZXJTZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBvbWl0IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGlzVXJsIH0gZnJvbSAnQGxpYi9zdHJpbmcnO1xuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnO1xuaW1wb3J0IHsgVE9LRU4gfSBmcm9tICdzcmMvc2VydmljZXMvYXBpLXJlcXVlc3QnO1xuaW1wb3J0IHtcbiAgSVJlc3BvbnNlLFxuICBJUGVyZm9ybWVyUGhvdG9QYXlsb2FkLFxuICBJRGF0YVJlc3BvbnNlLFxuICBJUGhvdG9cbn0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuaW1wb3J0IHsgZ2V0R2xvYmFsQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuXG5leHBvcnQgY2xhc3MgUGhvdG9TZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIHNlYXJjaChwYXJhbXM/OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xuICB9KTogUHJvbWlzZTxJUmVzcG9uc2U8SURhdGFSZXNwb25zZTxJUGhvdG8+Pj4ge1xuICAgIHJldHVybiB0aGlzLmdldChcbiAgICAgIHRoaXMuYnVpbGRVcmwoJy9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9waG90b3Mvc2VhcmNoJywgcGFyYW1zKVxuICAgICk7XG4gIH1cblxuICBzZWFyY2hCeUdhbGxlcnkoXG4gICAgZ2FsbGVyeUlkOiBzdHJpbmcsXG4gICAgcGFyYW1zPzoge1xuICAgICAgW2tleTogc3RyaW5nXTogYW55O1xuICAgIH0sXG4gICAgaGVhZGVycz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KFxuICAgICAgdGhpcy5idWlsZFVybChcbiAgICAgICAgYC91c2VyL3BlcmZvcm1lci1hc3NldHMvcGhvdG9zLyR7Z2FsbGVyeUlkfS9zZWFyY2hgLFxuICAgICAgICBwYXJhbXNcbiAgICAgICksXG4gICAgICBoZWFkZXJzXG4gICAgKTtcbiAgfVxuXG4gIGRldGFpbHMoaWQ6IHN0cmluZywgaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9waG90b3MvJHtpZH0vdmlld2AsIGhlYWRlcnMpO1xuICB9XG5cbiAgbXlQaG90b3MocXVlcnk/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KFxuICAgICAgdGhpcy5idWlsZFVybCgnL3BlcmZvcm1lci9wZXJmb3JtZXItYXNzZXRzL3Bob3Rvcy9zZWFyY2gnLCBxdWVyeSlcbiAgICApO1xuICB9XG5cbiAgcmVtb3ZlKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5kZWwoYC9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9waG90b3MvJHtpZH1gKTtcbiAgfVxuXG4gIGNyZWF0ZShcbiAgICB1cmw6IHN0cmluZyxcbiAgICBkYXRhOiBJUGVyZm9ybWVyUGhvdG9QYXlsb2FkLFxuICAgIG9wdGlvbnM6IHsgb25Qcm9ncmVzczogRnVuY3Rpb24gfSA9IHtcbiAgICAgIG9uUHJvZ3Jlc3MoKSB7fVxuICAgIH1cbiAgKTogUHJvbWlzZTxJUmVzcG9uc2U8YW55Pj4ge1xuICAgIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgcmVxLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQubGVuZ3RoQ29tcHV0YWJsZSkge1xuICAgICAgICAgIG9wdGlvbnMub25Qcm9ncmVzcyh7XG4gICAgICAgICAgICBwZXJjZW50YWdlOiAoZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWwpICogMTAwXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXEuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IHJlcS5zdGF0dXMgPj0gMjAwICYmIHJlcS5zdGF0dXMgPCAzMDA7XG4gICAgICAgIGNvbnN0IHsgcmVzcG9uc2UgfSA9IHJlcTtcbiAgICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChyZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgfSk7XG5cbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG4gICAgICAgIHJlamVjdChyZXEucmVzcG9uc2UpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAvLyBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlLCBmaWxlLm5hbWUpO1xuICAgICAgaWYgKGRhdGEucGhvdG8pIHtcbiAgICAgICAgY29uc3QgcGhvdG8gPSBkYXRhLnBob3RvLmZpbGUub3JpZ2luRmlsZU9iajtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwaG90bycsIHBob3RvLCBwaG90by5uYW1lKTtcbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmtleXMob21pdChkYXRhLCBbJ3Bob3RvJ10pKS5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCh2LCBkYXRhW3ZdKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXEucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xuICAgICAgcmVxLm9wZW4oJ1BPU1QnLCBpc1VybCh1cmwpID8gdXJsIDogYCR7Y29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0ke3VybH1gKTtcblxuICAgICAgY29uc3QgdG9rZW46IGFueSA9IGNvb2tpZS5nZXQoVE9LRU4pO1xuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKCdBdXRob3JpemF0aW9uJywgdG9rZW4pO1xuICAgICAgfVxuICAgICAgcmVxLnNlbmQoZm9ybURhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGRhdGE6IElQZXJmb3JtZXJQaG90b1BheWxvYWQsXG4gICAgb3B0aW9uczogeyBvblByb2dyZXNzOiBGdW5jdGlvbiB9ID0ge1xuICAgICAgb25Qcm9ncmVzcygpIHt9XG4gICAgfVxuICApOiBQcm9taXNlPElSZXNwb25zZTxhbnk+PiB7XG4gICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5sZW5ndGhDb21wdXRhYmxlKSB7XG4gICAgICAgICAgb3B0aW9ucy5vblByb2dyZXNzKHtcbiAgICAgICAgICAgIHBlcmNlbnRhZ2U6IChldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCkgKiAxMDBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJlcS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBzdWNjZXNzID0gcmVxLnN0YXR1cyA+PSAyMDAgJiYgcmVxLnN0YXR1cyA8IDMwMDtcbiAgICAgICAgY29uc3QgeyByZXNwb25zZSB9ID0gcmVxO1xuICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgcmVxLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICAgICAgcmVqZWN0KHJlcS5yZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIC8vIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUsIGZpbGUubmFtZSk7XG4gICAgICBpZiAoZGF0YS5waG90byAmJiBkYXRhLnBob3RvLmZpbGUpIHtcbiAgICAgICAgY29uc3QgcGhvdG8gPSBkYXRhLnBob3RvLmZpbGUub3JpZ2luRmlsZU9iajtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwaG90bycsIHBob3RvLCBwaG90by5uYW1lKTtcbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmtleXMob21pdChkYXRhLCBbJ3Bob3RvJ10pKS5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCh2LCBkYXRhW3ZdKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXEucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xuICAgICAgcmVxLm9wZW4oJ1BVVCcsIGlzVXJsKHVybCkgPyB1cmwgOiBgJHtjb25maWcuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UfSR7dXJsfWApO1xuXG4gICAgICBjb25zdCB0b2tlbjogYW55ID0gY29va2llLmdldChUT0tFTik7XG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCB0b2tlbik7XG4gICAgICB9XG4gICAgICByZXEuc2VuZChmb3JtRGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICB1cGxvYWRJbWFnZXMoZmlsZTogRmlsZSwgcGF5bG9hZDogYW55LCBvblByb2dyZXNzPzogRnVuY3Rpb24pIHtcbiAgICByZXR1cm4gdGhpcy51cGxvYWQoXG4gICAgICAnL3BlcmZvcm1lci9wZXJmb3JtZXItYXNzZXRzL3Bob3Rvcy91cGxvYWQnLFxuICAgICAgW1xuICAgICAgICB7XG4gICAgICAgICAgZmllbGRuYW1lOiAncGhvdG8nLFxuICAgICAgICAgIGZpbGVcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIHtcbiAgICAgICAgb25Qcm9ncmVzcyxcbiAgICAgICAgY3VzdG9tRGF0YTogcGF5bG9hZFxuICAgICAgfVxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHBob3RvU2VydmljZSA9IG5ldyBQaG90b1NlcnZpY2UoKTtcbiIsImltcG9ydCB7IElQb3N0U2VhcmNoIH0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5leHBvcnQgY2xhc3MgUG9zdFNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgc2VhcmNoKHF1ZXJ5OiBJUG9zdFNlYXJjaCkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvcG9zdHMvc2VhcmNoJywgcXVlcnkgYXMgYW55KSk7XG4gIH1cblxuICBmaW5kQnlJZChpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvcG9zdHMvJHtpZH1gKTtcbiAgfVxuXG4gIGNyZWF0ZUNvbnRhY3RDb3RlbnQoZGF0YTogUmVjb3JkPHN0cmluZywgYW55Pikge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9jb250YWN0JywgeyAuLi5kYXRhIH0pO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBwb3N0U2VydmljZSA9IG5ldyBQb3N0U2VydmljZSgpO1xuIiwiaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5leHBvcnQgY2xhc3MgUHJvZHVjdFNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgZGV0YWlscyhpZDogc3RyaW5nLCBoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9wcm9kdWN0cy8ke2lkfS92aWV3YCwgaGVhZGVycyk7XG4gIH1cblxuICBzZWFyY2gocGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvdXNlci9wZXJmb3JtZXItYXNzZXRzL3Byb2R1Y3RzL3NlYXJjaCcsIHBhcmFtcykpO1xuICB9XG5cbiAgcHVyY2hhc2VkKHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3B1cmNoYXNlZC1pdGVtcy91c2VyL3Byb2R1Y3RzJywgcGFyYW1zKSk7XG4gIH1cblxuICBnZXREb3dubG9hZExpbmsoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmdldChgL3VzZXIvcGVyZm9ybWVyLWFzc2V0cy9wcm9kdWN0cy8ke2lkfS9kb3dubG9hZC1saW5rYCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHByb2R1Y3RTZXJ2aWNlID0gbmV3IFByb2R1Y3RTZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBQdXJjaGFzZUl0ZW1TZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIHNlYXJjaChxdWVyeSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvcHVyY2hhc2VkLWl0ZW1zL3VzZXIvc2VhcmNoJywgcXVlcnkpKTtcbiAgfVxuXG4gIHB1cmNoYXNlSXRlbShpZDogc3RyaW5nLCB0eXBlOiBzdHJpbmcsIGRhdGE/OiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvcHVyY2hhc2UtaXRlbXMvJHt0eXBlfS8ke2lkfWAsIGRhdGEpO1xuICB9XG5cbiAgcHVyY2hhc2VQcm9kdWN0KGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvcHVyY2hhc2UtaXRlbXMvcHJvZHVjdC8ke2lkfWApO1xuICB9XG5cbiAgcHVyY2hhc2VWaWRlbyhpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL3B1cmNoYXNlLWl0ZW1zL3ZpZGVvLyR7aWR9YCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHB1cmNoYXNlSXRlbVNlcnZpY2UgPSBuZXcgUHVyY2hhc2VJdGVtU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5leHBvcnQgY2xhc3MgUmVmdW5kUmVxdWVzdFNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgY3JlYXRlKGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvcmVmdW5kLXJlcXVlc3RzJywgZGF0YSk7XG4gIH1cblxuICBzZWFyY2gocGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvcmVmdW5kLXJlcXVlc3RzL3NlYXJjaCcsIHBhcmFtcykpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZWZ1bmRSZXF1ZXN0U2VydmljZSA9IG5ldyBSZWZ1bmRSZXF1ZXN0U2VydmljZSgpO1xuIiwiaW1wb3J0IHsgSVNldHRpbmcsIElDb3VudHJpZXMgfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBBUElSZXF1ZXN0LCBJUmVzcG9uc2UgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIFNldHRpbmdTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIGFsbChncm91cCA9ICcnKTogUHJvbWlzZTxJUmVzcG9uc2U8SVNldHRpbmc+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9zZXR0aW5ncy9wdWJsaWMnLCB7IGdyb3VwIH0pKTtcbiAgfVxuXG4gIGdldENvdW50cmllcygpOiBQcm9taXNlPElSZXNwb25zZTxJQ291bnRyaWVzW10+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KCcvY291bnRyaWVzL2xpc3QnKTtcbiAgfVxuXG4gIGdldFRpbWV6b25lcygpOiBQcm9taXNlPElSZXNwb25zZTxzdHJpbmdbXT4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXQoJy90aW1lem9uZXMvbGlzdCcpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzZXR0aW5nU2VydmljZSA9IG5ldyBTZXR0aW5nU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgSU9uZVRpbWVUb2tlbiwgU3RyZWFtU2V0dGluZ3MgfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBnZXRSZXNwb25zZUVycm9yIH0gZnJvbSAnc3JjL2xpYic7XG5pbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmNsYXNzIFN0cmVhbVNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgZ2V0U2Vzc2lvbklkKGlkOiBzdHJpbmcsIHR5cGU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmdldChgL3N0cmVhbWluZy9zZXNzaW9uLyR7aWR9LyR7dHlwZX1gKTtcbiAgfVxuXG4gIGdvTGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvc3RyZWFtaW5nL2xpdmUnKTtcbiAgfVxuXG4gIGpvaW5QdWJsaWNDaGF0KHBlcmZvcm1lcklkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvc3RyZWFtaW5nL2pvaW4vJHtwZXJmb3JtZXJJZH1gKTtcbiAgfVxuXG4gIHJlcXVlc3RQcml2YXRlQ2hhdChwZXJmb3JtZXJJZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL3N0cmVhbWluZy9wcml2YXRlLWNoYXQvJHtwZXJmb3JtZXJJZH1gKTtcbiAgfVxuXG4gIGFjY2VwdFByaXZhdGVDaGF0KGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9zdHJlYW1pbmcvcHJpdmF0ZS1jaGF0LyR7aWR9YCk7XG4gIH1cblxuICBzdGFydEdyb3VwQ2hhdCgpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvc3RyZWFtaW5nL2dyb3VwLWNoYXQnKTtcbiAgfVxuXG4gIGpvaW5Hcm91cENoYXQoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmdldChgL3N0cmVhbWluZy9ncm91cC1jaGF0LyR7aWR9YCk7XG4gIH1cblxuICBnZW5lcmF0ZU9uZVRpbWVUb2tlbihkYXRhOiBJT25lVGltZVRva2VuKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3N0cmVhbWluZy90b2tlbicsIGRhdGEpO1xuICB9XG5cbiAgYXN5bmMgZ2V0UHVibGlzaFRva2VuKG9wdGlvbnM6IHtcbiAgICBzdHJlYW1JZDogc3RyaW5nLFxuICAgIHNldHRpbmdzOiBTdHJlYW1TZXR0aW5nc1xuICAgIH0sIGV4cGlyZURhdGUgPSBtb21lbnQoKS5hZGQoMSwgJ2QnKS50b0RhdGUoKS5nZXRUaW1lKCkpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHNldHRpbmdzLCBzdHJlYW1JZCB9ID0gb3B0aW9ucztcbiAgICAgIGNvbnN0IHsgc2VjdXJlT3B0aW9uIH0gPSBzZXR0aW5ncztcbiAgICAgIGlmIChzZWN1cmVPcHRpb24pIHtcbiAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IHRoaXMuZ2VuZXJhdGVPbmVUaW1lVG9rZW4oe1xuICAgICAgICAgIGlkOiBzdHJlYW1JZCxcbiAgICAgICAgICB0eXBlOiAncHVibGlzaCcsXG4gICAgICAgICAgZXhwaXJlRGF0ZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3AuZGF0YS50b2tlbklkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGVycik7XG4gICAgICBtZXNzYWdlLmVycm9yKGdldFJlc3BvbnNlRXJyb3IoZXJyb3IpKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFN1YnNjcmliZXJUb2tlbihvcHRpb25zOiB7XG4gICAgc3RyZWFtSWQ6IHN0cmluZyxcbiAgICBzZXR0aW5nczogU3RyZWFtU2V0dGluZ3NcbiAgICB9LCBleHBpcmVEYXRlID0gbW9tZW50KCkuYWRkKDEsICdkJykudG9EYXRlKCkuZ2V0VGltZSgpKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBzZXR0aW5ncywgc3RyZWFtSWQgfSA9IG9wdGlvbnM7XG4gICAgICBjb25zdCB7IHNlY3VyZU9wdGlvbiB9ID0gc2V0dGluZ3M7XG4gICAgICBpZiAoc2VjdXJlT3B0aW9uKSB7XG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCB0aGlzLmdlbmVyYXRlT25lVGltZVRva2VuKHtcbiAgICAgICAgICBpZDogc3RyZWFtSWQsXG4gICAgICAgICAgdHlwZTogJ3BsYXknLFxuICAgICAgICAgIGV4cGlyZURhdGVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXNwLmRhdGEudG9rZW5JZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zdCBlcnJvciA9IGF3YWl0IFByb21pc2UucmVzb2x2ZShlcnIpO1xuICAgICAgbWVzc2FnZS5lcnJvcihnZXRSZXNwb25zZUVycm9yKGVycm9yKSk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRMaXZlU3RyZWFtT3JWb2RVUkwob3B0aW9uczoge1xuICAgIHN0cmVhbUlkOiBzdHJpbmcsXG4gICAgc2V0dGluZ3M6IFN0cmVhbVNldHRpbmdzLFxuICAgIGFwcE5hbWU6IHN0cmluZ1xuICAgIH0sIGV4cGlyZURhdGUgPSBtb21lbnQoKS5hZGQoMSwgJ2QnKS50b0RhdGUoKS5nZXRUaW1lKCksIF9wbGF5ZXIgPSAnaGxzJykge1xuICAgIC8vIGh0dHA6Ly9bSVBfQWRkcmVzc10vPEFwcGxpY2F0aW9uX05hbWU+L3N0cmVhbXMvc3RyZWFtSUQubXA0P3Rva2VuPXRva2VuSWRcbiAgICAvLyBodHRwOi8vW0lQX0FkZHJlc3NdLzxBcHBsaWNhdGlvbl9OYW1lPi9zdHJlYW1zL3N0cmVhbUlELm0zdTg/dG9rZW49dG9rZW5JZFxuICAgIC8vIGh0dHA6Ly9bSVBfQWRkcmVzc10vPEFwcGxpY2F0aW9uX05hbWU+L3BsYXkuaHRtbD9uYW1lPXN0cmVhbUlEJnBsYXlPcmRlcj1obHMmdG9rZW49dG9rZW5JZFxuICAgIHRyeSB7XG4gICAgICAvLyBjb25zdCBzcmMgPSBgaHR0cHM6Ly8ke3ZpZXdlclVSTH06NTQ0My8ke2FwcE5hbWV9L3N0cmVhbXMvJHtzdHJlYW1JZH0ubTN1OCR7b25lVGltZVRva2VuID8gYD90b2tlbj0ke29uZVRpbWVUb2tlbn1gIDogJyd9YDtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zaGFkb3dcbiAgICAgIGNvbnN0IHsgYXBwTmFtZSwgc2V0dGluZ3MsIHN0cmVhbUlkIH0gPSBvcHRpb25zO1xuICAgICAgY29uc3QgeyBzZWN1cmVPcHRpb24sIHZpZXdlclVSTCB9ID0gc2V0dGluZ3M7XG4gICAgICBjb25zdCBleHRlbnNpb24gPSBfcGxheWVyID09PSAnaGxzJyA/ICdtM3U4JyA6ICdtcDQnO1xuICAgICAgaWYgKCF2aWV3ZXJVUkwgfHwgIWFwcE5hbWUpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuXG4gICAgICBsZXQgb25lVGltZVRva2VuID0gJyc7XG4gICAgICBpZiAoc2VjdXJlT3B0aW9uKSB7XG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCB0aGlzLmdlbmVyYXRlT25lVGltZVRva2VuKHtcbiAgICAgICAgICBpZDogc3RyZWFtSWQsXG4gICAgICAgICAgdHlwZTogJ3BsYXknLFxuICAgICAgICAgIGV4cGlyZURhdGVcbiAgICAgICAgfSk7XG4gICAgICAgIG9uZVRpbWVUb2tlbiA9IHJlc3AuZGF0YS50b2tlbklkO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7IHByb3RvY29sIH0gPSB3aW5kb3cubG9jYXRpb247XG4gICAgICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke3ZpZXdlclVSTH0vJHthcHBOYW1lfS9zdHJlYW1zLyR7c3RyZWFtSWR9LiR7ZXh0ZW5zaW9ufSR7b25lVGltZVRva2VuID8gYD90b2tlbj0ke29uZVRpbWVUb2tlbn1gIDogJyd9YDtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGVycik7XG4gICAgICBtZXNzYWdlLmVycm9yKGdldFJlc3BvbnNlRXJyb3IoZXJyb3IpKTtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHN0cmVhbVNlcnZpY2UgPSBuZXcgU3RyZWFtU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgSVN0dWRpbyB9IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEFQSVJlcXVlc3QsIElSZXNwb25zZSB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuaW1wb3J0IHsgZ2V0R2xvYmFsQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuXG5leHBvcnQgY2xhc3MgU3R1ZGlvU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBtZShoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSk6IFByb21pc2U8SVJlc3BvbnNlPElTdHVkaW8+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KCcvc3R1ZGlvL21lJywgaGVhZGVycyk7XG4gIH1cblxuICB1cGRhdGUocGF5bG9hZDogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMucHV0KCcvc3R1ZGlvL3VwZGF0ZScsIHBheWxvYWQpO1xuICB9XG5cbiAgdXBkYXRlUGF5bWVudEluZm8ocGF5bG9hZCk6IFByb21pc2U8SVJlc3BvbnNlPElTdHVkaW8+PiB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3N0dWRpby9iYW5rLXRyYW5zZmVyL3VwZGF0ZScsIHBheWxvYWQpO1xuICB9XG5cbiAgdXBkYXRlRGlyZWN0RGVwb3N0KHBheWxvYWQpOiBQcm9taXNlPElSZXNwb25zZTxJU3R1ZGlvPj4ge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9zdHVkaW8vZGlyZWN0LWRlcG9zaXQvdXBkYXRlJywgcGF5bG9hZCk7XG4gIH1cblxuICB1cGRhdGVQYXh1bShwYXlsb2FkKTogUHJvbWlzZTxJUmVzcG9uc2U8SVN0dWRpbz4+IHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvc3R1ZGlvL3BheHVtL3VwZGF0ZScsIHBheWxvYWQpO1xuICB9XG5cbiAgdXBkYXRlQml0cGF5KHBheWxvYWQpOiBQcm9taXNlPElSZXNwb25zZTxJU3R1ZGlvPj4ge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9zdHVkaW8vYml0cGF5L3VwZGF0ZScsIHBheWxvYWQpO1xuICB9XG5cbiAgZ2V0Q29tbWlzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoJy9zZXR0aW5ncy9zdHVkaW8vY29tbWlzc2lvbicpO1xuICB9XG5cbiAgYWRkTW9kZWwocGF5bG9hZCkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9zdHVkaW8vbWVtYmVycycsIHBheWxvYWQpO1xuICB9XG5cbiAgZ2V0TWVtYmVycyhwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9zdHVkaW8vbWVtYmVycycsIHBhcmFtcykpO1xuICB9XG5cbiAgZ2V0TWVtYmVyQ29tbWlzc2lvbnMocGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvc3R1ZGlvL2NvbW1pc3Npb24nLCBwYXJhbXMpKTtcbiAgfVxuXG4gIHVwZGF0ZU1lbWJlckNvbW1pc3Npb24oaWQ6IHN0cmluZywgcGF5bG9hZDogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMucHV0KGAvc3R1ZGlvL2NvbW1pc3Npb24vbWVtYmVyLyR7aWR9YCwgcGF5bG9hZCk7XG4gIH1cblxuICBnZXRQZXJmb3JtZXJSZXF1ZXN0KHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoXG4gICAgICB0aGlzLmJ1aWxkVXJsKCcvcGF5b3V0LXJlcXVlc3RzL3N0dWRpby9wZXJmb3JtZXItcmVxdWVzdCcsIHBhcmFtcylcbiAgICApO1xuICB9XG5cbiAgdXBkYXRlU3RhdHVzUGVyZm9ybWVyUmVxdWVzdChpZDogc3RyaW5nLCBwYXlsb2FkKSB7XG4gICAgcmV0dXJuIHRoaXMucHV0KGAvcGF5b3V0LXJlcXVlc3RzL3N0dWRpby91cGRhdGUvJHtpZH1gLCB7IC4uLnBheWxvYWQgfSk7XG4gIH1cblxuICB1cGRhdGVNZW1iZXJTdGF0dXMoaWQ6IHN0cmluZywgc3RhdHVzOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvc3R1ZGlvL21lbWJlcnMvJHtpZH0vJHtzdGF0dXN9YCk7XG4gIH1cblxuICBzdGF0cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoJy9zdHVkaW8vc3RhdHMnKTtcbiAgfVxuXG4gIGdldERvY3VtZW50c1VwbG9hZFVybCgpIHtcbiAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgICByZXR1cm4gYCR7Y29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0vc3R1ZGlvL2RvY3VtZW50cy91cGxvYWRgO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzdHVkaW9TZXJ2aWNlID0gbmV3IFN0dWRpb1NlcnZpY2UoKTtcbiIsImltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIFRva2VuUGFja2FnZVNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgc2VhcmNoKHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3BhY2thZ2UvdG9rZW4vc2VhcmNoJywgcGFyYW1zKSk7XG4gIH1cblxuICBidXlUb2tlbnMoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC9wYXltZW50L3B1cmNoYXNlLXRva2Vucy8ke2lkfWApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCB0b2tlblBhY2thZ2VTZXJ2aWNlID0gbmV3IFRva2VuUGFja2FnZVNlcnZpY2UoKTtcbiIsImltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIFRyYW5zYWN0aW9uU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBzZWFyY2gocGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvdHJhbnNhY3Rpb25zL3VzZXIvc2VhcmNoJywgcGFyYW1zKSk7XG4gIH1cblxuICBzZW5kVGlwVG9rZW4ocGVyZm9ybWVySWQ6IHN0cmluZywgdG9rZW46IG51bWJlciwgY29udmVyc2F0aW9uSWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvbWVtYmVyL3NlbmQtdGlwLXRva2VuLyR7cGVyZm9ybWVySWR9YCwgeyB0b2tlbiwgY29udmVyc2F0aW9uSWQgfSk7XG4gIH1cblxuICBwdWJsaWMgc2VuZFBhaWRUb2tlbihjb252ZXJzYXRpb25JZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL21lbWJlci9zZW5kLXBheS10b2tlbi8ke2NvbnZlcnNhdGlvbklkfWApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCB0cmFuc2FjdGlvblNlcnZpY2UgPSBuZXcgVHJhbnNhY3Rpb25TZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBJVXNlciB9IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEFQSVJlcXVlc3QsIElSZXNwb25zZSB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuaW1wb3J0IHsgZ2V0R2xvYmFsQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgbWUoaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pOiBQcm9taXNlPElSZXNwb25zZTxJVXNlcj4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXQoJy91c2Vycy9tZScsIGhlYWRlcnMpO1xuICB9XG5cbiAgdXBkYXRlTWUocGF5bG9hZDogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMucHV0KCcvdXNlcnMnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIGdldEF2YXRhclVwbG9hZFVybCh1c2VySWQ/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgICBpZiAodXNlcklkKSB7XG4gICAgICByZXR1cm4gYCR7Y29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0vdXNlcnMvJHt1c2VySWR9L2F2YXRhci91cGxvYWRgO1xuICAgIH1cbiAgICByZXR1cm4gYCR7Y29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0vdXNlcnMvYXZhdGFyL3VwbG9hZGA7XG4gIH1cblxuICBzZWFyY2gocXVlcnk/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy91c2Vycy9zZWFyY2gnLCBxdWVyeSkpO1xuICB9XG5cbiAgZmluZEJ5SWQoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmdldChgL3VzZXJzL3ZpZXcvJHtpZH1gKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdXNlclNlcnZpY2UgPSBuZXcgVXNlclNlcnZpY2UoKTtcbiIsImltcG9ydCB7IElDb3VudHJ5LCBJTGFuZ2d1Z2VzLCBJUGhvbmVDb2RlcyB9IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEFQSVJlcXVlc3QsIElSZXNwb25zZSB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5leHBvcnQgY2xhc3MgVXRpbHNTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIGNvdW50cmllc0xpc3QoKTogUHJvbWlzZTxJUmVzcG9uc2U8SUNvdW50cnk+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KCcvY291bnRyaWVzL2xpc3QnKTtcbiAgfVxuXG4gIGxhbmd1YWdlc0xpc3QoKTogUHJvbWlzZTxJUmVzcG9uc2U8SUxhbmdndWdlcz4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXQoJy9sYW5ndWFnZXMvbGlzdCcpO1xuICB9XG5cbiAgcGhvbmVDb2Rlc0xpc3QoKTogUHJvbWlzZTxJUmVzcG9uc2U8SVBob25lQ29kZXM+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KCcvcGhvbmUtY29kZXMvbGlzdCcpO1xuICB9XG5cbiAgc3RhdGlzdGljcygpOiBQcm9taXNlPElSZXNwb25zZTxhbnk+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KCcvc3RhdGlzdGljcy9hZG1pbicpO1xuICB9XG5cbiAgdmVyaWZ5UmVjYXB0Y2hhKHRva2VuOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvcmUtY2FwdGNoYS92ZXJpZnknLCB7IHRva2VuIH0pO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCB1dGlsc1NlcnZpY2UgPSBuZXcgVXRpbHNTZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBJUmVzcG9uc2UsIElQZXJmb3JtZXJWaWRlb1BheWxvYWQgfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBUT0tFTiB9IGZyb20gJ3NyYy9zZXJ2aWNlcy9hcGktcmVxdWVzdCc7XG5pbXBvcnQgeyBvbWl0IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGlzVXJsIH0gZnJvbSAnQGxpYi9zdHJpbmcnO1xuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnO1xuaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuaW1wb3J0IHsgZ2V0R2xvYmFsQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuXG5leHBvcnQgY2xhc3MgVmlkZW9TZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIHNlYXJjaChwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KFxuICAgICAgdGhpcy5idWlsZFVybCgnL3VzZXIvcGVyZm9ybWVyLWFzc2V0cy92aWRlb3Mvc2VhcmNoJywgcGFyYW1zKVxuICAgICk7XG4gIH1cblxuICBwdXJjaGFzZWQocGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldChcbiAgICAgIHRoaXMuYnVpbGRVcmwoJy9wdXJjaGFzZWQtaXRlbXMvdXNlci92aWRlb3MnLCBwYXJhbXMpXG4gICAgKTtcbiAgfVxuXG4gIGRldGFpbHMoaWQ6IHN0cmluZywgaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy92aWRlb3MvJHtpZH0vdmlld2AsIGhlYWRlcnMpO1xuICB9XG5cbiAgbXlWaWRlb3MocXVlcnk/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KFxuICAgICAgdGhpcy5idWlsZFVybCgnL3BlcmZvcm1lci9wZXJmb3JtZXItYXNzZXRzL3ZpZGVvcy9zZWFyY2gnLCBxdWVyeSlcbiAgICApO1xuICB9XG5cbiAgcmVtb3ZlTXlWaWRlbyhpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVsKGAvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvdmlkZW9zLyR7aWR9YCk7XG4gIH1cblxuICBjcmVhdGUoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgZGF0YTogSVBlcmZvcm1lclZpZGVvUGF5bG9hZCxcbiAgICBvcHRpb25zOiB7IG9uUHJvZ3Jlc3M6IEZ1bmN0aW9uIH0gPSB7XG4gICAgICBvblByb2dyZXNzKCkge31cbiAgICB9XG4gICk6IFByb21pc2U8SVJlc3BvbnNlPGFueT4+IHtcbiAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50Lmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgICBvcHRpb25zLm9uUHJvZ3Jlc3Moe1xuICAgICAgICAgICAgcGVyY2VudGFnZTogKGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsKSAqIDEwMFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmVxLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSByZXEuc3RhdHVzID49IDIwMCAmJiByZXEuc3RhdHVzIDwgMzAwO1xuICAgICAgICBjb25zdCB7IHJlc3BvbnNlIH0gPSByZXE7XG4gICAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICAgIHJldHVybiByZWplY3QocmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgICByZWplY3QocmVxLnJlc3BvbnNlKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgLy8gZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSwgZmlsZS5uYW1lKTtcbiAgICAgIGlmIChkYXRhLnZpZGVvKSB7XG4gICAgICAgIGNvbnN0IHZpZGVvID0gZGF0YS52aWRlby5maWxlLm9yaWdpbkZpbGVPYmo7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndmlkZW8nLCB2aWRlbywgdmlkZW8ubmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhLnRyYWlsZXIpIHtcbiAgICAgICAgY29uc3QgdHJhaWxlciA9IGRhdGEudHJhaWxlci5maWxlLm9yaWdpbkZpbGVPYmo7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndHJhaWxlcicsIHRyYWlsZXIsIHRyYWlsZXIubmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhLnRodW1ibmFpbCkge1xuICAgICAgICBjb25zdCB0aHVtYm5haWwgPSBkYXRhLnRodW1ibmFpbC5maWxlLm9yaWdpbkZpbGVPYmo7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndGh1bWJuYWlsJywgdGh1bWJuYWlsLCB0aHVtYm5haWwubmFtZSk7XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5rZXlzKG9taXQoZGF0YSwgWyd2aWRlbycsICd0aHVtYm5haWwnLCAndHJhaWxlciddKSkuZm9yRWFjaChcbiAgICAgICAgKHYpID0+IHtcbiAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQodiwgZGF0YVt2XSk7XG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIHJlcS5yZXNwb25zZVR5cGUgPSAnanNvbic7XG4gICAgICByZXEub3BlbignUE9TVCcsIGlzVXJsKHVybCkgPyB1cmwgOiBgJHtjb25maWcuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UfSR7dXJsfWApO1xuXG4gICAgICBjb25zdCB0b2tlbjogYW55ID0gY29va2llLmdldChUT0tFTik7XG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCB0b2tlbik7XG4gICAgICB9XG4gICAgICByZXEuc2VuZChmb3JtRGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGUoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgZGF0YTogSVBlcmZvcm1lclZpZGVvUGF5bG9hZCxcbiAgICBvcHRpb25zOiB7IG9uUHJvZ3Jlc3M6IEZ1bmN0aW9uIH0gPSB7XG4gICAgICBvblByb2dyZXNzKCkge31cbiAgICB9XG4gICk6IFByb21pc2U8SVJlc3BvbnNlPGFueT4+IHtcbiAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50Lmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgICBvcHRpb25zLm9uUHJvZ3Jlc3Moe1xuICAgICAgICAgICAgcGVyY2VudGFnZTogKGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsKSAqIDEwMFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmVxLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSByZXEuc3RhdHVzID49IDIwMCAmJiByZXEuc3RhdHVzIDwgMzAwO1xuICAgICAgICBjb25zdCB7IHJlc3BvbnNlIH0gPSByZXE7XG4gICAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICAgIHJldHVybiByZWplY3QocmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgICByZWplY3QocmVxLnJlc3BvbnNlKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgLy8gZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSwgZmlsZS5uYW1lKTtcbiAgICAgIGlmIChkYXRhLnZpZGVvICYmIGRhdGEudmlkZW8uZmlsZSkge1xuICAgICAgICBjb25zdCB2aWRlbyA9IGRhdGEudmlkZW8uZmlsZS5vcmlnaW5GaWxlT2JqO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3ZpZGVvJywgdmlkZW8sIHZpZGVvLm5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YS50cmFpbGVyICYmIGRhdGEudHJhaWxlci5maWxlKSB7XG4gICAgICAgIGNvbnN0IHRyYWlsZXIgPSBkYXRhLnRyYWlsZXIuZmlsZS5vcmlnaW5GaWxlT2JqO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3RyYWlsZXInLCB0cmFpbGVyLCB0cmFpbGVyLm5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YS50aHVtYm5haWwgJiYgZGF0YS50aHVtYm5haWwuZmlsZSkge1xuICAgICAgICBjb25zdCB0aHVtYm5haWwgPSBkYXRhLnRodW1ibmFpbC5maWxlLm9yaWdpbkZpbGVPYmo7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndGh1bWJuYWlsJywgdGh1bWJuYWlsLCB0aHVtYm5haWwubmFtZSk7XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5rZXlzKG9taXQoZGF0YSwgWyd2aWRlbycsICd0aHVtYm5haWwnLCAndHJhaWxlciddKSkuZm9yRWFjaCgodikgPT4ge1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQodiwgZGF0YVt2XSk7XG4gICAgICB9KTtcblxuICAgICAgcmVxLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcbiAgICAgIHJlcS5vcGVuKCdQVVQnLCBpc1VybCh1cmwpID8gdXJsIDogYCR7Y29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0ke3VybH1gKTtcblxuICAgICAgY29uc3QgdG9rZW46IGFueSA9IGNvb2tpZS5nZXQoVE9LRU4pO1xuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKCdBdXRob3JpemF0aW9uJywgdG9rZW4pO1xuICAgICAgfVxuICAgICAgcmVxLnNlbmQoZm9ybURhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgaW5jcmVhc2VWaWV3KGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvdXNlci9wZXJmb3JtZXItYXNzZXRzL3ZpZGVvcy8ke2lkfS9pbmMtdmlld2ApO1xuICB9XG5cbiAgLy8gdXBkYXRlKHZpZGVvSWQsIHBlcmZvcm1lcklkLCBkYXRhKSB7XG4gIC8vICAgcmV0dXJuIHRoaXMucHV0KGAvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvdmlkZW9zLyR7dmlkZW9JZH1gLCB7XG4gIC8vICAgICAuLi5kYXRhLFxuICAvLyAgICAgcGVyZm9ybWVySWRcbiAgLy8gICB9KTtcbiAgLy8gfVxuICB1c2VyRmluZFZpZGVvQnlJZChpZDogc3RyaW5nLCBoZWFkZXJzID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC91c2VyL3BlcmZvcm1lci1hc3NldHMvdmlkZW9zLyR7aWR9YCwgaGVhZGVycyk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHZpZGVvU2VydmljZSA9IG5ldyBWaWRlb1NlcnZpY2UoKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLXVuZmV0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGgtdG8tcmVnZXhwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWdvb2dsZS1yZWNhcHRjaGFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtYWN0aW9uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVzZWxlY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==