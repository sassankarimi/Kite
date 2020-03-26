import React, { useState } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage } from 'mdbreact';
import { FaStar, FaRegDotCircle, FaRegCheckCircle } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";
import { Form, FormGroup, Label, Input, Collapse, Button } from 'reactstrap';
import { MdKeyboardArrowDown, MdAirplanemodeActive } from "react-icons/md";
import { IoIosCheckmarkCircleOutline ,IoMdPricetag ,IoIosArrowDown} from "react-icons/io";
import Link from 'next/link';
import ImageGallery from 'react-image-gallery';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Box from '@material-ui/core/Box';
import ReactRating from "react-rating";
import Rating from '@material-ui/lab/Rating';
import StarRating from "react-rating";
import { MdStarBorder,MdStar } from "react-icons/md";
import {FaUserCircle} from "react-icons/fa";
import axios from 'axios';
import ports from '../../ports';
import ShowMore from '@tedconf/react-show-more';
var moment = require('moment-jalaali');
var base64 = require('base-64');
var utf8 = require('utf8');
const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        marginLeft: 8,
        //   flexBasis: '12%',
        //   flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));
// const General = (props) => {
//     const address = '/tour/book';
//     const id = 22;
//     return (
//         <div className="card1">
//             <MDBCard>
//                 <MDBCardBody>
//                     <label>
//                         پرواز :
//                 </label>
//                     <div className="flight-tag">
//                         <span className="border-left">
//                             ماهان ایر
//                     </span>
//                         <span className="border-left">
//                             مسیر پرواز
//                     </span>
//                         <span className="border-left">
//                             ساعت 7:30
//                     </span>
//                         <span>
//                             شماره پرواز : 54952-19
//                     </span>
//                         <button className="btn other-flight-btn">
//                             پرواز های دیگر
//                     </button>
//                     </div>
//                     <hr />
//                     <label>
//                         هتل :
//                 </label>
//                     <div className="flight-tag">
//                         <span className="border-left">
//                             grand sukhumvit hotel bangkok
//                     </span>
//                         <span className="border-left">
//                             هتل 5 ستاره
//                     </span>
//                         <span>
//                             2 تخته
//                     </span>
//                         <button className="btn other-flight-btn">
//                             هتل های دیگر
//                     </button>
//                     </div>
//                     <hr />
//                     <div>
//                         <div className="adult-number">
//                             بزرگسال :
//                         <span>
//                                 2
//                         </span>
//                         </div>
//                         <div className="child-number">
//                             کودک :
//                         <span>
//                                 2
//                         </span>
//                         </div>
//                         <div className="infant-number">
//                             نوزاد :
//                         <span>
//                                 2
//                         </span>
//                         </div>
//                         <div className="room-number">
//                             اتاق :
//                         <span>
//                                 2 تخته
//                         </span>
//                         </div>
//                         <p className="price">
//                             5,600,000 تومان
//                     </p>
//                     </div>

//                 </MDBCardBody>
//                 <button className="btn buy-btn">
//                     <Link href={{ pathname: `${address}`, query: { id } }} as={`${address}/${id}`}>
//                         <a>
//                             خرید
//                     </a>
//                     </Link>
//                 </button>
//             </MDBCard>
//         </div>
//     )
// }
// const images = [
    
