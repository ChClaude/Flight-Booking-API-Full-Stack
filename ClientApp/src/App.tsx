import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import axios from 'axios';

import './custom.css'

export default () => {
    axios('/api/flightbookings')
        .then((res) => console.log(res))
        .catch((err) => console.error(err));

    console.log("This is a test");

    return (<Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
    </Layout>);
        
}
