import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";


export default function DayListItem(props) {
  const {name, spots, selected, setDay} = props;

  const formatSpots = () => {
    let text = "";
    if (spots === 0){
      text = "no spots remaining";
    }
    else if (spots === 1) {
      text = "1 spot remaining";
    }
    else {
      text = spots + " spots remaining";
    }
    return text;
  }
  
  const dayListItemClass = classNames(
    'day-list__item',
    {'day-list__item--selected': selected,
    'day-list__item--full': !spots}
    );

  return (
    <li className={dayListItemClass} onClick={() => setDay(name)}>
      <h2 className='text--regular'>{name}</h2>
      <h3 className='text--light'>{formatSpots()}</h3>
    </li>
  );
} 