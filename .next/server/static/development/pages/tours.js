module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static\\development\\pages\\tours.js": 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Functions.js":
/*!**********************!*\
  !*** ./Functions.js ***!
  \**********************/
/*! exports provided: isNumber, isRealValue, BounceLoading, BeatLoading, DotLoading, BarLoading, MagicSpinnerLoading, sumDigits, requiredInput, checkMelliCode, latinOrPersianValidate, checkLimits, mobileFormatInputValidate, just_persian, mellicode_format, mobile_format, validateEmail, personType, numToWord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRealValue", function() { return isRealValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BounceLoading", function() { return BounceLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeatLoading", function() { return BeatLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DotLoading", function() { return DotLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarLoading", function() { return BarLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagicSpinnerLoading", function() { return MagicSpinnerLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sumDigits", function() { return sumDigits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requiredInput", function() { return requiredInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkMelliCode", function() { return checkMelliCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "latinOrPersianValidate", function() { return latinOrPersianValidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkLimits", function() { return checkLimits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobileFormatInputValidate", function() { return mobileFormatInputValidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "just_persian", function() { return just_persian; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mellicode_format", function() { return mellicode_format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobile_format", function() { return mobile_format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateEmail", function() { return validateEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "personType", function() { return personType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numToWord", function() { return numToWord; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spinners */ "react-spinners");
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_spinners_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spinners-kit */ "react-spinners-kit");
/* harmony import */ var react_spinners_kit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spinners_kit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const override = _emotion_core__WEBPACK_IMPORTED_MODULE_3__["css"]`
  margin: 0 auto;
`;
function isNumber(data) {
  if (isNaN(data)) {
    return false;
  } else {
    return true;
  }
}
function isRealValue(obj) {
  return obj && obj !== "null" && obj !== "undefined" && obj !== "" && obj !== " " && obj !== "  ";
}
function BounceLoading() {
  return __jsx("div", {
    className: "vertical-center"
  }, __jsx(react_spinners__WEBPACK_IMPORTED_MODULE_1__["BounceLoader"], {
    css: override,
    size: 150,
    color: "#50E3C2",
    loading: true
  }));
}
function BeatLoading() {
  return __jsx("div", {
    className: "vertical-center"
  }, __jsx(react_spinners__WEBPACK_IMPORTED_MODULE_1__["BeatLoader"], {
    css: override,
    size: 12,
    margin: 2,
    color: "#50E3C2",
    loading: true
  }));
}
function DotLoading() {
  return __jsx(react_spinners__WEBPACK_IMPORTED_MODULE_1__["DotLoader"], {
    css: override,
    size: 45,
    color: "#50E3C2",
    loading: true
  });
}
function BarLoading() {
  return __jsx("div", {
    className: "m-auto"
  }, __jsx(react_spinners__WEBPACK_IMPORTED_MODULE_1__["BarLoader"], {
    css: override,
    height: 3,
    width: 130,
    color: "#73c9ca"
  }));
}
function MagicSpinnerLoading({
  size = 30,
  color = "#009688",
  loading = true
}) {
  return __jsx("div", null, __jsx(react_spinners_kit__WEBPACK_IMPORTED_MODULE_2__["MagicSpinner"], {
    size: size,
    color: color,
    loading: loading
  }));
}
function sumDigits(number) {
  var str = number.toString();
  var sum = 0;

  for (var i = 0; i < str.length; i++) {
    sum += parseInt(str.charAt(i), 10);
  }

  return sum;
}
function requiredInput(passengers, errorFlagArray, itemName) {
  var submitFlag = true;
  var inputValidate = passengers.reduce(function (arr, item, index) {
    if (!isRealValue(item[itemName])) {
      //nameValidate.push(index);
      arr[index] = true;
      submitFlag = false;
    } else {
      arr[index] = false;
    }

    return arr;
  }, errorFlagArray);
  return [inputValidate, submitFlag];
}
function checkMelliCode(passengers, errorFlagArray, itemName) {
  var submitFlag = true;
  var inputValidate = passengers.reduce(function (arr, item, index) {
    if (!isNumber(item[itemName]) || !mellicode_format(item[itemName])) {
      arr[index] = true;
      submitFlag = false;
    } else {
      arr[index] = false;
    }

    return arr;
  }, errorFlagArray);
  return [inputValidate, submitFlag];
}
function latinOrPersianValidate(passengers, errorFlagArray, itemName, persianFlag) {
  var submitFlag = true;
  var inputValidate = passengers.reduce(function (arr, item, index) {
    if (persianFlag) {
      //error when has latin character
      if (!just_persian(item[itemName]) && isRealValue(item[itemName])) {
        //nameValidate.push(index);
        arr[index] = true;
        submitFlag = false;
      } else {
        arr[index] = false;
      }
    } else {
      //error when has persian character
      if (just_persian(item[itemName])) {
        //nameValidate.push(index);
        arr[index] = true;
        submitFlag = false;
      } else {
        arr[index] = false;
      }
    }

    return arr;
  }, errorFlagArray);
  return [inputValidate, submitFlag];
}
function checkLimits(passengers, errorFlagArray, itemName, type) {
  var submitFlag = true;
  var inputValidate = passengers.reduce(function (arr, item, index) {
    if (type === "DAY") {
      if (item[itemName] > 31 || item[itemName] < 1) {
        arr[index] = true;
        submitFlag = false;
      } else {
        arr[index] = false;
      }
    } else {
      if (item[itemName] > 12 || item[itemName] < 1) {
        arr[index] = true;
        submitFlag = false;
      } else {
        arr[index] = false;
      }
    }

    return arr;
  }, errorFlagArray);
  return [inputValidate, submitFlag];
}
function mobileFormatInputValidate(passengers, errorFlagArray, itemName) {
  var submitFlag = true;
  var inputValidate = passengers.reduce(function (arr, item, index) {
    if (!mobile_format(item[itemName]) && isRealValue(item[itemName])) {
      //nameValidate.push(index);
      arr[index] = true;
      submitFlag = false;
    } else {
      arr[index] = false;
    }

    return arr;
  }, errorFlagArray);
  return [inputValidate, submitFlag];
}
function just_persian(str) {
  var p = /^[\u0600-\u06FF\s]+$/;
  return p.test(str);
}
function mellicode_format(input) {
  if (input.length === 10) return true;else {
    return false;
  }
}
function mobile_format(str) {
  var m = /^09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/;
  return m.test(str);
}
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
function personType(type) {
  switch (type) {
    case "adult":
      return "بزرگسال";

    case "child":
      return "کودک";

    case "child1":
      return "کودک";

    case "child2":
      return "کودک";

    case "infant":
      return "نوزاد";

    default:
      return " ";
  }
}
function numToWord(num) {
  switch (num) {
    case 1:
      return "اول";

    case 2:
      return "دوم";

    case 3:
      return "سوم";

    case 4:
      return "چهارم";

    case 5:
      return "پنجم";

    case 6:
      return "ششم";

    case 7:
      return "هفتم";

    case 8:
      return "هشتم";

    case 9:
      return "نهم";

    case 10:
      return "دهم";

    case 11:
      return "یازدهم";

    case 12:
      return "دوازدهم";

    case 13:
      return "سیزدهم";

    case 14:
      return "چهاردهم";

    case 15:
      return "پانزدهم";

    case 16:
      return "شانزدهم";

    case 17:
      return "هفدهم";

    case 18:
      return "هجدهم";

    case 19:
      return "نوزدهم";

    case 20:
      return "بیستمم";

    default:
      return num;
  }
}

