import React, { useState } from  "react";
import { TrafficLight } from "./TrafficLight";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

    const [selected, setSelected] = useState ("red")

	const changeColor = (color) =>{
       setSelected(color)
	}


	return (
		<div className="text-center">
		<TrafficLight/>
		<div className="p-box"></div>
		<div className="box">

		<div className={`red ${selected == "red" ? "light-on" : ""}`}onClick ={()=> changeColor ("red")}>
			
		</div>

		<div className={`yellow ${selected == "yellow" ? "light-on" : ""}`}onClick ={()=> changeColor ("yellow")}>
		     
		</div>

        <div className={`green ${selected == "green" ? "light-on" : ""}`}onClick ={()=> changeColor ("green")}>
		      
		</div>

		</div>
		</div>
	);
};

export default Home;
