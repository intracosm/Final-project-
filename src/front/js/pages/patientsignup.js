import React, { useState, useEffect, useContext } from "react";
import "../../styles"

const PatientSignUp = () => {
    const [fullName, setFullName] = useState("");
    const [dob, setDob] = useState("");
    const [email, setEmail] = useState("");


    return (
        <div className="container">
            <div>
                <h1 className="text-center mt-5">Create an Account</h1>
                <form>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            onChange={e => setFullName(e.target.value)}
                            value={fullName}
                            className="form-control"
                            placeholder="Full Name"
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            className="form-control"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input
                            type="phone"
                            onChange={e => setPhone(e.target.value)}
                            value={phone}
                            className="form-control"
                            placeholder="Enter phone"
                        />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input
                            type="text"
                            onChange={e => setAddress(e.target.value)}
                            value={address}
                            className="form-control"
                            placeholder="Enter address"
                        />
                    </div>
                    <button
                        onClick={() => addNewContact(fullName, phone, email, address)}
                        type="button"
                        className="btn btn-primary form-control">
                        Create
                    </button>
                </form>
            </div>
        </div>
    )
}