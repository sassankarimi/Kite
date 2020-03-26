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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.scss":
/*!******************!*\
  !*** ./app.scss ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css":
/*!********************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/css/all.min.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/mdbreact/dist/css/mdb.css":
/*!************************************************!*\
  !*** ./node_modules/mdbreact/dist/css/mdb.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
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
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps
    } = this.props;
    var url = createUrl(router);
    return _react.default.createElement(Component, Object.assign({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/react-image-gallery/styles/css/image-gallery.css":
/*!***********************************************************************!*\
  !*** ./node_modules/react-image-gallery/styles/css/image-gallery.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css":
/*!************************************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/semantic-ui-css/semantic.css":
/*!***************************************************!*\
  !*** ./node_modules/semantic-ui-css/semantic.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/store */ "./redux/store.js");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-redux-saga */ "next-redux-saga");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var mdbreact_dist_css_mdb_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mdbreact/dist/css/mdb.css */ "./node_modules/mdbreact/dist/css/mdb.css");
/* harmony import */ var mdbreact_dist_css_mdb_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(mdbreact_dist_css_mdb_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var semantic_ui_css_semantic_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-css/semantic.css */ "./node_modules/semantic-ui-css/semantic.css");
/* harmony import */ var semantic_ui_css_semantic_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app.scss */ "./app.scss");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_app_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_image_gallery_styles_css_image_gallery_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-image-gallery/styles/css/image-gallery.css */ "./node_modules/react-image-gallery/styles/css/image-gallery.css");
/* harmony import */ var react_image_gallery_styles_css_image_gallery_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_image_gallery_styles_css_image_gallery_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_loader_spinner_dist_loader_css_react_spinner_loader_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-loader-spinner/dist/loader/css/react-spinner-loader.css */ "./node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css");
/* harmony import */ var react_loader_spinner_dist_loader_css_react_spinner_loader_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner_dist_loader_css_react_spinner_loader_css__WEBPACK_IMPORTED_MODULE_12__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 //redux




 //css









class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {
  static async getInitialProps({
    Component,
    ctx
  }) {
    let pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}; //let pageProps = await Component.getInitialProps(ctx)

    return {
      pageProps
    };
  }

  render() {
    const {
      Component,
      pageProps,
      store
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
      store: store
    }, __jsx(Component, pageProps)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default()(_redux_store__WEBPACK_IMPORTED_MODULE_4__["default"])(next_redux_saga__WEBPACK_IMPORTED_MODULE_5___default()(MyApp))); //export default MyApp;

/***/ }),

/***/ "./ports.js":
/*!******************!*\
  !*** ./ports.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  domain: "https://kite.ir/",
  imgDomainRoutes: "https://kite.ir",
  toursRoute: "/tours",
  //domain:"http://kite.pargansystem.com/",
  //imgDomainRoutes:"",
  domainBlog: "https://kite.ir/blog/",
  domainTour: "https://kite.ir/Tour/",
  airportList: "Kite/AirportList",
  hotelList: "kite/hotellist",
  packageList: "kite/GetPackageList",
  getPackageGroup: "kite/GetPackageGroup",
  cityList: "kite/cityList",
  weblogGroups: "Kite/GetWeblogGroup",
  getPackages: "kite/getpackages",
  PackageDetailFromTitle: "Kite/PackageDetailFromTitle",
  GetPackageDetail: "Kite/GetPackageDetail",
  GetPackageRules: "Kite/GetPackageRules",
  userLogin: "kite/userLogin",
  userRegister: "kite/userRegister",
  book: "kite/book",
  GetComment: "Kite/getComments",
  PostComment: "Kite/writeComment"
});

/***/ }),

