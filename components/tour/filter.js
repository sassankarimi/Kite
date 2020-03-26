import React, { useState, useEffect, Fragment } from "react";

//redux
import { connect , useSelector , useDispatch } from "react-redux";
import { setStars , setAirlines} from "../../redux/tourFilters/action";
import { add_item } from "../../redux/basicdatas/action";

//UI Libraries
import { Card, CardBody } from "reactstrap";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Collapse, Button } from "reactstrap";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import Slider from "@material-ui/core/Slider";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import { MdStarBorder, MdStar, MdClose } from "react-icons/md";
import StarRating from "react-rating";

//Utilities
import { BarLoading } from "../../Functions";

const useStyles = makeStyles({
  root: {
    width: "100%"
  }
});
const useStylesCheckbox = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  formControl: {
    margin: theme.spacing(1)
  }
}));

function valuetext(value) {
  return `${value}°C`;
}

function RangeSlider(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.dispatch(set_preis(newValue));
    props.dispatch(add_item(newValue));
  };
  //console.log("props in preis", props.preis)
  //console.log("basicDatas props in filter", props.basicDatas)
  return (
    <div className={classes.root}>
      {/* <Typography id="range-slider" gutterBottom>
        Temperature range
      </Typography> */}
      <Slider
        value={value}
        onChange={(e, value) => handleChange(e, value)}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}

function SimpleRating() {
  const [value, setValue] = React.useState(2);

  return (
    <div>
      <Box
        component="fieldset"
        mb={3}
        borderColor="transparent"
        className="star-rating"
      >
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
    </div>
  );
}

// function Score() {
//   return (
//     <Box component="fieldset" mb={3} borderColor="transparent">
//     <Typography component="legend">Custom icon set</Typography>
//     <Rating
//       name="customized-icons"
//       defaultValue={2}
//       getLabelText={value => customIcons[value].label}
//       IconContainerComponent={IconContainer}
//     />
//   </Box>
//   )
// }

const FilterCollapse1 = props => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="filter-collapse border-bottom">
      <p onClick={toggle}>
        توقف ها
        <MdKeyboardArrowDown />
      </p>
      <Collapse isOpen={isOpen}>
        <div></div>
      </Collapse>
    </div>
  );
};

const StarFilter = props => {
  const [isOpen, setIsOpen] = useState(true);
  const starValue= useSelector(state=>state.tourFilterReducer.stars)
  const dispatch = useDispatch();
  const toggle = () => setIsOpen(!isOpen);

  function handleStars(value) {
    console.log("star rating value in seatch Filter :", value);
    dispatch(setStars(value));
  }

  return (
    <div className="filter-collapse border-bottom">
      <p onClick={toggle}>
        ستاره دار
        <MdKeyboardArrowDown />
      </p>
      <Collapse isOpen={isOpen}>
        {props.show ? (
          <div className="text-center">
            <StarRating
              direction="rtl"
              emptySymbol={<MdStarBorder color="#73c9ca" size="30" />}
              fullSymbol={<MdStar color="#73c9ca" size="30" />}
              fractions={1}
              start={0}
              stop={5}
              initialRating={starValue}
              onChange={handleStars}
            />
            <span className="pr-2" onClick={() => handleStars(0)}>
              <MdClose size="15" />
            </span>
          </div>
        ) : (
          <Fragment>
            <BarLoading />
          </Fragment>
        )}
      </Collapse>
    </div>
  );
};

