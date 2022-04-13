import React, { useState, useEffect } from "react";
//  landing page to have name of project with info on what it does, info about the group and some screenshots of the medication
import reactRouterDom from "react-router-dom";
//import react into the bundle
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";

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
                <h1>Life Hack</h1>
                <h3>'Success is the progressive realization of predetermined, worthwhile, personal goals'</h3>

                <div id="cf">
                    <img class="bottom" src="https://images.unsplash.com/photo-1445384763658-0400939829cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />

                    <img class="top" src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80" />

                    <img class="top" src="https://images.unsplash.com/photo-1577368211130-4bbd0181ddf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=860&q=80" />
                </div>

                <div className="login-button">
                    <Link to="/patientlogin">
                        <button className="pt-login-btn btn btn-primary">Login</button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

