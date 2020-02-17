import React from 'react';

const NavBar = () => {
    return (
        <header>
            <div className="logo">
                <i className="fab fa-accusoft"/>
                Century Airlines
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