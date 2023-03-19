'use client'

import React, { useState } from 'react'
import Calendar from './Calendar';
import EventPopup from './EventPopup';
import UserEvents from './UserEvents';
import styles from '../styles.module.css'
import UpdateMessage from './UpdateMessage';

export type calendarEventProps = {
  id: string,
  date: string,
  description: string,
  authorEmail: string
}

export default function App({ events }:calendarEventProps[]) {

  const [selectedDate, setSelectedDate] = useState<Date>();
  const [popupIsVisible, setPopupIsVisible] = useState<boolean>(false);
  const [eventItems, setEventItems] = useState<calendarEventProps[]>(events)
  const [updateMsg, setUpdateMsg] = useState("")
  const [needsUpdate, setNeedsUpdate] = useState(false)

  return (
    <div className={styles.App}>
      <EventPopup 
        popupIsVisible={popupIsVisible} 
        setPopupIsVisible={setPopupIsVisible}
        selectedDate={selectedDate}
        setEventItems={setEventItems}
      />

      <div className={styles.left}>
        <h1>Your saved events:</h1>
        <UserEvents 
          setEventItems={setEventItems}
          eventItems={eventItems}
        />
      </div>

      <div className={styles.right}>
        <h2>Select a day to add events</h2>
        <Calendar 
          setPopupIsVisible={setPopupIsVisible}
          setSelectedDate={setSelectedDate}
          eventItems={eventItems}
        />
      </div>
      <UpdateMessage 
        message={updateMsg} 
        needsUpdate={needsUpdate} 
        setNeedsUpdate={setNeedsUpdate}
      />
    </div>
  )
}
