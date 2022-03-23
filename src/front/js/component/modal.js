import React, { useState } from "react";

export const Modal = () => {
    const [show, setShow] = useState(true);

    return (
        <div className="d-flex justify-content-center">
            {show && <div className="alert alert-success" role="alert">
                <h4 className="alert-heading">Well done!</h4>
                <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                <hr />
                <div className="d-flex justify-content-between"> <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                    <button className="btn btn-success" onClick={() => setShow(false)}>click me</button>
                </div>
            </div>
            }
        </div >
    )
}