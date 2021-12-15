import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";
import { PROPERTY_TYPES } from "@babel/types";

export default function DayListItem(props) {
	let dayClass = classNames("day-list__item", {
		"day-list__item--selected": props.selected,
		"day-list__item--full": props.spots === 0
	});

	//set spots status
	const formatSpots = () => {
		if (props.spots === 0) {
			return "no spots remaining";
		}
		else if (props.spots === 1) {
			return "1 spot remaining";
		}
		else {
			return `${props.spots} spots remaining`;
		}
	}

	return (
		<li className={dayClass} onClick={() => props.setDay(props.name)} selected={props.selected} >
			<h2 className="text--regular">Day Name: {props.name}</h2>
			<h3 className="text--light">{formatSpots()} </h3>
		</li>
	);
}

