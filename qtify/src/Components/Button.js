import React from "react"
import styles from "./Button.module.css"

export default function Button({ buttonText, setButtonText,setIsCollapsed, comingFrom}) {
    const handleClick = (text) => {
        if(comingFrom == "newAlbum") {
            console.log('coming here ?')
            if(text == "Collapse") {
                setButtonText("Show All")
                setIsCollapsed(false)
            } else {
                setButtonText("Collapse")
                setIsCollapsed(true)
            }
        } else if(comingFrom == "topAlbum"){
            if(text == "Collapse") {
                setButtonText("Show All")
                setIsCollapsed(false)
            } else {
                setButtonText("Collapse")
                setIsCollapsed(true)
            }
        }
    }
    return (
        <div >
            <button className={styles.button} onClick={() => {
                handleClick(buttonText)
            }}>
                {buttonText}
            </button>
        </div>
    )
}