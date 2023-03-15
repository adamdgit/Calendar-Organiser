'use client'

import { useSession } from "next-auth/react"
import { useState } from "react"
import styles from '../styles.module.css'
import { calendarEventProps } from "./App"

type eventPopupProps = {
  popupIsVisible: boolean,
  setPopupIsVisible: (args: boolean) => void,
  selectedDate: Date,
  setLsItems: (args: calendarEventProps[]) => void
}

export default function EventPopup({ popupIsVisible, setPopupIsVisible, selectedDate, setLsItems } 
  : eventPopupProps ) {

  const session = useSession();
  const [description, setDescription] = useState<string>('')

  async function insertEventToDatabase() {
    const res = await fetch("/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ 
        email: session.data.user.email, 
        date: selectedDate,
        description: description
      })
    });

    const data = await res.json();
    console.log(data);
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
