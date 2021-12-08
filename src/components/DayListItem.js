import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";
import { PROPERTY_TYPES } from "@babel/types";

export default function DayListItem(props) {
   const {name, spots, setDay} = props;
	 
	 let dayClass = classNames("day-list__item", {
		"day-list__item--selected": props.selected,
		"day-list__item--full": spots === 0
	});
	const formatSpots = () =>{
		if(spots === 0){
			console.log(spots);
		return "no spots remaining";
		}
		else if(spots === 1) {
			console.log(spots);
			return  "1 spot remaining";
		}
		else {
			console.log(spots);
			return`${spots} spots remaining`;
		}
	}

   return (
		<li className={dayClass} onClick={() => setDay(name)}>
		<h2 className="text--regular">Day Name: {name}</h2> 
		<h3 className="text--light">{formatSpots()} </h3>
	</li>
   );
}

