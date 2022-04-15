import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/style.css"

// remake this component without using bootstrap react 


export const PatientLogin = () => {
    const { username, setUsername } = useState("");
    const { password, setPassword } = useState("");
    const { store, actions } = useContext(Context);


    return (

        <div className="login-img login-wrapper col-sm-6">
            <div className="login-overlay d-flex justify-content-center">

                <div className="form d-flex flex-column justify-content-center">



                    <p className="text2 white1">Please Login</p>

                    <div className="input-group d-flex flex-column"  >
                        User Name <input id="loginUser" onChange={(e) => setUsername(e.target.value)} type="text"></input>
                    </div>

                    <div className="input-group d-flex flex-column">
                        Password <input type="password" id="loginPassword" onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <Link to="/dashboard">
                        <button className="pt-login-btn btn btn-primary">Login</button>
                    </Link>

                </div>
            </div>
        </div>




    )
}