/***/ "./redux/basicdatas/reducer.js":
/*!*************************************!*\
  !*** ./redux/basicdatas/reducer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const SET_PACKAGE_COLLAPSE = "SET_PACKAGE_COLLAPSE";
const TOGGLE_FLIGHT = "TOGGLE_FLIGHT";
const LOADING_BOOLEAN = "LOADING_BOOLEAN";
const TOGGLE_DEFAULT_FLIGHT = "TOGGLE_DEFAULT_FLIGHT";
const initialstate = {
  cityOrgId: [],
  cityDesId: [],
  //unter des Kommentars ist ein Beispiel
  basicDatas: [],
  name: "",
  loading: false,
  collapseToggle: [],
  toggleFlight: [],
  toggleDefaultFlight: []
};

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case "ADD":
      return _objectSpread({}, state, {
        basicDatas: action.value
      });

    case "ADD_ORG_ID":
      return _objectSpread({}, state, {
        cityOrgId: action.value
      });

    case "ADD_DES_ID":
      return _objectSpread({}, state, {
        cityDesId: action.value
      });

    case "REMOVE":
      return _objectSpread({}, state, {
        basicDatas: []
      });

    case "NAME":
      return _objectSpread({}, state, {
        name: action.value
      });

    case LOADING_BOOLEAN:
      return _objectSpread({}, state, {
        loading: action.value
      });

    case SET_PACKAGE_COLLAPSE:
      return _objectSpread({}, state, {
        collapseToggle: action.value
      });

    case TOGGLE_FLIGHT:
      return _objectSpread({}, state, {
        toggleFlight: action.value
      });

    case TOGGLE_DEFAULT_FLIGHT:
      return _objectSpread({}, state, {
        toggleDefaultFlight: action.value
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./redux/cityList/action.js":
/*!**********************************!*\
  !*** ./redux/cityList/action.js ***!
  \**********************************/
/*! exports provided: loadCity, failure, loadCitySuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCity", function() { return loadCity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "failure", function() { return failure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCitySuccess", function() { return loadCitySuccess; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "./redux/cityList/type.js");

function loadCity() {
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].LOAD_CITY
  };
}
function failure(error) {
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].CITY_FAILURE,
    payload: error
  };
}
function loadCitySuccess(data) {
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].LOAD_CITY_SUCCESS,
    payload: data
  };
}

/***/ }),

/***/ "./redux/cityList/reducer.js":
/*!***********************************!*\
  !*** ./redux/cityList/reducer.js ***!
  \***********************************/
/*! exports provided: exampleInitialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exampleInitialState", function() { return exampleInitialState; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "./redux/cityList/type.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const exampleInitialState = {
  cityList: [],
  error: []
};

function reducer(state = exampleInitialState, action) {
  switch (action.type) {
    case _type__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].CITY_FAILURE:
      return _objectSpread({}, state, {
        error: action.payload,
        cityList: []
      });

    case _type__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].LOAD_CITY_SUCCESS:
      return _objectSpread({}, state, {
        cityList: action.payload,
        error: []
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./redux/cityList/saga.js":
/*!********************************!*\
  !*** ./redux/cityList/saga.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! es6-promise */ "es6-promise");
/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(es6_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action */ "./redux/cityList/action.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./type */ "./redux/cityList/type.js");
/* harmony import */ var _ports__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ports */ "./ports.js");


 //imports




es6_promise__WEBPACK_IMPORTED_MODULE_1___default.a.polyfill(); //CITY worker

function* loadCitySaga() {
  try {
    const res = yield fetch(`${_ports__WEBPACK_IMPORTED_MODULE_5__["default"].domain}${_ports__WEBPACK_IMPORTED_MODULE_5__["default"].cityList}`);
    const data = yield res.json(); //console.log("cities" , data)

    data.sort(a => a.CountryAbbrevation === "IR" ? -1 : 1);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_3__["loadCitySuccess"])(data));
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_3__["failure"])(err));
  }
} //CITY watcher


function* loadCityWatcher() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_type__WEBPACK_IMPORTED_MODULE_4__["actionTypes"].LOAD_CITY, loadCitySaga);
}

/* harmony default export */ __webpack_exports__["default"] = (loadCityWatcher);

/***/ }),

/***/ "./redux/cityList/type.js":
/*!********************************!*\
  !*** ./redux/cityList/type.js ***!
  \********************************/
