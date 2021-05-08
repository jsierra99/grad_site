import React from 'react';
import "./courses.scss";
import courses1 from "../img/courses_1.jpg";
import courses2 from "../img/courses_2.jpg";
import courses3 from "../img/courses_3.jpg";
import courses4 from "../img/courses_4.jpg";
import courses5 from "../img/courses_5.jpg";
import author1 from "../img/author_1.png";
import author2 from "../img/author_2.png";
import author3 from "../img/author_3.png";
import author4 from "../img/author_4.png";
import author5 from "../img/author_5.png";

const Courses = () => 
{
    return (
        <section className="courses">
            <div className="container">
                <h2>Choose Your Course</h2>
                <div className="grid_courses">
                    <div className="courses_1">
                        <img className="course_img" src={courses1} />
                        <div className="courses_info">
                            <h3>digital marketing</h3>
                            <p>you can get free images and videos for your website by visiting SUBLIME Tech, Pixabay, and Pexels.</p>
                            <div className="authors">
                                <img src={author1} />
                                <li className="pay">Pay <span>&#187;</span></li>
                            </div>
                        </div>
                    </div>
                    <div className="courses_1">
                        <img  className="course_img" src={courses2} />
                        <div className="courses_info">
                            <h3>business world</h3>
                            <p>you can get free images and videos for your website by visiting SUBLIME Tech, Pixabay, and Pexels.</p>
                            <div className="authors">
                                <img src={author2} />
                                <li className="free">Free <span>&#187;</span></li>
                            </div>
                        </div>
                    </div>
                    <div className="courses_1">
                        <img  className="course_img" src={courses3} />
                        <div className="courses_info">
                            <h3>media technology</h3>
                            <p>you can get free images and videos for your website by visiting SUBLIME Tech, Pixabay, and Pexels.</p>
                            <div className="authors">
                                <img src={author3} />
                                <li className="pay">Pay <span>&#187;</span></li>
                            </div>
                        </div>
                    </div>
                    <div className="courses_1">
                        <img  className="course_img" src={courses4} />
                        <div className="courses_info">
                            <h3>communications</h3>
                            <p>you can get free images and videos for your website by visiting SUBLIME Tech, Pixabay, and Pexels.</p>
                            <div className="authors">
                                <img src={author4} />
                                <li className="free">Free <span>&#187;</span></li>
                            </div>
                        </div>
                    </div>
                    <div className="courses_1">
                        <img  className="course_img" src={courses5} />
                        <div className="courses_info">
                            <h3>business ethics</h3>
                            <p>you can get free images and videos for your website by visiting SUBLIME Tech, Pixabay, and Pexels.</p>
                            <div className="authors">
                                <img src={author5} />
                                <li className="pay">Pay <span>&#187;</span></li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
    )
};

export default Courses
