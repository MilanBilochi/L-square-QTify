import React from "react"
import styles from "./Button.module.css"

export default function Button({ buttonText }) {
    return (
        <div >
            <button className={styles.button}>
                {buttonText}
            </button>
        </div>
    )
}