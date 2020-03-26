exports.ids = [5];
exports.modules = {

/***/ "./components/tour/filter.js":
/*!***********************************!*\
  !*** ./components/tour/filter.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_tourFilters_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/tourFilters/action */ "./redux/tourFilters/action.js");
/* harmony import */ var _redux_basicdatas_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/basicdatas/action */ "./redux/basicdatas/action.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/lab/Rating */ "@material-ui/lab/Rating");
/* harmony import */ var _material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Slider */ "@material-ui/core/Slider");
/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/FormLabel */ "@material-ui/core/FormLabel");
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/FormGroup */ "@material-ui/core/FormGroup");
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/FormHelperText */ "@material-ui/core/FormHelperText");
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "@material-ui/core/Checkbox");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_rating__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-rating */ "react-rating");
/* harmony import */ var react_rating__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_rating__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _Functions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../Functions */ "./Functions.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 //redux



 //UI Libraries
















 //Utilities


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["makeStyles"])({
  root: {
    width: "100%"
  }
});
const useStylesCheckbox = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["makeStyles"])(theme => ({
  root: {
    display: "flex"
  },
  formControl: {
    margin: theme.spacing(1)
  }
}));

function valuetext(value) {
  return `${value}°C`;
}

function RangeSlider(props) {
  const classes = useStyles();
  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.dispatch(set_preis(newValue));
    props.dispatch(Object(_redux_basicdatas_action__WEBPACK_IMPORTED_MODULE_3__["add_item"])(newValue));
  }; //console.log("props in preis", props.preis)
  //console.log("basicDatas props in filter", props.basicDatas)


  return __jsx("div", {
    className: classes.root
  }, __jsx(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_8___default.a, {
    value: value,
    onChange: (e, value) => handleChange(e, value),
    valueLabelDisplay: "auto",
    "aria-labelledby": "range-slider",
    getAriaValueText: valuetext
  }));
}

function SimpleRating() {
  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(2);
  return __jsx("div", null, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6___default.a, {
    component: "fieldset",
    mb: 3,
    borderColor: "transparent",
    className: "star-rating"
  }, __jsx(_material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_7___default.a, {
    name: "simple-controlled",
    value: value,
    onChange: (event, newValue) => {
      setValue(newValue);
    }
  })));
} // function Score() {
//   return (
//     <Box component="fieldset" mb={3} borderColor="transparent">
//     <Typography component="legend">Custom icon set</Typography>
//     <Rating
//       name="customized-icons"
//       defaultValue={2}
//       getLabelText={value => customIcons[value].label}
//       IconContainerComponent={IconContainer}
//     />
//   </Box>
//   )
// }


const FilterCollapse1 = props => {
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  const toggle = () => setIsOpen(!isOpen);

  return __jsx("div", {
    className: "filter-collapse border-bottom"
  }, __jsx("p", {
    onClick: toggle
  }, "\u062A\u0648\u0642\u0641 \u0647\u0627", __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_5__["MdKeyboardArrowDown"], null)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Collapse"], {
    isOpen: isOpen
  }, __jsx("div", null)));
};

const StarFilter = props => {
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const starValue = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.tourFilterReducer.stars);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  const toggle = () => setIsOpen(!isOpen);

  function handleStars(value) {
    console.log("star rating value in seatch Filter :", value);
    dispatch(Object(_redux_tourFilters_action__WEBPACK_IMPORTED_MODULE_2__["setStars"])(value));
  }

  return __jsx("div", {
    className: "filter-collapse border-bottom"
  }, __jsx("p", {
    onClick: toggle
  }, "\u0633\u062A\u0627\u0631\u0647 \u062F\u0627\u0631", __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_5__["MdKeyboardArrowDown"], null)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Collapse"], {
    isOpen: isOpen
  }, props.show ? __jsx("div", {
    className: "text-center"
  }, __jsx(react_rating__WEBPACK_IMPORTED_MODULE_17___default.a, {
    direction: "rtl",
    emptySymbol: __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_5__["MdStarBorder"], {
      color: "#73c9ca",
      size: "30"
    }),
    fullSymbol: __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_5__["MdStar"], {
      color: "#73c9ca",
      size: "30"
    }),
    fractions: 1,
    start: 0,
    stop: 5,
    initialRating: starValue,
    onChange: handleStars
  }), __jsx("span", {
    className: "pr-2",
    onClick: () => handleStars(0)
  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_5__["MdClose"], {
    size: "15"
  }))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_Functions__WEBPACK_IMPORTED_MODULE_18__["BarLoading"], null))));
};

