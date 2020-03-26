import React, { Fragment } from "react";

//UI Libraries
import { MDBContainer } from "mdbreact";
import { Row, Col, Card, CardBody } from "reactstrap";

//Routing
import Link from "next/link";
import port from "../ports";

const Card1 = () => {
  return (
    <Card className="card1">
      <CardBody className="pt-0">
        <Row>
          <Col className="rtl" xs="7" sm="7" md="7">
            <div className="pt-3">
              <h6>پرواز های رایگان</h6>
              <p>سه گام سفر = پرواز رفت + اقامت + پرواز برگشت</p>
              <p>با کایت یک گام مجانی برای سفرت بردار</p>
              <p>#یه_پرواز_رایگان</p>
            </div>
            <button className="btn">مشاهده</button>
          </Col>
          <Col xs="5" sm="5" md="5">
            <img src={require("../img/banner2.png")} />
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

const Card2 = () => {
  return (
    <Card className="card2">
      <CardBody>
        <Row>
          <Col md="7" className="col-6"></Col>
          <Col md="5" className="col-6">
            <h4>تور های اقساطی</h4>
            <Link
              href={`${port.domain}Tours/تور-اقساطی?utm_source=Kite&utm_medium=banner&utm_campaign=KiteGhesti`}
              as={`${port.domain}Tours/تور-اقساطی?utm_source=Kite&utm_medium=banner&utm_campaign=KiteGhesti`}
            >
              <a className="btn">کلیک کنید</a>
            </Link>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

const SpecialCards = () => {
  return (
    <Fragment>
      <MDBContainer className="special-cards">
        <Row>
          <Col sm="12" md="6">
            <Card1 />
          </Col>
          <Col sm="12" md="6">
            <Card2 />
          </Col>
        </Row>
      </MDBContainer>
    </Fragment>
  );
};
export default SpecialCards;
