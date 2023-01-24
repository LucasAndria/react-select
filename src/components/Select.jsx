import { useRef } from "react";
import styles from "../select.module.css";

export function Select({ value, onChange, options }) {
  const containerRef = useRef(null);

  return (
    <div tabIndex={0} className={styles.container}>
      <span className={styles.value}>{value.label}</span>
      <button className={styles["clear-btn"]}>&times;</button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <ul className={`${styles.options} ${styles.show}`}>
        {options.map((option, index) => (
          <li key={index} className={styles.option}>
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
