import React, { Fragment } from 'react';
import {FaExchangeAlt ,FaRegCalendarAlt } from "react-icons/fa";
import { makeStyles } from '@material-ui/core/styles';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import {IoIosAirplane ,IoMdSearch} from "react-icons/io";
import { Button } from "reactstrap";
import Fab from '@material-ui/core/Fab';
import { MdKeyboardArrowDown } from "react-icons/md";
import Calendar from "./calendar";
import RoundButton from "./roundbutton";

const useStyles = makeStyles(theme => ({
    fab: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));
  const DropdownPage = (props) => {
    return (  
        <MDBDropdown size="sm">
          <MDBDropdownToggle caret>
            {props.name}
            <MdKeyboardArrowDown/>
          </MDBDropdownToggle>
          <MDBDropdownMenu color="danger" basic>
            <MDBDropdownItem>Action</MDBDropdownItem>
            <MDBDropdownItem>Another Action</MDBDropdownItem>
            <MDBDropdownItem>Something else here</MDBDropdownItem>
            <MDBDropdownItem>Something else here</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
    );
  }
// const RoundButton = (props) => {
//     const classes = useStyles();
//     return (
//       <Fab variant="extended" aria-label="like" className={classes.fab}>
//           <IoMdSearch/>
//         {props.name}
//       </Fab>
//     )
//   }
const SearchBoxHotel = (props) => {
  const address='/tour/booking/';
  const id=10;
    return (
      <Fragment>
            <div className="inputgroups">
                <InputGroup>
                  <Input placeholder="شهر یا فرودگاه" />
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      <div className="source-plane">
                        <IoIosAirplane/>
                      </div>
                     کشور بیمه
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
             
                <InputGroup className="insurance-calendar">
                  {/* <Input placeholder="username" /> */}
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      <div className="calendar-icon">
                        <FaRegCalendarAlt/>
                      </div>
                       تاریخ تولد مسافر
                       <Calendar/>
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              
              </div>
              <div className="search-dropdown">          
                <DropdownPage name="تعداد کل مسافران"/>
                <DropdownPage name="مدت بیمه"/>
              </div>
              <RoundButton id={id} link={`${address}`} name="جستــجو" icon={<IoMdSearch/>}/>

      </Fragment>
    )
}
export default SearchBoxHotel;