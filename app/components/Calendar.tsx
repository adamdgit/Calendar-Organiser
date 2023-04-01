'use client'

import { useRef, useEffect, useState } from 'react'
import { calcCalendarDays } from "../utils/calcDays"
import DayOption from './DayOption'
import styles from '../styles.module.css'

// create dynamic dates based on current year forward
const yearData:Number[] = []
yearData.push(Number(new Date().getFullYear()))
for (let i=1; i<20; i++) {
  yearData.push(Number(yearData[0]) +i)
}  

const monthData = [
  "January", "February", "March", "April", 
  "May", "June", "July", "August", "September",
  "October", "November", "December"
]

type calendarProps = {
  setPopupIsVisible: (args: boolean) => void,
  setSelectedDate: (args: string) => void,
  eventItems: []
}

export default function Calendar(
  { setPopupIsVisible, setSelectedDate, eventItems }: calendarProps) {

  const monthSelect = useRef<HTMLSelectElement>(null);
  const yearSelect = useRef<HTMLSelectElement>(null);
  const [calendarData, setCalendarData] = useState<Date[]>([])

  // on mount render current month days
  useEffect(() => {
    // set current month 
    setCalendarData(calcCalendarDays(monthSelect.current!.value, yearSelect.current!.value));
  }, [])

  function showHideCalendarMonths() {
    // on change year or month gets updated
    // need to render new calendar by adding new days to calendar data state
    setCalendarData(calcCalendarDays(monthSelect.current!.value, yearSelect.current!.value))
  }

  return (
    <div className={styles.datepickerContainer} id="datepicker-container">
      <div className={styles.datepickerCalendar}>
        <div className={styles.datepickerHeader}>

          <div className={styles.datepickerDates}>
            <span className={styles.pickYear}>Year: 
              <select ref={yearSelect} onChange={() => showHideCalendarMonths()}>
                {
                  yearData.map(year => (
                    <option 
                      key={year.toString()} 
                      value={year.toString()}>
                      {year.toString()}
                    </option>
                  ))
                }
              </select>
            </span>
            <span className={styles.pickMonth}>Month: 
              <select 
                ref={monthSelect} 
                defaultValue={new Date().getMonth()} 
                onChange={() => showHideCalendarMonths()}>
                {
                  monthData.map((month, i) => (
                    <option
                      key={month} 
                      value={i}>
                      {month}
                    </option>
                  ))
                }
              </select>
            </span>
          </div>

          <div className={styles.datepickerDaysRow}>
            <div className="day">Mon</div>
            <div className="day">Tue</div>
            <div className="day">Wed</div>
            <div className="day">Thu</div>
            <div className="day">Fri</div>
            <div className="day">Sat</div>
            <div className="day">Sun</div>
          </div>
        </div>

        <div className={styles.datepickerBody}>
          <div className={styles.monthWrap} data-month={monthSelect.current?.value} data-year={yearSelect.current?.value} >
          {
            calendarData.map((day, i) => (
              <DayOption 
                key={i}
                monthSelect={monthSelect.current}
                setPopupIsVisible={setPopupIsVisible}
                setSelectedDate={setSelectedDate}
                day={day}
                eventItems={eventItems}
              />
            ))
          }
          </div>
        </div>
      </div>
    </div>
  )
}
