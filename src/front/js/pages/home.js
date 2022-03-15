import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { HealthCareLogin } from "../component/healthcarelogin.js"
import { PatientLogin } from "../component/patientlogin.js"

import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="d-flex justify-content-center">
			<HealthCareLogin />
			<PatientLogin />
		</div>
	);
};
