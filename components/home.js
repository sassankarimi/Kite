import React, { Fragment } from "react";

//components
import WeblogGrid from "./weblogGrid";
import NavbarPage from './navbar';
import SearchBox from './searchbox';
import SpecialOffers from './specialOffers';
import SpecialCards from './specialcards';
import Footer from './footer';
import ToursTab from './tourstab';
// import Rooms from './rooms'

const Home = props => {
  return (
    <Fragment>
      <div style={{ background: "#fff" }}>
        <NavbarPage />
        <SearchBox />
        <SpecialOffers />
        <SpecialCards />
        <ToursTab />
        <WeblogGrid />
        <Footer />
      </div>
    </Fragment>
  );
};

export default Home;
