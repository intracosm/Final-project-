import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import { Context } from "../store/appContext";


export const DailyMotivation = (props) => {

    const { store, actions } = useContext(Context);
    let quote = store.quotes[getRandomInt()];
    const [show, setShow] = useState(true);

    function getRandomInt() {
        return Math.floor(Math.random() * 1643);
    }


    return (
        <div className="short-card card m-3 dash-card card-border" style={{ width: "20rem" }}>
            <div className="card-body">
                <span className="moti-span"><i className="fas fa-mountain moti-icon"></i></span>
                <div className="moti-margin">
                    <h5>Daily Motivation</h5>
                    {store.quotes.length > 0 && (
                        <p className="d-flex justify-content-center">
                            "{quote.text}" - {quote.author}
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}

DailyMotivation.propTypes = {
    title: propTypes.string,
    date: propTypes.string,
    body: propTypes.string
}