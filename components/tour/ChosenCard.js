import React, { useState } from "react";

//redux
import { connect } from "react-redux";

//UI Libraries
import { Row, Col } from "reactstrap";
import {
  IoIosCheckmarkCircleOutline,
  IoIosArrowDropdown
} from "react-icons/io";
import { IoIosAirplane } from "react-icons/io";
import { GoPrimitiveDot, GoArrowLeft } from "react-icons/go";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import Rating from "react-rating";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { MdStarBorder, MdStar } from "react-icons/md";

//axios
import axios from "axios";
import ports from "../../ports";

//Utilites
import ReactHtmlParser from "react-html-parser";
import NumberFormat from "react-number-format";

var moment = require("moment-jalaali");

function Transfer1(props) {
  return (
    <div className="transfer-line">
      <span className="tl-1">{props.sourceFlight.SourceCityTitle_Going}</span>
      <span className="tld-1">{props.sourceFlight.LocalARRTime_Going}</span>
      <span className="transfer-icon transfer-icon1">
        <GoPrimitiveDot />
      </span>
      <span className="tl-2">{props.sourceFlight.AirLineTitle_Going}</span>
      <span className="transfer-icon transfer-icon2">
        <IoIosAirplane />
      </span>
      <span className="tl-3">{props.sourceFlight.DestAirportTitle_Going}</span>
      <span className="tld-3">{props.sourceFlight.LocalDEPTime_Going}</span>
      <span className="transfer-icon transfer-icon3">
        <GoPrimitiveDot />
      </span>
      <span className="transfer-icon transfer-icon4">
        <GoArrowLeft />
      </span>
      <span className="tl-4">هتل</span>
      <span className="transfer-icon transfer-icon5">
        <GoPrimitiveDot />
      </span>
    </div>
  );
}
function Transfer2(props) {
  return (
    <div className="transfer-line">
      <span className="tl-1">هتل</span>
      <span className="transfer-icon transfer-icon1">
        <GoPrimitiveDot />
      </span>
      <span className="transfer-icon transfer-icon6">
        <GoArrowLeft />
      </span>
      <span className="tl-3">{props.destFlight.SourceAirportTitle_Coming}</span>
      <span className="tld-3">{props.destFlight.LocalARRTime_Coming}</span>
      <span className="transfer-icon transfer-icon3">
        <GoPrimitiveDot />
      </span>
      <span className="tl-5">{props.destFlight.AirLineTitle_Coming}</span>
      <span className="transfer-icon transfer-icon7">
        <IoIosAirplane />
      </span>
      <span className="tl-4">{props.destFlight.DestCityTitle_Coming}</span>
      <span className="tld-4">{props.destFlight.LocalDEPTime_Coming}</span>
      <span className="transfer-icon transfer-icon5">
        <GoPrimitiveDot />
      </span>
    </div>
  );
}

