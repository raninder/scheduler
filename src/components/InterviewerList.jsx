import React from "react";
import InterviewListItem from "components/InterviewerListItem";
import "components/InterviewerList.scss";

export default function InterviewerList(props) {
	const { interviewers } = props;
	console.log("props", props);
	console.log("inter", interviewers);
	const arrInterviewer = interviewers.map((item) =>
		<InterviewListItem
			key={item.id}
			name={item.name}
			avatar={item.avatar}
			selected={item.id === props.interviewer}
			setInterviewer={() => props.onChange(item.id)}
		/>);

	return (
		<section className="interviewers">
			<h4 className="interviewers__header text--light">Interviewer</h4>
			<ul className="interviewers__list">
				{arrInterviewer}
			</ul>
		</section>
	);
}