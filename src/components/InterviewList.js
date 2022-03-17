import React from "react";
// STYLES
import "components/InterviewList.scss";
// COMPONENTS
import InterviewerListItem from "./InterviewerListItem";
// Prop typeof check
import PropTypes from "prop-types";

// displays available interviewers on the Form component
export default function InterviewerList(props) {
  const {interviewers} = props;
  
  
  const InterviewListItems = interviewers.map(interviewer => 

    <InterviewerListItem
    key={interviewer.id}
    name={interviewer.name}
    avatar={interviewer.avatar}
    setInterviewer={() => props.onChange(interviewer.id)}
    selected={interviewer.id === props.value}
  />
  );

return(

<section className="interviewers">
  <h4 className="interviewers__header text--light">Interviewer</h4>
  <ul className="interviewers__list">{InterviewListItems}</ul>
</section>
);
}
InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
};