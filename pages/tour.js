import React, { useEffect } from 'react';
import { connect } from "react-redux";
import Nav from '../components/navbar';
import Bgtext from '../components/bgtext';
import Footer from '../components/footer';
import { Container } from 'reactstrap';
import InformationCards from '../components/tour/infoCards';
import { add_item, check_item, set_package_collapse, toggle_flight } from '../redux/basicdatas/action';
import { default_toggle_flight } from '../redux/tourFilters/action';
import {isRealValue} from "../Functions";
import ports from '../ports';
import axios from 'axios';
const Tour = (props) => {

    useEffect(() => {
        var obj = sessionStorage.getItem("tourInfo");
        console.log("tourInfo", props.tourInfo);
    }, [])
    return (
        <div className="tour-information">
            <Nav />
            <Bgtext />
            <Container>
                {
                    (isRealValue(props.tourInfo))?
                    <InformationCards {...props} />:
                    <></>
                }
            </Container>
            <Footer/>
        </div>
    )
}
Tour.getInitialProps = async ({ query }) => {
   
        var pkgNum = await query.num;
        // var tourId = await query.
        pkgNum= pkgNum || 0;
        const res  = await axios.get(`${ports.domain}${ports.GetPackageDetail}?Id=${pkgNum}`);      
        // const cmt = await axios.get(`${ports.domain}${ports.GetComment}?type=PACKAGEDETAIL?refid=`); 
        console.log("res.status GetPackageDetail",res.status) 
        const json = await res.data || {};
        
        return {
            tourInfo: json
        }
   
}
export default connect(state => state)(Tour);
