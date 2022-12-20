import React from 'react'
import "./mainBar.css"
import { ArrowForwardIos } from "@material-ui/icons"
import { useState } from "react"
export default function MainBar() {
    const [isHovering1, setIsHovering1] = useState(false);
    const [isHovering2, setIsHovering2] = useState(false);
    const [isHovering3, setIsHovering3] = useState(false);


    const handleMouseOver1 = () => {
        setIsHovering1(true);
    };

    const handleMouseOut1 = () => {
        setIsHovering1(false);
    };
    const handleMouseOver2 = () => {
        setIsHovering2(true);
    };

    const handleMouseOut2 = () => {
        setIsHovering2(false);
    };
    const handleMouseOver3 = () => {
        setIsHovering3(true);
    };

    const handleMouseOut3 = () => {
        setIsHovering3(false);
    };
    return (
        <div className='mainBarContainer'>
            <h2 className='workoutHeading'>Runner's Workout</h2>
            <div className="workoutImages">

                <div className="imgWrapper" onMouseOver={handleMouseOver1} onMouseOut={handleMouseOut1} >
                    <img className='workoutImage leftImg' alt="workoutImage" src="https://images.pexels.com/photos/2780762/pexels-photo-2780762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <p className='imageHeading'>STRENGTH</p>
                    <ArrowForwardIos className={isHovering1 ? "arrowForward" : "hideArrowBtn"} />
                </div>

                <div className="imgWrapper" onMouseOver={handleMouseOver2} onMouseOut={handleMouseOut2}>
                    <img className='workoutImage' alt="workoutImage" src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHdvcmtvdXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                    <p className='imageHeading'>MOBILITY</p>
                    <ArrowForwardIos className={isHovering2 ? "arrowForward" : "hideArrowBtn"} />
                </div>

                <div className={isHovering2 || isHovering1 ? "imgShrink" : "imgWrapperRight"} onMouseOver={handleMouseOver3} onMouseOut={handleMouseOut3}>
                    <img className='workoutImage rightImg' alt="workoutImage" src="https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <p className='imageHeading'>DRILLS</p>
                    <ArrowForwardIos className={isHovering3 ? "arrowForward" : "hideArrowBtn"} />
                </div>

            </div>
        </div >
    )
}
