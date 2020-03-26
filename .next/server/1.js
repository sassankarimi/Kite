exports.ids = [1];
exports.modules = {

/***/ "./components/tour/tourResult.js":
/*!***************************************!*\
  !*** ./components/tour/tourResult.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_basicdatas_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/basicdatas/action */ "./redux/basicdatas/action.js");
/* harmony import */ var _redux_payment_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/payment/action */ "./redux/payment/action.js");
/* harmony import */ var _redux_tourFilters_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/tourFilters/action */ "./redux/tourFilters/action.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/go */ "react-icons/go");
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_go__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_rating__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-rating */ "react-rating");
/* harmony import */ var react_rating__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_rating__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/fi */ "react-icons/fi");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-html-parser */ "react-html-parser");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _ports__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ports */ "./ports.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-number-format */ "react-number-format");
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_number_format__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_16__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 //redux




 //UI Libraries












 //axios


 //utilites




var moment = __webpack_require__(/*! moment-jalaali */ "moment-jalaali");

var base64 = __webpack_require__(/*! base-64 */ "base-64");

var utf8 = __webpack_require__(/*! utf8 */ "utf8");

function Transfer1(props) {
  return __jsx("div", {
    className: "transfer-line"
  }, __jsx("span", {
    className: "tl-1"
  }, props.sourceFlight.SourceCityTitle_Going), __jsx("span", {
    className: "tld-1"
  }, props.sourceFlight.LocalARRTime_Going), __jsx("span", {
    className: "transfer-icon transfer-icon1"
  }, __jsx(react_icons_go__WEBPACK_IMPORTED_MODULE_7__["GoPrimitiveDot"], null)), __jsx("span", {
    className: "tl-2"
  }, props.sourceFlight.AirLineTitle_Going), __jsx("span", {
    className: "transfer-icon transfer-icon2"
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_8__["IoIosAirplane"], null)), __jsx("span", {
    className: "tl-3"
  }, props.sourceFlight.DestAirportTitle_Going), __jsx("span", {
    className: "tld-3"
  }, props.sourceFlight.LocalDEPTime_Going), __jsx("span", {
    className: "transfer-icon transfer-icon3"
  }, __jsx(react_icons_go__WEBPACK_IMPORTED_MODULE_7__["GoPrimitiveDot"], null)), __jsx("span", {
    className: "transfer-icon transfer-icon4"
  }, __jsx(react_icons_go__WEBPACK_IMPORTED_MODULE_7__["GoArrowLeft"], null)), __jsx("span", {
    className: "tl-4"
  }, "\u0647\u062A\u0644"), __jsx("span", {
    className: "transfer-icon transfer-icon5"
  }, __jsx(react_icons_go__WEBPACK_IMPORTED_MODULE_7__["GoPrimitiveDot"], null)));
}

function Transfer2(props) {
  return __jsx("div", {
    className: "transfer-line"
  }, __jsx("span", {
    className: "tl-1"
  }, "\u0647\u062A\u0644"), __jsx("span", {
    className: "transfer-icon transfer-icon1"
  }, __jsx(react_icons_go__WEBPACK_IMPORTED_MODULE_7__["GoPrimitiveDot"], null)), __jsx("span", {
    className: "transfer-icon transfer-icon6"
  }, __jsx(react_icons_go__WEBPACK_IMPORTED_MODULE_7__["GoArrowLeft"], null)), __jsx("span", {
    className: "tl-3"
  }, props.destFlight.SourceAirportTitle_Coming), __jsx("span", {
    className: "tld-3"
  }, props.destFlight.LocalARRTime_Coming), __jsx("span", {
    className: "transfer-icon transfer-icon3"
  }, __jsx(react_icons_go__WEBPACK_IMPORTED_MODULE_7__["GoPrimitiveDot"], null)), __jsx("span", {
    className: "tl-5"
  }, props.destFlight.AirLineTitle_Coming), __jsx("span", {
    className: "transfer-icon transfer-icon7"
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_8__["IoIosAirplane"], null)), __jsx("span", {
    className: "tl-4"
  }, props.destFlight.DestCityTitle_Coming), __jsx("span", {
    className: "tld-4"
  }, props.destFlight.LocalDEPTime_Coming), __jsx("span", {
    className: "transfer-icon transfer-icon5"
  }, __jsx(react_icons_go__WEBPACK_IMPORTED_MODULE_7__["GoPrimitiveDot"], null)));
}

