import React, {Fragment, useState} from 'react';
import PropTypes from "prop-types";
import Spinner from "../components/Spinner";
import axios from "axios";

const Trips = ({data}) => {
    const [trips, setTrips] = useState(data);

    const handleOnDelete = (id) => {
        let originalTrips = trips;
        const newTrips = trips.filter(trip => trip.id !== id);
        setTrips(newTrips);

        axios.delete(`api/flightbookings/${id}`)
            .then(res => console.log(`Deleted: ${res}`))
            .catch(err => {
                console.error(err);
                alert("An error occurred while deleting");
                setTrips(originalTrips);
            });
    };

    return (
        <div className="trips container">
            {trips.length ? (<Fragment>
                <div className="table-header">All Trips</div>
                <table>
                    <thead>
                    <tr>
                        <th>Reservation ID</th>
                        <th>Departure</th>
                        <th>Destination</th>
                        <th>Trip Type</th>
                        <th>Return Date</th>
                        <th>Passenger(s)</th>
                        <th>Cabin</th>
                        <th>Price</th>
                        <th/>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                    {trips.map(({
                                    id, departure, destination, tripType,
                                    returnDate, numberOfPassengers, cabin, price
                                }) => {

                        const date = new Date(returnDate);
                        const months = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", , "Nov", "Dec"];
                        const dateFormat = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
                        return <tr key={id}>
                            <td>{id}</td>
                            <td>{departure}</td>
                            <td>{destination}</td>
                            <td>{tripType.charAt(0).toUpperCase() + tripType.substring(1)}</td>
                            <td>{dateFormat}</td>
                            <td>{numberOfPassengers}</td>
                            <td>{cabin}</td>
                            <td><b>R</b>{price}</td>
                            <td>
                                <button className="btn-primary">Modify</button>
                            </td>
                            <td>
                                <button className="btn-danger" onClick={() => {
                                    handleOnDelete(id);
                                }}>Delete
                                </button>
                            </td>
                        </tr>;
                    })}
                    </tbody>
                </table>
            </Fragment>) : <Spinner/>}
        </div>
    );
};

Trips.propTypes = {
    data: PropTypes.array.isRequired,
};

export default Trips;
