import { useState } from "react"

export default function useVisualMode(initial) {
	const [history, setHistory] = useState([initial]);

	const transition = function (newmode, replace) {
		const newHistory = [...history];
		if (replace) {
			newHistory.pop();
		}
		setHistory([...newHistory, newmode]);
		
	}
	const back = function () {
		if (history.length < 2) {
			return;
		}
		const newHistory = [...history];
		newHistory.pop();
		setHistory(newHistory);
	}
	const mode = history[history.length - 1];
	return (
		{ mode, transition, back }
	);
}