/***/ }),

/***/ "./img/coding.png":
/*!************************!*\
  !*** ./img/coding.png ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/coding-3c99745e67df6faac73860ee89873265.png";

/***/ }),

/***/ "./pages/tours.js":
/*!************************!*\
  !*** ./pages/tours.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_shimmer_effect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-shimmer-effect */ "react-shimmer-effect");
/* harmony import */ var react_shimmer_effect__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_shimmer_effect__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_basicdatas_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/basicdatas/action */ "./redux/basicdatas/action.js");
/* harmony import */ var _redux_payment_action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux/payment/action */ "./redux/payment/action.js");
/* harmony import */ var _redux_searchtour_action__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../redux/searchtour/action */ "./redux/searchtour/action.js");
/* harmony import */ var _redux_tourFilters_action__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../redux/tourFilters/action */ "./redux/tourFilters/action.js");
/* harmony import */ var _Functions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Functions */ "./Functions.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



 //UI Libraries



 //components

const TourSearch = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../components/tour/toursearch */ "./components/tour/toursearch.js")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../components/tour/toursearch */ "./components/tour/toursearch.js")],
    modules: ["../components/tour/toursearch"]
  }
});
const Nav = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../components/navbar */ "./components/navbar.js")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../components/navbar */ "./components/navbar.js")],
    modules: ["../components/navbar"]
  }
});
const Bgtext = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ../components/bgtext */ "./components/bgtext.js")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../components/bgtext */ "./components/bgtext.js")],
    modules: ["../components/bgtext"]
  }
});
const TourResult = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../components/tour/tourResult */ "./components/tour/tourResult.js")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../components/tour/tourResult */ "./components/tour/tourResult.js")],
    modules: ["../components/tour/tourResult"]
  }
});
const Filter = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ../components/tour/filter */ "./components/tour/filter.js")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../components/tour/filter */ "./components/tour/filter.js")],
    modules: ["../components/tour/filter"]
  }
});
const TourSort = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! ../components/tour/tourSort */ "./components/tour/tourSort.js")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../components/tour/tourSort */ "./components/tour/tourSort.js")],
    modules: ["../components/tour/tourSort"]
  }
});
const Payment = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../components/tour/book */ "./components/tour/book.js")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../components/tour/book */ "./components/tour/book.js")],
    modules: ["../components/tour/book"]
  }
}); //redux









