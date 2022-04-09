import React, { useContext } from "react";
import { Context } from "../store/appContext";

import { PatientLogin } from "../component/patientlogin.js"
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="homeb d-flex justify-content-center">

			<PatientLogin />

		</div>
	);
};
