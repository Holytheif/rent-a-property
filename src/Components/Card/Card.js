import React from 'react';
import "./Card.scss"

const Card = ({filteredData}) => {
	if(!filteredData){
		console.log("data not caught");
		return
	}
	const cards = filteredData.map(element => {
		return (
			<>	
				<div className="card" key={element.id}>
					<img src="./assets/house.jpg" alt="" />
	 				<p id='type'>{element.type}</p>
					<p id='address'>{element.address}</p>
					<p id='location'>{element.location}</p>
	 				<p id='price'>{element.price}$</p>
	 				<p id='time'>Available {element.time.replace("-"," ")}</p>
	 			</div>
			</>
		)
	});
	return cards
}
 
export default Card;