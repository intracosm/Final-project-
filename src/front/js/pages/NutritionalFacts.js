import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Nav2 } from "../component/nav2";
import "../../styles/home.css";

import { Context } from "../store/appContext";

export const Nutritionalfacts = (props) => {
    const location = useLocation();

    const { store, actions } = useContext(Context);

    const [nutrition, setNutrition] = useState(store.nutrition[props.match.params.id])






    console.log("props", props);
    console.log("nutr", nutrition[props.match.params.id]);
    console.log("name", nutrition.name);
    return (
        <div className="dashpage">

            <Nav2 />

            <div className="nbkg d-flex justify-content-center">
                <div className="opacity" >
                    <div className="card mb-3 nutritional-border" style={{ maxWidth: "65%" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                            </div>

                            <div className="card-body">
                                <h1 className="card-title">{nutrition.name}</h1>
                                <p className="card-text body-line"><img src={nutrition.url} style={{ width: "25rem" }} className="img-fluid rounded-start url-pic image-nutrition" alt="..."></img>
                                    {nutrition.body}</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};



