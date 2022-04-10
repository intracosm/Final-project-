import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";
import { Context } from "../store/appContext";
import "../../styles/dashboard.css"
import { DailyMotivation } from "../component/DailyMotivation";
import { Nutritioncard } from "../component/NutritionCard";

import { Card } from "../component/card";
import { Longcard } from "../component/LongCard";

import { Exercisecard } from "../component/ExerciseCard";
import { FunFact } from "../component/funfact";



export const Dashboard = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container-fluid">


            <Navbar />

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
                    <Exercisecard />
                    <DailyMotivation />



                    <FunFact />
                </div>

            </div>

        </div>
    );
};
{/* <Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link> */}