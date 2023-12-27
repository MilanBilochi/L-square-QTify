import React from "react"
import styles from "./Button.module.css"

export default function Button() {
    return (
        <div >
            <button className={styles.button}>
                Give Feedback
            </button>
        </div>
    )
}