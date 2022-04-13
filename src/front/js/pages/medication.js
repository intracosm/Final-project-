import React, { useContext, useState, useCallback } from "react";
import { Context } from "../store/appContext";
import { Link, useHistory, Redirect } from "react-router-dom";
import "../../styles/home.css";
import "../../styles/medication.css";
import { Nav2 } from "../component/nav2";



export const Medication = () => {
    const { store, actions } = useContext(Context);
    const [drug, setDrug] = useState([]);
    const [input, setInput] = useState("");
    // const cardClick = () => {
    //     return (
    //         console.log(cardClick()),
    //         <Redirect to="https://www.google.com/" />
    //     )
    // }
    // const handleOnClick = useCallback(
    //     () => history.push(“/detailedmed”),                      
    //     [history]
    //   );
    // }
    // this second function would redirect the user to the med details page after clicking on the card produced, also have to work on limiting the amount of medication recieved from api


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
        <div className="medcontent">
            <Nav2 />
            <h3>Example conditions to search for: Leukemia, Ischemic Stroke, Abdominal Distension, Premenstrual Syndrome, Edema, etc. </h3>
            <div className="inputdiv"><input className="medsearch" type="text" value={input} onChange={(e) => {
                setInput(e.target.value)

            }} />
                <button className="btn btn-danger" onClick={() => getDrug(input)} >Search for medication</button></div>
            {
                drug.length > 0 ? drug.map((item, index) => {
                    return (
                        <div onClick={(e) => cardClick()} className="medcd card" style={{ width: "18rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">{item.drug}</h5>
                                <p className="card-text">Disease: {item.disease}</p>
                                <Link to={`/detailedmed/${item.drug}`}><button className="btn btn-danger">Learn more!</button></Link>
                            </div>
                        </div>
                    )
                }) : <div> Drug not found! </div>
            }
        </div>
    )

}
