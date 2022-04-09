import React from "react";
import { Link } from "react-router-dom";

export const Card = () => {

    return (
        <div className="card1 card m-3 card-border dash-card" style={{ width: "18rem", height: "8rem" }}>
            <h5 className="card-header">Featured</h5>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
        </div>
    )
}