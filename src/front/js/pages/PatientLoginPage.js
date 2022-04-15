import React, { useContext } from "react";
import { Context } from "../store/appContext";

import { PatientLogin } from "../component/patientlogin.js"
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";

export const PatientLog = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="">
			<Navbar />
			<div className=" d-flex justify-content-center">
				<PatientLogin />
			</div>

		</div>
	);
};
