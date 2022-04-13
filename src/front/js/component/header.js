import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/style.css"


export const Header = () => {
    return (
        <div className="container">
            <h1>Life Hack</h1>
            <h3 className="header-quote">'Success is the progressive realization of predetermined, worthwhile, personal goals'</h3>

            <div className="carousel-wrapper" id="cf">
                <img class="cf-photos" src="https://images.unsplash.com/photo-1445384763658-0400939829cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />

                <img class="cf-photos" src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80" />

                <img class="cf-photos" src="https://images.unsplash.com/photo-1577368211130-4bbd0181ddf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=860&q=80" />

            </div>
            <div className="login-button">
                <Link to="/patientlogin">
                    <button className="pt-login-btn btn btn-primary">Login</button>
                </Link>
            </div>
        </div>
    )
}