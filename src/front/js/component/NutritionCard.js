import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";


export const Nutritioncard = (props) => {

    const { store, actions } = useContext(Context);

    const [show, setShow] = useState(true);

    // const [randomNum, setRandomNum] = useState(0)
    // let nutrition = store.nutrition[randomNum];

    // function getRandomInt() {
    //     return Math.floor(Math.random() * 5);
    // }

    // setRandomNum(getRandomInt())



    return (
        <div>
            <Link className="linnk" to={{ pathname: "/nutritionalfacts/" + store.factoftheday.id, state: { props } }}>
                <div className="short-card card m-3 card-border dash-card" style={{ width: "20rem" }} >

                    <div className="card-body">
                        <span className="nutri-span"><i className="fas fa-leaf nutri-icon"></i></span>
                        <div className="nutri-margin">
                            <h5 className="black1">Nutritional Fact Of The Day  🥕</h5>
                            {store.nutrition.length > 0 && (

                                <p className="black1 d-flex justify-content-center">
                                    {store.factoftheday && store.factoftheday.sample}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </Link>
        </div>)
}


Nutritioncard.propTypes = {
    id: PropTypes.number
}


