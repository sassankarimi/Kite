import React, { Fragment, useState } from "react";

//redux
import { useSelector, useDispatch } from "react-redux";
import {
  setAdultArray,
  setChild1,
  setChild2,
  setChildArray,
  setInfant,
  setRooms,
  setSelValues,
  setTotal
} from "../redux/rooms/action";

//UI Libraries
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";
import { Label, Input, Button, FormGroup } from "reactstrap";

//used for room menu
class Counter extends React.Component {
  increamentClicks = () => {
    let id = this.props.id;
    this.props.increament(id);
  };

  decreamentClicks = () => {
    let id = this.props.id;
    this.props.decreament(id);
  };

  render() {
    return (
      <div className="counter">
        <button className="btn counter-btn" onClick={this.increamentClicks}>
          +
        </button>
        <span>{this.props.count}</span>
        <button className="btn counter-btn" onClick={this.decreamentClicks}>
          -
        </button>
      </div>
    );
  }
}

//used for room menu
class ChildCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selValues: [] };
    this.createUI = this.createUI.bind(this);
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.selValues !== prevProps.selValues) {
      this.setState({
        selValues: this.props.selValues.filter(
          value => value.id === this.props.id
        )
      });
    }
  }

  increamentClicks = () => {
    let id = this.props.id;
    this.props.increament(id);
  };

  decreamentClicks = () => {
    let id = this.props.id;
    this.props.decreament(id);
  };

  handleChangeSelectValues(i, e) {
    let roomId = this.props.id; //room index
    let ageValue = e.target.value; //age index
    this.props.changeSelValue(roomId, i, ageValue);
  }

  createUI() {
    return this.props.selValues[this.props.id].age.map((el, index) => (
      <div key={index}>
        <FormGroup className="add-age">
          <Label for="exampleSelect">سن کودک {index + 1}</Label>
          <Input
            type="select"
            value={el}
            name="select"
            onChange={this.handleChangeSelectValues.bind(this, index)}
            id="exampleSelect"
          >
            <option value="0">تا 1 سال</option>
            <option value="1">1 تا 2 سال</option>
            <option value="2">2 تا 3 سال</option>
            <option value="3">3 تا 4 سال</option>
            <option value="4">4 تا 5 سال</option>
            <option value="5">5 تا 6 سال</option>
            <option value="6">6 تا 7 سال</option>
            <option value="7">7 تا 8 سال</option>
            <option value="8">8 تا 9 سال</option>
            <option value="9">9 تا 10 سال</option>
            <option value="10">10 تا 11 سال</option>
            <option value="11">11 تا 12 سال</option>
          </Input>
        </FormGroup>
      </div>
    ));
  }

  render() {
    return (
      <div className="counter">
        <button className="btn counter-btn" onClick={this.increamentClicks}>
          +
        </button>
        <span>{this.props.count}</span>
        <button className="btn counter-btn" onClick={this.decreamentClicks}>
          -
        </button>
        {this.createUI()}
      </div>
    );
  }
}

