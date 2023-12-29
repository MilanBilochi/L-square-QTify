import React from "react"
import styles from "./Logo.module.css"
import { ReactComponent as LogoIcon } from "../assets/Search-icon.svg"
export default function Logo() {
    return (
        <div className={styles.logo}>
            <LogoIcon /><span><h1>QTify</h1></span>
        </div>
    )
}