//     {
//         original: 'https://picsum.photos/id/1018/1000/600/',
//         thumbnail: 'https://picsum.photos/id/1018/250/150/',
//     },
//     {
//         original: 'https://picsum.photos/id/1015/1000/600/',
//         thumbnail: 'https://picsum.photos/id/1015/250/150/',
//     },
//     {
//         original: 'https://picsum.photos/id/1019/1000/600/',
//         thumbnail: 'https://picsum.photos/id/1019/250/150/',
//     },
//     {
//         original: 'https://picsum.photos/id/1016/1000/600/',
//         thumbnail: 'https://picsum.photos/id/1016/250/150/',
//     },
//     {
//         original: 'https://picsum.photos/id/1014/1000/600/',
//         thumbnail: 'https://picsum.photos/id/1014/250/150/',
//     },
//     {
//         original: 'https://picsum.photos/id/1013/1000/600/',
//         thumbnail: 'https://picsum.photos/id/1013/250/150/',
//     },
//     {
//         original: 'https://picsum.photos/id/1012/1000/600/',
//         thumbnail: 'https://picsum.photos/id/1012/250/150/',
//     },
//     {
//         original: 'https://picsum.photos/id/1011/1000/600/',
//         thumbnail: 'https://picsum.photos/id/1011/250/150/',
//     },
// ];
const FlightDetail = (props) => {
    const handleOnDragStart = (e) => e.preventDefault()
    let imgObj=[];
    for(var i=0;i<props.tourInfo.Pictures.length;i++) {
        let org=`${ports.imgDomainRoutes}${props.tourInfo.Pictures[i].FileName}`;
        let title=`${ports.imgDomainRoutes}${props.tourInfo.Pictures[i].Title}`;
        imgObj.push(
            {
                original: org,
                thumbnail: org,
                originalAlt : title,
                thumbnailAlt : title,
            },
        )
    }
    return (
        <div className="card2">
            <ImageGallery items={imgObj}
                autoPlay={true}
                showPlayButton={false}
                showFullscreenButton={false}
                showNav={false}
            />
            {/* <MDBCard>
                <MDBCardBody>
                    <div className="flight-card">
                        <p>
                            <MdAirplanemodeActive />
                            ماهان ایر , بدون توقف
                    </p>
                        <p>
                            شروع پرواز : 11 آبان ساعت 10:30 | تاریخ برگشت : 17 آبان ساعت 23:00
                    </p>
                    </div>
                </MDBCardBody>
            </MDBCard> */}
        </div>
    )
}
const Titles = (props) => {
    return (
    <div className="card3">
        <MDBCard>
            <MDBCardBody>
                <ul>
                    <li>
                        <a href="#hotel_info">
                        اطلاعات هتل
                        </a>
                        
                    </li>
                    <li>
                        <a href="#travel_schedule">
                        برنامه سفر
                        </a>                     
                    </li>
                    <li>
                        <a href="#package_services">
                        خدمات تور
                        </a>
                         
                    </li>
                    <li>
                        <a href="#package_comment">
                        نظرات
                        </a>
                            
                    </li>
                </ul>
                </MDBCardBody>
            </MDBCard>
        </div>
    )
}

