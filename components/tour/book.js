import React from 'react';

//UI Libraries
import { Container, } from 'reactstrap';
import Countdown from 'react-countdown-now';

//components
import ChosenCard from "./ChosenCard";
import InfoForm from './infoForm';


// Random component
const Completionist = () => <span>You are good to go!</span>;
// Renderer callback with condition
const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
        // Render a complete state
        return <Completionist />;
    } else {
        // Render a countdown
        return <span>0 : 0 : {minutes} : {seconds}</span>;
    }
};


const Payment = (props) => {

   
    return (
        <div className="tour-payment">
            <Container>
                <div className="payment">
                    <div className="row">
                        <div className="col-md-9">
                            <ChosenCard {...props} />
                        </div>
                        <div className="col-md-3 pr-0-lg">
                            <div className="timer">
                                <Countdown date={Date.now() + 1500000} renderer={renderer} />
                            </div>
                        </div>
                    </div>

                    <InfoForm {...props} />
                </div>

            </Container>
        </div>
    )
}

export default Payment;
