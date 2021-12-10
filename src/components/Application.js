import React, { useState, useEffect } from "react";
import axios from "axios"
import DayList from "components/DayList";
import Appointment from "components/Appointment";
import "components/Application.scss";
import { getAppointmentsForDay } from "helpers/selectors.js";
import { getInterview } from "helpers/selectors.js";


export default function Application(props) {
  // const [day, setDay] = useState("Monday");
  // const [days, setDays] = useState([]);
  // const [appointments, setAppointments] = useState({})

  //all three above useStates together 
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => setState({ ...state, day });
  //   const setDays = (days) => {
  //     //setState({ ...state, days });
  //     setState(prev => ({ ...prev, days }));
  // }

  useEffect(() => {
    Promise.all([
      axios.get('api/days'),
      axios.get('api/appointments'),
      axios.get('api/interviewers')
    ])
      .then((all) => {
        console.log(all);
        // previously setDays now changed to setSate  setDays([...response.data])
        setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));

      });
  }, []);
  const dailyAppointments = getAppointmentsForDay(state, state.day);
  console.log("daily", dailyAppointments);
  const arrAppointment = dailyAppointments.map((appointment) => {
    const interview = getInterview(state, appointment.interview);
    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        // interview={appointment.interview}
        interview={interview}
      />)
  });
  // <Appointment key={appointment.id} {...appointment} />);



  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={state.days}
            value={state.day}
            onChange={setDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        <li> {arrAppointment}
          <Appointment key="last" time="5pm" /></li>
      </section>
    </main>
  );
}
