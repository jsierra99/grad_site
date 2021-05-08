import React from 'react';
import "./countdown.scss";

const Countdown = () => 
{
    return (
        <section className="countdown">
            <div className="container">
                <div className="grid_countdown">
                    <div className="countdown_title">
                        <h2>Take <span>any online course</span> and win $326 for your next class</h2>
                        <div className="grid_seconds">
                            <div className="seconds">
                                <h1>243</h1>
                                <p>days</p>
                            </div>
                            <div className="seconds">
                                <h1>20</h1>
                                <p>hours</p>
                            </div>
                            <div className="seconds">
                                <h1>44</h1>
                                <p>minutes</p>
                            </div>
                            <div className="seconds">
                                <h1>20</h1>
                                <p>seconds</p>
                            </div>
                        </div>
                    </div>
                    <div className="countdown_form">
                        <div className="form_info">
                            <p>Register your free account and get immediate access to online courses</p>
                        </div>
                        <div className="form">
                            <input type="text" placeholder="Your Name" />
                            <input type="email" placeholder="Your Email" />
                            <input type="number" placeholder="Your Phone Number" />
                            <button className="btn btn_form">get it now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Countdown
