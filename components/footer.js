import React from "react";

//UI Libraries
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { MdPhone, MdLocationOn, MdEmail } from "react-icons/md";
import {
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
  FaLinkedin
} from "react-icons/fa";

const FooterPage = () => {
  return (
    <div className="footer">
      <MDBFooter className="font-small pt-5 mt-4">
        <MDBContainer className=" ">
          <MDBRow>
            <MDBCol md="5">
              <ul className="info">
                <li className="list-unstyled">
                  <MdPhone />
                  021-75097700
                </li>
                <li className="list-unstyled">
                  <MdLocationOn />
                  تهران، خیابان شهید مطهری، پلاک 188
                </li>
                <li className="list-unstyled">
                  <MdEmail />
                  info[at]kite.ir
                </li>
                <li className="list-unstyled">
                  <a href="#!" className="footer-btn">
                    استرداد وجه آنلاین
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="#!" className="footer-btn">
                    آیدی چت تلگرام
                  </a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol md="7">
              {/* <h5 className="title">Footer Content</h5> */}
              <h1 className="title">کایت اولین موتور آنلاین جستجوی تور</h1>
              <p className="footer-content">
                کایت با ارائه خدمات گردشگری آنلاین پا به پات تا مقصد میاد. هر
                کجای دنیا و هر ساعت از شبانه‌روز که هست؛ در سایت کایت آنلاین شو
                و با چند کلیک بلیط هواپیما، بلیط چارتر، هتل و تورهای مسافرتی و
                طبیعت‌گردی خودت رو رزرو کن. با بهترین ایرلاین‌ها پرواز کن و
                اقامت در بهترین هتل رو از بین یک میلیون و پونصد هزار هتل دنیا که
                روی سایت کایت هست رو انتخاب کن. ما متخصص در اجرای بهترین تورهای
                مسافرتی داخلی و خارجی هستیم تا خاطراتی به یاد موندنی رو بهت هدیه
                بدیم. با ما به سبک خودت سفر کن.
              </p>
              <div className="social-icons">
                <span>
                  <FaInstagram />
                </span>
                <span>
                  <FaTelegramPlane />
                </span>
                <span>
                  <FaTwitter />
                </span>
                <span>
                  <FaLinkedin />
                </span>
              </div>
            </MDBCol>
            <MDBCol md="12">
              <div className="footer-logo">
                <div className="logo-images">
                  <img src={require("../img/paxrights.png")} />
                </div>
                <div className="logo-images">
                  <img src={require("../img/logoelec.png")} />
                </div>
                <div className="logo-images">
                  <img src={require("../img/aira.png")} />
                </div>
                <div className="logo-images">
                  <img src={require("../img/cao.png")} />
                </div>
                <div className="logo-images">
                  <img src={require("../img/logosamandehi.png")} />
                </div>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            <a href="https://www.MDBootstrap.com">
              کلیه حقوق این سایت متعلق به شرکت خدمات مسافرت هوایی پیام توسعه صبا
              است.
            </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
};
export default FooterPage;
