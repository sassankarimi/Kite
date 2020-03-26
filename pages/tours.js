import React, { useState, useEffect, useRef, Fragment } from "react";
import dynamic from "next/dynamic";
import { useRouter } from 'next/router'

//UI Libraries
import { Container, Col, Row, Collapse, CardBody, Card } from "reactstrap";
import Shimmer from "react-shimmer-effect";
import { MdCancel } from "react-icons/md";

//components
const TourSearch = dynamic(() => import("../components/tour/toursearch"));
const Nav = dynamic(() => import("../components/navbar"));
const Bgtext = dynamic(() => import("../components/bgtext"));
const TourResult = dynamic(() => import("../components/tour/tourResult"));
const Filter = dynamic(() => import("../components/tour/filter"));
const TourSort = dynamic(() => import("../components/tour/tourSort"));
const Payment = dynamic(() => import("../components/tour/book"));

//redux
import { connect, useDispatch , useSelector} from "react-redux";
import {
  set_package_collapse,
  toggle_flight
} from "../redux/basicdatas/action";
import { remove } from "../redux/payment/action";
import { default_toggle_flight } from "../redux/basicdatas/action";
import { searchTour , setFilteredResults} from "../redux/searchtour/action";
import { setAirlines } from "../redux/tourFilters/action";
import { isRealValue } from "../Functions";