/*! exports provided: actionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
const actionTypes = {
  CITY_FAILURE: 'CITY_FAILURE',
  LOAD_CITY: 'LOAD_CITY',
  LOAD_CITY_SUCCESS: 'LOAD_CITY_SUCCESS'
};

/***/ }),

/***/ "./redux/payment/reducer.js":
/*!**********************************!*\
  !*** ./redux/payment/reducer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const ADD = "ADD";
const REMOVE = "REMOVE";
const initialstate = {
  paymentObj: []
};

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD:
      return _objectSpread({}, state, {
        paymentObj: action.value
      });

    case REMOVE:
      return _objectSpread({}, state, {
        paymentObj: action.value
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./redux/reducers/index.js":
/*!*********************************!*\
  !*** ./redux/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _basicdatas_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../basicdatas/reducer */ "./redux/basicdatas/reducer.js");
/* harmony import */ var _tourFilters_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tourFilters/reducer */ "./redux/tourFilters/reducer.js");
/* harmony import */ var _payment_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../payment/reducer */ "./redux/payment/reducer.js");
/* harmony import */ var _tourTabs_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tourTabs/reducer */ "./redux/tourTabs/reducer.js");
/* harmony import */ var _cityList_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cityList/reducer */ "./redux/cityList/reducer.js");
/* harmony import */ var _weblogGrid_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../weblogGrid/reducer */ "./redux/weblogGrid/reducer.js");
/* harmony import */ var _rooms_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../rooms/reducer */ "./redux/rooms/reducer.js");
/* harmony import */ var _searchtour_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../searchtour/reducer */ "./redux/searchtour/reducer.js");









/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  basicDatasReducer: _basicdatas_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  tourFilterReducer: _tourFilters_reducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  paymenObject: _payment_reducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  tourTabsReducer: _tourTabs_reducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  cityListReducer: _cityList_reducer__WEBPACK_IMPORTED_MODULE_5__["default"],
  weblogGridReducer: _weblogGrid_reducer__WEBPACK_IMPORTED_MODULE_6__["default"],
  roomsReducer: _rooms_reducer__WEBPACK_IMPORTED_MODULE_7__["default"],
  searchTourReducer: _searchtour_reducer__WEBPACK_IMPORTED_MODULE_8__["default"]
}));

/***/ }),

/***/ "./redux/rooms/reducer.js":
/*!********************************!*\
  !*** ./redux/rooms/reducer.js ***!
  \********************************/
/*! exports provided: exampleInitialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exampleInitialState", function() { return exampleInitialState; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "./redux/rooms/type.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const exampleInitialState = {
  rooms: 1,
  adultArray: [2],
  childArray: [0],
  total: 2,
  child1Count: 0,
  child2Count: 0,
  infantCount: 0,
  selValues: [{
    id: 0,
    adult: 2,
    age: []
  }],
  roomRules: ""
};

function reducer(state = exampleInitialState, action) {
  switch (action.type) {
    case _type__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].SET_ROOMS:
      return _objectSpread({}, state, {
        rooms: action.payload
      });

    case _type__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].SET_TOTAL:
      return _objectSpread({}, state, {
        total: action.payload
      });

    case _type__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].SET_SELVALUES:
      return _objectSpread({}, state, {
        selValues: action.payload
      });

    case _type__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].SET_ADULT_ARRAY:
      return _objectSpread({}, state, {
        adultArray: action.payload
      });

    case _type__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].SET_CHILD_ARRAY:
      return _objectSpread({}, state, {
        childArray: action.payload
      });

    case _type__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].SET_INFANTCOUNT:
      return _objectSpread({}, state, {
        infantCount: action.payload
      });

    case _type__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].SET_CHILD1COUNT:
      return _objectSpread({}, state, {
        child1Count: action.payload
      });

    case _type__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].SET_CHILD2COUNT:
      return _objectSpread({}, state, {
        child2Count: action.payload
      });

    case _type__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].SET_ROOMRULES:
      return _objectSpread({}, state, {
        roomRules: action.payload
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./redux/rooms/type.js":
/*!*****************************!*\
  !*** ./redux/rooms/type.js ***!
  \*****************************/
