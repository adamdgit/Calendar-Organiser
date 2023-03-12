'use client'

import { useSession } from 'next-auth/react'
import { useState } from 'react';
import Calendar from './components/Calendar';
import EventPopup from './components/eventPopup';
import UserEvents from './components/UserEvents';
import styles from './styles.module.css'

export default function Home() {

  const session = useSession();
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [popupIsVisible, setPopupIsVisible] = useState<boolean>(false);
  const [lsItems, setLsItems] = useState<[]>([])

  console.log(session)

  if (session.status === 'authenticated') {
    return (
      <div className="App">
        <EventPopup 
          popupIsVisible={popupIsVisible} 
          setPopupIsVisible={setPopupIsVisible}
          selectedDate={selectedDate}
          setLsItems={setLsItems}
        />

        <div className="left">
          <h1>Your saved events:</h1>
          <UserEvents 
            setLsItems={setLsItems}
            lsItems={lsItems}
          />
        </div>

        <div className="right">
          <h2>Select a day to add events</h2>
          <Calendar 
            setPopupIsVisible={setPopupIsVisible}
            setSelectedDate={setSelectedDate}
            lsItems={lsItems}
          />
        </div>
    </div>
    )
  } else {
    return (
      <div>
        <p>Login to see your data.</p>
      </div>
    )
  }
}
