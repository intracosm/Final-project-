import { Button } from "bootstrap";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";

import { Context } from "../store/appContext";

export const Exercise = () => {
    const { store, actions } = useContext(Context);

    const [exercises, setExercises] = useState(store.exercises)

    useEffect(() => {
        setExercises(store.exercises)
    }, [store.exercises]);






    return (
        <div>
            <div className="nav1">
                <Navbar />
            </div>
            <div className="row">
                {exercises.map((item, index) => {
                    return (
                        <div className="col-md-4 d-flex justify-content-center" key={index}>
                            <div className="card1 card m-3" style={{ width: "18rem" }}>
                                <h5 className="card-header">{item.name}</h5>
                                <div className="card-body">
                                    <button>Click to View Exercise</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};
