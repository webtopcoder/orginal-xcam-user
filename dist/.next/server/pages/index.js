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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_performer_performer_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/performer/performer-grid */ "./src/components/performer/performer-grid.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_performer_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redux/performer/actions */ "./src/redux/performer/actions.ts");
/* harmony import */ var _redux_auth_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @redux/auth/actions */ "./src/redux/auth/actions.ts");
/* harmony import */ var _redux_user_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @redux/user/actions */ "./src/redux/user/actions.ts");
/* harmony import */ var _redux_studio_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @redux/studio/actions */ "./src/redux/studio/actions.ts");
/* harmony import */ var _components_user_performer_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/user/performer-filter */ "./src/components/user/performer-filter.tsx");
/* harmony import */ var src_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services */ "./src/services/index.ts");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_lib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/lib */ "./src/lib/index.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var src_socket__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/socket */ "./src/socket/index.ts");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "E:\\programData\\React\\user\\pages\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const initQueryState = {
  offset: 0,
  limit: 60,
  gender: '',
  category: '',
  country: '',
  sortBy: '',
  sort: 'desc'
};

class Homepage extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "socket", void 0);

    _defineProperty(this, "search", () => {
      const {
        router,
        searchPerformer: dispatchSearchPerformer
      } = this.props;
      const {
        query
      } = this.state;
      dispatchSearchPerformer(_objectSpread(_objectSpread({}, query), router.query));
    });

    this.state = {
      query: initQueryState
    };
  }

  componentDidMount() {
    this.search();
    this.socket = this.context;
    this.socket.on('modelUpdateStatus', this.search);
    this.socket.on('modelUpdateStreamingStatus', this.search);
  }

  componentDidUpdate(prevProps, prevStates) {
    const {
      router,
      loggedIn
    } = this.props;
    const {
      query
    } = this.state;

    if (router.query.q !== prevProps.router.query.q || query !== prevStates.query) {
      this.search();
    }

    if (!loggedIn && loggedIn !== prevProps.loggedIn) {
      this.search();
    }
  }

  componentWillUnmount() {
    this.socket = this.context;

    if (this.socket) {
      this.socket.off('modelUpdateStatus');
      this.socket.off('modelUpdateStreamingStatus');
    }
  }

  async onLike(performer) {
    const {
      updatePerformerFavourite: dispatchUpdatePerformerFavorite
    } = this.props;
    const {
      _id,
      isFavorite
    } = performer;

    try {
      await src_services__WEBPACK_IMPORTED_MODULE_8__["favouriteService"].favorite(_id, isFavorite);
      dispatchUpdatePerformerFavorite(_id);
    } catch (error) {
      const e = await Promise.resolve(error);
      antd__WEBPACK_IMPORTED_MODULE_9__["message"].error(Object(src_lib__WEBPACK_IMPORTED_MODULE_10__["getResponseError"])(e));
    }
  }

  setFilter(name, value) {
    const {
      query
    } = this.state;
    this.setState({
      query: _objectSpread(_objectSpread({}, query), {}, {
        [name]: value
      })
    });
  }

  clearFilter() {
    this.setState({
      query: initQueryState
    });
  }

  render() {
    const {
      categories,
      countries,
      ui,
      settings
    } = this.props;
    const {
      query
    } = this.state;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_13___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 9
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 11
      }
    }, ui === null || ui === void 0 ? void 0 : ui.siteName), __jsx("meta", {
      name: "keywords",
      content: settings === null || settings === void 0 ? void 0 : settings.metaKeywords,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 11
      }
    }), __jsx("meta", {
      name: "description",
      content: settings === null || settings === void 0 ? void 0 : settings.metaDescription,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 11
      }
    }), __jsx("meta", {
      property: "og:title",
      content: settings === null || settings === void 0 ? void 0 : settings.siteName,
      key: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 11
      }
    }), __jsx("meta", {
      property: "og:image",
      content: settings === null || settings === void 0 ? void 0 : settings.logoUrl,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 11
      }
    }), __jsx("meta", {
      property: "og:keywords",
      content: settings === null || settings === void 0 ? void 0 : settings.metaKeywords,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 11
      }
    }), __jsx("meta", {
      property: "og:description",
      content: settings === null || settings === void 0 ? void 0 : settings.metaDescription,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 11
      }
    })), __jsx("div", {
      className: "homepage",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 9
      }
    }, __jsx(_components_user_performer_filter__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({
      countries: countries,
      categories: categories,
      setFilter: this.setFilter.bind(this),
      clearFilter: this.clearFilter.bind(this)
    }, query, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 11
      }
    })), __jsx(_components_performer_performer_grid__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, this.props, {
      onLike: this.onLike.bind(this),
      title: "Live cams",
      isPage: true,
      setFilter: this.setFilter.bind(this)
    }, query, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 11
      }
    }))));
  }

}

Homepage.contextType = src_socket__WEBPACK_IMPORTED_MODULE_12__["SocketContext"];

const mapStateToProps = state => _objectSpread(_objectSpread({
  ui: _objectSpread({}, state.ui)
}, state.performer.performers), {}, {
  countries: state.settings.countries,
  loggedIn: state.auth.loggedIn,
  categories: state.performer.categories.data,
  settings: state.settings
});

const mapDispatch = {
  searchPerformer: _redux_performer_actions__WEBPACK_IMPORTED_MODULE_3__["searchPerformer"],
  updatePerformerFavourite: _redux_performer_actions__WEBPACK_IMPORTED_MODULE_3__["updatePerformerFavourite"],
  updateCurrentUser: _redux_user_actions__WEBPACK_IMPORTED_MODULE_5__["updateCurrentUser"],
  updateCurrentPerformer: _redux_performer_actions__WEBPACK_IMPORTED_MODULE_3__["updateCurrentPerformer"],
  updateCurrentStudio: _redux_studio_actions__WEBPACK_IMPORTED_MODULE_6__["updateCurrentStudio"],
  loginSuccess: _redux_auth_actions__WEBPACK_IMPORTED_MODULE_4__["loginSuccess"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatch)(Object(next_router__WEBPACK_IMPORTED_MODULE_11__["withRouter"])(Homepage)));

/***/ }),

/***/ "./src/components/common/base/icons.tsx":
/*!**********************************************!*\
  !*** ./src/components/common/base/icons.tsx ***!
  \**********************************************/
/*! exports provided: FacebookIcon, TwitterIcon, InstagramIcon, GiftIcon, MessageIcon, FavouriteIcon, SendMessageIcon, FundsIcon, PaymentTokensHistoryIcon, TransactionHistoryIcon, PurchasedImageIcon, PurchasedVideoIcon, PurchasedItemIcon, MyProductIcon, VideosIcon, PhotosIcon, FemaleSignIcon, MaleSignIcon, TransgenderIcon, TokensIcon, EarningIcon, PayoutRequestIcon, Group */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookIcon", function() { return FacebookIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterIcon", function() { return TwitterIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstagramIcon", function() { return InstagramIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiftIcon", function() { return GiftIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageIcon", function() { return MessageIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouriteIcon", function() { return FavouriteIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMessageIcon", function() { return SendMessageIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundsIcon", function() { return FundsIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentTokensHistoryIcon", function() { return PaymentTokensHistoryIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionHistoryIcon", function() { return TransactionHistoryIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchasedImageIcon", function() { return PurchasedImageIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchasedVideoIcon", function() { return PurchasedVideoIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchasedItemIcon", function() { return PurchasedItemIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProductIcon", function() { return MyProductIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosIcon", function() { return VideosIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosIcon", function() { return PhotosIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FemaleSignIcon", function() { return FemaleSignIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaleSignIcon", function() { return MaleSignIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransgenderIcon", function() { return TransgenderIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokensIcon", function() { return TokensIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EarningIcon", function() { return EarningIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayoutRequestIcon", function() { return PayoutRequestIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\programData\\React\\user\\src\\components\\common\\base\\icons.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable jsx-a11y/alt-text */

/* eslint-disable react/require-default-props */

/* eslint-disable react/no-unused-prop-types */

const FacebookIcon = ({
  style
}) => __jsx("img", {
  src: "/icons/facebook.svg",
  style: style,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 3
  }
});
const TwitterIcon = ({
  style
}) => __jsx("img", {
  src: "/icons/twitter.svg",
  style: style,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 3
  }
});
const InstagramIcon = ({
  style
}) => __jsx("img", {
  src: "/icons/instagram.svg",
  style: style,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 3
  }
});
const GiftIcon = () => __jsx("div", {
  className: "anticon",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 3
  }
}, __jsx("svg", {
  width: "17",
  height: "16",
  viewBox: "0 0 17 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }
}, __jsx("path", {
  d: "M14.6001 4.84375H12.2938C12.5063 4.50938 12.6313 4.1125 12.6313 3.6875C12.6313 2.49844 11.6642 1.53125 10.4751 1.53125C9.82822 1.53125 9.24541 1.81875 8.8501 2.27187C8.45479 1.81875 7.87197 1.53125 7.2251 1.53125C6.03604 1.53125 5.06885 2.49844 5.06885 3.6875C5.06885 4.1125 5.19229 4.50938 5.40635 4.84375H3.1001C2.82354 4.84375 2.6001 5.06719 2.6001 5.34375V8.46875C2.6001 8.5375 2.65635 8.59375 2.7251 8.59375H3.3501V13.9688C3.3501 14.2453 3.57354 14.4688 3.8501 14.4688H13.8501C14.1267 14.4688 14.3501 14.2453 14.3501 13.9688V8.59375H14.9751C15.0438 8.59375 15.1001 8.5375 15.1001 8.46875V5.34375C15.1001 5.06719 14.8767 4.84375 14.6001 4.84375ZM9.38135 3.6875C9.38135 3.08438 9.87197 2.59375 10.4751 2.59375C11.0782 2.59375 11.5688 3.08438 11.5688 3.6875C11.5688 4.29062 11.0782 4.78125 10.4751 4.78125H9.38135V3.6875ZM7.2251 2.59375C7.82822 2.59375 8.31885 3.08438 8.31885 3.6875V4.78125H7.2251C6.62197 4.78125 6.13135 4.29062 6.13135 3.6875C6.13135 3.08438 6.62197 2.59375 7.2251 2.59375ZM3.6626 7.53125V5.90625H8.31885V7.53125H3.6626ZM4.4126 8.59375H8.31885V13.4062H4.4126V8.59375ZM13.2876 13.4062H9.38135V8.59375H13.2876V13.4062ZM14.0376 7.53125H9.38135V5.90625H14.0376V7.53125Z",
  fill: "currentColor",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 7
  }
})));
const MessageIcon = ({
  width,
  height,
  color
}) => __jsx("svg", {
  width: width || '1em',
  height: height || '1em',
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 3
  }
}, __jsx("path", {
  d: "M21.75 3.75H2.25C1.83516 3.75 1.5 4.08516 1.5 4.5V19.5C1.5 19.9148 1.83516 20.25 2.25 20.25H21.75C22.1648 20.25 22.5 19.9148 22.5 19.5V4.5C22.5 4.08516 22.1648 3.75 21.75 3.75ZM20.8125 6.34687V18.5625H3.1875V6.34687L2.54063 5.84297L3.46172 4.65938L4.46484 5.43984H19.5375L20.5406 4.65938L21.4617 5.84297L20.8125 6.34687ZM19.5375 5.4375L12 11.2969L4.4625 5.4375L3.45938 4.65703L2.53828 5.84062L3.18516 6.34453L11.1914 12.5695C11.4217 12.7484 11.7049 12.8455 11.9965 12.8455C12.2881 12.8455 12.5713 12.7484 12.8016 12.5695L20.8125 6.34687L21.4594 5.84297L20.5383 4.65938L19.5375 5.4375Z",
  fill: color,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }
}));
const FavouriteIcon = ({
  width,
  height,
  color
}) => __jsx("svg", {
  width: width || '1em',
  height: height || '1em',
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 3
  }
}, __jsx("path", {
  d: "M14.1855 4.45916C13.9838 3.97793 13.6929 3.54185 13.3292 3.17532C12.9653 2.80769 12.5362 2.51555 12.0652 2.31477C11.5769 2.10575 11.0531 1.99876 10.5243 2.00001C9.78243 2.00001 9.05862 2.20933 8.42961 2.60472C8.27913 2.6993 8.13618 2.80319 8.00074 2.91638C7.86531 2.80319 7.72236 2.6993 7.57188 2.60472C6.94287 2.20933 6.21906 2.00001 5.47719 2.00001C4.94299 2.00001 4.42533 2.10545 3.93627 2.31477C3.46377 2.51634 3.03791 2.80629 2.67224 3.17532C2.30807 3.54143 2.01717 3.97762 1.81601 4.45916C1.60684 4.95998 1.5 5.49182 1.5 6.03916C1.5 6.55549 1.60233 7.09352 1.80547 7.64086C1.97552 8.09827 2.2193 8.57273 2.53079 9.05185C3.02436 9.81006 3.70303 10.6008 4.54572 11.4025C5.94218 12.7313 7.32509 13.6492 7.38378 13.6864L7.74041 13.9221C7.89842 14.026 8.10157 14.026 8.25957 13.9221L8.61621 13.6864C8.6749 13.6476 10.0563 12.7313 11.4543 11.4025C12.297 10.6008 12.9756 9.81006 13.4692 9.05185C13.7807 8.57273 14.026 8.09827 14.1945 7.64086C14.3977 7.09352 14.5 6.55549 14.5 6.03916C14.5015 5.49182 14.3946 4.95998 14.1855 4.45916V4.45916ZM8.00074 12.6956C8.00074 12.6956 2.64365 9.15884 2.64365 6.03916C2.64365 4.45916 3.9122 3.17842 5.47719 3.17842C6.5772 3.17842 7.53125 3.81104 8.00074 4.73516C8.47024 3.81104 9.42429 3.17842 10.5243 3.17842C12.0893 3.17842 13.3578 4.45916 13.3578 6.03916C13.3578 9.15884 8.00074 12.6956 8.00074 12.6956Z",
  fill: color,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 5
  }
}));
const SendMessageIcon = ({
  width,
  height
}) => __jsx("svg", {
  width: width || '1em',
  height: height || '1em',
  viewBox: "0 0 30 30",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 3
  }
}, __jsx("path", {
  d: "M26.7552 14.6367L3.64018 3.04608C3.54623 2.9991 3.43846 2.98804 3.33622 3.01291C3.10134 3.07095 2.95488 3.30862 3.01291 3.54629L5.39488 13.2797C5.4308 13.4262 5.53857 13.5451 5.68226 13.592L9.76365 14.9932L5.68502 16.3943C5.54133 16.4441 5.43356 16.5602 5.4004 16.7066L3.01291 26.4539C2.98804 26.5562 2.9991 26.6639 3.04607 26.7551C3.15384 26.9735 3.41912 27.0619 3.64018 26.9541L26.7552 15.4298C26.8408 15.3884 26.9099 15.3165 26.9541 15.2336C27.0619 15.0125 26.9735 14.7472 26.7552 14.6367ZM5.73752 23.6848L7.12746 18.0028L15.2847 15.2032C15.3483 15.1811 15.4008 15.1314 15.4229 15.065C15.4616 14.949 15.4008 14.8246 15.2847 14.7832L7.12746 11.9864L5.74305 6.32649L23.0966 15.0291L5.73752 23.6848Z",
  fill: "#FF0066",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 5
  }
}));
const FundsIcon = ({
  width,
  height
}) => __jsx("svg", {
  width: width || '1em',
  height: height || '1em',
  viewBox: "0 0 25 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 3
  }
}, __jsx("path", {
  d: "M9.8501 10C9.58488 10 9.33053 10.1054 9.14299 10.2929C8.95545 10.4804 8.8501 10.7348 8.8501 11V13C8.8501 13.2652 8.95545 13.5196 9.14299 13.7071C9.33053 13.8946 9.58488 14 9.8501 14C10.1153 14 10.3697 13.8946 10.5572 13.7071C10.7447 13.5196 10.8501 13.2652 10.8501 13V11C10.8501 10.7348 10.7447 10.4804 10.5572 10.2929C10.3697 10.1054 10.1153 10 9.8501 10ZM21.8501 11C22.1153 11 22.3697 10.8946 22.5572 10.7071C22.7447 10.5196 22.8501 10.2652 22.8501 10V6C22.8501 5.73478 22.7447 5.48043 22.5572 5.29289C22.3697 5.10536 22.1153 5 21.8501 5H3.8501C3.58488 5 3.33053 5.10536 3.14299 5.29289C2.95545 5.48043 2.8501 5.73478 2.8501 6V10C2.8501 10.2652 2.95545 10.5196 3.14299 10.7071C3.33053 10.8946 3.58488 11 3.8501 11C4.11531 11 4.36967 11.1054 4.5572 11.2929C4.74474 11.4804 4.8501 11.7348 4.8501 12C4.8501 12.2652 4.74474 12.5196 4.5572 12.7071C4.36967 12.8946 4.11531 13 3.8501 13C3.58488 13 3.33053 13.1054 3.14299 13.2929C2.95545 13.4804 2.8501 13.7348 2.8501 14V18C2.8501 18.2652 2.95545 18.5196 3.14299 18.7071C3.33053 18.8946 3.58488 19 3.8501 19H21.8501C22.1153 19 22.3697 18.8946 22.5572 18.7071C22.7447 18.5196 22.8501 18.2652 22.8501 18V14C22.8501 13.7348 22.7447 13.4804 22.5572 13.2929C22.3697 13.1054 22.1153 13 21.8501 13C21.5849 13 21.3305 12.8946 21.143 12.7071C20.9555 12.5196 20.8501 12.2652 20.8501 12C20.8501 11.7348 20.9555 11.4804 21.143 11.2929C21.3305 11.1054 21.5849 11 21.8501 11ZM20.8501 9.18C20.2709 9.3902 19.7706 9.77363 19.4169 10.2782C19.0633 10.7827 18.8736 11.3839 18.8736 12C18.8736 12.6161 19.0633 13.2173 19.4169 13.7218C19.7706 14.2264 20.2709 14.6098 20.8501 14.82V17H10.8501C10.8501 16.7348 10.7447 16.4804 10.5572 16.2929C10.3697 16.1054 10.1153 16 9.8501 16C9.58488 16 9.33053 16.1054 9.14299 16.2929C8.95545 16.4804 8.8501 16.7348 8.8501 17H4.8501V14.82C5.42925 14.6098 5.92964 14.2264 6.28326 13.7218C6.63687 13.2173 6.82657 12.6161 6.82657 12C6.82657 11.3839 6.63687 10.7827 6.28326 10.2782C5.92964 9.77363 5.42925 9.3902 4.8501 9.18V7H8.8501C8.8501 7.26522 8.95545 7.51957 9.14299 7.70711C9.33053 7.89464 9.58488 8 9.8501 8C10.1153 8 10.3697 7.89464 10.5572 7.70711C10.7447 7.51957 10.8501 7.26522 10.8501 7H20.8501V9.18Z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 5
  }
}));
const PaymentTokensHistoryIcon = ({
  width,
  height
}) => __jsx("svg", {
  width: width || '1em',
  height: height || '1em',
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 3
  }
}, __jsx("path", {
  d: "M19.958 4.04201C18.9157 2.99684 17.6772 2.16796 16.3135 1.603C14.9499 1.03805 13.488 0.748166 12.012 0.750009C8.93797 0.750009 6.15197 1.98401 4.12297 3.98501L4.12397 3.98401V0.751009H2.62397V6.75101H8.62397V5.25101H4.98097C5.88924 4.30215 6.98033 3.54713 8.1884 3.03153C9.39646 2.51592 10.6965 2.2504 12.01 2.25101C17.38 2.25101 21.748 6.62001 21.748 11.989C21.748 17.358 17.379 21.727 12.01 21.727C6.64097 21.727 2.27197 17.358 2.27197 11.989H0.771973C0.771973 18.196 5.80397 23.227 12.01 23.227C15.113 23.227 17.923 21.969 19.957 19.935C21.991 17.901 23.249 15.092 23.249 11.988C23.249 8.88401 21.991 6.07501 19.957 4.04101L19.958 4.04201Z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 107,
    columnNumber: 5
  }
}), __jsx("path", {
  d: "M16.125 7.5H6.375V15H16.125V7.5ZM15.375 14.25H7.125V8.25H15.375V14.25Z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 108,
    columnNumber: 5
  }
}), __jsx("path", {
  d: "M16.875 9.375V15.75H8.25V16.5H17.625V9.375H16.875Z",
  fill: "black",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 109,
    columnNumber: 5
  }
}), __jsx("path", {
  d: "M11.25 13.089C12.1805 13.089 12.9375 12.2655 12.9375 11.253C12.9375 10.2405 12.1805 9.41699 11.25 9.41699C10.3195 9.41699 9.5625 10.2405 9.5625 11.253C9.5625 12.2655 10.3195 13.089 11.25 13.089ZM11.25 10.1675C11.767 10.1675 12.1875 10.6545 12.1875 11.2535C12.1875 11.8525 11.767 12.3395 11.25 12.3395C10.733 12.3395 10.3125 11.8525 10.3125 11.2535C10.3125 10.6545 10.733 10.1675 11.25 10.1675Z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 110,
    columnNumber: 5
  }
}), __jsx("path", {
  d: "M7.875 9.1875H8.625V13.3125H7.875V9.1875Z",
  fill: "black",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 111,
    columnNumber: 5
  }
}), __jsx("path", {
  d: "M13.875 9.1875H14.625V13.3125H13.875V9.1875Z",
  fill: "black",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 112,
    columnNumber: 5
  }
}));
const TransactionHistoryIcon = ({
  width,
  height
}) => __jsx("svg", {
  width: width || '1em',
  height: height || '1em',
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 117,
    columnNumber: 3
  }
}, __jsx("path", {
  d: "M19.958 4.04201C18.9157 2.99684 17.6772 2.16796 16.3135 1.603C14.9499 1.03805 13.488 0.748166 12.012 0.750009C8.93797 0.750009 6.15197 1.98401 4.12297 3.98501L4.12397 3.98401V0.751009H2.62397V6.75101H8.62397V5.25101H4.98097C5.88924 4.30215 6.98033 3.54713 8.1884 3.03153C9.39646 2.51592 10.6965 2.2504 12.01 2.25101C17.38 2.25101 21.748 6.62001 21.748 11.989C21.748 17.358 17.379 21.727 12.01 21.727C6.64097 21.727 2.27197 17.358 2.27197 11.989H0.771973C0.771973 18.196 5.80397 23.227 12.01 23.227C15.113 23.227 17.923 21.969 19.957 19.935C21.991 17.901 23.249 15.092 23.249 11.988C23.249 8.88401 21.991 6.07501 19.957 4.04101L19.958 4.04201Z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 124,
    columnNumber: 5
  }
}), __jsx("path", {
  d: "M12.0003 6.16675C8.77897 6.16675 6.16699 8.77873 6.16699 12.0001C6.16699 15.2214 8.77897 17.8334 12.0003 17.8334C15.2217 17.8334 17.8337 15.2214 17.8337 12.0001C17.8337 8.77873 15.2217 6.16675 12.0003 6.16675ZM12.0003 16.8438C9.32585 16.8438 7.15658 14.6746 7.15658 12.0001C7.15658 9.3256 9.32585 7.15633 12.0003 7.15633C14.6748 7.15633 16.8441 9.3256 16.8441 12.0001C16.8441 14.6746 14.6748 16.8438 12.0003 16.8438ZM12.6214 11.698L12.2907 11.6212V9.87248C12.7855 9.94019 13.0915 10.2501 13.1436 10.6303C13.1501 10.6824 13.1943 10.7201 13.2464 10.7201H13.8311C13.8923 10.7201 13.9404 10.6667 13.9352 10.6056C13.8558 9.79435 13.1878 9.27352 12.2959 9.18368V8.75789C12.2959 8.7006 12.249 8.65373 12.1917 8.65373H11.8258C11.7686 8.65373 11.7217 8.7006 11.7217 8.75789V9.18758C10.7998 9.27743 10.0785 9.78654 10.0785 10.7371C10.0785 11.6173 10.7269 12.0417 11.4079 12.2045L11.7295 12.2865V14.1446C11.154 14.0678 10.8311 13.7605 10.7646 13.3464C10.7568 13.297 10.7126 13.2605 10.6618 13.2605H10.0602C9.99902 13.2605 9.95085 13.3126 9.95606 13.3738C10.0146 14.0899 10.5576 14.7488 11.7165 14.8334V15.2423C11.7165 15.2996 11.7633 15.3464 11.8206 15.3464H12.1904C12.2477 15.3464 12.2946 15.2996 12.2946 15.241L12.292 14.8282C13.3115 14.7384 14.0407 14.1928 14.0407 13.2136C14.0394 12.31 13.4652 11.9063 12.6214 11.698ZM11.7282 11.4871C11.6553 11.4662 11.5941 11.4467 11.5329 11.422C11.0928 11.2631 10.8883 11.0066 10.8883 10.6759C10.8883 10.2032 11.2464 9.93368 11.7282 9.87248V11.4871ZM12.2907 14.1485V12.4076C12.3311 12.4194 12.3675 12.4285 12.4053 12.4363C13.0212 12.6238 13.2282 12.8842 13.2282 13.2839C13.2282 13.7931 12.8454 14.099 12.2907 14.1485Z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 125,
    columnNumber: 5
  }
}));
const PurchasedImageIcon = ({
  width,
  height
}) => __jsx("svg", {
  width: width || '1em',
  height: height || '1em',
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 130,
    columnNumber: 3
  }
}, __jsx("path", {
  d: "M7.5 6.75C7.5 6.75 7.5 2.25 12 2.25C16.5 2.25 16.5 6.75 16.5 6.75M3.75 6.75V21.75H20.25V6.75H3.75Z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 137,
    columnNumber: 5
  }
}), __jsx("path", {
  d: "M12.4816 13.966L11.5699 15.1285L11.0883 14.5145C11.0795 14.5032 11.0683 14.4942 11.0555 14.488C11.0427 14.4817 11.0287 14.4785 11.0145 14.4785C11.0002 14.4785 10.9862 14.4817 10.9734 14.488C10.9606 14.4942 10.9494 14.5032 10.9406 14.5145L9.77109 16.0051C9.76027 16.0189 9.75356 16.0355 9.75172 16.0529C9.74988 16.0704 9.75299 16.088 9.76069 16.1038C9.76839 16.1195 9.78038 16.1328 9.79527 16.1421C9.81017 16.1514 9.82737 16.1563 9.84492 16.1562H14.1562C14.2348 16.1562 14.2781 16.066 14.2301 16.0051L12.6305 13.966C12.6216 13.9548 12.6103 13.9457 12.5974 13.9395C12.5845 13.9333 12.5704 13.93 12.5561 13.93C12.5417 13.93 12.5276 13.9333 12.5147 13.9395C12.5018 13.9457 12.4905 13.9548 12.4816 13.966ZM10.2188 13.1797C10.2188 13.304 10.2681 13.4232 10.356 13.5111C10.444 13.5991 10.5632 13.6484 10.6875 13.6484C10.8118 13.6484 10.931 13.5991 11.019 13.5111C11.1069 13.4232 11.1562 13.304 11.1562 13.1797C11.1562 13.0554 11.1069 12.9361 11.019 12.8482C10.931 12.7603 10.8118 12.7109 10.6875 12.7109C10.5632 12.7109 10.444 12.7603 10.356 12.8482C10.2681 12.9361 10.2188 13.0554 10.2188 13.1797ZM16.0148 11.382L13.493 8.86016C13.4227 8.78984 13.3277 8.75 13.2281 8.75H8.25C8.04258 8.75 7.875 8.91758 7.875 9.125V18.875C7.875 19.0824 8.04258 19.25 8.25 19.25H15.75C15.9574 19.25 16.125 19.0824 16.125 18.875V11.648C16.125 11.5484 16.0852 11.4523 16.0148 11.382ZM15.2602 11.8203H13.0547V9.61484L15.2602 11.8203ZM15.2812 18.4062H8.71875V9.59375H12.2578V12.125C12.2578 12.2555 12.3097 12.3807 12.402 12.473C12.4943 12.5653 12.6195 12.6172 12.75 12.6172H15.2812V18.4062Z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 138,
    columnNumber: 5
  }
}));
const PurchasedVideoIcon = ({
  width,
  height
}) => __jsx("svg", {
  width: width || '1em',
  height: height || '1em',
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 143,
    columnNumber: 3
  }
}, __jsx("path", {
  d: "M7.5 6.75C7.5 6.75 7.5 2.25 12 2.25C16.5 2.25 16.5 6.75 16.5 6.75M3.75 6.75V21.75H20.25V6.75H3.75Z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 150,
    columnNumber: 5
  }
}), __jsx("path", {
  d: "M12 9C9.243 9 7 11.243 7 14C7 16.757 9.243 19 12 19C14.757 19 17 16.757 17 14C17 11.243 14.757 9 12 9ZM12 18C9.7945 18 8 16.2055 8 14C8 11.7945 9.7945 10 12 10C14.2055 10 16 11.7945 16 14C16 16.2055 14.2055 18 12 18Z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 151,
    columnNumber: 5
  }
}), __jsx("path", {
  d: "M10.5 16.5L14.5 14L10.5 11.5V16.5Z",
  fill: "black",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 152,
    columnNumber: 5
  }
}));
const PurchasedItemIcon = ({
  width,
  height
}) => __jsx("svg", {
  width: width || '1em',
  height: height || '1em',
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 157,
    columnNumber: 3
  }
}, __jsx("path", {
  d: "M1.5 6.40498V17.61C1.5 18.285 1.95 18.87 2.625 19.065L12.375 21.66C12.615 21.735 12.885 21.735 13.125 21.66L22.875 19.065C23.55 18.87 24 18.285 24 17.61V6.40498C24 5.72998 23.55 5.14498 22.875 4.94998L13.125 2.33998C12.877 2.29498 12.623 2.29498 12.375 2.33998L2.625 4.94998C1.95 5.14498 1.5 5.72998 1.5 6.40498ZM12 20.04L3 17.655V7.49998L12 9.91498V20.04ZM3 5.99998L6.75 4.99498L16.5 7.58998L12.75 8.59498L3 5.99998ZM22.5 17.655L13.5 20.04V9.91498L16.5 9.08998V12.75L19.5 11.955V8.29498L22.5 7.49998V17.655ZM19.5 6.79498L9.75 4.19998L12.75 3.40498L22.5 5.99998L19.5 6.79498Z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 164,
    columnNumber: 5
  }
}));
const MyProductIcon = ({
  width,
  height
}) => __jsx("svg", {
  width: width || '1em',
  height: height || '1em',
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 169,
    columnNumber: 3
  }
}, __jsx("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M1.5 6.40503V17.61C1.5 18.285 1.95 18.87 2.625 19.065L12.375 21.66C12.615 21.735 12.885 21.735 13.125 21.66L22.875 19.065C23.55 18.87 24 18.285 24 17.61V6.40503C24 5.73003 23.55 5.14503 22.875 4.95003L13.125 2.34003C12.877 2.29502 12.623 2.29502 12.375 2.34003L2.625 4.95003C1.95 5.14503 1.5 5.73003 1.5 6.40503ZM12 20.04L3 17.655V7.50003L12 9.91503V20.04ZM3 6.00003L6.75 4.99503L16.5 7.59003L12.75 8.59503L3 6.00003ZM22.5 17.655L13.5 20.04V9.91503L16.5 9.09003V12.75L19.5 11.955V8.29503L22.5 7.50003V17.655ZM19.5 6.79503L9.75 4.20003L12.75 3.40503L22.5 6.00003L19.5 6.79503Z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 176,
    columnNumber: 5
  }
}));
const VideosIcon = ({
  width,
  height
}) => __jsx("svg", {
  width: width || '1em',
  height: height || '1em',
  fill: "currentColor",
  viewBox: "0 0 30 31",
  xmlns: "http://www.w3.org/2000/svg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 185,
    columnNumber: 3
  }
}, __jsx("path", {
  d: "M22.5002 9.14424C22.5002 7.76549 21.3789 6.64424 20.0002 6.64424H5.00018C3.62143 6.64424 2.50018 7.76549 2.50018 9.14424V21.6442C2.50018 23.023 3.62143 24.1442 5.00018 24.1442H20.0002C21.3789 24.1442 22.5002 23.023 22.5002 21.6442V17.478L27.5002 21.6442V9.14424L22.5002 13.3105V9.14424ZM20.0027 21.6442H5.00018V9.14424H20.0002L20.0014 15.393L20.0002 15.3942L20.0014 15.3955L20.0027 21.6442Z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 192,
    columnNumber: 5
  }
}));
const PhotosIcon = ({
  width,
  height
}) => __jsx("svg", {
  width: width || '1em',
  height: height || '1em',
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 197,
    columnNumber: 3
  }
}, __jsx("path", {
  d: "M21.75 3.75H2.25C1.83516 3.75 1.5 4.08516 1.5 4.5V19.5C1.5 19.9148 1.83516 20.25 2.25 20.25H21.75C22.1648 20.25 22.5 19.9148 22.5 19.5V4.5C22.5 4.08516 22.1648 3.75 21.75 3.75ZM20.8125 18.5625H3.1875V17.6273L6.43359 13.7766L9.95156 17.9484L15.4242 11.4609L20.8125 17.85V18.5625ZM20.8125 15.5203L15.5672 9.3C15.4922 9.21094 15.3562 9.21094 15.2812 9.3L9.95156 15.6188L6.57656 11.618C6.50156 11.5289 6.36562 11.5289 6.29062 11.618L3.1875 15.2977V5.4375H20.8125V15.5203ZM7.125 10.6875C7.39585 10.6875 7.66405 10.6342 7.91428 10.5305C8.16452 10.4269 8.39189 10.2749 8.58341 10.0834C8.77493 9.89189 8.92685 9.66452 9.0305 9.41428C9.13415 9.16405 9.1875 8.89585 9.1875 8.625C9.1875 8.35415 9.13415 8.08595 9.0305 7.83572C8.92685 7.58548 8.77493 7.35811 8.58341 7.16659C8.39189 6.97507 8.16452 6.82315 7.91428 6.7195C7.66405 6.61585 7.39585 6.5625 7.125 6.5625C6.57799 6.5625 6.05339 6.7798 5.66659 7.16659C5.2798 7.55339 5.0625 8.07799 5.0625 8.625C5.0625 9.17201 5.2798 9.69661 5.66659 10.0834C6.05339 10.4702 6.57799 10.6875 7.125 10.6875ZM7.125 7.96875C7.48828 7.96875 7.78125 8.26172 7.78125 8.625C7.78125 8.98828 7.48828 9.28125 7.125 9.28125C6.76172 9.28125 6.46875 8.98828 6.46875 8.625C6.46875 8.26172 6.76172 7.96875 7.125 7.96875Z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 204,
    columnNumber: 5
  }
}));
const FemaleSignIcon = ({
  color
}) => __jsx("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 209,
    columnNumber: 3
  }
}, __jsx("path", {
  d: "M8 1.33337C5.794 1.33337 4 3.12737 4 5.33337C4 7.31137 5.44467 8.95471 7.33333 9.27337V11.3334H5.33333V12.6667H7.33333V14.6587H8.66667V12.6667H10.6667V11.3334H8.66667V9.27337C10.5553 8.95404 12 7.31137 12 5.33337C12 3.12737 10.206 1.33337 8 1.33337ZM8 8.00004C6.52933 8.00004 5.33333 6.80404 5.33333 5.33337C5.33333 3.86271 6.52933 2.66671 8 2.66671C9.47067 2.66671 10.6667 3.86271 10.6667 5.33337C10.6667 6.80404 9.47067 8.00004 8 8.00004Z",
  fill: color || 'currentColor',
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 216,
    columnNumber: 5
  }
}));
const MaleSignIcon = ({
  color
}) => __jsx("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 224,
    columnNumber: 3
  }
}, __jsx("path", {
  d: "M13.3334 7.33329V2.66663H8.66671L10.5287 4.52863L7.64737 7.40996C6.9726 6.9266 6.16341 6.66667 5.33337 6.66663C3.12737 6.66663 1.33337 8.46063 1.33337 10.6666C1.33337 12.8726 3.12737 14.6666 5.33337 14.6666C7.53937 14.6666 9.33337 12.8726 9.33337 10.6666C9.33337 9.80396 9.05604 9.00663 8.59004 8.35263L11.4714 5.47129L13.3334 7.33329ZM5.33337 13.3333C3.86271 13.3333 2.66671 12.1373 2.66671 10.6666C2.66671 9.19596 3.86271 7.99996 5.33337 7.99996C6.80404 7.99996 8.00004 9.19596 8.00004 10.6666C8.00004 12.1373 6.80404 13.3333 5.33337 13.3333Z",
  fill: color || 'currentColor',
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 231,
    columnNumber: 5
  }
}));
const TransgenderIcon = ({
  color
}) => __jsx("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 239,
    columnNumber: 3
  }
}, __jsx("path", {
  d: "M6.66665 10.3333C7.5507 10.3333 8.39855 9.9821 9.02367 9.35698C9.64879 8.73185 9.99998 7.88401 9.99998 6.99995C9.99998 6.1159 9.64879 5.26805 9.02367 4.64293C8.39855 4.01781 7.5507 3.66662 6.66665 3.66662C5.78259 3.66662 4.93474 4.01781 4.30962 4.64293C3.6845 5.26805 3.33331 6.1159 3.33331 6.99995C3.33331 7.88401 3.6845 8.73185 4.30962 9.35698C4.93474 9.9821 5.78259 10.3333 6.66665 10.3333V10.3333ZM10.6753 4.60929C11.0688 5.26924 11.2932 6.0161 11.3288 6.78362C11.3644 7.55113 11.21 8.31556 10.8792 9.00907C10.5485 9.70258 10.0517 10.3037 9.4329 10.7592C8.8141 11.2146 8.09245 11.5103 7.33198 11.62L7.33331 11.6666V12.3333H7.99998C8.17679 12.3333 8.34636 12.4035 8.47138 12.5285C8.59641 12.6536 8.66664 12.8231 8.66664 13C8.66664 13.1768 8.59641 13.3463 8.47138 13.4714C8.34636 13.5964 8.17679 13.6666 7.99998 13.6666H7.33331V14.3333C7.33331 14.5101 7.26307 14.6797 7.13805 14.8047C7.01303 14.9297 6.84346 15 6.66665 15C6.48983 15 6.32026 14.9297 6.19524 14.8047C6.07022 14.6797 5.99998 14.5101 5.99998 14.3333V13.6666H5.33331C5.1565 13.6666 4.98693 13.5964 4.86191 13.4714C4.73688 13.3463 4.66665 13.1768 4.66665 13C4.66665 12.8231 4.73688 12.6536 4.86191 12.5285C4.98693 12.4035 5.1565 12.3333 5.33331 12.3333H5.99998V11.6666C5.99998 11.6506 5.99998 11.6353 6.00131 11.62C4.83545 11.4491 3.77732 10.8437 3.03926 9.92518C2.3012 9.00666 1.93781 7.84299 2.02201 6.66769C2.10622 5.49239 2.63178 4.39242 3.49325 3.58849C4.35471 2.78457 5.48834 2.33617 6.66665 2.33329C7.83906 2.33186 8.96881 2.77304 9.82998 3.56862L11.0633 2.33529H10.0066C9.82983 2.33529 9.66026 2.26505 9.53524 2.14002C9.41022 2.015 9.33998 1.84543 9.33998 1.66862C9.33998 1.49181 9.41022 1.32224 9.53524 1.19722C9.66026 1.07219 9.82983 1.00195 10.0066 1.00195H12.6733C12.8501 1.00195 13.0197 1.07219 13.1447 1.19722C13.2697 1.32224 13.34 1.49181 13.34 1.66862V4.33529C13.34 4.5121 13.2697 4.68167 13.1447 4.80669C13.0197 4.93172 12.8501 5.00195 12.6733 5.00195C12.4965 5.00195 12.3269 4.93172 12.2019 4.80669C12.0769 4.68167 12.0066 4.5121 12.0066 4.33529V3.27795L10.676 4.60929H10.6753Z",
  fill: color || 'currentColor',
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 246,
    columnNumber: 5
  }
}));
const TokensIcon = () => __jsx("svg", {
  width: "25",
  height: "24",
  viewBox: "0 0 25 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 254,
    columnNumber: 3
  }
}, __jsx("path", {
  d: "M9.8501 10C9.58488 10 9.33053 10.1054 9.14299 10.2929C8.95545 10.4804 8.8501 10.7348 8.8501 11V13C8.8501 13.2652 8.95545 13.5196 9.14299 13.7071C9.33053 13.8946 9.58488 14 9.8501 14C10.1153 14 10.3697 13.8946 10.5572 13.7071C10.7447 13.5196 10.8501 13.2652 10.8501 13V11C10.8501 10.7348 10.7447 10.4804 10.5572 10.2929C10.3697 10.1054 10.1153 10 9.8501 10ZM21.8501 11C22.1153 11 22.3697 10.8946 22.5572 10.7071C22.7447 10.5196 22.8501 10.2652 22.8501 10V6C22.8501 5.73478 22.7447 5.48043 22.5572 5.29289C22.3697 5.10536 22.1153 5 21.8501 5H3.8501C3.58488 5 3.33053 5.10536 3.14299 5.29289C2.95545 5.48043 2.8501 5.73478 2.8501 6V10C2.8501 10.2652 2.95545 10.5196 3.14299 10.7071C3.33053 10.8946 3.58488 11 3.8501 11C4.11531 11 4.36967 11.1054 4.5572 11.2929C4.74474 11.4804 4.8501 11.7348 4.8501 12C4.8501 12.2652 4.74474 12.5196 4.5572 12.7071C4.36967 12.8946 4.11531 13 3.8501 13C3.58488 13 3.33053 13.1054 3.14299 13.2929C2.95545 13.4804 2.8501 13.7348 2.8501 14V18C2.8501 18.2652 2.95545 18.5196 3.14299 18.7071C3.33053 18.8946 3.58488 19 3.8501 19H21.8501C22.1153 19 22.3697 18.8946 22.5572 18.7071C22.7447 18.5196 22.8501 18.2652 22.8501 18V14C22.8501 13.7348 22.7447 13.4804 22.5572 13.2929C22.3697 13.1054 22.1153 13 21.8501 13C21.5849 13 21.3305 12.8946 21.143 12.7071C20.9555 12.5196 20.8501 12.2652 20.8501 12C20.8501 11.7348 20.9555 11.4804 21.143 11.2929C21.3305 11.1054 21.5849 11 21.8501 11ZM20.8501 9.18C20.2709 9.3902 19.7706 9.77363 19.4169 10.2782C19.0633 10.7827 18.8736 11.3839 18.8736 12C18.8736 12.6161 19.0633 13.2173 19.4169 13.7218C19.7706 14.2264 20.2709 14.6098 20.8501 14.82V17H10.8501C10.8501 16.7348 10.7447 16.4804 10.5572 16.2929C10.3697 16.1054 10.1153 16 9.8501 16C9.58488 16 9.33053 16.1054 9.14299 16.2929C8.95545 16.4804 8.8501 16.7348 8.8501 17H4.8501V14.82C5.42925 14.6098 5.92964 14.2264 6.28326 13.7218C6.63687 13.2173 6.82657 12.6161 6.82657 12C6.82657 11.3839 6.63687 10.7827 6.28326 10.2782C5.92964 9.77363 5.42925 9.3902 4.8501 9.18V7H8.8501C8.8501 7.26522 8.95545 7.51957 9.14299 7.70711C9.33053 7.89464 9.58488 8 9.8501 8C10.1153 8 10.3697 7.89464 10.5572 7.70711C10.7447 7.51957 10.8501 7.26522 10.8501 7H20.8501V9.18Z",
  fill: "currentColor",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 261,
    columnNumber: 5
  }
}));
const EarningIcon = () => __jsx("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 269,
    columnNumber: 3
  }
}, __jsx("path", {
  d: "M20.25 3H0.75V18H20.25V3ZM18.75 16.5H2.25V4.5H18.75V16.5Z",
  fill: "currentColor",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 276,
    columnNumber: 5
  }
}), __jsx("path", {
  d: "M21.75 6.75V19.5H4.5V21H23.25V6.75H21.75Z",
  fill: "currentColor",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 280,
    columnNumber: 5
  }
}), __jsx("path", {
  d: "M10.5 14.178C12.361 14.178 13.875 12.531 13.875 10.506C13.875 8.481 12.361 6.834 10.5 6.834C8.639 6.834 7.125 8.481 7.125 10.506C7.125 12.531 8.639 14.178 10.5 14.178ZM10.5 8.335C11.534 8.335 12.375 9.309 12.375 10.507C12.375 11.705 11.534 12.679 10.5 12.679C9.466 12.679 8.625 11.705 8.625 10.507C8.625 9.309 9.466 8.335 10.5 8.335Z",
  fill: "currentColor",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 281,
    columnNumber: 5
  }
}), __jsx("path", {
  d: "M3.75 6.375H5.25V14.625H3.75V6.375Z",
  fill: "currentColor",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 285,
    columnNumber: 5
  }
}), __jsx("path", {
  d: "M15.75 6.375H17.25V14.625H15.75V6.375Z",
  fill: "currentColor",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 286,
    columnNumber: 5
  }
}));
const PayoutRequestIcon = () => __jsx("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 291,
    columnNumber: 3
  }
}, __jsx("path", {
  d: "M20.625 2.625H3.375C2.96016 2.625 2.625 2.96016 2.625 3.375V20.625C2.625 21.0398 2.96016 21.375 3.375 21.375H20.625C21.0398 21.375 21.375 21.0398 21.375 20.625V3.375C21.375 2.96016 21.0398 2.625 20.625 2.625ZM19.6875 13.5H12.375V10.5H19.6875V13.5ZM19.6875 19.6875H4.3125V4.3125H19.6875V9H11.625C11.2102 9 10.875 9.33516 10.875 9.75V14.25C10.875 14.6648 11.2102 15 11.625 15H19.6875V19.6875ZM13.5938 12C13.5938 12.2486 13.6925 12.4871 13.8683 12.6629C14.0442 12.8387 14.2826 12.9375 14.5312 12.9375C14.7799 12.9375 15.0183 12.8387 15.1942 12.6629C15.37 12.4871 15.4688 12.2486 15.4688 12C15.4688 11.7514 15.37 11.5129 15.1942 11.3371C15.0183 11.1613 14.7799 11.0625 14.5312 11.0625C14.2826 11.0625 14.0442 11.1613 13.8683 11.3371C13.6925 11.5129 13.5938 11.7514 13.5938 12Z",
  fill: "currentColor",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 298,
    columnNumber: 5
  }
}));
const Group = () => __jsx("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 25 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 306,
    columnNumber: 3
  }
}, __jsx("path", {
  d: "M17.4542 11.048C18.0632 10.0101 18.3262 8.80528 18.2052 7.60797C18.0262 5.82397 17.0302 4.24697 15.4022 3.16797L14.2972 4.83397C15.4162 5.57597 16.0972 6.63297 16.2152 7.80797C16.2696 8.35407 16.2016 8.90543 16.0162 9.42195C15.8307 9.93847 15.5325 10.4072 15.1432 10.794L13.9512 11.986L15.5692 12.461C19.8012 13.701 19.8502 17.957 19.8502 18H21.8502C21.8502 16.211 20.8942 12.715 17.4542 11.048Z",
  fill: "currentColor",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 313,
    columnNumber: 5
  }
}), __jsx("path", {
  d: "M10.3501 12C12.5561 12 14.3501 10.206 14.3501 8C14.3501 5.794 12.5561 4 10.3501 4C8.1441 4 6.3501 5.794 6.3501 8C6.3501 10.206 8.1441 12 10.3501 12ZM10.3501 6C11.4531 6 12.3501 6.897 12.3501 8C12.3501 9.103 11.4531 10 10.3501 10C9.2471 10 8.3501 9.103 8.3501 8C8.3501 6.897 9.2471 6 10.3501 6ZM11.8501 13H8.8501C5.5411 13 2.8501 15.691 2.8501 19V20H4.8501V19C4.8501 16.794 6.6441 15 8.8501 15H11.8501C14.0561 15 15.8501 16.794 15.8501 19V20H17.8501V19C17.8501 15.691 15.1591 13 11.8501 13Z",
  fill: "currentColor",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 317,
    columnNumber: 5
  }
}));

/***/ }),

/***/ "./src/components/common/base/loader.less":
/*!************************************************!*\
  !*** ./src/components/common/base/loader.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/common/base/loader.tsx":
/*!***********************************************!*\
  !*** ./src/components/common/base/loader.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loader_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader.less */ "./src/components/common/base/loader.less");
/* harmony import */ var _loader_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_loader_less__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\programData\\React\\user\\src\\components\\common\\base\\loader.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Loader = ({
  spinning = false,
  fullScreen = false
}) => __jsx("div", {
  className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('loader', {
    hidden: !spinning,
    fullScreen
  }),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }
}, __jsx("div", {
  className: "warpper",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 7
  }
}, __jsx("img", {
  src: "/loading-ico.gif",
  width: "65px",
  alt: "",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 29
  }
}))));

/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./src/components/common/layout/banner.less":
/*!**************************************************!*\
  !*** ./src/components/common/layout/banner.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/common/layout/banner.tsx":
/*!*************************************************!*\
  !*** ./src/components/common/layout/banner.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _banner_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./banner.less */ "./src/components/common/layout/banner.less");
/* harmony import */ var _banner_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_banner_less__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\programData\\React\\user\\src\\components\\common\\layout\\banner.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import Link from 'next/link';




const renderBanner = (banner, styleImage) => {
  const {
    type,
    href,
    _id,
    photo,
    contentHTML
  } = banner;

  if (type === 'html' && contentHTML) {
    // eslint-disable-next-line react/no-danger
    return __jsx("div", {
      dangerouslySetInnerHTML: {
        __html: contentHTML
      },
      style: styleImage || {},
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 12
      }
    });
  }

  return __jsx("a", {
    href: href || '#',
    target: "_blank",
    rel: "noreferrer",
    key: _id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: photo && photo.url,
    alt: "",
    style: styleImage || {},
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }));
};

const Banner = ({
  banners,
  styleImage,
  classnames
}) => __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 3
  }
}, banners && banners.length > 0 && __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Carousel"], {
  autoplay: true,
  arrows: true,
  dots: false,
  effect: "fade",
  className: classnames,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 7
  }
}, banners.map(item => renderBanner(item, styleImage))));

Banner.defaultProps = {
  classnames: ''
};
/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./src/components/performer/index.less":
/*!*********************************************!*\
  !*** ./src/components/performer/index.less ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/performer/performer-grid.tsx":
/*!*****************************************************!*\
  !*** ./src/components/performer/performer-grid.tsx ***!
  \*****************************************************/
/*! exports provided: GridCard, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridCard", function() { return GridCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_common_base_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/common/base/icons */ "./src/components/common/base/icons.tsx");
/* harmony import */ var src_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/lib */ "./src/lib/index.ts");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.less */ "./src/components/performer/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_common_layout_banner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/common/layout/banner */ "./src/components/common/layout/banner.tsx");
/* harmony import */ var _components_common_base_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/common/base/loader */ "./src/components/common/base/loader.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "E:\\programData\\React\\user\\src\\components\\performer\\performer-grid.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const renderTitle = (gender, name) => __jsx("div", {
  className: "p-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 3
  }
}, __jsx("span", {
  style: {
    marginRight: 5
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 5
  }
}, name), gender === 'male' ? __jsx("span", {
  className: "anticon",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 7
  }
}, __jsx(_components_common_base_icons__WEBPACK_IMPORTED_MODULE_3__["MaleSignIcon"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 9
  }
})) : gender === 'female' ? __jsx("span", {
  className: "anticon",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 7
  }
}, __jsx(_components_common_base_icons__WEBPACK_IMPORTED_MODULE_3__["FemaleSignIcon"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 9
  }
})) : __jsx("span", {
  className: "anticon",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 7
  }
}, __jsx(_components_common_base_icons__WEBPACK_IMPORTED_MODULE_3__["TransgenderIcon"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 9
  }
})));

const renderTags = tags => __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Space"], {
  className: "tags",
  wrap: true,
  size: [5, 2],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 3
  }
}, tags.map(tag => __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: {
    pathname: '/tag',
    query: {
      tags: tag
    }
  },
  key: tag,
  as: `/tag/${tag}`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 7
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 9
  }
}, "#", tag))));

const GridCard = ({
  performer,
  loggedIn,
  onLike,
  className,
  placeholderAvatarUrl
}) => {
  var _performer$stats;

  const {
    isOnline,
    streamingStatus
  } = performer;
  const statusClassNames = ['p-status'];
  let status = 'offline';

  if (isOnline) {
    switch (streamingStatus) {
      case 'private':
        statusClassNames.push('private');
        status = 'private chat';
        break;

      case 'group':
        statusClassNames.push('group');
        status = 'group chat';
        break;

      case 'public':
        status = 'live';
        statusClassNames.push('online');
        break;

      default:
        status = 'online';
        statusClassNames.push('online');
        break;
    }
  } else {
    statusClassNames.push('offline');
  }

  const defaultPlaceholderAvatarUrl = placeholderAvatarUrl || '/default-user-icon.png';
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Grid, {
    className: className,
    key: performer._id,
    hoverable: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 5
    }
  }, performer.isBlocked && __jsx("div", {
    className: "blocked-thumb",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["LockOutlined"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 11
    }
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: {
      pathname: '/stream',
      query: {
        performer: JSON.stringify(performer)
      }
    },
    as: `/profile/${performer.username}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "performer-avatar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  }, __jsx("img", {
    className: "image-performer",
    src: typeof performer.avatar === 'string' && performer.avatar.length > 0 ? performer.avatar : defaultPlaceholderAvatarUrl,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  }), __jsx("span", {
    className: statusClassNames.join(' '),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }
  }, status), renderTitle(performer.gender, performer.username), (performer === null || performer === void 0 ? void 0 : (_performer$stats = performer.stats) === null || _performer$stats === void 0 ? void 0 : _performer$stats.views) > 0 && __jsx("div", {
    className: "p-viewer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 15
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["EyeOutlined"], {
    style: {
      marginRight: 5
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 17
    }
  }, performer.stats.views))))), __jsx("div", {
    className: "performer-bottom",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    justify: "space-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 13
    }
  }, performer.tags && renderTags(performer.tags))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 11
    }
  }, __jsx("div", {
    "aria-hidden": true,
    hidden: !loggedIn,
    className: "p-favorite",
    onClick: () => onLike(performer),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 13
    }
  }, performer.isFavorite ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["HeartFilled"], {
    className: "icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 17
    }
  }) : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["HeartOutlined"], {
    className: "icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 17
    }
  })))), __jsx("div", {
    className: "about-me",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 9
    }
  }, performer === null || performer === void 0 ? void 0 : performer.aboutMe)));
};

const PerformerGrid = ({
  data,
  searching,
  success,
  title,
  onLike,
  loggedIn,
  isPage,
  offset,
  limit,
  total,
  setFilter,
  placeholderAvatarUrl,
  banners,
  render
}) => {
  const {
    topBanners,
    rightBanners,
    bottomBanners
  } = banners;

  const RowGrid = ({
    dataSource
  }) => __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    style: {
      width: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 5
    }
  }, dataSource && dataSource.length > 0 && dataSource.map(performer => __jsx(GridCard, {
    placeholderAvatarUrl: placeholderAvatarUrl,
    className: "performer-box",
    key: performer._id,
    performer: performer,
    loggedIn: loggedIn,
    onLike: onLike,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 11
    }
  })));

  const renderGrid = () => {
    const {
      length
    } = data;

    if (length <= 12) {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        style: {
          width: '100%'
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 9
        }
      }, rightBanners && rightBanners.length > 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        lg: 16,
        md: 16,
        xs: 24,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 15
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 17
        }
      }, data && data.length > 0 && data.map(performer => __jsx(GridCard, {
        placeholderAvatarUrl: placeholderAvatarUrl,
        className: "performer-box performer-box-4-item",
        key: performer._id,
        performer: performer,
        loggedIn: loggedIn,
        onLike: () => onLike(performer),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 23
        }
      })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        lg: 8,
        md: 8,
        xs: 24,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 15
        }
      }, __jsx(_components_common_layout_banner__WEBPACK_IMPORTED_MODULE_8__["default"], {
        classnames: "right-banners",
        banners: rightBanners,
        styleImage: {
          padding: '10px',
          width: '100%'
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 17
        }
      }))) : data && data.length > 0 && data.map(performer => __jsx(GridCard, {
        placeholderAvatarUrl: placeholderAvatarUrl,
        className: "performer-box",
        key: performer._id,
        performer: performer,
        loggedIn: loggedIn,
        onLike: () => onLike(performer),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 15
        }
      })));
    }

    if (length > 12 && length <= 24) {
      const dataChunk = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["chunk"])(data, 12);
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, rightBanners && rightBanners.length > 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        style: {
          width: '100%'
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270,
          columnNumber: 15
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        lg: 16,
        md: 16,
        xs: 24,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271,
          columnNumber: 17
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272,
          columnNumber: 19
        }
      }, dataChunk[0] && dataChunk[0].length > 0 && dataChunk[0].map(performer => __jsx(GridCard, {
        placeholderAvatarUrl: placeholderAvatarUrl,
        className: "performer-box performer-box-4-item",
        key: performer._id,
        performer: performer,
        loggedIn: loggedIn,
        onLike: () => onLike(performer),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276,
          columnNumber: 25
        }
      })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        lg: 8,
        md: 8,
        xs: 24,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287,
          columnNumber: 17
        }
      }, rightBanners && rightBanners.length > 0 && __jsx(_components_common_layout_banner__WEBPACK_IMPORTED_MODULE_8__["default"], {
        classnames: "right-banners",
        banners: rightBanners,
        styleImage: {
          padding: '10px',
          width: '100%'
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 21
        }
      }))), __jsx(RowGrid, {
        dataSource: dataChunk[1],
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297,
          columnNumber: 15
        }
      })) : __jsx(RowGrid, {
        dataSource: data,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300,
          columnNumber: 13
        }
      }));
    }

    if (length > 24 && length <= 36) {
      const dataChunk = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["chunk"])(data, 12);
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(RowGrid, {
        dataSource: dataChunk[0],
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309,
          columnNumber: 11
        }
      }), rightBanners && rightBanners.length > 0 ? __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        style: {
          width: '100%'
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311,
          columnNumber: 13
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xl: 16,
        lg: 18,
        md: 18,
        xs: 24,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312,
          columnNumber: 15
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313,
          columnNumber: 17
        }
      }, dataChunk[1] && dataChunk[1].length > 0 && dataChunk[1].map(performer => __jsx(GridCard, {
        placeholderAvatarUrl: placeholderAvatarUrl,
        className: "performer-box performer-box-4-item",
        key: performer._id,
        performer: performer,
        loggedIn: loggedIn,
        onLike: () => onLike(performer),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317,
          columnNumber: 23
        }
      })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xl: 8,
        lg: 6,
        md: 6,
        xs: 24,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328,
          columnNumber: 15
        }
      }, __jsx(_components_common_layout_banner__WEBPACK_IMPORTED_MODULE_8__["default"], {
        classnames: "right-banners",
        banners: rightBanners,
        styleImage: {
          padding: '10px',
          width: '100%'
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329,
          columnNumber: 17
        }
      }))) : __jsx(RowGrid, {
        dataSource: dataChunk[1],
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337,
          columnNumber: 13
        }
      }), __jsx(RowGrid, {
        dataSource: dataChunk[2],
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339,
          columnNumber: 11
        }
      }));
    }

    if (length > 36) {
      const dataChunk = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["chunk"])(data, 12);
      const lastDataChunk = dataChunk.slice(3);
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(RowGrid, {
        dataSource: dataChunk[0],
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348,
          columnNumber: 11
        }
      }), rightBanners && rightBanners.length > 0 ? __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        style: {
          width: '100%'
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350,
          columnNumber: 13
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xl: 16,
        lg: 18,
        md: 18,
        xs: 24,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351,
          columnNumber: 15
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352,
          columnNumber: 17
        }
      }, dataChunk[1] && dataChunk[1].length > 0 && dataChunk[1].map(performer => __jsx(GridCard, {
        placeholderAvatarUrl: placeholderAvatarUrl,
        className: "performer-box performer-box-4-item",
        key: performer._id,
        performer: performer,
        loggedIn: loggedIn,
        onLike: () => onLike(performer),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356,
          columnNumber: 23
        }
      })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xl: 8,
        lg: 6,
        md: 6,
        xs: 24,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367,
          columnNumber: 15
        }
      }, __jsx(_components_common_layout_banner__WEBPACK_IMPORTED_MODULE_8__["default"], {
        classnames: "right-banners",
        banners: rightBanners,
        styleImage: {
          padding: '10px',
          width: '100%'
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368,
          columnNumber: 17
        }
      }))) : __jsx(RowGrid, {
        dataSource: dataChunk[1],
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376,
          columnNumber: 13
        }
      }), __jsx(RowGrid, {
        dataSource: dataChunk[2],
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378,
          columnNumber: 11
        }
      }), lastDataChunk.length > 0 && lastDataChunk.map(v => __jsx(RowGrid, {
        key: Object(src_lib__WEBPACK_IMPORTED_MODULE_4__["generateUuid"])(),
        dataSource: v,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 381,
          columnNumber: 15
        }
      })));
    }

    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
  };

  const actions = setFilter && total > 0 ? [total > limit && __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Pagination"], {
    disabled: searching,
    current: Math.round(offset / limit) + 1,
    pageSize: limit,
    total: total,
    size: "small",
    onChange: page => setFilter('offset', (page - 1) * limit),
    showSizeChanger: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 9
    }
  })] : [];

  if (render) {
    /**
     * placeholderAvatarUrl props
     */
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      className: "performer-grid",
      title: title,
      bordered: false,
      hoverable: false,
      bodyStyle: {
        padding: '0'
      },
      actions: actions,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 410,
        columnNumber: 7
      }
    }, __jsx(_components_common_base_loader__WEBPACK_IMPORTED_MODULE_9__["default"], {
      spinning: searching,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 418,
        columnNumber: 9
      }
    }), data.length > 0 && data.map(performer => render(performer)));
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, isPage && (topBanners === null || topBanners === void 0 ? void 0 : topBanners.length) > 0 && __jsx(_components_common_layout_banner__WEBPACK_IMPORTED_MODULE_8__["default"], {
    banners: topBanners,
    styleImage: {
      padding: '10px',
      width: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: "performer-grid",
    title: title,
    bordered: false,
    hoverable: false,
    bodyStyle: {
      padding: '0'
    },
    actions: actions,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 7
    }
  }, __jsx(_components_common_base_loader__WEBPACK_IMPORTED_MODULE_9__["default"], {
    spinning: searching,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 9
    }
  }), success // eslint-disable-next-line no-nested-ternary
  && (total > 0 ? isPage ? renderGrid() : data.map(performer => __jsx(GridCard, {
    key: performer === null || performer === void 0 ? void 0 : performer._id,
    placeholderAvatarUrl: placeholderAvatarUrl,
    className: "performer-box",
    performer: performer,
    loggedIn: loggedIn,
    onLike: p => onLike(p),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448,
      columnNumber: 17
    }
  })) : __jsx("div", {
    className: "ant-card-head",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459,
      columnNumber: 13
    }
  }, "No model found."))), isPage && (bottomBanners === null || bottomBanners === void 0 ? void 0 : bottomBanners.length) > 0 && __jsx(_components_common_layout_banner__WEBPACK_IMPORTED_MODULE_8__["default"], {
    banners: bottomBanners,
    styleImage: {
      padding: '10px',
      width: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463,
      columnNumber: 9
    }
  }));
};

PerformerGrid.defaultProps = {
  loggedIn: false,
  setFilter: null,
  limit: 0,
  offset: 0,
  total: 0,
  success: false,
  searching: false,
  title: '',
  onLike: null,
  render: null,
  isPage: false,
  banners: {},
  placeholderAvatarUrl: '/no-avatar.png'
};

const bannerSelecter = state => state.banner.listBanners.data;

const filterBanner = Object(src_lib__WEBPACK_IMPORTED_MODULE_4__["createSelector"])(bannerSelecter, banners => {
  if (!banners.length) return {};
  return {
    topBanners: banners.filter(b => b.position === 'top'),
    rightBanners: banners.filter(b => b.position === 'right'),
    bottomBanners: banners.filter(b => b.position === 'bottom')
  };
});

const mapStates = state => ({
  placeholderAvatarUrl: state.ui.placeholderAvatarUrl,
  banners: filterBanner(state)
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStates)(PerformerGrid));

/***/ }),

/***/ "./src/components/user/performer-filter.less":
/*!***************************************************!*\
  !*** ./src/components/user/performer-filter.less ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/user/performer-filter.tsx":
/*!**************************************************!*\
  !*** ./src/components/user/performer-filter.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _performer_filter_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./performer-filter.less */ "./src/components/user/performer-filter.less");
/* harmony import */ var _performer_filter_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_performer_filter_less__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "E:\\programData\\React\\user\\src\\components\\user\\performer-filter.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const PerformerFilter = ({
  countries,
  categories,
  setFilter,
  category,
  country,
  gender,
  clearFilter
}) => {
  const [visible, setVisible] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [selectedMenuKeys, setSelectedMenuKeys] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]);
  const [lastSelectedMenuKey, setLastSelectedMenuKey] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState();

  const onOpenChange = keys => {
    const menuKeys = keys.filter(key => key !== lastSelectedMenuKey);
    setSelectedMenuKeys(menuKeys);
    setLastSelectedMenuKey(menuKeys[0]);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    align: "middle",
    className: "performer-filter",
    justify: "space-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["FilterOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 19
      }
    }),
    type: "primary",
    onClick: () => setVisible(true),
    className: "mr-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, "Filter"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Space"], {
    className: "ant-space-wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx("span", {
    style: {
      fontWeight: 'bold'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, "Popular Filter:"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: clearFilter,
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(gender === '' ? 'active' : ''),
    type: "dashed",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, "All"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: () => setFilter('gender', gender === 'female' ? '' : 'female'),
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(gender === 'female' ? 'active' : ''),
    type: "dashed",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, "Female"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: () => setFilter('gender', gender === 'transgender' ? '' : 'transgender'),
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(gender === 'transgender' ? 'active' : ''),
    type: "dashed",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, "Transgender"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: () => setFilter('gender', gender === 'male' ? '' : 'male'),
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(gender === 'male' ? 'active' : ''),
    type: "dashed",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, "Male")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Drawer"], {
    visible: visible,
    placement: "left",
    onClose: () => setVisible(false),
    title: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      justify: "space-between",
      align: "middle",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 11
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 13
      }
    }, "Filter by:"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 13
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "link",
      onClick: () => clearFilter(),
      size: "small",
      style: {
        marginRight: 10
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 15
      }
    }, "Clear Filter"))),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    mode: "inline",
    style: {
      borderRight: 0
    },
    multiple: false,
    onSelect: ({
      key
    }) => setFilter('category', key),
    onDeselect: () => setFilter('category', ''),
    selectedKeys: [category],
    openKeys: selectedMenuKeys,
    onOpenChange: onOpenChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].SubMenu, {
    title: "Category",
    key: "category",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }, categories.length > 0 && categories.map(c => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: c._id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }
  }, c.name)))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    mode: "inline",
    style: {
      borderRight: 0
    },
    onSelect: ({
      key
    }) => setFilter('gender', key),
    onDeselect: () => setFilter('gender', ''),
    selectedKeys: [gender],
    openKeys: selectedMenuKeys,
    onOpenChange: onOpenChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].SubMenu, {
    title: "Gender",
    key: "gender",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "female",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }
  }, "Female"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "transgender",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }
  }, "Transgender"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "male",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }, "Male"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    mode: "inline",
    style: {
      borderRight: 0
    },
    multiple: false,
    onSelect: ({
      key
    }) => setFilter('country', key),
    onDeselect: () => setFilter('country', ''),
    selectedKeys: [country],
    openKeys: selectedMenuKeys,
    onOpenChange: onOpenChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].SubMenu, {
    title: "Country",
    key: "country",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 11
    }
  }, countries.length > 0 && countries.map(c => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: c.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 17
    }
  }, c.name))))));
};

PerformerFilter.defaultProps = {
  countries: [],
  categories: [],
  // offset: 0,
  // limit: 0,
  gender: '',
  category: '',
  country: ''
};
/* harmony default export */ __webpack_exports__["default"] = (PerformerFilter);

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

/***/ "./src/redux/performer/actions.ts":
/*!****************************************!*\
  !*** ./src/redux/performer/actions.ts ***!
  \****************************************/
/*! exports provided: getPerformerCategories, getPerformerCategoriesSuccess, getPerformerCategoriesFail, searchPerformer, searchPerformerSuccess, searchPerformerFail, setPerformerSearching, updatePerformerProfile, updatePerformerProfileSuccess, updatePerformerProfileFail, setupdatingPerformerProfile, updatePaymentInfo, updateDirectDeposit, updatePaxum, updateBitpay, updateStreamingStatus, updateDefaultPrice, getPerformerDetails, getPerformerDetailsSuccess, getPerformerDetailsFail, setGettingPerformerDetails, setPerformerDetails, updatePerformerAsset, setFavoritePerformerDetails, getMyProducts, getMyProductsSuccess, getMyProductsFail, setGettingMyProducts, addMyProduct, removeMyProduct, getEarning, getEarningSuccess, getEarningFail, setGettingEarning, getPayoutRequest, getPayoutRequestSuccess, getPayoutRequestFail, setGettingPayoutRequest, removePayoutRequest, getMyVideos, getMyVideosSuccess, getMyVideosFail, setgettingMyVideos, addMyVideos, removeMyVideo, getMyPhotos, getMyPhotosSuccess, getMyPhotosFail, setgettingMyPhotos, addMyPhotos, removeMyPhoto, getMyGalleries, getMyGalleriesSuccess, getMyGalleriesFail, setgettingMyGalleries, addMyGalleries, removeMyGalleries, updateCurrentPerformer, updatePerformerFavourite, updateCurrentPerformerBalance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPerformerCategories", function() { return getPerformerCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPerformerCategoriesSuccess", function() { return getPerformerCategoriesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPerformerCategoriesFail", function() { return getPerformerCategoriesFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchPerformer", function() { return searchPerformer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchPerformerSuccess", function() { return searchPerformerSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchPerformerFail", function() { return searchPerformerFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPerformerSearching", function() { return setPerformerSearching; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePerformerProfile", function() { return updatePerformerProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePerformerProfileSuccess", function() { return updatePerformerProfileSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePerformerProfileFail", function() { return updatePerformerProfileFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupdatingPerformerProfile", function() { return setupdatingPerformerProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePaymentInfo", function() { return updatePaymentInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDirectDeposit", function() { return updateDirectDeposit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePaxum", function() { return updatePaxum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBitpay", function() { return updateBitpay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStreamingStatus", function() { return updateStreamingStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDefaultPrice", function() { return updateDefaultPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPerformerDetails", function() { return getPerformerDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPerformerDetailsSuccess", function() { return getPerformerDetailsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPerformerDetailsFail", function() { return getPerformerDetailsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGettingPerformerDetails", function() { return setGettingPerformerDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPerformerDetails", function() { return setPerformerDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePerformerAsset", function() { return updatePerformerAsset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFavoritePerformerDetails", function() { return setFavoritePerformerDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyProducts", function() { return getMyProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyProductsSuccess", function() { return getMyProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyProductsFail", function() { return getMyProductsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGettingMyProducts", function() { return setGettingMyProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMyProduct", function() { return addMyProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeMyProduct", function() { return removeMyProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEarning", function() { return getEarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEarningSuccess", function() { return getEarningSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEarningFail", function() { return getEarningFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGettingEarning", function() { return setGettingEarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPayoutRequest", function() { return getPayoutRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPayoutRequestSuccess", function() { return getPayoutRequestSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPayoutRequestFail", function() { return getPayoutRequestFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGettingPayoutRequest", function() { return setGettingPayoutRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removePayoutRequest", function() { return removePayoutRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyVideos", function() { return getMyVideos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyVideosSuccess", function() { return getMyVideosSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyVideosFail", function() { return getMyVideosFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setgettingMyVideos", function() { return setgettingMyVideos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMyVideos", function() { return addMyVideos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeMyVideo", function() { return removeMyVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyPhotos", function() { return getMyPhotos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyPhotosSuccess", function() { return getMyPhotosSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyPhotosFail", function() { return getMyPhotosFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setgettingMyPhotos", function() { return setgettingMyPhotos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMyPhotos", function() { return addMyPhotos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeMyPhoto", function() { return removeMyPhoto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyGalleries", function() { return getMyGalleries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyGalleriesSuccess", function() { return getMyGalleriesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyGalleriesFail", function() { return getMyGalleriesFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setgettingMyGalleries", function() { return setgettingMyGalleries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMyGalleries", function() { return addMyGalleries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeMyGalleries", function() { return removeMyGalleries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCurrentPerformer", function() { return updateCurrentPerformer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePerformerFavourite", function() { return updatePerformerFavourite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCurrentPerformerBalance", function() { return updateCurrentPerformerBalance; });
/* harmony import */ var src_lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/lib/redux */ "./src/lib/redux.ts");

const {
  getPerformerCategories,
  getPerformerCategoriesSuccess,
  getPerformerCategoriesFail
} = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getPerformerCategories', 'GET_PERFORMER_CATEGORIES');
const {
  searchPerformer,
  searchPerformerSuccess,
  searchPerformerFail
} = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('searchPerformer', 'SEARCH_PERFORMER');
const setPerformerSearching = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('SET_PERFORMER_SEARCHING');
const {
  updatePerformerProfile,
  updatePerformerProfileSuccess,
  updatePerformerProfileFail
} = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('updatePerformerProfile', 'UPDATE_PERFORMER_PROFILE');
const setupdatingPerformerProfile = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('updatingPerformerProfile');
const updatePaymentInfo = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_PAYMENT_INFO');
const updateDirectDeposit = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_DIRECT_DEPOSIT');
const updatePaxum = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_PAXUM');
const updateBitpay = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_BITPAY');
const updateStreamingStatus = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_STREAMING_STATUS');
const updateDefaultPrice = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_DEFAULT_PRICE');
const {
  getPerformerDetails,
  getPerformerDetailsSuccess,
  getPerformerDetailsFail
} = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getPerformerDetails', 'GET_PERFORMER_DETAILS');
const setGettingPerformerDetails = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('setGettingPerformerDetails');
const setPerformerDetails = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('SET_PERFORMER_DETAILS');
const updatePerformerAsset = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_PERFORMER_ASSET');
const setFavoritePerformerDetails = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('SET_FAVORITE_PERFORMER_DETAILS');
const {
  getMyProducts,
  getMyProductsSuccess,
  getMyProductsFail
} = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getMyProducts', 'GET_MY_PRODUCT');
const setGettingMyProducts = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('setGettingMyProducts');
const addMyProduct = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('addMyProduct');
const removeMyProduct = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('removeMyProduct');
const {
  getEarning,
  getEarningSuccess,
  getEarningFail
} = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getEarning', 'GET_EARNING');
const setGettingEarning = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('SET_GETTING_EARNIG');
const {
  getPayoutRequest,
  getPayoutRequestSuccess,
  getPayoutRequestFail
} = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getPayoutRequest', 'GET_PAYOUT_REQUEST');
const setGettingPayoutRequest = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('SET_GETTING_PAYOUT_REQUEST');
const removePayoutRequest = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('REMOVE_PAYOUT_REQUEST');
const {
  getMyVideos,
  getMyVideosSuccess,
  getMyVideosFail
} = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getMyVideos', 'GET_MY_VIDEO');
const setgettingMyVideos = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('setgettingMyVideos');
const addMyVideos = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('addMyVideos');
const removeMyVideo = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('removeMyVideo');
const {
  getMyPhotos,
  getMyPhotosSuccess,
  getMyPhotosFail
} = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getMyPhotos', 'GET_MY_PHOTO');
const setgettingMyPhotos = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('setgettingMyPhotos');
const addMyPhotos = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('addMyPhotos');
const removeMyPhoto = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('removeMyPhoto');
const {
  getMyGalleries,
  getMyGalleriesSuccess,
  getMyGalleriesFail
} = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getMyGalleries', 'GET_MY_GALLERIES');
const setgettingMyGalleries = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('setgettingMyGalleries');
const addMyGalleries = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('addMyGalleries');
const removeMyGalleries = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('removeMyGalleries');
const updateCurrentPerformer = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('updateCurrentPerformer');
const updatePerformerFavourite = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_PERFORMER_FAVOURITE');
const updateCurrentPerformerBalance = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_CURRENT_PERFORMER_BALANCE');

/***/ }),

/***/ "./src/redux/studio/actions.ts":
/*!*************************************!*\
  !*** ./src/redux/studio/actions.ts ***!
  \*************************************/
/*! exports provided: updateCurrentStudio, updateStudio, updateStudioSuccess, updateStudioFail, setUpdatingStudio, updateStudioPaymentInfo, updateStudioDirectDeposit, updateStudioPaxum, updateStudioBitpay, getStudioEarning, getStudioEarningSuccess, getStudioEarningFail, setGettingStudioEarning, getStudioPayoutRequest, getStudioPayoutRequestSuccess, getStudioPayoutRequestFail, setGettingStudioPayoutRequest, removeStudioPayoutRequest, getPerformerRequest, getPerformerRequestSuccess, getPerformerRequestFail, setGettingPerformerRequest, getMembers, getMembersSuccess, getMembersFail, getMembersSearching, updateMemberStatus, getMembersCommissions, getMembersCommissionsSuccess, getMembersCommissionsFail, getMembersCommissionsSearching, updateMemberCommision, getStudioStats, getStudioStatsSuccess, getStudioStatsFail, updateTotalPerformer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCurrentStudio", function() { return updateCurrentStudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStudio", function() { return updateStudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStudioSuccess", function() { return updateStudioSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStudioFail", function() { return updateStudioFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUpdatingStudio", function() { return setUpdatingStudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStudioPaymentInfo", function() { return updateStudioPaymentInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStudioDirectDeposit", function() { return updateStudioDirectDeposit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStudioPaxum", function() { return updateStudioPaxum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStudioBitpay", function() { return updateStudioBitpay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStudioEarning", function() { return getStudioEarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStudioEarningSuccess", function() { return getStudioEarningSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStudioEarningFail", function() { return getStudioEarningFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGettingStudioEarning", function() { return setGettingStudioEarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStudioPayoutRequest", function() { return getStudioPayoutRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStudioPayoutRequestSuccess", function() { return getStudioPayoutRequestSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStudioPayoutRequestFail", function() { return getStudioPayoutRequestFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGettingStudioPayoutRequest", function() { return setGettingStudioPayoutRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeStudioPayoutRequest", function() { return removeStudioPayoutRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPerformerRequest", function() { return getPerformerRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPerformerRequestSuccess", function() { return getPerformerRequestSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPerformerRequestFail", function() { return getPerformerRequestFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGettingPerformerRequest", function() { return setGettingPerformerRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMembers", function() { return getMembers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMembersSuccess", function() { return getMembersSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMembersFail", function() { return getMembersFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMembersSearching", function() { return getMembersSearching; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMemberStatus", function() { return updateMemberStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMembersCommissions", function() { return getMembersCommissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMembersCommissionsSuccess", function() { return getMembersCommissionsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMembersCommissionsFail", function() { return getMembersCommissionsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMembersCommissionsSearching", function() { return getMembersCommissionsSearching; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMemberCommision", function() { return updateMemberCommision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStudioStats", function() { return getStudioStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStudioStatsSuccess", function() { return getStudioStatsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStudioStatsFail", function() { return getStudioStatsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTotalPerformer", function() { return updateTotalPerformer; });
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");

const updateCurrentStudio = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('updateCurrentStudio');
const {
  updateStudio,
  updateStudioSuccess,
  updateStudioFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('updateStudio', 'UPDATE_STUDIO');
const setUpdatingStudio = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('updatingStudio');
const updateStudioPaymentInfo = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_STUDIO_PAYMENT_INFO');
const updateStudioDirectDeposit = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_STUDIO_DIRECT_DEPOSIT');
const updateStudioPaxum = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_STUDIO_PAXUM');
const updateStudioBitpay = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_STUDIO_BITPAY');
const {
  getStudioEarning,
  getStudioEarningSuccess,
  getStudioEarningFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getStudioEarning', 'GET_STUDIO_EARNING');
const setGettingStudioEarning = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('SET_GETTING_STUDIO_EARNIG');
const {
  getStudioPayoutRequest,
  getStudioPayoutRequestSuccess,
  getStudioPayoutRequestFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getStudioPayoutRequest', 'GET_STUDIO_PAYOUT_REQUEST');
const setGettingStudioPayoutRequest = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('SET_GETTING_STUDIO_PAYOUT_REQUEST');
const removeStudioPayoutRequest = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('REMOVE_STUDIO_PAYOUT_REQUEST');
const {
  getPerformerRequest,
  getPerformerRequestSuccess,
  getPerformerRequestFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getPerformerRequest', 'GET_PERFORMER_REQUEST');
const setGettingPerformerRequest = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('SET_GETTING_PERFORMER_REQUEST');
const {
  getMembers,
  getMembersSuccess,
  getMembersFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getMembers', 'GET_MEMBERS');
const getMembersSearching = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('GET_MEMBER_SEACHING');
const updateMemberStatus = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_MEMBER_STATUS');
const {
  getMembersCommissions,
  getMembersCommissionsSuccess,
  getMembersCommissionsFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getMembersCommissions', 'GET_MEMBERS_COMMSSIONS');
const getMembersCommissionsSearching = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('GET_MEMBER_COMMSSIO_SEACHING');
const updateMemberCommision = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_MEMBER_COMMISSION');
const {
  getStudioStats,
  getStudioStatsSuccess,
  getStudioStatsFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getStudioStats', 'GET_STUDIO_STATS');
const updateTotalPerformer = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_TOTAL_PERFORMER');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vYmFzZS9pY29ucy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2Jhc2UvbG9hZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vbGF5b3V0L2Jhbm5lci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGVyZm9ybWVyL3BlcmZvcm1lci1ncmlkLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91c2VyL3BlcmZvcm1lci1maWx0ZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9saWIvZGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2ZpbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2ludGVybmV0LnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvbGF5b3V0LnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvbWVzc2FnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3JlZHV4LnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvcnVsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9zdG9yZUhvbGRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3N0cmVhbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3N0cmluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hdXRoL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3BlcmZvcm1lci9hY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9zdHVkaW8vYWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvdXNlci9hY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9hcGktcmVxdWVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvYXV0aC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9iYW5uZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9lYXJuaW5nLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2Zhdm91cml0ZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9nYWxsZXJ5LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9tZXNzYWdlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL29yZGVyLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3BheW1lbnQtaW5mb3JtYXRpb24uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcGF5b3V0LXJlcXVlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3BlcmZvbWVyLWNhdGVnb3JpZXMuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcGVyZm9tZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcGhvdG8uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcG9zdC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9wcm9kdWN0LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3B1cmNoYXNlLWl0ZW0uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcmVmdW5kLXJlcXVlc3Quc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvc2V0dGluZy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9zdHJlYW0uc2VydmljZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3N0dWRpby5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy90b2tlbi1wYWNrYWdlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3RyYW5zYWN0aW9uLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3VzZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvdXRpbHMuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvdmlkZW8uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc29ja2V0L0V2ZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc29ja2V0L1NvY2tldC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvY2tldC9Tb2NrZXRDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc29ja2V0L2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zb2NrZXQvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFudC1kZXNpZ24vaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzb21vcnBoaWMtdW5mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aC10by1yZWdleHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1hY3Rpb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVzZWxlY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzb2NrZXQuaW8tY2xpZW50XCIiXSwibmFtZXMiOlsibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwiY2FjaGVkT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJvYnNlcnZlciIsImdldE9ic2VydmVyIiwiY29uc29sZSIsInJvdXRlciIsImVyciIsImhyZWYiLCJldmVudCIsInRhcmdldCIsImUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsIm9wdGlvbmFsUHJvcHMiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkQXMiLCJjaGlsZEVsbSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkcmVuIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUHJvcHMiLCJyZWYiLCJlbCIsInNldENoaWxkRWxtIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJMaW5rIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJwcmVmaXgiLCJhZGRQYXRoUHJlZml4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW1zIiwicGFyYW0iLCJ2YWx1ZSIsInJlcGxhY2VkIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJlc2NhcGVQYXRoRGVsaW1pdGVycyIsInJlc3VsdCIsImZpbHRlcmVkUXVlcnkiLCJxdWVyeSIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsInJlc29sdmVBcyIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFkZEJhc2VQYXRoIiwicmVzb2x2ZUhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsImNyZWRlbnRpYWxzIiwicmVzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJtYXJrTG9hZGluZ0Vycm9yIiwiY29uc3RydWN0b3IiLCJyb3V0ZSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImxvY2FsZSIsImxvY2FsZXMiLCJkZWZhdWx0TG9jYWxlIiwic3RhdGUiLCJvcHRpb25zIiwic3R5bGVTaGVldHMiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsIl9fTkVYVF9EQVRBX18iLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsInByZXBhcmVVcmxBcyIsImNoYW5nZSIsImlzTG9jYWxVUkwiLCJTVCIsInBlcmZvcm1hbmNlIiwiYWRkTG9jYWxlIiwiY2xlYW5lZEFzIiwiZGVsTG9jYWxlIiwiZGVsQmFzZVBhdGgiLCJwYWdlcyIsIl9fcmV3cml0ZXMiLCJwYXJzZWQiLCJtZXRob2QiLCJwb3RlbnRpYWxIcmVmIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsImFwcENvbXAiLCJlcnJvciIsImNoYW5nZVN0YXRlIiwiX19OIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwicGFnZSIsImdldFJvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJfcmVzb2x2ZUhyZWYiLCJhcHBseUJhc2VQYXRoIiwiY2xlYW5QYXRobmFtZSIsIlByb21pc2UiLCJmZXRjaENvbXBvbmVudCIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJkYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2VnbWVudCIsImNoYXIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiRFVNTVlfQkFTRSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsIm1hdGNoZXJPcHRpb25zIiwic2Vuc2l0aXZlIiwiZGVsaW1pdGVyIiwiY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyIsInN0cmljdCIsImN1c3RvbVJvdXRlIiwia2V5cyIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJwYXJzZWREZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJ2YWxpZGF0ZSIsInN0ck9yQXJyYXkiLCJxdWVyeUNvbXBpbGVyIiwicGFyYW1LZXlzIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInNob3VsZEFkZEJhc2VQYXRoIiwibmV3VXJsIiwic2VhcmNoUGFyYW1zIiwiaXNOYU4iLCJpdGVtIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJjdXN0b21Sb3V0ZU1hdGNoZXIiLCJyZXdyaXRlIiwiZGVzdFJlcyIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJpbml0UXVlcnlTdGF0ZSIsIm9mZnNldCIsImxpbWl0IiwiZ2VuZGVyIiwiY2F0ZWdvcnkiLCJjb3VudHJ5Iiwic29ydEJ5Iiwic29ydCIsIkhvbWVwYWdlIiwiUHVyZUNvbXBvbmVudCIsInNlYXJjaFBlcmZvcm1lciIsImRpc3BhdGNoU2VhcmNoUGVyZm9ybWVyIiwiY29tcG9uZW50RGlkTW91bnQiLCJzb2NrZXQiLCJjb250ZXh0IiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwicHJldlN0YXRlcyIsImxvZ2dlZEluIiwicSIsImNvbXBvbmVudFdpbGxVbm1vdW50Iiwib25MaWtlIiwicGVyZm9ybWVyIiwidXBkYXRlUGVyZm9ybWVyRmF2b3VyaXRlIiwiZGlzcGF0Y2hVcGRhdGVQZXJmb3JtZXJGYXZvcml0ZSIsIl9pZCIsImlzRmF2b3JpdGUiLCJmYXZvdXJpdGVTZXJ2aWNlIiwiZmF2b3JpdGUiLCJyZXNvbHZlIiwiZ2V0UmVzcG9uc2VFcnJvciIsInNldEZpbHRlciIsInNldFN0YXRlIiwiY2xlYXJGaWx0ZXIiLCJyZW5kZXIiLCJjYXRlZ29yaWVzIiwiY291bnRyaWVzIiwidWkiLCJzZXR0aW5ncyIsInNpdGVOYW1lIiwibWV0YUtleXdvcmRzIiwibWV0YURlc2NyaXB0aW9uIiwibG9nb1VybCIsImJpbmQiLCJjb250ZXh0VHlwZSIsIlNvY2tldENvbnRleHQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJwZXJmb3JtZXJzIiwibWFwRGlzcGF0Y2giLCJ1cGRhdGVDdXJyZW50VXNlciIsInVwZGF0ZUN1cnJlbnRQZXJmb3JtZXIiLCJ1cGRhdGVDdXJyZW50U3R1ZGlvIiwibG9naW5TdWNjZXNzIiwiY29ubmVjdCIsIndpdGhSb3V0ZXIiLCJGYWNlYm9va0ljb24iLCJzdHlsZSIsIlR3aXR0ZXJJY29uIiwiSW5zdGFncmFtSWNvbiIsIkdpZnRJY29uIiwiTWVzc2FnZUljb24iLCJ3aWR0aCIsImhlaWdodCIsImNvbG9yIiwiRmF2b3VyaXRlSWNvbiIsIlNlbmRNZXNzYWdlSWNvbiIsIkZ1bmRzSWNvbiIsIlBheW1lbnRUb2tlbnNIaXN0b3J5SWNvbiIsIlRyYW5zYWN0aW9uSGlzdG9yeUljb24iLCJQdXJjaGFzZWRJbWFnZUljb24iLCJQdXJjaGFzZWRWaWRlb0ljb24iLCJQdXJjaGFzZWRJdGVtSWNvbiIsIk15UHJvZHVjdEljb24iLCJWaWRlb3NJY29uIiwiUGhvdG9zSWNvbiIsIkZlbWFsZVNpZ25JY29uIiwiTWFsZVNpZ25JY29uIiwiVHJhbnNnZW5kZXJJY29uIiwiVG9rZW5zSWNvbiIsIkVhcm5pbmdJY29uIiwiUGF5b3V0UmVxdWVzdEljb24iLCJHcm91cCIsIkxvYWRlciIsInNwaW5uaW5nIiwiZnVsbFNjcmVlbiIsImNsYXNzTmFtZXMiLCJoaWRkZW4iLCJyZW5kZXJCYW5uZXIiLCJiYW5uZXIiLCJzdHlsZUltYWdlIiwidHlwZSIsInBob3RvIiwiY29udGVudEhUTUwiLCJfX2h0bWwiLCJCYW5uZXIiLCJiYW5uZXJzIiwiY2xhc3NuYW1lcyIsImxlbmd0aCIsIm1hcCIsImRlZmF1bHRQcm9wcyIsInJlbmRlclRpdGxlIiwibWFyZ2luUmlnaHQiLCJyZW5kZXJUYWdzIiwidGFncyIsInRhZyIsIkdyaWRDYXJkIiwiY2xhc3NOYW1lIiwicGxhY2Vob2xkZXJBdmF0YXJVcmwiLCJpc09ubGluZSIsInN0cmVhbWluZ1N0YXR1cyIsInN0YXR1c0NsYXNzTmFtZXMiLCJzdGF0dXMiLCJkZWZhdWx0UGxhY2Vob2xkZXJBdmF0YXJVcmwiLCJpc0Jsb2NrZWQiLCJKU09OIiwic3RyaW5naWZ5IiwidXNlcm5hbWUiLCJhdmF0YXIiLCJqb2luIiwic3RhdHMiLCJ2aWV3cyIsImFib3V0TWUiLCJQZXJmb3JtZXJHcmlkIiwic2VhcmNoaW5nIiwidGl0bGUiLCJpc1BhZ2UiLCJ0b3RhbCIsInRvcEJhbm5lcnMiLCJyaWdodEJhbm5lcnMiLCJib3R0b21CYW5uZXJzIiwiUm93R3JpZCIsImRhdGFTb3VyY2UiLCJyZW5kZXJHcmlkIiwicGFkZGluZyIsImRhdGFDaHVuayIsImNodW5rIiwibGFzdERhdGFDaHVuayIsInNsaWNlIiwidiIsImdlbmVyYXRlVXVpZCIsImFjdGlvbnMiLCJNYXRoIiwicm91bmQiLCJiYW5uZXJTZWxlY3RlciIsImxpc3RCYW5uZXJzIiwiZmlsdGVyQmFubmVyIiwiY3JlYXRlU2VsZWN0b3IiLCJmaWx0ZXIiLCJiIiwicG9zaXRpb24iLCJtYXBTdGF0ZXMiLCJQZXJmb3JtZXJGaWx0ZXIiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVzZVN0YXRlIiwic2VsZWN0ZWRNZW51S2V5cyIsInNldFNlbGVjdGVkTWVudUtleXMiLCJsYXN0U2VsZWN0ZWRNZW51S2V5Iiwic2V0TGFzdFNlbGVjdGVkTWVudUtleSIsIm9uT3BlbkNoYW5nZSIsIm1lbnVLZXlzIiwiZm9udFdlaWdodCIsImJvcmRlclJpZ2h0IiwiYyIsImZvcm1hdERhdGUiLCJkYXRlIiwiZm9ybWF0IiwibW9tZW50IiwiY29udmVyRHVyYXRpb24iLCJkdXJhdGlvbiIsInV0YyIsImFzTWlsbGlzZWNvbmRzIiwicGFyc2VBZ2UiLCJnZXRBZ2UiLCJkaWZmIiwidG9TdHJpbmciLCJmb3JtYXREdXJhdGlvbiIsInMiLCJob3VycyIsImZsb29yIiwibWludXRlcyIsInNlY29uZHMiLCJiZWZvcmVBdmF0YXJVcGxvYWQiLCJmaWxlIiwiZXh0Iiwic3BsaXQiLCJwb3AiLCJ0b0xvd2VyQ2FzZSIsImNvbmZpZyIsImdldEdsb2JhbENvbmZpZyIsImlzSW1hZ2VBY2NlcHQiLCJORVhUX1BVQkxJQ19JTUFHRV9BQ0NQRVQiLCJ0cmltIiwiaW5kZXhPZiIsImlzTHQyTSIsInNpemUiLCJORVhUX1BVQkxJQ19NQVhJTVVNX1NJWkVfVVBMT0FEX0FWQVRBUiIsIklOVEVSTkVUX0NIRUNLX1VSTCIsImlzSGFzSW50ZXJuZXRDb25uZWN0aW9uIiwiZmV0Y2giLCJoZWFkZXJzIiwiUHJhZ21hIiwiRXhwaXJlcyIsImV4Y2VwdGlvbiIsImxvZyIsImZvcm1JdGVtTGF5b3V0IiwibGFiZWxDb2wiLCJ4cyIsInNwYW4iLCJzbSIsIndyYXBwZXJDb2wiLCJ0YWlsRm9ybUl0ZW1MYXlvdXQiLCJkZWZhdWx0Q29sb3IiLCJwcmltYXJ5Q29sb3IiLCJzdWNjZXNzQ29sb3IiLCJ3aGl0ZUNvbG9yIiwidmFsaWRhdGVNZXNzYWdlcyIsInJlcXVpcmVkIiwidHlwZXMiLCJlbWFpbCIsIm51bWJlciIsInJhbmdlIiwiY3JlYXRlQWN0aW9uIiwiYWN0aW9uIiwiUmVkdXhDcmVhdGVBY3Rpb24iLCJpcyIsImFUeXBlIiwiY3JlYXRlQXN5bmNBY3Rpb24iLCJjcmVhdGVBc3luY0FjdGlvbnMiLCJoYW5kbGVBY3Rpb25zIiwiaW5pdGlhbFN0YXRlIiwiaGFuZGxlUmVkdXhBY3Rpb25zIiwicmVkdWNlIiwicmVkdWNlciIsImFjdCIsImNyZWF0ZVJlZHVjZXJzIiwic3RhdGVDb250ZXh0IiwicmVkdWNlcnMiLCJwcmV2ZW50UmVzZXR0aW5nIiwiZmxhdHRlbiIsImlzQXJyYXkiLCJmb3JFYWNoIiwiQVBQX1NUQVRFX1JFU0VUIiwiY3JlYXRlU2FnYXMiLCJzYWdhcyIsInNhZ2EiLCJlZmZlY3QiLCJ0YWtlTGF0ZXN0Iiwid29ya2VyIiwiZGVsYXkiLCJjcmVhdGVTZWxlY3RvcnNBIiwic3RhdGVTZWxlY3RvciIsImlzRW1wdHkiLCJnZXRJbiIsImNyZWF0ZVNlbGVjdG9ycyIsInNlbGVjdG9ycyIsImNyZWF0ZUpTU2VsZWN0b3JzIiwidXNlcm5hbWVQYXR0ZXJuUnVsZSIsInBhdHRlcm4iLCJSZWdFeHAiLCJzdG9yZSIsImdldFN0b3JlIiwic2V0U3RvcmUiLCJERUZBVUxUX09GRkxJTkVfSU1BR0VfVVJMIiwiREVGQVVMVF9QUklWQVRFX0lNQUdFX1VSTCIsIkRFRkFVTFRfR1JPVVBfSU1BR0VfVVJMIiwiREVGQVVMVF9PTkxJTkVfSU1BR0VfVVJMIiwiZ2V0UG9zdGVyIiwicG9zdGVyIiwic3RvcmVIb2xkZXIiLCJnZXRTdGF0ZSIsImRlZmF1bHRQcml2YXRlQ2FsbEltYWdlIiwiZGVmYXVsdE9mZmxpbmVNb2RlbEltYWdlIiwiZGVmYXVsdEdyb3VwQ2hhdEltYWdlIiwiaXNVcmwiLCJtYXRjaCIsInIiLCJyYW5kb20iLCJjYXBpdGFsaXplRmlyc3RMZXR0ZXIiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInVuaXRQcmljZXMiLCJ0ZXh0IiwiYXJyYXlUb1RyZWUiLCJhcnJheSIsImlkIiwicGFyZW50SWQiLCJjbG9uZURlZXAiLCJpbmRleCIsImhhc2hQYXJlbnQiLCJwYXRoTWF0Y2hSZWdleHAiLCJyZWdleHAiLCJleGVjIiwicXVlcnlBbmNlc3RvcnMiLCJjdXJyZW50IiwiaGFzaE1hcCIsIk1hcCIsImdldFBhdGgiLCJjdXJyZW50UGFyZW50SWQiLCJjb25zdHJhaW50cyIsInZhbHVlcyIsImlzTW9iaWxlIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiZ2V0VXJsUGFyYW1ldGVyIiwic1BhcmFtIiwic1BhZ2VVUkwiLCJsb2NhdGlvbiIsInN1YnN0cmluZyIsInNVUkxWYXJpYWJsZXMiLCJzUGFyYW1ldGVyTmFtZSIsInVuZGVmaW5lZCIsIkRBWV9PRl9XRUVLIiwibW9uIiwidHVlIiwid2VkIiwidGh1IiwiZnJpIiwic2F0Iiwic3VuIiwiZ2V0RGVmYXVsdFNjaGVkdWxlIiwiZGVmYXVsdFZhbCIsInN0YXJ0IiwiZW5kIiwiY2xvc2VkIiwiZ2V0TmV4dFNob3ciLCJzY2hlZHVsZSIsIndlZWtEYXkiLCJuZXh0U2hvdyIsInBlcmZvcm1lclNob3dzIiwiZGF5IiwiZ2V0U2VhcmNoRGF0YSIsInBhZ2luYXRpb24iLCJmaWx0ZXJzIiwic29ydGVyIiwib3JkZXIiLCJTT1JUIiwiZ2V0QmFzZTY0Iiwib3JpZ2luRmlsZU9iaiIsInJlamVjdCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNEYXRhVVJMIiwib25sb2FkIiwib25lcnJvciIsImNvbnZlcnRDb25uZWN0aW9uRGF0YSIsImFyciIsInNlcnZlckRhdGEiLCJwYXJzZSIsImNsaWVudERhdGEiLCJjaGVja1VzZXJMb2dpbiIsImlzTG9nZ2VkSW4iLCJ1c2VyIiwiZ2V0Q3VycmVudFVzZXIiLCJpc1BoeXNpY2FsUHJvZHVjdCIsImNoYXRCb3hNZXNzYWdlQ2xhc3NOYW1lIiwicmVxIiwiaXNNaW5lIiwic3RhcnRzU2VxdWVuY2UiLCJlbmRzU2VxdWVuY2UiLCJtaW5lIiwidGlwIiwiY29udmVydEZlZXRUb0NtIiwiZmVldCIsImluY2giLCJmIiwiZm9ybWF0RGF0YVdlaWdodCIsIm1pbiIsIm1heCIsInRvRml4ZWQiLCJsYWJlbCIsImZvcm1hdERhdGFIZWlnaHQiLCJhIiwiZm9ybWF0UHJpY2UiLCJwcmljZSIsImZyYWN0aW9uRGlnaXRzIiwibG9naW4iLCJsb2dpbkZhaWwiLCJsb2dpblJlcXVlc3RpbmciLCJwZXJmb3JtZXJsb2dpbiIsInBlcmZvcm1lcmxvZ2luU3VjY2VzcyIsInBlcmZvcm1lcmxvZ2luRmFpbCIsInJlc2V0TG9naW5EYXRhIiwic3R1ZGlvTG9naW4iLCJzdHVkaW9Mb2dpblN1Y2Nlc3MiLCJzdHVkaW9Mb2dpbkZhaWwiLCJwZXJmb3JtZXJSZWdpc3RlciIsInBlcmZvcm1lclJlZ2lzdGVyU3VjY2VzcyIsInBlcmZvcm1lclJlZ2lzdGVyRmFpbCIsInNldFBlcmZvcm1lclJlZ2lzdGVyU3VibWl0dGluZyIsInVzZXJSZWdpc3RlciIsInVzZXJSZWdpc3RlclN1Y2Nlc3MiLCJ1c2VyUmVnaXN0ZXJGYWlsIiwic2V0VXNlclJlZ2lzdGVyU3VibWl0dGluZyIsInVwZGF0ZVBhc3N3b3JkIiwidXBkYXRlUGFzc3dvcmRTdWNjZXNzIiwidXBkYXRlUGFzc3dvcmRGYWlsIiwic2V0VXBkYXRlUGFzc3dvcmRTdWJtaXR0aW5nIiwibG9nb3V0IiwiZ2V0UGVyZm9ybWVyQ2F0ZWdvcmllcyIsImdldFBlcmZvcm1lckNhdGVnb3JpZXNTdWNjZXNzIiwiZ2V0UGVyZm9ybWVyQ2F0ZWdvcmllc0ZhaWwiLCJzZWFyY2hQZXJmb3JtZXJTdWNjZXNzIiwic2VhcmNoUGVyZm9ybWVyRmFpbCIsInNldFBlcmZvcm1lclNlYXJjaGluZyIsInVwZGF0ZVBlcmZvcm1lclByb2ZpbGUiLCJ1cGRhdGVQZXJmb3JtZXJQcm9maWxlU3VjY2VzcyIsInVwZGF0ZVBlcmZvcm1lclByb2ZpbGVGYWlsIiwic2V0dXBkYXRpbmdQZXJmb3JtZXJQcm9maWxlIiwidXBkYXRlUGF5bWVudEluZm8iLCJ1cGRhdGVEaXJlY3REZXBvc2l0IiwidXBkYXRlUGF4dW0iLCJ1cGRhdGVCaXRwYXkiLCJ1cGRhdGVTdHJlYW1pbmdTdGF0dXMiLCJ1cGRhdGVEZWZhdWx0UHJpY2UiLCJnZXRQZXJmb3JtZXJEZXRhaWxzIiwiZ2V0UGVyZm9ybWVyRGV0YWlsc1N1Y2Nlc3MiLCJnZXRQZXJmb3JtZXJEZXRhaWxzRmFpbCIsInNldEdldHRpbmdQZXJmb3JtZXJEZXRhaWxzIiwic2V0UGVyZm9ybWVyRGV0YWlscyIsInVwZGF0ZVBlcmZvcm1lckFzc2V0Iiwic2V0RmF2b3JpdGVQZXJmb3JtZXJEZXRhaWxzIiwiZ2V0TXlQcm9kdWN0cyIsImdldE15UHJvZHVjdHNTdWNjZXNzIiwiZ2V0TXlQcm9kdWN0c0ZhaWwiLCJzZXRHZXR0aW5nTXlQcm9kdWN0cyIsImFkZE15UHJvZHVjdCIsInJlbW92ZU15UHJvZHVjdCIsImdldEVhcm5pbmciLCJnZXRFYXJuaW5nU3VjY2VzcyIsImdldEVhcm5pbmdGYWlsIiwic2V0R2V0dGluZ0Vhcm5pbmciLCJnZXRQYXlvdXRSZXF1ZXN0IiwiZ2V0UGF5b3V0UmVxdWVzdFN1Y2Nlc3MiLCJnZXRQYXlvdXRSZXF1ZXN0RmFpbCIsInNldEdldHRpbmdQYXlvdXRSZXF1ZXN0IiwicmVtb3ZlUGF5b3V0UmVxdWVzdCIsImdldE15VmlkZW9zIiwiZ2V0TXlWaWRlb3NTdWNjZXNzIiwiZ2V0TXlWaWRlb3NGYWlsIiwic2V0Z2V0dGluZ015VmlkZW9zIiwiYWRkTXlWaWRlb3MiLCJyZW1vdmVNeVZpZGVvIiwiZ2V0TXlQaG90b3MiLCJnZXRNeVBob3Rvc1N1Y2Nlc3MiLCJnZXRNeVBob3Rvc0ZhaWwiLCJzZXRnZXR0aW5nTXlQaG90b3MiLCJhZGRNeVBob3RvcyIsInJlbW92ZU15UGhvdG8iLCJnZXRNeUdhbGxlcmllcyIsImdldE15R2FsbGVyaWVzU3VjY2VzcyIsImdldE15R2FsbGVyaWVzRmFpbCIsInNldGdldHRpbmdNeUdhbGxlcmllcyIsImFkZE15R2FsbGVyaWVzIiwicmVtb3ZlTXlHYWxsZXJpZXMiLCJ1cGRhdGVDdXJyZW50UGVyZm9ybWVyQmFsYW5jZSIsInVwZGF0ZVN0dWRpbyIsInVwZGF0ZVN0dWRpb1N1Y2Nlc3MiLCJ1cGRhdGVTdHVkaW9GYWlsIiwic2V0VXBkYXRpbmdTdHVkaW8iLCJ1cGRhdGVTdHVkaW9QYXltZW50SW5mbyIsInVwZGF0ZVN0dWRpb0RpcmVjdERlcG9zaXQiLCJ1cGRhdGVTdHVkaW9QYXh1bSIsInVwZGF0ZVN0dWRpb0JpdHBheSIsImdldFN0dWRpb0Vhcm5pbmciLCJnZXRTdHVkaW9FYXJuaW5nU3VjY2VzcyIsImdldFN0dWRpb0Vhcm5pbmdGYWlsIiwic2V0R2V0dGluZ1N0dWRpb0Vhcm5pbmciLCJnZXRTdHVkaW9QYXlvdXRSZXF1ZXN0IiwiZ2V0U3R1ZGlvUGF5b3V0UmVxdWVzdFN1Y2Nlc3MiLCJnZXRTdHVkaW9QYXlvdXRSZXF1ZXN0RmFpbCIsInNldEdldHRpbmdTdHVkaW9QYXlvdXRSZXF1ZXN0IiwicmVtb3ZlU3R1ZGlvUGF5b3V0UmVxdWVzdCIsImdldFBlcmZvcm1lclJlcXVlc3QiLCJnZXRQZXJmb3JtZXJSZXF1ZXN0U3VjY2VzcyIsImdldFBlcmZvcm1lclJlcXVlc3RGYWlsIiwic2V0R2V0dGluZ1BlcmZvcm1lclJlcXVlc3QiLCJnZXRNZW1iZXJzIiwiZ2V0TWVtYmVyc1N1Y2Nlc3MiLCJnZXRNZW1iZXJzRmFpbCIsImdldE1lbWJlcnNTZWFyY2hpbmciLCJ1cGRhdGVNZW1iZXJTdGF0dXMiLCJnZXRNZW1iZXJzQ29tbWlzc2lvbnMiLCJnZXRNZW1iZXJzQ29tbWlzc2lvbnNTdWNjZXNzIiwiZ2V0TWVtYmVyc0NvbW1pc3Npb25zRmFpbCIsImdldE1lbWJlcnNDb21taXNzaW9uc1NlYXJjaGluZyIsInVwZGF0ZU1lbWJlckNvbW1pc2lvbiIsImdldFN0dWRpb1N0YXRzIiwiZ2V0U3R1ZGlvU3RhdHNTdWNjZXNzIiwiZ2V0U3R1ZGlvU3RhdHNGYWlsIiwidXBkYXRlVG90YWxQZXJmb3JtZXIiLCJ1cGRhdGVDdXJyZW50VXNlckF2YXRhciIsInVwZGF0ZUN1cnJlbnRVc2VyQmFsYW5jZSIsInVwZGF0ZVVzZXIiLCJ1cGRhdGVVc2VyU3VjY2VzcyIsInVwZGF0ZVVzZXJGYWlsIiwic2V0VXBkYXRpbmciLCJzZXRSZWR1Y2VyIiwiYnV5VG9rZW5TdWNjZXNzIiwiZ2V0RmF2b3JpdGVQZXJmb3JtZXJzIiwiZ2V0RmF2b3JpdGVQZXJmb3JtZXJzU3VjY2VzcyIsImdldEZhdm9yaXRlUGVyZm9ybWVyc0ZhaWxlZCIsImdldHRpbmdGYXZvcml0ZVBlcmZvcm1lcnMiLCJyZW1vdmVGYXZvcml0ZSIsImdldFBheW1lbnRUb2tlbkhpc3Ryb3kiLCJnZXRQYXltZW50VG9rZW5IaXN0cm95U3VjY2VzcyIsImdldFBheW1lbnRUb2tlbkhpc3Ryb3lGYWlsIiwiZ2V0dGlnUGF5bWVudFRva2VuSGlzdG9yeSIsIlRPS0VOIiwiUk9MRSIsIlBFUkZPUk1FUl9ST0xFIiwiVVNFUl9ST0xFIiwiU1RVRElPX1JPTEUiLCJkZXNjZW5kIiwiYXNjZW5kIiwiQVBJUmVxdWVzdCIsInNldEF1dGhIZWFkZXJUb2tlbiIsInRva2VuIiwicGFyc2VKU09OIiwicmVzcG9uc2UiLCJqc29uIiwiY2hlY2tTdGF0dXMiLCJFcnJvciIsImNsb25lIiwicmVxdWVzdCIsImJvZHkiLCJ2ZXJiIiwidXBkYXRlZEhlYWRlciIsIkF1dGhvcml6YXRpb24iLCJjb29raWUiLCJBUElfRU5EUE9JTlQiLCJORVhUX1BVQkxJQ19BUElfRU5EUE9JTlQiLCJ0aGVuIiwiYnVpbGRVcmwiLCJiYXNlVXJsIiwicXVlcnlTdHJpbmciLCJrIiwicG9zdCIsInB1dCIsImRlbCIsInVwbG9hZCIsImZpbGVzIiwib25Qcm9ncmVzcyIsInVwbG9hZFVybCIsIlhNTEh0dHBSZXF1ZXN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImxlbmd0aENvbXB1dGFibGUiLCJwZXJjZW50YWdlIiwibG9hZGVkIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImZpZWxkbmFtZSIsImN1c3RvbURhdGEiLCJyZXNwb25zZVR5cGUiLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsInNlbmQiLCJyZWdpc3RlciIsImRvY3VtZW50VmVyaWZpY2F0aW9uIiwiZG9jdW1lbnRWZXJpZmljYXRpb25GaWxlIiwiaWRWZXJpZmljYXRpb24iLCJpZFZlcmlmaWNhdGlvbkRpbGUiLCJvbWl0IiwiQXV0aFNlcnZpY2UiLCJzZXRBdXRoSGVhZGVyIiwicm9sZSIsImV4cGlyZXMiLCJwZXJmb3JtZXJMb2dpbiIsInNldFRva2VuIiwiZ2V0VG9rZW4iLCJnZXRSb2xlIiwicmVtb3ZlVG9rZW4iLCJyZW1vdmUiLCJyZW1vdmVSZW1lbWJlciIsInBlcmZvcm1lcnNSZWdpc3RlciIsInN0dWRpb1JlZ2lzdGVyIiwiZm9yZ290UGFzc3dvcmQiLCJyZXNlbmRWZXJpZmljYXRpb25FbWFpbCIsImF1dGhTZXJ2aWNlIiwiQmFubmVyU2VydmljZSIsImJhbm5lclNlcnZpY2UiLCJnbG9iYWxDb25maWciLCJzZXRHbG9iYWxDb25maWciLCJFYXJuaW5nU2VydmljZSIsImVhcm5pbmdTZXJ2aWNlIiwiRmF2b3VyaXRlU2VydmljZSIsImxpa2UiLCJ1bmxpa2UiLCJpc0Zhdm9yaXRlZCIsIkdhbGxlcnlTZXJ2aWNlIiwiaXNQZXJmb3JtZXIiLCJwdXJjaGFzZWQiLCJjcmVhdGUiLCJ1cGRhdGUiLCJkZXRhaWxzIiwicHVibGljZGV0YWlscyIsImdhbGxlcnlTZXJ2aWNlIiwiTWVzc2FnZVNlcnZpY2UiLCJnZXRDb252ZXJzYXRpb25zIiwic2VhcmNoQ29udmVyc2F0aW9ucyIsImNyZWF0ZUNvbnZlcnNhdGlvbiIsImdldENvbnZlcnNhdGlvbkRldGFpbCIsImdldENvbnZlcnNhdGlvbkJ5U3RyZWFtSWQiLCJzdHJlYW1JZCIsImdldE1lc3NhZ2VzIiwiY29udmVyc2F0aW9uSWQiLCJnZXRQdWJsaWNNZXNzYWdlcyIsInNlbmRNZXNzYWdlIiwic2VuZFN0cmVhbU1lc3NhZ2UiLCJzZW5kUHVibGljU3RyZWFtTWVzc2FnZSIsImZpbmRQdWJsaWNDb252ZXJzYXRpb25QZXJmb3JtZXIiLCJwZXJmb3JtZXJJZCIsImNvdW50VG90YWxOb3RSZWFkIiwicmVhZEFsbEluQ29udmVyc2F0aW9uIiwicmVjaXBpZW50SWQiLCJnZXRNZXNzYWdlVXBsb2FkVXJsIiwiZGVsZXRlTWVzc2FnZSIsImRlbGV0ZUFsbE1lc3NhZ2VJbkNvbnZlcnNhdGlvbiIsIm1lc3NhZ2VTZXJ2aWNlIiwiT3JkZXJTZXJ2aWNlIiwicGF5bG9hZCIsInVzZXJTZWFyY2giLCJ1c2VyRmluZERldGFpbHMiLCJvcmRlclNlcnZpY2UiLCJQYXltZW50SW5mb3JtYXRpb25TZXJ2aWNlIiwiZmluZE9uZSIsInBheW1lbnRJbmZvcm1hdGlvblNlcnZpY2UiLCJQYXlvdXRSZXF1ZXN0U2VydmljZSIsImNhbGN1bGF0ZSIsInN0dWRpb1NlYXJjaCIsImRldGFpbCIsInBheW91dFJlcXVlc3RTZXJ2aWNlIiwiUGVyZm9ybWVyQ2F0ZWdvcmllc1NlcnZpY2UiLCJnZXRMaXN0IiwicGVyZm9ybWVyQ2F0ZWdvcmllcyIsIlBlcmZvcm1lclNlcnZpY2UiLCJtZSIsInVwZGF0ZU1lIiwiZ2V0QXZhdGFyVXBsb2FkVXJsIiwiZ2V0RG9jdW1lbnRzVXBsb2FkVXJsIiwiZ2V0UmVsZWFzZUZvcm1VcmwiLCJteVByb2R1Y3QiLCJjcmVhdGVQcm9kdWN0IiwiaW1hZ2UiLCJkaWdpdGFsRmlsZSIsInVwZGF0ZVByb2R1Y3QiLCJyZW1vdmVQcm9kdWN0IiwiZ2V0Q29tbWlzc2lvbiIsInVwZGF0ZURpcmVjdERlcG9zdCIsImdlb0Jsb2NrIiwiZ2V0QmxvY2tlZExpc3QiLCJpbmNyZWFzZVZpZXciLCJ1cGRhdGVCcm9hZGNhc3RTZXR0aW5nIiwic3VzcGVuZEFjY291bnQiLCJwYXNzd29yZCIsImNoZWNrQmxvY2siLCJHRU5OREVSX1BFUkZPUk1FUiIsInBlcmZvcm1lclNlcnZpY2UiLCJQaG90b1NlcnZpY2UiLCJzZWFyY2hCeUdhbGxlcnkiLCJnYWxsZXJ5SWQiLCJteVBob3RvcyIsInVwbG9hZEltYWdlcyIsInBob3RvU2VydmljZSIsIlBvc3RTZXJ2aWNlIiwiZmluZEJ5SWQiLCJjcmVhdGVDb250YWN0Q290ZW50IiwicG9zdFNlcnZpY2UiLCJQcm9kdWN0U2VydmljZSIsImdldERvd25sb2FkTGluayIsInByb2R1Y3RTZXJ2aWNlIiwiUHVyY2hhc2VJdGVtU2VydmljZSIsInB1cmNoYXNlSXRlbSIsInB1cmNoYXNlUHJvZHVjdCIsInB1cmNoYXNlVmlkZW8iLCJwdXJjaGFzZUl0ZW1TZXJ2aWNlIiwiUmVmdW5kUmVxdWVzdFNlcnZpY2UiLCJyZWZ1bmRSZXF1ZXN0U2VydmljZSIsIlNldHRpbmdTZXJ2aWNlIiwiZ3JvdXAiLCJnZXRDb3VudHJpZXMiLCJnZXRUaW1lem9uZXMiLCJzZXR0aW5nU2VydmljZSIsIlN0cmVhbVNlcnZpY2UiLCJnZXRTZXNzaW9uSWQiLCJnb0xpdmUiLCJqb2luUHVibGljQ2hhdCIsInJlcXVlc3RQcml2YXRlQ2hhdCIsImFjY2VwdFByaXZhdGVDaGF0Iiwic3RhcnRHcm91cENoYXQiLCJqb2luR3JvdXBDaGF0IiwiZ2VuZXJhdGVPbmVUaW1lVG9rZW4iLCJnZXRQdWJsaXNoVG9rZW4iLCJleHBpcmVEYXRlIiwiYWRkIiwidG9EYXRlIiwiZ2V0VGltZSIsInNlY3VyZU9wdGlvbiIsInJlc3AiLCJ0b2tlbklkIiwiZ2V0U3Vic2NyaWJlclRva2VuIiwiZ2V0TGl2ZVN0cmVhbU9yVm9kVVJMIiwiX3BsYXllciIsImFwcE5hbWUiLCJ2aWV3ZXJVUkwiLCJleHRlbnNpb24iLCJvbmVUaW1lVG9rZW4iLCJzdHJlYW1TZXJ2aWNlIiwiU3R1ZGlvU2VydmljZSIsImFkZE1vZGVsIiwiZ2V0TWVtYmVyQ29tbWlzc2lvbnMiLCJ1cGRhdGVNZW1iZXJDb21taXNzaW9uIiwidXBkYXRlU3RhdHVzUGVyZm9ybWVyUmVxdWVzdCIsInN0dWRpb1NlcnZpY2UiLCJUb2tlblBhY2thZ2VTZXJ2aWNlIiwiYnV5VG9rZW5zIiwidG9rZW5QYWNrYWdlU2VydmljZSIsIlRyYW5zYWN0aW9uU2VydmljZSIsInNlbmRUaXBUb2tlbiIsInNlbmRQYWlkVG9rZW4iLCJ0cmFuc2FjdGlvblNlcnZpY2UiLCJVc2VyU2VydmljZSIsInVzZXJJZCIsInVzZXJTZXJ2aWNlIiwiVXRpbHNTZXJ2aWNlIiwiY291bnRyaWVzTGlzdCIsImxhbmd1YWdlc0xpc3QiLCJwaG9uZUNvZGVzTGlzdCIsInN0YXRpc3RpY3MiLCJ2ZXJpZnlSZWNhcHRjaGEiLCJ1dGlsc1NlcnZpY2UiLCJWaWRlb1NlcnZpY2UiLCJteVZpZGVvcyIsInZpZGVvIiwidHJhaWxlciIsInRodW1ibmFpbCIsInVzZXJGaW5kVmlkZW9CeUlkIiwidmlkZW9TZXJ2aWNlIiwiRXZlbnQiLCJ3YXJuaW5nIiwiU29ja2V0IiwibmV4dFByb3BzIiwiY2xvc2UiLCJ1cmkiLCJORVhUX1BVQkxJQ19TT0NLRVRfRU5EUE9JTlQiLCJ0cmFuc3BvcnRzIiwiU29ja2V0SU8iLCJtZXJnZU9wdGlvbnMiLCJkZWJ1ZyIsImRlZmF1bHRPcHRpb25zIiwicmVjb25uZWN0aW9uIiwicmVjb25uZWN0aW9uQXR0ZW1wdHMiLCJJbmZpbml0eSIsInJlY29ubmVjdGlvbkRlbGF5IiwicmVjb25uZWN0aW9uRGVsYXlNYXgiLCJhdXRvQ29ubmVjdCIsInJlamVjdFVuYXV0aG9yaXplZCIsIm9ubHkiLCJjcmVhdGVDb250ZXh0IiwiTk9ERV9FTlYiLCJhcHBseSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7O0FBRUE7O0FBUUE7O0FBc0JBO0FBQ0EsTUFBTUEsU0FBUyxHQUFHLElBQWxCLEdBQWtCLEVBQWxCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQ3hCLFFBQWdDQyxTQUFoQyxHQURGO0FBRUEsTUFBTUMsVUFBMkMsR0FBakQ7O0FBRUEsdUJBQXlEO0FBQ3ZEO0FBQ0Esc0JBQW9CO0FBQ2xCO0FBR0YsR0FOdUQsQ0FNdkQ7OztBQUNBLE1BQUks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bUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhblxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93IH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHAgJiZcbiAgICAgIEludGVyc2VjdGlvbk9ic2VydmVyICYmXG4gICAgICBjaGlsZEVsbSAmJlxuICAgICAgY2hpbGRFbG0udGFnTmFtZSAmJlxuICAgICAgaXNMb2NhbFVSTChocmVmKVxuICAgICkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbClcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoYXMsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcbmltcG9ydCBlc2NhcGVQYXRoRGVsaW1pdGVycyBmcm9tICcuL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMnXG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9IG51bGwgfCB7IF9fTjogZmFsc2UgfSB8ICh7IF9fTjogdHJ1ZSB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pLm1hcChlc2NhcGVQYXRoRGVsaW1pdGVycykuam9pbignLycpXG4gICAgICAgICAgICAgIDogZXNjYXBlUGF0aERlbGltaXRlcnModmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmNvbnN0IFBBR0VfTE9BRF9FUlJPUiA9IFN5bWJvbCgnUEFHRV9MT0FEX0VSUk9SJylcbmV4cG9ydCBmdW5jdGlvbiBtYXJrTG9hZGluZ0Vycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBQQUdFX0xPQURfRVJST1IsIHt9KVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8UHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbywgQXBwOiBBcHBDb21wb25lbnQpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0czogaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGFzID0gYWRkTG9jYWxlKGFzLCB0aGlzLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGNvbnN0IHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5wcm9taXNlZEJ1aWxkTWFuaWZlc3RcblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBsZXQgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpIHtcbiAgICAgIHJlc29sdmVkQXMgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIHBhcnNlUmVsYXRpdmVVcmwoYXMpLnBhdGhuYW1lLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhXG4gICAgICApXG5cbiAgICAgIGlmIChyZXNvbHZlZEFzICE9PSBhcykge1xuICAgICAgICBjb25zdCBwb3RlbnRpYWxIcmVmID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYoXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWQsIHsgcGF0aG5hbWU6IHJlc29sdmVkQXMgfSksXG4gICAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgKS5wYXRobmFtZSFcbiAgICAgICAgKVxuXG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBvdGVudGlhbEhyZWYpKSB7XG4gICAgICAgICAgcm91dGUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGF0aG5hbWUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoXG4gICAgICAgIChfX05fU1NHIHx8IF9fTl9TU1ApICYmXG4gICAgICAgIHByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkSHJlZiwgcGFnZXMpXG5cbiAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShcbiAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgdXJsLFxuICAgICAgICBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpLFxuICAgICAgICBvcHRpb25zXG4gICAgICApXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKS5jYXRjaChcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgJy9fZXJyb3InXG4gICAgICApXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZSxcbiAgICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8UHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSwgYXBwbHlCYXNlUGF0aCA9IHRydWUpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgICApXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYXBwbHlCYXNlUGF0aCA/IGFkZEJhc2VQYXRoKHBhZ2UpIDogcGFnZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YShcbiAgICAgICAgdXJsLFxuICAgICAgICBhc1BhdGgsXG4gICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFByaXZhdGVSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIGVzY2FwZSBkZWxpbWl0ZXJzIHVzZWQgYnkgcGF0aC10by1yZWdleHBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHNlZ21lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzZWdtZW50LnJlcGxhY2UoL1svIz9dL2csIChjaGFyOiBzdHJpbmcpID0+IGVuY29kZVVSSUNvbXBvbmVudChjaGFyKSlcbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTChcbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWYsXG4gICAgb3JpZ2luLFxuICAgIHByb3RvY29sLFxuICB9ID0gbmV3IFVSTCh1cmwsIHJlc29sdmVkQmFzZSlcbiAgaWYgKFxuICAgIG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4gfHxcbiAgICAocHJvdG9jb2wgIT09ICdodHRwOicgJiYgcHJvdG9jb2wgIT09ICdodHRwczonKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKERVTU1ZX0JBU0Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbmV4cG9ydCB7IHBhdGhUb1JlZ2V4cCB9XG5cbmV4cG9ydCBjb25zdCBtYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24obWF0Y2hlclJlZ2V4LCBrZXlzKVxuXG4gICAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyYW1zPzogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXRobmFtZSA9PSBudWxsID8gZmFsc2UgOiBtYXRjaGVyKHBhdGhuYW1lKVxuICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjdXN0b21Sb3V0ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgLy8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuICAgICAgICAgIC8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgIGlmICh0eXBlb2Yga2V5Lm5hbWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBkZWxldGUgKHJlcy5wYXJhbXMgYXMgYW55KVtrZXkubmFtZV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4ucGFyYW1zLCAuLi5yZXMucGFyYW1zIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbnR5cGUgUGFyYW1zID0geyBbcGFyYW06IHN0cmluZ106IGFueSB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmVEZXN0aW5hdGlvbihcbiAgZGVzdGluYXRpb246IHN0cmluZyxcbiAgcGFyYW1zOiBQYXJhbXMsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgYXBwZW5kUGFyYW1zVG9RdWVyeTogYm9vbGVhbixcbiAgYmFzZVBhdGg6IHN0cmluZ1xuKSB7XG4gIGxldCBwYXJzZWREZXN0aW5hdGlvbjoge1xuICAgIHF1ZXJ5PzogUGFyc2VkVXJsUXVlcnlcbiAgICBwcm90b2NvbD86IHN0cmluZ1xuICAgIGhvc3RuYW1lPzogc3RyaW5nXG4gICAgcG9ydD86IHN0cmluZ1xuICB9ICYgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4gPSB7fSBhcyBhbnlcblxuICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9ID0gbmV3IFVSTChkZXN0aW5hdGlvbilcblxuICAgIHBhcnNlZERlc3RpbmF0aW9uID0ge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZXN0UXVlcnkgPSBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeVxuICBjb25zdCBkZXN0UGF0aCA9IGAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIX0ke1xuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggfHwgJydcbiAgfWBcbiAgY29uc3QgZGVzdFBhdGhQYXJhbUtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoZGVzdFBhdGgsIGRlc3RQYXRoUGFyYW1LZXlzKVxuXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1zID0gZGVzdFBhdGhQYXJhbUtleXMubWFwKChrZXkpID0+IGtleS5uYW1lKVxuXG4gIGxldCBkZXN0aW5hdGlvbkNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUoXG4gICAgZGVzdFBhdGgsXG4gICAgLy8gd2UgZG9uJ3QgdmFsaWRhdGUgd2hpbGUgY29tcGlsaW5nIHRoZSBkZXN0aW5hdGlvbiBzaW5jZSB3ZSBzaG91bGRcbiAgICAvLyBoYXZlIGFscmVhZHkgdmFsaWRhdGVkIGJlZm9yZSB3ZSBnb3QgdG8gdGhpcyBwb2ludCBhbmQgdmFsaWRhdGluZ1xuICAgIC8vIGJyZWFrcyBjb21waWxpbmcgZGVzdGluYXRpb25zIHdpdGggbmFtZWQgcGF0dGVybiBwYXJhbXMgZnJvbSB0aGUgc291cmNlXG4gICAgLy8gZS5nLiAvc29tZXRoaW5nOmhlbGxvKC4qKSAtPiAvYW5vdGhlci86aGVsbG8gaXMgYnJva2VuIHdpdGggdmFsaWRhdGlvblxuICAgIC8vIHNpbmNlIGNvbXBpbGUgdmFsaWRhdGlvbiBpcyBtZWFudCBmb3IgcmV2ZXJzaW5nIGFuZCBub3QgZm9yIGluc2VydGluZ1xuICAgIC8vIHBhcmFtcyBmcm9tIGEgc2VwYXJhdGUgcGF0aC1yZWdleCBpbnRvIGFub3RoZXJcbiAgICB7IHZhbGlkYXRlOiBmYWxzZSB9XG4gIClcbiAgbGV0IG5ld1VybFxuXG4gIC8vIHVwZGF0ZSBhbnkgcGFyYW1zIGluIHF1ZXJ5IHZhbHVlc1xuICBmb3IgKGNvbnN0IFtrZXksIHN0ck9yQXJyYXldIG9mIE9iamVjdC5lbnRyaWVzKGRlc3RRdWVyeSkpIHtcbiAgICBsZXQgdmFsdWUgPSBBcnJheS5pc0FycmF5KHN0ck9yQXJyYXkpID8gc3RyT3JBcnJheVswXSA6IHN0ck9yQXJyYXlcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAgICAgLy8gY29ycmVjdGx5XG4gICAgICB2YWx1ZSA9IGAvJHt2YWx1ZX1gXG4gICAgICBjb25zdCBxdWVyeUNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUodmFsdWUsIHsgdmFsaWRhdGU6IGZhbHNlIH0pXG4gICAgICB2YWx1ZSA9IHF1ZXJ5Q29tcGlsZXIocGFyYW1zKS5zdWJzdHIoMSlcbiAgICB9XG4gICAgZGVzdFF1ZXJ5W2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgLy8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuICAvLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxuICBjb25zdCBwYXJhbUtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG5cbiAgaWYgKFxuICAgIGFwcGVuZFBhcmFtc1RvUXVlcnkgJiZcbiAgICAhcGFyYW1LZXlzLnNvbWUoKGtleSkgPT4gZGVzdFBhdGhQYXJhbXMuaW5jbHVkZXMoa2V5KSlcbiAgKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcGFyYW1LZXlzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gZGVzdFF1ZXJ5KSkge1xuICAgICAgICBkZXN0UXVlcnlba2V5XSA9IHBhcmFtc1trZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2hvdWxkQWRkQmFzZVBhdGggPSBkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykgJiYgYmFzZVBhdGhcblxuICB0cnkge1xuICAgIG5ld1VybCA9IGAke3Nob3VsZEFkZEJhc2VQYXRoID8gYmFzZVBhdGggOiAnJ30ke2Rlc3RpbmF0aW9uQ29tcGlsZXIoXG4gICAgICBwYXJhbXNcbiAgICApfWBcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLm1lc3NhZ2UubWF0Y2goL0V4cGVjdGVkIC4qPyB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5LykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRvIHVzZSBhIG11bHRpLW1hdGNoIGluIHRoZSBkZXN0aW5hdGlvbiB5b3UgbXVzdCBhZGQgXFxgKlxcYCBhdCB0aGUgZW5kIG9mIHRoZSBwYXJhbSBuYW1lIHRvIHNpZ25pZnkgaXQgc2hvdWxkIHJlcGVhdC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1tdWx0aS1tYXRjaGBcbiAgICAgIClcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBRdWVyeSBtZXJnZSBvcmRlciBsb3dlc3QgcHJpb3JpdHkgdG8gaGlnaGVzdFxuICAvLyAxLiBpbml0aWFsIFVSTCBxdWVyeSB2YWx1ZXNcbiAgLy8gMi4gcGF0aCBzZWdtZW50IHZhbHVlc1xuICAvLyAzLiBkZXN0aW5hdGlvbiBzcGVjaWZpZWQgcXVlcnkgdmFsdWVzXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0ge1xuICAgIC4uLnF1ZXJ5LFxuICAgIC4uLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5LFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdVcmwsXG4gICAgcGFyc2VkRGVzdGluYXRpb24sXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHBhdGhNYXRjaCBmcm9tICcuL3BhdGgtbWF0Y2gnXG5pbXBvcnQgcHJlcGFyZURlc3RpbmF0aW9uIGZyb20gJy4vcHJlcGFyZS1kZXN0aW5hdGlvbidcbmltcG9ydCB7IFJld3JpdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvbG9hZC1jdXN0b20tcm91dGVzJ1xuaW1wb3J0IHsgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggfSBmcm9tICcuLi8uLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuXG5jb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXIgPSBwYXRoTWF0Y2godHJ1ZSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKFxuICBhc1BhdGg6IHN0cmluZyxcbiAgcGFnZXM6IHN0cmluZ1tdLFxuICBiYXNlUGF0aDogc3RyaW5nLFxuICByZXdyaXRlczogUmV3cml0ZVtdLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIHJlc29sdmVIcmVmOiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmdcbikge1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICBmb3IgKGNvbnN0IHJld3JpdGUgb2YgcmV3cml0ZXMpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXIgPSBjdXN0b21Sb3V0ZU1hdGNoZXIocmV3cml0ZS5zb3VyY2UpXG4gICAgICBjb25zdCBwYXJhbXMgPSBtYXRjaGVyKGFzUGF0aClcblxuICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICBpZiAoIXJld3JpdGUuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIGEgcHJveGllZCByZXdyaXRlIHdoaWNoIGlzbid0IGhhbmRsZWQgb24gdGhlIGNsaWVudFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzdFJlcyA9IHByZXBhcmVEZXN0aW5hdGlvbihcbiAgICAgICAgICByZXdyaXRlLmRlc3RpbmF0aW9uLFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIHJld3JpdGUuYmFzZVBhdGggPT09IGZhbHNlID8gJycgOiBiYXNlUGF0aFxuICAgICAgICApXG4gICAgICAgIGFzUGF0aCA9IGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucXVlcnkpXG5cbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGFzUGF0aCkpKSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihhc1BhdGgpXG5cbiAgICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhc1BhdGhcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBIZWFkRW50cnkgPSBbc3RyaW5nLCB7IFtrZXk6IHN0cmluZ106IGFueSB9XVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgaGVhZDogSGVhZEVudHJ5W11cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBJUGVyZm9ybWVyLFxuICBJQ291bnRyaWVzLFxuICBJUGVyZm9ybWVyQ2F0ZWdvZ2llcyxcbiAgSVBlcmZvcm1TZWFyY2gsXG4gIElVSUNvbmZpZ1xufSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgUGVyZm9ybWVyR3JpZCBmcm9tICdAY29tcG9uZW50cy9wZXJmb3JtZXIvcGVyZm9ybWVyLWdyaWQnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7XG4gIHNlYXJjaFBlcmZvcm1lcixcbiAgdXBkYXRlUGVyZm9ybWVyRmF2b3VyaXRlLFxuICB1cGRhdGVDdXJyZW50UGVyZm9ybWVyXG59IGZyb20gJ0ByZWR1eC9wZXJmb3JtZXIvYWN0aW9ucyc7XG5pbXBvcnQgeyBsb2dpblN1Y2Nlc3MgfSBmcm9tICdAcmVkdXgvYXV0aC9hY3Rpb25zJztcbmltcG9ydCB7IHVwZGF0ZUN1cnJlbnRVc2VyIH0gZnJvbSAnQHJlZHV4L3VzZXIvYWN0aW9ucyc7XG5pbXBvcnQgeyB1cGRhdGVDdXJyZW50U3R1ZGlvIH0gZnJvbSAnQHJlZHV4L3N0dWRpby9hY3Rpb25zJztcbmltcG9ydCBQZXJmb3JtZXJGaWx0ZXIgZnJvbSAnQGNvbXBvbmVudHMvdXNlci9wZXJmb3JtZXItZmlsdGVyJztcbmltcG9ydCB7IGZhdm91cml0ZVNlcnZpY2UgfSBmcm9tICdzcmMvc2VydmljZXMnO1xuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgZ2V0UmVzcG9uc2VFcnJvciB9IGZyb20gJ3NyYy9saWInO1xuaW1wb3J0IHsgd2l0aFJvdXRlciwgTmV4dFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IFNvY2tldENvbnRleHQgfSBmcm9tICdzcmMvc29ja2V0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICByb3V0ZXI6IE5leHRSb3V0ZXI7XG4gIHVpOiBJVUlDb25maWc7XG4gIGRhdGE6IElQZXJmb3JtZXJbXTtcbiAgc2VhcmNoUGVyZm9ybWVyPzogRnVuY3Rpb247XG4gIHRvdGFsPzogbnVtYmVyO1xuICBzdWNjZXNzPzogYm9vbGVhbjtcbiAgZXJyb3I/OiBhbnk7XG4gIHNldHRpbmdzPzogYW55O1xuICBzZWFyY2hpbmc/OiBib29sZWFuO1xuICBsb2dnZWRJbj86IGJvb2xlYW47XG4gIHF1ZXJ5Pzoge1xuICAgIHE6IHN0cmluZztcbiAgfTtcbiAgY2F0ZWdvcmllcz86IElQZXJmb3JtZXJDYXRlZ29naWVzW107XG4gIGNvdW50cmllcz86IElDb3VudHJpZXNbXTtcbiAgdXBkYXRlUGVyZm9ybWVyRmF2b3VyaXRlOiBGdW5jdGlvbjtcbiAgdXBkYXRlQ3VycmVudFVzZXI6IEZ1bmN0aW9uO1xuICB1cGRhdGVDdXJyZW50UGVyZm9ybWVyOiBGdW5jdGlvbjtcbiAgdXBkYXRlQ3VycmVudFN0dWRpbzogRnVuY3Rpb247XG4gIGxvZ2luU3VjY2VzczogRnVuY3Rpb247XG59XG5cbmludGVyZmFjZSBJU3RhdGVzIHtcbiAgcXVlcnk6IElQZXJmb3JtU2VhcmNoO1xuICBzb3J0Pzoge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBzb3J0Qnk/OiBzdHJpbmc7XG4gIH07XG59XG5cbmNvbnN0IGluaXRRdWVyeVN0YXRlOiBJUGVyZm9ybVNlYXJjaCA9IHtcbiAgb2Zmc2V0OiAwLFxuICBsaW1pdDogNjAsXG4gIGdlbmRlcjogJycsXG4gIGNhdGVnb3J5OiAnJyxcbiAgY291bnRyeTogJycsXG4gIHNvcnRCeTogJycsXG4gIHNvcnQ6ICdkZXNjJ1xufTtcblxuY2xhc3MgSG9tZXBhZ2UgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PElQcm9wcywgSVN0YXRlcz4ge1xuICBwcml2YXRlIHNvY2tldDtcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBxdWVyeTogaW5pdFF1ZXJ5U3RhdGVcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zZWFyY2goKTtcbiAgICB0aGlzLnNvY2tldCA9IHRoaXMuY29udGV4dDtcbiAgICB0aGlzLnNvY2tldC5vbignbW9kZWxVcGRhdGVTdGF0dXMnLCB0aGlzLnNlYXJjaCk7XG4gICAgdGhpcy5zb2NrZXQub24oJ21vZGVsVXBkYXRlU3RyZWFtaW5nU3RhdHVzJywgdGhpcy5zZWFyY2gpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wczogSVByb3BzLCBwcmV2U3RhdGVzOiBJU3RhdGVzKSB7XG4gICAgY29uc3QgeyByb3V0ZXIsIGxvZ2dlZEluIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgcXVlcnkgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKFxuICAgICAgcm91dGVyLnF1ZXJ5LnEgIT09IHByZXZQcm9wcy5yb3V0ZXIucXVlcnkucVxuICAgICAgfHwgcXVlcnkgIT09IHByZXZTdGF0ZXMucXVlcnlcbiAgICApIHtcbiAgICAgIHRoaXMuc2VhcmNoKCk7XG4gICAgfVxuICAgIGlmICghbG9nZ2VkSW4gJiYgbG9nZ2VkSW4gIT09IHByZXZQcm9wcy5sb2dnZWRJbikge1xuICAgICAgdGhpcy5zZWFyY2goKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnNvY2tldCA9IHRoaXMuY29udGV4dDtcbiAgICBpZiAodGhpcy5zb2NrZXQpIHtcbiAgICAgIHRoaXMuc29ja2V0Lm9mZignbW9kZWxVcGRhdGVTdGF0dXMnKTtcbiAgICAgIHRoaXMuc29ja2V0Lm9mZignbW9kZWxVcGRhdGVTdHJlYW1pbmdTdGF0dXMnKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBvbkxpa2UocGVyZm9ybWVyOiBJUGVyZm9ybWVyKSB7XG4gICAgY29uc3Qge1xuICAgICAgdXBkYXRlUGVyZm9ybWVyRmF2b3VyaXRlOiBkaXNwYXRjaFVwZGF0ZVBlcmZvcm1lckZhdm9yaXRlXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBfaWQsIGlzRmF2b3JpdGUgfSA9IHBlcmZvcm1lcjtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgZmF2b3VyaXRlU2VydmljZS5mYXZvcml0ZShfaWQsIGlzRmF2b3JpdGUpO1xuICAgICAgZGlzcGF0Y2hVcGRhdGVQZXJmb3JtZXJGYXZvcml0ZShfaWQpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zdCBlID0gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGVycm9yKTtcbiAgICAgIG1lc3NhZ2UuZXJyb3IoZ2V0UmVzcG9uc2VFcnJvcihlKSk7XG4gICAgfVxuICB9XG5cbiAgc2V0RmlsdGVyKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgIGNvbnN0IHsgcXVlcnkgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBxdWVyeToge1xuICAgICAgICAuLi5xdWVyeSxcbiAgICAgICAgW25hbWVdOiB2YWx1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2VhcmNoID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcm91dGVyLCBzZWFyY2hQZXJmb3JtZXI6IGRpc3BhdGNoU2VhcmNoUGVyZm9ybWVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgcXVlcnkgfSA9IHRoaXMuc3RhdGU7XG4gICAgZGlzcGF0Y2hTZWFyY2hQZXJmb3JtZXIoe1xuICAgICAgLi4ucXVlcnksXG4gICAgICAuLi5yb3V0ZXIucXVlcnlcbiAgICB9KTtcbiAgfTtcblxuICBjbGVhckZpbHRlcigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHF1ZXJ5OiBpbml0UXVlcnlTdGF0ZVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNhdGVnb3JpZXMsIGNvdW50cmllcywgdWksIHNldHRpbmdzXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBxdWVyeSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+e3VpPy5zaXRlTmFtZX08L3RpdGxlPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9e3NldHRpbmdzPy5tZXRhS2V5d29yZHN9IC8+XG4gICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICBjb250ZW50PXtzZXR0aW5ncz8ubWV0YURlc2NyaXB0aW9ufVxuICAgICAgICAgIC8+XG4gICAgICAgICAgey8qIE9HIHRhZ3MgKi99XG4gICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgIHByb3BlcnR5PVwib2c6dGl0bGVcIlxuICAgICAgICAgICAgY29udGVudD17c2V0dGluZ3M/LnNpdGVOYW1lfVxuICAgICAgICAgICAga2V5PVwidGl0bGVcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e3NldHRpbmdzPy5sb2dvVXJsfSAvPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmtleXdvcmRzXCJcbiAgICAgICAgICAgIGNvbnRlbnQ9e3NldHRpbmdzPy5tZXRhS2V5d29yZHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICBjb250ZW50PXtzZXR0aW5ncz8ubWV0YURlc2NyaXB0aW9ufVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lcGFnZVwiPlxuICAgICAgICAgIDxQZXJmb3JtZXJGaWx0ZXJcbiAgICAgICAgICAgIGNvdW50cmllcz17Y291bnRyaWVzfVxuICAgICAgICAgICAgY2F0ZWdvcmllcz17Y2F0ZWdvcmllc31cbiAgICAgICAgICAgIHNldEZpbHRlcj17dGhpcy5zZXRGaWx0ZXIuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIGNsZWFyRmlsdGVyPXt0aGlzLmNsZWFyRmlsdGVyLmJpbmQodGhpcyl9XG4gICAgICAgICAgICB7Li4ucXVlcnl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8UGVyZm9ybWVyR3JpZFxuICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICBvbkxpa2U9e3RoaXMub25MaWtlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICB0aXRsZT1cIkxpdmUgY2Ftc1wiXG4gICAgICAgICAgICBpc1BhZ2VcbiAgICAgICAgICAgIHNldEZpbHRlcj17dGhpcy5zZXRGaWx0ZXIuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIHsuLi5xdWVyeX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cblxuSG9tZXBhZ2UuY29udGV4dFR5cGUgPSBTb2NrZXRDb250ZXh0O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIHVpOiB7IC4uLnN0YXRlLnVpIH0sXG4gIC4uLnN0YXRlLnBlcmZvcm1lci5wZXJmb3JtZXJzLFxuICBjb3VudHJpZXM6IHN0YXRlLnNldHRpbmdzLmNvdW50cmllcyxcbiAgbG9nZ2VkSW46IHN0YXRlLmF1dGgubG9nZ2VkSW4sXG4gIGNhdGVnb3JpZXM6IHN0YXRlLnBlcmZvcm1lci5jYXRlZ29yaWVzLmRhdGEsXG4gIHNldHRpbmdzOiBzdGF0ZS5zZXR0aW5nc1xufSk7XG5jb25zdCBtYXBEaXNwYXRjaCA9IHtcbiAgc2VhcmNoUGVyZm9ybWVyLFxuICB1cGRhdGVQZXJmb3JtZXJGYXZvdXJpdGUsXG4gIHVwZGF0ZUN1cnJlbnRVc2VyLFxuICB1cGRhdGVDdXJyZW50UGVyZm9ybWVyLFxuICB1cGRhdGVDdXJyZW50U3R1ZGlvLFxuICBsb2dpblN1Y2Nlc3Ncbn07XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2gpKHdpdGhSb3V0ZXIoSG9tZXBhZ2UpKTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FsdC10ZXh0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9yZXF1aXJlLWRlZmF1bHQtcHJvcHMgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLXVudXNlZC1wcm9wLXR5cGVzICovXG5pbXBvcnQgUmVhY3QsIHsgQ1NTUHJvcGVydGllcyB9IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIElJY29ucyB7XG4gIHdpZHRoPzogbnVtYmVyO1xuICBoZWlnaHQ/OiBudW1iZXI7XG4gIGNvbG9yPzogc3RyaW5nO1xuICBzdHlsZT86IENTU1Byb3BlcnRpZXM7XG59XG5cbmV4cG9ydCBjb25zdCBGYWNlYm9va0ljb24gPSAoeyBzdHlsZSB9OiBJSWNvbnMpID0+IChcbiAgPGltZyBzcmM9XCIvaWNvbnMvZmFjZWJvb2suc3ZnXCIgc3R5bGU9e3N0eWxlfSAvPlxuKTtcblxuZXhwb3J0IGNvbnN0IFR3aXR0ZXJJY29uID0gKHsgc3R5bGUgfTogSUljb25zKSA9PiAoXG4gIDxpbWcgc3JjPVwiL2ljb25zL3R3aXR0ZXIuc3ZnXCIgc3R5bGU9e3N0eWxlfSAvPlxuKTtcblxuZXhwb3J0IGNvbnN0IEluc3RhZ3JhbUljb24gPSAoeyBzdHlsZSB9OiBJSWNvbnMpID0+IChcbiAgPGltZyBzcmM9XCIvaWNvbnMvaW5zdGFncmFtLnN2Z1wiIHN0eWxlPXtzdHlsZX0gLz5cbik7XG5cbmV4cG9ydCBjb25zdCBHaWZ0SWNvbiA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJhbnRpY29uXCI+XG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxN1wiXG4gICAgICBoZWlnaHQ9XCIxNlwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDE3IDE2XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTQuNjAwMSA0Ljg0Mzc1SDEyLjI5MzhDMTIuNTA2MyA0LjUwOTM4IDEyLjYzMTMgNC4xMTI1IDEyLjYzMTMgMy42ODc1QzEyLjYzMTMgMi40OTg0NCAxMS42NjQyIDEuNTMxMjUgMTAuNDc1MSAxLjUzMTI1QzkuODI4MjIgMS41MzEyNSA5LjI0NTQxIDEuODE4NzUgOC44NTAxIDIuMjcxODdDOC40NTQ3OSAxLjgxODc1IDcuODcxOTcgMS41MzEyNSA3LjIyNTEgMS41MzEyNUM2LjAzNjA0IDEuNTMxMjUgNS4wNjg4NSAyLjQ5ODQ0IDUuMDY4ODUgMy42ODc1QzUuMDY4ODUgNC4xMTI1IDUuMTkyMjkgNC41MDkzOCA1LjQwNjM1IDQuODQzNzVIMy4xMDAxQzIuODIzNTQgNC44NDM3NSAyLjYwMDEgNS4wNjcxOSAyLjYwMDEgNS4zNDM3NVY4LjQ2ODc1QzIuNjAwMSA4LjUzNzUgMi42NTYzNSA4LjU5Mzc1IDIuNzI1MSA4LjU5Mzc1SDMuMzUwMVYxMy45Njg4QzMuMzUwMSAxNC4yNDUzIDMuNTczNTQgMTQuNDY4OCAzLjg1MDEgMTQuNDY4OEgxMy44NTAxQzE0LjEyNjcgMTQuNDY4OCAxNC4zNTAxIDE0LjI0NTMgMTQuMzUwMSAxMy45Njg4VjguNTkzNzVIMTQuOTc1MUMxNS4wNDM4IDguNTkzNzUgMTUuMTAwMSA4LjUzNzUgMTUuMTAwMSA4LjQ2ODc1VjUuMzQzNzVDMTUuMTAwMSA1LjA2NzE5IDE0Ljg3NjcgNC44NDM3NSAxNC42MDAxIDQuODQzNzVaTTkuMzgxMzUgMy42ODc1QzkuMzgxMzUgMy4wODQzOCA5Ljg3MTk3IDIuNTkzNzUgMTAuNDc1MSAyLjU5Mzc1QzExLjA3ODIgMi41OTM3NSAxMS41Njg4IDMuMDg0MzggMTEuNTY4OCAzLjY4NzVDMTEuNTY4OCA0LjI5MDYyIDExLjA3ODIgNC43ODEyNSAxMC40NzUxIDQuNzgxMjVIOS4zODEzNVYzLjY4NzVaTTcuMjI1MSAyLjU5Mzc1QzcuODI4MjIgMi41OTM3NSA4LjMxODg1IDMuMDg0MzggOC4zMTg4NSAzLjY4NzVWNC43ODEyNUg3LjIyNTFDNi42MjE5NyA0Ljc4MTI1IDYuMTMxMzUgNC4yOTA2MiA2LjEzMTM1IDMuNjg3NUM2LjEzMTM1IDMuMDg0MzggNi42MjE5NyAyLjU5Mzc1IDcuMjI1MSAyLjU5Mzc1Wk0zLjY2MjYgNy41MzEyNVY1LjkwNjI1SDguMzE4ODVWNy41MzEyNUgzLjY2MjZaTTQuNDEyNiA4LjU5Mzc1SDguMzE4ODVWMTMuNDA2Mkg0LjQxMjZWOC41OTM3NVpNMTMuMjg3NiAxMy40MDYySDkuMzgxMzVWOC41OTM3NUgxMy4yODc2VjEzLjQwNjJaTTE0LjAzNzYgNy41MzEyNUg5LjM4MTM1VjUuOTA2MjVIMTQuMDM3NlY3LjUzMTI1WlwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgY29uc3QgTWVzc2FnZUljb24gPSAoeyB3aWR0aCwgaGVpZ2h0LCBjb2xvciB9OiBJSWNvbnMpID0+IChcbiAgPHN2Z1xuICAgIHdpZHRoPXt3aWR0aCB8fCAnMWVtJ31cbiAgICBoZWlnaHQ9e2hlaWdodCB8fCAnMWVtJ31cbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICBmaWxsPVwibm9uZVwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gID5cbiAgICA8cGF0aFxuICAgICAgZD1cIk0yMS43NSAzLjc1SDIuMjVDMS44MzUxNiAzLjc1IDEuNSA0LjA4NTE2IDEuNSA0LjVWMTkuNUMxLjUgMTkuOTE0OCAxLjgzNTE2IDIwLjI1IDIuMjUgMjAuMjVIMjEuNzVDMjIuMTY0OCAyMC4yNSAyMi41IDE5LjkxNDggMjIuNSAxOS41VjQuNUMyMi41IDQuMDg1MTYgMjIuMTY0OCAzLjc1IDIxLjc1IDMuNzVaTTIwLjgxMjUgNi4zNDY4N1YxOC41NjI1SDMuMTg3NVY2LjM0Njg3TDIuNTQwNjMgNS44NDI5N0wzLjQ2MTcyIDQuNjU5MzhMNC40NjQ4NCA1LjQzOTg0SDE5LjUzNzVMMjAuNTQwNiA0LjY1OTM4TDIxLjQ2MTcgNS44NDI5N0wyMC44MTI1IDYuMzQ2ODdaTTE5LjUzNzUgNS40Mzc1TDEyIDExLjI5NjlMNC40NjI1IDUuNDM3NUwzLjQ1OTM4IDQuNjU3MDNMMi41MzgyOCA1Ljg0MDYyTDMuMTg1MTYgNi4zNDQ1M0wxMS4xOTE0IDEyLjU2OTVDMTEuNDIxNyAxMi43NDg0IDExLjcwNDkgMTIuODQ1NSAxMS45OTY1IDEyLjg0NTVDMTIuMjg4MSAxMi44NDU1IDEyLjU3MTMgMTIuNzQ4NCAxMi44MDE2IDEyLjU2OTVMMjAuODEyNSA2LjM0Njg3TDIxLjQ1OTQgNS44NDI5N0wyMC41MzgzIDQuNjU5MzhMMTkuNTM3NSA1LjQzNzVaXCJcbiAgICAgIGZpbGw9e2NvbG9yfVxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IEZhdm91cml0ZUljb24gPSAoeyB3aWR0aCwgaGVpZ2h0LCBjb2xvciB9OiBJSWNvbnMpID0+IChcbiAgPHN2Z1xuICAgIHdpZHRoPXt3aWR0aCB8fCAnMWVtJ31cbiAgICBoZWlnaHQ9e2hlaWdodCB8fCAnMWVtJ31cbiAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcbiAgICBmaWxsPVwibm9uZVwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gID5cbiAgICA8cGF0aFxuICAgICAgZD1cIk0xNC4xODU1IDQuNDU5MTZDMTMuOTgzOCAzLjk3NzkzIDEzLjY5MjkgMy41NDE4NSAxMy4zMjkyIDMuMTc1MzJDMTIuOTY1MyAyLjgwNzY5IDEyLjUzNjIgMi41MTU1NSAxMi4wNjUyIDIuMzE0NzdDMTEuNTc2OSAyLjEwNTc1IDExLjA1MzEgMS45OTg3NiAxMC41MjQzIDIuMDAwMDFDOS43ODI0MyAyLjAwMDAxIDkuMDU4NjIgMi4yMDkzMyA4LjQyOTYxIDIuNjA0NzJDOC4yNzkxMyAyLjY5OTMgOC4xMzYxOCAyLjgwMzE5IDguMDAwNzQgMi45MTYzOEM3Ljg2NTMxIDIuODAzMTkgNy43MjIzNiAyLjY5OTMgNy41NzE4OCAyLjYwNDcyQzYuOTQyODcgMi4yMDkzMyA2LjIxOTA2IDIuMDAwMDEgNS40NzcxOSAyLjAwMDAxQzQuOTQyOTkgMi4wMDAwMSA0LjQyNTMzIDIuMTA1NDUgMy45MzYyNyAyLjMxNDc3QzMuNDYzNzcgMi41MTYzNCAzLjAzNzkxIDIuODA2MjkgMi42NzIyNCAzLjE3NTMyQzIuMzA4MDcgMy41NDE0MyAyLjAxNzE3IDMuOTc3NjIgMS44MTYwMSA0LjQ1OTE2QzEuNjA2ODQgNC45NTk5OCAxLjUgNS40OTE4MiAxLjUgNi4wMzkxNkMxLjUgNi41NTU0OSAxLjYwMjMzIDcuMDkzNTIgMS44MDU0NyA3LjY0MDg2QzEuOTc1NTIgOC4wOTgyNyAyLjIxOTMgOC41NzI3MyAyLjUzMDc5IDkuMDUxODVDMy4wMjQzNiA5LjgxMDA2IDMuNzAzMDMgMTAuNjAwOCA0LjU0NTcyIDExLjQwMjVDNS45NDIxOCAxMi43MzEzIDcuMzI1MDkgMTMuNjQ5MiA3LjM4Mzc4IDEzLjY4NjRMNy43NDA0MSAxMy45MjIxQzcuODk4NDIgMTQuMDI2IDguMTAxNTcgMTQuMDI2IDguMjU5NTcgMTMuOTIyMUw4LjYxNjIxIDEzLjY4NjRDOC42NzQ5IDEzLjY0NzYgMTAuMDU2MyAxMi43MzEzIDExLjQ1NDMgMTEuNDAyNUMxMi4yOTcgMTAuNjAwOCAxMi45NzU2IDkuODEwMDYgMTMuNDY5MiA5LjA1MTg1QzEzLjc4MDcgOC41NzI3MyAxNC4wMjYgOC4wOTgyNyAxNC4xOTQ1IDcuNjQwODZDMTQuMzk3NyA3LjA5MzUyIDE0LjUgNi41NTU0OSAxNC41IDYuMDM5MTZDMTQuNTAxNSA1LjQ5MTgyIDE0LjM5NDYgNC45NTk5OCAxNC4xODU1IDQuNDU5MTZWNC40NTkxNlpNOC4wMDA3NCAxMi42OTU2QzguMDAwNzQgMTIuNjk1NiAyLjY0MzY1IDkuMTU4ODQgMi42NDM2NSA2LjAzOTE2QzIuNjQzNjUgNC40NTkxNiAzLjkxMjIgMy4xNzg0MiA1LjQ3NzE5IDMuMTc4NDJDNi41NzcyIDMuMTc4NDIgNy41MzEyNSAzLjgxMTA0IDguMDAwNzQgNC43MzUxNkM4LjQ3MDI0IDMuODExMDQgOS40MjQyOSAzLjE3ODQyIDEwLjUyNDMgMy4xNzg0MkMxMi4wODkzIDMuMTc4NDIgMTMuMzU3OCA0LjQ1OTE2IDEzLjM1NzggNi4wMzkxNkMxMy4zNTc4IDkuMTU4ODQgOC4wMDA3NCAxMi42OTU2IDguMDAwNzQgMTIuNjk1NlpcIlxuICAgICAgZmlsbD17Y29sb3J9XG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgU2VuZE1lc3NhZ2VJY29uID0gKHsgd2lkdGgsIGhlaWdodCB9OiBJSWNvbnMpID0+IChcbiAgPHN2Z1xuICAgIHdpZHRoPXt3aWR0aCB8fCAnMWVtJ31cbiAgICBoZWlnaHQ9e2hlaWdodCB8fCAnMWVtJ31cbiAgICB2aWV3Qm94PVwiMCAwIDMwIDMwXCJcbiAgICBmaWxsPVwibm9uZVwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gID5cbiAgICA8cGF0aFxuICAgICAgZD1cIk0yNi43NTUyIDE0LjYzNjdMMy42NDAxOCAzLjA0NjA4QzMuNTQ2MjMgMi45OTkxIDMuNDM4NDYgMi45ODgwNCAzLjMzNjIyIDMuMDEyOTFDMy4xMDEzNCAzLjA3MDk1IDIuOTU0ODggMy4zMDg2MiAzLjAxMjkxIDMuNTQ2MjlMNS4zOTQ4OCAxMy4yNzk3QzUuNDMwOCAxMy40MjYyIDUuNTM4NTcgMTMuNTQ1MSA1LjY4MjI2IDEzLjU5Mkw5Ljc2MzY1IDE0Ljk5MzJMNS42ODUwMiAxNi4zOTQzQzUuNTQxMzMgMTYuNDQ0MSA1LjQzMzU2IDE2LjU2MDIgNS40MDA0IDE2LjcwNjZMMy4wMTI5MSAyNi40NTM5QzIuOTg4MDQgMjYuNTU2MiAyLjk5OTEgMjYuNjYzOSAzLjA0NjA3IDI2Ljc1NTFDMy4xNTM4NCAyNi45NzM1IDMuNDE5MTIgMjcuMDYxOSAzLjY0MDE4IDI2Ljk1NDFMMjYuNzU1MiAxNS40Mjk4QzI2Ljg0MDggMTUuMzg4NCAyNi45MDk5IDE1LjMxNjUgMjYuOTU0MSAxNS4yMzM2QzI3LjA2MTkgMTUuMDEyNSAyNi45NzM1IDE0Ljc0NzIgMjYuNzU1MiAxNC42MzY3Wk01LjczNzUyIDIzLjY4NDhMNy4xMjc0NiAxOC4wMDI4TDE1LjI4NDcgMTUuMjAzMkMxNS4zNDgzIDE1LjE4MTEgMTUuNDAwOCAxNS4xMzE0IDE1LjQyMjkgMTUuMDY1QzE1LjQ2MTYgMTQuOTQ5IDE1LjQwMDggMTQuODI0NiAxNS4yODQ3IDE0Ljc4MzJMNy4xMjc0NiAxMS45ODY0TDUuNzQzMDUgNi4zMjY0OUwyMy4wOTY2IDE1LjAyOTFMNS43Mzc1MiAyMy42ODQ4WlwiXG4gICAgICBmaWxsPVwiI0ZGMDA2NlwiXG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgRnVuZHNJY29uID0gKHsgd2lkdGgsIGhlaWdodCB9OiBJSWNvbnMpID0+IChcbiAgPHN2Z1xuICAgIHdpZHRoPXt3aWR0aCB8fCAnMWVtJ31cbiAgICBoZWlnaHQ9e2hlaWdodCB8fCAnMWVtJ31cbiAgICB2aWV3Qm94PVwiMCAwIDI1IDI0XCJcbiAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgPlxuICAgIDxwYXRoIGQ9XCJNOS44NTAxIDEwQzkuNTg0ODggMTAgOS4zMzA1MyAxMC4xMDU0IDkuMTQyOTkgMTAuMjkyOUM4Ljk1NTQ1IDEwLjQ4MDQgOC44NTAxIDEwLjczNDggOC44NTAxIDExVjEzQzguODUwMSAxMy4yNjUyIDguOTU1NDUgMTMuNTE5NiA5LjE0Mjk5IDEzLjcwNzFDOS4zMzA1MyAxMy44OTQ2IDkuNTg0ODggMTQgOS44NTAxIDE0QzEwLjExNTMgMTQgMTAuMzY5NyAxMy44OTQ2IDEwLjU1NzIgMTMuNzA3MUMxMC43NDQ3IDEzLjUxOTYgMTAuODUwMSAxMy4yNjUyIDEwLjg1MDEgMTNWMTFDMTAuODUwMSAxMC43MzQ4IDEwLjc0NDcgMTAuNDgwNCAxMC41NTcyIDEwLjI5MjlDMTAuMzY5NyAxMC4xMDU0IDEwLjExNTMgMTAgOS44NTAxIDEwWk0yMS44NTAxIDExQzIyLjExNTMgMTEgMjIuMzY5NyAxMC44OTQ2IDIyLjU1NzIgMTAuNzA3MUMyMi43NDQ3IDEwLjUxOTYgMjIuODUwMSAxMC4yNjUyIDIyLjg1MDEgMTBWNkMyMi44NTAxIDUuNzM0NzggMjIuNzQ0NyA1LjQ4MDQzIDIyLjU1NzIgNS4yOTI4OUMyMi4zNjk3IDUuMTA1MzYgMjIuMTE1MyA1IDIxLjg1MDEgNUgzLjg1MDFDMy41ODQ4OCA1IDMuMzMwNTMgNS4xMDUzNiAzLjE0Mjk5IDUuMjkyODlDMi45NTU0NSA1LjQ4MDQzIDIuODUwMSA1LjczNDc4IDIuODUwMSA2VjEwQzIuODUwMSAxMC4yNjUyIDIuOTU1NDUgMTAuNTE5NiAzLjE0Mjk5IDEwLjcwNzFDMy4zMzA1MyAxMC44OTQ2IDMuNTg0ODggMTEgMy44NTAxIDExQzQuMTE1MzEgMTEgNC4zNjk2NyAxMS4xMDU0IDQuNTU3MiAxMS4yOTI5QzQuNzQ0NzQgMTEuNDgwNCA0Ljg1MDEgMTEuNzM0OCA0Ljg1MDEgMTJDNC44NTAxIDEyLjI2NTIgNC43NDQ3NCAxMi41MTk2IDQuNTU3MiAxMi43MDcxQzQuMzY5NjcgMTIuODk0NiA0LjExNTMxIDEzIDMuODUwMSAxM0MzLjU4NDg4IDEzIDMuMzMwNTMgMTMuMTA1NCAzLjE0Mjk5IDEzLjI5MjlDMi45NTU0NSAxMy40ODA0IDIuODUwMSAxMy43MzQ4IDIuODUwMSAxNFYxOEMyLjg1MDEgMTguMjY1MiAyLjk1NTQ1IDE4LjUxOTYgMy4xNDI5OSAxOC43MDcxQzMuMzMwNTMgMTguODk0NiAzLjU4NDg4IDE5IDMuODUwMSAxOUgyMS44NTAxQzIyLjExNTMgMTkgMjIuMzY5NyAxOC44OTQ2IDIyLjU1NzIgMTguNzA3MUMyMi43NDQ3IDE4LjUxOTYgMjIuODUwMSAxOC4yNjUyIDIyLjg1MDEgMThWMTRDMjIuODUwMSAxMy43MzQ4IDIyLjc0NDcgMTMuNDgwNCAyMi41NTcyIDEzLjI5MjlDMjIuMzY5NyAxMy4xMDU0IDIyLjExNTMgMTMgMjEuODUwMSAxM0MyMS41ODQ5IDEzIDIxLjMzMDUgMTIuODk0NiAyMS4xNDMgMTIuNzA3MUMyMC45NTU1IDEyLjUxOTYgMjAuODUwMSAxMi4yNjUyIDIwLjg1MDEgMTJDMjAuODUwMSAxMS43MzQ4IDIwLjk1NTUgMTEuNDgwNCAyMS4xNDMgMTEuMjkyOUMyMS4zMzA1IDExLjEwNTQgMjEuNTg0OSAxMSAyMS44NTAxIDExWk0yMC44NTAxIDkuMThDMjAuMjcwOSA5LjM5MDIgMTkuNzcwNiA5Ljc3MzYzIDE5LjQxNjkgMTAuMjc4MkMxOS4wNjMzIDEwLjc4MjcgMTguODczNiAxMS4zODM5IDE4Ljg3MzYgMTJDMTguODczNiAxMi42MTYxIDE5LjA2MzMgMTMuMjE3MyAxOS40MTY5IDEzLjcyMThDMTkuNzcwNiAxNC4yMjY0IDIwLjI3MDkgMTQuNjA5OCAyMC44NTAxIDE0LjgyVjE3SDEwLjg1MDFDMTAuODUwMSAxNi43MzQ4IDEwLjc0NDcgMTYuNDgwNCAxMC41NTcyIDE2LjI5MjlDMTAuMzY5NyAxNi4xMDU0IDEwLjExNTMgMTYgOS44NTAxIDE2QzkuNTg0ODggMTYgOS4zMzA1MyAxNi4xMDU0IDkuMTQyOTkgMTYuMjkyOUM4Ljk1NTQ1IDE2LjQ4MDQgOC44NTAxIDE2LjczNDggOC44NTAxIDE3SDQuODUwMVYxNC44MkM1LjQyOTI1IDE0LjYwOTggNS45Mjk2NCAxNC4yMjY0IDYuMjgzMjYgMTMuNzIxOEM2LjYzNjg3IDEzLjIxNzMgNi44MjY1NyAxMi42MTYxIDYuODI2NTcgMTJDNi44MjY1NyAxMS4zODM5IDYuNjM2ODcgMTAuNzgyNyA2LjI4MzI2IDEwLjI3ODJDNS45Mjk2NCA5Ljc3MzYzIDUuNDI5MjUgOS4zOTAyIDQuODUwMSA5LjE4VjdIOC44NTAxQzguODUwMSA3LjI2NTIyIDguOTU1NDUgNy41MTk1NyA5LjE0Mjk5IDcuNzA3MTFDOS4zMzA1MyA3Ljg5NDY0IDkuNTg0ODggOCA5Ljg1MDEgOEMxMC4xMTUzIDggMTAuMzY5NyA3Ljg5NDY0IDEwLjU1NzIgNy43MDcxMUMxMC43NDQ3IDcuNTE5NTcgMTAuODUwMSA3LjI2NTIyIDEwLjg1MDEgN0gyMC44NTAxVjkuMThaXCIgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgUGF5bWVudFRva2Vuc0hpc3RvcnlJY29uID0gKHsgd2lkdGgsIGhlaWdodCB9OiBJSWNvbnMpID0+IChcbiAgPHN2Z1xuICAgIHdpZHRoPXt3aWR0aCB8fCAnMWVtJ31cbiAgICBoZWlnaHQ9e2hlaWdodCB8fCAnMWVtJ31cbiAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgPlxuICAgIDxwYXRoIGQ9XCJNMTkuOTU4IDQuMDQyMDFDMTguOTE1NyAyLjk5Njg0IDE3LjY3NzIgMi4xNjc5NiAxNi4zMTM1IDEuNjAzQzE0Ljk0OTkgMS4wMzgwNSAxMy40ODggMC43NDgxNjYgMTIuMDEyIDAuNzUwMDA5QzguOTM3OTcgMC43NTAwMDkgNi4xNTE5NyAxLjk4NDAxIDQuMTIyOTcgMy45ODUwMUw0LjEyMzk3IDMuOTg0MDFWMC43NTEwMDlIMi42MjM5N1Y2Ljc1MTAxSDguNjIzOTdWNS4yNTEwMUg0Ljk4MDk3QzUuODg5MjQgNC4zMDIxNSA2Ljk4MDMzIDMuNTQ3MTMgOC4xODg0IDMuMDMxNTNDOS4zOTY0NiAyLjUxNTkyIDEwLjY5NjUgMi4yNTA0IDEyLjAxIDIuMjUxMDFDMTcuMzggMi4yNTEwMSAyMS43NDggNi42MjAwMSAyMS43NDggMTEuOTg5QzIxLjc0OCAxNy4zNTggMTcuMzc5IDIxLjcyNyAxMi4wMSAyMS43MjdDNi42NDA5NyAyMS43MjcgMi4yNzE5NyAxNy4zNTggMi4yNzE5NyAxMS45ODlIMC43NzE5NzNDMC43NzE5NzMgMTguMTk2IDUuODAzOTcgMjMuMjI3IDEyLjAxIDIzLjIyN0MxNS4xMTMgMjMuMjI3IDE3LjkyMyAyMS45NjkgMTkuOTU3IDE5LjkzNUMyMS45OTEgMTcuOTAxIDIzLjI0OSAxNS4wOTIgMjMuMjQ5IDExLjk4OEMyMy4yNDkgOC44ODQwMSAyMS45OTEgNi4wNzUwMSAxOS45NTcgNC4wNDEwMUwxOS45NTggNC4wNDIwMVpcIiAvPlxuICAgIDxwYXRoIGQ9XCJNMTYuMTI1IDcuNUg2LjM3NVYxNUgxNi4xMjVWNy41Wk0xNS4zNzUgMTQuMjVINy4xMjVWOC4yNUgxNS4zNzVWMTQuMjVaXCIgLz5cbiAgICA8cGF0aCBkPVwiTTE2Ljg3NSA5LjM3NVYxNS43NUg4LjI1VjE2LjVIMTcuNjI1VjkuMzc1SDE2Ljg3NVpcIiBmaWxsPVwiYmxhY2tcIiAvPlxuICAgIDxwYXRoIGQ9XCJNMTEuMjUgMTMuMDg5QzEyLjE4MDUgMTMuMDg5IDEyLjkzNzUgMTIuMjY1NSAxMi45Mzc1IDExLjI1M0MxMi45Mzc1IDEwLjI0MDUgMTIuMTgwNSA5LjQxNjk5IDExLjI1IDkuNDE2OTlDMTAuMzE5NSA5LjQxNjk5IDkuNTYyNSAxMC4yNDA1IDkuNTYyNSAxMS4yNTNDOS41NjI1IDEyLjI2NTUgMTAuMzE5NSAxMy4wODkgMTEuMjUgMTMuMDg5Wk0xMS4yNSAxMC4xNjc1QzExLjc2NyAxMC4xNjc1IDEyLjE4NzUgMTAuNjU0NSAxMi4xODc1IDExLjI1MzVDMTIuMTg3NSAxMS44NTI1IDExLjc2NyAxMi4zMzk1IDExLjI1IDEyLjMzOTVDMTAuNzMzIDEyLjMzOTUgMTAuMzEyNSAxMS44NTI1IDEwLjMxMjUgMTEuMjUzNUMxMC4zMTI1IDEwLjY1NDUgMTAuNzMzIDEwLjE2NzUgMTEuMjUgMTAuMTY3NVpcIiAvPlxuICAgIDxwYXRoIGQ9XCJNNy44NzUgOS4xODc1SDguNjI1VjEzLjMxMjVINy44NzVWOS4xODc1WlwiIGZpbGw9XCJibGFja1wiIC8+XG4gICAgPHBhdGggZD1cIk0xMy44NzUgOS4xODc1SDE0LjYyNVYxMy4zMTI1SDEzLjg3NVY5LjE4NzVaXCIgZmlsbD1cImJsYWNrXCIgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgVHJhbnNhY3Rpb25IaXN0b3J5SWNvbiA9ICh7IHdpZHRoLCBoZWlnaHQgfTogSUljb25zKSA9PiAoXG4gIDxzdmdcbiAgICB3aWR0aD17d2lkdGggfHwgJzFlbSd9XG4gICAgaGVpZ2h0PXtoZWlnaHQgfHwgJzFlbSd9XG4gICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gID5cbiAgICA8cGF0aCBkPVwiTTE5Ljk1OCA0LjA0MjAxQzE4LjkxNTcgMi45OTY4NCAxNy42NzcyIDIuMTY3OTYgMTYuMzEzNSAxLjYwM0MxNC45NDk5IDEuMDM4MDUgMTMuNDg4IDAuNzQ4MTY2IDEyLjAxMiAwLjc1MDAwOUM4LjkzNzk3IDAuNzUwMDA5IDYuMTUxOTcgMS45ODQwMSA0LjEyMjk3IDMuOTg1MDFMNC4xMjM5NyAzLjk4NDAxVjAuNzUxMDA5SDIuNjIzOTdWNi43NTEwMUg4LjYyMzk3VjUuMjUxMDFINC45ODA5N0M1Ljg4OTI0IDQuMzAyMTUgNi45ODAzMyAzLjU0NzEzIDguMTg4NCAzLjAzMTUzQzkuMzk2NDYgMi41MTU5MiAxMC42OTY1IDIuMjUwNCAxMi4wMSAyLjI1MTAxQzE3LjM4IDIuMjUxMDEgMjEuNzQ4IDYuNjIwMDEgMjEuNzQ4IDExLjk4OUMyMS43NDggMTcuMzU4IDE3LjM3OSAyMS43MjcgMTIuMDEgMjEuNzI3QzYuNjQwOTcgMjEuNzI3IDIuMjcxOTcgMTcuMzU4IDIuMjcxOTcgMTEuOTg5SDAuNzcxOTczQzAuNzcxOTczIDE4LjE5NiA1LjgwMzk3IDIzLjIyNyAxMi4wMSAyMy4yMjdDMTUuMTEzIDIzLjIyNyAxNy45MjMgMjEuOTY5IDE5Ljk1NyAxOS45MzVDMjEuOTkxIDE3LjkwMSAyMy4yNDkgMTUuMDkyIDIzLjI0OSAxMS45ODhDMjMuMjQ5IDguODg0MDEgMjEuOTkxIDYuMDc1MDEgMTkuOTU3IDQuMDQxMDFMMTkuOTU4IDQuMDQyMDFaXCIgLz5cbiAgICA8cGF0aCBkPVwiTTEyLjAwMDMgNi4xNjY3NUM4Ljc3ODk3IDYuMTY2NzUgNi4xNjY5OSA4Ljc3ODczIDYuMTY2OTkgMTIuMDAwMUM2LjE2Njk5IDE1LjIyMTQgOC43Nzg5NyAxNy44MzM0IDEyLjAwMDMgMTcuODMzNEMxNS4yMjE3IDE3LjgzMzQgMTcuODMzNyAxNS4yMjE0IDE3LjgzMzcgMTIuMDAwMUMxNy44MzM3IDguNzc4NzMgMTUuMjIxNyA2LjE2Njc1IDEyLjAwMDMgNi4xNjY3NVpNMTIuMDAwMyAxNi44NDM4QzkuMzI1ODUgMTYuODQzOCA3LjE1NjU4IDE0LjY3NDYgNy4xNTY1OCAxMi4wMDAxQzcuMTU2NTggOS4zMjU2IDkuMzI1ODUgNy4xNTYzMyAxMi4wMDAzIDcuMTU2MzNDMTQuNjc0OCA3LjE1NjMzIDE2Ljg0NDEgOS4zMjU2IDE2Ljg0NDEgMTIuMDAwMUMxNi44NDQxIDE0LjY3NDYgMTQuNjc0OCAxNi44NDM4IDEyLjAwMDMgMTYuODQzOFpNMTIuNjIxNCAxMS42OThMMTIuMjkwNyAxMS42MjEyVjkuODcyNDhDMTIuNzg1NSA5Ljk0MDE5IDEzLjA5MTUgMTAuMjUwMSAxMy4xNDM2IDEwLjYzMDNDMTMuMTUwMSAxMC42ODI0IDEzLjE5NDMgMTAuNzIwMSAxMy4yNDY0IDEwLjcyMDFIMTMuODMxMUMxMy44OTIzIDEwLjcyMDEgMTMuOTQwNCAxMC42NjY3IDEzLjkzNTIgMTAuNjA1NkMxMy44NTU4IDkuNzk0MzUgMTMuMTg3OCA5LjI3MzUyIDEyLjI5NTkgOS4xODM2OFY4Ljc1Nzg5QzEyLjI5NTkgOC43MDA2IDEyLjI0OSA4LjY1MzczIDEyLjE5MTcgOC42NTM3M0gxMS44MjU4QzExLjc2ODYgOC42NTM3MyAxMS43MjE3IDguNzAwNiAxMS43MjE3IDguNzU3ODlWOS4xODc1OEMxMC43OTk4IDkuMjc3NDMgMTAuMDc4NSA5Ljc4NjU0IDEwLjA3ODUgMTAuNzM3MUMxMC4wNzg1IDExLjYxNzMgMTAuNzI2OSAxMi4wNDE3IDExLjQwNzkgMTIuMjA0NUwxMS43Mjk1IDEyLjI4NjVWMTQuMTQ0NkMxMS4xNTQgMTQuMDY3OCAxMC44MzExIDEzLjc2MDUgMTAuNzY0NiAxMy4zNDY0QzEwLjc1NjggMTMuMjk3IDEwLjcxMjYgMTMuMjYwNSAxMC42NjE4IDEzLjI2MDVIMTAuMDYwMkM5Ljk5OTAyIDEzLjI2MDUgOS45NTA4NSAxMy4zMTI2IDkuOTU2MDYgMTMuMzczOEMxMC4wMTQ2IDE0LjA4OTkgMTAuNTU3NiAxNC43NDg4IDExLjcxNjUgMTQuODMzNFYxNS4yNDIzQzExLjcxNjUgMTUuMjk5NiAxMS43NjMzIDE1LjM0NjQgMTEuODIwNiAxNS4zNDY0SDEyLjE5MDRDMTIuMjQ3NyAxNS4zNDY0IDEyLjI5NDYgMTUuMjk5NiAxMi4yOTQ2IDE1LjI0MUwxMi4yOTIgMTQuODI4MkMxMy4zMTE1IDE0LjczODQgMTQuMDQwNyAxNC4xOTI4IDE0LjA0MDcgMTMuMjEzNkMxNC4wMzk0IDEyLjMxIDEzLjQ2NTIgMTEuOTA2MyAxMi42MjE0IDExLjY5OFpNMTEuNzI4MiAxMS40ODcxQzExLjY1NTMgMTEuNDY2MiAxMS41OTQxIDExLjQ0NjcgMTEuNTMyOSAxMS40MjJDMTEuMDkyOCAxMS4yNjMxIDEwLjg4ODMgMTEuMDA2NiAxMC44ODgzIDEwLjY3NTlDMTAuODg4MyAxMC4yMDMyIDExLjI0NjQgOS45MzM2OCAxMS43MjgyIDkuODcyNDhWMTEuNDg3MVpNMTIuMjkwNyAxNC4xNDg1VjEyLjQwNzZDMTIuMzMxMSAxMi40MTk0IDEyLjM2NzUgMTIuNDI4NSAxMi40MDUzIDEyLjQzNjNDMTMuMDIxMiAxMi42MjM4IDEzLjIyODIgMTIuODg0MiAxMy4yMjgyIDEzLjI4MzlDMTMuMjI4MiAxMy43OTMxIDEyLjg0NTQgMTQuMDk5IDEyLjI5MDcgMTQuMTQ4NVpcIiAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBQdXJjaGFzZWRJbWFnZUljb24gPSAoeyB3aWR0aCwgaGVpZ2h0IH06IElJY29ucykgPT4gKFxuICA8c3ZnXG4gICAgd2lkdGg9e3dpZHRoIHx8ICcxZW0nfVxuICAgIGhlaWdodD17aGVpZ2h0IHx8ICcxZW0nfVxuICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICA+XG4gICAgPHBhdGggZD1cIk03LjUgNi43NUM3LjUgNi43NSA3LjUgMi4yNSAxMiAyLjI1QzE2LjUgMi4yNSAxNi41IDYuNzUgMTYuNSA2Ljc1TTMuNzUgNi43NVYyMS43NUgyMC4yNVY2Ljc1SDMuNzVaXCIgLz5cbiAgICA8cGF0aCBkPVwiTTEyLjQ4MTYgMTMuOTY2TDExLjU2OTkgMTUuMTI4NUwxMS4wODgzIDE0LjUxNDVDMTEuMDc5NSAxNC41MDMyIDExLjA2ODMgMTQuNDk0MiAxMS4wNTU1IDE0LjQ4OEMxMS4wNDI3IDE0LjQ4MTcgMTEuMDI4NyAxNC40Nzg1IDExLjAxNDUgMTQuNDc4NUMxMS4wMDAyIDE0LjQ3ODUgMTAuOTg2MiAxNC40ODE3IDEwLjk3MzQgMTQuNDg4QzEwLjk2MDYgMTQuNDk0MiAxMC45NDk0IDE0LjUwMzIgMTAuOTQwNiAxNC41MTQ1TDkuNzcxMDkgMTYuMDA1MUM5Ljc2MDI3IDE2LjAxODkgOS43NTM1NiAxNi4wMzU1IDkuNzUxNzIgMTYuMDUyOUM5Ljc0OTg4IDE2LjA3MDQgOS43NTI5OSAxNi4wODggOS43NjA2OSAxNi4xMDM4QzkuNzY4MzkgMTYuMTE5NSA5Ljc4MDM4IDE2LjEzMjggOS43OTUyNyAxNi4xNDIxQzkuODEwMTcgMTYuMTUxNCA5LjgyNzM3IDE2LjE1NjMgOS44NDQ5MiAxNi4xNTYySDE0LjE1NjJDMTQuMjM0OCAxNi4xNTYyIDE0LjI3ODEgMTYuMDY2IDE0LjIzMDEgMTYuMDA1MUwxMi42MzA1IDEzLjk2NkMxMi42MjE2IDEzLjk1NDggMTIuNjEwMyAxMy45NDU3IDEyLjU5NzQgMTMuOTM5NUMxMi41ODQ1IDEzLjkzMzMgMTIuNTcwNCAxMy45MyAxMi41NTYxIDEzLjkzQzEyLjU0MTcgMTMuOTMgMTIuNTI3NiAxMy45MzMzIDEyLjUxNDcgMTMuOTM5NUMxMi41MDE4IDEzLjk0NTcgMTIuNDkwNSAxMy45NTQ4IDEyLjQ4MTYgMTMuOTY2Wk0xMC4yMTg4IDEzLjE3OTdDMTAuMjE4OCAxMy4zMDQgMTAuMjY4MSAxMy40MjMyIDEwLjM1NiAxMy41MTExQzEwLjQ0NCAxMy41OTkxIDEwLjU2MzIgMTMuNjQ4NCAxMC42ODc1IDEzLjY0ODRDMTAuODExOCAxMy42NDg0IDEwLjkzMSAxMy41OTkxIDExLjAxOSAxMy41MTExQzExLjEwNjkgMTMuNDIzMiAxMS4xNTYyIDEzLjMwNCAxMS4xNTYyIDEzLjE3OTdDMTEuMTU2MiAxMy4wNTU0IDExLjEwNjkgMTIuOTM2MSAxMS4wMTkgMTIuODQ4MkMxMC45MzEgMTIuNzYwMyAxMC44MTE4IDEyLjcxMDkgMTAuNjg3NSAxMi43MTA5QzEwLjU2MzIgMTIuNzEwOSAxMC40NDQgMTIuNzYwMyAxMC4zNTYgMTIuODQ4MkMxMC4yNjgxIDEyLjkzNjEgMTAuMjE4OCAxMy4wNTU0IDEwLjIxODggMTMuMTc5N1pNMTYuMDE0OCAxMS4zODJMMTMuNDkzIDguODYwMTZDMTMuNDIyNyA4Ljc4OTg0IDEzLjMyNzcgOC43NSAxMy4yMjgxIDguNzVIOC4yNUM4LjA0MjU4IDguNzUgNy44NzUgOC45MTc1OCA3Ljg3NSA5LjEyNVYxOC44NzVDNy44NzUgMTkuMDgyNCA4LjA0MjU4IDE5LjI1IDguMjUgMTkuMjVIMTUuNzVDMTUuOTU3NCAxOS4yNSAxNi4xMjUgMTkuMDgyNCAxNi4xMjUgMTguODc1VjExLjY0OEMxNi4xMjUgMTEuNTQ4NCAxNi4wODUyIDExLjQ1MjMgMTYuMDE0OCAxMS4zODJaTTE1LjI2MDIgMTEuODIwM0gxMy4wNTQ3VjkuNjE0ODRMMTUuMjYwMiAxMS44MjAzWk0xNS4yODEyIDE4LjQwNjJIOC43MTg3NVY5LjU5Mzc1SDEyLjI1NzhWMTIuMTI1QzEyLjI1NzggMTIuMjU1NSAxMi4zMDk3IDEyLjM4MDcgMTIuNDAyIDEyLjQ3M0MxMi40OTQzIDEyLjU2NTMgMTIuNjE5NSAxMi42MTcyIDEyLjc1IDEyLjYxNzJIMTUuMjgxMlYxOC40MDYyWlwiIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IFB1cmNoYXNlZFZpZGVvSWNvbiA9ICh7IHdpZHRoLCBoZWlnaHQgfTogSUljb25zKSA9PiAoXG4gIDxzdmdcbiAgICB3aWR0aD17d2lkdGggfHwgJzFlbSd9XG4gICAgaGVpZ2h0PXtoZWlnaHQgfHwgJzFlbSd9XG4gICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gID5cbiAgICA8cGF0aCBkPVwiTTcuNSA2Ljc1QzcuNSA2Ljc1IDcuNSAyLjI1IDEyIDIuMjVDMTYuNSAyLjI1IDE2LjUgNi43NSAxNi41IDYuNzVNMy43NSA2Ljc1VjIxLjc1SDIwLjI1VjYuNzVIMy43NVpcIiAvPlxuICAgIDxwYXRoIGQ9XCJNMTIgOUM5LjI0MyA5IDcgMTEuMjQzIDcgMTRDNyAxNi43NTcgOS4yNDMgMTkgMTIgMTlDMTQuNzU3IDE5IDE3IDE2Ljc1NyAxNyAxNEMxNyAxMS4yNDMgMTQuNzU3IDkgMTIgOVpNMTIgMThDOS43OTQ1IDE4IDggMTYuMjA1NSA4IDE0QzggMTEuNzk0NSA5Ljc5NDUgMTAgMTIgMTBDMTQuMjA1NSAxMCAxNiAxMS43OTQ1IDE2IDE0QzE2IDE2LjIwNTUgMTQuMjA1NSAxOCAxMiAxOFpcIiAvPlxuICAgIDxwYXRoIGQ9XCJNMTAuNSAxNi41TDE0LjUgMTRMMTAuNSAxMS41VjE2LjVaXCIgZmlsbD1cImJsYWNrXCIgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgUHVyY2hhc2VkSXRlbUljb24gPSAoeyB3aWR0aCwgaGVpZ2h0IH06IElJY29ucykgPT4gKFxuICA8c3ZnXG4gICAgd2lkdGg9e3dpZHRoIHx8ICcxZW0nfVxuICAgIGhlaWdodD17aGVpZ2h0IHx8ICcxZW0nfVxuICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICA+XG4gICAgPHBhdGggZD1cIk0xLjUgNi40MDQ5OFYxNy42MUMxLjUgMTguMjg1IDEuOTUgMTguODcgMi42MjUgMTkuMDY1TDEyLjM3NSAyMS42NkMxMi42MTUgMjEuNzM1IDEyLjg4NSAyMS43MzUgMTMuMTI1IDIxLjY2TDIyLjg3NSAxOS4wNjVDMjMuNTUgMTguODcgMjQgMTguMjg1IDI0IDE3LjYxVjYuNDA0OThDMjQgNS43Mjk5OCAyMy41NSA1LjE0NDk4IDIyLjg3NSA0Ljk0OTk4TDEzLjEyNSAyLjMzOTk4QzEyLjg3NyAyLjI5NDk4IDEyLjYyMyAyLjI5NDk4IDEyLjM3NSAyLjMzOTk4TDIuNjI1IDQuOTQ5OThDMS45NSA1LjE0NDk4IDEuNSA1LjcyOTk4IDEuNSA2LjQwNDk4Wk0xMiAyMC4wNEwzIDE3LjY1NVY3LjQ5OTk4TDEyIDkuOTE0OThWMjAuMDRaTTMgNS45OTk5OEw2Ljc1IDQuOTk0OThMMTYuNSA3LjU4OTk4TDEyLjc1IDguNTk0OThMMyA1Ljk5OTk4Wk0yMi41IDE3LjY1NUwxMy41IDIwLjA0VjkuOTE0OThMMTYuNSA5LjA4OTk4VjEyLjc1TDE5LjUgMTEuOTU1VjguMjk0OThMMjIuNSA3LjQ5OTk4VjE3LjY1NVpNMTkuNSA2Ljc5NDk4TDkuNzUgNC4xOTk5OEwxMi43NSAzLjQwNDk4TDIyLjUgNS45OTk5OEwxOS41IDYuNzk0OThaXCIgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgTXlQcm9kdWN0SWNvbiA9ICh7IHdpZHRoLCBoZWlnaHQgfTogSUljb25zKSA9PiAoXG4gIDxzdmdcbiAgICB3aWR0aD17d2lkdGggfHwgJzFlbSd9XG4gICAgaGVpZ2h0PXtoZWlnaHQgfHwgJzFlbSd9XG4gICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gID5cbiAgICA8cGF0aFxuICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICBkPVwiTTEuNSA2LjQwNTAzVjE3LjYxQzEuNSAxOC4yODUgMS45NSAxOC44NyAyLjYyNSAxOS4wNjVMMTIuMzc1IDIxLjY2QzEyLjYxNSAyMS43MzUgMTIuODg1IDIxLjczNSAxMy4xMjUgMjEuNjZMMjIuODc1IDE5LjA2NUMyMy41NSAxOC44NyAyNCAxOC4yODUgMjQgMTcuNjFWNi40MDUwM0MyNCA1LjczMDAzIDIzLjU1IDUuMTQ1MDMgMjIuODc1IDQuOTUwMDNMMTMuMTI1IDIuMzQwMDNDMTIuODc3IDIuMjk1MDIgMTIuNjIzIDIuMjk1MDIgMTIuMzc1IDIuMzQwMDNMMi42MjUgNC45NTAwM0MxLjk1IDUuMTQ1MDMgMS41IDUuNzMwMDMgMS41IDYuNDA1MDNaTTEyIDIwLjA0TDMgMTcuNjU1VjcuNTAwMDNMMTIgOS45MTUwM1YyMC4wNFpNMyA2LjAwMDAzTDYuNzUgNC45OTUwM0wxNi41IDcuNTkwMDNMMTIuNzUgOC41OTUwM0wzIDYuMDAwMDNaTTIyLjUgMTcuNjU1TDEzLjUgMjAuMDRWOS45MTUwM0wxNi41IDkuMDkwMDNWMTIuNzVMMTkuNSAxMS45NTVWOC4yOTUwM0wyMi41IDcuNTAwMDNWMTcuNjU1Wk0xOS41IDYuNzk1MDNMOS43NSA0LjIwMDAzTDEyLjc1IDMuNDA1MDNMMjIuNSA2LjAwMDAzTDE5LjUgNi43OTUwM1pcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IFZpZGVvc0ljb24gPSAoeyB3aWR0aCwgaGVpZ2h0IH06IElJY29ucykgPT4gKFxuICA8c3ZnXG4gICAgd2lkdGg9e3dpZHRoIHx8ICcxZW0nfVxuICAgIGhlaWdodD17aGVpZ2h0IHx8ICcxZW0nfVxuICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgIHZpZXdCb3g9XCIwIDAgMzAgMzFcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICA+XG4gICAgPHBhdGggZD1cIk0yMi41MDAyIDkuMTQ0MjRDMjIuNTAwMiA3Ljc2NTQ5IDIxLjM3ODkgNi42NDQyNCAyMC4wMDAyIDYuNjQ0MjRINS4wMDAxOEMzLjYyMTQzIDYuNjQ0MjQgMi41MDAxOCA3Ljc2NTQ5IDIuNTAwMTggOS4xNDQyNFYyMS42NDQyQzIuNTAwMTggMjMuMDIzIDMuNjIxNDMgMjQuMTQ0MiA1LjAwMDE4IDI0LjE0NDJIMjAuMDAwMkMyMS4zNzg5IDI0LjE0NDIgMjIuNTAwMiAyMy4wMjMgMjIuNTAwMiAyMS42NDQyVjE3LjQ3OEwyNy41MDAyIDIxLjY0NDJWOS4xNDQyNEwyMi41MDAyIDEzLjMxMDVWOS4xNDQyNFpNMjAuMDAyNyAyMS42NDQySDUuMDAwMThWOS4xNDQyNEgyMC4wMDAyTDIwLjAwMTQgMTUuMzkzTDIwLjAwMDIgMTUuMzk0MkwyMC4wMDE0IDE1LjM5NTVMMjAuMDAyNyAyMS42NDQyWlwiIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IFBob3Rvc0ljb24gPSAoeyB3aWR0aCwgaGVpZ2h0IH06IElJY29ucykgPT4gKFxuICA8c3ZnXG4gICAgd2lkdGg9e3dpZHRoIHx8ICcxZW0nfVxuICAgIGhlaWdodD17aGVpZ2h0IHx8ICcxZW0nfVxuICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICA+XG4gICAgPHBhdGggZD1cIk0yMS43NSAzLjc1SDIuMjVDMS44MzUxNiAzLjc1IDEuNSA0LjA4NTE2IDEuNSA0LjVWMTkuNUMxLjUgMTkuOTE0OCAxLjgzNTE2IDIwLjI1IDIuMjUgMjAuMjVIMjEuNzVDMjIuMTY0OCAyMC4yNSAyMi41IDE5LjkxNDggMjIuNSAxOS41VjQuNUMyMi41IDQuMDg1MTYgMjIuMTY0OCAzLjc1IDIxLjc1IDMuNzVaTTIwLjgxMjUgMTguNTYyNUgzLjE4NzVWMTcuNjI3M0w2LjQzMzU5IDEzLjc3NjZMOS45NTE1NiAxNy45NDg0TDE1LjQyNDIgMTEuNDYwOUwyMC44MTI1IDE3Ljg1VjE4LjU2MjVaTTIwLjgxMjUgMTUuNTIwM0wxNS41NjcyIDkuM0MxNS40OTIyIDkuMjEwOTQgMTUuMzU2MiA5LjIxMDk0IDE1LjI4MTIgOS4zTDkuOTUxNTYgMTUuNjE4OEw2LjU3NjU2IDExLjYxOEM2LjUwMTU2IDExLjUyODkgNi4zNjU2MiAxMS41Mjg5IDYuMjkwNjIgMTEuNjE4TDMuMTg3NSAxNS4yOTc3VjUuNDM3NUgyMC44MTI1VjE1LjUyMDNaTTcuMTI1IDEwLjY4NzVDNy4zOTU4NSAxMC42ODc1IDcuNjY0MDUgMTAuNjM0MiA3LjkxNDI4IDEwLjUzMDVDOC4xNjQ1MiAxMC40MjY5IDguMzkxODkgMTAuMjc0OSA4LjU4MzQxIDEwLjA4MzRDOC43NzQ5MyA5Ljg5MTg5IDguOTI2ODUgOS42NjQ1MiA5LjAzMDUgOS40MTQyOEM5LjEzNDE1IDkuMTY0MDUgOS4xODc1IDguODk1ODUgOS4xODc1IDguNjI1QzkuMTg3NSA4LjM1NDE1IDkuMTM0MTUgOC4wODU5NSA5LjAzMDUgNy44MzU3MkM4LjkyNjg1IDcuNTg1NDggOC43NzQ5MyA3LjM1ODExIDguNTgzNDEgNy4xNjY1OUM4LjM5MTg5IDYuOTc1MDcgOC4xNjQ1MiA2LjgyMzE1IDcuOTE0MjggNi43MTk1QzcuNjY0MDUgNi42MTU4NSA3LjM5NTg1IDYuNTYyNSA3LjEyNSA2LjU2MjVDNi41Nzc5OSA2LjU2MjUgNi4wNTMzOSA2Ljc3OTggNS42NjY1OSA3LjE2NjU5QzUuMjc5OCA3LjU1MzM5IDUuMDYyNSA4LjA3Nzk5IDUuMDYyNSA4LjYyNUM1LjA2MjUgOS4xNzIwMSA1LjI3OTggOS42OTY2MSA1LjY2NjU5IDEwLjA4MzRDNi4wNTMzOSAxMC40NzAyIDYuNTc3OTkgMTAuNjg3NSA3LjEyNSAxMC42ODc1Wk03LjEyNSA3Ljk2ODc1QzcuNDg4MjggNy45Njg3NSA3Ljc4MTI1IDguMjYxNzIgNy43ODEyNSA4LjYyNUM3Ljc4MTI1IDguOTg4MjggNy40ODgyOCA5LjI4MTI1IDcuMTI1IDkuMjgxMjVDNi43NjE3MiA5LjI4MTI1IDYuNDY4NzUgOC45ODgyOCA2LjQ2ODc1IDguNjI1QzYuNDY4NzUgOC4yNjE3MiA2Ljc2MTcyIDcuOTY4NzUgNy4xMjUgNy45Njg3NVpcIiAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBGZW1hbGVTaWduSWNvbiA9ICh7IGNvbG9yIH06IElJY29ucykgPT4gKFxuICA8c3ZnXG4gICAgd2lkdGg9XCIxNlwiXG4gICAgaGVpZ2h0PVwiMTZcIlxuICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxuICAgIGZpbGw9XCJub25lXCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgPlxuICAgIDxwYXRoXG4gICAgICBkPVwiTTggMS4zMzMzN0M1Ljc5NCAxLjMzMzM3IDQgMy4xMjczNyA0IDUuMzMzMzdDNCA3LjMxMTM3IDUuNDQ0NjcgOC45NTQ3MSA3LjMzMzMzIDkuMjczMzdWMTEuMzMzNEg1LjMzMzMzVjEyLjY2NjdINy4zMzMzM1YxNC42NTg3SDguNjY2NjdWMTIuNjY2N0gxMC42NjY3VjExLjMzMzRIOC42NjY2N1Y5LjI3MzM3QzEwLjU1NTMgOC45NTQwNCAxMiA3LjMxMTM3IDEyIDUuMzMzMzdDMTIgMy4xMjczNyAxMC4yMDYgMS4zMzMzNyA4IDEuMzMzMzdaTTggOC4wMDAwNEM2LjUyOTMzIDguMDAwMDQgNS4zMzMzMyA2LjgwNDA0IDUuMzMzMzMgNS4zMzMzN0M1LjMzMzMzIDMuODYyNzEgNi41MjkzMyAyLjY2NjcxIDggMi42NjY3MUM5LjQ3MDY3IDIuNjY2NzEgMTAuNjY2NyAzLjg2MjcxIDEwLjY2NjcgNS4zMzMzN0MxMC42NjY3IDYuODA0MDQgOS40NzA2NyA4LjAwMDA0IDggOC4wMDAwNFpcIlxuICAgICAgZmlsbD17Y29sb3IgfHwgJ2N1cnJlbnRDb2xvcid9XG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgTWFsZVNpZ25JY29uID0gKHsgY29sb3IgfTogSUljb25zKSA9PiAoXG4gIDxzdmdcbiAgICB3aWR0aD1cIjE2XCJcbiAgICBoZWlnaHQ9XCIxNlwiXG4gICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXG4gICAgZmlsbD1cIm5vbmVcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICA+XG4gICAgPHBhdGhcbiAgICAgIGQ9XCJNMTMuMzMzNCA3LjMzMzI5VjIuNjY2NjNIOC42NjY3MUwxMC41Mjg3IDQuNTI4NjNMNy42NDczNyA3LjQwOTk2QzYuOTcyNiA2LjkyNjYgNi4xNjM0MSA2LjY2NjY3IDUuMzMzMzcgNi42NjY2M0MzLjEyNzM3IDYuNjY2NjMgMS4zMzMzNyA4LjQ2MDYzIDEuMzMzMzcgMTAuNjY2NkMxLjMzMzM3IDEyLjg3MjYgMy4xMjczNyAxNC42NjY2IDUuMzMzMzcgMTQuNjY2NkM3LjUzOTM3IDE0LjY2NjYgOS4zMzMzNyAxMi44NzI2IDkuMzMzMzcgMTAuNjY2NkM5LjMzMzM3IDkuODAzOTYgOS4wNTYwNCA5LjAwNjYzIDguNTkwMDQgOC4zNTI2M0wxMS40NzE0IDUuNDcxMjlMMTMuMzMzNCA3LjMzMzI5Wk01LjMzMzM3IDEzLjMzMzNDMy44NjI3MSAxMy4zMzMzIDIuNjY2NzEgMTIuMTM3MyAyLjY2NjcxIDEwLjY2NjZDMi42NjY3MSA5LjE5NTk2IDMuODYyNzEgNy45OTk5NiA1LjMzMzM3IDcuOTk5OTZDNi44MDQwNCA3Ljk5OTk2IDguMDAwMDQgOS4xOTU5NiA4LjAwMDA0IDEwLjY2NjZDOC4wMDAwNCAxMi4xMzczIDYuODA0MDQgMTMuMzMzMyA1LjMzMzM3IDEzLjMzMzNaXCJcbiAgICAgIGZpbGw9e2NvbG9yIHx8ICdjdXJyZW50Q29sb3InfVxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IFRyYW5zZ2VuZGVySWNvbiA9ICh7IGNvbG9yIH06IElJY29ucykgPT4gKFxuICA8c3ZnXG4gICAgd2lkdGg9XCIxNlwiXG4gICAgaGVpZ2h0PVwiMTZcIlxuICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxuICAgIGZpbGw9XCJub25lXCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgPlxuICAgIDxwYXRoXG4gICAgICBkPVwiTTYuNjY2NjUgMTAuMzMzM0M3LjU1MDcgMTAuMzMzMyA4LjM5ODU1IDkuOTgyMSA5LjAyMzY3IDkuMzU2OThDOS42NDg3OSA4LjczMTg1IDkuOTk5OTggNy44ODQwMSA5Ljk5OTk4IDYuOTk5OTVDOS45OTk5OCA2LjExNTkgOS42NDg3OSA1LjI2ODA1IDkuMDIzNjcgNC42NDI5M0M4LjM5ODU1IDQuMDE3ODEgNy41NTA3IDMuNjY2NjIgNi42NjY2NSAzLjY2NjYyQzUuNzgyNTkgMy42NjY2MiA0LjkzNDc0IDQuMDE3ODEgNC4zMDk2MiA0LjY0MjkzQzMuNjg0NSA1LjI2ODA1IDMuMzMzMzEgNi4xMTU5IDMuMzMzMzEgNi45OTk5NUMzLjMzMzMxIDcuODg0MDEgMy42ODQ1IDguNzMxODUgNC4zMDk2MiA5LjM1Njk4QzQuOTM0NzQgOS45ODIxIDUuNzgyNTkgMTAuMzMzMyA2LjY2NjY1IDEwLjMzMzNWMTAuMzMzM1pNMTAuNjc1MyA0LjYwOTI5QzExLjA2ODggNS4yNjkyNCAxMS4yOTMyIDYuMDE2MSAxMS4zMjg4IDYuNzgzNjJDMTEuMzY0NCA3LjU1MTEzIDExLjIxIDguMzE1NTYgMTAuODc5MiA5LjAwOTA3QzEwLjU0ODUgOS43MDI1OCAxMC4wNTE3IDEwLjMwMzcgOS40MzI5IDEwLjc1OTJDOC44MTQxIDExLjIxNDYgOC4wOTI0NSAxMS41MTAzIDcuMzMxOTggMTEuNjJMNy4zMzMzMSAxMS42NjY2VjEyLjMzMzNINy45OTk5OEM4LjE3Njc5IDEyLjMzMzMgOC4zNDYzNiAxMi40MDM1IDguNDcxMzggMTIuNTI4NUM4LjU5NjQxIDEyLjY1MzYgOC42NjY2NCAxMi44MjMxIDguNjY2NjQgMTNDOC42NjY2NCAxMy4xNzY4IDguNTk2NDEgMTMuMzQ2MyA4LjQ3MTM4IDEzLjQ3MTRDOC4zNDYzNiAxMy41OTY0IDguMTc2NzkgMTMuNjY2NiA3Ljk5OTk4IDEzLjY2NjZINy4zMzMzMVYxNC4zMzMzQzcuMzMzMzEgMTQuNTEwMSA3LjI2MzA3IDE0LjY3OTcgNy4xMzgwNSAxNC44MDQ3QzcuMDEzMDMgMTQuOTI5NyA2Ljg0MzQ2IDE1IDYuNjY2NjUgMTVDNi40ODk4MyAxNSA2LjMyMDI2IDE0LjkyOTcgNi4xOTUyNCAxNC44MDQ3QzYuMDcwMjIgMTQuNjc5NyA1Ljk5OTk4IDE0LjUxMDEgNS45OTk5OCAxNC4zMzMzVjEzLjY2NjZINS4zMzMzMUM1LjE1NjUgMTMuNjY2NiA0Ljk4NjkzIDEzLjU5NjQgNC44NjE5MSAxMy40NzE0QzQuNzM2ODggMTMuMzQ2MyA0LjY2NjY1IDEzLjE3NjggNC42NjY2NSAxM0M0LjY2NjY1IDEyLjgyMzEgNC43MzY4OCAxMi42NTM2IDQuODYxOTEgMTIuNTI4NUM0Ljk4NjkzIDEyLjQwMzUgNS4xNTY1IDEyLjMzMzMgNS4zMzMzMSAxMi4zMzMzSDUuOTk5OThWMTEuNjY2NkM1Ljk5OTk4IDExLjY1MDYgNS45OTk5OCAxMS42MzUzIDYuMDAxMzEgMTEuNjJDNC44MzU0NSAxMS40NDkxIDMuNzc3MzIgMTAuODQzNyAzLjAzOTI2IDkuOTI1MThDMi4zMDEyIDkuMDA2NjYgMS45Mzc4MSA3Ljg0Mjk5IDIuMDIyMDEgNi42Njc2OUMyLjEwNjIyIDUuNDkyMzkgMi42MzE3OCA0LjM5MjQyIDMuNDkzMjUgMy41ODg0OUM0LjM1NDcxIDIuNzg0NTcgNS40ODgzNCAyLjMzNjE3IDYuNjY2NjUgMi4zMzMyOUM3LjgzOTA2IDIuMzMxODYgOC45Njg4MSAyLjc3MzA0IDkuODI5OTggMy41Njg2MkwxMS4wNjMzIDIuMzM1MjlIMTAuMDA2NkM5LjgyOTgzIDIuMzM1MjkgOS42NjAyNiAyLjI2NTA1IDkuNTM1MjQgMi4xNDAwMkM5LjQxMDIyIDIuMDE1IDkuMzM5OTggMS44NDU0MyA5LjMzOTk4IDEuNjY4NjJDOS4zMzk5OCAxLjQ5MTgxIDkuNDEwMjIgMS4zMjIyNCA5LjUzNTI0IDEuMTk3MjJDOS42NjAyNiAxLjA3MjE5IDkuODI5ODMgMS4wMDE5NSAxMC4wMDY2IDEuMDAxOTVIMTIuNjczM0MxMi44NTAxIDEuMDAxOTUgMTMuMDE5NyAxLjA3MjE5IDEzLjE0NDcgMS4xOTcyMkMxMy4yNjk3IDEuMzIyMjQgMTMuMzQgMS40OTE4MSAxMy4zNCAxLjY2ODYyVjQuMzM1MjlDMTMuMzQgNC41MTIxIDEzLjI2OTcgNC42ODE2NyAxMy4xNDQ3IDQuODA2NjlDMTMuMDE5NyA0LjkzMTcyIDEyLjg1MDEgNS4wMDE5NSAxMi42NzMzIDUuMDAxOTVDMTIuNDk2NSA1LjAwMTk1IDEyLjMyNjkgNC45MzE3MiAxMi4yMDE5IDQuODA2NjlDMTIuMDc2OSA0LjY4MTY3IDEyLjAwNjYgNC41MTIxIDEyLjAwNjYgNC4zMzUyOVYzLjI3Nzk1TDEwLjY3NiA0LjYwOTI5SDEwLjY3NTNaXCJcbiAgICAgIGZpbGw9e2NvbG9yIHx8ICdjdXJyZW50Q29sb3InfVxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IFRva2Vuc0ljb24gPSAoKSA9PiAoXG4gIDxzdmdcbiAgICB3aWR0aD1cIjI1XCJcbiAgICBoZWlnaHQ9XCIyNFwiXG4gICAgdmlld0JveD1cIjAgMCAyNSAyNFwiXG4gICAgZmlsbD1cIm5vbmVcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICA+XG4gICAgPHBhdGhcbiAgICAgIGQ9XCJNOS44NTAxIDEwQzkuNTg0ODggMTAgOS4zMzA1MyAxMC4xMDU0IDkuMTQyOTkgMTAuMjkyOUM4Ljk1NTQ1IDEwLjQ4MDQgOC44NTAxIDEwLjczNDggOC44NTAxIDExVjEzQzguODUwMSAxMy4yNjUyIDguOTU1NDUgMTMuNTE5NiA5LjE0Mjk5IDEzLjcwNzFDOS4zMzA1MyAxMy44OTQ2IDkuNTg0ODggMTQgOS44NTAxIDE0QzEwLjExNTMgMTQgMTAuMzY5NyAxMy44OTQ2IDEwLjU1NzIgMTMuNzA3MUMxMC43NDQ3IDEzLjUxOTYgMTAuODUwMSAxMy4yNjUyIDEwLjg1MDEgMTNWMTFDMTAuODUwMSAxMC43MzQ4IDEwLjc0NDcgMTAuNDgwNCAxMC41NTcyIDEwLjI5MjlDMTAuMzY5NyAxMC4xMDU0IDEwLjExNTMgMTAgOS44NTAxIDEwWk0yMS44NTAxIDExQzIyLjExNTMgMTEgMjIuMzY5NyAxMC44OTQ2IDIyLjU1NzIgMTAuNzA3MUMyMi43NDQ3IDEwLjUxOTYgMjIuODUwMSAxMC4yNjUyIDIyLjg1MDEgMTBWNkMyMi44NTAxIDUuNzM0NzggMjIuNzQ0NyA1LjQ4MDQzIDIyLjU1NzIgNS4yOTI4OUMyMi4zNjk3IDUuMTA1MzYgMjIuMTE1MyA1IDIxLjg1MDEgNUgzLjg1MDFDMy41ODQ4OCA1IDMuMzMwNTMgNS4xMDUzNiAzLjE0Mjk5IDUuMjkyODlDMi45NTU0NSA1LjQ4MDQzIDIuODUwMSA1LjczNDc4IDIuODUwMSA2VjEwQzIuODUwMSAxMC4yNjUyIDIuOTU1NDUgMTAuNTE5NiAzLjE0Mjk5IDEwLjcwNzFDMy4zMzA1MyAxMC44OTQ2IDMuNTg0ODggMTEgMy44NTAxIDExQzQuMTE1MzEgMTEgNC4zNjk2NyAxMS4xMDU0IDQuNTU3MiAxMS4yOTI5QzQuNzQ0NzQgMTEuNDgwNCA0Ljg1MDEgMTEuNzM0OCA0Ljg1MDEgMTJDNC44NTAxIDEyLjI2NTIgNC43NDQ3NCAxMi41MTk2IDQuNTU3MiAxMi43MDcxQzQuMzY5NjcgMTIuODk0NiA0LjExNTMxIDEzIDMuODUwMSAxM0MzLjU4NDg4IDEzIDMuMzMwNTMgMTMuMTA1NCAzLjE0Mjk5IDEzLjI5MjlDMi45NTU0NSAxMy40ODA0IDIuODUwMSAxMy43MzQ4IDIuODUwMSAxNFYxOEMyLjg1MDEgMTguMjY1MiAyLjk1NTQ1IDE4LjUxOTYgMy4xNDI5OSAxOC43MDcxQzMuMzMwNTMgMTguODk0NiAzLjU4NDg4IDE5IDMuODUwMSAxOUgyMS44NTAxQzIyLjExNTMgMTkgMjIuMzY5NyAxOC44OTQ2IDIyLjU1NzIgMTguNzA3MUMyMi43NDQ3IDE4LjUxOTYgMjIuODUwMSAxOC4yNjUyIDIyLjg1MDEgMThWMTRDMjIuODUwMSAxMy43MzQ4IDIyLjc0NDcgMTMuNDgwNCAyMi41NTcyIDEzLjI5MjlDMjIuMzY5NyAxMy4xMDU0IDIyLjExNTMgMTMgMjEuODUwMSAxM0MyMS41ODQ5IDEzIDIxLjMzMDUgMTIuODk0NiAyMS4xNDMgMTIuNzA3MUMyMC45NTU1IDEyLjUxOTYgMjAuODUwMSAxMi4yNjUyIDIwLjg1MDEgMTJDMjAuODUwMSAxMS43MzQ4IDIwLjk1NTUgMTEuNDgwNCAyMS4xNDMgMTEuMjkyOUMyMS4zMzA1IDExLjEwNTQgMjEuNTg0OSAxMSAyMS44NTAxIDExWk0yMC44NTAxIDkuMThDMjAuMjcwOSA5LjM5MDIgMTkuNzcwNiA5Ljc3MzYzIDE5LjQxNjkgMTAuMjc4MkMxOS4wNjMzIDEwLjc4MjcgMTguODczNiAxMS4zODM5IDE4Ljg3MzYgMTJDMTguODczNiAxMi42MTYxIDE5LjA2MzMgMTMuMjE3MyAxOS40MTY5IDEzLjcyMThDMTkuNzcwNiAxNC4yMjY0IDIwLjI3MDkgMTQuNjA5OCAyMC44NTAxIDE0LjgyVjE3SDEwLjg1MDFDMTAuODUwMSAxNi43MzQ4IDEwLjc0NDcgMTYuNDgwNCAxMC41NTcyIDE2LjI5MjlDMTAuMzY5NyAxNi4xMDU0IDEwLjExNTMgMTYgOS44NTAxIDE2QzkuNTg0ODggMTYgOS4zMzA1MyAxNi4xMDU0IDkuMTQyOTkgMTYuMjkyOUM4Ljk1NTQ1IDE2LjQ4MDQgOC44NTAxIDE2LjczNDggOC44NTAxIDE3SDQuODUwMVYxNC44MkM1LjQyOTI1IDE0LjYwOTggNS45Mjk2NCAxNC4yMjY0IDYuMjgzMjYgMTMuNzIxOEM2LjYzNjg3IDEzLjIxNzMgNi44MjY1NyAxMi42MTYxIDYuODI2NTcgMTJDNi44MjY1NyAxMS4zODM5IDYuNjM2ODcgMTAuNzgyNyA2LjI4MzI2IDEwLjI3ODJDNS45Mjk2NCA5Ljc3MzYzIDUuNDI5MjUgOS4zOTAyIDQuODUwMSA5LjE4VjdIOC44NTAxQzguODUwMSA3LjI2NTIyIDguOTU1NDUgNy41MTk1NyA5LjE0Mjk5IDcuNzA3MTFDOS4zMzA1MyA3Ljg5NDY0IDkuNTg0ODggOCA5Ljg1MDEgOEMxMC4xMTUzIDggMTAuMzY5NyA3Ljg5NDY0IDEwLjU1NzIgNy43MDcxMUMxMC43NDQ3IDcuNTE5NTcgMTAuODUwMSA3LjI2NTIyIDEwLjg1MDEgN0gyMC44NTAxVjkuMThaXCJcbiAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IEVhcm5pbmdJY29uID0gKCkgPT4gKFxuICA8c3ZnXG4gICAgd2lkdGg9XCIxNlwiXG4gICAgaGVpZ2h0PVwiMTZcIlxuICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgIGZpbGw9XCJub25lXCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgPlxuICAgIDxwYXRoXG4gICAgICBkPVwiTTIwLjI1IDNIMC43NVYxOEgyMC4yNVYzWk0xOC43NSAxNi41SDIuMjVWNC41SDE4Ljc1VjE2LjVaXCJcbiAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgIC8+XG4gICAgPHBhdGggZD1cIk0yMS43NSA2Ljc1VjE5LjVINC41VjIxSDIzLjI1VjYuNzVIMjEuNzVaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIC8+XG4gICAgPHBhdGhcbiAgICAgIGQ9XCJNMTAuNSAxNC4xNzhDMTIuMzYxIDE0LjE3OCAxMy44NzUgMTIuNTMxIDEzLjg3NSAxMC41MDZDMTMuODc1IDguNDgxIDEyLjM2MSA2LjgzNCAxMC41IDYuODM0QzguNjM5IDYuODM0IDcuMTI1IDguNDgxIDcuMTI1IDEwLjUwNkM3LjEyNSAxMi41MzEgOC42MzkgMTQuMTc4IDEwLjUgMTQuMTc4Wk0xMC41IDguMzM1QzExLjUzNCA4LjMzNSAxMi4zNzUgOS4zMDkgMTIuMzc1IDEwLjUwN0MxMi4zNzUgMTEuNzA1IDExLjUzNCAxMi42NzkgMTAuNSAxMi42NzlDOS40NjYgMTIuNjc5IDguNjI1IDExLjcwNSA4LjYyNSAxMC41MDdDOC42MjUgOS4zMDkgOS40NjYgOC4zMzUgMTAuNSA4LjMzNVpcIlxuICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgLz5cbiAgICA8cGF0aCBkPVwiTTMuNzUgNi4zNzVINS4yNVYxNC42MjVIMy43NVY2LjM3NVpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgLz5cbiAgICA8cGF0aCBkPVwiTTE1Ljc1IDYuMzc1SDE3LjI1VjE0LjYyNUgxNS43NVY2LjM3NVpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgUGF5b3V0UmVxdWVzdEljb24gPSAoKSA9PiAoXG4gIDxzdmdcbiAgICB3aWR0aD1cIjE2XCJcbiAgICBoZWlnaHQ9XCIxNlwiXG4gICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgZmlsbD1cIm5vbmVcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICA+XG4gICAgPHBhdGhcbiAgICAgIGQ9XCJNMjAuNjI1IDIuNjI1SDMuMzc1QzIuOTYwMTYgMi42MjUgMi42MjUgMi45NjAxNiAyLjYyNSAzLjM3NVYyMC42MjVDMi42MjUgMjEuMDM5OCAyLjk2MDE2IDIxLjM3NSAzLjM3NSAyMS4zNzVIMjAuNjI1QzIxLjAzOTggMjEuMzc1IDIxLjM3NSAyMS4wMzk4IDIxLjM3NSAyMC42MjVWMy4zNzVDMjEuMzc1IDIuOTYwMTYgMjEuMDM5OCAyLjYyNSAyMC42MjUgMi42MjVaTTE5LjY4NzUgMTMuNUgxMi4zNzVWMTAuNUgxOS42ODc1VjEzLjVaTTE5LjY4NzUgMTkuNjg3NUg0LjMxMjVWNC4zMTI1SDE5LjY4NzVWOUgxMS42MjVDMTEuMjEwMiA5IDEwLjg3NSA5LjMzNTE2IDEwLjg3NSA5Ljc1VjE0LjI1QzEwLjg3NSAxNC42NjQ4IDExLjIxMDIgMTUgMTEuNjI1IDE1SDE5LjY4NzVWMTkuNjg3NVpNMTMuNTkzOCAxMkMxMy41OTM4IDEyLjI0ODYgMTMuNjkyNSAxMi40ODcxIDEzLjg2ODMgMTIuNjYyOUMxNC4wNDQyIDEyLjgzODcgMTQuMjgyNiAxMi45Mzc1IDE0LjUzMTIgMTIuOTM3NUMxNC43Nzk5IDEyLjkzNzUgMTUuMDE4MyAxMi44Mzg3IDE1LjE5NDIgMTIuNjYyOUMxNS4zNyAxMi40ODcxIDE1LjQ2ODggMTIuMjQ4NiAxNS40Njg4IDEyQzE1LjQ2ODggMTEuNzUxNCAxNS4zNyAxMS41MTI5IDE1LjE5NDIgMTEuMzM3MUMxNS4wMTgzIDExLjE2MTMgMTQuNzc5OSAxMS4wNjI1IDE0LjUzMTIgMTEuMDYyNUMxNC4yODI2IDExLjA2MjUgMTQuMDQ0MiAxMS4xNjEzIDEzLjg2ODMgMTEuMzM3MUMxMy42OTI1IDExLjUxMjkgMTMuNTkzOCAxMS43NTE0IDEzLjU5MzggMTJaXCJcbiAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IEdyb3VwID0gKCkgPT4gKFxuICA8c3ZnXG4gICAgd2lkdGg9XCIxNlwiXG4gICAgaGVpZ2h0PVwiMTZcIlxuICAgIHZpZXdCb3g9XCIwIDAgMjUgMjRcIlxuICAgIGZpbGw9XCJub25lXCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgPlxuICAgIDxwYXRoXG4gICAgICBkPVwiTTE3LjQ1NDIgMTEuMDQ4QzE4LjA2MzIgMTAuMDEwMSAxOC4zMjYyIDguODA1MjggMTguMjA1MiA3LjYwNzk3QzE4LjAyNjIgNS44MjM5NyAxNy4wMzAyIDQuMjQ2OTcgMTUuNDAyMiAzLjE2Nzk3TDE0LjI5NzIgNC44MzM5N0MxNS40MTYyIDUuNTc1OTcgMTYuMDk3MiA2LjYzMjk3IDE2LjIxNTIgNy44MDc5N0MxNi4yNjk2IDguMzU0MDcgMTYuMjAxNiA4LjkwNTQzIDE2LjAxNjIgOS40MjE5NUMxNS44MzA3IDkuOTM4NDcgMTUuNTMyNSAxMC40MDcyIDE1LjE0MzIgMTAuNzk0TDEzLjk1MTIgMTEuOTg2TDE1LjU2OTIgMTIuNDYxQzE5LjgwMTIgMTMuNzAxIDE5Ljg1MDIgMTcuOTU3IDE5Ljg1MDIgMThIMjEuODUwMkMyMS44NTAyIDE2LjIxMSAyMC44OTQyIDEyLjcxNSAxNy40NTQyIDExLjA0OFpcIlxuICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgLz5cbiAgICA8cGF0aFxuICAgICAgZD1cIk0xMC4zNTAxIDEyQzEyLjU1NjEgMTIgMTQuMzUwMSAxMC4yMDYgMTQuMzUwMSA4QzE0LjM1MDEgNS43OTQgMTIuNTU2MSA0IDEwLjM1MDEgNEM4LjE0NDEgNCA2LjM1MDEgNS43OTQgNi4zNTAxIDhDNi4zNTAxIDEwLjIwNiA4LjE0NDEgMTIgMTAuMzUwMSAxMlpNMTAuMzUwMSA2QzExLjQ1MzEgNiAxMi4zNTAxIDYuODk3IDEyLjM1MDEgOEMxMi4zNTAxIDkuMTAzIDExLjQ1MzEgMTAgMTAuMzUwMSAxMEM5LjI0NzEgMTAgOC4zNTAxIDkuMTAzIDguMzUwMSA4QzguMzUwMSA2Ljg5NyA5LjI0NzEgNiAxMC4zNTAxIDZaTTExLjg1MDEgMTNIOC44NTAxQzUuNTQxMSAxMyAyLjg1MDEgMTUuNjkxIDIuODUwMSAxOVYyMEg0Ljg1MDFWMTlDNC44NTAxIDE2Ljc5NCA2LjY0NDEgMTUgOC44NTAxIDE1SDExLjg1MDFDMTQuMDU2MSAxNSAxNS44NTAxIDE2Ljc5NCAxNS44NTAxIDE5VjIwSDE3Ljg1MDFWMTlDMTcuODUwMSAxNS42OTEgMTUuMTU5MSAxMyAxMS44NTAxIDEzWlwiXG4gICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAvPlxuICA8L3N2Zz5cbik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgJy4vbG9hZGVyLmxlc3MnO1xuXG5jb25zdCBMb2FkZXIgPSAoeyBzcGlubmluZyA9IGZhbHNlLCBmdWxsU2NyZWVuID0gZmFsc2UgfTogYW55KSA9PiAoXG4gIDxkaXZcbiAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2xvYWRlcicsIHtcbiAgICAgIGhpZGRlbjogIXNwaW5uaW5nLFxuICAgICAgZnVsbFNjcmVlblxuICAgIH0pfVxuICA+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3YXJwcGVyXCI+XG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiIC8+ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+PGltZyBzcmM9XCIvbG9hZGluZy1pY28uZ2lmXCIgd2lkdGg9XCI2NXB4XCIgYWx0PVwiXCIgLz48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSAnYW50ZCc7XG5cbmltcG9ydCAnLi9iYW5uZXIubGVzcyc7XG5pbXBvcnQgeyBJQmFubmVyIH0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgYmFubmVyczogSUJhbm5lcltdO1xuICBzdHlsZUltYWdlOiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xuICBjbGFzc25hbWVzPzogc3RyaW5nO1xufVxuY29uc3QgcmVuZGVyQmFubmVyID0gKGJhbm5lcjogSUJhbm5lciwgc3R5bGVJbWFnZTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkgPT4ge1xuICBjb25zdCB7XG4gICAgdHlwZSwgaHJlZiwgX2lkLCBwaG90bywgY29udGVudEhUTUxcbiAgfSA9IGJhbm5lcjtcbiAgaWYgKHR5cGUgPT09ICdodG1sJyAmJiBjb250ZW50SFRNTCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1kYW5nZXJcbiAgICByZXR1cm4gPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNvbnRlbnRIVE1MIH19IHN0eWxlPXtzdHlsZUltYWdlIHx8IHt9fSAvPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGEgaHJlZj17aHJlZiB8fCAnIyd9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIiBrZXk9e19pZH0+XG4gICAgICA8aW1nXG4gICAgICAgIHNyYz17cGhvdG8gJiYgcGhvdG8udXJsfVxuICAgICAgICBhbHQ9XCJcIlxuICAgICAgICBzdHlsZT17c3R5bGVJbWFnZSB8fCB7fX1cbiAgICAgIC8+XG4gICAgPC9hPlxuICApO1xufTtcbmNvbnN0IEJhbm5lciA9ICh7IGJhbm5lcnMsIHN0eWxlSW1hZ2UsIGNsYXNzbmFtZXMgfTogSVByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAge2Jhbm5lcnMgJiYgYmFubmVycy5sZW5ndGggPiAwICYmIChcbiAgICAgIDxDYXJvdXNlbCBhdXRvcGxheSBhcnJvd3MgZG90cz17ZmFsc2V9IGVmZmVjdD1cImZhZGVcIiBjbGFzc05hbWU9e2NsYXNzbmFtZXN9PlxuICAgICAgICB7YmFubmVycy5tYXAoKGl0ZW0pID0+IChyZW5kZXJCYW5uZXIoaXRlbSwgc3R5bGVJbWFnZSlcbiAgICAgICAgKSl9XG4gICAgICA8L0Nhcm91c2VsPlxuICAgICl9XG4gIDwvZGl2PlxuKTtcblxuQmFubmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NuYW1lczogJydcbn07XG5leHBvcnQgZGVmYXVsdCBCYW5uZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSVBlcmZvcm1lciwgR0VOREVSLCBJQmFubmVyIH0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7XG4gIENhcmQsIFNwYWNlLCBSb3csIENvbCwgUGFnaW5hdGlvblxufSBmcm9tICdhbnRkJztcbmltcG9ydCB7XG4gIE1hbGVTaWduSWNvbixcbiAgRmVtYWxlU2lnbkljb24sXG4gIFRyYW5zZ2VuZGVySWNvblxufSBmcm9tICdAY29tcG9uZW50cy9jb21tb24vYmFzZS9pY29ucyc7XG5pbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgZ2VuZXJhdGVVdWlkIH0gZnJvbSAnc3JjL2xpYic7XG5pbXBvcnQge1xuICBIZWFydEZpbGxlZCxcbiAgSGVhcnRPdXRsaW5lZCxcbiAgRXllT3V0bGluZWQsXG4gIExvY2tPdXRsaW5lZFxufSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XG5pbXBvcnQgJy4vaW5kZXgubGVzcyc7XG5pbXBvcnQgeyBjaHVuayB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgQmFubmVyIGZyb20gJ0Bjb21wb25lbnRzL2NvbW1vbi9sYXlvdXQvYmFubmVyJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnQGNvbXBvbmVudHMvY29tbW9uL2Jhc2UvbG9hZGVyJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBsb2dnZWRJbj86IGJvb2xlYW47XG4gIHNldEZpbHRlcj86IEZ1bmN0aW9uO1xuICBsaW1pdD86IG51bWJlcjtcbiAgb2Zmc2V0PzogbnVtYmVyO1xuICBkYXRhOiBJUGVyZm9ybWVyW107XG4gIHRvdGFsPzogbnVtYmVyO1xuICBzdWNjZXNzPzogYm9vbGVhbjtcbiAgYmFubmVycz86IFJlY29yZDxzdHJpbmcsIElCYW5uZXJbXT47XG4gIHNlYXJjaGluZz86IGJvb2xlYW47XG4gIHRpdGxlPzogc3RyaW5nIHwgc3RyaW5nW107XG4gIG9uTGlrZT86IEZ1bmN0aW9uO1xuICBpc1BhZ2U/OiBib29sZWFuO1xuICBwbGFjZWhvbGRlckF2YXRhclVybD86IHN0cmluZztcbiAgcmVuZGVyPzogKHBlcmZvcm1lcjogSVBlcmZvcm1lcikgPT4gUmVhY3QuUmVhY3ROb2RlO1xufVxuXG5jb25zdCByZW5kZXJUaXRsZSA9IChnZW5kZXI6IEdFTkRFUiwgbmFtZTogc3RyaW5nKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwicC10aXRsZVwiPlxuICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiA1IH19PntuYW1lfTwvc3Bhbj5cbiAgICB7Z2VuZGVyID09PSAnbWFsZScgPyAoXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJhbnRpY29uXCI+XG4gICAgICAgIDxNYWxlU2lnbkljb24gLz5cbiAgICAgIDwvc3Bhbj5cbiAgICApIDogZ2VuZGVyID09PSAnZmVtYWxlJyA/IChcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFudGljb25cIj5cbiAgICAgICAgPEZlbWFsZVNpZ25JY29uIC8+XG4gICAgICA8L3NwYW4+XG4gICAgKSA6IChcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFudGljb25cIj5cbiAgICAgICAgPFRyYW5zZ2VuZGVySWNvbiAvPlxuICAgICAgPC9zcGFuPlxuICAgICl9XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgcmVuZGVyVGFncyA9ICh0YWdzOiBzdHJpbmdbXSkgPT4gKFxuICA8U3BhY2UgY2xhc3NOYW1lPVwidGFnc1wiIHdyYXAgc2l6ZT17WzUsIDJdfT5cbiAgICB7dGFncy5tYXAoKHRhZykgPT4gKFxuICAgICAgPExpbmtcbiAgICAgICAgaHJlZj17eyBwYXRobmFtZTogJy90YWcnLCBxdWVyeTogeyB0YWdzOiB0YWcgfSB9fVxuICAgICAgICBrZXk9e3RhZ31cbiAgICAgICAgYXM9e2AvdGFnLyR7dGFnfWB9XG4gICAgICA+XG4gICAgICAgIDxhPlxuICAgICAgICAgICNcbiAgICAgICAgICB7dGFnfVxuICAgICAgICA8L2E+XG4gICAgICA8L0xpbms+XG4gICAgKSl9XG4gIDwvU3BhY2U+XG4pO1xuXG5pbnRlcmZhY2UgSUdyaWRDYXJkIHtcbiAgcGVyZm9ybWVyOiBJUGVyZm9ybWVyO1xuICBsb2dnZWRJbjogYm9vbGVhbjtcbiAgb25MaWtlOiBhbnk7XG4gIGNsYXNzTmFtZTogc3RyaW5nO1xuICBwbGFjZWhvbGRlckF2YXRhclVybDogc3RyaW5nO1xufVxuZXhwb3J0IGNvbnN0IEdyaWRDYXJkID0gKHtcbiAgcGVyZm9ybWVyLFxuICBsb2dnZWRJbixcbiAgb25MaWtlLFxuICBjbGFzc05hbWUsXG4gIHBsYWNlaG9sZGVyQXZhdGFyVXJsXG59OiBJR3JpZENhcmQpID0+IHtcbiAgY29uc3QgeyBpc09ubGluZSwgc3RyZWFtaW5nU3RhdHVzIH0gPSBwZXJmb3JtZXI7XG4gIGNvbnN0IHN0YXR1c0NsYXNzTmFtZXMgPSBbJ3Atc3RhdHVzJ107XG4gIGxldCBzdGF0dXMgPSAnb2ZmbGluZSc7XG4gIGlmIChpc09ubGluZSkge1xuICAgIHN3aXRjaCAoc3RyZWFtaW5nU3RhdHVzKSB7XG4gICAgICBjYXNlICdwcml2YXRlJzpcbiAgICAgICAgc3RhdHVzQ2xhc3NOYW1lcy5wdXNoKCdwcml2YXRlJyk7XG4gICAgICAgIHN0YXR1cyA9ICdwcml2YXRlIGNoYXQnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2dyb3VwJzpcbiAgICAgICAgc3RhdHVzQ2xhc3NOYW1lcy5wdXNoKCdncm91cCcpO1xuICAgICAgICBzdGF0dXMgPSAnZ3JvdXAgY2hhdCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncHVibGljJzpcbiAgICAgICAgc3RhdHVzID0gJ2xpdmUnO1xuICAgICAgICBzdGF0dXNDbGFzc05hbWVzLnB1c2goJ29ubGluZScpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHN0YXR1cyA9ICdvbmxpbmUnO1xuICAgICAgICBzdGF0dXNDbGFzc05hbWVzLnB1c2goJ29ubGluZScpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc3RhdHVzQ2xhc3NOYW1lcy5wdXNoKCdvZmZsaW5lJyk7XG4gIH1cbiAgY29uc3QgZGVmYXVsdFBsYWNlaG9sZGVyQXZhdGFyVXJsID0gcGxhY2Vob2xkZXJBdmF0YXJVcmwgfHwgJy9kZWZhdWx0LXVzZXItaWNvbi5wbmcnO1xuXG4gIHJldHVybiAoXG4gICAgPENhcmQuR3JpZCBjbGFzc05hbWU9e2NsYXNzTmFtZX0ga2V5PXtwZXJmb3JtZXIuX2lkfSBob3ZlcmFibGU9e2ZhbHNlfT5cbiAgICAgIHtwZXJmb3JtZXIuaXNCbG9ja2VkICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9ja2VkLXRodW1iXCI+XG4gICAgICAgICAgPExvY2tPdXRsaW5lZCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8TGlua1xuICAgICAgICBocmVmPXt7XG4gICAgICAgICAgcGF0aG5hbWU6ICcvc3RyZWFtJyxcbiAgICAgICAgICBxdWVyeTogeyBwZXJmb3JtZXI6IEpTT04uc3RyaW5naWZ5KHBlcmZvcm1lcikgfVxuICAgICAgICB9fVxuICAgICAgICBhcz17YC9wcm9maWxlLyR7cGVyZm9ybWVyLnVzZXJuYW1lfWB9XG4gICAgICA+XG4gICAgICAgIDxhPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGVyZm9ybWVyLWF2YXRhclwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWFnZS1wZXJmb3JtZXJcIlxuICAgICAgICAgICAgICBzcmM9e1xuICAgICAgICAgICAgICAgIHR5cGVvZiBwZXJmb3JtZXIuYXZhdGFyID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgICYmIHBlcmZvcm1lci5hdmF0YXIubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgPyBwZXJmb3JtZXIuYXZhdGFyXG4gICAgICAgICAgICAgICAgICA6IGRlZmF1bHRQbGFjZWhvbGRlckF2YXRhclVybFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdGF0dXNDbGFzc05hbWVzLmpvaW4oJyAnKX0+e3N0YXR1c308L3NwYW4+XG4gICAgICAgICAgICB7cmVuZGVyVGl0bGUocGVyZm9ybWVyLmdlbmRlciwgcGVyZm9ybWVyLnVzZXJuYW1lKX1cbiAgICAgICAgICAgIHtwZXJmb3JtZXI/LnN0YXRzPy52aWV3cyA+IDAgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtdmlld2VyXCI+XG4gICAgICAgICAgICAgICAgPEV5ZU91dGxpbmVkIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiA1IH19IC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+e3BlcmZvcm1lci5zdGF0cy52aWV3c308L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwZXJmb3JtZXItYm90dG9tXCI+XG4gICAgICAgIDxSb3cganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIj5cbiAgICAgICAgICA8Q29sPlxuICAgICAgICAgICAgPGRpdj57cGVyZm9ybWVyLnRhZ3MgJiYgcmVuZGVyVGFncyhwZXJmb3JtZXIudGFncyl9PC9kaXY+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbD5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgYXJpYS1oaWRkZW5cbiAgICAgICAgICAgICAgaGlkZGVuPXshbG9nZ2VkSW59XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtZmF2b3JpdGVcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkxpa2UocGVyZm9ybWVyKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3BlcmZvcm1lci5pc0Zhdm9yaXRlID8gKFxuICAgICAgICAgICAgICAgIDxIZWFydEZpbGxlZCBjbGFzc05hbWU9XCJpY29uXCIgLz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8SGVhcnRPdXRsaW5lZCBjbGFzc05hbWU9XCJpY29uXCIgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dC1tZVwiPntwZXJmb3JtZXI/LmFib3V0TWV9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0NhcmQuR3JpZD5cbiAgKTtcbn07XG5cbmNvbnN0IFBlcmZvcm1lckdyaWQgPSAoe1xuICBkYXRhLFxuICBzZWFyY2hpbmcsXG4gIHN1Y2Nlc3MsXG4gIHRpdGxlLFxuICBvbkxpa2UsXG4gIGxvZ2dlZEluLFxuICBpc1BhZ2UsXG4gIG9mZnNldCxcbiAgbGltaXQsXG4gIHRvdGFsLFxuICBzZXRGaWx0ZXIsXG4gIHBsYWNlaG9sZGVyQXZhdGFyVXJsLFxuICBiYW5uZXJzLFxuICByZW5kZXJcbn06IElQcm9wcykgPT4ge1xuICBjb25zdCB7IHRvcEJhbm5lcnMsIHJpZ2h0QmFubmVycywgYm90dG9tQmFubmVycyB9ID0gYmFubmVycztcbiAgY29uc3QgUm93R3JpZCA9ICh7IGRhdGFTb3VyY2UgfTogeyBkYXRhU291cmNlOiBJUGVyZm9ybWVyW10gfSkgPT4gKFxuICAgIDxSb3cgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgIHtkYXRhU291cmNlXG4gICAgICAgICYmIGRhdGFTb3VyY2UubGVuZ3RoID4gMFxuICAgICAgICAmJiBkYXRhU291cmNlLm1hcCgocGVyZm9ybWVyOiBJUGVyZm9ybWVyKSA9PiAoXG4gICAgICAgICAgPEdyaWRDYXJkXG4gICAgICAgICAgICBwbGFjZWhvbGRlckF2YXRhclVybD17cGxhY2Vob2xkZXJBdmF0YXJVcmx9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwZXJmb3JtZXItYm94XCJcbiAgICAgICAgICAgIGtleT17cGVyZm9ybWVyLl9pZH1cbiAgICAgICAgICAgIHBlcmZvcm1lcj17cGVyZm9ybWVyfVxuICAgICAgICAgICAgbG9nZ2VkSW49e2xvZ2dlZElufVxuICAgICAgICAgICAgb25MaWtlPXtvbkxpa2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgPC9Sb3c+XG4gICk7XG5cbiAgY29uc3QgcmVuZGVyR3JpZCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGxlbmd0aCB9ID0gZGF0YTtcbiAgICBpZiAobGVuZ3RoIDw9IDEyKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Um93IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAge3JpZ2h0QmFubmVycyAmJiByaWdodEJhbm5lcnMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxDb2wgbGc9ezE2fSBtZD17MTZ9IHhzPXsyNH0+XG4gICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgIHtkYXRhXG4gICAgICAgICAgICAgICAgICAgICYmIGRhdGEubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICAmJiBkYXRhLm1hcCgocGVyZm9ybWVyOiBJUGVyZm9ybWVyKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWRDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlckF2YXRhclVybD17cGxhY2Vob2xkZXJBdmF0YXJVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwZXJmb3JtZXItYm94IHBlcmZvcm1lci1ib3gtNC1pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cGVyZm9ybWVyLl9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcmZvcm1lcj17cGVyZm9ybWVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VkSW49e2xvZ2dlZElufVxuICAgICAgICAgICAgICAgICAgICAgICAgb25MaWtlPXsoKSA9PiBvbkxpa2UocGVyZm9ybWVyKX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDxDb2wgbGc9ezh9IG1kPXs4fSB4cz17MjR9PlxuICAgICAgICAgICAgICAgIDxCYW5uZXJcbiAgICAgICAgICAgICAgICAgIGNsYXNzbmFtZXM9XCJyaWdodC1iYW5uZXJzXCJcbiAgICAgICAgICAgICAgICAgIGJhbm5lcnM9e3JpZ2h0QmFubmVyc31cbiAgICAgICAgICAgICAgICAgIHN0eWxlSW1hZ2U9e3sgcGFkZGluZzogJzEwcHgnLCB3aWR0aDogJzEwMCUnIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgJiYgZGF0YS5sZW5ndGggPiAwXG4gICAgICAgICAgICAmJiBkYXRhLm1hcCgocGVyZm9ybWVyOiBJUGVyZm9ybWVyKSA9PiAoXG4gICAgICAgICAgICAgIDxHcmlkQ2FyZFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyQXZhdGFyVXJsPXtwbGFjZWhvbGRlckF2YXRhclVybH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwZXJmb3JtZXItYm94XCJcbiAgICAgICAgICAgICAgICBrZXk9e3BlcmZvcm1lci5faWR9XG4gICAgICAgICAgICAgICAgcGVyZm9ybWVyPXtwZXJmb3JtZXJ9XG4gICAgICAgICAgICAgICAgbG9nZ2VkSW49e2xvZ2dlZElufVxuICAgICAgICAgICAgICAgIG9uTGlrZT17KCkgPT4gb25MaWtlKHBlcmZvcm1lcil9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKVxuICAgICAgICAgICl9XG4gICAgICAgIDwvUm93PlxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGxlbmd0aCA+IDEyICYmIGxlbmd0aCA8PSAyNCkge1xuICAgICAgY29uc3QgZGF0YUNodW5rID0gY2h1bmsoZGF0YSwgMTIpO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICB7cmlnaHRCYW5uZXJzICYmIHJpZ2h0QmFubmVycy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPFJvdyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgIDxDb2wgbGc9ezE2fSBtZD17MTZ9IHhzPXsyNH0+XG4gICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICB7ZGF0YUNodW5rWzBdXG4gICAgICAgICAgICAgICAgICAgICAgJiYgZGF0YUNodW5rWzBdLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAmJiBkYXRhQ2h1bmtbMF0ubWFwKChwZXJmb3JtZXI6IElQZXJmb3JtZXIpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkQ2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlckF2YXRhclVybD17cGxhY2Vob2xkZXJBdmF0YXJVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBlcmZvcm1lci1ib3ggcGVyZm9ybWVyLWJveC00LWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3BlcmZvcm1lci5faWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBlcmZvcm1lcj17cGVyZm9ybWVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dnZWRJbj17bG9nZ2VkSW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uTGlrZT17KCkgPT4gb25MaWtlKHBlcmZvcm1lcil9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPENvbCBsZz17OH0gbWQ9ezh9IHhzPXsyNH0+XG4gICAgICAgICAgICAgICAgICB7cmlnaHRCYW5uZXJzICYmIHJpZ2h0QmFubmVycy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgPEJhbm5lclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzbmFtZXM9XCJyaWdodC1iYW5uZXJzXCJcbiAgICAgICAgICAgICAgICAgICAgICBiYW5uZXJzPXtyaWdodEJhbm5lcnN9XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGVJbWFnZT17eyBwYWRkaW5nOiAnMTBweCcsIHdpZHRoOiAnMTAwJScgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICA8Um93R3JpZCBkYXRhU291cmNlPXtkYXRhQ2h1bmtbMV19IC8+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFJvd0dyaWQgZGF0YVNvdXJjZT17ZGF0YX0gLz5cbiAgICAgICAgICApfVxuICAgICAgICA8Lz5cbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChsZW5ndGggPiAyNCAmJiBsZW5ndGggPD0gMzYpIHtcbiAgICAgIGNvbnN0IGRhdGFDaHVuayA9IGNodW5rKGRhdGEsIDEyKTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPFJvd0dyaWQgZGF0YVNvdXJjZT17ZGF0YUNodW5rWzBdfSAvPlxuICAgICAgICAgIHtyaWdodEJhbm5lcnMgJiYgcmlnaHRCYW5uZXJzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICA8Um93IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAgICAgIDxDb2wgeGw9ezE2fSBsZz17MTh9IG1kPXsxOH0geHM9ezI0fT5cbiAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAge2RhdGFDaHVua1sxXVxuICAgICAgICAgICAgICAgICAgICAmJiBkYXRhQ2h1bmtbMV0ubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICAmJiBkYXRhQ2h1bmtbMV0ubWFwKChwZXJmb3JtZXI6IElQZXJmb3JtZXIpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZENhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyQXZhdGFyVXJsPXtwbGFjZWhvbGRlckF2YXRhclVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBlcmZvcm1lci1ib3ggcGVyZm9ybWVyLWJveC00LWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwZXJmb3JtZXIuX2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyZm9ybWVyPXtwZXJmb3JtZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZWRJbj17bG9nZ2VkSW59XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkxpa2U9eygpID0+IG9uTGlrZShwZXJmb3JtZXIpfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgPENvbCB4bD17OH0gbGc9ezZ9IG1kPXs2fSB4cz17MjR9PlxuICAgICAgICAgICAgICAgIDxCYW5uZXJcbiAgICAgICAgICAgICAgICAgIGNsYXNzbmFtZXM9XCJyaWdodC1iYW5uZXJzXCJcbiAgICAgICAgICAgICAgICAgIGJhbm5lcnM9e3JpZ2h0QmFubmVyc31cbiAgICAgICAgICAgICAgICAgIHN0eWxlSW1hZ2U9e3sgcGFkZGluZzogJzEwcHgnLCB3aWR0aDogJzEwMCUnIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFJvd0dyaWQgZGF0YVNvdXJjZT17ZGF0YUNodW5rWzFdfSAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPFJvd0dyaWQgZGF0YVNvdXJjZT17ZGF0YUNodW5rWzJdfSAvPlxuICAgICAgICA8Lz5cbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChsZW5ndGggPiAzNikge1xuICAgICAgY29uc3QgZGF0YUNodW5rID0gY2h1bmsoZGF0YSwgMTIpO1xuICAgICAgY29uc3QgbGFzdERhdGFDaHVuayA9IGRhdGFDaHVuay5zbGljZSgzKTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPFJvd0dyaWQgZGF0YVNvdXJjZT17ZGF0YUNodW5rWzBdfSAvPlxuICAgICAgICAgIHtyaWdodEJhbm5lcnMgJiYgcmlnaHRCYW5uZXJzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICA8Um93IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAgICAgIDxDb2wgeGw9ezE2fSBsZz17MTh9IG1kPXsxOH0geHM9ezI0fT5cbiAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAge2RhdGFDaHVua1sxXVxuICAgICAgICAgICAgICAgICAgICAmJiBkYXRhQ2h1bmtbMV0ubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICAmJiBkYXRhQ2h1bmtbMV0ubWFwKChwZXJmb3JtZXI6IElQZXJmb3JtZXIpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZENhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyQXZhdGFyVXJsPXtwbGFjZWhvbGRlckF2YXRhclVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBlcmZvcm1lci1ib3ggcGVyZm9ybWVyLWJveC00LWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwZXJmb3JtZXIuX2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyZm9ybWVyPXtwZXJmb3JtZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZWRJbj17bG9nZ2VkSW59XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkxpa2U9eygpID0+IG9uTGlrZShwZXJmb3JtZXIpfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgPENvbCB4bD17OH0gbGc9ezZ9IG1kPXs2fSB4cz17MjR9PlxuICAgICAgICAgICAgICAgIDxCYW5uZXJcbiAgICAgICAgICAgICAgICAgIGNsYXNzbmFtZXM9XCJyaWdodC1iYW5uZXJzXCJcbiAgICAgICAgICAgICAgICAgIGJhbm5lcnM9e3JpZ2h0QmFubmVyc31cbiAgICAgICAgICAgICAgICAgIHN0eWxlSW1hZ2U9e3sgcGFkZGluZzogJzEwcHgnLCB3aWR0aDogJzEwMCUnIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFJvd0dyaWQgZGF0YVNvdXJjZT17ZGF0YUNodW5rWzFdfSAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPFJvd0dyaWQgZGF0YVNvdXJjZT17ZGF0YUNodW5rWzJdfSAvPlxuICAgICAgICAgIHtsYXN0RGF0YUNodW5rLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICYmIGxhc3REYXRhQ2h1bmsubWFwKCh2KSA9PiAoXG4gICAgICAgICAgICAgIDxSb3dHcmlkIGtleT17Z2VuZXJhdGVVdWlkKCl9IGRhdGFTb3VyY2U9e3Z9IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC8+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gPD48Lz47XG4gIH07XG5cbiAgY29uc3QgYWN0aW9ucyA9IHNldEZpbHRlciAmJiB0b3RhbCA+IDBcbiAgICA/IFtcbiAgICAgIHRvdGFsID4gbGltaXQgJiYgKFxuICAgICAgICA8UGFnaW5hdGlvblxuICAgICAgICAgIGRpc2FibGVkPXtzZWFyY2hpbmd9XG4gICAgICAgICAgY3VycmVudD17TWF0aC5yb3VuZChvZmZzZXQgLyBsaW1pdCkgKyAxfVxuICAgICAgICAgIHBhZ2VTaXplPXtsaW1pdH1cbiAgICAgICAgICB0b3RhbD17dG90YWx9XG4gICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICBvbkNoYW5nZT17KHBhZ2UpID0+IHNldEZpbHRlcignb2Zmc2V0JywgKHBhZ2UgLSAxKSAqIGxpbWl0KX1cbiAgICAgICAgICBzaG93U2l6ZUNoYW5nZXI9e2ZhbHNlfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIF1cbiAgICA6IFtdO1xuXG4gIGlmIChyZW5kZXIpIHtcbiAgICAvKipcbiAgICAgKiBwbGFjZWhvbGRlckF2YXRhclVybCBwcm9wc1xuICAgICAqL1xuICAgIHJldHVybiAoXG4gICAgICA8Q2FyZFxuICAgICAgICBjbGFzc05hbWU9XCJwZXJmb3JtZXItZ3JpZFwiXG4gICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgYm9yZGVyZWQ9e2ZhbHNlfVxuICAgICAgICBob3ZlcmFibGU9e2ZhbHNlfVxuICAgICAgICBib2R5U3R5bGU9e3sgcGFkZGluZzogJzAnIH19XG4gICAgICAgIGFjdGlvbnM9e2FjdGlvbnN9XG4gICAgICA+XG4gICAgICAgIDxMb2FkZXIgc3Bpbm5pbmc9e3NlYXJjaGluZ30gLz5cbiAgICAgICAge2RhdGEubGVuZ3RoID4gMCAmJiBkYXRhLm1hcCgocGVyZm9ybWVyKSA9PiByZW5kZXIocGVyZm9ybWVyKSl9XG4gICAgICA8L0NhcmQ+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtpc1BhZ2UgJiYgdG9wQmFubmVycz8ubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDxCYW5uZXJcbiAgICAgICAgICBiYW5uZXJzPXt0b3BCYW5uZXJzfVxuICAgICAgICAgIHN0eWxlSW1hZ2U9e3sgcGFkZGluZzogJzEwcHgnLCB3aWR0aDogJzEwMCUnIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAgPENhcmRcbiAgICAgICAgY2xhc3NOYW1lPVwicGVyZm9ybWVyLWdyaWRcIlxuICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgIGJvcmRlcmVkPXtmYWxzZX1cbiAgICAgICAgaG92ZXJhYmxlPXtmYWxzZX1cbiAgICAgICAgYm9keVN0eWxlPXt7IHBhZGRpbmc6ICcwJyB9fVxuICAgICAgICBhY3Rpb25zPXthY3Rpb25zfVxuICAgICAgPlxuICAgICAgICA8TG9hZGVyIHNwaW5uaW5nPXtzZWFyY2hpbmd9IC8+XG4gICAgICAgIHtzdWNjZXNzXG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5lc3RlZC10ZXJuYXJ5XG4gICAgICAgICAgJiYgKHRvdGFsID4gMCA/IChcbiAgICAgICAgICAgIGlzUGFnZSA/IChcbiAgICAgICAgICAgICAgcmVuZGVyR3JpZCgpXG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICBkYXRhLm1hcCgocGVyZm9ybWVyKSA9PiAoXG4gICAgICAgICAgICAgICAgPEdyaWRDYXJkXG4gICAgICAgICAgICAgICAgICBrZXk9e3BlcmZvcm1lcj8uX2lkfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJBdmF0YXJVcmw9e3BsYWNlaG9sZGVyQXZhdGFyVXJsfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGVyZm9ybWVyLWJveFwiXG4gICAgICAgICAgICAgICAgICBwZXJmb3JtZXI9e3BlcmZvcm1lcn1cbiAgICAgICAgICAgICAgICAgIGxvZ2dlZEluPXtsb2dnZWRJbn1cbiAgICAgICAgICAgICAgICAgIG9uTGlrZT17KHA6IElQZXJmb3JtZXIpID0+IG9uTGlrZShwKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFudC1jYXJkLWhlYWRcIj5ObyBtb2RlbCBmb3VuZC48L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgIDwvQ2FyZD5cbiAgICAgIHtpc1BhZ2UgJiYgYm90dG9tQmFubmVycz8ubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDxCYW5uZXJcbiAgICAgICAgICBiYW5uZXJzPXtib3R0b21CYW5uZXJzfVxuICAgICAgICAgIHN0eWxlSW1hZ2U9e3sgcGFkZGluZzogJzEwcHgnLCB3aWR0aDogJzEwMCUnIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblBlcmZvcm1lckdyaWQuZGVmYXVsdFByb3BzID0ge1xuICBsb2dnZWRJbjogZmFsc2UsXG4gIHNldEZpbHRlcjogbnVsbCxcbiAgbGltaXQ6IDAsXG4gIG9mZnNldDogMCxcbiAgdG90YWw6IDAsXG4gIHN1Y2Nlc3M6IGZhbHNlLFxuICBzZWFyY2hpbmc6IGZhbHNlLFxuICB0aXRsZTogJycsXG4gIG9uTGlrZTogbnVsbCxcbiAgcmVuZGVyOiBudWxsLFxuICBpc1BhZ2U6IGZhbHNlLFxuICBiYW5uZXJzOiB7fSxcbiAgcGxhY2Vob2xkZXJBdmF0YXJVcmw6ICcvbm8tYXZhdGFyLnBuZydcbn07XG5cbmNvbnN0IGJhbm5lclNlbGVjdGVyID0gKHN0YXRlKSA9PiBzdGF0ZS5iYW5uZXIubGlzdEJhbm5lcnMuZGF0YTtcbmNvbnN0IGZpbHRlckJhbm5lciA9IGNyZWF0ZVNlbGVjdG9yKGJhbm5lclNlbGVjdGVyLCAoYmFubmVycykgPT4ge1xuICBpZiAoIWJhbm5lcnMubGVuZ3RoKSByZXR1cm4ge307XG5cbiAgcmV0dXJuIHtcbiAgICB0b3BCYW5uZXJzOiBiYW5uZXJzLmZpbHRlcigoYikgPT4gYi5wb3NpdGlvbiA9PT0gJ3RvcCcpLFxuICAgIHJpZ2h0QmFubmVyczogYmFubmVycy5maWx0ZXIoKGIpID0+IGIucG9zaXRpb24gPT09ICdyaWdodCcpLFxuICAgIGJvdHRvbUJhbm5lcnM6IGJhbm5lcnMuZmlsdGVyKChiKSA9PiBiLnBvc2l0aW9uID09PSAnYm90dG9tJylcbiAgfTtcbn0pO1xuY29uc3QgbWFwU3RhdGVzID0gKHN0YXRlOiBhbnkpID0+ICh7XG4gIHBsYWNlaG9sZGVyQXZhdGFyVXJsOiBzdGF0ZS51aS5wbGFjZWhvbGRlckF2YXRhclVybCxcbiAgYmFubmVyczogZmlsdGVyQmFubmVyKHN0YXRlKVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVzKShQZXJmb3JtZXJHcmlkKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBSb3csIENvbCwgRHJhd2VyLCBCdXR0b24sIE1lbnUsIFNwYWNlXG59IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgRmlsdGVyT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XG5pbXBvcnQgeyBJQ291bnRyaWVzLCBJUGVyZm9ybWVyQ2F0ZWdvZ2llcyB9IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0ICcuL3BlcmZvcm1lci1maWx0ZXIubGVzcyc7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBjb3VudHJpZXM/OiBJQ291bnRyaWVzW107XG4gIGNhdGVnb3JpZXM/OiBJUGVyZm9ybWVyQ2F0ZWdvZ2llc1tdO1xuICAvLyBvZmZzZXQ/OiBudW1iZXI7XG4gIC8vIGxpbWl0PzogbnVtYmVyO1xuICBnZW5kZXI/OiBzdHJpbmc7XG4gIGNhdGVnb3J5Pzogc3RyaW5nO1xuICBjb3VudHJ5Pzogc3RyaW5nO1xuICBzZXRGaWx0ZXI6IEZ1bmN0aW9uO1xuICBjbGVhckZpbHRlcjogKCkgPT4gdm9pZDtcbn1cblxuY29uc3QgUGVyZm9ybWVyRmlsdGVyID0gKHtcbiAgY291bnRyaWVzLFxuICBjYXRlZ29yaWVzLFxuICBzZXRGaWx0ZXIsXG4gIGNhdGVnb3J5LFxuICBjb3VudHJ5LFxuICBnZW5kZXIsXG4gIGNsZWFyRmlsdGVyXG59OiBJUHJvcHMpID0+IHtcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbc2VsZWN0ZWRNZW51S2V5cywgc2V0U2VsZWN0ZWRNZW51S2V5c10gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuICBjb25zdCBbbGFzdFNlbGVjdGVkTWVudUtleSwgc2V0TGFzdFNlbGVjdGVkTWVudUtleV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCk7XG4gIGNvbnN0IG9uT3BlbkNoYW5nZSA9IChrZXlzOiBzdHJpbmdbXSkgPT4ge1xuICAgIGNvbnN0IG1lbnVLZXlzID0ga2V5cy5maWx0ZXIoKGtleSkgPT4ga2V5ICE9PSBsYXN0U2VsZWN0ZWRNZW51S2V5KTtcbiAgICBzZXRTZWxlY3RlZE1lbnVLZXlzKG1lbnVLZXlzKTtcbiAgICBzZXRMYXN0U2VsZWN0ZWRNZW51S2V5KG1lbnVLZXlzWzBdKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFJvdyBhbGlnbj1cIm1pZGRsZVwiIGNsYXNzTmFtZT1cInBlcmZvcm1lci1maWx0ZXJcIiBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiPlxuICAgICAgICA8Q29sPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGljb249ezxGaWx0ZXJPdXRsaW5lZCAvPn1cbiAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFZpc2libGUodHJ1ZSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtci04XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBGaWx0ZXJcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8U3BhY2UgY2xhc3NOYW1lPVwiYW50LXNwYWNlLXdyYXBcIj5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5Qb3B1bGFyIEZpbHRlcjo8L3NwYW4+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2NsZWFyRmlsdGVyfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoZ2VuZGVyID09PSAnJyA/ICdhY3RpdmUnIDogJycpfVxuICAgICAgICAgICAgICB0eXBlPVwiZGFzaGVkXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQWxsXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RmlsdGVyKCdnZW5kZXInLCBnZW5kZXIgPT09ICdmZW1hbGUnID8gJycgOiAnZmVtYWxlJyl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhnZW5kZXIgPT09ICdmZW1hbGUnID8gJ2FjdGl2ZScgOiAnJyl9XG4gICAgICAgICAgICAgIHR5cGU9XCJkYXNoZWRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBGZW1hbGVcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRGaWx0ZXIoJ2dlbmRlcicsIGdlbmRlciA9PT0gJ3RyYW5zZ2VuZGVyJyA/ICcnIDogJ3RyYW5zZ2VuZGVyJyl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhnZW5kZXIgPT09ICd0cmFuc2dlbmRlcicgPyAnYWN0aXZlJyA6ICcnKX1cbiAgICAgICAgICAgICAgdHlwZT1cImRhc2hlZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFRyYW5zZ2VuZGVyXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RmlsdGVyKCdnZW5kZXInLCBnZW5kZXIgPT09ICdtYWxlJyA/ICcnIDogJ21hbGUnKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGdlbmRlciA9PT0gJ21hbGUnID8gJ2FjdGl2ZScgOiAnJyl9XG4gICAgICAgICAgICAgIHR5cGU9XCJkYXNoZWRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBNYWxlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L1NwYWNlPlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgICAgPERyYXdlclxuICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxuICAgICAgICBwbGFjZW1lbnQ9XCJsZWZ0XCJcbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0VmlzaWJsZShmYWxzZSl9XG4gICAgICAgIHRpdGxlPXsoXG4gICAgICAgICAgPFJvdyBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiIGFsaWduPVwibWlkZGxlXCI+XG4gICAgICAgICAgICA8Q29sPkZpbHRlciBieTo8L0NvbD5cbiAgICAgICAgICAgIDxDb2w+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwibGlua1wiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2xlYXJGaWx0ZXIoKX1cbiAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAxMCB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ2xlYXIgRmlsdGVyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgICl9XG4gICAgICA+XG4gICAgICAgIHsvKiBTZWxlY3QgbXVsdGlwbGUgY2F0ZWdvcnkgKi99XG4gICAgICAgIDxNZW51XG4gICAgICAgICAgbW9kZT1cImlubGluZVwiXG4gICAgICAgICAgc3R5bGU9e3sgYm9yZGVyUmlnaHQ6IDAgfX1cbiAgICAgICAgICBtdWx0aXBsZT17ZmFsc2V9XG4gICAgICAgICAgb25TZWxlY3Q9eyh7IGtleSB9KSA9PiBzZXRGaWx0ZXIoJ2NhdGVnb3J5Jywga2V5KX1cbiAgICAgICAgICBvbkRlc2VsZWN0PXsoKSA9PiBzZXRGaWx0ZXIoJ2NhdGVnb3J5JywgJycpfVxuICAgICAgICAgIHNlbGVjdGVkS2V5cz17W2NhdGVnb3J5XX1cbiAgICAgICAgICBvcGVuS2V5cz17c2VsZWN0ZWRNZW51S2V5c31cbiAgICAgICAgICBvbk9wZW5DaGFuZ2U9e29uT3BlbkNoYW5nZX1cbiAgICAgICAgPlxuICAgICAgICAgIDxNZW51LlN1Yk1lbnUgdGl0bGU9XCJDYXRlZ29yeVwiIGtleT1cImNhdGVnb3J5XCI+XG4gICAgICAgICAgICB7Y2F0ZWdvcmllcy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICYmIGNhdGVnb3JpZXMubWFwKChjKSA9PiAoXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9e2MuX2lkfT57Yy5uYW1lfTwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICA8L01lbnUuU3ViTWVudT5cbiAgICAgICAgPC9NZW51PlxuICAgICAgICA8TWVudVxuICAgICAgICAgIG1vZGU9XCJpbmxpbmVcIlxuICAgICAgICAgIHN0eWxlPXt7IGJvcmRlclJpZ2h0OiAwIH19XG4gICAgICAgICAgb25TZWxlY3Q9eyh7IGtleSB9KSA9PiBzZXRGaWx0ZXIoJ2dlbmRlcicsIGtleSl9XG4gICAgICAgICAgb25EZXNlbGVjdD17KCkgPT4gc2V0RmlsdGVyKCdnZW5kZXInLCAnJyl9XG4gICAgICAgICAgc2VsZWN0ZWRLZXlzPXtbZ2VuZGVyXX1cbiAgICAgICAgICBvcGVuS2V5cz17c2VsZWN0ZWRNZW51S2V5c31cbiAgICAgICAgICBvbk9wZW5DaGFuZ2U9e29uT3BlbkNoYW5nZX1cbiAgICAgICAgPlxuICAgICAgICAgIDxNZW51LlN1Yk1lbnUgdGl0bGU9XCJHZW5kZXJcIiBrZXk9XCJnZW5kZXJcIj5cbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiZmVtYWxlXCI+RmVtYWxlPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cInRyYW5zZ2VuZGVyXCI+VHJhbnNnZW5kZXI8L01lbnUuSXRlbT5cbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwibWFsZVwiPk1hbGU8L01lbnUuSXRlbT5cbiAgICAgICAgICA8L01lbnUuU3ViTWVudT5cbiAgICAgICAgPC9NZW51PlxuICAgICAgICB7LyogU2VsZWN0IG11bHRpcGxlIGNvdW50cnkgKi99XG4gICAgICAgIDxNZW51XG4gICAgICAgICAgbW9kZT1cImlubGluZVwiXG4gICAgICAgICAgc3R5bGU9e3sgYm9yZGVyUmlnaHQ6IDAgfX1cbiAgICAgICAgICBtdWx0aXBsZT17ZmFsc2V9XG4gICAgICAgICAgb25TZWxlY3Q9eyh7IGtleSB9KSA9PiBzZXRGaWx0ZXIoJ2NvdW50cnknLCBrZXkpfVxuICAgICAgICAgIG9uRGVzZWxlY3Q9eygpID0+IHNldEZpbHRlcignY291bnRyeScsICcnKX1cbiAgICAgICAgICBzZWxlY3RlZEtleXM9e1tjb3VudHJ5XX1cbiAgICAgICAgICBvcGVuS2V5cz17c2VsZWN0ZWRNZW51S2V5c31cbiAgICAgICAgICBvbk9wZW5DaGFuZ2U9e29uT3BlbkNoYW5nZX1cbiAgICAgICAgPlxuICAgICAgICAgIDxNZW51LlN1Yk1lbnUgdGl0bGU9XCJDb3VudHJ5XCIga2V5PVwiY291bnRyeVwiPlxuICAgICAgICAgICAge2NvdW50cmllcy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICYmIGNvdW50cmllcy5tYXAoKGMpID0+IChcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT17Yy5uYW1lfT57Yy5uYW1lfTwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICA8L01lbnUuU3ViTWVudT5cbiAgICAgICAgPC9NZW51PlxuICAgICAgPC9EcmF3ZXI+XG4gICAgPC8+XG4gICk7XG59O1xuUGVyZm9ybWVyRmlsdGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgY291bnRyaWVzOiBbXSxcbiAgY2F0ZWdvcmllczogW10sXG4gIC8vIG9mZnNldDogMCxcbiAgLy8gbGltaXQ6IDAsXG4gIGdlbmRlcjogJycsXG4gIGNhdGVnb3J5OiAnJyxcbiAgY291bnRyeTogJydcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBlcmZvcm1lckZpbHRlcjtcbiIsImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZTogRGF0ZSwgZm9ybWF0ID0gJ0REL01NL1lZWVkgSEg6bW06c3MnKSB7XG4gIHJldHVybiBtb21lbnQoZGF0ZSkuZm9ybWF0KGZvcm1hdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJEdXJhdGlvbihkdXJhdGlvbjogbnVtYmVyLCBmb3JtYXQgPSAnSEg6bW0nKSB7XG4gIHJldHVybiBtb21lbnRcbiAgICAudXRjKG1vbWVudC5kdXJhdGlvbihkdXJhdGlvbiwgJ21pbGxpc2Vjb25kcycpLmFzTWlsbGlzZWNvbmRzKCkpXG4gICAgLmZvcm1hdChmb3JtYXQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VBZ2UoZGF0ZTogc3RyaW5nLCBmb3JtYXQgPSAnTU1NTSBERCwgWVlZWScpIHtcbiAgcmV0dXJuIG1vbWVudChkYXRlKS5mb3JtYXQoZm9ybWF0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFnZShkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgcmV0dXJuIG1vbWVudCgpLmRpZmYobW9tZW50KGRhdGUpLmZvcm1hdCgnWVlZWS1NTS1ERCcpLCAneWVhcnMnKS50b1N0cmluZygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RHVyYXRpb24oczogbnVtYmVyKSB7XG4gIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcihzIC8gMzYwMCk7XG4gIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKChzIC0gaG91cnMgKiAzNjAwKSAvIDYwKTtcbiAgY29uc3Qgc2Vjb25kcyA9IHMgLSBob3VycyAqIDM2MDAgLSBtaW51dGVzICogNjA7XG4gIHJldHVybiBgJHtob3VycyA8IDEwID8gJzAnIDogJyd9JHtob3Vyc306JHtcbiAgICBtaW51dGVzIDwgMTAgPyAnMCcgOiAnJ1xuICB9JHttaW51dGVzfToke3NlY29uZHMgPCAxMCA/ICcwJyA6ICcnfSR7c2Vjb25kc31gO1xufVxuIiwiaW1wb3J0IHsgZ2V0R2xvYmFsQ29uZmlnIH0gZnJvbSAnQHNlcnZpY2VzL2NvbmZpZyc7XG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBSY0ZpbGUgfSBmcm9tICdhbnRkL2xpYi91cGxvYWQnO1xuXG5leHBvcnQgZnVuY3Rpb24gYmVmb3JlQXZhdGFyVXBsb2FkKGZpbGU6IFJjRmlsZSk6IGJvb2xlYW4ge1xuICBjb25zdCBleHQgPSBmaWxlLm5hbWUuc3BsaXQoJy4nKS5wb3AoKS50b0xvd2VyQ2FzZSgpO1xuICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgY29uc3QgaXNJbWFnZUFjY2VwdCA9IGNvbmZpZy5ORVhUX1BVQkxJQ19JTUFHRV9BQ0NQRVRcbiAgICAuc3BsaXQoJywnKVxuICAgIC5tYXAoKGl0ZW06IHN0cmluZykgPT4gaXRlbS50cmltKCkpXG4gICAgLmluZGV4T2YoYC4ke2V4dH1gKTtcbiAgaWYgKGlzSW1hZ2VBY2NlcHQgPT09IC0xKSB7XG4gICAgbWVzc2FnZS5lcnJvcihgWW91IGNhbiBvbmx5IHVwbG9hZCAke2NvbmZpZy5ORVhUX1BVQkxJQ19JTUFHRV9BQ0NQRVR9IGZpbGUhYCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgaXNMdDJNID0gZmlsZS5zaXplIC8gMTAyNCAvIDEwMjQgPCAoY29uZmlnLk5FWFRfUFVCTElDX01BWElNVU1fU0laRV9VUExPQURfQVZBVEFSIHx8IDIpO1xuICBpZiAoIWlzTHQyTSkge1xuICAgIG1lc3NhZ2UuZXJyb3IoXG4gICAgICBgSW1hZ2UgbXVzdCBzbWFsbGVyIHRoYW4gJHtjb25maWcuTkVYVF9QVUJMSUNfTUFYSU1VTV9TSVpFX1VQTE9BRF9BVkFUQVIgfHwgMn1NQiFgXG4gICAgKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vaW50ZXJuZXQnO1xuZXhwb3J0ICogZnJvbSAnLi9yZWR1eCc7XG5leHBvcnQgKiBmcm9tICcuL3N0cmluZyc7XG5leHBvcnQgKiBmcm9tICcuL2RhdGUnO1xuZXhwb3J0ICogZnJvbSAnLi9tZXNzYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vbGF5b3V0JztcbmV4cG9ydCAqIGZyb20gJy4vdXRpbHMnO1xuZXhwb3J0ICogZnJvbSAnLi9ydWxlcyc7XG5leHBvcnQgKiBmcm9tICcuL2ZpbGUnO1xuZXhwb3J0ICogZnJvbSAnLi9zdHJlYW0nO1xuIiwiY29uc3QgSU5URVJORVRfQ0hFQ0tfVVJMID0gJ2h0dHBzOi8vZ29vZ2xlLmNvbSc7XG5cbmV4cG9ydCBjb25zdCBpc0hhc0ludGVybmV0Q29ubmVjdGlvbiA9IGFzeW5jICgpOiBQcm9taXNlPGJvb2xlYW4+ID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChJTlRFUk5FVF9DSEVDS19VUkwsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NhY2hlLUNvbnRyb2wnOiAnbm8tY2FjaGUsIG5vLXN0b3JlLCBtdXN0LXJldmFsaWRhdGUnLFxuICAgICAgICBQcmFnbWE6ICduby1jYWNoZScsXG4gICAgICAgIEV4cGlyZXM6IDBcbiAgICAgIH0gYXMgYW55XG4gICAgfSk7XG4gICAgaWYgKFxuICAgICAgcmVzLnN0YXR1cyA9PT0gNDA0XG4gICAgICB8fCByZXMuc3RhdHVzID09PSA0MDFcbiAgICAgIHx8IHJlcy5zdGF0dXMgPT09IDQwM1xuICAgICAgfHwgcmVzLnN0YXR1cyA9PT0gNTAwXG4gICAgICB8fCAocmVzLnN0YXR1cyA+PSAyMDAgJiYgcmVzLnN0YXR1cyA8PSAzMDApXG4gICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0gY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5sb2coZXhjZXB0aW9uKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuIiwiZXhwb3J0IGNvbnN0IGZvcm1JdGVtTGF5b3V0ID0ge1xuICBsYWJlbENvbDoge1xuICAgIHhzOiB7XG4gICAgICBzcGFuOiAyNFxuICAgIH0sXG4gICAgc206IHtcbiAgICAgIHNwYW46IDEyXG4gICAgfVxuICB9LFxuICB3cmFwcGVyQ29sOiB7XG4gICAgeHM6IHtcbiAgICAgIHNwYW46IDI0XG4gICAgfSxcbiAgICBzbToge1xuICAgICAgc3BhbjogMTJcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCB0YWlsRm9ybUl0ZW1MYXlvdXQgPSB7XG4gIHdyYXBwZXJDb2w6IHtcbiAgICB4czoge1xuICAgICAgc3BhbjogMjQsXG4gICAgICBvZmZzZXQ6IDBcbiAgICB9LFxuICAgIHNtOiB7XG4gICAgICBzcGFuOiAxNixcbiAgICAgIG9mZnNldDogMFxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRDb2xvciA9IHtcbiAgcHJpbWFyeUNvbG9yOiAnI2ZmMDA2NicsXG4gIHN1Y2Nlc3NDb2xvcjogJyMyZmI1MmQnLFxuICB3aGl0ZUNvbG9yOiAnI2ZmZmZmZidcbn07XG5cbmV4cG9ydCB0eXBlIEJyZWFrcG9pbnQgPSAneHhsJyB8ICd4bCcgfCAnbGcnIHwgJ21kJyB8ICdzbScgfCAneHMnO1xuZXhwb3J0IHR5cGUgQnJlYWtwb2ludE1hcCA9IFBhcnRpYWw8UmVjb3JkPEJyZWFrcG9pbnQsIHN0cmluZz4+O1xuIiwiZXhwb3J0IGNvbnN0IHZhbGlkYXRlTWVzc2FnZXMgPSB7XG4gIHJlcXVpcmVkOiAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCEnLFxuICB0eXBlczoge1xuICAgIGVtYWlsOiAnTm90IGEgdmFsaWRhdGUgZW1haWwhJyxcbiAgICBudW1iZXI6ICdOb3QgYSB2YWxpZGF0ZSBudW1iZXIhJ1xuICB9LFxuICBudW1iZXI6IHtcbiAgICByYW5nZTogJ011c3QgYmUgYmV0d2VlbiBtaW4gYW5kIG1heCdcbiAgfVxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtbmFtZXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQge1xuICByZWR1Y2UsIGlzQXJyYXksIGlzRW1wdHksIGZsYXR0ZW5cbn0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAncmVzZWxlY3QnO1xuaW1wb3J0IHsgdGFrZUxhdGVzdCwgZGVsYXkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IHtcbiAgY3JlYXRlQWN0aW9uIGFzIFJlZHV4Q3JlYXRlQWN0aW9uLFxuICBoYW5kbGVBY3Rpb25zIGFzIGhhbmRsZVJlZHV4QWN0aW9ucyxcbiAgQWN0aW9uXG59IGZyb20gJ3JlZHV4LWFjdGlvbnMnO1xuXG5leHBvcnQgdHlwZSBBY3Rpb25GdW5jdGlvbjE8VDEsIFI+ID0gKHQxPzogVDEpID0+IFI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uRnVuY3Rpb248UGF5bG9hZD5cbiAgZXh0ZW5kcyBBY3Rpb25GdW5jdGlvbjE8UGF5bG9hZCwgQWN0aW9uPFBheWxvYWQ+PiB7XG4gIGlzOiAodHlwZTogc3RyaW5nKSA9PiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBY3Rpb248UGF5bG9hZCA9IGFueT4odHlwZTogc3RyaW5nKTogQWN0aW9uRnVuY3Rpb248UGF5bG9hZD4ge1xuICBjb25zdCBhY3Rpb24gPSBSZWR1eENyZWF0ZUFjdGlvbjxQYXlsb2FkPih0eXBlKSBhcyBBY3Rpb25GdW5jdGlvbjxQYXlsb2FkPjtcbiAgYWN0aW9uLmlzID0gKGFUeXBlOiBzdHJpbmcpID0+IGFjdGlvbi50b1N0cmluZygpID09PSBhVHlwZTtcbiAgcmV0dXJuIGFjdGlvbjtcbn1cblxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG5mdW5jdGlvbiBjcmVhdGVBc3luY0FjdGlvbihhY3Rpb246IHN0cmluZywgdHlwZTogc3RyaW5nKTogYW55IHtcbiAgcmV0dXJuIHtcbiAgICBbYWN0aW9uXTogY3JlYXRlQWN0aW9uKHR5cGUpLFxuICAgIFtgJHthY3Rpb259U3VjY2Vzc2BdOiBjcmVhdGVBY3Rpb24oYCR7dHlwZX1fU1VDQ0VTU2ApLFxuICAgIFtgJHthY3Rpb259RmFpbGBdOiBjcmVhdGVBY3Rpb24oYCR7dHlwZX1fRkFJTGApXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFzeW5jQWN0aW9uczxcbiAgQWN0aW9uRGF0YSA9IGFueSxcbiAgU3VjY2Vzc0RhdGEgPSBhbnksXG4gIEVycm9yRGF0YSA9IEVycm9yXG4+KFxuICB0eXBlOiBzdHJpbmdcbik6IFtcbiAgQWN0aW9uRnVuY3Rpb248QWN0aW9uRGF0YT4sXG4gIEFjdGlvbkZ1bmN0aW9uPFN1Y2Nlc3NEYXRhPixcbiAgQWN0aW9uRnVuY3Rpb248RXJyb3JEYXRhPlxuXSB7XG4gIHJldHVybiBbXG4gICAgY3JlYXRlQWN0aW9uPEFjdGlvbkRhdGE+KHR5cGUpLFxuICAgIGNyZWF0ZUFjdGlvbjxTdWNjZXNzRGF0YT4oYCR7dHlwZX1fU1VDQ0VTU2ApLFxuICAgIGNyZWF0ZUFjdGlvbjxFcnJvckRhdGE+KGAke3R5cGV9X0ZBSUxgKVxuICBdO1xufVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuZnVuY3Rpb24gaGFuZGxlQWN0aW9ucyhhY3Rpb25zOiBhbnksIGluaXRpYWxTdGF0ZTogYW55KSB7XG4gIHJldHVybiBoYW5kbGVSZWR1eEFjdGlvbnMoXG4gICAgcmVkdWNlKFxuICAgICAgYWN0aW9ucyxcbiAgICAgIChyZWR1Y2VyOiBhbnksIGhhbmRsZXIsIGFjdGlvbikgPT4ge1xuICAgICAgICByZWR1Y2VyW2FjdGlvbl0gPSAoc3RhdGU6IGFueSwgYWN0OiBhbnkpID0+IGhhbmRsZXIoc3RhdGUuc2V0KCdhY3Rpb24nLCBhY3Rpb24pLCBhY3QpO1xuICAgICAgICByZXR1cm4gcmVkdWNlcjtcbiAgICAgIH0sXG4gICAgICB7fVxuICAgICksXG4gICAgaW5pdGlhbFN0YXRlXG4gICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlZHVjZXJzKFxuICBzdGF0ZUNvbnRleHQ6IHN0cmluZyxcbiAgcmVkdWNlcnM6IGFueVtdLFxuICBpbml0aWFsU3RhdGU6IGFueSxcbiAgcHJldmVudFJlc2V0dGluZzogYm9vbGVhbiA9IGZhbHNlXG4pOiBhbnkge1xuICByZXR1cm4ge1xuICAgIFtzdGF0ZUNvbnRleHRdOiBoYW5kbGVSZWR1eEFjdGlvbnMoXG4gICAgICByZWR1Y2UoXG4gICAgICAgIGZsYXR0ZW4ocmVkdWNlcnMpLFxuICAgICAgICAocmVkdWNlcjogYW55LCBhY3Rpb246IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChpc0FycmF5KGFjdGlvbi5vbikpIHtcbiAgICAgICAgICAgIGFjdGlvbi5vbi5mb3JFYWNoKChhY3Q6IGFueSkgPT4ge1xuICAgICAgICAgICAgICByZWR1Y2VyW2FjdF0gPSBhY3Rpb24ucmVkdWNlcjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSByZWR1Y2VyW2FjdGlvbi5vbl0gPSBhY3Rpb24ucmVkdWNlcjtcbiAgICAgICAgICByZXR1cm4gcmVkdWNlcjtcbiAgICAgICAgfSxcbiAgICAgICAgcHJldmVudFJlc2V0dGluZ1xuICAgICAgICAgID8ge31cbiAgICAgICAgICA6IHtcbiAgICAgICAgICAgIEFQUF9TVEFURV9SRVNFVDogKCkgPT4gaW5pdGlhbFN0YXRlXG4gICAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIGluaXRpYWxTdGF0ZVxuICAgIClcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNhZ2FzKHNhZ2FzOiBhbnlbXSk6IGFueVtdIHtcbiAgcmV0dXJuIGZsYXR0ZW4oc2FnYXMpLm1hcCgoc2FnYTogYW55KSA9PiB7XG4gICAgY29uc3QgeyBvbiwgZWZmZWN0ID0gdGFrZUxhdGVzdCwgd29ya2VyIH0gPSBzYWdhO1xuICAgIHJldHVybiBmdW5jdGlvbiogKCkge1xuICAgICAgeWllbGQgZWZmZWN0KG9uLCBmdW5jdGlvbiogKGFjdGlvbjogYW55KSB7XG4gICAgICAgIHlpZWxkIGRlbGF5KDApO1xuICAgICAgICB5aWVsZCB3b3JrZXIoYWN0aW9uKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTZWxlY3RvcnNBKGNvbnRleHQ6IHN0cmluZywga2V5czogYW55W10gPSBbXSk6IGFueSB7XG4gIGNvbnN0IHN0YXRlU2VsZWN0b3IgPSAoc3RhdGU6IGFueSkgPT4gc3RhdGVbY29udGV4dF07XG5cbiAgaWYgKGlzRW1wdHkoa2V5cykpIHJldHVybiBzdGF0ZVNlbGVjdG9yO1xuXG4gIHJldHVybiBrZXlzLm1hcCgoa2V5OiBhbnkpID0+IChzdGF0ZTogYW55KSA9PiAoaXNBcnJheShrZXkpXG4gICAgPyBzdGF0ZVNlbGVjdG9yKHN0YXRlKS5nZXRJbihrZXkpXG4gICAgOiBzdGF0ZVNlbGVjdG9yKHN0YXRlKS5nZXQoa2V5KSkpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTZWxlY3RvcnMoY29udGV4dDogc3RyaW5nLCBrZXlzOiBzdHJpbmdbXSk6IGFueSB7XG4gIGNvbnN0IHN0YXRlU2VsZWN0b3IgPSAoc3RhdGU6IGFueSkgPT4gc3RhdGVbY29udGV4dF07XG5cbiAgcmV0dXJuIHJlZHVjZShcbiAgICBrZXlzLFxuICAgIChzZWxlY3RvcnM6IGFueSwga2V5KSA9PiB7XG4gICAgICBzZWxlY3RvcnNbYCR7a2V5fVNlbGVjdG9yYF0gPSAoc3RhdGU6IGFueSkgPT4gc3RhdGVTZWxlY3RvcihzdGF0ZSkuZ2V0KGtleSk7XG4gICAgICByZXR1cm4gc2VsZWN0b3JzO1xuICAgIH0sXG4gICAge31cbiAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSlNTZWxlY3RvcnMoY29udGV4dDogc3RyaW5nLCBrZXlzOiBzdHJpbmdbXSk6IGFueSB7XG4gIGNvbnN0IHN0YXRlU2VsZWN0b3IgPSAoc3RhdGU6IGFueSkgPT4gc3RhdGVbY29udGV4dF07XG5cbiAgcmV0dXJuIHJlZHVjZShcbiAgICBrZXlzLFxuICAgIChzZWxlY3RvcnM6IGFueSwga2V5KSA9PiB7XG4gICAgICBzZWxlY3RvcnNbYCR7a2V5fVNlbGVjdG9yYF0gPSAoc3RhdGU6IGFueSkgPT4gc3RhdGVTZWxlY3RvcihzdGF0ZSlba2V5XTtcbiAgICAgIHJldHVybiBzZWxlY3RvcnM7XG4gICAgfSxcbiAgICB7fVxuICApO1xufVxuXG5leHBvcnQge1xuICBjcmVhdGVBY3Rpb24sXG4gIGNyZWF0ZUFzeW5jQWN0aW9uLFxuICBjcmVhdGVBc3luY0FjdGlvbnMsXG4gIGNyZWF0ZVNlbGVjdG9yc0EsXG4gIGhhbmRsZUFjdGlvbnMsXG4gIGNyZWF0ZVJlZHVjZXJzLFxuICBjcmVhdGVTZWxlY3RvcnMsXG4gIGNyZWF0ZVNlbGVjdG9yLFxuICBjcmVhdGVKU1NlbGVjdG9yc1xufTtcbiIsImV4cG9ydCBjb25zdCB1c2VybmFtZVBhdHRlcm5SdWxlID0ge1xuICBwYXR0ZXJuOiBuZXcgUmVnRXhwKCdeW2EtekEtWjAtOV0qJCcpLFxuICBtZXNzYWdlOiAnRG9udCBhbGxvdyBzcGVjaWFsIGNoYXJzIG9yIHNwYWNlJ1xufTtcbiIsImltcG9ydCB7IFN0b3JlIGFzIFJEU3RvcmUgfSBmcm9tICdyZWR1eCc7XG5cbmV4cG9ydCB0eXBlIFN0b3JlID0gUkRTdG9yZTx7fT47XG5cbmxldCBzdG9yZTogU3RvcmUgfCBudWxsID0gbnVsbDtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXRTdG9yZTogKCkgPT4gc3RvcmUsXG4gIHNldFN0b3JlOiAoczogU3RvcmUpID0+IHtcbiAgICBzdG9yZSA9IHM7XG4gIH1cbn07XG4iLCJpbXBvcnQgc3RvcmVIb2xkZXIgZnJvbSAnLi9zdG9yZUhvbGRlcic7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX09GRkxJTkVfSU1BR0VfVVJMID0gJy9vZmZsaW5lLnBuZyc7XG5leHBvcnQgY29uc3QgREVGQVVMVF9QUklWQVRFX0lNQUdFX1VSTCA9ICcvcHJpdmF0ZS5wbmcnO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfR1JPVVBfSU1BR0VfVVJMID0gJy9ncm91cC5wbmcnO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfT05MSU5FX0lNQUdFX1VSTCA9ICcnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9zdGVyKHN0YXR1czogc3RyaW5nKTogc3RyaW5nIHtcbiAgbGV0IHBvc3RlciA9ICcnO1xuICBjb25zdCBzdG9yZSA9IHN0b3JlSG9sZGVyLmdldFN0b3JlKCk7XG4gIGNvbnN0IHsgc2V0dGluZ3MgPSB7fSB9ID0gc3RvcmUuZ2V0U3RhdGUoKSBhcyBhbnk7XG4gIHN3aXRjaCAoc3RhdHVzKSB7XG4gICAgY2FzZSAncHJpdmF0ZSc6XG4gICAgICBwb3N0ZXIgPSBzZXR0aW5ncy5kZWZhdWx0UHJpdmF0ZUNhbGxJbWFnZSB8fCBERUZBVUxUX1BSSVZBVEVfSU1BR0VfVVJMO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnb2ZmbGluZSc6XG4gICAgICBwb3N0ZXIgPSBzZXR0aW5ncy5kZWZhdWx0T2ZmbGluZU1vZGVsSW1hZ2UgfHwgREVGQVVMVF9PRkZMSU5FX0lNQUdFX1VSTDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3B1YmxpYyc6XG4gICAgICBwb3N0ZXIgPSBERUZBVUxUX09OTElORV9JTUFHRV9VUkw7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdncm91cCc6XG4gICAgICBwb3N0ZXIgPSBzZXR0aW5ncy5kZWZhdWx0R3JvdXBDaGF0SW1hZ2UgfHwgREVGQVVMVF9HUk9VUF9JTUFHRV9VUkw7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcG9zdGVyID0gREVGQVVMVF9PRkZMSU5FX0lNQUdFX1VSTDtcbiAgICAgIGJyZWFrO1xuICB9XG4gIHJldHVybiBwb3N0ZXI7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaXNVcmwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICB1cmwubWF0Y2goXG4gICAgICAvKGh0dHAocyk/OlxcL1xcLy4pPyh3d3dcXC4pP1stYS16QS1aMC05QDolLl8rfiM9XXsyLDI1Nn1cXC5bYS16XXsyLDZ9XFxiKFstYS16QS1aMC05QDolXysufiM/Ji8vPV0qKS9nXG4gICAgKSAhPT0gbnVsbFxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVVdWlkID0gKCkgPT4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCAoYykgPT4ge1xuICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICAgIGNvbnN0IHIgPSAoTWF0aC5yYW5kb20oKSAqIDE2KSB8IDA7XG4gICAgY29uc3QgdiA9IGMgPT09ICd4JyA/IHIgOiAociAmIDB4MykgfCAweDg7XG4gICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xuICAgIC8qIGVzbGludC1lbmFibGUgKi9cbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKCFzdHIpIHJldHVybiAnJztcbiAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn1cblxuZXhwb3J0IGNvbnN0IHVuaXRQcmljZXM6IHsgdmFsdWU6IG51bWJlciwgdGV4dDogYW55IH1bXSA9IFtcbiAge1xuICAgIHZhbHVlOiAxNSxcbiAgICB0ZXh0OiAnMTUgdG9rZW5zJ1xuICB9LFxuICB7XG4gICAgdmFsdWU6IDIwLFxuICAgIHRleHQ6ICcyMCB0b2tlbnMnXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogMjUsXG4gICAgdGV4dDogJzI1IHRva2VucydcbiAgfSxcbiAge1xuICAgIHZhbHVlOiAzMCxcbiAgICB0ZXh0OiAnMzAgdG9rZW5zJ1xuICB9LFxuICB7XG4gICAgdmFsdWU6IDM1LFxuICAgIHRleHQ6ICczNSB0b2tlbnMnXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogNDAsXG4gICAgdGV4dDogJzQwIHRva2VucydcbiAgfSxcbiAge1xuICAgIHZhbHVlOiA0NSxcbiAgICB0ZXh0OiAnNDUgdG9rZW5zJ1xuICB9LFxuICB7XG4gICAgdmFsdWU6IDUwLFxuICAgIHRleHQ6ICc1MCB0b2tlbnMnXG4gIH1cbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA1NSxcbiAgLy8gICB0ZXh0OiAnNTUgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDYwLFxuICAvLyAgIHRleHQ6ICc2MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNjUsXG4gIC8vICAgdGV4dDogJzY1IHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA3MCxcbiAgLy8gICB0ZXh0OiAnNzAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDc1LFxuICAvLyAgIHRleHQ6ICc3NSB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogODAsXG4gIC8vICAgdGV4dDogJzgwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA4NSxcbiAgLy8gICB0ZXh0OiAnODUgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDkwLFxuICAvLyAgIHRleHQ6ICc5MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogOTUsXG4gIC8vICAgdGV4dDogJzk1IHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAxMDAsXG4gIC8vICAgdGV4dDogJzEwMCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMTIwLFxuICAvLyAgIHRleHQ6ICcxMjAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDE0MCxcbiAgLy8gICB0ZXh0OiAnMTQwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAxNjAsXG4gIC8vICAgdGV4dDogJzE2MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMTgwLFxuICAvLyAgIHRleHQ6ICcxODAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDIwMCxcbiAgLy8gICB0ZXh0OiAnMjAwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAyMjAsXG4gIC8vICAgdGV4dDogJzIyMCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMjQwLFxuICAvLyAgIHRleHQ6ICcyNDAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDI2MCxcbiAgLy8gICB0ZXh0OiAnMjYwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAyODAsXG4gIC8vICAgdGV4dDogJzI4MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMzAwLFxuICAvLyAgIHRleHQ6ICczMDAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDMyMCxcbiAgLy8gICB0ZXh0OiAnMzIwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAzNDAsXG4gIC8vICAgdGV4dDogJzM0MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMzYwLFxuICAvLyAgIHRleHQ6ICczNjAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDM4MCxcbiAgLy8gICB0ZXh0OiAnMzgwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA0MDAsXG4gIC8vICAgdGV4dDogJzQwMCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNDIwLFxuICAvLyAgIHRleHQ6ICc0MjAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDQ0MCxcbiAgLy8gICB0ZXh0OiAnNDQwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA0NjAsXG4gIC8vICAgdGV4dDogJzQ2MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNDgwLFxuICAvLyAgIHRleHQ6ICc0ODAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDUwMCxcbiAgLy8gICB0ZXh0OiAnNTAwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA1NTAsXG4gIC8vICAgdGV4dDogJzU1MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNjAwLFxuICAvLyAgIHRleHQ6ICc2MDAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDY1MCxcbiAgLy8gICB0ZXh0OiAnNjUwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA3MDAsXG4gIC8vICAgdGV4dDogJzcwMCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNzUwLFxuICAvLyAgIHRleHQ6ICc3NTAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDgwMCxcbiAgLy8gICB0ZXh0OiAnODAwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA4NTAsXG4gIC8vICAgdGV4dDogJzg1MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogOTAwLFxuICAvLyAgIHRleHQ6ICc5MDAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDk1MCxcbiAgLy8gICB0ZXh0OiAnOTUwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAxMDAwLFxuICAvLyAgIHRleHQ6ICcxMDAwIHRva2VucydcbiAgLy8gfVxuXTtcbiIsImltcG9ydCB7IGNsb25lRGVlcCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAncGF0aC10by1yZWdleHAnO1xuaW1wb3J0IHtcbiAgSVNjaGVkdWxlLCBJVXNlciwgSVBlcmZvcm1lciwgSVN0dWRpb1xufSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBTT1JUIH0gZnJvbSAnQHNlcnZpY2VzL2FwaS1yZXF1ZXN0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG4vKipcbiAqIENvbnZlcnQgYW4gYXJyYXkgdG8gYSB0cmVlLXN0cnVjdHVyZWQgYXJyYXkuXG4gKiBAcGFyYW0gICB7YXJyYXl9ICAgICBhcnJheSAgICAgVGhlIEFycmF5IG5lZWQgdG8gQ29udmVydGVkLlxuICogQHBhcmFtICAge3N0cmluZ30gICAgaWQgICAgICAgIFRoZSBhbGlhcyBvZiB0aGUgdW5pcXVlIElEIG9mIHRoZSBvYmplY3QgaW4gdGhlIGFycmF5LlxuICogQHBhcmFtICAge3N0cmluZ30gICAgcGFyZW50SWQgICAgICAgVGhlIGFsaWFzIG9mIHRoZSBwYXJlbnQgSUQgb2YgdGhlIG9iamVjdCBpbiB0aGUgYXJyYXkuXG4gKiBAcGFyYW0gICB7c3RyaW5nfSAgICBjaGlsZHJlbiAgVGhlIGFsaWFzIG9mIGNoaWxkcmVuIG9mIHRoZSBvYmplY3QgaW4gdGhlIGFycmF5LlxuICogQHJldHVybiAge2FycmF5fSAgICBSZXR1cm4gYSB0cmVlLXN0cnVjdHVyZWQgYXJyYXkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcnJheVRvVHJlZShcbiAgYXJyYXksXG4gIGlkID0gJ2lkJyxcbiAgcGFyZW50SWQgPSAncGlkJyxcbiAgY2hpbGRyZW4gPSAnY2hpbGRyZW4nXG4pIHtcbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIGNvbnN0IGhhc2ggPSB7fTtcbiAgY29uc3QgZGF0YSA9IGNsb25lRGVlcChhcnJheSk7XG5cbiAgZGF0YS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIGhhc2hbZGF0YVtpbmRleF1baWRdXSA9IGRhdGFbaW5kZXhdO1xuICB9KTtcblxuICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBoYXNoUGFyZW50ID0gaGFzaFtpdGVtW3BhcmVudElkXV07XG4gICAgaWYgKGhhc2hQYXJlbnQpIHtcbiAgICAgICFoYXNoUGFyZW50W2NoaWxkcmVuXSAmJiAoaGFzaFBhcmVudFtjaGlsZHJlbl0gPSBbXSk7XG4gICAgICBoYXNoUGFyZW50W2NoaWxkcmVuXS5wdXNoKGl0ZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQucHVzaChpdGVtKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFdoZXRoZXIgdGhlIHBhdGggbWF0Y2hlcyB0aGUgcmVnZXhwIGlmIHRoZSBsYW5ndWFnZSBwcmVmaXggaXMgaWdub3JlZCwgaHR0cHM6Ly9naXRodWIuY29tL3BpbGxhcmpzL3BhdGgtdG8tcmVnZXhwLlxuICogQHBhcmFtICAge3N0cmluZ3xyZWdleHB8YXJyYXl9ICAgICByZWdleHAgICAgIFNwZWNpZnkgYSBzdHJpbmcsIGFycmF5IG9mIHN0cmluZ3MsIG9yIGEgcmVndWxhciBleHByZXNzaW9uLlxuICogQHBhcmFtICAge3N0cmluZ30gICAgICAgICAgICAgICAgICBwYXRobmFtZSAgIFNwZWNpZnkgdGhlIHBhdGhuYW1lIHRvIG1hdGNoLlxuICogQHJldHVybiAge2FycmF5fG51bGx9ICAgICAgICAgICAgICBSZXR1cm4gdGhlIHJlc3VsdCBvZiB0aGUgbWF0Y2ggb3IgbnVsbC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhdGhNYXRjaFJlZ2V4cChyZWdleHAsIHBhdGhuYW1lKSB7XG4gIHJldHVybiBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKHJlZ2V4cCkuZXhlYyhwYXRobmFtZSk7XG59XG5cbi8qKlxuICogSW4gYW4gYXJyYXkgb2Ygb2JqZWN0cywgc3BlY2lmeSBhbiBvYmplY3QgdGhhdCB0cmF2ZXJzZXMgdGhlIG9iamVjdHMgd2hvc2UgcGFyZW50IElEIG1hdGNoZXMuXG4gKiBAcGFyYW0gICB7YXJyYXl9ICAgICBhcnJheSAgICAgVGhlIEFycmF5IG5lZWQgdG8gQ29udmVydGVkLlxuICogQHBhcmFtICAge3N0cmluZ30gICAgY3VycmVudCAgIFNwZWNpZnkgdGhlIG9iamVjdCB0aGF0IG5lZWRzIHRvIGJlIHF1ZXJpZWQuXG4gKiBAcGFyYW0gICB7c3RyaW5nfSAgICBwYXJlbnRJZCAgVGhlIGFsaWFzIG9mIHRoZSBwYXJlbnQgSUQgb2YgdGhlIG9iamVjdCBpbiB0aGUgYXJyYXkuXG4gKiBAcGFyYW0gICB7c3RyaW5nfSAgICBpZCAgICAgICAgVGhlIGFsaWFzIG9mIHRoZSB1bmlxdWUgSUQgb2YgdGhlIG9iamVjdCBpbiB0aGUgYXJyYXkuXG4gKiBAcmV0dXJuICB7YXJyYXl9ICAgIFJldHVybiBhIGtleSBhcnJheS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5QW5jZXN0b3JzKGFycmF5LCBjdXJyZW50LCBwYXJlbnRJZCwgaWQgPSAnaWQnKSB7XG4gIGNvbnN0IHJlc3VsdCA9IFtjdXJyZW50XTtcbiAgY29uc3QgaGFzaE1hcCA9IG5ldyBNYXAoKTtcbiAgYXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4gaGFzaE1hcC5zZXQoaXRlbVtpZF0sIGl0ZW0pKTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2hhZG93XG4gIGNvbnN0IGdldFBhdGggPSAoY3VycmVudCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRQYXJlbnRJZCA9IGhhc2hNYXAuZ2V0KGN1cnJlbnRbaWRdKVtwYXJlbnRJZF07XG4gICAgaWYgKGN1cnJlbnRQYXJlbnRJZCkge1xuICAgICAgcmVzdWx0LnB1c2goaGFzaE1hcC5nZXQoY3VycmVudFBhcmVudElkKSk7XG4gICAgICBnZXRQYXRoKGhhc2hNYXAuZ2V0KGN1cnJlbnRQYXJlbnRJZCkpO1xuICAgIH1cbiAgfTtcblxuICBnZXRQYXRoKGN1cnJlbnQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVzcG9uc2VFcnJvcihkYXRhOiBhbnkpIHtcbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuICdCYWQgcmVxdWVzdCEnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YS5tZXNzYWdlKSkge1xuICAgIGNvbnN0IGl0ZW0gPSBkYXRhLm1lc3NhZ2VbMF07XG4gICAgaWYgKCFpdGVtLmNvbnN0cmFpbnRzKSB7XG4gICAgICByZXR1cm4gZGF0YS5lcnJvciB8fCAnQmFkIHJlcXVlc3QhJztcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoaXRlbS5jb25zdHJhaW50cylbMF07XG4gIH1cblxuICAvLyBUT0RPIC0gcGFyc2UgZm9yIGxhbmdhdWdlIG9yIG90aGVyc1xuICByZXR1cm4gdHlwZW9mIGRhdGEubWVzc2FnZSA9PT0gJ3N0cmluZycgPyBkYXRhLm1lc3NhZ2UgOiAnQmFkIHJlcXVlc3QhJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTW9iaWxlKCk6IGJvb2xlYW4ge1xuICBpZiAoXG4gICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQW5kcm9pZC9pKVxuICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL3dlYk9TL2kpXG4gICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBob25lL2kpXG4gICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBhZC9pKVxuICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQb2QvaSlcbiAgICB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9CbGFja0JlcnJ5L2kpXG4gICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvV2luZG93cyBQaG9uZS9pKVxuICApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXJsUGFyYW1ldGVyKHNQYXJhbSkge1xuICBjb25zdCBzUGFnZVVSTCA9IGRlY29kZVVSSUNvbXBvbmVudCh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSk7XG4gIGNvbnN0IHNVUkxWYXJpYWJsZXMgPSBzUGFnZVVSTC5zcGxpdCgnJicpO1xuICBsZXQgc1BhcmFtZXRlck5hbWU7XG4gIGxldCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzVVJMVmFyaWFibGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgc1BhcmFtZXRlck5hbWUgPSBzVVJMVmFyaWFibGVzW2ldLnNwbGl0KCc9Jyk7XG5cbiAgICBpZiAoc1BhcmFtZXRlck5hbWVbMF0gPT09IHNQYXJhbSkge1xuICAgICAgcmV0dXJuIHNQYXJhbWV0ZXJOYW1lWzFdID09PSB1bmRlZmluZWQgPyB0cnVlIDogc1BhcmFtZXRlck5hbWVbMV07XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBEQVlfT0ZfV0VFSyA9IHtcbiAgbW9uOiAnTW9uZGF5JyxcbiAgdHVlOiAnVHVlc2RheScsXG4gIHdlZDogJ1dlZG5lc2RheScsXG4gIHRodTogJ1RodXJzZGF5JyxcbiAgZnJpOiAnRnJpZGF5JyxcbiAgc2F0OiAnU2F0dXJkYXknLFxuICBzdW46ICdTdW5kYXknXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdFNjaGVkdWxlKCkge1xuICBjb25zdCBkZWZhdWx0VmFsID0geyBzdGFydDogbnVsbCwgZW5kOiBudWxsLCBjbG9zZWQ6IHRydWUgfTtcbiAgcmV0dXJuIHtcbiAgICBtb246IHsgLi4uZGVmYXVsdFZhbCB9LFxuICAgIHR1ZTogeyAuLi5kZWZhdWx0VmFsIH0sXG4gICAgd2VkOiB7IC4uLmRlZmF1bHRWYWwgfSxcbiAgICB0aHU6IHsgLi4uZGVmYXVsdFZhbCB9LFxuICAgIGZyaTogeyAuLi5kZWZhdWx0VmFsIH0sXG4gICAgc2F0OiB7IC4uLmRlZmF1bHRWYWwgfSxcbiAgICBzdW46IHsgLi4uZGVmYXVsdFZhbCB9XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZXh0U2hvdyhzY2hlZHVsZTogSVNjaGVkdWxlKTogc3RyaW5nIHtcbiAgbGV0IHdlZWtEYXkgPSBwYXJzZUludChtb21lbnQoKS5mb3JtYXQoJ2UnKSwgMTApO1xuICBsZXQgaSA9IDA7XG4gIGxldCBuZXh0U2hvdzogc3RyaW5nO1xuICBjb25zdCBwZXJmb3JtZXJTaG93cyA9IE9iamVjdC5rZXlzKHNjaGVkdWxlKS5maWx0ZXIoXG4gICAgKGtleSkgPT4gIXNjaGVkdWxlW2tleV0uY2xvc2VkXG4gICk7XG4gIGRvIHtcbiAgICBjb25zdCBkYXRlID0gbW9tZW50KCkuZGF5KHdlZWtEYXkpLmZvcm1hdCgnZGRkJykudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAocGVyZm9ybWVyU2hvd3MuaW5kZXhPZihkYXRlKSA+IC0xKSB7XG4gICAgICBuZXh0U2hvdyA9IGRhdGU7XG4gICAgfVxuICAgIHdlZWtEYXkgKz0gMTtcbiAgICBpICs9IDE7XG4gIH0gd2hpbGUgKGkgPCA3ICYmICFuZXh0U2hvdyk7XG5cbiAgaWYgKG5leHRTaG93KSB7XG4gICAgcmV0dXJuIGAke3NjaGVkdWxlW25leHRTaG93XS5zdGFydH0gJHttb21lbnQoKVxuICAgICAgLmRheSh3ZWVrRGF5IC0gMSlcbiAgICAgIC5mb3JtYXQoJ0REL01NL1lZWVknKX1gO1xuICB9XG4gIHJldHVybiAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlYXJjaERhdGEocGFnaW5hdGlvbiwgZmlsdGVycywgc29ydGVyLCBzdGF0ZSkge1xuICBsZXQgeyBzb3J0LCBzb3J0QnksIGZpbHRlciB9ID0gc3RhdGU7XG4gIGNvbnN0IHsgbGltaXQgfSA9IHN0YXRlO1xuICBpZiAoZmlsdGVycykge1xuICAgIE9iamVjdC5rZXlzKGZpbHRlcnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGZpbHRlcnNba2V5XSAmJiBmaWx0ZXJzW2tleV0ubGVuZ3RoKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICBmaWx0ZXJba2V5XSA9IGZpbHRlcnNba2V5XVswXTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFmaWx0ZXJzW2tleV0pIHtcbiAgICAgICAgZmlsdGVyW2tleV0gPSAnJztcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBmaWx0ZXIgPSB7fTtcbiAgfVxuXG4gIGlmIChzb3J0ZXIpIHtcbiAgICBpZiAoc29ydGVyLm9yZGVyKSB7XG4gICAgICBjb25zdCB7IGZpZWxkLCBvcmRlciB9ID0gc29ydGVyO1xuICAgICAgc29ydCA9IFNPUlRbb3JkZXJdO1xuICAgICAgc29ydEJ5ID0gZmllbGQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNvcnRCeSA9ICdjcmVhdGVkQXQnO1xuICAgICAgc29ydCA9ICdkZXNjJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIC4uLmZpbHRlcixcbiAgICBzb3J0LFxuICAgIHNvcnRCeSxcbiAgICBvZmZzZXQ6IChwYWdpbmF0aW9uLmN1cnJlbnQgLSAxKSAqIGxpbWl0XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCYXNlNjQob3JpZ2luRmlsZU9iaiwgc3RhdHVzID0gJ3VwbG9hZGluZycsIGZpbGUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIGlmIChvcmlnaW5GaWxlT2JqKSB7XG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChvcmlnaW5GaWxlT2JqKTtcbiAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKHtcbiAgICAgICAgLi4ub3JpZ2luRmlsZU9iaixcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBuYW1lOiBvcmlnaW5GaWxlT2JqLm5hbWUsXG4gICAgICAgIHVybDogcmVhZGVyLnJlc3VsdCxcbiAgICAgICAgb3JpZ2luRmlsZU9ialxuICAgICAgfSk7XG4gICAgICByZWFkZXIub25lcnJvciA9IChlcnJvcikgPT4gcmVqZWN0KGVycm9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzb2x2ZShmaWxlKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydENvbm5lY3Rpb25EYXRhKGRhdGEpIHtcbiAgY29uc3QgYXJyID0gZGF0YS5zcGxpdCgnJS8lJyk7XG4gIGNvbnN0IHNlcnZlckRhdGEgPSBhcnJbMV0gJiYgSlNPTi5wYXJzZShhcnJbMV0pO1xuICBjb25zdCBjbGllbnREYXRhID0gYXJyWzBdICYmIEpTT04ucGFyc2UoYXJyWzBdKTtcbiAgcmV0dXJuIHtcbiAgICBzZXJ2ZXJEYXRhLFxuICAgIGNsaWVudERhdGFcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrVXNlckxvZ2luKGlzTG9nZ2VkSW46IGJvb2xlYW4sIHVzZXI6IElVc2VyIHwgSVBlcmZvcm1lciB8IElTdHVkaW8pIHtcbiAgaWYgKCFpc0xvZ2dlZEluKSByZXR1cm4gZmFsc2U7XG4gIGlmICghdXNlciAmJiAhdXNlci5faWQpIHJldHVybiBmYWxzZTtcblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRVc2VyKHVzZXI6IElVc2VyLCBwZXJmb3JtZXI6IElQZXJmb3JtZXIpIHtcbiAgaWYgKHVzZXIgJiYgdXNlci5faWQpIHJldHVybiB1c2VyO1xuICBpZiAocGVyZm9ybWVyICYmIHBlcmZvcm1lci5faWQpIHJldHVybiBwZXJmb3JtZXI7XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BoeXNpY2FsUHJvZHVjdChpdGVtKSB7XG4gIGlmIChpdGVtICYmIGl0ZW0udHlwZSA9PT0gJ3BoeXNpY2FsJykgcmV0dXJuIHRydWU7XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYXRCb3hNZXNzYWdlQ2xhc3NOYW1lKHJlcSkge1xuICBjb25zdCB7XG4gICAgaXNNaW5lLFxuICAgIHN0YXJ0c1NlcXVlbmNlLFxuICAgIGVuZHNTZXF1ZW5jZSxcbiAgICBkYXRhOiB7IHR5cGUgfVxuICB9ID0gcmVxO1xuICByZXR1cm4gY2xhc3NuYW1lcyhcbiAgICAnbWVzc2FnZScsXG4gICAgeyBtaW5lOiBpc01pbmUgJiYgdHlwZSAhPT0gJ3RpcCcgfSxcbiAgICB7IHRpcDogdHlwZSA9PT0gJ3RpcCcgfSxcbiAgICB7IHN0YXJ0OiAhIXN0YXJ0c1NlcXVlbmNlIH0sXG4gICAgeyBlbmQ6ICEhZW5kc1NlcXVlbmNlIH1cbiAgKTtcbn1cblxuZnVuY3Rpb24gY29udmVydEZlZXRUb0NtKGZlZXQsIGluY2gpIHtcbiAgY29uc3QgW2ZdID0gZmVldC5zcGxpdCgnLicpO1xuICBjb25zdCBbaV0gPSBpbmNoLnNwbGl0KCcuJyk7XG4gIHJldHVybiAocGFyc2VJbnQoZiwgMTApICogMTIgKyBwYXJzZUludChpLCAxMCkpICogMi41NDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGFXZWlnaHQobWluID0gOTksIG1heCA9IDMxOSkge1xuICBsZXQgaSA9IG1pbjtcbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIGRvIHtcbiAgICByZXN1bHRbaV0gPSAoaSAqIDAuNDUpLnRvRml4ZWQoMik7XG4gICAgaSArPSAxO1xuICB9IHdoaWxlIChpIDwgbWF4KTtcbiAgcmV0dXJuIHJlc3VsdC5tYXAoKHYsIGluZGV4KSA9PiAoe1xuICAgIGxhYmVsOiBgJHtpbmRleH0gIGxicyAoJHt2fWtnKWAsXG4gICAgdmFsdWU6IGAke2luZGV4fSBsYnNgXG4gIH0pKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRhSGVpZ2h0KG1pbiA9IDQsIG1heCA9IDcpIHtcbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIGZvciAobGV0IGZlZXQgPSBtaW47IGZlZXQgPCBtYXg7IGZlZXQgKz0gMSkge1xuICAgIGZvciAobGV0IGluY2ggPSAwOyBpbmNoIDw9IDExOyBpbmNoICs9IDEpIHtcbiAgICAgIGNvbnN0IGEgPSBjb252ZXJ0RmVldFRvQ20oXG4gICAgICAgIGZlZXQudG9GaXhlZCgxKS50b1N0cmluZygpLFxuICAgICAgICBpbmNoLnRvRml4ZWQoMSkudG9TdHJpbmcoKVxuICAgICAgKTtcbiAgICAgIHJlc3VsdC5wdXNoKGAke2ZlZXR9JyR7aW5jaH1cIiAoJHthLnRvRml4ZWQoMil9IGNtKWApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0Lm1hcCgoZikgPT4gKHsgbGFiZWw6IGAke2Z9YCwgdmFsdWU6IGAke2Z9YCB9KSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRQcmljZShwcmljZTogbnVtYmVyLCBmcmFjdGlvbkRpZ2l0cyA9IDIpIHtcbiAgaWYgKHByaWNlKSB7XG4gICAgcmV0dXJuIHByaWNlLnRvRml4ZWQoZnJhY3Rpb25EaWdpdHMpO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlQXN5bmNBY3Rpb24sIGNyZWF0ZUFjdGlvbiB9IGZyb20gJ0BsaWIvcmVkdXgnO1xuXG5leHBvcnQgY29uc3QgeyBsb2dpbiwgbG9naW5TdWNjZXNzLCBsb2dpbkZhaWwgfSA9IGNyZWF0ZUFzeW5jQWN0aW9uKFxuICAnbG9naW4nLFxuICAnTE9HSU4nXG4pO1xuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdGluZyA9IGNyZWF0ZUFjdGlvbignTE9HSU5fUkVRVUVTVElORycpO1xuXG5leHBvcnQgY29uc3Qge1xuICBwZXJmb3JtZXJsb2dpbixcbiAgcGVyZm9ybWVybG9naW5TdWNjZXNzLFxuICBwZXJmb3JtZXJsb2dpbkZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbigncGVyZm9ybWVybG9naW4nLCAnUEVSRk9STUVSX0xPR0lOJyk7XG5cbmV4cG9ydCBjb25zdFxuICByZXNldExvZ2luRGF0YSA9IGNyZWF0ZUFjdGlvbigncmVzZXRMb2dpbkRhdGEnKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgc3R1ZGlvTG9naW4sXG4gIHN0dWRpb0xvZ2luU3VjY2VzcyxcbiAgc3R1ZGlvTG9naW5GYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ3N0dWRpb0xvZ2luJywgJ1NUVURJT19MT0dJTicpO1xuXG5leHBvcnQgY29uc3Qge1xuICBwZXJmb3JtZXJSZWdpc3RlcixcbiAgcGVyZm9ybWVyUmVnaXN0ZXJTdWNjZXNzLFxuICBwZXJmb3JtZXJSZWdpc3RlckZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbigncGVyZm9ybWVyUmVnaXN0ZXInLCAnUEVSRk9STUVSX1JFR0lTVEVSJyk7XG5leHBvcnQgY29uc3Qgc2V0UGVyZm9ybWVyUmVnaXN0ZXJTdWJtaXR0aW5nID0gY3JlYXRlQWN0aW9uKFxuICAnU0VUX1BFUkZPUk1FUl9SRUdJU1RFUl9TVUJNSVRUSU5HJ1xuKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgdXNlclJlZ2lzdGVyLFxuICB1c2VyUmVnaXN0ZXJTdWNjZXNzLFxuICB1c2VyUmVnaXN0ZXJGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ3VzZXJSZWdpc3RlcicsICdVU0VSX1JFR0lTVEVSJyk7XG5leHBvcnQgY29uc3Qgc2V0VXNlclJlZ2lzdGVyU3VibWl0dGluZyA9IGNyZWF0ZUFjdGlvbihcbiAgJ1NFVF9VU0VSX1JFR0lTVEVSX1NVQk1JVFRJTkcnXG4pO1xuXG5leHBvcnQgY29uc3Qge1xuICB1cGRhdGVQYXNzd29yZCxcbiAgdXBkYXRlUGFzc3dvcmRTdWNjZXNzLFxuICB1cGRhdGVQYXNzd29yZEZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbigndXBkYXRlUGFzc3dvcmQnLCAnVVBEQVRFX1BBU1NXT1JEJyk7XG5leHBvcnQgY29uc3Qgc2V0VXBkYXRlUGFzc3dvcmRTdWJtaXR0aW5nID0gY3JlYXRlQWN0aW9uKFxuICAnU0VUX1VQREFURV9QQVNTV09SRF9TVUJNSVRUSU5HJ1xuKTtcblxuZXhwb3J0IGNvbnN0IGxvZ291dCA9IGNyZWF0ZUFjdGlvbignbG9nb3V0Jyk7XG4iLCJpbXBvcnQgeyBjcmVhdGVBc3luY0FjdGlvbiwgY3JlYXRlQWN0aW9uIH0gZnJvbSAnc3JjL2xpYi9yZWR1eCc7XG5cbmV4cG9ydCBjb25zdCB7XG4gIGdldFBlcmZvcm1lckNhdGVnb3JpZXMsXG4gIGdldFBlcmZvcm1lckNhdGVnb3JpZXNTdWNjZXNzLFxuICBnZXRQZXJmb3JtZXJDYXRlZ29yaWVzRmFpbFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCdnZXRQZXJmb3JtZXJDYXRlZ29yaWVzJywgJ0dFVF9QRVJGT1JNRVJfQ0FURUdPUklFUycpO1xuXG5leHBvcnQgY29uc3Qge1xuICBzZWFyY2hQZXJmb3JtZXIsXG4gIHNlYXJjaFBlcmZvcm1lclN1Y2Nlc3MsXG4gIHNlYXJjaFBlcmZvcm1lckZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbignc2VhcmNoUGVyZm9ybWVyJywgJ1NFQVJDSF9QRVJGT1JNRVInKTtcblxuZXhwb3J0IGNvbnN0IHNldFBlcmZvcm1lclNlYXJjaGluZyA9IGNyZWF0ZUFjdGlvbignU0VUX1BFUkZPUk1FUl9TRUFSQ0hJTkcnKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgdXBkYXRlUGVyZm9ybWVyUHJvZmlsZSxcbiAgdXBkYXRlUGVyZm9ybWVyUHJvZmlsZVN1Y2Nlc3MsXG4gIHVwZGF0ZVBlcmZvcm1lclByb2ZpbGVGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ3VwZGF0ZVBlcmZvcm1lclByb2ZpbGUnLCAnVVBEQVRFX1BFUkZPUk1FUl9QUk9GSUxFJyk7XG5leHBvcnQgY29uc3Qgc2V0dXBkYXRpbmdQZXJmb3JtZXJQcm9maWxlID0gY3JlYXRlQWN0aW9uKFxuICAndXBkYXRpbmdQZXJmb3JtZXJQcm9maWxlJ1xuKTtcbmV4cG9ydCBjb25zdCB1cGRhdGVQYXltZW50SW5mbyA9IGNyZWF0ZUFjdGlvbignVVBEQVRFX1BBWU1FTlRfSU5GTycpO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZURpcmVjdERlcG9zaXQgPSBjcmVhdGVBY3Rpb24oJ1VQREFURV9ESVJFQ1RfREVQT1NJVCcpO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZVBheHVtID0gY3JlYXRlQWN0aW9uKCdVUERBVEVfUEFYVU0nKTtcbmV4cG9ydCBjb25zdCB1cGRhdGVCaXRwYXkgPSBjcmVhdGVBY3Rpb24oJ1VQREFURV9CSVRQQVknKTtcbmV4cG9ydCBjb25zdCB1cGRhdGVTdHJlYW1pbmdTdGF0dXMgPSBjcmVhdGVBY3Rpb24oJ1VQREFURV9TVFJFQU1JTkdfU1RBVFVTJyk7XG5leHBvcnQgY29uc3QgdXBkYXRlRGVmYXVsdFByaWNlID0gY3JlYXRlQWN0aW9uKCdVUERBVEVfREVGQVVMVF9QUklDRScpO1xuXG5leHBvcnQgY29uc3Qge1xuICBnZXRQZXJmb3JtZXJEZXRhaWxzLFxuICBnZXRQZXJmb3JtZXJEZXRhaWxzU3VjY2VzcyxcbiAgZ2V0UGVyZm9ybWVyRGV0YWlsc0ZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbignZ2V0UGVyZm9ybWVyRGV0YWlscycsICdHRVRfUEVSRk9STUVSX0RFVEFJTFMnKTtcbmV4cG9ydCBjb25zdCBzZXRHZXR0aW5nUGVyZm9ybWVyRGV0YWlscyA9IGNyZWF0ZUFjdGlvbihcbiAgJ3NldEdldHRpbmdQZXJmb3JtZXJEZXRhaWxzJ1xuKTtcbmV4cG9ydCBjb25zdCBzZXRQZXJmb3JtZXJEZXRhaWxzID0gY3JlYXRlQWN0aW9uKCdTRVRfUEVSRk9STUVSX0RFVEFJTFMnKTtcbmV4cG9ydCBjb25zdCB1cGRhdGVQZXJmb3JtZXJBc3NldCA9IGNyZWF0ZUFjdGlvbignVVBEQVRFX1BFUkZPUk1FUl9BU1NFVCcpO1xuZXhwb3J0IGNvbnN0IHNldEZhdm9yaXRlUGVyZm9ybWVyRGV0YWlscyA9IGNyZWF0ZUFjdGlvbihcbiAgJ1NFVF9GQVZPUklURV9QRVJGT1JNRVJfREVUQUlMUydcbik7XG5cbmV4cG9ydCBjb25zdCB7XG4gIGdldE15UHJvZHVjdHMsXG4gIGdldE15UHJvZHVjdHNTdWNjZXNzLFxuICBnZXRNeVByb2R1Y3RzRmFpbFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCdnZXRNeVByb2R1Y3RzJywgJ0dFVF9NWV9QUk9EVUNUJyk7XG5leHBvcnQgY29uc3Qgc2V0R2V0dGluZ015UHJvZHVjdHMgPSBjcmVhdGVBY3Rpb24oJ3NldEdldHRpbmdNeVByb2R1Y3RzJyk7XG5leHBvcnQgY29uc3QgYWRkTXlQcm9kdWN0ID0gY3JlYXRlQWN0aW9uKCdhZGRNeVByb2R1Y3QnKTtcbmV4cG9ydCBjb25zdCByZW1vdmVNeVByb2R1Y3QgPSBjcmVhdGVBY3Rpb24oJ3JlbW92ZU15UHJvZHVjdCcpO1xuXG5leHBvcnQgY29uc3Qge1xuICBnZXRFYXJuaW5nLFxuICBnZXRFYXJuaW5nU3VjY2VzcyxcbiAgZ2V0RWFybmluZ0ZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbignZ2V0RWFybmluZycsICdHRVRfRUFSTklORycpO1xuZXhwb3J0IGNvbnN0IHNldEdldHRpbmdFYXJuaW5nID0gY3JlYXRlQWN0aW9uKCdTRVRfR0VUVElOR19FQVJOSUcnKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgZ2V0UGF5b3V0UmVxdWVzdCxcbiAgZ2V0UGF5b3V0UmVxdWVzdFN1Y2Nlc3MsXG4gIGdldFBheW91dFJlcXVlc3RGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ2dldFBheW91dFJlcXVlc3QnLCAnR0VUX1BBWU9VVF9SRVFVRVNUJyk7XG5leHBvcnQgY29uc3Qgc2V0R2V0dGluZ1BheW91dFJlcXVlc3QgPSBjcmVhdGVBY3Rpb24oJ1NFVF9HRVRUSU5HX1BBWU9VVF9SRVFVRVNUJyk7XG5leHBvcnQgY29uc3QgcmVtb3ZlUGF5b3V0UmVxdWVzdCA9IGNyZWF0ZUFjdGlvbignUkVNT1ZFX1BBWU9VVF9SRVFVRVNUJyk7XG5cbmV4cG9ydCBjb25zdCB7XG4gIGdldE15VmlkZW9zLFxuICBnZXRNeVZpZGVvc1N1Y2Nlc3MsXG4gIGdldE15VmlkZW9zRmFpbFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCdnZXRNeVZpZGVvcycsICdHRVRfTVlfVklERU8nKTtcbmV4cG9ydCBjb25zdCBzZXRnZXR0aW5nTXlWaWRlb3MgPSBjcmVhdGVBY3Rpb24oJ3NldGdldHRpbmdNeVZpZGVvcycpO1xuZXhwb3J0IGNvbnN0IGFkZE15VmlkZW9zID0gY3JlYXRlQWN0aW9uKCdhZGRNeVZpZGVvcycpO1xuZXhwb3J0IGNvbnN0IHJlbW92ZU15VmlkZW8gPSBjcmVhdGVBY3Rpb24oJ3JlbW92ZU15VmlkZW8nKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgZ2V0TXlQaG90b3MsXG4gIGdldE15UGhvdG9zU3VjY2VzcyxcbiAgZ2V0TXlQaG90b3NGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ2dldE15UGhvdG9zJywgJ0dFVF9NWV9QSE9UTycpO1xuZXhwb3J0IGNvbnN0IHNldGdldHRpbmdNeVBob3RvcyA9IGNyZWF0ZUFjdGlvbignc2V0Z2V0dGluZ015UGhvdG9zJyk7XG5leHBvcnQgY29uc3QgYWRkTXlQaG90b3MgPSBjcmVhdGVBY3Rpb24oJ2FkZE15UGhvdG9zJyk7XG5leHBvcnQgY29uc3QgcmVtb3ZlTXlQaG90byA9IGNyZWF0ZUFjdGlvbigncmVtb3ZlTXlQaG90bycpO1xuXG5leHBvcnQgY29uc3Qge1xuICBnZXRNeUdhbGxlcmllcyxcbiAgZ2V0TXlHYWxsZXJpZXNTdWNjZXNzLFxuICBnZXRNeUdhbGxlcmllc0ZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbignZ2V0TXlHYWxsZXJpZXMnLCAnR0VUX01ZX0dBTExFUklFUycpO1xuZXhwb3J0IGNvbnN0IHNldGdldHRpbmdNeUdhbGxlcmllcyA9IGNyZWF0ZUFjdGlvbignc2V0Z2V0dGluZ015R2FsbGVyaWVzJyk7XG5leHBvcnQgY29uc3QgYWRkTXlHYWxsZXJpZXMgPSBjcmVhdGVBY3Rpb24oJ2FkZE15R2FsbGVyaWVzJyk7XG5leHBvcnQgY29uc3QgcmVtb3ZlTXlHYWxsZXJpZXMgPSBjcmVhdGVBY3Rpb24oJ3JlbW92ZU15R2FsbGVyaWVzJyk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVDdXJyZW50UGVyZm9ybWVyID0gY3JlYXRlQWN0aW9uKCd1cGRhdGVDdXJyZW50UGVyZm9ybWVyJyk7XG5leHBvcnQgY29uc3QgdXBkYXRlUGVyZm9ybWVyRmF2b3VyaXRlID0gY3JlYXRlQWN0aW9uKFxuICAnVVBEQVRFX1BFUkZPUk1FUl9GQVZPVVJJVEUnXG4pO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZUN1cnJlbnRQZXJmb3JtZXJCYWxhbmNlID0gY3JlYXRlQWN0aW9uKFxuICAnVVBEQVRFX0NVUlJFTlRfUEVSRk9STUVSX0JBTEFOQ0UnXG4pO1xuIiwiaW1wb3J0IHtcbiAgY3JlYXRlQWN0aW9uLFxuICBjcmVhdGVBc3luY0FjdGlvblxufSBmcm9tICdAbGliL3JlZHV4JztcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUN1cnJlbnRTdHVkaW8gPSBjcmVhdGVBY3Rpb24oJ3VwZGF0ZUN1cnJlbnRTdHVkaW8nKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgdXBkYXRlU3R1ZGlvLFxuICB1cGRhdGVTdHVkaW9TdWNjZXNzLFxuICB1cGRhdGVTdHVkaW9GYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ3VwZGF0ZVN0dWRpbycsICdVUERBVEVfU1RVRElPJyk7XG5cbmV4cG9ydCBjb25zdCBzZXRVcGRhdGluZ1N0dWRpbyA9IGNyZWF0ZUFjdGlvbigndXBkYXRpbmdTdHVkaW8nKTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVN0dWRpb1BheW1lbnRJbmZvID0gY3JlYXRlQWN0aW9uKFxuICAnVVBEQVRFX1NUVURJT19QQVlNRU5UX0lORk8nXG4pO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZVN0dWRpb0RpcmVjdERlcG9zaXQgPSBjcmVhdGVBY3Rpb24oXG4gICdVUERBVEVfU1RVRElPX0RJUkVDVF9ERVBPU0lUJ1xuKTtcbmV4cG9ydCBjb25zdCB1cGRhdGVTdHVkaW9QYXh1bSA9IGNyZWF0ZUFjdGlvbignVVBEQVRFX1NUVURJT19QQVhVTScpO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZVN0dWRpb0JpdHBheSA9IGNyZWF0ZUFjdGlvbignVVBEQVRFX1NUVURJT19CSVRQQVknKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgZ2V0U3R1ZGlvRWFybmluZyxcbiAgZ2V0U3R1ZGlvRWFybmluZ1N1Y2Nlc3MsXG4gIGdldFN0dWRpb0Vhcm5pbmdGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ2dldFN0dWRpb0Vhcm5pbmcnLCAnR0VUX1NUVURJT19FQVJOSU5HJyk7XG5leHBvcnQgY29uc3Qgc2V0R2V0dGluZ1N0dWRpb0Vhcm5pbmcgPSBjcmVhdGVBY3Rpb24oXG4gICdTRVRfR0VUVElOR19TVFVESU9fRUFSTklHJ1xuKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgZ2V0U3R1ZGlvUGF5b3V0UmVxdWVzdCxcbiAgZ2V0U3R1ZGlvUGF5b3V0UmVxdWVzdFN1Y2Nlc3MsXG4gIGdldFN0dWRpb1BheW91dFJlcXVlc3RGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ2dldFN0dWRpb1BheW91dFJlcXVlc3QnLCAnR0VUX1NUVURJT19QQVlPVVRfUkVRVUVTVCcpO1xuZXhwb3J0IGNvbnN0IHNldEdldHRpbmdTdHVkaW9QYXlvdXRSZXF1ZXN0ID0gY3JlYXRlQWN0aW9uKFxuICAnU0VUX0dFVFRJTkdfU1RVRElPX1BBWU9VVF9SRVFVRVNUJ1xuKTtcbmV4cG9ydCBjb25zdCByZW1vdmVTdHVkaW9QYXlvdXRSZXF1ZXN0ID0gY3JlYXRlQWN0aW9uKFxuICAnUkVNT1ZFX1NUVURJT19QQVlPVVRfUkVRVUVTVCdcbik7XG5cbmV4cG9ydCBjb25zdCB7XG4gIGdldFBlcmZvcm1lclJlcXVlc3QsXG4gIGdldFBlcmZvcm1lclJlcXVlc3RTdWNjZXNzLFxuICBnZXRQZXJmb3JtZXJSZXF1ZXN0RmFpbFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCdnZXRQZXJmb3JtZXJSZXF1ZXN0JywgJ0dFVF9QRVJGT1JNRVJfUkVRVUVTVCcpO1xuZXhwb3J0IGNvbnN0IHNldEdldHRpbmdQZXJmb3JtZXJSZXF1ZXN0ID0gY3JlYXRlQWN0aW9uKFxuICAnU0VUX0dFVFRJTkdfUEVSRk9STUVSX1JFUVVFU1QnXG4pO1xuXG5leHBvcnQgY29uc3Qge1xuICBnZXRNZW1iZXJzLFxuICBnZXRNZW1iZXJzU3VjY2VzcyxcbiAgZ2V0TWVtYmVyc0ZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbignZ2V0TWVtYmVycycsICdHRVRfTUVNQkVSUycpO1xuZXhwb3J0IGNvbnN0IGdldE1lbWJlcnNTZWFyY2hpbmcgPSBjcmVhdGVBY3Rpb24oJ0dFVF9NRU1CRVJfU0VBQ0hJTkcnKTtcbmV4cG9ydCBjb25zdCB1cGRhdGVNZW1iZXJTdGF0dXMgPSBjcmVhdGVBY3Rpb24oJ1VQREFURV9NRU1CRVJfU1RBVFVTJyk7XG5cbmV4cG9ydCBjb25zdCB7XG4gIGdldE1lbWJlcnNDb21taXNzaW9ucyxcbiAgZ2V0TWVtYmVyc0NvbW1pc3Npb25zU3VjY2VzcyxcbiAgZ2V0TWVtYmVyc0NvbW1pc3Npb25zRmFpbFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCdnZXRNZW1iZXJzQ29tbWlzc2lvbnMnLCAnR0VUX01FTUJFUlNfQ09NTVNTSU9OUycpO1xuZXhwb3J0IGNvbnN0IGdldE1lbWJlcnNDb21taXNzaW9uc1NlYXJjaGluZyA9IGNyZWF0ZUFjdGlvbihcbiAgJ0dFVF9NRU1CRVJfQ09NTVNTSU9fU0VBQ0hJTkcnXG4pO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZU1lbWJlckNvbW1pc2lvbiA9IGNyZWF0ZUFjdGlvbignVVBEQVRFX01FTUJFUl9DT01NSVNTSU9OJyk7XG5cbmV4cG9ydCBjb25zdCB7XG4gIGdldFN0dWRpb1N0YXRzLFxuICBnZXRTdHVkaW9TdGF0c1N1Y2Nlc3MsXG4gIGdldFN0dWRpb1N0YXRzRmFpbFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCdnZXRTdHVkaW9TdGF0cycsICdHRVRfU1RVRElPX1NUQVRTJyk7XG5leHBvcnQgY29uc3QgdXBkYXRlVG90YWxQZXJmb3JtZXIgPSBjcmVhdGVBY3Rpb24oJ1VQREFURV9UT1RBTF9QRVJGT1JNRVInKTtcbiIsImltcG9ydCB7XG4gIGNyZWF0ZUFjdGlvbixcbiAgY3JlYXRlQXN5bmNBY3Rpb25cbn0gZnJvbSAnQGxpYi9yZWR1eCc7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVDdXJyZW50VXNlciA9IGNyZWF0ZUFjdGlvbigndXBkYXRlQ3VycmVudFVzZXInKTtcbmV4cG9ydCBjb25zdCB1cGRhdGVDdXJyZW50VXNlckF2YXRhciA9IGNyZWF0ZUFjdGlvbigndXBkYXRlQ3VycmVudFVzZXJBdmF0YXInKTtcbmV4cG9ydCBjb25zdCB1cGRhdGVDdXJyZW50VXNlckJhbGFuY2UgPSBjcmVhdGVBY3Rpb24oXG4gICd1cGRhdGVDdXJyZW50VXNlckJhbGFuY2UnXG4pO1xuXG5leHBvcnQgY29uc3Qge1xuICB1cGRhdGVVc2VyLFxuICB1cGRhdGVVc2VyU3VjY2VzcyxcbiAgdXBkYXRlVXNlckZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbigndXBkYXRlVXNlcicsICdVUERBVEVfVVNFUicpO1xuXG5leHBvcnQgY29uc3Qgc2V0VXBkYXRpbmcgPSBjcmVhdGVBY3Rpb24oJ3VwZGF0aW5nVXNlcicpO1xuXG5leHBvcnQgY29uc3Qgc2V0UmVkdWNlciA9IGNyZWF0ZUFjdGlvbignc2V0VXNlclJlZHVjZXInKTtcblxuZXhwb3J0IGNvbnN0IGJ1eVRva2VuU3VjY2VzcyA9IGNyZWF0ZUFjdGlvbignYnV5VG9rZW5TdWNjZXNzJyk7XG5cbmV4cG9ydCBjb25zdCB7XG4gIGdldEZhdm9yaXRlUGVyZm9ybWVycyxcbiAgZ2V0RmF2b3JpdGVQZXJmb3JtZXJzU3VjY2VzcyxcbiAgZ2V0RmF2b3JpdGVQZXJmb3JtZXJzRmFpbGVkXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ2dldEZhdm9yaXRlUGVyZm9ybWVycycsICdHRVRfRkFWT1VSSVRFJyk7XG5leHBvcnQgY29uc3QgZ2V0dGluZ0Zhdm9yaXRlUGVyZm9ybWVycyA9IGNyZWF0ZUFjdGlvbignR0VUVElOR19GQVZPUklURScpO1xuZXhwb3J0IGNvbnN0IHJlbW92ZUZhdm9yaXRlID0gY3JlYXRlQWN0aW9uKCdSRU1PVkVfRkFWT1JJVEUnKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgZ2V0UGF5bWVudFRva2VuSGlzdHJveSxcbiAgZ2V0UGF5bWVudFRva2VuSGlzdHJveVN1Y2Nlc3MsXG4gIGdldFBheW1lbnRUb2tlbkhpc3Ryb3lGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ2dldFBheW1lbnRUb2tlbkhpc3Ryb3knLCAnR0VUX1BBWU1FVF9UT0tFX0hJU1RPUlknKTtcbmV4cG9ydCBjb25zdCBnZXR0aWdQYXltZW50VG9rZW5IaXN0b3J5ID0gY3JlYXRlQWN0aW9uKCdHRVRUSU5HX1BBWU1FVF9UT0tFX0hJU1RPUlknKTtcbiIsImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IHsgb21pdCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSc7XG5pbXBvcnQgeyBpc1VybCB9IGZyb20gJ0BsaWIvc3RyaW5nJztcbmltcG9ydCB7IElSZWdpc3RlckZvcm1EYXRhIH0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgZ2V0R2xvYmFsQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElSZXNwb25zZTxUPiB7XG4gIHN0YXR1czogbnVtYmVyO1xuICBkYXRhOiBUO1xufVxuXG5leHBvcnQgY29uc3QgVE9LRU4gPSAndG9rZW4nO1xuZXhwb3J0IGNvbnN0IFJPTEUgPSAncm9sZSc7XG5leHBvcnQgY29uc3QgUEVSRk9STUVSX1JPTEUgPSAncGVyZm9ybWVyJztcbmV4cG9ydCBjb25zdCBVU0VSX1JPTEUgPSAndXNlcic7XG5leHBvcnQgY29uc3QgU1RVRElPX1JPTEUgPSAnc3R1ZGlvJztcbmV4cG9ydCBjb25zdCBTT1JUID0geyBkZXNjZW5kOiAnZGVzYycsIGFzY2VuZDogJ2FzYycgfTtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFQSVJlcXVlc3Qge1xuICBzdGF0aWMgdG9rZW46IHN0cmluZyA9ICcnO1xuXG4gIHNldEF1dGhIZWFkZXJUb2tlbih0b2tlbjogc3RyaW5nKSB7XG4gICAgQVBJUmVxdWVzdC50b2tlbiA9IHRva2VuO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlcyB0aGUgSlNPTiByZXR1cm5lZCBieSBhIG5ldHdvcmsgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0gIHtvYmplY3R9IHJlc3BvbnNlIEEgcmVzcG9uc2UgZnJvbSBhIG5ldHdvcmsgcmVxdWVzdFxuICAgKlxuICAgKiBAcmV0dXJuIHtvYmplY3R9ICAgICAgICAgIFRoZSBwYXJzZWQgSlNPTiBmcm9tIHRoZSByZXF1ZXN0XG4gICAqL1xuICBwcml2YXRlIHBhcnNlSlNPTihyZXNwb25zZTogUmVzcG9uc2UpIHtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDQgfHwgcmVzcG9uc2Uuc3RhdHVzID09PSAyMDUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBhIG5ldHdvcmsgcmVxdWVzdCBjYW1lIGJhY2sgZmluZSwgYW5kIHRocm93cyBhbiBlcnJvciBpZiBub3RcbiAgICpcbiAgICogQHBhcmFtICB7b2JqZWN0fSByZXNwb25zZSAgIEEgcmVzcG9uc2UgZnJvbSBhIG5ldHdvcmsgcmVxdWVzdFxuICAgKlxuICAgKiBAcmV0dXJuIHtvYmplY3R8dW5kZWZpbmVkfSBSZXR1cm5zIGVpdGhlciB0aGUgcmVzcG9uc2UsIG9yIHRocm93cyBhbiBlcnJvclxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBjaGVja1N0YXR1cyhyZXNwb25zZTogUmVzcG9uc2UpIHtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID49IDIwMCAmJiByZXNwb25zZS5zdGF0dXMgPCAzMDApIHtcbiAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG5cbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MTMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWVzdCBFbnRpdHkgVG9vIExhcmdlJyk7XG4gICAgfVxuXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAzKSB7XG4gICAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZvcmJpZGRlbiBpbiB0aGUgYWN0aW9uIScpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KSBhcyBhbnk7XG4gICAgLy8gZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAvLyB0aHJvdyBlcnJvcjtcbiAgICB0aHJvdyByZXNwb25zZS5jbG9uZSgpLmpzb24oKTtcbiAgfVxuXG4gIHJlcXVlc3QoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgbWV0aG9kPzogc3RyaW5nLFxuICAgIGJvZHk/OiBhbnksXG4gICAgaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH1cbiAgKTogUHJvbWlzZTxJUmVzcG9uc2U8YW55Pj4ge1xuICAgIGNvbnN0IHZlcmIgPSAobWV0aG9kIHx8ICdnZXQnKS50b1VwcGVyQ2FzZSgpO1xuICAgIGNvbnN0IHVwZGF0ZWRIZWFkZXIgPSB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgLy8gVE9ETyAtIGNoZWNrIG1lXG4gICAgICBBdXRob3JpemF0aW9uOlxuICAgICAgICBBUElSZXF1ZXN0LnRva2VuIHx8IChwcm9jZXNzLmJyb3dzZXIgPyBjb29raWUuZ2V0KFRPS0VOKSA6ICcnKSxcbiAgICAgIC4uLihoZWFkZXJzIHx8IHt9KVxuICAgIH07XG4gICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG5cbiAgICByZXR1cm4gZmV0Y2goaXNVcmwodXJsKSA/IHVybCA6IGAke2NvbmZpZy5BUElfRU5EUE9JTlQgfHwgY29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0ke3VybH1gLCB7XG4gICAgICBtZXRob2Q6IHZlcmIsXG4gICAgICBoZWFkZXJzOiB1cGRhdGVkSGVhZGVyLFxuICAgICAgYm9keTogYm9keSA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogbnVsbFxuICAgIH0pXG4gICAgICAudGhlbih0aGlzLmNoZWNrU3RhdHVzKVxuICAgICAgLnRoZW4odGhpcy5wYXJzZUpTT04pO1xuICB9XG5cbiAgYnVpbGRVcmwoYmFzZVVybDogc3RyaW5nLCBwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4gfSkge1xuICAgIGlmICghcGFyYW1zKSB7XG4gICAgICByZXR1cm4gYmFzZVVybDtcbiAgICB9XG5cbiAgICBjb25zdCBxdWVyeVN0cmluZyA9IE9iamVjdC5rZXlzKHBhcmFtcylcbiAgICAgIC5tYXAoKGspID0+IGAke2VuY29kZVVSSUNvbXBvbmVudChrKX09JHtlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW2tdKX1gKVxuICAgICAgLmpvaW4oJyYnKTtcbiAgICByZXR1cm4gYCR7YmFzZVVybH0/JHtxdWVyeVN0cmluZ31gO1xuICB9XG5cbiAgZ2V0KHVybDogc3RyaW5nLCBoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXJsLCAnZ2V0JywgbnVsbCwgaGVhZGVycyk7XG4gIH1cblxuICBwb3N0KHVybDogc3RyaW5nLCBkYXRhPzogYW55LCBoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXJsLCAncG9zdCcsIGRhdGEsIGhlYWRlcnMpO1xuICB9XG5cbiAgcHV0KHVybDogc3RyaW5nLCBkYXRhPzogYW55LCBoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXJsLCAncHV0JywgZGF0YSwgaGVhZGVycyk7XG4gIH1cblxuICBkZWwodXJsOiBzdHJpbmcsIGRhdGE/OiBhbnksIGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1cmwsICdkZWxldGUnLCBkYXRhLCBoZWFkZXJzKTtcbiAgfVxuXG4gIHVwbG9hZChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBmaWxlczoge1xuICAgICAgZmlsZTogRmlsZTtcbiAgICAgIGZpZWxkbmFtZTogc3RyaW5nO1xuICAgIH1bXSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBvblByb2dyZXNzOiBGdW5jdGlvbjtcbiAgICAgIGN1c3RvbURhdGE/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xuICAgICAgbWV0aG9kPzogc3RyaW5nO1xuICAgIH0gPSB7XG4gICAgICBvblByb2dyZXNzKCkge30sXG4gICAgICBtZXRob2Q6ICdQT1NUJ1xuICAgIH1cbiAgKSB7XG4gICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG4gICAgY29uc3QgdXBsb2FkVXJsID0gaXNVcmwodXJsKSA/IHVybCA6IGAke2NvbmZpZy5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlR9JHt1cmx9YDtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50Lmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgICBvcHRpb25zLm9uUHJvZ3Jlc3Moe1xuICAgICAgICAgICAgcGVyY2VudGFnZTogKGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsKSAqIDEwMFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmVxLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSByZXEuc3RhdHVzID49IDIwMCAmJiByZXEuc3RhdHVzIDwgMzAwO1xuICAgICAgICBjb25zdCB7IHJlc3BvbnNlIH0gPSByZXE7XG4gICAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICAgIHJldHVybiByZWplY3QocmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgICByZWplY3QocmVxLnJlc3BvbnNlKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgZmlsZXMuZm9yRWFjaCgoZikgPT4gZm9ybURhdGEuYXBwZW5kKGYuZmllbGRuYW1lLCBmLmZpbGUsIGYuZmlsZS5uYW1lKSk7XG4gICAgICBvcHRpb25zLmN1c3RvbURhdGFcbiAgICAgICAgJiYgT2JqZWN0LmtleXMob3B0aW9ucy5jdXN0b21EYXRhKS5mb3JFYWNoKFxuICAgICAgICAgIChmaWVsZG5hbWUpID0+IHR5cGVvZiBvcHRpb25zLmN1c3RvbURhdGFbZmllbGRuYW1lXSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICYmIGZvcm1EYXRhLmFwcGVuZChmaWVsZG5hbWUsIG9wdGlvbnMuY3VzdG9tRGF0YVtmaWVsZG5hbWVdKVxuICAgICAgICApO1xuXG4gICAgICByZXEucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xuICAgICAgcmVxLm9wZW4ob3B0aW9ucy5tZXRob2QgfHwgJ1BPU1QnLCB1cGxvYWRVcmwpO1xuXG4gICAgICBjb25zdCB0b2tlbjogYW55ID0gY29va2llLmdldChUT0tFTik7XG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCB0b2tlbik7XG4gICAgICB9XG4gICAgICByZXEuc2VuZChmb3JtRGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICByZWdpc3RlcihcbiAgICB1cmw6IHN0cmluZyxcbiAgICBkYXRhOiBJUmVnaXN0ZXJGb3JtRGF0YSxcbiAgICBvcHRpb25zOiB7IG9uUHJvZ3Jlc3M6IEZ1bmN0aW9uIH0gPSB7XG4gICAgICBvblByb2dyZXNzKCkge31cbiAgICB9XG4gICkge1xuICAgIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgcmVxLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQubGVuZ3RoQ29tcHV0YWJsZSkge1xuICAgICAgICAgIG9wdGlvbnMub25Qcm9ncmVzcyh7XG4gICAgICAgICAgICBwZXJjZW50YWdlOiAoZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWwpICogMTAwXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXEuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IHJlcS5zdGF0dXMgPj0gMjAwICYmIHJlcS5zdGF0dXMgPCAzMDA7XG4gICAgICAgIGNvbnN0IHsgcmVzcG9uc2UgfSA9IHJlcTtcbiAgICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChyZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgfSk7XG5cbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG4gICAgICAgIHJlamVjdChyZXEucmVzcG9uc2UpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAvLyBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlLCBmaWxlLm5hbWUpO1xuICAgICAgaWYgKGRhdGEuZG9jdW1lbnRWZXJpZmljYXRpb24pIHtcbiAgICAgICAgY29uc3QgZG9jdW1lbnRWZXJpZmljYXRpb25GaWxlID0gZGF0YS5kb2N1bWVudFZlcmlmaWNhdGlvbi5maWxlLm9yaWdpbkZpbGVPYmo7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcbiAgICAgICAgICAnZG9jdW1lbnRWZXJpZmljYXRpb24nLFxuICAgICAgICAgIGRvY3VtZW50VmVyaWZpY2F0aW9uRmlsZSxcbiAgICAgICAgICBkb2N1bWVudFZlcmlmaWNhdGlvbkZpbGUubmFtZVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YS5pZFZlcmlmaWNhdGlvbikge1xuICAgICAgICBjb25zdCBpZFZlcmlmaWNhdGlvbkRpbGUgPSBkYXRhLmlkVmVyaWZpY2F0aW9uLmZpbGUub3JpZ2luRmlsZU9iajtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFxuICAgICAgICAgICdpZFZlcmlmaWNhdGlvbicsXG4gICAgICAgICAgaWRWZXJpZmljYXRpb25EaWxlLFxuICAgICAgICAgIGlkVmVyaWZpY2F0aW9uRGlsZS5uYW1lXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5rZXlzKFxuICAgICAgICBvbWl0KGRhdGEsIFsnZG9jdW1lbnRWZXJpZmljYXRpb24nLCAnaWRWZXJpZmljYXRpb24nXSlcbiAgICAgICkuZm9yRWFjaCgodikgPT4ge1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQodiwgZGF0YVt2XSk7XG4gICAgICB9KTtcblxuICAgICAgcmVxLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcbiAgICAgIHJlcS5vcGVuKCdQT1NUJywgaXNVcmwodXJsKSA/IHVybCA6IGAke2NvbmZpZy5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlR9JHt1cmx9YCk7XG5cbiAgICAgIGNvbnN0IHRva2VuOiBhbnkgPSBjb29raWUuZ2V0KFRPS0VOKTtcbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICByZXEuc2V0UmVxdWVzdEhlYWRlcignQXV0aG9yaXphdGlvbicsIHRva2VuKTtcbiAgICAgIH1cbiAgICAgIHJlcS5zZW5kKGZvcm1EYXRhKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnO1xuaW1wb3J0IHtcbiAgSUxvZ2luLFxuICBJcGVyZm9ybWVyTG9naW4sXG4gIElSZWdpc3RlckZvcm1EYXRhLFxuICBJVXNlclJlZ2lzdGVyRm9ybURhdGFcbn0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IHtcbiAgQVBJUmVxdWVzdCwgVE9LRU4sIElSZXNwb25zZSwgUk9MRVxufSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIGxvZ2luKGRhdGE6IElMb2dpbikge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9hdXRoL3VzZXJzL2xvZ2luJywgZGF0YSk7XG4gIH1cblxuICBzZXRBdXRoSGVhZGVyKHRva2VuOiBzdHJpbmcsIHJvbGU6IHN0cmluZykge1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qcy1jb29raWUvanMtY29va2llXG4gICAgLy8gc2luY2UgU2FmYXJpIGRvZXMgbm90IHN1cHBvcnQsIG5lZWQgYSBiZXR0ZXIgc29sdXRpb25cbiAgICBjb29raWUuc2V0KFRPS0VOLCB0b2tlbiwgeyBleHBpcmVzOiAzNjUgfSk7XG4gICAgY29va2llLnNldChST0xFLCByb2xlLCB7IGV4cGlyZXM6IDM2NSB9KTtcbiAgICB0aGlzLnNldEF1dGhIZWFkZXJUb2tlbih0b2tlbik7XG4gIH1cblxuICBwZXJmb3JtZXJMb2dpbihkYXRhOiBJcGVyZm9ybWVyTG9naW4pIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvYXV0aC9wZXJmb3JtZXJzL2xvZ2luJywgZGF0YSk7XG4gIH1cblxuICBzdHVkaW9Mb2dpbihkYXRhOiBJTG9naW4pIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvYXV0aC9zdHVkaW8vbG9naW4nLCBkYXRhKTtcbiAgfVxuXG4gIHNldFRva2VuKHRva2VuOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vanMtY29va2llL2pzLWNvb2tpZVxuICAgIC8vIHNpbmNlIFNhZmFyaSBkb2VzIG5vdCBzdXBwb3J0LCBuZWVkIGEgYmV0dGVyIHNvbHV0aW9uXG4gICAgY29va2llLnNldChUT0tFTiwgdG9rZW4sIHsgZXhwaXJlczogMzY1IH0pO1xuICAgIHRoaXMuc2V0QXV0aEhlYWRlclRva2VuKHRva2VuKTtcbiAgfVxuXG4gIGdldFRva2VuKCk6IHN0cmluZyB7XG4gICAgY29uc3QgdG9rZW4gPSBjb29raWUuZ2V0KFRPS0VOKTtcbiAgICByZXR1cm4gdG9rZW4gfHwgbnVsbDtcbiAgfVxuXG4gIGdldFJvbGUoKTogc3RyaW5nIHtcbiAgICBjb25zdCByb2xlID0gY29va2llLmdldChST0xFKTtcbiAgICByZXR1cm4gcm9sZSB8fCBudWxsO1xuICB9XG5cbiAgcmVtb3ZlVG9rZW4oKTogdm9pZCB7XG4gICAgY29va2llLnJlbW92ZShUT0tFTik7XG4gICAgY29va2llLnJlbW92ZShST0xFKTtcbiAgfVxuXG4gIHJlbW92ZVJlbWVtYmVyKCk6IHZvaWQge1xuICAgIHByb2Nlc3MuYnJvd3NlciAmJiBjb29raWUucmVtb3ZlKCdyZW1lbWJlck1lJyk7XG4gIH1cblxuICB1cGRhdGVQYXNzd29yZChib2R5OiB7IHBhc3N3b3JkOiBzdHJpbmc7IHNvdXJjZT86IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMucHV0KCcvYXV0aC91c2Vycy9tZS9wYXNzd29yZCcsIGJvZHkpO1xuICB9XG5cbiAgcGVyZm9ybWVyc1JlZ2lzdGVyKGRhdGE6IElSZWdpc3RlckZvcm1EYXRhKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5yZWdpc3RlcignL2F1dGgvcGVyZm9ybWVycy9yZWdpc3RlcicsIGRhdGEpO1xuICB9XG5cbiAgdXNlclJlZ2lzdGVyKGRhdGE6IElVc2VyUmVnaXN0ZXJGb3JtRGF0YSk6IFByb21pc2U8SVJlc3BvbnNlPGFueT4+IHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvYXV0aC91c2Vycy9yZWdpc3RlcicsIGRhdGEpO1xuICB9XG5cbiAgc3R1ZGlvUmVnaXN0ZXIoZGF0YTogSVJlZ2lzdGVyRm9ybURhdGEpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnJlZ2lzdGVyKCcvYXV0aC9zdHVkaW8vcmVnaXN0ZXInLCBkYXRhKTtcbiAgfVxuXG4gIGZvcmdvdFBhc3N3b3JkKGVtYWlsOiBzdHJpbmcsIHR5cGU6IHN0cmluZykge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBlbWFpbCxcbiAgICAgIHR5cGVcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9hdXRoL3VzZXJzL2ZvcmdvdCcsIGRhdGEpO1xuICB9XG5cbiAgcmVzZW5kVmVyaWZpY2F0aW9uRW1haWwoZGF0YTogeyBlbWFpbDogc3RyaW5nLCBzb3VyY2U6IHN0cmluZ30pIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvdmVyaWZpY2F0aW9uL3Jlc2VuZC12ZXJpZmljYXRpb24tZW1haWwnLCBkYXRhKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgYXV0aFNlcnZpY2UgPSBuZXcgQXV0aFNlcnZpY2UoKTtcbiIsImltcG9ydCB7IElCYW5uZXJTZWFyY2ggfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBCYW5uZXJTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIHNlYXJjaChxdWVyeTogSUJhbm5lclNlYXJjaCkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvYmFubmVycy9zZWFyY2gnLCBxdWVyeSBhcyBhbnkpKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgYmFubmVyU2VydmljZSA9IG5ldyBCYW5uZXJTZXJ2aWNlKCk7XG4iLCJsZXQgZ2xvYmFsQ29uZmlnID0ge30gYXMgYW55O1xuXG5leHBvcnQgY29uc3Qgc2V0R2xvYmFsQ29uZmlnID0gKGNvbmZpZzogYW55KSA9PiB7XG4gIGdsb2JhbENvbmZpZyA9IGNvbmZpZztcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRHbG9iYWxDb25maWcgPSAoKSA9PiBnbG9iYWxDb25maWc7XG4iLCJpbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmNsYXNzIEVhcm5pbmdTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIHNlYXJjaChwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9LCByb2xlID0gJ3BlcmZvcm1lcicpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybChgL2Vhcm5pbmcvJHtyb2xlfS9zZWFyY2hgLCBwYXJhbXMpKTtcbiAgfVxuXG4gIHN0YXRzKHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0sIHJvbGUgPSAncGVyZm9ybWVyJykge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKGAvZWFybmluZy8ke3JvbGV9L3N0YXRzYCwgcGFyYW1zKSk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGVhcm5pbmdTZXJ2aWNlID0gbmV3IEVhcm5pbmdTZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmNsYXNzIEZhdm91cml0ZVNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgbGlrZShpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL2Zhdm91cml0ZS8ke2lkfS9saWtlYCk7XG4gIH1cblxuICB1bmxpa2UoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC9mYXZvdXJpdGUvJHtpZH0vdW5saWtlYCk7XG4gIH1cblxuICBmYXZvcml0ZShpZDogc3RyaW5nLCBpc0Zhdm9yaXRlZDogYm9vbGVhbikge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC9mYXZvdXJpdGUvJHtpZH0vJHtpc0Zhdm9yaXRlZCA/ICd1bmxpa2UnIDogJ2xpa2UnfWApO1xuICB9XG5cbiAgc2VhcmNoKHF1ZXJ5OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9mYXZvdXJpdGUnLCBxdWVyeSkpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBmYXZvdXJpdGVTZXJ2aWNlID0gbmV3IEZhdm91cml0ZVNlcnZpY2UoKTtcbiIsImltcG9ydCB7IElSZXNwb25zZSwgSURhdGFSZXNwb25zZSwgSVBlcmZvcm1lckdhbGxlcnkgfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBHYWxsZXJ5U2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBzZWFyY2goXG4gICAgcGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSxcbiAgICBpc1BlcmZvcm1lciA9IHRydWVcbiAgKTogUHJvbWlzZTxJUmVzcG9uc2U8SURhdGFSZXNwb25zZTxJUGVyZm9ybWVyR2FsbGVyeT4+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KFxuICAgICAgdGhpcy5idWlsZFVybChcbiAgICAgICAgaXNQZXJmb3JtZXJcbiAgICAgICAgICA/ICcvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvZ2FsbGVyaWVzL3NlYXJjaCdcbiAgICAgICAgICA6ICcvdXNlci9wZXJmb3JtZXItYXNzZXRzL2dhbGxlcmllcy9zZWFyY2gnLFxuICAgICAgICBwYXJhbXNcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcHVyY2hhc2VkKHBhcmFtcz86IHtcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIH0pOiBQcm9taXNlPElSZXNwb25zZTxJRGF0YVJlc3BvbnNlPElQZXJmb3JtZXJHYWxsZXJ5Pj4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3B1cmNoYXNlZC1pdGVtcy91c2VyL2dhbGxlcmllcycsIHBhcmFtcykpO1xuICB9XG5cbiAgY3JlYXRlKGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvZ2FsbGVyaWVzJywgZGF0YSk7XG4gIH1cblxuICB1cGRhdGUoaWQsIGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5wdXQoYC9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9nYWxsZXJpZXMvJHtpZH1gLCBkYXRhKTtcbiAgfVxuXG4gIGRldGFpbHMoaWQ6IHN0cmluZywgaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoXG4gICAgICBgL3BlcmZvcm1lci9wZXJmb3JtZXItYXNzZXRzL2dhbGxlcmllcy8ke2lkfS92aWV3YCxcbiAgICAgIGhlYWRlcnNcbiAgICApO1xuICB9XG5cbiAgcHVibGljZGV0YWlscyhpZDogc3RyaW5nLCBoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiB0aGlzLmdldChgL3VzZXIvcGVyZm9ybWVyLWFzc2V0cy9nYWxsZXJpZXMvJHtpZH0vdmlld2AsIGhlYWRlcnMpO1xuICB9XG5cbiAgcmVtb3ZlKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5kZWwoYC9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9nYWxsZXJpZXMvJHtpZH1gKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2FsbGVyeVNlcnZpY2UgPSBuZXcgR2FsbGVyeVNlcnZpY2UoKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vdXNlci5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vcG9zdC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vcGVyZm9tZXItY2F0ZWdvcmllcy5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vcGVyZm9tZXIuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3ZpZGVvLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9wcm9kdWN0LnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zZXR0aW5nLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9waG90by5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vZ2FsbGVyeS5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vZmF2b3VyaXRlLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi90b2tlbi1wYWNrYWdlLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi90cmFuc2FjdGlvbi5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vc3RyZWFtLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9tZXNzYWdlLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9wdXJjaGFzZS1pdGVtLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9vcmRlci5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vZWFybmluZy5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vcGF5b3V0LXJlcXVlc3QnO1xuZXhwb3J0ICogZnJvbSAnLi9yZWZ1bmQtcmVxdWVzdC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vdXRpbHMuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3N0dWRpby5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vYmFubmVyLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9wYXltZW50LWluZm9ybWF0aW9uLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zdHJlYW0uc2VydmljZSc7XG4iLCJpbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5pbXBvcnQgeyBnZXRHbG9iYWxDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5cbmV4cG9ydCBjbGFzcyBNZXNzYWdlU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBnZXRDb252ZXJzYXRpb25zKHF1ZXJ5PzogUmVjb3JkPHN0cmluZywgYW55Pikge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvY29udmVyc2F0aW9ucycsIHF1ZXJ5KSk7XG4gIH1cblxuICBzZWFyY2hDb252ZXJzYXRpb25zKHF1ZXJ5PzogUmVjb3JkPHN0cmluZywgYW55Pikge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvY29udmVyc2F0aW9ucy9zZWFyY2gnLCBxdWVyeSkpO1xuICB9XG5cbiAgY3JlYXRlQ29udmVyc2F0aW9uKGRhdGE6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4pIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvY29udmVyc2F0aW9ucycsIGRhdGEpO1xuICB9XG5cbiAgZ2V0Q29udmVyc2F0aW9uRGV0YWlsKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9jb252ZXJzYXRpb25zLyR7aWR9YCk7XG4gIH1cblxuICBnZXRDb252ZXJzYXRpb25CeVN0cmVhbUlkKHN0cmVhbUlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9jb252ZXJzYXRpb25zL3N0cmVhbS8ke3N0cmVhbUlkfWApO1xuICB9XG5cbiAgZ2V0TWVzc2FnZXMoY29udmVyc2F0aW9uSWQ6IHN0cmluZywgcXVlcnk/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoYC9tZXNzYWdlcy9jb252ZXJzYXRpb25zLyR7Y29udmVyc2F0aW9uSWR9YCwgcXVlcnkpKTtcbiAgfVxuXG4gIGdldFB1YmxpY01lc3NhZ2VzKGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsIHF1ZXJ5PzogUmVjb3JkPHN0cmluZywgYW55Pikge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKGAvbWVzc2FnZXMvY29udmVyc2F0aW9ucy9wdWJsaWMvJHtjb252ZXJzYXRpb25JZH1gLCBxdWVyeSkpO1xuICB9XG5cbiAgc2VuZE1lc3NhZ2UoY29udmVyc2F0aW9uSWQ6IHN0cmluZywgZGF0YTogUmVjb3JkPHN0cmluZywgYW55Pikge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC9tZXNzYWdlcy9jb252ZXJzYXRpb25zLyR7Y29udmVyc2F0aW9uSWR9YCwgZGF0YSk7XG4gIH1cblxuICBzZW5kU3RyZWFtTWVzc2FnZShjb252ZXJzYXRpb25JZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL21lc3NhZ2VzL3N0cmVhbS9jb252ZXJzYXRpb25zLyR7Y29udmVyc2F0aW9uSWR9YCwgZGF0YSk7XG4gIH1cblxuICBzZW5kUHVibGljU3RyZWFtTWVzc2FnZShjb252ZXJzYXRpb25JZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL21lc3NhZ2VzL3N0cmVhbS9wdWJsaWMvY29udmVyc2F0aW9ucy8ke2NvbnZlcnNhdGlvbklkfWAsIGRhdGEpO1xuICB9XG5cbiAgZmluZFB1YmxpY0NvbnZlcnNhdGlvblBlcmZvcm1lcihwZXJmb3JtZXJJZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvY29udmVyc2F0aW9ucy9zdHJlYW0vcHVibGljLyR7cGVyZm9ybWVySWR9YCk7XG4gIH1cblxuICBjb3VudFRvdGFsTm90UmVhZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoJy9tZXNzYWdlcy9jb3VudGluZy1ub3QtcmVhZC1tZXNzYWdlcycpO1xuICB9XG5cbiAgcmVhZEFsbEluQ29udmVyc2F0aW9uKGNvbnZlcnNhdGlvbklkOiBzdHJpbmcgfCBudW1iZXIsIHJlY2lwaWVudElkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvbWVzc2FnZXMvcmVhZC1hbGwnLCB7IGNvbnZlcnNhdGlvbklkLCByZWNpcGllbnRJZCB9KTtcbiAgfVxuXG4gIGdldE1lc3NhZ2VVcGxvYWRVcmwoKSB7XG4gICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG4gICAgcmV0dXJuIGAke2NvbmZpZy5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlR9L21lc3NhZ2VzL3ByaXZhdGUvZmlsZWA7XG4gIH1cblxuICBkZWxldGVNZXNzYWdlKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVsKGAvbWVzc2FnZXMvJHtpZH1gKTtcbiAgfVxuXG4gIGRlbGV0ZUFsbE1lc3NhZ2VJbkNvbnZlcnNhdGlvbihjb252ZXJzYXRpb25JZCkge1xuICAgIHJldHVybiB0aGlzLmRlbChgL21lc3NhZ2VzLyR7Y29udmVyc2F0aW9uSWR9L3JlbW92ZS1hbGwtbWVzc2FnZWApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBtZXNzYWdlU2VydmljZSA9IG5ldyBNZXNzYWdlU2VydmljZSgpO1xuIiwiLy8gaW1wb3J0IHsgSUdhbGxlcnlDcmVhdGUgfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBPcmRlclNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgc2VhcmNoKHBheWxvYWQpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL29yZGVycy9zZWFyY2gnLCBwYXlsb2FkKSk7XG4gIH1cblxuICBkZXRhaWxzKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvb3JkZXJzL2RldGFpbHMvJHtpZH1gKTtcbiAgfVxuXG4gIHVwZGF0ZShpZCwgZGF0YSkge1xuICAgIHJldHVybiB0aGlzLnB1dChgL29yZGVycy8ke2lkfS91cGRhdGVgLCBkYXRhKTtcbiAgfVxuXG4gIHVzZXJTZWFyY2gocXVlcnkpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL29yZGVycy91c2VyL3NlYXJjaCcsIHF1ZXJ5KSk7XG4gIH1cblxuICB1c2VyRmluZERldGFpbHMoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9vcmRlcnMvdXNlci9kZXRhaWxzLyR7aWR9YCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG9yZGVyU2VydmljZSA9IG5ldyBPcmRlclNlcnZpY2UoKTtcbiIsImltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuY2xhc3MgUGF5bWVudEluZm9ybWF0aW9uU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBjcmVhdGUoZGF0YSkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9wYXltZW50LWluZm9ybWF0aW9uJywgZGF0YSk7XG4gIH1cblxuICBmaW5kT25lKGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3BheW1lbnQtaW5mb3JtYXRpb24nLCBkYXRhKSk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHBheW1lbnRJbmZvcm1hdGlvblNlcnZpY2UgPSBuZXcgUGF5bWVudEluZm9ybWF0aW9uU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgSVJlc3BvbnNlIH0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5jbGFzcyBQYXlvdXRSZXF1ZXN0U2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBjYWxjdWxhdGUocGFyYW1zOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9LCByb2xlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoXG4gICAgICB0aGlzLmJ1aWxkVXJsKGAvZWFybmluZy8ke3JvbGUgfHwgJ3BlcmZvcm1lcid9L3BheW91dGAsIHBhcmFtcylcbiAgICApO1xuICB9XG5cbiAgc2VhcmNoKHF1ZXJ5OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9wYXlvdXQtcmVxdWVzdHMvcGVyZm9ybWVyL3NlYXJjaCcsIHF1ZXJ5KSk7XG4gIH1cblxuICBzdHVkaW9TZWFyY2gocXVlcnk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3BheW91dC1yZXF1ZXN0cy9zdHVkaW8vc2VhcmNoJywgcXVlcnkpKTtcbiAgfVxuXG4gIGNyZWF0ZShib2R5OiBhbnksIHJvbGUgPSAncGVyZm9ybWVyJykge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC9wYXlvdXQtcmVxdWVzdHMvJHtyb2xlfWAsIGJvZHkpO1xuICB9XG5cbiAgdXBkYXRlKGlkOiBzdHJpbmcsIGJvZHk6IGFueSwgcm9sZSA9ICdwZXJmb3JtZXInKSB7XG4gICAgcmV0dXJuIHRoaXMucHV0KGAvcGF5b3V0LXJlcXVlc3RzLyR7cm9sZX0vJHtpZH1gLCBib2R5KTtcbiAgfVxuXG4gIGRldGFpbChcbiAgICBpZDogc3RyaW5nLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcbiAgICB9LFxuICAgIHJvbGUgPSAncGVyZm9ybWVyJ1xuICApOiBQcm9taXNlPElSZXNwb25zZTxQYXlvdXRSZXF1ZXN0U2VydmljZT4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9wYXlvdXQtcmVxdWVzdHMvJHtyb2xlfS8ke2lkfS92aWV3YCwgaGVhZGVycyk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHBheW91dFJlcXVlc3RTZXJ2aWNlID0gbmV3IFBheW91dFJlcXVlc3RTZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBQZXJmb3JtZXJDYXRlZ29yaWVzU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBnZXRMaXN0KHF1ZXJ5PzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvcGVyZm9ybWVyLWNhdGVnb3JpZXMnLCBxdWVyeSkpO1xuICB9XG5cbiAgZGV0YWlscyhpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvcGVyZm9ybWVyLWNhdGVnb3JpZXMvJHtpZH0vdmlld2ApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBwZXJmb3JtZXJDYXRlZ29yaWVzID0gbmV3IFBlcmZvcm1lckNhdGVnb3JpZXNTZXJ2aWNlKCk7XG4iLCJpbXBvcnQge1xuICBJUGVyZm9ybWVyLFxuICBJQ3JlYXRlUGVyZm9ybWVyUHJvZHVjdFBheWxvYWQsXG4gIElVcGRhdGVQZXJmb3JtZXJQcm9kdWN0UGF5bG9hZFxufSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBpc1VybCB9IGZyb20gJ0BsaWIvc3RyaW5nJztcbmltcG9ydCB7IG9taXQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnO1xuXG5pbXBvcnQgeyBBUElSZXF1ZXN0LCBJUmVzcG9uc2UsIFRPS0VOIH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5pbXBvcnQgeyBnZXRHbG9iYWxDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5cbmV4cG9ydCBjbGFzcyBQZXJmb3JtZXJTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIG1lKGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KTogUHJvbWlzZTxJUmVzcG9uc2U8SVBlcmZvcm1lcj4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXQoJy9wZXJmb3JtZXJzL21lJywgaGVhZGVycyk7XG4gIH1cblxuICB1cGRhdGVNZShwYXlsb2FkOiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5wdXQoJy9wZXJmb3JtZXJzJywgcGF5bG9hZCk7XG4gIH1cblxuICBzZWFyY2gocXVlcnk/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9wZXJmb3JtZXJzL3NlYXJjaCcsIHF1ZXJ5KSk7XG4gIH1cblxuICBkZXRhaWxzKHVzZXJuYW1lOiBzdHJpbmcsIGhlYWRlcnMgPSB7fSk6IFByb21pc2U8SVJlc3BvbnNlPElQZXJmb3JtZXI+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvcGVyZm9ybWVycy8ke3VzZXJuYW1lfS92aWV3YCwgaGVhZGVycyk7XG4gIH1cblxuICBnZXRBdmF0YXJVcGxvYWRVcmwoKSB7XG4gICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG4gICAgcmV0dXJuIGAke2NvbmZpZy5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlR9L3BlcmZvcm1lcnMvYXZhdGFyL3VwbG9hZGA7XG4gIH1cblxuICBnZXREb2N1bWVudHNVcGxvYWRVcmwoKSB7XG4gICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG4gICAgcmV0dXJuIGAke2NvbmZpZy5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlR9L3BlcmZvcm1lcnMvZG9jdW1lbnRzL3VwbG9hZGA7XG4gIH1cblxuICBnZXRSZWxlYXNlRm9ybVVybCgpIHtcbiAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgICByZXR1cm4gYCR7Y29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0vcGVyZm9ybWVycy9yZWxlYXNlLWZvcm0vdXBsb2FkYDtcbiAgfVxuXG4gIG15UHJvZHVjdChxdWVyeT86IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoXG4gICAgICB0aGlzLmJ1aWxkVXJsKCcvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvcHJvZHVjdHMvc2VhcmNoJywgcXVlcnkpXG4gICAgKTtcbiAgfVxuXG4gIGNyZWF0ZVByb2R1Y3QoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgZGF0YTogSUNyZWF0ZVBlcmZvcm1lclByb2R1Y3RQYXlsb2FkLFxuICAgIG9wdGlvbnM6IHsgb25Qcm9ncmVzczogRnVuY3Rpb24gfSA9IHtcbiAgICAgIG9uUHJvZ3Jlc3MoKSB7fVxuICAgIH1cbiAgKTogUHJvbWlzZTxJUmVzcG9uc2U8YW55Pj4ge1xuICAgIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgcmVxLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQubGVuZ3RoQ29tcHV0YWJsZSkge1xuICAgICAgICAgIG9wdGlvbnMub25Qcm9ncmVzcyh7XG4gICAgICAgICAgICBwZXJjZW50YWdlOiAoZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWwpICogMTAwXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXEuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IHJlcS5zdGF0dXMgPj0gMjAwICYmIHJlcS5zdGF0dXMgPCAzMDA7XG4gICAgICAgIGNvbnN0IHsgcmVzcG9uc2UgfSA9IHJlcTtcbiAgICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChyZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgfSk7XG5cbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG4gICAgICAgIHJlamVjdChyZXEucmVzcG9uc2UpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAvLyBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlLCBmaWxlLm5hbWUpO1xuICAgICAgaWYgKGRhdGEuaW1hZ2UpIHtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBkYXRhLmltYWdlLmZpbGUub3JpZ2luRmlsZU9iajtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIGltYWdlLCBpbWFnZS5uYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGEuZGlnaXRhbEZpbGUpIHtcbiAgICAgICAgY29uc3QgZGlnaXRhbEZpbGUgPSBkYXRhLmRpZ2l0YWxGaWxlLmZpbGUub3JpZ2luRmlsZU9iajtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdkaWdpdGFsRmlsZScsIGRpZ2l0YWxGaWxlLCBkaWdpdGFsRmlsZS5uYW1lKTtcbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmtleXMob21pdChkYXRhLCBbJ2ltYWdlJywgJ2RpZ2l0YWxGaWxlJ10pKS5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCh2LCBkYXRhW3ZdKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXEucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xuICAgICAgcmVxLm9wZW4oJ1BPU1QnLCBpc1VybCh1cmwpID8gdXJsIDogYCR7Y29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0ke3VybH1gKTtcblxuICAgICAgY29uc3QgdG9rZW46IGFueSA9IGNvb2tpZS5nZXQoVE9LRU4pO1xuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKCdBdXRob3JpemF0aW9uJywgdG9rZW4pO1xuICAgICAgfVxuICAgICAgcmVxLnNlbmQoZm9ybURhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlUHJvZHVjdChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBkYXRhOiBJVXBkYXRlUGVyZm9ybWVyUHJvZHVjdFBheWxvYWQsXG4gICAgb3B0aW9uczogeyBvblByb2dyZXNzOiBGdW5jdGlvbiB9ID0ge1xuICAgICAgb25Qcm9ncmVzcygpIHt9XG4gICAgfVxuICApOiBQcm9taXNlPElSZXNwb25zZTxhbnk+PiB7XG4gICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5sZW5ndGhDb21wdXRhYmxlKSB7XG4gICAgICAgICAgb3B0aW9ucy5vblByb2dyZXNzKHtcbiAgICAgICAgICAgIHBlcmNlbnRhZ2U6IChldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCkgKiAxMDBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJlcS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBzdWNjZXNzID0gcmVxLnN0YXR1cyA+PSAyMDAgJiYgcmVxLnN0YXR1cyA8IDMwMDtcbiAgICAgICAgY29uc3QgeyByZXNwb25zZSB9ID0gcmVxO1xuICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgcmVxLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICAgICAgcmVqZWN0KHJlcS5yZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIC8vIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUsIGZpbGUubmFtZSk7XG4gICAgICBpZiAoZGF0YS5pbWFnZSAmJiBkYXRhLmltYWdlLmZpbGUpIHtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBkYXRhLmltYWdlLmZpbGUub3JpZ2luRmlsZU9iajtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIGltYWdlLCBpbWFnZS5uYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGEuZGlnaXRhbEZpbGUgJiYgZGF0YS5kaWdpdGFsRmlsZS5maWxlKSB7XG4gICAgICAgIGNvbnN0IGRpZ2l0YWxGaWxlID0gZGF0YS5kaWdpdGFsRmlsZS5maWxlLm9yaWdpbkZpbGVPYmo7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZGlnaXRhbEZpbGUnLCBkaWdpdGFsRmlsZSwgZGlnaXRhbEZpbGUubmFtZSk7XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5rZXlzKG9taXQoZGF0YSwgWydpbWFnZScsICdkaWdpdGFsRmlsZSddKSkuZm9yRWFjaCgodikgPT4ge1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQodiwgZGF0YVt2XSk7XG4gICAgICB9KTtcblxuICAgICAgcmVxLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcbiAgICAgIHJlcS5vcGVuKCdQVVQnLCBpc1VybCh1cmwpID8gdXJsIDogYCR7Y29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0ke3VybH1gKTtcblxuICAgICAgY29uc3QgdG9rZW46IGFueSA9IGNvb2tpZS5nZXQoVE9LRU4pO1xuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKCdBdXRob3JpemF0aW9uJywgdG9rZW4pO1xuICAgICAgfVxuICAgICAgcmVxLnNlbmQoZm9ybURhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlUHJvZHVjdChpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVsKGAvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvcHJvZHVjdHMvJHtpZH1gKTtcbiAgfVxuXG4gIGdldENvbW1pc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KCcvc2V0dGluZ3MvcGVyZm9ybWVyL2NvbW1pc3Npb24nKTtcbiAgfVxuXG4gIHVwZGF0ZVBheW1lbnRJbmZvKHBheWxvYWQpOiBQcm9taXNlPElSZXNwb25zZTxJUGVyZm9ybWVyPj4ge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9wZXJmb3JtZXJzL2JhbmstdHJhbnNmZXIvdXBkYXRlJywgcGF5bG9hZCk7XG4gIH1cblxuICB1cGRhdGVEaXJlY3REZXBvc3QocGF5bG9hZCk6IFByb21pc2U8SVJlc3BvbnNlPElQZXJmb3JtZXI+PiB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3BlcmZvcm1lcnMvZGlyZWN0LWRlcG9zaXQvdXBkYXRlJywgcGF5bG9hZCk7XG4gIH1cblxuICB1cGRhdGVQYXh1bShwYXlsb2FkKTogUHJvbWlzZTxJUmVzcG9uc2U8SVBlcmZvcm1lcj4+IHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvcGVyZm9ybWVycy9wYXh1bS91cGRhdGUnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHVwZGF0ZUJpdHBheShwYXlsb2FkKTogUHJvbWlzZTxJUmVzcG9uc2U8SVBlcmZvcm1lcj4+IHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvcGVyZm9ybWVycy9iaXRwYXkvdXBkYXRlJywgcGF5bG9hZCk7XG4gIH1cblxuICB1cGRhdGVTdHJlYW1pbmdTdGF0dXMocGF5bG9hZDoge1xuICAgIHN0YXR1czogc3RyaW5nO1xuICB9KTogUHJvbWlzZTxJUmVzcG9uc2U8SVBlcmZvcm1lcj4+IHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvcGVyZm9ybWVycy9zdHJlYW1pbmctc3RhdHVzL3VwZGF0ZScsIHBheWxvYWQpO1xuICB9XG5cbiAgZ2VvQmxvY2socGF5bG9hZDoge3VzZXJJZHM/OiBzdHJpbmdbXSwgY291bnRyaWVzPzogc3RyaW5nW119KTogUHJvbWlzZTxJUmVzcG9uc2U8YW55Pj4ge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9wZXJmb3JtZXJzL2Jsb2NraW5nL3VwZGF0ZScsIHBheWxvYWQpO1xuICB9XG5cbiAgZ2V0QmxvY2tlZExpc3QoKTogUHJvbWlzZTxJUmVzcG9uc2U8YW55Pj4ge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvcGVyZm9ybWVycy9ibG9ja2luZycpKTtcbiAgfVxuXG4gIGluY3JlYXNlVmlldyhwZXJmb3JtZXJJZCkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC9wZXJmb3JtZXJzLyR7cGVyZm9ybWVySWR9L2luYy12aWV3YCk7XG4gIH1cblxuICB1cGRhdGVEZWZhdWx0UHJpY2UocGF5bG9hZCk6IFByb21pc2U8SVJlc3BvbnNlPElQZXJmb3JtZXI+PiB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3BlcmZvcm1lcnMvZGVmYXVsdC1wcmljZS91cGRhdGUnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHVwZGF0ZUJyb2FkY2FzdFNldHRpbmcocGF5bG9hZCk6IFByb21pc2U8SVJlc3BvbnNlPGFueT4+IHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvcGVyZm9ybWVycy9icm9hZGNhc3Qtc2V0dGluZy91cGRhdGUnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHN1c3BlbmRBY2NvdW50KHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvcGVyZm9ybWVycy9zdXNwZW5kLWFjY291bnQnLCB7IHBhc3N3b3JkIH0pO1xuICB9XG5cbiAgY2hlY2tCbG9jayhwZXJmb3JtZXJJZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvcGVyZm9ybWVycy8ke3BlcmZvcm1lcklkfS9jaGVjay1ibG9ja2luZ2ApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBHRU5OREVSX1BFUkZPUk1FUiA9IFsnZmVtYWxlJywgJ3RyYW5zZ2VuZGVyJywgJ21hbGUnXTtcblxuZXhwb3J0IGNvbnN0IHBlcmZvcm1lclNlcnZpY2UgPSBuZXcgUGVyZm9ybWVyU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgb21pdCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBpc1VybCB9IGZyb20gJ0BsaWIvc3RyaW5nJztcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcbmltcG9ydCB7IFRPS0VOIH0gZnJvbSAnc3JjL3NlcnZpY2VzL2FwaS1yZXF1ZXN0JztcbmltcG9ydCB7XG4gIElSZXNwb25zZSxcbiAgSVBlcmZvcm1lclBob3RvUGF5bG9hZCxcbiAgSURhdGFSZXNwb25zZSxcbiAgSVBob3RvXG59IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcbmltcG9ydCB7IGdldEdsb2JhbENvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcblxuZXhwb3J0IGNsYXNzIFBob3RvU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBzZWFyY2gocGFyYW1zPzoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcbiAgfSk6IFByb21pc2U8SVJlc3BvbnNlPElEYXRhUmVzcG9uc2U8SVBob3RvPj4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXQoXG4gICAgICB0aGlzLmJ1aWxkVXJsKCcvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvcGhvdG9zL3NlYXJjaCcsIHBhcmFtcylcbiAgICApO1xuICB9XG5cbiAgc2VhcmNoQnlHYWxsZXJ5KFxuICAgIGdhbGxlcnlJZDogc3RyaW5nLFxuICAgIHBhcmFtcz86IHtcbiAgICAgIFtrZXk6IHN0cmluZ106IGFueTtcbiAgICB9LFxuICAgIGhlYWRlcnM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gICkge1xuICAgIHJldHVybiB0aGlzLmdldChcbiAgICAgIHRoaXMuYnVpbGRVcmwoXG4gICAgICAgIGAvdXNlci9wZXJmb3JtZXItYXNzZXRzL3Bob3Rvcy8ke2dhbGxlcnlJZH0vc2VhcmNoYCxcbiAgICAgICAgcGFyYW1zXG4gICAgICApLFxuICAgICAgaGVhZGVyc1xuICAgICk7XG4gIH1cblxuICBkZXRhaWxzKGlkOiBzdHJpbmcsIGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvcGhvdG9zLyR7aWR9L3ZpZXdgLCBoZWFkZXJzKTtcbiAgfVxuXG4gIG15UGhvdG9zKHF1ZXJ5PzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldChcbiAgICAgIHRoaXMuYnVpbGRVcmwoJy9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9waG90b3Mvc2VhcmNoJywgcXVlcnkpXG4gICAgKTtcbiAgfVxuXG4gIHJlbW92ZShpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVsKGAvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvcGhvdG9zLyR7aWR9YCk7XG4gIH1cblxuICBjcmVhdGUoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgZGF0YTogSVBlcmZvcm1lclBob3RvUGF5bG9hZCxcbiAgICBvcHRpb25zOiB7IG9uUHJvZ3Jlc3M6IEZ1bmN0aW9uIH0gPSB7XG4gICAgICBvblByb2dyZXNzKCkge31cbiAgICB9XG4gICk6IFByb21pc2U8SVJlc3BvbnNlPGFueT4+IHtcbiAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50Lmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgICBvcHRpb25zLm9uUHJvZ3Jlc3Moe1xuICAgICAgICAgICAgcGVyY2VudGFnZTogKGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsKSAqIDEwMFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmVxLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSByZXEuc3RhdHVzID49IDIwMCAmJiByZXEuc3RhdHVzIDwgMzAwO1xuICAgICAgICBjb25zdCB7IHJlc3BvbnNlIH0gPSByZXE7XG4gICAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICAgIHJldHVybiByZWplY3QocmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgICByZWplY3QocmVxLnJlc3BvbnNlKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgLy8gZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSwgZmlsZS5uYW1lKTtcbiAgICAgIGlmIChkYXRhLnBob3RvKSB7XG4gICAgICAgIGNvbnN0IHBob3RvID0gZGF0YS5waG90by5maWxlLm9yaWdpbkZpbGVPYmo7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncGhvdG8nLCBwaG90bywgcGhvdG8ubmFtZSk7XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5rZXlzKG9taXQoZGF0YSwgWydwaG90byddKSkuZm9yRWFjaCgodikgPT4ge1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQodiwgZGF0YVt2XSk7XG4gICAgICB9KTtcblxuICAgICAgcmVxLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcbiAgICAgIHJlcS5vcGVuKCdQT1NUJywgaXNVcmwodXJsKSA/IHVybCA6IGAke2NvbmZpZy5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlR9JHt1cmx9YCk7XG5cbiAgICAgIGNvbnN0IHRva2VuOiBhbnkgPSBjb29raWUuZ2V0KFRPS0VOKTtcbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICByZXEuc2V0UmVxdWVzdEhlYWRlcignQXV0aG9yaXphdGlvbicsIHRva2VuKTtcbiAgICAgIH1cbiAgICAgIHJlcS5zZW5kKGZvcm1EYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZShcbiAgICB1cmw6IHN0cmluZyxcbiAgICBkYXRhOiBJUGVyZm9ybWVyUGhvdG9QYXlsb2FkLFxuICAgIG9wdGlvbnM6IHsgb25Qcm9ncmVzczogRnVuY3Rpb24gfSA9IHtcbiAgICAgIG9uUHJvZ3Jlc3MoKSB7fVxuICAgIH1cbiAgKTogUHJvbWlzZTxJUmVzcG9uc2U8YW55Pj4ge1xuICAgIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgcmVxLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQubGVuZ3RoQ29tcHV0YWJsZSkge1xuICAgICAgICAgIG9wdGlvbnMub25Qcm9ncmVzcyh7XG4gICAgICAgICAgICBwZXJjZW50YWdlOiAoZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWwpICogMTAwXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXEuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IHJlcS5zdGF0dXMgPj0gMjAwICYmIHJlcS5zdGF0dXMgPCAzMDA7XG4gICAgICAgIGNvbnN0IHsgcmVzcG9uc2UgfSA9IHJlcTtcbiAgICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChyZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgfSk7XG5cbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG4gICAgICAgIHJlamVjdChyZXEucmVzcG9uc2UpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAvLyBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlLCBmaWxlLm5hbWUpO1xuICAgICAgaWYgKGRhdGEucGhvdG8gJiYgZGF0YS5waG90by5maWxlKSB7XG4gICAgICAgIGNvbnN0IHBob3RvID0gZGF0YS5waG90by5maWxlLm9yaWdpbkZpbGVPYmo7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncGhvdG8nLCBwaG90bywgcGhvdG8ubmFtZSk7XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5rZXlzKG9taXQoZGF0YSwgWydwaG90byddKSkuZm9yRWFjaCgodikgPT4ge1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQodiwgZGF0YVt2XSk7XG4gICAgICB9KTtcblxuICAgICAgcmVxLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcbiAgICAgIHJlcS5vcGVuKCdQVVQnLCBpc1VybCh1cmwpID8gdXJsIDogYCR7Y29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0ke3VybH1gKTtcblxuICAgICAgY29uc3QgdG9rZW46IGFueSA9IGNvb2tpZS5nZXQoVE9LRU4pO1xuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKCdBdXRob3JpemF0aW9uJywgdG9rZW4pO1xuICAgICAgfVxuICAgICAgcmVxLnNlbmQoZm9ybURhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgdXBsb2FkSW1hZ2VzKGZpbGU6IEZpbGUsIHBheWxvYWQ6IGFueSwgb25Qcm9ncmVzcz86IEZ1bmN0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMudXBsb2FkKFxuICAgICAgJy9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9waG90b3MvdXBsb2FkJyxcbiAgICAgIFtcbiAgICAgICAge1xuICAgICAgICAgIGZpZWxkbmFtZTogJ3Bob3RvJyxcbiAgICAgICAgICBmaWxlXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICB7XG4gICAgICAgIG9uUHJvZ3Jlc3MsXG4gICAgICAgIGN1c3RvbURhdGE6IHBheWxvYWRcbiAgICAgIH1cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBwaG90b1NlcnZpY2UgPSBuZXcgUGhvdG9TZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBJUG9zdFNlYXJjaCB9IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIFBvc3RTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIHNlYXJjaChxdWVyeTogSVBvc3RTZWFyY2gpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3Bvc3RzL3NlYXJjaCcsIHF1ZXJ5IGFzIGFueSkpO1xuICB9XG5cbiAgZmluZEJ5SWQoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmdldChgL3Bvc3RzLyR7aWR9YCk7XG4gIH1cblxuICBjcmVhdGVDb250YWN0Q290ZW50KGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvY29udGFjdCcsIHsgLi4uZGF0YSB9KTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcG9zdFNlcnZpY2UgPSBuZXcgUG9zdFNlcnZpY2UoKTtcbiIsImltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIFByb2R1Y3RTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIGRldGFpbHMoaWQ6IHN0cmluZywgaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvcHJvZHVjdHMvJHtpZH0vdmlld2AsIGhlYWRlcnMpO1xuICB9XG5cbiAgc2VhcmNoKHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3VzZXIvcGVyZm9ybWVyLWFzc2V0cy9wcm9kdWN0cy9zZWFyY2gnLCBwYXJhbXMpKTtcbiAgfVxuXG4gIHB1cmNoYXNlZChwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9wdXJjaGFzZWQtaXRlbXMvdXNlci9wcm9kdWN0cycsIHBhcmFtcykpO1xuICB9XG5cbiAgZ2V0RG93bmxvYWRMaW5rKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC91c2VyL3BlcmZvcm1lci1hc3NldHMvcHJvZHVjdHMvJHtpZH0vZG93bmxvYWQtbGlua2ApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBwcm9kdWN0U2VydmljZSA9IG5ldyBQcm9kdWN0U2VydmljZSgpO1xuIiwiaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5leHBvcnQgY2xhc3MgUHVyY2hhc2VJdGVtU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBzZWFyY2gocXVlcnkpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3B1cmNoYXNlZC1pdGVtcy91c2VyL3NlYXJjaCcsIHF1ZXJ5KSk7XG4gIH1cblxuICBwdXJjaGFzZUl0ZW0oaWQ6IHN0cmluZywgdHlwZTogc3RyaW5nLCBkYXRhPzogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL3B1cmNoYXNlLWl0ZW1zLyR7dHlwZX0vJHtpZH1gLCBkYXRhKTtcbiAgfVxuXG4gIHB1cmNoYXNlUHJvZHVjdChpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL3B1cmNoYXNlLWl0ZW1zL3Byb2R1Y3QvJHtpZH1gKTtcbiAgfVxuXG4gIHB1cmNoYXNlVmlkZW8oaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC9wdXJjaGFzZS1pdGVtcy92aWRlby8ke2lkfWApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBwdXJjaGFzZUl0ZW1TZXJ2aWNlID0gbmV3IFB1cmNoYXNlSXRlbVNlcnZpY2UoKTtcbiIsImltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIFJlZnVuZFJlcXVlc3RTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIGNyZWF0ZShkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3JlZnVuZC1yZXF1ZXN0cycsIGRhdGEpO1xuICB9XG5cbiAgc2VhcmNoKHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3JlZnVuZC1yZXF1ZXN0cy9zZWFyY2gnLCBwYXJhbXMpKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVmdW5kUmVxdWVzdFNlcnZpY2UgPSBuZXcgUmVmdW5kUmVxdWVzdFNlcnZpY2UoKTtcbiIsImltcG9ydCB7IElTZXR0aW5nLCBJQ291bnRyaWVzIH0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgQVBJUmVxdWVzdCwgSVJlc3BvbnNlIH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBTZXR0aW5nU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBhbGwoZ3JvdXAgPSAnJyk6IFByb21pc2U8SVJlc3BvbnNlPElTZXR0aW5nPj4ge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvc2V0dGluZ3MvcHVibGljJywgeyBncm91cCB9KSk7XG4gIH1cblxuICBnZXRDb3VudHJpZXMoKTogUHJvbWlzZTxJUmVzcG9uc2U8SUNvdW50cmllc1tdPj4ge1xuICAgIHJldHVybiB0aGlzLmdldCgnL2NvdW50cmllcy9saXN0Jyk7XG4gIH1cblxuICBnZXRUaW1lem9uZXMoKTogUHJvbWlzZTxJUmVzcG9uc2U8c3RyaW5nW10+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KCcvdGltZXpvbmVzL2xpc3QnKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2V0dGluZ1NlcnZpY2UgPSBuZXcgU2V0dGluZ1NlcnZpY2UoKTtcbiIsImltcG9ydCB7IElPbmVUaW1lVG9rZW4sIFN0cmVhbVNldHRpbmdzIH0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgZ2V0UmVzcG9uc2VFcnJvciB9IGZyb20gJ3NyYy9saWInO1xuaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5jbGFzcyBTdHJlYW1TZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIGdldFNlc3Npb25JZChpZDogc3RyaW5nLCB0eXBlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9zdHJlYW1pbmcvc2Vzc2lvbi8ke2lkfS8ke3R5cGV9YCk7XG4gIH1cblxuICBnb0xpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3N0cmVhbWluZy9saXZlJyk7XG4gIH1cblxuICBqb2luUHVibGljQ2hhdChwZXJmb3JtZXJJZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL3N0cmVhbWluZy9qb2luLyR7cGVyZm9ybWVySWR9YCk7XG4gIH1cblxuICByZXF1ZXN0UHJpdmF0ZUNoYXQocGVyZm9ybWVySWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC9zdHJlYW1pbmcvcHJpdmF0ZS1jaGF0LyR7cGVyZm9ybWVySWR9YCk7XG4gIH1cblxuICBhY2NlcHRQcml2YXRlQ2hhdChpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvc3RyZWFtaW5nL3ByaXZhdGUtY2hhdC8ke2lkfWApO1xuICB9XG5cbiAgc3RhcnRHcm91cENoYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3N0cmVhbWluZy9ncm91cC1jaGF0Jyk7XG4gIH1cblxuICBqb2luR3JvdXBDaGF0KGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9zdHJlYW1pbmcvZ3JvdXAtY2hhdC8ke2lkfWApO1xuICB9XG5cbiAgZ2VuZXJhdGVPbmVUaW1lVG9rZW4oZGF0YTogSU9uZVRpbWVUb2tlbikge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9zdHJlYW1pbmcvdG9rZW4nLCBkYXRhKTtcbiAgfVxuXG4gIGFzeW5jIGdldFB1Ymxpc2hUb2tlbihvcHRpb25zOiB7XG4gICAgc3RyZWFtSWQ6IHN0cmluZyxcbiAgICBzZXR0aW5nczogU3RyZWFtU2V0dGluZ3NcbiAgICB9LCBleHBpcmVEYXRlID0gbW9tZW50KCkuYWRkKDEsICdkJykudG9EYXRlKCkuZ2V0VGltZSgpKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBzZXR0aW5ncywgc3RyZWFtSWQgfSA9IG9wdGlvbnM7XG4gICAgICBjb25zdCB7IHNlY3VyZU9wdGlvbiB9ID0gc2V0dGluZ3M7XG4gICAgICBpZiAoc2VjdXJlT3B0aW9uKSB7XG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCB0aGlzLmdlbmVyYXRlT25lVGltZVRva2VuKHtcbiAgICAgICAgICBpZDogc3RyZWFtSWQsXG4gICAgICAgICAgdHlwZTogJ3B1Ymxpc2gnLFxuICAgICAgICAgIGV4cGlyZURhdGVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXNwLmRhdGEudG9rZW5JZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zdCBlcnJvciA9IGF3YWl0IFByb21pc2UucmVzb2x2ZShlcnIpO1xuICAgICAgbWVzc2FnZS5lcnJvcihnZXRSZXNwb25zZUVycm9yKGVycm9yKSk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRTdWJzY3JpYmVyVG9rZW4ob3B0aW9uczoge1xuICAgIHN0cmVhbUlkOiBzdHJpbmcsXG4gICAgc2V0dGluZ3M6IFN0cmVhbVNldHRpbmdzXG4gICAgfSwgZXhwaXJlRGF0ZSA9IG1vbWVudCgpLmFkZCgxLCAnZCcpLnRvRGF0ZSgpLmdldFRpbWUoKSk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgc2V0dGluZ3MsIHN0cmVhbUlkIH0gPSBvcHRpb25zO1xuICAgICAgY29uc3QgeyBzZWN1cmVPcHRpb24gfSA9IHNldHRpbmdzO1xuICAgICAgaWYgKHNlY3VyZU9wdGlvbikge1xuICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgdGhpcy5nZW5lcmF0ZU9uZVRpbWVUb2tlbih7XG4gICAgICAgICAgaWQ6IHN0cmVhbUlkLFxuICAgICAgICAgIHR5cGU6ICdwbGF5JyxcbiAgICAgICAgICBleHBpcmVEYXRlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzcC5kYXRhLnRva2VuSWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc3QgZXJyb3IgPSBhd2FpdCBQcm9taXNlLnJlc29sdmUoZXJyKTtcbiAgICAgIG1lc3NhZ2UuZXJyb3IoZ2V0UmVzcG9uc2VFcnJvcihlcnJvcikpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0TGl2ZVN0cmVhbU9yVm9kVVJMKG9wdGlvbnM6IHtcbiAgICBzdHJlYW1JZDogc3RyaW5nLFxuICAgIHNldHRpbmdzOiBTdHJlYW1TZXR0aW5ncyxcbiAgICBhcHBOYW1lOiBzdHJpbmdcbiAgICB9LCBleHBpcmVEYXRlID0gbW9tZW50KCkuYWRkKDEsICdkJykudG9EYXRlKCkuZ2V0VGltZSgpLCBfcGxheWVyID0gJ2hscycpIHtcbiAgICAvLyBodHRwOi8vW0lQX0FkZHJlc3NdLzxBcHBsaWNhdGlvbl9OYW1lPi9zdHJlYW1zL3N0cmVhbUlELm1wND90b2tlbj10b2tlbklkXG4gICAgLy8gaHR0cDovL1tJUF9BZGRyZXNzXS88QXBwbGljYXRpb25fTmFtZT4vc3RyZWFtcy9zdHJlYW1JRC5tM3U4P3Rva2VuPXRva2VuSWRcbiAgICAvLyBodHRwOi8vW0lQX0FkZHJlc3NdLzxBcHBsaWNhdGlvbl9OYW1lPi9wbGF5Lmh0bWw/bmFtZT1zdHJlYW1JRCZwbGF5T3JkZXI9aGxzJnRva2VuPXRva2VuSWRcbiAgICB0cnkge1xuICAgICAgLy8gY29uc3Qgc3JjID0gYGh0dHBzOi8vJHt2aWV3ZXJVUkx9OjU0NDMvJHthcHBOYW1lfS9zdHJlYW1zLyR7c3RyZWFtSWR9Lm0zdTgke29uZVRpbWVUb2tlbiA/IGA/dG9rZW49JHtvbmVUaW1lVG9rZW59YCA6ICcnfWA7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2hhZG93XG4gICAgICBjb25zdCB7IGFwcE5hbWUsIHNldHRpbmdzLCBzdHJlYW1JZCB9ID0gb3B0aW9ucztcbiAgICAgIGNvbnN0IHsgc2VjdXJlT3B0aW9uLCB2aWV3ZXJVUkwgfSA9IHNldHRpbmdzO1xuICAgICAgY29uc3QgZXh0ZW5zaW9uID0gX3BsYXllciA9PT0gJ2hscycgPyAnbTN1OCcgOiAnbXA0JztcbiAgICAgIGlmICghdmlld2VyVVJMIHx8ICFhcHBOYW1lKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cblxuICAgICAgbGV0IG9uZVRpbWVUb2tlbiA9ICcnO1xuICAgICAgaWYgKHNlY3VyZU9wdGlvbikge1xuICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgdGhpcy5nZW5lcmF0ZU9uZVRpbWVUb2tlbih7XG4gICAgICAgICAgaWQ6IHN0cmVhbUlkLFxuICAgICAgICAgIHR5cGU6ICdwbGF5JyxcbiAgICAgICAgICBleHBpcmVEYXRlXG4gICAgICAgIH0pO1xuICAgICAgICBvbmVUaW1lVG9rZW4gPSByZXNwLmRhdGEudG9rZW5JZDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBwcm90b2NvbCB9ID0gd2luZG93LmxvY2F0aW9uO1xuICAgICAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHt2aWV3ZXJVUkx9LyR7YXBwTmFtZX0vc3RyZWFtcy8ke3N0cmVhbUlkfS4ke2V4dGVuc2lvbn0ke29uZVRpbWVUb2tlbiA/IGA/dG9rZW49JHtvbmVUaW1lVG9rZW59YCA6ICcnfWA7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zdCBlcnJvciA9IGF3YWl0IFByb21pc2UucmVzb2x2ZShlcnIpO1xuICAgICAgbWVzc2FnZS5lcnJvcihnZXRSZXNwb25zZUVycm9yKGVycm9yKSk7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzdHJlYW1TZXJ2aWNlID0gbmV3IFN0cmVhbVNlcnZpY2UoKTtcbiIsImltcG9ydCB7IElTdHVkaW8gfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBBUElSZXF1ZXN0LCBJUmVzcG9uc2UgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcbmltcG9ydCB7IGdldEdsb2JhbENvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcblxuZXhwb3J0IGNsYXNzIFN0dWRpb1NlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgbWUoaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pOiBQcm9taXNlPElSZXNwb25zZTxJU3R1ZGlvPj4ge1xuICAgIHJldHVybiB0aGlzLmdldCgnL3N0dWRpby9tZScsIGhlYWRlcnMpO1xuICB9XG5cbiAgdXBkYXRlKHBheWxvYWQ6IGFueSkge1xuICAgIHJldHVybiB0aGlzLnB1dCgnL3N0dWRpby91cGRhdGUnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHVwZGF0ZVBheW1lbnRJbmZvKHBheWxvYWQpOiBQcm9taXNlPElSZXNwb25zZTxJU3R1ZGlvPj4ge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9zdHVkaW8vYmFuay10cmFuc2Zlci91cGRhdGUnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHVwZGF0ZURpcmVjdERlcG9zdChwYXlsb2FkKTogUHJvbWlzZTxJUmVzcG9uc2U8SVN0dWRpbz4+IHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvc3R1ZGlvL2RpcmVjdC1kZXBvc2l0L3VwZGF0ZScsIHBheWxvYWQpO1xuICB9XG5cbiAgdXBkYXRlUGF4dW0ocGF5bG9hZCk6IFByb21pc2U8SVJlc3BvbnNlPElTdHVkaW8+PiB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3N0dWRpby9wYXh1bS91cGRhdGUnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHVwZGF0ZUJpdHBheShwYXlsb2FkKTogUHJvbWlzZTxJUmVzcG9uc2U8SVN0dWRpbz4+IHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvc3R1ZGlvL2JpdHBheS91cGRhdGUnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIGdldENvbW1pc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KCcvc2V0dGluZ3Mvc3R1ZGlvL2NvbW1pc3Npb24nKTtcbiAgfVxuXG4gIGFkZE1vZGVsKHBheWxvYWQpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvc3R1ZGlvL21lbWJlcnMnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIGdldE1lbWJlcnMocGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvc3R1ZGlvL21lbWJlcnMnLCBwYXJhbXMpKTtcbiAgfVxuXG4gIGdldE1lbWJlckNvbW1pc3Npb25zKHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3N0dWRpby9jb21taXNzaW9uJywgcGFyYW1zKSk7XG4gIH1cblxuICB1cGRhdGVNZW1iZXJDb21taXNzaW9uKGlkOiBzdHJpbmcsIHBheWxvYWQ6IGFueSkge1xuICAgIHJldHVybiB0aGlzLnB1dChgL3N0dWRpby9jb21taXNzaW9uL21lbWJlci8ke2lkfWAsIHBheWxvYWQpO1xuICB9XG5cbiAgZ2V0UGVyZm9ybWVyUmVxdWVzdChwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KFxuICAgICAgdGhpcy5idWlsZFVybCgnL3BheW91dC1yZXF1ZXN0cy9zdHVkaW8vcGVyZm9ybWVyLXJlcXVlc3QnLCBwYXJhbXMpXG4gICAgKTtcbiAgfVxuXG4gIHVwZGF0ZVN0YXR1c1BlcmZvcm1lclJlcXVlc3QoaWQ6IHN0cmluZywgcGF5bG9hZCkge1xuICAgIHJldHVybiB0aGlzLnB1dChgL3BheW91dC1yZXF1ZXN0cy9zdHVkaW8vdXBkYXRlLyR7aWR9YCwgeyAuLi5wYXlsb2FkIH0pO1xuICB9XG5cbiAgdXBkYXRlTWVtYmVyU3RhdHVzKGlkOiBzdHJpbmcsIHN0YXR1czogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL3N0dWRpby9tZW1iZXJzLyR7aWR9LyR7c3RhdHVzfWApO1xuICB9XG5cbiAgc3RhdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KCcvc3R1ZGlvL3N0YXRzJyk7XG4gIH1cblxuICBnZXREb2N1bWVudHNVcGxvYWRVcmwoKSB7XG4gICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG4gICAgcmV0dXJuIGAke2NvbmZpZy5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlR9L3N0dWRpby9kb2N1bWVudHMvdXBsb2FkYDtcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc3R1ZGlvU2VydmljZSA9IG5ldyBTdHVkaW9TZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBUb2tlblBhY2thZ2VTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIHNlYXJjaChwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9wYWNrYWdlL3Rva2VuL3NlYXJjaCcsIHBhcmFtcykpO1xuICB9XG5cbiAgYnV5VG9rZW5zKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvcGF5bWVudC9wdXJjaGFzZS10b2tlbnMvJHtpZH1gKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdG9rZW5QYWNrYWdlU2VydmljZSA9IG5ldyBUb2tlblBhY2thZ2VTZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBUcmFuc2FjdGlvblNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgc2VhcmNoKHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3RyYW5zYWN0aW9ucy91c2VyL3NlYXJjaCcsIHBhcmFtcykpO1xuICB9XG5cbiAgc2VuZFRpcFRva2VuKHBlcmZvcm1lcklkOiBzdHJpbmcsIHRva2VuOiBudW1iZXIsIGNvbnZlcnNhdGlvbklkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL21lbWJlci9zZW5kLXRpcC10b2tlbi8ke3BlcmZvcm1lcklkfWAsIHsgdG9rZW4sIGNvbnZlcnNhdGlvbklkIH0pO1xuICB9XG5cbiAgcHVibGljIHNlbmRQYWlkVG9rZW4oY29udmVyc2F0aW9uSWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC9tZW1iZXIvc2VuZC1wYXktdG9rZW4vJHtjb252ZXJzYXRpb25JZH1gKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdHJhbnNhY3Rpb25TZXJ2aWNlID0gbmV3IFRyYW5zYWN0aW9uU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgSVVzZXIgfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBBUElSZXF1ZXN0LCBJUmVzcG9uc2UgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcbmltcG9ydCB7IGdldEdsb2JhbENvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcblxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIG1lKGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KTogUHJvbWlzZTxJUmVzcG9uc2U8SVVzZXI+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KCcvdXNlcnMvbWUnLCBoZWFkZXJzKTtcbiAgfVxuXG4gIHVwZGF0ZU1lKHBheWxvYWQ6IGFueSkge1xuICAgIHJldHVybiB0aGlzLnB1dCgnL3VzZXJzJywgcGF5bG9hZCk7XG4gIH1cblxuICBnZXRBdmF0YXJVcGxvYWRVcmwodXNlcklkPzogc3RyaW5nKSB7XG4gICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG4gICAgaWYgKHVzZXJJZCkge1xuICAgICAgcmV0dXJuIGAke2NvbmZpZy5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlR9L3VzZXJzLyR7dXNlcklkfS9hdmF0YXIvdXBsb2FkYDtcbiAgICB9XG4gICAgcmV0dXJuIGAke2NvbmZpZy5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlR9L3VzZXJzL2F2YXRhci91cGxvYWRgO1xuICB9XG5cbiAgc2VhcmNoKHF1ZXJ5PzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvdXNlcnMvc2VhcmNoJywgcXVlcnkpKTtcbiAgfVxuXG4gIGZpbmRCeUlkKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC91c2Vycy92aWV3LyR7aWR9YCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHVzZXJTZXJ2aWNlID0gbmV3IFVzZXJTZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBJQ291bnRyeSwgSUxhbmdndWdlcywgSVBob25lQ29kZXMgfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBBUElSZXF1ZXN0LCBJUmVzcG9uc2UgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIFV0aWxzU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBjb3VudHJpZXNMaXN0KCk6IFByb21pc2U8SVJlc3BvbnNlPElDb3VudHJ5Pj4ge1xuICAgIHJldHVybiB0aGlzLmdldCgnL2NvdW50cmllcy9saXN0Jyk7XG4gIH1cblxuICBsYW5ndWFnZXNMaXN0KCk6IFByb21pc2U8SVJlc3BvbnNlPElMYW5nZ3VnZXM+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KCcvbGFuZ3VhZ2VzL2xpc3QnKTtcbiAgfVxuXG4gIHBob25lQ29kZXNMaXN0KCk6IFByb21pc2U8SVJlc3BvbnNlPElQaG9uZUNvZGVzPj4ge1xuICAgIHJldHVybiB0aGlzLmdldCgnL3Bob25lLWNvZGVzL2xpc3QnKTtcbiAgfVxuXG4gIHN0YXRpc3RpY3MoKTogUHJvbWlzZTxJUmVzcG9uc2U8YW55Pj4ge1xuICAgIHJldHVybiB0aGlzLmdldCgnL3N0YXRpc3RpY3MvYWRtaW4nKTtcbiAgfVxuXG4gIHZlcmlmeVJlY2FwdGNoYSh0b2tlbjogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3JlLWNhcHRjaGEvdmVyaWZ5JywgeyB0b2tlbiB9KTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdXRpbHNTZXJ2aWNlID0gbmV3IFV0aWxzU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgSVJlc3BvbnNlLCBJUGVyZm9ybWVyVmlkZW9QYXlsb2FkIH0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgVE9LRU4gfSBmcm9tICdzcmMvc2VydmljZXMvYXBpLXJlcXVlc3QnO1xuaW1wb3J0IHsgb21pdCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBpc1VybCB9IGZyb20gJ0BsaWIvc3RyaW5nJztcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcbmltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcbmltcG9ydCB7IGdldEdsb2JhbENvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcblxuZXhwb3J0IGNsYXNzIFZpZGVvU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBzZWFyY2gocGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldChcbiAgICAgIHRoaXMuYnVpbGRVcmwoJy91c2VyL3BlcmZvcm1lci1hc3NldHMvdmlkZW9zL3NlYXJjaCcsIHBhcmFtcylcbiAgICApO1xuICB9XG5cbiAgcHVyY2hhc2VkKHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoXG4gICAgICB0aGlzLmJ1aWxkVXJsKCcvcHVyY2hhc2VkLWl0ZW1zL3VzZXIvdmlkZW9zJywgcGFyYW1zKVxuICAgICk7XG4gIH1cblxuICBkZXRhaWxzKGlkOiBzdHJpbmcsIGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvdmlkZW9zLyR7aWR9L3ZpZXdgLCBoZWFkZXJzKTtcbiAgfVxuXG4gIG15VmlkZW9zKHF1ZXJ5PzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldChcbiAgICAgIHRoaXMuYnVpbGRVcmwoJy9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy92aWRlb3Mvc2VhcmNoJywgcXVlcnkpXG4gICAgKTtcbiAgfVxuXG4gIHJlbW92ZU15VmlkZW8oaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmRlbChgL3BlcmZvcm1lci9wZXJmb3JtZXItYXNzZXRzL3ZpZGVvcy8ke2lkfWApO1xuICB9XG5cbiAgY3JlYXRlKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGRhdGE6IElQZXJmb3JtZXJWaWRlb1BheWxvYWQsXG4gICAgb3B0aW9uczogeyBvblByb2dyZXNzOiBGdW5jdGlvbiB9ID0ge1xuICAgICAgb25Qcm9ncmVzcygpIHt9XG4gICAgfVxuICApOiBQcm9taXNlPElSZXNwb25zZTxhbnk+PiB7XG4gICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5sZW5ndGhDb21wdXRhYmxlKSB7XG4gICAgICAgICAgb3B0aW9ucy5vblByb2dyZXNzKHtcbiAgICAgICAgICAgIHBlcmNlbnRhZ2U6IChldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCkgKiAxMDBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJlcS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBzdWNjZXNzID0gcmVxLnN0YXR1cyA+PSAyMDAgJiYgcmVxLnN0YXR1cyA8IDMwMDtcbiAgICAgICAgY29uc3QgeyByZXNwb25zZSB9ID0gcmVxO1xuICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgcmVxLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICAgICAgcmVqZWN0KHJlcS5yZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIC8vIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUsIGZpbGUubmFtZSk7XG4gICAgICBpZiAoZGF0YS52aWRlbykge1xuICAgICAgICBjb25zdCB2aWRlbyA9IGRhdGEudmlkZW8uZmlsZS5vcmlnaW5GaWxlT2JqO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3ZpZGVvJywgdmlkZW8sIHZpZGVvLm5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YS50cmFpbGVyKSB7XG4gICAgICAgIGNvbnN0IHRyYWlsZXIgPSBkYXRhLnRyYWlsZXIuZmlsZS5vcmlnaW5GaWxlT2JqO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3RyYWlsZXInLCB0cmFpbGVyLCB0cmFpbGVyLm5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YS50aHVtYm5haWwpIHtcbiAgICAgICAgY29uc3QgdGh1bWJuYWlsID0gZGF0YS50aHVtYm5haWwuZmlsZS5vcmlnaW5GaWxlT2JqO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3RodW1ibmFpbCcsIHRodW1ibmFpbCwgdGh1bWJuYWlsLm5hbWUpO1xuICAgICAgfVxuXG4gICAgICBPYmplY3Qua2V5cyhvbWl0KGRhdGEsIFsndmlkZW8nLCAndGh1bWJuYWlsJywgJ3RyYWlsZXInXSkpLmZvckVhY2goXG4gICAgICAgICh2KSA9PiB7XG4gICAgICAgICAgZm9ybURhdGEuYXBwZW5kKHYsIGRhdGFbdl0pO1xuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICByZXEucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xuICAgICAgcmVxLm9wZW4oJ1BPU1QnLCBpc1VybCh1cmwpID8gdXJsIDogYCR7Y29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0ke3VybH1gKTtcblxuICAgICAgY29uc3QgdG9rZW46IGFueSA9IGNvb2tpZS5nZXQoVE9LRU4pO1xuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKCdBdXRob3JpemF0aW9uJywgdG9rZW4pO1xuICAgICAgfVxuICAgICAgcmVxLnNlbmQoZm9ybURhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGRhdGE6IElQZXJmb3JtZXJWaWRlb1BheWxvYWQsXG4gICAgb3B0aW9uczogeyBvblByb2dyZXNzOiBGdW5jdGlvbiB9ID0ge1xuICAgICAgb25Qcm9ncmVzcygpIHt9XG4gICAgfVxuICApOiBQcm9taXNlPElSZXNwb25zZTxhbnk+PiB7XG4gICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5sZW5ndGhDb21wdXRhYmxlKSB7XG4gICAgICAgICAgb3B0aW9ucy5vblByb2dyZXNzKHtcbiAgICAgICAgICAgIHBlcmNlbnRhZ2U6IChldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCkgKiAxMDBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJlcS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBzdWNjZXNzID0gcmVxLnN0YXR1cyA+PSAyMDAgJiYgcmVxLnN0YXR1cyA8IDMwMDtcbiAgICAgICAgY29uc3QgeyByZXNwb25zZSB9ID0gcmVxO1xuICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgcmVxLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICAgICAgcmVqZWN0KHJlcS5yZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIC8vIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUsIGZpbGUubmFtZSk7XG4gICAgICBpZiAoZGF0YS52aWRlbyAmJiBkYXRhLnZpZGVvLmZpbGUpIHtcbiAgICAgICAgY29uc3QgdmlkZW8gPSBkYXRhLnZpZGVvLmZpbGUub3JpZ2luRmlsZU9iajtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd2aWRlbycsIHZpZGVvLCB2aWRlby5uYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGEudHJhaWxlciAmJiBkYXRhLnRyYWlsZXIuZmlsZSkge1xuICAgICAgICBjb25zdCB0cmFpbGVyID0gZGF0YS50cmFpbGVyLmZpbGUub3JpZ2luRmlsZU9iajtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd0cmFpbGVyJywgdHJhaWxlciwgdHJhaWxlci5uYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGEudGh1bWJuYWlsICYmIGRhdGEudGh1bWJuYWlsLmZpbGUpIHtcbiAgICAgICAgY29uc3QgdGh1bWJuYWlsID0gZGF0YS50aHVtYm5haWwuZmlsZS5vcmlnaW5GaWxlT2JqO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3RodW1ibmFpbCcsIHRodW1ibmFpbCwgdGh1bWJuYWlsLm5hbWUpO1xuICAgICAgfVxuXG4gICAgICBPYmplY3Qua2V5cyhvbWl0KGRhdGEsIFsndmlkZW8nLCAndGh1bWJuYWlsJywgJ3RyYWlsZXInXSkpLmZvckVhY2goKHYpID0+IHtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKHYsIGRhdGFbdl0pO1xuICAgICAgfSk7XG5cbiAgICAgIHJlcS5yZXNwb25zZVR5cGUgPSAnanNvbic7XG4gICAgICByZXEub3BlbignUFVUJywgaXNVcmwodXJsKSA/IHVybCA6IGAke2NvbmZpZy5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlR9JHt1cmx9YCk7XG5cbiAgICAgIGNvbnN0IHRva2VuOiBhbnkgPSBjb29raWUuZ2V0KFRPS0VOKTtcbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICByZXEuc2V0UmVxdWVzdEhlYWRlcignQXV0aG9yaXphdGlvbicsIHRva2VuKTtcbiAgICAgIH1cbiAgICAgIHJlcS5zZW5kKGZvcm1EYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIGluY3JlYXNlVmlldyhpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL3VzZXIvcGVyZm9ybWVyLWFzc2V0cy92aWRlb3MvJHtpZH0vaW5jLXZpZXdgKTtcbiAgfVxuXG4gIC8vIHVwZGF0ZSh2aWRlb0lkLCBwZXJmb3JtZXJJZCwgZGF0YSkge1xuICAvLyAgIHJldHVybiB0aGlzLnB1dChgL3BlcmZvcm1lci9wZXJmb3JtZXItYXNzZXRzL3ZpZGVvcy8ke3ZpZGVvSWR9YCwge1xuICAvLyAgICAgLi4uZGF0YSxcbiAgLy8gICAgIHBlcmZvcm1lcklkXG4gIC8vICAgfSk7XG4gIC8vIH1cbiAgdXNlckZpbmRWaWRlb0J5SWQoaWQ6IHN0cmluZywgaGVhZGVycyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvdXNlci9wZXJmb3JtZXItYXNzZXRzL3ZpZGVvcy8ke2lkfWAsIGhlYWRlcnMpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCB2aWRlb1NlcnZpY2UgPSBuZXcgVmlkZW9TZXJ2aWNlKCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU29ja2V0Q29udGV4dCB9IGZyb20gJy4vU29ja2V0Q29udGV4dCc7XG5pbXBvcnQgeyB3YXJuaW5nIH0gZnJvbSAnLi91dGlscyc7XG5cbmludGVyZmFjZSBJRXZlbnRQcm9wcyB7XG4gIGV2ZW50OiBzdHJpbmc7XG4gIGhhbmRsZXI6IEZ1bmN0aW9uO1xufVxuXG5jbGFzcyBFdmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJRXZlbnRQcm9wcz4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZXZlbnQsIGhhbmRsZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc29ja2V0ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgaWYgKCFzb2NrZXQpIHtcbiAgICAgIHdhcm5pbmcoJ1NvY2tldCBJTyBjb25uZWN0aW9uIGhhcyBub3QgYmVlbiBlc3RhYmxpc2hlZC4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzb2NrZXQub24oZXZlbnQsIGhhbmRsZXIpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY29uc3QgeyBldmVudCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzb2NrZXQgPSB0aGlzLmNvbnRleHQ7XG5cbiAgICBpZiAoIXNvY2tldCkge1xuICAgICAgd2FybmluZygnU29ja2V0IElPIGNvbm5lY3Rpb24gaGFzIG5vdCBiZWVuIGVzdGFibGlzaGVkLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNvY2tldC5vZmYoZXZlbnQpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5FdmVudC5jb250ZXh0VHlwZSA9IFNvY2tldENvbnRleHQ7XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTb2NrZXRJTyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcbmltcG9ydCB7IGF1dGhTZXJ2aWNlIH0gZnJvbSAnQHNlcnZpY2VzL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgZ2V0R2xvYmFsQ29uZmlnIH0gZnJvbSAnQHNlcnZpY2VzL2NvbmZpZyc7XG5pbXBvcnQgeyB3YXJuaW5nLCBkZWJ1ZyB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgU29ja2V0Q29udGV4dCB9IGZyb20gJy4vU29ja2V0Q29udGV4dCc7XG5cbmludGVyZmFjZSBJU29ja2V0UHJvcHMge1xuICB1cmk/OiBzdHJpbmc7XG4gIGNoaWxkcmVuOiBhbnk7XG4gIGxvZ2dlZEluOiBib29sZWFuO1xufVxuXG5jbGFzcyBTb2NrZXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVNvY2tldFByb3BzPiB7XG4gIHNvY2tldDtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmNvbm5lY3QoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShuZXh0UHJvcHM6IGFueSkge1xuICAgIGNvbnN0IHsgbG9nZ2VkSW4gfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKG5leHRQcm9wcy5sb2dnZWRJbiAhPT0gbG9nZ2VkSW4pIHtcbiAgICAgIHRoaXMuY29ubmVjdCgpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuc29ja2V0ICYmIHRoaXMuc29ja2V0LmNsb3NlKCk7XG4gIH1cblxuICBjb25uZWN0KCkge1xuICAgIGNvbnN0IHsgbG9nZ2VkSW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdG9rZW4gPSBsb2dnZWRJbiAmJiBhdXRoU2VydmljZS5nZXRUb2tlbigpO1xuICAgIGlmICghcHJvY2Vzcy5icm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpO1xuICAgIGNvbnN0IHsgdXJpID0gY29uZmlnLk5FWFRfUFVCTElDX1NPQ0tFVF9FTkRQT0lOVCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgdHJhbnNwb3J0czogWyd3ZWJzb2NrZXQnLCAncG9sbGluZycsICdsb25nLXBvbGxpbmcnXSxcbiAgICAgIHF1ZXJ5OiB0b2tlbiA/IGB0b2tlbj0ke3Rva2VufWAgOiAnJ1xuICAgIH07XG5cbiAgICB0aGlzLnNvY2tldCAmJiB0aGlzLnNvY2tldC5jbG9zZSgpO1xuXG4gICAgdGhpcy5zb2NrZXQgPSBTb2NrZXRJTyh1cmksIHRoaXMubWVyZ2VPcHRpb25zKG9wdGlvbnMpKTtcblxuICAgIHRoaXMuc29ja2V0LnN0YXR1cyA9ICdpbml0aWFsaXplZCc7XG5cbiAgICB0aGlzLnNvY2tldC5vbignY29ubmVjdCcsICgpID0+IHtcbiAgICAgIHRoaXMuc29ja2V0LnN0YXR1cyA9ICdjb25uZWN0ZWQnO1xuICAgICAgZGVidWcoJ2Nvbm5lY3RlZCcpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zb2NrZXQub24oJ2Rpc2Nvbm5lY3QnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNvY2tldC5zdGF0dXMgPSAnZGlzY29ubmVjdGVkJztcbiAgICAgIGRlYnVnKCdkaXNjb25uZWN0Jyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNvY2tldC5vbignZXJyb3InLCAoZXJyKSA9PiB7XG4gICAgICB0aGlzLnNvY2tldC5zdGF0dXMgPSAnZmFpbGVkJztcbiAgICAgIHdhcm5pbmcoJ2Vycm9yJywgZXJyKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc29ja2V0Lm9uKCdyZWNvbm5lY3QnLCAoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zb2NrZXQuc3RhdHVzID0gJ2Nvbm5lY3RlZCc7XG4gICAgICBkZWJ1ZygncmVjb25uZWN0JywgZGF0YSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNvY2tldC5vbigncmVjb25uZWN0X2F0dGVtcHQnLCAoKSA9PiB7XG4gICAgICBkZWJ1ZygncmVjb25uZWN0X2F0dGVtcHQnKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc29ja2V0Lm9uKCdyZWNvbm5lY3RpbmcnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNvY2tldC5zdGF0dXMgPSAncmVjb25uZWN0aW5nJztcbiAgICAgIGRlYnVnKCdyZWNvbm5lY3RpbmcnKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc29ja2V0Lm9uKCdyZWNvbm5lY3RfZmFpbGVkJywgKGVycm9yKSA9PiB7XG4gICAgICB0aGlzLnNvY2tldC5zdGF0dXMgPSAnZmFpbGVkJztcbiAgICAgIHdhcm5pbmcoJ3JlY29ubmVjdF9mYWlsZWQnLCBlcnJvcik7XG4gICAgfSk7XG4gIH1cblxuICBtZXJnZU9wdGlvbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICByZWNvbm5lY3Rpb246IHRydWUsXG4gICAgICByZWNvbm5lY3Rpb25BdHRlbXB0czogSW5maW5pdHksXG4gICAgICByZWNvbm5lY3Rpb25EZWxheTogMSAqIDEwMDAsXG4gICAgICByZWNvbm5lY3Rpb25EZWxheU1heDogNSAqIDEwMDAsXG4gICAgICBhdXRvQ29ubmVjdDogdHJ1ZSxcbiAgICAgIHRyYW5zcG9ydHM6IFsnd2Vic29ja2V0JywgJ3BvbGxpbmcnLCAnbG9uZy1wb2xsaW5nJ10sXG4gICAgICByZWplY3RVbmF1dGhvcml6ZWQ6IHRydWVcbiAgICB9O1xuICAgIHJldHVybiB7IC4uLmRlZmF1bHRPcHRpb25zLCAuLi5vcHRpb25zIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFNvY2tldENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3RoaXMuc29ja2V0fT5cbiAgICAgICAge1JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pfVxuICAgICAgPC9Tb2NrZXRDb250ZXh0LlByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVzID0gKHN0YXRlOiBhbnkpID0+ICh7XG4gIGxvZ2dlZEluOiBzdGF0ZS5hdXRoLmxvZ2dlZEluXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZXMpKFNvY2tldCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgU29ja2V0Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8YW55Pignc29ja2V0Jyk7XG4iLCJpbXBvcnQgU29ja2V0IGZyb20gJy4vU29ja2V0JztcbmltcG9ydCBFdmVudCBmcm9tICcuL0V2ZW50JztcbmltcG9ydCB7IFNvY2tldENvbnRleHQgfSBmcm9tICcuL1NvY2tldENvbnRleHQnO1xuXG5pZiAocHJvY2Vzcy5icm93c2VyKSB7XG4gIGlmICh3aW5kb3cpIHdpbmRvdy5SZWFjdFNvY2tldElPID0geyBTb2NrZXQsIEV2ZW50LCBTb2NrZXRDb250ZXh0IH07XG59XG5cbmV4cG9ydCB7IFNvY2tldCwgRXZlbnQsIFNvY2tldENvbnRleHQgfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1zcHJlYWQgKi9cblxuaW1wb3J0IHsgZ2V0R2xvYmFsQ29uZmlnIH0gZnJvbSAnQHNlcnZpY2VzL2NvbmZpZyc7XG5cbi8qKlxuICogUHJpbnRzIGEgd2FybmluZyBpbiB0aGUgY29uc29sZSBpZiBpdCBleGlzdHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgVGhlIHdhcm5pbmcgbWVzc2FnZS5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgY29uc3Qgd2FybmluZyA9ICguLi5hcmdzKSA9PiB7XG4gIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpO1xuICAvLyBkZWJ1ZyBvbiBkZXZlbG9wbWVudCBhbmQgc3RhZ2luZy5cbiAgaWYgKGNvbmZpZy5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSByZXR1cm47XG5cbiAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb25zb2xlLmVycm9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc29sZS5lcnJvci5hcHBseShjb25zb2xlLCBhcmdzKTtcbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IGlmIHlvdSBlbmFibGVcbiAgICAvLyBcImJyZWFrIG9uIGFsbCBleGNlcHRpb25zXCIgaW4geW91ciBjb25zb2xlLFxuICAgIC8vIGl0IHdvdWxkIHBhdXNlIHRoZSBleGVjdXRpb24gYXQgdGhpcyBsaW5lLlxuXG4gICAgdGhyb3cgbmV3IEVycm9yKGFyZ3Muam9pbignICcpKTtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1lbXB0eSAqL1xuICB9IGNhdGNoIChlKSB7fVxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLWVtcHR5ICovXG59O1xuXG5leHBvcnQgY29uc3QgZGVidWcgPSAoLi4uYXJncykgPT4ge1xuICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgLy8gZGVidWcgb24gZGV2ZWxvcG1lbnQgYW5kIHN0YWdpbmcuXG4gIGlmIChjb25maWcuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykgcmV0dXJuO1xuXG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY29uc29sZS5kZWJ1ZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnNvbGUuZGVidWcuYXBwbHkoY29uc29sZSwgYXJncyk7XG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy11bmZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoLXRvLXJlZ2V4cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1hY3Rpb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZXNlbGVjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzb2NrZXQuaW8tY2xpZW50XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=