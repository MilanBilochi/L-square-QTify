import React, { useEffect } from "react"
import styles from "./Carousel.module.css"
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import AlbumCard from "./AlbumCard";
import { Navigation } from 'swiper/modules';
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";

    

export default function Carousel({ data }) {
    // const swiper = useSwiper();
    //     useEffect(() => {
    //     swiper.slideTo(0);
    // }, [])

    return (
        <div className={styles.wrapper}>

            <Swiper
                style={{ padding: "0px 20px" }}
                initialSlide={0}
                spaceBetween={40}
                modules={[Navigation]}
                slidesPerView={"auto"}
                allowTouchMove
            >
                {/* <Controller data={data} /> */}
                <CarouselLeftNavigation />
                <CarouselRightNavigation />
                {data.map((val) => {
                    return (
                        <SwiperSlide key={val.id}><AlbumCard img={val.image} followers={val.follows} name={val.title} liking={val.likes} songs={val.songs}/></SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}