const TourResult = props => {
  const {
    0: allIsOpen,
    1: setAllIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.collapseToggle);
  const {
    0: allIsOpenFlight,
    1: setAllIsOpenFlight
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.toggleDefaultFlight);
  const {
    0: forceRender,
    1: setForceRender
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(new Date().getTime());
  const {
    0: forceRender1,
    1: setForceRender1
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(new Date().getTime());
  const {
    packages
  } = props;
  const {
    0: packageRows,
    1: setPackagesRow
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(packages.PackageRow);
  const [selectedValue, setSelectedValue] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);
  const {
    0: rules,
    1: setRules
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: activeTab,
    1: setActiveTab
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(`${props.index}01`);
  const {
    0: modal,
    1: setModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: ruleModal,
    1: setRuleModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const modalToggle = () => setModal(!modal);

  const tourRuleToggleState = () => setRuleModal(!ruleModal); //replace space with "-"


  let tourName = packages.PackageInfo.Title.replace(/ /g, "-");
  if (tourName.substr(tourName.length - 1, 1) === "-") tourName = tourName.substr(0, tourName.length - 1); // merge package Number with package Title

  let PackageNumber = packages.PackageInfo.PackageNumber; //used in flight details

  const tabToggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }; //tour rules ("axios")


  function tourRuleToggle() {
    let pId = packages.PackageInfo.PackageId;
    axios__WEBPACK_IMPORTED_MODULE_14___default.a.get(`${_ports__WEBPACK_IMPORTED_MODULE_13__["default"].domain}${_ports__WEBPACK_IMPORTED_MODULE_13__["default"].GetPackageRules}?Id=${pId}`).then(function (response) {
      // console.log(response);
      switch (response.status) {
        case 200:
          return response.data;

        default:
          return false;
      }
    }).catch(function (error) {
      return Promise.reject(error);
    }).then(data => {
      if (data) {
        // console.log("rules:",data);
        var encoded = unescape(data.PackageRules);
        var bytes = base64.decode(encoded);
        var html = utf8.decode(bytes);
        setRules(html);
      } else {
        //alert("nothing");
        setRules("");
      }
    });
    setRuleModal(!ruleModal);
  } //toggle room booking


  function toggle(i) {
    let tempArrayAllCollapse = allIsOpen;
    tempArrayAllCollapse[props.index][i] = !allIsOpen[props.index][i];
    props.dispatch(Object(_redux_basicdatas_action__WEBPACK_IMPORTED_MODULE_2__["set_package_collapse"])(tempArrayAllCollapse));
    setAllIsOpen(tempArrayAllCollapse);
    setForceRender(new Date().getTime()); //console.log("tempArrayAllCollapse", tempArrayAllCollapse);
  } //toggle filght description


  function flightToggle(idx) {
    let tempArrayAllCollapse = allIsOpenFlight;
    const temp = [];

    for (var i = 0; i < tempArrayAllCollapse.length; i++) {
      temp.push(new Array(tempArrayAllCollapse[i].length).fill(false)); //temp[i].push(false); 
    } //console.log("tempArrayAllCollapse[0]",temp)


    temp[props.index][idx] = !allIsOpenFlight[props.index][idx];
    setAllIsOpenFlight(temp);
    props.dispatch(Object(_redux_basicdatas_action__WEBPACK_IMPORTED_MODULE_2__["toggle_flight"])(temp));
    setForceRender1(new Date().getTime());
    setActiveTab(`${props.index}${idx}1`);
  } //prepare data for payment page


  function setPackageInfo(hotelLists, roomPrices, packageRowId, totalPrice, PackageHotelRowId) {
    let hotelPrice = [];
    let PackageHotelPrice = packageRows[packageRowId].PackageHotelPrice;

    for (var i = 0; i < PackageHotelPrice.length; i++) {
      for (var j = 0; j < packages.Room_Price.length; j++) {
        let flag = false;
        let total = 0;
        let TotalBeforeSpecial = 0;
        let SpecialAmount = "";
        let SpecialType = "";

        if (PackageHotelPrice[i].PackageHotelId === packages.Room_Price[j].PackageHotelId) {
          for (var k = 0; k < packages.Room_Price[j].Room.length; k++) {
            total += packages.Room_Price[j].Room[k].Total;
            TotalBeforeSpecial += packages.Room_Price[j].Room[k].TotalBeforeSpecial;

            if (k === packages.Room_Price[j].Room.length - 1) {
              SpecialAmount = packages.Room_Price[j].Room[k].SpecialAmount;
              SpecialType = packages.Room_Price[j].Room[k].SpecialAmount;
            }
          }

          flag = true;
        }

        if (flag) {
          hotelPrice.push({
            PackageHotelId: packages.Room_Price[j].PackageHotelId,
            Total: total,
            SpecialAmount: SpecialAmount,
            SpecialType: SpecialType,
            TotalBeforeSpecial: TotalBeforeSpecial,
            Title: PackageHotelPrice[i].Title,
            Room: packages.Room_Price[j].Room
          });
          break;
        }
      }
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
    }); //sum of HotelLength

    let sumNights = 0;

    for (var j = 0; j < hotelLists.length; j++) {
      sumNights += parseInt(hotelLists[j].HotelLength);
    }

    let visaLength = packages.Visa.length;
    let myObj = [{
      Flight: packages.Flight[0],
      Hotel: hotelLists,
      Services: packages.Services,
      Supplier: packages.Supplier,
      Adult: adult || 2,
      Child1: child1,
      Child2: child2,
      Child: child1 + child2,
      Infant: infant || 0,
      TotalPrice: totalPrice,
      RoomPrices: roomPrices,
      FlightID: packages.Flight[0].PackageFlightId,
      Insurance: packages.Insurance.hasOwnProperty("Id") ? true : false,
      InsuranceId: packages.Insurance.hasOwnProperty("Id") ? packages.Insurance.Id : null,
      InsuranceAdultPrice: packages.Insurance.hasOwnProperty("AdultPrice") ? packages.Insurance.AdultPrice : null,
      InsuranceOldPrice: packages.Insurance.hasOwnProperty("OldPrice") ? packages.Insurance.OldPrice : null,
      Visa: visaLength > 0 ? true : false,
      VisaPrice: visaLength > 0 ? packages.Visa[0].Price : 0,
      VisaId: visaLength > 0 ? packages.Visa[0].Price : 0,
      Services: packages.Services,
      RoomRules: props.searchParams.roomRules,
      RoomInfo: hotelPrice,
      packageId: packages.PackageInfo.PackageId,
      PackageHotelRowId: PackageHotelRowId,
      PackageLength: sumNights
    }];
    props.dispatch(Object(_redux_payment_action__WEBPACK_IMPORTED_MODULE_3__["add"])(myObj.slice()));
    props.changeDisplay();
  } //calculate each tour price


  function computingPackagePrice(PackageHotelId, Title, HotelLists, packageRowId, PackageHotelRowId) {
    var roomPrices = [];

    for (var i = 0; i < packages.Room_Price.length; i++) {
      if (PackageHotelId === packages.Room_Price[i].PackageHotelId) {
        roomPrices = packages.Room_Price[i].Room;
        break;
      }
    }

    let totalPrice = 0;

    for (var i = 0; i < roomPrices.length; i++) {
      totalPrice += roomPrices[i].Total;
    }

    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("tr", null, __jsx("td", {
      className: "hotel-room-td"
    }, Title), __jsx("td", {
      className: "price-td"
    }, HotelPriceFormat(totalPrice), "\u0631\u06CC\u0627\u0644", __jsx("span", {
      className: "btn choose-room",
      onClick: () => setPackageInfo(HotelLists, roomPrices, packageRowId, totalPrice, PackageHotelRowId)
    }, "\u0631\u0632\u0631\u0648"))));
  } //compute minimum price


  function computingMinimumPrice(packageHotelPrice, roomPrices) {
    let allPrices = [];

    for (var i = 0; i < packageHotelPrice.length; i++) {
      for (var j = 0; j < roomPrices.length; j++) {
        var tourPrice = 0;

        if (packageHotelPrice[i].PackageHotelId === roomPrices[j].PackageHotelId) {
          for (var k = 0; k < roomPrices[j].Room.length; k++) {
            tourPrice += roomPrices[j].Room[k].Total;
          }
        }

        allPrices.push(tourPrice);
      }
    }

    var minimumPriceValue = Math.min.apply(null, allPrices);
    return minimumPriceValue;
  } //utility


  function HotelPriceFormat(num) {
    return __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_15___default.a, {
      value: num,
      displayType: 'text',
      thousandSeparator: true,
      renderText: num => __jsx("div", null, num)
    });
  } //defines tour category type


  function categoryDisplayString(type) {
    if (type === "Air") return "تور هوایی";
    if (type === "Grand") return "تور زمینی";
    if (type === "Hiking") return "تور طبیعت گردی";
  } // const [airlines , setAirlines] = React.useState([]);
  // function AirlineNames (){
  //   for(var i=0;i<packages.Flight.length;i++){
  //     setAirlines(packages.Flight[i].AirLineTitle_Going);
  //     //setAirlines(packages.Flight[i].AirLineTitle_Coming);
  //   }
  //   return airlines;
  // }
  // console.log("Flight", AirlineNames());
  //replace space with "-"
  // let tourName=packages.PackageInfo.Title.replace(/ /g,"-");
  // if(tourName.substr(tourName.length-1,1)==="-")
  // tourName=tourName.substr(0,tourName.length-1);
  // merge package Number with package Title
  // let PackageNumber=packages.PackageInfo.PackageNumber


  return __jsx("div", null, packageRows.map((packageBox, idx) => {
    return __jsx("div", {
      className: "result-box"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Card"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardBody"], null, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-md-10"
    }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, packageBox.PackageHotelList.length > 1 ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, packageBox.PackageHotelList.map((item, index) => {
      return __jsx("div", {
        className: "row border-bottom"
      }, __jsx("div", {
        className: "col-md-4"
      }, __jsx("div", {
        className: "img-part"
      }, __jsx("img", {
        src: `${_ports__WEBPACK_IMPORTED_MODULE_13__["default"].imgDomainRoutes}${item.FileName}`,
        alt: item.HotelTitle
      }))), __jsx("div", {
        className: "col-md-8"
      }, __jsx("div", {
        className: "row"
      }, __jsx("div", {
        className: "col-md-8 no-padding-lg"
      }, __jsx("span", {
        className: "city-title"
      }, item.CitiesTitle, __jsx("span", {
        style: {
          paddingLeft: 5,
          paddingRight: 5
        }
      }, "-"), item.LocationTitle), __jsx("h4", null, item.HotelTitle), __jsx("div", {
        className: "stars"
      }, __jsx(react_rating__WEBPACK_IMPORTED_MODULE_9___default.a, {
        key: item.HotelId // style={{ position: "absolute", left: 20 }}
        ,
        emptySymbol: __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_6__["MdStarBorder"], {
          color: "#73c9ca",
          size: "19"
        }),
        fullSymbol: __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_6__["MdStar"], {
          color: "#73c9ca",
          size: "19"
        }),
        fractions: 1,
        start: 0,
        stop: item.HotelRate,
        initialRating: item.HotelRate,
        readonly: true
      })), __jsx("div", {
        className: "row point-items"
      }, __jsx("div", {
        className: "col-md-12 pd030-xs"
      }, __jsx("span", null, "\u0645\u06A9\u0627\u0646 :"), __jsx("span", null, packages.Flight[0].DestCityTitle_Going)), __jsx("div", {
        className: "col-md-12 check-inout pd030-xs"
      }, __jsx("span", {
        className: "hotel-length"
      }, item.HotelLength, " \u0634\u0628"), __jsx("span", null, moment(item.CheckIn, 'MM/DD/YYYY').format('jYYYY/jMM/jDD')), __jsx("span", null, "-"), __jsx("span", null, moment(item.CheckOut, 'MM/DD/YYYY').format('jYYYY/jMM/jDD'))), __jsx("div", {
        style: {
          fontFamily: "Arial"
        }
      }, __jsx("span", {
        className: "hotel-length ltr"
      }, item.HotelLength.toString(), "Nights"), __jsx("span", null, moment(item.CheckIn, 'MM/DD/YYYY').format('YYYY/MM/jDD')), __jsx("span", null, "-"), __jsx("span", null, moment(item.CheckOut, 'MM/DD/YYYY').format('YYYY/MM/jDD'))))))));
    }), __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-md-6"
    }, __jsx("div", {
      className: "providers multi-hotel"
    }, __jsx("span", null, "\u062A\u0627\u0645\u06CC\u0646 \u06A9\u0646\u0646\u062F\u0647 \u0647\u0627:"), packages.Supplier.map(sup => {
      return __jsx("span", null, __jsx("span", {
        className: "numbers"
      }, sup.Title));
    })), __jsx("div", {
      className: "tours-tag multi-hotel"
    }, __jsx("span", null, categoryDisplayString(packages.Type)))), __jsx("div", {
      className: "col-md-6"
    }, __jsx("div", {
      className: "service-tag"
    }, packages.Services && packages.Services.length > 0 ? __jsx("div", null, __jsx("img", {
      src: __webpack_require__(/*! ../../img/breakfast.png */ "./img/breakfast.png")
    }), __jsx("span", null, "\u062E\u062F\u0645\u0627\u062A")) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null), packages.Visa && packages.Visa.length ? __jsx("div", null, __jsx("img", {
      src: __webpack_require__(/*! ../../img/tour-visa.png */ "./img/tour-visa.png")
    }), __jsx("span", null, "\u0648\u06CC\u0632\u0627")) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null), __jsx("div", null, __jsx("img", {
      src: __webpack_require__(/*! ../../img/transfer.png */ "./img/transfer.png")
    }), __jsx("span", null, "\u062A\u0631\u0627\u0646\u0633\u0641\u0631")), packages.Insurance && packages.Insurance.ID ? __jsx("div", null, __jsx("img", {
      src: __webpack_require__(/*! ../../img/tour-insurance.png */ "./img/tour-insurance.png")
    }), __jsx("span", null, "\u0628\u06CC\u0645\u0647")) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null))))) : __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-md-4"
    }, __jsx("div", {
      className: "img-part"
    }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("img", {
      src: `${_ports__WEBPACK_IMPORTED_MODULE_13__["default"].imgDomainRoutes}${packageBox.PackageHotelList[0].FileName}`,
      alt: packageBox.PackageHotelList[0].HotelTitle
    })))), __jsx("div", {
      className: "col-md-8"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-md-8 no-padding-lg"
    }, packageBox.PackageHotelList.map(item => {
      return __jsx("div", {
        className: "pd015-xs"
      }, __jsx("span", {
        className: "city-title none-xs"
      }, item.CitiesTitle, __jsx("span", {
        style: {
          paddingLeft: 5,
          paddingRight: 5
        }
      }, "-"), item.LocationTitle), __jsx("h4", null, item.HotelTitle), __jsx("div", {
        className: "stars"
      }, __jsx(react_rating__WEBPACK_IMPORTED_MODULE_9___default.a, {
        key: item.HotelId,
        emptySymbol: __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_6__["MdStarBorder"], {
          color: "#73c9ca",
          size: "19"
        }),
        fullSymbol: __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_6__["MdStar"], {
          color: "#73c9ca",
          size: "19"
        }),
        fractions: 1,
        start: 0,
        stop: item.HotelRate,
        initialRating: item.HotelRate,
        readonly: true
      })), __jsx("div", {
        className: "package-link"
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_16___default.a, {
        href: {
          pathname: "/tour",
          query: {
            name: tourName,
            num: PackageNumber
          }
        },
        as: `tour/${PackageNumber}/${tourName}`
      }, __jsx("a", null, "\u062C\u0632\u06CC\u06CC\u0627\u062A \u062A\u0648\u0631"))), __jsx("div", {
        className: "tours-tag none-lg none-s inline-xs",
        style: {
          display: 'inline',
          paddingRight: 10
        }
      }, __jsx("span", null, categoryDisplayString(packages.Type))));
    }), __jsx("div", {
      className: "row point-items"
    }, __jsx("div", {
      className: "col-md-12 pd030-xs"
    }, __jsx("span", null, "\u0645\u06A9\u0627\u0646 :"), __jsx("span", null, packages.Flight[0].DestCityTitle_Going)), __jsx("div", {
      className: "col-md-12 check-inout pd030-xs"
    }, packageBox.PackageHotelList.map(item => {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", null, __jsx("span", {
        className: "hotel-length"
      }, item.HotelLength, " \u0634\u0628"), __jsx("span", null, moment(item.CheckIn, 'MM/DD/YYYY').format('jYYYY/jMM/jDD')), __jsx("span", null, "-"), __jsx("span", null, moment(item.CheckOut, 'MM/DD/YYYY').format('jYYYY/jMM/jDD'))), __jsx("div", {
        style: {
          fontFamily: "Arial"
        }
      }, __jsx("span", {
        className: "hotel-length"
      }, item.HotelLength.toString(), "Nights"), __jsx("span", null, moment(item.CheckIn, 'MM/DD/YYYY').format('YYYY/MM/jDD')), __jsx("span", null, "-"), __jsx("span", null, moment(item.CheckOut, 'MM/DD/YYYY').format('YYYY/MM/jDD'))));
    })), __jsx("div", {
      className: "col-md-12 providers pd030-xs"
    }, __jsx("span", null, "\u062A\u0627\u0645\u06CC\u0646 \u06A9\u0646\u0646\u062F\u0647 \u0647\u0627:"), packages.Supplier.map(sup => {
      return __jsx("span", null, __jsx("span", {
        className: "numbers"
      }, sup.Title));
    })))), __jsx("div", {
      className: "col-md-4 pl-5-lg pr-5-lg "
    }, __jsx("div", {
      className: "service-tag none-xs"
    }, packages.Services && packages.Services.length > 0 ? __jsx("div", null, __jsx("img", {
      src: __webpack_require__(/*! ../../img/breakfast.png */ "./img/breakfast.png")
    }), __jsx("span", null, "\u062E\u062F\u0645\u0627\u062A")) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null), packages.Visa && packages.Visa.length > 0 ? __jsx("div", null, __jsx("img", {
      src: __webpack_require__(/*! ../../img/tour-visa.png */ "./img/tour-visa.png")
    }), __jsx("span", null, "\u0648\u06CC\u0632\u0627")) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null), __jsx("div", null, __jsx("img", {
      src: __webpack_require__(/*! ../../img/transfer.png */ "./img/transfer.png")
    }), __jsx("span", null, "\u062A\u0631\u0627\u0646\u0633\u0641\u0631")), packages.Insurance && packages.Insurance.Id ? __jsx("div", null, __jsx("img", {
      src: __webpack_require__(/*! ../../img/tour-insurance.png */ "./img/tour-insurance.png")
    }), __jsx("span", null, "\u0628\u06CC\u0645\u0647")) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null)), __jsx("div", {
      className: "tours-tag"
    }, __jsx("span", {
      className: "none-xs"
    }, categoryDisplayString(packages.Type)), __jsx("span", {
      onClick: tourRuleToggle,
      className: "tour-rule-btn none-lg none-s inline-xs"
    }, "\u0642\u0648\u0627\u0646\u06CC\u0646 \u062A\u0648\u0631"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      onClick: modalToggle,
      className: "modal-btn none-lg none-s inline-xs"
    }, "\u062E\u062F\u0645\u0627\u062A \u0642\u0627\u0628\u0644 \u0627\u0631\u0627\u06CC\u0647"))))))), __jsx("div", {
      className: "row bottom-line"
    }, __jsx("div", {
      className: "col-md-11"
    }, __jsx("div", {
      className: "row",
      style: {
        paddingRight: 15
      }
    }, __jsx("div", {
      className: "col-md-6 border-top",
      style: {
        paddingRight: 0
      }
    }, __jsx("label", null, "\u0631\u0641\u062A:"), __jsx(Transfer1, {
      sourceFlight: packages.Flight[0]
    })), __jsx("div", {
      className: "col-md-6 border-right no-padding-lg border-top pr-0-xs",
      style: {
        height: 75
      }
    }, __jsx("label", null, "\u0628\u0631\u06AF\u0634\u062A:"), __jsx(Transfer2, {
      destFlight: packages.Flight[0]
    })))), __jsx("div", {
      className: "col-md-1 no-padding border-right border-top"
    }, __jsx("span", {
      className: "more-collapse",
      onClick: () => flightToggle(idx)
    }, "\u062C\u0632\u06CC\u06CC\u0627\u062A \u067E\u0631\u0648\u0627\u0632 ", __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_8__["IoIosArrowDropdown"], {
      className: "none-lg"
    }))), __jsx("div", {
      className: "col-md-12 flight-table"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Collapse"], {
      isOpen: allIsOpenFlight[props.index][idx]
    }, __jsx("div", null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"], {
      tabs: true
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["NavItem"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["NavLink"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_10___default()({
        active: activeTab === `${props.index}${idx}1`
      }),
      onClick: () => {
        tabToggle(`${props.index}${idx}1`);
      }
    }, "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u067E\u0631\u0648\u0627\u0632"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["TabContent"], {
      activeTab: activeTab
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["TabPane"], {
      tabId: `${props.index}${idx}1`
    }, __jsx("div", {
      className: "flight-detail"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      sm: "6"
    }, __jsx("h6", null, "\u067E\u0631\u0648\u0627\u0632 \u0631\u0641\u062A", __jsx("span", null, "(", packages.Flight[0].LocalARRDate_Going, ")")), __jsx("div", {
      className: "airline-details"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-md-3"
    }, __jsx("img", {
      src: `${_ports__WEBPACK_IMPORTED_MODULE_13__["default"].imgDomainRoutes}${packages.Flight[0].FileName_Going}`
    })), __jsx("div", {
      className: "col-md-9 no-padding-lg"
    }, __jsx("span", null, packages.Flight[0].AirLineTitle_Going), __jsx("span", null, "-"), __jsx("span", null, packages.Flight[0].FlightClassTitle_Going), __jsx("p", null, "\u067E\u0631\u0648\u0627\u0632 \u0634\u0645\u0627\u0631\u0647\u0621 ", packages.Flight[0].FlightNo_Going)))), __jsx("div", {
      className: "source-part"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-md-3 col-3"
    }, __jsx("span", {
      className: "source-label"
    }, "\u0645\u0628\u062F\u0627\u0621 :")), __jsx("div", {
      className: "col-md-9 col-9 no-padding-lg"
    }, __jsx("span", {
      className: "source-time"
    }, packages.Flight[0].LocalARRTime_Going), __jsx("span", {
      className: "source-city"
    }, packages.Flight[0].SourceCountryTitle_Going, " (", packages.Flight[0].SourceCityTitle_Going, ")"), __jsx("span", {
      className: "airport-name"
    }, packages.Flight[0].SourceAirportTitle_Going)))), __jsx("div", {
      className: "source-part"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-md-3 col-3"
    }, __jsx("span", {
      className: "source-label"
    }, "\u0645\u0642\u0635\u062F :")), __jsx("div", {
      className: "col-md-9 col-9 no-padding-lg"
    }, __jsx("span", {
      className: "source-time"
    }, packages.Flight[0].LocalDEPTime_Going), __jsx("span", {
      className: "source-city"
    }, packages.Flight[0].DestCountryTitle_Going, " (", packages.Flight[0].DestCityTitle_Going, ")"), __jsx("span", {
      className: "airport-name"
    }, packages.Flight[0].DestAirportTitle_Going))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      sm: "6"
    }, __jsx("h6", null, "\u067E\u0631\u0648\u0627\u0632 \u0628\u0631\u06AF\u0634\u062A", __jsx("span", null, "(", packages.Flight[0].LocalARRDate_Coming, ")")), __jsx("div", {
      className: "airline-details"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-md-3"
    }, __jsx("img", {
      src: `${_ports__WEBPACK_IMPORTED_MODULE_13__["default"].imgDomainRoutes}${packages.Flight[0].FileName_Coming}`
    })), __jsx("div", {
      className: "col-md-9 no-padding-lg"
    }, __jsx("span", null, packages.Flight[0].AirLineTitle_Coming), __jsx("span", null, "-"), __jsx("span", null, packages.Flight[0].FlightClassTitle_Coming), __jsx("p", null, "\u067E\u0631\u0648\u0627\u0632 \u0634\u0645\u0627\u0631\u0647\u0621 ", packages.Flight[0].FlightNo_Coming)))), __jsx("div", {
      className: "source-part"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-md-3 col-3"
    }, __jsx("span", {
      className: "source-label"
    }, "\u0645\u0628\u062F\u0627\u0621 :")), __jsx("div", {
      className: "col-md-9 col-9 no-padding-lg"
    }, __jsx("span", {
      className: "source-time"
    }, packages.Flight[0].LocalARRTime_Coming), __jsx("span", {
      className: "source-city"
    }, packages.Flight[0].SourceCountryTitle_Coming, " (", packages.Flight[0].SourceCityTitle_Coming, ")"), __jsx("span", {
      className: "airport-name"
    }, packages.Flight[0].SourceAirportTitle_Coming)))), __jsx("div", {
      className: "source-part"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-md-3 col-3"
    }, __jsx("span", {
      className: "source-label"
    }, "\u0645\u0642\u0635\u062F :")), __jsx("div", {
      className: "col-md-9 col-9 no-padding-lg"
    }, __jsx("span", {
      className: "source-time"
    }, packages.Flight[0].LocalDEPTime_Coming), __jsx("span", {
      className: "source-city"
    }, packages.Flight[0].DestCountryTitle_Coming, " (", packages.Flight[0].DestCityTitle_Coming, ")"), __jsx("span", {
      className: "airport-name"
    }, packages.Flight[0].DestAirportTitle_Coming)))))))))))), __jsx("div", {
      className: "col-md-12 price-table"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Collapse"], {
      isOpen: allIsOpen[props.index][idx]
    }, __jsx("div", null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Table"], {
      key: forceRender
    }, __jsx("tbody", null, packageBox.PackageHotelPrice.map((price, index) => {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, computingPackagePrice(price.PackageHotelId, price.Title, packageBox.PackageHotelList, idx, price.PackageHotelRowId));
    })))))))), __jsx("div", {
      className: "col-md-2 border-right pr-5-lg pr-5-s"
    }, __jsx("span", {
      onClick: tourRuleToggle,
      className: "tour-rule-btn none-xs"
    }, "\u0642\u0648\u0627\u0646\u06CC\u0646 \u062A\u0648\u0631"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
      isOpen: ruleModal,
      toggle: tourRuleToggleState,
      className: "service-modal"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ModalHeader"], {
      toggle: tourRuleToggleState
    }, __jsx("span", {
      className: "service-title"
    }, "\u0642\u0648\u0627\u0646\u06CC\u0646 \u062A\u0648\u0631")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ModalBody"], null, react_html_parser__WEBPACK_IMPORTED_MODULE_12___default()(rules))), packageBox.PackageHotelList.length > 1 ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("strong", {
      className: "service-title none-xs"
    }, "\u062E\u062F\u0645\u0627\u062A \u0642\u0627\u0628\u0644 \u0627\u0631\u0627\u06CC\u0647"), __jsx("ul", {
      className: "services-ul none-xs"
    }, packages.Services.map((item, index) => {
      return __jsx("li", null, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_11__["FiPlusCircle"], null), __jsx("span", null, item.ServiceTitle));
    }))) : __jsx("div", null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      onClick: modalToggle,
      className: "modal-btn none-xs"
    }, "\u062E\u062F\u0645\u0627\u062A \u0642\u0627\u0628\u0644 \u0627\u0631\u0627\u06CC\u0647"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
      isOpen: modal,
      toggle: modalToggle,
      className: "service-modal"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ModalHeader"], {
      toggle: modalToggle
    }, __jsx("span", {
      className: "service-title"
    }, "\u062E\u062F\u0645\u0627\u062A \u0642\u0627\u0628\u0644 \u0627\u0631\u0627\u06CC\u0647")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ModalBody"], null, __jsx("ul", null, packages.Services.map((item, index) => {
      return __jsx("li", null, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_8__["IoIosCheckmarkCircleOutline"], null), item.ServiceTitle);
    }))))), __jsx("div", {
      className: "left-part"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-md-12 col-6"
    }, __jsx("div", {
      className: "price"
    }, __jsx("strong", null, HotelPriceFormat(computingMinimumPrice(packageBox.PackageHotelPrice, packages.Room_Price))), __jsx("span", null, "\u0631\u06CC\u0627\u0644")), __jsx("span", {
      className: "tag"
    }, "\u067E\u0631\u0648\u0627\u0632 + \u0647\u062A\u0644")), __jsx("div", {
      className: "col-md-12 col-6"
    }, __jsx("button", {
      className: "btn reserve-btn",
      onClick: () => toggle(idx)
    }, __jsx("a", null, "\u0627\u0646\u062A\u062E\u0627\u0628 \u0627\u062A\u0627\u0642"))))))))));
  }));
};