const Tours = props => {
  const {
    0: showChild,
    1: setShowChild
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: showPayment,
    1: setShowPayment
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const allPackages = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(state => state.searchTourReducer.tourResult);
  const filteredResults = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(state => state.searchTourReducer.filteredResults);
  const dataExist = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(state => state.searchTourReducer.dataExist);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();

  const filterToggle = () => setIsOpen(!isOpen);

  const filterCancle = () => setIsOpen(false);

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const divStyle = {
    pointerEvents: "none",
    opacity: 0.6
  }; //route base on package type

  function specifyPackageType(packages, index) {
    switch (packages.Type) {
      case "Air":
        return __jsx(TourResult, _extends({
          changeDisplay: handleDisplay
        }, props, {
          packages: packages,
          index: index,
          tourId: "1"
        }));

      default:
        break;
    }
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log("", router.query);

    function myparam() {
      let goDateStr = "";
      let desDateStr = ""; //alert(props.ret);
      //date structure 1300/05/05

      if (props.searchParams.departing && props.searchParams.departing.split("-").length === 3) {
        let goDate = props.searchParams.departing.split("-");
        if (goDate[1].length === 1) goDate[1] = "0" + goDate[1];
        if (goDate[2].length === 1) goDate[2] = "0" + goDate[2];
        goDateStr = goDate[0] + "/" + goDate[1] + "/" + goDate[2]; //
      } //date structure 1300/05/05


      if (props.searchParams.returning && props.searchParams.returning.split("-").length === 3) {
        let desDate = props.searchParams.returning.split("-");
        if (desDate[1].length === 1) desDate[1] = "0" + desDate[1];
        if (desDate[2].length === 1) desDate[2] = "0" + desDate[2];
        desDateStr = desDate[0] + "/" + desDate[1] + "/" + desDate[2];
      } //export person


      let adult = 0;
      let child1 = 0;
      let child2 = 0;
      let infant = 0;
      const rules = props.searchParams.roomRules.split(',');
      rules.map(rule => {
        adult += parseInt(rule.charAt(0));
        child1 += parseInt(rule.charAt(1));
        child2 += parseInt(rule.charAt(2));
        infant += parseInt(rule.charAt(3));
      });
      var packages = new Object();
      packages.SourceCities = props.searchParams.org.split("-");
      packages.DestinationCities = props.searchParams.des.split("-");
      packages.FromDate = goDateStr;
      packages.ToDate = desDateStr;
      packages.FlightClass = "";
      packages.Adult = adult || 2;
      packages.Child1 = child1;
      packages.Child2 = child2;
      packages.Child = child1 + child2;
      packages.Infant = infant || 0;
      packages.Calendar = false;
      packages.RoomCount = rules.length || 1;
      packages.RoomRules = props.searchParams.roomRules || "2000";
      packages.WsInfo = null;
      var packagesObj = [packages];
      dispatch(Object(_redux_payment_action__WEBPACK_IMPORTED_MODULE_8__["remove"])());
      setShowPayment(false);
      console.log("search params:", packagesObj);
      dispatch(Object(_redux_searchtour_action__WEBPACK_IMPORTED_MODULE_9__["searchTour"])(packagesObj));
      handleCollapse(allPackages);
    }

    if (Object(_Functions__WEBPACK_IMPORTED_MODULE_11__["isRealValue"])(props.searchParams)) myparam();
    setShowChild(true);
  }, [props.searchParams]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    function filteredResult(tours) {
      let finalArray = [];
      tours.map(tour => {
        tour.PackageRow.map(item => {
          item.PackageHotelList.map(hotel => {
            // console.log("filter starts ", props.stars);
            hotel.HotelRate === props.stars.toString() ? finalArray.push(tour) : null;
          });
        });
        tour.Flight.map((item, index) => {
          // (item.AirLineTitle_Going === props.airlines || item.AirLineTitle_Coming === props.airlines )
          item.AirLineTitle_Going === props.airlines || item.AirLineTitle_Coming === props.airlines ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, finalArray.push(tour)) : __jsx("span", null); // ? finalArray.push(tour)
          // : null;
        });
      });
      dispatch(Object(_redux_searchtour_action__WEBPACK_IMPORTED_MODULE_9__["setFilteredResults"])(finalArray));
    }

    filteredResult(allPackages);
  }, [props.stars, props.airlines]); //[props.stars , props.airlines ]

  function handleDisplay() {
    setShowPayment(!showPayment);
  }

  function handleCollapse(data) {
    var allCollapsesOpenState = [];
    var allFlightCollapsesOpenState = [];
    var alltoggleFlightsDefault = [];

    if (data.length > 0) {
      for (var i = 0; i < data.length; i++) {
        allCollapsesOpenState.push(new Array(data[i].PackageRow.length).fill(false));
        allFlightCollapsesOpenState.push(new Array(data[i].PackageRow.length).fill(false));
        alltoggleFlightsDefault.push(new Array(data[i].PackageRow.length).fill(false));
      }
    } else {
      allCollapsesOpenState.push([]);
      allFlightCollapsesOpenState.push([]);
      alltoggleFlightsDefault.push([]);
    }

    props.dispatch(Object(_redux_basicdatas_action__WEBPACK_IMPORTED_MODULE_7__["set_package_collapse"])(allCollapsesOpenState));
    props.dispatch(Object(_redux_basicdatas_action__WEBPACK_IMPORTED_MODULE_7__["toggle_flight"])(allFlightCollapsesOpenState));
    props.dispatch(Object(_redux_basicdatas_action__WEBPACK_IMPORTED_MODULE_7__["default_toggle_flight"])(alltoggleFlightsDefault));
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    className: "tourbooking"
  }, __jsx(Nav, null), __jsx(Bgtext, null), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], null, Object(_Functions__WEBPACK_IMPORTED_MODULE_11__["isRealValue"])(props.searchParams) ? __jsx(TourSearch, props) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null), filteredResults.length > 0 || dataExist ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    style: {
      display: !showPayment ? "block" : "none"
    }
  }, __jsx(TourSort, null), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-md-3 pl-5-lg none-xs none-s"
  }, __jsx(Filter, {
    Opening: true,
    x: filteredResults
  })), __jsx("div", {
    className: "col-md-9 pr-5-lg mb-5 card-col"
  }, filteredResults.map((item, index) => {
    return __jsx("div", {
      key: index
    }, specifyPackageType(item, index));
  })))), props.paymentObj.length > 0 ? __jsx("div", {
    className: "reserveTour",
    style: {
      display: showPayment ? "block" : "none"
    }
  }, __jsx(Payment, _extends({}, props, {
    changeDisplay: handleDisplay
  }))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null)) : __jsx("div", {
    className: "text-center"
  }, showChild ? __jsx("div", null, dataExist ? __jsx("div", {
    className: "LoaderClass"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "3",
    className: "pl-5-lg"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], null, __jsx(react_shimmer_effect__WEBPACK_IMPORTED_MODULE_4___default.a, null, __jsx("div", {
    className: "filter-loading fl-1"
  }), __jsx("hr", {
    className: "fl-hr"
  }), __jsx("div", {
    className: "filter-loading fl-2"
  }), __jsx("hr", {
    className: "fl-hr"
  }), __jsx("div", {
    className: "filter-loading fl-3"
  }), __jsx("hr", {
    className: "fl-hr"
  }), __jsx("div", {
    className: "filter-loading fl-4"
  }))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "9",
    className: "tour-card"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "10"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "4"
  }, __jsx(react_shimmer_effect__WEBPACK_IMPORTED_MODULE_4___default.a, null, __jsx("div", {
    className: "img-loading"
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "8",
    className: "info-loading no-padding"
  }, __jsx(react_shimmer_effect__WEBPACK_IMPORTED_MODULE_4___default.a, null, __jsx("div", {
    className: "tl-1"
  }), __jsx("div", {
    className: "tl-2"
  }), __jsx("div", {
    className: "tl-3"
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "12"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "6"
  }, __jsx(react_shimmer_effect__WEBPACK_IMPORTED_MODULE_4___default.a, null, __jsx("div", {
    className: "fl-1"
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "6"
  }, __jsx(react_shimmer_effect__WEBPACK_IMPORTED_MODULE_4___default.a, null, __jsx("div", {
    className: "fl-2"
  }))))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "2",
    className: "price-loading"
  }, __jsx(react_shimmer_effect__WEBPACK_IMPORTED_MODULE_4___default.a, null, __jsx("div", {
    className: "pl-1"
  }), __jsx("div", {
    className: "pl-2"
  }), __jsx("div", {
    className: "pl-4"
  }), __jsx("div", {
    className: "pl-5"
  })))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "10"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "4"
  }, __jsx(react_shimmer_effect__WEBPACK_IMPORTED_MODULE_4___default.a, null, __jsx("div", {
    className: "img-loading"
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "8",
    className: "info-loading no-padding"
  }, __jsx(react_shimmer_effect__WEBPACK_IMPORTED_MODULE_4___default.a, null, __jsx("div", {
    className: "tl-1"
  }), __jsx("div", {
    className: "tl-2"
  }), __jsx("div", {
    className: "tl-3"
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "12"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "6"
  }, __jsx(react_shimmer_effect__WEBPACK_IMPORTED_MODULE_4___default.a, null, __jsx("div", {
    className: "fl-1"
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "6"
  }, __jsx(react_shimmer_effect__WEBPACK_IMPORTED_MODULE_4___default.a, null, __jsx("div", {
    className: "fl-2"
  }))))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "2",
    className: "price-loading"
  }, __jsx(react_shimmer_effect__WEBPACK_IMPORTED_MODULE_4___default.a, null, __jsx("div", {
    className: "pl-1"
  }), __jsx("div", {
    className: "pl-2"
  }), __jsx("div", {
    className: "pl-4"
  }), __jsx("div", {
    className: "pl-5"
  }))))))))) : __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-md-3 pl-5-lg none-xs",
    style: !dataExist ? divStyle : ""
  }, __jsx("div", {
    style: {
      marginTop: 20
    }
  }, __jsx(Filter, {
    Opening: false
  }))), __jsx("div", {
    className: "col-md-9 pr-5-lg mb-5"
  }, __jsx("div", {
    className: "not-found"
  }, __jsx("img", {
    src: __webpack_require__(/*! ../img/coding.png */ "./img/coding.png")
  }), __jsx("p", null, "\u062F\u0631 \u062A\u0627\u0631\u06CC\u062E \u0645\u0648\u0631\u062F \u0646\u0638\u0631 \u0634\u0645\u0627 \u0647\u0646\u0648\u0632 \u062A\u0648\u0631\u06CC \u062A\u0639\u0631\u06CC\u0641 \u0646\u0634\u062F\u0647 \u0627\u0633\u062A ."), __jsx("h1", null, Object(_Functions__WEBPACK_IMPORTED_MODULE_11__["isRealValue"])(props.ret) ? props.ret : ""), __jsx("span", null, "\u062F\u0631 \u0635\u0648\u0631\u062A \u062A\u0645\u0627\u06CC\u0644 \u0645\u062C\u062F\u062F\u0627 \u062C\u0633\u062A\u062C\u0648 \u06A9\u0646\u06CC\u062F."))))) : __jsx("div", {
    className: "text-center m-auto"
  }, "...LOADING")), __jsx("button", {
    className: "filter-btn-xs btn none-lg ",
    onClick: filterToggle,
    style: {
      display: !showPayment ? "block" : "none"
    }
  }, "\u0641\u06CC\u0644\u062A\u0631"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Collapse"], {
    isOpen: isOpen,
    className: "filter-toggle"
  }, __jsx("div", {
    className: "filter-bg"
  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_5__["MdCancel"], {
    onClick: filterCancle,
    className: "cancle-btn"
  }), __jsx(Filter, {
    Opening: true
  }))))));
}; //for filters


