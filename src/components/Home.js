import React from 'react';
import "./home.scss";
import vid from "../video/course-video.mp4";


const Home = () => 
{
    return (
        <section class="home">
            <div class="video">
                <video autoPlay muted loop>
                    <source src={vid} type="video/mp4" />
                </video>
            </div>
            <div class="title_wrap">
                <h4>graduate school of management</h4>
                <h1><span>your</span> classroom</h1>
                <button class="btn">discover more</button>
            </div>
            <div className="container">
                <div className="grid_home">
                    <div className="courses">
                        <div className="svgs">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"/>
                            </svg>
                            <h3>all courses</h3>
                        </div>
                        <div className="paragraph">
                            <p>Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet. Donec maximus 
                            elementum ex. Cras convallis ex rhoncus, laoreet libero eu, vehicula libero.</p>
                        </div>
                        <div className="more_info">
                            <li><a href="/home">more info.</a></li>
                        </div>
                    </div>
                    <div className="courses">
                        <div className="svgs">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                <path d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"/>
                            </svg>
                            <h3>virtual class</h3>
                        </div>
                        <div className="paragraph">
                            <p>Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet. Donec maximus 
                            elementum ex. Cras convallis ex rhoncus, laoreet libero eu, vehicula libero.</p>
                        </div>
                        <div className="more_info">
                            <li><a href="/home">details.</a></li>
                        </div>
                    </div>
                    <div className="courses">
                        <div className="svgs">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"/>
                            </svg>
                            <h3>real meeting</h3>
                        </div>
                        <div className="paragraph">
                            <p>Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet. Donec maximus 
                            elementum ex. Cras convallis ex rhoncus, laoreet libero eu, vehicula libero.</p>
                        </div>
                        <div className="more_info">
                            <li><a href="/home">read more.</a></li>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
