import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";


export const Nutritioncard = (props) => {

    const { store, actions } = useContext(Context);

    const [show, setShow] = useState(true);

    const [randomNum, setRandomNum] = useState(0)
    let nutrition = store.nutrition[randomNum];

    function getRandomInt() {
        return Math.floor(Math.random() * 5);
    }


    useEffect(() => {
        setRandomNum(getRandomInt())
    }, []);


    console.log("nutrition", nutrition);
    console.log("randomNum", randomNum);
    return (
        <div>
            <Link className="linnk" to={{ pathname: "/nutritionalfacts/" + randomNum, state: { props } }}>
                <div className="short-card card m-3" style={{ width: "18rem" }} >
                    <h4 className="card-header black1">Nutritional Fact Of The Day</h4>
                    <div className="card-body">
                        {show && (
                            <div className="card-body">
                                {store.nutrition.length > 0 && (

                                    <p className="black1">
                                        {nutrition && nutrition.sample}
                                    </p>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </Link>
        </div>)
}


Nutritioncard.propTypes = {
    id: PropTypes.number
}


