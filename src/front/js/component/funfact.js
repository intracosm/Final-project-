import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";


export const FunFact = (props) => {
    const [info, setinfo] = useState("")




    useEffect(() => {
        fetch("https://random-facts2.p.rapidapi.com/getfact", {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'random-facts2.p.rapidapi.com',
                'X-RapidAPI-Key': 'e73f15227bmshf117982505fa223p184a06jsnf5a3a0b5054c'
            }

        })
            .then((response) => response.json())

            .then((data) => {
                setinfo(data.Fact)
                console.log(data)
            })
            .catch(err => {
                console.error(err);
            });
    }, []);


    // const { store, actions } = useContext(Context);
    // let info = store.facts[getRandomInt()];
    // const [show, setShow] = useState(true);

    // function getRandomInt() {
    //     return Math.floor(Math.random() * 100);
    // }
    return (
        <div className="short-card card m-3 card-border dash-card" style={{ width: "20rem" }}>
            <div className="card-body">
                <span className="funfact-span "><i className="fab fa-facebook funfact-icon"></i></span>
                <div className="funfact-margin">
                    <h5 className="">Fact of the day 📚</h5>
                    <p className="card-text d-flex justify-content-center">{info}</p>
                </div>
            </div>
        </div>

    )
};


FunFact.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    body: PropTypes.string
}