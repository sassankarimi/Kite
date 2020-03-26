import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import {IoIosAirplane ,IoMdSearch} from "react-icons/io";
import Fab from '@material-ui/core/Fab';
import RoundButton from "./roundbutton";

const useStyles = makeStyles(theme => ({
    fab: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

// const RoundButton = (props) => {
//     const classes = useStyles();
//     return (
//       <Fab variant="extended" aria-label="like" className={classes.fab}>
//           <IoMdSearch/>
//         {props.name}
//       </Fab>
//     )
//   }
const SearchBoxVisa = (props) => {
  const address='/tour/booking/';
  const id=10;
    return (
      <Fragment>
            <div className="inputgroups">
                <InputGroup>
                  <Input placeholder="شهر یا فرودگاه" />
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      <div className="source-plane">
                        <IoIosAirplane/>
                      </div>
                     انتخاب کشور
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              
              </div>
         
              <RoundButton id={id} link={`${address}`} name="جستــجو" icon={<IoMdSearch/>}/>
      </Fragment>
    )
}
export default SearchBoxVisa;