import React from "react"
import styles from "./Header.module.css"
import Search from "./Search"
import Button from "./Button"
export default function Header() {
    return (
        <>
          <div className={styles.header}>
            <div className={styles.logo}>
              <div><h1>Q<span>Tify</span></h1></div>
            </div>
            <Search />
            <Button buttonText="Give Feedback"/>
          </div>
        </>
    )
}