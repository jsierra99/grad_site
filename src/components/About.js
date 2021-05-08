import React, { useState } from 'react';
import "./about.scss";
import about1 from "../img/about1.png";
import about2 from "../img/about2.png";
import about3 from "../img/about3.png";

const About = () => 
{
    const titleTop =
    [
        "best education", "top management", "quality meeting"
    ];

    const titleBottom =
    [
        "best education", "top level", "quality meeting"
    ];

    const aboutImages =
    [
        about1, about2, about3
    ];

    const [appState, setAppState] = useState
    (
        {
            activeObject: null,
            object: [{id: 1}, {id:2}, {id:3}]
        }
    );

    const toggleActive = index =>
    {
        setAppState({...appState, activeObject: appState.object[index]});
    };

    const toggleActiveStyles = index =>
    {
        return appState.activeObject === appState.object[index] ? "square active" : "square inactive";
    };

    const toggleActiveDisplay = index =>
    {
        return appState.activeObject === appState.object[index] ? "block" : "none";
    };

    return (
        <section className="about">
            <div className="container">
                <h2>Why choose Grad School?</h2>
                <div className="grid_choices">
                    {
                        appState.object.map ((x, y) => (
                            <div 
                                className="choice1"
                                key={y}
                                onClick={() =>
                                {
                                    toggleActive(y)
                                }}
                            >
                                <h4>{titleTop[y]}</h4>
                                <svg className={toggleActiveStyles(y)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"/>
                                </svg>
                            </div>
                        ))
                    }
                </div>
                
                {
                    appState.object.map((a, b) => (
                        <div
                            className="grid_images"
                            key={b}
                            style={{display:toggleActiveDisplay(b)}}
                        >
                            <div className="images1">
                                <img src={aboutImages[b]} />
                                <div className="about_info">
                                    <h1>{titleBottom[b]}</h1>
                                    <p>Grad School is free educational HTML template with Bootstrap 4.5.2 CSS layout. Feel free to use it for 
                                        educational or commercial purposes. You may want to make <span>a little donation</span> to TemplateMo. Please tell your 
                                        friends about us. Thank you.</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default About
