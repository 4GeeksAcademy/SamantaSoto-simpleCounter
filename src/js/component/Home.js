import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = ( {seconds} ) => {
	
	seconds = seconds + 100000;
	const digit = String(seconds) .split('') ;

	return (
		<div className="row text-center text-bg-dark p-3 m-2 grid gap-3 fw-bold">
			<div className="col align-middle clock fs-1 fw-bold bg-dark bg-gradient ms-5 rounded-2 px-1 py-3 border border-4 border-top-0 border-bottom-0"><FontAwesomeIcon icon={faClock}/></div>
			<div className="col align-middle digit fs-1 fw-bold bg-dark bg-gradient rounded-2 px-0 py-3 border border-4 border-top-0 border-bottom-0">{digit[1]}</div>
			<div className="col align-middle digit fs-1 fw-bold bg-dark bg-gradient rounded-2 px-0 py-3 border border-4 border-top-0 border-bottom-0">{digit[2]}</div>
			<div className="col align-middle digit fs-1 fw-bold bg-dark bg-gradient rounded-2 px-0 py-3 border border-4 border-top-0 border-bottom-0">{digit[3]}</div>
			<div className="col align-middle digit fs-1 fw-bold bg-dark bg-gradient rounded-2 px-0 py-3 border border-4 border-top-0 border-bottom-0">{digit[4]}</div>
			<div className="col align-middle digit fs-1 fw-bold bg-dark bg-gradient me-5 rounded-2 px-0 py-3 border border-4 border-top-0 border-bottom-0">{digit[5]}</div>
		</div>
	);
};

export default Home;
