import React, { useState} from 'react';

//redux
import { connect } from "react-redux";
import { set_package_collapse, toggle_flight } from '../../redux/basicdatas/action';
import { add } from '../../redux/payment/action';
import { set_co } from '../../redux/tourFilters/action';

//UI Libraries
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { MdStarBorder, MdStar } from "react-icons/md";
import { GoPrimitiveDot, GoArrowLeft } from "react-icons/go";
import { IoIosAirplane } from "react-icons/io";
import { Table } from 'reactstrap';
import Rating from "react-rating";
import { TabContent, TabPane, Nav, NavItem, NavLink,Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { FiPlusCircle } from "react-icons/fi";
import { IoIosCheckmarkCircleOutline, IoIosArrowDropdown } from "react-icons/io";
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';

//axios
import ports from '../../ports';
import axios from 'axios';

//utilites
import NumberFormat from 'react-number-format';
import Link from 'next/link';

var moment = require('moment-jalaali')
var base64 = require('base-64');
var utf8 = require('utf8');

function Transfer1(props) {
  return (
    <div className="transfer-line">
      <span className="tl-1">
        {props.sourceFlight.SourceCityTitle_Going}
      </span>
      <span className="tld-1">
        {props.sourceFlight.LocalARRTime_Going}
      </span>
      <span className="transfer-icon transfer-icon1">
        <GoPrimitiveDot />
      </span>
      <span className="tl-2">
        {props.sourceFlight.AirLineTitle_Going}
      </span>
      <span className="transfer-icon transfer-icon2">
        <IoIosAirplane />
      </span>
      <span className="tl-3">
        {props.sourceFlight.DestAirportTitle_Going}
      </span>
      <span className="tld-3">
        {props.sourceFlight.LocalDEPTime_Going}
      </span>
      <span className="transfer-icon transfer-icon3">
        <GoPrimitiveDot />
      </span>
      <span className="transfer-icon transfer-icon4">
        <GoArrowLeft />
      </span>
      <span className="tl-4">
        هتل
      </span>
      <span className="transfer-icon transfer-icon5">
        <GoPrimitiveDot />
      </span>
    </div>
  );
}

function Transfer2(props) {
  return (
    <div className="transfer-line">
      <span className="tl-1">
        هتل
      </span>
      <span className="transfer-icon transfer-icon1">
        <GoPrimitiveDot />
      </span>
      <span className="transfer-icon transfer-icon6">
        <GoArrowLeft />
      </span>
      <span className="tl-3">
        {props.destFlight.SourceAirportTitle_Coming}
      </span>
      <span className="tld-3">
        {props.destFlight.LocalARRTime_Coming}
      </span>
      <span className="transfer-icon transfer-icon3">
        <GoPrimitiveDot />
      </span>
      <span className="tl-5">
        {props.destFlight.AirLineTitle_Coming}
      </span>
      <span className="transfer-icon transfer-icon7">
        <IoIosAirplane />
      </span>
      <span className="tl-4">
        {props.destFlight.DestCityTitle_Coming}
      </span>
      <span className="tld-4">
        {props.destFlight.LocalDEPTime_Coming}
      </span>
      <span className="transfer-icon transfer-icon5">
        <GoPrimitiveDot />
      </span>
    </div>
  );
}

const TourResult = (props) => {
  const [allIsOpen, setAllIsOpen] = useState(props.collapseToggle);
  const [allIsOpenFlight, setAllIsOpenFlight] = useState(props.toggleDefaultFlight);
  const [forceRender, setForceRender] = useState(new Date().getTime());
  const [forceRender1, setForceRender1] = useState(new Date().getTime());
  const { packages } = props;
  const [packageRows, setPackagesRow] = useState(packages.PackageRow);
  const [selectedValue, setSelectedValue] = React.useState(0);
  const [rules, setRules] = useState("");
  const [activeTab, setActiveTab] = useState(`${props.index}01`);
  const [modal, setModal] = useState(false);
  const [ruleModal, setRuleModal] = useState(false);

  const modalToggle = () => setModal(!modal);
  const tourRuleToggleState = () => setRuleModal(!ruleModal);
  
  //replace space with "-"
  let tourName = packages.PackageInfo.Title.replace(/ /g, "-");
  if (tourName.substr(tourName.length - 1, 1) === "-")
  tourName = tourName.substr(0, tourName.length - 1);
  // merge package Number with package Title
  let PackageNumber = packages.PackageInfo.PackageNumber

  //used in flight details
  const tabToggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }
  

  //tour rules ("axios")
  function tourRuleToggle() {
    let pId = packages.PackageInfo.PackageId;
    axios.get(`${ports.domain}${ports.GetPackageRules}?Id=${pId}`)
      .then(function (response) {
        // console.log(response);
        switch (response.status) {
          case 200:
            return response.data;
          default:
            return false;
        }
      })
      .catch(function (error) {

        return Promise.reject(error);
      })
      .then(data => {
        if (data) {
          // console.log("rules:",data);
          var encoded = unescape(data.PackageRules);
          var bytes = base64.decode(encoded);
          var html = utf8.decode(bytes);
          setRules(html);
        }
        else {
          //alert("nothing");
          setRules("");
        }
      });

    setRuleModal(!ruleModal);
  }

  //toggle room booking
  function toggle(i) {
    let tempArrayAllCollapse = allIsOpen;
    tempArrayAllCollapse[props.index][i] = !allIsOpen[props.index][i];
    props.dispatch(set_package_collapse(tempArrayAllCollapse));
    setAllIsOpen(tempArrayAllCollapse)
    setForceRender(new Date().getTime());
    //console.log("tempArrayAllCollapse", tempArrayAllCollapse);
  }

  //toggle filght description
  function flightToggle(idx) {
    let tempArrayAllCollapse = allIsOpenFlight;
    const temp = [];
    for (var i = 0; i < tempArrayAllCollapse.length; i++) {

      temp.push(new Array(tempArrayAllCollapse[i].length).fill(false));
      //temp[i].push(false); 
    }
    //console.log("tempArrayAllCollapse[0]",temp)

    temp[props.index][idx] = !allIsOpenFlight[props.index][idx];
    setAllIsOpenFlight(temp)
    props.dispatch(toggle_flight(temp));
    setForceRender1(new Date().getTime());
    setActiveTab(`${props.index}${idx}1`);
  }

  //prepare data for payment page
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
          })
          break;
        }
      }
    }

      //export person
      let adult = 0;
      let child1 = 0;
      let child2 = 0;
      let infant = 0;
      const rules = props.searchParams.roomRules.split(',');
      rules.map(rule=>{
        adult += parseInt(rule.charAt(0));
        child1 += parseInt(rule.charAt(1));
        child2 += parseInt(rule.charAt(2));
        infant += parseInt(rule.charAt(3));
      })

    //sum of HotelLength
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
      Insurance: (packages.Insurance.hasOwnProperty("Id")) ? true : false,
      InsuranceId: (packages.Insurance.hasOwnProperty("Id")) ? packages.Insurance.Id : null,
      InsuranceAdultPrice: (packages.Insurance.hasOwnProperty("AdultPrice")) ? packages.Insurance.AdultPrice : null,
      InsuranceOldPrice: (packages.Insurance.hasOwnProperty("OldPrice")) ? packages.Insurance.OldPrice : null,
      Visa: (visaLength > 0) ? true : false,
      VisaPrice: (visaLength > 0) ? packages.Visa[0].Price : 0,
      VisaId: (visaLength > 0) ? packages.Visa[0].Price : 0,
      Services: packages.Services,
      RoomRules: props.searchParams.roomRules,
      RoomInfo: hotelPrice,
      packageId: packages.PackageInfo.PackageId,
      PackageHotelRowId: PackageHotelRowId,
      PackageLength: sumNights,
    }]
    props.dispatch(add(myObj.slice()));
    props.changeDisplay();
  }

  //calculate each tour price
  function computingPackagePrice(PackageHotelId, Title, HotelLists, packageRowId, PackageHotelRowId) {
    var roomPrices = [];
    for (var i = 0; i < packages.Room_Price.length; i++) {
      if (PackageHotelId === packages.Room_Price[i].PackageHotelId) {
        roomPrices=packages.Room_Price[i].Room;
        break;
      }
    }
    let totalPrice = 0;
    for (var i = 0; i < roomPrices.length; i++) {
      totalPrice += roomPrices[i].Total;
    }
    return (
      <>
        <tr>
          <td className="hotel-room-td">{Title}</td>
          <td className="price-td">{HotelPriceFormat(totalPrice)}
            ریال
                  <span className="btn choose-room" onClick={() => setPackageInfo(HotelLists, roomPrices, packageRowId, totalPrice, PackageHotelRowId)}>
              رزرو
                    </span>
          </td>
        </tr>
      </>
    )
  }

  //compute minimum price
  function computingMinimumPrice(packageHotelPrice, roomPrices) {
    let allPrices= [];
    for (var i = 0; i < packageHotelPrice.length; i++) {
      for (var j = 0; j < roomPrices.length; j++) {
        var tourPrice = 0;
        if (packageHotelPrice[i].PackageHotelId === roomPrices[j].PackageHotelId) {

          for (var k = 0; k < roomPrices[j].Room.length; k++) {
            tourPrice+=roomPrices[j].Room[k].Total;
          }
        }
        allPrices.push(tourPrice);
      }
    }
    var minimumPriceValue = Math.min.apply(null, allPrices) 
    return minimumPriceValue;
  }

  //utility
  function HotelPriceFormat(num) {
    return <NumberFormat value={num} displayType={'text'} thousandSeparator={true} renderText={num => <div>{num}</div>} />
  }

  //defines tour category type
  function categoryDisplayString(type) {
    if (type === "Air")
      return "تور هوایی";
    if (type === "Grand")
      return "تور زمینی";
    if (type === "Hiking")
      return "تور طبیعت گردی";
  }

  // const [airlines , setAirlines] = React.useState([]);
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

  return (
    <div>
      {
        packageRows.map((packageBox, idx) => {
          return (
            <div className="result-box">
              <Card>
                <CardBody>
                  <div className="row">
                    <div className="col-md-10">
                      <>
                        {
                          (packageBox.PackageHotelList.length > 1) ?
                            <>
                              {
                                packageBox.PackageHotelList.map((item, index) => {
                                  return (
                                    <div className="row border-bottom">
                                      <div className="col-md-4">
                                        <div className="img-part">
                                          <img src={`${ports.imgDomainRoutes}${item.FileName}`} alt={item.HotelTitle} />
                                        </div>
                                      </div>
                                      <div className="col-md-8">
                                        <div className="row">
                                          <div className="col-md-8 no-padding-lg">
                                            <span className="city-title">
                                              {item.CitiesTitle}
                                              <span style={{ paddingLeft: 5, paddingRight: 5 }}>
                                                -
                                    </span>
                                              {item.LocationTitle}
                                            </span>
                                            <h4>
                                              {item.HotelTitle}
                                            </h4>
                                            <div className="stars">
                                              <Rating
                                                key={item.HotelId}
                                                // style={{ position: "absolute", left: 20 }}
                                                emptySymbol={<MdStarBorder color="#73c9ca" size="19" />}
                                                fullSymbol={<MdStar color="#73c9ca" size="19" />}
                                                fractions={1}
                                                start={0}
                                                stop={item.HotelRate}
                                                initialRating={item.HotelRate}
                                                readonly
                                              />
                                            </div>

                                            <div className="row point-items">
                                              <div className="col-md-12 pd030-xs">
                                                <span>
                                                  مکان :
                                    </span>
                                                <span>
                                                  {
                                                    packages.Flight[0].DestCityTitle_Going
                                                  }
                                                </span>
                                              </div>
                                              <div className="col-md-12 check-inout pd030-xs">

                                                <span className="hotel-length">
                                                  {item.HotelLength} شب
                                        </span>
                                                <span>
                                                  {moment(item.CheckIn, 'MM/DD/YYYY').format('jYYYY/jMM/jDD')}
                                                </span>
                                                <span>
                                                  -
                                        </span>
                                                <span>
                                                  {moment(item.CheckOut, 'MM/DD/YYYY').format('jYYYY/jMM/jDD')}
                                                </span>
                                              </div>
                                              <div style={{ fontFamily: "Arial" }}>
                                                <span className="hotel-length ltr">
                                                  {item.HotelLength.toString()}Nights
                                    </span>
                                                <span>
                                                  {moment(item.CheckIn, 'MM/DD/YYYY').format('YYYY/MM/jDD')}
                                                </span>
                                                <span>
                                                  -
                                    </span>
                                                <span>
                                                  {moment(item.CheckOut, 'MM/DD/YYYY').format('YYYY/MM/jDD')}
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                  )
                                })
                              }
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="providers multi-hotel">
                                    <span>
                                      تامین کننده ها:
                                    </span>
                                    {
                                      packages.Supplier.map((sup) => {
                                        return (
                                          <span>
                                            <span className="numbers">
                                              {sup.Title}
                                            </span>
                                          </span>
                                        )
                                      })
                                    }
                                  </div>


                                  <div className="tours-tag multi-hotel">
                                    <span>
                                      {categoryDisplayString(packages.Type)}
                                    </span>
                                    {/*<span>
                                          تور یکروزه
                                        </span>*/}
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="service-tag">
                                    {
                                      (packages.Services && packages.Services.length > 0) ?
                                        <div>
                                          <img src={require('../../img/breakfast.png')} />
                                          <span>
                                            خدمات
                                  </span>
                                        </div> :
                                        <></>
                                    }
                                    {
                                      (packages.Visa && packages.Visa.length) ?
                                        <div>
                                          <img src={require('../../img/tour-visa.png')} />
                                          <span>
                                            ویزا
                                      </span>
                                        </div> :
                                        <></>
                                    }
                                    <div>
                                      <img src={require('../../img/transfer.png')} />
                                      <span>
                                        ترانسفر
                                  </span>
                                    </div>
                                    {
                                      (packages.Insurance && packages.Insurance.ID) ?
                                        <div>
                                          <img src={require('../../img/tour-insurance.png')} />
                                          <span>
                                            بیمه
                                                    </span>
                                        </div> :
                                        <></>
                                    }
                                  </div>
                                </div>
                              </div>

                            </>
                            :
                            <div className="row">
                              <div className="col-md-4">
                                <div className="img-part">
                                  <>
                                          <img src={`${ports.imgDomainRoutes}${packageBox.PackageHotelList[0].FileName}`} alt={packageBox.PackageHotelList[0].HotelTitle} />
                                  </>
                                </div>
                              </div>
                              <div className="col-md-8">
                                <div className="row">
                                  <div className="col-md-8 no-padding-lg">
                                    {
                                      packageBox.PackageHotelList.map((item) => {
                                        return (
                                          <div className="pd015-xs">
                                            <span className="city-title none-xs">
                                              {item.CitiesTitle}
                                              <span style={{ paddingLeft: 5, paddingRight: 5 }}>
                                                -
                                              </span>
                                              {item.LocationTitle}
                                            </span>
                                            <h4>
                                              {item.HotelTitle}
                                            </h4>
                                            <div className="stars">
                                              <Rating
                                                key={item.HotelId}
                                                emptySymbol={<MdStarBorder color="#73c9ca" size="19" />}
                                                fullSymbol={<MdStar color="#73c9ca" size="19" />}
                                                fractions={1}
                                                start={0}
                                                stop={item.HotelRate}
                                                initialRating={item.HotelRate}
                                                readonly
                                              />
                                            </div>
                                            <div className="package-link">
                                              <Link href={{ pathname: "/tour", query: { name: tourName, num: PackageNumber } }} as={`tour/${PackageNumber}/${tourName}`}>
                                                <a >
                                                  جزییات تور
                                            </a>
                                              </Link>
                                            </div>
                                            <div className="tours-tag none-lg none-s inline-xs" style={{ display: 'inline', paddingRight: 10 }}>
                                              <span>
                                                {categoryDisplayString(packages.Type)}
                                              </span>
                                            </div>
                                          </div>
                                        )
                                      })
                                    }
                                    <div className="row point-items">
                                      <div className="col-md-12 pd030-xs">
                                        <span>
                                          مکان :
                                   </span>
                                        <span>
                                          {
                                            packages.Flight[0].DestCityTitle_Going
                                          }
                                        </span>
                                      </div>
                                      <div className="col-md-12 check-inout pd030-xs">
                                        {
                                          packageBox.PackageHotelList.map((item) => {
                                            return (
                                              <>
                                                <div>
                                                  <span className="hotel-length">
                                                    {item.HotelLength} شب
                                    </span>
                                                  <span>
                                                    {moment(item.CheckIn, 'MM/DD/YYYY').format('jYYYY/jMM/jDD')}
                                                  </span>
                                                  <span>
                                                    -
                                    </span>
                                                  <span>
                                                    {moment(item.CheckOut, 'MM/DD/YYYY').format('jYYYY/jMM/jDD')}
                                                  </span>
                                                </div>
                                                <div style={{ fontFamily: "Arial" }}>
                                                  <span className="hotel-length">
                                                    {item.HotelLength.toString()}Nights
                                    </span>
                                                  <span>
                                                    {moment(item.CheckIn, 'MM/DD/YYYY').format('YYYY/MM/jDD')}
                                                  </span>
                                                  <span>
                                                    -
                                    </span>
                                                  <span>
                                                    {moment(item.CheckOut, 'MM/DD/YYYY').format('YYYY/MM/jDD')}
                                                  </span>
                                                </div>
                                              </>
                                            )
                                          })
                                        }

                                      </div>
                                      <div className="col-md-12 providers pd030-xs">
                                        <span>
                                          تامین کننده ها:
                                  </span>
                                        {
                                          packages.Supplier.map((sup) => {
                                            return (
                                              <span>
                                                <span className="numbers">
                                                  {sup.Title}
                                                </span>
                                              </span>
                                            )
                                          })
                                        }


                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-4 pl-5-lg pr-5-lg ">
                                   
                                    <div className="service-tag none-xs">
                                      {
                                        (packages.Services && packages.Services.length > 0) ?
                                          <div>
                                            <img src={require('../../img/breakfast.png')} />
                                            <span>
                                              خدمات
                                  </span>
                                          </div> :
                                          <></>
                                      }
                                      {
                                        (packages.Visa && packages.Visa.length > 0) ?
                                          <div>
                                            <img src={require('../../img/tour-visa.png')} />
                                            <span>
                                              ویزا
                                      </span>
                                          </div> :
                                          <></>
                                      }
                                      <div>
                                        <img src={require('../../img/transfer.png')} />
                                        <span>
                                          ترانسفر
                                  </span>
                                      </div>
                                      {
                                        (packages.Insurance && packages.Insurance.Id) ?
                                          <div>
                                            <img src={require('../../img/tour-insurance.png')} />
                                            <span>
                                              بیمه
                                                    </span>
                                          </div> :
                                          <></>
                                      }
                                    
                                    </div>

                                    <div className="tours-tag">
                                      <span className="none-xs">
                                        {categoryDisplayString(packages.Type)}
                                      </span>
                                      <span onClick={tourRuleToggle} className="tour-rule-btn none-lg none-s inline-xs" >
                                        قوانین تور
                                </span>
                                      <Button onClick={modalToggle} className="modal-btn none-lg none-s inline-xs">خدمات قابل ارایه</Button>
                                   
                                    </div>

                                  </div>
                                </div>
                              </div>
                            </div>
                        }

                      </>
                      <div className="row bottom-line">
                        <div className="col-md-11">
                          <div className="row" style={{ paddingRight: 15 }}>
                            <div className="col-md-6 border-top" style={{ paddingRight: 0 }}>
                              <label>
                                رفت:
                              </label>
                              <Transfer1 sourceFlight={packages.Flight[0]} />
                            </div>
                            <div className="col-md-6 border-right no-padding-lg border-top pr-0-xs" style={{ height: 75 }}>
                              <label>
                                برگشت:
                              </label>
                              <Transfer2 destFlight={packages.Flight[0]} />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-1 no-padding border-right border-top">
                          <span className="more-collapse" onClick={() => flightToggle(idx)} >جزییات پرواز <IoIosArrowDropdown className="none-lg" /></span>
                        </div>
                        <div className="col-md-12 flight-table">
                          <Collapse isOpen={allIsOpenFlight[props.index][idx]}>
                            <div >
                              <Nav tabs>
                                <NavItem>
                                  <NavLink
                                    className={classnames({ active: activeTab === `${props.index}${idx}1` })}
                                    onClick={() => { tabToggle(`${props.index}${idx}1`); }}
                                  >
                                    اطلاعات پرواز
                                </NavLink>
                                </NavItem>

                              </Nav>
                              <TabContent activeTab={activeTab}>
                                <TabPane tabId={`${props.index}${idx}1`}>
                                  <div className="flight-detail">
                                    <Row>
                                      <Col sm="6">
                                        <h6>
                                          پرواز رفت
                                        <span>
                                            ({packages.Flight[0].LocalARRDate_Going})
                                        </span>
                                        </h6>
                                        <div className="airline-details">
                                          <div className="row">
                                            <div className="col-md-3">
                                              <img src={`${ports.imgDomainRoutes}${packages.Flight[0].FileName_Going}`} />
                                            </div>
                                            <div className="col-md-9 no-padding-lg">
                                              <span>
                                                {packages.Flight[0].AirLineTitle_Going}
                                              </span>
                                              <span>
                                                -
                                            </span>
                                              <span>
                                                {packages.Flight[0].FlightClassTitle_Going}
                                              </span>
                                              <p>
                                                پرواز شمارهء {packages.Flight[0].FlightNo_Going}
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="source-part">
                                          <div className="row">
                                            <div className="col-md-3 col-3">
                                              <span className="source-label">
                                                مبداء :
                                            </span>
                                            </div>
                                            <div className="col-md-9 col-9 no-padding-lg">
                                              <span className="source-time">
                                                {packages.Flight[0].LocalARRTime_Going}
                                              </span>
                                              <span className="source-city">
                                                {packages.Flight[0].SourceCountryTitle_Going} ({packages.Flight[0].SourceCityTitle_Going})
                                            </span>
                                              <span className="airport-name">
                                                {packages.Flight[0].SourceAirportTitle_Going}
                                              </span>

                                            </div>
                                          </div>

                                        </div>
                                        <div className="source-part">
                                          <div className="row">
                                            <div className="col-md-3 col-3">
                                              <span className="source-label">
                                                مقصد :
                                            </span>
                                            </div>
                                            <div className="col-md-9 col-9 no-padding-lg">
                                              <span className="source-time">
                                                {packages.Flight[0].LocalDEPTime_Going}
                                              </span>
                                              <span className="source-city">
                                                {packages.Flight[0].DestCountryTitle_Going} ({packages.Flight[0].DestCityTitle_Going})
                                            </span>
                                              <span className="airport-name">
                                                {packages.Flight[0].DestAirportTitle_Going}
                                              </span>

                                            </div>
                                          </div>

                                        </div>
                                      </Col>
                                      <Col sm="6">
                                        <h6>
                                          پرواز برگشت
                                        <span>
                                            ({packages.Flight[0].LocalARRDate_Coming})
                                        </span>
                                        </h6>
                                        <div className="airline-details">
                                          <div className="row">
                                            <div className="col-md-3">
                                              <img src={`${ports.imgDomainRoutes}${packages.Flight[0].FileName_Coming}`} />
                                            </div>
                                            <div className="col-md-9 no-padding-lg">
                                              <span>
                                                {packages.Flight[0].AirLineTitle_Coming}
                                              </span>
                                              <span>
                                                -
                                            </span>
                                              <span>
                                                {packages.Flight[0].FlightClassTitle_Coming}
                                              </span>
                                              <p>
                                                پرواز شمارهء {packages.Flight[0].FlightNo_Coming}
                                              </p>
                                            </div>
                                          </div>

                                        </div>
                                        <div className="source-part">
                                          <div className="row">
                                            <div className="col-md-3 col-3">
                                              <span className="source-label">
                                                مبداء :
                                            </span>
                                            </div>
                                            <div className="col-md-9 col-9 no-padding-lg">
                                              <span className="source-time">
                                                {packages.Flight[0].LocalARRTime_Coming}
                                              </span>
                                              <span className="source-city">
                                                {packages.Flight[0].SourceCountryTitle_Coming} ({packages.Flight[0].SourceCityTitle_Coming})
                                            </span>
                                              <span className="airport-name">
                                                {packages.Flight[0].SourceAirportTitle_Coming}
                                              </span>

                                            </div>
                                          </div>

                                        </div>
                                        <div className="source-part">
                                          <div className="row">
                                            <div className="col-md-3 col-3">
                                              <span className="source-label">
                                                مقصد :
                                            </span>
                                            </div>
                                            <div className="col-md-9 col-9 no-padding-lg">
                                              <span className="source-time">
                                                {packages.Flight[0].LocalDEPTime_Coming}
                                              </span>
                                              <span className="source-city">
                                                {packages.Flight[0].DestCountryTitle_Coming} ({packages.Flight[0].DestCityTitle_Coming})
                                            </span>
                                              <span className="airport-name">
                                                {packages.Flight[0].DestAirportTitle_Coming}
                                              </span>

                                            </div>
                                          </div>

                                        </div>
                                      </Col>
                                    </Row>
                                  </div>

                                </TabPane>

                              </TabContent>

                            </div>
                          </Collapse>
                        </div>
                        <div className="col-md-12 price-table">
                          <Collapse isOpen={allIsOpen[props.index][idx]}>
                            <div>
                              <Table key={forceRender}>

                                <tbody>
                                  {
                                    packageBox.PackageHotelPrice.map((price, index) => {
                                      return (
                                        <>

                                          {computingPackagePrice(price.PackageHotelId, price.Title, packageBox.PackageHotelList, idx, price.PackageHotelRowId)}
                                        </>
                                      )
                                    })
                                  }
                                </tbody>
                              </Table>
                            </div>
                          </Collapse>
                        </div>
                      </div>

                    </div>
                    <div className="col-md-2 border-right pr-5-lg pr-5-s">
                      <span onClick={tourRuleToggle} className="tour-rule-btn none-xs" >
                        قوانین تور
                      </span>
                      <Modal isOpen={ruleModal} toggle={tourRuleToggleState} className="service-modal">
                        <ModalHeader toggle={tourRuleToggleState}>
                          <span className="service-title">
                            قوانین تور
                          </span>
                        </ModalHeader>
                        <ModalBody>
                          {ReactHtmlParser(rules)}
                        </ModalBody>

                      </Modal>
                      {
                        (packageBox.PackageHotelList.length > 1) ?
                          <>
                            <strong className="service-title none-xs">
                              خدمات قابل ارایه
                        </strong>
                            <ul className="services-ul none-xs">
                              {
                                (packages.Services.map((item, index) => {
                                  return (

                                    <li>
                                      <FiPlusCircle />
                                      <span>
                                        {item.ServiceTitle}
                                      </span>

                                    </li>
                                  )
                                }))
                              }
                            </ul>
                          </>
                          :
                          <div>
                            <Button onClick={modalToggle} className="modal-btn none-xs">خدمات قابل ارایه</Button>

                            <Modal isOpen={modal} toggle={modalToggle} className="service-modal">
                              <ModalHeader toggle={modalToggle}>
                                <span className="service-title">
                                  خدمات قابل ارایه
                              </span>
                              </ModalHeader>
                              <ModalBody>
                                <ul>
                                  {
                                    (packages.Services.map((item, index) => {
                                      return (
                                        <li>
                                          <IoIosCheckmarkCircleOutline />
                                          {item.ServiceTitle}
                                        </li>
                                      )
                                    }))
                                  }
                                </ul>
                              </ModalBody>

                            </Modal>


                          </div>
                      }

                      <div className="left-part">
                        <div className="row">
                          <div className="col-md-12 col-6">
                            <div className="price">
                              <strong>
                                {HotelPriceFormat(computingMinimumPrice(packageBox.PackageHotelPrice, packages.Room_Price))}
                              </strong>
                              <span>
                                ریال
                              </span>
                            </div>
                            <span className="tag">
                              پرواز + هتل
                            </span>
                          </div>
                          <div className="col-md-12 col-6">
                            <button className="btn reserve-btn" onClick={() => toggle(idx)} >
                              <a>
                                انتخاب اتاق
                              </a>
                            </button>
                          </div>


                        </div>

                      </div>

                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>

          )
        })
      }

    </div>
  )


}

const mapStateToProps = state => {
  const collapseToggle = state.basicDatasReducer.collapseToggle;
  const toggleDefaultFlight = state.basicDatasReducer.toggleDefaultFlight;
  return { collapseToggle, toggleDefaultFlight }
}

export default connect(mapStateToProps)(TourResult);
