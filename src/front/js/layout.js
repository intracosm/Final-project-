import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Planner } from "./component/planner";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";

import injectContext from "./store/appContext";

import { Dashboard } from "./pages/DashBoard";
import { Exercise } from "./pages/Exercises";
import { SingleExercise } from "./pages/SingleExercise";


import { Medication } from "./pages/medication";
import { DetailedMed } from "./pages/medicationdetails";


import { Footer } from "./component/footer";

import { PatientLogin } from "./component/patientlogin";
import { Nutritionalfacts } from "./pages/NutritionalFacts";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>




						{/* <Route exact path="/healthcarelogin" component={HealthCareLogin} /> */}
						<Route exact path="/patientlogin" component={PatientLogin} />
						<Route exact path="/planner" component={Planner} />
						<Route exact path="/dashboard" component={Dashboard} />
						<Route exact path="/exercises" component={Exercise} />
						<Route exact path="/detailedmed" component={DetailedMed} />
						<Route exact path="/single-exercise/:index" component={SingleExercise} />


						<Route exact path="/nutritionalfacts/:id" component={Nutritionalfacts} />
						<Route exact path="/medications" component={Medication} />
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
