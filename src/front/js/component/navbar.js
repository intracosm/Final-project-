import React, { useState, useEffect, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../store/appContext";



import "../../styles/dashboard.css"

export const Navbar = () => {

	const { store, actions } = useContext(Context);




	return (


		<nav className="navbar navbar-expand-lg navbar-light bg-light nav-border">
			<div className="container-fluid">
				<div className="logo-container">
					<a className="navbar-brand" href="https://3000-intracosm-finalproject-cctck6uj75b.ws-us39a.gitpod.io/"> <i className="fab fa-hackerrank red1 life-hack">Life<span className="black1">Hack</span></i></a>
				</div>
				<button

					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarTogglerDemo02"
					aria-controls="navbarTogglerDemo02"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
					<ul
						className="navbar-nav ms-auto mb-2 mb-lg-0"
					>
						<li className="nav-item">
							<NavLink
								id="red1"
								exact={true}
								to="/"
								className={(isActive) => {
									return `nav-link ${isActive ? "active" : ""}`;
								}}
							>
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								id="black1"
								to="/patientlogin"
								className={(isActive) => {
									return `nav-link ${isActive ? "active" : ""}`;
								}}
							>
								Calendar
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								id="black1"
								to="/patientlogin"
								className={(isActive) => {
									return `nav-link ${isActive ? "active" : ""}`;
								}}
							>
								Exercises
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								id="black1"
								to="/patientlogin"
								className={(isActive) => {
									return `nav-link ${isActive ? "active" : ""}`;
								}}
							>
								Med-Search
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								id="red1"
								to="/patientlogin"
								className={(isActive) => {
									return `nav-link ${isActive ? "active" : ""}`;
								}}
							>
								Dashboard
							</NavLink>
						</li>

					</ul>

				</div>
			</div>
		</nav>










	);
};