const Rooms = props => {
  const dispatch = useDispatch();
  const rooms = useSelector(state => state.roomsReducer.rooms);
  const inc1 = useSelector(state => state.roomsReducer.adultArray);
  const inc2 = useSelector(state => state.roomsReducer.childArray);
  const selValues = useSelector(state => state.roomsReducer.selValues);
  const total = useSelector(state => state.roomsReducer.total);
  const infantCount = useSelector(state => state.roomsReducer.infantCount);
  const child1Count = useSelector(state => state.roomsReducer.child1Count);
  const child2Count = useSelector(state => state.roomsReducer.child2Count);
  var roomArr = [];

  function removeRooms() {
    //adult person
    let tempInc1 = inc1;
    let tempAdult;
    tempAdult = tempInc1.pop();
    dispatch(setAdultArray(tempInc1));

    //child person
    let tempInc2 = inc2;
    let tempChild;
    tempChild = tempInc2.pop();
    dispatch(setChildArray(tempInc2));

    //rooms
    dispatch(setRooms(rooms - 1));
    dispatch(setTotal(total - tempChild - tempAdult));

    let tempSelValues = selValues;
    tempSelValues = selValues.filter(value => value.id !== rooms - 1);
    dispatch(setSelValues(tempSelValues));

    let removeRoomArray = selValues.filter(value => value.id == rooms - 1);
    let removeRoomArrayAge = removeRoomArray[0].age;
    let numOfInfant = 0;
    let numOfChild1 = 0;
    let numOfChild2 = 0;
    for (var j = 0; j < removeRoomArrayAge.length; j++) {
      if (removeRoomArrayAge[j] === 0 || removeRoomArrayAge[j] === 1) {
        numOfInfant++;
      } else if (
        removeRoomArrayAge[j] === 2 ||
        removeRoomArrayAge[j] === 3 ||
        removeRoomArrayAge[j] === 4 ||
        removeRoomArrayAge[j] === 5
      ) {
        numOfChild1++;
      } else if (
        removeRoomArrayAge[j] === 6 ||
        removeRoomArrayAge[j] === 7 ||
        removeRoomArrayAge[j] === 8 ||
        removeRoomArrayAge[j] === 9 ||
        removeRoomArrayAge[j] === 10 ||
        removeRoomArrayAge[j] === 11
      ) {
        numOfChild2++;
      }
    }
    dispatch(setInfant(parseInt(infantCount) - numOfInfant));
    dispatch(setChild1(parseInt(child1Count) - numOfChild1));
    dispatch(setChild2(parseInt(child2Count) - numOfChild2));
  }

  function addRooms() {
    //adult person
    let tempInc1 = [...inc1, 1];
    dispatch(setAdultArray(tempInc1));

    //child person
    let tempInc2 = [...inc2, 0];
    dispatch(setChildArray(tempInc2));

    //rooms
    dispatch(setRooms(rooms + 1));
    dispatch(setTotal(1 + total));
    let tempSelValues = selValues;
    tempSelValues.push({ id: rooms, adult: 1, age: [] });
    dispatch(setSelValues(tempSelValues));
  }

  function handleIncreamentA(i) {
    let valueInc1 = inc1;
    valueInc1[i] = inc1[i] + 1;
    dispatch(setAdultArray(valueInc1));
    dispatch(setTotal(total + 1));

    let arrSel = selValues;
    let arrAge = selValues.filter(value => value.id === i);
    if (arrAge.length > 0) {
      let newObj = { id: i, adult: valueInc1[i], age: arrAge[0].age };
      arrSel.splice(i, 1, newObj);
    }

    dispatch(setSelValues(arrSel));
  }

  function handleIncreamentB(i) {
    let valueInc2 = inc2;
    valueInc2[i] = inc2[i] + 1;
    dispatch(setChildArray(valueInc2));
    dispatch(setTotal(total + 1));

    let arrSel = selValues;
    let arrAge = selValues.filter(value => value.id === i);
    let newObj = {};
    if (arrAge.length > 0) {
      arrAge[0].age.push(0);
      newObj = { id: i, adult: inc1[i], age: arrAge[0].age };
      //infant first value option
    } else {
      newObj = { id: i, adult: inc1[i], age: [0] };
      //infant first value option
    }
    dispatch(setInfant(infantCount + 1));
    arrSel.splice(i, 1, newObj);
    dispatch(setSelValues(arrSel));
  }

  function handleDecreamentA(i) {
    if (inc1[i] > 1) {
      let valueInc1 = inc1;
      valueInc1[i] = inc1[i] - 1;
      dispatch(setAdultArray(valueInc1));
      dispatch(setTotal(total - 1));
      let arrSel = selValues;
      let arrAge = selValues.filter(value => value.id === i);
      if (arrAge.length > 0) {
        let newObj = { id: i, adult: valueInc1[i], age: arrAge[0].age };
        arrSel.splice(i, 1, newObj);
      }
      dispatch(setSelValues(arrSel));
    }
  }

  function handleDecreamentB(i) {
    if (inc2[i] > 0) {
      let valueInc2 = inc2;
      valueInc2[i] = inc2[i] - 1;
      dispatch(setChildArray(valueInc2));
      dispatch(setTotal(total - 1));

      let arrSel = selValues;
      let arrAge = selValues.filter(value => value.id === i);
      if (arrAge.length > 0) {
        let childAge = arrAge[0].age.pop();
        if (childAge === 0 || childAge === 1) {
          dispatch(setInfant(parseInt(infantCount) - 1));
        } else if (
          childAge === 2 ||
          childAge === 3 ||
          childAge === 4 ||
          childAge === 5
        ) {
          dispatch(setChild1(parseInt(child1Count) - 1));
        } else if (
          childAge === 6 ||
          childAge === 7 ||
          childAge === 8 ||
          childAge === 9 ||
          childAge === 10 ||
          childAge === 11
        ) {
          dispatch(setChild2(parseInt(child2Count) - 1));
        }
        let newObj = { id: i, adult: inc1[i], age: arrAge[0].age };
        arrSel.splice(i, 1, newObj);
        dispatch(setSelValues(arrSel));
      }
    }
  }

  function changeSelValue(roomId, ageId, ageValue) {
    let rooms = selValues;
    let room = selValues.filter(arr => arr.id === roomId);

    //set Count of childs
    if (parseInt(room[0].age[ageId]) === 0)
      dispatch(setInfant(infantCount - 1));
    if (parseInt(room[0].age[ageId]) === 1)
      dispatch(setChild1(child1Count - 1));
    if (parseInt(room[0].age[ageId]) === 2)
      dispatch(setChild2(child2Count - 1));

    if (parseInt(ageValue) === 0 || parseInt(ageValue) === 1) {
      dispatch(setInfant(infantCount + 1));
    }
    if (
      parseInt(ageValue) === 2 ||
      parseInt(ageValue) === 3 ||
      parseInt(ageValue) === 4 ||
      parseInt(ageValue) === 5
    ) {
      dispatch(setChild1(child1Count + 1));
    }
    if (
      parseInt(ageValue) === 6 ||
      parseInt(ageValue) === 7 ||
      parseInt(ageValue) === 8 ||
      parseInt(ageValue) === 9 ||
      parseInt(ageValue) === 10 ||
      parseInt(ageValue) === 11
    ) {
      dispatch(setChild2(child2Count + 1));
    }

    room[0].age[ageId] = parseInt(ageValue);
    rooms.splice(roomId, 1, room[0]);
    dispatch(setSelValues(rooms));
  }
  //room menu structure
  for (var i = 0; i < rooms; i++) {
    let inc1Count = inc1[i];
    let inc2Count = inc2[i];
    roomArr.push(
      <div className="push-room">
        <hr />
        <p className="room-label">اتاق {i + 1}</p>
        <div className="line-counter">
          <span className="label">بزرگسال</span>
          <Counter
            count={inc1Count}
            id={i}
            increament={handleIncreamentA}
            decreament={handleDecreamentA}
          />
        </div>
        <div className="line-counter">
          <span className="label">کودک</span>
          <div className="child-age">
            <ChildCounter
              changeSelValue={(roomId, ageId, ageValue) =>
                changeSelValue(roomId, ageId, ageValue)
              }
              count={inc2Count}
              id={i}
              selValues={selValues}
              increament={handleIncreamentB}
              decreament={handleDecreamentB}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <Fragment>
      <MDBDropdown size="sm" className="passenger-number">
        <MDBDropdownToggle caret>
          مسافران + اتاق
          <span className="total-num">{total} مسافر</span>
          <span className="total-num">{rooms} اتاق</span>
          <MdKeyboardArrowDown />
        </MDBDropdownToggle>
        <MDBDropdownMenu className="dropdown-counter" color="danger" basic>
          <div className="add-room">
            <Button
              color="secondary"
              size="sm"
              onClick={addRooms}
              className="add-btn"
            >
              افزودن اتاق
            </Button>

            {roomArr.map((value, k) => {
              return <div key={k}>{value}</div>;
            })}

            {rooms > 1 ? (
              <div>
                <hr />
                <Button
                  color="secondary"
                  size="sm"
                  onClick={removeRooms}
                  className="add-btn"
                >
                  حذف اتاق
                </Button>
              </div>
            ) : (
              <span></span>
            )}
            <MDBDropdownItem className="done-btn" type="button">
              تایید
            </MDBDropdownItem>
          </div>
        </MDBDropdownMenu>
      </MDBDropdown>
    </Fragment>
  );
};

export default Rooms;
