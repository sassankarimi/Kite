import React from 'react';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import { MdKeyboardArrowDown } from "react-icons/md";

// const DropdownPage = (props) => {
//   return (
   
      // <MDBDropdown size="sm">
      //   <MDBDropdownToggle caret>
      //     {props.name}
      //     <MdKeyboardArrowDown/>
      //   </MDBDropdownToggle>
      //   <MDBDropdownMenu color="danger" basic>
      //     <MDBDropdownItem>Action</MDBDropdownItem>
      //     <MDBDropdownItem>Another Action</MDBDropdownItem>
          
      //   </MDBDropdownMenu>
      // </MDBDropdown>
   

//   );
// }

const TourSort =(props)=>{
    
    return (
    <div className="sort">
      <div className="row">
        <div className="col-md-6">
          <p className="result-num">
          1 از
           
          <span> 
          1 نتیجه
          </span>
         
          </p>
        </div>
        <div className="col-md-6">
          {/* <DropdownPage name="مرتب سازی بر اساس"/> */}
          <div className="sort-select">
            <div className="form-group div-select">
              <select class="form-control"  name="slct" id="slct">
                <option selected disabled>مرتب سازی بر اساس</option>
                <option value="1">ارزان ترین</option>
                <option value="2">گران ترین</option>
              </select>
              <MdKeyboardArrowDown />
            </div>
            
          </div>
        
        </div>
    
      </div>
     
     
    </div>
    )
} 

export default TourSort;