const mapStateToProps = state => {
  const stars = state.tourFilterReducer.stars;
  const price = state.tourFilterReducer.price;
  const rates = state.tourFilterReducer.rates;
  const paymentObj = state.paymenObject.paymentObj;
  const airlines = state.tourFilterReducer.airlines;
  return {
    stars,
    rates,
    price,
    airlines,
    paymentObj
  };
};

Tours.getInitialProps = async ({
  query
}) => {
  console.log("getInitialPros", query);
  var des = await query.des;
  var returning = await query.returning;
  return {
    searchParams: query,
    str: des,
    ret: returning
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps)(Tours));

/***/ }),

/***/ "./redux/basicdatas/action.js":
/*!************************************!*\
  !*** ./redux/basicdatas/action.js ***!
  \************************************/
/*! exports provided: add_org_id, add_des_id, set_package_collapse, toggle_flight, add_name, check_item, add_item, remove_item, homePageLoading, default_toggle_flight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_org_id", function() { return add_org_id; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_des_id", function() { return add_des_id; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_package_collapse", function() { return set_package_collapse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggle_flight", function() { return toggle_flight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_name", function() { return add_name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "check_item", function() { return check_item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_item", function() { return add_item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove_item", function() { return remove_item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homePageLoading", function() { return homePageLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default_toggle_flight", function() { return default_toggle_flight; });
const ADD_ORG_ID = "ADD_ORG_ID";
const ADD_DES_ID = "ADD_DES_ID";
const SET_PACKAGE_COLLAPSE = "SET_PACKAGE_COLLAPSE";
const TOGGLE_FLIGHT = "TOGGLE_FLIGHT";
const LOADING_BOOLEAN = "LOADING_BOOLEAN";
const TOGGLE_DEFAULT_FLIGHT = "TOGGLE_DEFAULT_FLIGHT"; //example

const ADD = 'ADD';
const REMOVE = 'REMOVE';
const CHECK = 'e.CHECK';
const NAME = 'NAME'; //end of example

const add_org_id = value => ({
  type: ADD_ORG_ID,
  value
});

const add_des_id = value => ({
  type: ADD_DES_ID,
  value
});

const homePageLoading = value => ({
  type: LOADING_BOOLEAN,
  value
});

const set_package_collapse = value => ({
  type: SET_PACKAGE_COLLAPSE,
  value
});

const toggle_flight = value => ({
  type: TOGGLE_FLIGHT,
  value
});

const default_toggle_flight = value => ({
  type: TOGGLE_DEFAULT_FLIGHT,
  value
}); //example


const add_item = value => ({
  type: ADD,
  value
});

const remove_item = value => ({
  type: REMOVE,
  value
});

const check_item = (payload, myname) => ({
  type: CHECK,
  payload,
  myname
});

const add_name = value => ({
  type: NAME,
  value
}); //end of example




/***/ }),

