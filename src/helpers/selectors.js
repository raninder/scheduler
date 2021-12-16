// get Appointments for day
export function getAppointmentsForDay(state, day) {
  const result = [];
  const filteredDay = state.days.filter(item => item.name === day);
  if (filteredDay[0]) {
    filteredDay[0].appointments.map(id => {
      result.push(state.appointments[id])
    });
  }
  return result;
}

//get interview information if its not null 
export function getInterview(state, interview) {
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
export function getInterviewersForDay(state, day) {
  const result = [];
  const filteredDay = state.days.filter(item => item.name === day);
  if (filteredDay[0]) {
    filteredDay[0].interviewers.map(id => {
      result.push(state.interviewers[id])
    });
  }
  return result;
}