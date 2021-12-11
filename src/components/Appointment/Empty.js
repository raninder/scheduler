import React from "react";
//import useVisualMode from "hooks/useVisualMode";

export default function Empty(props) {
	// const CREATE = "CREATE";
	// const EMPTY = "EMPTY";
	// const { mode, transition, back } = useVisualMode(EMPTY);

	return (
		<main className="appointment__add">
			<img
				className="appointment__add-button"
				src="images/add.png"
				alt="Add"
				onClick={props.onAdd}
			/>
		</main>
	);
}