const Tours = props => {
  const [showChild, setShowChild] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const allPackages = useSelector(state => state.searchTourReducer.tourResult);
  const filteredResults = useSelector(state => state.searchTourReducer.filteredResults);
  const dataExist = useSelector(state => state.searchTourReducer.dataExist);
  const dispatch = useDispatch();
  const filterToggle = () => setIsOpen(!isOpen);
  const filterCancle = () => setIsOpen(false);
  const router = useRouter()

  const divStyle = {
    pointerEvents: "none",
    opacity: 0.6
  };

  //route base on package type
  function specifyPackageType(packages, index) {
    switch (packages.Type) {
      case "Air":
        return (
          <TourResult
            changeDisplay={handleDisplay}
            {...props}
            packages={packages}
            index={index}
            tourId="1"
          />
        );
      default:
        break;
    }
  }

  useEffect(() => {
    console.log("",router.query);
    function myparam() {
      let goDateStr = "";
      let desDateStr = "";
      //alert(props.ret);
      //date structure 1300/05/05
      if (
        props.searchParams.departing &&
        props.searchParams.departing.split("-").length === 3
      ) {
        let goDate = props.searchParams.departing.split("-");
        if (goDate[1].length === 1) goDate[1] = "0" + goDate[1];
        if (goDate[2].length === 1) goDate[2] = "0" + goDate[2];
        goDateStr = goDate[0] + "/" + goDate[1] + "/" + goDate[2];
        //
      }
      //date structure 1300/05/05
      if (
        props.searchParams.returning &&
        props.searchParams.returning.split("-").length === 3
      ) {
        let desDate = props.searchParams.returning.split("-");
        if (desDate[1].length === 1) desDate[1] = "0" + desDate[1];
        if (desDate[2].length === 1) desDate[2] = "0" + desDate[2];
        desDateStr = desDate[0] + "/" + desDate[1] + "/" + desDate[2];
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
      dispatch(remove());
      setShowPayment(false);
      console.log("search params:", packagesObj);
      dispatch(searchTour(packagesObj));
      handleCollapse(allPackages);
    }
    if(isRealValue(props.searchParams))
    myparam();
    setShowChild(true);
  }, [props.searchParams]);

  useEffect(() => {
    function filteredResult(tours) {
      let finalArray = [];
      tours.map(tour => {
        tour.PackageRow.map(item => {
          item.PackageHotelList.map(hotel => {
            // console.log("filter starts ", props.stars);
            hotel.HotelRate === props.stars.toString()
              ? finalArray.push(tour)
              : null;
          });
         
        });
        tour.Flight.map((item, index) => {
          // (item.AirLineTitle_Going === props.airlines || item.AirLineTitle_Coming === props.airlines )
          (item.AirLineTitle_Going === props.airlines || item.AirLineTitle_Coming === props.airlines )
          ?
          <>
          {
        finalArray.push(tour)
          }
          </>
          :
          <span></span>
            // ? finalArray.push(tour)
            // : null;
        })
      });
      dispatch(setFilteredResults(finalArray));
    }
  
    filteredResult(allPackages);
  }, [props.stars , props.airlines ]);//[props.stars , props.airlines ]

  function handleDisplay() {
    setShowPayment(!showPayment);
  }

  function handleCollapse(data) {
    var allCollapsesOpenState = [];
    var allFlightCollapsesOpenState = [];
    var alltoggleFlightsDefault = [];
    if(data.length>0){
    for (var i = 0; i < data.length; i++) {
        allCollapsesOpenState.push(
          new Array(data[i].PackageRow.length).fill(false)
        );
        allFlightCollapsesOpenState.push(
          new Array(data[i].PackageRow.length).fill(false)
        );
        alltoggleFlightsDefault.push(
          new Array(data[i].PackageRow.length).fill(false)
        );
    }
  }
      else {
        allCollapsesOpenState.push(
            []
          );
          allFlightCollapsesOpenState.push(
           []
          );
          alltoggleFlightsDefault.push(
            []
          );
      }
      props.dispatch(set_package_collapse(allCollapsesOpenState));
      props.dispatch(toggle_flight(allFlightCollapsesOpenState));
      props.dispatch(default_toggle_flight(alltoggleFlightsDefault));
  }

 
  return (
    <Fragment>
      <div className="tourbooking">
        <Nav />
        <Bgtext />
        <Container>
          {
            (isRealValue(props.searchParams))?
            <TourSearch {...props} />:
            <></>
          }
          {(filteredResults.length > 0 || dataExist) ? (
            <>
              <div style={{ display: !showPayment ? "block" : "none" }}>
                <TourSort />
                <div className="row">
                  <div className="col-md-3 pl-5-lg none-xs none-s">
                    <Filter Opening={true} x={filteredResults}/>
                  </div>
                  <div className="col-md-9 pr-5-lg mb-5 card-col">
                    {filteredResults.map((item, index) => {
                      return (
                        <div key={index}>{specifyPackageType(item, index)}</div>
                      );
                    })}
                  </div>
                </div>
              </div>
              {props.paymentObj.length > 0 ? (
                <div
                  className="reserveTour"
                  style={{ display: showPayment ? "block" : "none" }}
                >
                  <Payment {...props} changeDisplay={handleDisplay} />
                </div>
              ) : (
                <></>
              )}
            </>
          ) : (
            <div className="text-center">
              {showChild ? (
                <div>
                
                  {dataExist ? (
                    <div className="LoaderClass">
                      <Row>
                        <Col md="3" className="pl-5-lg">
                          <Card>
                            <CardBody>
                              <Shimmer>
                                <div className="filter-loading fl-1" />
                                <hr className="fl-hr" />
                                <div className="filter-loading fl-2" />
                                <hr className="fl-hr" />
                                <div className="filter-loading fl-3" />
                                <hr className="fl-hr" />
                                <div className="filter-loading fl-4" />
                              </Shimmer>
                            </CardBody>
                          </Card>
                        </Col>
                        <Col md="9" className="tour-card">
                          <Card>
                            <CardBody>
                              <Row>
                                <Col md="10">
                                  <Row>
                                    <Col md="4">
                                      <Shimmer>
                                        <div className="img-loading" />
                                      </Shimmer>
                                    </Col>
                                    <Col
                                      md="8"
                                      className="info-loading no-padding"
                                    >
                                      <Shimmer>
                                        <div className="tl-1" />
                                        <div className="tl-2" />
                                        <div className="tl-3" />
                                      </Shimmer>
                                    </Col>
                                    <Col md="12">
                                      <Row>
                                        <Col md="6">
                                          <Shimmer>
                                            <div className="fl-1" />
                                          </Shimmer>
                                        </Col>
                                        <Col md="6">
                                          <Shimmer>
                                            <div className="fl-2" />
                                          </Shimmer>
                                        </Col>
                                      </Row>
                                    </Col>
                                  </Row>
                                </Col>
                                <Col md="2" className="price-loading">
                                  <Shimmer>
                                    <div className="pl-1" />
                                    <div className="pl-2" />
                                    {/* <div className="pl-3" /> */}
                                    <div className="pl-4" />
                                    <div className="pl-5" />
                                  </Shimmer>
                                </Col>
                              </Row>
                            </CardBody>
                          </Card>
                          <Card>
                            <CardBody>
                              <Row>
                                <Col md="10">
                                  <Row>
                                    <Col md="4">
                                      <Shimmer>
                                        <div className="img-loading" />
                                      </Shimmer>
                                    </Col>
                                    <Col
                                      md="8"
                                      className="info-loading no-padding"
                                    >
                                      <Shimmer>
                                        <div className="tl-1" />
                                        <div className="tl-2" />
                                        <div className="tl-3" />
                                      </Shimmer>
                                    </Col>
                                    <Col md="12">
                                      <Row>
                                        <Col md="6">
                                          <Shimmer>
                                            <div className="fl-1" />
                                          </Shimmer>
                                        </Col>
                                        <Col md="6">
                                          <Shimmer>
                                            <div className="fl-2" />
                                          </Shimmer>
                                        </Col>
                                      </Row>
                                    </Col>
                                  </Row>
                                </Col>
                                <Col md="2" className="price-loading">
                                  <Shimmer>
                                    <div className="pl-1" />
                                    <div className="pl-2" />
                                    {/* <div className="pl-3" /> */}
                                    <div className="pl-4" />
                                    <div className="pl-5" />
                                  </Shimmer>
                                </Col>
                              </Row>
                            </CardBody>
                          </Card>
                        </Col>
                      </Row>

                      {/* <Row>
                                                        <Col >
                                                            <div className="loader-text">
                                                                <img src={require('../img/kite.png')} />
                                                                <span>
                                                                    در حال جستجوی بهترین پرواز برای شماست.
                                                                </span>
                                                            </div>
                                                            <Loader
                                                                type="Plane"
                                                                color="#73c9ca"
                                                                size={20}
                                                                className="loader-svg"
                                                            //timeout={3000} //3 secs
                                                            />
                                                        </Col>
                                                    </Row> */}
                    </div>
                  ) : (
                    <div className="row">
                      <div
                        className="col-md-3 pl-5-lg none-xs"
                        style={!dataExist ? divStyle : ""}
                      >
                        <div style={{ marginTop: 20 }}>
                          <Filter Opening={false} />
                        </div>
                      </div>
                      <div className="col-md-9 pr-5-lg mb-5">
                        <div className="not-found">
                          <img src={require("../img/coding.png")} />
                          <p>
                            در تاریخ مورد نظر شما هنوز توری تعریف نشده است .
                          </p>
                          <h1>{(isRealValue(props.ret))?props.ret:""}</h1>                        
                          <span>در صورت تمایل مجددا جستجو کنید.</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* </ModalBody>

                            </Modal> */}
                  {/*<Row>
                                <Col>
                                <span>لطفا منتظر بمانید</span>
                             <Loader
                                type="Plane"
                                color="#73c9ca"
                                size={20}
                                //timeout={3000} //3 secs
                            />
                                </Col>
                            </Row>*/}
                </div>
              ) : (
                <div className="text-center m-auto">...LOADING</div>
              )}
            </div>
          )}
          <button
            className="filter-btn-xs btn none-lg "
            onClick={filterToggle}
            style={{ display: !showPayment ? "block" : "none" }}
          >
            فیلتر
          </button>
          <Collapse isOpen={isOpen} className="filter-toggle">
            <div className="filter-bg">
              <MdCancel onClick={filterCancle} className="cancle-btn" />
              <Filter Opening={true} />
            </div>
          </Collapse>
        </Container>
      </div>
    </Fragment>
  );
};

//for filters
const mapStateToProps = state => {
  const stars = state.tourFilterReducer.stars;
  const price = state.tourFilterReducer.price;
  const rates = state.tourFilterReducer.rates;
  const paymentObj = state.paymenObject.paymentObj;
  const airlines = state.tourFilterReducer.airlines;
  return { stars, rates, price, airlines, paymentObj };
}; 

Tours.getInitialProps = async ({ query }) => {
  console.log("getInitialPros", query)
  var des = await query.des;
  var returning = await query.returning;

  return {
    searchParams: query, 
    str:des,
    ret:returning,
  };
};

export default connect(mapStateToProps)(Tours);
