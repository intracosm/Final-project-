import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Modal = () => {
    const { store, actions } = useContext(Context);
    let quote = store.quotes[getRandomInt()];
    const [show, setShow] = useState(true);

    function getRandomInt() {
        return Math.floor(Math.random() * 1643);
    }

    return (
        <div className="d-flex justify-content-center">
            {show && (
                <div className="alert alert-success" role="alert">
                    <h4 className="alert-heading">Attention!</h4>
                    {store.quotes.length > 0 && (
                        <p>
                            "{quote.text}" - {quote.author}
                        </p>
                    )}
                    <hr />
                    <div className="d-flex justify-content-between">
                        {" "}
                        <p className="mb-0">
                            Whenever you need to, be sure to use margin utilities to keep
                            things nice and tidy and schedule appointments accordingly :D.
                        </p>
                        <button className="btn btn-success" onClick={() => setShow(false)}>
                            close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};