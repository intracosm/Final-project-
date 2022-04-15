import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/dashboard.css";
import { Context } from "../store/appContext";

export const Longcard = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container">


            <div className="bigDiv long-card card ms-3 mt-2 card-border dash-card" style={{ width: "50rem" }}>
                <div className="card-body">

                    <span className="appoint-span">
                        <i className="fas fa-tasks appoint-icon"></i>
                    </span>
                    <h5 className="pt-2 mb-4">Upcoming Appointments 🗓️</h5>
                    {store.appointments.map((appointment, index) => {
                        console.log(appointment.start_date.toString());
                        return (
                            <div key={index} className="appoint-margin">
                                <h5 className="card-title ms-3">{appointment.text}</h5>
                                <p className="card-text ms-5"><strong>From:</strong> {appointment.start_date.toString()}</p>
                                <p className="card-text ms-5"><strong>Until:</strong> {appointment.end_date.toString()}</p>
                            </div>
                        );
                    })}
                </div>

                <Link className="linnk" to="/planner">
                    <button className="editBtn btn btn-primary d-flex justify-content-between">
                        Edit appointment
                    </button>
                </Link>
            </div>

        </div>
    );
};