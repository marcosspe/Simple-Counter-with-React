//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

//render your react application
let counter = 0;
setInterval(() => {
	let seis = Math.floor(counter / 100000);
	let cinco = Math.floor(counter / 10000);
	let cuatro = Math.floor(counter / 1000);
	let tres = Math.floor(counter / 100);
	let dos = Math.floor(counter / 10);
	let uno = Math.floor(counter / 1);
	//console.log(seis, cinco, cuatro, tres, dos, uno);
	counter++;
	ReactDOM.render(
		<Home
			primero={uno}
			segundo={dos}
			tercero={tres}
			cuarto={cuatro}
			quinto={cinco}
			sexto={seis}
		/>,
		document.querySelector("#app")
	);
}, 1000);
