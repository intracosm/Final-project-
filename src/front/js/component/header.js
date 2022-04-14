import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/style.css"


export const Header = () => {
    return (
        <header className="d-flex flex-column">
            <div className="carousel-wrapper" id="cf">
                <div className="d-flex justify-content-start ms-5 mt-5"><Link to="/"> <i className="fab fa-hackerrank red1 life-hack">Life<span className="black1">Hack</span></i></Link></div>
                <h3 className="header-quote d-flex justify-content-start ms-5">'Success is the progressive realization of predetermined, worthwhile, personal goals'</h3>
                <div className="login-button d-flex justify-content-start ms-5 ">
                    <Link to="/patientlogin">
                        <button className="pt-login-btn btn btn-primary d-flex justify-content-center">Login</button>
                    </Link>
                </div>
            </div>





        </header>
    )
}