/***/ "./redux/payment/action.js":
/*!*********************************!*\
  !*** ./redux/payment/action.js ***!
  \*********************************/
/*! exports provided: add, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
const ADD = "ADD";
const REMOVE = "REMOVE";

const add = value => ({
  type: ADD,
  value
});

const remove = () => ({
  type: REMOVE,
  value: []
});



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

/***/ "./redux/tourFilters/action.js":
/*!*************************************!*\
  !*** ./redux/tourFilters/action.js ***!
  \*************************************/
/*! exports provided: setStars, setAirlines */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStars", function() { return setStars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAirlines", function() { return setAirlines; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "./redux/tourFilters/type.js");

function setStars(value) {
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["STARS"],
    payload: value
  };
}

const setRates = value => ({
  type: _type__WEBPACK_IMPORTED_MODULE_0__["RATES"],
  value
});

const setPreis = value => ({
  type: _type__WEBPACK_IMPORTED_MODULE_0__["PRICE"],
  value
});

function setAirlines(value) {
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["CO"],
    value
  };
}

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

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/tours.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Hope\Desktop\KiteSearchEngine\pages\tours.js */"./pages/tours.js");


/***/ }),

/***/ "@emotion/core":
/*!********************************!*\
  !*** external "@emotion/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

/***/ }),

