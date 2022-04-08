import React, { useState, useEffect, useContext } from "react";
import Form from "react-bootstrap/Form";
import { Context } from "../store/appContext";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../../styles/patientlogin.css"

// remake this component without using bootstrap react 


export const PatientLogin = () => {
    const { username, setUsername } = useState("");
    const { password, setPassword } = useState("");
    const { store, actions } = useContext(Context);


    return (

        <div className="user col-sm-6">
            <div className="d-flex flex-column justify-content-center">
                <h1 className="pt-login text-center">Patient login</h1>
                <input placeholder="username" onChange={(e) => setUsername(e.target.value)} type="text"></input>
                <input placeholder="password" onChange={(e) => setPassword(e.target.value)} type="text"></input>
                <Link to="/dashboard">
                    <button className="pt-login-btn btn btn-primary">login</button>
                </Link>
            </div>
        </div>




    )
}