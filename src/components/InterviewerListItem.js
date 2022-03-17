import React from "react";
// HELPERS
import classNames from "classnames";
// STYLE
import "components/InterviewerListItem.scss";

// used by InterviewList to render and handle individual interviewer items
export default function InterviewerListItem(props) {

  const interviewListItemClass = classNames(
    'interviewers__item-image',
    {'interviewers__item--selected': props.selected}
    );

  return (
 <li className={interviewListItemClass} onClick={props.setInterviewer}>
    <img
      className="interviewers__item-image"
      src={props.avatar}
      alt={props.name}
    />
    {props.selected && props.name}
  </li>
  )
}