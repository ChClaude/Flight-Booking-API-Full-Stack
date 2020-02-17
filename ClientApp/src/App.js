import React, { Fragment } from 'react';
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import axios from "axios";

import './App.css';

const App = () => {

    const handleOnSubmit = (e, booking) => {
        //console.log(booking);
        e.preventDefault();

        axios.post('api/flightbookings', booking)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    return (
        <Fragment>
            <NavBar />
            <Main onSubmit={handleOnSubmit} />
            <Footer />
        </Fragment>
    );
};

export default App;
