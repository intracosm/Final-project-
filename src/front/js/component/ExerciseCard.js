import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import { Context } from "../store/appContext";


export const Exercisecard = (props) => {

    const { store, actions } = useContext(Context);
    let exercises = store.exercises[getRandomInt()];
    const [show, setShow] = useState(true);
    const [favlist, setFavlist] = useState([]);

    function getRandomInt() {
        return Math.floor(Math.random() * 1327);
    }

    const Trash = (index) => {
        store.favorites.filter((item, i) => i != index)
    }

    useEffect(() => {

    }, [store.favorites]);





    return (
        <div>
            <Link className="linnk" to="/exercises">
                <div className="short-card card m-3 card-border dash-card" style={{ width: "21rem" }} >

                    <div className="card-body">

                        <span className="span-icon"><i className="fas fa-dumbbell white-icon"></i></span>
                        <div className="exer-margin">
                            <h5 className="black1">Weekly Exercise Log 💪</h5>
                            <p className="black1">Lets Start This Week Off Strong </p>
                            <ul className="list-group">
                                {store.favorites.map((fav, index) => {
                                    return (<Link className="linnk" to={`/single-exercise/${fav.id}`}><li id="black1" className="black1 list-group-item" key={index}>{fav.name}</li></Link>
                                    )
                                })}
                            </ul>
                            {/* {show && (
                            <div className="card-body">
                                {store.exercises.length > 0 && (
                                    <p className="black1">
                                        {exercises.name}
                                    </p>
                                )}
                            </div>
                        )} */}
                        </div>
                    </div>
                </div >
            </Link>
        </div>
    )
}

// Shortcard.propTypes = {
//     title: propTypes.string,
//     date: propTypes.string,
//     body: propTypes.string
// }


