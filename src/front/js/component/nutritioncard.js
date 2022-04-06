import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";


export const Nutritioncard = (props) => {

    const { store, actions } = useContext(Context);
    let nutrition = store.nutrition[getRandomInt()];
    const [show, setShow] = useState(true);

    function getRandomInt() {
        return Math.floor(Math.random() * 6);
    }

    return (
        <div className="short-card card m-3" style={{ width: "18rem" }} >
            <h4 className="card-header">Nutritional Fact Of The Day</h4>
            <div className="card-body">
                {show && (
                    <div className="card-body">
                        {store.nutrition.length > 0 && (
                            <p>
                                {nutrition.sample}
                            </p>
                        )}
                    </div>
                )}
            </div>
        </div >)
}
