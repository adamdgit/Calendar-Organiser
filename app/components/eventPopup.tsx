'use client'

import { useSession } from "next-auth/react"
import { useState } from "react"
import styles from '../styles.module.css'
import { calendarEventProps } from "./App"

type eventPopupProps = {
  popupIsVisible: boolean,
  setPopupIsVisible: (args: boolean) => void,
  selectedDate: string,
  setEventItems: (args: calendarEventProps[]) => void,
  setUpdateMsg: (args: string) => void,
  setNeedsUpdate: (args: boolean) => void
}

export default function EventPopup(
  { popupIsVisible, setPopupIsVisible, selectedDate, setEventItems, setUpdateMsg, setNeedsUpdate } 
  : eventPopupProps ) {

  const session = useSession();
  const [description, setDescription] = useState<string>('')

  async function insertEventToDatabase() {
    await fetch("/api/createevent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ 
        email: session?.data?.user?.email, 
        date: new Date(selectedDate),
        description: description
      })
    })
    .then(res => res.json())
    .then(data => setEventItems(data.events))
    .catch(err => console.error(err))

    setNeedsUpdate(true);
    setUpdateMsg(`Event for: ${selectedDate} added`);
    setPopupIsVisible(false);
  };
  
  return (
    <div className={styles.popup} style={popupIsVisible ? {opacity: '1', pointerEvents: 'all'} : {opacity: '0', pointerEvents: 'none'}}>
      <button className={styles.closePopup} onClick={() => setPopupIsVisible(false)}>
        <svg xmlns="http://www.w3.org/2000/svg" width={"20px"} height={"20px"} viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>
      </button>
      <div className={styles.heading}>Selected date: {selectedDate}</div>
      <p>Add event info:</p>
      <textarea onChange={(e) => setDescription(e.target.value)}></textarea>
      <button className={styles.submitBtn} onClick={() => insertEventToDatabase()}>Create event</button>
    </div>
  )
};
