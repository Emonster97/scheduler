import React from "react";
// COMPONENTS
import DayListItem from "./DayListItem";

// renders list of days for selection
export default function DayList(props) {
  const {days} = props;
  const DayListItems = days.map(item => 

     <DayListItem
  key={item.id} 
  name={item.name} 
  spots={item.spots} 
  selected={item.name === props.value}
  setDay={props.onChange}
 />
    );
  return (
  <ul>
    {DayListItems}
  </ul>
  );
}