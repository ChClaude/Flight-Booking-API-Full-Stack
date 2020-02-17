import React, {useState} from 'react';

const Form = (props) => {

    const [tripType, setTripType] = useState('Round trip');
    const [hasAwardTicket, setAwardTicket] = useState(false);
    const [departure, setDeparture] = useState('Cape Town');
    const [destination, setDestination] = useState('');

    const departureInputBox = React.createRef();
    const destinationInputBox = React.createRef();

    const handleInputBoxClick = (value) => {
        if (value === 1)
            departureInputBox.current.focus();
        else if (value === 2)
            destinationInputBox.current.focus();
    };


    return (
        <form onSubmit={(e) => {
            const booking = {
                "departure": departure,
                "destination": destination,
                "departureDate": "2021-03-05T08:30:00+02:00",
                "isRoundTrip": true,
                "returnDate": "2021-03-30T18:30:00+02:00",
                "numberOfPassengers": 1,
                "cabin": "ECO",
                "price": 1050
            };
            props.onSubmit(e, booking);
        }}>
            <div className="booker-menu">
                <a>
                    <input
                        type="radio"
                        name="triptype"
                        id="Round trip"
                        value="Round trip"
                        checked={tripType === 'Round trip'}
                        onChange={e => setTripType(e.target.value)}
                    />
                    <label htmlFor="Round trip"> Round trip</label>
                </a>
                <a>
                    <input
                        type="radio"
                        name="triptype"
                        id="One way"
                        value="One way"
                        checked={tripType === 'One way'}
                        onChange={e => setTripType(e.target.value)}
                    />
                    <label htmlFor="One way"> One way</label>
                </a>
                <a>
                    <input
                        type="radio"
                        name="triptype"
                        id="Multi-city"
                        value="Multi-city"
                        checked={tripType === 'Multi-city'}
                        onChange={e => setTripType(e.target.value)}
                    />
                    <label htmlFor="Multi-city"> Multi-city</label>
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
                <div className="input-box" onClick={() => handleInputBoxClick(1)} >
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
                    </div>
                </div>

                <div className="book-details">
                    <div>Dates</div>
                    <i className="fas fa-calendar-alt"/>
                </div>
                <div className="book-details" title="Number of passengers 1">
                    <div className="flex-flow-col ">
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

export default Form;