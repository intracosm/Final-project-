import { Button } from "bootstrap";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";
import "../../styles/dashboard.css"

import queryString from "query-string";

import { Context } from "../store/appContext";

export const Exercise = () => {
    const { store, actions } = useContext(Context);

    const [exercises, setExercises] = useState(store.exercises)

    const [input, setInput] = useState("")



    useEffect(() => {
        if (input == "") {
            setExercises(store.exercises)
        }
    }, [input])


    useEffect(() => {
        const qs = queryString.parse(location.hash);
        console.log("This is parsed info: ", qs);
        searchFunction(qs.keyword);
    }, [store.exercises]);

    const searchFunction = keyword => {
        console.log("Search function keyword: ", keyword);
        let filteredArray = store.exercises.filter(item => {
            if (keyword == "" || keyword == undefined) {
                return item;
            } else if (item.name.toLowerCase().includes(keyword.toLowerCase())) {
                return item;
            }
        });
        setExercises(filteredArray);
    };

    const searchHash = event => {
        searchFunction(event);

        location.hash = `keyword=${event}`;
    };







    // e.target.value = the value that is being typed (onChange)
    // useState() = used whenyou want a variable to rerender when changed on a page



    return (
        <div>
            <div className="nav1-exercises">
                <Navbar />
            </div>
            <div>
                <div className="d-flex justify-content-center"> <span><i class="fas fa-dumbbell exercise-icon"></i></span></div>
                <div className="d-flex justify-content-center s-bar">
                    <input
                        type="text"
                        placeholder="Search Exercise Name"
                        value={input}
                        onChange={(e) => { setInput(e.target.value) }}
                        onKeyDown={(e) => {
                            if (e.key == "Enter") {
                                searchHash(input)
                            }
                        }} />
                    <button type="button" class="btn btn-primary" onClick={() => searchHash(input)}>Search</button>
                </div>
            </div>

            <div className="row">
                {exercises.map((item, index) => {
                    return (
                        <div className="col-md-4 d-flex justify-content-center" key={index}>
                            <div className="card1 card m-3" style={{ width: "18rem" }}>
                                <h5 className="card-header">{item.name}</h5>
                                <div className="card-body">
                                    <button type="button" class="btn btn-primary">Click to View Exercise</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};
