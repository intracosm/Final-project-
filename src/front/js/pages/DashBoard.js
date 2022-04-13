import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Nav2 } from "../component/nav2";
import { Context } from "../store/appContext";
import "../../styles/dashboard.css"
import { DailyMotivation } from "../component/DailyMotivation";
import { Nutritioncard } from "../component/NutritionCard";
import { Modal2 } from "../component/Modal2";

import { Card } from "../component/card";
import { Longcard } from "../component/LongCard";

import { Exercisecard } from "../component/ExerciseCard";
import { FunFact } from "../component/funfact";



export const Dashboard = () => {
    const { store, actions } = useContext(Context);

    const [state, setState] = useState({
        showModal: true,
    });





    return (
        <div>
            <div className="profile">
            <a className="navbar-brand" href="#"> <i className="fab fa-hackerrank white1 profile-icon"></i></a>
            {/* <img className="profile-image" src="https://images.unsplash.com/photo-1648876676540-ed9fac00af05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=357&q=80"></img>
            <h3 className="ms-2">User Name</h3>
            <h5>Dashboard</h5> */}
            <ul className="profile-ul">
                <li>
                    <Link to="/dashboard" className="linne d-flex">
                    <span className="icon1"><i className="fas fa-home turn-red"></i></span>
                    <span className="title1">Home</span>
                    </Link>
                    </li>
                <li>
                    <Link to="/planner" className="linne d-flex">
                    <span className="icon1"><i className="fas fa-calendar-alt"></i></span>
                    <span className="title1">Calendar</span>
                    </Link>
                    </li>
                <li>
                    <Link to="/exercises" className="linne d-flex">
                    <span className="icon1"><i className="fas fa-dumbbell"></i></span>
                    <span className="title1">Exercises</span>
                    </Link>
                    </li>
                <li>
                    <Link to="/medications" className="linne d-flex">
                    <span className="icon1"><i className="fas fa-prescription"></i></span>
                    <span className="title1">Med-Search</span>
                    </Link>
                    
                    
                </li>
                <li>
                    <Link to="/patientlogin" className="linne d-flex">
                    <span className="icon1"><i className="fas fa-sign-out-alt"></i></span>
                    <span className="title1">Sign Out</span>
                    </Link>
                    </li>
            </ul>
            
            </div>
            <div className="top-div">
            <div className="d-flex justify-content-center mt-2 mb-5">
            
                <div className="d-flex justify-content-center">
                    <input
                        className="form-control"
                        type="text"
                        placeholder=""
                    />
                    <button id="search-icon" type="button" className="btn btn-header"><i className="fas fa-search"></i></button>
                    <a className="navbar-brand" href="#"> <i className="fab fa-hackerrank red1 profile-life-icon ms-3">Life<span className="black1">Hack</span></i></a>
                </div>
            </div>
                



                <div className="dashpage d-flex justify-content-between">


                    <div className="long-card-div">
                        <Longcard />
                        <div className="d-flex"><FunFact />  <DailyMotivation /></div>
                    </div>
                    <div className="short-card-div">
                        <Modal2
                            show={state.showModal}
                            onClose={() => setState({ showModal: false })}
                        />
                        <Nutritioncard />
                        <Exercisecard />

                    </div>

                </div>

            </div>
        </div>
    );
};
{/* <Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link> */}


                // Home
                //     Calendar
               
                //     Exercises
                
                //     Med-Search
                
                //     Dashboard
               
                //     Sign Out