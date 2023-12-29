import React from "react"
import styles from "./Hero.module.css"
import HeroIcon from "../assets/vibrating-headphone.png"
export default function Hero() {
    return (
        <div className={styles.heroSection}>
            <div className={styles.heroText}>
                <h3>100 Thousand Songs, ad-free</h3>
                <h3>Over thousands podcast episodes</h3>
            </div>
            <div className={styles.heroImage}>
                <img src={HeroIcon} />
            </div>
        </div>
    )
}