import React, {useEffect, useState} from 'react';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Trips from "./pages/Trips";
import axios from "axios";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './App.css';

const App = () => {
    const [trips, setTrips] = useState([]);

    const getTrips = () => {
        axios.get('api/flightbookings')
            .then(res => setTrips(res.data))
            .catch(err => console.error(err));
    };

    const handleOnSubmit = (e, booking) => {
        console.log(`Submitted -> ${booking}`);
        e.preventDefault();

        axios.post('api/flightbookings', booking)
            .then(res => console.log(res))
            .catch(err => console.error(err));
    };

    useEffect(() => {
        getTrips();
    }, []);


    return (
        <Router>
            <NavBar/>
            <Switch>
                <Route exact path="/trips" component={() => <Trips data={trips} />}/>
                <Route exact path="/" component={() => <Main onSubmit={handleOnSubmit}/>}/>
            </Switch>
            <Footer/>
        </Router>
    );
};

export default App;