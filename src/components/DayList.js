import React from "react";
import DayListItem from "components/DayListItem";

export default function DayList(props) {

	const { days, setDay, value } = props;
	
	const arrDays = days.map(dayItem => {
		return(
		<DayListItem
			key={dayItem.id}
			name={dayItem.name}
			spots={dayItem.spots}
			selected={dayItem.name === value}
			setDay={setDay}
		/>
		);
		})

	return (<ul><li>{arrDays}</li></ul>);
}