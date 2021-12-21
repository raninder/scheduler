import { useState, useEffect } from "react";
import { setSpots } from "helpers/selectors.js";
import axios from "axios"

export default function useApplicationData(initial) {
	// useState for changes to be reflected in DOM
	const [state, setState] = useState({
		day: "Monday",
		days: [],
		appointments: {},
		interviewers: {}
	});

	const setDay = day => setState({ ...state, day });

	// carries out an effect each time there is a state change
	useEffect(() => {
		Promise.all([
			axios.get('api/days'),
			axios.get('api/appointments'),
			axios.get('api/interviewers')
		])
			.then((all) => {
				console.log("all", all);
				// previously setDays now changed to setSate  setDays([...response.data])
				setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));

			});
		//React useEffect only once
	}, []);

	
	function bookInterview(id, interview) {
		const appointment = {
			...state.appointments[id],
			interview: { ...interview }
		};
		const appointments = {
			...state.appointments,
			[id]: appointment
		};

		//update state with new appointment and spots
		return axios.put(`/api/appointments/${id}`, { interview })
			.then((response) => {
				setState(prev => ({ ...prev, appointments }));
        setState(prev => ({ ...prev, days: setSpots(prev) }));
      })
	}

	function cancelInterview(id) {
		const appointment = {
			...state.appointments[id],
			interview: null,
		};
		const appointments = {
			...state.appointments,
			[id]: appointment,
		};

		return axios.delete(`/api/appointments/${id}`, appointment)
			.then((response) => {
				const days = state.days.map(day => {
					if (day.appointments.indexOf(id) > -1) {
						day.spots = day.spots + 1;
					}
					return day;
				})
			
				setState(prev => ({ ...prev, appointments, days }));
				
			})

	}
	//return custom hook data to be used in Application component
	return (
		{ state, setDay, bookInterview, cancelInterview }
	);
}