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
                <div className="profile-top">
                    <img className="image-profile" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c30d4553-5312-4d24-8397-a383081a23e0/ddc0d7m-183fb81b-7013-406b-a512-9c552ac50bf6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MzMGQ0NTUzLTUzMTItNGQyNC04Mzk3LWEzODMwODFhMjNlMFwvZGRjMGQ3bS0xODNmYjgxYi03MDEzLTQwNmItYTUxMi05YzU1MmFjNTBiZjYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.g3sj1TgWqYtf1R8djiI7Y_inkOq9NBsfLT_cYDxoDog"></img>
                    <Link to="/dashboard"><i className="fab fa-hackerrank white1 profile-icon"></i></Link>
                    <h5 className=" ms-5 white1">UserName</h5>
                    <h4 className="ms-2 mt-5">Dashboard</h4>
                </div>
                <div className="profile-bottom">
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
            
            </div>
            <div className="top-div">
            <div className="d-flex justify-content-end mt-4 mb-4">
            
                
                  
                    <i className="fab fa-hackerrank red1 profile-life-icon ms-3"></i>
            
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