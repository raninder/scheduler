import React from "react";
import "components/InterviewerListItem.scss";
import classNames from "classnames";

export default function InterviewerListItem(props) {

	// conditionally applying css
	let className = classNames("interviewers__item", {
		"interviewers__item--selected": props.selected,
	});

	return (
		<ul>
			<li className={className} onClick={()=> {props.setInterviewer()}}>
				<img
					className="interviewers__item-image"
					src={props.avatar}
					alt={props.name}
				/>
				{/* if interviewer selected, then display name */}
				{props.selected && <h4>{props.name}</h4>}
			</li>
		</ul>
	);
}