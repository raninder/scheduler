import React from "react";
import DayListItem from "components/DayListItem";

export default function DayList(props) {
	console.log("props1", props);
	const { days, setDay, day } = props;
	console.log("days", days);
	//const arrDays = days.map(dayItem =><DayListItem key={dayItem.id} {...dayitem} />);
	const arrDays = days.map(dayItem => <DayListItem key={dayItem.id} name={dayItem.name} spots={dayItem.spots} selected={dayItem.name === day} setDay={setDay} />);
	return (
		<ul>
			<li>
				{arrDays}
			</li>
		</ul>

	);
}