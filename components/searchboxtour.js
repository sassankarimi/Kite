import React, { Fragment, useEffect, useState } from "react";

//redux
import { connect, useSelector, useDispatch } from "react-redux";
import { add_org_id, add_des_id } from "../redux/basicdatas/action";
import { loadCity } from "../redux/cityList/action";

//UI Libraries
import { FaExchangeAlt, FaRegCalendarAlt } from "react-icons/fa";
import { IoIosAirplane } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdLens } from "react-icons/md";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Button,
  Container,
  Row,
  Col
} from "reactstrap";
import {
  makeStyles,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Chip,
  TextField
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import DatePicker from "react-modern-calendar-datepicker";


//components
import RoundButton from "./roundbutton";
import Rooms from './rooms'

//utilities
import { DotLoading } from "../Functions";

//css
import 'react-modern-calendar-datepicker/lib/DatePicker.css';;

const useStyles = makeStyles(theme => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));


const SearchBoxTour = props => {
  const classes = useStyles();
  const [showChild, setShowChild] = useState(false);
  const [tourCategory, setTourCategory] = useState("");
  const [valueOrigin, setValueOrigin] = useState([""]);
  const [cityIdOrg, setCityIdOrg] = useState(0);
  const [cityIdDes, setCityIdDes] = useState(0);
  const [valueDestination, setValueDestination] = useState("");
  const [originString, setOriginString] = useState("");
  const [destinationString, setDestinationString] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedDayOrg, setSelectedDayOrg] = useState(null);
  const [selectedDayDes, setSelectedDayDes] = useState(null);
  const cityList = useSelector(state => state.cityListReducer.cityList);
  const dispatch = useDispatch();
  const rooms = useSelector(state => state.roomsReducer.rooms);
  const inc1 = useSelector(state => state.roomsReducer.adultArray);
  const inc2 = useSelector(state => state.roomsReducer.childArray);
  const selValues = useSelector(state => state.roomsReducer.selValues);
  const total = useSelector(state => state.roomsReducer.total);
  const infantCount = useSelector(state => state.roomsReducer.infantCount);
  const child1Count = useSelector(state => state.roomsReducer.child1Count);
  const child2Count = useSelector(state => state.roomsReducer.child2Count);

  //tour type select box
  const handleChange = event => {
    setTourCategory(event.target.value);
  };

  //tour type select box
  const handleClose = () => {
    setOpen(false);
  };

  //tour type select box
  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    //reed cityList from api
    dispatch(loadCity());
    setShowChild(true);
  }, []);


  function getOptionSelectedOrigin(event, newValue) {
    setValueOrigin(newValue);
    let str = "";
    let ctId = [];
    //origin data structure "TEH-ISF"
    for (var i = 0; i < newValue.length; i++) {
      if (i === newValue.length - 1) str += newValue[i].CityAbbrevation;
      else str += newValue[i].CityAbbrevation + "-";
      ctId.push(newValue[i].CityId);
    }
    setOriginString(str);
    setCityIdOrg(ctId);
    //city orgId set in redux
    props.dispatch(add_org_id(ctId));
  }

  function getOptionSelectedDestination(event, value) {
    setValueDestination(value);
    let str = "";
    let ctId = [];
    //destination data structure "TEH-ISF"
    for (var i = 0; i < value.length; i++) {
      if (i === value.length - 1) str += value[i].CityAbbrevation;
      else str += value[i].CityAbbrevation + "-";
      ctId.push(value[i].CityId);
    }
    setDestinationString(str);
    setCityIdDes(ctId);
    //city desId set in redux
    props.dispatch(add_des_id(ctId));
  }

  //change destination and origin
  function handleChangeOrgDes() {
    let tempOrg = valueOrigin;
    let tempDes = valueDestination;
    let tempOrgStr = originString;
    let tempDesStr = destinationString;
    let tempOrgID = cityIdOrg;
    let tempDesId = cityIdDes;
    setCityIdOrg(tempDesId);
    //city orgId set in redux
    props.dispatch(add_org_id(tempDesId));
    setCityIdDes(tempOrgID);
    //city desId set in redux
    props.dispatch(add_des_id(tempOrgID));
    setOriginString(tempDesStr);
    setDestinationString(tempOrgStr);
    setValueOrigin(tempDes);
    setValueDestination(tempOrg);
  }

  //make day and month 2 figit :07/05
  var dateOrigin = 0;
  var dateDestination = 0;
  var zero = "0";

  if (selectedDayOrg !== null) {
    let orgD =
      selectedDayOrg.day.toString().length === 1
        ? zero
          .toString()
          .concat(selectedDayOrg.day.toString())
          .toString()
        : selectedDayOrg.day;
    let orgM =
      selectedDayOrg.month.toString().length === 1
        ? `0${selectedDayOrg.month}`
        : selectedDayOrg.month;
    dateOrigin = selectedDayOrg.year + "-" + orgM + "-" + orgD;
  }
  if (selectedDayDes !== null) {
    let desD =
      selectedDayDes.day.toString().length === 1
        ? `0${selectedDayDes.day}`
        : selectedDayDes.day;
    let desM =
      selectedDayDes.month.toString().length === 1
        ? `0${selectedDayDes.month}`
        : selectedDayDes.month;
    dateDestination = selectedDayDes.year + "-" + desM + "-" + desD;
  }

  const adultCount = inc1.reduce(function myFunc(a, b) {
    return a + b;
  });

  var roomRules = "";
  for (var i = 0; i < selValues.length; i++) {
    let adult = selValues[i].adult;
    let infant = 0;
    let child1 = 0;
    let child2 = 0;
    
    for (var j = 0; j < selValues[i].age.length; j++) {
      if (selValues[i].age[j] === 0 || selValues[i].age[j] === 1) {
        infant = infant + 1;
      }
      if (
        selValues[i].age[j] === 2 ||
        selValues[i].age[j] === 3 ||
        selValues[i].age[j] === 4 ||
        selValues[i].age[j] === 5
        ) {
          child1 = child1 + 1;
        }
        if (
          selValues[i].age[j] === 6 ||
          selValues[i].age[j] === 7 ||
          selValues[i].age[j] === 8 ||
          selValues[i].age[j] === 9 ||
          selValues[i].age[j] === 10 ||
          selValues[i].age[j] === 11
          ) {
            child2 = child2 + 1;
          }
        }
        const einRoom = adult
        .toString()
        .concat(child1.toString(), child2.toString(), infant.toString());
        if (roomRules === "")
        roomRules = roomRules.concat(einRoom);
        else roomRules = roomRules.concat(",", einRoom);
      }
      
  const searchParams = {
    org: originString,
    des: destinationString,
    adult: adultCount,
    infant: infantCount,
    child1: child1Count,
    child2: child2Count,
    selValues: JSON.stringify(selValues),
    roomCount: rooms,
    roomRules: roomRules.toString(),
    orgDate: dateOrigin.toString(),
    desDate: dateDestination.toString(),
    tourCategory: tourCategory
  };



  if (!showChild) return <DotLoading />;
  return (
    <Fragment>
      <div className="inputgroups">
        <Container>
          <Row>
            <Col md="6" className="airport-col no-padding">
              <InputGroup>
                <Autocomplete
                  id="fixed-tags-demo"
                  className="airport-auto form-control"
                  multiple
                  options={cityList}
                  filterSelectedOptions={true}
                  onChange={(event, newValue) => getOptionSelectedOrigin(event, newValue)}
                  groupBy={option =>
                    option.CountryAbbrevation === "IR"
                      ? "شهرهای پرتردد"
                      : "سایر شهرها"
                  }
                  getOptionLabel={option => (
                    <div>
                      <MdLens className="pl-1" size="10" color="#65bfbe" />
                      <span className="optionRight">
                        {option.CityTitle_Persian} 
                      </span>
                      <span className="optionLeft-autocomplete">
                        {option.CityAbbrevation}
                      </span>
                    </div>
                  )}
                  renderTags={(newValue, getTagProps) =>
                    newValue.map((option, index) => (
                      <Chip
                        label={option.CityTitle_Persian}
                        {...getTagProps({ index })}
                        key={index}
                      />
                    ))
                  }
                  style={{ width: "100%", fontFamily: "IRANSansWeb" }} style={{ width: 300 }}
                  renderInput={params => <TextField {...params} variant="outlined" fullWidth />}
                />
                <InputGroupAddon addonType="append" className="airport-append">
                  <InputGroupText>
                    <div className="source-plane">
                      <IoIosAirplane />
                    </div>
                    مبداٌ؟
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>

              <Button onClick={handleChangeOrgDes} className="input-btn">
                <FaExchangeAlt />
              </Button>
              <InputGroup className="airport-dest">
                {/* <Input placeholder="شهر یا فرودگاه" /> */}
                <Autocomplete
                  className="airport-auto form-control"
                  multiple
                  filterSelectedOptions={true}
                  id="fixed-tags-2"
                  options={cityList}
                  onChange={(e, value) =>
                    getOptionSelectedDestination(e, value)
                  }
                  groupBy={toption =>
                    toption.CountryAbbrevation === "IR"
                      ? "شهرهای پرتردد"
                      : "سایر شهرها"
                  }
                  getOptionLabel={option => (
                    <div>
                      <MdLens className="pl-1" size="10" color="#65bfbe" />
                      <span className="optionRight">
                        {option.CityTitle_Persian}
                      </span>
                      <span className="optionLeft-autocomplete ">
                        {option.CityAbbrevation}
                      </span>
                    </div>
                  )}
                  //defaultValue={[ top100Films[13]]}
                 
                  // getOptionSelected={getSelectedAus(value)}
                  renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                      <Chip
                        label={option.CityTitle_Persian}
                        {...getTagProps({ index })}
                        key={index}
                      />
                    ))
                  }
                  style={{ width: "100%", fontFamily: "IRANSansWeb" }}
                  renderInput={params => (
                    <TextField {...params} variant="outlined" fullWidth />
                  )}
                />

                <InputGroupAddon addonType="append" className="airport-append">
                  <InputGroupText>
                    <div className="dest-plane">
                      <IoIosAirplane />
                    </div>
                    مقصد؟
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </Col>
            <Col md="6" className="date-col no-padding">
              <InputGroup>
                <InputGroupAddon addonType="append">
                  <InputGroupText>
                    <div className="calendar-icon">
                      <FaRegCalendarAlt />
                    </div>
                    تاریخ رفت

                    <DatePicker
                      value={selectedDayOrg}
                      onChange={setSelectedDayOrg}
                      inputPlaceholder=" "
                      shouldHighlightWeekends
                      locale="fa"
                    />
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
              <InputGroup>
                <InputGroupAddon addonType="append">
                  <InputGroupText>
                    <div className="calendar-icon">
                      <FaRegCalendarAlt />
                    </div>
                    تاریخ برگشت
                    <DatePicker
                      value={selectedDayDes}
                      onChange={setSelectedDayDes}
                      inputPlaceholder=" "
                      shouldHighlightWeekends
                      locale="fa"
                    />
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="search-dropdown">
        <Container>
          <Row>
            <Col md="6" xs="6">
              <div className="tour-type right-to-left">
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-controlled-open-select-label">
                    سبک تور
                  </InputLabel>
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={tourCategory}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>همه موارد</em>
                    </MenuItem>
                    <MenuItem value={10}>تفریحی</MenuItem>
                    <MenuItem value={20}>طبیعت گردی</MenuItem>
                    <MenuItem value={30}>زیارتی</MenuItem>
                  </Select>
                  <MdKeyboardArrowDown />
                </FormControl>
              </div>
            </Col>
            <Col md="6" xs="6">
              <Rooms />
            </Col>
          </Row>
        </Container>
      </div>
      <RoundButton
        searchParams={searchParams}
        name="جستجو"
      />
    </Fragment>
  );
};



export default connect()(SearchBoxTour);
