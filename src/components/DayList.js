import React from "react";
import DayListItem from "components/DayListItem";

export default function DayList(props) {
	const {days} = props;
	//const arrDays = days.map(dayItem =><DayListItem key={dayItem.id} {...dayitem} />);
	const arrDays = days.map(dayItem =><DayListItem key={dayItem.id} name={dayItem.name} spots={dayItem.spots} selected={dayItem.name === props.day} setDay={dayItem.setDay}/>);
	return (
		<ul>
			<li>
				{arrDays} 
			</li>
			</ul>
	
	); 
}