import React from "react";
import DayListItem from "components/DayListItem";

export default function DayList(props) {
	//chnage setDays to onChnage and day to value to reflect HTML format
	const { days, onChange, value } = props;

	//const arrDays = days.map(dayItem =><DayListItem key={dayItem.id} {...dayitem} />);
	const arrDays = days.map(dayItem =>
		<DayListItem
			key={dayItem.id}
			name={dayItem.name}
			spots={dayItem.spots}
			selected={dayItem.name === value}
			setDay={onChange}
		/>);

	return (
		<ul>
			<li>
				{arrDays}
			</li>
		</ul>

	);
}