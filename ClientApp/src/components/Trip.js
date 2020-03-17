import React from 'react';
import axios from "axios";
import Form from "./Form";

const Trip = ({trip}) => {



    const handleOnUpdate = (id, trip) => {
        axios.put(`api/flightbookings/${id}`, trip)
            .then(res => console.log(`Deleted: ${res}`))
            .catch(err => err);
    };

    return (
        <div className="trip container card">
            <div className="card-header">
                <span>{trip.departure} - {trip.destination}</span>
                <span>Reservation ID {trip.id}</span>
            </div>
            <div className="card-body">
                <Form onSubmit={handleOnUpdate}/>
            </div>
            <div className="card-footer">
                Footer
            </div>
        </div>
    );
};

export default Trip;
