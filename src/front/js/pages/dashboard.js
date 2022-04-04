import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";
import { Context } from "../store/appContext";
import "../../styles/dashboard.css"
import { DailyMotivation } from "../component/dailymotivation";

import { Card } from "../component/card";
import { Longcard } from "../component/longcard";
import { Shortcard } from "../component/shortcard";



export const Dashboard = () => {
    const { store, actions } = useContext(Context);

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
                <div className="short-card-div">
                    <Shortcard
                        title="Nutritional Fact Of The Day" />
                    <DailyMotivation />

                    <Shortcard
                        title="Exercise Log" />
                </div>

            </div>

        </div>
    );
};
{/* <Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link> */}