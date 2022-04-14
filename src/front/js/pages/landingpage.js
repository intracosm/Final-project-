import React, { useState, useEffect } from "react";
//  landing page to have name of project with info on what it does, info about the group and some screenshots of the medication
import reactRouterDom from "react-router-dom";
//import react into the bundle
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";
import { Header } from "../component/header";

//include your index.scss file into the bundle
import "../../styles/style.css"

// styles from devextreme 
import 'devextreme/dist/css/dx.light.css';
//import your own components


export const LandingPage = () => {
    return (
        <div className="app-wrapper">
            <Navbar />
            <div className="intro-logo jumbo-bg">
                <div><Header /></div>
                <div className="landing-middle-div d-flex justify-content-center">
                    <div className="landing-object">
                        <div className="d-flex justify-content-center"><img className="landing-middle-img" src="https://www.pinclipart.com/picdir/big/159-1597497_calendar-calendar-icon-png-round-clipart.png"></img></div>
                        <div className="d-flex justify-content-center"><h1>Calendar</h1></div>
                        <div className="d-flex justify-content-center"><p className="landing-middle-text d-flex justify-content-center">Hack into your Time by using our calendar, to schedule your appointments and your weekly workouts.</p></div>
                        <div className="">
                            <Link className="linnk landing-btn d-flex justify-content-center" to="/patientlogin">
                                <button className=" pt-login-btn btn exer-button white1">Begin Here</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <Link className="linnk" to="/patientlogin">
                    <div className="landing-body d-flex justify-content-center mb-5">
                        <div className="landing-body-background d-flex justify-content-center">
                            <div>
                                <div><h1 className="d-flex justify-content-center landing-h1 black1">Workout Tutorials</h1></div>
                                <div className="d-flex justify-content-center landing-text black1"><p>Over 1,000 certified exercises with demonstrations for whether you're at home or on the road.</p></div>
                                <div className="d-flex justify-content-center"><img className="workout-img d-flex justify-content-center" src="https://www.keppnerboxing.com/wp-content/themes/KeppnerBoxing/images/man-doing-push-ups-with-medicine-ball.png"></img></div>
                            </div>
                        </div>
                        <div className="landing-body-background2 d-flex justify-content-center">
                            <div className="fruit-img">
                                <div className="img-overlay">
                                    <h1 className="white1 d-flex justify-content-center pt-4">Nutritional Information</h1>
                                    <p className="white1 d-flex justify-content-center landing-text2">Healthy facts to help improve diet as well as performance during every day workout.</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </Link>
            </div>
        </div>
    )
}

