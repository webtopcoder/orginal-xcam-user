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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/auth/register/user.tsx");
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

/***/ "./pages/auth/register/user.tsx":
/*!**************************************!*\
  !*** ./pages/auth/register/user.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.less */ "./pages/auth/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_auth_register_user_register_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/auth/register/user-register-form */ "./src/components/auth/register/user-register-form.tsx");
/* harmony import */ var _redux_auth_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @redux/auth/actions */ "./src/redux/auth/actions.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_setting_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/setting.service */ "./src/services/setting.service.ts");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @lib/utils */ "./src/lib/utils.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_common_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @components/common/layout */ "./src/components/common/layout/index.ts");
var _jsxFileName = "E:\\programData\\React\\user\\pages\\auth\\register\\user.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














class UserRegisterPage extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      errorMessage: '',
      countries: []
    };
  }

  componentDidMount() {
    this.getContries();
  }

  componentDidUpdate(prevProps) {
    const {
      success,
      error
    } = this.props;

    if (prevProps.success !== success && success) {
      antd__WEBPACK_IMPORTED_MODULE_2__["message"].success('Congrats, your account has been created');
      next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push('/auth/login');
    }

    if (prevProps.error !== error && error) {
      antd__WEBPACK_IMPORTED_MODULE_2__["message"].error(Object(_lib_utils__WEBPACK_IMPORTED_MODULE_9__["getResponseError"])(error));
    }
  }

  async getContries() {
    try {
      const countries = await _services_setting_service__WEBPACK_IMPORTED_MODULE_8__["settingService"].getCountries();
      this.setState({
        countries: countries.data
      });
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: Object(_lib_utils__WEBPACK_IMPORTED_MODULE_9__["getResponseError"])(error)
      });
    }
  }

  submit(data) {
    const {
      userRegister: dispatchUserRegister
    } = this.props;

    let newData = _objectSpread({}, data);

    if (data.dateOfBirth) {
      newData = _objectSpread(_objectSpread({}, data), {}, {
        dateOfBirth: moment__WEBPACK_IMPORTED_MODULE_10___default()(data.dateOfBirth).toISOString()
      }); // if (data.dateOfBirth) {
      //   data.dateOfBirth = moment(data.dateOfBirth).toISOString();
    }

    dispatchUserRegister(newData);
  }

  render() {
    const {
      requesting,
      ui
    } = this.props;
    const {
      error,
      errorMessage,
      countries
    } = this.state;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 11
      }
    }, "User Register")), __jsx("div", {
      className: "register-page",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "form-register-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 11
      }
    }, errorMessage && __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Alert"], {
      type: "error",
      message: "Error request",
      banner: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 31
      }
    }), __jsx(_components_auth_register_user_register_form__WEBPACK_IMPORTED_MODULE_5__["default"], {
      singularTextModel: (ui === null || ui === void 0 ? void 0 : ui.singularTextModel) || 'Performer',
      error: error,
      onFinish: this.submit.bind(this),
      submiting: requesting,
      countries: countries,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 13
      }
    })), __jsx(_components_common_layout__WEBPACK_IMPORTED_MODULE_11__["FormRegisterPlaceHolder"], {
      ui: ui,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 11
      }
    })));
  }

}

_defineProperty(UserRegisterPage, "authenticate", false);

_defineProperty(UserRegisterPage, "layout", 'public');

const mapStateToProps = state => _objectSpread({
  ui: state.ui,
  loggedIn: state.auth.loggedIn
}, state.auth.userRegister);

const mapDispatch = {
  userRegister: _redux_auth_actions__WEBPACK_IMPORTED_MODULE_6__["userRegister"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatch)(UserRegisterPage));

/***/ }),

/***/ "./src/components/auth/register/user-register-form.tsx":
/*!*************************************************************!*\
  !*** ./src/components/auth/register/user-register-form.tsx ***!
  \*************************************************************/
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
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lib/utils */ "./src/lib/utils.ts");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_redux_ui_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/redux/ui/actions */ "./src/redux/ui/actions.ts");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/index */ "./src/services/index.ts");
/* harmony import */ var src_components_common_recaptcha__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/components/common/recaptcha */ "./src/components/common/recaptcha.tsx");
var _jsxFileName = "E:\\programData\\React\\user\\src\\components\\auth\\register\\user-register-form.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











// const RegisterFrom = ({
//   onFinish, submiting, countries, error, singularTextModel
//   googleReCaptchaEnabled?: boolean;
//   googleReCaptchaSiteKey?: string;
// }
const RegisterFrom = ({
  onFinish: submit,
  submiting,
  countries,
  error,
  singularTextModel,
  googleReCaptchaEnabled,
  googleReCaptchaSiteKey
}) => {
  const reCAPTCHARef = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
  const {
    0: reCAPTCHAError,
    1: setreCAPTCHAError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [form] = antd__WEBPACK_IMPORTED_MODULE_1__["Form"].useForm();

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
        await _services_index__WEBPACK_IMPORTED_MODULE_7__["utilsService"].verifyRecaptcha(token);
      }

      submit(data);
    } catch (e) {
      if (googleReCaptchaEnabled && reCAPTCHARef.current.getValue()) {
        reCAPTCHARef.current.reset();
      }

      const err = await Promise.resolve(e);
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(Object(_lib_utils__WEBPACK_IMPORTED_MODULE_3__["getResponseError"])(err));
    }
  };

  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    layout: "vertical",
    form: form,
    onFinish: onFinish,
    name: "performerRegisterForm",
    initialValues: {
      country: undefined
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, "Member register"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "dateOfBirth",
    rules: [{
      required: true,
      message: 'Please input your date of birth!'
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
      lineNumber: 77,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["DatePicker"], {
    placeholder: "Date of Birth",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "gender",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    placeholder: "Gender",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option, {
    value: "male",
    key: "male",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }, "Male"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option, {
    value: "female",
    key: "female",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }, "Female"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option, {
    value: "transgender",
    key: "transgender",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }, "Transgender"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "firstName",
    rules: [{
      required: true,
      message: 'Please input your first name!'
    }, {
      pattern: new RegExp('^[a-zA-Z0-9 ]*$'),
      message: 'Alphanumeric'
    }, {
      whitespace: true,
      message: 'Please input your first name!'
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "First Name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "lastName",
    rules: [{
      required: true,
      message: 'Please input your last name!'
    }, {
      pattern: new RegExp('^[a-zA-Z0-9 ]*$'),
      message: 'Alphanumeric'
    }, {
      whitespace: true,
      message: 'Please input your last name!'
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "Last Name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "email",
    rules: [{
      required: true,
      message: 'Please input your E-mail!'
    }, {
      type: 'email',
      message: 'The input is not valid E-mail!'
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "E-mail",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "phone",
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
      lineNumber: 164,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "Phone Number",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "username",
    rules: [{
      required: true,
      message: 'Username is required!'
    }, {
      pattern: new RegExp('^[a-zA-Z0-9]*$'),
      message: 'Dont allow special chars or space'
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "Username",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "password",
    rules: [{
      required: true,
      message: 'Please input your password!'
    }, {
      min: 6,
      max: 14,
      message: 'Passoword should be 6-14 characters'
    }],
    hasFeedback: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, {
    placeholder: "Password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "confirm",
    dependencies: ['password'],
    hasFeedback: true,
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
      lineNumber: 209,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, {
    placeholder: "Confirm Password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "country",
    rules: [{
      required: true,
      message: 'Please input your country!'
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    showSearch: true,
    placeholder: "Country",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 9
    }
  }, countries.length > 0 && countries.map(country => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option, {
    value: country.name,
    key: country.code,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 15
    }
  }, country.name)))), error && __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
    description: Object(_lib_utils__WEBPACK_IMPORTED_MODULE_3__["getResponseError"])(error),
    type: "error",
    message: "Error",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 7
    }
  }, __jsx(src_components_common_recaptcha__WEBPACK_IMPORTED_MODULE_8__["default"], {
    ref: reCAPTCHARef,
    googleReCaptchaEnabled: googleReCaptchaEnabled,
    googleReCaptchaSiteKey: googleReCaptchaSiteKey,
    error: reCAPTCHAError,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 7
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
      lineNumber: 262,
      columnNumber: 9
    }
  }, "Register new account")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 7
    }
  }, "Are you member?", ' ', __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/auth/login/user",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 11
    }
  }, "Login"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 7
    }
  }, "Are you", ' ', singularTextModel || 'Performer', "?", ' ', __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/auth/register/model",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 11
    }
  }, "Signup now"))));
};

const mapStateToProps = state => _objectSpread({}, state.ui);

