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
                <Header />
                <div id="cf">

                </div>
            </div>
        </div>
    )
}