const AirlinesFilter = props => {
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const filteredResults = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.searchTourReducer.tourResult);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])(); // console.log("myallllllPackges",filteredResults); 
  // const airlineValues= useSelector(state=>state.tourFilterReducer.airlines);

  let airlineValues = [];

  const toggle = () => setIsOpen(!isOpen);

  for (var i = 0; i < filteredResults.length; i++) {
    for (var j = 0; j < filteredResults[i].Flight.length; j++) {
      airlineValues.push(filteredResults[i].Flight[j].AirLineTitle_Going);
      airlineValues.push(filteredResults[i].Flight[j].AirLineTitle_Coming);
    }
  }

  const airlinesName = airlineValues.filter((val, id, array) => array.indexOf(val) == id);
  console.log("airlinesName", airlinesName);

  function airlineHandle(value) {
    console.log("airline value in search Filter :", value);
    dispatch(Object(_redux_tourFilters_action__WEBPACK_IMPORTED_MODULE_2__["setAirlines"])(value));
  } // const reduxAirline = useSelector(state => state.tourFilterReducer.airlines);
  // console.log("reduxAirline", reduxAirline);


  return __jsx("div", {
    className: "filter-collapse border-bottom"
  }, __jsx("p", {
    onClick: toggle
  }, "\u0634\u0631\u06A9\u062A \u0647\u0648\u0627\u067E\u06CC\u0645\u0627\u06CC\u06CC", __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_5__["MdKeyboardArrowDown"], null)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Collapse"], {
    isOpen: isOpen
  }, props.show ? __jsx("div", null, airlinesName.map((item, index) => {
    return __jsx("div", {
      onClick: () => airlineHandle(item)
    }, item);
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_Functions__WEBPACK_IMPORTED_MODULE_18__["BarLoading"], null))));
};

const FilterCollapse3 = props => {
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  const toggle = () => setIsOpen(!isOpen);

  return __jsx("div", {
    className: "filter-collapse border-bottom"
  }, __jsx("p", {
    onClick: toggle
  }, "\u0627\u0645\u062A\u06CC\u0627\u0632 \u0647\u0627", __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_5__["MdKeyboardArrowDown"], null)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Collapse"], {
    isOpen: isOpen
  }, __jsx("div", null)));
};

const PreisFilter = props => {
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  const toggle = () => setIsOpen(!isOpen);

  return __jsx("div", {
    className: "filter-collapse border-bottom"
  }, __jsx("p", {
    onClick: toggle
  }, "\u0642\u06CC\u0645\u062A", __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_5__["MdKeyboardArrowDown"], null)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Collapse"], {
    isOpen: isOpen
  }, props.show ? __jsx("div", null, __jsx(RangeSlider, props)) : __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_Functions__WEBPACK_IMPORTED_MODULE_18__["BarLoading"], null))));
};

const FilterCollapse6 = props => {
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  const toggle = () => setIsOpen(!isOpen);

  return __jsx("div", {
    className: "filter-collapse"
  }, __jsx("p", {
    onClick: toggle
  }, "\u0633\u0627\u06CC\u0631", __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_5__["MdKeyboardArrowDown"], null)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Collapse"], {
    isOpen: isOpen
  }, props.show ? __jsx("div", null, __jsx(CheckboxesGroup2, null)) : __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_Functions__WEBPACK_IMPORTED_MODULE_18__["BarLoading"], null))));
};

function CheckboxesGroup1() {
  const classes = useStylesCheckbox();
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    gilad: true,
    jason: false
  });

  const handleChange = name => event => {
    setState(_objectSpread({}, state, {
      [name]: event.target.checked
    }));
  };

  const {
    gilad,
    jason
  } = state;
  const error = [gilad, jason].filter(v => v).length !== 2;
  return __jsx("div", {
    className: classes.root
  }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12___default.a, {
    component: "fieldset",
    className: classes.formControl
  }, __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_13___default.a, null, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_14___default.a, {
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_16___default.a, {
      checked: gilad,
      onChange: handleChange("gilad"),
      value: "gilad"
    }),
    label: "\u0645\u0627\u0647\u0627\u0646 \u0627\u06CC\u0631"
  }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_14___default.a, {
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_16___default.a, {
      checked: jason,
      onChange: handleChange("jason"),
      value: "jason"
    }),
    label: "\u062A\u0627\u0628\u0627\u0646 \u0627\u06CC\u0631"
  }))));
}

function CheckboxesGroup2() {
  const classes = useStylesCheckbox();
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    gilad: true
  });

  const handleChange = name => event => {
    setState(_objectSpread({}, state, {
      [name]: event.target.checked
    }));
  };

  const {
    gilad
  } = state;
  const error = [gilad].filter(v => v).length !== 2;
  return __jsx("div", {
    className: classes.root
  }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12___default.a, {
    component: "fieldset",
    className: classes.formControl
  }, __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_13___default.a, null, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_14___default.a, {
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_16___default.a, {
      checked: gilad,
      onChange: handleChange("gilad"),
      value: "gilad"
    }),
    label: "\u0646\u0645\u0627\u06CC\u0634 \u0647\u062A\u0644 \u0647\u0627 \u0628\u062F\u0648\u0646 \u0642\u06CC\u0645\u062A"
  }))));
}

const Filter = props => {
  const {
    0: showChild,
    1: setShowChild
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    allPackages
  } = props;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    function showCm() {
      setShowChild(true);
    }

    showCm();
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    className: "filter-box"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardBody"], null, __jsx(StarFilter, {
    show: showChild
  }), __jsx(PreisFilter, _extends({}, props, {
    show: showChild
  })), __jsx(AirlinesFilter, {
    show: showChild
  })))));
};

const mapStateToProps = state => {
  const basicDatas = state.basicDatasReducer.basicDatas;
  const preis = state.tourFilterReducer.preis;
  const rates = state.tourFilterReducer.rates;
  const airLines = state.tourFilterReducer.airLines;
  const filteredResults = state.searchTourReducer.filteredResults;
  return {
    rates,
    preis,
    airLines,
    basicDatas,
    filteredResults
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Filter)); //export default Filter;

/***/ })

};;
//# sourceMappingURL=5.js.map