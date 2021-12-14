import React, { Fragment } from "react";
import "components/Appointment/styles.scss";
import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";
import Form from "components/Appointment/Form";
import Status from "components/Appointment/Status";
import useVisualMode from "hooks/useVisualMode";

export default function Appointment(props) {

	const EMPTY = "EMPTY";
	const SHOW = "SHOW";
	const CREATE = "CREATE";
	const SAVING = "SAVING";
	const { mode, transition, back } = useVisualMode(
		props.interview ? SHOW : EMPTY
	);

	function save(name, interviewer) {
		const interview = {
			student: name,
			interviewer
		};
		transition(SAVING);

		props.bookInterview(props.id, interview)
			.then((res) =>
				transition(SHOW))

	}
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
						onSave={save}
						interviewers={props.interviewers}
					/>
				}

				{mode === SAVING && <Status />}

			</article>
		</Fragment>
	);
}