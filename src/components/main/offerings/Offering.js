import React from "react";

function Offering(props) {

	return (
		<div className="offering">
			{!props.img && <img src="https://wombenco.s3-us-west-1.amazonaws.com/no-image-1.jpg" alt="missing"/>}
			{props.img && <img src={props.img} alt="offering" />}

			<div className="offering-info">
				<h2>{props.title}</h2>
				<span>${props.price}</span>
				<p>{props.description} lakjsdfoiawej alwejfpoqiwejgpqoejpoawejpoaiw jegpoaejrgopqjabpoiqjerbojqeogjaoiejgoqie
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, velit maiores veritatis cumque a, est dicta modi fuga illo nihil tempore excepturi vitae debitis iste reiciendis magni voluptate neque incidunt?</p>
			</div>
		</div>
	)
}

export default Offering