const ChosenCard = props => {
  const [isData, setIsData] = useState(false);
  const [posts, setPosts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [ruleModal, setRuleModal] = useState(false);
  const [rules, setRules] = useState("");
  const modalToggle = () => setModal(!modal);
  const tourRuleToggleState = () => setRuleModal(!ruleModal);

  function flightToggle() {
    setIsOpen(!isOpen);
  }

  function handleClick() {
    props.changeDisplay();
  }

  function tourRuleToggle() {
    let pId = props.paymentObj[0].PackageId;
    axios
      .get(`${ports.domain}${ports.GetPackageRules}?Id=${pId}`)
      .then(function(response) {
        // console.log(response);
        switch (response.status) {
          case 200:
            return response.data;
          default:
            return false;
        }
      })
      .catch(function(error) {
        return Promise.reject(error);
      })
      .then(data => {
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
  }

  function HotelPriceFormat(num) {
    return (
      <NumberFormat
        value={num}
        displayType={"text"}
        thousandSeparator={true}
        renderText={num => <div>{num}</div>}
      />
    );
  }

  function categoryDisplayString(type) {
    if (type === "Air") return "تور هوایی";
    if (type === "Grand") return "تور زمینی";
    if (type === "Hiking") return "تور طبیعت گردی";
  }

  return (
    <div className="chosen-card">
      <Card>
        <CardBody>
          <div className="row">
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-12">
                  {props.paymentObj[0].Hotel.length > 1 ? (
                    <>
                      {props.paymentObj[0].Hotel.map((item, index) => {
                        return (
                          <>
                            <div className="row border-bottom">
                              <div className="col-md-4">
                                <div className="img-part">
                                  <img
                                    src={`${ports.imgDomainRoutes}${item.FileName}`}
                                    alt={item.HotelTitle}
                                  />
                                </div>
                              </div>
                              <div className="col-md-8">
                                <div className="row">
                                  <div className="col-md-8 no-padding-lg">
                                    <span className="city-title">
                                      {item.CitiesTitle}
                                      <span
                                        style={{
                                          paddingLeft: 5,
                                          paddingRight: 5
                                        }}
                                      >
                                        -
                                      </span>
                                      {item.LocationTitle}
                                    </span>
                                    <h4>{item.HotelTitle}</h4>
                                    <div className="stars">
                                      <Rating
                                        key={item.HotelId}
                                        emptySymbol={
                                          <MdStarBorder
                                            color="#73c9ca"
                                            size="19"
                                          />
                                        }
                                        fullSymbol={
                                          <MdStar color="#73c9ca" size="19" />
                                        }
                                        fractions={1}
                                        start={0}
                                        stop={item.HotelRate}
                                        initialRating={item.HotelRate}
                                        readonly
                                      />
                                    </div>
                                    <div className="row point-items">
                                      {/* <div className="col-md-12">
                                                        <span>
                                                        مکان :
                                                        </span>
                                                        <span>
                                                        {
                                                            packages.Flight[0].DestCityTitle_Going
                                                        }
                                                        </span>
                                                    </div> */}
                                      <div className="col-md-12 check-inout">
                                        <div>
                                          <span className="hotel-length">
                                            {item.HotelLength} شب
                                          </span>
                                          <span>
                                            {moment(
                                              item.CheckIn,
                                              "MM/DD/YYYY"
                                            ).format("jYYYY/jMM/jDD")}
                                          </span>
                                          <span>-</span>
                                          <span>
                                            {moment(
                                              item.CheckOut,
                                              "MM/DD/YYYY"
                                            ).format("jYYYY/jMM/jDD")}
                                          </span>
                                        </div>
                                        <div style={{ fontFamily: "Arial" }}>
                                          <span className="hotel-length">
                                            {item.HotelLength.toString()}Nights
                                          </span>
                                          <span>
                                            {moment(
                                              item.CheckIn,
                                              "MM/DD/YYYY"
                                            ).format("YYYY/MM/jDD")}
                                          </span>
                                          <span>-</span>
                                          <span>
                                            {moment(
                                              item.CheckOut,
                                              "MM/DD/YYYY"
                                            ).format("YYYY/MM/jDD")}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })}
                      <div className="row">
                        <div className="col-md-6">
                          <div className="providers multi-hotel">
                            <span>تامین کننده ها:</span>
                            {props.paymentObj[0].Supplier.map(sup => {
                              return (
                                <span>
                                  <span className="numbers">{sup.Title}</span>
                                </span>
                              );
                            })}
                          </div>

                          <div className="tours-tag multi-hotel">
                            {/* <span>
                                                {categoryDisplayString(props.category)}
                                                </span> */}
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="service-tag">
                            {props.paymentObj[0].Services &&
                            props.paymentObj[0].Services.length > 0 ? (
                              <div>
                                <img src={require("../../img/breakfast.png")} />
                                <span>خدمات</span>
                              </div>
                            ) : (
                              <></>
                            )}
                            {props.paymentObj[0].Visa ? (
                              <div>
                                <img src={require("../../img/tour-visa.png")} />
                                <span>ویزا</span>
                              </div>
                            ) : (
                              <></>
                            )}
                            <div>
                              <img src={require("../../img/transfer.png")} />
                              <span>ترانسفر</span>
                            </div>
                            {props.paymentObj[0].Insurance ? (
                              <div>
                                <img
                                  src={require("../../img/tour-insurance.png")}
                                />
                                <span>بیمه</span>
                              </div>
                            ) : (
                              <></>
                            )}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="img-part">
                            <>
                              {props.paymentObj[0].Hotel.map((item, index) => {
                                return (
                                  <img
                                    src={`${ports.imgDomainRoutes}${item.FileName}`}
                                    alt={item.HotelTitle}
                                  />
                                );
                              })}
                            </>
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="row">
                            <div className="col-md-8 no-padding-lg">
                              {props.paymentObj[0].Hotel.map((item, index) => {
                                return (
                                  <div className="pd015-xs">
                                    <span className="city-title">
                                      {item.CitiesTitle}
                                      <span
                                        style={{
                                          paddingLeft: 5,
                                          paddingRight: 5
                                        }}
                                      >
                                        -
                                      </span>
                                      {item.LocationTitle}
                                    </span>
                                    <h4>{item.HotelTitle}</h4>
                                    <div className="stars">
                                      <Rating
                                        key={item.HotelId}
                                        // style={{ position: "absolute", left: 20 }}
                                        emptySymbol={
                                          <MdStarBorder
                                            color="#73c9ca"
                                            size="19"
                                          />
                                        }
                                        fullSymbol={
                                          <MdStar color="#73c9ca" size="19" />
                                        }
                                        fractions={1}
                                        start={0}
                                        stop={item.HotelRate}
                                        initialRating={item.HotelRate}
                                        readonly
                                      />
                                    </div>
                                  </div>
                                );
                              })}
                              <div className="row point-items">
                                <div className="col-md-12 pd030-xs">
                                  <span>مکان :</span>
                                  <span>
                                    {
                                      props.paymentObj[0].Flight
                                        .DestCityTitle_Going
                                    }
                                  </span>
                                </div>
                                <div className="col-md-12 check-inout pd030-xs">
                                  {props.paymentObj[0].Hotel.map(
                                    (item, index) => {
                                      return (
                                        <>
                                          <span className="hotel-length">
                                            {item.HotelLength} شب
                                          </span>
                                          <span>{item.CheckIn}</span>
                                          <span>-</span>
                                          <span>{item.CheckOut}</span>
                                        </>
                                      );
                                    }
                                  )}
                                </div>
                                <div className="col-md-12 providers pd030-xs">
                                  <span>تامین کننده ها:</span>
                                  {props.paymentObj[0].Supplier.map(sup => {
                                    return (
                                      <span>
                                        <span className="numbers">
                                          {sup.Title}
                                        </span>
                                      </span>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 pl-5-lg pr-5-lg">
                              <div className="service-tag none-xs">
                                {props.paymentObj[0].Services &&
                                props.paymentObj[0].Services.length > 0 ? (
                                  <div>
                                    <img
                                      src={require("../../img/breakfast.png")}
                                    />
                                    <span>خدمات</span>
                                  </div>
                                ) : (
                                  <></>
                                )}
                                {props.paymentObj[0].Visa ? (
                                  <div>
                                    <img
                                      src={require("../../img/tour-visa.png")}
                                    />
                                    <span>ویزا</span>
                                  </div>
                                ) : (
                                  <></>
                                )}
                                <div>
                                  <img
                                    src={require("../../img/transfer.png")}
                                  />
                                  <span>ترانسفر</span>
                                </div>
                                {props.paymentObj[0].Insurance &&
                                props.paymentObj[0].Insurance.length > 0 ? (
                                  <div>
                                    <img
                                      src={require("../../img/tour-insurance.png")}
                                    />
                                    <span>بیمه</span>
                                  </div>
                                ) : (
                                  <></>
                                )}
                              </div>

                              <div className="tours-tag">
                                <span
                                  onClick={tourRuleToggle}
                                  className="tour-rule-btn none-lg"
                                >
                                  قوانین تور
                                </span>
                                <Button
                                  onClick={modalToggle}
                                  className="modal-btn none-lg"
                                >
                                  خدمات قابل ارایه
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="row bottom-line">
                <div className="col-md-11">
                  <div className="row" style={{ paddingRight: 15 }}>
                    <div
                      className="col-md-6 border-top"
                      style={{ paddingRight: 0 }}
                    >
                      <label>رفت:</label>
                      <Transfer1 sourceFlight={props.paymentObj[0].Flight} />
                    </div>
                    <div
                      className="col-md-6 border-right no-padding-lg border-top pr-0-xs"
                      style={{ height: 75 }}
                    >
                      <label>برگشت:</label>
                      <Transfer2 destFlight={props.paymentObj[0].Flight} />
                    </div>
                  </div>
                </div>
                <div className="col-md-1 no-padding border-right border-top">
                  <span
                    className="more-collapse"
                    onClick={() => flightToggle()}
                    style={{ marginBottom: "1rem" }}
                  >
                    جزییات پرواز <IoIosArrowDropdown className="none-lg" />
                  </span>
                </div>
                <div className="col-md-12 flight-table">
                  <Collapse isOpen={isOpen}>
                    <div>
                      <div className="flight-detail">
                        <Row>
                          <Col sm="6">
                            <h6>
                              پرواز رفت
                              <span>
                                ({props.paymentObj[0].Flight.LocalARRDate_Going}
                                )
                              </span>
                            </h6>
                            <div className="airline-details">
                              <div className="row">
                                <div className="col-md-3">
                                  <img
                                    src={`${ports.imgDomainRoutes}${props.paymentObj[0].Flight.FileName_Going}`}
                                  />
                                </div>
                                <div className="col-md-9 no-padding-lg">
                                  <span>
                                    {
                                      props.paymentObj[0].Flight
                                        .AirLineTitle_Going
                                    }
                                  </span>
                                  <span>-</span>
                                  <span>
                                    {
                                      props.paymentObj[0].Flight
                                        .FlightClassTitle_Going
                                    }
                                  </span>
                                  <p>
                                    پرواز شمارهء{" "}
                                    {props.paymentObj[0].Flight.FlightNo_Going}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="source-part">
                              <div className="row">
                                <div className="col-md-3 col-3">
                                  <span className="source-label">مبداء :</span>
                                </div>
                                <div className="col-md-9 col-9 no-padding-lg">
                                  <span className="source-time">
                                    {
                                      props.paymentObj[0].Flight
                                        .LocalARRTime_Going
                                    }
                                  </span>
                                  <span className="source-city">
                                    {
                                      props.paymentObj[0].Flight
                                        .SourceCountryTitle_Going
                                    }{" "}
                                    (
                                    {
                                      props.paymentObj[0].Flight
                                        .SourceCityTitle_Going
                                    }
                                    )
                                  </span>
                                  <span className="airport-name">
                                    {
                                      props.paymentObj[0].Flight
                                        .SourceAirportTitle_Going
                                    }
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="source-part">
                              <div className="row">
                                <div className="col-md-3 col-3">
                                  <span className="source-label">مقصد :</span>
                                </div>
                                <div className="col-md-9 col-9 no-padding-lg">
                                  <span className="source-time">
                                    {
                                      props.paymentObj[0].Flight
                                        .LocalDEPTime_Going
                                    }
                                  </span>
                                  <span className="source-city">
                                    {
                                      props.paymentObj[0].Flight
                                        .DestCountryTitle_Going
                                    }{" "}
                                    (
                                    {
                                      props.paymentObj[0].Flight
                                        .DestCityTitle_Going
                                    }
                                    )
                                  </span>
                                  <span className="airport-name">
                                    {
                                      props.paymentObj[0].Flight
                                        .DestAirportTitle_Going
                                    }
                                  </span>
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col sm="6">
                            <h6>
                              پرواز برگشت
                              <span>
                                (
                                {props.paymentObj[0].Flight.LocalARRDate_Coming}
                                )
                              </span>
                            </h6>
                            <div className="airline-details">
                              <div className="row">
                                <div className="col-md-3">
                                  <img
                                    src={`${ports.imgDomainRoutes}${props.paymentObj[0].Flight.FileName_Coming}`}
                                  />
                                </div>
                                <div className="col-md-9 no-padding-lg">
                                  <span>
                                    {
                                      props.paymentObj[0].Flight
                                        .AirLineTitle_Coming
                                    }
                                  </span>
                                  <span>-</span>
                                  <span>
                                    {
                                      props.paymentObj[0].Flight
                                        .FlightClassTitle_Coming
                                    }
                                  </span>
                                  <p>
                                    پرواز شمارهء{" "}
                                    {props.paymentObj[0].Flight.FlightNo_Coming}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="source-part">
                              <div className="row">
                                <div className="col-md-3 col-3">
                                  <span className="source-label">مبداء :</span>
                                </div>
                                <div className="col-md-9 col-9 no-padding-lg">
                                  <span className="source-time">
                                    {
                                      props.paymentObj[0].Flight
                                        .LocalARRTime_Coming
                                    }
                                  </span>
                                  <span className="source-city">
                                    {
                                      props.paymentObj[0].Flight
                                        .SourceCountryTitle_Coming
                                    }{" "}
                                    (
                                    {
                                      props.paymentObj[0].Flight
                                        .SourceCityTitle_Coming
                                    }
                                    )
                                  </span>
                                  <span className="airport-name">
                                    {
                                      props.paymentObj[0].Flight
                                        .SourceAirportTitle_Coming
                                    }
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="source-part">
                              <div className="row">
                                <div className="col-md-3 col-3">
                                  <span className="source-label">مقصد :</span>
                                </div>
                                <div className="col-md-9 col-9 no-padding-lg">
                                  <span className="source-time">
                                    {
                                      props.paymentObj[0].Flight
                                        .LocalDEPTime_Coming
                                    }
                                  </span>
                                  <span className="source-city">
                                    {
                                      props.paymentObj[0].Flight
                                        .DestCountryTitle_Coming
                                    }{" "}
                                    (
                                    {
                                      props.paymentObj[0].Flight
                                        .DestCityTitle_Coming
                                    }
                                    )
                                  </span>
                                  <span className="airport-name">
                                    {
                                      props.paymentObj[0].Flight
                                        .DestAirportTitle_Coming
                                    }
                                  </span>
                                </div>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Collapse>
                </div>
              </div>
            </div>
            <div className="col-md-2 border-right pr-5-lg">
              <span onClick={tourRuleToggle} className="tour-rule-btn none-xs">
                قوانین تور
              </span>
              <Modal
                isOpen={ruleModal}
                toggle={tourRuleToggleState}
                className="service-modal"
              >
                <ModalHeader toggle={tourRuleToggleState}>
                  <span className="service-title">قوانین تور</span>
                </ModalHeader>
                <ModalBody>{ReactHtmlParser(rules)}</ModalBody>
              </Modal>
              {props.paymentObj[0].Hotel.length > 1 ? (
                <>
                  <strong className="service-title none-xs">
                    خدمات قابل ارایه
                  </strong>
                  <ul className="services-ul none-xs">
                    {props.paymentObj[0].Services.map((item, index) => {
                      return (
                        <li>
                          <FiPlusCircle />
                          <span>{item.ServiceTitle}</span>
                        </li>
                      );
                    })}
                  </ul>
                </>
              ) : (
                <div>
                  <Button onClick={modalToggle} className="modal-btn none-xs">
                    خدمات قابل ارایه
                  </Button>

                  <Modal
                    isOpen={modal}
                    toggle={modalToggle}
                    className="service-modal"
                  >
                    <ModalHeader toggle={modalToggle}>
                      <span className="service-title">خدمات قابل ارایه</span>
                    </ModalHeader>
                    <ModalBody>
                      <ul>
                        {props.paymentObj[0].Services.map((item, index) => {
                          return (
                            <li>
                              <IoIosCheckmarkCircleOutline />
                              {item.ServiceTitle}
                            </li>
                          );
                        })}
                      </ul>
                    </ModalBody>
                  </Modal>
                </div>
              )}
              <div className="left-part">
                <div className="row">
                  <div className="col-md-12 col-6">
                    <div className="price">
                      <strong>
                        {HotelPriceFormat(props.paymentObj[0].TotalPrice)}

                        {/* {props.paymentObj[0].TotalPrice} */}
                      </strong>
                      <span>ریال</span>
                    </div>
                    <span className="tag">پرواز + هتل</span>
                  </div>
                  <div className="col-md-12 col-6">
                    <button className="btn change-btn" onClick={handleClick}>
                      تغییــر
                    </button>
                  </div>
                </div>
              </div>
              {/* <div className="price-div">
                            <span className="txt1">
                                قیمت کل :
                            </span>
                            <span className="txt2">
                                {props.paymentObj[0].Price}
                            </span>
                            <span className="txt1">
                                ریال
                            </span>
                         
                        </div> */}
              {/* <div className="more-info"></div>
                        <span className="more-info-txt">
                            اطلاعات بیشتر
                        </span> */}
            </div>
          </div>
        </CardBody>
      </Card>

      {isData ? (
        <Card>
          <CardBody>
            <ul>
              {posts.map((post, index) => {
                return (
                  <li key={index.toString()}>
                    {post.title} / {post.id}
                  </li>
                );
              })}
            </ul>
          </CardBody>
        </Card>
      ) : (
        <></>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  const paymentObj = state.paymenObject.paymentObj;
  return { paymentObj };
};

export default connect(mapStateToProps)(ChosenCard);
