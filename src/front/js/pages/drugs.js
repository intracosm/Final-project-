import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Drugs = () => {
    const { store, actions } = useContext(Context);
    const [drug, setDrug] = useState([]);
    const [input, setInput] = useState("");



    const getDrug = (disease) => {

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'disease-drug-matching.p.rapidapi.com',
                'X-RapidAPI-Key': 'e73f15227bmshf117982505fa223p184a06jsnf5a3a0b5054c'
            }
        };

        fetch(`https://disease-drug-matching.p.rapidapi.com/get_drug/${disease}`, options)
            .then(response => response.json())
            .then(response => setDrug(response))
            .catch(err => console.error(err));

    }



    return (
        <div className="">
            <h3>Example conditions to search for: Leukemia, Ischemic Stroke, Abdominal Distention  </h3>
            <input type="text" value={input} onChange={(e) => {
                setInput(e.target.value)

            }} />
            <button className="btn btn-primary" onClick={() => getDrug(input)} >Search Drug</button>
            {
                drug.length > 0 ? drug.map((item, index) => {
                    return (
                        <div className="card" style={{ width: "18rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">{item.drug}</h5>
                                <p className="card-text">Disease: {item.disease}</p>

                            </div>
                        </div>
                    )
                }) : <div> Drug not found! </div>
            }
        </div>
    )

};
