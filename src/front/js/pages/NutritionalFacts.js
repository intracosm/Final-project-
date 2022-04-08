import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Navbar } from "../component/navbar";

import { Context } from "../store/appContext";

export const Nutritionalfacts = (props) => {
    const location = useLocation();

    const { store, actions } = useContext(Context);

    const [nutrition, setNutrition] = useState(store.nutrition[props.match.params.id])






    console.log("props", props);
    console.log("nutr", nutrition[props.match.params.id]);
    console.log("name", nutrition.name);
    return (
        <div>
            <div className="nav1-nutrition">
                <Navbar />
            </div>
            <div className="d-flex justify-content-center mt-5">
                <div className="card mb-3" style={{ maxWidth: "65%" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="..." className="img-fluid rounded-start" alt="..."></img>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{nutrition.name}</h5>
                                <p className="card-text">{nutrition.body}</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



