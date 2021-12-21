// get Appointments for day
export const getAppointmentsForDay = (state, day) => {
  const result = [];
  const filteredDay = state.days.filter(item => item.name === day);
  if (!filteredDay[0]) {
    return [];
  }
  filteredDay[0].appointments.forEach(id => {
    result.push(state.appointments[id])
  });

  return result;
}

//get interview information if its not null 
export const getInterview = (state, interview) => {
  let newObj = {};
  if (interview == null) {
    return null;
  }
  newObj["student"] = interview.student;
  for (let key in state.interviewers) {
    if (state.interviewers[key].id === interview.interviewer) {
      newObj["interviewer"] = state.interviewers[key];
    }
  }
  return newObj;
}

//get Interviewers for each day
export const getInterviewersForDay = (state, day) => {
  const result = [];
  const filteredDay = state.days.filter(item => item.name === day);
  if (!filteredDay[0]) {
    return [];
  }
  filteredDay[0].interviewers.forEach(id => {
    result.push(state.interviewers[id]);
  });
  return result;
}

export const setSpots = prev => {
  const days = prev.days.map(day => {
    const spots = day.appointments.filter(appId => {
      return prev.appointments[appId].interview === null;
    });
    // set spots with new spots remaining
    day.spots = spots.length;
    return day;
  });
  return days;
};