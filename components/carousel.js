import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Card, CardHeader, CardBody } from 'reactstrap';
import { Container } from 'reactstrap';
import RoundButton from "./roundbutton";

class Carousel extends React.Component {
  state = {
      currentIndex: 0,
      itemsInSlide: 1,
      responsive:  {
          0: {
              items: 1,
          },
          1024: {
              items: 2
          }
      },
      galleryItems: this.galleryItems(),
    }

 
    galleryItems() {
      var myArray=[];
      myArray.push(<Card1/>) 
      myArray.push(<Card2/>) 
      myArray.push(<h2 className="item">array2</h2>) 
      myArray.push(<h2 className="item">array3</h2>) 
      return myArray;
    }

   
    slidePrevPage = () => {
      const currentIndex = this.state.currentIndex - this.state.itemsInSlide
      this.setState({ currentIndex })
    }
   
    slideNextPage = () => {
      const {
        itemsInSlide,
        galleryItems: { length },
      } = this.state
      let currentIndex = this.state.currentIndex + itemsInSlide
      if (currentIndex > length) currentIndex = length
   
      this.setState({ currentIndex })
    }
   
    handleOnSlideChange = (event) => {
      const { itemsInSlide, item } = event
      this.setState({ itemsInSlide, currentIndex: item })
    }
    render() {
      const { currentIndex, galleryItems, responsive } = this.state
   
      return (
        <div>
          <Container>
            <AliceCarousel
              items={galleryItems}
              slideToIndex={currentIndex}
              responsive={responsive}
              onInitialized={this.handleOnSlideChange}
              onSlideChanged={this.handleOnSlideChange}
              onResized={this.handleOnSlideChange}
            />
               
          <button onClick={this.slidePrevPage}>Prev Page</button>
          <button onClick={this.slideNextPage}>Next Page</button>
          </Container>
     
        </div>
      )
    }
}
// const Card1=(props)=>{
//   const title=props.title;
//   return(
//   <div><h2 className={`sdfsdfsdf ${props.pos}`} style={{textAlign:`${props.pos}`}}><h1>{title}</h1></h2></div>
//   )
//  }
const Card1=(props)=>{
  return(
  <div>
   <Card className="card1">
     <CardBody>
       <div className="row">
        <div className="col-md-8">
          <div className="card-texts">
            <h6>
              پرواز های رایگان
            </h6>
            <span>
              سه گام سفر = پرواز رفت + اقامت + پرواز برگشت
            </span>
           
            <span>
              با کایت یک گام مجانی برای سفرت بردار
            </span>
            <p>
              #یه_پرواز_رایگان
            </p>
            <button className="btn">
              مشاهده
            </button>
          </div>
       
        </div>
        <div className="col-md-4">
          <img src={require('../img/banner2.png')}/>
        </div>
      
       </div>
     
     </CardBody>
   </Card>
  </div>
  )
 }
 const Card2 = (props)=>{
  return(
  <div>
   <Card className="card2">
     <CardBody>
        <div className="row">
          <div className="col-md-7"></div>
          <div className="col-md-5">
            <h4>
              تور های اقساطی
            </h4>
            <RoundButton name="کلیک کنید"/>
          </div>
        </div>
     </CardBody>
   </Card>
  </div>
  )
 }

export default Carousel;