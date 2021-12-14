import React, { Fragment } from "react";
import "components/Appointment/styles.scss";
import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";
import Form from "components/Appointment/Form";
import Confirm from "components/Appointment/Confirm";
import Status from "components/Appointment/Status";
import Error from "components/Appointment/Error";
import useVisualMode from "hooks/useVisualMode";

export default function Appointment(props) {

	const EMPTY = "EMPTY";
	const SHOW = "SHOW";
	const CREATE = "CREATE";
	const DELETE = "DELETE";
	const CONFIRM = "CONFIRM";
	const EDIT = "EDIT";
	const SAVING = "SAVE";
	const ERROR_SAVE = "ERROR_SAVE";
	const ERROR_DELETE = "ERROR_DELETE";
	const { mode, transition, back } = useVisualMode(
		props.interview ? SHOW : EMPTY
	);
	//console.log("propprop", props);

	function save(name, interviewer) {
		const interview = {
			student: name,
			interviewer
		};
		transition(SAVING);
		console.log("props.bookInterview", props.id, interview.interviewer);
		props.bookInterview(props.id, interview)
			.then((res) =>
				transition(SHOW))
			.catch((err) =>
				//replace the SAVING mode in the history so when we swicth to Form after Error 
				transition(ERROR_SAVE, true));

	}

	function onDelete() {
		transition(DELETE, true);
		props.cancelInterview(props.id)
			.then((res) =>
				transition(EMPTY))
			.catch((err) =>
				transition(ERROR_DELETE, true));
	}

	return (
		<Fragment>
			<Header time={props.time} />
			<article className="appointment">
				{mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
				{mode === SAVING && <Status />}
				{mode === DELETE && <Status message={"Deleting.."} />}
				{mode === ERROR_DELETE && <Error onClose={() => back()} message={"could not delete appointment"} />}
				{mode === ERROR_SAVE && <Error onClose={() => back()} message={"Could not save"} />}

				{mode === SHOW && (
					<Show
						student={props.interview.student}
						interviewer={props.interview.interviewer.name}
						onDelete={() => transition(CONFIRM)}
						onEdit={() => transition(EDIT)}

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
				{mode === CONFIRM && (
					<Confirm message={"Sure to delete"} onCancel={() => back()} onConfirm={onDelete} />
				)}
				{mode === EDIT &&
					<Form onCancel={() => back()}
						onSave={save}
						student={props.interview.student}
						interviewer={props.interview.interviewer}
						interviewers={props.interviewers}
					/>
				}


			</article>
		</Fragment>
	);
}