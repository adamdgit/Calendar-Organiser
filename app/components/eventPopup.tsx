'use client'

import { useState } from "react"

type eventPopupProps = {
  popupIsVisible: boolean,
  setPopupIsVisible: (args: boolean) => void,
  selectedDate: Date,
  setLsItems: (args: []) => void
}

export default function eventPopup(
  { popupIsVisible, setPopupIsVisible, selectedDate, setLsItems } : eventPopupProps ) {
  
  const [description, setDescription] = useState<string>('')

  function createNewLsItem() {
    // create new event inside database
  };
  
  return (
    <div className='popup' style={popupIsVisible ? {opacity: '1', pointerEvents: 'all'} : {opacity: '0', pointerEvents: 'none'}}>
      <span className="heading">Selected: {selectedDate}</span>
      <p>Add event info:</p>
      <textarea onChange={(e) => setDescription(e.target.value)}></textarea>
      <button onClick={() => createNewLsItem()}>Create reminder</button>
    </div>
  )
};
