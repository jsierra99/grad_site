import React from 'react';
import "./video.scss";
import videoThumb from "../img/main-thumb.png";

const Video = () => {
    return (
        <section className="video">
            <div className="container">
                <div className="grid_video">
                    <div className="video_1">
                        <p className="title_video">our presentation is for you</p>
                        <h1>Watch the video to learn more <span>about Grad School</span></h1>
                        <p className="video_info">You are NOT allowed to redistribute this template ZIP file on any template collection website. 
                        However, you can use this template to convert into a specific theme for any kind of CMS platform such as WordPress. You may 
                        <span> contact TemplateMo</span> for details.</p>
                        <p className="video_info">Suspendisse tincidunt, magna ut finibus rutrum, libero dolor euismod odio, nec 
                        interdum quam felis non ante.</p>
                        <button className="btn external_url"><a href="https://www.youtube.com" target="_blank">External URL</a></button> 
                    </div>
                    <figure>
                        <h2>Power Play</h2>
                        <a className="play"  href="https://www.youtube.com/watch?v=-kLMdYoGsU4&t=7s&ab_channel=RiseAbove" target="_blank"><img src={videoThumb} /></a>
                    </figure>
                    
                </div>
            </div>
        </section>
    )
}

export default Video