const AirlinesFilter = props => {
  const [isOpen, setIsOpen] = useState(true);
  const filteredResults= useSelector(state=> state.searchTourReducer.tourResult);
  const dispatch = useDispatch();
  // console.log("myallllllPackges",filteredResults); 
  // const airlineValues= useSelector(state=>state.tourFilterReducer.airlines);
  let airlineValues= [];
  const toggle = () => setIsOpen(!isOpen);

  for (var i=0;i<filteredResults.length;i++) {
    for (var j=0;j<filteredResults[i].Flight.length;j++) {
      airlineValues.push(filteredResults[i].Flight[j].AirLineTitle_Going);
      airlineValues.push(filteredResults[i].Flight[j].AirLineTitle_Coming);
    }
  }
  const airlinesName = airlineValues.filter((val,id,array) => array.indexOf(val) == id);
  console.log("airlinesName" , airlinesName)

  function airlineHandle(value) {
    console.log("airline value in search Filter :", value);
     dispatch(setAirlines(value));
  }

  // const reduxAirline = useSelector(state => state.tourFilterReducer.airlines);
  // console.log("reduxAirline", reduxAirline);

  return (
    <div className="filter-collapse border-bottom">
      <p onClick={toggle}>
        شرکت هواپیمایی
        <MdKeyboardArrowDown />
      </p>
      <Collapse isOpen={isOpen}>
        {props.show ? (
          <div>
            {/* <CheckboxesGroup1 /> */}
           
            {
              airlinesName.map((item,index)=> {
                return(
                  <div onClick={()=> airlineHandle(item)}>
                    {item}
                  </div>
                )
               
              })
            }
          </div>
        ) : (
          <Fragment>
            <BarLoading />
          </Fragment>
        )}
      </Collapse>
    </div>
  );
};


const FilterCollapse3 = props => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="filter-collapse border-bottom">
      <p onClick={toggle}>
        امتیاز ها
        <MdKeyboardArrowDown />
      </p>
      <Collapse isOpen={isOpen}>
        <div>{/* <Score/> */}</div>
      </Collapse>
    </div>
  );
};

const PreisFilter = props => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="filter-collapse border-bottom">
      <p onClick={toggle}>
        قیمت
        <MdKeyboardArrowDown />
      </p>
      <Collapse isOpen={isOpen}>
        {props.show ? (
          <div>
            <RangeSlider {...props} />
          </div>
        ) : (
          <Fragment>
            <BarLoading />
          </Fragment>
        )}
      </Collapse>
    </div>
  );
};


const FilterCollapse6 = props => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="filter-collapse">
      <p onClick={toggle}>
        سایر
        <MdKeyboardArrowDown />
      </p>
      <Collapse isOpen={isOpen}>
        {props.show ? (
          <div>
            <CheckboxesGroup2 />
          </div>
        ) : (
          <Fragment>
            <BarLoading />
          </Fragment>
        )}
      </Collapse>
    </div>
  );
};

function CheckboxesGroup1() {
  const classes = useStylesCheckbox();
  const [state, setState] = React.useState({
    gilad: true,
    jason: false
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const { gilad, jason } = state;
  const error = [gilad, jason].filter(v => v).length !== 2;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={gilad}
                onChange={handleChange("gilad")}
                value="gilad"
              />
            }
            label="ماهان ایر"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={jason}
                onChange={handleChange("jason")}
                value="jason"
              />
            }
            label="تابان ایر"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}

function CheckboxesGroup2() {
  const classes = useStylesCheckbox();
  const [state, setState] = React.useState({
    gilad: true
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const { gilad } = state;
  const error = [gilad].filter(v => v).length !== 2;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={gilad}
                onChange={handleChange("gilad")}
                value="gilad"
              />
            }
            label="نمایش هتل ها بدون قیمت"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}

const Filter = props => {
  const [showChild, setShowChild] = useState(false);
  const {allPackages} = props;

  useEffect(() => {
    function showCm() {
      setShowChild(true);
     
    }
   

    showCm();
  }, []);

  return (
    <Fragment>
      <div className="filter-box">
        <Card>
          <CardBody>
            {/* <FilterCollapse1 show={showChild} /> */}
            <StarFilter show={showChild} />
            {/* <FilterCollapse3 show={showChild} /> */}
            <PreisFilter {...props} show={showChild} />
            <AirlinesFilter show={showChild} />
            {/* <FilterCollapse6 show={showChild} /> */}
          </CardBody>
        </Card>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => {
  const basicDatas = state.basicDatasReducer.basicDatas;
  const preis = state.tourFilterReducer.preis;
  const rates = state.tourFilterReducer.rates;
  const airLines = state.tourFilterReducer.airLines;
  const filteredResults = state.searchTourReducer.filteredResults;
  return { rates, preis, airLines, basicDatas ,filteredResults};
};

export default connect(mapStateToProps)(Filter);
//export default Filter;
