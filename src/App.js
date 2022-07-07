import React, {useEffect, useReducer, useState} from 'react';
import JSONdata from "./data.json";
import Navbar from './Components/Navbar/Navbar';
import Filter from './Components/Filter/Filter';

const types = {
	location: "location",
	time: "time",
	type: "type",
	price: "price"
}

const reducer = (state, action) => {
	switch (action.type) {
		case types.location:
			return { ...state, location: action.value }
		case types.time:
			return { ...state, time: action.value }
		case types.type:
			return { ...state, type: action.value }
		case types.price:
			return { ...state, price: action.value }
		default:
			console.log("ERROR");
	}
  }

let initialState = {
	"price": 2000,
	"time": "this-month",
	"location": "newyork",
	"address": "F118 Madrid St El Monte Iv Ext # Dev, Ponce, PR, 00731",
	"type": "house",
	"img": "./assets/house.jpg"
}

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	const [filteredData, setFilteredData] = useState([initialState]);

	useEffect(()=>{
		const filterData = JSONdata.filter((e) => {
			if (e.location==="newyork" && e.time==="this-month" && e.type==="house" && e.price < 2000){
				return e
			}
			return undefined
		})
		setFilteredData(filterData);
	},[])


	return (
    	<div className="App">
			<Navbar/>
			<Filter state={state} dispatch={dispatch} filteredData={filteredData} types={types} setFilteredData={setFilteredData}/>
    	</div>
  	);
}

export default App;
