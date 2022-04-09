import React from "react";
import { Link, NavLink } from "react-router-dom";



import "../../styles/dashboard.css"

export const Navbar = () => {




	return (


		<nav className="navbar navbar-expand-lg navbar-light bg-light nav-border">
			<div className="container-fluid">
				<div className="logo-container">
					<a className="navbar-brand" href="#"> <i className="fab fa-hackerrank red1 life-hack">Life<span className="black1">Hack</span></i></a>
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
						onClick={(e) => console.log(e.target.parentNode)}
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
								to="/planner"
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
								to="/exercises"
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
								to="/medications"
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
								to="/dashboard"
								className={(isActive) => {
									return `nav-link ${isActive ? "active" : ""}`;
								}}
							>
								Dashboard
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								id="black1"
								to="/login"
								className={(isActive) => {
									return `nav-link ${isActive ? "active" : ""}`;
								}}
							>
								Sign In
							</NavLink>
						</li>

					</ul>
				</div>
			</div>
		</nav>
		// <nav className="navbar navbar-dark bg-success spacing fixed-top">
		// 	<div className="container-fluid">
		// 		<button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
		// 			<span className="navbar-toggler-icon"></span>
		// 		</button>
		// 		<div className="offcanvas offcanvas-start bg-success" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
		// 			<div className="d-flex justify-content-between">
		// 				<div className="d-flex"><img className="image" src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"></img>
		// 					<h4 className="username white1">UserName</h4>
		// 				</div>
		// 				<div><button type="button" className="btn-close text-reset float-right me-1" data-bs-dismiss="offcanvas" aria-label="Close"></button></div>
		// 			</div>
		// 			<div className="m-0">
		// 				<h5 className="dash-word white1">Dashboard</h5>
		// 			</div>
		// 			<div className="div-border offcanvas-body">
		// 				<ul className=" navbar-nav justify-content-end flex-grow-1 pe-3">
		// 					<li className="nav-item">
		// 						<Link className="linnk" to="/dashboard">
		// 							<span className="icon"><i className="fas fa-home"></i></span>
		// 							<span className="title">Home</span>
		// 						</Link>
		// 					</li>

		// 					<li className="nav-item">
		// 						<Link className="linnk" to="/planner">
		// 							<span className="icon"><i className="fas fa-calendar-check"></i></span>
		// 							<span className="title">Calendar</span>
		// 						</Link>
		// 					</li>
		// 					<li className="nav-item">
		// 						<Link className="linnk" to="/exercises">
		// 							<span className="icon"><i className="fas fa-dumbbell"></i></span>
		// 							<span className="title">Exercises</span>
		// 						</Link>
		// 					</li>
		// 					<li className="nav-item">
		// 						<Link className="linnk" to="/medications">
		// 							<span className="icon"><i className="fas fa-prescription-bottle-alt"></i></span>
		// 							<span className="title">Medication search</span>
		// 						</Link>
		// 					</li>
		// 					<li className="nav-item">
		// 						<Link className="linnk" to="">
		// 							<span className="icon"><i className="fas fa-sign-out-alt"></i></span>
		// 							<span className="title">Sign Out</span>
		// 						</Link>
		// 					</li>
		// 				</ul>
		// 			</div>
		// 		</div>
		// 		<a className="navbar-brand" href="#"> <i className="fab fa-hackerrank">Life Hack</i></a>

		// 	</div>
		// </nav>


	);
};