const mapDispatchs = {
  updateUIValue: src_redux_ui_actions__WEBPACK_IMPORTED_MODULE_6__["updateUIValue"]
};
RegisterFrom.defaultProps = {
  googleReCaptchaEnabled: false,
  googleReCaptchaSiteKey: ''
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, mapDispatchs)(RegisterFrom));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2F1dGgvcmVnaXN0ZXIvdXNlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXV0aC9yZWdpc3Rlci91c2VyLXJlZ2lzdGVyLWZvcm0udHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9sYXlvdXQvZm9ybS1yZWdpc3Rlci1wbGFjZWhvbGRlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2xheW91dC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vbGF5b3V0L3BvcHVwLTE4cGx1cy1jb250ZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vcmVjYXB0Y2hhLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9maWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9pbnRlcm5ldC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2xheW91dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL21lc3NhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9yZWR1eC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3J1bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvc3RvcmVIb2xkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9zdHJlYW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9zdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYXV0aC9hY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC91aS9hY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9hcGktcmVxdWVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvYXV0aC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9iYW5uZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9lYXJuaW5nLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2Zhdm91cml0ZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9nYWxsZXJ5LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9tZXNzYWdlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL29yZGVyLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3BheW1lbnQtaW5mb3JtYXRpb24uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcGF5b3V0LXJlcXVlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3BlcmZvbWVyLWNhdGVnb3JpZXMuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcGVyZm9tZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcGhvdG8uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcG9zdC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9wcm9kdWN0LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3B1cmNoYXNlLWl0ZW0uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcmVmdW5kLXJlcXVlc3Quc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvc2V0dGluZy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9zdHJlYW0uc2VydmljZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3N0dWRpby5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy90b2tlbi1wYWNrYWdlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3RyYW5zYWN0aW9uLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3VzZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvdXRpbHMuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvdmlkZW8uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzb21vcnBoaWMtdW5mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aC10by1yZWdleHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWdvb2dsZS1yZWNhcHRjaGFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtYWN0aW9uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlc2VsZWN0XCIiXSwibmFtZXMiOlsibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwiY2FjaGVkT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJvYnNlcnZlciIsImdldE9ic2VydmVyIiwiY29uc29sZSIsInJvdXRlciIsImVyciIsImhyZWYiLCJldmVudCIsInRhcmdldCIsImUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsIm9wdGlvbmFsUHJvcHMiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkQXMiLCJjaGlsZEVsbSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkcmVuIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUHJvcHMiLCJyZWYiLCJlbCIsInNldENoaWxkRWxtIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJMaW5rIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJwcmVmaXgiLCJhZGRQYXRoUHJlZml4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW1zIiwicGFyYW0iLCJ2YWx1ZSIsInJlcGxhY2VkIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJlc2NhcGVQYXRoRGVsaW1pdGVycyIsInJlc3VsdCIsImZpbHRlcmVkUXVlcnkiLCJxdWVyeSIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsInJlc29sdmVBcyIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFkZEJhc2VQYXRoIiwicmVzb2x2ZUhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsImNyZWRlbnRpYWxzIiwicmVzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJtYXJrTG9hZGluZ0Vycm9yIiwiY29uc3RydWN0b3IiLCJyb3V0ZSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImxvY2FsZSIsImxvY2FsZXMiLCJkZWZhdWx0TG9jYWxlIiwic3RhdGUiLCJvcHRpb25zIiwic3R5bGVTaGVldHMiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsIl9fTkVYVF9EQVRBX18iLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsInByZXBhcmVVcmxBcyIsImNoYW5nZSIsImlzTG9jYWxVUkwiLCJTVCIsInBlcmZvcm1hbmNlIiwiYWRkTG9jYWxlIiwiY2xlYW5lZEFzIiwiZGVsTG9jYWxlIiwiZGVsQmFzZVBhdGgiLCJwYWdlcyIsIl9fcmV3cml0ZXMiLCJwYXJzZWQiLCJtZXRob2QiLCJwb3RlbnRpYWxIcmVmIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsImFwcENvbXAiLCJlcnJvciIsImNoYW5nZVN0YXRlIiwiX19OIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwicGFnZSIsImdldFJvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJfcmVzb2x2ZUhyZWYiLCJhcHBseUJhc2VQYXRoIiwiY2xlYW5QYXRobmFtZSIsIlByb21pc2UiLCJmZXRjaENvbXBvbmVudCIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJkYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2VnbWVudCIsImNoYXIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiRFVNTVlfQkFTRSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsIm1hdGNoZXJPcHRpb25zIiwic2Vuc2l0aXZlIiwiZGVsaW1pdGVyIiwiY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyIsInN0cmljdCIsImN1c3RvbVJvdXRlIiwia2V5cyIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJwYXJzZWREZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJ2YWxpZGF0ZSIsInN0ck9yQXJyYXkiLCJxdWVyeUNvbXBpbGVyIiwicGFyYW1LZXlzIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInNob3VsZEFkZEJhc2VQYXRoIiwibmV3VXJsIiwic2VhcmNoUGFyYW1zIiwiaXNOYU4iLCJpdGVtIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJjdXN0b21Sb3V0ZU1hdGNoZXIiLCJyZXdyaXRlIiwiZGVzdFJlcyIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJVc2VyUmVnaXN0ZXJQYWdlIiwiUHVyZUNvbXBvbmVudCIsImVycm9yTWVzc2FnZSIsImNvdW50cmllcyIsImNvbXBvbmVudERpZE1vdW50IiwiZ2V0Q29udHJpZXMiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJnZXRSZXNwb25zZUVycm9yIiwic2V0dGluZ1NlcnZpY2UiLCJnZXRDb3VudHJpZXMiLCJzZXRTdGF0ZSIsInN1Ym1pdCIsInVzZXJSZWdpc3RlciIsImRpc3BhdGNoVXNlclJlZ2lzdGVyIiwibmV3RGF0YSIsImRhdGVPZkJpcnRoIiwibW9tZW50IiwidG9JU09TdHJpbmciLCJyZW5kZXIiLCJyZXF1ZXN0aW5nIiwidWkiLCJzaW5ndWxhclRleHRNb2RlbCIsImJpbmQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJsb2dnZWRJbiIsIm1hcERpc3BhdGNoIiwiY29ubmVjdCIsIlJlZ2lzdGVyRnJvbSIsIm9uRmluaXNoIiwic3VibWl0aW5nIiwiZ29vZ2xlUmVDYXB0Y2hhRW5hYmxlZCIsImdvb2dsZVJlQ2FwdGNoYVNpdGVLZXkiLCJyZUNBUFRDSEFSZWYiLCJjcmVhdGVSZWYiLCJyZUNBUFRDSEFFcnJvciIsInNldHJlQ0FQVENIQUVycm9yIiwidXNlU3RhdGUiLCJmb3JtIiwiRm9ybSIsInVzZUZvcm0iLCJ0b2tlbiIsImN1cnJlbnQiLCJnZXRWYWx1ZSIsInJlc2V0IiwidXRpbHNTZXJ2aWNlIiwidmVyaWZ5UmVjYXB0Y2hhIiwicmVzb2x2ZSIsImNvdW50cnkiLCJ1bmRlZmluZWQiLCJyZXF1aXJlZCIsInZhbGlkYXRvciIsInJ1bGUiLCJ5ZWFycyIsImRpZmYiLCJyZWplY3QiLCJFcnJvciIsInBhdHRlcm4iLCJSZWdFeHAiLCJ3aGl0ZXNwYWNlIiwidHlwZSIsIm1pbiIsIm1heCIsImdldEZpZWxkVmFsdWUiLCJsZW5ndGgiLCJtYXAiLCJjb2RlIiwibWFwRGlzcGF0Y2hzIiwidXBkYXRlVUlWYWx1ZSIsImRlZmF1bHRQcm9wcyIsIkZvcm1SZWdpc3RlclBsYWNlSG9sZGVyIiwicGxhY2Vob2xkZXJMb2dpblVybCIsImJhY2tncm91bmRJbWFnZSIsIlBvcHVwMThQbHVzQ29udGVudCIsIkdvb2dsZVJlQ2FwdGNoYSIsImZvcndhcmRSZWYiLCJvblJvdXRlQ2hhbmdlU3RhcnQiLCJncmVjYXB0Y2hhIiwidXNlRWZmZWN0IiwiZm9ybWF0RGF0ZSIsImRhdGUiLCJmb3JtYXQiLCJjb252ZXJEdXJhdGlvbiIsImR1cmF0aW9uIiwidXRjIiwiYXNNaWxsaXNlY29uZHMiLCJwYXJzZUFnZSIsImdldEFnZSIsInRvU3RyaW5nIiwiZm9ybWF0RHVyYXRpb24iLCJzIiwiaG91cnMiLCJNYXRoIiwiZmxvb3IiLCJtaW51dGVzIiwic2Vjb25kcyIsImJlZm9yZUF2YXRhclVwbG9hZCIsImZpbGUiLCJleHQiLCJzcGxpdCIsInBvcCIsInRvTG93ZXJDYXNlIiwiY29uZmlnIiwiZ2V0R2xvYmFsQ29uZmlnIiwiaXNJbWFnZUFjY2VwdCIsIk5FWFRfUFVCTElDX0lNQUdFX0FDQ1BFVCIsInRyaW0iLCJpbmRleE9mIiwiaXNMdDJNIiwic2l6ZSIsIk5FWFRfUFVCTElDX01BWElNVU1fU0laRV9VUExPQURfQVZBVEFSIiwiSU5URVJORVRfQ0hFQ0tfVVJMIiwiaXNIYXNJbnRlcm5ldENvbm5lY3Rpb24iLCJmZXRjaCIsImhlYWRlcnMiLCJQcmFnbWEiLCJFeHBpcmVzIiwic3RhdHVzIiwiZXhjZXB0aW9uIiwibG9nIiwiZm9ybUl0ZW1MYXlvdXQiLCJsYWJlbENvbCIsInhzIiwic3BhbiIsInNtIiwid3JhcHBlckNvbCIsInRhaWxGb3JtSXRlbUxheW91dCIsIm9mZnNldCIsImRlZmF1bHRDb2xvciIsInByaW1hcnlDb2xvciIsInN1Y2Nlc3NDb2xvciIsIndoaXRlQ29sb3IiLCJ2YWxpZGF0ZU1lc3NhZ2VzIiwidHlwZXMiLCJlbWFpbCIsIm51bWJlciIsInJhbmdlIiwiY3JlYXRlQWN0aW9uIiwiYWN0aW9uIiwiUmVkdXhDcmVhdGVBY3Rpb24iLCJpcyIsImFUeXBlIiwiY3JlYXRlQXN5bmNBY3Rpb24iLCJjcmVhdGVBc3luY0FjdGlvbnMiLCJoYW5kbGVBY3Rpb25zIiwiYWN0aW9ucyIsImluaXRpYWxTdGF0ZSIsImhhbmRsZVJlZHV4QWN0aW9ucyIsInJlZHVjZSIsInJlZHVjZXIiLCJhY3QiLCJjcmVhdGVSZWR1Y2VycyIsInN0YXRlQ29udGV4dCIsInJlZHVjZXJzIiwicHJldmVudFJlc2V0dGluZyIsImZsYXR0ZW4iLCJpc0FycmF5IiwiZm9yRWFjaCIsIkFQUF9TVEFURV9SRVNFVCIsImNyZWF0ZVNhZ2FzIiwic2FnYXMiLCJzYWdhIiwiZWZmZWN0IiwidGFrZUxhdGVzdCIsIndvcmtlciIsImRlbGF5IiwiY3JlYXRlU2VsZWN0b3JzQSIsImNvbnRleHQiLCJzdGF0ZVNlbGVjdG9yIiwiaXNFbXB0eSIsImdldEluIiwiY3JlYXRlU2VsZWN0b3JzIiwic2VsZWN0b3JzIiwiY3JlYXRlSlNTZWxlY3RvcnMiLCJ1c2VybmFtZVBhdHRlcm5SdWxlIiwic3RvcmUiLCJnZXRTdG9yZSIsInNldFN0b3JlIiwiREVGQVVMVF9PRkZMSU5FX0lNQUdFX1VSTCIsIkRFRkFVTFRfUFJJVkFURV9JTUFHRV9VUkwiLCJERUZBVUxUX0dST1VQX0lNQUdFX1VSTCIsIkRFRkFVTFRfT05MSU5FX0lNQUdFX1VSTCIsImdldFBvc3RlciIsInBvc3RlciIsInN0b3JlSG9sZGVyIiwic2V0dGluZ3MiLCJnZXRTdGF0ZSIsImRlZmF1bHRQcml2YXRlQ2FsbEltYWdlIiwiZGVmYXVsdE9mZmxpbmVNb2RlbEltYWdlIiwiZGVmYXVsdEdyb3VwQ2hhdEltYWdlIiwiaXNVcmwiLCJtYXRjaCIsImdlbmVyYXRlVXVpZCIsImMiLCJyIiwicmFuZG9tIiwidiIsImNhcGl0YWxpemVGaXJzdExldHRlciIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJ1bml0UHJpY2VzIiwidGV4dCIsImFycmF5VG9UcmVlIiwiYXJyYXkiLCJpZCIsInBhcmVudElkIiwiY2xvbmVEZWVwIiwiaW5kZXgiLCJoYXNoUGFyZW50IiwicGF0aE1hdGNoUmVnZXhwIiwicmVnZXhwIiwiZXhlYyIsInF1ZXJ5QW5jZXN0b3JzIiwiaGFzaE1hcCIsIk1hcCIsImdldFBhdGgiLCJjdXJyZW50UGFyZW50SWQiLCJjb25zdHJhaW50cyIsInZhbHVlcyIsImlzTW9iaWxlIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiZ2V0VXJsUGFyYW1ldGVyIiwic1BhcmFtIiwic1BhZ2VVUkwiLCJsb2NhdGlvbiIsInN1YnN0cmluZyIsInNVUkxWYXJpYWJsZXMiLCJzUGFyYW1ldGVyTmFtZSIsIkRBWV9PRl9XRUVLIiwibW9uIiwidHVlIiwid2VkIiwidGh1IiwiZnJpIiwic2F0Iiwic3VuIiwiZ2V0RGVmYXVsdFNjaGVkdWxlIiwiZGVmYXVsdFZhbCIsInN0YXJ0IiwiZW5kIiwiY2xvc2VkIiwiZ2V0TmV4dFNob3ciLCJzY2hlZHVsZSIsIndlZWtEYXkiLCJuZXh0U2hvdyIsInBlcmZvcm1lclNob3dzIiwiZmlsdGVyIiwiZGF5IiwiZ2V0U2VhcmNoRGF0YSIsInBhZ2luYXRpb24iLCJmaWx0ZXJzIiwic29ydGVyIiwic29ydCIsInNvcnRCeSIsImxpbWl0Iiwib3JkZXIiLCJTT1JUIiwiZ2V0QmFzZTY0Iiwib3JpZ2luRmlsZU9iaiIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNEYXRhVVJMIiwib25sb2FkIiwib25lcnJvciIsImNvbnZlcnRDb25uZWN0aW9uRGF0YSIsImFyciIsInNlcnZlckRhdGEiLCJKU09OIiwicGFyc2UiLCJjbGllbnREYXRhIiwiY2hlY2tVc2VyTG9naW4iLCJpc0xvZ2dlZEluIiwidXNlciIsIl9pZCIsImdldEN1cnJlbnRVc2VyIiwicGVyZm9ybWVyIiwiaXNQaHlzaWNhbFByb2R1Y3QiLCJjaGF0Qm94TWVzc2FnZUNsYXNzTmFtZSIsInJlcSIsImlzTWluZSIsInN0YXJ0c1NlcXVlbmNlIiwiZW5kc1NlcXVlbmNlIiwiY2xhc3NuYW1lcyIsIm1pbmUiLCJ0aXAiLCJjb252ZXJ0RmVldFRvQ20iLCJmZWV0IiwiaW5jaCIsImYiLCJmb3JtYXREYXRhV2VpZ2h0IiwidG9GaXhlZCIsImxhYmVsIiwiZm9ybWF0RGF0YUhlaWdodCIsImEiLCJmb3JtYXRQcmljZSIsInByaWNlIiwiZnJhY3Rpb25EaWdpdHMiLCJsb2dpbiIsImxvZ2luU3VjY2VzcyIsImxvZ2luRmFpbCIsImxvZ2luUmVxdWVzdGluZyIsInBlcmZvcm1lcmxvZ2luIiwicGVyZm9ybWVybG9naW5TdWNjZXNzIiwicGVyZm9ybWVybG9naW5GYWlsIiwicmVzZXRMb2dpbkRhdGEiLCJzdHVkaW9Mb2dpbiIsInN0dWRpb0xvZ2luU3VjY2VzcyIsInN0dWRpb0xvZ2luRmFpbCIsInBlcmZvcm1lclJlZ2lzdGVyIiwicGVyZm9ybWVyUmVnaXN0ZXJTdWNjZXNzIiwicGVyZm9ybWVyUmVnaXN0ZXJGYWlsIiwic2V0UGVyZm9ybWVyUmVnaXN0ZXJTdWJtaXR0aW5nIiwidXNlclJlZ2lzdGVyU3VjY2VzcyIsInVzZXJSZWdpc3RlckZhaWwiLCJzZXRVc2VyUmVnaXN0ZXJTdWJtaXR0aW5nIiwidXBkYXRlUGFzc3dvcmQiLCJ1cGRhdGVQYXNzd29yZFN1Y2Nlc3MiLCJ1cGRhdGVQYXNzd29yZEZhaWwiLCJzZXRVcGRhdGVQYXNzd29yZFN1Ym1pdHRpbmciLCJsb2dvdXQiLCJsb2FkVUlWYWx1ZSIsIlRPS0VOIiwiUk9MRSIsIlBFUkZPUk1FUl9ST0xFIiwiVVNFUl9ST0xFIiwiU1RVRElPX1JPTEUiLCJkZXNjZW5kIiwiYXNjZW5kIiwiQVBJUmVxdWVzdCIsInNldEF1dGhIZWFkZXJUb2tlbiIsInBhcnNlSlNPTiIsInJlc3BvbnNlIiwianNvbiIsImNoZWNrU3RhdHVzIiwiY2xvbmUiLCJyZXF1ZXN0IiwiYm9keSIsInZlcmIiLCJ1cGRhdGVkSGVhZGVyIiwiQXV0aG9yaXphdGlvbiIsImNvb2tpZSIsIkFQSV9FTkRQT0lOVCIsIk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVCIsInN0cmluZ2lmeSIsInRoZW4iLCJidWlsZFVybCIsImJhc2VVcmwiLCJxdWVyeVN0cmluZyIsImsiLCJqb2luIiwicG9zdCIsInB1dCIsImRlbCIsInVwbG9hZCIsImZpbGVzIiwib25Qcm9ncmVzcyIsInVwbG9hZFVybCIsIlhNTEh0dHBSZXF1ZXN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImxlbmd0aENvbXB1dGFibGUiLCJwZXJjZW50YWdlIiwibG9hZGVkIiwidG90YWwiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZmllbGRuYW1lIiwiY3VzdG9tRGF0YSIsInJlc3BvbnNlVHlwZSIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwic2VuZCIsInJlZ2lzdGVyIiwiZG9jdW1lbnRWZXJpZmljYXRpb24iLCJkb2N1bWVudFZlcmlmaWNhdGlvbkZpbGUiLCJpZFZlcmlmaWNhdGlvbiIsImlkVmVyaWZpY2F0aW9uRGlsZSIsIm9taXQiLCJBdXRoU2VydmljZSIsInNldEF1dGhIZWFkZXIiLCJyb2xlIiwiZXhwaXJlcyIsInBlcmZvcm1lckxvZ2luIiwic2V0VG9rZW4iLCJnZXRUb2tlbiIsImdldFJvbGUiLCJyZW1vdmVUb2tlbiIsInJlbW92ZSIsInJlbW92ZVJlbWVtYmVyIiwicGVyZm9ybWVyc1JlZ2lzdGVyIiwic3R1ZGlvUmVnaXN0ZXIiLCJmb3Jnb3RQYXNzd29yZCIsInJlc2VuZFZlcmlmaWNhdGlvbkVtYWlsIiwiYXV0aFNlcnZpY2UiLCJCYW5uZXJTZXJ2aWNlIiwiYmFubmVyU2VydmljZSIsImdsb2JhbENvbmZpZyIsInNldEdsb2JhbENvbmZpZyIsIkVhcm5pbmdTZXJ2aWNlIiwic3RhdHMiLCJlYXJuaW5nU2VydmljZSIsIkZhdm91cml0ZVNlcnZpY2UiLCJsaWtlIiwidW5saWtlIiwiZmF2b3JpdGUiLCJpc0Zhdm9yaXRlZCIsImZhdm91cml0ZVNlcnZpY2UiLCJHYWxsZXJ5U2VydmljZSIsImlzUGVyZm9ybWVyIiwicHVyY2hhc2VkIiwiY3JlYXRlIiwidXBkYXRlIiwiZGV0YWlscyIsInB1YmxpY2RldGFpbHMiLCJnYWxsZXJ5U2VydmljZSIsIk1lc3NhZ2VTZXJ2aWNlIiwiZ2V0Q29udmVyc2F0aW9ucyIsInNlYXJjaENvbnZlcnNhdGlvbnMiLCJjcmVhdGVDb252ZXJzYXRpb24iLCJnZXRDb252ZXJzYXRpb25EZXRhaWwiLCJnZXRDb252ZXJzYXRpb25CeVN0cmVhbUlkIiwic3RyZWFtSWQiLCJnZXRNZXNzYWdlcyIsImNvbnZlcnNhdGlvbklkIiwiZ2V0UHVibGljTWVzc2FnZXMiLCJzZW5kTWVzc2FnZSIsInNlbmRTdHJlYW1NZXNzYWdlIiwic2VuZFB1YmxpY1N0cmVhbU1lc3NhZ2UiLCJmaW5kUHVibGljQ29udmVyc2F0aW9uUGVyZm9ybWVyIiwicGVyZm9ybWVySWQiLCJjb3VudFRvdGFsTm90UmVhZCIsInJlYWRBbGxJbkNvbnZlcnNhdGlvbiIsInJlY2lwaWVudElkIiwiZ2V0TWVzc2FnZVVwbG9hZFVybCIsImRlbGV0ZU1lc3NhZ2UiLCJkZWxldGVBbGxNZXNzYWdlSW5Db252ZXJzYXRpb24iLCJtZXNzYWdlU2VydmljZSIsIk9yZGVyU2VydmljZSIsInBheWxvYWQiLCJ1c2VyU2VhcmNoIiwidXNlckZpbmREZXRhaWxzIiwib3JkZXJTZXJ2aWNlIiwiUGF5bWVudEluZm9ybWF0aW9uU2VydmljZSIsImZpbmRPbmUiLCJwYXltZW50SW5mb3JtYXRpb25TZXJ2aWNlIiwiUGF5b3V0UmVxdWVzdFNlcnZpY2UiLCJjYWxjdWxhdGUiLCJzdHVkaW9TZWFyY2giLCJkZXRhaWwiLCJwYXlvdXRSZXF1ZXN0U2VydmljZSIsIlBlcmZvcm1lckNhdGVnb3JpZXNTZXJ2aWNlIiwiZ2V0TGlzdCIsInBlcmZvcm1lckNhdGVnb3JpZXMiLCJQZXJmb3JtZXJTZXJ2aWNlIiwibWUiLCJ1cGRhdGVNZSIsInVzZXJuYW1lIiwiZ2V0QXZhdGFyVXBsb2FkVXJsIiwiZ2V0RG9jdW1lbnRzVXBsb2FkVXJsIiwiZ2V0UmVsZWFzZUZvcm1VcmwiLCJteVByb2R1Y3QiLCJjcmVhdGVQcm9kdWN0IiwiaW1hZ2UiLCJkaWdpdGFsRmlsZSIsInVwZGF0ZVByb2R1Y3QiLCJyZW1vdmVQcm9kdWN0IiwiZ2V0Q29tbWlzc2lvbiIsInVwZGF0ZVBheW1lbnRJbmZvIiwidXBkYXRlRGlyZWN0RGVwb3N0IiwidXBkYXRlUGF4dW0iLCJ1cGRhdGVCaXRwYXkiLCJ1cGRhdGVTdHJlYW1pbmdTdGF0dXMiLCJnZW9CbG9jayIsImdldEJsb2NrZWRMaXN0IiwiaW5jcmVhc2VWaWV3IiwidXBkYXRlRGVmYXVsdFByaWNlIiwidXBkYXRlQnJvYWRjYXN0U2V0dGluZyIsInN1c3BlbmRBY2NvdW50IiwicGFzc3dvcmQiLCJjaGVja0Jsb2NrIiwiR0VOTkRFUl9QRVJGT1JNRVIiLCJwZXJmb3JtZXJTZXJ2aWNlIiwiUGhvdG9TZXJ2aWNlIiwic2VhcmNoQnlHYWxsZXJ5IiwiZ2FsbGVyeUlkIiwibXlQaG90b3MiLCJwaG90byIsInVwbG9hZEltYWdlcyIsInBob3RvU2VydmljZSIsIlBvc3RTZXJ2aWNlIiwiZmluZEJ5SWQiLCJjcmVhdGVDb250YWN0Q290ZW50IiwicG9zdFNlcnZpY2UiLCJQcm9kdWN0U2VydmljZSIsImdldERvd25sb2FkTGluayIsInByb2R1Y3RTZXJ2aWNlIiwiUHVyY2hhc2VJdGVtU2VydmljZSIsInB1cmNoYXNlSXRlbSIsInB1cmNoYXNlUHJvZHVjdCIsInB1cmNoYXNlVmlkZW8iLCJwdXJjaGFzZUl0ZW1TZXJ2aWNlIiwiUmVmdW5kUmVxdWVzdFNlcnZpY2UiLCJyZWZ1bmRSZXF1ZXN0U2VydmljZSIsIlNldHRpbmdTZXJ2aWNlIiwiZ3JvdXAiLCJnZXRUaW1lem9uZXMiLCJTdHJlYW1TZXJ2aWNlIiwiZ2V0U2Vzc2lvbklkIiwiZ29MaXZlIiwiam9pblB1YmxpY0NoYXQiLCJyZXF1ZXN0UHJpdmF0ZUNoYXQiLCJhY2NlcHRQcml2YXRlQ2hhdCIsInN0YXJ0R3JvdXBDaGF0Iiwiam9pbkdyb3VwQ2hhdCIsImdlbmVyYXRlT25lVGltZVRva2VuIiwiZ2V0UHVibGlzaFRva2VuIiwiZXhwaXJlRGF0ZSIsImFkZCIsInRvRGF0ZSIsImdldFRpbWUiLCJzZWN1cmVPcHRpb24iLCJyZXNwIiwidG9rZW5JZCIsImdldFN1YnNjcmliZXJUb2tlbiIsImdldExpdmVTdHJlYW1PclZvZFVSTCIsIl9wbGF5ZXIiLCJhcHBOYW1lIiwidmlld2VyVVJMIiwiZXh0ZW5zaW9uIiwib25lVGltZVRva2VuIiwic3RyZWFtU2VydmljZSIsIlN0dWRpb1NlcnZpY2UiLCJhZGRNb2RlbCIsImdldE1lbWJlcnMiLCJnZXRNZW1iZXJDb21taXNzaW9ucyIsInVwZGF0ZU1lbWJlckNvbW1pc3Npb24iLCJnZXRQZXJmb3JtZXJSZXF1ZXN0IiwidXBkYXRlU3RhdHVzUGVyZm9ybWVyUmVxdWVzdCIsInVwZGF0ZU1lbWJlclN0YXR1cyIsInN0dWRpb1NlcnZpY2UiLCJUb2tlblBhY2thZ2VTZXJ2aWNlIiwiYnV5VG9rZW5zIiwidG9rZW5QYWNrYWdlU2VydmljZSIsIlRyYW5zYWN0aW9uU2VydmljZSIsInNlbmRUaXBUb2tlbiIsInNlbmRQYWlkVG9rZW4iLCJ0cmFuc2FjdGlvblNlcnZpY2UiLCJVc2VyU2VydmljZSIsInVzZXJJZCIsInVzZXJTZXJ2aWNlIiwiVXRpbHNTZXJ2aWNlIiwiY291bnRyaWVzTGlzdCIsImxhbmd1YWdlc0xpc3QiLCJwaG9uZUNvZGVzTGlzdCIsInN0YXRpc3RpY3MiLCJWaWRlb1NlcnZpY2UiLCJteVZpZGVvcyIsInJlbW92ZU15VmlkZW8iLCJ2aWRlbyIsInRyYWlsZXIiLCJ0aHVtYm5haWwiLCJ1c2VyRmluZFZpZGVvQnlJZCIsInZpZGVvU2VydmljZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtR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LE9BQUssRUFBRSxFQURUO0FBRUVtWixNQUFJLEVBQUU7QUFGUixDQXpCd0QsRUE2QnhEO0FBQ0VuWixPQUFLLEVBQUUsRUFEVDtBQUVFbVosTUFBSSxFQUFFO0FBRlIsQ0E3QndELENBaUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Ozs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHFDIiwiZmlsZSI6InBhZ2VzL2F1dGgvcmVnaXN0ZXIvdXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXV0aC9yZWdpc3Rlci91c2VyLnRzeFwiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhblxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93IH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHAgJiZcbiAgICAgIEludGVyc2VjdGlvbk9ic2VydmVyICYmXG4gICAgICBjaGlsZEVsbSAmJlxuICAgICAgY2hpbGRFbG0udGFnTmFtZSAmJlxuICAgICAgaXNMb2NhbFVSTChocmVmKVxuICAgICkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbClcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoYXMsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcbmltcG9ydCBlc2NhcGVQYXRoRGVsaW1pdGVycyBmcm9tICcuL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMnXG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9IG51bGwgfCB7IF9fTjogZmFsc2UgfSB8ICh7IF9fTjogdHJ1ZSB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pLm1hcChlc2NhcGVQYXRoRGVsaW1pdGVycykuam9pbignLycpXG4gICAgICAgICAgICAgIDogZXNjYXBlUGF0aERlbGltaXRlcnModmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmNvbnN0IFBBR0VfTE9BRF9FUlJPUiA9IFN5bWJvbCgnUEFHRV9MT0FEX0VSUk9SJylcbmV4cG9ydCBmdW5jdGlvbiBtYXJrTG9hZGluZ0Vycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBQQUdFX0xPQURfRVJST1IsIHt9KVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8UHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbywgQXBwOiBBcHBDb21wb25lbnQpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0czogaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGFzID0gYWRkTG9jYWxlKGFzLCB0aGlzLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGNvbnN0IHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5wcm9taXNlZEJ1aWxkTWFuaWZlc3RcblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBsZXQgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpIHtcbiAgICAgIHJlc29sdmVkQXMgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIHBhcnNlUmVsYXRpdmVVcmwoYXMpLnBhdGhuYW1lLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhXG4gICAgICApXG5cbiAgICAgIGlmIChyZXNvbHZlZEFzICE9PSBhcykge1xuICAgICAgICBjb25zdCBwb3RlbnRpYWxIcmVmID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYoXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWQsIHsgcGF0aG5hbWU6IHJlc29sdmVkQXMgfSksXG4gICAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgKS5wYXRobmFtZSFcbiAgICAgICAgKVxuXG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBvdGVudGlhbEhyZWYpKSB7XG4gICAgICAgICAgcm91dGUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGF0aG5hbWUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoXG4gICAgICAgIChfX05fU1NHIHx8IF9fTl9TU1ApICYmXG4gICAgICAgIHByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkSHJlZiwgcGFnZXMpXG5cbiAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShcbiAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgdXJsLFxuICAgICAgICBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpLFxuICAgICAgICBvcHRpb25zXG4gICAgICApXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKS5jYXRjaChcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgJy9fZXJyb3InXG4gICAgICApXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZSxcbiAgICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8UHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSwgYXBwbHlCYXNlUGF0aCA9IHRydWUpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgICApXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYXBwbHlCYXNlUGF0aCA/IGFkZEJhc2VQYXRoKHBhZ2UpIDogcGFnZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YShcbiAgICAgICAgdXJsLFxuICAgICAgICBhc1BhdGgsXG4gICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFByaXZhdGVSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIGVzY2FwZSBkZWxpbWl0ZXJzIHVzZWQgYnkgcGF0aC10by1yZWdleHBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHNlZ21lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzZWdtZW50LnJlcGxhY2UoL1svIz9dL2csIChjaGFyOiBzdHJpbmcpID0+IGVuY29kZVVSSUNvbXBvbmVudChjaGFyKSlcbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTChcbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWYsXG4gICAgb3JpZ2luLFxuICAgIHByb3RvY29sLFxuICB9ID0gbmV3IFVSTCh1cmwsIHJlc29sdmVkQmFzZSlcbiAgaWYgKFxuICAgIG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4gfHxcbiAgICAocHJvdG9jb2wgIT09ICdodHRwOicgJiYgcHJvdG9jb2wgIT09ICdodHRwczonKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKERVTU1ZX0JBU0Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbmV4cG9ydCB7IHBhdGhUb1JlZ2V4cCB9XG5cbmV4cG9ydCBjb25zdCBtYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24obWF0Y2hlclJlZ2V4LCBrZXlzKVxuXG4gICAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyYW1zPzogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXRobmFtZSA9PSBudWxsID8gZmFsc2UgOiBtYXRjaGVyKHBhdGhuYW1lKVxuICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjdXN0b21Sb3V0ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgLy8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuICAgICAgICAgIC8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgIGlmICh0eXBlb2Yga2V5Lm5hbWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBkZWxldGUgKHJlcy5wYXJhbXMgYXMgYW55KVtrZXkubmFtZV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4ucGFyYW1zLCAuLi5yZXMucGFyYW1zIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbnR5cGUgUGFyYW1zID0geyBbcGFyYW06IHN0cmluZ106IGFueSB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmVEZXN0aW5hdGlvbihcbiAgZGVzdGluYXRpb246IHN0cmluZyxcbiAgcGFyYW1zOiBQYXJhbXMsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgYXBwZW5kUGFyYW1zVG9RdWVyeTogYm9vbGVhbixcbiAgYmFzZVBhdGg6IHN0cmluZ1xuKSB7XG4gIGxldCBwYXJzZWREZXN0aW5hdGlvbjoge1xuICAgIHF1ZXJ5PzogUGFyc2VkVXJsUXVlcnlcbiAgICBwcm90b2NvbD86IHN0cmluZ1xuICAgIGhvc3RuYW1lPzogc3RyaW5nXG4gICAgcG9ydD86IHN0cmluZ1xuICB9ICYgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4gPSB7fSBhcyBhbnlcblxuICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9ID0gbmV3IFVSTChkZXN0aW5hdGlvbilcblxuICAgIHBhcnNlZERlc3RpbmF0aW9uID0ge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZXN0UXVlcnkgPSBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeVxuICBjb25zdCBkZXN0UGF0aCA9IGAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIX0ke1xuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggfHwgJydcbiAgfWBcbiAgY29uc3QgZGVzdFBhdGhQYXJhbUtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoZGVzdFBhdGgsIGRlc3RQYXRoUGFyYW1LZXlzKVxuXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1zID0gZGVzdFBhdGhQYXJhbUtleXMubWFwKChrZXkpID0+IGtleS5uYW1lKVxuXG4gIGxldCBkZXN0aW5hdGlvbkNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUoXG4gICAgZGVzdFBhdGgsXG4gICAgLy8gd2UgZG9uJ3QgdmFsaWRhdGUgd2hpbGUgY29tcGlsaW5nIHRoZSBkZXN0aW5hdGlvbiBzaW5jZSB3ZSBzaG91bGRcbiAgICAvLyBoYXZlIGFscmVhZHkgdmFsaWRhdGVkIGJlZm9yZSB3ZSBnb3QgdG8gdGhpcyBwb2ludCBhbmQgdmFsaWRhdGluZ1xuICAgIC8vIGJyZWFrcyBjb21waWxpbmcgZGVzdGluYXRpb25zIHdpdGggbmFtZWQgcGF0dGVybiBwYXJhbXMgZnJvbSB0aGUgc291cmNlXG4gICAgLy8gZS5nLiAvc29tZXRoaW5nOmhlbGxvKC4qKSAtPiAvYW5vdGhlci86aGVsbG8gaXMgYnJva2VuIHdpdGggdmFsaWRhdGlvblxuICAgIC8vIHNpbmNlIGNvbXBpbGUgdmFsaWRhdGlvbiBpcyBtZWFudCBmb3IgcmV2ZXJzaW5nIGFuZCBub3QgZm9yIGluc2VydGluZ1xuICAgIC8vIHBhcmFtcyBmcm9tIGEgc2VwYXJhdGUgcGF0aC1yZWdleCBpbnRvIGFub3RoZXJcbiAgICB7IHZhbGlkYXRlOiBmYWxzZSB9XG4gIClcbiAgbGV0IG5ld1VybFxuXG4gIC8vIHVwZGF0ZSBhbnkgcGFyYW1zIGluIHF1ZXJ5IHZhbHVlc1xuICBmb3IgKGNvbnN0IFtrZXksIHN0ck9yQXJyYXldIG9mIE9iamVjdC5lbnRyaWVzKGRlc3RRdWVyeSkpIHtcbiAgICBsZXQgdmFsdWUgPSBBcnJheS5pc0FycmF5KHN0ck9yQXJyYXkpID8gc3RyT3JBcnJheVswXSA6IHN0ck9yQXJyYXlcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAgICAgLy8gY29ycmVjdGx5XG4gICAgICB2YWx1ZSA9IGAvJHt2YWx1ZX1gXG4gICAgICBjb25zdCBxdWVyeUNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUodmFsdWUsIHsgdmFsaWRhdGU6IGZhbHNlIH0pXG4gICAgICB2YWx1ZSA9IHF1ZXJ5Q29tcGlsZXIocGFyYW1zKS5zdWJzdHIoMSlcbiAgICB9XG4gICAgZGVzdFF1ZXJ5W2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgLy8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuICAvLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxuICBjb25zdCBwYXJhbUtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG5cbiAgaWYgKFxuICAgIGFwcGVuZFBhcmFtc1RvUXVlcnkgJiZcbiAgICAhcGFyYW1LZXlzLnNvbWUoKGtleSkgPT4gZGVzdFBhdGhQYXJhbXMuaW5jbHVkZXMoa2V5KSlcbiAgKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcGFyYW1LZXlzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gZGVzdFF1ZXJ5KSkge1xuICAgICAgICBkZXN0UXVlcnlba2V5XSA9IHBhcmFtc1trZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2hvdWxkQWRkQmFzZVBhdGggPSBkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykgJiYgYmFzZVBhdGhcblxuICB0cnkge1xuICAgIG5ld1VybCA9IGAke3Nob3VsZEFkZEJhc2VQYXRoID8gYmFzZVBhdGggOiAnJ30ke2Rlc3RpbmF0aW9uQ29tcGlsZXIoXG4gICAgICBwYXJhbXNcbiAgICApfWBcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLm1lc3NhZ2UubWF0Y2goL0V4cGVjdGVkIC4qPyB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5LykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRvIHVzZSBhIG11bHRpLW1hdGNoIGluIHRoZSBkZXN0aW5hdGlvbiB5b3UgbXVzdCBhZGQgXFxgKlxcYCBhdCB0aGUgZW5kIG9mIHRoZSBwYXJhbSBuYW1lIHRvIHNpZ25pZnkgaXQgc2hvdWxkIHJlcGVhdC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1tdWx0aS1tYXRjaGBcbiAgICAgIClcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBRdWVyeSBtZXJnZSBvcmRlciBsb3dlc3QgcHJpb3JpdHkgdG8gaGlnaGVzdFxuICAvLyAxLiBpbml0aWFsIFVSTCBxdWVyeSB2YWx1ZXNcbiAgLy8gMi4gcGF0aCBzZWdtZW50IHZhbHVlc1xuICAvLyAzLiBkZXN0aW5hdGlvbiBzcGVjaWZpZWQgcXVlcnkgdmFsdWVzXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0ge1xuICAgIC4uLnF1ZXJ5LFxuICAgIC4uLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5LFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdVcmwsXG4gICAgcGFyc2VkRGVzdGluYXRpb24sXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHBhdGhNYXRjaCBmcm9tICcuL3BhdGgtbWF0Y2gnXG5pbXBvcnQgcHJlcGFyZURlc3RpbmF0aW9uIGZyb20gJy4vcHJlcGFyZS1kZXN0aW5hdGlvbidcbmltcG9ydCB7IFJld3JpdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvbG9hZC1jdXN0b20tcm91dGVzJ1xuaW1wb3J0IHsgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggfSBmcm9tICcuLi8uLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuXG5jb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXIgPSBwYXRoTWF0Y2godHJ1ZSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKFxuICBhc1BhdGg6IHN0cmluZyxcbiAgcGFnZXM6IHN0cmluZ1tdLFxuICBiYXNlUGF0aDogc3RyaW5nLFxuICByZXdyaXRlczogUmV3cml0ZVtdLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIHJlc29sdmVIcmVmOiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmdcbikge1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICBmb3IgKGNvbnN0IHJld3JpdGUgb2YgcmV3cml0ZXMpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXIgPSBjdXN0b21Sb3V0ZU1hdGNoZXIocmV3cml0ZS5zb3VyY2UpXG4gICAgICBjb25zdCBwYXJhbXMgPSBtYXRjaGVyKGFzUGF0aClcblxuICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICBpZiAoIXJld3JpdGUuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIGEgcHJveGllZCByZXdyaXRlIHdoaWNoIGlzbid0IGhhbmRsZWQgb24gdGhlIGNsaWVudFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzdFJlcyA9IHByZXBhcmVEZXN0aW5hdGlvbihcbiAgICAgICAgICByZXdyaXRlLmRlc3RpbmF0aW9uLFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIHJld3JpdGUuYmFzZVBhdGggPT09IGZhbHNlID8gJycgOiBiYXNlUGF0aFxuICAgICAgICApXG4gICAgICAgIGFzUGF0aCA9IGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucXVlcnkpXG5cbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGFzUGF0aCkpKSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihhc1BhdGgpXG5cbiAgICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhc1BhdGhcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBIZWFkRW50cnkgPSBbc3RyaW5nLCB7IFtrZXk6IHN0cmluZ106IGFueSB9XVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgaGVhZDogSGVhZEVudHJ5W11cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCAnLi4vaW5kZXgubGVzcyc7XG5pbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWVzc2FnZSwgQWxlcnQgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IFJlZ2lzdGVyRm9ybSBmcm9tICdAY29tcG9uZW50cy9hdXRoL3JlZ2lzdGVyL3VzZXItcmVnaXN0ZXItZm9ybSc7XG5pbXBvcnQgeyBJVXNlclJlZ2lzdGVyRm9ybURhdGEsIElDb3VudHJpZXMsIElVSUNvbmZpZyB9IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IHVzZXJSZWdpc3RlciB9IGZyb20gJ0ByZWR1eC9hdXRoL2FjdGlvbnMnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBzZXR0aW5nU2VydmljZSB9IGZyb20gJ0BzZXJ2aWNlcy9zZXR0aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgZ2V0UmVzcG9uc2VFcnJvciB9IGZyb20gJ0BsaWIvdXRpbHMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgRm9ybVJlZ2lzdGVyUGxhY2VIb2xkZXIgfSBmcm9tICdAY29tcG9uZW50cy9jb21tb24vbGF5b3V0JztcblxuaW50ZXJmYWNlIFVzZXJSZWdpc3RlclByb3BzIHtcbiAgcmVxdWVzdGluZzogYm9vbGVhbjtcbiAgdXNlclJlZ2lzdGVyOiBGdW5jdGlvbjtcbiAgbG9nZ2VkSW46IGJvb2xlYW47XG4gIHN1Y2Nlc3M6IGJvb2xlYW47XG4gIGVycm9yOiBhbnk7XG4gIHVpOiBJVUlDb25maWc7XG59XG5pbnRlcmZhY2UgVXNlclJlZ2lzdGVyU3RhdGVzIHtcbiAgZXJyb3I6IGJvb2xlYW47XG4gIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICBjb3VudHJpZXM6IElDb3VudHJpZXNbXTtcbn1cblxuY2xhc3MgVXNlclJlZ2lzdGVyUGFnZSBleHRlbmRzIFB1cmVDb21wb25lbnQ8XG4gIFVzZXJSZWdpc3RlclByb3BzLFxuICBVc2VyUmVnaXN0ZXJTdGF0ZXNcbj4ge1xuICBzdGF0aWMgYXV0aGVudGljYXRlID0gZmFsc2U7XG5cbiAgc3RhdGljIGxheW91dDogc3RyaW5nID0gJ3B1YmxpYyc7XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IFVzZXJSZWdpc3RlclByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlcnJvcjogZmFsc2UsXG4gICAgICBlcnJvck1lc3NhZ2U6ICcnLFxuICAgICAgY291bnRyaWVzOiBbXVxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmdldENvbnRyaWVzKCk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzOiBVc2VyUmVnaXN0ZXJQcm9wcykge1xuICAgIGNvbnN0IHsgc3VjY2VzcywgZXJyb3IgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHByZXZQcm9wcy5zdWNjZXNzICE9PSBzdWNjZXNzICYmIHN1Y2Nlc3MpIHtcbiAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcbiAgICAgICAgJ0NvbmdyYXRzLCB5b3VyIGFjY291bnQgaGFzIGJlZW4gY3JlYXRlZCdcbiAgICAgICk7XG4gICAgICBSb3V0ZXIucHVzaCgnL2F1dGgvbG9naW4nKTtcbiAgICB9XG5cbiAgICBpZiAocHJldlByb3BzLmVycm9yICE9PSBlcnJvciAmJiBlcnJvcikge1xuICAgICAgbWVzc2FnZS5lcnJvcihnZXRSZXNwb25zZUVycm9yKGVycm9yKSk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Q29udHJpZXMoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvdW50cmllcyA9IGF3YWl0IHNldHRpbmdTZXJ2aWNlLmdldENvdW50cmllcygpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvdW50cmllczogY291bnRyaWVzLmRhdGEgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogdHJ1ZSwgZXJyb3JNZXNzYWdlOiBnZXRSZXNwb25zZUVycm9yKGVycm9yKSB9KTtcbiAgICB9XG4gIH1cblxuICBzdWJtaXQoZGF0YTogSVVzZXJSZWdpc3RlckZvcm1EYXRhKSB7XG4gICAgY29uc3QgeyB1c2VyUmVnaXN0ZXI6IGRpc3BhdGNoVXNlclJlZ2lzdGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBuZXdEYXRhID0geyAuLi5kYXRhIH07XG4gICAgaWYgKGRhdGEuZGF0ZU9mQmlydGgpIHtcbiAgICAgIG5ld0RhdGEgPSB7IC4uLmRhdGEsIGRhdGVPZkJpcnRoOiBtb21lbnQoZGF0YS5kYXRlT2ZCaXJ0aCkudG9JU09TdHJpbmcoKSB9O1xuICAgIC8vIGlmIChkYXRhLmRhdGVPZkJpcnRoKSB7XG4gICAgLy8gICBkYXRhLmRhdGVPZkJpcnRoID0gbW9tZW50KGRhdGEuZGF0ZU9mQmlydGgpLnRvSVNPU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgZGlzcGF0Y2hVc2VyUmVnaXN0ZXIobmV3RGF0YSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByZXF1ZXN0aW5nLCB1aSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGVycm9yLCBlcnJvck1lc3NhZ2UsIGNvdW50cmllcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPlVzZXIgUmVnaXN0ZXI8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcGFnZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1yZWdpc3Rlci1jb250YWluZXJcIj5cbiAgICAgICAgICAgIHtlcnJvck1lc3NhZ2UgJiYgKDxBbGVydCB0eXBlPVwiZXJyb3JcIiBtZXNzYWdlPVwiRXJyb3IgcmVxdWVzdFwiIGJhbm5lciAvPil9XG4gICAgICAgICAgICA8UmVnaXN0ZXJGb3JtXG4gICAgICAgICAgICAgIHNpbmd1bGFyVGV4dE1vZGVsPXt1aT8uc2luZ3VsYXJUZXh0TW9kZWwgfHwgJ1BlcmZvcm1lcid9XG4gICAgICAgICAgICAgIGVycm9yPXtlcnJvcn1cbiAgICAgICAgICAgICAgb25GaW5pc2g9e3RoaXMuc3VibWl0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgIHN1Ym1pdGluZz17cmVxdWVzdGluZ31cbiAgICAgICAgICAgICAgY291bnRyaWVzPXtjb3VudHJpZXN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxGb3JtUmVnaXN0ZXJQbGFjZUhvbGRlciB1aT17dWl9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIHVpOiBzdGF0ZS51aSxcbiAgbG9nZ2VkSW46IHN0YXRlLmF1dGgubG9nZ2VkSW4sXG4gIC4uLnN0YXRlLmF1dGgudXNlclJlZ2lzdGVyXG59KTtcbmNvbnN0IG1hcERpc3BhdGNoID0geyB1c2VyUmVnaXN0ZXIgfTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaCkoVXNlclJlZ2lzdGVyUGFnZSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIEZvcm0sIElucHV0LCBCdXR0b24sIERhdGVQaWNrZXIsIFNlbGVjdCwgQWxlcnQsIG1lc3NhZ2Vcbn0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBJQ291bnRyaWVzIH0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgZ2V0UmVzcG9uc2VFcnJvciB9IGZyb20gJ0BsaWIvdXRpbHMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1cGRhdGVVSVZhbHVlIH0gZnJvbSAnc3JjL3JlZHV4L3VpL2FjdGlvbnMnO1xuaW1wb3J0IHsgdXRpbHNTZXJ2aWNlIH0gZnJvbSAnQHNlcnZpY2VzL2luZGV4JztcbmltcG9ydCB7IFJlQ0FQVENIQSB9IGZyb20gJ3JlYWN0LWdvb2dsZS1yZWNhcHRjaGEnO1xuaW1wb3J0IFJlY2FwdGNoYSBmcm9tICdzcmMvY29tcG9uZW50cy9jb21tb24vcmVjYXB0Y2hhJztcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIG9uRmluaXNoKHZhbHVlOiBhbnkpOiBGdW5jdGlvbjtcbiAgc3VibWl0aW5nOiBib29sZWFuO1xuICBjb3VudHJpZXM6IElDb3VudHJpZXNbXTtcbiAgZXJyb3I6IGJvb2xlYW47XG4gIHNpbmd1bGFyVGV4dE1vZGVsOiBzdHJpbmc7XG4gIGdvb2dsZVJlQ2FwdGNoYUVuYWJsZWQ/OiBib29sZWFuO1xuICBnb29nbGVSZUNhcHRjaGFTaXRlS2V5Pzogc3RyaW5nO1xufVxuXG4vLyBjb25zdCBSZWdpc3RlckZyb20gPSAoe1xuLy8gICBvbkZpbmlzaCwgc3VibWl0aW5nLCBjb3VudHJpZXMsIGVycm9yLCBzaW5ndWxhclRleHRNb2RlbFxuLy8gICBnb29nbGVSZUNhcHRjaGFFbmFibGVkPzogYm9vbGVhbjtcbi8vICAgZ29vZ2xlUmVDYXB0Y2hhU2l0ZUtleT86IHN0cmluZztcbi8vIH1cblxuY29uc3QgUmVnaXN0ZXJGcm9tID0gKHtcbiAgb25GaW5pc2g6IHN1Ym1pdCxcbiAgc3VibWl0aW5nLFxuICBjb3VudHJpZXMsXG4gIGVycm9yLFxuICBzaW5ndWxhclRleHRNb2RlbCxcbiAgZ29vZ2xlUmVDYXB0Y2hhRW5hYmxlZCxcbiAgZ29vZ2xlUmVDYXB0Y2hhU2l0ZUtleVxufTogSVByb3BzKSA9PiB7XG4gIGNvbnN0IHJlQ0FQVENIQVJlZiA9IGNyZWF0ZVJlZjxSZUNBUFRDSEE+KCk7XG4gIGNvbnN0IFtyZUNBUFRDSEFFcnJvciwgc2V0cmVDQVBUQ0hBRXJyb3JdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm0oKTtcbiAgY29uc3Qgb25GaW5pc2ggPSBhc3luYyAoZGF0YSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAoZ29vZ2xlUmVDYXB0Y2hhRW5hYmxlZCkge1xuICAgICAgICBjb25zdCB0b2tlbiA9IHJlQ0FQVENIQVJlZi5jdXJyZW50LmdldFZhbHVlKCk7XG4gICAgICAgIC8vIGNvbnN0IHRva2VuID0gYXdhaXQgcmVDQVBUQ0hBUmVmLmN1cnJlbnQuZXhlY3V0ZUFzeW5jKCk7XG4gICAgICAgIGlmICghdG9rZW4pIHtcbiAgICAgICAgICBzZXRyZUNBUFRDSEFFcnJvcignUGxlYXNlIHZlcmlmeSB0aGF0IHlvdSBhcmUgbm90IGEgcm9ib3QuJyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVDQVBUQ0hBUmVmLmN1cnJlbnQucmVzZXQoKTtcbiAgICAgICAgc2V0cmVDQVBUQ0hBRXJyb3IoJycpO1xuICAgICAgICBhd2FpdCB1dGlsc1NlcnZpY2UudmVyaWZ5UmVjYXB0Y2hhKHRva2VuKTtcbiAgICAgIH1cblxuICAgICAgc3VibWl0KGRhdGEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChnb29nbGVSZUNhcHRjaGFFbmFibGVkICYmIHJlQ0FQVENIQVJlZi5jdXJyZW50LmdldFZhbHVlKCkpIHtcbiAgICAgICAgcmVDQVBUQ0hBUmVmLmN1cnJlbnQucmVzZXQoKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZXJyID0gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGUpO1xuICAgICAgbWVzc2FnZS5lcnJvcihnZXRSZXNwb25zZUVycm9yKGVycikpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8Rm9ybVxuICAgICAgbGF5b3V0PVwidmVydGljYWxcIlxuICAgICAgZm9ybT17Zm9ybX1cbiAgICAgIG9uRmluaXNoPXtvbkZpbmlzaH1cbiAgICAgIG5hbWU9XCJwZXJmb3JtZXJSZWdpc3RlckZvcm1cIlxuICAgICAgaW5pdGlhbFZhbHVlcz17eyBjb3VudHJ5OiB1bmRlZmluZWQgfX1cbiAgICA+XG4gICAgICA8aDE+TWVtYmVyIHJlZ2lzdGVyPC9oMT5cbiAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgbmFtZT1cImRhdGVPZkJpcnRoXCJcbiAgICAgICAgcnVsZXM9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciBkYXRlIG9mIGJpcnRoISdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhbGlkYXRvcjogKHJ1bGUsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgIGlmICghdmFsdWUpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgICAgY29uc3QgeWVhcnMgPSBtb21lbnQoKS5kaWZmKHZhbHVlLCAneWVhcnMnKTtcbiAgICAgICAgICAgICAgaWYgKHllYXJzID49IDE4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ01pbmltdW0gb2YgMTggeWVhcnMnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBdfVxuICAgICAgPlxuICAgICAgICA8RGF0ZVBpY2tlciBwbGFjZWhvbGRlcj1cIkRhdGUgb2YgQmlydGhcIiAvPlxuICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJnZW5kZXJcIj5cbiAgICAgICAgPFNlbGVjdCBwbGFjZWhvbGRlcj1cIkdlbmRlclwiPlxuICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwibWFsZVwiIGtleT1cIm1hbGVcIj5cbiAgICAgICAgICAgIE1hbGVcbiAgICAgICAgICA8L1NlbGVjdC5PcHRpb24+XG4gICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJmZW1hbGVcIiBrZXk9XCJmZW1hbGVcIj5cbiAgICAgICAgICAgIEZlbWFsZVxuICAgICAgICAgIDwvU2VsZWN0Lk9wdGlvbj5cbiAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cInRyYW5zZ2VuZGVyXCIga2V5PVwidHJhbnNnZW5kZXJcIj5cbiAgICAgICAgICAgIFRyYW5zZ2VuZGVyXG4gICAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxuICAgICAgICA8L1NlbGVjdD5cbiAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgPEZvcm0uSXRlbVxuICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcbiAgICAgICAgcnVsZXM9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciBmaXJzdCBuYW1lISdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhdHRlcm46IG5ldyBSZWdFeHAoJ15bYS16QS1aMC05IF0qJCcpLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0FscGhhbnVtZXJpYydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHdoaXRlc3BhY2U6IHRydWUsXG4gICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIGlucHV0IHlvdXIgZmlyc3QgbmFtZSEnXG4gICAgICAgICAgfVxuICAgICAgICBdfVxuICAgICAgPlxuICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJGaXJzdCBOYW1lXCIgLz5cbiAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgPEZvcm0uSXRlbVxuICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICBydWxlcz17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSBpbnB1dCB5b3VyIGxhc3QgbmFtZSEnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYXR0ZXJuOiBuZXcgUmVnRXhwKCdeW2EtekEtWjAtOSBdKiQnKSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdBbHBoYW51bWVyaWMnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB3aGl0ZXNwYWNlOiB0cnVlLFxuICAgICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSBpbnB1dCB5b3VyIGxhc3QgbmFtZSEnXG4gICAgICAgICAgfVxuICAgICAgICBdfVxuICAgICAgPlxuICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJMYXN0IE5hbWVcIiAvPlxuICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICA8Rm9ybS5JdGVtXG4gICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgIHJ1bGVzPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIGlucHV0IHlvdXIgRS1tYWlsISdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdlbWFpbCcsXG4gICAgICAgICAgICBtZXNzYWdlOiAnVGhlIGlucHV0IGlzIG5vdCB2YWxpZCBFLW1haWwhJ1xuICAgICAgICAgIH1cbiAgICAgICAgXX1cbiAgICAgID5cbiAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiRS1tYWlsXCIgLz5cbiAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgPEZvcm0uSXRlbVxuICAgICAgICBuYW1lPVwicGhvbmVcIlxuICAgICAgICBydWxlcz17W1xuICAgICAgICAgIHsgbWluOiA5IH0sXG4gICAgICAgICAgeyBtYXg6IDE0IH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGF0dGVybjogbmV3IFJlZ0V4cCgvXlswLTlcXGJcXFxcKyBdKyQvKSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdUaGUgcGhvbmUgbnVtYmVyIGlzIG5vdCBpbiB0aGUgY29ycmVjdCBmb3JtYXQnXG4gICAgICAgICAgfVxuICAgICAgICBdfVxuICAgICAgPlxuICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJQaG9uZSBOdW1iZXJcIiAvPlxuICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICA8Rm9ybS5JdGVtXG4gICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgIHJ1bGVzPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICBtZXNzYWdlOiAnVXNlcm5hbWUgaXMgcmVxdWlyZWQhJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGF0dGVybjogbmV3IFJlZ0V4cCgnXlthLXpBLVowLTldKiQnKSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdEb250IGFsbG93IHNwZWNpYWwgY2hhcnMgb3Igc3BhY2UnXG4gICAgICAgICAgfVxuICAgICAgICBdfVxuICAgICAgPlxuICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiIC8+XG4gICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgcnVsZXM9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciBwYXNzd29yZCEnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBtaW46IDYsXG4gICAgICAgICAgICBtYXg6IDE0LFxuICAgICAgICAgICAgbWVzc2FnZTogJ1Bhc3Nvd29yZCBzaG91bGQgYmUgNi0xNCBjaGFyYWN0ZXJzJ1xuICAgICAgICAgIH1cbiAgICAgICAgXX1cbiAgICAgICAgaGFzRmVlZGJhY2tcbiAgICAgID5cbiAgICAgICAgPElucHV0LlBhc3N3b3JkIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiAvPlxuICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICA8Rm9ybS5JdGVtXG4gICAgICAgIG5hbWU9XCJjb25maXJtXCJcbiAgICAgICAgZGVwZW5kZW5jaWVzPXtbJ3Bhc3N3b3JkJ119XG4gICAgICAgIGhhc0ZlZWRiYWNrXG4gICAgICAgIHJ1bGVzPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIGNvbmZpcm0geW91ciBwYXNzd29yZCEnXG4gICAgICAgICAgfSxcbiAgICAgICAgICAoeyBnZXRGaWVsZFZhbHVlIH0pID0+ICh7XG4gICAgICAgICAgICB2YWxpZGF0b3IocnVsZSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgaWYgKCF2YWx1ZSB8fCBnZXRGaWVsZFZhbHVlKCdwYXNzd29yZCcpID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcbiAgICAgICAgICAgICAgICBuZXcgRXJyb3IoJ1RoZSB0d28gcGFzc3dvcmRzIHRoYXQgeW91IGVudGVyZWQgZG8gbm90IG1hdGNoIScpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXX1cbiAgICAgID5cbiAgICAgICAgPElucHV0LlBhc3N3b3JkIHBsYWNlaG9sZGVyPVwiQ29uZmlybSBQYXNzd29yZFwiIC8+XG4gICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgbmFtZT1cImNvdW50cnlcIlxuICAgICAgICBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciBjb3VudHJ5IScgfV19XG4gICAgICA+XG4gICAgICAgIDxTZWxlY3Qgc2hvd1NlYXJjaCBwbGFjZWhvbGRlcj1cIkNvdW50cnlcIj5cbiAgICAgICAgICB7Y291bnRyaWVzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICYmIGNvdW50cmllcy5tYXAoKGNvdW50cnkpID0+IChcbiAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9e2NvdW50cnkubmFtZX0ga2V5PXtjb3VudHJ5LmNvZGV9PlxuICAgICAgICAgICAgICAgIHtjb3VudHJ5Lm5hbWV9XG4gICAgICAgICAgICAgIDwvU2VsZWN0Lk9wdGlvbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L1NlbGVjdD5cbiAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAge2Vycm9yICYmIChcbiAgICAgICAgPEFsZXJ0XG4gICAgICAgICAgZGVzY3JpcHRpb249e2dldFJlc3BvbnNlRXJyb3IoZXJyb3IpfVxuICAgICAgICAgIHR5cGU9XCJlcnJvclwiXG4gICAgICAgICAgbWVzc2FnZT1cIkVycm9yXCJcbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICA8Rm9ybS5JdGVtPlxuICAgICAgICA8UmVjYXB0Y2hhXG4gICAgICAgICAgcmVmPXtyZUNBUFRDSEFSZWZ9XG4gICAgICAgICAgZ29vZ2xlUmVDYXB0Y2hhRW5hYmxlZD17Z29vZ2xlUmVDYXB0Y2hhRW5hYmxlZH1cbiAgICAgICAgICBnb29nbGVSZUNhcHRjaGFTaXRlS2V5PXtnb29nbGVSZUNhcHRjaGFTaXRlS2V5fVxuICAgICAgICAgIGVycm9yPXtyZUNBUFRDSEFFcnJvcn1cbiAgICAgICAgLz5cbiAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgPEZvcm0uSXRlbT5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICBodG1sVHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgbG9hZGluZz17c3VibWl0aW5nfVxuICAgICAgICAgIGRpc2FibGVkPXtzdWJtaXRpbmd9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLXN1Ym1pdFwiXG4gICAgICAgID5cbiAgICAgICAgICBSZWdpc3RlciBuZXcgYWNjb3VudFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgPEZvcm0uSXRlbT5cbiAgICAgICAgQXJlIHlvdSBtZW1iZXI/XG4gICAgICAgIHsnICd9XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYXV0aC9sb2dpbi91c2VyXCI+XG4gICAgICAgICAgPGE+TG9naW48L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgPEZvcm0uSXRlbT5cbiAgICAgICAgQXJlIHlvdVxuICAgICAgICB7JyAnfVxuICAgICAgICB7c2luZ3VsYXJUZXh0TW9kZWwgfHwgJ1BlcmZvcm1lcid9XG4gICAgICAgID9cbiAgICAgICAgeycgJ31cbiAgICAgICAgPExpbmsgaHJlZj1cIi9hdXRoL3JlZ2lzdGVyL21vZGVsXCI+XG4gICAgICAgICAgPGE+U2lnbnVwIG5vdzwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgPC9Gb3JtPlxuICApO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICAuLi5zdGF0ZS51aVxufSk7XG5jb25zdCBtYXBEaXNwYXRjaHMgPSB7IHVwZGF0ZVVJVmFsdWUgfTtcblJlZ2lzdGVyRnJvbS5kZWZhdWx0UHJvcHMgPSB7XG4gIGdvb2dsZVJlQ2FwdGNoYUVuYWJsZWQ6IGZhbHNlLFxuICBnb29nbGVSZUNhcHRjaGFTaXRlS2V5OiAnJ1xufTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaHMpKFJlZ2lzdGVyRnJvbSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSVVJQ29uZmlnIH0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuXG5pbnRlcmZhY2UgUCB7XG4gIHVpOiBJVUlDb25maWc7XG59XG5cbmV4cG9ydCBjb25zdCBGb3JtUmVnaXN0ZXJQbGFjZUhvbGRlciA9ICh7IHVpIH06IFApID0+IChcbiAgPGRpdlxuICAgIGNsYXNzTmFtZT1cImZvcm0tcmVnaXN0ZXItcGxhY2Vob2xkZXJcIlxuICAgIHN0eWxlPXtcbiAgICAgIHVpPy5wbGFjZWhvbGRlckxvZ2luVXJsXG4gICAgICAgID8geyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHt1aS5wbGFjZWhvbGRlckxvZ2luVXJsfSlgIH1cbiAgICAgICAgOiB7fVxuICAgIH1cbiAgLz5cbik7XG4iLCJleHBvcnQgKiBmcm9tICcuL2Zvcm0tcmVnaXN0ZXItcGxhY2Vob2xkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9wb3B1cC0xOHBsdXMtY29udGVudCc7XG4iLCJpbXBvcnQgJy4vcG9wdXAtMThwbHVzLWNvbnRlbnQubGVzcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBQb3B1cDE4UGx1c0NvbnRlbnQoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uZmlybWFnZV9faGVhZGVyIHRleHQtY2VudGVyXCI+WU9VIE1VU1QgQkUgT1ZFUiAxOCBBTkQgQUdSRUUgVE8gVEhFIFRFUk1TIEJFTE9XIEJFRk9SRSBDT05USU5VSU5HOjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb25maXJtYWdlX19kZXNjcmlwdGlvbiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcm9sbFwiPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgWW91IGFsc28gYWdyZWUgdG8gc2hhcmUgeW91ciBpbmZvcm1hdGlvbiB3aXRoIER1b2RlY2FkIElUUyBMZWFybiBNb3JlXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIFlvdSBhbHNvIGFncmVlIHRvIHNoYXJlIGluZm9ybWF0aW9uIHdpdGggRHVvZGVjYWQgSVRTIGJlY2F1c2UgdGhlIHdlYnNpdGUgd2lsbCBub3Qgd29yayBwcm9wZXJseSB3aXRob3V0IHRoaXMgYWdyZWVtZW50LlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBBbiBpbXBvcnRhbnQgcGFydCBvZiB0aGUgY2FtIG1hdGVyaWFsIGlzIHByb3ZpZGVkIGJ5IER1b2RlY2FkIElUUzpcbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgVGhlIHByb2ZpbGVzIGNvbnRlbnQgYW5kIHBob3RvZ3JhcGhzXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIFRoZSBwbGF5ZXIgYW5kIGhpcyBmdW5jdGlvbmFsaXRpZXNcbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgVGhlIHBheW1lbnQgcHJvY2Vzc29yXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIC4uLlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBUaGVyZWZvcmUsIGV2ZXJ5IHBhZ2UgaXMgZGVwZW5kaW5nIG9uIER1b2RlY2FkIElUUyBhbmQgY2Fu4oCZdCBiZSBkaXNzb2NpYXRlZCB3aXRoICh1c2VycyBVUkwpIHNlcnZpY2UuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgVGhpcyB3ZWJzaXRlIGNvbnRhaW5zIGluZm9ybWF0aW9uLCBsaW5rcywgaW1hZ2VzIGFuZCB2aWRlb3Mgb2Ygc2V4dWFsbHkgZXhwbGljaXQgbWF0ZXJpYWwgKGNvbGxlY3RpdmVseSwgdGhlICZxdW90O1NleHVhbGx5IEV4cGxpY2l0IE1hdGVyaWFsJnF1b3Q7KS4gRG8gTk9UIGNvbnRpbnVlIGlmOiAoaSkgeW91IGFyZSBub3QgYXQgbGVhc3QgMTggeWVhcnMgb2YgYWdlIG9yIHRoZSBhZ2Ugb2YgbWFqb3JpdHkgaW4gZWFjaCBhbmQgZXZlcnkganVyaXNkaWN0aW9uIGluIHdoaWNoIHlvdSB3aWxsIG9yIG1heSB2aWV3IHRoZSBTZXh1YWxseSBFeHBsaWNpdCBNYXRlcmlhbCwgd2hpY2hldmVyIGlzIGhpZ2hlciAodGhlICZxdW90O0FnZSBvZiBNYWpvcml0eSZxdW90OyksIChpaSkgc3VjaCBtYXRlcmlhbCBvZmZlbmRzIHlvdSwgb3IgKGlpaSkgdmlld2luZyB0aGUgU2V4dWFsbHkgRXhwbGljaXQgTWF0ZXJpYWwgaXMgbm90IGxlZ2FsIGluIGVhY2ggYW5kIGV2ZXJ5IGNvbW11bml0eSB3aGVyZSB5b3UgY2hvb3NlIHRvIHZpZXcgaXQuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgQnkgY2hvb3NpbmcgdG8gZW50ZXIgdGhpcyB3ZWJzaXRlIHlvdSBhcmUgYWZmaXJtaW5nIHVuZGVyIG9hdGggYW5kIHBlbmFsdGllcyBvZiBwZXJqdXJ5IHB1cnN1YW50IHRvIFRpdGxlIDI4IFUuUy5DLiDCpyAxNzQ2IGFuZCBvdGhlciBhcHBsaWNhYmxlIHN0YXR1dGVzIGFuZCBsYXdzIHRoYXQgYWxsIG9mIHRoZSBmb2xsb3dpbmcgc3RhdGVtZW50cyBhcmUgdHJ1ZSBhbmQgY29ycmVjdDpcbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPkkgaGF2ZSBhdHRhaW5lZCB0aGUgQWdlIG9mIE1ham9yaXR5IGluIG15IGp1cmlzZGljdGlvbjs8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICBUaGUgc2V4dWFsbHkgZXhwbGljaXQgbWF0ZXJpYWwgSSBhbSB2aWV3aW5nIGlzIGZvciBteSBvd24gcGVyc29uYWwgdXNlIGFuZCBJIHdpbGwgbm90IGV4cG9zZSBhbnkgbWlub3JzIHRvIHRoZSBtYXRlcmlhbDtcbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+SSBkZXNpcmUgdG8gcmVjZWl2ZS92aWV3IHNleHVhbGx5IGV4cGxpY2l0IG1hdGVyaWFsOzwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIEkgYmVsaWV2ZSB0aGF0IGFzIGFuIGFkdWx0IGl0IGlzIG15IGluYWxpZW5hYmxlIGNvbnN0aXR1dGlvbmFsIHJpZ2h0IHRvIHJlY2VpdmUvdmlldyBzZXh1YWxseSBleHBsaWNpdCBtYXRlcmlhbDtcbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIEkgYmVsaWV2ZSB0aGF0IHNleHVhbCBhY3RzIGJldHdlZW4gY29uc2VudGluZyBhZHVsdHMgYXJlIG5laXRoZXIgb2ZmZW5zaXZlIG5vciBvYnNjZW5lO1xuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgVGhlIHZpZXdpbmcsIHJlYWRpbmcgYW5kIGRvd25sb2FkaW5nIG9mIHNleHVhbGx5IGV4cGxpY2l0IG1hdGVyaWFscyBkb2VzIG5vdCB2aW9sYXRlIHRoZSBzdGFuZGFyZHMgb2YgYW55IGNvbW11bml0eSwgdG93biwgY2l0eSwgc3RhdGUgb3IgY291bnRyeSB3aGVyZSBJIHdpbGwgYmUgdmlld2luZywgcmVhZGluZyBhbmQvb3IgZG93bmxvYWRpbmcgdGhlIFNleHVhbGx5IEV4cGxpY2l0IE1hdGVyaWFscztcbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIEkgYW0gc29sZWx5IHJlc3BvbnNpYmxlIGZvciBhbnkgZmFsc2UgZGlzY2xvc3VyZXMgb3IgbGVnYWwgcmFtaWZpY2F0aW9ucyBvZiB2aWV3aW5nLCByZWFkaW5nIG9yIGRvd25sb2FkaW5nIGFueSBtYXRlcmlhbCBhcHBlYXJpbmcgb24gdGhpcyBzaXRlLiBJIGZ1cnRoZXIgYWdyZWUgdGhhdCBuZWl0aGVyIHRoaXMgd2Vic2l0ZSBub3IgaXRzIGFmZmlsaWF0ZXMgd2lsbCBiZSBoZWxkIHJlc3BvbnNpYmxlIGZvciBhbnkgbGVnYWwgcmFtaWZpY2F0aW9ucyBhcmlzaW5nIGZyb20gYW55IGZyYXVkdWxlbnQgZW50cnkgaW50byBvciB1c2Ugb2YgdGhpcyB3ZWJzaXRlO1xuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgSSB1bmRlcnN0YW5kIHRoYXQgbXkgdXNlIG9mIHRoaXMgd2Vic2l0ZSBpcyBnb3Zlcm5lZCBieSB0aGUgd2Vic2l0ZSZhcG9zO3NcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIi9wYWdlL3Rlcm1zLWFuZC1jb25kaXRpb25zXCI+VGVybXM8L2E+XG4gICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgIHdoaWNoIEkgaGF2ZSByZXZpZXdlZCBhbmQgYWNjZXB0ZWQsIGFuZCBJIGFncmVlIHRvIGJlIGJvdW5kIGJ5IHN1Y2ggVGVybXMuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICBJIGFncmVlIHRoYXQgYnkgZW50ZXJpbmcgdGhpcyB3ZWJzaXRlLCBJIGFtIHN1YmplY3RpbmcgbXlzZWxmLCBhbmQgYW55IGJ1c2luZXNzIGVudGl0eSBpbiB3aGljaCBJIGhhdmUgYW55IGxlZ2FsIG9yIGVxdWl0YWJsZSBpbnRlcmVzdCwgdG8gdGhlIHBlcnNvbmFsIGp1cmlzZGljdGlvbiBvZiB0aGUgU3RhdGUgb2YgRmxvcmlkYSwgTWlhbWktRGFkZSBDb3VudHksIHNob3VsZCBhbnkgZGlzcHV0ZSBhcmlzZSBhdCBhbnkgdGltZSBiZXR3ZWVuIHRoaXMgd2Vic2l0ZSwgbXlzZWxmIGFuZC9vciBzdWNoIGJ1c2luZXNzIGVudGl0eTtcbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIFRoaXMgd2FybmluZyBwYWdlIGNvbnN0aXR1dGVzIGEgbGVnYWxseSBiaW5kaW5nIGFncmVlbWVudCBiZXR3ZWVuIG1lLCB0aGlzIHdlYnNpdGUgYW5kL29yIGFueSBidXNpbmVzcyBpbiB3aGljaCBJIGhhdmUgYW55IGxlZ2FsIG9yIGVxdWl0YWJsZSBpbnRlcmVzdC4gSWYgYW55IHByb3Zpc2lvbiBvZiB0aGlzIEFncmVlbWVudCBpcyBmb3VuZCB0byBiZSB1bmVuZm9yY2VhYmxlLCB0aGUgcmVtYWluZGVyIHNoYWxsIGJlIGVuZm9yY2VkIGFzIGZ1bGx5IGFzIHBvc3NpYmxlIGFuZCB0aGUgdW5lbmZvcmNlYWJsZSBwcm92aXNpb24gc2hhbGwgYmUgZGVlbWVkIG1vZGlmaWVkIHRvIHRoZSBsaW1pdGVkIGV4dGVudCByZXF1aXJlZCB0byBwZXJtaXQgaXRzIGVuZm9yY2VtZW50IGluIGEgbWFubmVyIG1vc3QgY2xvc2VseSByZXByZXNlbnRpbmcgdGhlIGludGVudGlvbnMgYXMgZXhwcmVzc2VkIGhlcmVpbjtcbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIEFsbCBwZXJmb3JtZXJzIG9uIHRoaXMgc2l0ZSBhcmUgb3ZlciB0aGUgYWdlIG9mIDE4LCBoYXZlIGNvbnNlbnRlZCBiZWluZyBwaG90b2dyYXBoZWQgYW5kL29yIGZpbG1lZCwgYmVsaWV2ZSBpdCBpcyB0aGVpciByaWdodCB0byBlbmdhZ2UgaW4gY29uc2Vuc3VhbCBzZXh1YWwgYWN0cyBmb3IgdGhlIGVudGVydGFpbm1lbnQgYW5kIGVkdWNhdGlvbiBvZiBvdGhlciBhZHVsdHMgYW5kIEkgYmVsaWV2ZSBpdCBpcyBteSByaWdodCBhcyBhbiBhZHVsdCB0byB3YXRjaCB0aGVtIGRvaW5nIHdoYXQgYWR1bHRzIGRvO1xuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgVGhlIHZpZGVvcyBhbmQgaW1hZ2VzIGluIHRoaXMgc2l0ZSBhcmUgaW50ZW5kZWQgdG8gYmUgdXNlZCBieSByZXNwb25zaWJsZSBhZHVsdHMgYXMgc2V4dWFsIGFpZHMsIHRvIHByb3ZpZGUgc2V4dWFsIGVkdWNhdGlvbiBhbmQgdG8gcHJvdmlkZSBzZXh1YWwgZW50ZXJ0YWlubWVudDtcbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIEkgdW5kZXJzdGFuZCB0aGF0IHByb3ZpZGluZyBhIGZhbHNlIGRlY2xhcmF0aW9uIHVuZGVyIHRoZSBwZW5hbHRpZXMgb2YgcGVyanVyeSBpcyBhIGNyaW1pbmFsIG9mZmVuc2U7IGFuZFxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgSSBhZ3JlZSB0aGF0IHRoaXMgYWdyZWVtZW50IGlzIGdvdmVybmVkIGJ5IHRoZSBFbGVjdHJvbmljIFNpZ25hdHVyZXMgaW4gR2xvYmFsIGFuZCBOYXRpb25hbCBDb21tZXJjZSBBY3QgKGNvbW1vbmx5IGtub3duIGFzIHRoZSAmcXVvdDtFLVNpZ24gQWN0JnF1b3Q7KSwgMTUgVS5TLkMuIMKnIDcwMDAsIGV0IHNlcS4sIGFuZCBieSBjaG9vc2luZyB0byBjbGljayBvbiAmcXVvdDtJIEFncmVlLiBFbnRlciBIZXJlJnF1b3Q7IGFuZCBpbmRpY2F0aW5nIG15IGFncmVlbWVudCB0byBiZSBib3VuZCBieSB0aGUgdGVybXMgb2YgdGhpcyBhZ3JlZW1lbnQsIEkgYWZmaXJtYXRpdmVseSBhZG9wdCB0aGUgc2lnbmF0dXJlIGxpbmUgYmVsb3cgYXMgbXkgc2lnbmF0dXJlIGFuZCB0aGUgbWFuaWZlc3RhdGlvbiBvZiBteSBjb25zZW50IHRvIGJlIGJvdW5kIGJ5IHRoZSB0ZXJtcyBvZiB0aGlzIGFncmVlbWVudC5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm5vdGljZS10eHRcIj5USElTIFNJVEUgQUNUSVZFTFkgQ09PUEVSQVRFUyBXSVRIIExBVyBFTkZPUkNFTUVOVCBJTiBBTEwgSU5TVEFOQ0VTIE9GIFNVU1BFQ1RFRCBJTExFR0FMIFVTRSBPRiBUSEUgU0VSVklDRSwgRVNQRUNJQUxMWSBJTiBUSEUgQ0FTRSBPRiBVTkRFUkFHRSBVU0FHRSBPRiBUSEUgU0VSVklDRS48L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCB7IGZvcndhcmRSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9yZWNhcHRjaGEubGVzcyc7XG5pbXBvcnQgUmVDQVBUQ0hBIGZyb20gJ3JlYWN0LWdvb2dsZS1yZWNhcHRjaGEnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBnb29nbGVSZUNhcHRjaGFFbmFibGVkOiBib29sZWFuO1xuICBnb29nbGVSZUNhcHRjaGFTaXRlS2V5OiBzdHJpbmc7XG4gIGVycm9yOiBzdHJpbmc7XG59XG5cbmNvbnN0IEdvb2dsZVJlQ2FwdGNoYSA9IGZvcndhcmRSZWY8YW55LCBJUHJvcHM+KChwcm9wczogSVByb3BzLCByZWYpID0+IHtcbiAgY29uc3Qge1xuICAgIGdvb2dsZVJlQ2FwdGNoYUVuYWJsZWQsIGdvb2dsZVJlQ2FwdGNoYVNpdGVLZXksIGVycm9yXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBvblJvdXRlQ2hhbmdlU3RhcnQgPSAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5ncmVjYXB0Y2hhKSB7XG4gICAgICB3aW5kb3cuZ3JlY2FwdGNoYS5yZXNldCgpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCBvblJvdXRlQ2hhbmdlU3RhcnQpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIFJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZVN0YXJ0Jywgb25Sb3V0ZUNoYW5nZVN0YXJ0KTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY2FwdGNoYS1ib3hcIj5cbiAgICAgIHtnb29nbGVSZUNhcHRjaGFFbmFibGVkICYmIChcbiAgICAgICAgPFJlQ0FQVENIQVxuICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgIC8vIHNpemU9e3NpemV9XG4gICAgICAgICAgLy8gYmFkZ2U9XCJpbmxpbmVcIlxuICAgICAgICAgIHNpdGVrZXk9e2dvb2dsZVJlQ2FwdGNoYVNpdGVLZXl9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAge2Vycm9yICYmIChcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwicmVjYXB0Y2hhLWVycm9yLW1lc3NhZ2VcIj5cbiAgICAgICAgICB7ZXJyb3IgfHwgJ1BsZWFzZSB2ZXJpZnkgdGhhdCB5b3UgYXJlIG5vdCBhIHJvYm90Lid9XG4gICAgICAgIDwvcD5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59KTtcbmV4cG9ydCBkZWZhdWx0IEdvb2dsZVJlQ2FwdGNoYTtcbiIsImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZTogRGF0ZSwgZm9ybWF0ID0gJ0REL01NL1lZWVkgSEg6bW06c3MnKSB7XG4gIHJldHVybiBtb21lbnQoZGF0ZSkuZm9ybWF0KGZvcm1hdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJEdXJhdGlvbihkdXJhdGlvbjogbnVtYmVyLCBmb3JtYXQgPSAnSEg6bW0nKSB7XG4gIHJldHVybiBtb21lbnRcbiAgICAudXRjKG1vbWVudC5kdXJhdGlvbihkdXJhdGlvbiwgJ21pbGxpc2Vjb25kcycpLmFzTWlsbGlzZWNvbmRzKCkpXG4gICAgLmZvcm1hdChmb3JtYXQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VBZ2UoZGF0ZTogc3RyaW5nLCBmb3JtYXQgPSAnTU1NTSBERCwgWVlZWScpIHtcbiAgcmV0dXJuIG1vbWVudChkYXRlKS5mb3JtYXQoZm9ybWF0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFnZShkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgcmV0dXJuIG1vbWVudCgpLmRpZmYobW9tZW50KGRhdGUpLmZvcm1hdCgnWVlZWS1NTS1ERCcpLCAneWVhcnMnKS50b1N0cmluZygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RHVyYXRpb24oczogbnVtYmVyKSB7XG4gIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcihzIC8gMzYwMCk7XG4gIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKChzIC0gaG91cnMgKiAzNjAwKSAvIDYwKTtcbiAgY29uc3Qgc2Vjb25kcyA9IHMgLSBob3VycyAqIDM2MDAgLSBtaW51dGVzICogNjA7XG4gIHJldHVybiBgJHtob3VycyA8IDEwID8gJzAnIDogJyd9JHtob3Vyc306JHtcbiAgICBtaW51dGVzIDwgMTAgPyAnMCcgOiAnJ1xuICB9JHttaW51dGVzfToke3NlY29uZHMgPCAxMCA/ICcwJyA6ICcnfSR7c2Vjb25kc31gO1xufVxuIiwiaW1wb3J0IHsgZ2V0R2xvYmFsQ29uZmlnIH0gZnJvbSAnQHNlcnZpY2VzL2NvbmZpZyc7XG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBSY0ZpbGUgfSBmcm9tICdhbnRkL2xpYi91cGxvYWQnO1xuXG5leHBvcnQgZnVuY3Rpb24gYmVmb3JlQXZhdGFyVXBsb2FkKGZpbGU6IFJjRmlsZSk6IGJvb2xlYW4ge1xuICBjb25zdCBleHQgPSBmaWxlLm5hbWUuc3BsaXQoJy4nKS5wb3AoKS50b0xvd2VyQ2FzZSgpO1xuICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgY29uc3QgaXNJbWFnZUFjY2VwdCA9IGNvbmZpZy5ORVhUX1BVQkxJQ19JTUFHRV9BQ0NQRVRcbiAgICAuc3BsaXQoJywnKVxuICAgIC5tYXAoKGl0ZW06IHN0cmluZykgPT4gaXRlbS50cmltKCkpXG4gICAgLmluZGV4T2YoYC4ke2V4dH1gKTtcbiAgaWYgKGlzSW1hZ2VBY2NlcHQgPT09IC0xKSB7XG4gICAgbWVzc2FnZS5lcnJvcihgWW91IGNhbiBvbmx5IHVwbG9hZCAke2NvbmZpZy5ORVhUX1BVQkxJQ19JTUFHRV9BQ0NQRVR9IGZpbGUhYCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgaXNMdDJNID0gZmlsZS5zaXplIC8gMTAyNCAvIDEwMjQgPCAoY29uZmlnLk5FWFRfUFVCTElDX01BWElNVU1fU0laRV9VUExPQURfQVZBVEFSIHx8IDIpO1xuICBpZiAoIWlzTHQyTSkge1xuICAgIG1lc3NhZ2UuZXJyb3IoXG4gICAgICBgSW1hZ2UgbXVzdCBzbWFsbGVyIHRoYW4gJHtjb25maWcuTkVYVF9QVUJMSUNfTUFYSU1VTV9TSVpFX1VQTE9BRF9BVkFUQVIgfHwgMn1NQiFgXG4gICAgKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vaW50ZXJuZXQnO1xuZXhwb3J0ICogZnJvbSAnLi9yZWR1eCc7XG5leHBvcnQgKiBmcm9tICcuL3N0cmluZyc7XG5leHBvcnQgKiBmcm9tICcuL2RhdGUnO1xuZXhwb3J0ICogZnJvbSAnLi9tZXNzYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vbGF5b3V0JztcbmV4cG9ydCAqIGZyb20gJy4vdXRpbHMnO1xuZXhwb3J0ICogZnJvbSAnLi9ydWxlcyc7XG5leHBvcnQgKiBmcm9tICcuL2ZpbGUnO1xuZXhwb3J0ICogZnJvbSAnLi9zdHJlYW0nO1xuIiwiY29uc3QgSU5URVJORVRfQ0hFQ0tfVVJMID0gJ2h0dHBzOi8vZ29vZ2xlLmNvbSc7XG5cbmV4cG9ydCBjb25zdCBpc0hhc0ludGVybmV0Q29ubmVjdGlvbiA9IGFzeW5jICgpOiBQcm9taXNlPGJvb2xlYW4+ID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChJTlRFUk5FVF9DSEVDS19VUkwsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NhY2hlLUNvbnRyb2wnOiAnbm8tY2FjaGUsIG5vLXN0b3JlLCBtdXN0LXJldmFsaWRhdGUnLFxuICAgICAgICBQcmFnbWE6ICduby1jYWNoZScsXG4gICAgICAgIEV4cGlyZXM6IDBcbiAgICAgIH0gYXMgYW55XG4gICAgfSk7XG4gICAgaWYgKFxuICAgICAgcmVzLnN0YXR1cyA9PT0gNDA0XG4gICAgICB8fCByZXMuc3RhdHVzID09PSA0MDFcbiAgICAgIHx8IHJlcy5zdGF0dXMgPT09IDQwM1xuICAgICAgfHwgcmVzLnN0YXR1cyA9PT0gNTAwXG4gICAgICB8fCAocmVzLnN0YXR1cyA+PSAyMDAgJiYgcmVzLnN0YXR1cyA8PSAzMDApXG4gICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0gY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5sb2coZXhjZXB0aW9uKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuIiwiZXhwb3J0IGNvbnN0IGZvcm1JdGVtTGF5b3V0ID0ge1xuICBsYWJlbENvbDoge1xuICAgIHhzOiB7XG4gICAgICBzcGFuOiAyNFxuICAgIH0sXG4gICAgc206IHtcbiAgICAgIHNwYW46IDEyXG4gICAgfVxuICB9LFxuICB3cmFwcGVyQ29sOiB7XG4gICAgeHM6IHtcbiAgICAgIHNwYW46IDI0XG4gICAgfSxcbiAgICBzbToge1xuICAgICAgc3BhbjogMTJcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCB0YWlsRm9ybUl0ZW1MYXlvdXQgPSB7XG4gIHdyYXBwZXJDb2w6IHtcbiAgICB4czoge1xuICAgICAgc3BhbjogMjQsXG4gICAgICBvZmZzZXQ6IDBcbiAgICB9LFxuICAgIHNtOiB7XG4gICAgICBzcGFuOiAxNixcbiAgICAgIG9mZnNldDogMFxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRDb2xvciA9IHtcbiAgcHJpbWFyeUNvbG9yOiAnI2ZmMDA2NicsXG4gIHN1Y2Nlc3NDb2xvcjogJyMyZmI1MmQnLFxuICB3aGl0ZUNvbG9yOiAnI2ZmZmZmZidcbn07XG5cbmV4cG9ydCB0eXBlIEJyZWFrcG9pbnQgPSAneHhsJyB8ICd4bCcgfCAnbGcnIHwgJ21kJyB8ICdzbScgfCAneHMnO1xuZXhwb3J0IHR5cGUgQnJlYWtwb2ludE1hcCA9IFBhcnRpYWw8UmVjb3JkPEJyZWFrcG9pbnQsIHN0cmluZz4+O1xuIiwiZXhwb3J0IGNvbnN0IHZhbGlkYXRlTWVzc2FnZXMgPSB7XG4gIHJlcXVpcmVkOiAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCEnLFxuICB0eXBlczoge1xuICAgIGVtYWlsOiAnTm90IGEgdmFsaWRhdGUgZW1haWwhJyxcbiAgICBudW1iZXI6ICdOb3QgYSB2YWxpZGF0ZSBudW1iZXIhJ1xuICB9LFxuICBudW1iZXI6IHtcbiAgICByYW5nZTogJ011c3QgYmUgYmV0d2VlbiBtaW4gYW5kIG1heCdcbiAgfVxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtbmFtZXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQge1xuICByZWR1Y2UsIGlzQXJyYXksIGlzRW1wdHksIGZsYXR0ZW5cbn0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAncmVzZWxlY3QnO1xuaW1wb3J0IHsgdGFrZUxhdGVzdCwgZGVsYXkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IHtcbiAgY3JlYXRlQWN0aW9uIGFzIFJlZHV4Q3JlYXRlQWN0aW9uLFxuICBoYW5kbGVBY3Rpb25zIGFzIGhhbmRsZVJlZHV4QWN0aW9ucyxcbiAgQWN0aW9uXG59IGZyb20gJ3JlZHV4LWFjdGlvbnMnO1xuXG5leHBvcnQgdHlwZSBBY3Rpb25GdW5jdGlvbjE8VDEsIFI+ID0gKHQxPzogVDEpID0+IFI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uRnVuY3Rpb248UGF5bG9hZD5cbiAgZXh0ZW5kcyBBY3Rpb25GdW5jdGlvbjE8UGF5bG9hZCwgQWN0aW9uPFBheWxvYWQ+PiB7XG4gIGlzOiAodHlwZTogc3RyaW5nKSA9PiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBY3Rpb248UGF5bG9hZCA9IGFueT4odHlwZTogc3RyaW5nKTogQWN0aW9uRnVuY3Rpb248UGF5bG9hZD4ge1xuICBjb25zdCBhY3Rpb24gPSBSZWR1eENyZWF0ZUFjdGlvbjxQYXlsb2FkPih0eXBlKSBhcyBBY3Rpb25GdW5jdGlvbjxQYXlsb2FkPjtcbiAgYWN0aW9uLmlzID0gKGFUeXBlOiBzdHJpbmcpID0+IGFjdGlvbi50b1N0cmluZygpID09PSBhVHlwZTtcbiAgcmV0dXJuIGFjdGlvbjtcbn1cblxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG5mdW5jdGlvbiBjcmVhdGVBc3luY0FjdGlvbihhY3Rpb246IHN0cmluZywgdHlwZTogc3RyaW5nKTogYW55IHtcbiAgcmV0dXJuIHtcbiAgICBbYWN0aW9uXTogY3JlYXRlQWN0aW9uKHR5cGUpLFxuICAgIFtgJHthY3Rpb259U3VjY2Vzc2BdOiBjcmVhdGVBY3Rpb24oYCR7dHlwZX1fU1VDQ0VTU2ApLFxuICAgIFtgJHthY3Rpb259RmFpbGBdOiBjcmVhdGVBY3Rpb24oYCR7dHlwZX1fRkFJTGApXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFzeW5jQWN0aW9uczxcbiAgQWN0aW9uRGF0YSA9IGFueSxcbiAgU3VjY2Vzc0RhdGEgPSBhbnksXG4gIEVycm9yRGF0YSA9IEVycm9yXG4+KFxuICB0eXBlOiBzdHJpbmdcbik6IFtcbiAgQWN0aW9uRnVuY3Rpb248QWN0aW9uRGF0YT4sXG4gIEFjdGlvbkZ1bmN0aW9uPFN1Y2Nlc3NEYXRhPixcbiAgQWN0aW9uRnVuY3Rpb248RXJyb3JEYXRhPlxuXSB7XG4gIHJldHVybiBbXG4gICAgY3JlYXRlQWN0aW9uPEFjdGlvbkRhdGE+KHR5cGUpLFxuICAgIGNyZWF0ZUFjdGlvbjxTdWNjZXNzRGF0YT4oYCR7dHlwZX1fU1VDQ0VTU2ApLFxuICAgIGNyZWF0ZUFjdGlvbjxFcnJvckRhdGE+KGAke3R5cGV9X0ZBSUxgKVxuICBdO1xufVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuZnVuY3Rpb24gaGFuZGxlQWN0aW9ucyhhY3Rpb25zOiBhbnksIGluaXRpYWxTdGF0ZTogYW55KSB7XG4gIHJldHVybiBoYW5kbGVSZWR1eEFjdGlvbnMoXG4gICAgcmVkdWNlKFxuICAgICAgYWN0aW9ucyxcbiAgICAgIChyZWR1Y2VyOiBhbnksIGhhbmRsZXIsIGFjdGlvbikgPT4ge1xuICAgICAgICByZWR1Y2VyW2FjdGlvbl0gPSAoc3RhdGU6IGFueSwgYWN0OiBhbnkpID0+IGhhbmRsZXIoc3RhdGUuc2V0KCdhY3Rpb24nLCBhY3Rpb24pLCBhY3QpO1xuICAgICAgICByZXR1cm4gcmVkdWNlcjtcbiAgICAgIH0sXG4gICAgICB7fVxuICAgICksXG4gICAgaW5pdGlhbFN0YXRlXG4gICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlZHVjZXJzKFxuICBzdGF0ZUNvbnRleHQ6IHN0cmluZyxcbiAgcmVkdWNlcnM6IGFueVtdLFxuICBpbml0aWFsU3RhdGU6IGFueSxcbiAgcHJldmVudFJlc2V0dGluZzogYm9vbGVhbiA9IGZhbHNlXG4pOiBhbnkge1xuICByZXR1cm4ge1xuICAgIFtzdGF0ZUNvbnRleHRdOiBoYW5kbGVSZWR1eEFjdGlvbnMoXG4gICAgICByZWR1Y2UoXG4gICAgICAgIGZsYXR0ZW4ocmVkdWNlcnMpLFxuICAgICAgICAocmVkdWNlcjogYW55LCBhY3Rpb246IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChpc0FycmF5KGFjdGlvbi5vbikpIHtcbiAgICAgICAgICAgIGFjdGlvbi5vbi5mb3JFYWNoKChhY3Q6IGFueSkgPT4ge1xuICAgICAgICAgICAgICByZWR1Y2VyW2FjdF0gPSBhY3Rpb24ucmVkdWNlcjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSByZWR1Y2VyW2FjdGlvbi5vbl0gPSBhY3Rpb24ucmVkdWNlcjtcbiAgICAgICAgICByZXR1cm4gcmVkdWNlcjtcbiAgICAgICAgfSxcbiAgICAgICAgcHJldmVudFJlc2V0dGluZ1xuICAgICAgICAgID8ge31cbiAgICAgICAgICA6IHtcbiAgICAgICAgICAgIEFQUF9TVEFURV9SRVNFVDogKCkgPT4gaW5pdGlhbFN0YXRlXG4gICAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIGluaXRpYWxTdGF0ZVxuICAgIClcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNhZ2FzKHNhZ2FzOiBhbnlbXSk6IGFueVtdIHtcbiAgcmV0dXJuIGZsYXR0ZW4oc2FnYXMpLm1hcCgoc2FnYTogYW55KSA9PiB7XG4gICAgY29uc3QgeyBvbiwgZWZmZWN0ID0gdGFrZUxhdGVzdCwgd29ya2VyIH0gPSBzYWdhO1xuICAgIHJldHVybiBmdW5jdGlvbiogKCkge1xuICAgICAgeWllbGQgZWZmZWN0KG9uLCBmdW5jdGlvbiogKGFjdGlvbjogYW55KSB7XG4gICAgICAgIHlpZWxkIGRlbGF5KDApO1xuICAgICAgICB5aWVsZCB3b3JrZXIoYWN0aW9uKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTZWxlY3RvcnNBKGNvbnRleHQ6IHN0cmluZywga2V5czogYW55W10gPSBbXSk6IGFueSB7XG4gIGNvbnN0IHN0YXRlU2VsZWN0b3IgPSAoc3RhdGU6IGFueSkgPT4gc3RhdGVbY29udGV4dF07XG5cbiAgaWYgKGlzRW1wdHkoa2V5cykpIHJldHVybiBzdGF0ZVNlbGVjdG9yO1xuXG4gIHJldHVybiBrZXlzLm1hcCgoa2V5OiBhbnkpID0+IChzdGF0ZTogYW55KSA9PiAoaXNBcnJheShrZXkpXG4gICAgPyBzdGF0ZVNlbGVjdG9yKHN0YXRlKS5nZXRJbihrZXkpXG4gICAgOiBzdGF0ZVNlbGVjdG9yKHN0YXRlKS5nZXQoa2V5KSkpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTZWxlY3RvcnMoY29udGV4dDogc3RyaW5nLCBrZXlzOiBzdHJpbmdbXSk6IGFueSB7XG4gIGNvbnN0IHN0YXRlU2VsZWN0b3IgPSAoc3RhdGU6IGFueSkgPT4gc3RhdGVbY29udGV4dF07XG5cbiAgcmV0dXJuIHJlZHVjZShcbiAgICBrZXlzLFxuICAgIChzZWxlY3RvcnM6IGFueSwga2V5KSA9PiB7XG4gICAgICBzZWxlY3RvcnNbYCR7a2V5fVNlbGVjdG9yYF0gPSAoc3RhdGU6IGFueSkgPT4gc3RhdGVTZWxlY3RvcihzdGF0ZSkuZ2V0KGtleSk7XG4gICAgICByZXR1cm4gc2VsZWN0b3JzO1xuICAgIH0sXG4gICAge31cbiAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSlNTZWxlY3RvcnMoY29udGV4dDogc3RyaW5nLCBrZXlzOiBzdHJpbmdbXSk6IGFueSB7XG4gIGNvbnN0IHN0YXRlU2VsZWN0b3IgPSAoc3RhdGU6IGFueSkgPT4gc3RhdGVbY29udGV4dF07XG5cbiAgcmV0dXJuIHJlZHVjZShcbiAgICBrZXlzLFxuICAgIChzZWxlY3RvcnM6IGFueSwga2V5KSA9PiB7XG4gICAgICBzZWxlY3RvcnNbYCR7a2V5fVNlbGVjdG9yYF0gPSAoc3RhdGU6IGFueSkgPT4gc3RhdGVTZWxlY3RvcihzdGF0ZSlba2V5XTtcbiAgICAgIHJldHVybiBzZWxlY3RvcnM7XG4gICAgfSxcbiAgICB7fVxuICApO1xufVxuXG5leHBvcnQge1xuICBjcmVhdGVBY3Rpb24sXG4gIGNyZWF0ZUFzeW5jQWN0aW9uLFxuICBjcmVhdGVBc3luY0FjdGlvbnMsXG4gIGNyZWF0ZVNlbGVjdG9yc0EsXG4gIGhhbmRsZUFjdGlvbnMsXG4gIGNyZWF0ZVJlZHVjZXJzLFxuICBjcmVhdGVTZWxlY3RvcnMsXG4gIGNyZWF0ZVNlbGVjdG9yLFxuICBjcmVhdGVKU1NlbGVjdG9yc1xufTtcbiIsImV4cG9ydCBjb25zdCB1c2VybmFtZVBhdHRlcm5SdWxlID0ge1xuICBwYXR0ZXJuOiBuZXcgUmVnRXhwKCdeW2EtekEtWjAtOV0qJCcpLFxuICBtZXNzYWdlOiAnRG9udCBhbGxvdyBzcGVjaWFsIGNoYXJzIG9yIHNwYWNlJ1xufTtcbiIsImltcG9ydCB7IFN0b3JlIGFzIFJEU3RvcmUgfSBmcm9tICdyZWR1eCc7XG5cbmV4cG9ydCB0eXBlIFN0b3JlID0gUkRTdG9yZTx7fT47XG5cbmxldCBzdG9yZTogU3RvcmUgfCBudWxsID0gbnVsbDtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXRTdG9yZTogKCkgPT4gc3RvcmUsXG4gIHNldFN0b3JlOiAoczogU3RvcmUpID0+IHtcbiAgICBzdG9yZSA9IHM7XG4gIH1cbn07XG4iLCJpbXBvcnQgc3RvcmVIb2xkZXIgZnJvbSAnLi9zdG9yZUhvbGRlcic7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX09GRkxJTkVfSU1BR0VfVVJMID0gJy9vZmZsaW5lLnBuZyc7XG5leHBvcnQgY29uc3QgREVGQVVMVF9QUklWQVRFX0lNQUdFX1VSTCA9ICcvcHJpdmF0ZS5wbmcnO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfR1JPVVBfSU1BR0VfVVJMID0gJy9ncm91cC5wbmcnO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfT05MSU5FX0lNQUdFX1VSTCA9ICcnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9zdGVyKHN0YXR1czogc3RyaW5nKTogc3RyaW5nIHtcbiAgbGV0IHBvc3RlciA9ICcnO1xuICBjb25zdCBzdG9yZSA9IHN0b3JlSG9sZGVyLmdldFN0b3JlKCk7XG4gIGNvbnN0IHsgc2V0dGluZ3MgPSB7fSB9ID0gc3RvcmUuZ2V0U3RhdGUoKSBhcyBhbnk7XG4gIHN3aXRjaCAoc3RhdHVzKSB7XG4gICAgY2FzZSAncHJpdmF0ZSc6XG4gICAgICBwb3N0ZXIgPSBzZXR0aW5ncy5kZWZhdWx0UHJpdmF0ZUNhbGxJbWFnZSB8fCBERUZBVUxUX1BSSVZBVEVfSU1BR0VfVVJMO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnb2ZmbGluZSc6XG4gICAgICBwb3N0ZXIgPSBzZXR0aW5ncy5kZWZhdWx0T2ZmbGluZU1vZGVsSW1hZ2UgfHwgREVGQVVMVF9PRkZMSU5FX0lNQUdFX1VSTDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3B1YmxpYyc6XG4gICAgICBwb3N0ZXIgPSBERUZBVUxUX09OTElORV9JTUFHRV9VUkw7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdncm91cCc6XG4gICAgICBwb3N0ZXIgPSBzZXR0aW5ncy5kZWZhdWx0R3JvdXBDaGF0SW1hZ2UgfHwgREVGQVVMVF9HUk9VUF9JTUFHRV9VUkw7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcG9zdGVyID0gREVGQVVMVF9PRkZMSU5FX0lNQUdFX1VSTDtcbiAgICAgIGJyZWFrO1xuICB9XG4gIHJldHVybiBwb3N0ZXI7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaXNVcmwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICB1cmwubWF0Y2goXG4gICAgICAvKGh0dHAocyk/OlxcL1xcLy4pPyh3d3dcXC4pP1stYS16QS1aMC05QDolLl8rfiM9XXsyLDI1Nn1cXC5bYS16XXsyLDZ9XFxiKFstYS16QS1aMC05QDolXysufiM/Ji8vPV0qKS9nXG4gICAgKSAhPT0gbnVsbFxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVVdWlkID0gKCkgPT4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCAoYykgPT4ge1xuICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICAgIGNvbnN0IHIgPSAoTWF0aC5yYW5kb20oKSAqIDE2KSB8IDA7XG4gICAgY29uc3QgdiA9IGMgPT09ICd4JyA/IHIgOiAociAmIDB4MykgfCAweDg7XG4gICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xuICAgIC8qIGVzbGludC1lbmFibGUgKi9cbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKCFzdHIpIHJldHVybiAnJztcbiAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn1cblxuZXhwb3J0IGNvbnN0IHVuaXRQcmljZXM6IHsgdmFsdWU6IG51bWJlciwgdGV4dDogYW55IH1bXSA9IFtcbiAge1xuICAgIHZhbHVlOiAxNSxcbiAgICB0ZXh0OiAnMTUgdG9rZW5zJ1xuICB9LFxuICB7XG4gICAgdmFsdWU6IDIwLFxuICAgIHRleHQ6ICcyMCB0b2tlbnMnXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogMjUsXG4gICAgdGV4dDogJzI1IHRva2VucydcbiAgfSxcbiAge1xuICAgIHZhbHVlOiAzMCxcbiAgICB0ZXh0OiAnMzAgdG9rZW5zJ1xuICB9LFxuICB7XG4gICAgdmFsdWU6IDM1LFxuICAgIHRleHQ6ICczNSB0b2tlbnMnXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogNDAsXG4gICAgdGV4dDogJzQwIHRva2VucydcbiAgfSxcbiAge1xuICAgIHZhbHVlOiA0NSxcbiAgICB0ZXh0OiAnNDUgdG9rZW5zJ1xuICB9LFxuICB7XG4gICAgdmFsdWU6IDUwLFxuICAgIHRleHQ6ICc1MCB0b2tlbnMnXG4gIH1cbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA1NSxcbiAgLy8gICB0ZXh0OiAnNTUgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDYwLFxuICAvLyAgIHRleHQ6ICc2MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNjUsXG4gIC8vICAgdGV4dDogJzY1IHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA3MCxcbiAgLy8gICB0ZXh0OiAnNzAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDc1LFxuICAvLyAgIHRleHQ6ICc3NSB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogODAsXG4gIC8vICAgdGV4dDogJzgwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA4NSxcbiAgLy8gICB0ZXh0OiAnODUgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDkwLFxuICAvLyAgIHRleHQ6ICc5MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogOTUsXG4gIC8vICAgdGV4dDogJzk1IHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAxMDAsXG4gIC8vICAgdGV4dDogJzEwMCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMTIwLFxuICAvLyAgIHRleHQ6ICcxMjAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDE0MCxcbiAgLy8gICB0ZXh0OiAnMTQwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAxNjAsXG4gIC8vICAgdGV4dDogJzE2MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMTgwLFxuICAvLyAgIHRleHQ6ICcxODAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDIwMCxcbiAgLy8gICB0ZXh0OiAnMjAwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAyMjAsXG4gIC8vICAgdGV4dDogJzIyMCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMjQwLFxuICAvLyAgIHRleHQ6ICcyNDAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDI2MCxcbiAgLy8gICB0ZXh0OiAnMjYwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAyODAsXG4gIC8vICAgdGV4dDogJzI4MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMzAwLFxuICAvLyAgIHRleHQ6ICczMDAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDMyMCxcbiAgLy8gICB0ZXh0OiAnMzIwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAzNDAsXG4gIC8vICAgdGV4dDogJzM0MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMzYwLFxuICAvLyAgIHRleHQ6ICczNjAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDM4MCxcbiAgLy8gICB0ZXh0OiAnMzgwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA0MDAsXG4gIC8vICAgdGV4dDogJzQwMCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNDIwLFxuICAvLyAgIHRleHQ6ICc0MjAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDQ0MCxcbiAgLy8gICB0ZXh0OiAnNDQwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA0NjAsXG4gIC8vICAgdGV4dDogJzQ2MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNDgwLFxuICAvLyAgIHRleHQ6ICc0ODAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDUwMCxcbiAgLy8gICB0ZXh0OiAnNTAwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA1NTAsXG4gIC8vICAgdGV4dDogJzU1MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNjAwLFxuICAvLyAgIHRleHQ6ICc2MDAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDY1MCxcbiAgLy8gICB0ZXh0OiAnNjUwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA3MDAsXG4gIC8vICAgdGV4dDogJzcwMCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNzUwLFxuICAvLyAgIHRleHQ6ICc3NTAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDgwMCxcbiAgLy8gICB0ZXh0OiAnODAwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA4NTAsXG4gIC8vICAgdGV4dDogJzg1MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogOTAwLFxuICAvLyAgIHRleHQ6ICc5MDAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDk1MCxcbiAgLy8gICB0ZXh0OiAnOTUwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAxMDAwLFxuICAvLyAgIHRleHQ6ICcxMDAwIHRva2VucydcbiAgLy8gfVxuXTtcbiIsImltcG9ydCB7IGNsb25lRGVlcCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAncGF0aC10by1yZWdleHAnO1xuaW1wb3J0IHtcbiAgSVNjaGVkdWxlLCBJVXNlciwgSVBlcmZvcm1lciwgSVN0dWRpb1xufSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBTT1JUIH0gZnJvbSAnQHNlcnZpY2VzL2FwaS1yZXF1ZXN0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG4vKipcbiAqIENvbnZlcnQgYW4gYXJyYXkgdG8gYSB0cmVlLXN0cnVjdHVyZWQgYXJyYXkuXG4gKiBAcGFyYW0gICB7YXJyYXl9ICAgICBhcnJheSAgICAgVGhlIEFycmF5IG5lZWQgdG8gQ29udmVydGVkLlxuICogQHBhcmFtICAge3N0cmluZ30gICAgaWQgICAgICAgIFRoZSBhbGlhcyBvZiB0aGUgdW5pcXVlIElEIG9mIHRoZSBvYmplY3QgaW4gdGhlIGFycmF5LlxuICogQHBhcmFtICAge3N0cmluZ30gICAgcGFyZW50SWQgICAgICAgVGhlIGFsaWFzIG9mIHRoZSBwYXJlbnQgSUQgb2YgdGhlIG9iamVjdCBpbiB0aGUgYXJyYXkuXG4gKiBAcGFyYW0gICB7c3RyaW5nfSAgICBjaGlsZHJlbiAgVGhlIGFsaWFzIG9mIGNoaWxkcmVuIG9mIHRoZSBvYmplY3QgaW4gdGhlIGFycmF5LlxuICogQHJldHVybiAge2FycmF5fSAgICBSZXR1cm4gYSB0cmVlLXN0cnVjdHVyZWQgYXJyYXkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcnJheVRvVHJlZShcbiAgYXJyYXksXG4gIGlkID0gJ2lkJyxcbiAgcGFyZW50SWQgPSAncGlkJyxcbiAgY2hpbGRyZW4gPSAnY2hpbGRyZW4nXG4pIHtcbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIGNvbnN0IGhhc2ggPSB7fTtcbiAgY29uc3QgZGF0YSA9IGNsb25lRGVlcChhcnJheSk7XG5cbiAgZGF0YS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIGhhc2hbZGF0YVtpbmRleF1baWRdXSA9IGRhdGFbaW5kZXhdO1xuICB9KTtcblxuICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBoYXNoUGFyZW50ID0gaGFzaFtpdGVtW3BhcmVudElkXV07XG4gICAgaWYgKGhhc2hQYXJlbnQpIHtcbiAgICAgICFoYXNoUGFyZW50W2NoaWxkcmVuXSAmJiAoaGFzaFBhcmVudFtjaGlsZHJlbl0gPSBbXSk7XG4gICAgICBoYXNoUGFyZW50W2NoaWxkcmVuXS5wdXNoKGl0ZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQucHVzaChpdGVtKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFdoZXRoZXIgdGhlIHBhdGggbWF0Y2hlcyB0aGUgcmVnZXhwIGlmIHRoZSBsYW5ndWFnZSBwcmVmaXggaXMgaWdub3JlZCwgaHR0cHM6Ly9naXRodWIuY29tL3BpbGxhcmpzL3BhdGgtdG8tcmVnZXhwLlxuICogQHBhcmFtICAge3N0cmluZ3xyZWdleHB8YXJyYXl9ICAgICByZWdleHAgICAgIFNwZWNpZnkgYSBzdHJpbmcsIGFycmF5IG9mIHN0cmluZ3MsIG9yIGEgcmVndWxhciBleHByZXNzaW9uLlxuICogQHBhcmFtICAge3N0cmluZ30gICAgICAgICAgICAgICAgICBwYXRobmFtZSAgIFNwZWNpZnkgdGhlIHBhdGhuYW1lIHRvIG1hdGNoLlxuICogQHJldHVybiAge2FycmF5fG51bGx9ICAgICAgICAgICAgICBSZXR1cm4gdGhlIHJlc3VsdCBvZiB0aGUgbWF0Y2ggb3IgbnVsbC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhdGhNYXRjaFJlZ2V4cChyZWdleHAsIHBhdGhuYW1lKSB7XG4gIHJldHVybiBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKHJlZ2V4cCkuZXhlYyhwYXRobmFtZSk7XG59XG5cbi8qKlxuICogSW4gYW4gYXJyYXkgb2Ygb2JqZWN0cywgc3BlY2lmeSBhbiBvYmplY3QgdGhhdCB0cmF2ZXJzZXMgdGhlIG9iamVjdHMgd2hvc2UgcGFyZW50IElEIG1hdGNoZXMuXG4gKiBAcGFyYW0gICB7YXJyYXl9ICAgICBhcnJheSAgICAgVGhlIEFycmF5IG5lZWQgdG8gQ29udmVydGVkLlxuICogQHBhcmFtICAge3N0cmluZ30gICAgY3VycmVudCAgIFNwZWNpZnkgdGhlIG9iamVjdCB0aGF0IG5lZWRzIHRvIGJlIHF1ZXJpZWQuXG4gKiBAcGFyYW0gICB7c3RyaW5nfSAgICBwYXJlbnRJZCAgVGhlIGFsaWFzIG9mIHRoZSBwYXJlbnQgSUQgb2YgdGhlIG9iamVjdCBpbiB0aGUgYXJyYXkuXG4gKiBAcGFyYW0gICB7c3RyaW5nfSAgICBpZCAgICAgICAgVGhlIGFsaWFzIG9mIHRoZSB1bmlxdWUgSUQgb2YgdGhlIG9iamVjdCBpbiB0aGUgYXJyYXkuXG4gKiBAcmV0dXJuICB7YXJyYXl9ICAgIFJldHVybiBhIGtleSBhcnJheS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5QW5jZXN0b3JzKGFycmF5LCBjdXJyZW50LCBwYXJlbnRJZCwgaWQgPSAnaWQnKSB7XG4gIGNvbnN0IHJlc3VsdCA9IFtjdXJyZW50XTtcbiAgY29uc3QgaGFzaE1hcCA9IG5ldyBNYXAoKTtcbiAgYXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4gaGFzaE1hcC5zZXQoaXRlbVtpZF0sIGl0ZW0pKTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2hhZG93XG4gIGNvbnN0IGdldFBhdGggPSAoY3VycmVudCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRQYXJlbnRJZCA9IGhhc2hNYXAuZ2V0KGN1cnJlbnRbaWRdKVtwYXJlbnRJZF07XG4gICAgaWYgKGN1cnJlbnRQYXJlbnRJZCkge1xuICAgICAgcmVzdWx0LnB1c2goaGFzaE1hcC5nZXQoY3VycmVudFBhcmVudElkKSk7XG4gICAgICBnZXRQYXRoKGhhc2hNYXAuZ2V0KGN1cnJlbnRQYXJlbnRJZCkpO1xuICAgIH1cbiAgfTtcblxuICBnZXRQYXRoKGN1cnJlbnQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVzcG9uc2VFcnJvcihkYXRhOiBhbnkpIHtcbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuICdCYWQgcmVxdWVzdCEnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YS5tZXNzYWdlKSkge1xuICAgIGNvbnN0IGl0ZW0gPSBkYXRhLm1lc3NhZ2VbMF07XG4gICAgaWYgKCFpdGVtLmNvbnN0cmFpbnRzKSB7XG4gICAgICByZXR1cm4gZGF0YS5lcnJvciB8fCAnQmFkIHJlcXVlc3QhJztcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoaXRlbS5jb25zdHJhaW50cylbMF07XG4gIH1cblxuICAvLyBUT0RPIC0gcGFyc2UgZm9yIGxhbmdhdWdlIG9yIG90aGVyc1xuICByZXR1cm4gdHlwZW9mIGRhdGEubWVzc2FnZSA9PT0gJ3N0cmluZycgPyBkYXRhLm1lc3NhZ2UgOiAnQmFkIHJlcXVlc3QhJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTW9iaWxlKCk6IGJvb2xlYW4ge1xuICBpZiAoXG4gICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQW5kcm9pZC9pKVxuICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL3dlYk9TL2kpXG4gICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBob25lL2kpXG4gICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBhZC9pKVxuICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQb2QvaSlcbiAgICB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9CbGFja0JlcnJ5L2kpXG4gICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvV2luZG93cyBQaG9uZS9pKVxuICApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXJsUGFyYW1ldGVyKHNQYXJhbSkge1xuICBjb25zdCBzUGFnZVVSTCA9IGRlY29kZVVSSUNvbXBvbmVudCh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSk7XG4gIGNvbnN0IHNVUkxWYXJpYWJsZXMgPSBzUGFnZVVSTC5zcGxpdCgnJicpO1xuICBsZXQgc1BhcmFtZXRlck5hbWU7XG4gIGxldCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzVVJMVmFyaWFibGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgc1BhcmFtZXRlck5hbWUgPSBzVVJMVmFyaWFibGVzW2ldLnNwbGl0KCc9Jyk7XG5cbiAgICBpZiAoc1BhcmFtZXRlck5hbWVbMF0gPT09IHNQYXJhbSkge1xuICAgICAgcmV0dXJuIHNQYXJhbWV0ZXJOYW1lWzFdID09PSB1bmRlZmluZWQgPyB0cnVlIDogc1BhcmFtZXRlck5hbWVbMV07XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBEQVlfT0ZfV0VFSyA9IHtcbiAgbW9uOiAnTW9uZGF5JyxcbiAgdHVlOiAnVHVlc2RheScsXG4gIHdlZDogJ1dlZG5lc2RheScsXG4gIHRodTogJ1RodXJzZGF5JyxcbiAgZnJpOiAnRnJpZGF5JyxcbiAgc2F0OiAnU2F0dXJkYXknLFxuICBzdW46ICdTdW5kYXknXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdFNjaGVkdWxlKCkge1xuICBjb25zdCBkZWZhdWx0VmFsID0geyBzdGFydDogbnVsbCwgZW5kOiBudWxsLCBjbG9zZWQ6IHRydWUgfTtcbiAgcmV0dXJuIHtcbiAgICBtb246IHsgLi4uZGVmYXVsdFZhbCB9LFxuICAgIHR1ZTogeyAuLi5kZWZhdWx0VmFsIH0sXG4gICAgd2VkOiB7IC4uLmRlZmF1bHRWYWwgfSxcbiAgICB0aHU6IHsgLi4uZGVmYXVsdFZhbCB9LFxuICAgIGZyaTogeyAuLi5kZWZhdWx0VmFsIH0sXG4gICAgc2F0OiB7IC4uLmRlZmF1bHRWYWwgfSxcbiAgICBzdW46IHsgLi4uZGVmYXVsdFZhbCB9XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZXh0U2hvdyhzY2hlZHVsZTogSVNjaGVkdWxlKTogc3RyaW5nIHtcbiAgbGV0IHdlZWtEYXkgPSBwYXJzZUludChtb21lbnQoKS5mb3JtYXQoJ2UnKSwgMTApO1xuICBsZXQgaSA9IDA7XG4gIGxldCBuZXh0U2hvdzogc3RyaW5nO1xuICBjb25zdCBwZXJmb3JtZXJTaG93cyA9IE9iamVjdC5rZXlzKHNjaGVkdWxlKS5maWx0ZXIoXG4gICAgKGtleSkgPT4gIXNjaGVkdWxlW2tleV0uY2xvc2VkXG4gICk7XG4gIGRvIHtcbiAgICBjb25zdCBkYXRlID0gbW9tZW50KCkuZGF5KHdlZWtEYXkpLmZvcm1hdCgnZGRkJykudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAocGVyZm9ybWVyU2hvd3MuaW5kZXhPZihkYXRlKSA+IC0xKSB7XG4gICAgICBuZXh0U2hvdyA9IGRhdGU7XG4gICAgfVxuICAgIHdlZWtEYXkgKz0gMTtcbiAgICBpICs9IDE7XG4gIH0gd2hpbGUgKGkgPCA3ICYmICFuZXh0U2hvdyk7XG5cbiAgaWYgKG5leHRTaG93KSB7XG4gICAgcmV0dXJuIGAke3NjaGVkdWxlW25leHRTaG93XS5zdGFydH0gJHttb21lbnQoKVxuICAgICAgLmRheSh3ZWVrRGF5IC0gMSlcbiAgICAgIC5mb3JtYXQoJ0REL01NL1lZWVknKX1gO1xuICB9XG4gIHJldHVybiAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlYXJjaERhdGEocGFnaW5hdGlvbiwgZmlsdGVycywgc29ydGVyLCBzdGF0ZSkge1xuICBsZXQgeyBzb3J0LCBzb3J0QnksIGZpbHRlciB9ID0gc3RhdGU7XG4gIGNvbnN0IHsgbGltaXQgfSA9IHN0YXRlO1xuICBpZiAoZmlsdGVycykge1xuICAgIE9iamVjdC5rZXlzKGZpbHRlcnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGZpbHRlcnNba2V5XSAmJiBmaWx0ZXJzW2tleV0ubGVuZ3RoKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICBmaWx0ZXJba2V5XSA9IGZpbHRlcnNba2V5XVswXTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFmaWx0ZXJzW2tleV0pIHtcbiAgICAgICAgZmlsdGVyW2tleV0gPSAnJztcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBmaWx0ZXIgPSB7fTtcbiAgfVxuXG4gIGlmIChzb3J0ZXIpIHtcbiAgICBpZiAoc29ydGVyLm9yZGVyKSB7XG4gICAgICBjb25zdCB7IGZpZWxkLCBvcmRlciB9ID0gc29ydGVyO1xuICAgICAgc29ydCA9IFNPUlRbb3JkZXJdO1xuICAgICAgc29ydEJ5ID0gZmllbGQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNvcnRCeSA9ICdjcmVhdGVkQXQnO1xuICAgICAgc29ydCA9ICdkZXNjJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIC4uLmZpbHRlcixcbiAgICBzb3J0LFxuICAgIHNvcnRCeSxcbiAgICBvZmZzZXQ6IChwYWdpbmF0aW9uLmN1cnJlbnQgLSAxKSAqIGxpbWl0XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCYXNlNjQob3JpZ2luRmlsZU9iaiwgc3RhdHVzID0gJ3VwbG9hZGluZycsIGZpbGUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIGlmIChvcmlnaW5GaWxlT2JqKSB7XG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChvcmlnaW5GaWxlT2JqKTtcbiAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKHtcbiAgICAgICAgLi4ub3JpZ2luRmlsZU9iaixcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBuYW1lOiBvcmlnaW5GaWxlT2JqLm5hbWUsXG4gICAgICAgIHVybDogcmVhZGVyLnJlc3VsdCxcbiAgICAgICAgb3JpZ2luRmlsZU9ialxuICAgICAgfSk7XG4gICAgICByZWFkZXIub25lcnJvciA9IChlcnJvcikgPT4gcmVqZWN0KGVycm9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzb2x2ZShmaWxlKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydENvbm5lY3Rpb25EYXRhKGRhdGEpIHtcbiAgY29uc3QgYXJyID0gZGF0YS5zcGxpdCgnJS8lJyk7XG4gIGNvbnN0IHNlcnZlckRhdGEgPSBhcnJbMV0gJiYgSlNPTi5wYXJzZShhcnJbMV0pO1xuICBjb25zdCBjbGllbnREYXRhID0gYXJyWzBdICYmIEpTT04ucGFyc2UoYXJyWzBdKTtcbiAgcmV0dXJuIHtcbiAgICBzZXJ2ZXJEYXRhLFxuICAgIGNsaWVudERhdGFcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrVXNlckxvZ2luKGlzTG9nZ2VkSW46IGJvb2xlYW4sIHVzZXI6IElVc2VyIHwgSVBlcmZvcm1lciB8IElTdHVkaW8pIHtcbiAgaWYgKCFpc0xvZ2dlZEluKSByZXR1cm4gZmFsc2U7XG4gIGlmICghdXNlciAmJiAhdXNlci5faWQpIHJldHVybiBmYWxzZTtcblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRVc2VyKHVzZXI6IElVc2VyLCBwZXJmb3JtZXI6IElQZXJmb3JtZXIpIHtcbiAgaWYgKHVzZXIgJiYgdXNlci5faWQpIHJldHVybiB1c2VyO1xuICBpZiAocGVyZm9ybWVyICYmIHBlcmZvcm1lci5faWQpIHJldHVybiBwZXJmb3JtZXI7XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BoeXNpY2FsUHJvZHVjdChpdGVtKSB7XG4gIGlmIChpdGVtICYmIGl0ZW0udHlwZSA9PT0gJ3BoeXNpY2FsJykgcmV0dXJuIHRydWU7XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYXRCb3hNZXNzYWdlQ2xhc3NOYW1lKHJlcSkge1xuICBjb25zdCB7XG4gICAgaXNNaW5lLFxuICAgIHN0YXJ0c1NlcXVlbmNlLFxuICAgIGVuZHNTZXF1ZW5jZSxcbiAgICBkYXRhOiB7IHR5cGUgfVxuICB9ID0gcmVxO1xuICByZXR1cm4gY2xhc3NuYW1lcyhcbiAgICAnbWVzc2FnZScsXG4gICAgeyBtaW5lOiBpc01pbmUgJiYgdHlwZSAhPT0gJ3RpcCcgfSxcbiAgICB7IHRpcDogdHlwZSA9PT0gJ3RpcCcgfSxcbiAgICB7IHN0YXJ0OiAhIXN0YXJ0c1NlcXVlbmNlIH0sXG4gICAgeyBlbmQ6ICEhZW5kc1NlcXVlbmNlIH1cbiAgKTtcbn1cblxuZnVuY3Rpb24gY29udmVydEZlZXRUb0NtKGZlZXQsIGluY2gpIHtcbiAgY29uc3QgW2ZdID0gZmVldC5zcGxpdCgnLicpO1xuICBjb25zdCBbaV0gPSBpbmNoLnNwbGl0KCcuJyk7XG4gIHJldHVybiAocGFyc2VJbnQoZiwgMTApICogMTIgKyBwYXJzZUludChpLCAxMCkpICogMi41NDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGFXZWlnaHQobWluID0gOTksIG1heCA9IDMxOSkge1xuICBsZXQgaSA9IG1pbjtcbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIGRvIHtcbiAgICByZXN1bHRbaV0gPSAoaSAqIDAuNDUpLnRvRml4ZWQoMik7XG4gICAgaSArPSAxO1xuICB9IHdoaWxlIChpIDwgbWF4KTtcbiAgcmV0dXJuIHJlc3VsdC5tYXAoKHYsIGluZGV4KSA9PiAoe1xuICAgIGxhYmVsOiBgJHtpbmRleH0gIGxicyAoJHt2fWtnKWAsXG4gICAgdmFsdWU6IGAke2luZGV4fSBsYnNgXG4gIH0pKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRhSGVpZ2h0KG1pbiA9IDQsIG1heCA9IDcpIHtcbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIGZvciAobGV0IGZlZXQgPSBtaW47IGZlZXQgPCBtYXg7IGZlZXQgKz0gMSkge1xuICAgIGZvciAobGV0IGluY2ggPSAwOyBpbmNoIDw9IDExOyBpbmNoICs9IDEpIHtcbiAgICAgIGNvbnN0IGEgPSBjb252ZXJ0RmVldFRvQ20oXG4gICAgICAgIGZlZXQudG9GaXhlZCgxKS50b1N0cmluZygpLFxuICAgICAgICBpbmNoLnRvRml4ZWQoMSkudG9TdHJpbmcoKVxuICAgICAgKTtcbiAgICAgIHJlc3VsdC5wdXNoKGAke2ZlZXR9JyR7aW5jaH1cIiAoJHthLnRvRml4ZWQoMil9IGNtKWApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0Lm1hcCgoZikgPT4gKHsgbGFiZWw6IGAke2Z9YCwgdmFsdWU6IGAke2Z9YCB9KSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRQcmljZShwcmljZTogbnVtYmVyLCBmcmFjdGlvbkRpZ2l0cyA9IDIpIHtcbiAgaWYgKHByaWNlKSB7XG4gICAgcmV0dXJuIHByaWNlLnRvRml4ZWQoZnJhY3Rpb25EaWdpdHMpO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlQXN5bmNBY3Rpb24sIGNyZWF0ZUFjdGlvbiB9IGZyb20gJ0BsaWIvcmVkdXgnO1xuXG5leHBvcnQgY29uc3QgeyBsb2dpbiwgbG9naW5TdWNjZXNzLCBsb2dpbkZhaWwgfSA9IGNyZWF0ZUFzeW5jQWN0aW9uKFxuICAnbG9naW4nLFxuICAnTE9HSU4nXG4pO1xuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdGluZyA9IGNyZWF0ZUFjdGlvbignTE9HSU5fUkVRVUVTVElORycpO1xuXG5leHBvcnQgY29uc3Qge1xuICBwZXJmb3JtZXJsb2dpbixcbiAgcGVyZm9ybWVybG9naW5TdWNjZXNzLFxuICBwZXJmb3JtZXJsb2dpbkZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbigncGVyZm9ybWVybG9naW4nLCAnUEVSRk9STUVSX0xPR0lOJyk7XG5cbmV4cG9ydCBjb25zdFxuICByZXNldExvZ2luRGF0YSA9IGNyZWF0ZUFjdGlvbigncmVzZXRMb2dpbkRhdGEnKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgc3R1ZGlvTG9naW4sXG4gIHN0dWRpb0xvZ2luU3VjY2VzcyxcbiAgc3R1ZGlvTG9naW5GYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ3N0dWRpb0xvZ2luJywgJ1NUVURJT19MT0dJTicpO1xuXG5leHBvcnQgY29uc3Qge1xuICBwZXJmb3JtZXJSZWdpc3RlcixcbiAgcGVyZm9ybWVyUmVnaXN0ZXJTdWNjZXNzLFxuICBwZXJmb3JtZXJSZWdpc3RlckZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbigncGVyZm9ybWVyUmVnaXN0ZXInLCAnUEVSRk9STUVSX1JFR0lTVEVSJyk7XG5leHBvcnQgY29uc3Qgc2V0UGVyZm9ybWVyUmVnaXN0ZXJTdWJtaXR0aW5nID0gY3JlYXRlQWN0aW9uKFxuICAnU0VUX1BFUkZPUk1FUl9SRUdJU1RFUl9TVUJNSVRUSU5HJ1xuKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgdXNlclJlZ2lzdGVyLFxuICB1c2VyUmVnaXN0ZXJTdWNjZXNzLFxuICB1c2VyUmVnaXN0ZXJGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ3VzZXJSZWdpc3RlcicsICdVU0VSX1JFR0lTVEVSJyk7XG5leHBvcnQgY29uc3Qgc2V0VXNlclJlZ2lzdGVyU3VibWl0dGluZyA9IGNyZWF0ZUFjdGlvbihcbiAgJ1NFVF9VU0VSX1JFR0lTVEVSX1NVQk1JVFRJTkcnXG4pO1xuXG5leHBvcnQgY29uc3Qge1xuICB1cGRhdGVQYXNzd29yZCxcbiAgdXBkYXRlUGFzc3dvcmRTdWNjZXNzLFxuICB1cGRhdGVQYXNzd29yZEZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbigndXBkYXRlUGFzc3dvcmQnLCAnVVBEQVRFX1BBU1NXT1JEJyk7XG5leHBvcnQgY29uc3Qgc2V0VXBkYXRlUGFzc3dvcmRTdWJtaXR0aW5nID0gY3JlYXRlQWN0aW9uKFxuICAnU0VUX1VQREFURV9QQVNTV09SRF9TVUJNSVRUSU5HJ1xuKTtcblxuZXhwb3J0IGNvbnN0IGxvZ291dCA9IGNyZWF0ZUFjdGlvbignbG9nb3V0Jyk7XG4iLCJpbXBvcnQgeyBjcmVhdGVBY3Rpb24gfSBmcm9tICdAbGliL3JlZHV4JztcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVVJVmFsdWUgPSBjcmVhdGVBY3Rpb24oJ3VwZGF0ZVVJVmFsdWUnKTtcbmV4cG9ydCBjb25zdCBsb2FkVUlWYWx1ZSA9IGNyZWF0ZUFjdGlvbignbG9hZFVJVmFsdWUnKTtcbiIsImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IHsgb21pdCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSc7XG5pbXBvcnQgeyBpc1VybCB9IGZyb20gJ0BsaWIvc3RyaW5nJztcbmltcG9ydCB7IElSZWdpc3RlckZvcm1EYXRhIH0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgZ2V0R2xvYmFsQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElSZXNwb25zZTxUPiB7XG4gIHN0YXR1czogbnVtYmVyO1xuICBkYXRhOiBUO1xufVxuXG5leHBvcnQgY29uc3QgVE9LRU4gPSAndG9rZW4nO1xuZXhwb3J0IGNvbnN0IFJPTEUgPSAncm9sZSc7XG5leHBvcnQgY29uc3QgUEVSRk9STUVSX1JPTEUgPSAncGVyZm9ybWVyJztcbmV4cG9ydCBjb25zdCBVU0VSX1JPTEUgPSAndXNlcic7XG5leHBvcnQgY29uc3QgU1RVRElPX1JPTEUgPSAnc3R1ZGlvJztcbmV4cG9ydCBjb25zdCBTT1JUID0geyBkZXNjZW5kOiAnZGVzYycsIGFzY2VuZDogJ2FzYycgfTtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFQSVJlcXVlc3Qge1xuICBzdGF0aWMgdG9rZW46IHN0cmluZyA9ICcnO1xuXG4gIHNldEF1dGhIZWFkZXJUb2tlbih0b2tlbjogc3RyaW5nKSB7XG4gICAgQVBJUmVxdWVzdC50b2tlbiA9IHRva2VuO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlcyB0aGUgSlNPTiByZXR1cm5lZCBieSBhIG5ldHdvcmsgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0gIHtvYmplY3R9IHJlc3BvbnNlIEEgcmVzcG9uc2UgZnJvbSBhIG5ldHdvcmsgcmVxdWVzdFxuICAgKlxuICAgKiBAcmV0dXJuIHtvYmplY3R9ICAgICAgICAgIFRoZSBwYXJzZWQgSlNPTiBmcm9tIHRoZSByZXF1ZXN0XG4gICAqL1xuICBwcml2YXRlIHBhcnNlSlNPTihyZXNwb25zZTogUmVzcG9uc2UpIHtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDQgfHwgcmVzcG9uc2Uuc3RhdHVzID09PSAyMDUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBhIG5ldHdvcmsgcmVxdWVzdCBjYW1lIGJhY2sgZmluZSwgYW5kIHRocm93cyBhbiBlcnJvciBpZiBub3RcbiAgICpcbiAgICogQHBhcmFtICB7b2JqZWN0fSByZXNwb25zZSAgIEEgcmVzcG9uc2UgZnJvbSBhIG5ldHdvcmsgcmVxdWVzdFxuICAgKlxuICAgKiBAcmV0dXJuIHtvYmplY3R8dW5kZWZpbmVkfSBSZXR1cm5zIGVpdGhlciB0aGUgcmVzcG9uc2UsIG9yIHRocm93cyBhbiBlcnJvclxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBjaGVja1N0YXR1cyhyZXNwb25zZTogUmVzcG9uc2UpIHtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID49IDIwMCAmJiByZXNwb25zZS5zdGF0dXMgPCAzMDApIHtcbiAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG5cbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MTMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWVzdCBFbnRpdHkgVG9vIExhcmdlJyk7XG4gICAgfVxuXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAzKSB7XG4gICAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZvcmJpZGRlbiBpbiB0aGUgYWN0aW9uIScpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KSBhcyBhbnk7XG4gICAgLy8gZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAvLyB0aHJvdyBlcnJvcjtcbiAgICB0aHJvdyByZXNwb25zZS5jbG9uZSgpLmpzb24oKTtcbiAgfVxuXG4gIHJlcXVlc3QoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgbWV0aG9kPzogc3RyaW5nLFxuICAgIGJvZHk/OiBhbnksXG4gICAgaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH1cbiAgKTogUHJvbWlzZTxJUmVzcG9uc2U8YW55Pj4ge1xuICAgIGNvbnN0IHZlcmIgPSAobWV0aG9kIHx8ICdnZXQnKS50b1VwcGVyQ2FzZSgpO1xuICAgIGNvbnN0IHVwZGF0ZWRIZWFkZXIgPSB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgLy8gVE9ETyAtIGNoZWNrIG1lXG4gICAgICBBdXRob3JpemF0aW9uOlxuICAgICAgICBBUElSZXF1ZXN0LnRva2VuIHx8IChwcm9jZXNzLmJyb3dzZXIgPyBjb29raWUuZ2V0KFRPS0VOKSA6ICcnKSxcbiAgICAgIC4uLihoZWFkZXJzIHx8IHt9KVxuICAgIH07XG4gICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG5cbiAgICByZXR1cm4gZmV0Y2goaXNVcmwodXJsKSA/IHVybCA6IGAke2NvbmZpZy5BUElfRU5EUE9JTlQgfHwgY29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0ke3VybH1gLCB7XG4gICAgICBtZXRob2Q6IHZlcmIsXG4gICAgICBoZWFkZXJzOiB1cGRhdGVkSGVhZGVyLFxuICAgICAgYm9keTogYm9keSA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogbnVsbFxuICAgIH0pXG4gICAgICAudGhlbih0aGlzLmNoZWNrU3RhdHVzKVxuICAgICAgLnRoZW4odGhpcy5wYXJzZUpTT04pO1xuICB9XG5cbiAgYnVpbGRVcmwoYmFzZVVybDogc3RyaW5nLCBwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4gfSkge1xuICAgIGlmICghcGFyYW1zKSB7XG4gICAgICByZXR1cm4gYmFzZVVybDtcbiAgICB9XG5cbiAgICBjb25zdCBxdWVyeVN0cmluZyA9IE9iamVjdC5rZXlzKHBhcmFtcylcbiAgICAgIC5tYXAoKGspID0+IGAke2VuY29kZVVSSUNvbXBvbmVudChrKX09JHtlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW2tdKX1gKVxuICAgICAgLmpvaW4oJyYnKTtcbiAgICByZXR1cm4gYCR7YmFzZVVybH0/JHtxdWVyeVN0cmluZ31gO1xuICB9XG5cbiAgZ2V0KHVybDogc3RyaW5nLCBoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXJsLCAnZ2V0JywgbnVsbCwgaGVhZGVycyk7XG4gIH1cblxuICBwb3N0KHVybDogc3RyaW5nLCBkYXRhPzogYW55LCBoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXJsLCAncG9zdCcsIGRhdGEsIGhlYWRlcnMpO1xuICB9XG5cbiAgcHV0KHVybDogc3RyaW5nLCBkYXRhPzogYW55LCBoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXJsLCAncHV0JywgZGF0YSwgaGVhZGVycyk7XG4gIH1cblxuICBkZWwodXJsOiBzdHJpbmcsIGRhdGE/OiBhbnksIGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1cmwsICdkZWxldGUnLCBkYXRhLCBoZWFkZXJzKTtcbiAgfVxuXG4gIHVwbG9hZChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBmaWxlczoge1xuICAgICAgZmlsZTogRmlsZTtcbiAgICAgIGZpZWxkbmFtZTogc3RyaW5nO1xuICAgIH1bXSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBvblByb2dyZXNzOiBGdW5jdGlvbjtcbiAgICAgIGN1c3RvbURhdGE/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xuICAgICAgbWV0aG9kPzogc3RyaW5nO1xuICAgIH0gPSB7XG4gICAgICBvblByb2dyZXNzKCkge30sXG4gICAgICBtZXRob2Q6ICdQT1NUJ1xuICAgIH1cbiAgKSB7XG4gICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG4gICAgY29uc3QgdXBsb2FkVXJsID0gaXNVcmwodXJsKSA/IHVybCA6IGAke2NvbmZpZy5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlR9JHt1cmx9YDtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50Lmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgICBvcHRpb25zLm9uUHJvZ3Jlc3Moe1xuICAgICAgICAgICAgcGVyY2VudGFnZTogKGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsKSAqIDEwMFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmVxLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSByZXEuc3RhdHVzID49IDIwMCAmJiByZXEuc3RhdHVzIDwgMzAwO1xuICAgICAgICBjb25zdCB7IHJlc3BvbnNlIH0gPSByZXE7XG4gICAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICAgIHJldHVybiByZWplY3QocmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgICByZWplY3QocmVxLnJlc3BvbnNlKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgZmlsZXMuZm9yRWFjaCgoZikgPT4gZm9ybURhdGEuYXBwZW5kKGYuZmllbGRuYW1lLCBmLmZpbGUsIGYuZmlsZS5uYW1lKSk7XG4gICAgICBvcHRpb25zLmN1c3RvbURhdGFcbiAgICAgICAgJiYgT2JqZWN0LmtleXMob3B0aW9ucy5jdXN0b21EYXRhKS5mb3JFYWNoKFxuICAgICAgICAgIChmaWVsZG5hbWUpID0+IHR5cGVvZiBvcHRpb25zLmN1c3RvbURhdGFbZmllbGRuYW1lXSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICYmIGZvcm1EYXRhLmFwcGVuZChmaWVsZG5hbWUsIG9wdGlvbnMuY3VzdG9tRGF0YVtmaWVsZG5hbWVdKVxuICAgICAgICApO1xuXG4gICAgICByZXEucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xuICAgICAgcmVxLm9wZW4ob3B0aW9ucy5tZXRob2QgfHwgJ1BPU1QnLCB1cGxvYWRVcmwpO1xuXG4gICAgICBjb25zdCB0b2tlbjogYW55ID0gY29va2llLmdldChUT0tFTik7XG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCB0b2tlbik7XG4gICAgICB9XG4gICAgICByZXEuc2VuZChmb3JtRGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICByZWdpc3RlcihcbiAgICB1cmw6IHN0cmluZyxcbiAgICBkYXRhOiBJUmVnaXN0ZXJGb3JtRGF0YSxcbiAgICBvcHRpb25zOiB7IG9uUHJvZ3Jlc3M6IEZ1bmN0aW9uIH0gPSB7XG4gICAgICBvblByb2dyZXNzKCkge31cbiAgICB9XG4gICkge1xuICAgIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgcmVxLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQubGVuZ3RoQ29tcHV0YWJsZSkge1xuICAgICAgICAgIG9wdGlvbnMub25Qcm9ncmVzcyh7XG4gICAgICAgICAgICBwZXJjZW50YWdlOiAoZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWwpICogMTAwXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXEuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IHJlcS5zdGF0dXMgPj0gMjAwICYmIHJlcS5zdGF0dXMgPCAzMDA7XG4gICAgICAgIGNvbnN0IHsgcmVzcG9uc2UgfSA9IHJlcTtcbiAgICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChyZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgfSk7XG5cbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG4gICAgICAgIHJlamVjdChyZXEucmVzcG9uc2UpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAvLyBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlLCBmaWxlLm5hbWUpO1xuICAgICAgaWYgKGRhdGEuZG9jdW1lbnRWZXJpZmljYXRpb24pIHtcbiAgICAgICAgY29uc3QgZG9jdW1lbnRWZXJpZmljYXRpb25GaWxlID0gZGF0YS5kb2N1bWVudFZlcmlmaWNhdGlvbi5maWxlLm9yaWdpbkZpbGVPYmo7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcbiAgICAgICAgICAnZG9jdW1lbnRWZXJpZmljYXRpb24nLFxuICAgICAgICAgIGRvY3VtZW50VmVyaWZpY2F0aW9uRmlsZSxcbiAgICAgICAgICBkb2N1bWVudFZlcmlmaWNhdGlvbkZpbGUubmFtZVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YS5pZFZlcmlmaWNhdGlvbikge1xuICAgICAgICBjb25zdCBpZFZlcmlmaWNhdGlvbkRpbGUgPSBkYXRhLmlkVmVyaWZpY2F0aW9uLmZpbGUub3JpZ2luRmlsZU9iajtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFxuICAgICAgICAgICdpZFZlcmlmaWNhdGlvbicsXG4gICAgICAgICAgaWRWZXJpZmljYXRpb25EaWxlLFxuICAgICAgICAgIGlkVmVyaWZpY2F0aW9uRGlsZS5uYW1lXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5rZXlzKFxuICAgICAgICBvbWl0KGRhdGEsIFsnZG9jdW1lbnRWZXJpZmljYXRpb24nLCAnaWRWZXJpZmljYXRpb24nXSlcbiAgICAgICkuZm9yRWFjaCgodikgPT4ge1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQodiwgZGF0YVt2XSk7XG4gICAgICB9KTtcblxuICAgICAgcmVxLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcbiAgICAgIHJlcS5vcGVuKCdQT1NUJywgaXNVcmwodXJsKSA/IHVybCA6IGAke2NvbmZpZy5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlR9JHt1cmx9YCk7XG5cbiAgICAgIGNvbnN0IHRva2VuOiBhbnkgPSBjb29raWUuZ2V0KFRPS0VOKTtcbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICByZXEuc2V0UmVxdWVzdEhlYWRlcignQXV0aG9yaXphdGlvbicsIHRva2VuKTtcbiAgICAgIH1cbiAgICAgIHJlcS5zZW5kKGZvcm1EYXRhKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnO1xuaW1wb3J0IHtcbiAgSUxvZ2luLFxuICBJcGVyZm9ybWVyTG9naW4sXG4gIElSZWdpc3RlckZvcm1EYXRhLFxuICBJVXNlclJlZ2lzdGVyRm9ybURhdGFcbn0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IHtcbiAgQVBJUmVxdWVzdCwgVE9LRU4sIElSZXNwb25zZSwgUk9MRVxufSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIGxvZ2luKGRhdGE6IElMb2dpbikge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9hdXRoL3VzZXJzL2xvZ2luJywgZGF0YSk7XG4gIH1cblxuICBzZXRBdXRoSGVhZGVyKHRva2VuOiBzdHJpbmcsIHJvbGU6IHN0cmluZykge1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qcy1jb29raWUvanMtY29va2llXG4gICAgLy8gc2luY2UgU2FmYXJpIGRvZXMgbm90IHN1cHBvcnQsIG5lZWQgYSBiZXR0ZXIgc29sdXRpb25cbiAgICBjb29raWUuc2V0KFRPS0VOLCB0b2tlbiwgeyBleHBpcmVzOiAzNjUgfSk7XG4gICAgY29va2llLnNldChST0xFLCByb2xlLCB7IGV4cGlyZXM6IDM2NSB9KTtcbiAgICB0aGlzLnNldEF1dGhIZWFkZXJUb2tlbih0b2tlbik7XG4gIH1cblxuICBwZXJmb3JtZXJMb2dpbihkYXRhOiBJcGVyZm9ybWVyTG9naW4pIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvYXV0aC9wZXJmb3JtZXJzL2xvZ2luJywgZGF0YSk7XG4gIH1cblxuICBzdHVkaW9Mb2dpbihkYXRhOiBJTG9naW4pIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvYXV0aC9zdHVkaW8vbG9naW4nLCBkYXRhKTtcbiAgfVxuXG4gIHNldFRva2VuKHRva2VuOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vanMtY29va2llL2pzLWNvb2tpZVxuICAgIC8vIHNpbmNlIFNhZmFyaSBkb2VzIG5vdCBzdXBwb3J0LCBuZWVkIGEgYmV0dGVyIHNvbHV0aW9uXG4gICAgY29va2llLnNldChUT0tFTiwgdG9rZW4sIHsgZXhwaXJlczogMzY1IH0pO1xuICAgIHRoaXMuc2V0QXV0aEhlYWRlclRva2VuKHRva2VuKTtcbiAgfVxuXG4gIGdldFRva2VuKCk6IHN0cmluZyB7XG4gICAgY29uc3QgdG9rZW4gPSBjb29raWUuZ2V0KFRPS0VOKTtcbiAgICByZXR1cm4gdG9rZW4gfHwgbnVsbDtcbiAgfVxuXG4gIGdldFJvbGUoKTogc3RyaW5nIHtcbiAgICBjb25zdCByb2xlID0gY29va2llLmdldChST0xFKTtcbiAgICByZXR1cm4gcm9sZSB8fCBudWxsO1xuICB9XG5cbiAgcmVtb3ZlVG9rZW4oKTogdm9pZCB7XG4gICAgY29va2llLnJlbW92ZShUT0tFTik7XG4gICAgY29va2llLnJlbW92ZShST0xFKTtcbiAgfVxuXG4gIHJlbW92ZVJlbWVtYmVyKCk6IHZvaWQge1xuICAgIHByb2Nlc3MuYnJvd3NlciAmJiBjb29raWUucmVtb3ZlKCdyZW1lbWJlck1lJyk7XG4gIH1cblxuICB1cGRhdGVQYXNzd29yZChib2R5OiB7IHBhc3N3b3JkOiBzdHJpbmc7IHNvdXJjZT86IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMucHV0KCcvYXV0aC91c2Vycy9tZS9wYXNzd29yZCcsIGJvZHkpO1xuICB9XG5cbiAgcGVyZm9ybWVyc1JlZ2lzdGVyKGRhdGE6IElSZWdpc3RlckZvcm1EYXRhKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5yZWdpc3RlcignL2F1dGgvcGVyZm9ybWVycy9yZWdpc3RlcicsIGRhdGEpO1xuICB9XG5cbiAgdXNlclJlZ2lzdGVyKGRhdGE6IElVc2VyUmVnaXN0ZXJGb3JtRGF0YSk6IFByb21pc2U8SVJlc3BvbnNlPGFueT4+IHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvYXV0aC91c2Vycy9yZWdpc3RlcicsIGRhdGEpO1xuICB9XG5cbiAgc3R1ZGlvUmVnaXN0ZXIoZGF0YTogSVJlZ2lzdGVyRm9ybURhdGEpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnJlZ2lzdGVyKCcvYXV0aC9zdHVkaW8vcmVnaXN0ZXInLCBkYXRhKTtcbiAgfVxuXG4gIGZvcmdvdFBhc3N3b3JkKGVtYWlsOiBzdHJpbmcsIHR5cGU6IHN0cmluZykge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBlbWFpbCxcbiAgICAgIHR5cGVcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9hdXRoL3VzZXJzL2ZvcmdvdCcsIGRhdGEpO1xuICB9XG5cbiAgcmVzZW5kVmVyaWZpY2F0aW9uRW1haWwoZGF0YTogeyBlbWFpbDogc3RyaW5nLCBzb3VyY2U6IHN0cmluZ30pIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvdmVyaWZpY2F0aW9uL3Jlc2VuZC12ZXJpZmljYXRpb24tZW1haWwnLCBkYXRhKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgYXV0aFNlcnZpY2UgPSBuZXcgQXV0aFNlcnZpY2UoKTtcbiIsImltcG9ydCB7IElCYW5uZXJTZWFyY2ggfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBCYW5uZXJTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIHNlYXJjaChxdWVyeTogSUJhbm5lclNlYXJjaCkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvYmFubmVycy9zZWFyY2gnLCBxdWVyeSBhcyBhbnkpKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgYmFubmVyU2VydmljZSA9IG5ldyBCYW5uZXJTZXJ2aWNlKCk7XG4iLCJsZXQgZ2xvYmFsQ29uZmlnID0ge30gYXMgYW55O1xuXG5leHBvcnQgY29uc3Qgc2V0R2xvYmFsQ29uZmlnID0gKGNvbmZpZzogYW55KSA9PiB7XG4gIGdsb2JhbENvbmZpZyA9IGNvbmZpZztcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRHbG9iYWxDb25maWcgPSAoKSA9PiBnbG9iYWxDb25maWc7XG4iLCJpbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmNsYXNzIEVhcm5pbmdTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIHNlYXJjaChwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9LCByb2xlID0gJ3BlcmZvcm1lcicpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybChgL2Vhcm5pbmcvJHtyb2xlfS9zZWFyY2hgLCBwYXJhbXMpKTtcbiAgfVxuXG4gIHN0YXRzKHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0sIHJvbGUgPSAncGVyZm9ybWVyJykge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKGAvZWFybmluZy8ke3JvbGV9L3N0YXRzYCwgcGFyYW1zKSk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGVhcm5pbmdTZXJ2aWNlID0gbmV3IEVhcm5pbmdTZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmNsYXNzIEZhdm91cml0ZVNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgbGlrZShpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL2Zhdm91cml0ZS8ke2lkfS9saWtlYCk7XG4gIH1cblxuICB1bmxpa2UoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC9mYXZvdXJpdGUvJHtpZH0vdW5saWtlYCk7XG4gIH1cblxuICBmYXZvcml0ZShpZDogc3RyaW5nLCBpc0Zhdm9yaXRlZDogYm9vbGVhbikge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC9mYXZvdXJpdGUvJHtpZH0vJHtpc0Zhdm9yaXRlZCA/ICd1bmxpa2UnIDogJ2xpa2UnfWApO1xuICB9XG5cbiAgc2VhcmNoKHF1ZXJ5OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9mYXZvdXJpdGUnLCBxdWVyeSkpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBmYXZvdXJpdGVTZXJ2aWNlID0gbmV3IEZhdm91cml0ZVNlcnZpY2UoKTtcbiIsImltcG9ydCB7IElSZXNwb25zZSwgSURhdGFSZXNwb25zZSwgSVBlcmZvcm1lckdhbGxlcnkgfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBHYWxsZXJ5U2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBzZWFyY2goXG4gICAgcGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSxcbiAgICBpc1BlcmZvcm1lciA9IHRydWVcbiAgKTogUHJvbWlzZTxJUmVzcG9uc2U8SURhdGFSZXNwb25zZTxJUGVyZm9ybWVyR2FsbGVyeT4+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KFxuICAgICAgdGhpcy5idWlsZFVybChcbiAgICAgICAgaXNQZXJmb3JtZXJcbiAgICAgICAgICA/ICcvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvZ2FsbGVyaWVzL3NlYXJjaCdcbiAgICAgICAgICA6ICcvdXNlci9wZXJmb3JtZXItYXNzZXRzL2dhbGxlcmllcy9zZWFyY2gnLFxuICAgICAgICBwYXJhbXNcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcHVyY2hhc2VkKHBhcmFtcz86IHtcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIH0pOiBQcm9taXNlPElSZXNwb25zZTxJRGF0YVJlc3BvbnNlPElQZXJmb3JtZXJHYWxsZXJ5Pj4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3B1cmNoYXNlZC1pdGVtcy91c2VyL2dhbGxlcmllcycsIHBhcmFtcykpO1xuICB9XG5cbiAgY3JlYXRlKGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvZ2FsbGVyaWVzJywgZGF0YSk7XG4gIH1cblxuICB1cGRhdGUoaWQsIGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5wdXQoYC9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9nYWxsZXJpZXMvJHtpZH1gLCBkYXRhKTtcbiAgfVxuXG4gIGRldGFpbHMoaWQ6IHN0cmluZywgaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoXG4gICAgICBgL3BlcmZvcm1lci9wZXJmb3JtZXItYXNzZXRzL2dhbGxlcmllcy8ke2lkfS92aWV3YCxcbiAgICAgIGhlYWRlcnNcbiAgICApO1xuICB9XG5cbiAgcHVibGljZGV0YWlscyhpZDogc3RyaW5nLCBoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiB0aGlzLmdldChgL3VzZXIvcGVyZm9ybWVyLWFzc2V0cy9nYWxsZXJpZXMvJHtpZH0vdmlld2AsIGhlYWRlcnMpO1xuICB9XG5cbiAgcmVtb3ZlKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5kZWwoYC9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9nYWxsZXJpZXMvJHtpZH1gKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2FsbGVyeVNlcnZpY2UgPSBuZXcgR2FsbGVyeVNlcnZpY2UoKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vdXNlci5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vcG9zdC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vcGVyZm9tZXItY2F0ZWdvcmllcy5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vcGVyZm9tZXIuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3ZpZGVvLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9wcm9kdWN0LnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zZXR0aW5nLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9waG90by5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vZ2FsbGVyeS5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vZmF2b3VyaXRlLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi90b2tlbi1wYWNrYWdlLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi90cmFuc2FjdGlvbi5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vc3RyZWFtLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9tZXNzYWdlLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9wdXJjaGFzZS1pdGVtLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9vcmRlci5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vZWFybmluZy5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vcGF5b3V0LXJlcXVlc3QnO1xuZXhwb3J0ICogZnJvbSAnLi9yZWZ1bmQtcmVxdWVzdC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vdXRpbHMuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3N0dWRpby5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vYmFubmVyLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9wYXltZW50LWluZm9ybWF0aW9uLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zdHJlYW0uc2VydmljZSc7XG4iLCJpbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5pbXBvcnQgeyBnZXRHbG9iYWxDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5cbmV4cG9ydCBjbGFzcyBNZXNzYWdlU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBnZXRDb252ZXJzYXRpb25zKHF1ZXJ5PzogUmVjb3JkPHN0cmluZywgYW55Pikge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvY29udmVyc2F0aW9ucycsIHF1ZXJ5KSk7XG4gIH1cblxuICBzZWFyY2hDb252ZXJzYXRpb25zKHF1ZXJ5PzogUmVjb3JkPHN0cmluZywgYW55Pikge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvY29udmVyc2F0aW9ucy9zZWFyY2gnLCBxdWVyeSkpO1xuICB9XG5cbiAgY3JlYXRlQ29udmVyc2F0aW9uKGRhdGE6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4pIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvY29udmVyc2F0aW9ucycsIGRhdGEpO1xuICB9XG5cbiAgZ2V0Q29udmVyc2F0aW9uRGV0YWlsKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9jb252ZXJzYXRpb25zLyR7aWR9YCk7XG4gIH1cblxuICBnZXRDb252ZXJzYXRpb25CeVN0cmVhbUlkKHN0cmVhbUlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9jb252ZXJzYXRpb25zL3N0cmVhbS8ke3N0cmVhbUlkfWApO1xuICB9XG5cbiAgZ2V0TWVzc2FnZXMoY29udmVyc2F0aW9uSWQ6IHN0cmluZywgcXVlcnk/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoYC9tZXNzYWdlcy9jb252ZXJzYXRpb25zLyR7Y29udmVyc2F0aW9uSWR9YCwgcXVlcnkpKTtcbiAgfVxuXG4gIGdldFB1YmxpY01lc3NhZ2VzKGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsIHF1ZXJ5PzogUmVjb3JkPHN0cmluZywgYW55Pikge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKGAvbWVzc2FnZXMvY29udmVyc2F0aW9ucy9wdWJsaWMvJHtjb252ZXJzYXRpb25JZH1gLCBxdWVyeSkpO1xuICB9XG5cbiAgc2VuZE1lc3NhZ2UoY29udmVyc2F0aW9uSWQ6IHN0cmluZywgZGF0YTogUmVjb3JkPHN0cmluZywgYW55Pikge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC9tZXNzYWdlcy9jb252ZXJzYXRpb25zLyR7Y29udmVyc2F0aW9uSWR9YCwgZGF0YSk7XG4gIH1cblxuICBzZW5kU3RyZWFtTWVzc2FnZShjb252ZXJzYXRpb25JZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL21lc3NhZ2VzL3N0cmVhbS9jb252ZXJzYXRpb25zLyR7Y29udmVyc2F0aW9uSWR9YCwgZGF0YSk7XG4gIH1cblxuICBzZW5kUHVibGljU3RyZWFtTWVzc2FnZShjb252ZXJzYXRpb25JZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL21lc3NhZ2VzL3N0cmVhbS9wdWJsaWMvY29udmVyc2F0aW9ucy8ke2NvbnZlcnNhdGlvbklkfWAsIGRhdGEpO1xuICB9XG5cbiAgZmluZFB1YmxpY0NvbnZlcnNhdGlvblBlcmZvcm1lcihwZXJmb3JtZXJJZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvY29udmVyc2F0aW9ucy9zdHJlYW0vcHVibGljLyR7cGVyZm9ybWVySWR9YCk7XG4gIH1cblxuICBjb3VudFRvdGFsTm90UmVhZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoJy9tZXNzYWdlcy9jb3VudGluZy1ub3QtcmVhZC1tZXNzYWdlcycpO1xuICB9XG5cbiAgcmVhZEFsbEluQ29udmVyc2F0aW9uKGNvbnZlcnNhdGlvbklkOiBzdHJpbmcgfCBudW1iZXIsIHJlY2lwaWVudElkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvbWVzc2FnZXMvcmVhZC1hbGwnLCB7IGNvbnZlcnNhdGlvbklkLCByZWNpcGllbnRJZCB9KTtcbiAgfVxuXG4gIGdldE1lc3NhZ2VVcGxvYWRVcmwoKSB7XG4gICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG4gICAgcmV0dXJuIGAke2NvbmZpZy5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlR9L21lc3NhZ2VzL3ByaXZhdGUvZmlsZWA7XG4gIH1cblxuICBkZWxldGVNZXNzYWdlKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVsKGAvbWVzc2FnZXMvJHtpZH1gKTtcbiAgfVxuXG4gIGRlbGV0ZUFsbE1lc3NhZ2VJbkNvbnZlcnNhdGlvbihjb252ZXJzYXRpb25JZCkge1xuICAgIHJldHVybiB0aGlzLmRlbChgL21lc3NhZ2VzLyR7Y29udmVyc2F0aW9uSWR9L3JlbW92ZS1hbGwtbWVzc2FnZWApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBtZXNzYWdlU2VydmljZSA9IG5ldyBNZXNzYWdlU2VydmljZSgpO1xuIiwiLy8gaW1wb3J0IHsgSUdhbGxlcnlDcmVhdGUgfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBPcmRlclNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgc2VhcmNoKHBheWxvYWQpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL29yZGVycy9zZWFyY2gnLCBwYXlsb2FkKSk7XG4gIH1cblxuICBkZXRhaWxzKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvb3JkZXJzL2RldGFpbHMvJHtpZH1gKTtcbiAgfVxuXG4gIHVwZGF0ZShpZCwgZGF0YSkge1xuICAgIHJldHVybiB0aGlzLnB1dChgL29yZGVycy8ke2lkfS91cGRhdGVgLCBkYXRhKTtcbiAgfVxuXG4gIHVzZXJTZWFyY2gocXVlcnkpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL29yZGVycy91c2VyL3NlYXJjaCcsIHF1ZXJ5KSk7XG4gIH1cblxuICB1c2VyRmluZERldGFpbHMoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9vcmRlcnMvdXNlci9kZXRhaWxzLyR7aWR9YCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG9yZGVyU2VydmljZSA9IG5ldyBPcmRlclNlcnZpY2UoKTtcbiIsImltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuY2xhc3MgUGF5bWVudEluZm9ybWF0aW9uU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBjcmVhdGUoZGF0YSkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9wYXltZW50LWluZm9ybWF0aW9uJywgZGF0YSk7XG4gIH1cblxuICBmaW5kT25lKGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3BheW1lbnQtaW5mb3JtYXRpb24nLCBkYXRhKSk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHBheW1lbnRJbmZvcm1hdGlvblNlcnZpY2UgPSBuZXcgUGF5bWVudEluZm9ybWF0aW9uU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgSVJlc3BvbnNlIH0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5jbGFzcyBQYXlvdXRSZXF1ZXN0U2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBjYWxjdWxhdGUocGFyYW1zOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9LCByb2xlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoXG4gICAgICB0aGlzLmJ1aWxkVXJsKGAvZWFybmluZy8ke3JvbGUgfHwgJ3BlcmZvcm1lcid9L3BheW91dGAsIHBhcmFtcylcbiAgICApO1xuICB9XG5cbiAgc2VhcmNoKHF1ZXJ5OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9wYXlvdXQtcmVxdWVzdHMvcGVyZm9ybWVyL3NlYXJjaCcsIHF1ZXJ5KSk7XG4gIH1cblxuICBzdHVkaW9TZWFyY2gocXVlcnk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3BheW91dC1yZXF1ZXN0cy9zdHVkaW8vc2VhcmNoJywgcXVlcnkpKTtcbiAgfVxuXG4gIGNyZWF0ZShib2R5OiBhbnksIHJvbGUgPSAncGVyZm9ybWVyJykge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC9wYXlvdXQtcmVxdWVzdHMvJHtyb2xlfWAsIGJvZHkpO1xuICB9XG5cbiAgdXBkYXRlKGlkOiBzdHJpbmcsIGJvZHk6IGFueSwgcm9sZSA9ICdwZXJmb3JtZXInKSB7XG4gICAgcmV0dXJuIHRoaXMucHV0KGAvcGF5b3V0LXJlcXVlc3RzLyR7cm9sZX0vJHtpZH1gLCBib2R5KTtcbiAgfVxuXG4gIGRldGFpbChcbiAgICBpZDogc3RyaW5nLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcbiAgICB9LFxuICAgIHJvbGUgPSAncGVyZm9ybWVyJ1xuICApOiBQcm9taXNlPElSZXNwb25zZTxQYXlvdXRSZXF1ZXN0U2VydmljZT4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9wYXlvdXQtcmVxdWVzdHMvJHtyb2xlfS8ke2lkfS92aWV3YCwgaGVhZGVycyk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHBheW91dFJlcXVlc3RTZXJ2aWNlID0gbmV3IFBheW91dFJlcXVlc3RTZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBQZXJmb3JtZXJDYXRlZ29yaWVzU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBnZXRMaXN0KHF1ZXJ5PzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvcGVyZm9ybWVyLWNhdGVnb3JpZXMnLCBxdWVyeSkpO1xuICB9XG5cbiAgZGV0YWlscyhpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvcGVyZm9ybWVyLWNhdGVnb3JpZXMvJHtpZH0vdmlld2ApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBwZXJmb3JtZXJDYXRlZ29yaWVzID0gbmV3IFBlcmZvcm1lckNhdGVnb3JpZXNTZXJ2aWNlKCk7XG4iLCJpbXBvcnQge1xuICBJUGVyZm9ybWVyLFxuICBJQ3JlYXRlUGVyZm9ybWVyUHJvZHVjdFBheWxvYWQsXG4gIElVcGRhdGVQZXJmb3JtZXJQcm9kdWN0UGF5bG9hZFxufSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBpc1VybCB9IGZyb20gJ0BsaWIvc3RyaW5nJztcbmltcG9ydCB7IG9taXQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnO1xuXG5pbXBvcnQgeyBBUElSZXF1ZXN0LCBJUmVzcG9uc2UsIFRPS0VOIH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5pbXBvcnQgeyBnZXRHbG9iYWxDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5cbmV4cG9ydCBjbGFzcyBQZXJmb3JtZXJTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIG1lKGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KTogUHJvbWlzZTxJUmVzcG9uc2U8SVBlcmZvcm1lcj4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXQoJy9wZXJmb3JtZXJzL21lJywgaGVhZGVycyk7XG4gIH1cblxuICB1cGRhdGVNZShwYXlsb2FkOiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5wdXQoJy9wZXJmb3JtZXJzJywgcGF5bG9hZCk7XG4gIH1cblxuICBzZWFyY2gocXVlcnk/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9wZXJmb3JtZXJzL3NlYXJjaCcsIHF1ZXJ5KSk7XG4gIH1cblxuICBkZXRhaWxzKHVzZXJuYW1lOiBzdHJpbmcsIGhlYWRlcnMgPSB7fSk6IFByb21pc2U8SVJlc3BvbnNlPElQZXJmb3JtZXI+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvcGVyZm9ybWVycy8ke3VzZXJuYW1lfS92aWV3YCwgaGVhZGVycyk7XG4gIH1cblxuICBnZXRBdmF0YXJVcGxvYWRVcmwoKSB7XG4gICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG4gICAgcmV0dXJuIGAke2NvbmZpZy5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlR9L3BlcmZvcm1lcnMvYXZhdGFyL3VwbG9hZGA7XG4gIH1cblxuICBnZXREb2N1bWVudHNVcGxvYWRVcmwoKSB7XG4gICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG4gICAgcmV0dXJuIGAke2NvbmZpZy5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlR9L3BlcmZvcm1lcnMvZG9jdW1lbnRzL3VwbG9hZGA7XG4gIH1cblxuICBnZXRSZWxlYXNlRm9ybVVybCgpIHtcbiAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgICByZXR1cm4gYCR7Y29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0vcGVyZm9ybWVycy9yZWxlYXNlLWZvcm0vdXBsb2FkYDtcbiAgfVxuXG4gIG15UHJvZHVjdChxdWVyeT86IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoXG4gICAgICB0aGlzLmJ1aWxkVXJsKCcvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvcHJvZHVjdHMvc2VhcmNoJywgcXVlcnkpXG4gICAgKTtcbiAgfVxuXG4gIGNyZWF0ZVByb2R1Y3QoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgZGF0YTogSUNyZWF0ZVBlcmZvcm1lclByb2R1Y3RQYXlsb2FkLFxuICAgIG9wdGlvbnM6IHsgb25Qcm9ncmVzczogRnVuY3Rpb24gfSA9IHtcbiAgICAgIG9uUHJvZ3Jlc3MoKSB7fVxuICAgIH1cbiAgKTogUHJvbWlzZTxJUmVzcG9uc2U8YW55Pj4ge1xuICAgIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgcmVxLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQubGVuZ3RoQ29tcHV0YWJsZSkge1xuICAgICAgICAgIG9wdGlvbnMub25Qcm9ncmVzcyh7XG4gICAgICAgICAgICBwZXJjZW50YWdlOiAoZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWwpICogMTAwXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXEuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IHJlcS5zdGF0dXMgPj0gMjAwICYmIHJlcS5zdGF0dXMgPCAzMDA7XG4gICAgICAgIGNvbnN0IHsgcmVzcG9uc2UgfSA9IHJlcTtcbiAgICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChyZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgfSk7XG5cbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG4gICAgICAgIHJlamVjdChyZXEucmVzcG9uc2UpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAvLyBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlLCBmaWxlLm5hbWUpO1xuICAgICAgaWYgKGRhdGEuaW1hZ2UpIHtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBkYXRhLmltYWdlLmZpbGUub3JpZ2luRmlsZU9iajtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIGltYWdlLCBpbWFnZS5uYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGEuZGlnaXRhbEZpbGUpIHtcbiAgICAgICAgY29uc3QgZGlnaXRhbEZpbGUgPSBkYXRhLmRpZ2l0YWxGaWxlLmZpbGUub3JpZ2luRmlsZU9iajtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdkaWdpdGFsRmlsZScsIGRpZ2l0YWxGaWxlLCBkaWdpdGFsRmlsZS5uYW1lKTtcbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmtleXMob21pdChkYXRhLCBbJ2ltYWdlJywgJ2RpZ2l0YWxGaWxlJ10pKS5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCh2LCBkYXRhW3ZdKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXEucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xuICAgICAgcmVxLm9wZW4oJ1BPU1QnLCBpc1VybCh1cmwpID8gdXJsIDogYCR7Y29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0ke3VybH1gKTtcblxuICAgICAgY29uc3QgdG9rZW46IGFueSA9IGNvb2tpZS5nZXQoVE9LRU4pO1xuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKCdBdXRob3JpemF0aW9uJywgdG9rZW4pO1xuICAgICAgfVxuICAgICAgcmVxLnNlbmQoZm9ybURhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlUHJvZHVjdChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBkYXRhOiBJVXBkYXRlUGVyZm9ybWVyUHJvZHVjdFBheWxvYWQsXG4gICAgb3B0aW9uczogeyBvblByb2dyZXNzOiBGdW5jdGlvbiB9ID0ge1xuICAgICAgb25Qcm9ncmVzcygpIHt9XG4gICAgfVxuICApOiBQcm9taXNlPElSZXNwb25zZTxhbnk+PiB7XG4gICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5sZW5ndGhDb21wdXRhYmxlKSB7XG4gICAgICAgICAgb3B0aW9ucy5vblByb2dyZXNzKHtcbiAgICAgICAgICAgIHBlcmNlbnRhZ2U6IChldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCkgKiAxMDBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJlcS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBzdWNjZXNzID0gcmVxLnN0YXR1cyA+PSAyMDAgJiYgcmVxLnN0YXR1cyA8IDMwMDtcbiAgICAgICAgY29uc3QgeyByZXNwb25zZSB9ID0gcmVxO1xuICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgcmVxLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICAgICAgcmVqZWN0KHJlcS5yZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIC8vIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUsIGZpbGUubmFtZSk7XG4gICAgICBpZiAoZGF0YS5pbWFnZSAmJiBkYXRhLmltYWdlLmZpbGUpIHtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBkYXRhLmltYWdlLmZpbGUub3JpZ2luRmlsZU9iajtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIGltYWdlLCBpbWFnZS5uYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGEuZGlnaXRhbEZpbGUgJiYgZGF0YS5kaWdpdGFsRmlsZS5maWxlKSB7XG4gICAgICAgIGNvbnN0IGRpZ2l0YWxGaWxlID0gZGF0YS5kaWdpdGFsRmlsZS5maWxlLm9yaWdpbkZpbGVPYmo7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZGlnaXRhbEZpbGUnLCBkaWdpdGFsRmlsZSwgZGlnaXRhbEZpbGUubmFtZSk7XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5rZXlzKG9taXQoZGF0YSwgWydpbWFnZScsICdkaWdpdGFsRmlsZSddKSkuZm9yRWFjaCgodikgPT4ge1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQodiwgZGF0YVt2XSk7XG4gICAgICB9KTtcblxuICAgICAgcmVxLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcbiAgICAgIHJlcS5vcGVuKCdQVVQnLCBpc1VybCh1cmwpID8gdXJsIDogYCR7Y29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0ke3VybH1gKTtcblxuICAgICAgY29uc3QgdG9rZW46IGFueSA9IGNvb2tpZS5nZXQoVE9LRU4pO1xuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKCdBdXRob3JpemF0aW9uJywgdG9rZW4pO1xuICAgICAgfVxuICAgICAgcmVxLnNlbmQoZm9ybURhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlUHJvZHVjdChpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVsKGAvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvcHJvZHVjdHMvJHtpZH1gKTtcbiAgfVxuXG4gIGdldENvbW1pc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KCcvc2V0dGluZ3MvcGVyZm9ybWVyL2NvbW1pc3Npb24nKTtcbiAgfVxuXG4gIHVwZGF0ZVBheW1lbnRJbmZvKHBheWxvYWQpOiBQcm9taXNlPElSZXNwb25zZTxJUGVyZm9ybWVyPj4ge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9wZXJmb3JtZXJzL2JhbmstdHJhbnNmZXIvdXBkYXRlJywgcGF5bG9hZCk7XG4gIH1cblxuICB1cGRhdGVEaXJlY3REZXBvc3QocGF5bG9hZCk6IFByb21pc2U8SVJlc3BvbnNlPElQZXJmb3JtZXI+PiB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3BlcmZvcm1lcnMvZGlyZWN0LWRlcG9zaXQvdXBkYXRlJywgcGF5bG9hZCk7XG4gIH1cblxuICB1cGRhdGVQYXh1bShwYXlsb2FkKTogUHJvbWlzZTxJUmVzcG9uc2U8SVBlcmZvcm1lcj4+IHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvcGVyZm9ybWVycy9wYXh1bS91cGRhdGUnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHVwZGF0ZUJpdHBheShwYXlsb2FkKTogUHJvbWlzZTxJUmVzcG9uc2U8SVBlcmZvcm1lcj4+IHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvcGVyZm9ybWVycy9iaXRwYXkvdXBkYXRlJywgcGF5bG9hZCk7XG4gIH1cblxuICB1cGRhdGVTdHJlYW1pbmdTdGF0dXMocGF5bG9hZDoge1xuICAgIHN0YXR1czogc3RyaW5nO1xuICB9KTogUHJvbWlzZTxJUmVzcG9uc2U8SVBlcmZvcm1lcj4+IHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvcGVyZm9ybWVycy9zdHJlYW1pbmctc3RhdHVzL3VwZGF0ZScsIHBheWxvYWQpO1xuICB9XG5cbiAgZ2VvQmxvY2socGF5bG9hZDoge3VzZXJJZHM/OiBzdHJpbmdbXSwgY291bnRyaWVzPzogc3RyaW5nW119KTogUHJvbWlzZTxJUmVzcG9uc2U8YW55Pj4ge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9wZXJmb3JtZXJzL2Jsb2NraW5nL3VwZGF0ZScsIHBheWxvYWQpO1xuICB9XG5cbiAgZ2V0QmxvY2tlZExpc3QoKTogUHJvbWlzZTxJUmVzcG9uc2U8YW55Pj4ge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvcGVyZm9ybWVycy9ibG9ja2luZycpKTtcbiAgfVxuXG4gIGluY3JlYXNlVmlldyhwZXJmb3JtZXJJZCkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC9wZXJmb3JtZXJzLyR7cGVyZm9ybWVySWR9L2luYy12aWV3YCk7XG4gIH1cblxuICB1cGRhdGVEZWZhdWx0UHJpY2UocGF5bG9hZCk6IFByb21pc2U8SVJlc3BvbnNlPElQZXJmb3JtZXI+PiB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3BlcmZvcm1lcnMvZGVmYXVsdC1wcmljZS91cGRhdGUnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHVwZGF0ZUJyb2FkY2FzdFNldHRpbmcocGF5bG9hZCk6IFByb21pc2U8SVJlc3BvbnNlPGFueT4+IHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvcGVyZm9ybWVycy9icm9hZGNhc3Qtc2V0dGluZy91cGRhdGUnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHN1c3BlbmRBY2NvdW50KHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvcGVyZm9ybWVycy9zdXNwZW5kLWFjY291bnQnLCB7IHBhc3N3b3JkIH0pO1xuICB9XG5cbiAgY2hlY2tCbG9jayhwZXJmb3JtZXJJZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvcGVyZm9ybWVycy8ke3BlcmZvcm1lcklkfS9jaGVjay1ibG9ja2luZ2ApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBHRU5OREVSX1BFUkZPUk1FUiA9IFsnZmVtYWxlJywgJ3RyYW5zZ2VuZGVyJywgJ21hbGUnXTtcblxuZXhwb3J0IGNvbnN0IHBlcmZvcm1lclNlcnZpY2UgPSBuZXcgUGVyZm9ybWVyU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgb21pdCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBpc1VybCB9IGZyb20gJ0BsaWIvc3RyaW5nJztcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcbmltcG9ydCB7IFRPS0VOIH0gZnJvbSAnc3JjL3NlcnZpY2VzL2FwaS1yZXF1ZXN0JztcbmltcG9ydCB7XG4gIElSZXNwb25zZSxcbiAgSVBlcmZvcm1lclBob3RvUGF5bG9hZCxcbiAgSURhdGFSZXNwb25zZSxcbiAgSVBob3RvXG59IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcbmltcG9ydCB7IGdldEdsb2JhbENvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcblxuZXhwb3J0IGNsYXNzIFBob3RvU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBzZWFyY2gocGFyYW1zPzoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcbiAgfSk6IFByb21pc2U8SVJlc3BvbnNlPElEYXRhUmVzcG9uc2U8SVBob3RvPj4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXQoXG4gICAgICB0aGlzLmJ1aWxkVXJsKCcvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvcGhvdG9zL3NlYXJjaCcsIHBhcmFtcylcbiAgICApO1xuICB9XG5cbiAgc2VhcmNoQnlHYWxsZXJ5KFxuICAgIGdhbGxlcnlJZDogc3RyaW5nLFxuICAgIHBhcmFtcz86IHtcbiAgICAgIFtrZXk6IHN0cmluZ106IGFueTtcbiAgICB9LFxuICAgIGhlYWRlcnM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gICkge1xuICAgIHJldHVybiB0aGlzLmdldChcbiAgICAgIHRoaXMuYnVpbGRVcmwoXG4gICAgICAgIGAvdXNlci9wZXJmb3JtZXItYXNzZXRzL3Bob3Rvcy8ke2dhbGxlcnlJZH0vc2VhcmNoYCxcbiAgICAgICAgcGFyYW1zXG4gICAgICApLFxuICAgICAgaGVhZGVyc1xuICAgICk7XG4gIH1cblxuICBkZXRhaWxzKGlkOiBzdHJpbmcsIGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvcGhvdG9zLyR7aWR9L3ZpZXdgLCBoZWFkZXJzKTtcbiAgfVxuXG4gIG15UGhvdG9zKHF1ZXJ5PzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldChcbiAgICAgIHRoaXMuYnVpbGRVcmwoJy9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9waG90b3Mvc2VhcmNoJywgcXVlcnkpXG4gICAgKTtcbiAgfVxuXG4gIHJlbW92ZShpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVsKGAvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvcGhvdG9zLyR7aWR9YCk7XG4gIH1cblxuICBjcmVhdGUoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgZGF0YTogSVBlcmZvcm1lclBob3RvUGF5bG9hZCxcbiAgICBvcHRpb25zOiB7IG9uUHJvZ3Jlc3M6IEZ1bmN0aW9uIH0gPSB7XG4gICAgICBvblByb2dyZXNzKCkge31cbiAgICB9XG4gICk6IFByb21pc2U8SVJlc3BvbnNlPGFueT4+IHtcbiAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50Lmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgICBvcHRpb25zLm9uUHJvZ3Jlc3Moe1xuICAgICAgICAgICAgcGVyY2VudGFnZTogKGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsKSAqIDEwMFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmVxLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSByZXEuc3RhdHVzID49IDIwMCAmJiByZXEuc3RhdHVzIDwgMzAwO1xuICAgICAgICBjb25zdCB7IHJlc3BvbnNlIH0gPSByZXE7XG4gICAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICAgIHJldHVybiByZWplY3QocmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgICByZWplY3QocmVxLnJlc3BvbnNlKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgLy8gZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSwgZmlsZS5uYW1lKTtcbiAgICAgIGlmIChkYXRhLnBob3RvKSB7XG4gICAgICAgIGNvbnN0IHBob3RvID0gZGF0YS5waG90by5maWxlLm9yaWdpbkZpbGVPYmo7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncGhvdG8nLCBwaG90bywgcGhvdG8ubmFtZSk7XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5rZXlzKG9taXQoZGF0YSwgWydwaG90byddKSkuZm9yRWFjaCgodikgPT4ge1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQodiwgZGF0YVt2XSk7XG4gICAgICB9KTtcblxuICAgICAgcmVxLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcbiAgICAgIHJlcS5vcGVuKCdQT1NUJywgaXNVcmwodXJsKSA/IHVybCA6IGAke2NvbmZpZy5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlR9JHt1cmx9YCk7XG5cbiAgICAgIGNvbnN0IHRva2VuOiBhbnkgPSBjb29raWUuZ2V0KFRPS0VOKTtcbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICByZXEuc2V0UmVxdWVzdEhlYWRlcignQXV0aG9yaXphdGlvbicsIHRva2VuKTtcbiAgICAgIH1cbiAgICAgIHJlcS5zZW5kKGZvcm1EYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZShcbiAgICB1cmw6IHN0cmluZyxcbiAgICBkYXRhOiBJUGVyZm9ybWVyUGhvdG9QYXlsb2FkLFxuICAgIG9wdGlvbnM6IHsgb25Qcm9ncmVzczogRnVuY3Rpb24gfSA9IHtcbiAgICAgIG9uUHJvZ3Jlc3MoKSB7fVxuICAgIH1cbiAgKTogUHJvbWlzZTxJUmVzcG9uc2U8YW55Pj4ge1xuICAgIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgcmVxLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQubGVuZ3RoQ29tcHV0YWJsZSkge1xuICAgICAgICAgIG9wdGlvbnMub25Qcm9ncmVzcyh7XG4gICAgICAgICAgICBwZXJjZW50YWdlOiAoZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWwpICogMTAwXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXEuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IHJlcS5zdGF0dXMgPj0gMjAwICYmIHJlcS5zdGF0dXMgPCAzMDA7XG4gICAgICAgIGNvbnN0IHsgcmVzcG9uc2UgfSA9IHJlcTtcbiAgICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChyZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgfSk7XG5cbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG4gICAgICAgIHJlamVjdChyZXEucmVzcG9uc2UpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAvLyBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlLCBmaWxlLm5hbWUpO1xuICAgICAgaWYgKGRhdGEucGhvdG8gJiYgZGF0YS5waG90by5maWxlKSB7XG4gICAgICAgIGNvbnN0IHBob3RvID0gZGF0YS5waG90by5maWxlLm9yaWdpbkZpbGVPYmo7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncGhvdG8nLCBwaG90bywgcGhvdG8ubmFtZSk7XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5rZXlzKG9taXQoZGF0YSwgWydwaG90byddKSkuZm9yRWFjaCgodikgPT4ge1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQodiwgZGF0YVt2XSk7XG4gICAgICB9KTtcblxuICAgICAgcmVxLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcbiAgICAgIHJlcS5vcGVuKCdQVVQnLCBpc1VybCh1cmwpID8gdXJsIDogYCR7Y29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0ke3VybH1gKTtcblxuICAgICAgY29uc3QgdG9rZW46IGFueSA9IGNvb2tpZS5nZXQoVE9LRU4pO1xuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKCdBdXRob3JpemF0aW9uJywgdG9rZW4pO1xuICAgICAgfVxuICAgICAgcmVxLnNlbmQoZm9ybURhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgdXBsb2FkSW1hZ2VzKGZpbGU6IEZpbGUsIHBheWxvYWQ6IGFueSwgb25Qcm9ncmVzcz86IEZ1bmN0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMudXBsb2FkKFxuICAgICAgJy9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9waG90b3MvdXBsb2FkJyxcbiAgICAgIFtcbiAgICAgICAge1xuICAgICAgICAgIGZpZWxkbmFtZTogJ3Bob3RvJyxcbiAgICAgICAgICBmaWxlXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICB7XG4gICAgICAgIG9uUHJvZ3Jlc3MsXG4gICAgICAgIGN1c3RvbURhdGE6IHBheWxvYWRcbiAgICAgIH1cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBwaG90b1NlcnZpY2UgPSBuZXcgUGhvdG9TZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBJUG9zdFNlYXJjaCB9IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIFBvc3RTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIHNlYXJjaChxdWVyeTogSVBvc3RTZWFyY2gpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3Bvc3RzL3NlYXJjaCcsIHF1ZXJ5IGFzIGFueSkpO1xuICB9XG5cbiAgZmluZEJ5SWQoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmdldChgL3Bvc3RzLyR7aWR9YCk7XG4gIH1cblxuICBjcmVhdGVDb250YWN0Q290ZW50KGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvY29udGFjdCcsIHsgLi4uZGF0YSB9KTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcG9zdFNlcnZpY2UgPSBuZXcgUG9zdFNlcnZpY2UoKTtcbiIsImltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIFByb2R1Y3RTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIGRldGFpbHMoaWQ6IHN0cmluZywgaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvcHJvZHVjdHMvJHtpZH0vdmlld2AsIGhlYWRlcnMpO1xuICB9XG5cbiAgc2VhcmNoKHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3VzZXIvcGVyZm9ybWVyLWFzc2V0cy9wcm9kdWN0cy9zZWFyY2gnLCBwYXJhbXMpKTtcbiAgfVxuXG4gIHB1cmNoYXNlZChwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9wdXJjaGFzZWQtaXRlbXMvdXNlci9wcm9kdWN0cycsIHBhcmFtcykpO1xuICB9XG5cbiAgZ2V0RG93bmxvYWRMaW5rKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC91c2VyL3BlcmZvcm1lci1hc3NldHMvcHJvZHVjdHMvJHtpZH0vZG93bmxvYWQtbGlua2ApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBwcm9kdWN0U2VydmljZSA9IG5ldyBQcm9kdWN0U2VydmljZSgpO1xuIiwiaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5leHBvcnQgY2xhc3MgUHVyY2hhc2VJdGVtU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBzZWFyY2gocXVlcnkpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3B1cmNoYXNlZC1pdGVtcy91c2VyL3NlYXJjaCcsIHF1ZXJ5KSk7XG4gIH1cblxuICBwdXJjaGFzZUl0ZW0oaWQ6IHN0cmluZywgdHlwZTogc3RyaW5nLCBkYXRhPzogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL3B1cmNoYXNlLWl0ZW1zLyR7dHlwZX0vJHtpZH1gLCBkYXRhKTtcbiAgfVxuXG4gIHB1cmNoYXNlUHJvZHVjdChpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL3B1cmNoYXNlLWl0ZW1zL3Byb2R1Y3QvJHtpZH1gKTtcbiAgfVxuXG4gIHB1cmNoYXNlVmlkZW8oaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC9wdXJjaGFzZS1pdGVtcy92aWRlby8ke2lkfWApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBwdXJjaGFzZUl0ZW1TZXJ2aWNlID0gbmV3IFB1cmNoYXNlSXRlbVNlcnZpY2UoKTtcbiIsImltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIFJlZnVuZFJlcXVlc3RTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIGNyZWF0ZShkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3JlZnVuZC1yZXF1ZXN0cycsIGRhdGEpO1xuICB9XG5cbiAgc2VhcmNoKHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3JlZnVuZC1yZXF1ZXN0cy9zZWFyY2gnLCBwYXJhbXMpKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVmdW5kUmVxdWVzdFNlcnZpY2UgPSBuZXcgUmVmdW5kUmVxdWVzdFNlcnZpY2UoKTtcbiIsImltcG9ydCB7IElTZXR0aW5nLCBJQ291bnRyaWVzIH0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgQVBJUmVxdWVzdCwgSVJlc3BvbnNlIH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBTZXR0aW5nU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBhbGwoZ3JvdXAgPSAnJyk6IFByb21pc2U8SVJlc3BvbnNlPElTZXR0aW5nPj4ge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvc2V0dGluZ3MvcHVibGljJywgeyBncm91cCB9KSk7XG4gIH1cblxuICBnZXRDb3VudHJpZXMoKTogUHJvbWlzZTxJUmVzcG9uc2U8SUNvdW50cmllc1tdPj4ge1xuICAgIHJldHVybiB0aGlzLmdldCgnL2NvdW50cmllcy9saXN0Jyk7XG4gIH1cblxuICBnZXRUaW1lem9uZXMoKTogUHJvbWlzZTxJUmVzcG9uc2U8c3RyaW5nW10+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KCcvdGltZXpvbmVzL2xpc3QnKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2V0dGluZ1NlcnZpY2UgPSBuZXcgU2V0dGluZ1NlcnZpY2UoKTtcbiIsImltcG9ydCB7IElPbmVUaW1lVG9rZW4sIFN0cmVhbVNldHRpbmdzIH0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgZ2V0UmVzcG9uc2VFcnJvciB9IGZyb20gJ3NyYy9saWInO1xuaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5jbGFzcyBTdHJlYW1TZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIGdldFNlc3Npb25JZChpZDogc3RyaW5nLCB0eXBlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9zdHJlYW1pbmcvc2Vzc2lvbi8ke2lkfS8ke3R5cGV9YCk7XG4gIH1cblxuICBnb0xpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3N0cmVhbWluZy9saXZlJyk7XG4gIH1cblxuICBqb2luUHVibGljQ2hhdChwZXJmb3JtZXJJZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL3N0cmVhbWluZy9qb2luLyR7cGVyZm9ybWVySWR9YCk7XG4gIH1cblxuICByZXF1ZXN0UHJpdmF0ZUNoYXQocGVyZm9ybWVySWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC9zdHJlYW1pbmcvcHJpdmF0ZS1jaGF0LyR7cGVyZm9ybWVySWR9YCk7XG4gIH1cblxuICBhY2NlcHRQcml2YXRlQ2hhdChpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvc3RyZWFtaW5nL3ByaXZhdGUtY2hhdC8ke2lkfWApO1xuICB9XG5cbiAgc3RhcnRHcm91cENoYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3N0cmVhbWluZy9ncm91cC1jaGF0Jyk7XG4gIH1cblxuICBqb2luR3JvdXBDaGF0KGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9zdHJlYW1pbmcvZ3JvdXAtY2hhdC8ke2lkfWApO1xuICB9XG5cbiAgZ2VuZXJhdGVPbmVUaW1lVG9rZW4oZGF0YTogSU9uZVRpbWVUb2tlbikge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9zdHJlYW1pbmcvdG9rZW4nLCBkYXRhKTtcbiAgfVxuXG4gIGFzeW5jIGdldFB1Ymxpc2hUb2tlbihvcHRpb25zOiB7XG4gICAgc3RyZWFtSWQ6IHN0cmluZyxcbiAgICBzZXR0aW5nczogU3RyZWFtU2V0dGluZ3NcbiAgICB9LCBleHBpcmVEYXRlID0gbW9tZW50KCkuYWRkKDEsICdkJykudG9EYXRlKCkuZ2V0VGltZSgpKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBzZXR0aW5ncywgc3RyZWFtSWQgfSA9IG9wdGlvbnM7XG4gICAgICBjb25zdCB7IHNlY3VyZU9wdGlvbiB9ID0gc2V0dGluZ3M7XG4gICAgICBpZiAoc2VjdXJlT3B0aW9uKSB7XG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCB0aGlzLmdlbmVyYXRlT25lVGltZVRva2VuKHtcbiAgICAgICAgICBpZDogc3RyZWFtSWQsXG4gICAgICAgICAgdHlwZTogJ3B1Ymxpc2gnLFxuICAgICAgICAgIGV4cGlyZURhdGVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXNwLmRhdGEudG9rZW5JZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zdCBlcnJvciA9IGF3YWl0IFByb21pc2UucmVzb2x2ZShlcnIpO1xuICAgICAgbWVzc2FnZS5lcnJvcihnZXRSZXNwb25zZUVycm9yKGVycm9yKSk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRTdWJzY3JpYmVyVG9rZW4ob3B0aW9uczoge1xuICAgIHN0cmVhbUlkOiBzdHJpbmcsXG4gICAgc2V0dGluZ3M6IFN0cmVhbVNldHRpbmdzXG4gICAgfSwgZXhwaXJlRGF0ZSA9IG1vbWVudCgpLmFkZCgxLCAnZCcpLnRvRGF0ZSgpLmdldFRpbWUoKSk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgc2V0dGluZ3MsIHN0cmVhbUlkIH0gPSBvcHRpb25zO1xuICAgICAgY29uc3QgeyBzZWN1cmVPcHRpb24gfSA9IHNldHRpbmdzO1xuICAgICAgaWYgKHNlY3VyZU9wdGlvbikge1xuICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgdGhpcy5nZW5lcmF0ZU9uZVRpbWVUb2tlbih7XG4gICAgICAgICAgaWQ6IHN0cmVhbUlkLFxuICAgICAgICAgIHR5cGU6ICdwbGF5JyxcbiAgICAgICAgICBleHBpcmVEYXRlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzcC5kYXRhLnRva2VuSWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc3QgZXJyb3IgPSBhd2FpdCBQcm9taXNlLnJlc29sdmUoZXJyKTtcbiAgICAgIG1lc3NhZ2UuZXJyb3IoZ2V0UmVzcG9uc2VFcnJvcihlcnJvcikpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0TGl2ZVN0cmVhbU9yVm9kVVJMKG9wdGlvbnM6IHtcbiAgICBzdHJlYW1JZDogc3RyaW5nLFxuICAgIHNldHRpbmdzOiBTdHJlYW1TZXR0aW5ncyxcbiAgICBhcHBOYW1lOiBzdHJpbmdcbiAgICB9LCBleHBpcmVEYXRlID0gbW9tZW50KCkuYWRkKDEsICdkJykudG9EYXRlKCkuZ2V0VGltZSgpLCBfcGxheWVyID0gJ2hscycpIHtcbiAgICAvLyBodHRwOi8vW0lQX0FkZHJlc3NdLzxBcHBsaWNhdGlvbl9OYW1lPi9zdHJlYW1zL3N0cmVhbUlELm1wND90b2tlbj10b2tlbklkXG4gICAgLy8gaHR0cDovL1tJUF9BZGRyZXNzXS88QXBwbGljYXRpb25fTmFtZT4vc3RyZWFtcy9zdHJlYW1JRC5tM3U4P3Rva2VuPXRva2VuSWRcbiAgICAvLyBodHRwOi8vW0lQX0FkZHJlc3NdLzxBcHBsaWNhdGlvbl9OYW1lPi9wbGF5Lmh0bWw/bmFtZT1zdHJlYW1JRCZwbGF5T3JkZXI9aGxzJnRva2VuPXRva2VuSWRcbiAgICB0cnkge1xuICAgICAgLy8gY29uc3Qgc3JjID0gYGh0dHBzOi8vJHt2aWV3ZXJVUkx9OjU0NDMvJHthcHBOYW1lfS9zdHJlYW1zLyR7c3RyZWFtSWR9Lm0zdTgke29uZVRpbWVUb2tlbiA/IGA/dG9rZW49JHtvbmVUaW1lVG9rZW59YCA6ICcnfWA7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2hhZG93XG4gICAgICBjb25zdCB7IGFwcE5hbWUsIHNldHRpbmdzLCBzdHJlYW1JZCB9ID0gb3B0aW9ucztcbiAgICAgIGNvbnN0IHsgc2VjdXJlT3B0aW9uLCB2aWV3ZXJVUkwgfSA9IHNldHRpbmdzO1xuICAgICAgY29uc3QgZXh0ZW5zaW9uID0gX3BsYXllciA9PT0gJ2hscycgPyAnbTN1OCcgOiAnbXA0JztcbiAgICAgIGlmICghdmlld2VyVVJMIHx8ICFhcHBOYW1lKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cblxuICAgICAgbGV0IG9uZVRpbWVUb2tlbiA9ICcnO1xuICAgICAgaWYgKHNlY3VyZU9wdGlvbikge1xuICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgdGhpcy5nZW5lcmF0ZU9uZVRpbWVUb2tlbih7XG4gICAgICAgICAgaWQ6IHN0cmVhbUlkLFxuICAgICAgICAgIHR5cGU6ICdwbGF5JyxcbiAgICAgICAgICBleHBpcmVEYXRlXG4gICAgICAgIH0pO1xuICAgICAgICBvbmVUaW1lVG9rZW4gPSByZXNwLmRhdGEudG9rZW5JZDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBwcm90b2NvbCB9ID0gd2luZG93LmxvY2F0aW9uO1xuICAgICAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHt2aWV3ZXJVUkx9LyR7YXBwTmFtZX0vc3RyZWFtcy8ke3N0cmVhbUlkfS4ke2V4dGVuc2lvbn0ke29uZVRpbWVUb2tlbiA/IGA/dG9rZW49JHtvbmVUaW1lVG9rZW59YCA6ICcnfWA7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zdCBlcnJvciA9IGF3YWl0IFByb21pc2UucmVzb2x2ZShlcnIpO1xuICAgICAgbWVzc2FnZS5lcnJvcihnZXRSZXNwb25zZUVycm9yKGVycm9yKSk7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzdHJlYW1TZXJ2aWNlID0gbmV3IFN0cmVhbVNlcnZpY2UoKTtcbiIsImltcG9ydCB7IElTdHVkaW8gfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBBUElSZXF1ZXN0LCBJUmVzcG9uc2UgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcbmltcG9ydCB7IGdldEdsb2JhbENvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcblxuZXhwb3J0IGNsYXNzIFN0dWRpb1NlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgbWUoaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pOiBQcm9taXNlPElSZXNwb25zZTxJU3R1ZGlvPj4ge1xuICAgIHJldHVybiB0aGlzLmdldCgnL3N0dWRpby9tZScsIGhlYWRlcnMpO1xuICB9XG5cbiAgdXBkYXRlKHBheWxvYWQ6IGFueSkge1xuICAgIHJldHVybiB0aGlzLnB1dCgnL3N0dWRpby91cGRhdGUnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHVwZGF0ZVBheW1lbnRJbmZvKHBheWxvYWQpOiBQcm9taXNlPElSZXNwb25zZTxJU3R1ZGlvPj4ge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9zdHVkaW8vYmFuay10cmFuc2Zlci91cGRhdGUnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHVwZGF0ZURpcmVjdERlcG9zdChwYXlsb2FkKTogUHJvbWlzZTxJUmVzcG9uc2U8SVN0dWRpbz4+IHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvc3R1ZGlvL2RpcmVjdC1kZXBvc2l0L3VwZGF0ZScsIHBheWxvYWQpO1xuICB9XG5cbiAgdXBkYXRlUGF4dW0ocGF5bG9hZCk6IFByb21pc2U8SVJlc3BvbnNlPElTdHVkaW8+PiB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3N0dWRpby9wYXh1bS91cGRhdGUnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHVwZGF0ZUJpdHBheShwYXlsb2FkKTogUHJvbWlzZTxJUmVzcG9uc2U8SVN0dWRpbz4+IHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvc3R1ZGlvL2JpdHBheS91cGRhdGUnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIGdldENvbW1pc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KCcvc2V0dGluZ3Mvc3R1ZGlvL2NvbW1pc3Npb24nKTtcbiAgfVxuXG4gIGFkZE1vZGVsKHBheWxvYWQpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvc3R1ZGlvL21lbWJlcnMnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIGdldE1lbWJlcnMocGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvc3R1ZGlvL21lbWJlcnMnLCBwYXJhbXMpKTtcbiAgfVxuXG4gIGdldE1lbWJlckNvbW1pc3Npb25zKHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3N0dWRpby9jb21taXNzaW9uJywgcGFyYW1zKSk7XG4gIH1cblxuICB1cGRhdGVNZW1iZXJDb21taXNzaW9uKGlkOiBzdHJpbmcsIHBheWxvYWQ6IGFueSkge1xuICAgIHJldHVybiB0aGlzLnB1dChgL3N0dWRpby9jb21taXNzaW9uL21lbWJlci8ke2lkfWAsIHBheWxvYWQpO1xuICB9XG5cbiAgZ2V0UGVyZm9ybWVyUmVxdWVzdChwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KFxuICAgICAgdGhpcy5idWlsZFVybCgnL3BheW91dC1yZXF1ZXN0cy9zdHVkaW8vcGVyZm9ybWVyLXJlcXVlc3QnLCBwYXJhbXMpXG4gICAgKTtcbiAgfVxuXG4gIHVwZGF0ZVN0YXR1c1BlcmZvcm1lclJlcXVlc3QoaWQ6IHN0cmluZywgcGF5bG9hZCkge1xuICAgIHJldHVybiB0aGlzLnB1dChgL3BheW91dC1yZXF1ZXN0cy9zdHVkaW8vdXBkYXRlLyR7aWR9YCwgeyAuLi5wYXlsb2FkIH0pO1xuICB9XG5cbiAgdXBkYXRlTWVtYmVyU3RhdHVzKGlkOiBzdHJpbmcsIHN0YXR1czogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL3N0dWRpby9tZW1iZXJzLyR7aWR9LyR7c3RhdHVzfWApO1xuICB9XG5cbiAgc3RhdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KCcvc3R1ZGlvL3N0YXRzJyk7XG4gIH1cblxuICBnZXREb2N1bWVudHNVcGxvYWRVcmwoKSB7XG4gICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG4gICAgcmV0dXJuIGAke2NvbmZpZy5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlR9L3N0dWRpby9kb2N1bWVudHMvdXBsb2FkYDtcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc3R1ZGlvU2VydmljZSA9IG5ldyBTdHVkaW9TZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBUb2tlblBhY2thZ2VTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIHNlYXJjaChwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9wYWNrYWdlL3Rva2VuL3NlYXJjaCcsIHBhcmFtcykpO1xuICB9XG5cbiAgYnV5VG9rZW5zKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvcGF5bWVudC9wdXJjaGFzZS10b2tlbnMvJHtpZH1gKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdG9rZW5QYWNrYWdlU2VydmljZSA9IG5ldyBUb2tlblBhY2thZ2VTZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBUcmFuc2FjdGlvblNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgc2VhcmNoKHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3RyYW5zYWN0aW9ucy91c2VyL3NlYXJjaCcsIHBhcmFtcykpO1xuICB9XG5cbiAgc2VuZFRpcFRva2VuKHBlcmZvcm1lcklkOiBzdHJpbmcsIHRva2VuOiBudW1iZXIsIGNvbnZlcnNhdGlvbklkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL21lbWJlci9zZW5kLXRpcC10b2tlbi8ke3BlcmZvcm1lcklkfWAsIHsgdG9rZW4sIGNvbnZlcnNhdGlvbklkIH0pO1xuICB9XG5cbiAgcHVibGljIHNlbmRQYWlkVG9rZW4oY29udmVyc2F0aW9uSWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC9tZW1iZXIvc2VuZC1wYXktdG9rZW4vJHtjb252ZXJzYXRpb25JZH1gKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdHJhbnNhY3Rpb25TZXJ2aWNlID0gbmV3IFRyYW5zYWN0aW9uU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgSVVzZXIgfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBBUElSZXF1ZXN0LCBJUmVzcG9uc2UgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcbmltcG9ydCB7IGdldEdsb2JhbENvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcblxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIG1lKGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KTogUHJvbWlzZTxJUmVzcG9uc2U8SVVzZXI+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KCcvdXNlcnMvbWUnLCBoZWFkZXJzKTtcbiAgfVxuXG4gIHVwZGF0ZU1lKHBheWxvYWQ6IGFueSkge1xuICAgIHJldHVybiB0aGlzLnB1dCgnL3VzZXJzJywgcGF5bG9hZCk7XG4gIH1cblxuICBnZXRBdmF0YXJVcGxvYWRVcmwodXNlcklkPzogc3RyaW5nKSB7XG4gICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG4gICAgaWYgKHVzZXJJZCkge1xuICAgICAgcmV0dXJuIGAke2NvbmZpZy5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlR9L3VzZXJzLyR7dXNlcklkfS9hdmF0YXIvdXBsb2FkYDtcbiAgICB9XG4gICAgcmV0dXJuIGAke2NvbmZpZy5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlR9L3VzZXJzL2F2YXRhci91cGxvYWRgO1xuICB9XG5cbiAgc2VhcmNoKHF1ZXJ5PzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvdXNlcnMvc2VhcmNoJywgcXVlcnkpKTtcbiAgfVxuXG4gIGZpbmRCeUlkKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC91c2Vycy92aWV3LyR7aWR9YCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHVzZXJTZXJ2aWNlID0gbmV3IFVzZXJTZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBJQ291bnRyeSwgSUxhbmdndWdlcywgSVBob25lQ29kZXMgfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBBUElSZXF1ZXN0LCBJUmVzcG9uc2UgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIFV0aWxzU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBjb3VudHJpZXNMaXN0KCk6IFByb21pc2U8SVJlc3BvbnNlPElDb3VudHJ5Pj4ge1xuICAgIHJldHVybiB0aGlzLmdldCgnL2NvdW50cmllcy9saXN0Jyk7XG4gIH1cblxuICBsYW5ndWFnZXNMaXN0KCk6IFByb21pc2U8SVJlc3BvbnNlPElMYW5nZ3VnZXM+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KCcvbGFuZ3VhZ2VzL2xpc3QnKTtcbiAgfVxuXG4gIHBob25lQ29kZXNMaXN0KCk6IFByb21pc2U8SVJlc3BvbnNlPElQaG9uZUNvZGVzPj4ge1xuICAgIHJldHVybiB0aGlzLmdldCgnL3Bob25lLWNvZGVzL2xpc3QnKTtcbiAgfVxuXG4gIHN0YXRpc3RpY3MoKTogUHJvbWlzZTxJUmVzcG9uc2U8YW55Pj4ge1xuICAgIHJldHVybiB0aGlzLmdldCgnL3N0YXRpc3RpY3MvYWRtaW4nKTtcbiAgfVxuXG4gIHZlcmlmeVJlY2FwdGNoYSh0b2tlbjogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3JlLWNhcHRjaGEvdmVyaWZ5JywgeyB0b2tlbiB9KTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdXRpbHNTZXJ2aWNlID0gbmV3IFV0aWxzU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgSVJlc3BvbnNlLCBJUGVyZm9ybWVyVmlkZW9QYXlsb2FkIH0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgVE9LRU4gfSBmcm9tICdzcmMvc2VydmljZXMvYXBpLXJlcXVlc3QnO1xuaW1wb3J0IHsgb21pdCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBpc1VybCB9IGZyb20gJ0BsaWIvc3RyaW5nJztcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcbmltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcbmltcG9ydCB7IGdldEdsb2JhbENvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcblxuZXhwb3J0IGNsYXNzIFZpZGVvU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBzZWFyY2gocGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldChcbiAgICAgIHRoaXMuYnVpbGRVcmwoJy91c2VyL3BlcmZvcm1lci1hc3NldHMvdmlkZW9zL3NlYXJjaCcsIHBhcmFtcylcbiAgICApO1xuICB9XG5cbiAgcHVyY2hhc2VkKHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoXG4gICAgICB0aGlzLmJ1aWxkVXJsKCcvcHVyY2hhc2VkLWl0ZW1zL3VzZXIvdmlkZW9zJywgcGFyYW1zKVxuICAgICk7XG4gIH1cblxuICBkZXRhaWxzKGlkOiBzdHJpbmcsIGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvdmlkZW9zLyR7aWR9L3ZpZXdgLCBoZWFkZXJzKTtcbiAgfVxuXG4gIG15VmlkZW9zKHF1ZXJ5PzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldChcbiAgICAgIHRoaXMuYnVpbGRVcmwoJy9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy92aWRlb3Mvc2VhcmNoJywgcXVlcnkpXG4gICAgKTtcbiAgfVxuXG4gIHJlbW92ZU15VmlkZW8oaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmRlbChgL3BlcmZvcm1lci9wZXJmb3JtZXItYXNzZXRzL3ZpZGVvcy8ke2lkfWApO1xuICB9XG5cbiAgY3JlYXRlKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGRhdGE6IElQZXJmb3JtZXJWaWRlb1BheWxvYWQsXG4gICAgb3B0aW9uczogeyBvblByb2dyZXNzOiBGdW5jdGlvbiB9ID0ge1xuICAgICAgb25Qcm9ncmVzcygpIHt9XG4gICAgfVxuICApOiBQcm9taXNlPElSZXNwb25zZTxhbnk+PiB7XG4gICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5sZW5ndGhDb21wdXRhYmxlKSB7XG4gICAgICAgICAgb3B0aW9ucy5vblByb2dyZXNzKHtcbiAgICAgICAgICAgIHBlcmNlbnRhZ2U6IChldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCkgKiAxMDBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJlcS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBzdWNjZXNzID0gcmVxLnN0YXR1cyA+PSAyMDAgJiYgcmVxLnN0YXR1cyA8IDMwMDtcbiAgICAgICAgY29uc3QgeyByZXNwb25zZSB9ID0gcmVxO1xuICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgcmVxLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICAgICAgcmVqZWN0KHJlcS5yZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIC8vIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUsIGZpbGUubmFtZSk7XG4gICAgICBpZiAoZGF0YS52aWRlbykge1xuICAgICAgICBjb25zdCB2aWRlbyA9IGRhdGEudmlkZW8uZmlsZS5vcmlnaW5GaWxlT2JqO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3ZpZGVvJywgdmlkZW8sIHZpZGVvLm5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YS50cmFpbGVyKSB7XG4gICAgICAgIGNvbnN0IHRyYWlsZXIgPSBkYXRhLnRyYWlsZXIuZmlsZS5vcmlnaW5GaWxlT2JqO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3RyYWlsZXInLCB0cmFpbGVyLCB0cmFpbGVyLm5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YS50aHVtYm5haWwpIHtcbiAgICAgICAgY29uc3QgdGh1bWJuYWlsID0gZGF0YS50aHVtYm5haWwuZmlsZS5vcmlnaW5GaWxlT2JqO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3RodW1ibmFpbCcsIHRodW1ibmFpbCwgdGh1bWJuYWlsLm5hbWUpO1xuICAgICAgfVxuXG4gICAgICBPYmplY3Qua2V5cyhvbWl0KGRhdGEsIFsndmlkZW8nLCAndGh1bWJuYWlsJywgJ3RyYWlsZXInXSkpLmZvckVhY2goXG4gICAgICAgICh2KSA9PiB7XG4gICAgICAgICAgZm9ybURhdGEuYXBwZW5kKHYsIGRhdGFbdl0pO1xuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICByZXEucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xuICAgICAgcmVxLm9wZW4oJ1BPU1QnLCBpc1VybCh1cmwpID8gdXJsIDogYCR7Y29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0ke3VybH1gKTtcblxuICAgICAgY29uc3QgdG9rZW46IGFueSA9IGNvb2tpZS5nZXQoVE9LRU4pO1xuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKCdBdXRob3JpemF0aW9uJywgdG9rZW4pO1xuICAgICAgfVxuICAgICAgcmVxLnNlbmQoZm9ybURhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGRhdGE6IElQZXJmb3JtZXJWaWRlb1BheWxvYWQsXG4gICAgb3B0aW9uczogeyBvblByb2dyZXNzOiBGdW5jdGlvbiB9ID0ge1xuICAgICAgb25Qcm9ncmVzcygpIHt9XG4gICAgfVxuICApOiBQcm9taXNlPElSZXNwb25zZTxhbnk+PiB7XG4gICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5sZW5ndGhDb21wdXRhYmxlKSB7XG4gICAgICAgICAgb3B0aW9ucy5vblByb2dyZXNzKHtcbiAgICAgICAgICAgIHBlcmNlbnRhZ2U6IChldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCkgKiAxMDBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJlcS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBzdWNjZXNzID0gcmVxLnN0YXR1cyA+PSAyMDAgJiYgcmVxLnN0YXR1cyA8IDMwMDtcbiAgICAgICAgY29uc3QgeyByZXNwb25zZSB9ID0gcmVxO1xuICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgcmVxLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICAgICAgcmVqZWN0KHJlcS5yZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIC8vIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUsIGZpbGUubmFtZSk7XG4gICAgICBpZiAoZGF0YS52aWRlbyAmJiBkYXRhLnZpZGVvLmZpbGUpIHtcbiAgICAgICAgY29uc3QgdmlkZW8gPSBkYXRhLnZpZGVvLmZpbGUub3JpZ2luRmlsZU9iajtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd2aWRlbycsIHZpZGVvLCB2aWRlby5uYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGEudHJhaWxlciAmJiBkYXRhLnRyYWlsZXIuZmlsZSkge1xuICAgICAgICBjb25zdCB0cmFpbGVyID0gZGF0YS50cmFpbGVyLmZpbGUub3JpZ2luRmlsZU9iajtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd0cmFpbGVyJywgdHJhaWxlciwgdHJhaWxlci5uYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGEudGh1bWJuYWlsICYmIGRhdGEudGh1bWJuYWlsLmZpbGUpIHtcbiAgICAgICAgY29uc3QgdGh1bWJuYWlsID0gZGF0YS50aHVtYm5haWwuZmlsZS5vcmlnaW5GaWxlT2JqO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3RodW1ibmFpbCcsIHRodW1ibmFpbCwgdGh1bWJuYWlsLm5hbWUpO1xuICAgICAgfVxuXG4gICAgICBPYmplY3Qua2V5cyhvbWl0KGRhdGEsIFsndmlkZW8nLCAndGh1bWJuYWlsJywgJ3RyYWlsZXInXSkpLmZvckVhY2goKHYpID0+IHtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKHYsIGRhdGFbdl0pO1xuICAgICAgfSk7XG5cbiAgICAgIHJlcS5yZXNwb25zZVR5cGUgPSAnanNvbic7XG4gICAgICByZXEub3BlbignUFVUJywgaXNVcmwodXJsKSA/IHVybCA6IGAke2NvbmZpZy5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlR9JHt1cmx9YCk7XG5cbiAgICAgIGNvbnN0IHRva2VuOiBhbnkgPSBjb29raWUuZ2V0KFRPS0VOKTtcbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICByZXEuc2V0UmVxdWVzdEhlYWRlcignQXV0aG9yaXphdGlvbicsIHRva2VuKTtcbiAgICAgIH1cbiAgICAgIHJlcS5zZW5kKGZvcm1EYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIGluY3JlYXNlVmlldyhpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL3VzZXIvcGVyZm9ybWVyLWFzc2V0cy92aWRlb3MvJHtpZH0vaW5jLXZpZXdgKTtcbiAgfVxuXG4gIC8vIHVwZGF0ZSh2aWRlb0lkLCBwZXJmb3JtZXJJZCwgZGF0YSkge1xuICAvLyAgIHJldHVybiB0aGlzLnB1dChgL3BlcmZvcm1lci9wZXJmb3JtZXItYXNzZXRzL3ZpZGVvcy8ke3ZpZGVvSWR9YCwge1xuICAvLyAgICAgLi4uZGF0YSxcbiAgLy8gICAgIHBlcmZvcm1lcklkXG4gIC8vICAgfSk7XG4gIC8vIH1cbiAgdXNlckZpbmRWaWRlb0J5SWQoaWQ6IHN0cmluZywgaGVhZGVycyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvdXNlci9wZXJmb3JtZXItYXNzZXRzL3ZpZGVvcy8ke2lkfWAsIGhlYWRlcnMpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCB2aWRlb1NlcnZpY2UgPSBuZXcgVmlkZW9TZXJ2aWNlKCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy11bmZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoLXRvLXJlZ2V4cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1nb29nbGUtcmVjYXB0Y2hhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWFjdGlvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlc2VsZWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=