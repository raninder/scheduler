import { useState } from "react"

export default function useVisualMode(initial) {
	const [history, setHistory] = useState([initial]);

	const transition = function (newmode, replace) {
		if (replace) {
		//to avoid stale state, instead of [...history.pop()];
		return setHistory(prev => [mode, ...prev.slice(1)]);
		}
		return setHistory(prev => [mode, ...prev]);
		
	}
	const back = function () {
		if (history.length < 2) {
			return;
		}
		// const newHistory = [...history];
		// newHistory.pop();
		// setHistory(newHistory);
		return setHistory(prev => [...prev.slice(1)]);
	}
	const mode = history[history.length - 1];
	return (
		{ mode, transition, back }
	);
}