import React, {Fragment} from 'react';
import Form from "./Form";
import PropTypes from "prop-types";

const Main = (props) => {
    return (
        <Fragment>
            <section className="main">
                <div className="overlay"/>
                <div className="container">
                    <h1>
                        <span>Hello</span> Where do you want to explore?
                    </h1>
                    <div className="btn-group">
                        <button className="btn">Book a Flight</button>
                        <button className="btn">Check-in ? Manage booking</button>
                        <button className="btn">Flight status</button>
                    </div>
                    <Form onSubmit={props.onSubmit} />
                </div>
            </section>
        </Fragment>
    );
};

Main.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default Main;
