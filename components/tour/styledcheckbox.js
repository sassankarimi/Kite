import React from 'react';
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';

const StyledCheckbox =(props)=>{
    
    return(
        <Form>
            <CustomInput type="checkbox" id={props.tourId} label={props.labelText}/>  
        </Form>
    )
} 

export default StyledCheckbox;