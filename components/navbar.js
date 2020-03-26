import React, { Component } from "react";
import {Link} from '../routes'


//UI Libraries
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBBtn,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";
import { Container } from "reactstrap";
import { FaUserTie } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

//link
// import Link from "next/link";
import ports from "../ports";
class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <MDBNavbar color="navbar" dark expand="md" className="original-nav">
        <Container>
          <MDBNavbarBrand>
            <Link href="/">
              <a>
                <img className="logo-img" src={require("../img/logo.png")} />
              </a>
            </Link>
           
            {/* <Link route='test' query={{ slug : 'test1'}}>
             <a>Test</a>
            </Link> */}
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            {/* <MDBNavbarNav right className="right-nav">
              <MDBNavItem active className="border-left">
                <Link href="/register">
                  <a>پیشنهاد ویژه</a>
                </Link>
              </MDBNavItem>
              <MDBNavItem className="border-left">
                <Link href="/register">
                  <a>شرکت ها و آژانس</a>
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link href="/register">
                  <a>ورود / عضویت</a>
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret className="nav-dropdown">
                    <div className="d-none d-md-inline">
                      بیشتر
                      <MdKeyboardArrowDown />
                    </div>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-default">
                    <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                    <MDBDropdownItem href="#!">
                      Something else here
                    </MDBDropdownItem>
                    <MDBDropdownItem href="#!">
                      Something else here
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav> */}
            <MDBNavbarNav left className="left-nav">
              <MDBNavItem className="border-left">
                <Link
                  href={{
                    pathname: ports.domain,
                    query: { name: "B2C/Login" }
                  }}
                  as={`${ports.domain}B2C/Login`}
                >
                  <a>
                    <FaUserTie className="user-icon" />
                    پیگیری خرید
                  </a>
                </Link>
              </MDBNavItem>
              <MDBNavItem className="none-xs">
                <MDBDropdown>
                  <MDBDropdownToggle nav caret className="nav-dropdown">
                    <img src={require("../img/phone.png")} />
                    <p>
                      پشتیبانی 24 ساعته
                      <br />
                      021-75097700
                    </p>
                  </MDBDropdownToggle>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </Container>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;
