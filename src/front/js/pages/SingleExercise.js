import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const SingleExercise = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="dashpage">
            <div className="nav1-nutrition">
                <Navbar />
            </div>
            <div className="d-flex justify-content-center mt-5">
                <div className="card mb-3" style={{ maxWidth: "65%" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                        </div>

                        <div className="card-body">
                            <h2 className="card-title">{nutrition.name}</h2>
                            <p className="card-text body-line"><img src={nutrition.url} style={{ width: "25rem" }} className="img-fluid rounded-start url-pic" alt="..."></img>
                                {nutrition.body}</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};
