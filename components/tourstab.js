import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

//UI Librarires
import {
  makeStyles,
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box
} from "@material-ui/core";
import Slider from "react-slick";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Container
} from "reactstrap";


//redux
import {  useSelector , useDispatch } from "react-redux";
import { loadHeader , loadTour} from "../redux/tourTabs/actions";

//Routing
import ports from "../ports";
import Link from "next/link";

//css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//materai ui tab function
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

//materai ui tab function proptypes
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

//materai ui tab function
function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`
  };
}

//materai ui tab styling
const useStyles = makeStyles(theme => ({
  root: {
    //   flexGrow: 1,
    //   width: '100%',
    //   backgroundColor: theme.palette.background.paper,
  }
}));

function ToursTab(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [showChild, setShowChild] = useState(false);
  const groups = useSelector(state => state.tourTabsReducer.header);
  const tours = useSelector(state => state.tourTabsReducer.tours);
  const dispatch = useDispatch();

  let settings = {
    rtl: true,
    infinite: true,
    className: "center",
    centerMode: true,
    // dots: true,
    // slidesToShow: 2,
    // autoplay: true,
    // infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
          // width: 182
        }
      }
    ]
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  useEffect(() => {
    function HomePageData() {
       dispatch(loadHeader());
       setShowChild(true);
    }
    HomePageData();
  }, []);

  async function handleTabs(e, newVal, gId) {
    dispatch(loadTour(gId));
  }

  return (
    <Container className="right-to-left mt-5 mb-5 tours-tab">
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            // variant="scrollable"
            scrollButtons="on"
            // indicatorColor="primary"
            // textColor="primary"
            aria-label="scrollable force tabs example"
          >
            {groups.map((group, index) => {
              return (
                <Tab
                  key={index}
                  label={group.Title}
                  onClick={e => handleTabs(e, index, group.Id)}
                  icon={
                    <img
                      src={`${ports.imgDomainRoutes}${group.PreviewImageFileName}`}
                      className="tab-img"
                    />
                  }
                  {...a11yProps(index)}
                />
              );
            })}
          </Tabs>
        </AppBar>
        {groups.map((group, k) => {
          return (
            <TabPanel value={value} index={k} key={k}>
              <Slider
                arrows={true}
                slidesToShow={tours.length >= 3 ? 3 : tours.length}
                centerMode={true}
                {...settings}
              >
                {tours.map((tour, i) => {
                  return (
                    <>
                      <div
                        key={tour.Priority.toString()}
                        className="tours-card"
                      >
                        <Card>
                          {/* <CardImg top width="100%" src={require('../img/tourbooking.jpg')} alt="Card image cap" /> */}
                          <CardImg
                            top
                            width="100%"
                            src={`${ports.imgDomainRoutes}${tour.FileName}`}
                            alt={tour.Title}
                          />
                          <CardBody>
                            <CardTitle>
                              <Link
                                href={{
                                  pathname: "/tour",
                                  query: {
                                    name: tour.PageURL,
                                    num: tour.PackageNumber
                                  }
                                }}
                                as={`tour/${tour.PackageNumber}/${tour.PageURL}`}
                              >
                                <a>{tour.Title}</a>
                              </Link>
                            </CardTitle>
                            <CardSubtitle>{tour.MinPrice}</CardSubtitle>
                            <CardText>
                              {tour.StartDateP}
                              {tour.FinishDateP}
                            </CardText>
                          </CardBody>
                        </Card>
                      </div>
                    </>
                  );
                })}
              </Slider>
            </TabPanel>
          );
        })}
      </div>
    </Container>
  );
}

export default (
  ToursTab
);
