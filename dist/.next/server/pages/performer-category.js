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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/performer-category/index.tsx");
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

/***/ "./pages/performer-category/index.tsx":
/*!********************************************!*\
  !*** ./pages/performer-category/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_common_layout_page_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/common/layout/page-header */ "./src/components/common/layout/page-header.tsx");
/* harmony import */ var src_services_perfomer_categories_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/perfomer-categories.service */ "./src/services/perfomer-categories.service.ts");
/* harmony import */ var src_redux_ui_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/redux/ui/actions */ "./src/redux/ui/actions.ts");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_performer_performer_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/performer/performer-grid */ "./src/components/performer/performer-grid.tsx");
/* harmony import */ var _redux_performer_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @redux/performer/actions */ "./src/redux/performer/actions.ts");
/* harmony import */ var src_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services */ "./src/services/index.ts");
/* harmony import */ var src_lib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/lib */ "./src/lib/index.ts");
/* harmony import */ var src_socket__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/socket */ "./src/socket/index.ts");
var _jsxFileName = "E:\\programData\\React\\user\\pages\\performer-category\\index.tsx";
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

class PerformerCategoryPage extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  static async getInitialProps({
    ctx
  }) {
    try {
      if (false) {}

      if (!ctx.query.slug) {
        return {};
      }

      const resp = await src_services_perfomer_categories_service__WEBPACK_IMPORTED_MODULE_4__["performerCategories"].details(ctx.query.slug);
      return {
        category: resp.data
      };
    } catch (err) {
      return {};
    }
  }

  constructor(props) {
    super(props);

    _defineProperty(this, "socket", void 0);

    _defineProperty(this, "search", () => {
      const {
        searchPerformer: dispatchSearchPerformer,
        category
      } = this.props;
      const {
        query
      } = this.state;
      dispatchSearchPerformer(_objectSpread(_objectSpread({}, query), {}, {
        category: category ? category._id : ''
      }));
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

  componentDidUpdate(prevProps) {
    const {
      category,
      loggedIn
    } = this.props;

    if (category !== prevProps.category) {
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
      _id,
      isFavorite
    } = performer;
    const {
      updatePerformerFavourite: dispatchUpdatePerformerFavourite
    } = this.props;

    try {
      await src_services__WEBPACK_IMPORTED_MODULE_9__["favouriteService"].favorite(_id, isFavorite);
      dispatchUpdatePerformerFavourite(_id);
    } catch (error) {
      const e = await Promise.resolve(error);
      antd__WEBPACK_IMPORTED_MODULE_2__["message"].error(Object(src_lib__WEBPACK_IMPORTED_MODULE_10__["getResponseError"])(e));
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

  render() {
    const {
      category,
      pluralTextModel
    } = this.props;
    const {
      query
    } = this.state;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
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
    }, category ? `Category - ${category.name}` : `All ${pluralTextModel || 'Performers'}`)), __jsx(_components_common_layout_page_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: category ? category.name : `All ${pluralTextModel || 'Performers'}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 9
      }
    }), __jsx("div", {
      className: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 9
      }
    }, __jsx(_components_performer_performer_grid__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({}, this.props, query, {
      isPage: true,
      setFilter: this.setFilter.bind(this),
      onLike: this.onLike.bind(this),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 11
      }
    }))));
  }

}

_defineProperty(PerformerCategoryPage, "authenticate", false);

_defineProperty(PerformerCategoryPage, "layout", 'public');

PerformerCategoryPage.contextType = src_socket__WEBPACK_IMPORTED_MODULE_11__["SocketContext"];

const mapStateToProps = state => _objectSpread(_objectSpread({
  loggedIn: state.auth.loggedIn
}, state.performer.performers), state.ui);

const mapDispatch = {
  searchPerformer: _redux_performer_actions__WEBPACK_IMPORTED_MODULE_8__["searchPerformer"],
  updatePerformerFavourite: _redux_performer_actions__WEBPACK_IMPORTED_MODULE_8__["updatePerformerFavourite"],
  updateUIValue: src_redux_ui_actions__WEBPACK_IMPORTED_MODULE_5__["updateUIValue"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatch)(PerformerCategoryPage));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3BlcmZvcm1lci1jYXRlZ29yeS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2Jhc2UvaWNvbnMudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9iYXNlL2xvYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2xheW91dC9iYW5uZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9sYXlvdXQvcGFnZS1oZWFkZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BlcmZvcm1lci9wZXJmb3JtZXItZ3JpZC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9kYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvZmlsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvaW50ZXJuZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9sYXlvdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9tZXNzYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvcmVkdXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9ydWxlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3N0b3JlSG9sZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvc3RyZWFtLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvc3RyaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3BlcmZvcm1lci9hY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC91aS9hY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9hcGktcmVxdWVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvYXV0aC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9iYW5uZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9lYXJuaW5nLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2Zhdm91cml0ZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9nYWxsZXJ5LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9tZXNzYWdlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL29yZGVyLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3BheW1lbnQtaW5mb3JtYXRpb24uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcGF5b3V0LXJlcXVlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3BlcmZvbWVyLWNhdGVnb3JpZXMuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcGVyZm9tZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcGhvdG8uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcG9zdC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9wcm9kdWN0LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3B1cmNoYXNlLWl0ZW0uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcmVmdW5kLXJlcXVlc3Quc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvc2V0dGluZy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9zdHJlYW0uc2VydmljZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3N0dWRpby5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy90b2tlbi1wYWNrYWdlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3RyYW5zYWN0aW9uLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3VzZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvdXRpbHMuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvdmlkZW8uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc29ja2V0L0V2ZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc29ja2V0L1NvY2tldC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvY2tldC9Tb2NrZXRDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc29ja2V0L2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zb2NrZXQvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFudC1kZXNpZ24vaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzb21vcnBoaWMtdW5mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGgtdG8tcmVnZXhwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtYWN0aW9uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlc2VsZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic29ja2V0LmlvLWNsaWVudFwiIl0sIm5hbWVzIjpbImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsImNhY2hlZE9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwib2JzZXJ2ZXIiLCJnZXRPYnNlcnZlciIsImNvbnNvbGUiLCJyb3V0ZXIiLCJlcnIiLCJocmVmIiwiZXZlbnQiLCJ0YXJnZXQiLCJlIiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsInJlcGxhY2UiLCJzdWNjZXNzIiwiZG9jdW1lbnQiLCJhcmdzIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0IiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJvcHRpb25hbFByb3BzIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJwIiwicGF0aG5hbWUiLCJyZXNvbHZlZEFzIiwiY2hpbGRFbG0iLCJpc1ByZWZldGNoZWQiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFByb3BzIiwicmVmIiwiZWwiLCJzZXRDaGlsZEVsbSIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJBcnJheSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJuYW1lIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwicHJlZml4IiwiYWRkUGF0aFByZWZpeCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtcyIsInBhcmFtIiwidmFsdWUiLCJyZXBsYWNlZCIsInJlcGVhdCIsIm9wdGlvbmFsIiwiZXNjYXBlUGF0aERlbGltaXRlcnMiLCJyZXN1bHQiLCJmaWx0ZXJlZFF1ZXJ5IiwicXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaW50ZXJwb2xhdGVBcyIsImhhc2giLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlQXMiLCJQQUdFX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhZGRCYXNlUGF0aCIsInJlc29sdmVIcmVmIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJjcmVkZW50aWFscyIsInJlcyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsImlzU2VydmVyUmVuZGVyIiwibWFya0xvYWRpbmdFcnJvciIsImNvbnN0cnVjdG9yIiwicm91dGUiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJsb2NhbGUiLCJsb2NhbGVzIiwiZGVmYXVsdExvY2FsZSIsInN0YXRlIiwib3B0aW9ucyIsInN0eWxlU2hlZXRzIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJDb21wb25lbnQiLCJfX05FWFRfREFUQV9fIiwicmVsb2FkIiwiYmFjayIsInB1c2giLCJwcmVwYXJlVXJsQXMiLCJjaGFuZ2UiLCJpc0xvY2FsVVJMIiwiU1QiLCJwZXJmb3JtYW5jZSIsImFkZExvY2FsZSIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsImRlbEJhc2VQYXRoIiwicGFnZXMiLCJfX3Jld3JpdGVzIiwicGFyc2VkIiwibWV0aG9kIiwicG90ZW50aWFsSHJlZiIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJhcHBDb21wIiwiZXJyb3IiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInBhZ2UiLCJnZXRSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJyZXF1aXJlIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiX3Jlc29sdmVIcmVmIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJQcm9taXNlIiwiZmV0Y2hDb21wb25lbnQiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiZGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNlZ21lbnQiLCJjaGFyIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsIkRVTU1ZX0JBU0UiLCJyZXNvbHZlZEJhc2UiLCJvcmlnaW4iLCJtYXRjaGVyT3B0aW9ucyIsInNlbnNpdGl2ZSIsImRlbGltaXRlciIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsImtleXMiLCJtYXRjaGVyUmVnZXgiLCJwYXRoVG9SZWdleHAiLCJtYXRjaGVyIiwicGFyc2VkRGVzdGluYXRpb24iLCJkZXN0UXVlcnkiLCJkZXN0UGF0aCIsImRlc3RQYXRoUGFyYW1LZXlzIiwiZGVzdFBhdGhQYXJhbXMiLCJkZXN0aW5hdGlvbkNvbXBpbGVyIiwidmFsaWRhdGUiLCJzdHJPckFycmF5IiwicXVlcnlDb21waWxlciIsInBhcmFtS2V5cyIsImFwcGVuZFBhcmFtc1RvUXVlcnkiLCJzaG91bGRBZGRCYXNlUGF0aCIsIm5ld1VybCIsInNlYXJjaFBhcmFtcyIsImlzTmFOIiwiaXRlbSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwiY3VzdG9tUm91dGVNYXRjaGVyIiwicmV3cml0ZSIsImRlc3RSZXMiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiaW5pdFF1ZXJ5U3RhdGUiLCJvZmZzZXQiLCJsaW1pdCIsImdlbmRlciIsImNhdGVnb3J5IiwiY291bnRyeSIsInNvcnRCeSIsInNvcnQiLCJQZXJmb3JtZXJDYXRlZ29yeVBhZ2UiLCJQdXJlQ29tcG9uZW50Iiwic2x1ZyIsInJlc3AiLCJwZXJmb3JtZXJDYXRlZ29yaWVzIiwiZGV0YWlscyIsInNlYXJjaFBlcmZvcm1lciIsImRpc3BhdGNoU2VhcmNoUGVyZm9ybWVyIiwiX2lkIiwiY29tcG9uZW50RGlkTW91bnQiLCJzb2NrZXQiLCJjb250ZXh0IiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwibG9nZ2VkSW4iLCJjb21wb25lbnRXaWxsVW5tb3VudCIsIm9uTGlrZSIsInBlcmZvcm1lciIsImlzRmF2b3JpdGUiLCJ1cGRhdGVQZXJmb3JtZXJGYXZvdXJpdGUiLCJkaXNwYXRjaFVwZGF0ZVBlcmZvcm1lckZhdm91cml0ZSIsImZhdm91cml0ZVNlcnZpY2UiLCJmYXZvcml0ZSIsInJlc29sdmUiLCJnZXRSZXNwb25zZUVycm9yIiwic2V0RmlsdGVyIiwic2V0U3RhdGUiLCJyZW5kZXIiLCJwbHVyYWxUZXh0TW9kZWwiLCJiaW5kIiwiY29udGV4dFR5cGUiLCJTb2NrZXRDb250ZXh0IiwibWFwU3RhdGVUb1Byb3BzIiwicGVyZm9ybWVycyIsInVpIiwibWFwRGlzcGF0Y2giLCJ1cGRhdGVVSVZhbHVlIiwiY29ubmVjdCIsIkZhY2Vib29rSWNvbiIsInN0eWxlIiwiVHdpdHRlckljb24iLCJJbnN0YWdyYW1JY29uIiwiR2lmdEljb24iLCJNZXNzYWdlSWNvbiIsIndpZHRoIiwiaGVpZ2h0IiwiY29sb3IiLCJGYXZvdXJpdGVJY29uIiwiU2VuZE1lc3NhZ2VJY29uIiwiRnVuZHNJY29uIiwiUGF5bWVudFRva2Vuc0hpc3RvcnlJY29uIiwiVHJhbnNhY3Rpb25IaXN0b3J5SWNvbiIsIlB1cmNoYXNlZEltYWdlSWNvbiIsIlB1cmNoYXNlZFZpZGVvSWNvbiIsIlB1cmNoYXNlZEl0ZW1JY29uIiwiTXlQcm9kdWN0SWNvbiIsIlZpZGVvc0ljb24iLCJQaG90b3NJY29uIiwiRmVtYWxlU2lnbkljb24iLCJNYWxlU2lnbkljb24iLCJUcmFuc2dlbmRlckljb24iLCJUb2tlbnNJY29uIiwiRWFybmluZ0ljb24iLCJQYXlvdXRSZXF1ZXN0SWNvbiIsIkdyb3VwIiwiTG9hZGVyIiwic3Bpbm5pbmciLCJmdWxsU2NyZWVuIiwiY2xhc3NOYW1lcyIsImhpZGRlbiIsInJlbmRlckJhbm5lciIsImJhbm5lciIsInN0eWxlSW1hZ2UiLCJ0eXBlIiwicGhvdG8iLCJjb250ZW50SFRNTCIsIl9faHRtbCIsIkJhbm5lciIsImJhbm5lcnMiLCJjbGFzc25hbWVzIiwibGVuZ3RoIiwibWFwIiwiZGVmYXVsdFByb3BzIiwidGl0bGUiLCJleHRyYSIsInJlbmRlclRpdGxlIiwibWFyZ2luUmlnaHQiLCJyZW5kZXJUYWdzIiwidGFncyIsInRhZyIsIkdyaWRDYXJkIiwiY2xhc3NOYW1lIiwicGxhY2Vob2xkZXJBdmF0YXJVcmwiLCJpc09ubGluZSIsInN0cmVhbWluZ1N0YXR1cyIsInN0YXR1c0NsYXNzTmFtZXMiLCJzdGF0dXMiLCJkZWZhdWx0UGxhY2Vob2xkZXJBdmF0YXJVcmwiLCJpc0Jsb2NrZWQiLCJKU09OIiwic3RyaW5naWZ5IiwidXNlcm5hbWUiLCJhdmF0YXIiLCJqb2luIiwic3RhdHMiLCJ2aWV3cyIsImFib3V0TWUiLCJQZXJmb3JtZXJHcmlkIiwic2VhcmNoaW5nIiwiaXNQYWdlIiwidG90YWwiLCJ0b3BCYW5uZXJzIiwicmlnaHRCYW5uZXJzIiwiYm90dG9tQmFubmVycyIsIlJvd0dyaWQiLCJkYXRhU291cmNlIiwicmVuZGVyR3JpZCIsInBhZGRpbmciLCJkYXRhQ2h1bmsiLCJjaHVuayIsImxhc3REYXRhQ2h1bmsiLCJzbGljZSIsInYiLCJnZW5lcmF0ZVV1aWQiLCJhY3Rpb25zIiwiTWF0aCIsInJvdW5kIiwiYmFubmVyU2VsZWN0ZXIiLCJsaXN0QmFubmVycyIsImZpbHRlckJhbm5lciIsImNyZWF0ZVNlbGVjdG9yIiwiZmlsdGVyIiwiYiIsInBvc2l0aW9uIiwibWFwU3RhdGVzIiwiZm9ybWF0RGF0ZSIsImRhdGUiLCJmb3JtYXQiLCJtb21lbnQiLCJjb252ZXJEdXJhdGlvbiIsImR1cmF0aW9uIiwidXRjIiwiYXNNaWxsaXNlY29uZHMiLCJwYXJzZUFnZSIsImdldEFnZSIsImRpZmYiLCJ0b1N0cmluZyIsImZvcm1hdER1cmF0aW9uIiwicyIsImhvdXJzIiwiZmxvb3IiLCJtaW51dGVzIiwic2Vjb25kcyIsImJlZm9yZUF2YXRhclVwbG9hZCIsImZpbGUiLCJleHQiLCJzcGxpdCIsInBvcCIsInRvTG93ZXJDYXNlIiwiY29uZmlnIiwiZ2V0R2xvYmFsQ29uZmlnIiwiaXNJbWFnZUFjY2VwdCIsIk5FWFRfUFVCTElDX0lNQUdFX0FDQ1BFVCIsInRyaW0iLCJpbmRleE9mIiwiaXNMdDJNIiwic2l6ZSIsIk5FWFRfUFVCTElDX01BWElNVU1fU0laRV9VUExPQURfQVZBVEFSIiwiSU5URVJORVRfQ0hFQ0tfVVJMIiwiaXNIYXNJbnRlcm5ldENvbm5lY3Rpb24iLCJmZXRjaCIsImhlYWRlcnMiLCJQcmFnbWEiLCJFeHBpcmVzIiwiZXhjZXB0aW9uIiwibG9nIiwiZm9ybUl0ZW1MYXlvdXQiLCJsYWJlbENvbCIsInhzIiwic3BhbiIsInNtIiwid3JhcHBlckNvbCIsInRhaWxGb3JtSXRlbUxheW91dCIsImRlZmF1bHRDb2xvciIsInByaW1hcnlDb2xvciIsInN1Y2Nlc3NDb2xvciIsIndoaXRlQ29sb3IiLCJ2YWxpZGF0ZU1lc3NhZ2VzIiwicmVxdWlyZWQiLCJ0eXBlcyIsImVtYWlsIiwibnVtYmVyIiwicmFuZ2UiLCJjcmVhdGVBY3Rpb24iLCJhY3Rpb24iLCJSZWR1eENyZWF0ZUFjdGlvbiIsImlzIiwiYVR5cGUiLCJjcmVhdGVBc3luY0FjdGlvbiIsImNyZWF0ZUFzeW5jQWN0aW9ucyIsImhhbmRsZUFjdGlvbnMiLCJpbml0aWFsU3RhdGUiLCJoYW5kbGVSZWR1eEFjdGlvbnMiLCJyZWR1Y2UiLCJyZWR1Y2VyIiwiYWN0IiwiY3JlYXRlUmVkdWNlcnMiLCJzdGF0ZUNvbnRleHQiLCJyZWR1Y2VycyIsInByZXZlbnRSZXNldHRpbmciLCJmbGF0dGVuIiwiaXNBcnJheSIsImZvckVhY2giLCJBUFBfU1RBVEVfUkVTRVQiLCJjcmVhdGVTYWdhcyIsInNhZ2FzIiwic2FnYSIsImVmZmVjdCIsInRha2VMYXRlc3QiLCJ3b3JrZXIiLCJkZWxheSIsImNyZWF0ZVNlbGVjdG9yc0EiLCJzdGF0ZVNlbGVjdG9yIiwiaXNFbXB0eSIsImdldEluIiwiY3JlYXRlU2VsZWN0b3JzIiwic2VsZWN0b3JzIiwiY3JlYXRlSlNTZWxlY3RvcnMiLCJ1c2VybmFtZVBhdHRlcm5SdWxlIiwicGF0dGVybiIsIlJlZ0V4cCIsInN0b3JlIiwiZ2V0U3RvcmUiLCJzZXRTdG9yZSIsIkRFRkFVTFRfT0ZGTElORV9JTUFHRV9VUkwiLCJERUZBVUxUX1BSSVZBVEVfSU1BR0VfVVJMIiwiREVGQVVMVF9HUk9VUF9JTUFHRV9VUkwiLCJERUZBVUxUX09OTElORV9JTUFHRV9VUkwiLCJnZXRQb3N0ZXIiLCJwb3N0ZXIiLCJzdG9yZUhvbGRlciIsInNldHRpbmdzIiwiZ2V0U3RhdGUiLCJkZWZhdWx0UHJpdmF0ZUNhbGxJbWFnZSIsImRlZmF1bHRPZmZsaW5lTW9kZWxJbWFnZSIsImRlZmF1bHRHcm91cENoYXRJbWFnZSIsImlzVXJsIiwibWF0Y2giLCJjIiwiciIsInJhbmRvbSIsImNhcGl0YWxpemVGaXJzdExldHRlciIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwidW5pdFByaWNlcyIsInRleHQiLCJhcnJheVRvVHJlZSIsImFycmF5IiwiaWQiLCJwYXJlbnRJZCIsImNsb25lRGVlcCIsImluZGV4IiwiaGFzaFBhcmVudCIsInBhdGhNYXRjaFJlZ2V4cCIsInJlZ2V4cCIsImV4ZWMiLCJxdWVyeUFuY2VzdG9ycyIsImN1cnJlbnQiLCJoYXNoTWFwIiwiTWFwIiwiZ2V0UGF0aCIsImN1cnJlbnRQYXJlbnRJZCIsImNvbnN0cmFpbnRzIiwidmFsdWVzIiwiaXNNb2JpbGUiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJnZXRVcmxQYXJhbWV0ZXIiLCJzUGFyYW0iLCJzUGFnZVVSTCIsImxvY2F0aW9uIiwic3Vic3RyaW5nIiwic1VSTFZhcmlhYmxlcyIsInNQYXJhbWV0ZXJOYW1lIiwidW5kZWZpbmVkIiwiREFZX09GX1dFRUsiLCJtb24iLCJ0dWUiLCJ3ZWQiLCJ0aHUiLCJmcmkiLCJzYXQiLCJzdW4iLCJnZXREZWZhdWx0U2NoZWR1bGUiLCJkZWZhdWx0VmFsIiwic3RhcnQiLCJlbmQiLCJjbG9zZWQiLCJnZXROZXh0U2hvdyIsInNjaGVkdWxlIiwid2Vla0RheSIsIm5leHRTaG93IiwicGVyZm9ybWVyU2hvd3MiLCJkYXkiLCJnZXRTZWFyY2hEYXRhIiwicGFnaW5hdGlvbiIsImZpbHRlcnMiLCJzb3J0ZXIiLCJvcmRlciIsIlNPUlQiLCJnZXRCYXNlNjQiLCJvcmlnaW5GaWxlT2JqIiwicmVqZWN0IiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJvbmxvYWQiLCJvbmVycm9yIiwiY29udmVydENvbm5lY3Rpb25EYXRhIiwiYXJyIiwic2VydmVyRGF0YSIsInBhcnNlIiwiY2xpZW50RGF0YSIsImNoZWNrVXNlckxvZ2luIiwiaXNMb2dnZWRJbiIsInVzZXIiLCJnZXRDdXJyZW50VXNlciIsImlzUGh5c2ljYWxQcm9kdWN0IiwiY2hhdEJveE1lc3NhZ2VDbGFzc05hbWUiLCJyZXEiLCJpc01pbmUiLCJzdGFydHNTZXF1ZW5jZSIsImVuZHNTZXF1ZW5jZSIsIm1pbmUiLCJ0aXAiLCJjb252ZXJ0RmVldFRvQ20iLCJmZWV0IiwiaW5jaCIsImYiLCJmb3JtYXREYXRhV2VpZ2h0IiwibWluIiwibWF4IiwidG9GaXhlZCIsImxhYmVsIiwiZm9ybWF0RGF0YUhlaWdodCIsImEiLCJmb3JtYXRQcmljZSIsInByaWNlIiwiZnJhY3Rpb25EaWdpdHMiLCJnZXRQZXJmb3JtZXJDYXRlZ29yaWVzIiwiZ2V0UGVyZm9ybWVyQ2F0ZWdvcmllc1N1Y2Nlc3MiLCJnZXRQZXJmb3JtZXJDYXRlZ29yaWVzRmFpbCIsInNlYXJjaFBlcmZvcm1lclN1Y2Nlc3MiLCJzZWFyY2hQZXJmb3JtZXJGYWlsIiwic2V0UGVyZm9ybWVyU2VhcmNoaW5nIiwidXBkYXRlUGVyZm9ybWVyUHJvZmlsZSIsInVwZGF0ZVBlcmZvcm1lclByb2ZpbGVTdWNjZXNzIiwidXBkYXRlUGVyZm9ybWVyUHJvZmlsZUZhaWwiLCJzZXR1cGRhdGluZ1BlcmZvcm1lclByb2ZpbGUiLCJ1cGRhdGVQYXltZW50SW5mbyIsInVwZGF0ZURpcmVjdERlcG9zaXQiLCJ1cGRhdGVQYXh1bSIsInVwZGF0ZUJpdHBheSIsInVwZGF0ZVN0cmVhbWluZ1N0YXR1cyIsInVwZGF0ZURlZmF1bHRQcmljZSIsImdldFBlcmZvcm1lckRldGFpbHMiLCJnZXRQZXJmb3JtZXJEZXRhaWxzU3VjY2VzcyIsImdldFBlcmZvcm1lckRldGFpbHNGYWlsIiwic2V0R2V0dGluZ1BlcmZvcm1lckRldGFpbHMiLCJzZXRQZXJmb3JtZXJEZXRhaWxzIiwidXBkYXRlUGVyZm9ybWVyQXNzZXQiLCJzZXRGYXZvcml0ZVBlcmZvcm1lckRldGFpbHMiLCJnZXRNeVByb2R1Y3RzIiwiZ2V0TXlQcm9kdWN0c1N1Y2Nlc3MiLCJnZXRNeVByb2R1Y3RzRmFpbCIsInNldEdldHRpbmdNeVByb2R1Y3RzIiwiYWRkTXlQcm9kdWN0IiwicmVtb3ZlTXlQcm9kdWN0IiwiZ2V0RWFybmluZyIsImdldEVhcm5pbmdTdWNjZXNzIiwiZ2V0RWFybmluZ0ZhaWwiLCJzZXRHZXR0aW5nRWFybmluZyIsImdldFBheW91dFJlcXVlc3QiLCJnZXRQYXlvdXRSZXF1ZXN0U3VjY2VzcyIsImdldFBheW91dFJlcXVlc3RGYWlsIiwic2V0R2V0dGluZ1BheW91dFJlcXVlc3QiLCJyZW1vdmVQYXlvdXRSZXF1ZXN0IiwiZ2V0TXlWaWRlb3MiLCJnZXRNeVZpZGVvc1N1Y2Nlc3MiLCJnZXRNeVZpZGVvc0ZhaWwiLCJzZXRnZXR0aW5nTXlWaWRlb3MiLCJhZGRNeVZpZGVvcyIsInJlbW92ZU15VmlkZW8iLCJnZXRNeVBob3RvcyIsImdldE15UGhvdG9zU3VjY2VzcyIsImdldE15UGhvdG9zRmFpbCIsInNldGdldHRpbmdNeVBob3RvcyIsImFkZE15UGhvdG9zIiwicmVtb3ZlTXlQaG90byIsImdldE15R2FsbGVyaWVzIiwiZ2V0TXlHYWxsZXJpZXNTdWNjZXNzIiwiZ2V0TXlHYWxsZXJpZXNGYWlsIiwic2V0Z2V0dGluZ015R2FsbGVyaWVzIiwiYWRkTXlHYWxsZXJpZXMiLCJyZW1vdmVNeUdhbGxlcmllcyIsInVwZGF0ZUN1cnJlbnRQZXJmb3JtZXIiLCJ1cGRhdGVDdXJyZW50UGVyZm9ybWVyQmFsYW5jZSIsImxvYWRVSVZhbHVlIiwiVE9LRU4iLCJST0xFIiwiUEVSRk9STUVSX1JPTEUiLCJVU0VSX1JPTEUiLCJTVFVESU9fUk9MRSIsImRlc2NlbmQiLCJhc2NlbmQiLCJBUElSZXF1ZXN0Iiwic2V0QXV0aEhlYWRlclRva2VuIiwidG9rZW4iLCJwYXJzZUpTT04iLCJyZXNwb25zZSIsImpzb24iLCJjaGVja1N0YXR1cyIsIkVycm9yIiwiY2xvbmUiLCJyZXF1ZXN0IiwiYm9keSIsInZlcmIiLCJ1cGRhdGVkSGVhZGVyIiwiQXV0aG9yaXphdGlvbiIsImNvb2tpZSIsIkFQSV9FTkRQT0lOVCIsIk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVCIsInRoZW4iLCJidWlsZFVybCIsImJhc2VVcmwiLCJxdWVyeVN0cmluZyIsImsiLCJwb3N0IiwicHV0IiwiZGVsIiwidXBsb2FkIiwiZmlsZXMiLCJvblByb2dyZXNzIiwidXBsb2FkVXJsIiwiWE1MSHR0cFJlcXVlc3QiLCJhZGRFdmVudExpc3RlbmVyIiwibGVuZ3RoQ29tcHV0YWJsZSIsInBlcmNlbnRhZ2UiLCJsb2FkZWQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZmllbGRuYW1lIiwiY3VzdG9tRGF0YSIsInJlc3BvbnNlVHlwZSIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwic2VuZCIsInJlZ2lzdGVyIiwiZG9jdW1lbnRWZXJpZmljYXRpb24iLCJkb2N1bWVudFZlcmlmaWNhdGlvbkZpbGUiLCJpZFZlcmlmaWNhdGlvbiIsImlkVmVyaWZpY2F0aW9uRGlsZSIsIm9taXQiLCJBdXRoU2VydmljZSIsImxvZ2luIiwic2V0QXV0aEhlYWRlciIsInJvbGUiLCJleHBpcmVzIiwicGVyZm9ybWVyTG9naW4iLCJzdHVkaW9Mb2dpbiIsInNldFRva2VuIiwiZ2V0VG9rZW4iLCJnZXRSb2xlIiwicmVtb3ZlVG9rZW4iLCJyZW1vdmUiLCJyZW1vdmVSZW1lbWJlciIsInVwZGF0ZVBhc3N3b3JkIiwicGVyZm9ybWVyc1JlZ2lzdGVyIiwidXNlclJlZ2lzdGVyIiwic3R1ZGlvUmVnaXN0ZXIiLCJmb3Jnb3RQYXNzd29yZCIsInJlc2VuZFZlcmlmaWNhdGlvbkVtYWlsIiwiYXV0aFNlcnZpY2UiLCJCYW5uZXJTZXJ2aWNlIiwiYmFubmVyU2VydmljZSIsImdsb2JhbENvbmZpZyIsInNldEdsb2JhbENvbmZpZyIsIkVhcm5pbmdTZXJ2aWNlIiwiZWFybmluZ1NlcnZpY2UiLCJGYXZvdXJpdGVTZXJ2aWNlIiwibGlrZSIsInVubGlrZSIsImlzRmF2b3JpdGVkIiwiR2FsbGVyeVNlcnZpY2UiLCJpc1BlcmZvcm1lciIsInB1cmNoYXNlZCIsImNyZWF0ZSIsInVwZGF0ZSIsInB1YmxpY2RldGFpbHMiLCJnYWxsZXJ5U2VydmljZSIsIk1lc3NhZ2VTZXJ2aWNlIiwiZ2V0Q29udmVyc2F0aW9ucyIsInNlYXJjaENvbnZlcnNhdGlvbnMiLCJjcmVhdGVDb252ZXJzYXRpb24iLCJnZXRDb252ZXJzYXRpb25EZXRhaWwiLCJnZXRDb252ZXJzYXRpb25CeVN0cmVhbUlkIiwic3RyZWFtSWQiLCJnZXRNZXNzYWdlcyIsImNvbnZlcnNhdGlvbklkIiwiZ2V0UHVibGljTWVzc2FnZXMiLCJzZW5kTWVzc2FnZSIsInNlbmRTdHJlYW1NZXNzYWdlIiwic2VuZFB1YmxpY1N0cmVhbU1lc3NhZ2UiLCJmaW5kUHVibGljQ29udmVyc2F0aW9uUGVyZm9ybWVyIiwicGVyZm9ybWVySWQiLCJjb3VudFRvdGFsTm90UmVhZCIsInJlYWRBbGxJbkNvbnZlcnNhdGlvbiIsInJlY2lwaWVudElkIiwiZ2V0TWVzc2FnZVVwbG9hZFVybCIsImRlbGV0ZU1lc3NhZ2UiLCJkZWxldGVBbGxNZXNzYWdlSW5Db252ZXJzYXRpb24iLCJtZXNzYWdlU2VydmljZSIsIk9yZGVyU2VydmljZSIsInBheWxvYWQiLCJ1c2VyU2VhcmNoIiwidXNlckZpbmREZXRhaWxzIiwib3JkZXJTZXJ2aWNlIiwiUGF5bWVudEluZm9ybWF0aW9uU2VydmljZSIsImZpbmRPbmUiLCJwYXltZW50SW5mb3JtYXRpb25TZXJ2aWNlIiwiUGF5b3V0UmVxdWVzdFNlcnZpY2UiLCJjYWxjdWxhdGUiLCJzdHVkaW9TZWFyY2giLCJkZXRhaWwiLCJwYXlvdXRSZXF1ZXN0U2VydmljZSIsIlBlcmZvcm1lckNhdGVnb3JpZXNTZXJ2aWNlIiwiZ2V0TGlzdCIsIlBlcmZvcm1lclNlcnZpY2UiLCJtZSIsInVwZGF0ZU1lIiwiZ2V0QXZhdGFyVXBsb2FkVXJsIiwiZ2V0RG9jdW1lbnRzVXBsb2FkVXJsIiwiZ2V0UmVsZWFzZUZvcm1VcmwiLCJteVByb2R1Y3QiLCJjcmVhdGVQcm9kdWN0IiwiaW1hZ2UiLCJkaWdpdGFsRmlsZSIsInVwZGF0ZVByb2R1Y3QiLCJyZW1vdmVQcm9kdWN0IiwiZ2V0Q29tbWlzc2lvbiIsInVwZGF0ZURpcmVjdERlcG9zdCIsImdlb0Jsb2NrIiwiZ2V0QmxvY2tlZExpc3QiLCJpbmNyZWFzZVZpZXciLCJ1cGRhdGVCcm9hZGNhc3RTZXR0aW5nIiwic3VzcGVuZEFjY291bnQiLCJwYXNzd29yZCIsImNoZWNrQmxvY2siLCJHRU5OREVSX1BFUkZPUk1FUiIsInBlcmZvcm1lclNlcnZpY2UiLCJQaG90b1NlcnZpY2UiLCJzZWFyY2hCeUdhbGxlcnkiLCJnYWxsZXJ5SWQiLCJteVBob3RvcyIsInVwbG9hZEltYWdlcyIsInBob3RvU2VydmljZSIsIlBvc3RTZXJ2aWNlIiwiZmluZEJ5SWQiLCJjcmVhdGVDb250YWN0Q290ZW50IiwicG9zdFNlcnZpY2UiLCJQcm9kdWN0U2VydmljZSIsImdldERvd25sb2FkTGluayIsInByb2R1Y3RTZXJ2aWNlIiwiUHVyY2hhc2VJdGVtU2VydmljZSIsInB1cmNoYXNlSXRlbSIsInB1cmNoYXNlUHJvZHVjdCIsInB1cmNoYXNlVmlkZW8iLCJwdXJjaGFzZUl0ZW1TZXJ2aWNlIiwiUmVmdW5kUmVxdWVzdFNlcnZpY2UiLCJyZWZ1bmRSZXF1ZXN0U2VydmljZSIsIlNldHRpbmdTZXJ2aWNlIiwiZ3JvdXAiLCJnZXRDb3VudHJpZXMiLCJnZXRUaW1lem9uZXMiLCJzZXR0aW5nU2VydmljZSIsIlN0cmVhbVNlcnZpY2UiLCJnZXRTZXNzaW9uSWQiLCJnb0xpdmUiLCJqb2luUHVibGljQ2hhdCIsInJlcXVlc3RQcml2YXRlQ2hhdCIsImFjY2VwdFByaXZhdGVDaGF0Iiwic3RhcnRHcm91cENoYXQiLCJqb2luR3JvdXBDaGF0IiwiZ2VuZXJhdGVPbmVUaW1lVG9rZW4iLCJnZXRQdWJsaXNoVG9rZW4iLCJleHBpcmVEYXRlIiwiYWRkIiwidG9EYXRlIiwiZ2V0VGltZSIsInNlY3VyZU9wdGlvbiIsInRva2VuSWQiLCJnZXRTdWJzY3JpYmVyVG9rZW4iLCJnZXRMaXZlU3RyZWFtT3JWb2RVUkwiLCJfcGxheWVyIiwiYXBwTmFtZSIsInZpZXdlclVSTCIsImV4dGVuc2lvbiIsIm9uZVRpbWVUb2tlbiIsInN0cmVhbVNlcnZpY2UiLCJTdHVkaW9TZXJ2aWNlIiwiYWRkTW9kZWwiLCJnZXRNZW1iZXJzIiwiZ2V0TWVtYmVyQ29tbWlzc2lvbnMiLCJ1cGRhdGVNZW1iZXJDb21taXNzaW9uIiwiZ2V0UGVyZm9ybWVyUmVxdWVzdCIsInVwZGF0ZVN0YXR1c1BlcmZvcm1lclJlcXVlc3QiLCJ1cGRhdGVNZW1iZXJTdGF0dXMiLCJzdHVkaW9TZXJ2aWNlIiwiVG9rZW5QYWNrYWdlU2VydmljZSIsImJ1eVRva2VucyIsInRva2VuUGFja2FnZVNlcnZpY2UiLCJUcmFuc2FjdGlvblNlcnZpY2UiLCJzZW5kVGlwVG9rZW4iLCJzZW5kUGFpZFRva2VuIiwidHJhbnNhY3Rpb25TZXJ2aWNlIiwiVXNlclNlcnZpY2UiLCJ1c2VySWQiLCJ1c2VyU2VydmljZSIsIlV0aWxzU2VydmljZSIsImNvdW50cmllc0xpc3QiLCJsYW5ndWFnZXNMaXN0IiwicGhvbmVDb2Rlc0xpc3QiLCJzdGF0aXN0aWNzIiwidmVyaWZ5UmVjYXB0Y2hhIiwidXRpbHNTZXJ2aWNlIiwiVmlkZW9TZXJ2aWNlIiwibXlWaWRlb3MiLCJ2aWRlbyIsInRyYWlsZXIiLCJ0aHVtYm5haWwiLCJ1c2VyRmluZFZpZGVvQnlJZCIsInZpZGVvU2VydmljZSIsIkV2ZW50Iiwid2FybmluZyIsIlNvY2tldCIsIm5leHRQcm9wcyIsImNsb3NlIiwidXJpIiwiTkVYVF9QVUJMSUNfU09DS0VUX0VORFBPSU5UIiwidHJhbnNwb3J0cyIsIlNvY2tldElPIiwibWVyZ2VPcHRpb25zIiwiZGVidWciLCJkZWZhdWx0T3B0aW9ucyIsInJlY29ubmVjdGlvbiIsInJlY29ubmVjdGlvbkF0dGVtcHRzIiwiSW5maW5pdHkiLCJyZWNvbm5lY3Rpb25EZWxheSIsInJlY29ubmVjdGlvbkRlbGF5TWF4IiwiYXV0b0Nvbm5lY3QiLCJyZWplY3RVbmF1dGhvcml6ZWQiLCJvbmx5IiwiY3JlYXRlQ29udGV4dCIsIk5PREVfRU5WIiwiYXBwbHkiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtR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Ozs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InBhZ2VzL3BlcmZvcm1lci1jYXRlZ29yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvcGVyZm9ybWVyLWNhdGVnb3J5L2luZGV4LnRzeFwiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhblxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93IH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHAgJiZcbiAgICAgIEludGVyc2VjdGlvbk9ic2VydmVyICYmXG4gICAgICBjaGlsZEVsbSAmJlxuICAgICAgY2hpbGRFbG0udGFnTmFtZSAmJlxuICAgICAgaXNMb2NhbFVSTChocmVmKVxuICAgICkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbClcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoYXMsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcbmltcG9ydCBlc2NhcGVQYXRoRGVsaW1pdGVycyBmcm9tICcuL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMnXG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9IG51bGwgfCB7IF9fTjogZmFsc2UgfSB8ICh7IF9fTjogdHJ1ZSB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pLm1hcChlc2NhcGVQYXRoRGVsaW1pdGVycykuam9pbignLycpXG4gICAgICAgICAgICAgIDogZXNjYXBlUGF0aERlbGltaXRlcnModmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmNvbnN0IFBBR0VfTE9BRF9FUlJPUiA9IFN5bWJvbCgnUEFHRV9MT0FEX0VSUk9SJylcbmV4cG9ydCBmdW5jdGlvbiBtYXJrTG9hZGluZ0Vycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBQQUdFX0xPQURfRVJST1IsIHt9KVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8UHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbywgQXBwOiBBcHBDb21wb25lbnQpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0czogaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGFzID0gYWRkTG9jYWxlKGFzLCB0aGlzLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGNvbnN0IHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5wcm9taXNlZEJ1aWxkTWFuaWZlc3RcblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBsZXQgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpIHtcbiAgICAgIHJlc29sdmVkQXMgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIHBhcnNlUmVsYXRpdmVVcmwoYXMpLnBhdGhuYW1lLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhXG4gICAgICApXG5cbiAgICAgIGlmIChyZXNvbHZlZEFzICE9PSBhcykge1xuICAgICAgICBjb25zdCBwb3RlbnRpYWxIcmVmID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYoXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWQsIHsgcGF0aG5hbWU6IHJlc29sdmVkQXMgfSksXG4gICAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgKS5wYXRobmFtZSFcbiAgICAgICAgKVxuXG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBvdGVudGlhbEhyZWYpKSB7XG4gICAgICAgICAgcm91dGUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGF0aG5hbWUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoXG4gICAgICAgIChfX05fU1NHIHx8IF9fTl9TU1ApICYmXG4gICAgICAgIHByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkSHJlZiwgcGFnZXMpXG5cbiAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShcbiAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgdXJsLFxuICAgICAgICBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpLFxuICAgICAgICBvcHRpb25zXG4gICAgICApXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKS5jYXRjaChcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgJy9fZXJyb3InXG4gICAgICApXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZSxcbiAgICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8UHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSwgYXBwbHlCYXNlUGF0aCA9IHRydWUpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgICApXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYXBwbHlCYXNlUGF0aCA/IGFkZEJhc2VQYXRoKHBhZ2UpIDogcGFnZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YShcbiAgICAgICAgdXJsLFxuICAgICAgICBhc1BhdGgsXG4gICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFByaXZhdGVSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIGVzY2FwZSBkZWxpbWl0ZXJzIHVzZWQgYnkgcGF0aC10by1yZWdleHBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHNlZ21lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzZWdtZW50LnJlcGxhY2UoL1svIz9dL2csIChjaGFyOiBzdHJpbmcpID0+IGVuY29kZVVSSUNvbXBvbmVudChjaGFyKSlcbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTChcbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWYsXG4gICAgb3JpZ2luLFxuICAgIHByb3RvY29sLFxuICB9ID0gbmV3IFVSTCh1cmwsIHJlc29sdmVkQmFzZSlcbiAgaWYgKFxuICAgIG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4gfHxcbiAgICAocHJvdG9jb2wgIT09ICdodHRwOicgJiYgcHJvdG9jb2wgIT09ICdodHRwczonKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKERVTU1ZX0JBU0Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbmV4cG9ydCB7IHBhdGhUb1JlZ2V4cCB9XG5cbmV4cG9ydCBjb25zdCBtYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24obWF0Y2hlclJlZ2V4LCBrZXlzKVxuXG4gICAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyYW1zPzogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXRobmFtZSA9PSBudWxsID8gZmFsc2UgOiBtYXRjaGVyKHBhdGhuYW1lKVxuICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjdXN0b21Sb3V0ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgLy8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuICAgICAgICAgIC8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgIGlmICh0eXBlb2Yga2V5Lm5hbWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBkZWxldGUgKHJlcy5wYXJhbXMgYXMgYW55KVtrZXkubmFtZV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4ucGFyYW1zLCAuLi5yZXMucGFyYW1zIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbnR5cGUgUGFyYW1zID0geyBbcGFyYW06IHN0cmluZ106IGFueSB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmVEZXN0aW5hdGlvbihcbiAgZGVzdGluYXRpb246IHN0cmluZyxcbiAgcGFyYW1zOiBQYXJhbXMsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgYXBwZW5kUGFyYW1zVG9RdWVyeTogYm9vbGVhbixcbiAgYmFzZVBhdGg6IHN0cmluZ1xuKSB7XG4gIGxldCBwYXJzZWREZXN0aW5hdGlvbjoge1xuICAgIHF1ZXJ5PzogUGFyc2VkVXJsUXVlcnlcbiAgICBwcm90b2NvbD86IHN0cmluZ1xuICAgIGhvc3RuYW1lPzogc3RyaW5nXG4gICAgcG9ydD86IHN0cmluZ1xuICB9ICYgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4gPSB7fSBhcyBhbnlcblxuICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9ID0gbmV3IFVSTChkZXN0aW5hdGlvbilcblxuICAgIHBhcnNlZERlc3RpbmF0aW9uID0ge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZXN0UXVlcnkgPSBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeVxuICBjb25zdCBkZXN0UGF0aCA9IGAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIX0ke1xuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggfHwgJydcbiAgfWBcbiAgY29uc3QgZGVzdFBhdGhQYXJhbUtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoZGVzdFBhdGgsIGRlc3RQYXRoUGFyYW1LZXlzKVxuXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1zID0gZGVzdFBhdGhQYXJhbUtleXMubWFwKChrZXkpID0+IGtleS5uYW1lKVxuXG4gIGxldCBkZXN0aW5hdGlvbkNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUoXG4gICAgZGVzdFBhdGgsXG4gICAgLy8gd2UgZG9uJ3QgdmFsaWRhdGUgd2hpbGUgY29tcGlsaW5nIHRoZSBkZXN0aW5hdGlvbiBzaW5jZSB3ZSBzaG91bGRcbiAgICAvLyBoYXZlIGFscmVhZHkgdmFsaWRhdGVkIGJlZm9yZSB3ZSBnb3QgdG8gdGhpcyBwb2ludCBhbmQgdmFsaWRhdGluZ1xuICAgIC8vIGJyZWFrcyBjb21waWxpbmcgZGVzdGluYXRpb25zIHdpdGggbmFtZWQgcGF0dGVybiBwYXJhbXMgZnJvbSB0aGUgc291cmNlXG4gICAgLy8gZS5nLiAvc29tZXRoaW5nOmhlbGxvKC4qKSAtPiAvYW5vdGhlci86aGVsbG8gaXMgYnJva2VuIHdpdGggdmFsaWRhdGlvblxuICAgIC8vIHNpbmNlIGNvbXBpbGUgdmFsaWRhdGlvbiBpcyBtZWFudCBmb3IgcmV2ZXJzaW5nIGFuZCBub3QgZm9yIGluc2VydGluZ1xuICAgIC8vIHBhcmFtcyBmcm9tIGEgc2VwYXJhdGUgcGF0aC1yZWdleCBpbnRvIGFub3RoZXJcbiAgICB7IHZhbGlkYXRlOiBmYWxzZSB9XG4gIClcbiAgbGV0IG5ld1VybFxuXG4gIC8vIHVwZGF0ZSBhbnkgcGFyYW1zIGluIHF1ZXJ5IHZhbHVlc1xuICBmb3IgKGNvbnN0IFtrZXksIHN0ck9yQXJyYXldIG9mIE9iamVjdC5lbnRyaWVzKGRlc3RRdWVyeSkpIHtcbiAgICBsZXQgdmFsdWUgPSBBcnJheS5pc0FycmF5KHN0ck9yQXJyYXkpID8gc3RyT3JBcnJheVswXSA6IHN0ck9yQXJyYXlcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAgICAgLy8gY29ycmVjdGx5XG4gICAgICB2YWx1ZSA9IGAvJHt2YWx1ZX1gXG4gICAgICBjb25zdCBxdWVyeUNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUodmFsdWUsIHsgdmFsaWRhdGU6IGZhbHNlIH0pXG4gICAgICB2YWx1ZSA9IHF1ZXJ5Q29tcGlsZXIocGFyYW1zKS5zdWJzdHIoMSlcbiAgICB9XG4gICAgZGVzdFF1ZXJ5W2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgLy8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuICAvLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxuICBjb25zdCBwYXJhbUtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG5cbiAgaWYgKFxuICAgIGFwcGVuZFBhcmFtc1RvUXVlcnkgJiZcbiAgICAhcGFyYW1LZXlzLnNvbWUoKGtleSkgPT4gZGVzdFBhdGhQYXJhbXMuaW5jbHVkZXMoa2V5KSlcbiAgKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcGFyYW1LZXlzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gZGVzdFF1ZXJ5KSkge1xuICAgICAgICBkZXN0UXVlcnlba2V5XSA9IHBhcmFtc1trZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2hvdWxkQWRkQmFzZVBhdGggPSBkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykgJiYgYmFzZVBhdGhcblxuICB0cnkge1xuICAgIG5ld1VybCA9IGAke3Nob3VsZEFkZEJhc2VQYXRoID8gYmFzZVBhdGggOiAnJ30ke2Rlc3RpbmF0aW9uQ29tcGlsZXIoXG4gICAgICBwYXJhbXNcbiAgICApfWBcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLm1lc3NhZ2UubWF0Y2goL0V4cGVjdGVkIC4qPyB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5LykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRvIHVzZSBhIG11bHRpLW1hdGNoIGluIHRoZSBkZXN0aW5hdGlvbiB5b3UgbXVzdCBhZGQgXFxgKlxcYCBhdCB0aGUgZW5kIG9mIHRoZSBwYXJhbSBuYW1lIHRvIHNpZ25pZnkgaXQgc2hvdWxkIHJlcGVhdC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1tdWx0aS1tYXRjaGBcbiAgICAgIClcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBRdWVyeSBtZXJnZSBvcmRlciBsb3dlc3QgcHJpb3JpdHkgdG8gaGlnaGVzdFxuICAvLyAxLiBpbml0aWFsIFVSTCBxdWVyeSB2YWx1ZXNcbiAgLy8gMi4gcGF0aCBzZWdtZW50IHZhbHVlc1xuICAvLyAzLiBkZXN0aW5hdGlvbiBzcGVjaWZpZWQgcXVlcnkgdmFsdWVzXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0ge1xuICAgIC4uLnF1ZXJ5LFxuICAgIC4uLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5LFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdVcmwsXG4gICAgcGFyc2VkRGVzdGluYXRpb24sXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHBhdGhNYXRjaCBmcm9tICcuL3BhdGgtbWF0Y2gnXG5pbXBvcnQgcHJlcGFyZURlc3RpbmF0aW9uIGZyb20gJy4vcHJlcGFyZS1kZXN0aW5hdGlvbidcbmltcG9ydCB7IFJld3JpdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvbG9hZC1jdXN0b20tcm91dGVzJ1xuaW1wb3J0IHsgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggfSBmcm9tICcuLi8uLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuXG5jb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXIgPSBwYXRoTWF0Y2godHJ1ZSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKFxuICBhc1BhdGg6IHN0cmluZyxcbiAgcGFnZXM6IHN0cmluZ1tdLFxuICBiYXNlUGF0aDogc3RyaW5nLFxuICByZXdyaXRlczogUmV3cml0ZVtdLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIHJlc29sdmVIcmVmOiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmdcbikge1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICBmb3IgKGNvbnN0IHJld3JpdGUgb2YgcmV3cml0ZXMpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXIgPSBjdXN0b21Sb3V0ZU1hdGNoZXIocmV3cml0ZS5zb3VyY2UpXG4gICAgICBjb25zdCBwYXJhbXMgPSBtYXRjaGVyKGFzUGF0aClcblxuICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICBpZiAoIXJld3JpdGUuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIGEgcHJveGllZCByZXdyaXRlIHdoaWNoIGlzbid0IGhhbmRsZWQgb24gdGhlIGNsaWVudFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzdFJlcyA9IHByZXBhcmVEZXN0aW5hdGlvbihcbiAgICAgICAgICByZXdyaXRlLmRlc3RpbmF0aW9uLFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIHJld3JpdGUuYmFzZVBhdGggPT09IGZhbHNlID8gJycgOiBiYXNlUGF0aFxuICAgICAgICApXG4gICAgICAgIGFzUGF0aCA9IGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucXVlcnkpXG5cbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGFzUGF0aCkpKSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihhc1BhdGgpXG5cbiAgICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhc1BhdGhcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBIZWFkRW50cnkgPSBbc3RyaW5nLCB7IFtrZXk6IHN0cmluZ106IGFueSB9XVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgaGVhZDogSGVhZEVudHJ5W11cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICdhbnRkJztcbmltcG9ydCBQYWdlSGVhZGVyIGZyb20gJ0Bjb21wb25lbnRzL2NvbW1vbi9sYXlvdXQvcGFnZS1oZWFkZXInO1xuaW1wb3J0IHsgcGVyZm9ybWVyQ2F0ZWdvcmllcyB9IGZyb20gJ3NyYy9zZXJ2aWNlcy9wZXJmb21lci1jYXRlZ29yaWVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgdXBkYXRlVUlWYWx1ZSB9IGZyb20gJ3NyYy9yZWR1eC91aS9hY3Rpb25zJztcbmltcG9ydCB7XG4gIElQZXJmb3JtZXJDYXRlZ29naWVzLFxuICBJUmVzcG9uc2UsXG4gIElQZXJmb3JtZXIsXG4gIElQZXJmb3JtU2VhcmNoXG59IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgUGVyZm9ybWVyR3JpZCBmcm9tICdAY29tcG9uZW50cy9wZXJmb3JtZXIvcGVyZm9ybWVyLWdyaWQnO1xuaW1wb3J0IHtcbiAgc2VhcmNoUGVyZm9ybWVyLFxuICB1cGRhdGVQZXJmb3JtZXJGYXZvdXJpdGVcbn0gZnJvbSAnQHJlZHV4L3BlcmZvcm1lci9hY3Rpb25zJztcbmltcG9ydCB7IGZhdm91cml0ZVNlcnZpY2UgfSBmcm9tICdzcmMvc2VydmljZXMnO1xuaW1wb3J0IHsgZ2V0UmVzcG9uc2VFcnJvciB9IGZyb20gJ3NyYy9saWInO1xuaW1wb3J0IHsgU29ja2V0Q29udGV4dCB9IGZyb20gJ3NyYy9zb2NrZXQnO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgY2F0ZWdvcnk6IElQZXJmb3JtZXJDYXRlZ29naWVzO1xuICBkYXRhOiBJUGVyZm9ybWVyW107XG4gIHNlYXJjaFBlcmZvcm1lcjogRnVuY3Rpb247XG4gIHRvdGFsOiBudW1iZXI7XG4gIHN1Y2Nlc3M6IGJvb2xlYW47XG4gIHNlYXJjaGluZzogYm9vbGVhbjtcbiAgbG9nZ2VkSW46IGJvb2xlYW47XG4gIGVycm9yOiBhbnk7XG4gIHVwZGF0ZVBlcmZvcm1lckZhdm91cml0ZTogRnVuY3Rpb247XG4gIHBsdXJhbFRleHRNb2RlbDogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlcyB7XG4gIHF1ZXJ5OiBJUGVyZm9ybVNlYXJjaDtcbiAgc29ydD86IHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgc29ydEJ5Pzogc3RyaW5nO1xuICB9O1xufVxuXG5jb25zdCBpbml0UXVlcnlTdGF0ZTogSVBlcmZvcm1TZWFyY2ggPSB7XG4gIG9mZnNldDogMCxcbiAgbGltaXQ6IDYwLFxuICBnZW5kZXI6ICcnLFxuICBjYXRlZ29yeTogJycsXG4gIGNvdW50cnk6ICcnLFxuICBzb3J0Qnk6ICcnLFxuICBzb3J0OiAnZGVzYydcbn07XG5cbmNsYXNzIFBlcmZvcm1lckNhdGVnb3J5UGFnZSBleHRlbmRzIFB1cmVDb21wb25lbnQ8SVByb3BzLCBJU3RhdGVzPiB7XG4gIHN0YXRpYyBhdXRoZW50aWNhdGUgPSBmYWxzZTtcblxuICBzdGF0aWMgbGF5b3V0ID0gJ3B1YmxpYyc7XG5cbiAgcHJpdmF0ZSBzb2NrZXQ7XG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IGN0eCB9KSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChwcm9jZXNzLmJyb3dzZXIgJiYgY3R4LnF1ZXJ5LmNhdGVnb3J5KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY2F0ZWdvcnk6IEpTT04ucGFyc2UoY3R4LnF1ZXJ5LmNhdGVnb3J5KVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAoIWN0eC5xdWVyeS5zbHVnKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzcDogSVJlc3BvbnNlPElQZXJmb3JtZXJDYXRlZ29naWVzPiA9IGF3YWl0IHBlcmZvcm1lckNhdGVnb3JpZXMuZGV0YWlscyhcbiAgICAgICAgY3R4LnF1ZXJ5LnNsdWdcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNhdGVnb3J5OiByZXNwLmRhdGFcbiAgICAgIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcXVlcnk6IGluaXRRdWVyeVN0YXRlXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2VhcmNoKCk7XG4gICAgdGhpcy5zb2NrZXQgPSB0aGlzLmNvbnRleHQ7XG4gICAgdGhpcy5zb2NrZXQub24oJ21vZGVsVXBkYXRlU3RhdHVzJywgdGhpcy5zZWFyY2gpO1xuICAgIHRoaXMuc29ja2V0Lm9uKCdtb2RlbFVwZGF0ZVN0cmVhbWluZ1N0YXR1cycsIHRoaXMuc2VhcmNoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHM6IElQcm9wcykge1xuICAgIGNvbnN0IHsgY2F0ZWdvcnksIGxvZ2dlZEluIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChjYXRlZ29yeSAhPT0gcHJldlByb3BzLmNhdGVnb3J5KSB7XG4gICAgICB0aGlzLnNlYXJjaCgpO1xuICAgIH1cbiAgICBpZiAoIWxvZ2dlZEluICYmIGxvZ2dlZEluICE9PSBwcmV2UHJvcHMubG9nZ2VkSW4pIHtcbiAgICAgIHRoaXMuc2VhcmNoKCk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5zb2NrZXQgPSB0aGlzLmNvbnRleHQ7XG4gICAgaWYgKHRoaXMuc29ja2V0KSB7XG4gICAgICB0aGlzLnNvY2tldC5vZmYoJ21vZGVsVXBkYXRlU3RhdHVzJyk7XG4gICAgICB0aGlzLnNvY2tldC5vZmYoJ21vZGVsVXBkYXRlU3RyZWFtaW5nU3RhdHVzJyk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgb25MaWtlKHBlcmZvcm1lcjogSVBlcmZvcm1lcikge1xuICAgIGNvbnN0IHsgX2lkLCBpc0Zhdm9yaXRlIH0gPSBwZXJmb3JtZXI7XG4gICAgY29uc3QgeyB1cGRhdGVQZXJmb3JtZXJGYXZvdXJpdGU6IGRpc3BhdGNoVXBkYXRlUGVyZm9ybWVyRmF2b3VyaXRlIH0gPSB0aGlzLnByb3BzO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBmYXZvdXJpdGVTZXJ2aWNlLmZhdm9yaXRlKF9pZCwgaXNGYXZvcml0ZSk7XG4gICAgICBkaXNwYXRjaFVwZGF0ZVBlcmZvcm1lckZhdm91cml0ZShfaWQpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zdCBlID0gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGVycm9yKTtcbiAgICAgIG1lc3NhZ2UuZXJyb3IoZ2V0UmVzcG9uc2VFcnJvcihlKSk7XG4gICAgfVxuICB9XG5cbiAgc2V0RmlsdGVyKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgIGNvbnN0IHsgcXVlcnkgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBxdWVyeToge1xuICAgICAgICAuLi5xdWVyeSxcbiAgICAgICAgW25hbWVdOiB2YWx1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2VhcmNoID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgc2VhcmNoUGVyZm9ybWVyOiBkaXNwYXRjaFNlYXJjaFBlcmZvcm1lciwgY2F0ZWdvcnkgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBxdWVyeSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBkaXNwYXRjaFNlYXJjaFBlcmZvcm1lcih7XG4gICAgICAuLi5xdWVyeSxcbiAgICAgIGNhdGVnb3J5OiBjYXRlZ29yeSA/IGNhdGVnb3J5Ll9pZCA6ICcnXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjYXRlZ29yeSwgcGx1cmFsVGV4dE1vZGVsIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgcXVlcnkgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPlxuICAgICAgICAgICAge2NhdGVnb3J5ID8gYENhdGVnb3J5IC0gJHtjYXRlZ29yeS5uYW1lfWAgOiBgQWxsICR7cGx1cmFsVGV4dE1vZGVsIHx8ICdQZXJmb3JtZXJzJ31gfVxuICAgICAgICAgIDwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPFBhZ2VIZWFkZXIgdGl0bGU9e2NhdGVnb3J5ID8gY2F0ZWdvcnkubmFtZSA6IGBBbGwgJHtwbHVyYWxUZXh0TW9kZWwgfHwgJ1BlcmZvcm1lcnMnfWB9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgPFBlcmZvcm1lckdyaWRcbiAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgey4uLnF1ZXJ5fVxuICAgICAgICAgICAgaXNQYWdlXG4gICAgICAgICAgICBzZXRGaWx0ZXI9e3RoaXMuc2V0RmlsdGVyLmJpbmQodGhpcyl9XG4gICAgICAgICAgICBvbkxpa2U9e3RoaXMub25MaWtlLmJpbmQodGhpcyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG5cblBlcmZvcm1lckNhdGVnb3J5UGFnZS5jb250ZXh0VHlwZSA9IFNvY2tldENvbnRleHQ7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgbG9nZ2VkSW46IHN0YXRlLmF1dGgubG9nZ2VkSW4sXG4gIC4uLnN0YXRlLnBlcmZvcm1lci5wZXJmb3JtZXJzLFxuICAuLi5zdGF0ZS51aVxufSk7XG5jb25zdCBtYXBEaXNwYXRjaCA9IHsgc2VhcmNoUGVyZm9ybWVyLCB1cGRhdGVQZXJmb3JtZXJGYXZvdXJpdGUsIHVwZGF0ZVVJVmFsdWUgfTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoKShQZXJmb3JtZXJDYXRlZ29yeVBhZ2UpO1xuIiwiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYWx0LXRleHQgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3JlcXVpcmUtZGVmYXVsdC1wcm9wcyAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tdW51c2VkLXByb3AtdHlwZXMgKi9cbmltcG9ydCBSZWFjdCwgeyBDU1NQcm9wZXJ0aWVzIH0gZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgSUljb25zIHtcbiAgd2lkdGg/OiBudW1iZXI7XG4gIGhlaWdodD86IG51bWJlcjtcbiAgY29sb3I/OiBzdHJpbmc7XG4gIHN0eWxlPzogQ1NTUHJvcGVydGllcztcbn1cblxuZXhwb3J0IGNvbnN0IEZhY2Vib29rSWNvbiA9ICh7IHN0eWxlIH06IElJY29ucykgPT4gKFxuICA8aW1nIHNyYz1cIi9pY29ucy9mYWNlYm9vay5zdmdcIiBzdHlsZT17c3R5bGV9IC8+XG4pO1xuXG5leHBvcnQgY29uc3QgVHdpdHRlckljb24gPSAoeyBzdHlsZSB9OiBJSWNvbnMpID0+IChcbiAgPGltZyBzcmM9XCIvaWNvbnMvdHdpdHRlci5zdmdcIiBzdHlsZT17c3R5bGV9IC8+XG4pO1xuXG5leHBvcnQgY29uc3QgSW5zdGFncmFtSWNvbiA9ICh7IHN0eWxlIH06IElJY29ucykgPT4gKFxuICA8aW1nIHNyYz1cIi9pY29ucy9pbnN0YWdyYW0uc3ZnXCIgc3R5bGU9e3N0eWxlfSAvPlxuKTtcblxuZXhwb3J0IGNvbnN0IEdpZnRJY29uID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImFudGljb25cIj5cbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjE3XCJcbiAgICAgIGhlaWdodD1cIjE2XCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMTcgMTZcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xNC42MDAxIDQuODQzNzVIMTIuMjkzOEMxMi41MDYzIDQuNTA5MzggMTIuNjMxMyA0LjExMjUgMTIuNjMxMyAzLjY4NzVDMTIuNjMxMyAyLjQ5ODQ0IDExLjY2NDIgMS41MzEyNSAxMC40NzUxIDEuNTMxMjVDOS44MjgyMiAxLjUzMTI1IDkuMjQ1NDEgMS44MTg3NSA4Ljg1MDEgMi4yNzE4N0M4LjQ1NDc5IDEuODE4NzUgNy44NzE5NyAxLjUzMTI1IDcuMjI1MSAxLjUzMTI1QzYuMDM2MDQgMS41MzEyNSA1LjA2ODg1IDIuNDk4NDQgNS4wNjg4NSAzLjY4NzVDNS4wNjg4NSA0LjExMjUgNS4xOTIyOSA0LjUwOTM4IDUuNDA2MzUgNC44NDM3NUgzLjEwMDFDMi44MjM1NCA0Ljg0Mzc1IDIuNjAwMSA1LjA2NzE5IDIuNjAwMSA1LjM0Mzc1VjguNDY4NzVDMi42MDAxIDguNTM3NSAyLjY1NjM1IDguNTkzNzUgMi43MjUxIDguNTkzNzVIMy4zNTAxVjEzLjk2ODhDMy4zNTAxIDE0LjI0NTMgMy41NzM1NCAxNC40Njg4IDMuODUwMSAxNC40Njg4SDEzLjg1MDFDMTQuMTI2NyAxNC40Njg4IDE0LjM1MDEgMTQuMjQ1MyAxNC4zNTAxIDEzLjk2ODhWOC41OTM3NUgxNC45NzUxQzE1LjA0MzggOC41OTM3NSAxNS4xMDAxIDguNTM3NSAxNS4xMDAxIDguNDY4NzVWNS4zNDM3NUMxNS4xMDAxIDUuMDY3MTkgMTQuODc2NyA0Ljg0Mzc1IDE0LjYwMDEgNC44NDM3NVpNOS4zODEzNSAzLjY4NzVDOS4zODEzNSAzLjA4NDM4IDkuODcxOTcgMi41OTM3NSAxMC40NzUxIDIuNTkzNzVDMTEuMDc4MiAyLjU5Mzc1IDExLjU2ODggMy4wODQzOCAxMS41Njg4IDMuNjg3NUMxMS41Njg4IDQuMjkwNjIgMTEuMDc4MiA0Ljc4MTI1IDEwLjQ3NTEgNC43ODEyNUg5LjM4MTM1VjMuNjg3NVpNNy4yMjUxIDIuNTkzNzVDNy44MjgyMiAyLjU5Mzc1IDguMzE4ODUgMy4wODQzOCA4LjMxODg1IDMuNjg3NVY0Ljc4MTI1SDcuMjI1MUM2LjYyMTk3IDQuNzgxMjUgNi4xMzEzNSA0LjI5MDYyIDYuMTMxMzUgMy42ODc1QzYuMTMxMzUgMy4wODQzOCA2LjYyMTk3IDIuNTkzNzUgNy4yMjUxIDIuNTkzNzVaTTMuNjYyNiA3LjUzMTI1VjUuOTA2MjVIOC4zMTg4NVY3LjUzMTI1SDMuNjYyNlpNNC40MTI2IDguNTkzNzVIOC4zMTg4NVYxMy40MDYySDQuNDEyNlY4LjU5Mzc1Wk0xMy4yODc2IDEzLjQwNjJIOS4zODEzNVY4LjU5Mzc1SDEzLjI4NzZWMTMuNDA2MlpNMTQuMDM3NiA3LjUzMTI1SDkuMzgxMzVWNS45MDYyNUgxNC4wMzc2VjcuNTMxMjVaXCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBjb25zdCBNZXNzYWdlSWNvbiA9ICh7IHdpZHRoLCBoZWlnaHQsIGNvbG9yIH06IElJY29ucykgPT4gKFxuICA8c3ZnXG4gICAgd2lkdGg9e3dpZHRoIHx8ICcxZW0nfVxuICAgIGhlaWdodD17aGVpZ2h0IHx8ICcxZW0nfVxuICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgIGZpbGw9XCJub25lXCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgPlxuICAgIDxwYXRoXG4gICAgICBkPVwiTTIxLjc1IDMuNzVIMi4yNUMxLjgzNTE2IDMuNzUgMS41IDQuMDg1MTYgMS41IDQuNVYxOS41QzEuNSAxOS45MTQ4IDEuODM1MTYgMjAuMjUgMi4yNSAyMC4yNUgyMS43NUMyMi4xNjQ4IDIwLjI1IDIyLjUgMTkuOTE0OCAyMi41IDE5LjVWNC41QzIyLjUgNC4wODUxNiAyMi4xNjQ4IDMuNzUgMjEuNzUgMy43NVpNMjAuODEyNSA2LjM0Njg3VjE4LjU2MjVIMy4xODc1VjYuMzQ2ODdMMi41NDA2MyA1Ljg0Mjk3TDMuNDYxNzIgNC42NTkzOEw0LjQ2NDg0IDUuNDM5ODRIMTkuNTM3NUwyMC41NDA2IDQuNjU5MzhMMjEuNDYxNyA1Ljg0Mjk3TDIwLjgxMjUgNi4zNDY4N1pNMTkuNTM3NSA1LjQzNzVMMTIgMTEuMjk2OUw0LjQ2MjUgNS40Mzc1TDMuNDU5MzggNC42NTcwM0wyLjUzODI4IDUuODQwNjJMMy4xODUxNiA2LjM0NDUzTDExLjE5MTQgMTIuNTY5NUMxMS40MjE3IDEyLjc0ODQgMTEuNzA0OSAxMi44NDU1IDExLjk5NjUgMTIuODQ1NUMxMi4yODgxIDEyLjg0NTUgMTIuNTcxMyAxMi43NDg0IDEyLjgwMTYgMTIuNTY5NUwyMC44MTI1IDYuMzQ2ODdMMjEuNDU5NCA1Ljg0Mjk3TDIwLjUzODMgNC42NTkzOEwxOS41Mzc1IDUuNDM3NVpcIlxuICAgICAgZmlsbD17Y29sb3J9XG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgRmF2b3VyaXRlSWNvbiA9ICh7IHdpZHRoLCBoZWlnaHQsIGNvbG9yIH06IElJY29ucykgPT4gKFxuICA8c3ZnXG4gICAgd2lkdGg9e3dpZHRoIHx8ICcxZW0nfVxuICAgIGhlaWdodD17aGVpZ2h0IHx8ICcxZW0nfVxuICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxuICAgIGZpbGw9XCJub25lXCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgPlxuICAgIDxwYXRoXG4gICAgICBkPVwiTTE0LjE4NTUgNC40NTkxNkMxMy45ODM4IDMuOTc3OTMgMTMuNjkyOSAzLjU0MTg1IDEzLjMyOTIgMy4xNzUzMkMxMi45NjUzIDIuODA3NjkgMTIuNTM2MiAyLjUxNTU1IDEyLjA2NTIgMi4zMTQ3N0MxMS41NzY5IDIuMTA1NzUgMTEuMDUzMSAxLjk5ODc2IDEwLjUyNDMgMi4wMDAwMUM5Ljc4MjQzIDIuMDAwMDEgOS4wNTg2MiAyLjIwOTMzIDguNDI5NjEgMi42MDQ3MkM4LjI3OTEzIDIuNjk5MyA4LjEzNjE4IDIuODAzMTkgOC4wMDA3NCAyLjkxNjM4QzcuODY1MzEgMi44MDMxOSA3LjcyMjM2IDIuNjk5MyA3LjU3MTg4IDIuNjA0NzJDNi45NDI4NyAyLjIwOTMzIDYuMjE5MDYgMi4wMDAwMSA1LjQ3NzE5IDIuMDAwMDFDNC45NDI5OSAyLjAwMDAxIDQuNDI1MzMgMi4xMDU0NSAzLjkzNjI3IDIuMzE0NzdDMy40NjM3NyAyLjUxNjM0IDMuMDM3OTEgMi44MDYyOSAyLjY3MjI0IDMuMTc1MzJDMi4zMDgwNyAzLjU0MTQzIDIuMDE3MTcgMy45Nzc2MiAxLjgxNjAxIDQuNDU5MTZDMS42MDY4NCA0Ljk1OTk4IDEuNSA1LjQ5MTgyIDEuNSA2LjAzOTE2QzEuNSA2LjU1NTQ5IDEuNjAyMzMgNy4wOTM1MiAxLjgwNTQ3IDcuNjQwODZDMS45NzU1MiA4LjA5ODI3IDIuMjE5MyA4LjU3MjczIDIuNTMwNzkgOS4wNTE4NUMzLjAyNDM2IDkuODEwMDYgMy43MDMwMyAxMC42MDA4IDQuNTQ1NzIgMTEuNDAyNUM1Ljk0MjE4IDEyLjczMTMgNy4zMjUwOSAxMy42NDkyIDcuMzgzNzggMTMuNjg2NEw3Ljc0MDQxIDEzLjkyMjFDNy44OTg0MiAxNC4wMjYgOC4xMDE1NyAxNC4wMjYgOC4yNTk1NyAxMy45MjIxTDguNjE2MjEgMTMuNjg2NEM4LjY3NDkgMTMuNjQ3NiAxMC4wNTYzIDEyLjczMTMgMTEuNDU0MyAxMS40MDI1QzEyLjI5NyAxMC42MDA4IDEyLjk3NTYgOS44MTAwNiAxMy40NjkyIDkuMDUxODVDMTMuNzgwNyA4LjU3MjczIDE0LjAyNiA4LjA5ODI3IDE0LjE5NDUgNy42NDA4NkMxNC4zOTc3IDcuMDkzNTIgMTQuNSA2LjU1NTQ5IDE0LjUgNi4wMzkxNkMxNC41MDE1IDUuNDkxODIgMTQuMzk0NiA0Ljk1OTk4IDE0LjE4NTUgNC40NTkxNlY0LjQ1OTE2Wk04LjAwMDc0IDEyLjY5NTZDOC4wMDA3NCAxMi42OTU2IDIuNjQzNjUgOS4xNTg4NCAyLjY0MzY1IDYuMDM5MTZDMi42NDM2NSA0LjQ1OTE2IDMuOTEyMiAzLjE3ODQyIDUuNDc3MTkgMy4xNzg0MkM2LjU3NzIgMy4xNzg0MiA3LjUzMTI1IDMuODExMDQgOC4wMDA3NCA0LjczNTE2QzguNDcwMjQgMy44MTEwNCA5LjQyNDI5IDMuMTc4NDIgMTAuNTI0MyAzLjE3ODQyQzEyLjA4OTMgMy4xNzg0MiAxMy4zNTc4IDQuNDU5MTYgMTMuMzU3OCA2LjAzOTE2QzEzLjM1NzggOS4xNTg4NCA4LjAwMDc0IDEyLjY5NTYgOC4wMDA3NCAxMi42OTU2WlwiXG4gICAgICBmaWxsPXtjb2xvcn1cbiAgICAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBTZW5kTWVzc2FnZUljb24gPSAoeyB3aWR0aCwgaGVpZ2h0IH06IElJY29ucykgPT4gKFxuICA8c3ZnXG4gICAgd2lkdGg9e3dpZHRoIHx8ICcxZW0nfVxuICAgIGhlaWdodD17aGVpZ2h0IHx8ICcxZW0nfVxuICAgIHZpZXdCb3g9XCIwIDAgMzAgMzBcIlxuICAgIGZpbGw9XCJub25lXCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgPlxuICAgIDxwYXRoXG4gICAgICBkPVwiTTI2Ljc1NTIgMTQuNjM2N0wzLjY0MDE4IDMuMDQ2MDhDMy41NDYyMyAyLjk5OTEgMy40Mzg0NiAyLjk4ODA0IDMuMzM2MjIgMy4wMTI5MUMzLjEwMTM0IDMuMDcwOTUgMi45NTQ4OCAzLjMwODYyIDMuMDEyOTEgMy41NDYyOUw1LjM5NDg4IDEzLjI3OTdDNS40MzA4IDEzLjQyNjIgNS41Mzg1NyAxMy41NDUxIDUuNjgyMjYgMTMuNTkyTDkuNzYzNjUgMTQuOTkzMkw1LjY4NTAyIDE2LjM5NDNDNS41NDEzMyAxNi40NDQxIDUuNDMzNTYgMTYuNTYwMiA1LjQwMDQgMTYuNzA2NkwzLjAxMjkxIDI2LjQ1MzlDMi45ODgwNCAyNi41NTYyIDIuOTk5MSAyNi42NjM5IDMuMDQ2MDcgMjYuNzU1MUMzLjE1Mzg0IDI2Ljk3MzUgMy40MTkxMiAyNy4wNjE5IDMuNjQwMTggMjYuOTU0MUwyNi43NTUyIDE1LjQyOThDMjYuODQwOCAxNS4zODg0IDI2LjkwOTkgMTUuMzE2NSAyNi45NTQxIDE1LjIzMzZDMjcuMDYxOSAxNS4wMTI1IDI2Ljk3MzUgMTQuNzQ3MiAyNi43NTUyIDE0LjYzNjdaTTUuNzM3NTIgMjMuNjg0OEw3LjEyNzQ2IDE4LjAwMjhMMTUuMjg0NyAxNS4yMDMyQzE1LjM0ODMgMTUuMTgxMSAxNS40MDA4IDE1LjEzMTQgMTUuNDIyOSAxNS4wNjVDMTUuNDYxNiAxNC45NDkgMTUuNDAwOCAxNC44MjQ2IDE1LjI4NDcgMTQuNzgzMkw3LjEyNzQ2IDExLjk4NjRMNS43NDMwNSA2LjMyNjQ5TDIzLjA5NjYgMTUuMDI5MUw1LjczNzUyIDIzLjY4NDhaXCJcbiAgICAgIGZpbGw9XCIjRkYwMDY2XCJcbiAgICAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBGdW5kc0ljb24gPSAoeyB3aWR0aCwgaGVpZ2h0IH06IElJY29ucykgPT4gKFxuICA8c3ZnXG4gICAgd2lkdGg9e3dpZHRoIHx8ICcxZW0nfVxuICAgIGhlaWdodD17aGVpZ2h0IHx8ICcxZW0nfVxuICAgIHZpZXdCb3g9XCIwIDAgMjUgMjRcIlxuICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICA+XG4gICAgPHBhdGggZD1cIk05Ljg1MDEgMTBDOS41ODQ4OCAxMCA5LjMzMDUzIDEwLjEwNTQgOS4xNDI5OSAxMC4yOTI5QzguOTU1NDUgMTAuNDgwNCA4Ljg1MDEgMTAuNzM0OCA4Ljg1MDEgMTFWMTNDOC44NTAxIDEzLjI2NTIgOC45NTU0NSAxMy41MTk2IDkuMTQyOTkgMTMuNzA3MUM5LjMzMDUzIDEzLjg5NDYgOS41ODQ4OCAxNCA5Ljg1MDEgMTRDMTAuMTE1MyAxNCAxMC4zNjk3IDEzLjg5NDYgMTAuNTU3MiAxMy43MDcxQzEwLjc0NDcgMTMuNTE5NiAxMC44NTAxIDEzLjI2NTIgMTAuODUwMSAxM1YxMUMxMC44NTAxIDEwLjczNDggMTAuNzQ0NyAxMC40ODA0IDEwLjU1NzIgMTAuMjkyOUMxMC4zNjk3IDEwLjEwNTQgMTAuMTE1MyAxMCA5Ljg1MDEgMTBaTTIxLjg1MDEgMTFDMjIuMTE1MyAxMSAyMi4zNjk3IDEwLjg5NDYgMjIuNTU3MiAxMC43MDcxQzIyLjc0NDcgMTAuNTE5NiAyMi44NTAxIDEwLjI2NTIgMjIuODUwMSAxMFY2QzIyLjg1MDEgNS43MzQ3OCAyMi43NDQ3IDUuNDgwNDMgMjIuNTU3MiA1LjI5Mjg5QzIyLjM2OTcgNS4xMDUzNiAyMi4xMTUzIDUgMjEuODUwMSA1SDMuODUwMUMzLjU4NDg4IDUgMy4zMzA1MyA1LjEwNTM2IDMuMTQyOTkgNS4yOTI4OUMyLjk1NTQ1IDUuNDgwNDMgMi44NTAxIDUuNzM0NzggMi44NTAxIDZWMTBDMi44NTAxIDEwLjI2NTIgMi45NTU0NSAxMC41MTk2IDMuMTQyOTkgMTAuNzA3MUMzLjMzMDUzIDEwLjg5NDYgMy41ODQ4OCAxMSAzLjg1MDEgMTFDNC4xMTUzMSAxMSA0LjM2OTY3IDExLjEwNTQgNC41NTcyIDExLjI5MjlDNC43NDQ3NCAxMS40ODA0IDQuODUwMSAxMS43MzQ4IDQuODUwMSAxMkM0Ljg1MDEgMTIuMjY1MiA0Ljc0NDc0IDEyLjUxOTYgNC41NTcyIDEyLjcwNzFDNC4zNjk2NyAxMi44OTQ2IDQuMTE1MzEgMTMgMy44NTAxIDEzQzMuNTg0ODggMTMgMy4zMzA1MyAxMy4xMDU0IDMuMTQyOTkgMTMuMjkyOUMyLjk1NTQ1IDEzLjQ4MDQgMi44NTAxIDEzLjczNDggMi44NTAxIDE0VjE4QzIuODUwMSAxOC4yNjUyIDIuOTU1NDUgMTguNTE5NiAzLjE0Mjk5IDE4LjcwNzFDMy4zMzA1MyAxOC44OTQ2IDMuNTg0ODggMTkgMy44NTAxIDE5SDIxLjg1MDFDMjIuMTE1MyAxOSAyMi4zNjk3IDE4Ljg5NDYgMjIuNTU3MiAxOC43MDcxQzIyLjc0NDcgMTguNTE5NiAyMi44NTAxIDE4LjI2NTIgMjIuODUwMSAxOFYxNEMyMi44NTAxIDEzLjczNDggMjIuNzQ0NyAxMy40ODA0IDIyLjU1NzIgMTMuMjkyOUMyMi4zNjk3IDEzLjEwNTQgMjIuMTE1MyAxMyAyMS44NTAxIDEzQzIxLjU4NDkgMTMgMjEuMzMwNSAxMi44OTQ2IDIxLjE0MyAxMi43MDcxQzIwLjk1NTUgMTIuNTE5NiAyMC44NTAxIDEyLjI2NTIgMjAuODUwMSAxMkMyMC44NTAxIDExLjczNDggMjAuOTU1NSAxMS40ODA0IDIxLjE0MyAxMS4yOTI5QzIxLjMzMDUgMTEuMTA1NCAyMS41ODQ5IDExIDIxLjg1MDEgMTFaTTIwLjg1MDEgOS4xOEMyMC4yNzA5IDkuMzkwMiAxOS43NzA2IDkuNzczNjMgMTkuNDE2OSAxMC4yNzgyQzE5LjA2MzMgMTAuNzgyNyAxOC44NzM2IDExLjM4MzkgMTguODczNiAxMkMxOC44NzM2IDEyLjYxNjEgMTkuMDYzMyAxMy4yMTczIDE5LjQxNjkgMTMuNzIxOEMxOS43NzA2IDE0LjIyNjQgMjAuMjcwOSAxNC42MDk4IDIwLjg1MDEgMTQuODJWMTdIMTAuODUwMUMxMC44NTAxIDE2LjczNDggMTAuNzQ0NyAxNi40ODA0IDEwLjU1NzIgMTYuMjkyOUMxMC4zNjk3IDE2LjEwNTQgMTAuMTE1MyAxNiA5Ljg1MDEgMTZDOS41ODQ4OCAxNiA5LjMzMDUzIDE2LjEwNTQgOS4xNDI5OSAxNi4yOTI5QzguOTU1NDUgMTYuNDgwNCA4Ljg1MDEgMTYuNzM0OCA4Ljg1MDEgMTdINC44NTAxVjE0LjgyQzUuNDI5MjUgMTQuNjA5OCA1LjkyOTY0IDE0LjIyNjQgNi4yODMyNiAxMy43MjE4QzYuNjM2ODcgMTMuMjE3MyA2LjgyNjU3IDEyLjYxNjEgNi44MjY1NyAxMkM2LjgyNjU3IDExLjM4MzkgNi42MzY4NyAxMC43ODI3IDYuMjgzMjYgMTAuMjc4MkM1LjkyOTY0IDkuNzczNjMgNS40MjkyNSA5LjM5MDIgNC44NTAxIDkuMThWN0g4Ljg1MDFDOC44NTAxIDcuMjY1MjIgOC45NTU0NSA3LjUxOTU3IDkuMTQyOTkgNy43MDcxMUM5LjMzMDUzIDcuODk0NjQgOS41ODQ4OCA4IDkuODUwMSA4QzEwLjExNTMgOCAxMC4zNjk3IDcuODk0NjQgMTAuNTU3MiA3LjcwNzExQzEwLjc0NDcgNy41MTk1NyAxMC44NTAxIDcuMjY1MjIgMTAuODUwMSA3SDIwLjg1MDFWOS4xOFpcIiAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBQYXltZW50VG9rZW5zSGlzdG9yeUljb24gPSAoeyB3aWR0aCwgaGVpZ2h0IH06IElJY29ucykgPT4gKFxuICA8c3ZnXG4gICAgd2lkdGg9e3dpZHRoIHx8ICcxZW0nfVxuICAgIGhlaWdodD17aGVpZ2h0IHx8ICcxZW0nfVxuICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICA+XG4gICAgPHBhdGggZD1cIk0xOS45NTggNC4wNDIwMUMxOC45MTU3IDIuOTk2ODQgMTcuNjc3MiAyLjE2Nzk2IDE2LjMxMzUgMS42MDNDMTQuOTQ5OSAxLjAzODA1IDEzLjQ4OCAwLjc0ODE2NiAxMi4wMTIgMC43NTAwMDlDOC45Mzc5NyAwLjc1MDAwOSA2LjE1MTk3IDEuOTg0MDEgNC4xMjI5NyAzLjk4NTAxTDQuMTIzOTcgMy45ODQwMVYwLjc1MTAwOUgyLjYyMzk3VjYuNzUxMDFIOC42MjM5N1Y1LjI1MTAxSDQuOTgwOTdDNS44ODkyNCA0LjMwMjE1IDYuOTgwMzMgMy41NDcxMyA4LjE4ODQgMy4wMzE1M0M5LjM5NjQ2IDIuNTE1OTIgMTAuNjk2NSAyLjI1MDQgMTIuMDEgMi4yNTEwMUMxNy4zOCAyLjI1MTAxIDIxLjc0OCA2LjYyMDAxIDIxLjc0OCAxMS45ODlDMjEuNzQ4IDE3LjM1OCAxNy4zNzkgMjEuNzI3IDEyLjAxIDIxLjcyN0M2LjY0MDk3IDIxLjcyNyAyLjI3MTk3IDE3LjM1OCAyLjI3MTk3IDExLjk4OUgwLjc3MTk3M0MwLjc3MTk3MyAxOC4xOTYgNS44MDM5NyAyMy4yMjcgMTIuMDEgMjMuMjI3QzE1LjExMyAyMy4yMjcgMTcuOTIzIDIxLjk2OSAxOS45NTcgMTkuOTM1QzIxLjk5MSAxNy45MDEgMjMuMjQ5IDE1LjA5MiAyMy4yNDkgMTEuOTg4QzIzLjI0OSA4Ljg4NDAxIDIxLjk5MSA2LjA3NTAxIDE5Ljk1NyA0LjA0MTAxTDE5Ljk1OCA0LjA0MjAxWlwiIC8+XG4gICAgPHBhdGggZD1cIk0xNi4xMjUgNy41SDYuMzc1VjE1SDE2LjEyNVY3LjVaTTE1LjM3NSAxNC4yNUg3LjEyNVY4LjI1SDE1LjM3NVYxNC4yNVpcIiAvPlxuICAgIDxwYXRoIGQ9XCJNMTYuODc1IDkuMzc1VjE1Ljc1SDguMjVWMTYuNUgxNy42MjVWOS4zNzVIMTYuODc1WlwiIGZpbGw9XCJibGFja1wiIC8+XG4gICAgPHBhdGggZD1cIk0xMS4yNSAxMy4wODlDMTIuMTgwNSAxMy4wODkgMTIuOTM3NSAxMi4yNjU1IDEyLjkzNzUgMTEuMjUzQzEyLjkzNzUgMTAuMjQwNSAxMi4xODA1IDkuNDE2OTkgMTEuMjUgOS40MTY5OUMxMC4zMTk1IDkuNDE2OTkgOS41NjI1IDEwLjI0MDUgOS41NjI1IDExLjI1M0M5LjU2MjUgMTIuMjY1NSAxMC4zMTk1IDEzLjA4OSAxMS4yNSAxMy4wODlaTTExLjI1IDEwLjE2NzVDMTEuNzY3IDEwLjE2NzUgMTIuMTg3NSAxMC42NTQ1IDEyLjE4NzUgMTEuMjUzNUMxMi4xODc1IDExLjg1MjUgMTEuNzY3IDEyLjMzOTUgMTEuMjUgMTIuMzM5NUMxMC43MzMgMTIuMzM5NSAxMC4zMTI1IDExLjg1MjUgMTAuMzEyNSAxMS4yNTM1QzEwLjMxMjUgMTAuNjU0NSAxMC43MzMgMTAuMTY3NSAxMS4yNSAxMC4xNjc1WlwiIC8+XG4gICAgPHBhdGggZD1cIk03Ljg3NSA5LjE4NzVIOC42MjVWMTMuMzEyNUg3Ljg3NVY5LjE4NzVaXCIgZmlsbD1cImJsYWNrXCIgLz5cbiAgICA8cGF0aCBkPVwiTTEzLjg3NSA5LjE4NzVIMTQuNjI1VjEzLjMxMjVIMTMuODc1VjkuMTg3NVpcIiBmaWxsPVwiYmxhY2tcIiAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBUcmFuc2FjdGlvbkhpc3RvcnlJY29uID0gKHsgd2lkdGgsIGhlaWdodCB9OiBJSWNvbnMpID0+IChcbiAgPHN2Z1xuICAgIHdpZHRoPXt3aWR0aCB8fCAnMWVtJ31cbiAgICBoZWlnaHQ9e2hlaWdodCB8fCAnMWVtJ31cbiAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgPlxuICAgIDxwYXRoIGQ9XCJNMTkuOTU4IDQuMDQyMDFDMTguOTE1NyAyLjk5Njg0IDE3LjY3NzIgMi4xNjc5NiAxNi4zMTM1IDEuNjAzQzE0Ljk0OTkgMS4wMzgwNSAxMy40ODggMC43NDgxNjYgMTIuMDEyIDAuNzUwMDA5QzguOTM3OTcgMC43NTAwMDkgNi4xNTE5NyAxLjk4NDAxIDQuMTIyOTcgMy45ODUwMUw0LjEyMzk3IDMuOTg0MDFWMC43NTEwMDlIMi42MjM5N1Y2Ljc1MTAxSDguNjIzOTdWNS4yNTEwMUg0Ljk4MDk3QzUuODg5MjQgNC4zMDIxNSA2Ljk4MDMzIDMuNTQ3MTMgOC4xODg0IDMuMDMxNTNDOS4zOTY0NiAyLjUxNTkyIDEwLjY5NjUgMi4yNTA0IDEyLjAxIDIuMjUxMDFDMTcuMzggMi4yNTEwMSAyMS43NDggNi42MjAwMSAyMS43NDggMTEuOTg5QzIxLjc0OCAxNy4zNTggMTcuMzc5IDIxLjcyNyAxMi4wMSAyMS43MjdDNi42NDA5NyAyMS43MjcgMi4yNzE5NyAxNy4zNTggMi4yNzE5NyAxMS45ODlIMC43NzE5NzNDMC43NzE5NzMgMTguMTk2IDUuODAzOTcgMjMuMjI3IDEyLjAxIDIzLjIyN0MxNS4xMTMgMjMuMjI3IDE3LjkyMyAyMS45NjkgMTkuOTU3IDE5LjkzNUMyMS45OTEgMTcuOTAxIDIzLjI0OSAxNS4wOTIgMjMuMjQ5IDExLjk4OEMyMy4yNDkgOC44ODQwMSAyMS45OTEgNi4wNzUwMSAxOS45NTcgNC4wNDEwMUwxOS45NTggNC4wNDIwMVpcIiAvPlxuICAgIDxwYXRoIGQ9XCJNMTIuMDAwMyA2LjE2Njc1QzguNzc4OTcgNi4xNjY3NSA2LjE2Njk5IDguNzc4NzMgNi4xNjY5OSAxMi4wMDAxQzYuMTY2OTkgMTUuMjIxNCA4Ljc3ODk3IDE3LjgzMzQgMTIuMDAwMyAxNy44MzM0QzE1LjIyMTcgMTcuODMzNCAxNy44MzM3IDE1LjIyMTQgMTcuODMzNyAxMi4wMDAxQzE3LjgzMzcgOC43Nzg3MyAxNS4yMjE3IDYuMTY2NzUgMTIuMDAwMyA2LjE2Njc1Wk0xMi4wMDAzIDE2Ljg0MzhDOS4zMjU4NSAxNi44NDM4IDcuMTU2NTggMTQuNjc0NiA3LjE1NjU4IDEyLjAwMDFDNy4xNTY1OCA5LjMyNTYgOS4zMjU4NSA3LjE1NjMzIDEyLjAwMDMgNy4xNTYzM0MxNC42NzQ4IDcuMTU2MzMgMTYuODQ0MSA5LjMyNTYgMTYuODQ0MSAxMi4wMDAxQzE2Ljg0NDEgMTQuNjc0NiAxNC42NzQ4IDE2Ljg0MzggMTIuMDAwMyAxNi44NDM4Wk0xMi42MjE0IDExLjY5OEwxMi4yOTA3IDExLjYyMTJWOS44NzI0OEMxMi43ODU1IDkuOTQwMTkgMTMuMDkxNSAxMC4yNTAxIDEzLjE0MzYgMTAuNjMwM0MxMy4xNTAxIDEwLjY4MjQgMTMuMTk0MyAxMC43MjAxIDEzLjI0NjQgMTAuNzIwMUgxMy44MzExQzEzLjg5MjMgMTAuNzIwMSAxMy45NDA0IDEwLjY2NjcgMTMuOTM1MiAxMC42MDU2QzEzLjg1NTggOS43OTQzNSAxMy4xODc4IDkuMjczNTIgMTIuMjk1OSA5LjE4MzY4VjguNzU3ODlDMTIuMjk1OSA4LjcwMDYgMTIuMjQ5IDguNjUzNzMgMTIuMTkxNyA4LjY1MzczSDExLjgyNThDMTEuNzY4NiA4LjY1MzczIDExLjcyMTcgOC43MDA2IDExLjcyMTcgOC43NTc4OVY5LjE4NzU4QzEwLjc5OTggOS4yNzc0MyAxMC4wNzg1IDkuNzg2NTQgMTAuMDc4NSAxMC43MzcxQzEwLjA3ODUgMTEuNjE3MyAxMC43MjY5IDEyLjA0MTcgMTEuNDA3OSAxMi4yMDQ1TDExLjcyOTUgMTIuMjg2NVYxNC4xNDQ2QzExLjE1NCAxNC4wNjc4IDEwLjgzMTEgMTMuNzYwNSAxMC43NjQ2IDEzLjM0NjRDMTAuNzU2OCAxMy4yOTcgMTAuNzEyNiAxMy4yNjA1IDEwLjY2MTggMTMuMjYwNUgxMC4wNjAyQzkuOTk5MDIgMTMuMjYwNSA5Ljk1MDg1IDEzLjMxMjYgOS45NTYwNiAxMy4zNzM4QzEwLjAxNDYgMTQuMDg5OSAxMC41NTc2IDE0Ljc0ODggMTEuNzE2NSAxNC44MzM0VjE1LjI0MjNDMTEuNzE2NSAxNS4yOTk2IDExLjc2MzMgMTUuMzQ2NCAxMS44MjA2IDE1LjM0NjRIMTIuMTkwNEMxMi4yNDc3IDE1LjM0NjQgMTIuMjk0NiAxNS4yOTk2IDEyLjI5NDYgMTUuMjQxTDEyLjI5MiAxNC44MjgyQzEzLjMxMTUgMTQuNzM4NCAxNC4wNDA3IDE0LjE5MjggMTQuMDQwNyAxMy4yMTM2QzE0LjAzOTQgMTIuMzEgMTMuNDY1MiAxMS45MDYzIDEyLjYyMTQgMTEuNjk4Wk0xMS43MjgyIDExLjQ4NzFDMTEuNjU1MyAxMS40NjYyIDExLjU5NDEgMTEuNDQ2NyAxMS41MzI5IDExLjQyMkMxMS4wOTI4IDExLjI2MzEgMTAuODg4MyAxMS4wMDY2IDEwLjg4ODMgMTAuNjc1OUMxMC44ODgzIDEwLjIwMzIgMTEuMjQ2NCA5LjkzMzY4IDExLjcyODIgOS44NzI0OFYxMS40ODcxWk0xMi4yOTA3IDE0LjE0ODVWMTIuNDA3NkMxMi4zMzExIDEyLjQxOTQgMTIuMzY3NSAxMi40Mjg1IDEyLjQwNTMgMTIuNDM2M0MxMy4wMjEyIDEyLjYyMzggMTMuMjI4MiAxMi44ODQyIDEzLjIyODIgMTMuMjgzOUMxMy4yMjgyIDEzLjc5MzEgMTIuODQ1NCAxNC4wOTkgMTIuMjkwNyAxNC4xNDg1WlwiIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IFB1cmNoYXNlZEltYWdlSWNvbiA9ICh7IHdpZHRoLCBoZWlnaHQgfTogSUljb25zKSA9PiAoXG4gIDxzdmdcbiAgICB3aWR0aD17d2lkdGggfHwgJzFlbSd9XG4gICAgaGVpZ2h0PXtoZWlnaHQgfHwgJzFlbSd9XG4gICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gID5cbiAgICA8cGF0aCBkPVwiTTcuNSA2Ljc1QzcuNSA2Ljc1IDcuNSAyLjI1IDEyIDIuMjVDMTYuNSAyLjI1IDE2LjUgNi43NSAxNi41IDYuNzVNMy43NSA2Ljc1VjIxLjc1SDIwLjI1VjYuNzVIMy43NVpcIiAvPlxuICAgIDxwYXRoIGQ9XCJNMTIuNDgxNiAxMy45NjZMMTEuNTY5OSAxNS4xMjg1TDExLjA4ODMgMTQuNTE0NUMxMS4wNzk1IDE0LjUwMzIgMTEuMDY4MyAxNC40OTQyIDExLjA1NTUgMTQuNDg4QzExLjA0MjcgMTQuNDgxNyAxMS4wMjg3IDE0LjQ3ODUgMTEuMDE0NSAxNC40Nzg1QzExLjAwMDIgMTQuNDc4NSAxMC45ODYyIDE0LjQ4MTcgMTAuOTczNCAxNC40ODhDMTAuOTYwNiAxNC40OTQyIDEwLjk0OTQgMTQuNTAzMiAxMC45NDA2IDE0LjUxNDVMOS43NzEwOSAxNi4wMDUxQzkuNzYwMjcgMTYuMDE4OSA5Ljc1MzU2IDE2LjAzNTUgOS43NTE3MiAxNi4wNTI5QzkuNzQ5ODggMTYuMDcwNCA5Ljc1Mjk5IDE2LjA4OCA5Ljc2MDY5IDE2LjEwMzhDOS43NjgzOSAxNi4xMTk1IDkuNzgwMzggMTYuMTMyOCA5Ljc5NTI3IDE2LjE0MjFDOS44MTAxNyAxNi4xNTE0IDkuODI3MzcgMTYuMTU2MyA5Ljg0NDkyIDE2LjE1NjJIMTQuMTU2MkMxNC4yMzQ4IDE2LjE1NjIgMTQuMjc4MSAxNi4wNjYgMTQuMjMwMSAxNi4wMDUxTDEyLjYzMDUgMTMuOTY2QzEyLjYyMTYgMTMuOTU0OCAxMi42MTAzIDEzLjk0NTcgMTIuNTk3NCAxMy45Mzk1QzEyLjU4NDUgMTMuOTMzMyAxMi41NzA0IDEzLjkzIDEyLjU1NjEgMTMuOTNDMTIuNTQxNyAxMy45MyAxMi41Mjc2IDEzLjkzMzMgMTIuNTE0NyAxMy45Mzk1QzEyLjUwMTggMTMuOTQ1NyAxMi40OTA1IDEzLjk1NDggMTIuNDgxNiAxMy45NjZaTTEwLjIxODggMTMuMTc5N0MxMC4yMTg4IDEzLjMwNCAxMC4yNjgxIDEzLjQyMzIgMTAuMzU2IDEzLjUxMTFDMTAuNDQ0IDEzLjU5OTEgMTAuNTYzMiAxMy42NDg0IDEwLjY4NzUgMTMuNjQ4NEMxMC44MTE4IDEzLjY0ODQgMTAuOTMxIDEzLjU5OTEgMTEuMDE5IDEzLjUxMTFDMTEuMTA2OSAxMy40MjMyIDExLjE1NjIgMTMuMzA0IDExLjE1NjIgMTMuMTc5N0MxMS4xNTYyIDEzLjA1NTQgMTEuMTA2OSAxMi45MzYxIDExLjAxOSAxMi44NDgyQzEwLjkzMSAxMi43NjAzIDEwLjgxMTggMTIuNzEwOSAxMC42ODc1IDEyLjcxMDlDMTAuNTYzMiAxMi43MTA5IDEwLjQ0NCAxMi43NjAzIDEwLjM1NiAxMi44NDgyQzEwLjI2ODEgMTIuOTM2MSAxMC4yMTg4IDEzLjA1NTQgMTAuMjE4OCAxMy4xNzk3Wk0xNi4wMTQ4IDExLjM4MkwxMy40OTMgOC44NjAxNkMxMy40MjI3IDguNzg5ODQgMTMuMzI3NyA4Ljc1IDEzLjIyODEgOC43NUg4LjI1QzguMDQyNTggOC43NSA3Ljg3NSA4LjkxNzU4IDcuODc1IDkuMTI1VjE4Ljg3NUM3Ljg3NSAxOS4wODI0IDguMDQyNTggMTkuMjUgOC4yNSAxOS4yNUgxNS43NUMxNS45NTc0IDE5LjI1IDE2LjEyNSAxOS4wODI0IDE2LjEyNSAxOC44NzVWMTEuNjQ4QzE2LjEyNSAxMS41NDg0IDE2LjA4NTIgMTEuNDUyMyAxNi4wMTQ4IDExLjM4MlpNMTUuMjYwMiAxMS44MjAzSDEzLjA1NDdWOS42MTQ4NEwxNS4yNjAyIDExLjgyMDNaTTE1LjI4MTIgMTguNDA2Mkg4LjcxODc1VjkuNTkzNzVIMTIuMjU3OFYxMi4xMjVDMTIuMjU3OCAxMi4yNTU1IDEyLjMwOTcgMTIuMzgwNyAxMi40MDIgMTIuNDczQzEyLjQ5NDMgMTIuNTY1MyAxMi42MTk1IDEyLjYxNzIgMTIuNzUgMTIuNjE3MkgxNS4yODEyVjE4LjQwNjJaXCIgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgUHVyY2hhc2VkVmlkZW9JY29uID0gKHsgd2lkdGgsIGhlaWdodCB9OiBJSWNvbnMpID0+IChcbiAgPHN2Z1xuICAgIHdpZHRoPXt3aWR0aCB8fCAnMWVtJ31cbiAgICBoZWlnaHQ9e2hlaWdodCB8fCAnMWVtJ31cbiAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgPlxuICAgIDxwYXRoIGQ9XCJNNy41IDYuNzVDNy41IDYuNzUgNy41IDIuMjUgMTIgMi4yNUMxNi41IDIuMjUgMTYuNSA2Ljc1IDE2LjUgNi43NU0zLjc1IDYuNzVWMjEuNzVIMjAuMjVWNi43NUgzLjc1WlwiIC8+XG4gICAgPHBhdGggZD1cIk0xMiA5QzkuMjQzIDkgNyAxMS4yNDMgNyAxNEM3IDE2Ljc1NyA5LjI0MyAxOSAxMiAxOUMxNC43NTcgMTkgMTcgMTYuNzU3IDE3IDE0QzE3IDExLjI0MyAxNC43NTcgOSAxMiA5Wk0xMiAxOEM5Ljc5NDUgMTggOCAxNi4yMDU1IDggMTRDOCAxMS43OTQ1IDkuNzk0NSAxMCAxMiAxMEMxNC4yMDU1IDEwIDE2IDExLjc5NDUgMTYgMTRDMTYgMTYuMjA1NSAxNC4yMDU1IDE4IDEyIDE4WlwiIC8+XG4gICAgPHBhdGggZD1cIk0xMC41IDE2LjVMMTQuNSAxNEwxMC41IDExLjVWMTYuNVpcIiBmaWxsPVwiYmxhY2tcIiAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBQdXJjaGFzZWRJdGVtSWNvbiA9ICh7IHdpZHRoLCBoZWlnaHQgfTogSUljb25zKSA9PiAoXG4gIDxzdmdcbiAgICB3aWR0aD17d2lkdGggfHwgJzFlbSd9XG4gICAgaGVpZ2h0PXtoZWlnaHQgfHwgJzFlbSd9XG4gICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gID5cbiAgICA8cGF0aCBkPVwiTTEuNSA2LjQwNDk4VjE3LjYxQzEuNSAxOC4yODUgMS45NSAxOC44NyAyLjYyNSAxOS4wNjVMMTIuMzc1IDIxLjY2QzEyLjYxNSAyMS43MzUgMTIuODg1IDIxLjczNSAxMy4xMjUgMjEuNjZMMjIuODc1IDE5LjA2NUMyMy41NSAxOC44NyAyNCAxOC4yODUgMjQgMTcuNjFWNi40MDQ5OEMyNCA1LjcyOTk4IDIzLjU1IDUuMTQ0OTggMjIuODc1IDQuOTQ5OThMMTMuMTI1IDIuMzM5OThDMTIuODc3IDIuMjk0OTggMTIuNjIzIDIuMjk0OTggMTIuMzc1IDIuMzM5OThMMi42MjUgNC45NDk5OEMxLjk1IDUuMTQ0OTggMS41IDUuNzI5OTggMS41IDYuNDA0OThaTTEyIDIwLjA0TDMgMTcuNjU1VjcuNDk5OThMMTIgOS45MTQ5OFYyMC4wNFpNMyA1Ljk5OTk4TDYuNzUgNC45OTQ5OEwxNi41IDcuNTg5OThMMTIuNzUgOC41OTQ5OEwzIDUuOTk5OThaTTIyLjUgMTcuNjU1TDEzLjUgMjAuMDRWOS45MTQ5OEwxNi41IDkuMDg5OThWMTIuNzVMMTkuNSAxMS45NTVWOC4yOTQ5OEwyMi41IDcuNDk5OThWMTcuNjU1Wk0xOS41IDYuNzk0OThMOS43NSA0LjE5OTk4TDEyLjc1IDMuNDA0OThMMjIuNSA1Ljk5OTk4TDE5LjUgNi43OTQ5OFpcIiAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBNeVByb2R1Y3RJY29uID0gKHsgd2lkdGgsIGhlaWdodCB9OiBJSWNvbnMpID0+IChcbiAgPHN2Z1xuICAgIHdpZHRoPXt3aWR0aCB8fCAnMWVtJ31cbiAgICBoZWlnaHQ9e2hlaWdodCB8fCAnMWVtJ31cbiAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgPlxuICAgIDxwYXRoXG4gICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgIGQ9XCJNMS41IDYuNDA1MDNWMTcuNjFDMS41IDE4LjI4NSAxLjk1IDE4Ljg3IDIuNjI1IDE5LjA2NUwxMi4zNzUgMjEuNjZDMTIuNjE1IDIxLjczNSAxMi44ODUgMjEuNzM1IDEzLjEyNSAyMS42NkwyMi44NzUgMTkuMDY1QzIzLjU1IDE4Ljg3IDI0IDE4LjI4NSAyNCAxNy42MVY2LjQwNTAzQzI0IDUuNzMwMDMgMjMuNTUgNS4xNDUwMyAyMi44NzUgNC45NTAwM0wxMy4xMjUgMi4zNDAwM0MxMi44NzcgMi4yOTUwMiAxMi42MjMgMi4yOTUwMiAxMi4zNzUgMi4zNDAwM0wyLjYyNSA0Ljk1MDAzQzEuOTUgNS4xNDUwMyAxLjUgNS43MzAwMyAxLjUgNi40MDUwM1pNMTIgMjAuMDRMMyAxNy42NTVWNy41MDAwM0wxMiA5LjkxNTAzVjIwLjA0Wk0zIDYuMDAwMDNMNi43NSA0Ljk5NTAzTDE2LjUgNy41OTAwM0wxMi43NSA4LjU5NTAzTDMgNi4wMDAwM1pNMjIuNSAxNy42NTVMMTMuNSAyMC4wNFY5LjkxNTAzTDE2LjUgOS4wOTAwM1YxMi43NUwxOS41IDExLjk1NVY4LjI5NTAzTDIyLjUgNy41MDAwM1YxNy42NTVaTTE5LjUgNi43OTUwM0w5Ljc1IDQuMjAwMDNMMTIuNzUgMy40MDUwM0wyMi41IDYuMDAwMDNMMTkuNSA2Ljc5NTAzWlwiXG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgVmlkZW9zSWNvbiA9ICh7IHdpZHRoLCBoZWlnaHQgfTogSUljb25zKSA9PiAoXG4gIDxzdmdcbiAgICB3aWR0aD17d2lkdGggfHwgJzFlbSd9XG4gICAgaGVpZ2h0PXtoZWlnaHQgfHwgJzFlbSd9XG4gICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgdmlld0JveD1cIjAgMCAzMCAzMVwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gID5cbiAgICA8cGF0aCBkPVwiTTIyLjUwMDIgOS4xNDQyNEMyMi41MDAyIDcuNzY1NDkgMjEuMzc4OSA2LjY0NDI0IDIwLjAwMDIgNi42NDQyNEg1LjAwMDE4QzMuNjIxNDMgNi42NDQyNCAyLjUwMDE4IDcuNzY1NDkgMi41MDAxOCA5LjE0NDI0VjIxLjY0NDJDMi41MDAxOCAyMy4wMjMgMy42MjE0MyAyNC4xNDQyIDUuMDAwMTggMjQuMTQ0MkgyMC4wMDAyQzIxLjM3ODkgMjQuMTQ0MiAyMi41MDAyIDIzLjAyMyAyMi41MDAyIDIxLjY0NDJWMTcuNDc4TDI3LjUwMDIgMjEuNjQ0MlY5LjE0NDI0TDIyLjUwMDIgMTMuMzEwNVY5LjE0NDI0Wk0yMC4wMDI3IDIxLjY0NDJINS4wMDAxOFY5LjE0NDI0SDIwLjAwMDJMMjAuMDAxNCAxNS4zOTNMMjAuMDAwMiAxNS4zOTQyTDIwLjAwMTQgMTUuMzk1NUwyMC4wMDI3IDIxLjY0NDJaXCIgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgUGhvdG9zSWNvbiA9ICh7IHdpZHRoLCBoZWlnaHQgfTogSUljb25zKSA9PiAoXG4gIDxzdmdcbiAgICB3aWR0aD17d2lkdGggfHwgJzFlbSd9XG4gICAgaGVpZ2h0PXtoZWlnaHQgfHwgJzFlbSd9XG4gICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gID5cbiAgICA8cGF0aCBkPVwiTTIxLjc1IDMuNzVIMi4yNUMxLjgzNTE2IDMuNzUgMS41IDQuMDg1MTYgMS41IDQuNVYxOS41QzEuNSAxOS45MTQ4IDEuODM1MTYgMjAuMjUgMi4yNSAyMC4yNUgyMS43NUMyMi4xNjQ4IDIwLjI1IDIyLjUgMTkuOTE0OCAyMi41IDE5LjVWNC41QzIyLjUgNC4wODUxNiAyMi4xNjQ4IDMuNzUgMjEuNzUgMy43NVpNMjAuODEyNSAxOC41NjI1SDMuMTg3NVYxNy42MjczTDYuNDMzNTkgMTMuNzc2Nkw5Ljk1MTU2IDE3Ljk0ODRMMTUuNDI0MiAxMS40NjA5TDIwLjgxMjUgMTcuODVWMTguNTYyNVpNMjAuODEyNSAxNS41MjAzTDE1LjU2NzIgOS4zQzE1LjQ5MjIgOS4yMTA5NCAxNS4zNTYyIDkuMjEwOTQgMTUuMjgxMiA5LjNMOS45NTE1NiAxNS42MTg4TDYuNTc2NTYgMTEuNjE4QzYuNTAxNTYgMTEuNTI4OSA2LjM2NTYyIDExLjUyODkgNi4yOTA2MiAxMS42MThMMy4xODc1IDE1LjI5NzdWNS40Mzc1SDIwLjgxMjVWMTUuNTIwM1pNNy4xMjUgMTAuNjg3NUM3LjM5NTg1IDEwLjY4NzUgNy42NjQwNSAxMC42MzQyIDcuOTE0MjggMTAuNTMwNUM4LjE2NDUyIDEwLjQyNjkgOC4zOTE4OSAxMC4yNzQ5IDguNTgzNDEgMTAuMDgzNEM4Ljc3NDkzIDkuODkxODkgOC45MjY4NSA5LjY2NDUyIDkuMDMwNSA5LjQxNDI4QzkuMTM0MTUgOS4xNjQwNSA5LjE4NzUgOC44OTU4NSA5LjE4NzUgOC42MjVDOS4xODc1IDguMzU0MTUgOS4xMzQxNSA4LjA4NTk1IDkuMDMwNSA3LjgzNTcyQzguOTI2ODUgNy41ODU0OCA4Ljc3NDkzIDcuMzU4MTEgOC41ODM0MSA3LjE2NjU5QzguMzkxODkgNi45NzUwNyA4LjE2NDUyIDYuODIzMTUgNy45MTQyOCA2LjcxOTVDNy42NjQwNSA2LjYxNTg1IDcuMzk1ODUgNi41NjI1IDcuMTI1IDYuNTYyNUM2LjU3Nzk5IDYuNTYyNSA2LjA1MzM5IDYuNzc5OCA1LjY2NjU5IDcuMTY2NTlDNS4yNzk4IDcuNTUzMzkgNS4wNjI1IDguMDc3OTkgNS4wNjI1IDguNjI1QzUuMDYyNSA5LjE3MjAxIDUuMjc5OCA5LjY5NjYxIDUuNjY2NTkgMTAuMDgzNEM2LjA1MzM5IDEwLjQ3MDIgNi41Nzc5OSAxMC42ODc1IDcuMTI1IDEwLjY4NzVaTTcuMTI1IDcuOTY4NzVDNy40ODgyOCA3Ljk2ODc1IDcuNzgxMjUgOC4yNjE3MiA3Ljc4MTI1IDguNjI1QzcuNzgxMjUgOC45ODgyOCA3LjQ4ODI4IDkuMjgxMjUgNy4xMjUgOS4yODEyNUM2Ljc2MTcyIDkuMjgxMjUgNi40Njg3NSA4Ljk4ODI4IDYuNDY4NzUgOC42MjVDNi40Njg3NSA4LjI2MTcyIDYuNzYxNzIgNy45Njg3NSA3LjEyNSA3Ljk2ODc1WlwiIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IEZlbWFsZVNpZ25JY29uID0gKHsgY29sb3IgfTogSUljb25zKSA9PiAoXG4gIDxzdmdcbiAgICB3aWR0aD1cIjE2XCJcbiAgICBoZWlnaHQ9XCIxNlwiXG4gICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXG4gICAgZmlsbD1cIm5vbmVcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICA+XG4gICAgPHBhdGhcbiAgICAgIGQ9XCJNOCAxLjMzMzM3QzUuNzk0IDEuMzMzMzcgNCAzLjEyNzM3IDQgNS4zMzMzN0M0IDcuMzExMzcgNS40NDQ2NyA4Ljk1NDcxIDcuMzMzMzMgOS4yNzMzN1YxMS4zMzM0SDUuMzMzMzNWMTIuNjY2N0g3LjMzMzMzVjE0LjY1ODdIOC42NjY2N1YxMi42NjY3SDEwLjY2NjdWMTEuMzMzNEg4LjY2NjY3VjkuMjczMzdDMTAuNTU1MyA4Ljk1NDA0IDEyIDcuMzExMzcgMTIgNS4zMzMzN0MxMiAzLjEyNzM3IDEwLjIwNiAxLjMzMzM3IDggMS4zMzMzN1pNOCA4LjAwMDA0QzYuNTI5MzMgOC4wMDAwNCA1LjMzMzMzIDYuODA0MDQgNS4zMzMzMyA1LjMzMzM3QzUuMzMzMzMgMy44NjI3MSA2LjUyOTMzIDIuNjY2NzEgOCAyLjY2NjcxQzkuNDcwNjcgMi42NjY3MSAxMC42NjY3IDMuODYyNzEgMTAuNjY2NyA1LjMzMzM3QzEwLjY2NjcgNi44MDQwNCA5LjQ3MDY3IDguMDAwMDQgOCA4LjAwMDA0WlwiXG4gICAgICBmaWxsPXtjb2xvciB8fCAnY3VycmVudENvbG9yJ31cbiAgICAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBNYWxlU2lnbkljb24gPSAoeyBjb2xvciB9OiBJSWNvbnMpID0+IChcbiAgPHN2Z1xuICAgIHdpZHRoPVwiMTZcIlxuICAgIGhlaWdodD1cIjE2XCJcbiAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcbiAgICBmaWxsPVwibm9uZVwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gID5cbiAgICA8cGF0aFxuICAgICAgZD1cIk0xMy4zMzM0IDcuMzMzMjlWMi42NjY2M0g4LjY2NjcxTDEwLjUyODcgNC41Mjg2M0w3LjY0NzM3IDcuNDA5OTZDNi45NzI2IDYuOTI2NiA2LjE2MzQxIDYuNjY2NjcgNS4zMzMzNyA2LjY2NjYzQzMuMTI3MzcgNi42NjY2MyAxLjMzMzM3IDguNDYwNjMgMS4zMzMzNyAxMC42NjY2QzEuMzMzMzcgMTIuODcyNiAzLjEyNzM3IDE0LjY2NjYgNS4zMzMzNyAxNC42NjY2QzcuNTM5MzcgMTQuNjY2NiA5LjMzMzM3IDEyLjg3MjYgOS4zMzMzNyAxMC42NjY2QzkuMzMzMzcgOS44MDM5NiA5LjA1NjA0IDkuMDA2NjMgOC41OTAwNCA4LjM1MjYzTDExLjQ3MTQgNS40NzEyOUwxMy4zMzM0IDcuMzMzMjlaTTUuMzMzMzcgMTMuMzMzM0MzLjg2MjcxIDEzLjMzMzMgMi42NjY3MSAxMi4xMzczIDIuNjY2NzEgMTAuNjY2NkMyLjY2NjcxIDkuMTk1OTYgMy44NjI3MSA3Ljk5OTk2IDUuMzMzMzcgNy45OTk5NkM2LjgwNDA0IDcuOTk5OTYgOC4wMDAwNCA5LjE5NTk2IDguMDAwMDQgMTAuNjY2NkM4LjAwMDA0IDEyLjEzNzMgNi44MDQwNCAxMy4zMzMzIDUuMzMzMzcgMTMuMzMzM1pcIlxuICAgICAgZmlsbD17Y29sb3IgfHwgJ2N1cnJlbnRDb2xvcid9XG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgVHJhbnNnZW5kZXJJY29uID0gKHsgY29sb3IgfTogSUljb25zKSA9PiAoXG4gIDxzdmdcbiAgICB3aWR0aD1cIjE2XCJcbiAgICBoZWlnaHQ9XCIxNlwiXG4gICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXG4gICAgZmlsbD1cIm5vbmVcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICA+XG4gICAgPHBhdGhcbiAgICAgIGQ9XCJNNi42NjY2NSAxMC4zMzMzQzcuNTUwNyAxMC4zMzMzIDguMzk4NTUgOS45ODIxIDkuMDIzNjcgOS4zNTY5OEM5LjY0ODc5IDguNzMxODUgOS45OTk5OCA3Ljg4NDAxIDkuOTk5OTggNi45OTk5NUM5Ljk5OTk4IDYuMTE1OSA5LjY0ODc5IDUuMjY4MDUgOS4wMjM2NyA0LjY0MjkzQzguMzk4NTUgNC4wMTc4MSA3LjU1MDcgMy42NjY2MiA2LjY2NjY1IDMuNjY2NjJDNS43ODI1OSAzLjY2NjYyIDQuOTM0NzQgNC4wMTc4MSA0LjMwOTYyIDQuNjQyOTNDMy42ODQ1IDUuMjY4MDUgMy4zMzMzMSA2LjExNTkgMy4zMzMzMSA2Ljk5OTk1QzMuMzMzMzEgNy44ODQwMSAzLjY4NDUgOC43MzE4NSA0LjMwOTYyIDkuMzU2OThDNC45MzQ3NCA5Ljk4MjEgNS43ODI1OSAxMC4zMzMzIDYuNjY2NjUgMTAuMzMzM1YxMC4zMzMzWk0xMC42NzUzIDQuNjA5MjlDMTEuMDY4OCA1LjI2OTI0IDExLjI5MzIgNi4wMTYxIDExLjMyODggNi43ODM2MkMxMS4zNjQ0IDcuNTUxMTMgMTEuMjEgOC4zMTU1NiAxMC44NzkyIDkuMDA5MDdDMTAuNTQ4NSA5LjcwMjU4IDEwLjA1MTcgMTAuMzAzNyA5LjQzMjkgMTAuNzU5MkM4LjgxNDEgMTEuMjE0NiA4LjA5MjQ1IDExLjUxMDMgNy4zMzE5OCAxMS42Mkw3LjMzMzMxIDExLjY2NjZWMTIuMzMzM0g3Ljk5OTk4QzguMTc2NzkgMTIuMzMzMyA4LjM0NjM2IDEyLjQwMzUgOC40NzEzOCAxMi41Mjg1QzguNTk2NDEgMTIuNjUzNiA4LjY2NjY0IDEyLjgyMzEgOC42NjY2NCAxM0M4LjY2NjY0IDEzLjE3NjggOC41OTY0MSAxMy4zNDYzIDguNDcxMzggMTMuNDcxNEM4LjM0NjM2IDEzLjU5NjQgOC4xNzY3OSAxMy42NjY2IDcuOTk5OTggMTMuNjY2Nkg3LjMzMzMxVjE0LjMzMzNDNy4zMzMzMSAxNC41MTAxIDcuMjYzMDcgMTQuNjc5NyA3LjEzODA1IDE0LjgwNDdDNy4wMTMwMyAxNC45Mjk3IDYuODQzNDYgMTUgNi42NjY2NSAxNUM2LjQ4OTgzIDE1IDYuMzIwMjYgMTQuOTI5NyA2LjE5NTI0IDE0LjgwNDdDNi4wNzAyMiAxNC42Nzk3IDUuOTk5OTggMTQuNTEwMSA1Ljk5OTk4IDE0LjMzMzNWMTMuNjY2Nkg1LjMzMzMxQzUuMTU2NSAxMy42NjY2IDQuOTg2OTMgMTMuNTk2NCA0Ljg2MTkxIDEzLjQ3MTRDNC43MzY4OCAxMy4zNDYzIDQuNjY2NjUgMTMuMTc2OCA0LjY2NjY1IDEzQzQuNjY2NjUgMTIuODIzMSA0LjczNjg4IDEyLjY1MzYgNC44NjE5MSAxMi41Mjg1QzQuOTg2OTMgMTIuNDAzNSA1LjE1NjUgMTIuMzMzMyA1LjMzMzMxIDEyLjMzMzNINS45OTk5OFYxMS42NjY2QzUuOTk5OTggMTEuNjUwNiA1Ljk5OTk4IDExLjYzNTMgNi4wMDEzMSAxMS42MkM0LjgzNTQ1IDExLjQ0OTEgMy43NzczMiAxMC44NDM3IDMuMDM5MjYgOS45MjUxOEMyLjMwMTIgOS4wMDY2NiAxLjkzNzgxIDcuODQyOTkgMi4wMjIwMSA2LjY2NzY5QzIuMTA2MjIgNS40OTIzOSAyLjYzMTc4IDQuMzkyNDIgMy40OTMyNSAzLjU4ODQ5QzQuMzU0NzEgMi43ODQ1NyA1LjQ4ODM0IDIuMzM2MTcgNi42NjY2NSAyLjMzMzI5QzcuODM5MDYgMi4zMzE4NiA4Ljk2ODgxIDIuNzczMDQgOS44Mjk5OCAzLjU2ODYyTDExLjA2MzMgMi4zMzUyOUgxMC4wMDY2QzkuODI5ODMgMi4zMzUyOSA5LjY2MDI2IDIuMjY1MDUgOS41MzUyNCAyLjE0MDAyQzkuNDEwMjIgMi4wMTUgOS4zMzk5OCAxLjg0NTQzIDkuMzM5OTggMS42Njg2MkM5LjMzOTk4IDEuNDkxODEgOS40MTAyMiAxLjMyMjI0IDkuNTM1MjQgMS4xOTcyMkM5LjY2MDI2IDEuMDcyMTkgOS44Mjk4MyAxLjAwMTk1IDEwLjAwNjYgMS4wMDE5NUgxMi42NzMzQzEyLjg1MDEgMS4wMDE5NSAxMy4wMTk3IDEuMDcyMTkgMTMuMTQ0NyAxLjE5NzIyQzEzLjI2OTcgMS4zMjIyNCAxMy4zNCAxLjQ5MTgxIDEzLjM0IDEuNjY4NjJWNC4zMzUyOUMxMy4zNCA0LjUxMjEgMTMuMjY5NyA0LjY4MTY3IDEzLjE0NDcgNC44MDY2OUMxMy4wMTk3IDQuOTMxNzIgMTIuODUwMSA1LjAwMTk1IDEyLjY3MzMgNS4wMDE5NUMxMi40OTY1IDUuMDAxOTUgMTIuMzI2OSA0LjkzMTcyIDEyLjIwMTkgNC44MDY2OUMxMi4wNzY5IDQuNjgxNjcgMTIuMDA2NiA0LjUxMjEgMTIuMDA2NiA0LjMzNTI5VjMuMjc3OTVMMTAuNjc2IDQuNjA5MjlIMTAuNjc1M1pcIlxuICAgICAgZmlsbD17Y29sb3IgfHwgJ2N1cnJlbnRDb2xvcid9XG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgVG9rZW5zSWNvbiA9ICgpID0+IChcbiAgPHN2Z1xuICAgIHdpZHRoPVwiMjVcIlxuICAgIGhlaWdodD1cIjI0XCJcbiAgICB2aWV3Qm94PVwiMCAwIDI1IDI0XCJcbiAgICBmaWxsPVwibm9uZVwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gID5cbiAgICA8cGF0aFxuICAgICAgZD1cIk05Ljg1MDEgMTBDOS41ODQ4OCAxMCA5LjMzMDUzIDEwLjEwNTQgOS4xNDI5OSAxMC4yOTI5QzguOTU1NDUgMTAuNDgwNCA4Ljg1MDEgMTAuNzM0OCA4Ljg1MDEgMTFWMTNDOC44NTAxIDEzLjI2NTIgOC45NTU0NSAxMy41MTk2IDkuMTQyOTkgMTMuNzA3MUM5LjMzMDUzIDEzLjg5NDYgOS41ODQ4OCAxNCA5Ljg1MDEgMTRDMTAuMTE1MyAxNCAxMC4zNjk3IDEzLjg5NDYgMTAuNTU3MiAxMy43MDcxQzEwLjc0NDcgMTMuNTE5NiAxMC44NTAxIDEzLjI2NTIgMTAuODUwMSAxM1YxMUMxMC44NTAxIDEwLjczNDggMTAuNzQ0NyAxMC40ODA0IDEwLjU1NzIgMTAuMjkyOUMxMC4zNjk3IDEwLjEwNTQgMTAuMTE1MyAxMCA5Ljg1MDEgMTBaTTIxLjg1MDEgMTFDMjIuMTE1MyAxMSAyMi4zNjk3IDEwLjg5NDYgMjIuNTU3MiAxMC43MDcxQzIyLjc0NDcgMTAuNTE5NiAyMi44NTAxIDEwLjI2NTIgMjIuODUwMSAxMFY2QzIyLjg1MDEgNS43MzQ3OCAyMi43NDQ3IDUuNDgwNDMgMjIuNTU3MiA1LjI5Mjg5QzIyLjM2OTcgNS4xMDUzNiAyMi4xMTUzIDUgMjEuODUwMSA1SDMuODUwMUMzLjU4NDg4IDUgMy4zMzA1MyA1LjEwNTM2IDMuMTQyOTkgNS4yOTI4OUMyLjk1NTQ1IDUuNDgwNDMgMi44NTAxIDUuNzM0NzggMi44NTAxIDZWMTBDMi44NTAxIDEwLjI2NTIgMi45NTU0NSAxMC41MTk2IDMuMTQyOTkgMTAuNzA3MUMzLjMzMDUzIDEwLjg5NDYgMy41ODQ4OCAxMSAzLjg1MDEgMTFDNC4xMTUzMSAxMSA0LjM2OTY3IDExLjEwNTQgNC41NTcyIDExLjI5MjlDNC43NDQ3NCAxMS40ODA0IDQuODUwMSAxMS43MzQ4IDQuODUwMSAxMkM0Ljg1MDEgMTIuMjY1MiA0Ljc0NDc0IDEyLjUxOTYgNC41NTcyIDEyLjcwNzFDNC4zNjk2NyAxMi44OTQ2IDQuMTE1MzEgMTMgMy44NTAxIDEzQzMuNTg0ODggMTMgMy4zMzA1MyAxMy4xMDU0IDMuMTQyOTkgMTMuMjkyOUMyLjk1NTQ1IDEzLjQ4MDQgMi44NTAxIDEzLjczNDggMi44NTAxIDE0VjE4QzIuODUwMSAxOC4yNjUyIDIuOTU1NDUgMTguNTE5NiAzLjE0Mjk5IDE4LjcwNzFDMy4zMzA1MyAxOC44OTQ2IDMuNTg0ODggMTkgMy44NTAxIDE5SDIxLjg1MDFDMjIuMTE1MyAxOSAyMi4zNjk3IDE4Ljg5NDYgMjIuNTU3MiAxOC43MDcxQzIyLjc0NDcgMTguNTE5NiAyMi44NTAxIDE4LjI2NTIgMjIuODUwMSAxOFYxNEMyMi44NTAxIDEzLjczNDggMjIuNzQ0NyAxMy40ODA0IDIyLjU1NzIgMTMuMjkyOUMyMi4zNjk3IDEzLjEwNTQgMjIuMTE1MyAxMyAyMS44NTAxIDEzQzIxLjU4NDkgMTMgMjEuMzMwNSAxMi44OTQ2IDIxLjE0MyAxMi43MDcxQzIwLjk1NTUgMTIuNTE5NiAyMC44NTAxIDEyLjI2NTIgMjAuODUwMSAxMkMyMC44NTAxIDExLjczNDggMjAuOTU1NSAxMS40ODA0IDIxLjE0MyAxMS4yOTI5QzIxLjMzMDUgMTEuMTA1NCAyMS41ODQ5IDExIDIxLjg1MDEgMTFaTTIwLjg1MDEgOS4xOEMyMC4yNzA5IDkuMzkwMiAxOS43NzA2IDkuNzczNjMgMTkuNDE2OSAxMC4yNzgyQzE5LjA2MzMgMTAuNzgyNyAxOC44NzM2IDExLjM4MzkgMTguODczNiAxMkMxOC44NzM2IDEyLjYxNjEgMTkuMDYzMyAxMy4yMTczIDE5LjQxNjkgMTMuNzIxOEMxOS43NzA2IDE0LjIyNjQgMjAuMjcwOSAxNC42MDk4IDIwLjg1MDEgMTQuODJWMTdIMTAuODUwMUMxMC44NTAxIDE2LjczNDggMTAuNzQ0NyAxNi40ODA0IDEwLjU1NzIgMTYuMjkyOUMxMC4zNjk3IDE2LjEwNTQgMTAuMTE1MyAxNiA5Ljg1MDEgMTZDOS41ODQ4OCAxNiA5LjMzMDUzIDE2LjEwNTQgOS4xNDI5OSAxNi4yOTI5QzguOTU1NDUgMTYuNDgwNCA4Ljg1MDEgMTYuNzM0OCA4Ljg1MDEgMTdINC44NTAxVjE0LjgyQzUuNDI5MjUgMTQuNjA5OCA1LjkyOTY0IDE0LjIyNjQgNi4yODMyNiAxMy43MjE4QzYuNjM2ODcgMTMuMjE3MyA2LjgyNjU3IDEyLjYxNjEgNi44MjY1NyAxMkM2LjgyNjU3IDExLjM4MzkgNi42MzY4NyAxMC43ODI3IDYuMjgzMjYgMTAuMjc4MkM1LjkyOTY0IDkuNzczNjMgNS40MjkyNSA5LjM5MDIgNC44NTAxIDkuMThWN0g4Ljg1MDFDOC44NTAxIDcuMjY1MjIgOC45NTU0NSA3LjUxOTU3IDkuMTQyOTkgNy43MDcxMUM5LjMzMDUzIDcuODk0NjQgOS41ODQ4OCA4IDkuODUwMSA4QzEwLjExNTMgOCAxMC4zNjk3IDcuODk0NjQgMTAuNTU3MiA3LjcwNzExQzEwLjc0NDcgNy41MTk1NyAxMC44NTAxIDcuMjY1MjIgMTAuODUwMSA3SDIwLjg1MDFWOS4xOFpcIlxuICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgRWFybmluZ0ljb24gPSAoKSA9PiAoXG4gIDxzdmdcbiAgICB3aWR0aD1cIjE2XCJcbiAgICBoZWlnaHQ9XCIxNlwiXG4gICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgZmlsbD1cIm5vbmVcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICA+XG4gICAgPHBhdGhcbiAgICAgIGQ9XCJNMjAuMjUgM0gwLjc1VjE4SDIwLjI1VjNaTTE4Ljc1IDE2LjVIMi4yNVY0LjVIMTguNzVWMTYuNVpcIlxuICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgLz5cbiAgICA8cGF0aCBkPVwiTTIxLjc1IDYuNzVWMTkuNUg0LjVWMjFIMjMuMjVWNi43NUgyMS43NVpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgLz5cbiAgICA8cGF0aFxuICAgICAgZD1cIk0xMC41IDE0LjE3OEMxMi4zNjEgMTQuMTc4IDEzLjg3NSAxMi41MzEgMTMuODc1IDEwLjUwNkMxMy44NzUgOC40ODEgMTIuMzYxIDYuODM0IDEwLjUgNi44MzRDOC42MzkgNi44MzQgNy4xMjUgOC40ODEgNy4xMjUgMTAuNTA2QzcuMTI1IDEyLjUzMSA4LjYzOSAxNC4xNzggMTAuNSAxNC4xNzhaTTEwLjUgOC4zMzVDMTEuNTM0IDguMzM1IDEyLjM3NSA5LjMwOSAxMi4zNzUgMTAuNTA3QzEyLjM3NSAxMS43MDUgMTEuNTM0IDEyLjY3OSAxMC41IDEyLjY3OUM5LjQ2NiAxMi42NzkgOC42MjUgMTEuNzA1IDguNjI1IDEwLjUwN0M4LjYyNSA5LjMwOSA5LjQ2NiA4LjMzNSAxMC41IDguMzM1WlwiXG4gICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAvPlxuICAgIDxwYXRoIGQ9XCJNMy43NSA2LjM3NUg1LjI1VjE0LjYyNUgzLjc1VjYuMzc1WlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiAvPlxuICAgIDxwYXRoIGQ9XCJNMTUuNzUgNi4zNzVIMTcuMjVWMTQuNjI1SDE1Ljc1VjYuMzc1WlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBQYXlvdXRSZXF1ZXN0SWNvbiA9ICgpID0+IChcbiAgPHN2Z1xuICAgIHdpZHRoPVwiMTZcIlxuICAgIGhlaWdodD1cIjE2XCJcbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICBmaWxsPVwibm9uZVwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gID5cbiAgICA8cGF0aFxuICAgICAgZD1cIk0yMC42MjUgMi42MjVIMy4zNzVDMi45NjAxNiAyLjYyNSAyLjYyNSAyLjk2MDE2IDIuNjI1IDMuMzc1VjIwLjYyNUMyLjYyNSAyMS4wMzk4IDIuOTYwMTYgMjEuMzc1IDMuMzc1IDIxLjM3NUgyMC42MjVDMjEuMDM5OCAyMS4zNzUgMjEuMzc1IDIxLjAzOTggMjEuMzc1IDIwLjYyNVYzLjM3NUMyMS4zNzUgMi45NjAxNiAyMS4wMzk4IDIuNjI1IDIwLjYyNSAyLjYyNVpNMTkuNjg3NSAxMy41SDEyLjM3NVYxMC41SDE5LjY4NzVWMTMuNVpNMTkuNjg3NSAxOS42ODc1SDQuMzEyNVY0LjMxMjVIMTkuNjg3NVY5SDExLjYyNUMxMS4yMTAyIDkgMTAuODc1IDkuMzM1MTYgMTAuODc1IDkuNzVWMTQuMjVDMTAuODc1IDE0LjY2NDggMTEuMjEwMiAxNSAxMS42MjUgMTVIMTkuNjg3NVYxOS42ODc1Wk0xMy41OTM4IDEyQzEzLjU5MzggMTIuMjQ4NiAxMy42OTI1IDEyLjQ4NzEgMTMuODY4MyAxMi42NjI5QzE0LjA0NDIgMTIuODM4NyAxNC4yODI2IDEyLjkzNzUgMTQuNTMxMiAxMi45Mzc1QzE0Ljc3OTkgMTIuOTM3NSAxNS4wMTgzIDEyLjgzODcgMTUuMTk0MiAxMi42NjI5QzE1LjM3IDEyLjQ4NzEgMTUuNDY4OCAxMi4yNDg2IDE1LjQ2ODggMTJDMTUuNDY4OCAxMS43NTE0IDE1LjM3IDExLjUxMjkgMTUuMTk0MiAxMS4zMzcxQzE1LjAxODMgMTEuMTYxMyAxNC43Nzk5IDExLjA2MjUgMTQuNTMxMiAxMS4wNjI1QzE0LjI4MjYgMTEuMDYyNSAxNC4wNDQyIDExLjE2MTMgMTMuODY4MyAxMS4zMzcxQzEzLjY5MjUgMTEuNTEyOSAxMy41OTM4IDExLjc1MTQgMTMuNTkzOCAxMlpcIlxuICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgR3JvdXAgPSAoKSA9PiAoXG4gIDxzdmdcbiAgICB3aWR0aD1cIjE2XCJcbiAgICBoZWlnaHQ9XCIxNlwiXG4gICAgdmlld0JveD1cIjAgMCAyNSAyNFwiXG4gICAgZmlsbD1cIm5vbmVcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICA+XG4gICAgPHBhdGhcbiAgICAgIGQ9XCJNMTcuNDU0MiAxMS4wNDhDMTguMDYzMiAxMC4wMTAxIDE4LjMyNjIgOC44MDUyOCAxOC4yMDUyIDcuNjA3OTdDMTguMDI2MiA1LjgyMzk3IDE3LjAzMDIgNC4yNDY5NyAxNS40MDIyIDMuMTY3OTdMMTQuMjk3MiA0LjgzMzk3QzE1LjQxNjIgNS41NzU5NyAxNi4wOTcyIDYuNjMyOTcgMTYuMjE1MiA3LjgwNzk3QzE2LjI2OTYgOC4zNTQwNyAxNi4yMDE2IDguOTA1NDMgMTYuMDE2MiA5LjQyMTk1QzE1LjgzMDcgOS45Mzg0NyAxNS41MzI1IDEwLjQwNzIgMTUuMTQzMiAxMC43OTRMMTMuOTUxMiAxMS45ODZMMTUuNTY5MiAxMi40NjFDMTkuODAxMiAxMy43MDEgMTkuODUwMiAxNy45NTcgMTkuODUwMiAxOEgyMS44NTAyQzIxLjg1MDIgMTYuMjExIDIwLjg5NDIgMTIuNzE1IDE3LjQ1NDIgMTEuMDQ4WlwiXG4gICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAvPlxuICAgIDxwYXRoXG4gICAgICBkPVwiTTEwLjM1MDEgMTJDMTIuNTU2MSAxMiAxNC4zNTAxIDEwLjIwNiAxNC4zNTAxIDhDMTQuMzUwMSA1Ljc5NCAxMi41NTYxIDQgMTAuMzUwMSA0QzguMTQ0MSA0IDYuMzUwMSA1Ljc5NCA2LjM1MDEgOEM2LjM1MDEgMTAuMjA2IDguMTQ0MSAxMiAxMC4zNTAxIDEyWk0xMC4zNTAxIDZDMTEuNDUzMSA2IDEyLjM1MDEgNi44OTcgMTIuMzUwMSA4QzEyLjM1MDEgOS4xMDMgMTEuNDUzMSAxMCAxMC4zNTAxIDEwQzkuMjQ3MSAxMCA4LjM1MDEgOS4xMDMgOC4zNTAxIDhDOC4zNTAxIDYuODk3IDkuMjQ3MSA2IDEwLjM1MDEgNlpNMTEuODUwMSAxM0g4Ljg1MDFDNS41NDExIDEzIDIuODUwMSAxNS42OTEgMi44NTAxIDE5VjIwSDQuODUwMVYxOUM0Ljg1MDEgMTYuNzk0IDYuNjQ0MSAxNSA4Ljg1MDEgMTVIMTEuODUwMUMxNC4wNTYxIDE1IDE1Ljg1MDEgMTYuNzk0IDE1Ljg1MDEgMTlWMjBIMTcuODUwMVYxOUMxNy44NTAxIDE1LjY5MSAxNS4xNTkxIDEzIDExLjg1MDEgMTNaXCJcbiAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCAnLi9sb2FkZXIubGVzcyc7XG5cbmNvbnN0IExvYWRlciA9ICh7IHNwaW5uaW5nID0gZmFsc2UsIGZ1bGxTY3JlZW4gPSBmYWxzZSB9OiBhbnkpID0+IChcbiAgPGRpdlxuICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnbG9hZGVyJywge1xuICAgICAgaGlkZGVuOiAhc3Bpbm5pbmcsXG4gICAgICBmdWxsU2NyZWVuXG4gICAgfSl9XG4gID5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndhcnBwZXJcIj5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCIgLz4gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj48aW1nIHNyYz1cIi9sb2FkaW5nLWljby5naWZcIiB3aWR0aD1cIjY1cHhcIiBhbHQ9XCJcIiAvPjwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tICdhbnRkJztcblxuaW1wb3J0ICcuL2Jhbm5lci5sZXNzJztcbmltcG9ydCB7IElCYW5uZXIgfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBiYW5uZXJzOiBJQmFubmVyW107XG4gIHN0eWxlSW1hZ2U6IHsgW2tleTogc3RyaW5nXTogYW55IH07XG4gIGNsYXNzbmFtZXM/OiBzdHJpbmc7XG59XG5jb25zdCByZW5kZXJCYW5uZXIgPSAoYmFubmVyOiBJQmFubmVyLCBzdHlsZUltYWdlOiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSA9PiB7XG4gIGNvbnN0IHtcbiAgICB0eXBlLCBocmVmLCBfaWQsIHBob3RvLCBjb250ZW50SFRNTFxuICB9ID0gYmFubmVyO1xuICBpZiAodHlwZSA9PT0gJ2h0bWwnICYmIGNvbnRlbnRIVE1MKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWRhbmdlclxuICAgIHJldHVybiA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY29udGVudEhUTUwgfX0gc3R5bGU9e3N0eWxlSW1hZ2UgfHwge319IC8+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8YSBocmVmPXtocmVmIHx8ICcjJ30gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiIGtleT17X2lkfT5cbiAgICAgIDxpbWdcbiAgICAgICAgc3JjPXtwaG90byAmJiBwaG90by51cmx9XG4gICAgICAgIGFsdD1cIlwiXG4gICAgICAgIHN0eWxlPXtzdHlsZUltYWdlIHx8IHt9fVxuICAgICAgLz5cbiAgICA8L2E+XG4gICk7XG59O1xuY29uc3QgQmFubmVyID0gKHsgYmFubmVycywgc3R5bGVJbWFnZSwgY2xhc3NuYW1lcyB9OiBJUHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICB7YmFubmVycyAmJiBiYW5uZXJzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgPENhcm91c2VsIGF1dG9wbGF5IGFycm93cyBkb3RzPXtmYWxzZX0gZWZmZWN0PVwiZmFkZVwiIGNsYXNzTmFtZT17Y2xhc3NuYW1lc30+XG4gICAgICAgIHtiYW5uZXJzLm1hcCgoaXRlbSkgPT4gKHJlbmRlckJhbm5lcihpdGVtLCBzdHlsZUltYWdlKVxuICAgICAgICApKX1cbiAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgKX1cbiAgPC9kaXY+XG4pO1xuXG5CYW5uZXIuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc25hbWVzOiAnJ1xufTtcbmV4cG9ydCBkZWZhdWx0IEJhbm5lcjtcbiIsImltcG9ydCB7IFBhZ2VIZWFkZXIsIERpdmlkZXIgfSBmcm9tICdhbnRkJztcblxuaW50ZXJmYWNlIFAge1xuICB0aXRsZTogYW55O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzXG4gIGV4dHJhPzogYW55O1xufVxuXG5leHBvcnQgZGVmYXVsdCAoeyB0aXRsZSwgZXh0cmEgfSA6IFApID0+IChcbiAgPD5cbiAgICA8UGFnZUhlYWRlciB0aXRsZT17dGl0bGV9IGV4dHJhPXtleHRyYX0gLz5cbiAgICA8RGl2aWRlciAvPlxuICA8Lz5cbik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSVBlcmZvcm1lciwgR0VOREVSLCBJQmFubmVyIH0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7XG4gIENhcmQsIFNwYWNlLCBSb3csIENvbCwgUGFnaW5hdGlvblxufSBmcm9tICdhbnRkJztcbmltcG9ydCB7XG4gIE1hbGVTaWduSWNvbixcbiAgRmVtYWxlU2lnbkljb24sXG4gIFRyYW5zZ2VuZGVySWNvblxufSBmcm9tICdAY29tcG9uZW50cy9jb21tb24vYmFzZS9pY29ucyc7XG5pbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgZ2VuZXJhdGVVdWlkIH0gZnJvbSAnc3JjL2xpYic7XG5pbXBvcnQge1xuICBIZWFydEZpbGxlZCxcbiAgSGVhcnRPdXRsaW5lZCxcbiAgRXllT3V0bGluZWQsXG4gIExvY2tPdXRsaW5lZFxufSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XG5pbXBvcnQgJy4vaW5kZXgubGVzcyc7XG5pbXBvcnQgeyBjaHVuayB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgQmFubmVyIGZyb20gJ0Bjb21wb25lbnRzL2NvbW1vbi9sYXlvdXQvYmFubmVyJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnQGNvbXBvbmVudHMvY29tbW9uL2Jhc2UvbG9hZGVyJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBsb2dnZWRJbj86IGJvb2xlYW47XG4gIHNldEZpbHRlcj86IEZ1bmN0aW9uO1xuICBsaW1pdD86IG51bWJlcjtcbiAgb2Zmc2V0PzogbnVtYmVyO1xuICBkYXRhOiBJUGVyZm9ybWVyW107XG4gIHRvdGFsPzogbnVtYmVyO1xuICBzdWNjZXNzPzogYm9vbGVhbjtcbiAgYmFubmVycz86IFJlY29yZDxzdHJpbmcsIElCYW5uZXJbXT47XG4gIHNlYXJjaGluZz86IGJvb2xlYW47XG4gIHRpdGxlPzogc3RyaW5nIHwgc3RyaW5nW107XG4gIG9uTGlrZT86IEZ1bmN0aW9uO1xuICBpc1BhZ2U/OiBib29sZWFuO1xuICBwbGFjZWhvbGRlckF2YXRhclVybD86IHN0cmluZztcbiAgcmVuZGVyPzogKHBlcmZvcm1lcjogSVBlcmZvcm1lcikgPT4gUmVhY3QuUmVhY3ROb2RlO1xufVxuXG5jb25zdCByZW5kZXJUaXRsZSA9IChnZW5kZXI6IEdFTkRFUiwgbmFtZTogc3RyaW5nKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwicC10aXRsZVwiPlxuICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiA1IH19PntuYW1lfTwvc3Bhbj5cbiAgICB7Z2VuZGVyID09PSAnbWFsZScgPyAoXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJhbnRpY29uXCI+XG4gICAgICAgIDxNYWxlU2lnbkljb24gLz5cbiAgICAgIDwvc3Bhbj5cbiAgICApIDogZ2VuZGVyID09PSAnZmVtYWxlJyA/IChcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFudGljb25cIj5cbiAgICAgICAgPEZlbWFsZVNpZ25JY29uIC8+XG4gICAgICA8L3NwYW4+XG4gICAgKSA6IChcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFudGljb25cIj5cbiAgICAgICAgPFRyYW5zZ2VuZGVySWNvbiAvPlxuICAgICAgPC9zcGFuPlxuICAgICl9XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgcmVuZGVyVGFncyA9ICh0YWdzOiBzdHJpbmdbXSkgPT4gKFxuICA8U3BhY2UgY2xhc3NOYW1lPVwidGFnc1wiIHdyYXAgc2l6ZT17WzUsIDJdfT5cbiAgICB7dGFncy5tYXAoKHRhZykgPT4gKFxuICAgICAgPExpbmtcbiAgICAgICAgaHJlZj17eyBwYXRobmFtZTogJy90YWcnLCBxdWVyeTogeyB0YWdzOiB0YWcgfSB9fVxuICAgICAgICBrZXk9e3RhZ31cbiAgICAgICAgYXM9e2AvdGFnLyR7dGFnfWB9XG4gICAgICA+XG4gICAgICAgIDxhPlxuICAgICAgICAgICNcbiAgICAgICAgICB7dGFnfVxuICAgICAgICA8L2E+XG4gICAgICA8L0xpbms+XG4gICAgKSl9XG4gIDwvU3BhY2U+XG4pO1xuXG5pbnRlcmZhY2UgSUdyaWRDYXJkIHtcbiAgcGVyZm9ybWVyOiBJUGVyZm9ybWVyO1xuICBsb2dnZWRJbjogYm9vbGVhbjtcbiAgb25MaWtlOiBhbnk7XG4gIGNsYXNzTmFtZTogc3RyaW5nO1xuICBwbGFjZWhvbGRlckF2YXRhclVybDogc3RyaW5nO1xufVxuZXhwb3J0IGNvbnN0IEdyaWRDYXJkID0gKHtcbiAgcGVyZm9ybWVyLFxuICBsb2dnZWRJbixcbiAgb25MaWtlLFxuICBjbGFzc05hbWUsXG4gIHBsYWNlaG9sZGVyQXZhdGFyVXJsXG59OiBJR3JpZENhcmQpID0+IHtcbiAgY29uc3QgeyBpc09ubGluZSwgc3RyZWFtaW5nU3RhdHVzIH0gPSBwZXJmb3JtZXI7XG4gIGNvbnN0IHN0YXR1c0NsYXNzTmFtZXMgPSBbJ3Atc3RhdHVzJ107XG4gIGxldCBzdGF0dXMgPSAnb2ZmbGluZSc7XG4gIGlmIChpc09ubGluZSkge1xuICAgIHN3aXRjaCAoc3RyZWFtaW5nU3RhdHVzKSB7XG4gICAgICBjYXNlICdwcml2YXRlJzpcbiAgICAgICAgc3RhdHVzQ2xhc3NOYW1lcy5wdXNoKCdwcml2YXRlJyk7XG4gICAgICAgIHN0YXR1cyA9ICdwcml2YXRlIGNoYXQnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2dyb3VwJzpcbiAgICAgICAgc3RhdHVzQ2xhc3NOYW1lcy5wdXNoKCdncm91cCcpO1xuICAgICAgICBzdGF0dXMgPSAnZ3JvdXAgY2hhdCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncHVibGljJzpcbiAgICAgICAgc3RhdHVzID0gJ2xpdmUnO1xuICAgICAgICBzdGF0dXNDbGFzc05hbWVzLnB1c2goJ29ubGluZScpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHN0YXR1cyA9ICdvbmxpbmUnO1xuICAgICAgICBzdGF0dXNDbGFzc05hbWVzLnB1c2goJ29ubGluZScpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc3RhdHVzQ2xhc3NOYW1lcy5wdXNoKCdvZmZsaW5lJyk7XG4gIH1cbiAgY29uc3QgZGVmYXVsdFBsYWNlaG9sZGVyQXZhdGFyVXJsID0gcGxhY2Vob2xkZXJBdmF0YXJVcmwgfHwgJy9kZWZhdWx0LXVzZXItaWNvbi5wbmcnO1xuXG4gIHJldHVybiAoXG4gICAgPENhcmQuR3JpZCBjbGFzc05hbWU9e2NsYXNzTmFtZX0ga2V5PXtwZXJmb3JtZXIuX2lkfSBob3ZlcmFibGU9e2ZhbHNlfT5cbiAgICAgIHtwZXJmb3JtZXIuaXNCbG9ja2VkICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9ja2VkLXRodW1iXCI+XG4gICAgICAgICAgPExvY2tPdXRsaW5lZCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8TGlua1xuICAgICAgICBocmVmPXt7XG4gICAgICAgICAgcGF0aG5hbWU6ICcvc3RyZWFtJyxcbiAgICAgICAgICBxdWVyeTogeyBwZXJmb3JtZXI6IEpTT04uc3RyaW5naWZ5KHBlcmZvcm1lcikgfVxuICAgICAgICB9fVxuICAgICAgICBhcz17YC9wcm9maWxlLyR7cGVyZm9ybWVyLnVzZXJuYW1lfWB9XG4gICAgICA+XG4gICAgICAgIDxhPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGVyZm9ybWVyLWF2YXRhclwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWFnZS1wZXJmb3JtZXJcIlxuICAgICAgICAgICAgICBzcmM9e1xuICAgICAgICAgICAgICAgIHR5cGVvZiBwZXJmb3JtZXIuYXZhdGFyID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgICYmIHBlcmZvcm1lci5hdmF0YXIubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgPyBwZXJmb3JtZXIuYXZhdGFyXG4gICAgICAgICAgICAgICAgICA6IGRlZmF1bHRQbGFjZWhvbGRlckF2YXRhclVybFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdGF0dXNDbGFzc05hbWVzLmpvaW4oJyAnKX0+e3N0YXR1c308L3NwYW4+XG4gICAgICAgICAgICB7cmVuZGVyVGl0bGUocGVyZm9ybWVyLmdlbmRlciwgcGVyZm9ybWVyLnVzZXJuYW1lKX1cbiAgICAgICAgICAgIHtwZXJmb3JtZXI/LnN0YXRzPy52aWV3cyA+IDAgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtdmlld2VyXCI+XG4gICAgICAgICAgICAgICAgPEV5ZU91dGxpbmVkIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiA1IH19IC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+e3BlcmZvcm1lci5zdGF0cy52aWV3c308L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwZXJmb3JtZXItYm90dG9tXCI+XG4gICAgICAgIDxSb3cganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIj5cbiAgICAgICAgICA8Q29sPlxuICAgICAgICAgICAgPGRpdj57cGVyZm9ybWVyLnRhZ3MgJiYgcmVuZGVyVGFncyhwZXJmb3JtZXIudGFncyl9PC9kaXY+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbD5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgYXJpYS1oaWRkZW5cbiAgICAgICAgICAgICAgaGlkZGVuPXshbG9nZ2VkSW59XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtZmF2b3JpdGVcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkxpa2UocGVyZm9ybWVyKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3BlcmZvcm1lci5pc0Zhdm9yaXRlID8gKFxuICAgICAgICAgICAgICAgIDxIZWFydEZpbGxlZCBjbGFzc05hbWU9XCJpY29uXCIgLz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8SGVhcnRPdXRsaW5lZCBjbGFzc05hbWU9XCJpY29uXCIgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dC1tZVwiPntwZXJmb3JtZXI/LmFib3V0TWV9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0NhcmQuR3JpZD5cbiAgKTtcbn07XG5cbmNvbnN0IFBlcmZvcm1lckdyaWQgPSAoe1xuICBkYXRhLFxuICBzZWFyY2hpbmcsXG4gIHN1Y2Nlc3MsXG4gIHRpdGxlLFxuICBvbkxpa2UsXG4gIGxvZ2dlZEluLFxuICBpc1BhZ2UsXG4gIG9mZnNldCxcbiAgbGltaXQsXG4gIHRvdGFsLFxuICBzZXRGaWx0ZXIsXG4gIHBsYWNlaG9sZGVyQXZhdGFyVXJsLFxuICBiYW5uZXJzLFxuICByZW5kZXJcbn06IElQcm9wcykgPT4ge1xuICBjb25zdCB7IHRvcEJhbm5lcnMsIHJpZ2h0QmFubmVycywgYm90dG9tQmFubmVycyB9ID0gYmFubmVycztcbiAgY29uc3QgUm93R3JpZCA9ICh7IGRhdGFTb3VyY2UgfTogeyBkYXRhU291cmNlOiBJUGVyZm9ybWVyW10gfSkgPT4gKFxuICAgIDxSb3cgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgIHtkYXRhU291cmNlXG4gICAgICAgICYmIGRhdGFTb3VyY2UubGVuZ3RoID4gMFxuICAgICAgICAmJiBkYXRhU291cmNlLm1hcCgocGVyZm9ybWVyOiBJUGVyZm9ybWVyKSA9PiAoXG4gICAgICAgICAgPEdyaWRDYXJkXG4gICAgICAgICAgICBwbGFjZWhvbGRlckF2YXRhclVybD17cGxhY2Vob2xkZXJBdmF0YXJVcmx9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwZXJmb3JtZXItYm94XCJcbiAgICAgICAgICAgIGtleT17cGVyZm9ybWVyLl9pZH1cbiAgICAgICAgICAgIHBlcmZvcm1lcj17cGVyZm9ybWVyfVxuICAgICAgICAgICAgbG9nZ2VkSW49e2xvZ2dlZElufVxuICAgICAgICAgICAgb25MaWtlPXtvbkxpa2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgPC9Sb3c+XG4gICk7XG5cbiAgY29uc3QgcmVuZGVyR3JpZCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGxlbmd0aCB9ID0gZGF0YTtcbiAgICBpZiAobGVuZ3RoIDw9IDEyKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Um93IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAge3JpZ2h0QmFubmVycyAmJiByaWdodEJhbm5lcnMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxDb2wgbGc9ezE2fSBtZD17MTZ9IHhzPXsyNH0+XG4gICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgIHtkYXRhXG4gICAgICAgICAgICAgICAgICAgICYmIGRhdGEubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICAmJiBkYXRhLm1hcCgocGVyZm9ybWVyOiBJUGVyZm9ybWVyKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWRDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlckF2YXRhclVybD17cGxhY2Vob2xkZXJBdmF0YXJVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwZXJmb3JtZXItYm94IHBlcmZvcm1lci1ib3gtNC1pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cGVyZm9ybWVyLl9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcmZvcm1lcj17cGVyZm9ybWVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VkSW49e2xvZ2dlZElufVxuICAgICAgICAgICAgICAgICAgICAgICAgb25MaWtlPXsoKSA9PiBvbkxpa2UocGVyZm9ybWVyKX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDxDb2wgbGc9ezh9IG1kPXs4fSB4cz17MjR9PlxuICAgICAgICAgICAgICAgIDxCYW5uZXJcbiAgICAgICAgICAgICAgICAgIGNsYXNzbmFtZXM9XCJyaWdodC1iYW5uZXJzXCJcbiAgICAgICAgICAgICAgICAgIGJhbm5lcnM9e3JpZ2h0QmFubmVyc31cbiAgICAgICAgICAgICAgICAgIHN0eWxlSW1hZ2U9e3sgcGFkZGluZzogJzEwcHgnLCB3aWR0aDogJzEwMCUnIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgJiYgZGF0YS5sZW5ndGggPiAwXG4gICAgICAgICAgICAmJiBkYXRhLm1hcCgocGVyZm9ybWVyOiBJUGVyZm9ybWVyKSA9PiAoXG4gICAgICAgICAgICAgIDxHcmlkQ2FyZFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyQXZhdGFyVXJsPXtwbGFjZWhvbGRlckF2YXRhclVybH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwZXJmb3JtZXItYm94XCJcbiAgICAgICAgICAgICAgICBrZXk9e3BlcmZvcm1lci5faWR9XG4gICAgICAgICAgICAgICAgcGVyZm9ybWVyPXtwZXJmb3JtZXJ9XG4gICAgICAgICAgICAgICAgbG9nZ2VkSW49e2xvZ2dlZElufVxuICAgICAgICAgICAgICAgIG9uTGlrZT17KCkgPT4gb25MaWtlKHBlcmZvcm1lcil9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKVxuICAgICAgICAgICl9XG4gICAgICAgIDwvUm93PlxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGxlbmd0aCA+IDEyICYmIGxlbmd0aCA8PSAyNCkge1xuICAgICAgY29uc3QgZGF0YUNodW5rID0gY2h1bmsoZGF0YSwgMTIpO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICB7cmlnaHRCYW5uZXJzICYmIHJpZ2h0QmFubmVycy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPFJvdyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgIDxDb2wgbGc9ezE2fSBtZD17MTZ9IHhzPXsyNH0+XG4gICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICB7ZGF0YUNodW5rWzBdXG4gICAgICAgICAgICAgICAgICAgICAgJiYgZGF0YUNodW5rWzBdLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAmJiBkYXRhQ2h1bmtbMF0ubWFwKChwZXJmb3JtZXI6IElQZXJmb3JtZXIpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkQ2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlckF2YXRhclVybD17cGxhY2Vob2xkZXJBdmF0YXJVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBlcmZvcm1lci1ib3ggcGVyZm9ybWVyLWJveC00LWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3BlcmZvcm1lci5faWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBlcmZvcm1lcj17cGVyZm9ybWVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dnZWRJbj17bG9nZ2VkSW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uTGlrZT17KCkgPT4gb25MaWtlKHBlcmZvcm1lcil9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPENvbCBsZz17OH0gbWQ9ezh9IHhzPXsyNH0+XG4gICAgICAgICAgICAgICAgICB7cmlnaHRCYW5uZXJzICYmIHJpZ2h0QmFubmVycy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgPEJhbm5lclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzbmFtZXM9XCJyaWdodC1iYW5uZXJzXCJcbiAgICAgICAgICAgICAgICAgICAgICBiYW5uZXJzPXtyaWdodEJhbm5lcnN9XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGVJbWFnZT17eyBwYWRkaW5nOiAnMTBweCcsIHdpZHRoOiAnMTAwJScgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICA8Um93R3JpZCBkYXRhU291cmNlPXtkYXRhQ2h1bmtbMV19IC8+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFJvd0dyaWQgZGF0YVNvdXJjZT17ZGF0YX0gLz5cbiAgICAgICAgICApfVxuICAgICAgICA8Lz5cbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChsZW5ndGggPiAyNCAmJiBsZW5ndGggPD0gMzYpIHtcbiAgICAgIGNvbnN0IGRhdGFDaHVuayA9IGNodW5rKGRhdGEsIDEyKTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPFJvd0dyaWQgZGF0YVNvdXJjZT17ZGF0YUNodW5rWzBdfSAvPlxuICAgICAgICAgIHtyaWdodEJhbm5lcnMgJiYgcmlnaHRCYW5uZXJzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICA8Um93IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAgICAgIDxDb2wgeGw9ezE2fSBsZz17MTh9IG1kPXsxOH0geHM9ezI0fT5cbiAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAge2RhdGFDaHVua1sxXVxuICAgICAgICAgICAgICAgICAgICAmJiBkYXRhQ2h1bmtbMV0ubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICAmJiBkYXRhQ2h1bmtbMV0ubWFwKChwZXJmb3JtZXI6IElQZXJmb3JtZXIpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZENhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyQXZhdGFyVXJsPXtwbGFjZWhvbGRlckF2YXRhclVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBlcmZvcm1lci1ib3ggcGVyZm9ybWVyLWJveC00LWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwZXJmb3JtZXIuX2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyZm9ybWVyPXtwZXJmb3JtZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZWRJbj17bG9nZ2VkSW59XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkxpa2U9eygpID0+IG9uTGlrZShwZXJmb3JtZXIpfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgPENvbCB4bD17OH0gbGc9ezZ9IG1kPXs2fSB4cz17MjR9PlxuICAgICAgICAgICAgICAgIDxCYW5uZXJcbiAgICAgICAgICAgICAgICAgIGNsYXNzbmFtZXM9XCJyaWdodC1iYW5uZXJzXCJcbiAgICAgICAgICAgICAgICAgIGJhbm5lcnM9e3JpZ2h0QmFubmVyc31cbiAgICAgICAgICAgICAgICAgIHN0eWxlSW1hZ2U9e3sgcGFkZGluZzogJzEwcHgnLCB3aWR0aDogJzEwMCUnIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFJvd0dyaWQgZGF0YVNvdXJjZT17ZGF0YUNodW5rWzFdfSAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPFJvd0dyaWQgZGF0YVNvdXJjZT17ZGF0YUNodW5rWzJdfSAvPlxuICAgICAgICA8Lz5cbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChsZW5ndGggPiAzNikge1xuICAgICAgY29uc3QgZGF0YUNodW5rID0gY2h1bmsoZGF0YSwgMTIpO1xuICAgICAgY29uc3QgbGFzdERhdGFDaHVuayA9IGRhdGFDaHVuay5zbGljZSgzKTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPFJvd0dyaWQgZGF0YVNvdXJjZT17ZGF0YUNodW5rWzBdfSAvPlxuICAgICAgICAgIHtyaWdodEJhbm5lcnMgJiYgcmlnaHRCYW5uZXJzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICA8Um93IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAgICAgIDxDb2wgeGw9ezE2fSBsZz17MTh9IG1kPXsxOH0geHM9ezI0fT5cbiAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAge2RhdGFDaHVua1sxXVxuICAgICAgICAgICAgICAgICAgICAmJiBkYXRhQ2h1bmtbMV0ubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICAmJiBkYXRhQ2h1bmtbMV0ubWFwKChwZXJmb3JtZXI6IElQZXJmb3JtZXIpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZENhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyQXZhdGFyVXJsPXtwbGFjZWhvbGRlckF2YXRhclVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBlcmZvcm1lci1ib3ggcGVyZm9ybWVyLWJveC00LWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwZXJmb3JtZXIuX2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyZm9ybWVyPXtwZXJmb3JtZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZWRJbj17bG9nZ2VkSW59XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkxpa2U9eygpID0+IG9uTGlrZShwZXJmb3JtZXIpfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgPENvbCB4bD17OH0gbGc9ezZ9IG1kPXs2fSB4cz17MjR9PlxuICAgICAgICAgICAgICAgIDxCYW5uZXJcbiAgICAgICAgICAgICAgICAgIGNsYXNzbmFtZXM9XCJyaWdodC1iYW5uZXJzXCJcbiAgICAgICAgICAgICAgICAgIGJhbm5lcnM9e3JpZ2h0QmFubmVyc31cbiAgICAgICAgICAgICAgICAgIHN0eWxlSW1hZ2U9e3sgcGFkZGluZzogJzEwcHgnLCB3aWR0aDogJzEwMCUnIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFJvd0dyaWQgZGF0YVNvdXJjZT17ZGF0YUNodW5rWzFdfSAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPFJvd0dyaWQgZGF0YVNvdXJjZT17ZGF0YUNodW5rWzJdfSAvPlxuICAgICAgICAgIHtsYXN0RGF0YUNodW5rLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICYmIGxhc3REYXRhQ2h1bmsubWFwKCh2KSA9PiAoXG4gICAgICAgICAgICAgIDxSb3dHcmlkIGtleT17Z2VuZXJhdGVVdWlkKCl9IGRhdGFTb3VyY2U9e3Z9IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC8+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gPD48Lz47XG4gIH07XG5cbiAgY29uc3QgYWN0aW9ucyA9IHNldEZpbHRlciAmJiB0b3RhbCA+IDBcbiAgICA/IFtcbiAgICAgIHRvdGFsID4gbGltaXQgJiYgKFxuICAgICAgICA8UGFnaW5hdGlvblxuICAgICAgICAgIGRpc2FibGVkPXtzZWFyY2hpbmd9XG4gICAgICAgICAgY3VycmVudD17TWF0aC5yb3VuZChvZmZzZXQgLyBsaW1pdCkgKyAxfVxuICAgICAgICAgIHBhZ2VTaXplPXtsaW1pdH1cbiAgICAgICAgICB0b3RhbD17dG90YWx9XG4gICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICBvbkNoYW5nZT17KHBhZ2UpID0+IHNldEZpbHRlcignb2Zmc2V0JywgKHBhZ2UgLSAxKSAqIGxpbWl0KX1cbiAgICAgICAgICBzaG93U2l6ZUNoYW5nZXI9e2ZhbHNlfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIF1cbiAgICA6IFtdO1xuXG4gIGlmIChyZW5kZXIpIHtcbiAgICAvKipcbiAgICAgKiBwbGFjZWhvbGRlckF2YXRhclVybCBwcm9wc1xuICAgICAqL1xuICAgIHJldHVybiAoXG4gICAgICA8Q2FyZFxuICAgICAgICBjbGFzc05hbWU9XCJwZXJmb3JtZXItZ3JpZFwiXG4gICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgYm9yZGVyZWQ9e2ZhbHNlfVxuICAgICAgICBob3ZlcmFibGU9e2ZhbHNlfVxuICAgICAgICBib2R5U3R5bGU9e3sgcGFkZGluZzogJzAnIH19XG4gICAgICAgIGFjdGlvbnM9e2FjdGlvbnN9XG4gICAgICA+XG4gICAgICAgIDxMb2FkZXIgc3Bpbm5pbmc9e3NlYXJjaGluZ30gLz5cbiAgICAgICAge2RhdGEubGVuZ3RoID4gMCAmJiBkYXRhLm1hcCgocGVyZm9ybWVyKSA9PiByZW5kZXIocGVyZm9ybWVyKSl9XG4gICAgICA8L0NhcmQ+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtpc1BhZ2UgJiYgdG9wQmFubmVycz8ubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDxCYW5uZXJcbiAgICAgICAgICBiYW5uZXJzPXt0b3BCYW5uZXJzfVxuICAgICAgICAgIHN0eWxlSW1hZ2U9e3sgcGFkZGluZzogJzEwcHgnLCB3aWR0aDogJzEwMCUnIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAgPENhcmRcbiAgICAgICAgY2xhc3NOYW1lPVwicGVyZm9ybWVyLWdyaWRcIlxuICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgIGJvcmRlcmVkPXtmYWxzZX1cbiAgICAgICAgaG92ZXJhYmxlPXtmYWxzZX1cbiAgICAgICAgYm9keVN0eWxlPXt7IHBhZGRpbmc6ICcwJyB9fVxuICAgICAgICBhY3Rpb25zPXthY3Rpb25zfVxuICAgICAgPlxuICAgICAgICA8TG9hZGVyIHNwaW5uaW5nPXtzZWFyY2hpbmd9IC8+XG4gICAgICAgIHtzdWNjZXNzXG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5lc3RlZC10ZXJuYXJ5XG4gICAgICAgICAgJiYgKHRvdGFsID4gMCA/IChcbiAgICAgICAgICAgIGlzUGFnZSA/IChcbiAgICAgICAgICAgICAgcmVuZGVyR3JpZCgpXG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICBkYXRhLm1hcCgocGVyZm9ybWVyKSA9PiAoXG4gICAgICAgICAgICAgICAgPEdyaWRDYXJkXG4gICAgICAgICAgICAgICAgICBrZXk9e3BlcmZvcm1lcj8uX2lkfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJBdmF0YXJVcmw9e3BsYWNlaG9sZGVyQXZhdGFyVXJsfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGVyZm9ybWVyLWJveFwiXG4gICAgICAgICAgICAgICAgICBwZXJmb3JtZXI9e3BlcmZvcm1lcn1cbiAgICAgICAgICAgICAgICAgIGxvZ2dlZEluPXtsb2dnZWRJbn1cbiAgICAgICAgICAgICAgICAgIG9uTGlrZT17KHA6IElQZXJmb3JtZXIpID0+IG9uTGlrZShwKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFudC1jYXJkLWhlYWRcIj5ObyBtb2RlbCBmb3VuZC48L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgIDwvQ2FyZD5cbiAgICAgIHtpc1BhZ2UgJiYgYm90dG9tQmFubmVycz8ubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDxCYW5uZXJcbiAgICAgICAgICBiYW5uZXJzPXtib3R0b21CYW5uZXJzfVxuICAgICAgICAgIHN0eWxlSW1hZ2U9e3sgcGFkZGluZzogJzEwcHgnLCB3aWR0aDogJzEwMCUnIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblBlcmZvcm1lckdyaWQuZGVmYXVsdFByb3BzID0ge1xuICBsb2dnZWRJbjogZmFsc2UsXG4gIHNldEZpbHRlcjogbnVsbCxcbiAgbGltaXQ6IDAsXG4gIG9mZnNldDogMCxcbiAgdG90YWw6IDAsXG4gIHN1Y2Nlc3M6IGZhbHNlLFxuICBzZWFyY2hpbmc6IGZhbHNlLFxuICB0aXRsZTogJycsXG4gIG9uTGlrZTogbnVsbCxcbiAgcmVuZGVyOiBudWxsLFxuICBpc1BhZ2U6IGZhbHNlLFxuICBiYW5uZXJzOiB7fSxcbiAgcGxhY2Vob2xkZXJBdmF0YXJVcmw6ICcvbm8tYXZhdGFyLnBuZydcbn07XG5cbmNvbnN0IGJhbm5lclNlbGVjdGVyID0gKHN0YXRlKSA9PiBzdGF0ZS5iYW5uZXIubGlzdEJhbm5lcnMuZGF0YTtcbmNvbnN0IGZpbHRlckJhbm5lciA9IGNyZWF0ZVNlbGVjdG9yKGJhbm5lclNlbGVjdGVyLCAoYmFubmVycykgPT4ge1xuICBpZiAoIWJhbm5lcnMubGVuZ3RoKSByZXR1cm4ge307XG5cbiAgcmV0dXJuIHtcbiAgICB0b3BCYW5uZXJzOiBiYW5uZXJzLmZpbHRlcigoYikgPT4gYi5wb3NpdGlvbiA9PT0gJ3RvcCcpLFxuICAgIHJpZ2h0QmFubmVyczogYmFubmVycy5maWx0ZXIoKGIpID0+IGIucG9zaXRpb24gPT09ICdyaWdodCcpLFxuICAgIGJvdHRvbUJhbm5lcnM6IGJhbm5lcnMuZmlsdGVyKChiKSA9PiBiLnBvc2l0aW9uID09PSAnYm90dG9tJylcbiAgfTtcbn0pO1xuY29uc3QgbWFwU3RhdGVzID0gKHN0YXRlOiBhbnkpID0+ICh7XG4gIHBsYWNlaG9sZGVyQXZhdGFyVXJsOiBzdGF0ZS51aS5wbGFjZWhvbGRlckF2YXRhclVybCxcbiAgYmFubmVyczogZmlsdGVyQmFubmVyKHN0YXRlKVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVzKShQZXJmb3JtZXJHcmlkKTtcbiIsImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZTogRGF0ZSwgZm9ybWF0ID0gJ0REL01NL1lZWVkgSEg6bW06c3MnKSB7XG4gIHJldHVybiBtb21lbnQoZGF0ZSkuZm9ybWF0KGZvcm1hdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJEdXJhdGlvbihkdXJhdGlvbjogbnVtYmVyLCBmb3JtYXQgPSAnSEg6bW0nKSB7XG4gIHJldHVybiBtb21lbnRcbiAgICAudXRjKG1vbWVudC5kdXJhdGlvbihkdXJhdGlvbiwgJ21pbGxpc2Vjb25kcycpLmFzTWlsbGlzZWNvbmRzKCkpXG4gICAgLmZvcm1hdChmb3JtYXQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VBZ2UoZGF0ZTogc3RyaW5nLCBmb3JtYXQgPSAnTU1NTSBERCwgWVlZWScpIHtcbiAgcmV0dXJuIG1vbWVudChkYXRlKS5mb3JtYXQoZm9ybWF0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFnZShkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgcmV0dXJuIG1vbWVudCgpLmRpZmYobW9tZW50KGRhdGUpLmZvcm1hdCgnWVlZWS1NTS1ERCcpLCAneWVhcnMnKS50b1N0cmluZygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RHVyYXRpb24oczogbnVtYmVyKSB7XG4gIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcihzIC8gMzYwMCk7XG4gIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKChzIC0gaG91cnMgKiAzNjAwKSAvIDYwKTtcbiAgY29uc3Qgc2Vjb25kcyA9IHMgLSBob3VycyAqIDM2MDAgLSBtaW51dGVzICogNjA7XG4gIHJldHVybiBgJHtob3VycyA8IDEwID8gJzAnIDogJyd9JHtob3Vyc306JHtcbiAgICBtaW51dGVzIDwgMTAgPyAnMCcgOiAnJ1xuICB9JHttaW51dGVzfToke3NlY29uZHMgPCAxMCA/ICcwJyA6ICcnfSR7c2Vjb25kc31gO1xufVxuIiwiaW1wb3J0IHsgZ2V0R2xvYmFsQ29uZmlnIH0gZnJvbSAnQHNlcnZpY2VzL2NvbmZpZyc7XG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBSY0ZpbGUgfSBmcm9tICdhbnRkL2xpYi91cGxvYWQnO1xuXG5leHBvcnQgZnVuY3Rpb24gYmVmb3JlQXZhdGFyVXBsb2FkKGZpbGU6IFJjRmlsZSk6IGJvb2xlYW4ge1xuICBjb25zdCBleHQgPSBmaWxlLm5hbWUuc3BsaXQoJy4nKS5wb3AoKS50b0xvd2VyQ2FzZSgpO1xuICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgY29uc3QgaXNJbWFnZUFjY2VwdCA9IGNvbmZpZy5ORVhUX1BVQkxJQ19JTUFHRV9BQ0NQRVRcbiAgICAuc3BsaXQoJywnKVxuICAgIC5tYXAoKGl0ZW06IHN0cmluZykgPT4gaXRlbS50cmltKCkpXG4gICAgLmluZGV4T2YoYC4ke2V4dH1gKTtcbiAgaWYgKGlzSW1hZ2VBY2NlcHQgPT09IC0xKSB7XG4gICAgbWVzc2FnZS5lcnJvcihgWW91IGNhbiBvbmx5IHVwbG9hZCAke2NvbmZpZy5ORVhUX1BVQkxJQ19JTUFHRV9BQ0NQRVR9IGZpbGUhYCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgaXNMdDJNID0gZmlsZS5zaXplIC8gMTAyNCAvIDEwMjQgPCAoY29uZmlnLk5FWFRfUFVCTElDX01BWElNVU1fU0laRV9VUExPQURfQVZBVEFSIHx8IDIpO1xuICBpZiAoIWlzTHQyTSkge1xuICAgIG1lc3NhZ2UuZXJyb3IoXG4gICAgICBgSW1hZ2UgbXVzdCBzbWFsbGVyIHRoYW4gJHtjb25maWcuTkVYVF9QVUJMSUNfTUFYSU1VTV9TSVpFX1VQTE9BRF9BVkFUQVIgfHwgMn1NQiFgXG4gICAgKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vaW50ZXJuZXQnO1xuZXhwb3J0ICogZnJvbSAnLi9yZWR1eCc7XG5leHBvcnQgKiBmcm9tICcuL3N0cmluZyc7XG5leHBvcnQgKiBmcm9tICcuL2RhdGUnO1xuZXhwb3J0ICogZnJvbSAnLi9tZXNzYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vbGF5b3V0JztcbmV4cG9ydCAqIGZyb20gJy4vdXRpbHMnO1xuZXhwb3J0ICogZnJvbSAnLi9ydWxlcyc7XG5leHBvcnQgKiBmcm9tICcuL2ZpbGUnO1xuZXhwb3J0ICogZnJvbSAnLi9zdHJlYW0nO1xuIiwiY29uc3QgSU5URVJORVRfQ0hFQ0tfVVJMID0gJ2h0dHBzOi8vZ29vZ2xlLmNvbSc7XG5cbmV4cG9ydCBjb25zdCBpc0hhc0ludGVybmV0Q29ubmVjdGlvbiA9IGFzeW5jICgpOiBQcm9taXNlPGJvb2xlYW4+ID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChJTlRFUk5FVF9DSEVDS19VUkwsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NhY2hlLUNvbnRyb2wnOiAnbm8tY2FjaGUsIG5vLXN0b3JlLCBtdXN0LXJldmFsaWRhdGUnLFxuICAgICAgICBQcmFnbWE6ICduby1jYWNoZScsXG4gICAgICAgIEV4cGlyZXM6IDBcbiAgICAgIH0gYXMgYW55XG4gICAgfSk7XG4gICAgaWYgKFxuICAgICAgcmVzLnN0YXR1cyA9PT0gNDA0XG4gICAgICB8fCByZXMuc3RhdHVzID09PSA0MDFcbiAgICAgIHx8IHJlcy5zdGF0dXMgPT09IDQwM1xuICAgICAgfHwgcmVzLnN0YXR1cyA9PT0gNTAwXG4gICAgICB8fCAocmVzLnN0YXR1cyA+PSAyMDAgJiYgcmVzLnN0YXR1cyA8PSAzMDApXG4gICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0gY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5sb2coZXhjZXB0aW9uKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuIiwiZXhwb3J0IGNvbnN0IGZvcm1JdGVtTGF5b3V0ID0ge1xuICBsYWJlbENvbDoge1xuICAgIHhzOiB7XG4gICAgICBzcGFuOiAyNFxuICAgIH0sXG4gICAgc206IHtcbiAgICAgIHNwYW46IDEyXG4gICAgfVxuICB9LFxuICB3cmFwcGVyQ29sOiB7XG4gICAgeHM6IHtcbiAgICAgIHNwYW46IDI0XG4gICAgfSxcbiAgICBzbToge1xuICAgICAgc3BhbjogMTJcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCB0YWlsRm9ybUl0ZW1MYXlvdXQgPSB7XG4gIHdyYXBwZXJDb2w6IHtcbiAgICB4czoge1xuICAgICAgc3BhbjogMjQsXG4gICAgICBvZmZzZXQ6IDBcbiAgICB9LFxuICAgIHNtOiB7XG4gICAgICBzcGFuOiAxNixcbiAgICAgIG9mZnNldDogMFxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRDb2xvciA9IHtcbiAgcHJpbWFyeUNvbG9yOiAnI2ZmMDA2NicsXG4gIHN1Y2Nlc3NDb2xvcjogJyMyZmI1MmQnLFxuICB3aGl0ZUNvbG9yOiAnI2ZmZmZmZidcbn07XG5cbmV4cG9ydCB0eXBlIEJyZWFrcG9pbnQgPSAneHhsJyB8ICd4bCcgfCAnbGcnIHwgJ21kJyB8ICdzbScgfCAneHMnO1xuZXhwb3J0IHR5cGUgQnJlYWtwb2ludE1hcCA9IFBhcnRpYWw8UmVjb3JkPEJyZWFrcG9pbnQsIHN0cmluZz4+O1xuIiwiZXhwb3J0IGNvbnN0IHZhbGlkYXRlTWVzc2FnZXMgPSB7XG4gIHJlcXVpcmVkOiAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCEnLFxuICB0eXBlczoge1xuICAgIGVtYWlsOiAnTm90IGEgdmFsaWRhdGUgZW1haWwhJyxcbiAgICBudW1iZXI6ICdOb3QgYSB2YWxpZGF0ZSBudW1iZXIhJ1xuICB9LFxuICBudW1iZXI6IHtcbiAgICByYW5nZTogJ011c3QgYmUgYmV0d2VlbiBtaW4gYW5kIG1heCdcbiAgfVxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtbmFtZXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQge1xuICByZWR1Y2UsIGlzQXJyYXksIGlzRW1wdHksIGZsYXR0ZW5cbn0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAncmVzZWxlY3QnO1xuaW1wb3J0IHsgdGFrZUxhdGVzdCwgZGVsYXkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IHtcbiAgY3JlYXRlQWN0aW9uIGFzIFJlZHV4Q3JlYXRlQWN0aW9uLFxuICBoYW5kbGVBY3Rpb25zIGFzIGhhbmRsZVJlZHV4QWN0aW9ucyxcbiAgQWN0aW9uXG59IGZyb20gJ3JlZHV4LWFjdGlvbnMnO1xuXG5leHBvcnQgdHlwZSBBY3Rpb25GdW5jdGlvbjE8VDEsIFI+ID0gKHQxPzogVDEpID0+IFI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uRnVuY3Rpb248UGF5bG9hZD5cbiAgZXh0ZW5kcyBBY3Rpb25GdW5jdGlvbjE8UGF5bG9hZCwgQWN0aW9uPFBheWxvYWQ+PiB7XG4gIGlzOiAodHlwZTogc3RyaW5nKSA9PiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBY3Rpb248UGF5bG9hZCA9IGFueT4odHlwZTogc3RyaW5nKTogQWN0aW9uRnVuY3Rpb248UGF5bG9hZD4ge1xuICBjb25zdCBhY3Rpb24gPSBSZWR1eENyZWF0ZUFjdGlvbjxQYXlsb2FkPih0eXBlKSBhcyBBY3Rpb25GdW5jdGlvbjxQYXlsb2FkPjtcbiAgYWN0aW9uLmlzID0gKGFUeXBlOiBzdHJpbmcpID0+IGFjdGlvbi50b1N0cmluZygpID09PSBhVHlwZTtcbiAgcmV0dXJuIGFjdGlvbjtcbn1cblxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG5mdW5jdGlvbiBjcmVhdGVBc3luY0FjdGlvbihhY3Rpb246IHN0cmluZywgdHlwZTogc3RyaW5nKTogYW55IHtcbiAgcmV0dXJuIHtcbiAgICBbYWN0aW9uXTogY3JlYXRlQWN0aW9uKHR5cGUpLFxuICAgIFtgJHthY3Rpb259U3VjY2Vzc2BdOiBjcmVhdGVBY3Rpb24oYCR7dHlwZX1fU1VDQ0VTU2ApLFxuICAgIFtgJHthY3Rpb259RmFpbGBdOiBjcmVhdGVBY3Rpb24oYCR7dHlwZX1fRkFJTGApXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFzeW5jQWN0aW9uczxcbiAgQWN0aW9uRGF0YSA9IGFueSxcbiAgU3VjY2Vzc0RhdGEgPSBhbnksXG4gIEVycm9yRGF0YSA9IEVycm9yXG4+KFxuICB0eXBlOiBzdHJpbmdcbik6IFtcbiAgQWN0aW9uRnVuY3Rpb248QWN0aW9uRGF0YT4sXG4gIEFjdGlvbkZ1bmN0aW9uPFN1Y2Nlc3NEYXRhPixcbiAgQWN0aW9uRnVuY3Rpb248RXJyb3JEYXRhPlxuXSB7XG4gIHJldHVybiBbXG4gICAgY3JlYXRlQWN0aW9uPEFjdGlvbkRhdGE+KHR5cGUpLFxuICAgIGNyZWF0ZUFjdGlvbjxTdWNjZXNzRGF0YT4oYCR7dHlwZX1fU1VDQ0VTU2ApLFxuICAgIGNyZWF0ZUFjdGlvbjxFcnJvckRhdGE+KGAke3R5cGV9X0ZBSUxgKVxuICBdO1xufVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuZnVuY3Rpb24gaGFuZGxlQWN0aW9ucyhhY3Rpb25zOiBhbnksIGluaXRpYWxTdGF0ZTogYW55KSB7XG4gIHJldHVybiBoYW5kbGVSZWR1eEFjdGlvbnMoXG4gICAgcmVkdWNlKFxuICAgICAgYWN0aW9ucyxcbiAgICAgIChyZWR1Y2VyOiBhbnksIGhhbmRsZXIsIGFjdGlvbikgPT4ge1xuICAgICAgICByZWR1Y2VyW2FjdGlvbl0gPSAoc3RhdGU6IGFueSwgYWN0OiBhbnkpID0+IGhhbmRsZXIoc3RhdGUuc2V0KCdhY3Rpb24nLCBhY3Rpb24pLCBhY3QpO1xuICAgICAgICByZXR1cm4gcmVkdWNlcjtcbiAgICAgIH0sXG4gICAgICB7fVxuICAgICksXG4gICAgaW5pdGlhbFN0YXRlXG4gICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlZHVjZXJzKFxuICBzdGF0ZUNvbnRleHQ6IHN0cmluZyxcbiAgcmVkdWNlcnM6IGFueVtdLFxuICBpbml0aWFsU3RhdGU6IGFueSxcbiAgcHJldmVudFJlc2V0dGluZzogYm9vbGVhbiA9IGZhbHNlXG4pOiBhbnkge1xuICByZXR1cm4ge1xuICAgIFtzdGF0ZUNvbnRleHRdOiBoYW5kbGVSZWR1eEFjdGlvbnMoXG4gICAgICByZWR1Y2UoXG4gICAgICAgIGZsYXR0ZW4ocmVkdWNlcnMpLFxuICAgICAgICAocmVkdWNlcjogYW55LCBhY3Rpb246IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChpc0FycmF5KGFjdGlvbi5vbikpIHtcbiAgICAgICAgICAgIGFjdGlvbi5vbi5mb3JFYWNoKChhY3Q6IGFueSkgPT4ge1xuICAgICAgICAgICAgICByZWR1Y2VyW2FjdF0gPSBhY3Rpb24ucmVkdWNlcjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSByZWR1Y2VyW2FjdGlvbi5vbl0gPSBhY3Rpb24ucmVkdWNlcjtcbiAgICAgICAgICByZXR1cm4gcmVkdWNlcjtcbiAgICAgICAgfSxcbiAgICAgICAgcHJldmVudFJlc2V0dGluZ1xuICAgICAgICAgID8ge31cbiAgICAgICAgICA6IHtcbiAgICAgICAgICAgIEFQUF9TVEFURV9SRVNFVDogKCkgPT4gaW5pdGlhbFN0YXRlXG4gICAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIGluaXRpYWxTdGF0ZVxuICAgIClcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNhZ2FzKHNhZ2FzOiBhbnlbXSk6IGFueVtdIHtcbiAgcmV0dXJuIGZsYXR0ZW4oc2FnYXMpLm1hcCgoc2FnYTogYW55KSA9PiB7XG4gICAgY29uc3QgeyBvbiwgZWZmZWN0ID0gdGFrZUxhdGVzdCwgd29ya2VyIH0gPSBzYWdhO1xuICAgIHJldHVybiBmdW5jdGlvbiogKCkge1xuICAgICAgeWllbGQgZWZmZWN0KG9uLCBmdW5jdGlvbiogKGFjdGlvbjogYW55KSB7XG4gICAgICAgIHlpZWxkIGRlbGF5KDApO1xuICAgICAgICB5aWVsZCB3b3JrZXIoYWN0aW9uKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTZWxlY3RvcnNBKGNvbnRleHQ6IHN0cmluZywga2V5czogYW55W10gPSBbXSk6IGFueSB7XG4gIGNvbnN0IHN0YXRlU2VsZWN0b3IgPSAoc3RhdGU6IGFueSkgPT4gc3RhdGVbY29udGV4dF07XG5cbiAgaWYgKGlzRW1wdHkoa2V5cykpIHJldHVybiBzdGF0ZVNlbGVjdG9yO1xuXG4gIHJldHVybiBrZXlzLm1hcCgoa2V5OiBhbnkpID0+IChzdGF0ZTogYW55KSA9PiAoaXNBcnJheShrZXkpXG4gICAgPyBzdGF0ZVNlbGVjdG9yKHN0YXRlKS5nZXRJbihrZXkpXG4gICAgOiBzdGF0ZVNlbGVjdG9yKHN0YXRlKS5nZXQoa2V5KSkpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTZWxlY3RvcnMoY29udGV4dDogc3RyaW5nLCBrZXlzOiBzdHJpbmdbXSk6IGFueSB7XG4gIGNvbnN0IHN0YXRlU2VsZWN0b3IgPSAoc3RhdGU6IGFueSkgPT4gc3RhdGVbY29udGV4dF07XG5cbiAgcmV0dXJuIHJlZHVjZShcbiAgICBrZXlzLFxuICAgIChzZWxlY3RvcnM6IGFueSwga2V5KSA9PiB7XG4gICAgICBzZWxlY3RvcnNbYCR7a2V5fVNlbGVjdG9yYF0gPSAoc3RhdGU6IGFueSkgPT4gc3RhdGVTZWxlY3RvcihzdGF0ZSkuZ2V0KGtleSk7XG4gICAgICByZXR1cm4gc2VsZWN0b3JzO1xuICAgIH0sXG4gICAge31cbiAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSlNTZWxlY3RvcnMoY29udGV4dDogc3RyaW5nLCBrZXlzOiBzdHJpbmdbXSk6IGFueSB7XG4gIGNvbnN0IHN0YXRlU2VsZWN0b3IgPSAoc3RhdGU6IGFueSkgPT4gc3RhdGVbY29udGV4dF07XG5cbiAgcmV0dXJuIHJlZHVjZShcbiAgICBrZXlzLFxuICAgIChzZWxlY3RvcnM6IGFueSwga2V5KSA9PiB7XG4gICAgICBzZWxlY3RvcnNbYCR7a2V5fVNlbGVjdG9yYF0gPSAoc3RhdGU6IGFueSkgPT4gc3RhdGVTZWxlY3RvcihzdGF0ZSlba2V5XTtcbiAgICAgIHJldHVybiBzZWxlY3RvcnM7XG4gICAgfSxcbiAgICB7fVxuICApO1xufVxuXG5leHBvcnQge1xuICBjcmVhdGVBY3Rpb24sXG4gIGNyZWF0ZUFzeW5jQWN0aW9uLFxuICBjcmVhdGVBc3luY0FjdGlvbnMsXG4gIGNyZWF0ZVNlbGVjdG9yc0EsXG4gIGhhbmRsZUFjdGlvbnMsXG4gIGNyZWF0ZVJlZHVjZXJzLFxuICBjcmVhdGVTZWxlY3RvcnMsXG4gIGNyZWF0ZVNlbGVjdG9yLFxuICBjcmVhdGVKU1NlbGVjdG9yc1xufTtcbiIsImV4cG9ydCBjb25zdCB1c2VybmFtZVBhdHRlcm5SdWxlID0ge1xuICBwYXR0ZXJuOiBuZXcgUmVnRXhwKCdeW2EtekEtWjAtOV0qJCcpLFxuICBtZXNzYWdlOiAnRG9udCBhbGxvdyBzcGVjaWFsIGNoYXJzIG9yIHNwYWNlJ1xufTtcbiIsImltcG9ydCB7IFN0b3JlIGFzIFJEU3RvcmUgfSBmcm9tICdyZWR1eCc7XG5cbmV4cG9ydCB0eXBlIFN0b3JlID0gUkRTdG9yZTx7fT47XG5cbmxldCBzdG9yZTogU3RvcmUgfCBudWxsID0gbnVsbDtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXRTdG9yZTogKCkgPT4gc3RvcmUsXG4gIHNldFN0b3JlOiAoczogU3RvcmUpID0+IHtcbiAgICBzdG9yZSA9IHM7XG4gIH1cbn07XG4iLCJpbXBvcnQgc3RvcmVIb2xkZXIgZnJvbSAnLi9zdG9yZUhvbGRlcic7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX09GRkxJTkVfSU1BR0VfVVJMID0gJy9vZmZsaW5lLnBuZyc7XG5leHBvcnQgY29uc3QgREVGQVVMVF9QUklWQVRFX0lNQUdFX1VSTCA9ICcvcHJpdmF0ZS5wbmcnO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfR1JPVVBfSU1BR0VfVVJMID0gJy9ncm91cC5wbmcnO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfT05MSU5FX0lNQUdFX1VSTCA9ICcnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9zdGVyKHN0YXR1czogc3RyaW5nKTogc3RyaW5nIHtcbiAgbGV0IHBvc3RlciA9ICcnO1xuICBjb25zdCBzdG9yZSA9IHN0b3JlSG9sZGVyLmdldFN0b3JlKCk7XG4gIGNvbnN0IHsgc2V0dGluZ3MgPSB7fSB9ID0gc3RvcmUuZ2V0U3RhdGUoKSBhcyBhbnk7XG4gIHN3aXRjaCAoc3RhdHVzKSB7XG4gICAgY2FzZSAncHJpdmF0ZSc6XG4gICAgICBwb3N0ZXIgPSBzZXR0aW5ncy5kZWZhdWx0UHJpdmF0ZUNhbGxJbWFnZSB8fCBERUZBVUxUX1BSSVZBVEVfSU1BR0VfVVJMO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnb2ZmbGluZSc6XG4gICAgICBwb3N0ZXIgPSBzZXR0aW5ncy5kZWZhdWx0T2ZmbGluZU1vZGVsSW1hZ2UgfHwgREVGQVVMVF9PRkZMSU5FX0lNQUdFX1VSTDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3B1YmxpYyc6XG4gICAgICBwb3N0ZXIgPSBERUZBVUxUX09OTElORV9JTUFHRV9VUkw7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdncm91cCc6XG4gICAgICBwb3N0ZXIgPSBzZXR0aW5ncy5kZWZhdWx0R3JvdXBDaGF0SW1hZ2UgfHwgREVGQVVMVF9HUk9VUF9JTUFHRV9VUkw7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcG9zdGVyID0gREVGQVVMVF9PRkZMSU5FX0lNQUdFX1VSTDtcbiAgICAgIGJyZWFrO1xuICB9XG4gIHJldHVybiBwb3N0ZXI7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaXNVcmwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICB1cmwubWF0Y2goXG4gICAgICAvKGh0dHAocyk/OlxcL1xcLy4pPyh3d3dcXC4pP1stYS16QS1aMC05QDolLl8rfiM9XXsyLDI1Nn1cXC5bYS16XXsyLDZ9XFxiKFstYS16QS1aMC05QDolXysufiM/Ji8vPV0qKS9nXG4gICAgKSAhPT0gbnVsbFxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVVdWlkID0gKCkgPT4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCAoYykgPT4ge1xuICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICAgIGNvbnN0IHIgPSAoTWF0aC5yYW5kb20oKSAqIDE2KSB8IDA7XG4gICAgY29uc3QgdiA9IGMgPT09ICd4JyA/IHIgOiAociAmIDB4MykgfCAweDg7XG4gICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xuICAgIC8qIGVzbGludC1lbmFibGUgKi9cbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKCFzdHIpIHJldHVybiAnJztcbiAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn1cblxuZXhwb3J0IGNvbnN0IHVuaXRQcmljZXM6IHsgdmFsdWU6IG51bWJlciwgdGV4dDogYW55IH1bXSA9IFtcbiAge1xuICAgIHZhbHVlOiAxNSxcbiAgICB0ZXh0OiAnMTUgdG9rZW5zJ1xuICB9LFxuICB7XG4gICAgdmFsdWU6IDIwLFxuICAgIHRleHQ6ICcyMCB0b2tlbnMnXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogMjUsXG4gICAgdGV4dDogJzI1IHRva2VucydcbiAgfSxcbiAge1xuICAgIHZhbHVlOiAzMCxcbiAgICB0ZXh0OiAnMzAgdG9rZW5zJ1xuICB9LFxuICB7XG4gICAgdmFsdWU6IDM1LFxuICAgIHRleHQ6ICczNSB0b2tlbnMnXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogNDAsXG4gICAgdGV4dDogJzQwIHRva2VucydcbiAgfSxcbiAge1xuICAgIHZhbHVlOiA0NSxcbiAgICB0ZXh0OiAnNDUgdG9rZW5zJ1xuICB9LFxuICB7XG4gICAgdmFsdWU6IDUwLFxuICAgIHRleHQ6ICc1MCB0b2tlbnMnXG4gIH1cbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA1NSxcbiAgLy8gICB0ZXh0OiAnNTUgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDYwLFxuICAvLyAgIHRleHQ6ICc2MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNjUsXG4gIC8vICAgdGV4dDogJzY1IHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA3MCxcbiAgLy8gICB0ZXh0OiAnNzAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDc1LFxuICAvLyAgIHRleHQ6ICc3NSB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogODAsXG4gIC8vICAgdGV4dDogJzgwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA4NSxcbiAgLy8gICB0ZXh0OiAnODUgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDkwLFxuICAvLyAgIHRleHQ6ICc5MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogOTUsXG4gIC8vICAgdGV4dDogJzk1IHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAxMDAsXG4gIC8vICAgdGV4dDogJzEwMCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMTIwLFxuICAvLyAgIHRleHQ6ICcxMjAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDE0MCxcbiAgLy8gICB0ZXh0OiAnMTQwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAxNjAsXG4gIC8vICAgdGV4dDogJzE2MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMTgwLFxuICAvLyAgIHRleHQ6ICcxODAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDIwMCxcbiAgLy8gICB0ZXh0OiAnMjAwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAyMjAsXG4gIC8vICAgdGV4dDogJzIyMCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMjQwLFxuICAvLyAgIHRleHQ6ICcyNDAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDI2MCxcbiAgLy8gICB0ZXh0OiAnMjYwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAyODAsXG4gIC8vICAgdGV4dDogJzI4MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMzAwLFxuICAvLyAgIHRleHQ6ICczMDAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDMyMCxcbiAgLy8gICB0ZXh0OiAnMzIwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAzNDAsXG4gIC8vICAgdGV4dDogJzM0MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMzYwLFxuICAvLyAgIHRleHQ6ICczNjAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDM4MCxcbiAgLy8gICB0ZXh0OiAnMzgwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA0MDAsXG4gIC8vICAgdGV4dDogJzQwMCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNDIwLFxuICAvLyAgIHRleHQ6ICc0MjAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDQ0MCxcbiAgLy8gICB0ZXh0OiAnNDQwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA0NjAsXG4gIC8vICAgdGV4dDogJzQ2MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNDgwLFxuICAvLyAgIHRleHQ6ICc0ODAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDUwMCxcbiAgLy8gICB0ZXh0OiAnNTAwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA1NTAsXG4gIC8vICAgdGV4dDogJzU1MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNjAwLFxuICAvLyAgIHRleHQ6ICc2MDAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDY1MCxcbiAgLy8gICB0ZXh0OiAnNjUwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA3MDAsXG4gIC8vICAgdGV4dDogJzcwMCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNzUwLFxuICAvLyAgIHRleHQ6ICc3NTAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDgwMCxcbiAgLy8gICB0ZXh0OiAnODAwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA4NTAsXG4gIC8vICAgdGV4dDogJzg1MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogOTAwLFxuICAvLyAgIHRleHQ6ICc5MDAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDk1MCxcbiAgLy8gICB0ZXh0OiAnOTUwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAxMDAwLFxuICAvLyAgIHRleHQ6ICcxMDAwIHRva2VucydcbiAgLy8gfVxuXTtcbiIsImltcG9ydCB7IGNsb25lRGVlcCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAncGF0aC10by1yZWdleHAnO1xuaW1wb3J0IHtcbiAgSVNjaGVkdWxlLCBJVXNlciwgSVBlcmZvcm1lciwgSVN0dWRpb1xufSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBTT1JUIH0gZnJvbSAnQHNlcnZpY2VzL2FwaS1yZXF1ZXN0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG4vKipcbiAqIENvbnZlcnQgYW4gYXJyYXkgdG8gYSB0cmVlLXN0cnVjdHVyZWQgYXJyYXkuXG4gKiBAcGFyYW0gICB7YXJyYXl9ICAgICBhcnJheSAgICAgVGhlIEFycmF5IG5lZWQgdG8gQ29udmVydGVkLlxuICogQHBhcmFtICAge3N0cmluZ30gICAgaWQgICAgICAgIFRoZSBhbGlhcyBvZiB0aGUgdW5pcXVlIElEIG9mIHRoZSBvYmplY3QgaW4gdGhlIGFycmF5LlxuICogQHBhcmFtICAge3N0cmluZ30gICAgcGFyZW50SWQgICAgICAgVGhlIGFsaWFzIG9mIHRoZSBwYXJlbnQgSUQgb2YgdGhlIG9iamVjdCBpbiB0aGUgYXJyYXkuXG4gKiBAcGFyYW0gICB7c3RyaW5nfSAgICBjaGlsZHJlbiAgVGhlIGFsaWFzIG9mIGNoaWxkcmVuIG9mIHRoZSBvYmplY3QgaW4gdGhlIGFycmF5LlxuICogQHJldHVybiAge2FycmF5fSAgICBSZXR1cm4gYSB0cmVlLXN0cnVjdHVyZWQgYXJyYXkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcnJheVRvVHJlZShcbiAgYXJyYXksXG4gIGlkID0gJ2lkJyxcbiAgcGFyZW50SWQgPSAncGlkJyxcbiAgY2hpbGRyZW4gPSAnY2hpbGRyZW4nXG4pIHtcbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIGNvbnN0IGhhc2ggPSB7fTtcbiAgY29uc3QgZGF0YSA9IGNsb25lRGVlcChhcnJheSk7XG5cbiAgZGF0YS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIGhhc2hbZGF0YVtpbmRleF1baWRdXSA9IGRhdGFbaW5kZXhdO1xuICB9KTtcblxuICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBoYXNoUGFyZW50ID0gaGFzaFtpdGVtW3BhcmVudElkXV07XG4gICAgaWYgKGhhc2hQYXJlbnQpIHtcbiAgICAgICFoYXNoUGFyZW50W2NoaWxkcmVuXSAmJiAoaGFzaFBhcmVudFtjaGlsZHJlbl0gPSBbXSk7XG4gICAgICBoYXNoUGFyZW50W2NoaWxkcmVuXS5wdXNoKGl0ZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQucHVzaChpdGVtKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFdoZXRoZXIgdGhlIHBhdGggbWF0Y2hlcyB0aGUgcmVnZXhwIGlmIHRoZSBsYW5ndWFnZSBwcmVmaXggaXMgaWdub3JlZCwgaHR0cHM6Ly9naXRodWIuY29tL3BpbGxhcmpzL3BhdGgtdG8tcmVnZXhwLlxuICogQHBhcmFtICAge3N0cmluZ3xyZWdleHB8YXJyYXl9ICAgICByZWdleHAgICAgIFNwZWNpZnkgYSBzdHJpbmcsIGFycmF5IG9mIHN0cmluZ3MsIG9yIGEgcmVndWxhciBleHByZXNzaW9uLlxuICogQHBhcmFtICAge3N0cmluZ30gICAgICAgICAgICAgICAgICBwYXRobmFtZSAgIFNwZWNpZnkgdGhlIHBhdGhuYW1lIHRvIG1hdGNoLlxuICogQHJldHVybiAge2FycmF5fG51bGx9ICAgICAgICAgICAgICBSZXR1cm4gdGhlIHJlc3VsdCBvZiB0aGUgbWF0Y2ggb3IgbnVsbC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhdGhNYXRjaFJlZ2V4cChyZWdleHAsIHBhdGhuYW1lKSB7XG4gIHJldHVybiBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKHJlZ2V4cCkuZXhlYyhwYXRobmFtZSk7XG59XG5cbi8qKlxuICogSW4gYW4gYXJyYXkgb2Ygb2JqZWN0cywgc3BlY2lmeSBhbiBvYmplY3QgdGhhdCB0cmF2ZXJzZXMgdGhlIG9iamVjdHMgd2hvc2UgcGFyZW50IElEIG1hdGNoZXMuXG4gKiBAcGFyYW0gICB7YXJyYXl9ICAgICBhcnJheSAgICAgVGhlIEFycmF5IG5lZWQgdG8gQ29udmVydGVkLlxuICogQHBhcmFtICAge3N0cmluZ30gICAgY3VycmVudCAgIFNwZWNpZnkgdGhlIG9iamVjdCB0aGF0IG5lZWRzIHRvIGJlIHF1ZXJpZWQuXG4gKiBAcGFyYW0gICB7c3RyaW5nfSAgICBwYXJlbnRJZCAgVGhlIGFsaWFzIG9mIHRoZSBwYXJlbnQgSUQgb2YgdGhlIG9iamVjdCBpbiB0aGUgYXJyYXkuXG4gKiBAcGFyYW0gICB7c3RyaW5nfSAgICBpZCAgICAgICAgVGhlIGFsaWFzIG9mIHRoZSB1bmlxdWUgSUQgb2YgdGhlIG9iamVjdCBpbiB0aGUgYXJyYXkuXG4gKiBAcmV0dXJuICB7YXJyYXl9ICAgIFJldHVybiBhIGtleSBhcnJheS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5QW5jZXN0b3JzKGFycmF5LCBjdXJyZW50LCBwYXJlbnRJZCwgaWQgPSAnaWQnKSB7XG4gIGNvbnN0IHJlc3VsdCA9IFtjdXJyZW50XTtcbiAgY29uc3QgaGFzaE1hcCA9IG5ldyBNYXAoKTtcbiAgYXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4gaGFzaE1hcC5zZXQoaXRlbVtpZF0sIGl0ZW0pKTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2hhZG93XG4gIGNvbnN0IGdldFBhdGggPSAoY3VycmVudCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRQYXJlbnRJZCA9IGhhc2hNYXAuZ2V0KGN1cnJlbnRbaWRdKVtwYXJlbnRJZF07XG4gICAgaWYgKGN1cnJlbnRQYXJlbnRJZCkge1xuICAgICAgcmVzdWx0LnB1c2goaGFzaE1hcC5nZXQoY3VycmVudFBhcmVudElkKSk7XG4gICAgICBnZXRQYXRoKGhhc2hNYXAuZ2V0KGN1cnJlbnRQYXJlbnRJZCkpO1xuICAgIH1cbiAgfTtcblxuICBnZXRQYXRoKGN1cnJlbnQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVzcG9uc2VFcnJvcihkYXRhOiBhbnkpIHtcbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuICdCYWQgcmVxdWVzdCEnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YS5tZXNzYWdlKSkge1xuICAgIGNvbnN0IGl0ZW0gPSBkYXRhLm1lc3NhZ2VbMF07XG4gICAgaWYgKCFpdGVtLmNvbnN0cmFpbnRzKSB7XG4gICAgICByZXR1cm4gZGF0YS5lcnJvciB8fCAnQmFkIHJlcXVlc3QhJztcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoaXRlbS5jb25zdHJhaW50cylbMF07XG4gIH1cblxuICAvLyBUT0RPIC0gcGFyc2UgZm9yIGxhbmdhdWdlIG9yIG90aGVyc1xuICByZXR1cm4gdHlwZW9mIGRhdGEubWVzc2FnZSA9PT0gJ3N0cmluZycgPyBkYXRhLm1lc3NhZ2UgOiAnQmFkIHJlcXVlc3QhJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTW9iaWxlKCk6IGJvb2xlYW4ge1xuICBpZiAoXG4gICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQW5kcm9pZC9pKVxuICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL3dlYk9TL2kpXG4gICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBob25lL2kpXG4gICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBhZC9pKVxuICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQb2QvaSlcbiAgICB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9CbGFja0JlcnJ5L2kpXG4gICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvV2luZG93cyBQaG9uZS9pKVxuICApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXJsUGFyYW1ldGVyKHNQYXJhbSkge1xuICBjb25zdCBzUGFnZVVSTCA9IGRlY29kZVVSSUNvbXBvbmVudCh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSk7XG4gIGNvbnN0IHNVUkxWYXJpYWJsZXMgPSBzUGFnZVVSTC5zcGxpdCgnJicpO1xuICBsZXQgc1BhcmFtZXRlck5hbWU7XG4gIGxldCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzVVJMVmFyaWFibGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgc1BhcmFtZXRlck5hbWUgPSBzVVJMVmFyaWFibGVzW2ldLnNwbGl0KCc9Jyk7XG5cbiAgICBpZiAoc1BhcmFtZXRlck5hbWVbMF0gPT09IHNQYXJhbSkge1xuICAgICAgcmV0dXJuIHNQYXJhbWV0ZXJOYW1lWzFdID09PSB1bmRlZmluZWQgPyB0cnVlIDogc1BhcmFtZXRlck5hbWVbMV07XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBEQVlfT0ZfV0VFSyA9IHtcbiAgbW9uOiAnTW9uZGF5JyxcbiAgdHVlOiAnVHVlc2RheScsXG4gIHdlZDogJ1dlZG5lc2RheScsXG4gIHRodTogJ1RodXJzZGF5JyxcbiAgZnJpOiAnRnJpZGF5JyxcbiAgc2F0OiAnU2F0dXJkYXknLFxuICBzdW46ICdTdW5kYXknXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdFNjaGVkdWxlKCkge1xuICBjb25zdCBkZWZhdWx0VmFsID0geyBzdGFydDogbnVsbCwgZW5kOiBudWxsLCBjbG9zZWQ6IHRydWUgfTtcbiAgcmV0dXJuIHtcbiAgICBtb246IHsgLi4uZGVmYXVsdFZhbCB9LFxuICAgIHR1ZTogeyAuLi5kZWZhdWx0VmFsIH0sXG4gICAgd2VkOiB7IC4uLmRlZmF1bHRWYWwgfSxcbiAgICB0aHU6IHsgLi4uZGVmYXVsdFZhbCB9LFxuICAgIGZyaTogeyAuLi5kZWZhdWx0VmFsIH0sXG4gICAgc2F0OiB7IC4uLmRlZmF1bHRWYWwgfSxcbiAgICBzdW46IHsgLi4uZGVmYXVsdFZhbCB9XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZXh0U2hvdyhzY2hlZHVsZTogSVNjaGVkdWxlKTogc3RyaW5nIHtcbiAgbGV0IHdlZWtEYXkgPSBwYXJzZUludChtb21lbnQoKS5mb3JtYXQoJ2UnKSwgMTApO1xuICBsZXQgaSA9IDA7XG4gIGxldCBuZXh0U2hvdzogc3RyaW5nO1xuICBjb25zdCBwZXJmb3JtZXJTaG93cyA9IE9iamVjdC5rZXlzKHNjaGVkdWxlKS5maWx0ZXIoXG4gICAgKGtleSkgPT4gIXNjaGVkdWxlW2tleV0uY2xvc2VkXG4gICk7XG4gIGRvIHtcbiAgICBjb25zdCBkYXRlID0gbW9tZW50KCkuZGF5KHdlZWtEYXkpLmZvcm1hdCgnZGRkJykudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAocGVyZm9ybWVyU2hvd3MuaW5kZXhPZihkYXRlKSA+IC0xKSB7XG4gICAgICBuZXh0U2hvdyA9IGRhdGU7XG4gICAgfVxuICAgIHdlZWtEYXkgKz0gMTtcbiAgICBpICs9IDE7XG4gIH0gd2hpbGUgKGkgPCA3ICYmICFuZXh0U2hvdyk7XG5cbiAgaWYgKG5leHRTaG93KSB7XG4gICAgcmV0dXJuIGAke3NjaGVkdWxlW25leHRTaG93XS5zdGFydH0gJHttb21lbnQoKVxuICAgICAgLmRheSh3ZWVrRGF5IC0gMSlcbiAgICAgIC5mb3JtYXQoJ0REL01NL1lZWVknKX1gO1xuICB9XG4gIHJldHVybiAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlYXJjaERhdGEocGFnaW5hdGlvbiwgZmlsdGVycywgc29ydGVyLCBzdGF0ZSkge1xuICBsZXQgeyBzb3J0LCBzb3J0QnksIGZpbHRlciB9ID0gc3RhdGU7XG4gIGNvbnN0IHsgbGltaXQgfSA9IHN0YXRlO1xuICBpZiAoZmlsdGVycykge1xuICAgIE9iamVjdC5rZXlzKGZpbHRlcnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGZpbHRlcnNba2V5XSAmJiBmaWx0ZXJzW2tleV0ubGVuZ3RoKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICBmaWx0ZXJba2V5XSA9IGZpbHRlcnNba2V5XVswXTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFmaWx0ZXJzW2tleV0pIHtcbiAgICAgICAgZmlsdGVyW2tleV0gPSAnJztcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBmaWx0ZXIgPSB7fTtcbiAgfVxuXG4gIGlmIChzb3J0ZXIpIHtcbiAgICBpZiAoc29ydGVyLm9yZGVyKSB7XG4gICAgICBjb25zdCB7IGZpZWxkLCBvcmRlciB9ID0gc29ydGVyO1xuICAgICAgc29ydCA9IFNPUlRbb3JkZXJdO1xuICAgICAgc29ydEJ5ID0gZmllbGQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNvcnRCeSA9ICdjcmVhdGVkQXQnO1xuICAgICAgc29ydCA9ICdkZXNjJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIC4uLmZpbHRlcixcbiAgICBzb3J0LFxuICAgIHNvcnRCeSxcbiAgICBvZmZzZXQ6IChwYWdpbmF0aW9uLmN1cnJlbnQgLSAxKSAqIGxpbWl0XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCYXNlNjQob3JpZ2luRmlsZU9iaiwgc3RhdHVzID0gJ3VwbG9hZGluZycsIGZpbGUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIGlmIChvcmlnaW5GaWxlT2JqKSB7XG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChvcmlnaW5GaWxlT2JqKTtcbiAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKHtcbiAgICAgICAgLi4ub3JpZ2luRmlsZU9iaixcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBuYW1lOiBvcmlnaW5GaWxlT2JqLm5hbWUsXG4gICAgICAgIHVybDogcmVhZGVyLnJlc3VsdCxcbiAgICAgICAgb3JpZ2luRmlsZU9ialxuICAgICAgfSk7XG4gICAgICByZWFkZXIub25lcnJvciA9IChlcnJvcikgPT4gcmVqZWN0KGVycm9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzb2x2ZShmaWxlKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydENvbm5lY3Rpb25EYXRhKGRhdGEpIHtcbiAgY29uc3QgYXJyID0gZGF0YS5zcGxpdCgnJS8lJyk7XG4gIGNvbnN0IHNlcnZlckRhdGEgPSBhcnJbMV0gJiYgSlNPTi5wYXJzZShhcnJbMV0pO1xuICBjb25zdCBjbGllbnREYXRhID0gYXJyWzBdICYmIEpTT04ucGFyc2UoYXJyWzBdKTtcbiAgcmV0dXJuIHtcbiAgICBzZXJ2ZXJEYXRhLFxuICAgIGNsaWVudERhdGFcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrVXNlckxvZ2luKGlzTG9nZ2VkSW46IGJvb2xlYW4sIHVzZXI6IElVc2VyIHwgSVBlcmZvcm1lciB8IElTdHVkaW8pIHtcbiAgaWYgKCFpc0xvZ2dlZEluKSByZXR1cm4gZmFsc2U7XG4gIGlmICghdXNlciAmJiAhdXNlci5faWQpIHJldHVybiBmYWxzZTtcblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRVc2VyKHVzZXI6IElVc2VyLCBwZXJmb3JtZXI6IElQZXJmb3JtZXIpIHtcbiAgaWYgKHVzZXIgJiYgdXNlci5faWQpIHJldHVybiB1c2VyO1xuICBpZiAocGVyZm9ybWVyICYmIHBlcmZvcm1lci5faWQpIHJldHVybiBwZXJmb3JtZXI7XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BoeXNpY2FsUHJvZHVjdChpdGVtKSB7XG4gIGlmIChpdGVtICYmIGl0ZW0udHlwZSA9PT0gJ3BoeXNpY2FsJykgcmV0dXJuIHRydWU7XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYXRCb3hNZXNzYWdlQ2xhc3NOYW1lKHJlcSkge1xuICBjb25zdCB7XG4gICAgaXNNaW5lLFxuICAgIHN0YXJ0c1NlcXVlbmNlLFxuICAgIGVuZHNTZXF1ZW5jZSxcbiAgICBkYXRhOiB7IHR5cGUgfVxuICB9ID0gcmVxO1xuICByZXR1cm4gY2xhc3NuYW1lcyhcbiAgICAnbWVzc2FnZScsXG4gICAgeyBtaW5lOiBpc01pbmUgJiYgdHlwZSAhPT0gJ3RpcCcgfSxcbiAgICB7IHRpcDogdHlwZSA9PT0gJ3RpcCcgfSxcbiAgICB7IHN0YXJ0OiAhIXN0YXJ0c1NlcXVlbmNlIH0sXG4gICAgeyBlbmQ6ICEhZW5kc1NlcXVlbmNlIH1cbiAgKTtcbn1cblxuZnVuY3Rpb24gY29udmVydEZlZXRUb0NtKGZlZXQsIGluY2gpIHtcbiAgY29uc3QgW2ZdID0gZmVldC5zcGxpdCgnLicpO1xuICBjb25zdCBbaV0gPSBpbmNoLnNwbGl0KCcuJyk7XG4gIHJldHVybiAocGFyc2VJbnQoZiwgMTApICogMTIgKyBwYXJzZUludChpLCAxMCkpICogMi41NDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGFXZWlnaHQobWluID0gOTksIG1heCA9IDMxOSkge1xuICBsZXQgaSA9IG1pbjtcbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIGRvIHtcbiAgICByZXN1bHRbaV0gPSAoaSAqIDAuNDUpLnRvRml4ZWQoMik7XG4gICAgaSArPSAxO1xuICB9IHdoaWxlIChpIDwgbWF4KTtcbiAgcmV0dXJuIHJlc3VsdC5tYXAoKHYsIGluZGV4KSA9PiAoe1xuICAgIGxhYmVsOiBgJHtpbmRleH0gIGxicyAoJHt2fWtnKWAsXG4gICAgdmFsdWU6IGAke2luZGV4fSBsYnNgXG4gIH0pKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRhSGVpZ2h0KG1pbiA9IDQsIG1heCA9IDcpIHtcbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIGZvciAobGV0IGZlZXQgPSBtaW47IGZlZXQgPCBtYXg7IGZlZXQgKz0gMSkge1xuICAgIGZvciAobGV0IGluY2ggPSAwOyBpbmNoIDw9IDExOyBpbmNoICs9IDEpIHtcbiAgICAgIGNvbnN0IGEgPSBjb252ZXJ0RmVldFRvQ20oXG4gICAgICAgIGZlZXQudG9GaXhlZCgxKS50b1N0cmluZygpLFxuICAgICAgICBpbmNoLnRvRml4ZWQoMSkudG9TdHJpbmcoKVxuICAgICAgKTtcbiAgICAgIHJlc3VsdC5wdXNoKGAke2ZlZXR9JyR7aW5jaH1cIiAoJHthLnRvRml4ZWQoMil9IGNtKWApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0Lm1hcCgoZikgPT4gKHsgbGFiZWw6IGAke2Z9YCwgdmFsdWU6IGAke2Z9YCB9KSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRQcmljZShwcmljZTogbnVtYmVyLCBmcmFjdGlvbkRpZ2l0cyA9IDIpIHtcbiAgaWYgKHByaWNlKSB7XG4gICAgcmV0dXJuIHByaWNlLnRvRml4ZWQoZnJhY3Rpb25EaWdpdHMpO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlQXN5bmNBY3Rpb24sIGNyZWF0ZUFjdGlvbiB9IGZyb20gJ3NyYy9saWIvcmVkdXgnO1xuXG5leHBvcnQgY29uc3Qge1xuICBnZXRQZXJmb3JtZXJDYXRlZ29yaWVzLFxuICBnZXRQZXJmb3JtZXJDYXRlZ29yaWVzU3VjY2VzcyxcbiAgZ2V0UGVyZm9ybWVyQ2F0ZWdvcmllc0ZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbignZ2V0UGVyZm9ybWVyQ2F0ZWdvcmllcycsICdHRVRfUEVSRk9STUVSX0NBVEVHT1JJRVMnKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgc2VhcmNoUGVyZm9ybWVyLFxuICBzZWFyY2hQZXJmb3JtZXJTdWNjZXNzLFxuICBzZWFyY2hQZXJmb3JtZXJGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ3NlYXJjaFBlcmZvcm1lcicsICdTRUFSQ0hfUEVSRk9STUVSJyk7XG5cbmV4cG9ydCBjb25zdCBzZXRQZXJmb3JtZXJTZWFyY2hpbmcgPSBjcmVhdGVBY3Rpb24oJ1NFVF9QRVJGT1JNRVJfU0VBUkNISU5HJyk7XG5cbmV4cG9ydCBjb25zdCB7XG4gIHVwZGF0ZVBlcmZvcm1lclByb2ZpbGUsXG4gIHVwZGF0ZVBlcmZvcm1lclByb2ZpbGVTdWNjZXNzLFxuICB1cGRhdGVQZXJmb3JtZXJQcm9maWxlRmFpbFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCd1cGRhdGVQZXJmb3JtZXJQcm9maWxlJywgJ1VQREFURV9QRVJGT1JNRVJfUFJPRklMRScpO1xuZXhwb3J0IGNvbnN0IHNldHVwZGF0aW5nUGVyZm9ybWVyUHJvZmlsZSA9IGNyZWF0ZUFjdGlvbihcbiAgJ3VwZGF0aW5nUGVyZm9ybWVyUHJvZmlsZSdcbik7XG5leHBvcnQgY29uc3QgdXBkYXRlUGF5bWVudEluZm8gPSBjcmVhdGVBY3Rpb24oJ1VQREFURV9QQVlNRU5UX0lORk8nKTtcbmV4cG9ydCBjb25zdCB1cGRhdGVEaXJlY3REZXBvc2l0ID0gY3JlYXRlQWN0aW9uKCdVUERBVEVfRElSRUNUX0RFUE9TSVQnKTtcbmV4cG9ydCBjb25zdCB1cGRhdGVQYXh1bSA9IGNyZWF0ZUFjdGlvbignVVBEQVRFX1BBWFVNJyk7XG5leHBvcnQgY29uc3QgdXBkYXRlQml0cGF5ID0gY3JlYXRlQWN0aW9uKCdVUERBVEVfQklUUEFZJyk7XG5leHBvcnQgY29uc3QgdXBkYXRlU3RyZWFtaW5nU3RhdHVzID0gY3JlYXRlQWN0aW9uKCdVUERBVEVfU1RSRUFNSU5HX1NUQVRVUycpO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZURlZmF1bHRQcmljZSA9IGNyZWF0ZUFjdGlvbignVVBEQVRFX0RFRkFVTFRfUFJJQ0UnKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgZ2V0UGVyZm9ybWVyRGV0YWlscyxcbiAgZ2V0UGVyZm9ybWVyRGV0YWlsc1N1Y2Nlc3MsXG4gIGdldFBlcmZvcm1lckRldGFpbHNGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ2dldFBlcmZvcm1lckRldGFpbHMnLCAnR0VUX1BFUkZPUk1FUl9ERVRBSUxTJyk7XG5leHBvcnQgY29uc3Qgc2V0R2V0dGluZ1BlcmZvcm1lckRldGFpbHMgPSBjcmVhdGVBY3Rpb24oXG4gICdzZXRHZXR0aW5nUGVyZm9ybWVyRGV0YWlscydcbik7XG5leHBvcnQgY29uc3Qgc2V0UGVyZm9ybWVyRGV0YWlscyA9IGNyZWF0ZUFjdGlvbignU0VUX1BFUkZPUk1FUl9ERVRBSUxTJyk7XG5leHBvcnQgY29uc3QgdXBkYXRlUGVyZm9ybWVyQXNzZXQgPSBjcmVhdGVBY3Rpb24oJ1VQREFURV9QRVJGT1JNRVJfQVNTRVQnKTtcbmV4cG9ydCBjb25zdCBzZXRGYXZvcml0ZVBlcmZvcm1lckRldGFpbHMgPSBjcmVhdGVBY3Rpb24oXG4gICdTRVRfRkFWT1JJVEVfUEVSRk9STUVSX0RFVEFJTFMnXG4pO1xuXG5leHBvcnQgY29uc3Qge1xuICBnZXRNeVByb2R1Y3RzLFxuICBnZXRNeVByb2R1Y3RzU3VjY2VzcyxcbiAgZ2V0TXlQcm9kdWN0c0ZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbignZ2V0TXlQcm9kdWN0cycsICdHRVRfTVlfUFJPRFVDVCcpO1xuZXhwb3J0IGNvbnN0IHNldEdldHRpbmdNeVByb2R1Y3RzID0gY3JlYXRlQWN0aW9uKCdzZXRHZXR0aW5nTXlQcm9kdWN0cycpO1xuZXhwb3J0IGNvbnN0IGFkZE15UHJvZHVjdCA9IGNyZWF0ZUFjdGlvbignYWRkTXlQcm9kdWN0Jyk7XG5leHBvcnQgY29uc3QgcmVtb3ZlTXlQcm9kdWN0ID0gY3JlYXRlQWN0aW9uKCdyZW1vdmVNeVByb2R1Y3QnKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgZ2V0RWFybmluZyxcbiAgZ2V0RWFybmluZ1N1Y2Nlc3MsXG4gIGdldEVhcm5pbmdGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ2dldEVhcm5pbmcnLCAnR0VUX0VBUk5JTkcnKTtcbmV4cG9ydCBjb25zdCBzZXRHZXR0aW5nRWFybmluZyA9IGNyZWF0ZUFjdGlvbignU0VUX0dFVFRJTkdfRUFSTklHJyk7XG5cbmV4cG9ydCBjb25zdCB7XG4gIGdldFBheW91dFJlcXVlc3QsXG4gIGdldFBheW91dFJlcXVlc3RTdWNjZXNzLFxuICBnZXRQYXlvdXRSZXF1ZXN0RmFpbFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCdnZXRQYXlvdXRSZXF1ZXN0JywgJ0dFVF9QQVlPVVRfUkVRVUVTVCcpO1xuZXhwb3J0IGNvbnN0IHNldEdldHRpbmdQYXlvdXRSZXF1ZXN0ID0gY3JlYXRlQWN0aW9uKCdTRVRfR0VUVElOR19QQVlPVVRfUkVRVUVTVCcpO1xuZXhwb3J0IGNvbnN0IHJlbW92ZVBheW91dFJlcXVlc3QgPSBjcmVhdGVBY3Rpb24oJ1JFTU9WRV9QQVlPVVRfUkVRVUVTVCcpO1xuXG5leHBvcnQgY29uc3Qge1xuICBnZXRNeVZpZGVvcyxcbiAgZ2V0TXlWaWRlb3NTdWNjZXNzLFxuICBnZXRNeVZpZGVvc0ZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbignZ2V0TXlWaWRlb3MnLCAnR0VUX01ZX1ZJREVPJyk7XG5leHBvcnQgY29uc3Qgc2V0Z2V0dGluZ015VmlkZW9zID0gY3JlYXRlQWN0aW9uKCdzZXRnZXR0aW5nTXlWaWRlb3MnKTtcbmV4cG9ydCBjb25zdCBhZGRNeVZpZGVvcyA9IGNyZWF0ZUFjdGlvbignYWRkTXlWaWRlb3MnKTtcbmV4cG9ydCBjb25zdCByZW1vdmVNeVZpZGVvID0gY3JlYXRlQWN0aW9uKCdyZW1vdmVNeVZpZGVvJyk7XG5cbmV4cG9ydCBjb25zdCB7XG4gIGdldE15UGhvdG9zLFxuICBnZXRNeVBob3Rvc1N1Y2Nlc3MsXG4gIGdldE15UGhvdG9zRmFpbFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCdnZXRNeVBob3RvcycsICdHRVRfTVlfUEhPVE8nKTtcbmV4cG9ydCBjb25zdCBzZXRnZXR0aW5nTXlQaG90b3MgPSBjcmVhdGVBY3Rpb24oJ3NldGdldHRpbmdNeVBob3RvcycpO1xuZXhwb3J0IGNvbnN0IGFkZE15UGhvdG9zID0gY3JlYXRlQWN0aW9uKCdhZGRNeVBob3RvcycpO1xuZXhwb3J0IGNvbnN0IHJlbW92ZU15UGhvdG8gPSBjcmVhdGVBY3Rpb24oJ3JlbW92ZU15UGhvdG8nKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgZ2V0TXlHYWxsZXJpZXMsXG4gIGdldE15R2FsbGVyaWVzU3VjY2VzcyxcbiAgZ2V0TXlHYWxsZXJpZXNGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ2dldE15R2FsbGVyaWVzJywgJ0dFVF9NWV9HQUxMRVJJRVMnKTtcbmV4cG9ydCBjb25zdCBzZXRnZXR0aW5nTXlHYWxsZXJpZXMgPSBjcmVhdGVBY3Rpb24oJ3NldGdldHRpbmdNeUdhbGxlcmllcycpO1xuZXhwb3J0IGNvbnN0IGFkZE15R2FsbGVyaWVzID0gY3JlYXRlQWN0aW9uKCdhZGRNeUdhbGxlcmllcycpO1xuZXhwb3J0IGNvbnN0IHJlbW92ZU15R2FsbGVyaWVzID0gY3JlYXRlQWN0aW9uKCdyZW1vdmVNeUdhbGxlcmllcycpO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQ3VycmVudFBlcmZvcm1lciA9IGNyZWF0ZUFjdGlvbigndXBkYXRlQ3VycmVudFBlcmZvcm1lcicpO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcmZvcm1lckZhdm91cml0ZSA9IGNyZWF0ZUFjdGlvbihcbiAgJ1VQREFURV9QRVJGT1JNRVJfRkFWT1VSSVRFJ1xuKTtcbmV4cG9ydCBjb25zdCB1cGRhdGVDdXJyZW50UGVyZm9ybWVyQmFsYW5jZSA9IGNyZWF0ZUFjdGlvbihcbiAgJ1VQREFURV9DVVJSRU5UX1BFUkZPUk1FUl9CQUxBTkNFJ1xuKTtcbiIsImltcG9ydCB7IGNyZWF0ZUFjdGlvbiB9IGZyb20gJ0BsaWIvcmVkdXgnO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlVUlWYWx1ZSA9IGNyZWF0ZUFjdGlvbigndXBkYXRlVUlWYWx1ZScpO1xuZXhwb3J0IGNvbnN0IGxvYWRVSVZhbHVlID0gY3JlYXRlQWN0aW9uKCdsb2FkVUlWYWx1ZScpO1xuIiwiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgeyBvbWl0IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcbmltcG9ydCB7IGlzVXJsIH0gZnJvbSAnQGxpYi9zdHJpbmcnO1xuaW1wb3J0IHsgSVJlZ2lzdGVyRm9ybURhdGEgfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBnZXRHbG9iYWxDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJlc3BvbnNlPFQ+IHtcbiAgc3RhdHVzOiBudW1iZXI7XG4gIGRhdGE6IFQ7XG59XG5cbmV4cG9ydCBjb25zdCBUT0tFTiA9ICd0b2tlbic7XG5leHBvcnQgY29uc3QgUk9MRSA9ICdyb2xlJztcbmV4cG9ydCBjb25zdCBQRVJGT1JNRVJfUk9MRSA9ICdwZXJmb3JtZXInO1xuZXhwb3J0IGNvbnN0IFVTRVJfUk9MRSA9ICd1c2VyJztcbmV4cG9ydCBjb25zdCBTVFVESU9fUk9MRSA9ICdzdHVkaW8nO1xuZXhwb3J0IGNvbnN0IFNPUlQgPSB7IGRlc2NlbmQ6ICdkZXNjJywgYXNjZW5kOiAnYXNjJyB9O1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQVBJUmVxdWVzdCB7XG4gIHN0YXRpYyB0b2tlbjogc3RyaW5nID0gJyc7XG5cbiAgc2V0QXV0aEhlYWRlclRva2VuKHRva2VuOiBzdHJpbmcpIHtcbiAgICBBUElSZXF1ZXN0LnRva2VuID0gdG9rZW47XG4gIH1cblxuICAvKipcbiAgICogUGFyc2VzIHRoZSBKU09OIHJldHVybmVkIGJ5IGEgbmV0d29yayByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSAge29iamVjdH0gcmVzcG9uc2UgQSByZXNwb25zZSBmcm9tIGEgbmV0d29yayByZXF1ZXN0XG4gICAqXG4gICAqIEByZXR1cm4ge29iamVjdH0gICAgICAgICAgVGhlIHBhcnNlZCBKU09OIGZyb20gdGhlIHJlcXVlc3RcbiAgICovXG4gIHByaXZhdGUgcGFyc2VKU09OKHJlc3BvbnNlOiBSZXNwb25zZSkge1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwNCB8fCByZXNwb25zZS5zdGF0dXMgPT09IDIwNSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGEgbmV0d29yayByZXF1ZXN0IGNhbWUgYmFjayBmaW5lLCBhbmQgdGhyb3dzIGFuIGVycm9yIGlmIG5vdFxuICAgKlxuICAgKiBAcGFyYW0gIHtvYmplY3R9IHJlc3BvbnNlICAgQSByZXNwb25zZSBmcm9tIGEgbmV0d29yayByZXF1ZXN0XG4gICAqXG4gICAqIEByZXR1cm4ge29iamVjdHx1bmRlZmluZWR9IFJldHVybnMgZWl0aGVyIHRoZSByZXNwb25zZSwgb3IgdGhyb3dzIGFuIGVycm9yXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIGNoZWNrU3RhdHVzKHJlc3BvbnNlOiBSZXNwb25zZSkge1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gMjAwICYmIHJlc3BvbnNlLnN0YXR1cyA8IDMwMCkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cblxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQxMykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXF1ZXN0IEVudGl0eSBUb28gTGFyZ2UnKTtcbiAgICB9XG5cbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDMpIHtcbiAgICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLyc7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRm9yYmlkZGVuIGluIHRoZSBhY3Rpb24hJyk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpIGFzIGFueTtcbiAgICAvLyBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgIC8vIHRocm93IGVycm9yO1xuICAgIHRocm93IHJlc3BvbnNlLmNsb25lKCkuanNvbigpO1xuICB9XG5cbiAgcmVxdWVzdChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBtZXRob2Q/OiBzdHJpbmcsXG4gICAgYm9keT86IGFueSxcbiAgICBoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfVxuICApOiBQcm9taXNlPElSZXNwb25zZTxhbnk+PiB7XG4gICAgY29uc3QgdmVyYiA9IChtZXRob2QgfHwgJ2dldCcpLnRvVXBwZXJDYXNlKCk7XG4gICAgY29uc3QgdXBkYXRlZEhlYWRlciA9IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAvLyBUT0RPIC0gY2hlY2sgbWVcbiAgICAgIEF1dGhvcml6YXRpb246XG4gICAgICAgIEFQSVJlcXVlc3QudG9rZW4gfHwgKHByb2Nlc3MuYnJvd3NlciA/IGNvb2tpZS5nZXQoVE9LRU4pIDogJycpLFxuICAgICAgLi4uKGhlYWRlcnMgfHwge30pXG4gICAgfTtcbiAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcblxuICAgIHJldHVybiBmZXRjaChpc1VybCh1cmwpID8gdXJsIDogYCR7Y29uZmlnLkFQSV9FTkRQT0lOVCB8fCBjb25maWcuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UfSR7dXJsfWAsIHtcbiAgICAgIG1ldGhvZDogdmVyYixcbiAgICAgIGhlYWRlcnM6IHVwZGF0ZWRIZWFkZXIsXG4gICAgICBib2R5OiBib2R5ID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBudWxsXG4gICAgfSlcbiAgICAgIC50aGVuKHRoaXMuY2hlY2tTdGF0dXMpXG4gICAgICAudGhlbih0aGlzLnBhcnNlSlNPTik7XG4gIH1cblxuICBidWlsZFVybChiYXNlVXJsOiBzdHJpbmcsIHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbiB9KSB7XG4gICAgaWYgKCFwYXJhbXMpIHtcbiAgICAgIHJldHVybiBiYXNlVXJsO1xuICAgIH1cblxuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gT2JqZWN0LmtleXMocGFyYW1zKVxuICAgICAgLm1hcCgoaykgPT4gYCR7ZW5jb2RlVVJJQ29tcG9uZW50KGspfT0ke2VuY29kZVVSSUNvbXBvbmVudChwYXJhbXNba10pfWApXG4gICAgICAuam9pbignJicpO1xuICAgIHJldHVybiBgJHtiYXNlVXJsfT8ke3F1ZXJ5U3RyaW5nfWA7XG4gIH1cblxuICBnZXQodXJsOiBzdHJpbmcsIGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1cmwsICdnZXQnLCBudWxsLCBoZWFkZXJzKTtcbiAgfVxuXG4gIHBvc3QodXJsOiBzdHJpbmcsIGRhdGE/OiBhbnksIGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1cmwsICdwb3N0JywgZGF0YSwgaGVhZGVycyk7XG4gIH1cblxuICBwdXQodXJsOiBzdHJpbmcsIGRhdGE/OiBhbnksIGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1cmwsICdwdXQnLCBkYXRhLCBoZWFkZXJzKTtcbiAgfVxuXG4gIGRlbCh1cmw6IHN0cmluZywgZGF0YT86IGFueSwgaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHVybCwgJ2RlbGV0ZScsIGRhdGEsIGhlYWRlcnMpO1xuICB9XG5cbiAgdXBsb2FkKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGZpbGVzOiB7XG4gICAgICBmaWxlOiBGaWxlO1xuICAgICAgZmllbGRuYW1lOiBzdHJpbmc7XG4gICAgfVtdLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG9uUHJvZ3Jlc3M6IEZ1bmN0aW9uO1xuICAgICAgY3VzdG9tRGF0YT86IFJlY29yZDxzdHJpbmcsIGFueT47XG4gICAgICBtZXRob2Q/OiBzdHJpbmc7XG4gICAgfSA9IHtcbiAgICAgIG9uUHJvZ3Jlc3MoKSB7fSxcbiAgICAgIG1ldGhvZDogJ1BPU1QnXG4gICAgfVxuICApIHtcbiAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgICBjb25zdCB1cGxvYWRVcmwgPSBpc1VybCh1cmwpID8gdXJsIDogYCR7Y29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0ke3VybH1gO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgcmVxLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQubGVuZ3RoQ29tcHV0YWJsZSkge1xuICAgICAgICAgIG9wdGlvbnMub25Qcm9ncmVzcyh7XG4gICAgICAgICAgICBwZXJjZW50YWdlOiAoZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWwpICogMTAwXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXEuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IHJlcS5zdGF0dXMgPj0gMjAwICYmIHJlcS5zdGF0dXMgPCAzMDA7XG4gICAgICAgIGNvbnN0IHsgcmVzcG9uc2UgfSA9IHJlcTtcbiAgICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChyZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgfSk7XG5cbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG4gICAgICAgIHJlamVjdChyZXEucmVzcG9uc2UpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICBmaWxlcy5mb3JFYWNoKChmKSA9PiBmb3JtRGF0YS5hcHBlbmQoZi5maWVsZG5hbWUsIGYuZmlsZSwgZi5maWxlLm5hbWUpKTtcbiAgICAgIG9wdGlvbnMuY3VzdG9tRGF0YVxuICAgICAgICAmJiBPYmplY3Qua2V5cyhvcHRpb25zLmN1c3RvbURhdGEpLmZvckVhY2goXG4gICAgICAgICAgKGZpZWxkbmFtZSkgPT4gdHlwZW9mIG9wdGlvbnMuY3VzdG9tRGF0YVtmaWVsZG5hbWVdICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgJiYgZm9ybURhdGEuYXBwZW5kKGZpZWxkbmFtZSwgb3B0aW9ucy5jdXN0b21EYXRhW2ZpZWxkbmFtZV0pXG4gICAgICAgICk7XG5cbiAgICAgIHJlcS5yZXNwb25zZVR5cGUgPSAnanNvbic7XG4gICAgICByZXEub3BlbihvcHRpb25zLm1ldGhvZCB8fCAnUE9TVCcsIHVwbG9hZFVybCk7XG5cbiAgICAgIGNvbnN0IHRva2VuOiBhbnkgPSBjb29raWUuZ2V0KFRPS0VOKTtcbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICByZXEuc2V0UmVxdWVzdEhlYWRlcignQXV0aG9yaXphdGlvbicsIHRva2VuKTtcbiAgICAgIH1cbiAgICAgIHJlcS5zZW5kKGZvcm1EYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlZ2lzdGVyKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGRhdGE6IElSZWdpc3RlckZvcm1EYXRhLFxuICAgIG9wdGlvbnM6IHsgb25Qcm9ncmVzczogRnVuY3Rpb24gfSA9IHtcbiAgICAgIG9uUHJvZ3Jlc3MoKSB7fVxuICAgIH1cbiAgKSB7XG4gICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5sZW5ndGhDb21wdXRhYmxlKSB7XG4gICAgICAgICAgb3B0aW9ucy5vblByb2dyZXNzKHtcbiAgICAgICAgICAgIHBlcmNlbnRhZ2U6IChldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCkgKiAxMDBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJlcS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBzdWNjZXNzID0gcmVxLnN0YXR1cyA+PSAyMDAgJiYgcmVxLnN0YXR1cyA8IDMwMDtcbiAgICAgICAgY29uc3QgeyByZXNwb25zZSB9ID0gcmVxO1xuICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgcmVxLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICAgICAgcmVqZWN0KHJlcS5yZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIC8vIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUsIGZpbGUubmFtZSk7XG4gICAgICBpZiAoZGF0YS5kb2N1bWVudFZlcmlmaWNhdGlvbikge1xuICAgICAgICBjb25zdCBkb2N1bWVudFZlcmlmaWNhdGlvbkZpbGUgPSBkYXRhLmRvY3VtZW50VmVyaWZpY2F0aW9uLmZpbGUub3JpZ2luRmlsZU9iajtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFxuICAgICAgICAgICdkb2N1bWVudFZlcmlmaWNhdGlvbicsXG4gICAgICAgICAgZG9jdW1lbnRWZXJpZmljYXRpb25GaWxlLFxuICAgICAgICAgIGRvY3VtZW50VmVyaWZpY2F0aW9uRmlsZS5uYW1lXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhLmlkVmVyaWZpY2F0aW9uKSB7XG4gICAgICAgIGNvbnN0IGlkVmVyaWZpY2F0aW9uRGlsZSA9IGRhdGEuaWRWZXJpZmljYXRpb24uZmlsZS5vcmlnaW5GaWxlT2JqO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXG4gICAgICAgICAgJ2lkVmVyaWZpY2F0aW9uJyxcbiAgICAgICAgICBpZFZlcmlmaWNhdGlvbkRpbGUsXG4gICAgICAgICAgaWRWZXJpZmljYXRpb25EaWxlLm5hbWVcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmtleXMoXG4gICAgICAgIG9taXQoZGF0YSwgWydkb2N1bWVudFZlcmlmaWNhdGlvbicsICdpZFZlcmlmaWNhdGlvbiddKVxuICAgICAgKS5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCh2LCBkYXRhW3ZdKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXEucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xuICAgICAgcmVxLm9wZW4oJ1BPU1QnLCBpc1VybCh1cmwpID8gdXJsIDogYCR7Y29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0ke3VybH1gKTtcblxuICAgICAgY29uc3QgdG9rZW46IGFueSA9IGNvb2tpZS5nZXQoVE9LRU4pO1xuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKCdBdXRob3JpemF0aW9uJywgdG9rZW4pO1xuICAgICAgfVxuICAgICAgcmVxLnNlbmQoZm9ybURhdGEpO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSc7XG5pbXBvcnQge1xuICBJTG9naW4sXG4gIElwZXJmb3JtZXJMb2dpbixcbiAgSVJlZ2lzdGVyRm9ybURhdGEsXG4gIElVc2VyUmVnaXN0ZXJGb3JtRGF0YVxufSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQge1xuICBBUElSZXF1ZXN0LCBUT0tFTiwgSVJlc3BvbnNlLCBST0xFXG59IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgbG9naW4oZGF0YTogSUxvZ2luKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL2F1dGgvdXNlcnMvbG9naW4nLCBkYXRhKTtcbiAgfVxuXG4gIHNldEF1dGhIZWFkZXIodG9rZW46IHN0cmluZywgcm9sZTogc3RyaW5nKSB7XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2pzLWNvb2tpZS9qcy1jb29raWVcbiAgICAvLyBzaW5jZSBTYWZhcmkgZG9lcyBub3Qgc3VwcG9ydCwgbmVlZCBhIGJldHRlciBzb2x1dGlvblxuICAgIGNvb2tpZS5zZXQoVE9LRU4sIHRva2VuLCB7IGV4cGlyZXM6IDM2NSB9KTtcbiAgICBjb29raWUuc2V0KFJPTEUsIHJvbGUsIHsgZXhwaXJlczogMzY1IH0pO1xuICAgIHRoaXMuc2V0QXV0aEhlYWRlclRva2VuKHRva2VuKTtcbiAgfVxuXG4gIHBlcmZvcm1lckxvZ2luKGRhdGE6IElwZXJmb3JtZXJMb2dpbikge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9hdXRoL3BlcmZvcm1lcnMvbG9naW4nLCBkYXRhKTtcbiAgfVxuXG4gIHN0dWRpb0xvZ2luKGRhdGE6IElMb2dpbikge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9hdXRoL3N0dWRpby9sb2dpbicsIGRhdGEpO1xuICB9XG5cbiAgc2V0VG9rZW4odG9rZW46IHN0cmluZyk6IHZvaWQge1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qcy1jb29raWUvanMtY29va2llXG4gICAgLy8gc2luY2UgU2FmYXJpIGRvZXMgbm90IHN1cHBvcnQsIG5lZWQgYSBiZXR0ZXIgc29sdXRpb25cbiAgICBjb29raWUuc2V0KFRPS0VOLCB0b2tlbiwgeyBleHBpcmVzOiAzNjUgfSk7XG4gICAgdGhpcy5zZXRBdXRoSGVhZGVyVG9rZW4odG9rZW4pO1xuICB9XG5cbiAgZ2V0VG9rZW4oKTogc3RyaW5nIHtcbiAgICBjb25zdCB0b2tlbiA9IGNvb2tpZS5nZXQoVE9LRU4pO1xuICAgIHJldHVybiB0b2tlbiB8fCBudWxsO1xuICB9XG5cbiAgZ2V0Um9sZSgpOiBzdHJpbmcge1xuICAgIGNvbnN0IHJvbGUgPSBjb29raWUuZ2V0KFJPTEUpO1xuICAgIHJldHVybiByb2xlIHx8IG51bGw7XG4gIH1cblxuICByZW1vdmVUb2tlbigpOiB2b2lkIHtcbiAgICBjb29raWUucmVtb3ZlKFRPS0VOKTtcbiAgICBjb29raWUucmVtb3ZlKFJPTEUpO1xuICB9XG5cbiAgcmVtb3ZlUmVtZW1iZXIoKTogdm9pZCB7XG4gICAgcHJvY2Vzcy5icm93c2VyICYmIGNvb2tpZS5yZW1vdmUoJ3JlbWVtYmVyTWUnKTtcbiAgfVxuXG4gIHVwZGF0ZVBhc3N3b3JkKGJvZHk6IHsgcGFzc3dvcmQ6IHN0cmluZzsgc291cmNlPzogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5wdXQoJy9hdXRoL3VzZXJzL21lL3Bhc3N3b3JkJywgYm9keSk7XG4gIH1cblxuICBwZXJmb3JtZXJzUmVnaXN0ZXIoZGF0YTogSVJlZ2lzdGVyRm9ybURhdGEpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnJlZ2lzdGVyKCcvYXV0aC9wZXJmb3JtZXJzL3JlZ2lzdGVyJywgZGF0YSk7XG4gIH1cblxuICB1c2VyUmVnaXN0ZXIoZGF0YTogSVVzZXJSZWdpc3RlckZvcm1EYXRhKTogUHJvbWlzZTxJUmVzcG9uc2U8YW55Pj4ge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9hdXRoL3VzZXJzL3JlZ2lzdGVyJywgZGF0YSk7XG4gIH1cblxuICBzdHVkaW9SZWdpc3RlcihkYXRhOiBJUmVnaXN0ZXJGb3JtRGF0YSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMucmVnaXN0ZXIoJy9hdXRoL3N0dWRpby9yZWdpc3RlcicsIGRhdGEpO1xuICB9XG5cbiAgZm9yZ290UGFzc3dvcmQoZW1haWw6IHN0cmluZywgdHlwZTogc3RyaW5nKSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGVtYWlsLFxuICAgICAgdHlwZVxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL2F1dGgvdXNlcnMvZm9yZ290JywgZGF0YSk7XG4gIH1cblxuICByZXNlbmRWZXJpZmljYXRpb25FbWFpbChkYXRhOiB7IGVtYWlsOiBzdHJpbmcsIHNvdXJjZTogc3RyaW5nfSkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy92ZXJpZmljYXRpb24vcmVzZW5kLXZlcmlmaWNhdGlvbi1lbWFpbCcsIGRhdGEpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBhdXRoU2VydmljZSA9IG5ldyBBdXRoU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgSUJhbm5lclNlYXJjaCB9IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIEJhbm5lclNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgc2VhcmNoKHF1ZXJ5OiBJQmFubmVyU2VhcmNoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9iYW5uZXJzL3NlYXJjaCcsIHF1ZXJ5IGFzIGFueSkpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBiYW5uZXJTZXJ2aWNlID0gbmV3IEJhbm5lclNlcnZpY2UoKTtcbiIsImxldCBnbG9iYWxDb25maWcgPSB7fSBhcyBhbnk7XG5cbmV4cG9ydCBjb25zdCBzZXRHbG9iYWxDb25maWcgPSAoY29uZmlnOiBhbnkpID0+IHtcbiAgZ2xvYmFsQ29uZmlnID0gY29uZmlnO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEdsb2JhbENvbmZpZyA9ICgpID0+IGdsb2JhbENvbmZpZztcbiIsImltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuY2xhc3MgRWFybmluZ1NlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgc2VhcmNoKHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0sIHJvbGUgPSAncGVyZm9ybWVyJykge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKGAvZWFybmluZy8ke3JvbGV9L3NlYXJjaGAsIHBhcmFtcykpO1xuICB9XG5cbiAgc3RhdHMocGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSwgcm9sZSA9ICdwZXJmb3JtZXInKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoYC9lYXJuaW5nLyR7cm9sZX0vc3RhdHNgLCBwYXJhbXMpKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZWFybmluZ1NlcnZpY2UgPSBuZXcgRWFybmluZ1NlcnZpY2UoKTtcbiIsImltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuY2xhc3MgRmF2b3VyaXRlU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBsaWtlKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvZmF2b3VyaXRlLyR7aWR9L2xpa2VgKTtcbiAgfVxuXG4gIHVubGlrZShpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL2Zhdm91cml0ZS8ke2lkfS91bmxpa2VgKTtcbiAgfVxuXG4gIGZhdm9yaXRlKGlkOiBzdHJpbmcsIGlzRmF2b3JpdGVkOiBib29sZWFuKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL2Zhdm91cml0ZS8ke2lkfS8ke2lzRmF2b3JpdGVkID8gJ3VubGlrZScgOiAnbGlrZSd9YCk7XG4gIH1cblxuICBzZWFyY2gocXVlcnk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL2Zhdm91cml0ZScsIHF1ZXJ5KSk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGZhdm91cml0ZVNlcnZpY2UgPSBuZXcgRmF2b3VyaXRlU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgSVJlc3BvbnNlLCBJRGF0YVJlc3BvbnNlLCBJUGVyZm9ybWVyR2FsbGVyeSB9IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIEdhbGxlcnlTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIHNlYXJjaChcbiAgICBwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9LFxuICAgIGlzUGVyZm9ybWVyID0gdHJ1ZVxuICApOiBQcm9taXNlPElSZXNwb25zZTxJRGF0YVJlc3BvbnNlPElQZXJmb3JtZXJHYWxsZXJ5Pj4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXQoXG4gICAgICB0aGlzLmJ1aWxkVXJsKFxuICAgICAgICBpc1BlcmZvcm1lclxuICAgICAgICAgID8gJy9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9nYWxsZXJpZXMvc2VhcmNoJ1xuICAgICAgICAgIDogJy91c2VyL3BlcmZvcm1lci1hc3NldHMvZ2FsbGVyaWVzL3NlYXJjaCcsXG4gICAgICAgIHBhcmFtc1xuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwdXJjaGFzZWQocGFyYW1zPzoge1xuICAgIFtrZXk6IHN0cmluZ106IGFueTtcbiAgfSk6IFByb21pc2U8SVJlc3BvbnNlPElEYXRhUmVzcG9uc2U8SVBlcmZvcm1lckdhbGxlcnk+Pj4ge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvcHVyY2hhc2VkLWl0ZW1zL3VzZXIvZ2FsbGVyaWVzJywgcGFyYW1zKSk7XG4gIH1cblxuICBjcmVhdGUoZGF0YSkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9nYWxsZXJpZXMnLCBkYXRhKTtcbiAgfVxuXG4gIHVwZGF0ZShpZCwgZGF0YSkge1xuICAgIHJldHVybiB0aGlzLnB1dChgL3BlcmZvcm1lci9wZXJmb3JtZXItYXNzZXRzL2dhbGxlcmllcy8ke2lkfWAsIGRhdGEpO1xuICB9XG5cbiAgZGV0YWlscyhpZDogc3RyaW5nLCBoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiB0aGlzLmdldChcbiAgICAgIGAvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvZ2FsbGVyaWVzLyR7aWR9L3ZpZXdgLFxuICAgICAgaGVhZGVyc1xuICAgICk7XG4gIH1cblxuICBwdWJsaWNkZXRhaWxzKGlkOiBzdHJpbmcsIGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvdXNlci9wZXJmb3JtZXItYXNzZXRzL2dhbGxlcmllcy8ke2lkfS92aWV3YCwgaGVhZGVycyk7XG4gIH1cblxuICByZW1vdmUoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmRlbChgL3BlcmZvcm1lci9wZXJmb3JtZXItYXNzZXRzL2dhbGxlcmllcy8ke2lkfWApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBnYWxsZXJ5U2VydmljZSA9IG5ldyBHYWxsZXJ5U2VydmljZSgpO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi91c2VyLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9wb3N0LnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9wZXJmb21lci1jYXRlZ29yaWVzLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9wZXJmb21lci5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vdmlkZW8uc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3Byb2R1Y3Quc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3NldHRpbmcuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3Bob3RvLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9nYWxsZXJ5LnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9mYXZvdXJpdGUuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3Rva2VuLXBhY2thZ2Uuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3RyYW5zYWN0aW9uLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zdHJlYW0uc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL21lc3NhZ2Uuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3B1cmNoYXNlLWl0ZW0uc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL29yZGVyLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9lYXJuaW5nLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9wYXlvdXQtcmVxdWVzdCc7XG5leHBvcnQgKiBmcm9tICcuL3JlZnVuZC1yZXF1ZXN0LnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi91dGlscy5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vc3R1ZGlvLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9iYW5uZXIuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3BheW1lbnQtaW5mb3JtYXRpb24uc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3N0cmVhbS5zZXJ2aWNlJztcbiIsImltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcbmltcG9ydCB7IGdldEdsb2JhbENvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcblxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIGdldENvbnZlcnNhdGlvbnMocXVlcnk/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9jb252ZXJzYXRpb25zJywgcXVlcnkpKTtcbiAgfVxuXG4gIHNlYXJjaENvbnZlcnNhdGlvbnMocXVlcnk/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9jb252ZXJzYXRpb25zL3NlYXJjaCcsIHF1ZXJ5KSk7XG4gIH1cblxuICBjcmVhdGVDb252ZXJzYXRpb24oZGF0YTogUmVjb3JkPHN0cmluZywgc3RyaW5nPikge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9jb252ZXJzYXRpb25zJywgZGF0YSk7XG4gIH1cblxuICBnZXRDb252ZXJzYXRpb25EZXRhaWwoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmdldChgL2NvbnZlcnNhdGlvbnMvJHtpZH1gKTtcbiAgfVxuXG4gIGdldENvbnZlcnNhdGlvbkJ5U3RyZWFtSWQoc3RyZWFtSWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmdldChgL2NvbnZlcnNhdGlvbnMvc3RyZWFtLyR7c3RyZWFtSWR9YCk7XG4gIH1cblxuICBnZXRNZXNzYWdlcyhjb252ZXJzYXRpb25JZDogc3RyaW5nLCBxdWVyeT86IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybChgL21lc3NhZ2VzL2NvbnZlcnNhdGlvbnMvJHtjb252ZXJzYXRpb25JZH1gLCBxdWVyeSkpO1xuICB9XG5cbiAgZ2V0UHVibGljTWVzc2FnZXMoY29udmVyc2F0aW9uSWQ6IHN0cmluZywgcXVlcnk/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoYC9tZXNzYWdlcy9jb252ZXJzYXRpb25zL3B1YmxpYy8ke2NvbnZlcnNhdGlvbklkfWAsIHF1ZXJ5KSk7XG4gIH1cblxuICBzZW5kTWVzc2FnZShjb252ZXJzYXRpb25JZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL21lc3NhZ2VzL2NvbnZlcnNhdGlvbnMvJHtjb252ZXJzYXRpb25JZH1gLCBkYXRhKTtcbiAgfVxuXG4gIHNlbmRTdHJlYW1NZXNzYWdlKGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsIGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvbWVzc2FnZXMvc3RyZWFtL2NvbnZlcnNhdGlvbnMvJHtjb252ZXJzYXRpb25JZH1gLCBkYXRhKTtcbiAgfVxuXG4gIHNlbmRQdWJsaWNTdHJlYW1NZXNzYWdlKGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsIGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvbWVzc2FnZXMvc3RyZWFtL3B1YmxpYy9jb252ZXJzYXRpb25zLyR7Y29udmVyc2F0aW9uSWR9YCwgZGF0YSk7XG4gIH1cblxuICBmaW5kUHVibGljQ29udmVyc2F0aW9uUGVyZm9ybWVyKHBlcmZvcm1lcklkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9jb252ZXJzYXRpb25zL3N0cmVhbS9wdWJsaWMvJHtwZXJmb3JtZXJJZH1gKTtcbiAgfVxuXG4gIGNvdW50VG90YWxOb3RSZWFkKCkge1xuICAgIHJldHVybiB0aGlzLmdldCgnL21lc3NhZ2VzL2NvdW50aW5nLW5vdC1yZWFkLW1lc3NhZ2VzJyk7XG4gIH1cblxuICByZWFkQWxsSW5Db252ZXJzYXRpb24oY29udmVyc2F0aW9uSWQ6IHN0cmluZyB8IG51bWJlciwgcmVjaXBpZW50SWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9tZXNzYWdlcy9yZWFkLWFsbCcsIHsgY29udmVyc2F0aW9uSWQsIHJlY2lwaWVudElkIH0pO1xuICB9XG5cbiAgZ2V0TWVzc2FnZVVwbG9hZFVybCgpIHtcbiAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgICByZXR1cm4gYCR7Y29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0vbWVzc2FnZXMvcHJpdmF0ZS9maWxlYDtcbiAgfVxuXG4gIGRlbGV0ZU1lc3NhZ2UoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5kZWwoYC9tZXNzYWdlcy8ke2lkfWApO1xuICB9XG5cbiAgZGVsZXRlQWxsTWVzc2FnZUluQ29udmVyc2F0aW9uKGNvbnZlcnNhdGlvbklkKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVsKGAvbWVzc2FnZXMvJHtjb252ZXJzYXRpb25JZH0vcmVtb3ZlLWFsbC1tZXNzYWdlYCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG1lc3NhZ2VTZXJ2aWNlID0gbmV3IE1lc3NhZ2VTZXJ2aWNlKCk7XG4iLCIvLyBpbXBvcnQgeyBJR2FsbGVyeUNyZWF0ZSB9IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIE9yZGVyU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBzZWFyY2gocGF5bG9hZCkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvb3JkZXJzL3NlYXJjaCcsIHBheWxvYWQpKTtcbiAgfVxuXG4gIGRldGFpbHMoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9vcmRlcnMvZGV0YWlscy8ke2lkfWApO1xuICB9XG5cbiAgdXBkYXRlKGlkLCBkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMucHV0KGAvb3JkZXJzLyR7aWR9L3VwZGF0ZWAsIGRhdGEpO1xuICB9XG5cbiAgdXNlclNlYXJjaChxdWVyeSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvb3JkZXJzL3VzZXIvc2VhcmNoJywgcXVlcnkpKTtcbiAgfVxuXG4gIHVzZXJGaW5kRGV0YWlscyhpZCkge1xuICAgIHJldHVybiB0aGlzLmdldChgL29yZGVycy91c2VyL2RldGFpbHMvJHtpZH1gKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgb3JkZXJTZXJ2aWNlID0gbmV3IE9yZGVyU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5jbGFzcyBQYXltZW50SW5mb3JtYXRpb25TZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIGNyZWF0ZShkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3BheW1lbnQtaW5mb3JtYXRpb24nLCBkYXRhKTtcbiAgfVxuXG4gIGZpbmRPbmUoZGF0YSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvcGF5bWVudC1pbmZvcm1hdGlvbicsIGRhdGEpKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcGF5bWVudEluZm9ybWF0aW9uU2VydmljZSA9IG5ldyBQYXltZW50SW5mb3JtYXRpb25TZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBJUmVzcG9uc2UgfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmNsYXNzIFBheW91dFJlcXVlc3RTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIGNhbGN1bGF0ZShwYXJhbXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0sIHJvbGU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmdldChcbiAgICAgIHRoaXMuYnVpbGRVcmwoYC9lYXJuaW5nLyR7cm9sZSB8fCAncGVyZm9ybWVyJ30vcGF5b3V0YCwgcGFyYW1zKVxuICAgICk7XG4gIH1cblxuICBzZWFyY2gocXVlcnk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3BheW91dC1yZXF1ZXN0cy9wZXJmb3JtZXIvc2VhcmNoJywgcXVlcnkpKTtcbiAgfVxuXG4gIHN0dWRpb1NlYXJjaChxdWVyeTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvcGF5b3V0LXJlcXVlc3RzL3N0dWRpby9zZWFyY2gnLCBxdWVyeSkpO1xuICB9XG5cbiAgY3JlYXRlKGJvZHk6IGFueSwgcm9sZSA9ICdwZXJmb3JtZXInKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL3BheW91dC1yZXF1ZXN0cy8ke3JvbGV9YCwgYm9keSk7XG4gIH1cblxuICB1cGRhdGUoaWQ6IHN0cmluZywgYm9keTogYW55LCByb2xlID0gJ3BlcmZvcm1lcicpIHtcbiAgICByZXR1cm4gdGhpcy5wdXQoYC9wYXlvdXQtcmVxdWVzdHMvJHtyb2xlfS8ke2lkfWAsIGJvZHkpO1xuICB9XG5cbiAgZGV0YWlsKFxuICAgIGlkOiBzdHJpbmcsXG4gICAgaGVhZGVyczoge1xuICAgICAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xuICAgIH0sXG4gICAgcm9sZSA9ICdwZXJmb3JtZXInXG4gICk6IFByb21pc2U8SVJlc3BvbnNlPFBheW91dFJlcXVlc3RTZXJ2aWNlPj4ge1xuICAgIHJldHVybiB0aGlzLmdldChgL3BheW91dC1yZXF1ZXN0cy8ke3JvbGV9LyR7aWR9L3ZpZXdgLCBoZWFkZXJzKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcGF5b3V0UmVxdWVzdFNlcnZpY2UgPSBuZXcgUGF5b3V0UmVxdWVzdFNlcnZpY2UoKTtcbiIsImltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIFBlcmZvcm1lckNhdGVnb3JpZXNTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIGdldExpc3QocXVlcnk/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9wZXJmb3JtZXItY2F0ZWdvcmllcycsIHF1ZXJ5KSk7XG4gIH1cblxuICBkZXRhaWxzKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9wZXJmb3JtZXItY2F0ZWdvcmllcy8ke2lkfS92aWV3YCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHBlcmZvcm1lckNhdGVnb3JpZXMgPSBuZXcgUGVyZm9ybWVyQ2F0ZWdvcmllc1NlcnZpY2UoKTtcbiIsImltcG9ydCB7XG4gIElQZXJmb3JtZXIsXG4gIElDcmVhdGVQZXJmb3JtZXJQcm9kdWN0UGF5bG9hZCxcbiAgSVVwZGF0ZVBlcmZvcm1lclByb2R1Y3RQYXlsb2FkXG59IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IGlzVXJsIH0gZnJvbSAnQGxpYi9zdHJpbmcnO1xuaW1wb3J0IHsgb21pdCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSc7XG5cbmltcG9ydCB7IEFQSVJlcXVlc3QsIElSZXNwb25zZSwgVE9LRU4gfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcbmltcG9ydCB7IGdldEdsb2JhbENvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcblxuZXhwb3J0IGNsYXNzIFBlcmZvcm1lclNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgbWUoaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pOiBQcm9taXNlPElSZXNwb25zZTxJUGVyZm9ybWVyPj4ge1xuICAgIHJldHVybiB0aGlzLmdldCgnL3BlcmZvcm1lcnMvbWUnLCBoZWFkZXJzKTtcbiAgfVxuXG4gIHVwZGF0ZU1lKHBheWxvYWQ6IGFueSkge1xuICAgIHJldHVybiB0aGlzLnB1dCgnL3BlcmZvcm1lcnMnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHNlYXJjaChxdWVyeT86IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3BlcmZvcm1lcnMvc2VhcmNoJywgcXVlcnkpKTtcbiAgfVxuXG4gIGRldGFpbHModXNlcm5hbWU6IHN0cmluZywgaGVhZGVycyA9IHt9KTogUHJvbWlzZTxJUmVzcG9uc2U8SVBlcmZvcm1lcj4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9wZXJmb3JtZXJzLyR7dXNlcm5hbWV9L3ZpZXdgLCBoZWFkZXJzKTtcbiAgfVxuXG4gIGdldEF2YXRhclVwbG9hZFVybCgpIHtcbiAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgICByZXR1cm4gYCR7Y29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0vcGVyZm9ybWVycy9hdmF0YXIvdXBsb2FkYDtcbiAgfVxuXG4gIGdldERvY3VtZW50c1VwbG9hZFVybCgpIHtcbiAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgICByZXR1cm4gYCR7Y29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0vcGVyZm9ybWVycy9kb2N1bWVudHMvdXBsb2FkYDtcbiAgfVxuXG4gIGdldFJlbGVhc2VGb3JtVXJsKCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpO1xuICAgIHJldHVybiBgJHtjb25maWcuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UfS9wZXJmb3JtZXJzL3JlbGVhc2UtZm9ybS91cGxvYWRgO1xuICB9XG5cbiAgbXlQcm9kdWN0KHF1ZXJ5PzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldChcbiAgICAgIHRoaXMuYnVpbGRVcmwoJy9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9wcm9kdWN0cy9zZWFyY2gnLCBxdWVyeSlcbiAgICApO1xuICB9XG5cbiAgY3JlYXRlUHJvZHVjdChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBkYXRhOiBJQ3JlYXRlUGVyZm9ybWVyUHJvZHVjdFBheWxvYWQsXG4gICAgb3B0aW9uczogeyBvblByb2dyZXNzOiBGdW5jdGlvbiB9ID0ge1xuICAgICAgb25Qcm9ncmVzcygpIHt9XG4gICAgfVxuICApOiBQcm9taXNlPElSZXNwb25zZTxhbnk+PiB7XG4gICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5sZW5ndGhDb21wdXRhYmxlKSB7XG4gICAgICAgICAgb3B0aW9ucy5vblByb2dyZXNzKHtcbiAgICAgICAgICAgIHBlcmNlbnRhZ2U6IChldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCkgKiAxMDBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJlcS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBzdWNjZXNzID0gcmVxLnN0YXR1cyA+PSAyMDAgJiYgcmVxLnN0YXR1cyA8IDMwMDtcbiAgICAgICAgY29uc3QgeyByZXNwb25zZSB9ID0gcmVxO1xuICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgcmVxLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICAgICAgcmVqZWN0KHJlcS5yZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIC8vIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUsIGZpbGUubmFtZSk7XG4gICAgICBpZiAoZGF0YS5pbWFnZSkge1xuICAgICAgICBjb25zdCBpbWFnZSA9IGRhdGEuaW1hZ2UuZmlsZS5vcmlnaW5GaWxlT2JqO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgaW1hZ2UsIGltYWdlLm5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YS5kaWdpdGFsRmlsZSkge1xuICAgICAgICBjb25zdCBkaWdpdGFsRmlsZSA9IGRhdGEuZGlnaXRhbEZpbGUuZmlsZS5vcmlnaW5GaWxlT2JqO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2RpZ2l0YWxGaWxlJywgZGlnaXRhbEZpbGUsIGRpZ2l0YWxGaWxlLm5hbWUpO1xuICAgICAgfVxuXG4gICAgICBPYmplY3Qua2V5cyhvbWl0KGRhdGEsIFsnaW1hZ2UnLCAnZGlnaXRhbEZpbGUnXSkpLmZvckVhY2goKHYpID0+IHtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKHYsIGRhdGFbdl0pO1xuICAgICAgfSk7XG5cbiAgICAgIHJlcS5yZXNwb25zZVR5cGUgPSAnanNvbic7XG4gICAgICByZXEub3BlbignUE9TVCcsIGlzVXJsKHVybCkgPyB1cmwgOiBgJHtjb25maWcuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UfSR7dXJsfWApO1xuXG4gICAgICBjb25zdCB0b2tlbjogYW55ID0gY29va2llLmdldChUT0tFTik7XG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCB0b2tlbik7XG4gICAgICB9XG4gICAgICByZXEuc2VuZChmb3JtRGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVQcm9kdWN0KFxuICAgIHVybDogc3RyaW5nLFxuICAgIGRhdGE6IElVcGRhdGVQZXJmb3JtZXJQcm9kdWN0UGF5bG9hZCxcbiAgICBvcHRpb25zOiB7IG9uUHJvZ3Jlc3M6IEZ1bmN0aW9uIH0gPSB7XG4gICAgICBvblByb2dyZXNzKCkge31cbiAgICB9XG4gICk6IFByb21pc2U8SVJlc3BvbnNlPGFueT4+IHtcbiAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50Lmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgICBvcHRpb25zLm9uUHJvZ3Jlc3Moe1xuICAgICAgICAgICAgcGVyY2VudGFnZTogKGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsKSAqIDEwMFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmVxLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSByZXEuc3RhdHVzID49IDIwMCAmJiByZXEuc3RhdHVzIDwgMzAwO1xuICAgICAgICBjb25zdCB7IHJlc3BvbnNlIH0gPSByZXE7XG4gICAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICAgIHJldHVybiByZWplY3QocmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgICByZWplY3QocmVxLnJlc3BvbnNlKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgLy8gZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSwgZmlsZS5uYW1lKTtcbiAgICAgIGlmIChkYXRhLmltYWdlICYmIGRhdGEuaW1hZ2UuZmlsZSkge1xuICAgICAgICBjb25zdCBpbWFnZSA9IGRhdGEuaW1hZ2UuZmlsZS5vcmlnaW5GaWxlT2JqO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgaW1hZ2UsIGltYWdlLm5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YS5kaWdpdGFsRmlsZSAmJiBkYXRhLmRpZ2l0YWxGaWxlLmZpbGUpIHtcbiAgICAgICAgY29uc3QgZGlnaXRhbEZpbGUgPSBkYXRhLmRpZ2l0YWxGaWxlLmZpbGUub3JpZ2luRmlsZU9iajtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdkaWdpdGFsRmlsZScsIGRpZ2l0YWxGaWxlLCBkaWdpdGFsRmlsZS5uYW1lKTtcbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmtleXMob21pdChkYXRhLCBbJ2ltYWdlJywgJ2RpZ2l0YWxGaWxlJ10pKS5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCh2LCBkYXRhW3ZdKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXEucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xuICAgICAgcmVxLm9wZW4oJ1BVVCcsIGlzVXJsKHVybCkgPyB1cmwgOiBgJHtjb25maWcuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UfSR7dXJsfWApO1xuXG4gICAgICBjb25zdCB0b2tlbjogYW55ID0gY29va2llLmdldChUT0tFTik7XG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCB0b2tlbik7XG4gICAgICB9XG4gICAgICByZXEuc2VuZChmb3JtRGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVQcm9kdWN0KGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5kZWwoYC9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9wcm9kdWN0cy8ke2lkfWApO1xuICB9XG5cbiAgZ2V0Q29tbWlzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoJy9zZXR0aW5ncy9wZXJmb3JtZXIvY29tbWlzc2lvbicpO1xuICB9XG5cbiAgdXBkYXRlUGF5bWVudEluZm8ocGF5bG9hZCk6IFByb21pc2U8SVJlc3BvbnNlPElQZXJmb3JtZXI+PiB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3BlcmZvcm1lcnMvYmFuay10cmFuc2Zlci91cGRhdGUnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHVwZGF0ZURpcmVjdERlcG9zdChwYXlsb2FkKTogUHJvbWlzZTxJUmVzcG9uc2U8SVBlcmZvcm1lcj4+IHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvcGVyZm9ybWVycy9kaXJlY3QtZGVwb3NpdC91cGRhdGUnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHVwZGF0ZVBheHVtKHBheWxvYWQpOiBQcm9taXNlPElSZXNwb25zZTxJUGVyZm9ybWVyPj4ge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9wZXJmb3JtZXJzL3BheHVtL3VwZGF0ZScsIHBheWxvYWQpO1xuICB9XG5cbiAgdXBkYXRlQml0cGF5KHBheWxvYWQpOiBQcm9taXNlPElSZXNwb25zZTxJUGVyZm9ybWVyPj4ge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9wZXJmb3JtZXJzL2JpdHBheS91cGRhdGUnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHVwZGF0ZVN0cmVhbWluZ1N0YXR1cyhwYXlsb2FkOiB7XG4gICAgc3RhdHVzOiBzdHJpbmc7XG4gIH0pOiBQcm9taXNlPElSZXNwb25zZTxJUGVyZm9ybWVyPj4ge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9wZXJmb3JtZXJzL3N0cmVhbWluZy1zdGF0dXMvdXBkYXRlJywgcGF5bG9hZCk7XG4gIH1cblxuICBnZW9CbG9jayhwYXlsb2FkOiB7dXNlcklkcz86IHN0cmluZ1tdLCBjb3VudHJpZXM/OiBzdHJpbmdbXX0pOiBQcm9taXNlPElSZXNwb25zZTxhbnk+PiB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3BlcmZvcm1lcnMvYmxvY2tpbmcvdXBkYXRlJywgcGF5bG9hZCk7XG4gIH1cblxuICBnZXRCbG9ja2VkTGlzdCgpOiBQcm9taXNlPElSZXNwb25zZTxhbnk+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9wZXJmb3JtZXJzL2Jsb2NraW5nJykpO1xuICB9XG5cbiAgaW5jcmVhc2VWaWV3KHBlcmZvcm1lcklkKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL3BlcmZvcm1lcnMvJHtwZXJmb3JtZXJJZH0vaW5jLXZpZXdgKTtcbiAgfVxuXG4gIHVwZGF0ZURlZmF1bHRQcmljZShwYXlsb2FkKTogUHJvbWlzZTxJUmVzcG9uc2U8SVBlcmZvcm1lcj4+IHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvcGVyZm9ybWVycy9kZWZhdWx0LXByaWNlL3VwZGF0ZScsIHBheWxvYWQpO1xuICB9XG5cbiAgdXBkYXRlQnJvYWRjYXN0U2V0dGluZyhwYXlsb2FkKTogUHJvbWlzZTxJUmVzcG9uc2U8YW55Pj4ge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9wZXJmb3JtZXJzL2Jyb2FkY2FzdC1zZXR0aW5nL3VwZGF0ZScsIHBheWxvYWQpO1xuICB9XG5cbiAgc3VzcGVuZEFjY291bnQocGFzc3dvcmQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9wZXJmb3JtZXJzL3N1c3BlbmQtYWNjb3VudCcsIHsgcGFzc3dvcmQgfSk7XG4gIH1cblxuICBjaGVja0Jsb2NrKHBlcmZvcm1lcklkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9wZXJmb3JtZXJzLyR7cGVyZm9ybWVySWR9L2NoZWNrLWJsb2NraW5nYCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IEdFTk5ERVJfUEVSRk9STUVSID0gWydmZW1hbGUnLCAndHJhbnNnZW5kZXInLCAnbWFsZSddO1xuXG5leHBvcnQgY29uc3QgcGVyZm9ybWVyU2VydmljZSA9IG5ldyBQZXJmb3JtZXJTZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBvbWl0IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGlzVXJsIH0gZnJvbSAnQGxpYi9zdHJpbmcnO1xuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnO1xuaW1wb3J0IHsgVE9LRU4gfSBmcm9tICdzcmMvc2VydmljZXMvYXBpLXJlcXVlc3QnO1xuaW1wb3J0IHtcbiAgSVJlc3BvbnNlLFxuICBJUGVyZm9ybWVyUGhvdG9QYXlsb2FkLFxuICBJRGF0YVJlc3BvbnNlLFxuICBJUGhvdG9cbn0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuaW1wb3J0IHsgZ2V0R2xvYmFsQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuXG5leHBvcnQgY2xhc3MgUGhvdG9TZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIHNlYXJjaChwYXJhbXM/OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xuICB9KTogUHJvbWlzZTxJUmVzcG9uc2U8SURhdGFSZXNwb25zZTxJUGhvdG8+Pj4ge1xuICAgIHJldHVybiB0aGlzLmdldChcbiAgICAgIHRoaXMuYnVpbGRVcmwoJy9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9waG90b3Mvc2VhcmNoJywgcGFyYW1zKVxuICAgICk7XG4gIH1cblxuICBzZWFyY2hCeUdhbGxlcnkoXG4gICAgZ2FsbGVyeUlkOiBzdHJpbmcsXG4gICAgcGFyYW1zPzoge1xuICAgICAgW2tleTogc3RyaW5nXTogYW55O1xuICAgIH0sXG4gICAgaGVhZGVycz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KFxuICAgICAgdGhpcy5idWlsZFVybChcbiAgICAgICAgYC91c2VyL3BlcmZvcm1lci1hc3NldHMvcGhvdG9zLyR7Z2FsbGVyeUlkfS9zZWFyY2hgLFxuICAgICAgICBwYXJhbXNcbiAgICAgICksXG4gICAgICBoZWFkZXJzXG4gICAgKTtcbiAgfVxuXG4gIGRldGFpbHMoaWQ6IHN0cmluZywgaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9waG90b3MvJHtpZH0vdmlld2AsIGhlYWRlcnMpO1xuICB9XG5cbiAgbXlQaG90b3MocXVlcnk/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KFxuICAgICAgdGhpcy5idWlsZFVybCgnL3BlcmZvcm1lci9wZXJmb3JtZXItYXNzZXRzL3Bob3Rvcy9zZWFyY2gnLCBxdWVyeSlcbiAgICApO1xuICB9XG5cbiAgcmVtb3ZlKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5kZWwoYC9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9waG90b3MvJHtpZH1gKTtcbiAgfVxuXG4gIGNyZWF0ZShcbiAgICB1cmw6IHN0cmluZyxcbiAgICBkYXRhOiBJUGVyZm9ybWVyUGhvdG9QYXlsb2FkLFxuICAgIG9wdGlvbnM6IHsgb25Qcm9ncmVzczogRnVuY3Rpb24gfSA9IHtcbiAgICAgIG9uUHJvZ3Jlc3MoKSB7fVxuICAgIH1cbiAgKTogUHJvbWlzZTxJUmVzcG9uc2U8YW55Pj4ge1xuICAgIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgcmVxLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQubGVuZ3RoQ29tcHV0YWJsZSkge1xuICAgICAgICAgIG9wdGlvbnMub25Qcm9ncmVzcyh7XG4gICAgICAgICAgICBwZXJjZW50YWdlOiAoZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWwpICogMTAwXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXEuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IHJlcS5zdGF0dXMgPj0gMjAwICYmIHJlcS5zdGF0dXMgPCAzMDA7XG4gICAgICAgIGNvbnN0IHsgcmVzcG9uc2UgfSA9IHJlcTtcbiAgICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChyZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgfSk7XG5cbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG4gICAgICAgIHJlamVjdChyZXEucmVzcG9uc2UpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAvLyBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlLCBmaWxlLm5hbWUpO1xuICAgICAgaWYgKGRhdGEucGhvdG8pIHtcbiAgICAgICAgY29uc3QgcGhvdG8gPSBkYXRhLnBob3RvLmZpbGUub3JpZ2luRmlsZU9iajtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwaG90bycsIHBob3RvLCBwaG90by5uYW1lKTtcbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmtleXMob21pdChkYXRhLCBbJ3Bob3RvJ10pKS5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCh2LCBkYXRhW3ZdKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXEucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xuICAgICAgcmVxLm9wZW4oJ1BPU1QnLCBpc1VybCh1cmwpID8gdXJsIDogYCR7Y29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0ke3VybH1gKTtcblxuICAgICAgY29uc3QgdG9rZW46IGFueSA9IGNvb2tpZS5nZXQoVE9LRU4pO1xuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKCdBdXRob3JpemF0aW9uJywgdG9rZW4pO1xuICAgICAgfVxuICAgICAgcmVxLnNlbmQoZm9ybURhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGRhdGE6IElQZXJmb3JtZXJQaG90b1BheWxvYWQsXG4gICAgb3B0aW9uczogeyBvblByb2dyZXNzOiBGdW5jdGlvbiB9ID0ge1xuICAgICAgb25Qcm9ncmVzcygpIHt9XG4gICAgfVxuICApOiBQcm9taXNlPElSZXNwb25zZTxhbnk+PiB7XG4gICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5sZW5ndGhDb21wdXRhYmxlKSB7XG4gICAgICAgICAgb3B0aW9ucy5vblByb2dyZXNzKHtcbiAgICAgICAgICAgIHBlcmNlbnRhZ2U6IChldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCkgKiAxMDBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJlcS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBzdWNjZXNzID0gcmVxLnN0YXR1cyA+PSAyMDAgJiYgcmVxLnN0YXR1cyA8IDMwMDtcbiAgICAgICAgY29uc3QgeyByZXNwb25zZSB9ID0gcmVxO1xuICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgcmVxLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICAgICAgcmVqZWN0KHJlcS5yZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIC8vIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUsIGZpbGUubmFtZSk7XG4gICAgICBpZiAoZGF0YS5waG90byAmJiBkYXRhLnBob3RvLmZpbGUpIHtcbiAgICAgICAgY29uc3QgcGhvdG8gPSBkYXRhLnBob3RvLmZpbGUub3JpZ2luRmlsZU9iajtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwaG90bycsIHBob3RvLCBwaG90by5uYW1lKTtcbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmtleXMob21pdChkYXRhLCBbJ3Bob3RvJ10pKS5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCh2LCBkYXRhW3ZdKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXEucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xuICAgICAgcmVxLm9wZW4oJ1BVVCcsIGlzVXJsKHVybCkgPyB1cmwgOiBgJHtjb25maWcuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UfSR7dXJsfWApO1xuXG4gICAgICBjb25zdCB0b2tlbjogYW55ID0gY29va2llLmdldChUT0tFTik7XG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCB0b2tlbik7XG4gICAgICB9XG4gICAgICByZXEuc2VuZChmb3JtRGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICB1cGxvYWRJbWFnZXMoZmlsZTogRmlsZSwgcGF5bG9hZDogYW55LCBvblByb2dyZXNzPzogRnVuY3Rpb24pIHtcbiAgICByZXR1cm4gdGhpcy51cGxvYWQoXG4gICAgICAnL3BlcmZvcm1lci9wZXJmb3JtZXItYXNzZXRzL3Bob3Rvcy91cGxvYWQnLFxuICAgICAgW1xuICAgICAgICB7XG4gICAgICAgICAgZmllbGRuYW1lOiAncGhvdG8nLFxuICAgICAgICAgIGZpbGVcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIHtcbiAgICAgICAgb25Qcm9ncmVzcyxcbiAgICAgICAgY3VzdG9tRGF0YTogcGF5bG9hZFxuICAgICAgfVxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHBob3RvU2VydmljZSA9IG5ldyBQaG90b1NlcnZpY2UoKTtcbiIsImltcG9ydCB7IElQb3N0U2VhcmNoIH0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5leHBvcnQgY2xhc3MgUG9zdFNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgc2VhcmNoKHF1ZXJ5OiBJUG9zdFNlYXJjaCkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvcG9zdHMvc2VhcmNoJywgcXVlcnkgYXMgYW55KSk7XG4gIH1cblxuICBmaW5kQnlJZChpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvcG9zdHMvJHtpZH1gKTtcbiAgfVxuXG4gIGNyZWF0ZUNvbnRhY3RDb3RlbnQoZGF0YTogUmVjb3JkPHN0cmluZywgYW55Pikge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9jb250YWN0JywgeyAuLi5kYXRhIH0pO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBwb3N0U2VydmljZSA9IG5ldyBQb3N0U2VydmljZSgpO1xuIiwiaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5leHBvcnQgY2xhc3MgUHJvZHVjdFNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgZGV0YWlscyhpZDogc3RyaW5nLCBoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9wcm9kdWN0cy8ke2lkfS92aWV3YCwgaGVhZGVycyk7XG4gIH1cblxuICBzZWFyY2gocGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvdXNlci9wZXJmb3JtZXItYXNzZXRzL3Byb2R1Y3RzL3NlYXJjaCcsIHBhcmFtcykpO1xuICB9XG5cbiAgcHVyY2hhc2VkKHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3B1cmNoYXNlZC1pdGVtcy91c2VyL3Byb2R1Y3RzJywgcGFyYW1zKSk7XG4gIH1cblxuICBnZXREb3dubG9hZExpbmsoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmdldChgL3VzZXIvcGVyZm9ybWVyLWFzc2V0cy9wcm9kdWN0cy8ke2lkfS9kb3dubG9hZC1saW5rYCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHByb2R1Y3RTZXJ2aWNlID0gbmV3IFByb2R1Y3RTZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBQdXJjaGFzZUl0ZW1TZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIHNlYXJjaChxdWVyeSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvcHVyY2hhc2VkLWl0ZW1zL3VzZXIvc2VhcmNoJywgcXVlcnkpKTtcbiAgfVxuXG4gIHB1cmNoYXNlSXRlbShpZDogc3RyaW5nLCB0eXBlOiBzdHJpbmcsIGRhdGE/OiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvcHVyY2hhc2UtaXRlbXMvJHt0eXBlfS8ke2lkfWAsIGRhdGEpO1xuICB9XG5cbiAgcHVyY2hhc2VQcm9kdWN0KGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvcHVyY2hhc2UtaXRlbXMvcHJvZHVjdC8ke2lkfWApO1xuICB9XG5cbiAgcHVyY2hhc2VWaWRlbyhpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL3B1cmNoYXNlLWl0ZW1zL3ZpZGVvLyR7aWR9YCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHB1cmNoYXNlSXRlbVNlcnZpY2UgPSBuZXcgUHVyY2hhc2VJdGVtU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5leHBvcnQgY2xhc3MgUmVmdW5kUmVxdWVzdFNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgY3JlYXRlKGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvcmVmdW5kLXJlcXVlc3RzJywgZGF0YSk7XG4gIH1cblxuICBzZWFyY2gocGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvcmVmdW5kLXJlcXVlc3RzL3NlYXJjaCcsIHBhcmFtcykpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZWZ1bmRSZXF1ZXN0U2VydmljZSA9IG5ldyBSZWZ1bmRSZXF1ZXN0U2VydmljZSgpO1xuIiwiaW1wb3J0IHsgSVNldHRpbmcsIElDb3VudHJpZXMgfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBBUElSZXF1ZXN0LCBJUmVzcG9uc2UgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIFNldHRpbmdTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIGFsbChncm91cCA9ICcnKTogUHJvbWlzZTxJUmVzcG9uc2U8SVNldHRpbmc+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9zZXR0aW5ncy9wdWJsaWMnLCB7IGdyb3VwIH0pKTtcbiAgfVxuXG4gIGdldENvdW50cmllcygpOiBQcm9taXNlPElSZXNwb25zZTxJQ291bnRyaWVzW10+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KCcvY291bnRyaWVzL2xpc3QnKTtcbiAgfVxuXG4gIGdldFRpbWV6b25lcygpOiBQcm9taXNlPElSZXNwb25zZTxzdHJpbmdbXT4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXQoJy90aW1lem9uZXMvbGlzdCcpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzZXR0aW5nU2VydmljZSA9IG5ldyBTZXR0aW5nU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgSU9uZVRpbWVUb2tlbiwgU3RyZWFtU2V0dGluZ3MgfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBnZXRSZXNwb25zZUVycm9yIH0gZnJvbSAnc3JjL2xpYic7XG5pbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmNsYXNzIFN0cmVhbVNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgZ2V0U2Vzc2lvbklkKGlkOiBzdHJpbmcsIHR5cGU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmdldChgL3N0cmVhbWluZy9zZXNzaW9uLyR7aWR9LyR7dHlwZX1gKTtcbiAgfVxuXG4gIGdvTGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvc3RyZWFtaW5nL2xpdmUnKTtcbiAgfVxuXG4gIGpvaW5QdWJsaWNDaGF0KHBlcmZvcm1lcklkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvc3RyZWFtaW5nL2pvaW4vJHtwZXJmb3JtZXJJZH1gKTtcbiAgfVxuXG4gIHJlcXVlc3RQcml2YXRlQ2hhdChwZXJmb3JtZXJJZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL3N0cmVhbWluZy9wcml2YXRlLWNoYXQvJHtwZXJmb3JtZXJJZH1gKTtcbiAgfVxuXG4gIGFjY2VwdFByaXZhdGVDaGF0KGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9zdHJlYW1pbmcvcHJpdmF0ZS1jaGF0LyR7aWR9YCk7XG4gIH1cblxuICBzdGFydEdyb3VwQ2hhdCgpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvc3RyZWFtaW5nL2dyb3VwLWNoYXQnKTtcbiAgfVxuXG4gIGpvaW5Hcm91cENoYXQoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmdldChgL3N0cmVhbWluZy9ncm91cC1jaGF0LyR7aWR9YCk7XG4gIH1cblxuICBnZW5lcmF0ZU9uZVRpbWVUb2tlbihkYXRhOiBJT25lVGltZVRva2VuKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3N0cmVhbWluZy90b2tlbicsIGRhdGEpO1xuICB9XG5cbiAgYXN5bmMgZ2V0UHVibGlzaFRva2VuKG9wdGlvbnM6IHtcbiAgICBzdHJlYW1JZDogc3RyaW5nLFxuICAgIHNldHRpbmdzOiBTdHJlYW1TZXR0aW5nc1xuICAgIH0sIGV4cGlyZURhdGUgPSBtb21lbnQoKS5hZGQoMSwgJ2QnKS50b0RhdGUoKS5nZXRUaW1lKCkpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHNldHRpbmdzLCBzdHJlYW1JZCB9ID0gb3B0aW9ucztcbiAgICAgIGNvbnN0IHsgc2VjdXJlT3B0aW9uIH0gPSBzZXR0aW5ncztcbiAgICAgIGlmIChzZWN1cmVPcHRpb24pIHtcbiAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IHRoaXMuZ2VuZXJhdGVPbmVUaW1lVG9rZW4oe1xuICAgICAgICAgIGlkOiBzdHJlYW1JZCxcbiAgICAgICAgICB0eXBlOiAncHVibGlzaCcsXG4gICAgICAgICAgZXhwaXJlRGF0ZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3AuZGF0YS50b2tlbklkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGVycik7XG4gICAgICBtZXNzYWdlLmVycm9yKGdldFJlc3BvbnNlRXJyb3IoZXJyb3IpKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFN1YnNjcmliZXJUb2tlbihvcHRpb25zOiB7XG4gICAgc3RyZWFtSWQ6IHN0cmluZyxcbiAgICBzZXR0aW5nczogU3RyZWFtU2V0dGluZ3NcbiAgICB9LCBleHBpcmVEYXRlID0gbW9tZW50KCkuYWRkKDEsICdkJykudG9EYXRlKCkuZ2V0VGltZSgpKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBzZXR0aW5ncywgc3RyZWFtSWQgfSA9IG9wdGlvbnM7XG4gICAgICBjb25zdCB7IHNlY3VyZU9wdGlvbiB9ID0gc2V0dGluZ3M7XG4gICAgICBpZiAoc2VjdXJlT3B0aW9uKSB7XG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCB0aGlzLmdlbmVyYXRlT25lVGltZVRva2VuKHtcbiAgICAgICAgICBpZDogc3RyZWFtSWQsXG4gICAgICAgICAgdHlwZTogJ3BsYXknLFxuICAgICAgICAgIGV4cGlyZURhdGVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXNwLmRhdGEudG9rZW5JZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zdCBlcnJvciA9IGF3YWl0IFByb21pc2UucmVzb2x2ZShlcnIpO1xuICAgICAgbWVzc2FnZS5lcnJvcihnZXRSZXNwb25zZUVycm9yKGVycm9yKSk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRMaXZlU3RyZWFtT3JWb2RVUkwob3B0aW9uczoge1xuICAgIHN0cmVhbUlkOiBzdHJpbmcsXG4gICAgc2V0dGluZ3M6IFN0cmVhbVNldHRpbmdzLFxuICAgIGFwcE5hbWU6IHN0cmluZ1xuICAgIH0sIGV4cGlyZURhdGUgPSBtb21lbnQoKS5hZGQoMSwgJ2QnKS50b0RhdGUoKS5nZXRUaW1lKCksIF9wbGF5ZXIgPSAnaGxzJykge1xuICAgIC8vIGh0dHA6Ly9bSVBfQWRkcmVzc10vPEFwcGxpY2F0aW9uX05hbWU+L3N0cmVhbXMvc3RyZWFtSUQubXA0P3Rva2VuPXRva2VuSWRcbiAgICAvLyBodHRwOi8vW0lQX0FkZHJlc3NdLzxBcHBsaWNhdGlvbl9OYW1lPi9zdHJlYW1zL3N0cmVhbUlELm0zdTg/dG9rZW49dG9rZW5JZFxuICAgIC8vIGh0dHA6Ly9bSVBfQWRkcmVzc10vPEFwcGxpY2F0aW9uX05hbWU+L3BsYXkuaHRtbD9uYW1lPXN0cmVhbUlEJnBsYXlPcmRlcj1obHMmdG9rZW49dG9rZW5JZFxuICAgIHRyeSB7XG4gICAgICAvLyBjb25zdCBzcmMgPSBgaHR0cHM6Ly8ke3ZpZXdlclVSTH06NTQ0My8ke2FwcE5hbWV9L3N0cmVhbXMvJHtzdHJlYW1JZH0ubTN1OCR7b25lVGltZVRva2VuID8gYD90b2tlbj0ke29uZVRpbWVUb2tlbn1gIDogJyd9YDtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zaGFkb3dcbiAgICAgIGNvbnN0IHsgYXBwTmFtZSwgc2V0dGluZ3MsIHN0cmVhbUlkIH0gPSBvcHRpb25zO1xuICAgICAgY29uc3QgeyBzZWN1cmVPcHRpb24sIHZpZXdlclVSTCB9ID0gc2V0dGluZ3M7XG4gICAgICBjb25zdCBleHRlbnNpb24gPSBfcGxheWVyID09PSAnaGxzJyA/ICdtM3U4JyA6ICdtcDQnO1xuICAgICAgaWYgKCF2aWV3ZXJVUkwgfHwgIWFwcE5hbWUpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuXG4gICAgICBsZXQgb25lVGltZVRva2VuID0gJyc7XG4gICAgICBpZiAoc2VjdXJlT3B0aW9uKSB7XG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCB0aGlzLmdlbmVyYXRlT25lVGltZVRva2VuKHtcbiAgICAgICAgICBpZDogc3RyZWFtSWQsXG4gICAgICAgICAgdHlwZTogJ3BsYXknLFxuICAgICAgICAgIGV4cGlyZURhdGVcbiAgICAgICAgfSk7XG4gICAgICAgIG9uZVRpbWVUb2tlbiA9IHJlc3AuZGF0YS50b2tlbklkO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7IHByb3RvY29sIH0gPSB3aW5kb3cubG9jYXRpb247XG4gICAgICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke3ZpZXdlclVSTH0vJHthcHBOYW1lfS9zdHJlYW1zLyR7c3RyZWFtSWR9LiR7ZXh0ZW5zaW9ufSR7b25lVGltZVRva2VuID8gYD90b2tlbj0ke29uZVRpbWVUb2tlbn1gIDogJyd9YDtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGVycik7XG4gICAgICBtZXNzYWdlLmVycm9yKGdldFJlc3BvbnNlRXJyb3IoZXJyb3IpKTtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHN0cmVhbVNlcnZpY2UgPSBuZXcgU3RyZWFtU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgSVN0dWRpbyB9IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEFQSVJlcXVlc3QsIElSZXNwb25zZSB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuaW1wb3J0IHsgZ2V0R2xvYmFsQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuXG5leHBvcnQgY2xhc3MgU3R1ZGlvU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBtZShoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSk6IFByb21pc2U8SVJlc3BvbnNlPElTdHVkaW8+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KCcvc3R1ZGlvL21lJywgaGVhZGVycyk7XG4gIH1cblxuICB1cGRhdGUocGF5bG9hZDogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMucHV0KCcvc3R1ZGlvL3VwZGF0ZScsIHBheWxvYWQpO1xuICB9XG5cbiAgdXBkYXRlUGF5bWVudEluZm8ocGF5bG9hZCk6IFByb21pc2U8SVJlc3BvbnNlPElTdHVkaW8+PiB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3N0dWRpby9iYW5rLXRyYW5zZmVyL3VwZGF0ZScsIHBheWxvYWQpO1xuICB9XG5cbiAgdXBkYXRlRGlyZWN0RGVwb3N0KHBheWxvYWQpOiBQcm9taXNlPElSZXNwb25zZTxJU3R1ZGlvPj4ge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9zdHVkaW8vZGlyZWN0LWRlcG9zaXQvdXBkYXRlJywgcGF5bG9hZCk7XG4gIH1cblxuICB1cGRhdGVQYXh1bShwYXlsb2FkKTogUHJvbWlzZTxJUmVzcG9uc2U8SVN0dWRpbz4+IHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvc3R1ZGlvL3BheHVtL3VwZGF0ZScsIHBheWxvYWQpO1xuICB9XG5cbiAgdXBkYXRlQml0cGF5KHBheWxvYWQpOiBQcm9taXNlPElSZXNwb25zZTxJU3R1ZGlvPj4ge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9zdHVkaW8vYml0cGF5L3VwZGF0ZScsIHBheWxvYWQpO1xuICB9XG5cbiAgZ2V0Q29tbWlzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoJy9zZXR0aW5ncy9zdHVkaW8vY29tbWlzc2lvbicpO1xuICB9XG5cbiAgYWRkTW9kZWwocGF5bG9hZCkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9zdHVkaW8vbWVtYmVycycsIHBheWxvYWQpO1xuICB9XG5cbiAgZ2V0TWVtYmVycyhwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9zdHVkaW8vbWVtYmVycycsIHBhcmFtcykpO1xuICB9XG5cbiAgZ2V0TWVtYmVyQ29tbWlzc2lvbnMocGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvc3R1ZGlvL2NvbW1pc3Npb24nLCBwYXJhbXMpKTtcbiAgfVxuXG4gIHVwZGF0ZU1lbWJlckNvbW1pc3Npb24oaWQ6IHN0cmluZywgcGF5bG9hZDogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMucHV0KGAvc3R1ZGlvL2NvbW1pc3Npb24vbWVtYmVyLyR7aWR9YCwgcGF5bG9hZCk7XG4gIH1cblxuICBnZXRQZXJmb3JtZXJSZXF1ZXN0KHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoXG4gICAgICB0aGlzLmJ1aWxkVXJsKCcvcGF5b3V0LXJlcXVlc3RzL3N0dWRpby9wZXJmb3JtZXItcmVxdWVzdCcsIHBhcmFtcylcbiAgICApO1xuICB9XG5cbiAgdXBkYXRlU3RhdHVzUGVyZm9ybWVyUmVxdWVzdChpZDogc3RyaW5nLCBwYXlsb2FkKSB7XG4gICAgcmV0dXJuIHRoaXMucHV0KGAvcGF5b3V0LXJlcXVlc3RzL3N0dWRpby91cGRhdGUvJHtpZH1gLCB7IC4uLnBheWxvYWQgfSk7XG4gIH1cblxuICB1cGRhdGVNZW1iZXJTdGF0dXMoaWQ6IHN0cmluZywgc3RhdHVzOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvc3R1ZGlvL21lbWJlcnMvJHtpZH0vJHtzdGF0dXN9YCk7XG4gIH1cblxuICBzdGF0cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoJy9zdHVkaW8vc3RhdHMnKTtcbiAgfVxuXG4gIGdldERvY3VtZW50c1VwbG9hZFVybCgpIHtcbiAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgICByZXR1cm4gYCR7Y29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0vc3R1ZGlvL2RvY3VtZW50cy91cGxvYWRgO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzdHVkaW9TZXJ2aWNlID0gbmV3IFN0dWRpb1NlcnZpY2UoKTtcbiIsImltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIFRva2VuUGFja2FnZVNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgc2VhcmNoKHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3BhY2thZ2UvdG9rZW4vc2VhcmNoJywgcGFyYW1zKSk7XG4gIH1cblxuICBidXlUb2tlbnMoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC9wYXltZW50L3B1cmNoYXNlLXRva2Vucy8ke2lkfWApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCB0b2tlblBhY2thZ2VTZXJ2aWNlID0gbmV3IFRva2VuUGFja2FnZVNlcnZpY2UoKTtcbiIsImltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIFRyYW5zYWN0aW9uU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBzZWFyY2gocGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvdHJhbnNhY3Rpb25zL3VzZXIvc2VhcmNoJywgcGFyYW1zKSk7XG4gIH1cblxuICBzZW5kVGlwVG9rZW4ocGVyZm9ybWVySWQ6IHN0cmluZywgdG9rZW46IG51bWJlciwgY29udmVyc2F0aW9uSWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvbWVtYmVyL3NlbmQtdGlwLXRva2VuLyR7cGVyZm9ybWVySWR9YCwgeyB0b2tlbiwgY29udmVyc2F0aW9uSWQgfSk7XG4gIH1cblxuICBwdWJsaWMgc2VuZFBhaWRUb2tlbihjb252ZXJzYXRpb25JZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL21lbWJlci9zZW5kLXBheS10b2tlbi8ke2NvbnZlcnNhdGlvbklkfWApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCB0cmFuc2FjdGlvblNlcnZpY2UgPSBuZXcgVHJhbnNhY3Rpb25TZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBJVXNlciB9IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEFQSVJlcXVlc3QsIElSZXNwb25zZSB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuaW1wb3J0IHsgZ2V0R2xvYmFsQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgbWUoaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pOiBQcm9taXNlPElSZXNwb25zZTxJVXNlcj4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXQoJy91c2Vycy9tZScsIGhlYWRlcnMpO1xuICB9XG5cbiAgdXBkYXRlTWUocGF5bG9hZDogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMucHV0KCcvdXNlcnMnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIGdldEF2YXRhclVwbG9hZFVybCh1c2VySWQ/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgICBpZiAodXNlcklkKSB7XG4gICAgICByZXR1cm4gYCR7Y29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0vdXNlcnMvJHt1c2VySWR9L2F2YXRhci91cGxvYWRgO1xuICAgIH1cbiAgICByZXR1cm4gYCR7Y29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0vdXNlcnMvYXZhdGFyL3VwbG9hZGA7XG4gIH1cblxuICBzZWFyY2gocXVlcnk/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy91c2Vycy9zZWFyY2gnLCBxdWVyeSkpO1xuICB9XG5cbiAgZmluZEJ5SWQoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmdldChgL3VzZXJzL3ZpZXcvJHtpZH1gKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdXNlclNlcnZpY2UgPSBuZXcgVXNlclNlcnZpY2UoKTtcbiIsImltcG9ydCB7IElDb3VudHJ5LCBJTGFuZ2d1Z2VzLCBJUGhvbmVDb2RlcyB9IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEFQSVJlcXVlc3QsIElSZXNwb25zZSB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5leHBvcnQgY2xhc3MgVXRpbHNTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIGNvdW50cmllc0xpc3QoKTogUHJvbWlzZTxJUmVzcG9uc2U8SUNvdW50cnk+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KCcvY291bnRyaWVzL2xpc3QnKTtcbiAgfVxuXG4gIGxhbmd1YWdlc0xpc3QoKTogUHJvbWlzZTxJUmVzcG9uc2U8SUxhbmdndWdlcz4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXQoJy9sYW5ndWFnZXMvbGlzdCcpO1xuICB9XG5cbiAgcGhvbmVDb2Rlc0xpc3QoKTogUHJvbWlzZTxJUmVzcG9uc2U8SVBob25lQ29kZXM+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KCcvcGhvbmUtY29kZXMvbGlzdCcpO1xuICB9XG5cbiAgc3RhdGlzdGljcygpOiBQcm9taXNlPElSZXNwb25zZTxhbnk+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KCcvc3RhdGlzdGljcy9hZG1pbicpO1xuICB9XG5cbiAgdmVyaWZ5UmVjYXB0Y2hhKHRva2VuOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvcmUtY2FwdGNoYS92ZXJpZnknLCB7IHRva2VuIH0pO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCB1dGlsc1NlcnZpY2UgPSBuZXcgVXRpbHNTZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBJUmVzcG9uc2UsIElQZXJmb3JtZXJWaWRlb1BheWxvYWQgfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBUT0tFTiB9IGZyb20gJ3NyYy9zZXJ2aWNlcy9hcGktcmVxdWVzdCc7XG5pbXBvcnQgeyBvbWl0IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGlzVXJsIH0gZnJvbSAnQGxpYi9zdHJpbmcnO1xuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnO1xuaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuaW1wb3J0IHsgZ2V0R2xvYmFsQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuXG5leHBvcnQgY2xhc3MgVmlkZW9TZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIHNlYXJjaChwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KFxuICAgICAgdGhpcy5idWlsZFVybCgnL3VzZXIvcGVyZm9ybWVyLWFzc2V0cy92aWRlb3Mvc2VhcmNoJywgcGFyYW1zKVxuICAgICk7XG4gIH1cblxuICBwdXJjaGFzZWQocGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldChcbiAgICAgIHRoaXMuYnVpbGRVcmwoJy9wdXJjaGFzZWQtaXRlbXMvdXNlci92aWRlb3MnLCBwYXJhbXMpXG4gICAgKTtcbiAgfVxuXG4gIGRldGFpbHMoaWQ6IHN0cmluZywgaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy92aWRlb3MvJHtpZH0vdmlld2AsIGhlYWRlcnMpO1xuICB9XG5cbiAgbXlWaWRlb3MocXVlcnk/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KFxuICAgICAgdGhpcy5idWlsZFVybCgnL3BlcmZvcm1lci9wZXJmb3JtZXItYXNzZXRzL3ZpZGVvcy9zZWFyY2gnLCBxdWVyeSlcbiAgICApO1xuICB9XG5cbiAgcmVtb3ZlTXlWaWRlbyhpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVsKGAvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvdmlkZW9zLyR7aWR9YCk7XG4gIH1cblxuICBjcmVhdGUoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgZGF0YTogSVBlcmZvcm1lclZpZGVvUGF5bG9hZCxcbiAgICBvcHRpb25zOiB7IG9uUHJvZ3Jlc3M6IEZ1bmN0aW9uIH0gPSB7XG4gICAgICBvblByb2dyZXNzKCkge31cbiAgICB9XG4gICk6IFByb21pc2U8SVJlc3BvbnNlPGFueT4+IHtcbiAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50Lmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgICBvcHRpb25zLm9uUHJvZ3Jlc3Moe1xuICAgICAgICAgICAgcGVyY2VudGFnZTogKGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsKSAqIDEwMFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmVxLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSByZXEuc3RhdHVzID49IDIwMCAmJiByZXEuc3RhdHVzIDwgMzAwO1xuICAgICAgICBjb25zdCB7IHJlc3BvbnNlIH0gPSByZXE7XG4gICAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICAgIHJldHVybiByZWplY3QocmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgICByZWplY3QocmVxLnJlc3BvbnNlKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgLy8gZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSwgZmlsZS5uYW1lKTtcbiAgICAgIGlmIChkYXRhLnZpZGVvKSB7XG4gICAgICAgIGNvbnN0IHZpZGVvID0gZGF0YS52aWRlby5maWxlLm9yaWdpbkZpbGVPYmo7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndmlkZW8nLCB2aWRlbywgdmlkZW8ubmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhLnRyYWlsZXIpIHtcbiAgICAgICAgY29uc3QgdHJhaWxlciA9IGRhdGEudHJhaWxlci5maWxlLm9yaWdpbkZpbGVPYmo7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndHJhaWxlcicsIHRyYWlsZXIsIHRyYWlsZXIubmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhLnRodW1ibmFpbCkge1xuICAgICAgICBjb25zdCB0aHVtYm5haWwgPSBkYXRhLnRodW1ibmFpbC5maWxlLm9yaWdpbkZpbGVPYmo7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndGh1bWJuYWlsJywgdGh1bWJuYWlsLCB0aHVtYm5haWwubmFtZSk7XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5rZXlzKG9taXQoZGF0YSwgWyd2aWRlbycsICd0aHVtYm5haWwnLCAndHJhaWxlciddKSkuZm9yRWFjaChcbiAgICAgICAgKHYpID0+IHtcbiAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQodiwgZGF0YVt2XSk7XG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIHJlcS5yZXNwb25zZVR5cGUgPSAnanNvbic7XG4gICAgICByZXEub3BlbignUE9TVCcsIGlzVXJsKHVybCkgPyB1cmwgOiBgJHtjb25maWcuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UfSR7dXJsfWApO1xuXG4gICAgICBjb25zdCB0b2tlbjogYW55ID0gY29va2llLmdldChUT0tFTik7XG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCB0b2tlbik7XG4gICAgICB9XG4gICAgICByZXEuc2VuZChmb3JtRGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGUoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgZGF0YTogSVBlcmZvcm1lclZpZGVvUGF5bG9hZCxcbiAgICBvcHRpb25zOiB7IG9uUHJvZ3Jlc3M6IEZ1bmN0aW9uIH0gPSB7XG4gICAgICBvblByb2dyZXNzKCkge31cbiAgICB9XG4gICk6IFByb21pc2U8SVJlc3BvbnNlPGFueT4+IHtcbiAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50Lmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgICBvcHRpb25zLm9uUHJvZ3Jlc3Moe1xuICAgICAgICAgICAgcGVyY2VudGFnZTogKGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsKSAqIDEwMFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmVxLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSByZXEuc3RhdHVzID49IDIwMCAmJiByZXEuc3RhdHVzIDwgMzAwO1xuICAgICAgICBjb25zdCB7IHJlc3BvbnNlIH0gPSByZXE7XG4gICAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICAgIHJldHVybiByZWplY3QocmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgICByZWplY3QocmVxLnJlc3BvbnNlKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgLy8gZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSwgZmlsZS5uYW1lKTtcbiAgICAgIGlmIChkYXRhLnZpZGVvICYmIGRhdGEudmlkZW8uZmlsZSkge1xuICAgICAgICBjb25zdCB2aWRlbyA9IGRhdGEudmlkZW8uZmlsZS5vcmlnaW5GaWxlT2JqO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3ZpZGVvJywgdmlkZW8sIHZpZGVvLm5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YS50cmFpbGVyICYmIGRhdGEudHJhaWxlci5maWxlKSB7XG4gICAgICAgIGNvbnN0IHRyYWlsZXIgPSBkYXRhLnRyYWlsZXIuZmlsZS5vcmlnaW5GaWxlT2JqO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3RyYWlsZXInLCB0cmFpbGVyLCB0cmFpbGVyLm5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YS50aHVtYm5haWwgJiYgZGF0YS50aHVtYm5haWwuZmlsZSkge1xuICAgICAgICBjb25zdCB0aHVtYm5haWwgPSBkYXRhLnRodW1ibmFpbC5maWxlLm9yaWdpbkZpbGVPYmo7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndGh1bWJuYWlsJywgdGh1bWJuYWlsLCB0aHVtYm5haWwubmFtZSk7XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5rZXlzKG9taXQoZGF0YSwgWyd2aWRlbycsICd0aHVtYm5haWwnLCAndHJhaWxlciddKSkuZm9yRWFjaCgodikgPT4ge1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQodiwgZGF0YVt2XSk7XG4gICAgICB9KTtcblxuICAgICAgcmVxLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcbiAgICAgIHJlcS5vcGVuKCdQVVQnLCBpc1VybCh1cmwpID8gdXJsIDogYCR7Y29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0ke3VybH1gKTtcblxuICAgICAgY29uc3QgdG9rZW46IGFueSA9IGNvb2tpZS5nZXQoVE9LRU4pO1xuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKCdBdXRob3JpemF0aW9uJywgdG9rZW4pO1xuICAgICAgfVxuICAgICAgcmVxLnNlbmQoZm9ybURhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgaW5jcmVhc2VWaWV3KGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvdXNlci9wZXJmb3JtZXItYXNzZXRzL3ZpZGVvcy8ke2lkfS9pbmMtdmlld2ApO1xuICB9XG5cbiAgLy8gdXBkYXRlKHZpZGVvSWQsIHBlcmZvcm1lcklkLCBkYXRhKSB7XG4gIC8vICAgcmV0dXJuIHRoaXMucHV0KGAvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvdmlkZW9zLyR7dmlkZW9JZH1gLCB7XG4gIC8vICAgICAuLi5kYXRhLFxuICAvLyAgICAgcGVyZm9ybWVySWRcbiAgLy8gICB9KTtcbiAgLy8gfVxuICB1c2VyRmluZFZpZGVvQnlJZChpZDogc3RyaW5nLCBoZWFkZXJzID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC91c2VyL3BlcmZvcm1lci1hc3NldHMvdmlkZW9zLyR7aWR9YCwgaGVhZGVycyk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHZpZGVvU2VydmljZSA9IG5ldyBWaWRlb1NlcnZpY2UoKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTb2NrZXRDb250ZXh0IH0gZnJvbSAnLi9Tb2NrZXRDb250ZXh0JztcbmltcG9ydCB7IHdhcm5pbmcgfSBmcm9tICcuL3V0aWxzJztcblxuaW50ZXJmYWNlIElFdmVudFByb3BzIHtcbiAgZXZlbnQ6IHN0cmluZztcbiAgaGFuZGxlcjogRnVuY3Rpb247XG59XG5cbmNsYXNzIEV2ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElFdmVudFByb3BzPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBldmVudCwgaGFuZGxlciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzb2NrZXQgPSB0aGlzLmNvbnRleHQ7XG5cbiAgICBpZiAoIXNvY2tldCkge1xuICAgICAgd2FybmluZygnU29ja2V0IElPIGNvbm5lY3Rpb24gaGFzIG5vdCBiZWVuIGVzdGFibGlzaGVkLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNvY2tldC5vbihldmVudCwgaGFuZGxlcik7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBjb25zdCB7IGV2ZW50IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHNvY2tldCA9IHRoaXMuY29udGV4dDtcblxuICAgIGlmICghc29ja2V0KSB7XG4gICAgICB3YXJuaW5nKCdTb2NrZXQgSU8gY29ubmVjdGlvbiBoYXMgbm90IGJlZW4gZXN0YWJsaXNoZWQuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc29ja2V0Lm9mZihldmVudCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbkV2ZW50LmNvbnRleHRUeXBlID0gU29ja2V0Q29udGV4dDtcblxuZXhwb3J0IGRlZmF1bHQgRXZlbnQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNvY2tldElPIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xuaW1wb3J0IHsgYXV0aFNlcnZpY2UgfSBmcm9tICdAc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBnZXRHbG9iYWxDb25maWcgfSBmcm9tICdAc2VydmljZXMvY29uZmlnJztcbmltcG9ydCB7IHdhcm5pbmcsIGRlYnVnIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBTb2NrZXRDb250ZXh0IH0gZnJvbSAnLi9Tb2NrZXRDb250ZXh0JztcblxuaW50ZXJmYWNlIElTb2NrZXRQcm9wcyB7XG4gIHVyaT86IHN0cmluZztcbiAgY2hpbGRyZW46IGFueTtcbiAgbG9nZ2VkSW46IGJvb2xlYW47XG59XG5cbmNsYXNzIFNvY2tldCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJU29ja2V0UHJvcHM+IHtcbiAgc29ja2V0O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuY29ubmVjdCgpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKG5leHRQcm9wczogYW55KSB7XG4gICAgY29uc3QgeyBsb2dnZWRJbiB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAobmV4dFByb3BzLmxvZ2dlZEluICE9PSBsb2dnZWRJbikge1xuICAgICAgdGhpcy5jb25uZWN0KCk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5zb2NrZXQgJiYgdGhpcy5zb2NrZXQuY2xvc2UoKTtcbiAgfVxuXG4gIGNvbm5lY3QoKSB7XG4gICAgY29uc3QgeyBsb2dnZWRJbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB0b2tlbiA9IGxvZ2dlZEluICYmIGF1dGhTZXJ2aWNlLmdldFRva2VuKCk7XG4gICAgaWYgKCFwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG4gICAgY29uc3QgeyB1cmkgPSBjb25maWcuTkVYVF9QVUJMSUNfU09DS0VUX0VORFBPSU5UIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICB0cmFuc3BvcnRzOiBbJ3dlYnNvY2tldCcsICdwb2xsaW5nJywgJ2xvbmctcG9sbGluZyddLFxuICAgICAgcXVlcnk6IHRva2VuID8gYHRva2VuPSR7dG9rZW59YCA6ICcnXG4gICAgfTtcblxuICAgIHRoaXMuc29ja2V0ICYmIHRoaXMuc29ja2V0LmNsb3NlKCk7XG5cbiAgICB0aGlzLnNvY2tldCA9IFNvY2tldElPKHVyaSwgdGhpcy5tZXJnZU9wdGlvbnMob3B0aW9ucykpO1xuXG4gICAgdGhpcy5zb2NrZXQuc3RhdHVzID0gJ2luaXRpYWxpemVkJztcblxuICAgIHRoaXMuc29ja2V0Lm9uKCdjb25uZWN0JywgKCkgPT4ge1xuICAgICAgdGhpcy5zb2NrZXQuc3RhdHVzID0gJ2Nvbm5lY3RlZCc7XG4gICAgICBkZWJ1ZygnY29ubmVjdGVkJyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNvY2tldC5vbignZGlzY29ubmVjdCcsICgpID0+IHtcbiAgICAgIHRoaXMuc29ja2V0LnN0YXR1cyA9ICdkaXNjb25uZWN0ZWQnO1xuICAgICAgZGVidWcoJ2Rpc2Nvbm5lY3QnKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc29ja2V0Lm9uKCdlcnJvcicsIChlcnIpID0+IHtcbiAgICAgIHRoaXMuc29ja2V0LnN0YXR1cyA9ICdmYWlsZWQnO1xuICAgICAgd2FybmluZygnZXJyb3InLCBlcnIpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zb2NrZXQub24oJ3JlY29ubmVjdCcsIChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNvY2tldC5zdGF0dXMgPSAnY29ubmVjdGVkJztcbiAgICAgIGRlYnVnKCdyZWNvbm5lY3QnLCBkYXRhKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc29ja2V0Lm9uKCdyZWNvbm5lY3RfYXR0ZW1wdCcsICgpID0+IHtcbiAgICAgIGRlYnVnKCdyZWNvbm5lY3RfYXR0ZW1wdCcpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zb2NrZXQub24oJ3JlY29ubmVjdGluZycsICgpID0+IHtcbiAgICAgIHRoaXMuc29ja2V0LnN0YXR1cyA9ICdyZWNvbm5lY3RpbmcnO1xuICAgICAgZGVidWcoJ3JlY29ubmVjdGluZycpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zb2NrZXQub24oJ3JlY29ubmVjdF9mYWlsZWQnLCAoZXJyb3IpID0+IHtcbiAgICAgIHRoaXMuc29ja2V0LnN0YXR1cyA9ICdmYWlsZWQnO1xuICAgICAgd2FybmluZygncmVjb25uZWN0X2ZhaWxlZCcsIGVycm9yKTtcbiAgICB9KTtcbiAgfVxuXG4gIG1lcmdlT3B0aW9ucyhvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgIHJlY29ubmVjdGlvbjogdHJ1ZSxcbiAgICAgIHJlY29ubmVjdGlvbkF0dGVtcHRzOiBJbmZpbml0eSxcbiAgICAgIHJlY29ubmVjdGlvbkRlbGF5OiAxICogMTAwMCxcbiAgICAgIHJlY29ubmVjdGlvbkRlbGF5TWF4OiA1ICogMTAwMCxcbiAgICAgIGF1dG9Db25uZWN0OiB0cnVlLFxuICAgICAgdHJhbnNwb3J0czogWyd3ZWJzb2NrZXQnLCAncG9sbGluZycsICdsb25nLXBvbGxpbmcnXSxcbiAgICAgIHJlamVjdFVuYXV0aG9yaXplZDogdHJ1ZVxuICAgIH07XG4gICAgcmV0dXJuIHsgLi4uZGVmYXVsdE9wdGlvbnMsIC4uLm9wdGlvbnMgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8U29ja2V0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17dGhpcy5zb2NrZXR9PlxuICAgICAgICB7UmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbil9XG4gICAgICA8L1NvY2tldENvbnRleHQuUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZXMgPSAoc3RhdGU6IGFueSkgPT4gKHtcbiAgbG9nZ2VkSW46IHN0YXRlLmF1dGgubG9nZ2VkSW5cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlcykoU29ja2V0KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBTb2NrZXRDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxhbnk+KCdzb2NrZXQnKTtcbiIsImltcG9ydCBTb2NrZXQgZnJvbSAnLi9Tb2NrZXQnO1xuaW1wb3J0IEV2ZW50IGZyb20gJy4vRXZlbnQnO1xuaW1wb3J0IHsgU29ja2V0Q29udGV4dCB9IGZyb20gJy4vU29ja2V0Q29udGV4dCc7XG5cbmlmIChwcm9jZXNzLmJyb3dzZXIpIHtcbiAgaWYgKHdpbmRvdykgd2luZG93LlJlYWN0U29ja2V0SU8gPSB7IFNvY2tldCwgRXZlbnQsIFNvY2tldENvbnRleHQgfTtcbn1cblxuZXhwb3J0IHsgU29ja2V0LCBFdmVudCwgU29ja2V0Q29udGV4dCB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLXNwcmVhZCAqL1xuXG5pbXBvcnQgeyBnZXRHbG9iYWxDb25maWcgfSBmcm9tICdAc2VydmljZXMvY29uZmlnJztcblxuLyoqXG4gKiBQcmludHMgYSB3YXJuaW5nIGluIHRoZSBjb25zb2xlIGlmIGl0IGV4aXN0cy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBUaGUgd2FybmluZyBtZXNzYWdlLlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBjb25zdCB3YXJuaW5nID0gKC4uLmFyZ3MpID0+IHtcbiAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG4gIC8vIGRlYnVnIG9uIGRldmVsb3BtZW50IGFuZCBzdGFnaW5nLlxuICBpZiAoY29uZmlnLk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHJldHVybjtcblxuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGNvbnNvbGUuZXJyb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zb2xlLmVycm9yLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xuICB9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuICB0cnkge1xuICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgaWYgeW91IGVuYWJsZVxuICAgIC8vIFwiYnJlYWsgb24gYWxsIGV4Y2VwdGlvbnNcIiBpbiB5b3VyIGNvbnNvbGUsXG4gICAgLy8gaXQgd291bGQgcGF1c2UgdGhlIGV4ZWN1dGlvbiBhdCB0aGlzIGxpbmUuXG5cbiAgICB0aHJvdyBuZXcgRXJyb3IoYXJncy5qb2luKCcgJykpO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWVtcHR5ICovXG4gIH0gY2F0Y2ggKGUpIHt9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tZW1wdHkgKi9cbn07XG5cbmV4cG9ydCBjb25zdCBkZWJ1ZyA9ICguLi5hcmdzKSA9PiB7XG4gIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpO1xuICAvLyBkZWJ1ZyBvbiBkZXZlbG9wbWVudCBhbmQgc3RhZ2luZy5cbiAgaWYgKGNvbmZpZy5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSByZXR1cm47XG5cbiAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb25zb2xlLmRlYnVnID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc29sZS5kZWJ1Zy5hcHBseShjb25zb2xlLCBhcmdzKTtcbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLXVuZmV0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGgtdG8tcmVnZXhwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWFjdGlvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlc2VsZWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNvY2tldC5pby1jbGllbnRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==