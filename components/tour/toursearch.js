import React, { useState, useEffect } from "react";

//redux
import { connect, useSelector, useDispatch } from "react-redux";
import { add_org_id, add_des_id } from "../../redux/basicdatas/action";
import { loadCity } from "../../redux/cityList/action";

//UI Librarires
import { FaExchangeAlt, FaRegCalendarAlt } from "react-icons/fa";
import DatePicker from "react-modern-calendar-datepicker";

import { InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";
import { IoIosAirplane } from "react-icons/io";
import { Button } from "reactstrap";
import { MdKeyboardArrowDown } from "react-icons/md";
import Chip from "@material-ui/core/Chip";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { IoMdSearch } from "react-icons/io";
import { Container, Row, Col } from "reactstrap";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { MdLens } from "react-icons/md";

//utilites
import { isRealValue } from "../../Functions";

//components
import RoundButton from "../roundbutton";
import Rooms from "../rooms";

//axios
import ports from "../../ports";
import axios from 'axios'

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

const TourSearch = props => {
  const [isData, setIsData] = useState(true);
  const [showChild, setShowChild] = useState(false);
  const [tourCategory, setTourCategory] = useState(0);
  const [valueOrigin, setValueOrigin] = useState("");
  const [cityIdOrg, setCityIdOrg] = useState("");
  const [cityIdDes, setCityIdDes] = useState("");
  const [valueDestination, setValueDestination] = useState("");
  const [originString, setOriginString] = useState(props.searchParams.org);
  const [destinationString, setDestinationString] = useState(
    props.searchParams.des
  );
  const [open, setOpen] = useState(false);
  const [selectedDayOrg, setSelectedDayOrg] = useState(null);
  const [selectedDayDes, setSelectedDayDes] = useState(null);

  const [cityList, setcityList] = useState([]);
  const dispatch = useDispatch();
  const rooms = useSelector(state => state.roomsReducer.rooms);
  const inc1 = useSelector(state => state.roomsReducer.adultArray);
  const inc2 = useSelector(state => state.roomsReducer.childArray);
  const selValues = useSelector(state => state.roomsReducer.selValues);
  const total = useSelector(state => state.roomsReducer.total);
  const infantCount = useSelector(state => state.roomsReducer.infantCount);
  const child1Count = useSelector(state => state.roomsReducer.child1Count);
  const child2Count = useSelector(state => state.roomsReducer.child2Count);

  //end of useless states
  const [forceRender, setForceRender] = useState(new Date().getTime());
  const classes = useStyles();

  const handleChange = event => {
    setTourCategory(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    function defultValues() {
      axios.get(`${ports.domain}${ports.cityList}`)
      .then(function (response) {
        switch (response.status) {
          case 200:
            return response.data;
          default:
            return false;
        }
      })
      .catch(function (error) {
        return Promise.reject(error);
      }).then(data => {
        if (data && data.length > 0) {
          data.sort((a) => (a.CountryAbbrevation === 'IR') ? -1 : 1)
          setcityList(data);
        if (
          isRealValue(props.searchParams.org) &&
          props.searchParams.org.length !== 0
        ) {
          let cTsOrg = props.searchParams.org.split("-");
          let defaultOrgValue = [];
          cTsOrg.map(element => {
            let temp = data.filter(item => item.CityAbbrevation === element);
            defaultOrgValue.push(temp[0]);
          });
          setValueOrigin(defaultOrgValue);
        }
        if (
          isRealValue(props.searchParams.des) &&
          props.searchParams.des.length !== 0
        ) {
          let cTsDes = props.searchParams.des.split("-");
          let defaultDesValue = [];
          cTsDes.map(element => {
            let temp = data.filter(item => item.CityAbbrevation === element);
            defaultDesValue.push(temp[0]);
          });
          setValueDestination(defaultDesValue);
        }
      }
      })
        if (
          isRealValue(props.searchParams.departing) &&
          parseInt(props.searchParams.departing.split("-").length) === 3
        ) {
          let defaultDateFrom = {
            day: parseInt(props.searchParams.departing.split("-")[2]) || null,
            month: parseInt(props.searchParams.departing.split("-")[1]) || null,
            year: parseInt(props.searchParams.departing.split("-")[0]) || null
          };
          setSelectedDayOrg(defaultDateFrom);
        }
        if (
          isRealValue(props.searchParams.returning) &&
          parseInt(props.searchParams.returning.split("-").length) === 3
        ) {
          let defaultDateTo = {
            day: parseInt(props.searchParams.returning.split("-")[2]) || null,
            month: parseInt(props.searchParams.returning.split("-")[1]) || null,
            year: parseInt(props.searchParams.returning.split("-")[0]) || null
          };
          setSelectedDayDes(defaultDateTo);
        }
        setIsData(true);
      setShowChild(true);
    }
    defultValues()
  }, []);

  function getOptionSelectedOrigin(event, value) {
    setValueOrigin(value);
    let str = "";
    let ctId = [];
    for (var i = 0; i < value.length; i++) {
      if (i === value.length - 1) str += value[i].CityAbbrevation;
      else str += value[i].CityAbbrevation + "-";

      ctId.push(value[i].CityId);
    }
    setOriginString(str);
    setCityIdOrg(ctId);
    //city orgId set in redux
    props.dispatch(add_org_id(ctId));
    //console.log("origin", str);
  }

  function getOptionSelectedDestination(event, value) {
    setValueDestination(value);
    let str = "";
    let ctId = [];
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

  var dateOrigin = 0;
  var dateDestination = 0;
  if (selectedDayOrg !== null) {
    let orgD =
      selectedDayOrg.day.toString().length === 1
        ? `0${selectedDayOrg.day}`
        : selectedDayOrg.day;
    let orgM =
      selectedDayOrg.month.toString().length === 1
        ? `0${selectedDayOrg.month}`
        : selectedDayOrg.month;
    dateOrigin = selectedDayOrg.year + "-" + orgM + "-" + orgD;
  }
  if (selectedDayDes !== null) {
    let desD =
      selectedDayDes.day.length === 1
        ? `0${selectedDayDes.day}`
        : selectedDayDes.day;
    let desM =
      selectedDayDes.month.length === 1
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
    roomCount: rooms,
    roomRules: roomRules.toString(),
    orgDate: dateOrigin.toString(),
    desDate: dateDestination.toString(),
    tourCategory: tourCategory,
    selValues: JSON.stringify(selValues)
  };

  return (
    <div className="search-booking">
      <div className="inputgroups">
        <Container>
          <Row>
            <Col md="6" className="airport-col no-padding">
              <InputGroup>
                <Autocomplete
                  className="airport-auto form-control"
                  multiple
                  value={valueOrigin}
                  // open={true}
                  filterSelectedOptions={true}
                  id="fixed-tags-demo"
                  options={cityList}
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
                  //defaultValue={[ top100Films[13]]}
                  onChange={(e, value) => getOptionSelectedOrigin(e, value)}
                  // getOptionSelected={getSelectedAus(value)}
                  renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                      <Chip
                        key={index}
                        label={option.CityTitle_Persian}
                        {...getTagProps({ index })}
                      />
                    ))
                  }
                  style={{ width: "100%", fontFamily: "IRANSansWeb" }}
                  renderInput={params => (
                    <TextField
                      {...params}
                      variant="outlined"
                      // placeholder="Favorites"
                      fullWidth
                    />
                  )}
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
              <Button
                onClick={handleChangeOrgDes}
                className="input-btn exchange-input-btn"
              >
                <FaExchangeAlt className="exchangebtn" />
              </Button>
              <InputGroup className="airport-dest">
                <Autocomplete
                  className="airport-auto form-control"
                  multiple
                  //open={true}
                  value={valueDestination}
                  filterSelectedOptions={true}
                  id="fixed-tags-2"
                  options={cityList}
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
                      <span className="optionLeft-autocomplete">
                        {option.CityAbbrevation}
                      </span>
                    </div>
                  )}
                  //defaultValue={[ top100Films[13]]}
                  onChange={(e, value) =>
                    getOptionSelectedDestination(e, value)
                  }
                  // getOptionSelected={getSelectedAus(value)}
                  renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                      <Chip
                        label={option.CityTitle_Persian}
                        {...getTagProps({ index })}
                      />
                    ))
                  }
                  style={{ width: "100%", fontFamily: "IRANSansWeb" }}
                  renderInput={params => (
                    <TextField
                      {...params}
                      variant="outlined"
                      // placeholder="Favorites"
                      fullWidth
                    />
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
                {/* <Input placeholder="username" /> */}
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
                {/* <Input placeholder="username" /> */}
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
              {/* <Button className="input-btn">
                  <IoMdSearch className="btnsearch"/>
                </Button> */}
              <span className="input-btn">
                <RoundButton
                  searchParams={searchParams}
                  link={ports.toursRoute}
                  roomData={selValues}
                  // name="جستــجو"
                  icon={<IoMdSearch />}
                />
              </span>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="search-dropdown">
        <Container>
          <Row>
            <Col md="6" xs="12">
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
            <Col md="6" xs="12">
              <Rooms />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};


export default connect(state=>state)(TourSearch);
