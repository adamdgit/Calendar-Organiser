import { useEffect } from "react"
import styles from "../styles.module.css"

export default function UpdateMessage(props: 
  {message: string, needsUpdate: boolean, setNeedsUpdate: (args: boolean) => void}) {

  useEffect(() => {
    setTimeout(() => {
      props.setNeedsUpdate(false)
    }, 2500)
  }, [props.needsUpdate])

  return (
    <div 
      className={styles.updateMessage} 
      style={props.needsUpdate ? {opacity: '1', bottom: '20px'} : {}}>
      {props.message}
    </div>
  )
}
