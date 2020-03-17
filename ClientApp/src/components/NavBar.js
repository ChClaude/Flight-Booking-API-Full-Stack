import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <header>
            <div className="logo">
                <Link to="/">
                    <i className="fab fa-accusoft"/>
                    Century Airlines
                </Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#">Plan & Book</a>
                    </li>
                    <li>
                        <a href="#">Fly Different</a>
                    </li>
                    <li>
                        <a href="#">Discover</a>
                    </li>
                    <li>
                        <a href="/trips">All Trips*</a>
                    </li>
                    <li>
                        <a href="#">Sign up</a>
                    </li>
                    <li>
                        <button className="btn-round">Sign in <i className="fas fa-user"/></button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;