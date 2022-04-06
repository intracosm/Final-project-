import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import { Context } from "../store/appContext";


export const Exercisecard = (props) => {

    const { store, actions } = useContext(Context);
    let exercises = store.exercises[getRandomInt()];
    const [show, setShow] = useState(true);

    function getRandomInt() {
        return Math.floor(Math.random() * 1327);
    }

    return (
        <div className="short-card card m-3" style={{ width: "18rem" }} >
            <h4 className="card-header">Exercise Log</h4>
            <div className="card-body">
                {show && (
                    <div className="card-body">
                        {store.exercises.length > 0 && (
                            <Link className="cardbutton" to="/exercises"><p>
                                {exercises.name}
                            </p></Link>
                        )}
                    </div>
                )}
            </div>
        </div >
    )
}

// Shortcard.propTypes = {
//     title: propTypes.string,
//     date: propTypes.string,
//     body: propTypes.string
// }