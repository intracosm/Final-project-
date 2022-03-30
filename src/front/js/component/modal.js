import React, { useState, useEffect } from "react";

export const Modal = () => {
    let quotes = [];
    const [show, setShow] = useState(true);
    // const api_url = "https://zenquotes.io/api/quotes/";

    useEffect(() => {

        fetch("https://type.fit/api/quotes")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                quotes = data;
                console.log(quotes);
            });

    }, []);



    function getRandomInt() {
        return Math.floor(Math.random() * 100);
    }







    return (
        <div className="d-flex justify-content-center">
            {show && <div className="alert alert-success" role="alert">
                <h4 className="alert-heading">Well done!</h4>
                <p>{quotes[3][203].text}</p>
                <hr />
                <div className="d-flex justify-content-between"> <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                    <button className="btn btn-success" onClick={() => setShow(false)}>close message</button>
                </div>
            </div>
            }
        </div >
    )
}