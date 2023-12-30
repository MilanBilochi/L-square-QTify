import React, { useEffect, useState } from "react"
import styles from "./CarouselLeftNavigation.module.css"
import { useSwiper } from "swiper/react"
import { ReactComponent as LeftArrow } from "../../assets/LeftArrow.svg";

export default function CarouselLeftNavigation() {
    const swiper = useSwiper();
    const [isStart, setIsStart] = useState(swiper.isBeginning);

    useEffect(() => {
        console.log("is being called ?")
        swiper.on("slideChange", function() {
            setIsStart(swiper.isBeginning)
        })
    })
    return (
        <div className={styles.leftNavigation}>
            {!isStart && <LeftArrow onClick={() => swiper.slidePrev()}/>}
        </div>
    )
}