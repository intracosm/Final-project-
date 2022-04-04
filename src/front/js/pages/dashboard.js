import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";
import { Context } from "../store/appContext";
import "../../styles/dashboard.css"

import { Card } from "../component/card";
import { Longcard } from "../component/longcard";
import { Shortcard } from "../component/shortcard";



export const Dashboard = () => {
    const { store, actions } = useContext(Context);
    const [show, setShow] = useState(true);
    let quote = store.quotes[getRandomInt()];

    function getRandomInt() {
        return Math.floor(Math.random() * 1643);
    }


    return (
        <div className="container-fluid">

            <div className="nav1">
                <Navbar />
            </div>
            <div className="dashpage d-flex justify-content-between">
                <div className="card1-div">
                    <Card />
                    <Card />
                    <Card />
                    <Card />

                </div>
                <div className="long-card-div">
                    <Longcard />
                </div>
                {show && (
                    <div className="short-card-div">
                        <Shortcard
                            title="Nutritional Fact Of The Day" />
                        <Shortcard
                            title="Daily Motivation" />
                        "{quote.text}" - {quote.author}
                        <Shortcard
                            title="Exercise Log" />
                    </div>
                )}
            </div>

        </div>
    );
};
{/* <Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link> */}