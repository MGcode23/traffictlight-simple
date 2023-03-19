import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState("");
	return (
		<div className="box">
			<div className={color== 'red'?"circle bg-danger glow":"circle bg-danger"}
			onClick={()=>{setColor("red")}}
			></div>
			<div className={color== 'yellow'?"circle bg-warning glow":"circle bg-warning"}
			onClick={()=>{setColor("yellow")}}
			></div>
			<div className={color== 'green'?"circle bg-success glow":"circle bg-success"}
			onClick={()=>{setColor("green")}}
			></div>


		</div>
	);
};

export default Home;
