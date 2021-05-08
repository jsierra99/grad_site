import React, { useState } from 'react';
import "./header.scss";

const Header = () => 
{
    const [show, setShow] = useState(false)

    return (
        <header className={show ? "nav_down" : ""}>
            <h3><span>grad </span>school</h3>

            <div className="ham_nav" onClick={() => setShow(!show)}>
                <div className="line_1"></div>
                <div className="line_2"></div>
                <div className="line_3"></div>
            </div>
            <nav>
                <ul>
                    <li><a href="#home">home</a></li>
                    <li><a href="#about">about us</a></li>
                    <li><a href="#courses">courses</a></li>
                    <li><a href="#contact">contact</a></li>
                    <li><a href="#external">external</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
