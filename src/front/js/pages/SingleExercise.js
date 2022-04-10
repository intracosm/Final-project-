import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Navbar } from "../component/navbar";
import { Context } from "../store/appContext";

export const SingleExercise = () => {
    const { store, actions } = useContext(Context);



    const params = useParams();

    const item = store[params.index];
    console.log("params", params);
    let array = [];

    for (let key in item) {
        let array2 = [];
        array2.push(key, item[key]);
        array.push(array2);
    }
    console.log(array)








    return (
        <div className="dashpage">
            <Navbar />
            <div className="d-flex justify-content-center mt-5">
                <div className="card mb-3" style={{ maxWidth: "65%" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                        </div>

                        <div className="card-body">
                            <h2 className="card-title">fxccgfchchgcg</h2>
                            <p className="card-text body-line"><img style={{ width: "25rem" }} className="img-fluid rounded-start url-pic" alt="..."></img>
                                fgdxgcghvjvvbhkbkhkjkhb</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};
