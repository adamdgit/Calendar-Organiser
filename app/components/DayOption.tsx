'use client'

import { useMemo, useState } from "react";
import styles from '../styles.module.css'
import { calendarEventProps } from "./App";

type dayOptionProps = {
  day: Date,
  monthSelect: any,
  setPopupIsVisible: (args: boolean) => void,
  setSelectedDate: (args: string) => void,
  eventItems: calendarEventProps[]
}

export default function DayOption(
  { day, monthSelect, setPopupIsVisible, setSelectedDate, eventItems } 
  : dayOptionProps) {

  // number of events for this day 
  const [numEvents, setNumEvents] = useState<number>()

  function handlePopup(e: any) {
    setPopupIsVisible(true);
    setSelectedDate(e.target.value)
  }

  useMemo(() => {
    // calculate number of items for each day
    let count = 0
    eventItems.map(item => {
      if (new Date(item.date).toLocaleString('en-au') === new Date(day).toLocaleString('en-au')) {
        count += 1
      }
    })
    setNumEvents(count)
  },[eventItems, day])

  return (
    <div style={{position: 'relative'}}>
      <div 
        className={styles.eventNumber} 
        style={numEvents === 0 ? {} : {display: 'flex'}}>
        {numEvents === 0 ? null : numEvents}
      </div>
      <button
        onClick={(e) => handlePopup(e)}
        className={
          day.toLocaleString('en-us', { day: '2-digit', month: '2-digit', year: 'numeric' }) === new Date().toLocaleString('en-us', { day: '2-digit', month: '2-digit', year: 'numeric' }) ? `${styles.date} ${styles.today}`
        : day.getMonth() === Number(monthSelect.value) ? styles.date
        : `${styles.date} ${styles.notCurrentMonth}`
        } 
        value={day.toLocaleString('en-us', { day: '2-digit', month: '2-digit', year: 'numeric' })}>
        {day.toLocaleString('en-us', { day: 'numeric' })}
      </button>
    </div>
  )
}
