import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Nav2 } from "../component/nav2";
import { Context } from "../store/appContext";

export const SingleExercise = () => {
    const { store, actions } = useContext(Context);
    const [boolean, setBoolean] = useState(false);



    const params = useParams();
    // find gives you 1 item that you are looking for: what ever item it finds first that matches

    const item = store.exercises.find((object, index) => {
        if (object.id == params.id) {
            return object
        }
    });
    console.log("item", item);








    return (
        <div className="dashpage">
            <Nav2 />
            <div className="d-flex justify-content-center mt-5">
                <div className="single-exercise card mb-3" style={{ maxWidth: "65%" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                        </div>

                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <div><h1 className="card-title">{item.name}</h1></div>
                                <div><button type="button" className="btn cardbtn" onClick={() => {
                                    actions.getFav(item.name);
                                    setBoolean(!boolean);
                                    console.log(store.favorites);
                                }}>{boolean ? <i className="fas fa-heart heart-size"></i> : <i className="far fa-heart heart-size"></i>}</button></div>
                            </div>
                            <h4 className="text-decoration-underline">Body Part:</h4><p>{item.bodyPart}</p>
                            <h4 className="text-decoration-underline">Equipment Needed:</h4><p>{item.equipment}</p>
                            <h4 className="text-decoration-underline">Target Muscle:</h4><p>{item.target}</p>

                            <h4 className="text-decoration-underline">Demonstration: <img src={item.gifUrl}></img></h4>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};


// bodyPart: "waist"
// equipment: "body weight"
// gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0002.gif"
// id: "0002"
// name: "45° side bend"
// target: "abs"