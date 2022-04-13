import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/style.css"


export const Header = () => {
    return (
        <div className="intro-logo jumbo-bg">
            <h1>Life Hack</h1>
            <h3>'Success is the progressive realization of predetermined, worthwhile, personal goals'</h3>
            <img
                src="https://bootstrapmade.com/demo/themes/eStartup/img/hero-img.png"
                className=""
                alt=""
            />
            <div className="intro-button">
                <a href="">Get Started</a>
            </div>


            <div className="company-icons">
                <span className="company-icons__item">
                    <i className="fab fa-apple" />
                    app store
                </span>
                <span className="company-icons__item">
                    <i className="fab fa-google-play" />
                    google play
                </span>
                <span className="company-icons__item">
                    <i className="fab fa-windows" />
                    windows
                </span>
            </div>
        </div>
    )
}