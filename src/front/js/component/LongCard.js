import React from "react";
import { Link } from "react-router-dom";
import "../../styles/dashboard.css"


export const Longcard = () => {


    return (
        <div className="bigDiv long-card card ms-3 mt-2 card-border dash-card" style={{ width: "45rem", Maxheight: "80%" }}>
            <h5 className="card-header">Upcoming Appointments</h5>
            <div className="card-body">
                <h5 className="card-title">Appointment text</h5>
                <p className="card-text">Date and time</p>
            </div>

            <div className="card-body">
                <h5 className="card-title">Appointment text</h5>
                <p className="card-text">Date and time</p>
            </div>
            <Link to="/planner">
                <button className=" editBtn btn btn-primary d-flex justify-content-between">Edit appointments</button>
            </Link>
        </div>
    )
}