/*! exports provided: actionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
const actionTypes = {
  SET_ADULT_ARRAY: ' SET_ADULT_ARRAY',
  SET_CHILD_ARRAY: ' SET_CHILD_ARRAY',
  SET_ROOMS: ' SET_ROOMS',
  SET_TOTAL: ' SET_TOTAL',
  SET_INFANTCOUNT: ' SET_INFANTCOUNT',
  SET_CHILD1COUNT: ' SET_CHILD1COUNT',
  SET_CHILD2COUNT: ' SET_CHILD2COUNT',
  SET_SELVALUES: 'SET_SELVALUES',
  SET_ROOMRULES: 'SET_ROOMRULES'
};

/***/ }),

/***/ "./redux/sagas.js":
/*!************************!*\
  !*** ./redux/sagas.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! es6-promise */ "es6-promise");
/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(es6_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tourTabs_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tourTabs/saga */ "./redux/tourTabs/saga.js");
/* harmony import */ var _cityList_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cityList/saga */ "./redux/cityList/saga.js");
/* harmony import */ var _weblogGrid_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./weblogGrid/saga */ "./redux/weblogGrid/saga.js");
/* harmony import */ var _searchtour_saga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./searchtour/saga */ "./redux/searchtour/saga.js");







es6_promise__WEBPACK_IMPORTED_MODULE_1___default.a.polyfill();

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([...Object.values(_tourTabs_saga__WEBPACK_IMPORTED_MODULE_3__), ...Object.values(_cityList_saga__WEBPACK_IMPORTED_MODULE_4__), ...Object.values(_weblogGrid_saga__WEBPACK_IMPORTED_MODULE_5__), ...Object.values(_searchtour_saga__WEBPACK_IMPORTED_MODULE_6__)].map(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"]));
}

/* harmony default export */ __webpack_exports__["default"] = (rootSaga);

/***/ }),

/***/ "./redux/searchtour/action.js":
/*!************************************!*\
  !*** ./redux/searchtour/action.js ***!
  \************************************/
/*! exports provided: searchTour, failure, setFilteredResults, searchTourSuccess, setSearchParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchTour", function() { return searchTour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "failure", function() { return failure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFilteredResults", function() { return setFilteredResults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchTourSuccess", function() { return searchTourSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSearchParams", function() { return setSearchParams; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "./redux/searchtour/type.js");

function searchTour(data) {
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].LOAD_SEARCH_TOUR,
    data: data
  };
}
function failure(error) {
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].SEARCH_TOUR_FAILURE,
    payload: error
  };
}
function setFilteredResults(value) {
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].SET_FILTERED_RESULTS,
    payload: value
  };
}
function searchTourSuccess(value) {
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].LOAD_SEARCH_TOUR_SUCCESS,
    payload: value
  };
}
function setSearchParams(value) {
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].SET_SEARCH_PARAMS,
    payload: value
  };
}

/***/ }),

/***/ "./redux/searchtour/reducer.js":
/*!*************************************!*\
  !*** ./redux/searchtour/reducer.js ***!
  \*************************************/
/*! exports provided: exampleInitialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exampleInitialState", function() { return exampleInitialState; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "./redux/searchtour/type.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const exampleInitialState = {
  tourResult: [],
  error: '',
  dataExist: true,
  filteredResults: [],
  serachParams: {}
};

function reducer(state = exampleInitialState, action) {
  switch (action.type) {
    case _type__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].SEARCH_TOUR_FAILURE:
      return _objectSpread({}, state, {
        error: action.payload,
        tourResult: [],
        filteredResults: [],
        dataExist: false
      });

    case _type__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].LOAD_SEARCH_TOUR_SUCCESS:
      return _objectSpread({}, state, {
        tourResult: action.payload,
        filteredResults: action.payload,
        error: "",
        dataExist: true
      });

    case _type__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].SET_FILTERED_RESULTS:
      return _objectSpread({}, state, {
        filteredResults: action.payload
      });

    case _type__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].SET_SEARCH_PARAMS:
      console.log("rrrrrrr", action.payload);
      return _objectSpread({}, state, {
        serachParams: action.payload
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./redux/searchtour/saga.js":
/*!**********************************!*\
  !*** ./redux/searchtour/saga.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! es6-promise */ "es6-promise");
