import React, { Component } from "react";

//UI Libraries
import { InputGroup, InputGroupAddon, Input } from "reactstrap";
import { Container, Button } from "reactstrap";
import { FaArrowRight } from "react-icons/fa";

class SpecialOffers extends Component {
  render() {
    return (
      <div className="special-offers">
        <Container>
          <div className="row">
            <div className="col-6 col-md-1 no-padding">
              <img
                className="special-kite-img"
                src={require("../img/special-kite.png")}
              />
            </div>
            <div className="col-6 col-md-3">
              <p className="text1">پیشنهاد های ویژه کایت را بهم خبر بده</p>
            </div>
            <div className="col-md-2">
              {/* <div className="plane-images">
                <img src={require('../img/plane1.png')} className="plane1"/>
                <img src={require('../img/plane2.png')} className="plane2"/>
              </div> */}
              <img src={require("../img/special-plane.png")} className="" />
            </div>
            <div className="col-md-3">
              <p className="text2">
                برای با خبر شدن از تور ها،هتل ها و بلیط های لحظه آخری،با قیمتی
                شگفت انگیز ایمیل یا شماره تلفن خود را وارد کنید.
              </p>
            </div>
            <div className="col-md-3">
              <InputGroup>
                <Input placeholder="Email | phone" />
                <InputGroupAddon addonType="append">
                  <Button>
                    <FaArrowRight />
                  </Button>
                  {/* <InputGroupText><FaArrowRight/></InputGroupText> */}
                </InputGroupAddon>
              </InputGroup>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default SpecialOffers;
