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

type calendarProps = {
  setPopupIsVisible: (args: boolean) => void,
  setSelectedDate: (args: string) => void,
  eventItems: []
}

export default function Calendar(
  { setPopupIsVisible, setSelectedDate, eventItems }: calendarProps) {

  const monthSelect = useRef();
  const yearSelect = useRef();
  const calendarBody = useRef();
  const [calendarData, setCalendarData] = useState<Date[]>([])

  // on mount render current month days
  useEffect(() => {
    // set current month 
    monthSelect.current.value = new Date().getMonth();
    setCalendarData(calcCalendarDays(monthSelect.current!, yearSelect.current!));
  }, [])

  function showHideCalendarMonths() {
    console.log(monthSelect)
    // on change year or month gets updated
    // need to render new calendar by adding new days to calendar data state
    setCalendarData(calcCalendarDays(monthSelect.current!, yearSelect.current!))
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
              <select ref={monthSelect} onChange={() => showHideCalendarMonths()}>
                <option value="0">January</option>
                <option value="1">February</option>
                <option value="2">March</option>
                <option value="3">April</option>
                <option value="4">May</option>
                <option value="5">June</option>
                <option value="6">July</option>
                <option value="7">August</option>
                <option value="8">September</option>
                <option value="9">October</option>
                <option value="10">November</option>
                <option value="11">December</option>
              </select>
            </span>
          </div>

          <div className={styles.datepickerDaysRow}>
            <div className="day">Monday</div>
            <div className="day">Tuesday</div>
            <div className="day">Wednesday</div>
            <div className="day">Thursday</div>
            <div className="day">Friday</div>
            <div className="day">Saturday</div>
            <div className="day">Sunday</div>
          </div>
        </div>

        <div ref={calendarBody} className={styles.datepickerBody}>
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
