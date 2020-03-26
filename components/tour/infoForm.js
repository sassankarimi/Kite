import React, { useState, useEffect } from "react";

//redux
import { connect } from "react-redux";

//UI Libraries
import { MDBCard, MDBCardBody } from "mdbreact";
import { IoIosWarning, IoMdInformationCircle } from "react-icons/io";
import { TiSortAlphabetically } from "react-icons/ti";
import {
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  InputGroup,
  Input
} from "reactstrap";

//components
import Countries from "../../Countries";

//axios
import axios from "axios";
import Ports from "../../ports";

//utilities
import {
  numToWord,
  personType,
  latinOrPersianValidate,
  requiredInput,
  validateEmail,
  just_persian,
  isRealValue,
  mobileFormatInputValidate,
  mobile_format,
  checkLimits,
  isNumber,
  mellicode_format
} from "../../Functions";
import NumberFormat from "react-number-format";
import moment from "moment-jalaali";
import { FaRegFlag } from "react-icons/fa";

const InfoForm = props => {
  const [iAm, setIAm] = useState(true);
  const [iAmnot, setIAmnot] = useState(false);
  const [before, setBefore] = useState(false);
  const [condotion, setCondotion] = useState(false);
  const [condotionFlag, setCondotionFlag] = useState(false);
  const [submitFlag, setSubmitFlag] = useState(false);
  const [customerFlag, setcustomerFlag] = useState(true);
  const { paymentObj } = props;
  const [formAdult, setFormAdult] = useState(
    new Array(Math.abs(paymentObj[0].Adult)).fill(0).map(
      (value, i) =>
        (value = {
          personType: "adult",
          FirstName: "",
          LastName: "",
          // PersianFirstName: "ساسان",
          // PersianLastName: "کریمی",
          CellPhoneNumber: "",
          Gender: 1,
          AgeRange: 0,
          Nationality: "IRAN",
          NationalityCode: "IR",
          BirthDate: "",
          birthType: 0,
          bDay: "",
          bMonth: "",
          bYear: "",
          cardType: 0,
          PassportNo: "",
          PassportExpirationDate: "",
          passExType: 1,
          pDay: "",
          pMonth: "",
          pYear: "",
          melliCode: "",
          Type: "Package",
          Room: 1,
          Price: paymentObj[0].RoomPrices[0].Adult,
          PackageFlightId: paymentObj[0].FlightID,
          Insurance: paymentObj[0].Insurance,
          InsuranceId: paymentObj[0].InsuranceId,
          //default insurance price is adult
          InsurancePrice: paymentObj[0].InsuranceAdultPrice,
          Visa: paymentObj[0].Visa,
          VisaPrice: paymentObj[0].VisaPrice,
          VisaID: paymentObj[0].VisaId,
          //i dont know about type and value of Services data.(just for exist for Api)
          Services: paymentObj[0].Services
        })
    )
  );
  const [formChild1, setFormChild1] = useState(
    new Array(Math.abs(paymentObj[0].Child1)).fill(0).map(
      (value, i) =>
        (value = {
          personType: "child1",
          FirstName: "",
          LastName: "",
          // PersianFirstName: "",
          // PersianLastName: "",
          CellPhoneNumber: "",
          Gender: 1,
          AgeRange: 1,
          Nationality: "IRAN",
          NationalityCode: "IR",
          BirthDate: "",
          birthType: 0,
          bDay: "",
          bMonth: "",
          bYear: "",
          cardType: 0,
          PassportNo: "",
          PassportExpirationDate: "",
          passExType: 1,
          pDay: "",
          pMonth: "",
          pYear: "",
          melliCode: "",
          Type: "Package",
          Room: 1,
          Price: paymentObj[0].RoomPrices[0].Child1,
          PackageFlightId: paymentObj[0].FlightID,
          Insurance: paymentObj[0].Insurance,
          InsuranceId: paymentObj[0].InsuranceId,
          //default insurance price is adult
          InsurancePrice: paymentObj[0].InsuranceAdultPrice,
          Visa: paymentObj[0].Visa,
          VisaPrice: paymentObj[0].VisaPrice,
          VisaID: paymentObj[0].VisaId,
          //i dont know about type and value of Services data.(just for exist for Api)
          Services: paymentObj[0].Services
        })
    )
  );
  const [formChild2, setFormChild2] = useState(
    new Array(Math.abs(paymentObj[0].Child2)).fill(0).map(
      (value, i) =>
        (value = {
          personType: "child2",
          FirstName: "",
          LastName: "",
          // PersianFirstName: "",
          // PersianLastName: "",
          CellPhoneNumber: "",
          Gender: 1,
          AgeRange: 2,
          Nationality: "IRAN",
          NationalityCode: "IR",
          BirthDate: "",
          birthType: 0,
          bDay: "",
          bMonth: "",
          bYear: "",
          cardType: 0,
          PassportNo: "",
          PassportExpirationDate: "",
          passExType: 1,
          pDay: "",
          pMonth: "",
          pYear: "",
          melliCode: "",
          Type: "Package",
          Room: 1,
          Price: paymentObj[0].RoomPrices[0].Child2,
          PackageFlightId: paymentObj[0].FlightID,
          Insurance: paymentObj[0].Insurance,
          InsuranceId: paymentObj[0].InsuranceId,
          //default insurance price is adult
          InsurancePrice: paymentObj[0].InsuranceAdultPrice,
          Visa: paymentObj[0].Visa,
          VisaPrice: paymentObj[0].VisaPrice,
          VisaID: paymentObj[0].VisaId
        })
    )
  );
  const [formInfant, setFormInfant] = useState(
    new Array(Math.abs(paymentObj[0].Infant)).fill(0).map(
      (value, i) =>
        (value = {
          personType: "infant",
          FirstName: "",
          LastName: "",
          // PersianFirstName: "",
          // PersianLastName: "",
          CellPhoneNumber: "",
          Gender: 1,
          AgeRange: 3,
          Nationality: "IRAN",
          NationalityCode: "IR",
          BirthDate: "",
          birthType: 0,
          bDay: "",
          bMonth: "",
          bYear: "",
          cardType: 0,
          PassportNo: "",
          PassportExpirationDate: "",
          passExType: 1,
          pDay: "",
          pMonth: "",
          pYear: "",
          melliCode: "",
          Type: "Package",
          Room: 1,
          Price: paymentObj[0].RoomPrices[0].Infant,
          PackageFlightId: paymentObj[0].FlightID,
          InsuranceId: paymentObj[0].InsuranceId,
          Insurance: paymentObj[0].Insurance,
          //default insurance price is adult
          InsurancePrice: paymentObj[0].InsuranceAdultPrice,
          Visa: paymentObj[0].Visa,
          VisaPrice: paymentObj[0].VisaPrice,
          VisaID: paymentObj[0].VisaId
        })
    )
  );
  const errorBorder = {
    border: "1px solid red"
  };
  const allPassengers = formAdult.concat(formChild1, formChild2, formInfant);
  const [passengers, setPassengers] = useState(allPassengers);
  const [customer, setCustomer] = useState({
    CustomerId: "",
    FirstName: "",
    LastName: "",
    Email: "",
    MobileNumber: "",
    From: "Site",
    Code: ""
  });

  //errors of passengers
  const [nameError, setNameError] = useState(
    new Array(allPassengers.length).fill(false)
  );
  const [latinNameError, setLatinNameError] = useState(
    new Array(allPassengers.length).fill(false)
  );
  const [familyError, setFamilyError] = useState(
    new Array(allPassengers.length).fill(false)
  );
  const [latinFamilyError, setLatinFamilyError] = useState(
    new Array(allPassengers.length).fill(false)
  );
  const [mobileFormatError, setMobileFormatError] = useState(
    new Array(allPassengers.length).fill(false)
  );
  const [mobileReqError, setMobileReqError] = useState(
    new Array(allPassengers.length).fill(false)
  );
  const [bDayReqError, setBDayReqError] = useState(
    new Array(allPassengers.length).fill(false)
  );
  const [bDayFormatError, setBDayFormatError] = useState(
    new Array(allPassengers.length).fill(false)
  );
  const [bMonReqError, setBMonReqError] = useState(
    new Array(allPassengers.length).fill(false)
  );
  const [bMonFormatError, setBMonFormatError] = useState(
    new Array(allPassengers.length).fill(false)
  );
  const [bYearReqError, setBYearReqError] = useState(
    new Array(allPassengers.length).fill(false)
  );
  const [mellicodeReqErroe, setMellicodeReqErroe] = useState(
    new Array(allPassengers.length).fill(false)
  );
  const [mellicodeFormatError, setMellicodeFormatError] = useState(
    new Array(allPassengers.length).fill(false)
  );
  const [mellicodeLengthError, setMellicodeLengthError] = useState(
    new Array(allPassengers.length).fill(false)
  );
  const [passportReqErroe, setPassportReqErroe] = useState(
    new Array(allPassengers.length).fill(false)
  );

  //erros of customer
  const [submiterEmailError, setSubmiterEmailError] = useState(false);
  const [submiterEmailFormatError, setSubmiterEmailFormatError] = useState(
    false
  );
  const [submiterNameError, setSubmiterNameError] = useState(false);
  const [submiterFamilyError, setSubmiterFamilyError] = useState(false);
  const [submiterMobileError, setSubmiterMobileError] = useState(false);
  const [submiterMobileFormatError, setSubmiterMobileFormatError] = useState(
    false
  );
  const [contractError, setContractError] = useState(false);
  const [customerType, setCustomerType] = useState(0);
  const roomCount = props.searchParams.roomRules.split(",");

  //one of passengers
  function onSetIamChanged() {
    setIAmnot(false);
    setBefore(false);
    setIAm(true);
    setCustomerType(0);
  }

  //not one of passengers
  function onSetIamNotChanged() {
    setIAm(false);
    setBefore(false);
    setIAmnot(true);
    setCustomerType(1);
  }

  //old customer
  function onSetBeforeChanged() {
    setIAm(false);
    setIAmnot(false);
    setBefore(true);
    setCustomerType(2);
  }

  //Utility
  function HotelPriceFormat(num) {
    return (
      <NumberFormat
        value={num}
        displayType={"text"}
        thousandSeparator={true}
        renderText={num => <div>{num}</div>}
      />
    );
  }

  //handel customer and passenger forms
  async function handleForm(e) {
    e.preventDefault();

    //submitter (customer) Validation

    //email validatiom
    let emailFlag = isRealValue(customer.Email) ? false : true;
    setSubmiterEmailError(emailFlag);
    let emailFormatFlag = false;
    //first check required and when email has value then chack email format
    if (!emailFlag) {
      emailFormatFlag = validateEmail(customer.Email) ? false : true;
      setSubmiterEmailFormatError(emailFormatFlag);
    }
    if (emailFormatFlag || emailFlag) setSubmitFlag(false);

    //name and familyl and mobile
    if (customerType === 1) {
      let submiterNameFlag = isRealValue(customer.FirstName) ? false : true;
      setSubmiterNameError(submiterNameFlag);
      let submiterFamilyFlag = isRealValue(customer.LastName) ? false : true;
      setSubmiterFamilyError(submiterFamilyFlag);
      let submiterMobileFlag = isRealValue(customer.MobileNumber)
        ? false
        : true;
      setSubmiterMobileError(submiterMobileFlag);
      let mobileFormatFlag = false;
      if (!submiterMobileFlag) {
        mobileFormatFlag = mobile_format(customer.MobileNumber) ? false : true;
        setSubmiterMobileFormatError(mobileFormatFlag);
      }
      if (submiterNameFlag || submiterFamilyFlag || submiterMobileFlag)
        setSubmitFlag(false);
    }

    //mobile or contract
    if (customerType === 2) {
      if (isRealValue(customer.MobileNumber) || isRealValue(customer.Code)) {
        if (isRealValue(customer.MobileNumber)) {
          if (!mobile_format(customer.MobileNumber)) {
            setContractError(true);
            setSubmitFlag(false);
          }
          setContractError(false);
        } else setContractError(false);
      } else {
        setContractError(true);
        setSubmitFlag(false);
      }
    }

    /* passengers Validations  */
    //name required validate
    let nameErrorTemp = nameError;
    var nameValidate = requiredInput(passengers, nameErrorTemp, "FirstName");
    setNameError(nameValidate[0].slice());
    if (!nameValidate[1]) setSubmitFlag(false);
    //name latin validate
    let latinNameErrorTemp = latinNameError;
    var nameLatinValidate = latinOrPersianValidate(
      passengers,
      latinNameErrorTemp,
      "FirstName",
      0
    );
    setLatinNameError(nameLatinValidate[0].slice());
    if (!nameLatinValidate[1]) setSubmitFlag(false);

    //family required validate
    let familyErrorTemp = familyError;
    var familyValidate = requiredInput(passengers, familyErrorTemp, "LastName");
    setFamilyError(familyValidate[0].slice());
    if (!familyValidate[1]) setSubmitFlag(false);
    //family latin validate
    let latinFamilyErrorTemp = latinFamilyError;
    var familyLatinValidate = latinOrPersianValidate(
      passengers,
      latinFamilyErrorTemp,
      "LastName",
      0
    );
    setLatinFamilyError(familyLatinValidate[0].slice());
    if (!familyLatinValidate[1]) setSubmitFlag(false);

    //room choose validation
    var roomFlag = true;
    for (var i = 0; i < roomCount.length; i++) {
      let eachRoom = [];
      eachRoom = passengers.filter(item => item.Room === i + 1);
      let sumAdult = 0;
      let sumChild1 = 0;
      let sumChild2 = 0;
      let sumInfant = 0;
      for (var j = 0; j < eachRoom.length; j++) {
        if (eachRoom[j].personType === "adult") sumAdult++;
        if (eachRoom[j].personType === "child1") sumChild1++;
        if (eachRoom[j].personType === "child2") sumChild2++;
        if (eachRoom[j].personType === "infant") sumInfant++;
      }

      if (parseInt(sumAdult) > parseInt(roomCount[i].charAt(0))) {
        alert(
          `تعداد بزرگسال اتاق  ${numToWord(
            i + 1
          )} بیشتر از مقدار تعیین شده است `
        );
        roomFlag = false;
      } else if (parseInt(sumAdult) < parseInt(roomCount[i].charAt(0))) {
        alert(
          ` تعداد بزرگسال اتاق  ${numToWord(
            i + 1
          )} کمتر از مقدار تعیین شده است `
        );
        roomFlag = false;
      } else if (
        parseInt(sumChild1) + parseInt(sumChild2) <
        parseInt(roomCount[i].charAt(1)) + parseInt(roomCount[i].charAt(2))
      ) {
        alert(
          `تعداد کودک اتاق  ${numToWord(i + 1)} کمتر از مقدار تعیین شده است `
        );
        roomFlag = false;
      } else if (
        parseInt(sumChild1) + parseInt(sumChild2) >
        parseInt(roomCount[i].charAt(1)) + parseInt(roomCount[i].charAt(2))
      ) {
        alert(
          `تعداد کودک اتاق  ${numToWord(i + 1)} کمتر از مقدار تعیین شده است `
        );
        roomFlag = false;
      } else if (parseInt(sumInfant) < parseInt(roomCount[i].charAt(3))) {
        alert(
          `تعداد نوزاد اتاق  ${numToWord(i + 1)} کمتر از مقدار تعیین شده است `
        );
        roomFlag = false;
      } else if (parseInt(sumInfant) > parseInt(roomCount[i].charAt(3))) {
        alert(
          `تعداد نوزاد اتاق  ${numToWord(i + 1)} بیشتر از مقدار تعیین شده است `
        );
        roomFlag = false;
      }
      if (!roomFlag) {
        setSubmitFlag(false);
        break;
      }
    } //end of room validation

    //mobile required validate
    let mobileReqErrorTemp = mobileReqError;
    var CellPhoneNumberValidate = requiredInput(
      passengers,
      mobileReqErrorTemp,
      "CellPhoneNumber"
    );
    setMobileReqError(CellPhoneNumberValidate[0].slice());
    if (!CellPhoneNumberValidate[1]) setSubmitFlag(false);
    //mobile format validate
    let mobileFormatErrorTemp = mobileFormatError;
    var mobileFormatValidate = mobileFormatInputValidate(
      passengers,
      mobileFormatErrorTemp,
      "CellPhoneNumber",
      1
    );
    setMobileFormatError(mobileFormatValidate[0].slice());
    if (!mobileFormatValidate[1]) setSubmitFlag(false);

    //birthday required validate (Day)
    let bDayReqErrorTemp = bDayReqError;
    var bDayValidate = requiredInput(passengers, bDayReqErrorTemp, "bDay");
    setBDayReqError(bDayValidate[0].slice());
    if (!bDayValidate[1]) setSubmitFlag(false);

    //birthday format validate (Day)
    let bDayFormatErrorTemp = bDayFormatError;
    var bDayFormatValidate = checkLimits(
      passengers,
      bDayFormatErrorTemp,
      "bDay",
      "DAY"
    );
    setBDayFormatError(bDayFormatValidate[0].slice());
    if (!bDayFormatValidate[1]) setSubmitFlag(false);

    //birthday required validate (Month)
    let bMonReqErrorTemp = bMonReqError;
    var bMonValidate = requiredInput(passengers, bMonReqErrorTemp, "bMonth");
    setBMonReqError(bMonValidate[0].slice());
    if (!bMonValidate[1]) setSubmitFlag(false);

    //birthday format validate (Month)
    let bMonFormatErrorTemp = bMonFormatError;
    var bMonFormatValidate = checkLimits(
      passengers,
      bMonFormatErrorTemp,
      "bMonth",
      "Month"
    );
    setBMonFormatError(bMonFormatValidate[0].slice());
    if (!bMonFormatValidate[1]) setSubmitFlag(false);

    //birthday required validate (Year)
    let bYearReqErrorTemp = bYearReqError;
    var bYearValidate = requiredInput(passengers, bYearReqErrorTemp, "bYear");
    setBYearReqError(bYearValidate[0].slice());
    if (!bYearValidate[1]) setSubmitFlag(false);

    //birthday age validate
    passengers.map((people, index) => {
      let birthday = "";
      let ageFlag = true;
      if (people.birthType === 0) {
        birthday = moment(people.BirthDate, "jYYYY/jMM/jDD").format(
          "YYYY/MM/DD"
        );
      } else {
        birthday = people.BirthDate;
      }
      let age = moment().diff(birthday, "years");
      if (people.personType === "adult") {
        if (age < 12) {
          ageFlag=false;
          alert(
            `تاریخ تولد بزگسال ${numToWord(index + 1)} صحیح وارد نشده است! `
          );
        } else {
          if(age>65 ){
            people.InsurancePrice = paymentObj[0].InsuranceOldPrice
          }
        }
      } else if (
        people.personType === "child1" ||
        people.personType === "child2"
      ) {
        if (age > 12 || age < 2) {
          ageFlag =false;
          alert(`تاریخ تولد کودک ${numToWord(index + 1)} صحیح وارد نشده است! `);
        } 
      } else {
        if (age > 2) {
          ageFlag =false;
          alert(
            `تاریخ تولد نوزاد ${numToWord(index + 1)} صحیح وارد نشده است! `
          );
        } 
      }
      if(!ageFlag){
        setSubmitFlag(false);
      }
    });

    //mellicode and passport Require validate
    passengers.map((people, i)=>{
      if (people.cardType===0){
        //length validation
        let mellicodeReqErroeTemp = mellicodeLengthError;
        let mellicodeValidate = mellicode_format(people.melliCode) ? false : true;
        if (mellicodeValidate) setSubmitFlag(false);
        mellicodeReqErroeTemp[i] = mellicodeValidate;
        setMellicodeLengthError(mellicodeReqErroeTemp.slice());
        //required validate
        let req = mellicodeReqErroe;
        let reqFlag = isRealValue(people.melliCode) ? false : true;
        if(reqFlag) setSubmitFlag(false);
        req[i] = reqFlag;
        setMellicodeReqErroe(req.slice());
      }
      else{
        //required validate
        let req = passportReqErroe;
        let reqFlag = isRealValue(people.PassportNo) ? false : true;
        if(reqFlag) setSubmitFlag(false);
        req[i] = reqFlag;
        setPassportReqErroe(req.slice());
      }
    })
 

    //     //before any request check submitFlag until here
        if(!submitFlag)
        {
            return false;
        }
    //     //get customer data

    //     let customerTemp = customer;
    //     //flag check for submit again by user and prevent for double insert
    //     if (customerFlag) {
    //       if (customerType === 0 || customerType === 1) {
    //         let title = "";
    //         let password = "";
    //         if (customerType === 0) {
    //           title = passengers[0].FirstName + " " + passengers[0].LastName;
    //           password = passengers[0].CellPhoneNumber;
    //         }
    //         if (customerType === 1) {
    //           title = customer.FirstName + " " + customer.LastName;
    //           password = customer.MobileNumber;
    //         }
    //         if (isRealValue(title) && isRealValue(password)) {
    //           await axios
    //             .get(`${Ports.domain}${Ports.userRegister}`, {
    //               params: {
    //                 title: title,
    //                 username: customer.Email,
    //                 password: password
    //               }
    //             })
    //             .then(function(response) {
    //               console.log(response);
    //               switch (response.status) {
    //                 case 200:
    //                   return response.data;
    //                 default:
    //                   return false;
    //               }
    //             })
    //             .catch(function(error) {
    //               console.log("error ", error);
    //               alert("ایمیل کاربر ثبت کننده تکراری است");
    //               setSubmitFlag(false);
    //             })
    //             .then(data => {
    //               if (data === "") {
    //                 alert("ok");
    //                 if (customerType === 0) {
    //                   customerTemp.FirstName = passengers[0].FirstName;
    //                   customerTemp.LastName = passengers[0].LastName;
    //                   customerTemp.MobileNumber = passengers[0].CellPhoneNumber;
    //                 }
    //                 setCustomer(customerTemp);
    //                 setcustomerFlag(false);
    //                 console.log("custumer", customerTemp);
    //               }
    //             });
    //         }
    //       }
    //       if (customerType === 2) {
    //         if (
    //           isRealValue(customer.Email) &&
    //           (isRealValue(customer.Code) || isRealValue(customer.MobileNumber))
    //         ) {
    //           let loginType =
    //             isRealValue(customer.MobileNumber) &&
    //             mobile_format(customer.MobileNumber)
    //               ? "Account"
    //               : "Contract";
    //           let password =
    //             isRealValue(customer.MobileNumber) &&
    //             mobile_format(customer.MobileNumber)
    //               ? customer.MobileNumber
    //               : customer.Code;
    //           let username = customer.Email;
    //           let formBody = new FormData();
    //           formBody.append("username", username);
    //           formBody.append("password", password);
    //           formBody.append("logintype", loginType);
    //           await axios
    //             .post(`${Ports.domain}${Ports.userLogin}`, formBody)
    //             .then(function(response) {
    //               console.log(response);
    //               switch (response.status) {
    //                 case 200:
    //                   return response.data;
    //                 default:
    //                   return false;
    //               }
    //             })
    //             .catch(function(error) {
    //               console.log("error ", error);
    //               alert("مشخصات کاربر ثبت کننده یافت نشد");
    //               setSubmitFlag(false);
    //             })
    //             .then(data => {
    //               if (data === "ERROR") {
    //                 alert("مشخصات کاربر ثبت کننده یافت نشد");
    //                 setSubmitFlag(false);
    //               } else {
    //                 let fullName = data.Title.split(" ");
    //                 let name = "";
    //                 let family = "";
    //                 if (fullName.length > 1) {
    //                   name = fullName[0];
    //                   family = fullName[1];
    //                 } else {
    //                   name = fullName[0];
    //                   family = fullName[0];
    //                 }
    //                 customerTemp = {
    //                   CustomerId: data.CustomersId,
    //                   FirstName: name,
    //                   LastName: family,
    //                   Email: data.Email,
    //                   MobileNumber: data.MobileNumber,
    //                   From: "Site",
    //                   Code: customer.Code
    //                 };
    //                 console.log("data from user login ", data);
    //               }
    //             });
    //         }
    //         console.log("custumer type 2", customerTemp);
    //       }
    //     } //customerFlag

    //     let paymentObj = paymentObj[0];
    //     let info = [
    //       {
    //         Flight: [],
    //         Package: [
    //           {
    //             Flight: [],
    //             Row: [
    //               {
    //                 Flight: [
    //                   {
    //                     Going: [
    //                       {
    //                         ItemType: paymentObj.Flight.ItemType,
    //                         AirLineAbbrevation: paymentObj.AirLineAbbrevation_Going,
    //                         AirLineId: paymentObj.Flight.AirLineId_Going,
    //                         FileName: paymentObj.Flight.FileName_Going,
    //                         AirLineTitle: paymentObj.Flight.AirLineTitle_Going,
    //                         DestAirportAbbrevation:
    //                           paymentObj.Flight.AirLineAbbrevation_Going,
    //                         DestAirportTitle:
    //                           paymentObj.Flight.SourceAirportTitle_Going,
    //                         DestCityAbbrevation:
    //                           paymentObj.Flight.DestCityAbbrevation_Going,
    //                         DestCityTitle: paymentObj.Flight.DestCityTitle_Going,
    //                         DestCountryAbbrevation:
    //                           paymentObj.Flight.DestCountryAbbrevation_Going,
    //                         DestCountryTitle:
    //                           paymentObj.Flight.DestCountryTitle_Going,
    //                         FlightDuration: paymentObj.Flight.FlightDuration_Going,
    //                         FlightNo: paymentObj.Flight.FlightNo_Going,
    //                         Id: paymentObj.Flight.Id_Going,
    //                         LocalARRDate: paymentObj.Flight.LocalARRDate_Going,
    //                         LocalARRTime: paymentObj.Flight.LocalARRTime_Going,
    //                         LocalDEPDate: paymentObj.Flight.LocalDEPDate_Going,
    //                         LocalDEPTime: paymentObj.Flight.LocalDEPTime_Going,
    //                         SourceAirportAbbrevation:
    //                           paymentObj.Flight.SourceAirportAbbrevation_Going,
    //                         SourceAirportTitle:
    //                           paymentObj.Flight.SourceAirportTitle_Going,
    //                         SourceCityAbbrevation:
    //                           paymentObj.Flight.SourceCityAbbrevation_Going,
    //                         SourceCityTitle:
    //                           paymentObj.Flight.SourceCityTitle_Going,
    //                         SourceCountryAbbrevation:
    //                           paymentObj.Flight.SourceCountryAbbrevation_Going,
    //                         SourceCountryTitle:
    //                           paymentObj.Flight.SourceCountryTitle_Going,
    //                         FlightClass: paymentObj.Flight.FlightClassTitle_Going,
    //                         CityId: paymentObj.Flight.DestCityId_Going,
    //                         Load: paymentObj.Flight.Load,
    //                         IsWebService: paymentObj.Flight.IsWebService,
    //                         WebServiceName: paymentObj.Flight.WebServiceName,
    //                         B2BID: paymentObj.Flight.B2BID,
    //                         UserLoginId: paymentObj.Flight.UserLoginId,
    //                         OnRequest: paymentObj.Flight.OnRequest_Going,
    //                         DeparturePrice: paymentObj.Flight.DeparturePrice,
    //                         ReturnPrice: paymentObj.Flight.ReturnPrice,
    //                         PackageFlightId: paymentObj.Flight.PackageFlightId
    //                       }
    //                     ],
    //                     Coming: [
    //                       {
    //                         ItemType: paymentObj.Flight.ItemType,
    //                         AirLineAbbrevation:
    //                           paymentObj.AirLineAbbrevation_Coming,
    //                         AirLineId: paymentObj.Flight.AirLineId_Coming,
    //                         FileName: paymentObj.Flight.FileName_Coming,
    //                         AirLineTitle: paymentObj.Flight.AirLineTitle_Coming,
    //                         DestAirportAbbrevation:
    //                           paymentObj.Flight.AirLineAbbrevation_Coming,
    //                         DestAirportTitle:
    //                           paymentObj.Flight.SourceAirportTitle_Coming,
    //                         DestCityAbbrevation:
    //                           paymentObj.Flight.DestCityAbbrevation_Coming,
    //                         DestCityTitle: paymentObj.Flight.DestCityTitle_Coming,
    //                         DestCountryAbbrevation:
    //                           paymentObj.Flight.DestCountryAbbrevation_Coming,
    //                         DestCountryTitle:
    //                           paymentObj.Flight.DestCountryTitle_Coming,
    //                         FlightDuration: paymentObj.Flight.FlightDuration_Coming,
    //                         FlightNo: paymentObj.Flight.FlightNo_Coming,
    //                         Id: paymentObj.Flight.Id_Coming,
    //                         LocalARRDate: paymentObj.Flight.LocalARRDate_Coming,
    //                         LocalARRTime: paymentObj.Flight.LocalARRTime_Coming,
    //                         LocalDEPDate: paymentObj.Flight.LocalDEPDate_Coming,
    //                         LocalDEPTime: paymentObj.Flight.LocalDEPTime_Coming,
    //                         SourceAirportAbbrevation:
    //                           paymentObj.Flight.SourceAirportAbbrevation_Coming,
    //                         SourceAirportTitle:
    //                           paymentObj.Flight.SourceAirportTitle_Coming,
    //                         SourceCityAbbrevation:
    //                           paymentObj.Flight.SourceCityAbbrevation_Coming,
    //                         SourceCityTitle:
    //                           paymentObj.Flight.SourceCityTitle_Coming,
    //                         SourceCountryAbbrevation:
    //                           paymentObj.Flight.SourceCountryAbbrevation_Coming,
    //                         SourceCountryTitle:
    //                           paymentObj.Flight.SourceCountryTitle_Coming,
    //                         FlightClass: paymentObj.Flight.FlightClassTitle_Coming,
    //                         CityId: paymentObj.Flight.DestCityId_Coming,
    //                         Load: paymentObj.Flight.Load,
    //                         IsWebService: paymentObj.Flight.IsWebService,
    //                         WebServiceName: paymentObj.Flight.WebServiceName,
    //                         B2BID: paymentObj.Flight.B2BID,
    //                         UserLoginId: paymentObj.Flight.UserLoginId,
    //                         OnRequest: paymentObj.Flight.OnRequest_Coming,
    //                         DeparturePrice: paymentObj.Flight.DeparturePrice,
    //                         ReturnPrice: paymentObj.Flight.ReturnPrice,
    //                         PackageFlightId: paymentObj.Flight.PackageFlightId
    //                       }
    //                     ]
    //                   }
    //                 ],
    //                 HotelList: paymentObj.Hotel,
    //                 HotelPrice: paymentObj.RoomInfo,
    //                 hotelprice_index: 0,
    //                 Id: paymentObj.PackageHotelRowId
    //               }
    //             ],
    //             Insurance_AdultPrice: paymentObj.InsuranceAdultPrice,
    //             Insurance_OldPrice: paymentObj.InsuranceOldPrice,
    //             PackageLength: paymentObj.PackageLength,
    //             Id: paymentObj.packageId,
    //             AdultCount: paymentObj.Adult,
    //             Child1Count: paymentObj.Child1,
    //             Child2Count: paymentObj.Child2,
    //             InfantCount: paymentObj.Infant,
    //             InfantPrice: paymentObj.InfantPrice,
    //             RoomRule: paymentObj.RoomRules,
    //             RoomRules: paymentObj.RoomRules
    //           }
    //         ],
    //         Passengers: passengers,
    //         Customer: [customerTemp],
    //         Registration: [],
    //         ReserveType: "Package",
    //         CounterId: "",
    //         Price: paymentObj.TotalPrice,
    //         PrePayment: 0,
    //         PriceType: "All",
    //         Discount: 0,
    //         DiscountWithCode: 0,
    //         Description: "",
    //         PromoCode: "",
    //         From: "Site",
    //         CommissionInReserveType: "",
    //         CommissionValue: -1,
    //         CurrencyValue: 1,
    //         CurrencyTitle: "ریال",
    //         CurrencyTypeId: ""
    //       }
    //     ];
    //     //console.log("insertOBJ",info)
    //     console.log("passengers", JSON.stringify(passengers));
    //     console.log("info", JSON.stringify(info));

    //     if (!setSubmitFlag) {
    //       return false;
    //     }
    //     await axios
    //       .get(`${Ports.domain}${Ports.book}`, {
    //         params: {
    //           info: JSON.stringify(info),
    //           getway_type: "MELLAT",
    //           force_payment: true,
    //           is_webservice: false,
    //           webservice_name: "",
    //           IsOnRequest: false,
    //           passengers: JSON.stringify(passengers),
    //           TrackerUniqueId: ""
    //         }
    //       })
    //       .then(function(response) {
    //         console.log(response);
    //         switch (response.status) {
    //           case 200:
    //             return response.data;
    //           default:
    //             return false;
    //         }
    //       })
    //       .catch(function(error) {
    //         console.log("error ", error);
    //         alert("Error" + error);
    //       })
    //       .then(data => {
    //         console.log("reserv data after form submit", data);
    //       });
  }

  //handle customer Fields
  function handleUser(e, type) {
    let value = e.target.value;
    if (type === "Email") {
      let emailFlag = isRealValue(value) ? false : true;
      setSubmiterEmailError(emailFlag);
      setCustomer({ ...customer, Email: value });
    }
    if (type === "FirstName") {
      let submiterNameFlag = isRealValue(value) ? false : true;
      setSubmiterNameError(submiterNameFlag);
      setCustomer({ ...customer, FirstName: value });
    }
    if (type === "LastName") {
      let submiterFamilyFlag = isRealValue(value) ? false : true;
      setSubmiterFamilyError(submiterFamilyFlag);
      setCustomer({ ...customer, LastName: value });
    }
    if (type === "MobileNumber") {
      if (customerType === 1) {
        let submiterMobileFlag = isRealValue(value) ? false : true;
        setSubmiterMobileError(submiterMobileFlag);
      }
      if (customerType === 2) {
        let submiterMobileFlag = isRealValue(value) ? false : true;
        setContractError(submiterMobileFlag);
      }
      setCustomer({ ...customer, MobileNumber: value });
    }
    if (type === "Code") {
      if (customerType === 2) {
        let submiterCodeFlag = isRealValue(value) ? false : true;
        setContractError(submiterCodeFlag);
      }
      setCustomer({ ...customer, Code: value });
    }
  }
  //handle passengers validation
  function handleInputChange(e, idx, type) {
    let nextPassenger = passengers.slice();
    nextPassenger[idx].id = idx;
    let value = e.target.value;

    if (type === "FirstName") {
      nextPassenger[idx].FirstName = value;
      //check latin
      let latin = latinNameError;
      let latinFlag = just_persian(value) ? true : false;
      latin[idx] = latinFlag;
      setLatinNameError(latin.slice());
      //check required
      let req = nameError;
      let reqFlag = isRealValue(value) ? false : true;
      req[idx] = reqFlag;
      setNameError(req.slice());
    }

    if (type === "LastName") {
      nextPassenger[idx].LastName = value;
      //check latin
      let latin = latinFamilyError;
      let latinFlag = just_persian(value) ? true : false;
      latin[idx] = latinFlag;
      setLatinFamilyError(latin.slice());
      //check required
      let req = familyError;
      let reqFlag = isRealValue(value) ? false : true;
      req[idx] = reqFlag;
      setFamilyError(req.slice());
    }

    if (type === "CellPhoneNumber") {
      nextPassenger[idx].CellPhoneNumber = value;
      //check required
      let req = mobileReqError;
      let reqFlag = isRealValue(value) ? false : true;
      req[idx] = reqFlag;
      setMobileReqError(req.slice());
      //check format
      let format = mobileFormatError;
      let formatFlag = mobile_format(value) ? false : true;
      if (!isRealValue(value)) formatFlag = false;
      format[idx] = formatFlag;
      setMobileFormatError(format.slice());
    }

    if (type === "Gender") nextPassenger[idx].Gender = value;
    if (type === "birthType") nextPassenger[idx].birthType = value;

    if (type === "Nationality") {
      var option_user_selection = e.target.options[e.target.selectedIndex].text;
      nextPassenger[idx].Nationality = option_user_selection;
      nextPassenger[idx].NationalityCode = value;
    }

    if (type === "bDay") {
      nextPassenger[idx].bDay = value;
      //check required
      let req = bDayReqError;
      let reqFlag = isRealValue(value) ? false : true;
      req[idx] = reqFlag;
      setBDayReqError(req.slice());
    }

    if (type === "bMonth") {
      nextPassenger[idx].bMonth = value;
      //check required
      let req = bMonReqError;
      let reqFlag = isRealValue(value) ? false : true;
      req[idx] = reqFlag;
      setBMonReqError(req.slice());
    }

    if (type === "bYear") {
      nextPassenger[idx].bYear = value;
      //check required
      let req = bYearReqError;
      let reqFlag = isRealValue(value) ? false : true;
      req[idx] = reqFlag;
      setBYearReqError(req.slice());
    }

    if (type === "bDay" || type === "bMonth" || type === "bYear") {
      nextPassenger[idx].BirthDate =
        nextPassenger[idx].bYear +
        "/" +
        nextPassenger[idx].bMonth +
        "/" +
        nextPassenger[idx].bDay;
    }

    if (type === "pDay" || type === "pMonth" || type === "pYear") {
      if (type === "pDay") nextPassenger[idx].pDay = value;
      if (type === "pMonth") nextPassenger[idx].pMonth = value;
      if (type === "pYear") nextPassenger[idx].pYear = value;
      nextPassenger[idx].PassportExpirationDate =
        nextPassenger[idx].pYear +
        "/" +
        nextPassenger[idx].pMonth +
        "/" +
        nextPassenger[idx].pDay;
    }

    if (type === "cardType") nextPassenger[idx].cardType = parseInt(value);

    if (type === "PassportNo") {
      nextPassenger[idx].PassportNo = value;
       //check required
       let req = passportReqErroe;
       let reqFlag = isRealValue(value) ? false : true;
       req[idx] = reqFlag;
       setPassportReqErroe(req.slice());
    
    }

    if (type === "PassportExpirationDate")
      nextPassenger[idx].PassportExpirationDate = value;

    if (type === "melliCode" ) {
      nextPassenger[idx].melliCode = value;
      //check numbare
      let numbare = mellicodeFormatError;
      console.log("is number output" , isNumber(value))
      let numbareFlag = isNumber(value) ? false : true;
      numbare[idx] = numbareFlag;
      setMellicodeFormatError(numbare.slice());
      //check required
      let req = mellicodeReqErroe;
      let reqFlag = isRealValue(value) ? false : true;
      req[idx] = reqFlag;
      setMellicodeReqErroe(req.slice());
    }

    if (type === "Room") {
      nextPassenger[idx].Room = parseInt(value);
      if (nextPassenger[idx].personType === "adult")
        nextPassenger[idx].Price = paymentObj[0].RoomPrices[value - 1].Adult;
      if (nextPassenger[idx].personType === "child1")
        nextPassenger[idx].Price = paymentObj[0].RoomPrices[value - 1].Child1;
      if (nextPassenger[idx].personType === "child2")
        nextPassenger[idx].Price = paymentObj[0].RoomPrices[value - 1].Child2;
      if (nextPassenger[idx].personType === "infant")
        nextPassenger[idx].Price = paymentObj[0].RoomPrices[value - 1].Infant;
    }
    setPassengers(nextPassenger);
  }

  //handle contions and rules
  function handleConditionChange(e) {
    setCondotion(e.target.checked);
    setCondotionFlag(e.target.checked);
  }

  console.log("customer", customer);
  console.log("passengers", passengers);
console.log("submitFkag" , submitFlag)
  return (
    <div className="info-form">
      <p className="desc-tag">
        <IoMdInformationCircle />
        لطفا اطلاعات زیر را کامل کنید :
      </p>
      <MDBCard>
        <MDBCardBody>
          <div className="travelers-info">
            <span>یکی از مسافران :</span>
            <label>
              <input
                type="radio"
                value="a"
                name="travelers"
                checked={iAm}
                onChange={onSetIamChanged}
              />
              <span className="checkmark"></span>
              <span>هستم</span>
            </label>
            <label>
              <input
                type="radio"
                name="travelers"
                value="b"
                checked={iAmnot}
                onChange={onSetIamNotChanged}
              />
              <span className="checkmark"></span>
              <span>نیستم</span>
            </label>
            <label>
              <input
                type="radio"
                name="travelers"
                value="c"
                checked={before}
                onChange={onSetBeforeChanged}
              />
              <span className="checkmark"></span>
              <span>قبلا خرید انجام داده ام</span>
            </label>
          </div>
          <Form>
            {iAm ? (
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <Label for="user_email">ایمیل :</Label>
                    <Input
                      style={
                        submiterEmailError || submiterEmailFormatError
                          ? errorBorder
                          : {}
                      }
                      onChange={e => handleUser(e, "Email")}
                      value={customer.Email}
                      type="email"
                      name="user_email"
                      id="user_email"
                    />
                    {submiterEmailError ? (
                      <span className="pr-1 small text-danger">
                        <IoIosWarning size="15" />
                        ایمیل را وارد کنید
                      </span>
                    ) : (
                      ""
                    )}
                    {submiterEmailFormatError ? (
                      <span className="pr-1 small text-danger">
                        <IoIosWarning size="15" />
                        فرمت ایمیل نادرست است
                      </span>
                    ) : (
                      ""
                    )}
                  </FormGroup>
                </Col>
              </Row>
            ) : (
              <>
                {iAmnot ? (
                  <Row form>
                    <Col md={3}>
                      <FormGroup>
                        <Label for="user_name">نام :</Label>
                        <Input
                          style={submiterNameError ? errorBorder : {}}
                          onChange={e => handleUser(e, "FirstName")}
                          value={customer.FirstName}
                          type="text"
                          name="user_name"
                          id="user_name"
                        />
                        {submiterNameError ? (
                          <span className="pr-1 small text-danger">
                            <IoIosWarning size="15" />
                            نام را وارد کنید
                          </span>
                        ) : (
                          ""
                        )}
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup>
                        <Label for="user_family">نام خانوادگی :</Label>
                        <Input
                          style={submiterFamilyError ? errorBorder : {}}
                          onChange={e => handleUser(e, "LastName")}
                          value={customer.LastName}
                          type="text"
                          name="user_family"
                          id="user_family"
                        />
                        {submiterFamilyError ? (
                          <span className="pr-1 small text-danger">
                            <IoIosWarning size="15" />
                            نام خانوادگی را وارد کنید
                          </span>
                        ) : (
                          ""
                        )}
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup>
                        <Label for="user_mobile">موبایل :</Label>
                        <Input
                          style={
                            submiterMobileError || submiterMobileFormatError
                              ? errorBorder
                              : {}
                          }
                          onChange={e => handleUser(e, "MobileNumber")}
                          value={customer.MobileNumber}
                          type="email"
                          name="user_mobile"
                          id="user_mobile"
                        />
                        {submiterMobileError ? (
                          <span className="pr-1 small text-danger">
                            <IoIosWarning size="15" />
                            موبایل را وارد کنید
                          </span>
                        ) : (
                          ""
                        )}
                        {submiterMobileFormatError ? (
                          <span className="pr-1 small text-danger">
                            <IoIosWarning size="15" />
                            فرمت موبایل نادرست است
                          </span>
                        ) : (
                          ""
                        )}
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup>
                        <Label for="user_email1">ایمیل :</Label>
                        <Input
                          style={
                            submiterEmailError || submiterEmailFormatError
                              ? errorBorder
                              : {}
                          }
                          onChange={e => handleUser(e, "Email")}
                          value={customer.Email}
                          type="email"
                          name="user_email1"
                          id="user_email1"
                        />
                        {submiterEmailError ? (
                          <span className="pr-1 small text-danger">
                            <IoIosWarning size="15" />
                            ایمیل را وارد کنید
                          </span>
                        ) : (
                          ""
                        )}
                        {submiterEmailFormatError ? (
                          <span className="pr-1 small text-danger">
                            <IoIosWarning size="15" />
                            فرمت ایمیل نادرست است
                          </span>
                        ) : (
                          ""
                        )}
                      </FormGroup>
                    </Col>
                  </Row>
                ) : (
                  <Row form>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="user_email2">ایمیل :</Label>
                        <Input
                          style={
                            submiterEmailError || submiterEmailFormatError
                              ? errorBorder
                              : {}
                          }
                          onChange={e => handleUser(e, "Email")}
                          value={customer.Email}
                          type="email"
                          name="user_email2"
                          id="user_email2"
                        />
                        {submiterEmailError ? (
                          <span className="pr-1 small text-danger">
                            <IoIosWarning size="15" />
                            ایمیل را وارد کنید
                          </span>
                        ) : (
                          ""
                        )}
                        {submiterEmailFormatError ? (
                          <span className="pr-1 small text-danger">
                            <IoIosWarning size="15" />
                            فرمت ایمیل نادرست است
                          </span>
                        ) : (
                          ""
                        )}
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="MobileNumber">موبایل :</Label>
                        <Input
                          className="mobileContract"
                          style={
                            contractError && mobileReqError ? errorBorder : {}
                          }
                          onChange={e => handleUser(e, "MobileNumber")}
                          value={customer.MobileNumber}
                          type="text"
                          name="MobileNumber"
                          id="MobileNumber"
                        />
                        {contractError ? (
                          <span className="pr-1 small text-danger">
                            <IoIosWarning size="15" />
                            موبایل یا شماره قرارداد را وارد کنید
                          </span>
                        ) : (
                          ""
                        )}
                      </FormGroup>
                      <span className="or">یا</span>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="code">شماره قرارداد :</Label>
                        <Input
                          style={contractError ? errorBorder : {}}
                          onChange={e => handleUser(e, "Code")}
                          value={customer.Code}
                          type="text"
                          name="code"
                          id="code"
                        />
                        {contractError ? (
                          <span className="pr-1 small text-danger">
                            <IoIosWarning size="15" />
                            موبایل یا شماره قرارداد را وارد کنید
                          </span>
                        ) : (
                          ""
                        )}
                      </FormGroup>
                    </Col>
                  </Row>
                )}
              </>
            )}
          </Form>

          <Form id="form1">
            {passengers.map((person, idx) => {
              return (
                <div key={IDBIndex.toString()}>
                  <hr />
                  <div className="passenger-tag">
                    <span>
                      مسافر {numToWord(idx + 1)} -{" "}
                      {personType(person.personType)}
                    </span>
                  </div>
                  <Row form>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="FirstName">نام :</Label>
                        <Input
                          style={
                            nameError[idx] || latinNameError[idx]
                              ? errorBorder
                              : {}
                          }
                          type="text"
                          value={person.FirstName}
                          onChange={e => handleInputChange(e, idx, "FirstName")}
                          name="FirstName"
                          id="FirstName"
                          placeholder="نام به لاتین"
                        />
                        {nameError[idx] ? (
                          <span className="pr-1 small text-danger">
                            <IoIosWarning size="15" /> فیلد نام اجباریست{" "}
                          </span>
                        ) : (
                          ""
                        )}
                        {latinNameError[idx] ? (
                          <span className="pr-1 small text-danger">
                            <TiSortAlphabetically size="15" /> نام لاتین وارد
                            شود{" "}
                          </span>
                        ) : (
                          ""
                        )}
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="LastName">نام خانوادگی :</Label>
                        <Input
                          style={
                            familyError[idx] || latinFamilyError[idx]
                              ? errorBorder
                              : {}
                          }
                          type="text"
                          value={person.LastName}
                          onChange={e => handleInputChange(e, idx, "LastName")}
                          name="LastName"
                          id="LastName"
                          placeholder="نام خانوادگی به لاتین"
                        />
                        {familyError[idx] ? (
                          <span className="pr-1 small text-danger">
                            <IoIosWarning size="15" /> فیلد نام خانوادگی
                            اجباریست{" "}
                          </span>
                        ) : (
                          ""
                        )}
                        {latinFamilyError[idx] ? (
                          <span className="pr-1 small text-danger">
                            <TiSortAlphabetically size="15" /> نام خانوادگی
                            لاتین وارد شود{" "}
                          </span>
                        ) : (
                          ""
                        )}
                      </FormGroup>
                    </Col>
                    <Col md={2}>
                      <FormGroup>
                        <Label for="Gender">جنسیت :</Label>
                        <Input
                          value={person.Gender}
                          onChange={e => handleInputChange(e, idx, "Gender")}
                          type="select"
                          name="Gender"
                          id="Gender"
                          placeholder=""
                        >
                          <option value={0}>زن</option>
                          <option value={1}>مرد</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md={2}>
                      <FormGroup>
                        <Label for="melliCode">اتاق :</Label>
                        <Input
                          value={person.Room}
                          onChange={e => handleInputChange(e, idx, "Room")}
                          type="select"
                          name="Room"
                          id="Room"
                        >
                          {roomCount.map((_, index) => {
                            return (
                              <option value={index + 1}>{index + 1}</option>
                            );
                          })}
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="Nationality">تابعیت :</Label>
                        <Input
                          value={person.NationalityCode}
                          onChange={e =>
                            handleInputChange(e, idx, "Nationality")
                          }
                          type="select"
                          name="Nationality"
                          id="Nationality"
                          placeholder=""
                        >
                          {Countries.map(cnt => {
                            return (
                              <option
                                key={cnt.code.toString()}
                                value={cnt.code}
                              >
                                {cnt.name}
                              </option>
                            );
                          })}
                        </Input>
                      </FormGroup>
                    </Col>

                    <Col md={4}>
                      <FormGroup>
                        <Label for="CellPhoneNumber">موبایل :</Label>
                        <Input
                          style={
                            mobileReqError[idx] || mobileFormatError[idx]
                              ? errorBorder
                              : {}
                          }
                          value={person.CellPhoneNumber}
                          onChange={e =>
                            handleInputChange(e, idx, "CellPhoneNumber")
                          }
                          type="text"
                          name="CellPhoneNumber"
                          id="CellPhoneNumber"
                          placeholder=""
                        />
                        {mobileReqError[idx] ? (
                          <span className="pr-1 small text-danger">
                            <IoIosWarning size="15" />
                            موبایل را وارد کنید
                          </span>
                        ) : (
                          ""
                        )}
                        {mobileFormatError[idx] ? (
                          <span className="pr-1 small text-danger">
                            <IoIosWarning size="15" />
                            فرمت موبایل نادرست است
                          </span>
                        ) : (
                          ""
                        )}
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <Label for="BirthDate">تاریخ تولد :</Label>
                      <Row className="px-3 BirthDate">
                        <FormGroup className="w-24">
                          <Input
                            style={
                              bDayReqError[idx] || bDayFormatError[idx]
                                ? errorBorder
                                : {}
                            }
                            value={person.bDay}
                            onChange={e => handleInputChange(e, idx, "bDay")}
                            type="text"
                            name="bDay"
                            id="bDay"
                            placeholder="روز"
                          />
                          {bDayReqError[idx] ? (
                            <span
                              className="pr-1 small text-danger"
                              style={{ fontSize: "8px" }}
                            >
                              روز تولد اجباری است
                            </span>
                          ) : bDayFormatError[idx] ? (
                            <span
                              className="pr-1 small text-danger"
                              style={{ fontSize: "8px" }}
                            >
                              خارج از محدوده 31 روز
                            </span>
                          ) : (
                            ""
                          )}
                        </FormGroup>

                        <FormGroup className="w-24">
                          <Input
                            style={
                              bMonReqError[idx] || bMonFormatError[idx]
                                ? errorBorder
                                : {}
                            }
                            value={person.bMonth}
                            onChange={e => handleInputChange(e, idx, "bMonth")}
                            type="text"
                            name="bMonth"
                            id="bMonth"
                            placeholder="ماه"
                          />
                          {bMonReqError[idx] ? (
                            <span
                              className="pr-1 small text-danger"
                              style={{ fontSize: "8px" }}
                            >
                              ماه تولد اجباری است
                            </span>
                          ) : bMonFormatError[idx] ? (
                            <span
                              className="pr-1 small text-danger"
                              style={{ fontSize: "8px" }}
                            >
                              خارج از محدوده 12 ماه
                            </span>
                          ) : (
                            ""
                          )}
                        </FormGroup>

                        <FormGroup className="w-24">
                          <Input
                            style={bYearReqError[idx] ? errorBorder : {}}
                            value={person.bYear}
                            onChange={e => handleInputChange(e, idx, "bYear")}
                            type="text"
                            name="bYear"
                            id="bYear"
                            placeholder="سال"
                          />
                          {bYearReqError[idx] ? (
                            <span
                              className="pr-1 small text-danger"
                              style={{ fontSize: "8px" }}
                            >
                              سال تولد اجباری است
                            </span>
                          ) : (
                            ""
                          )}
                        </FormGroup>

                        <FormGroup className="w-24">
                          <Input
                            value={person.birthType}
                            onChange={e =>
                              handleInputChange(e, idx, "birthType")
                            }
                            type="select"
                            name="birthType"
                            id="birthType"
                          >
                            <option value={0}>شمسی</option>
                            <option value={1}>میلادی</option>
                          </Input>
                        </FormGroup>
                      </Row>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="CardType">ثبت با :</Label>
                        <Input
                          value={person.cardType}
                          onChange={e => handleInputChange(e, idx, "cardType")}
                          type="select"
                          name="cardType"
                          id="submit_with"
                          placeholder=""
                        >
                          <option value={0}>کد ملی</option>
                          <option value={1}>شماره پاسپورت</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    {person.cardType ? (
                      <>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="PassportNo">شماره پاسپورت :</Label>
                            <Input
                            style={
                              passportReqErroe[idx] 
                                ? errorBorder
                                : {}
                            }
                              value={person.PassportNo}
                              onChange={e =>
                                handleInputChange(e, idx, "PassportNo")
                              }
                              type="text"
                              name="PassportNo"
                              id="PassportNo"
                              placeholder=""
                            />
                             {passportReqErroe[idx] ? (
                            <span className="pr-1 small text-danger">
                              <IoIosWarning size="15" /> فیلد شماره پاسپورت اجباریست{" "}
                            </span>
                          ) : (
                            ""
                          )}
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <Label for="PassportExpirationDate">
                            انقضاء پاسپورت :
                          </Label>
                          <Row className="px-3 PassportExpirationDate">
                            <FormGroup className="w-24">
                              <Input
                                value={person.pDay}
                                onChange={e =>
                                  handleInputChange(e, idx, "pDay")
                                }
                                type="text"
                                name="pDay"
                                id="pDay"
                                placeholder="روز"
                              />
                            </FormGroup>

                            <FormGroup className="w-24">
                              <Input
                                value={person.pMonth}
                                onChange={e =>
                                  handleInputChange(e, idx, "pMonth")
                                }
                                type="text"
                                name="pMonth"
                                id="pMonth"
                                placeholder="ماه"
                              />
                            </FormGroup>

                            <FormGroup className="w-24">
                              <Input
                                value={person.pYear}
                                onChange={e =>
                                  handleInputChange(e, idx, "pYear")
                                }
                                type="text"
                                name="pYear"
                                id="pYear"
                                placeholder="سال"
                              />
                            </FormGroup>

                            <FormGroup className="w-24">
                              <Input
                                value={person.passExType}
                                onChange={e =>
                                  handleInputChange(e, idx, "passExType")
                                }
                                type="select"
                                name="passExType"
                                id="passExType"
                              >
                                <option value={0}>میلادی</option>
                                <option value={1}>شمسی</option>
                              </Input>
                            </FormGroup>
                          </Row>
                        </Col>
                      </>
                    ) : (
                      <Col md={4}>
                        <FormGroup>
                          <Label for="melliCode">کد ملی :</Label>
                          <Input
                            style={
                              mellicodeReqErroe[idx] ||
                              mellicodeFormatError[idx] || mellicodeLengthError[idx]
                                ? errorBorder
                                : {}
                            }
                            value={person.melliCode}
                            onChange={e =>
                              handleInputChange(e, idx, "melliCode")
                            }
                            type="text"
                            name="melliCode"
                            id="melliCode"
                            placeholder=""
                          />
                          {mellicodeReqErroe[idx] ? (
                            <span className="pr-1 small text-danger">
                              <IoIosWarning size="15" /> فیلد کد ملی اجباریست{" "}
                            </span>
                          ) : mellicodeFormatError[idx] ? (
                            <span className="pr-1 small text-danger">
                              <IoIosWarning size="15" />فقط ورود عدد مجاز است شود{" "}
                            </span>
                          ) : mellicodeLengthError[idx] ? (
                            <span className="pr-1 small text-danger">
                              <IoIosWarning size="15" />تعداد ارقام کمتر از 10 می باشد{" "}
                            </span>
                          ) : (
                            ""
                          )}
                        </FormGroup>
                      </Col>
                    )}
                  </Row>
                  <Row></Row>
                </div>
              );
            })}
          </Form>
          <hr />
          <div className="rule-accept">
            <p>
              <IoMdInformationCircle />
              <span className="title">قوانین و مقررات :</span>
            </p>
            <label className="container">
              <span>شرایط و قوانین</span>
              را مطالعه کرده و با کلیه موارد موافقم.
              <input
                type="checkbox"
                checked={condotion}
                onChange={handleConditionChange}
              />
              <span className="checkmark"></span>
            </label>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <div className="passenger-tag">
                <span>انتخاب درگاه پرداخت</span>
              </div>
              <div className="bank-pose">
                <label className="container">
                  <img src={require("../../img/mellat.png")} />
                  <input type="radio" checked="checked" name="radio" />
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="passenger-tag">
                <span>قیمت نهایی</span>
              </div>
              <div className="last-price">
                <div>
                  <span className="label">جمع کل قیمت :</span>
                  <span>
                    {HotelPriceFormat(paymentObj[0].TotalPrice)}
                    ریال
                  </span>
                </div>
                <div>
                  <span className="label">مبلغ قابل پرداخت :</span>
                  <span>
                    {HotelPriceFormat(paymentObj[0].TotalPrice)}
                    ریال
                  </span>
                </div>
                <hr />
              </div>
              <div className="off-code">
                <span>کد تخفیف :</span>

                <InputGroup size="sm">
                  <Input />
                </InputGroup>
                <button className="btn">اعمال</button>
              </div>
            </div>
            <div className="col-md-12">
              <div className="pay-btns">
                <button
                  form="form1"
                  onClick={handleForm}
                  className="btn green-btn"
                  disabled={!submitFlag && !condotionFlag}
                >
                  پرداخت
                </button>
                <button className="btn">انصراف</button>
              </div>
            </div>
          </div>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

const mapStateToProps = state => {
  const paymentObj = state.paymenObject.paymentObj;
  return { paymentObj };
};

export default connect(mapStateToProps)(InfoForm);
