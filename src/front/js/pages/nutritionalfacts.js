import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";

import { Context } from "../store/appContext";

export const Nutritionalfacts = () => {
    const location = useLocation();

    const { store, actions } = useContext(Context);

    const [nutrition, setNutrition] = useState(store.nutrition)

    useEffect(() => {
        setNutrition(store.nutrition)
    }, [store.nutrition]);






    return (
        <div>
            <div key={index} className="card mb-3" style="max-width: 540px;">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="..." className="img-fluid rounded-start" alt="..."></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{ }</h5>
                            <p className="card-text">{ }</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



