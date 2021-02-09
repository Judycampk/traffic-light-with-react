import React, { useState } from "react";

export const Trafficlight = () => {
	const [color, setColor] = useState("yellow");

	return (
		<div className="TrafficTop">
			<div className="stickArea">
				<div className="vl"></div>
			</div>
			<div className="TrafficCircles ">
				<div
					className={"red light " + (color == "red" ? "active" : "")}
					onClick={() => {
						setColor("red");
					}}></div>
				<div
					className={
						"yellow light " + (color == "yellow" ? "active" : "")
					}
					onClick={() => {
						setColor("yellow");
					}}></div>
				<div
					className={
						"green light " + (color == "green" ? "active" : "")
					}
					onClick={() => {
						setColor("green");
					}}></div>
			</div>
		</div>
	);
};
