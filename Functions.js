import { BounceLoader, BeatLoader, BarLoader, DotLoader } from "react-spinners";
import { MagicSpinner } from "react-spinners-kit";

import { css } from "@emotion/core";

const override = css`
  margin: 0 auto;
`;

export function isNumber(data) {
  if (isNaN(data)) {
    return false;
  } else {
    return true;
  }
}
export function isRealValue(obj) {
  return (
    obj &&
    obj !== "null" &&
    obj !== "undefined" &&
    obj !== "" &&
    obj !== " " &&
    obj !== "  "
  );
}
export function BounceLoading() {
  return (
    <div className="vertical-center">
      <BounceLoader
        css={override}
        size={150}
        color={"#50E3C2"}
        loading={true}
      />
    </div>
  );
}
export function BeatLoading() {
  return (
    <div className="vertical-center">
      <BeatLoader
        css={override}
        size={12}
        margin={2}
        color={"#50E3C2"}
        loading={true}
      />
    </div>
  );
}
export function DotLoading() {
  return (
    <DotLoader css={override} size={45} color={"#50E3C2"} loading={true} />
  );
}
export function BarLoading() {
  return (
    <div className="m-auto">
      <BarLoader css={override} height={3} width={130} color={"#73c9ca"} />
    </div>
  );
}
export function MagicSpinnerLoading({
  size = 30,
  color = "#009688",
  loading = true
}) {
  return (
    <div>
      <MagicSpinner size={size} color={color} loading={loading} />
    </div>
  );
}
export function sumDigits(number) {
  var str = number.toString();
  var sum = 0;

  for (var i = 0; i < str.length; i++) {
    sum += parseInt(str.charAt(i), 10);
  }

  return sum;
}
export function requiredInput(passengers, errorFlagArray, itemName) {
  var submitFlag = true;
  var inputValidate = passengers.reduce(function(arr, item, index) {
    if (!isRealValue(item[itemName])) {
      //nameValidate.push(index);
      arr[index] = true;
      submitFlag = false;
    } else {
      arr[index] = false;
    }
    return arr;
  }, errorFlagArray);
  return [inputValidate, submitFlag];
}
export function checkMelliCode(passengers, errorFlagArray, itemName) {
  var submitFlag = true;
  var inputValidate = passengers.reduce(function(arr, item, index) {
    if (!isNumber(item[itemName]) || !mellicode_format(item[itemName])) {
      arr[index] = true;
      submitFlag = false;
    } else {
      arr[index] = false;
    }
    return arr;
  }, errorFlagArray);
  return [inputValidate, submitFlag];
}
export function latinOrPersianValidate(
  passengers,
  errorFlagArray,
  itemName,
  persianFlag
) {
  var submitFlag = true;
  var inputValidate = passengers.reduce(function(arr, item, index) {
    if (persianFlag) {
      //error when has latin character
      if (!just_persian(item[itemName]) && isRealValue(item[itemName])) {
        //nameValidate.push(index);
        arr[index] = true;
        submitFlag = false;
      } else {
        arr[index] = false;
      }
    } else {
      //error when has persian character
      if (just_persian(item[itemName])) {
        //nameValidate.push(index);
        arr[index] = true;
        submitFlag = false;
      } else {
        arr[index] = false;
      }
    }

    return arr;
  }, errorFlagArray);
  return [inputValidate, submitFlag];
}
export function checkLimits(passengers, errorFlagArray, itemName, type) {
  var submitFlag = true;
  var inputValidate = passengers.reduce(function(arr, item, index) {
    if (type === "DAY") {
      if (item[itemName] > 31 || item[itemName] < 1) {
        arr[index] = true;
        submitFlag = false;
      } else {
        arr[index] = false;
      }
    } else {
      if (item[itemName] > 12 || item[itemName] < 1) {
        arr[index] = true;
        submitFlag = false;
      } else {
        arr[index] = false;
      }
    }

    return arr;
  }, errorFlagArray);
  return [inputValidate, submitFlag];
}
export function mobileFormatInputValidate(
  passengers,
  errorFlagArray,
  itemName
) {
  var submitFlag = true;
  var inputValidate = passengers.reduce(function(arr, item, index) {
    if (!mobile_format(item[itemName]) && isRealValue(item[itemName])) {
      //nameValidate.push(index);
      arr[index] = true;
      submitFlag = false;
    } else {
      arr[index] = false;
    }
    return arr;
  }, errorFlagArray);
  return [inputValidate, submitFlag];
}
export function just_persian(str) {
  var p = /^[\u0600-\u06FF\s]+$/;
  return p.test(str);
}
export function mellicode_format(input) {
  if (input.length ===10 )
    return true;
  else{
    return false
  }
}
export function mobile_format(str) {
  var m = /^09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/;
  return m.test(str);
}
export function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
export function personType(type) {
  switch (type) {
    case "adult":
      return "بزرگسال";
    case "child":
      return "کودک";
    case "child1":
      return "کودک";
    case "child2":
      return "کودک";
    case "infant":
      return "نوزاد";
    default:
      return " ";
  }
}
export function numToWord(num) {
  switch (num) {
    case 1:
      return "اول";
    case 2:
      return "دوم";
    case 3:
      return "سوم";
    case 4:
      return "چهارم";
    case 5:
      return "پنجم";
    case 6:
      return "ششم";
    case 7:
      return "هفتم";
    case 8:
      return "هشتم";
    case 9:
      return "نهم";
    case 10:
      return "دهم";
    case 11:
      return "یازدهم";
    case 12:
      return "دوازدهم";
    case 13:
      return "سیزدهم";
    case 14:
      return "چهاردهم";
    case 15:
      return "پانزدهم";
    case 16:
      return "شانزدهم";
    case 17:
      return "هفدهم";
    case 18:
      return "هجدهم";
    case 19:
      return "نوزدهم";
    case 20:
      return "بیستمم";
    default:
      return num;
  }
}
