import React from 'react';
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import "./contact.scss";
import map from "../img/map.jpg"

const Contact = () => 
{
    return (
        <section className="contact">
            <div className="container">
                <h2>Let's Keep In Touch</h2>
                <div className="grid_contact">
                    <div className="contact1">
                        <input type="text" placeholder="Your Name" />
                        <input type="email" placeholder="Your Email" />
                        <textarea placeholder="Your message..." rows="15" />
                        <button className="btn message">send message now</button>
                    </div>
                    <img src={map} />
                </div>
            </div>
        </section>
    )
}

export default Contact