/***/ "@material-ui/core/Box":
/*!****************************************!*\
  !*** external "@material-ui/core/Box" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Box");

/***/ }),

/***/ "@material-ui/core/Checkbox":
/*!*********************************************!*\
  !*** external "@material-ui/core/Checkbox" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Checkbox");

/***/ }),

/***/ "@material-ui/core/Chip":
/*!*****************************************!*\
  !*** external "@material-ui/core/Chip" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Chip");

/***/ }),

/***/ "@material-ui/core/Fab":
/*!****************************************!*\
  !*** external "@material-ui/core/Fab" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Fab");

/***/ }),

/***/ "@material-ui/core/FormControl":
/*!************************************************!*\
  !*** external "@material-ui/core/FormControl" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "@material-ui/core/FormControlLabel":
/*!*****************************************************!*\
  !*** external "@material-ui/core/FormControlLabel" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),

/***/ "@material-ui/core/FormGroup":
/*!**********************************************!*\
  !*** external "@material-ui/core/FormGroup" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormGroup");

/***/ }),

/***/ "@material-ui/core/FormHelperText":
/*!***************************************************!*\
  !*** external "@material-ui/core/FormHelperText" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormHelperText");

/***/ }),

/***/ "@material-ui/core/FormLabel":
/*!**********************************************!*\
  !*** external "@material-ui/core/FormLabel" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormLabel");

/***/ }),

