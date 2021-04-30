import React from "react";
import PropTypes from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home(props) {
	return (
		<div className="container bg-dark text-white">
			<div id="fondo" className="row align-items-center pl-4">
				<div id="clock" className="col">
					<i className="far fa-clock"></i>
				</div>
				<div className="col">{props.sexto % 10}</div>
				<div className="col">{props.quinto % 10}</div>
				<div className="col">{props.cuarto % 10}</div>
				<div className="col">{props.tercero % 10}</div>
				<div className="col">{props.segundo % 10}</div>
				<div className="col">{props.primero % 10}</div>
			</div>
		</div>
	);
}

Home.propTypes = {
	sexto: PropTypes.number,
	quinto: PropTypes.number,
	cuarto: PropTypes.number,
	tercero: PropTypes.number,
	segundo: PropTypes.number,
	primero: PropTypes.number
};