/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(es6_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action */ "./redux/searchtour/action.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./type */ "./redux/searchtour/type.js");
/* harmony import */ var _ports__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ports */ "./ports.js");


 //imports




es6_promise__WEBPACK_IMPORTED_MODULE_1___default.a.polyfill();

function* searchTourSaga(action) {
  const body = JSON.stringify(action.data);
  let counter = 0;
  let CorrectTour = [];

  try {
    const res = yield fetch(`${_ports__WEBPACK_IMPORTED_MODULE_5__["default"].domain}${_ports__WEBPACK_IMPORTED_MODULE_5__["default"].getPackages}?filter=${body}`);
    const data = yield res.json();
    console.log(" search Results", data);

    for (var i = 0; i < data.length; i++) {
      if (data[i].hasOwnProperty("PackageRow") && data[i].PackageRow.length > 0 && data[i].hasOwnProperty("Flight") && data[i].Flight.length > 0) {
        counter++;
        CorrectTour.push(data[i]);
      }
    }

    console.log("correct packages", counter);

    if (counter > 0) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_3__["searchTourSuccess"])(CorrectTour));
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_3__["failure"])("No Correct Package Found"));
    }
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_3__["failure"])(err));
  }
}

function* loadCityWatcher() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_type__WEBPACK_IMPORTED_MODULE_4__["actionTypes"].LOAD_SEARCH_TOUR, searchTourSaga);
}

/* harmony default export */ __webpack_exports__["default"] = (loadCityWatcher);

/***/ }),

/***/ "./redux/searchtour/type.js":
/*!**********************************!*\
  !*** ./redux/searchtour/type.js ***!
  \**********************************/
/*! exports provided: actionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
const actionTypes = {
  SEARCH_TOUR_FAILURE: 'SEARCH_TOUR_FAILURE',
  LOAD_SEARCH_TOUR: 'LOAD_SEARCH_TOUR',
  LOAD_SEARCH_TOUR_SUCCESS: 'LOAD_SEARCH_TOUR_SUCCESS',
  SET_FILTERED_RESULTS: 'SET_FILTERED_RESULTS',
  SET_SEARCH_PARAMS: 'SET_SEARCH_PARAMS'
};

/***/ }),

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/index */ "./redux/reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sagas */ "./redux/sagas.js");





const bindMiddleware = middleware => {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware);
};

function configureStore() {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_index__WEBPACK_IMPORTED_MODULE_2__["default"], bindMiddleware([sagaMiddleware]));
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_3__["default"]);
  return store;
}

/* harmony default export */ __webpack_exports__["default"] = (configureStore);

/***/ }),

/***/ "./redux/tourFilters/reducer.js":
/*!**************************************!*\
  !*** ./redux/tourFilters/reducer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "./redux/tourFilters/type.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialstate = {
  stars: 0,
  rates: [],
  preis: [],
  airlines: []
};

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case _type__WEBPACK_IMPORTED_MODULE_0__["STARS"]:
      return _objectSpread({}, state, {
        stars: action.payload
      });

    case _type__WEBPACK_IMPORTED_MODULE_0__["RATES"]:
      return _objectSpread({}, state, {
        rates: action.value
      });

    case _type__WEBPACK_IMPORTED_MODULE_0__["PRICE"]:
      return _objectSpread({}, state, {
        preis: action.value
      });

    case _type__WEBPACK_IMPORTED_MODULE_0__["CO"]:
      return _objectSpread({}, state, {
        airlines: action.value
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./redux/tourFilters/type.js":
/*!***********************************!*\
  !*** ./redux/tourFilters/type.js ***!
  \***********************************/
