exports.ids = [3];
exports.modules = {

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mdbreact */ "mdbreact");
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mdbreact__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ports__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ports */ "./ports.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 //UI Libraries




 //link
// import Link from "next/link";



class NavbarPage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      isOpen: false
    });

    _defineProperty(this, "toggleCollapse", () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    });
  }

  render() {
    return __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBNavbar"], {
      color: "navbar",
      dark: true,
      expand: "md",
      className: "original-nav"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], null, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBNavbarBrand"], null, __jsx(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      href: "/"
    }, __jsx("a", null, __jsx("img", {
      className: "logo-img",
      src: __webpack_require__(/*! ../img/logo.png */ "./img/logo.png")
    })))), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBNavbarToggler"], {
      onClick: this.toggleCollapse
    }), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBCollapse"], {
      id: "navbarCollapse3",
      isOpen: this.state.isOpen,
      navbar: true
    }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBNavbarNav"], {
      left: true,
      className: "left-nav"
    }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBNavItem"], {
      className: "border-left"
    }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      href: {
        pathname: _ports__WEBPACK_IMPORTED_MODULE_6__["default"].domain,
        query: {
          name: "B2C/Login"
        }
      },
      as: `${_ports__WEBPACK_IMPORTED_MODULE_6__["default"].domain}B2C/Login`
    }, __jsx("a", null, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaUserTie"], {
      className: "user-icon"
    }), "\u067E\u06CC\u06AF\u06CC\u0631\u06CC \u062E\u0631\u06CC\u062F"))), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBNavItem"], {
      className: "none-xs"
    }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBDropdown"], null, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBDropdownToggle"], {
      nav: true,
      caret: true,
      className: "nav-dropdown"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../img/phone.png */ "./img/phone.png")
    }), __jsx("p", null, "\u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC 24 \u0633\u0627\u0639\u062A\u0647", __jsx("br", null), "021-75097700"))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (NavbarPage);

/***/ }),

/***/ "./img/logo.png":
/*!**********************!*\
  !*** ./img/logo.png ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-a64a474727d6bc50138b156d3647459c.png";

/***/ }),

/***/ "./img/phone.png":
/*!***********************!*\
  !*** ./img/phone.png ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAaCAYAAADWm14/AAAC00lEQVRIie3WXYhVVRQH8N+9c9OidIycCZIiKSX8KAPRDCGNfEqJCHsYmIhAMfBBfEhFTDFNIpV6DOxBEVNSxkTrRYjBhEBQCROdmgwGRw1JLDWH/HrY+3TPHM859wrpk3/YnLXWXnuvdfZe+793Ze3adUrwHKbiBYxHG9oxEkMzvn/jL1xEP07iMH5AT1GAWo5tBN7He3i2LLsMhsU2CuPwWqqvB1/ii5jgf6hmJunEb/j4DoM3wlh8gl/wdlECa7AFj/6PgbNoww4sTwzJFryTNpbgH5wV9jrBQ+r18GAMkl3ZLNbgFLbVMBwbS5zP4yPswe9NJFkVlnw2lggFm4fPsLuGDjxW4NSPl9DXROAEN3Aith34EU/k+LWho4o5JZN9cIfBs+jD0pL+2VVMKOi8hJ1R7sLR2KaUTLhXOP9H8Hy07cK/Bf4v1vBkQedPGIjyTLRGeaJ8YqngVaEoCYQFV/AzJuWMGVXD4oIEjsXvWDycsm+KrRGmY3+UV8jnles1rCqYYLNApXvlM2YjrMAh7MMbmJvjM1CNTq057YBQA2NSA3ahO8o38bl6kZ7DBlyLehVfCbT8LR7JifF9Da9jBh5Hi0AyJwRympnJ+NOY0Cv4U6jwVrwbE16Gt/B09B+G3ZgsHMXRQo3cEI54b6XgNpwjEE8WA8J2tET9UvyzBJcNrpcEXTGxm9mOPMp8Stj/PHQLRyzB18LSwwVsE/4uizexMG/CbAIt2K74QloqbAOBoufjm6h/hwWK6Xq9nKOYre4lmFYwAWEFhkR5JM6oc30HZgkUm4ch2CrUw9XEmF6BiVhZEhyOozelHxSWnvAi6r5txGCMx+q0IZ3ASvW/K8I8fBjlP4S93R71LuGs/9pgjkXqrDpoC4quzTT2q9/97cILZ3TUO/Gyxi+pB4Qau5hNoBm0Z/RnUnKlieC3odHL5a7jfgLpBA7do5in1dnTLeueiNnM29nBAAAAAElFTkSuQmCC"

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

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const routes = __webpack_require__(/*! next-routes */ "next-routes");

module.exports = routes().add('/:noname/:lang(en|es)/:wow+', 'complex');

/***/ })

};;
//# sourceMappingURL=3.js.map