import React, { useState, useEffect, useContext } from "react";
import Form from "react-bootstrap/Form";
import { Context } from "../store/appContext";
import Button from "react-bootstrap/Button";


export const PatientLogin = () => {
    const { username, setUsername } = useState("");
    const { password, setPassword } = useState("");
    const { store, actions } = useContext(Context);
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    const validateForm = () => {
        return username.length > 0 && password.length > 0;
    }

    return (

        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        autoFocus
                        type="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button block size="lg" type="submit" disabled={!validateForm()}>
                    Login
                </Button>
            </Form>
        </div>




    )
}