/***/ "@material-ui/core/InputLabel":
/*!***********************************************!*\
  !*** external "@material-ui/core/InputLabel" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/Select":
/*!*******************************************!*\
  !*** external "@material-ui/core/Select" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),

/***/ "@material-ui/core/Slider":
/*!*******************************************!*\
  !*** external "@material-ui/core/Slider" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Slider");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/lab/Autocomplete":
/*!************************************************!*\
  !*** external "@material-ui/lab/Autocomplete" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Autocomplete");

/***/ }),

/***/ "@material-ui/lab/Rating":
/*!******************************************!*\
  !*** external "@material-ui/lab/Rating" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Rating");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "base-64":
/*!**************************!*\
  !*** external "base-64" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("base-64");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "mdbreact":
/*!***************************!*\
  !*** external "mdbreact" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mdbreact");

/***/ }),

/***/ "moment-jalaali":
/*!*********************************!*\
  !*** external "moment-jalaali" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment-jalaali");

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-countdown-now":
/*!**************************************!*\
  !*** external "react-countdown-now" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-countdown-now");

/***/ }),

/***/ "react-html-parser":
/*!************************************!*\
  !*** external "react-html-parser" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-html-parser");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-icons/fi":
/*!*********************************!*\
  !*** external "react-icons/fi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fi");

/***/ }),

/***/ "react-icons/go":
/*!*********************************!*\
  !*** external "react-icons/go" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/go");

/***/ }),

/***/ "react-icons/io":
/*!*********************************!*\
  !*** external "react-icons/io" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/io");

/***/ }),

/***/ "react-icons/md":
/*!*********************************!*\
  !*** external "react-icons/md" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/md");

/***/ }),

/***/ "react-icons/ti":
/*!*********************************!*\
  !*** external "react-icons/ti" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/ti");

/***/ }),

/***/ "react-modern-calendar-datepicker":
/*!***************************************************!*\
  !*** external "react-modern-calendar-datepicker" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-modern-calendar-datepicker");

/***/ }),

/***/ "react-number-format":
/*!**************************************!*\
  !*** external "react-number-format" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-number-format");

/***/ }),

/***/ "react-rating":
/*!*******************************!*\
  !*** external "react-rating" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-rating");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-shimmer-effect":
/*!***************************************!*\
  !*** external "react-shimmer-effect" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-shimmer-effect");

/***/ }),

/***/ "react-spinners":
/*!*********************************!*\
  !*** external "react-spinners" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spinners");

/***/ }),

/***/ "react-spinners-kit":
/*!*************************************!*\
  !*** external "react-spinners-kit" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spinners-kit");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "utf8":
/*!***********************!*\
  !*** external "utf8" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("utf8");

/***/ })

/******/ });
//# sourceMappingURL=tours.js.map