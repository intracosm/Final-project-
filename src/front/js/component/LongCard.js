import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/dashboard.css";
import { Context } from "../store/appContext";

export const Longcard = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container">
            <h5>Upcoming Appointments 🗓️</h5>
            {store.appointments.map((appointment, index) => {
                console.log(appointment.start_date.toString());
                return (
                    <div
                        className="bigDiv long-card card ms-3 mt-2 card-border dash-card"
                        style={{ width: "100%", maxHeight: "80%" }}
                        key={index}
                    >
                        <div className="card-body">
                            <span className="appoint-span">
                                <i className="fas fa-tasks appoint-icon"></i>
                            </span>
                            <div className="appoint-margin">
                                <h5 className="card-title ms-3">{appointment.text}</h5>
                                <p className="card-text ms-5">{appointment.start_date.toString()}</p>
                                <p className="card-text ms-5">{appointment.end_date.toString()}</p>
                            </div>
                        </div>

                        <Link to="/planner">
                            <button className="editBtn btn btn-primary d-flex justify-content-between">
                                Edit appointment
                            </button>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};
