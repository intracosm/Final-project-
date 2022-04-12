import React, { useState, useEffect } from "react";
//  landing page to have name of project with info on what it does, info about the group and some screenshots of the medication
import reactRouterDom from "react-router-dom";
//import react into the bundle
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";

//include your index.scss file into the bundle

// styles from devextreme 
import 'devextreme/dist/css/dx.light.css';
//import your own components


export const LandingPage = () => {
    return (
        <div className="app-wrapper">
            <Navbar />
            <div className="intro-logo jumbo-bg">
                <h1>Life Hack</h1>
                <h3>'Success is the progressive realization of predetermined, worthwhile, personal goals'</h3>

                <div className="login-button">
                    <Link to="/patientlogin">
                        <button className="pt-login-btn btn btn-primary">Login</button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