const Hotel =(props)=> {
    const [numberOfitemsShown,setNumberOfitemsShown] = useState(2);

    let HotelArr=[];
    function HotelItems() {
        for(var i=0; i<props.tourInfo.Hotels.length;i++) {
            HotelArr.push(
                <MDBCard>
                <div className="row hotel-info-row">
                    <div className="col-md-3" style={{ paddingLeft: 0 }}>
                        <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" />
                    </div>
                    <div className="col-md-9">
                        <div className="hotel-title">
                            <span className="right-part">
                                {props.tourInfo.Hotels.HotelTitle}
                                <span className="stars">
                                    <ReactRating
                                        key={props.tourInfo.Hotels.HotelId}
                                        // style={{ position: "absolute", left: 20 }}
                                        emptySymbol={<MdStarBorder color="#73c9ca" size="19" />}
                                        fullSymbol={<MdStar color="#73c9ca" size="19" />}
                                        fractions={1}
                                        start={0}
                                        stop={props.tourInfo.Hotels.HotelRate}
                                        initialRating={props.tourInfo.Hotels.HotelRate}
                                        readonly
                                    />
                                </span>
                            </span>
                            <span className="left-part">
                            {props.tourInfo.Hotels.HotelService} / {props.tourInfo.Hotels.HotelRoomType}
                            </span>
                        </div>
                        <ul className="hotel-ul">
                            <li>
                                <IoMdPricetag />
                                <span>
                                    قیمت دو تخته
                            
                                {(props.tourInfo.Hotels.DisplayExtraDoublePrice !== 0)?
                                    <span className="extra-price">
                                        /
                                        شب اضافه
                                    </span>
                                    :
                                    <></>
                                }
                                    :
                                
                                </span>
                            
                                {(props.tourInfo.Hotels.DisplayExtraDoublePrice !== 0)?
                                    <span className="extra-price">
                                        
                                        {props.tourInfo.Hotels.DisplayExtraDoublePrice}
                                        /
                                    </span>
                                    :
                                    <></>
                                }
                                <span>
                                {props.tourInfo.Hotels.DisplayDoublePrice}
                                </span>
                            </li>
                            <li>
                                <IoMdPricetag />
                                <span>
                                    قیمت یک تخته 
                                    {(props.tourInfo.Hotels.DisplayExtraSinglePrice !== 0)?
                                        <span className="extra-price">
                                            /
                                            شب اضافه
                                        </span>
                                        :
                                        <></>
                                    }
                                    :
                                </span>
                            
                            
                            {(props.tourInfo.Hotels.DisplayExtraSinglePrice !== 0)?
                                    <span className="extra-price">
                                    
                                        {props.tourInfo.Hotels.DisplayExtraSinglePrice}
                                        /
                                    </span>
                                    :
                                    <></>
                                }
                                <span>
                                {props.tourInfo.Hotels.DisplaySinglePrice}
                                </span>
                            </li>
                        </ul>
                        <ul className="hotel-ul">
                            <li>
                                <IoMdPricetag />
                                <span>
                                    کودک 
                                    ( 6 - 12 )
                                    {(props.tourInfo.Hotels.DisplayExtraChild1Price !== 0)?
                                        <span className="extra-price">
                                            /
                                            شب اضافه
                                        </span>
                                        :
                                        <></>
                                    }
                                    : 
                                </span>
                                {props.tourInfo.Hotels.DisplayChild1Price}
                            </li>
                            <li>
                                <IoMdPricetag />
                                <span>
                                    کودک
                                    ( 2 - 6 )
                                    : 
                                </span>
                                {props.tourInfo.Hotels.DisplayChild2Price}
                            </li>
                        </ul>
                    </div>
                </div>
            </MDBCard>
        
            )
        }
    }
    let listItems = [];
    const MyLongComponent = ({ listItems }) => (
        <ShowMore
          items={listItems}
          by={2}
        >
          {({
            current,
            onMore,
          }) => (
            <React.Fragment>
              <>
                {current.map(item => (
                  <MDBCard
                    key={item.id}
                  >
                      <div className="row hotel-info-row">
                        <div className="col-md-3 none-xs" style={{ paddingLeft: 0 }}>
                            <img className="img-fluid" src="https://kite.ir/Content/Website/images/demo/NoPhoto.jpg" />
                        </div>
                        <div className="col-md-9">
                            <div className="hotel-title">
                                <span className="right-part">
                                {item.hotelTitle}
                                    <span className="stars">
                                      <ReactRating
                                          key={item.HotelId}
                                    
                                          emptySymbol={<MdStarBorder color="#73c9ca" size="19" />}
                                          fullSymbol={<MdStar color="#73c9ca" size="19" />}
                                          fractions={1}
                                          start={0}
                                          stop={item.HotelRate}
                                          initialRating={item.HotelRate}
                                          readonly
                                      />
                                    </span>
                                </span>
                                <span className="left-part">
                                {item.HotelService} / {item.HotelRoomType}
                                </span>
                            </div>
                            <ul className="hotel-ul">
                                <li>
                                   <IoMdPricetag />
                                   <span>
                                       قیمت دو تخته
                            
                                   {(item.DisplayExtraDoublePrice !== 0)?
                                       <span className="extra-price">
                                           /
                                           شب اضافه
                                       </span>
                                       :
                                       <></>
                                   }
                                       :
                                
                                   </span>
                            
                                   {(item.DisplayExtraDoublePrice !== 0)?
                                       <span className="extra-price">
                                        
                                           {item.DisplayExtraDoublePrice}
                                           /
                                       </span>
                                       :
                                       <></>
                                   }
                                   <span>
                                   {item.DisplayDoublePrice}
                                   </span>
                                </li>
                                <li>
                                  <IoMdPricetag />
                                  <span>
                                      قیمت یک تخته 
                                      {(item.DisplayExtraSinglePrice !== 0)?
                                          <span className="extra-price">
                                              /
                                              شب اضافه
                                          </span>
                                          :
                                          <></>
                                      }
                                      :
                                  </span>
                           
                           
                                    {(item.DisplayExtraSinglePrice !== 0)?
                                      <span className="extra-price">
                                   
                                          {item.DisplayExtraSinglePrice}
                                          /
                                      </span>
                                      :
                                      <></>
                                    }
                                  <span>
                                  {item.DisplaySinglePrice}
                                  </span>
                                </li>
                            </ul>
                            <ul className="hotel-ul">
                                <li>
                                   <IoMdPricetag />
                                   <span>
                                     کودک ( 6 - 12 )
                            
                                   {(item.DisplayExtraChild1Price !== 0)?
                                       <span className="extra-price">
                                           /
                                           شب اضافه
                                       </span>
                                       :
                                       <></>
                                   }
                                       :
                                
                                   </span>
                            
                                   {(item.DisplayExtraChild1Price !== 0)?
                                       <span className="extra-price">
                                        
                                           {item.DisplayExtraChild1Price}
                                           /
                                       </span>
                                       :
                                       <></>
                                   }
                                   <span>
                                   {item.DisplayChild1Price}
                                   </span>
                                </li>
                                <li>
                                    <IoMdPricetag />
                                    <span>
                                        کودک
                                        ( 2 - 6 )
                                        {(item.DisplayExtraChild2Price !== 0)?
                                            <span className="extra-price">
                                                /
                                                شب اضافه
                                            </span>
                                            :
                                            <></>
                                        }
                                        : 
                                    </span>
                                    {(item.DisplayExtraChild2Price !== 0)?
                                       <span className="extra-price">
                                        
                                           {item.DisplayExtraChild2Price}
                                           /
                                       </span>
                                       :
                                       <></>
                                   }
                                    <span>
                                        {item.DisplayChild2Price}
                                    </span>
                                
                                </li>
                            </ul>
                        </div>
                      </div>
                   
                  </MDBCard>
                ))}
              </>
              <button
                className="btn more-btn"
                disabled={!onMore}
                onClick={() => { if (!!onMore) onMore(); }}
              >
                بیشتر
                <IoIosArrowDown/>
              </button>
            </React.Fragment>
          )}
        </ShowMore>
      );
      for(var i=0;i<props.tourInfo.Hotels.length;i++) {
        listItems.push(
            {
                id:'1',
                hotelTitle: props.tourInfo.Hotels[i].HotelTitle,
                HotelId : props.tourInfo.Hotels[i].HotelId,
                HotelRate : props.tourInfo.Hotels[i].HotelRate,
                HotelService : props.tourInfo.Hotels[i].HotelService,
                HotelRoomType : props.tourInfo.Hotels[i].HotelRoomType,
                DisplayExtraDoublePrice : props.tourInfo.Hotels[i].DisplayExtraDoublePrice,
                DisplayDoublePrice : props.tourInfo.Hotels[i].DisplayDoublePrice,
                DisplayExtraSinglePrice : props.tourInfo.Hotels[i].DisplayExtraSinglePrice,
                DisplaySinglePrice : props.tourInfo.Hotels[i].DisplaySinglePrice,
                DisplayExtraChild1Price : props.tourInfo.Hotels[i].DisplayExtraChild1Price,
                DisplayExtraChild2Price : props.tourInfo.Hotels[i].DisplayExtraChild2Price,
                DisplayChild1Price : props.tourInfo.Hotels[i].DisplayChild1Price,
                DisplayChild2Price : props.tourInfo.Hotels[i].DisplayChild2Price,
            },
        )
    }
console.log("listItems" ,listItems);
    return(
        <div className="card4" id="hotel_info">
             <MyLongComponent
            listItems={listItems}
        />
            <>
                {/* {props.tourInfo.Hotels.map((item,index)=> {
                    return(
                    <> */}
                    {/* {
                        (index < cnt)? */}
                        {/* <MDBCard>
                            <div className="row hotel-info-row">
                                <div className="col-md-3" style={{ paddingLeft: 0 }}>
                                    <img className="img-fluid" src="https://kite.ir/Content/Website/images/demo/NoPhoto.jpg" />
                                </div>
                                <div className="col-md-9">
                                    <div className="hotel-title">
                                        <span className="right-part">
                                            {item.HotelTitle}
                                            <span className="stars">
                                                <ReactRating
                                                    key={item.HotelId}
                                                    // style={{ position: "absolute", left: 20 }}
                                                    emptySymbol={<MdStarBorder color="#73c9ca" size="19" />}
                                                    fullSymbol={<MdStar color="#73c9ca" size="19" />}
                                                    fractions={1}
                                                    start={0}
                                                    stop={item.HotelRate}
                                                    initialRating={item.HotelRate}
                                                    readonly
                                                />
                                            </span>
                                        </span>
                                        <span className="left-part">
                                        {item.HotelService} / {item.HotelRoomType}
                                        </span>
                                    </div>
                                    <ul className="hotel-ul">
                                        <li>
                                            <IoMdPricetag />
                                            <span>
                                                قیمت دو تخته
                                        
                                            {(item.DisplayExtraDoublePrice !== 0)?
                                                <span className="extra-price">
                                                    /
                                                    شب اضافه
                                                </span>
                                                :
                                                <></>
                                            }
                                            :                                           
                                            </span>                                     
                                            {(item.DisplayExtraDoublePrice !== 0)?
                                                <span className="extra-price">  
                                                    {item.DisplayExtraDoublePrice}
                                                    /
                                                </span>
                                                :
                                                <></>
                                            }
                                            <span>
                                            {item.DisplayDoublePrice}
                                            </span>
                                        </li>
                                        <li>
                                            <IoMdPricetag />
                                            <span>
                                                قیمت یک تخته 
                                                {(item.DisplayExtraSinglePrice !== 0)?
                                                    <span className="extra-price">
                                                        /
                                                        شب اضافه
                                                    </span>
                                                    :
                                                    <></>
                                                }
                                                :
                                            </span>                                        
                                        {(item.DisplayExtraSinglePrice !== 0)?
                                                <span className="extra-price">                                               
                                                    {item.DisplayExtraSinglePrice}
                                                    /
                                                </span>
                                                :
                                                <></>
                                            }
                                            <span>
                                            {item.DisplaySinglePrice}
                                            </span>
                                        </li>
                                    </ul>
                                    <ul className="hotel-ul">
                                        <li>
                                            <IoMdPricetag />
                                            <span>
                                                کودک 
                                                ( 6 - 12 )
                                                {(item.DisplayExtraChild1Price !== 0)?
                                                    <span className="extra-price">
                                                        /
                                                        شب اضافه
                                                    </span>
                                                    :
                                                    <></>
                                                }
                                                : 
                                            </span>
                                            {item.DisplayChild1Price}
                                        </li>
                                        <li>
                                            <IoMdPricetag />
                                            <span>
                                                کودک
                                                ( 2 - 6 )
                                                : 
                                            </span>
                                            {item.DisplayChild2Price}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </MDBCard> */}
                    
                    {/* :
                    <>
                     {cnt++}
                        <span >
                            نمایش بیشتر
                        </span>
                    </>
                    } */}
                 
                    {/* </>
                    )
                })} */}
                {/* <button onClick={showMore}>
                    show more
                </button> */}
            </>
        </div>
    )
}
const Planning = (props) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    // const PlanDescription = (props) => 
    let planDesc = [];
    // for(var i=0;i<props.tourInfo.DailyPlan.length;i++) {
    //     planDesc.push(props.tourInfo.DailyPlan[i].PackagePlanDescription);
    //     //var bytes = base64.decode(props.tourInfo.DailyPlan[i].PackagePlanDescription);
    //     // var html = utf8.decode(bytes);
    //     console.log("planDesc",  JSON.stringify(props.tourInfo.DailyPlan[i].PackagePlanDescription));
    // }
    return (
    <div className="card5" id="travel_schedule">
         <MDBCard>
            <MDBCardBody>
            <h4>
            <a href="#">
                برنامه سفر
            </a>
                    </h4>
                    <div className={classes.root}>
                        {props.tourInfo.DailyPlan.map((item,index)=>{
                            return(
                                <>
                            <ExpansionPanel expanded={expanded === `panel${item.Day}`} onChange={handleChange(`panel${item.Day}`)}>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography className={classes.heading}>
                                    <FaRegDotCircle />
                                    روز {item.Day}
                                </Typography>
                                <Typography className={classes.secondaryHeading}> ({item.TitleSR}) </Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                  {planDesc[index]}
                                </Typography>
                            </ExpansionPanelDetails>
                            </ExpansionPanel>
                                </>
                            )
                         
                        })
                        }
                      

                    </div>
                </MDBCardBody>
            </MDBCard>

        </div>
    )
}
const TourServices = (props) => {
    return (
        <div className="card6" id="package_services">
            <MDBCard>
                <MDBCardBody>
                    <h4>
                        خدمات تور
                    </h4>
                    <ul className="services-list">
                        {props.tourInfo.Services.map((item,index)=> {
                            return(
                                <li>
                                    <IoIosCheckmarkCircleOutline />
                                    {item.ServiceTitle}
                                </li>
                            )
                        })}
                      
                    </ul>
                </MDBCardBody>
            </MDBCard>
        </div>
    )
}
const TourComments =(props)=> {
    const [cmStarValue, setCmStarValue] = React.useState(4);
    const [cmText,setCmText] = React.useState();
    const [cmSubj, setCmSubj] = React.useState();
    const [cmEmail,setCmEmail] = React.useState();
    const [allComment , setAllComment] = React.useState([]);
    function GetComment () {
        axios.get(`${ports.domain}${ports.GetComment}`,{
            params: {
                type:'PACKAGEDETAIL',
                refId: props.tourInfo.Package.Id
            }
        })
        .then(res => {
           console.log("comments", res.data);
           setAllComment(res.data);
          })
    }
    function handleInputChange(e) {
        setCmText(e.target.value);
        console.log("value", cmText);
    }
    function onSubjectChange(e) {
        setCmSubj(e.target.value);
    }
    function onEmailChange(e) {
        setCmEmail(e.target.value);
    }
    function PostComment(e) {
        e.preventDefault();
        axios.get(`${ports.domain}${ports.PostComment}`,{
            params: {
                type:'PACKAGEDETAIL',
                refId: props.tourInfo.Package.Id,
                content: cmText,
                subject: cmSubj,
                email: cmEmail,
                website: "",
                ratingstars: cmStarValue
            }
        })
        .then(function (response) {
            console.log("post it", response)
        })
    }
    GetComment();
    return (
        <div className="card7" id="package_comment">
            <MDBCard>
                <MDBCardBody>
                    <h4>
                        نظرات
                    </h4>
                <div className="comment-input">
                    <FormGroup>
                        <Label for="exampleText">نظر شما</Label>
                       
                        <Box component="fieldset" mb={3} borderColor="transparent" className="star-rating">
                            <Rating
                            name="simple-controlled"
                            value={cmStarValue}
                            onChange={(event, newValue) => {
                                setCmStarValue(newValue);
                            }}
                            />
                        </Box>     
                        <div className="row">
                            <div className="col-md-6">
                                <Input type="text" name="subject" onChange={(e) => onSubjectChange(e)} placeholder="عنوان"/>
                            </div>
                            <div className="col-md-6">
                                <Input type="email" name="email" onChange={(e) => onEmailChange(e)} placeholder="ایمیل" />
                            </div>
                        </div>
                       
                        <Input type="textarea" name="text" id="exampleText" onChange={(e) =>handleInputChange(e)} placeholder="متن پیام" />
                    </FormGroup>
                    <div className="cm-btn">
                        <button className="btn" onClick={PostComment}>
                            ثبت نظر
                        </button>
                    </div>
                </div>
                <div className="accepted-comments">
                    {allComment.length > 0 ?
                    <>
                    {allComment.map((item,index)=>{
                        return (
                            <>
                             <div className="row">
                                <div className="col-md-2 user-part">
                                    <FaUserCircle/>
                                    <span>
                                   {item.master.Subject}
                                    </span>
                                
                                </div>
                                <div className="col-md-10 text-part">
                                <div>
                                    <div className="stars">
                                        <StarRating
                                            // key={item.HotelId}
                                            // style={{ position: "absolute", left: 20 }}
                                            emptySymbol={<MdStarBorder color="#73c9ca" size="19" />}
                                            fullSymbol={<MdStar color="#73c9ca" size="19" />}
                                            fractions={1}
                                            start={0}
                                            stop={5}
                                            initialRating={item.master.CommentRate}
                                            readonly
                                        />
                                    </div>
                                    {/* <span className="comment-date">
                                    {moment(item.master.RegisterDateTime, 'MM/DD/YYYY').format('jYYYY/jMM/jDD')}
                                    </span> */}
                                </div>
                                <div>
                                    <p>
                                        {item.master.Content}
                                    </p>
                                </div>
                        
                            </div> 
                            </div>
                            <div className="reply-cm">
                                <div className="row">
                                    <div className="col-md-2 user-part">
                                        <img src={require("../../img/logo2.png")} />
                                        <span>
                                        کایت
                                        </span>
                                    
                                    </div>
                                    <div className="col-md-10 text-part">
                                      
                                        <div>
                                            <p>
                                                {item.detail[0].Content}
                                            </p>
                                        </div>
                                
                                    </div> 
                                </div>
                            </div>
                            </>
                           
                      
                        )
                    })

                    }
                    
                    </>
                    :
                    <>
                    </>
                    }
                   
                 
                </div>
            </MDBCardBody>
        </MDBCard>
    </div>
    )
}
const InformationCards = (props) => {
    
    const tourTitle=props.tourInfo.Package.Title.toString() || "";
    const title = "تور " + tourTitle;
    return (
        <div className="info-cards">
            <h1>{title}</h1>
            {/* <General /> */}
            <FlightDetail {...props}/>
            <Titles />
            <Hotel {...props}/>
            
            <Planning {...props}/>
          
          
            <TourServices {...props}/>
         
         
            <TourComments {...props}/>
        </div>
    )
}

export default InformationCards;