/*! exports provided: STARS, RATES, PRICE, CO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STARS", function() { return STARS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RATES", function() { return RATES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRICE", function() { return PRICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CO", function() { return CO; });
const STARS = 'STARS';
const RATES = 'RATES';
const PRICE = 'PRICE';
const CO = 'CO';

/***/ }),

/***/ "./redux/tourTabs/actions.js":
/*!***********************************!*\
  !*** ./redux/tourTabs/actions.js ***!
  \***********************************/
/*! exports provided: loadHeader, failure, loadHeaderSuccess, loadTour, failureTour, loadTourSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadHeader", function() { return loadHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "failure", function() { return failure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadHeaderSuccess", function() { return loadHeaderSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadTour", function() { return loadTour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "failureTour", function() { return failureTour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadTourSuccess", function() { return loadTourSuccess; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./redux/tourTabs/types.js");

function loadHeader() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].LOAD_HEADER
  };
}
function failure(error) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].HEAFER_FAILURE,
    payload: error
  };
}
function loadHeaderSuccess(data) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].LOAD_HEADER_SUCCESS,
    payload: data
  };
}
function loadTour(id) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].LOAD_Tour,
    id: id
  };
}
function failureTour(error) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].Tour_FAILURE,
    payload: error
  };
}
function loadTourSuccess(data) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].LOAD_Tour_SUCCESS,
    payload: data
  };
}

/***/ }),

/***/ "./redux/tourTabs/reducer.js":
/*!***********************************!*\
  !*** ./redux/tourTabs/reducer.js ***!
  \***********************************/
/*! exports provided: exampleInitialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exampleInitialState", function() { return exampleInitialState; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./redux/tourTabs/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const exampleInitialState = {
  error: [],
  header: [],
  tours: []
};

function reducer(state = exampleInitialState, action) {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].HEAFER_FAILURE:
      return _objectSpread({}, state, {
        error: action.payload,
        header: [],
        tours: []
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].LOAD_HEADER_SUCCESS:
      return _objectSpread({}, state, {
        header: action.payload,
        error: []
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].Tour_FAILURE:
      return _objectSpread({}, state, {
        error: action.payload,
        header: [],
        tours: []
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].LOAD_Tour_SUCCESS:
      return _objectSpread({}, state, {
        tours: action.payload,
        error: []
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./redux/tourTabs/saga.js":
/*!********************************!*\
  !*** ./redux/tourTabs/saga.js ***!
  \********************************/
/*! exports provided: loadHeaderWatcher, loadTourWatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadHeaderWatcher", function() { return loadHeaderWatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadTourWatcher", function() { return loadTourWatcher; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! es6-promise */ "es6-promise");
/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(es6_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./redux/tourTabs/actions.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "./redux/tourTabs/types.js");
/* harmony import */ var _ports__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ports */ "./ports.js");


 //imports




es6_promise__WEBPACK_IMPORTED_MODULE_1___default.a.polyfill(); //header worker

function* loadHeaderSaga() {
  try {
    const res = yield fetch(`${_ports__WEBPACK_IMPORTED_MODULE_5__["default"].domain}${_ports__WEBPACK_IMPORTED_MODULE_5__["default"].getPackageGroup}`);
    const data = yield res.json();
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["loadHeaderSuccess"])(data));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["loadTour"])(data[0].Id));
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["failure"])(err));
  }
} //header watcher


function* loadHeaderWatcher() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_types__WEBPACK_IMPORTED_MODULE_4__["actionTypes"].LOAD_HEADER, loadHeaderSaga);
} //tour worker


function* loadTourSaga(action) {
  try {
    const res = yield fetch(`${_ports__WEBPACK_IMPORTED_MODULE_5__["default"].domain}${_ports__WEBPACK_IMPORTED_MODULE_5__["default"].packageList}?PackageGroupId=${action.id}`);
    const data = yield res.json();
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["loadTourSuccess"])(data));
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["failureTour"])(err));
  }
} //tour watcher


