import { Button } from "bootstrap";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Nav2 } from "../component/nav2";
import "../../styles/dashboard.css"

import queryString from "query-string";

import { Context } from "../store/appContext";

export const Exercise = () => {
    const { store, actions } = useContext(Context);

    const [exercises, setExercises] = useState(store.exercises)

    const [input, setInput] = useState("")

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

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
        <div className="exercise-page ">


            <Nav2 />

            <div className="m-auto search-bar exercise-border">
                <div className="d-flex justify-content-center">
                    <span>
                        <a className="navbar-brand2 " href="#"> <i className="fab fa-hackerrank exercise-icon"></i></a>
                    </span>
                </div>
                <div className="d-flex justify-content-center mb-3">
                    <h1>Let's Get <span className="exercise-font red1">Hacked!</span></h1>
                </div>
                <div className="d-flex justify-content-center s-bar">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Search Exercise Name"
                        value={input}
                        onChange={(e) => { setInput(e.target.value) }}
                        onKeyDown={(e) => {
                            if (e.key == "Enter") {
                                searchHash(input)
                            }
                        }} />



                    <button id="search-icon" type="button" className="btn btn-header" onClick={() => searchHash(input)}><i className="fas fa-search"></i></button>
                </div>
            </div>

            <div className="row">
                {exercises.map((item, index) => {

                    return (
                        <div className="col-md-4 d-flex justify-content-center" index={index} key={index}>
                            <div className="card1 card search-border exercise-card exercise-card-border" style={{ width: "23rem" }}>
                                <div className="exercise-card-header">
                                    <h5 className=" d-flex justify-content-center white1 mt-2">{item.name}</h5>
                                </div>
                                <img className="exercise-card-image" src={item.gifUrl}></img>
                                <div className="card-body  exercise-button bg-light">
                                    <Link className="d-flex justify-content-center linnk" to={`/single-exercise/${item.id}`}>
                                        <button type="button" className="btn exer-button white1">View Exercise</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};


// {{pathname: "", state: item}} another way to pass to another page
// location.state.id "on the other page to call in a variable"


{/* <div className="form-group">
              <input
                type="text"
                className="form-control bg-transparent"
                id="exampleFormControlInput1"
                placeholder="Search for noms"
                value={searchQuery}
                onChange={(e) =>
                  setSearchQuery(e.target.value) && getProducts(e.target.value)
                }
              />
            </div>
            <button
              className="btn btn-header"
              onClick={async (e) => {
                e.preventDefault();
                await actions.getMeals(
                  `https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}&maxReadyTime=30&addRecipeInformation=true&ignorePantry=true&instructionsRequired=true&fillIngredients=true&addRecipeNutrition=true&apiKey=abb3fdf4028b4f0d989e7ee0b2b23b67&number=100`,
                  searchQuery
                );
                history.push(`/meals/browse/${searchQuery}`);
              }}
            >
              <i className="fas fa-search"></i>
            </button> */}