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

export function getInterview(state, interview) {
  let newObj = {};
  if (interview !== null) {
    newObj["student"] = interview.student;
    for (let key in state.interviewers) {
      if (key == interview.interviewer) {
        newObj["interviewer"] = state.interviewers[key];
      }
    }
    return newObj;
  }
  else {
    return null;
  }
}

export function getInterviewersForDay(state, day) {
  const result = [];
  const filteredDay= state.days.filter(item => item.name === day);
  if (filteredDay[0]) {
    filteredDay[0].interviewers.map(id => {
      result.push(state.interviewers[id])
    });
  }
  return result;
}