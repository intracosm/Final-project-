import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/style.css"


export const Header = () => {
    return (
        <header className="d-flex flex-column">
            <div className="header-img bg-dark" id="cf">
                <div className="header-background">
                    <div className="container">
                        <div className="d-flex justify-content-start ms-5 mt-5">
                            <h1 className="white1">Lets us help you <span className="red1 font2">HACK</span> into your <span className="">HEALTH</span></h1>
                        </div>
                        <div>
                            <h3 className="header-quote d-flex justify-content-start ms-5">“Setting goals is the first step in turning the invisible into the visible.”</h3>
                        </div>
                        <div className="">
                            <Link className="linnk landing-btn" to="/patientlogin">
                                <button className="ms-5 btn exer-button">Begin Here</button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>





        </header>
    )
}