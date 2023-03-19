import styles from "../styles.module.css"

export default function Tooltip( props: { message:string, name:string }) {
  return (
    <div className={props.name === "edit" ? styles.editTooltip 
    : props.name === "remove" ? styles.removeTooltip : ""}>
      <div className={styles.upArrow}></div>
      {props.message}
    </div>
  )
}
