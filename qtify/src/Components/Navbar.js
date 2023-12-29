import React from "react"
import styles from "./Navbar.module.css"
import Search from "./Search"
import Button from "./Button"
import Logo from "./Logo"

export default function Navbar() {
    return (
        <>
          <div className={styles.header}>
            <Logo />
            <Search />
            <Button buttonText="Give Feedback"/>
          </div>
        </>
    )
}