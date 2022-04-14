import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import "../../styles/dashboard.css"
import { DailyMotivation } from "../component/DailyMotivation";
import { Nutritioncard } from "../component/NutritionCard";



import { Longcard } from "../component/LongCard";

import { Exercisecard } from "../component/ExerciseCard";
import { FunFact } from "../component/funfact";



export const Dashboard = () => {
    const { store, actions } = useContext(Context);

    const [state, setState] = useState({
        
    });





    return (
        <div>
            <div className="profile">
                <div className="profile-top">
                    
                    <img className="image-profile" src="https://www.pngfind.com/pngs/m/317-3177131_636682202684372240-user-profile-photo-round-hd-png-download.png"></img>
                    
                    <Link to="/dashboard"><i className="fab fa-hackerrank white1 profile-icon"></i></Link>
                    <div className="user-name"><h5 className=" ms-5 white1">Chris_Blake23</h5></div>
                    <div className="dash-background">
                    <div className="dash-top-border d-flex"><i className="fas fa-bars dash-top-border-icon"></i><h4 className="white1">Dashboard</h4></div>
                    </div>
                </div>
                <div className="profile-bottom">
                    <ul className="profile-ul mt-3">
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
            
            </div>
            <div className="top-div bg-light">
                <div className="d-flex justify-content-end mt-3 mb-3 bg-light">
            
                
                  
                    <i className="fab fa-hackerrank red1 profile-life-icon ms-3"></i>
            
                </div>
                



                <div className="dashpage d-flex top-border-black justify-content-between">


                    <div className="long-card-div mt-3">
                        <Longcard />
                        <div className="d-flex mt-4"><FunFact />  <DailyMotivation /></div>
                    </div>
                    <div className="short-card-div">
                       
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