import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Nav2 } from "../component/nav2";
import { Context } from "../store/appContext";

export const SingleExercise = () => {
    const { store, actions } = useContext(Context);
    const [boolean, setBoolean] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


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
            <div className="d-flex justify-content-center single-exercise-img">
                <div className="single-exercise-img-overlay">
                    <div className="single-exercise color card" style={{ width: "40rem" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                            </div>

                            <div className="card-body ">
                                <div className="d-flex justify-content-between text-center">
                                    <div className=""><h1 className="card-title">{item.name}</h1></div>
                                    <div><button type="button" className="btn cardbtn" onClick={() => {
                                        actions.getFav(item);
                                        setBoolean(!boolean);
                                        console.log(store.favorites);
                                    }}>{boolean ? <i className="fas fa-heart heart-size"></i> : <i className="far fa-heart heart-size"></i>}</button></div>
                                </div>
                                <div className="d-flex">
                                    <div className="p-4"> <h4 className="text-decoration-underline mt-5"><strong>Body Part:</strong></h4><p className="text">{item.bodyPart}</p></div>
                                    <div className="p-4">  <h4 className="text-decoration-underline mt-5"><strong>Equipment Needed:</strong></h4><p className="text">{item.equipment}</p></div>
                                    <div className="p-4"> <h4 className="text-decoration-underline mt-5"><strong>Target Muscle:</strong></h4><p className="text">{item.target}</p></div>
                                </div>
                                <h4 className="text-decoration-underline "><strong>Demonstration:</strong> <img className="p-5" src={item.gifUrl}></img></h4>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>

                            </div>

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