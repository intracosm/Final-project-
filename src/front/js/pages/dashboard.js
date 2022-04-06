import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";
import { Context } from "../store/appContext";
import "../../styles/dashboard.css"
import { DailyMotivation } from "../component/dailymotivation";
import { Nutritioncard } from "../component/nutritioncard";

import { Card } from "../component/card";
import { Longcard } from "../component/longcard";
<<<<<<< HEAD

import { Exercisecard } from "../component/exercisecard";
=======
import { Shortcard } from "../component/shortcard";
import { FunFact } from "../component/funfact";
>>>>>>> d3786a6353b4c3e27ef9bf91064c6b726923871d



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

<<<<<<< HEAD
                    <Exercisecard />
=======
                    <Shortcard
                        title="Exercise Log" />

                    <FunFact />
>>>>>>> d3786a6353b4c3e27ef9bf91064c6b726923871d
                </div>

            </div>

        </div>
    );
};
{/* <Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link> */}