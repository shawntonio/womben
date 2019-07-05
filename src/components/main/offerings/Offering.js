import React from "react";

function Offering(props) {

	return (
		<div className="offering">
			{!props.img && <img src="https://wombenco.s3-us-west-1.amazonaws.com/no-image-1.jpg" alt="missing"/>}
			{props.img && <img src={props.img} alt="offering" />}

			<div className="offering-info">
				<h2>{props.title}</h2>
				<span>${props.price}</span>
				<p>{props.description}</p>
			</div>
		</div>
	)
}

export default Offering