const mapStateToProps = state => {
  const collapseToggle = state.basicDatasReducer.collapseToggle;
  const toggleDefaultFlight = state.basicDatasReducer.toggleDefaultFlight;
  return {
    collapseToggle,
    toggleDefaultFlight
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(TourResult));

/***/ }),

/***/ "./img/breakfast.png":
/*!***************************!*\
  !*** ./img/breakfast.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAA2CAYAAABqbKGZAAAHSUlEQVRogc2aeYxdcxTHP/PetBRRaim1tIRYx1Jra6whKEVKEFuido3axaGpsSQnVNE/JAixhYoI2qg9KI0UrWVQHVRbrRoVtAyq2nn+OOc3974378299715U9/k5vx+v3fv+Z1z7+93tt9rKBQKAIhIE/AJkKfv8QOwbemgqmZikou1R7NuFAEYAvSvlUljrL2T03+B03p4ZhgwxdvjgcUlv7+AvaSngGcT5h8O3AI0AIOBJYkS94C4Mns4Xamq0wFEpNwzw4iUebGMAAWnnwDTE+Z/C1MGYM8yvDIhvsy2d7os4ZlNKrRLsUGK+TuAtd4ekeL+HhFXJgg2r1amGbHK6fBaGcWVCRvwq1qZZsSvTnetlVEOQEQGYZsQYEGtTDMiGJD1amUUvswORMp8WSvTjBgLzADOqZVRUOYApwWgLcPzbcAY4AugpUoZvgFOBGZW+XwXgmk+0Om/qvp3hueXAwO9vQdwA8X7MAnB2OwDrMZM9S7e/zkDH4hN3OT0nxTPxKOEoMhqpwOIlmtSNNEC7ObXAOAk4EgsGtg3hRzdEJQZ4rQjxTM/EjnGlcCV2OYdRXE0kLRcz3X6m/O52PtrgNdTyNENYZlt5DTJYYZ7TgE2BKbGxl/BooNmzMxO7fZkMX53GqzYCqdZlmkRwoPrO01ryaZTWdhZwMMpeNzudANsyYXYKYdZt8zIiUh/oJ/351TDpEo8jy1ZgAlYXDbb+8cDu2dlmPOHwqad3cO99UAztv/ywDtYfLbG5Xk1K7McMNLbBWBRb0iYAd8BL3k7yHGb0209MkmNHFGAV1DVzLa9FxDShGCMnnHaAGyVhVEOC2XAkrJ1gXFOg48L+U0B+D4LoxyR9it6urGOWAh0ApO9/533X1DVNH6vC43AFt5e2mviZcOYkv5EvzKjEdjY230dLYO9yBFYZWYzLOtcDnwGfJSVWSNRUpYlWq4Fx2MOcjjmMBsq3LdWRNoxE31VmiWXizFb2AuC9oTxWFb5MnAoFg6FuTuxr9JJFPflgW2AC4CVIjJbRIbQA+JxUJqIuRoMwPzXFGBTH/sbeB84Hyuk5LFVkseW/f7Avdg+7nQ5DwKWiMg9lSbKVWj3FkZiUfFQ7/8CXIItr0OAx7AwZnfgayze6wDmAteo6naqmsdqcWtdxqtFZG65yeqhQMB+wLtYVFwAJgGbAw9hjnJ87N6JwM7AmUDw+oNE5EURmaiqY7DqUUgxhotIa+mE9VImj0XPeUyR47AsFGxDjwbuI0rgWrAg9wGias0E4GTgVhEZpqodqjoMeM9/bxKRoui8Xsq8RZRWnE5xsjUFS4nfICoAzsfqEJfF7psK/IQp2ZVnqephRG5krIh0Rdfx8mwlDMQywbToj1krsLX+XMnvrwBbpuDzkaqWjc1UdU8R+cfnmgrsDcnKTMOWxCJgx4R7rwDu9AmCyR1NVB/IjAq17oAg+14ishpYlqTMQBdswxRzX4eZ4XIT1hv9gKFJkx0BHIXtgSQEZ/cX8Ej1cmXGZsBZUOHN+SnaKqxAFxRpxixUQBPwJxblxrGCYrNbNdKcnInIQFyZbtZMRE4DWjEn1uzD7ZhJ/NT74Z5vMX8SR1+fvoWjmLKmuR0zmWuIrFg7tox+iPU7sYTut7qJmRHdlpmqzgrjMWuyD1ZbC5FrcIj/KyQ5zUHAHVhRrwOLtVqIioZ9DhHZVUQOKvdbkjIzgZuxwA/gbSxHn9Z74qWHb/bPgdnlFEpSZhpm1cJxw1wsfC+nTAhNKiVbvYGdiLbGdk67jtyT/MwEvwJGVrqR7rXjeqAp1v7YaVdo1E0ZERkAPIh9gcuxN34ScCkWrszE3sajmCW70u9pxQxFmlPmanGp01WqGvzbXk4L5ZbZ2dhxw8XACT72DJa7P+39sZijGgcc7mNPOu2HKdWr8OpmOBSLRyThDxgd5ZR5DUtXFxB5/IexLPF+78/AfE4b8KGPvUm0b26sVfgy+ALbj53ARbHxcDA1p5yfWYJvrpifGU9xiLKEMn/cwRQbAZxai9SlEJE2YGvv3qWqy3x8EpG/k7gyWc4yK+FCLHFqxKowo2rglReRW4DriRK9maoqAH4Uc5WPL1XVD+LK7OZ1qmrQhjnVedhyOxrbY+cBT2TgMxarBwzC0o74NnhaVc+O9edjL60AHAvF1mxSNvmL0AkcjFUhj8G+8vpY9eVnLLtMg7uJylEB7cC5qvpmGBCRt4kK/o+r6jwwZVYRfcZq0UCxf2kGPsDW8wzszKUlBZ/rgKuxnKgVmKyq88OPvrRaseN1gM9U9fwuIQqFAl4UyBNZoyzIY9XQ0vLpSMwnha+/CDP5s0iJeD4jIvdhriDw+1RVi47YG8LfGsshIQdPgyGYpx4cG/sVq8y8jhmLP7BlGkc/zHrtj50SNBGFLQXgWVU9s3Syeufoy7Dzn8nYW10P29xn+JUVi4Hj4ksvjr4qOFzr102YhdsBe/tJQWkntnznADeqao/HHP8By2LOaVYOgvUAAAAASUVORK5CYII="

/***/ }),

