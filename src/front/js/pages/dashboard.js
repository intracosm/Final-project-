import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";
import { Context } from "../store/appContext";
import "../../styles/dashboard.css"
import { DailyMotivation } from "../component/dailymotivation";
import { Nutritioncard } from "../component/nutritioncard";

import { Card } from "../component/card";
import { Longcard } from "../component/longcard";

import { Exercisecard } from "../component/exercisecard";

import { FunFact } from "../component/funfact";



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
                    <Nutritioncard />
                    <DailyMotivation />

                    <Exercisecard />

                    <FunFact />
                </div>

            </div>

        </div>
    );
};
{/* <Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link> */}