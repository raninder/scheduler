import React, { Fragment } from "react";
import "components/Appointment/styles.scss";
import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";
import Form from "components/Appointment/Form";
import useVisualMode from "hooks/useVisualMode";

export default function Appointment(props) {

	const EMPTY = "EMPTY";
	const SHOW = "SHOW";
	const CREATE = "CREATE";

	const { mode, transition, back } = useVisualMode(
		props.interview ? SHOW : EMPTY
	);

	return (
		<Fragment>
			<Header time={props.time} />
			<article className="appointment">
				{mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
				{mode === SHOW && (
					<Show
						student={props.interview.student}
						interviewer={props.interview.interviewer.name}
					/>
				)}

				{/* {props.interview ? <Show
					student={props.interview.student} interviewer={props.interview.interviewer.name} />
					: <Empty />} */}
				{mode === CREATE &&
					<Form onCancel={() => back()}
						interviewers={props.interviewers}
					/>
				}

			</article>
		</Fragment>
	);
}