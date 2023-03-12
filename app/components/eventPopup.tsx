'use client'

import { useState } from "react"
import styles from '../styles.module.css'

type eventPopupProps = {
  popupIsVisible: boolean,
  setPopupIsVisible: (args: boolean) => void,
  selectedDate: Date,
  setLsItems: (args: []) => void
}

export default function eventPopup({ popupIsVisible, setPopupIsVisible, selectedDate, setLsItems } 
  : eventPopupProps ) {
  
  const [description, setDescription] = useState<string>('')

  function insertEventToDatabase() {
    // create new event inside database
  };
  
  return (
    <div className={styles.popup} style={popupIsVisible ? {opacity: '1', pointerEvents: 'all'} : {opacity: '0', pointerEvents: 'none'}}>
      <span className={styles.heading}>Selected: {selectedDate}</span>
      <p>Add event info:</p>
      <textarea onChange={(e) => setDescription(e.target.value)}></textarea>
      <button onClick={() => insertEventToDatabase()}>Create event</button>
    </div>
  )
};
