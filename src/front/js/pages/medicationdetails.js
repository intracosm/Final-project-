import React, { useState, useEffect, } from "react";
import "react-tabs/style/react-tabs.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useLocation, useParams } from "react-router-dom";
import { Nav2 } from "../component/nav2";
import "../../styles/medication.css";



export const DetailedMed = () => {
	// const location = useLocation();


	const [medicationData, setMedicationData] = useState([]);
	const params = useParams();
	const drugname = params.drugname;

	const getDetails = (drugname) => {
		fetch(`https://api.fda.gov/drug/label.json?search=adverse_reactions:${drugname}`)
			.then(function (response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				return response.json();
			})
			.then(function (responseAsJson) {
				// console.log("response log", responseAsJson);
				setMedicationData(responseAsJson.results);
			})
			.catch(function (err) {
				console.log("Fetch Error :-S", err);
			});

	}
	useEffect(() => {
		// let str = location.state.medication.medicationName;
		// let arr = str.split("(");
		// let newStr = arr[0].trim();
		getDetails(drugname);



	}, []);

	return (

		<div className="deets" >
			<Nav2 />
			{/* {/* <div className="row">
				<div className="col-12">
					{/* <h1>{location.state.medication.medicationName}</h1> */}
			{/* </div>
			// </div > * /} */}


			< div className="dtstxt container m-auto row" >
				<div>
					{/* Nav tabs start */}
					<Tabs>
						<TabList>
							{medicationData.length > 0 && medicationData[0].description ? <Tab>Description</Tab> : ""}
							{medicationData.length > 0 && medicationData[0].adverse_reactions ? (
								<Tab>Adverse Reactions</Tab>
							) : (
								""
							)}
							{medicationData.length > 0 && medicationData[0].dosage_forms_and_strengths ? (
								<Tab>Dosage Forams and Strengths</Tab>
							) : (
								""
							)}
							{medicationData.length > 0 && medicationData[0].information_for_patients ? (
								<Tab>Information for Patients</Tab>
							) : (
								""
							)}
							{medicationData.length > 0 && medicationData[0].warnings_and_cautions ? (
								<Tab>Warnings and Cautions</Tab>
							) : (
								""
							)}
							{medicationData.length > 0 && medicationData[0].indications_and_usage ? (
								<Tab>Indications and usage</Tab>
							) : (
								""
							)}
							{medicationData.length > 0 && medicationData[0].dependence ? <Tab>Dependence</Tab> : ""}
						</TabList>
						<TabPanel>
							<p>{medicationData.length > 0 && medicationData[0].description}</p>
						</TabPanel>
						<TabPanel>
							<p>{medicationData.length > 0 && medicationData[0].adverse_reactions}</p>
						</TabPanel>
						<TabPanel>
							<p>{medicationData.length > 0 && medicationData[0].dosage_forms_and_strengths}</p>
						</TabPanel>
						<TabPanel>
							<p>{medicationData.length > 0 && medicationData[0].information_for_patients}</p>
						</TabPanel>
						<TabPanel>
							<p>{medicationData.length > 0 && medicationData[0].warnings_and_cautions}</p>
						</TabPanel>
						<TabPanel>
							<p>{medicationData.length > 0 && medicationData[0].indications_and_usage}</p>
						</TabPanel>
						<TabPanel>
							<p>{medicationData.length > 0 && medicationData[0].dependence}</p>
						</TabPanel>
					</Tabs>
					{/* Nav tabs end */}
				</div>
			</div >
		</div >
	);
};