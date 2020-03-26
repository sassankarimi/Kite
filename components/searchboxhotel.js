import React, { Fragment ,useEffect,useState } from 'react';
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
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ports from '../ports';
import axios from 'axios';

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
  const [hotelList,setHotelList] = useState([]);
  const [isData,setIsData] = useState(true);

  useEffect(()=>{
    function hotelList(){ 
     axios.get(`${ports.domain}${ports.hotelList}`)
     .then(function (response) {
       switch(response.status) {
         case 200:
           return response.data;
         default:
           return false;
       }
     })
     .catch(function (error) {
       console.log("error : ",error);
       return Promise.reject(error);
     }).then(data => {
         if (data && data.length>0) {
           
          setHotelList(data);
           setIsData(true);
           }
           else{
             setIsData(false);

           }
   
       });
       return;
   }
   
   hotelList();
   // console.log(v);

 //airPortList();

},[])

// console.log("hotelList",hotelList)
  const address='/tour/booking/';
  const id=8000;
    return (
      <Fragment>
            <div className="inputgroups">
                <InputGroup>
                  {/* <Input placeholder="شهر یا فرودگاه" /> */}
                  <Autocomplete className="airport-auto form-control"
              multiple
              id="fixed-tags-demo"
              options={hotelList}
              getOptionLabel={option => option.Country_Persian}
             
              //defaultValue={[ top100Films[13]]}
              // onChange={(e, value)=>handleData(e,value)}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip label={option.Country_Persian} {...getTagProps({ index })}  />
                ))
              }
              style={{fontFamily: 'IRANSansWeb' }}
              renderInput={params => (
                <TextField
                  {...params}
                
                  variant="outlined"
                  // placeholder="Favorites"
                  fullWidth
                 
                />
              )}
            />
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      <div className="source-plane">
                        <IoIosAirplane/>
                      </div>
                      مبداٌ؟
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
                <InputGroup>
                  <Input placeholder="username" />
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      <div className="calendar-icon">
                        <FaRegCalendarAlt/>
                      </div>
                      ملیت
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
                <InputGroup>
                  {/* <Input placeholder="username" /> */}
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      <div className="calendar-icon">
                        <FaRegCalendarAlt/>
                      </div>
                       تاریخ رفت
                       <Calendar/>
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
                <InputGroup>
                  {/* <Input placeholder="username" /> */}
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      <div className="calendar-icon">
                        <FaRegCalendarAlt/>
                      </div>
                        تاریخ برگشت
                        <Calendar/>
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </div>
              <div className="search-dropdown">          
                <DropdownPage name="تعداد مسافران"/>
              </div>
              <RoundButton id={id} link={`${address}`} name="جستــجو" icon={<IoMdSearch/>}/>

      </Fragment>
    )
}
export default SearchBoxHotel;