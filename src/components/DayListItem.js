import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";
import { PROPERTY_TYPES } from "@babel/types";

export default function DayListItem(props) {
   const {name, spots, setDay} = props;
	 
	 let dayClass = classNames("day-list__item", {
		"day-list__item--selected": props.selected,
		"day-list__item--full": props.spots === 0
	});

   return (
		<li className={dayClass} onClick={() => setDay(name)}>
		<h2 className="text--regular">Day Name: {name}</h2> 
		<h3 className="text--light">{spots} spots remaining </h3>
	</li>
   );
}

