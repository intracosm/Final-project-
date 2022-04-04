import React from "react";
import { Link } from "react-router-dom";

export const Longcard = () => {

    return (
        <div className="long-card card mt-2" style={{ width: "40rem", Maxheight: "80%" }}>
            <h5 className="card-header">Upcoming Appointments</h5>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}