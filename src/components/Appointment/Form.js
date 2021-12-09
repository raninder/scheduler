import React, { useState } from "react";
import Button from "components/Button";
import InterviewerList from "components/InterviewerList";

export default function Form(props) {
	const { interviewers } = props;
	const [student, setStudent] = useState(props.student || "");
	const [interviewer, setInterviewer] = useState(props.interviewer || null);

	const reset = () => {
		setStudent("");
		setInterviewer(null);
	}

	return (
		<main className="appointment__card appointment__card--create">
			<section className="appointment__card-left">
				<form autoComplete="off" onSubmit={event => event.preventDefault()}>
					<input
						className="appointment__create-input text--semi-bold"
						name="name"
						type="text"
						value={student}
						onChange={(event) => setStudent(event.target.value)}
						placeholder="Enter Student Name"
					/>
				</form>
				<InterviewerList
					interviewers={interviewers}
					interviewer={interviewer}
					onChange={setInterviewer}


				/>
			</section>
			<section className="appointment__card-right">
				<section className="appointment__actions">
					<Button danger onClick={reset}>Cancel</Button>
					<Button confirm onClick={props.onSave}>Save</Button>
				</section>
			</section>
		</main>
	);
}