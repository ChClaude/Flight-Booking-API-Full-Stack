import React, {useState} from 'react';
import Calendar from "./Calendar";
import PropTypes from "prop-types";

const Form = (props) => {

    const [tripType, setTripType] = useState('round trip');
    const [hasAwardTicket, setAwardTicket] = useState(false);
    const [departure, setDeparture] = useState('Cape Town');
    const [destination, setDestination] = useState('');
    const [departureDate, setDepartureDate] = useState('2020-03-05T08:30:00+02:00');
    const [returnDate, setReturnDate] = useState('2020-04-06T14:30:00+02:00');
    const [datePickerStyle, setDatePickerStyle] = useState("hide");

    const [bookerMenuRadioClasses, setBookerMenuRadioClasses] = useState({
        roundTrip: "radio-input-selected",
        oneWay: "",
        multiCity: ""
    });
    const departureInputBox = React.createRef();
    const destinationInputBox = React.createRef();

    const handleInputBoxClick = (value) => {
        if (value === 1)
            departureInputBox.current.focus();
        else if (value === 2)
            destinationInputBox.current.focus();
    };

    const handleBookerRadioButtons = (e) => {
        const value = e.target.value;
        setTripType(value);
        if (value === "round trip") {
            let roundTrip = "radio-input-selected";
            let oneWay = "";
            let multiCity = "";
            setBookerMenuRadioClasses({roundTrip: roundTrip, oneWay: oneWay, multiCity: multiCity});
        } else if (value === "one way") {
            let roundTrip = "";
            let oneWay = "radio-input-selected";
            let multiCity = "";
            setBookerMenuRadioClasses({roundTrip: roundTrip, oneWay: oneWay, multiCity: multiCity});
        } else if (value === "multi-city") {
            let roundTrip = "";
            let oneWay = "";
            let multiCity = "radio-input-selected";
            setBookerMenuRadioClasses({roundTrip: roundTrip, oneWay: oneWay, multiCity: multiCity});
        }
    };

    const handleDatePick = () => {
        const style = datePickerStyle === "hide" ? "show" : "hide";
        setDatePickerStyle(style);
    };


    return (
        <form onSubmit={(e) => {
            const booking = {
                "departure": departure,
                "destination": destination,
                "departureDate": departureDate,
                "tripType": tripType,
                "returnDate": returnDate,
                "numberOfPassengers": 1,
                "cabin": "ECO",
                "price": 1050
            };
            props.onSubmit(e, booking);
            setDestination('');
        }}>
            <div className="booker-menu">
                <a className={bookerMenuRadioClasses.roundTrip}>
                    <input
                        type="radio"
                        name="triptype"
                        id="round trip"
                        value="round trip"
                        checked={tripType === 'round trip'}
                        onChange={e => handleBookerRadioButtons(e)}
                    />
                    <label htmlFor="round trip"> Round trip</label>
                </a>
                <a className={bookerMenuRadioClasses.oneWay}>
                    <input
                        type="radio"
                        name="triptype"
                        id="one way"
                        value="one way"
                        checked={tripType === 'one way'}
                        onChange={handleBookerRadioButtons}
                    />
                    <label htmlFor="one way"> One way</label>
                </a>
                <a className={bookerMenuRadioClasses.multiCity}>
                    <input
                        type="radio"
                        name="triptype"
                        id="multi-city"
                        value="multi-city"
                        checked={tripType === 'multi-city'}
                        onChange={handleBookerRadioButtons}
                    />
                    <label htmlFor="multi-city"> Multi-city</label>
                </a>
                <a>
                    <input
                        type="checkbox"
                        name="AwardTicket"
                        id="AwardTicket"
                        checked={hasAwardTicket}
                        onChange={e => setAwardTicket(e.target.checked)}
                    />
                    <label htmlFor="AwardTicket"> Award ticket - Buy a ticket with Miles</label>
                </a>
            </div>

            <div>
                <div className="input-box" onClick={() => handleInputBoxClick(1)}>
                    <div className="icon-wrapper">
                        <i className="fas fa-plane-departure"/>
                    </div>
                    <div>
                        <input
                            type="text"
                            id="departure"
                            name="departure"
                            value={departure}
                            onChange={e => setDeparture(e.target.value)}
                            placeholder=" "
                            ref={departureInputBox}
                        />
                        <label htmlFor="departure">From</label>
                    </div>
                </div>

                <div className="input-box" onClick={() => handleInputBoxClick(2)}>
                    <div className="icon-wrapper">
                        <i className="fas fa-plane-arrival"/>
                    </div>
                    <div>
                        <input
                            type="text" id="destination"
                            name="destination"
                            value={destination}
                            onChange={e => setDestination(e.target.value)}
                            placeholder=" "
                            ref={destinationInputBox}
                        />
                        <label htmlFor="to">To</label>
                        <div className="all-destination">
                            <i className="fas fa-globe-africa"/>
                            See all destinations
                        </div>
                    </div>
                </div>

                <div className="book-details" onClick={handleDatePick}>
                    <div className="details-box">Dates</div>
                    <i className="fas fa-calendar-alt"/>
                </div>
                <Calendar datePickerStyle={datePickerStyle} />
                <div className="book-details" title="Number of passengers 1">
                    <div className="flex-flow-col details-box">
                        <span id="cabin">Cabin</span>
                        <span>ECO</span>
                        <span id="class">Class</span>
                    </div>
                    <div id="personCounter">
                        <i className="fas fa-male"/>
                        <span>1</span>
                    </div>
                </div>
                <button type="submit" className="btn-next"><i className="fas fa-chevron-right"/></button>
            </div>
            <div id="previousSearch">
                Previous Search
            </div>
        </form>
    );
};

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

Form.defaultProps = {
    trip: {
        "departure": "Cape Town",
        "destination": "",
        "departureDate": new Date(),
        "tripType": "round trip",
        "returnDate": new Date(),
        "numberOfPassengers": 1,
        "cabin": "ECO",
        "price": 1050
    }
};

export default Form;