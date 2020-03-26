import React, { Component } from "react";
import dynamic from "next/dynamic";

//UI Libraries
import { Container } from "reactstrap";
import {
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBIcon
} from "mdbreact";
import { IoIosAirplane } from "react-icons/io";
import {
  FaPlane,
  FaHandHolding,
  FaPassport,
  FaHotel,
  FaSuitcaseRolling
} from "react-icons/fa";

//routing
import Link from "next/link";

//image
import Background from "../img/bg-box.jpg";

//components
import BgText from "./bgtext";
import SearchBoxTour from "./searchboxtour";
import SearchBoxFlight from "./searchboxflight";
import SearchBoxHotel from "./searchboxhotel";
import SearchBoxVisa from "./searchboxvisa";
import SearchBoxInsurance from "./searchboxinsurance";

//set background image
var sectionStyle = {
  backgroundImage: `url(${Background})`
};

class TabsMaterial extends Component {
  state = {
    activeItem: "1"
  };

  toggle = tab => () => {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab
      });
    }
  };

  render() {
    return (
      // <MDBContainer>
      <div className="search-box-tabs">
        <MDBNav tabs>
          <MDBNavItem>
            <Link href="#1">
              <a
                className={`${
                  this.state.activeItem == 1 ? "active" : " "
                } nav-link`}
                onClick={this.toggle("1")}
              >
                <FaSuitcaseRolling />
                <br />
                <span>تــــور</span>
              </a>
            </Link>
          </MDBNavItem>
          <MDBNavItem>
            <Link href="#2">
              <a
                className={this.state.activeItem == 2 ? "active" : " "}
                onClick={this.toggle("2")}
              >
                <FaPlane className="plane-icon" />
                <br />
                <span>هواپیما</span>
              </a>
            </Link>
          </MDBNavItem>
          <MDBNavItem>
            <Link href="#3">
              <a
                className={this.state.activeItem == 3 ? "active" : " "}
                onClick={this.toggle("3")}
              >
                <FaHotel />
                <br />
                <span>هتـــل</span>
              </a>
            </Link>
          </MDBNavItem>
          <MDBNavItem>
            <Link href="#4">
              <a
                className={this.state.activeItem == 4 ? "active" : " "}
                onClick={this.toggle("4")}
              >
                <FaPassport />
                <br />
                <span>ویـــزا</span>
              </a>
            </Link>
          </MDBNavItem>
          <MDBNavItem>
            <Link href="#5">
              <a
                className={this.state.activeItem == 5 ? "active" : " "}
                onClick={this.toggle("5")}
              >
                <div className="insurance-icons">
                  <IoIosAirplane className="insurance1" />
                  <FaHandHolding className="insurance2" />
                </div>
                <span>بیمــه</span>
              </a>
            </Link>
          </MDBNavItem>
        </MDBNav>
        <MDBTabContent
          className="card tab-card"
          activeItem={this.state.activeItem}
        >
          <MDBTabPane tabId="1">
            <SearchBoxTour  />
          </MDBTabPane>
          {/*<MDBTabPane tabId="2" >
              <SearchBoxFlight/>
            </MDBTabPane>
            <MDBTabPane tabId="3" >
              <SearchBoxHotel/>
            </MDBTabPane>
            <MDBTabPane tabId="4" >
              <SearchBoxVisa/>
            </MDBTabPane>
            <MDBTabPane tabId="5" >
              <SearchBoxInsurance/>
      </MDBTabPane>*/}
        </MDBTabContent>
      </div>
      //  </MDBContainer>
    );
  }
}

class SearchBox extends Component {
  render() {
    return (
      <div style={sectionStyle} className="search-bg">
        <BgText />
        <Container>
          <div className="searchbox-p">
            <div className="searchbox">
              <TabsMaterial  />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default SearchBox;
