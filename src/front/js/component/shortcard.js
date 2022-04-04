import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


export const Shortcard = (props) => {

    return (
        <div className="short-card card m-3" style={{ width: "18rem", height: "8rem" }}>
            <h5 className="card-header">{props.title}</h5>
            <div className="card-body">
                <h5 className="card-title">{props.date}</h5>
                <p className="card-text">{props.body}</p>
            </div>
        </div>
    )
}

Shortcard.PropTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    body: PropTypes.string
}