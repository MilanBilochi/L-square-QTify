import React from "react"
import styles from "./Logo.module.css"
import LogoIcon from "../assets/logo.png"
export default function Logo() {
    return (
        <div className={styles.logo}>
            <img src={LogoIcon} width={67}/>
        </div>
    )
}