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

        <div className="user login-wrapper col-sm-6">

            <div className="form d-flex flex-column justify-content-center">

                <img src="https://thumbs.dreamstime.com/b/senior-man-winning-computer-game-16618154.jpg" alt=""></img>

                <h2 className="pt-login text-center">Login</h2>

                <div className="input-group d-flex flex-column"  >
                    User Name <input id="loginUser" onChange={(e) => setUsername(e.target.value)} type="text"></input>
                </div>

                <div className="input-group d-flex flex-column">
                    Password <input type="password" id="loginPassword" onChange={(e) => setPassword(e.target.value)} />
                </div>

                <Link to="/dashboard">
                    <button className="pt-login-btn btn btn-primary">login</button>
                </Link>

            </div>
        </div>




    )
}