/***/ "./img/tour-insurance.png":
/*!********************************!*\
  !*** ./img/tour-insurance.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAA2CAYAAABa4LC4AAAFcElEQVRoge2aa4hVVRTHf/eq4ziZjtFL0jSfU0IERaFD9KQwGohCpVHsS5REhEbYWWgQFCwjqCDoQ4UVin0IHxXzIdNIoghfVL6asvGZr0ZzTJ1pXrcPax9nz51z7jm37p2x6A+be/br7P9Ze6+911r7ZoIgeAF4GhhM+XEKeFZVPy2mUyYIgsPANeXhFIk24FFVXZe2QyYIgn3AeOAA0FAmYlVAPVDh8m3AXFVdk6ZzJgiCJuA64GPgoWJHV9XENiJSBfwKVHvFrUB9GolmvedyrslLgYx73g2cA4YBH4rI7KTO2aQGZcBaYA7QCVQCK0VkTqEOA0FyuKo2AI8BHcAQYIWIzI/rMBAkOwFUdRXwCNCCEX0vjuhAkLxWRGaIyAxMmT4Aco5LJNH+IpnBpAUwC/japW3AU/QoVRZYLiK1A0GyBWiMqcvfVQYBUwo1KAtUtVVEHgBuJlowOWAasMzlO/3KfiEJoKrHKHCiicgRekj2wkAoThyq4irSSHIEZoBkoipFBGy6jqhqi1eeASbRozAh2lS1KcW4F5AkyVHAV8D3KdJmERnt9X0F2BHRbqeIPFkMySRJXgLU0FcaUZgCjASOunwNMDRmzAlpCYYdCuEwcBdwGzHT7ZADtqnqj17ZE8DDmCGRc2UZ4DTwUSlJAnzjUiTiTDWnzW8VQyYOF5N2xyJJkkOAl4Hb4xo47QbYDIiqtrryOuA5zBr3p/sPYImqbikVybHA4pTvmg68D3zn8kuwtRyFg0DJSB4GXgVqE9qBGQs/e/llwEKiJfluWoJpSLaTIMkCirMOSO0RFsJ/QnEA7gRujKv0FGe3qm7wyscAdfQ9CM4Da1T1VKlIjgE2klLiInK9t6G/DcyMaVqDaX4qJA1+FtiKrc0O95ufwvIdmHEbYjvmW3fktT2DubWpkSTJ08AdwDgKH4sAB1X1fJhR1aUishw7v33tPquqh0pJEiwkEmf6F4xgFGuSxeFfod3/kywVLiaSf3rP3X5FGsW5CrO6C/k43UCjqv4W9xIRqcQM4GrMbxrmxu/CtqqaOF5+fLIBeDDv3VdiJti4FB/TBExX1ROOVAUwH7gbcxcucwSHY9G0/I/uwgIDAIeAvcAeYFWSJLNYbDENRtB7+dwPvJOyLx5BMBNxLOa6zEwieQyzCSeR7OM0OpchxCjveQcmlQNYkOokdpq1Yx9WiX3kFZj7PAG4BVtqQ9Osyb0uRaLAZt7lPS9Q1Vg/KQoi8iZ2K9KdNsxSEVHWXsSYg/ILRCSLzdIJVf0los+FmUvagoZh8cMfItJa4PKUJKOWyizMC/1CREYW6pMkydGYhkZhKvAGsCkFySiMd79XY1rfEtcwieR+YBFwK32lsRP4tlhmIjIo712dwBARGayqnVF9kkh2Y9L6p8g5gkuB2dgyC5dKJbZHd4jIOWCxqvaanf6KT4YSegbbZnxk6R3ZrceWUGiDlpWkP3Vh7HEBMM+NOxG4AduqvsSOxpOYCw2mtABd5SR53HueBmx0d4lrAERkIfA6ZljMVdXjef1D6bb4W1CO0mI7PWHAuoj6UFIV2Lq8ABEZD9zkslt9SWYxrUvyZXrBc2l7QVXPiEgD8Dhwj4jU5d1zb8HuGHcB+dbTi5ghArA6EwTBfszKOQPsK4ZgClTTY0EdBepUdVtYKSITgea8MPYi4DWX3QTcmwmC4CdgconJxeE0IMAKVT3nV4jIBOB5LPgK8DtQq6p7MkEQ3IdpnB9YKiVymET9QEEjdiN2FItwTMbszvB4bMb+XbABbCtY79LfQppLeQARmQe8hB2HU12KwufAIlXdFRb052XTShH5DLvrrsNs1BHYftqM7QarVfWT/L5/ATOLmhrw44nPAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./img/tour-visa.png":
/*!***************************!*\
  !*** ./img/tour-visa.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAA0CAYAAAD8H6qwAAAE+ElEQVRogdXZaaiVRRgH8N8595ZmkUu70WJhibSBKUUFQQuEoraBBFlJWRl96EMhRkUZRTttVGRlhK0fSgrL8oNJFGFWRgUVlRWttGhli3rv6cMzL2fu6Vzve+69evQPw8w8M+/M/8w88zzPzKnMnTtXwms4EZ22DXTjHZyADQWpn7Fb2yg1RxWT8BtGd2KJIFnDXbgf69tGL7ATzsF8DMOKTpycGu/AlW0i1gw34Qc8gsOq6jp5e9so9Y5HxU5Xq6i0mUwpVLNyR9tYlMBgmaIJmI0jMFLs0jp8JHTsjYFOMFCi92AWdu6lfSLOxz94Fuf1d6Jq312aYrIwYZfrSbI7K3dl5aGYiX9xYX8m7A/RG/GisG+1TP43DlQnuyd+zdpr2BEP47EtTfRWXC108Hs8mZE4FN+oW5ENiWyxssvwSSqfj6e2FNFp6g7hfYzG2an+RCKZW44dE8lrUv0kjMOrqT4DV2wJosXqrRM6em0iU8MtTfofjaOwGJvSXI8LXf029bk1jTFoRO8UOgnD00TXp3pFmKF5YgULvV2K91JbYV1mCre4b6p34rnBJDon5d1ZKlATK/ZdRryxb96/UTZZBCEDJjoZQxKh4UIPiy0nbOUOWKinju6d6h3pu6L/wZl8Y8ovGgyis1P+Pf5M5WPFynVjVYmx/xRWAKZm8k9TPmswiE5M+fJMtl/K/2nomxv5xkPyR8O3hLeCg/oiUcaF7pLyKViTyiNTPjSTFcjt6B54CXtl38xRN2vF2EMGg2ihd7umlKOKA5p8UxPXmzniOpFjWJNv+gw1yxDdlPKf8HUq7ydWqQvvZhNVRCRVSe2LcAr2wZHi0K3FZ6nPnthfT1fcFGV0tDhAK4S+TlT3KBvEihXyo7NJO4Svn5rafk/yBdk3i5KsUdf7RXRlyo/LZF+kfHO61Th5oY9fZrJpDeP1ijJE70v53hiPUfhRusvgtCTbQ2y3rP+olMap/6hVSTYahyTZQ32RKKOjy/CXOAQfZvJCL5foqWOFfHUv473V0HeTCP02i7Iu9O5s4CLlaCavlJDDC3ra3wERnad+qNaLLbsu1WsihDtG6HGxutOTbFJGZCHGCAtCHMYZZQi0EuZNSSR2xiu4QRyYCi7D23gz6788yc4QFqALF+AZYZbgYiVWs1Wir4vonnB5v+DpVD8dYxv6dwk3elWqLxV2uHAAC8QKl0KrV5GbRcBcEye3uFVW8IGwCsXW7y6sQzHHaep+/kElIqaBECUero4Xr2z5IRkqrEIx5ucYkbVXhH5Px6WtTtrf6/KbYkXnCp+ek2k29jrcJoz+4v5MONAHiFtSmoAzxUrvKwj/KH7Q87aBl5ICq/QeQA8K+rv1Wx3bDdGyWz9cyft3P/C3utfrFWWIrsbhA6azebwsbru9ogzRXW35V+kRfXUoQ3SM+t29S9jExn9NOkQ8WhUh4do+xhwq7HCHeIrs02KU1dGVWflkca8vgomOROzeVB+Lc9UDkUZ0CHfbkuFv1Y6OF//wNcNUcZH7uOS4M0QkVQqtEv0hpVEN8m7xuEus1mF9jLNe7zeApmiV6K/i6rs5TGhxzFLYbgz+dkl0Y9tYlEBV/cmmpYh7K2Ga9LxZVbeR83FJ2yj9H2epP5uv6cSpIsgdhgfE//U17fszt5i7UMuNOKkqIpe9hKEunmk6Ut6OVMxdw1fiKX3Nf3uG/ueY6TCTAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./img/transfer.png":
/*!**************************!*\
  !*** ./img/transfer.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAgCAYAAACLmoEDAAACDElEQVRYhc3YPWvVYBiH8V+OBwdbB4uDuin1MwgOUkToUij4tiiCoIgOlYJDIg6iyIPiootUuoggiIu4qINTrTqoCL7QbyAOotaWIkWPQygc0pOco/QkuabkyX+4uHPnyZ1EcRyrkAgTeBpCmOsWbvTfp5AWxjCTJMl4t3DVsjCPzXiYJMmVJEmaecE6yEZtx+fxOEmS4U7BOsguZ873YTZJkgPZYBTHccBAKVqrWenZHTnXr+NCCOEXqewycvukBjzHyRDCXBTH8VcMVW3Uhe+YrEPP9sIAhpoYrNqkCx9xIoTwqon7qhXehW051+5gMoTwjfTBOlaWVQ4PcDCztoBzIYSp9sU67ALrMudvcSqE8DobrMMD1mo7nsZIJ1HqUdlBLGEihDBdFKy6shFmsbebKL1XdhiHcBV//t9tFa0QwqVew71Udgwz2G9tRf+ZItkmLuMRtuBHKUYF5LXBdtzCaNtalJMtjU6VHZdOOqOZ9d/91ykmavtgXI+LSHKyn/GkBKc8FlfaYCduY6QgvBXH+21UwHIDR/FSsWgd+NmQzoobqjbphQamsBtvKnbpxsaVnn0nbYNrOJ0T/oJnJUjlsdi+zy7gjLR/b2BTJvweR9baIITQc7bTPnsXe/Ais56dO0sn73X7Qfqz4WaJLl0pmg2WcFZ66+fV4MOylxHxHj7hsHQ+aBXH+8dfGrZtEW+IyrUAAAAASUVORK5CYII="

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

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
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

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

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getPaths()[0]];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var [href, asPath] = this.getPaths();

    _router.default.prefetch(href, asPath, options);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

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
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
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


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
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


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
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

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    })).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
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
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
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
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
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

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : Component.__N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
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
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname)).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
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

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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

    const decode = decodeURIComponent;
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

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

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

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


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

/***/ })

};;
//# sourceMappingURL=1.js.map