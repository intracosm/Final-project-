import React from "react";



export const Login = () => {

    return (
        <div className="d-flex row">
            <div className="col-sm-6">
                <div className="d-flex flex-column justify-content-center">
                    <h1 className="text-center">Patient login</h1>
                    <input placeholder="username" type="text"></input>
                    <input placeholder="password" type="text"></input>
                    <button className="btn btn-primary">login</button>
                </div>
            </div>

            <div className="col-sm-6">
                <div className="d-flex flex-column justify-content-center">
                    <h1 className="text-center">Health Care login</h1>
                    <input placeholder="username" type="text"></input>
                    <input placeholder="password" type="text"></input>
                    <button className="btn btn-primary">login</button>
                </div>
            </div>
        </div>
    )
}