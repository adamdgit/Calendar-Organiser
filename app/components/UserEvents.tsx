'use client'

import { useEffect, useState } from "react";
import styles from '../styles.module.css'
import { calendarEventProps } from "./App";
import EventItem from "./EventItem";

type lsItemsProps = {
  eventItems: calendarEventProps[],
  setEventItems: (args: calendarEventProps[]) => void
}

export default function UserEvents({ eventItems, setEventItems } : lsItemsProps) {
  
  const [months, setMonths] = useState<string[]>([])

  useEffect(() => {

    // Store months which have events to show/hide related events
    let tempMonths:string[] = [];
    eventItems.map(item => {
     tempMonths.push(new Date(item.date).toLocaleString('en-au', {month: 'long'}))
    });
    // remove duplicates using set and spread operator
    setMonths([...new Set(tempMonths)]);

  }, [eventItems])

  return (
    <div className={styles.lsItemsWrap}>
    {
      months.map(month => (
        <div key={month} className={styles.monthEventWrap}>
          <h3>{month}</h3>
          {
            eventItems?.sort((a, b) => Date.parse(a.date) - Date.parse(b.date))
            .map((item, i) => 
              new Date(item.date).toLocaleString('en-au', {month: 'long'}) === month ? 
                <EventItem 
                  key={i} 
                  item={item} 
                  setEventItems={setEventItems} 
                />
              : null
            )
          }
        </div>
      ))
    }
    </div>
  )
}
