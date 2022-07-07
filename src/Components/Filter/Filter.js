import React, {useEffect, useReducer, useState} from 'react';
import JSONdata from "../../data.json";
import Card from '../Card/Card';
import './Filter.scss';

const Filter = ({state, dispatch, filteredData, types, setFilteredData}) => {

	const filterResults = (event) => {
		event.preventDefault();
		const userChoice = {
			location : state.location,
			time : state.time,
			price : state.price,
			type : state.type
		}
	
		const results = JSONdata.filter((e) => {
			if (e.location===userChoice.location && e.time===userChoice.time && e.type===userChoice.type){
				if(userChoice.price === 2000 && e.price < 2000)
					return e
				else if (userChoice.price === 8000 && e.price > 2000)
					return e
			}
			return undefined
		})
		if(results)
			setFilteredData(results);
		else
			console.log("ERROR");
	};

	return ( 
	<>
		<div className="filter-container">
			<form className='filter-form' onSubmit={filterResults}>
				<div className="location-filter-box">
					<label htmlFor="location">Location</label>
					<select name="location" id="select-location" onChange={(event)=>dispatch({type:types.location, value:event.target.value})}>
						<option value="newyork">New York, USA</option>
						<option value="delhi">Delhi, India</option>
					</select>
				</div>
				<div className="time-filter-box">
					<label htmlFor="time">When</label>
					<select name="when" id="select-time" onChange={(event)=>dispatch({type:types.time, value:event.target.value})}>
						<option value="this-month">This month</option>
						<option value="next-month">Next Month</option>
					</select>
				</div>
				<div className="price-filter-box">
					<label htmlFor="price">Price</label>
					<select name="price" id="select-price" onChange={(event)=>dispatch({type:types.price, value: parseInt(event.target.value)})}>
						<option value="2000">0$ - 2000$</option>
						<option value="8000">2000$+</option>
					</select>
				</div>
				<div className="type-filter-box">
					<label htmlFor="type">Property Type</label>
					<select name="type" id="select-type" onChange={(event)=>dispatch({type:types.type, value:event.target.value})}>
						<option value="house">Houses</option>
						<option value="shops">Shops</option>
					</select>
				</div>
				<div className="submit-box">
					<button type="submit" className='submit-btn' >Search</button>
				</div>
			</form>
		</div>
		<div className="card-container">
			<Card filteredData={filteredData}/>
		</div>
	</>
	);
}
 
export default Filter;