import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";


export const DailyMotivation = (props) => {

    const { store, actions } = useContext(Context);
    let quote = store.quotes[getRandomInt()];
    const [show, setShow] = useState(true);

    function getRandomInt() {
        return Math.floor(Math.random() * 1643);
    }


    return (
        <div className="short-card card m-3" style={{ width: "18rem" }}>
            <h5 className="card-header">Daily Motivation</h5>
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

DailyMotivation.PropTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    body: PropTypes.string
}