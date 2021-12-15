import React from "react";
import DayListItem from "components/DayListItem";

export default function DayList(props) {

	const { days, setDay, value } = props;
	const arrDays = days.map(dayItem =>
		<DayListItem
			key={dayItem.id}
			name={dayItem.name}
			spots={dayItem.spots}
			//change setDays to onChange and day to value to reflect HTML format
			selected={dayItem.name === value}
			setDay={setDay}
		/>);

	return (
		<ul>
			<li>
				{arrDays}
			</li>
		</ul>
	);
}