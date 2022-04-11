import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";




export const Modal2 = (props) => {
    const [state, setState] = useState({
        //initialize state here
    });
    const { store, actions } = useContext(Context);

    return (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title d-flex justify-content-center">Nutritional Fact Of The Day<p>&nbsp;&nbsp;🥦🌽🍎🍓🥕</p></h4>
                        {props.onClose ? (

                            <button type="button" data-dismiss="modal" onClick={() => props.onClose()} className="btn-close text-reset float-right me-1" aria-label="Close"></button>

                        ) : (
                            ""
                        )}

                    </div>
                    <div className="modal-body">
                        {store.nutrition.length > 0 && (

                            <p className="black1">
                                {store.factoftheday && store.factoftheday.sample}
                            </p>
                        )}
                    </div>
                    <div className="modal-footer">
                        <Link className="linnk" to={{ pathname: "/nutritionalfacts/" + store.factoftheday.id, state: { props } }}>
                            <button type="button" className="btn btn-primary">
                                Read More!
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
/**
 * Define the data-types for
 * your component's properties
 **/
Modal2.propTypes = {
    history: PropTypes.object,
    onClose: PropTypes.func,
    show: PropTypes.bool,
    id: PropTypes.string
};

/**
 * Define the default values for
 * your component's properties
 **/
Modal2.defaultProps = {
    show: false,
    onClose: null
};




<div><button type="button" className="btn-close text-reset float-right me-1" aria-label="Close"></button></div>