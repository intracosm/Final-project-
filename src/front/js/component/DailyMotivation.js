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
        <div className="short-card card m-3 dash-card card-border" style={{ width: "18rem" }}>
            <h4 className="card-header">Daily Motivation</h4>
            {show && (
                <div className="card-body">
                    <h5 className="card-title"></h5>
                    {store.quotes.length > 0 && (
                        <p>
                            "{quote.text}" - {quote.author}
                        </p>
                    )}
                </div>
            )}
        </div>
    )
}

DailyMotivation.propTypes = {
    title: propTypes.string,
    date: propTypes.string,
    body: propTypes.string
}