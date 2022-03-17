

export function getAppointmentsForDay(state, day) {
 let theDay; 
 let apps = [];
 for (let i of state.days) {
  if (i.name === day) {
    theDay = i;
  }
 }
 if (!theDay){
   return [];
 }
 for (let x of Object.entries(state.appointments)) {
   if (theDay.appointments.includes(x[1].id)){
      apps.push(x[1]);
   }
 }
  return apps;


}

export function getInterview(state, interview) {
  if (!interview) return null;
  const { student, interviewer } = interview;
  return {
    student,
    interviewer: state.interviewers[interviewer],
  };
}

export function getInterviewersForDay(state, day) {
  const apps = state.days.filter((oneDay) => oneDay.name === day);
 
  let dayInterviewers = [];
  if (apps[0] && apps[0].appointments) {
    dayInterviewers = apps[0].appointments;
  }

  return dayInterviewers.map((id) => state.interviewers[id]);
}
