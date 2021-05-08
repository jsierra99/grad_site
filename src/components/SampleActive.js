import React, { useState } from 'react';
import "./sampleActive.scss";
import images1 from "../img/about1.png";
import images2 from "../img/about2.png";
import images3 from "../img/about3.png";

const SampleActive = () => 
{
    const [appState, setAppState] = useState
    (
        {
            activeObj: null,
            objs: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
        }
    );

    const toggleActive = index =>
    {
        setAppState({...appState, activeObj: appState.objs[index]});
    }

    const toggleActiveStyles = index =>
    {
        return appState.objs[index] === appState.activeObj ? `sample1 active` : "sample1 inactive";
    };

    return (
        <section className="sample">
            <div className="container">
                <div className="grid_sample">
                    {appState.objs.map((x, index) => (
                       <div className={toggleActiveStyles(index)}
                           key={index}
                           onClick={() =>
                           {
                               toggleActive(index);
                           }}
                        >
                            <h1>Best Education</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"/>
                            </svg>
                            <h2 className={toggleActiveStyles(index) === `sample1 active` ? `image${index}` : "h2s"}>{toggleActiveStyles(index)}</h2>
                            <img src={images1} style={{display: toggleActiveStyles(index) === `sample1 active` ? "block" : "none"}} />
                            <img src={images2} style={{display: toggleActiveStyles(index) === `sample1 active` ? "block" : "none"}}/>
                            <img src={images3} style={{display: toggleActiveStyles(index) === `sample1 active` ? "block" : "none"}}/>
                       </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SampleActive
