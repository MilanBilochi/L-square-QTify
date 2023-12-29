import React from "react"
import { ReactComponent as SearchIcon } from "../assets/Search-icon.svg"
import styles from "./Search.module.css"

export default function Search() {
    const onSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <form onSubmit={onSubmit} className={styles.wrapper}>
                <input className={styles.search} placeholder="Search a song of your choice" />
                <button className={styles.searchButton}>
                    <SearchIcon />
                </button>
            </form>
        </>
    )
}