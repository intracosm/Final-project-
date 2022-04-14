import React from "react";
import { Link } from "react-router-dom";
import "../../styles/dashboard.css"


export const Longcard = () => {


    return (
        <div className="bigDiv long-card card ms-3 mt-2 card-border dash-card" style={{ width: "45rem", Maxheight: "80%" }}>

            <div className="card-body">
                <span className="appoint-span"><i className="fas fa-tasks appoint-icon"></i></span>
                <div className="appoint-margin">
                    <h5>Upcoming Appointments 🗓️</h5>
                    <h7 className="card-title ms-3">Appointment title</h7>
                    <p className="card-text ms-5">Date and time</p>
                </div>
            </div>

            <div className="card-body">
                <div className="appoint-margin">
                    <h7 className="card-title ms-5">Appointment title</h7>
                    <p className="card-text ms-5">Date and time</p>
                </div>
            </div>
            <Link to="/planner">
                <button className=" editBtn btn btn-primary d-flex justify-content-between">Edit appointments</button>
            </Link>
        </div>
    )
}