function* loadTourWatcher() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_types__WEBPACK_IMPORTED_MODULE_4__["actionTypes"].LOAD_Tour, loadTourSaga);
}



/***/ }),

/***/ "./redux/tourTabs/types.js":
/*!*********************************!*\
  !*** ./redux/tourTabs/types.js ***!
  \*********************************/
/*! exports provided: actionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
const actionTypes = {
  HEAFER_FAILURE: 'HEAFER_FAILURE',
  LOAD_HEADER: 'LOAD_HEADER',
  LOAD_HEADER_SUCCESS: 'LOAD_HEADER_SUCCESS',
  Tour_FAILURE: 'Tour_FAILURE',
  LOAD_Tour: 'LOAD_Tour',
  LOAD_Tour_SUCCESS: 'LOAD_Tour_SUCCESS'
};

/***/ }),

/***/ "./redux/weblogGrid/action.js":
/*!************************************!*\
  !*** ./redux/weblogGrid/action.js ***!
  \************************************/
/*! exports provided: loadWeblog, failure, loadWeblogSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadWeblog", function() { return loadWeblog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "failure", function() { return failure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadWeblogSuccess", function() { return loadWeblogSuccess; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "./redux/weblogGrid/type.js");

function loadWeblog() {
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].LOAD_WEBLOG
  };
}
function failure(error) {
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].WEBLOG_FAILURE,
    payload: error
  };
}
function loadWeblogSuccess(data) {
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].LOAD_WEBLOG_SUCCESS,
    payload: data
  };
}

/***/ }),

/***/ "./redux/weblogGrid/reducer.js":
/*!*************************************!*\
  !*** ./redux/weblogGrid/reducer.js ***!
  \*************************************/
/*! exports provided: exampleInitialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exampleInitialState", function() { return exampleInitialState; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "./redux/weblogGrid/type.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const exampleInitialState = {
  weblog: [],
  error: []
};

function reducer(state = exampleInitialState, action) {
  switch (action.type) {
    case _type__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].WEBLOG_FAILURE:
      return _objectSpread({}, state, {
        error: action.payload,
        weblog: []
      });

    case _type__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].LOAD_WEBLOG_SUCCESS:
      return _objectSpread({}, state, {
        weblog: action.payload,
        error: []
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./redux/weblogGrid/saga.js":
/*!**********************************!*\
  !*** ./redux/weblogGrid/saga.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! es6-promise */ "es6-promise");
/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(es6_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action */ "./redux/weblogGrid/action.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./type */ "./redux/weblogGrid/type.js");
/* harmony import */ var _ports__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ports */ "./ports.js");


 //imports




es6_promise__WEBPACK_IMPORTED_MODULE_1___default.a.polyfill(); //WEBLOG worker

function* loadWeblogSaga() {
  try {
    const res = yield fetch(`${_ports__WEBPACK_IMPORTED_MODULE_5__["default"].domain}${_ports__WEBPACK_IMPORTED_MODULE_5__["default"].weblogGroups}`);
    const data = yield res.json();
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_3__["loadWeblogSuccess"])(data));
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_3__["failure"])(err));
  }
} //WEBLOG watcher


function* loadWeblogWatcher() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_type__WEBPACK_IMPORTED_MODULE_4__["actionTypes"].LOAD_WEBLOG, loadWeblogSaga);
}

/* harmony default export */ __webpack_exports__["default"] = (loadWeblogWatcher);

/***/ }),

/***/ "./redux/weblogGrid/type.js":
/*!**********************************!*\
  !*** ./redux/weblogGrid/type.js ***!
  \**********************************/
/*! exports provided: actionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
const actionTypes = {
  WEBLOG_FAILURE: 'WEBLOG_FAILURE',
  LOAD_WEBLOG: 'LOAD_WEBLOG',
  LOAD_WEBLOG_SUCCESS: 'LOAD_WEBLOG_SUCCESS'
};

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "es6-promise":
/*!******************************!*\
  !*** external "es6-promise" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("es6-promise");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next-redux-saga":
/*!**********************************!*\
  !*** external "next-redux-saga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

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

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map