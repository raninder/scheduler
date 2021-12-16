import { useState } from "react"

export default function useVisualMode(initial) {
	const [history, setHistory] = useState([initial]);

	const transition = function (newmode, replace) {
		if (replace) {

			//to avoid stale state, instead of [...history.pop()];
			return setHistory(prev => [newmode, ...prev.slice(1)]);
		}

		return setHistory(prev => [newmode, ...prev]);

	}
	const back = function () {
		if (history.length < 2) {
			return;
		}
		return setHistory(prev => [...prev.slice(1)]);
	}

	const mode = history[0];

	//return custom hook state
	return (
		{ mode, transition, back }
	);
}